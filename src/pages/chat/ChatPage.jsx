import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  MessageSquare, 
  Send, 
  Image,
  ShoppingCart,
  Receipt,
  MoreVertical
} from 'lucide-react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../../contexts/AuthContext';
import { chatApi } from '../../services/api';
import { db, storage } from '../../config/firebase';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Avatar } from '../../components/ui/Avatar';
import { PageLoader } from '../../components/ui/Spinner';
import Button from '../../components/ui/Button';
import { formatChatTime, cn } from '../../utils/helpers';
import toast from 'react-hot-toast';

export default function ChatPage() {
  const { userData, user } = useAuth();
  const queryClient = useQueryClient();
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const houseId = userData?.houseId;

  // Real-time messages listener
  useEffect(() => {
    if (!houseId) return;

    const messagesRef = collection(db, 'houses', houseId, 'messages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(100));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .reverse();
      setMessages(newMessages);
      setLoading(false);
    }, (error) => {
      console.error('Chat error:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [houseId]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message mutation
  const sendMessageMutation = useMutation({
    mutationFn: (data) => chatApi.sendMessage(houseId, data),
    onError: (error) => {
      toast.error(error.message || 'Failed to send message');
    }
  });

  // Handle send message
  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    sendMessageMutation.mutate({ 
      text: message.trim(),
      type: 'text'
    });
    setMessage('');
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      const fileName = `chat/${houseId}/${Date.now()}_${file.name}`;
      const storageRef = ref(storage, fileName);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      sendMessageMutation.mutate({
        type: 'image',
        imageUrl: url
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  // Render message
  const renderMessage = (msg) => {
    const isOwn = msg.senderId === user?.uid;

    return (
      <div
        key={msg.id}
        className={cn(
          'flex gap-2 mb-4',
          isOwn ? 'flex-row-reverse' : ''
        )}
      >
        {!isOwn && (
          <Avatar name={msg.senderName} size="sm" className="flex-shrink-0" />
        )}
        <div className={cn(
          'max-w-[70%]',
          isOwn ? 'items-end' : 'items-start'
        )}>
          {!isOwn && (
            <p className="text-xs text-secondary-500 mb-1">{msg.senderName}</p>
          )}
          <div className={cn(
            'rounded-2xl px-4 py-2',
            isOwn 
              ? 'bg-primary-600 text-white rounded-br-none' 
              : 'bg-secondary-100 text-secondary-900 rounded-bl-none'
          )}>
            {msg.type === 'text' && (
              <p className="whitespace-pre-wrap break-words">{msg.text}</p>
            )}
            {msg.type === 'image' && (
              <img 
                src={msg.imageUrl} 
                alt="Shared image" 
                className="max-w-full rounded-lg"
              />
            )}
            {msg.type === 'order' && (
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span>Shared an order</span>
              </div>
            )}
            {msg.type === 'bill' && (
              <div className="flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                <span>Shared a bill</span>
              </div>
            )}
          </div>
          <p className={cn(
            'text-xs text-secondary-400 mt-1',
            isOwn ? 'text-right' : 'text-left'
          )}>
            {formatChatTime(msg.createdAt)}
          </p>
        </div>
      </div>
    );
  };

  if (!houseId) {
    return (
      <Layout>
        <Card>
          <CardContent className="py-12 text-center">
            <MessageSquare className="h-16 w-16 mx-auto mb-4 text-secondary-300" />
            <h3 className="text-lg font-medium text-secondary-900 mb-2">
              No House Chat Available
            </h3>
            <p className="text-secondary-500">
              You need to be part of a house to access the chat feature.
            </p>
          </CardContent>
        </Card>
      </Layout>
    );
  }

  return (
    <Layout>
      <Card className="h-[calc(100vh-140px)] flex flex-col">
        <CardHeader className="border-b border-secondary-200">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            House Chat
          </CardTitle>
        </CardHeader>
        
        {/* Messages */}
        <CardContent className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <PageLoader />
            </div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-secondary-500">
              <MessageSquare className="h-12 w-12 mb-3 opacity-50" />
              <p>No messages yet</p>
              <p className="text-sm">Start the conversation!</p>
            </div>
          ) : (
            <>
              {messages.map(renderMessage)}
              <div ref={messagesEndRef} />
            </>
          )}
        </CardContent>

        {/* Input */}
        <div className="p-4 border-t border-secondary-200">
          <form onSubmit={handleSend} className="flex gap-2">
            <label className="p-2 text-secondary-500 hover:text-secondary-700 cursor-pointer">
              <Image className="h-5 w-5" />
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload}
                disabled={uploading}
              />
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 input"
              disabled={sendMessageMutation.isPending}
            />
            <Button 
              type="submit" 
              disabled={!message.trim() || sendMessageMutation.isPending}
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </Card>
    </Layout>
  );
}
