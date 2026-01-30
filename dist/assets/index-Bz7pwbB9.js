const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-kH171dWl.js","assets/index.esm-nOunc93L.js","assets/types-2AX18-p6.js","assets/Button-DxGI9h4D.js","assets/Input-DkrhA-KG.js","assets/phone-CAzyxAd7.js","assets/lock-BQ76QzjE.js","assets/arrow-right-CQWQ3T2K.js","assets/RegisterPage-DTMQ5W-l.js","assets/user-BIVSRI51.js","assets/DashboardPage-CzjrY2bL.js","assets/Card-D8tmHTuL.js","assets/useQuery-BBL-UJvn.js","assets/api-Bp1mAEYF.js","assets/Badge-DsqiXPr3.js","assets/indian-rupee-CKO2li8T.js","assets/clock-A7at3eyY.js","assets/OrderPage-Dn5taA77.js","assets/useMutation-bJ9c7Hmc.js","assets/Modal-CfOO-JW_.js","assets/plus-D4MauG9m.js","assets/check-BZlzTsAS.js","assets/MyOrdersPage-CRKPeQim.js","assets/EmptyState-BtxfN_BO.js","assets/calendar-CsXTWoLB.js","assets/MyBillsPage-CjuyUOpO.js","assets/eye-Crd8dv1B.js","assets/ChatPage-CLc9sbpv.js","assets/image-Bp3tbxms.js","assets/AgencyHousesPage-B-XcBoIi.js","assets/search-o6vBxrYE.js","assets/square-pen-GRf-veb6.js","assets/trash-2-BcqysFBi.js","assets/AgencyMenuPage-DJ79D_id.js","assets/save-ZjkWYs49.js","assets/AgencyOrdersPage-BYO7v2MV.js","assets/AgencyBillsPage-DOIBXDEo.js","assets/AgencyPaymentsPage-Bpjh9RPL.js","assets/AgencySettingsPage-CqSA3kZo.js","assets/HouseMembersPage-MTPo03uB.js","assets/shield-CG60XL55.js","assets/HouseOrdersPage-DVOE5-jq.js","assets/HouseRequestsPage-CY6Y28sp.js","assets/HouseBillsPage-Cggoysui.js","assets/ProfilePage-B6sSCygc.js","assets/AdminAgenciesPage-C3oQJnfq.js"])))=>i.map(i=>d[i]);
var C_=n=>{throw TypeError(n)};var Lp=(n,e,t)=>e.has(n)||C_("Cannot "+t);var K=(n,e,t)=>(Lp(n,e,"read from private field"),t?t.call(n):e.get(n)),Me=(n,e,t)=>e.has(n)?C_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),Se=(n,e,t,r)=>(Lp(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),tn=(n,e,t)=>(Lp(n,e,"access private method"),t);var Rh=(n,e,t,r)=>({set _(s){Se(n,e,s,t)},get _(){return K(n,e,r)}});function SR(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in n)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(n,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function _0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vp={exports:{}},cu={},Fp={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function AR(){if(k_)return Ne;k_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(F){return F===null||typeof F!="object"?null:(F=w&&F[w]||F["@@iterator"],typeof F=="function"?F:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,N={};function C(F,X,ye){this.props=F,this.context=X,this.refs=N,this.updater=ye||k}C.prototype.isReactComponent={},C.prototype.setState=function(F,X){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,X,"setState")},C.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function H(){}H.prototype=C.prototype;function G(F,X,ye){this.props=F,this.context=X,this.refs=N,this.updater=ye||k}var q=G.prototype=new H;q.constructor=G,V(q,C.prototype),q.isPureReactComponent=!0;var J=Array.isArray,ne=Object.prototype.hasOwnProperty,he={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function S(F,X,ye){var Ce,be={},Le=null,ze=null;if(X!=null)for(Ce in X.ref!==void 0&&(ze=X.ref),X.key!==void 0&&(Le=""+X.key),X)ne.call(X,Ce)&&!O.hasOwnProperty(Ce)&&(be[Ce]=X[Ce]);var $e=arguments.length-2;if($e===1)be.children=ye;else if(1<$e){for(var Ye=Array($e),Lt=0;Lt<$e;Lt++)Ye[Lt]=arguments[Lt+2];be.children=Ye}if(F&&F.defaultProps)for(Ce in $e=F.defaultProps,$e)be[Ce]===void 0&&(be[Ce]=$e[Ce]);return{$$typeof:n,type:F,key:Le,ref:ze,props:be,_owner:he.current}}function A(F,X){return{$$typeof:n,type:F.type,key:X,ref:F.ref,props:F.props,_owner:F._owner}}function b(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function M(F){var X={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ye){return X[ye]})}var D=/\/+/g;function P(F,X){return typeof F=="object"&&F!==null&&F.key!=null?M(""+F.key):X.toString(36)}function Qe(F,X,ye,Ce,be){var Le=typeof F;(Le==="undefined"||Le==="boolean")&&(F=null);var ze=!1;if(F===null)ze=!0;else switch(Le){case"string":case"number":ze=!0;break;case"object":switch(F.$$typeof){case n:case e:ze=!0}}if(ze)return ze=F,be=be(ze),F=Ce===""?"."+P(ze,0):Ce,J(be)?(ye="",F!=null&&(ye=F.replace(D,"$&/")+"/"),Qe(be,X,ye,"",function(Lt){return Lt})):be!=null&&(b(be)&&(be=A(be,ye+(!be.key||ze&&ze.key===be.key?"":(""+be.key).replace(D,"$&/")+"/")+F)),X.push(be)),1;if(ze=0,Ce=Ce===""?".":Ce+":",J(F))for(var $e=0;$e<F.length;$e++){Le=F[$e];var Ye=Ce+P(Le,$e);ze+=Qe(Le,X,ye,Ye,be)}else if(Ye=T(F),typeof Ye=="function")for(F=Ye.call(F),$e=0;!(Le=F.next()).done;)Le=Le.value,Ye=Ce+P(Le,$e++),ze+=Qe(Le,X,ye,Ye,be);else if(Le==="object")throw X=String(F),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return ze}function Pt(F,X,ye){if(F==null)return F;var Ce=[],be=0;return Qe(F,Ce,"","",function(Le){return X.call(ye,Le,be++)}),Ce}function yt(F){if(F._status===-1){var X=F._result;X=X(),X.then(function(ye){(F._status===0||F._status===-1)&&(F._status=1,F._result=ye)},function(ye){(F._status===0||F._status===-1)&&(F._status=2,F._result=ye)}),F._status===-1&&(F._status=0,F._result=X)}if(F._status===1)return F._result.default;throw F._result}var Be={current:null},oe={transition:null},ge={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:oe,ReactCurrentOwner:he};function le(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Pt,forEach:function(F,X,ye){Pt(F,function(){X.apply(this,arguments)},ye)},count:function(F){var X=0;return Pt(F,function(){X++}),X},toArray:function(F){return Pt(F,function(X){return X})||[]},only:function(F){if(!b(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Ne.Component=C,Ne.Fragment=t,Ne.Profiler=s,Ne.PureComponent=G,Ne.StrictMode=r,Ne.Suspense=f,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Ne.act=le,Ne.cloneElement=function(F,X,ye){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ce=V({},F.props),be=F.key,Le=F.ref,ze=F._owner;if(X!=null){if(X.ref!==void 0&&(Le=X.ref,ze=he.current),X.key!==void 0&&(be=""+X.key),F.type&&F.type.defaultProps)var $e=F.type.defaultProps;for(Ye in X)ne.call(X,Ye)&&!O.hasOwnProperty(Ye)&&(Ce[Ye]=X[Ye]===void 0&&$e!==void 0?$e[Ye]:X[Ye])}var Ye=arguments.length-2;if(Ye===1)Ce.children=ye;else if(1<Ye){$e=Array(Ye);for(var Lt=0;Lt<Ye;Lt++)$e[Lt]=arguments[Lt+2];Ce.children=$e}return{$$typeof:n,type:F.type,key:be,ref:Le,props:Ce,_owner:ze}},Ne.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},Ne.createElement=S,Ne.createFactory=function(F){var X=S.bind(null,F);return X.type=F,X},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(F){return{$$typeof:d,render:F}},Ne.isValidElement=b,Ne.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:yt}},Ne.memo=function(F,X){return{$$typeof:g,type:F,compare:X===void 0?null:X}},Ne.startTransition=function(F){var X=oe.transition;oe.transition={};try{F()}finally{oe.transition=X}},Ne.unstable_act=le,Ne.useCallback=function(F,X){return Be.current.useCallback(F,X)},Ne.useContext=function(F){return Be.current.useContext(F)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(F){return Be.current.useDeferredValue(F)},Ne.useEffect=function(F,X){return Be.current.useEffect(F,X)},Ne.useId=function(){return Be.current.useId()},Ne.useImperativeHandle=function(F,X,ye){return Be.current.useImperativeHandle(F,X,ye)},Ne.useInsertionEffect=function(F,X){return Be.current.useInsertionEffect(F,X)},Ne.useLayoutEffect=function(F,X){return Be.current.useLayoutEffect(F,X)},Ne.useMemo=function(F,X){return Be.current.useMemo(F,X)},Ne.useReducer=function(F,X,ye){return Be.current.useReducer(F,X,ye)},Ne.useRef=function(F){return Be.current.useRef(F)},Ne.useState=function(F){return Be.current.useState(F)},Ne.useSyncExternalStore=function(F,X,ye){return Be.current.useSyncExternalStore(F,X,ye)},Ne.useTransition=function(){return Be.current.useTransition()},Ne.version="18.3.1",Ne}var b_;function tg(){return b_||(b_=1,Fp.exports=AR()),Fp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function RR(){if(N_)return cu;N_=1;var n=tg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,g){var v,w={},T=null,k=null;g!==void 0&&(T=""+g),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(k=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:k,props:w,_owner:s.current}}return cu.Fragment=t,cu.jsx=u,cu.jsxs=u,cu}var x_;function PR(){return x_||(x_=1,Vp.exports=RR()),Vp.exports}var ie=PR(),W=tg();const w0=_0(W),CR=SR({__proto__:null,default:w0},[W]);var Ph={},Up={exports:{}},Tn={},jp={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function kR(){return O_||(O_=1,(function(n){function e(oe,ge){var le=oe.length;oe.push(ge);e:for(;0<le;){var F=le-1>>>1,X=oe[F];if(0<s(X,ge))oe[F]=ge,oe[le]=X,le=F;else break e}}function t(oe){return oe.length===0?null:oe[0]}function r(oe){if(oe.length===0)return null;var ge=oe[0],le=oe.pop();if(le!==ge){oe[0]=le;e:for(var F=0,X=oe.length,ye=X>>>1;F<ye;){var Ce=2*(F+1)-1,be=oe[Ce],Le=Ce+1,ze=oe[Le];if(0>s(be,le))Le<X&&0>s(ze,be)?(oe[F]=ze,oe[Le]=le,F=Le):(oe[F]=be,oe[Ce]=le,F=Ce);else if(Le<X&&0>s(ze,le))oe[F]=ze,oe[Le]=le,F=Le;else break e}}return ge}function s(oe,ge){var le=oe.sortIndex-ge.sortIndex;return le!==0?le:oe.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],g=[],v=1,w=null,T=3,k=!1,V=!1,N=!1,C=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(oe){for(var ge=t(g);ge!==null;){if(ge.callback===null)r(g);else if(ge.startTime<=oe)r(g),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(g)}}function J(oe){if(N=!1,q(oe),!V)if(t(f)!==null)V=!0,yt(ne);else{var ge=t(g);ge!==null&&Be(J,ge.startTime-oe)}}function ne(oe,ge){V=!1,N&&(N=!1,H(S),S=-1),k=!0;var le=T;try{for(q(ge),w=t(f);w!==null&&(!(w.expirationTime>ge)||oe&&!M());){var F=w.callback;if(typeof F=="function"){w.callback=null,T=w.priorityLevel;var X=F(w.expirationTime<=ge);ge=n.unstable_now(),typeof X=="function"?w.callback=X:w===t(f)&&r(f),q(ge)}else r(f);w=t(f)}if(w!==null)var ye=!0;else{var Ce=t(g);Ce!==null&&Be(J,Ce.startTime-ge),ye=!1}return ye}finally{w=null,T=le,k=!1}}var he=!1,O=null,S=-1,A=5,b=-1;function M(){return!(n.unstable_now()-b<A)}function D(){if(O!==null){var oe=n.unstable_now();b=oe;var ge=!0;try{ge=O(!0,oe)}finally{ge?P():(he=!1,O=null)}}else he=!1}var P;if(typeof G=="function")P=function(){G(D)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Pt=Qe.port2;Qe.port1.onmessage=D,P=function(){Pt.postMessage(null)}}else P=function(){C(D,0)};function yt(oe){O=oe,he||(he=!0,P())}function Be(oe,ge){S=C(function(){oe(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(oe){oe.callback=null},n.unstable_continueExecution=function(){V||k||(V=!0,yt(ne))},n.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<oe?Math.floor(1e3/oe):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(oe){switch(T){case 1:case 2:case 3:var ge=3;break;default:ge=T}var le=T;T=ge;try{return oe()}finally{T=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(oe,ge){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var le=T;T=oe;try{return ge()}finally{T=le}},n.unstable_scheduleCallback=function(oe,ge,le){var F=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,oe){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=le+X,oe={id:v++,callback:ge,priorityLevel:oe,startTime:le,expirationTime:X,sortIndex:-1},le>F?(oe.sortIndex=le,e(g,oe),t(f)===null&&oe===t(g)&&(N?(H(S),S=-1):N=!0,Be(J,le-F))):(oe.sortIndex=X,e(f,oe),V||k||(V=!0,yt(ne))),oe},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(oe){var ge=T;return function(){var le=T;T=ge;try{return oe.apply(this,arguments)}finally{T=le}}}})(Bp)),Bp}var D_;function bR(){return D_||(D_=1,jp.exports=kR()),jp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function NR(){if(M_)return Tn;M_=1;var n=tg(),e=bR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return f.call(w,i)?!0:f.call(v,i)?!1:g.test(i)?w[i]=!0:(v[i]=!0,!1)}function k(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function V(i,o,l,h){if(o===null||typeof o>"u"||k(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function N(i,o,l,h,p,y,E){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=y,this.removeEmptyString=E}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){C[i]=new N(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];C[o]=new N(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){C[i]=new N(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){C[i]=new N(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){C[i]=new N(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){C[i]=new N(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){C[i]=new N(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){C[i]=new N(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){C[i]=new N(i,5,!1,i.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function G(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(H,G);C[o]=new N(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(H,G);C[o]=new N(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(H,G);C[o]=new N(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){C[i]=new N(i,1,!1,i.toLowerCase(),null,!1,!1)}),C.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){C[i]=new N(i,1,!1,i.toLowerCase(),null,!0,!0)});function q(i,o,l,h){var p=C.hasOwnProperty(o)?C[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(V(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var J=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),he=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),M=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),oe=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=oe&&i[oe]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,F;function X(i){if(F===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);F=o&&o[1]||""}return`
`+F+i}var ye=!1;function Ce(i,o){if(!i||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(z){var h=z}Reflect.construct(i,[],o)}else{try{o.call()}catch(z){h=z}i.call(o.prototype)}else{try{throw Error()}catch(z){h=z}i()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var p=z.stack.split(`
`),y=h.stack.split(`
`),E=p.length-1,R=y.length-1;1<=E&&0<=R&&p[E]!==y[R];)R--;for(;1<=E&&0<=R;E--,R--)if(p[E]!==y[R]){if(E!==1||R!==1)do if(E--,R--,0>R||p[E]!==y[R]){var x=`
`+p[E].replace(" at new "," at ");return i.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",i.displayName)),x}while(1<=E&&0<=R);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?X(i):""}function be(i){switch(i.tag){case 5:return X(i.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function Le(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case he:return"Portal";case A:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case Qe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case M:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case D:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Pt:return o=i.displayName||null,o!==null?o:Le(i.type)||"Memo";case yt:o=i._payload,i=i._init;try{return Le(i(o))}catch{}}return null}function ze(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ye(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Lt(i){var o=Ye(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,y.call(this,E)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Kr(i){i._valueTracker||(i._valueTracker=Lt(i))}function $o(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Ye(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function ki(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Fs(i,o){var l=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function qo(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=$e(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function gl(i,o){o=o.checked,o!=null&&q(i,"checked",o,!1)}function yl(i,o){gl(i,o);var l=$e(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Ho(i,o.type,l):o.hasOwnProperty("defaultValue")&&Ho(i,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function hc(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Ho(i,o,l){(o!=="number"||ki(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Qr=Array.isArray;function Yr(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+$e(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function vl(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Wo(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Qr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:$e(l)}}function Go(i,o){var l=$e(o.value),h=$e(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function _l(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ct(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ct(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Xr,wl=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Xr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function bi(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},js=["Webkit","ms","Moz","O"];Object.keys(Us).forEach(function(i){js.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Us[o]=Us[i]})});function El(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Us.hasOwnProperty(i)&&Us[i]?(""+o).trim():o+"px"}function Tl(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=El(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Il=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(i,o){if(o){if(Il[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Al(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bs=null;function Ko(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Qo=null,jn=null,Tr=null;function Yo(i){if(i=Ql(i)){if(typeof Qo!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Bc(o),Qo(i.stateNode,i.type,o))}}function Ir(i){jn?Tr?Tr.push(i):Tr=[i]:jn=i}function Rl(){if(jn){var i=jn,o=Tr;if(Tr=jn=null,Yo(i),o)for(i=0;i<o.length;i++)Yo(o[i])}}function zs(i,o){return i(o)}function Pl(){}var Jr=!1;function Cl(i,o,l){if(Jr)return i(o,l);Jr=!0;try{return zs(i,o,l)}finally{Jr=!1,(jn!==null||Tr!==null)&&(Pl(),Rl())}}function vt(i,o){var l=i.stateNode;if(l===null)return null;var h=Bc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Xo=!1;if(d)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Xo=!1}function $s(i,o,l,h,p,y,E,R,x){var z=Array.prototype.slice.call(arguments,3);try{o.apply(l,z)}catch(ee){this.onError(ee)}}var qs=!1,Jo=null,nr=!1,kl=null,cf={onError:function(i){qs=!0,Jo=i}};function Zo(i,o,l,h,p,y,E,R,x){qs=!1,Jo=null,$s.apply(cf,arguments)}function dc(i,o,l,h,p,y,E,R,x){if(Zo.apply(this,arguments),qs){if(qs){var z=Jo;qs=!1,Jo=null}else throw Error(t(198));nr||(nr=!0,kl=z)}}function rr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Hs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function ir(i){if(rr(i)!==i)throw Error(t(188))}function fc(i){var o=i.alternate;if(!o){if(o=rr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return ir(p),i;if(y===h)return ir(p),o;y=y.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=y;else{for(var E=!1,R=p.child;R;){if(R===l){E=!0,l=p,h=y;break}if(R===h){E=!0,h=p,l=y;break}R=R.sibling}if(!E){for(R=y.child;R;){if(R===l){E=!0,l=y,h=p;break}if(R===h){E=!0,h=y,l=p;break}R=R.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function bl(i){return i=fc(i),i!==null?ea(i):null}function ea(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=ea(i);if(o!==null)return o;i=i.sibling}return null}var ta=e.unstable_scheduleCallback,Nl=e.unstable_cancelCallback,pc=e.unstable_shouldYield,hf=e.unstable_requestPaint,Xe=e.unstable_now,mc=e.unstable_getCurrentPriorityLevel,Ws=e.unstable_ImmediatePriority,Ni=e.unstable_UserBlockingPriority,Bn=e.unstable_NormalPriority,xl=e.unstable_LowPriority,gc=e.unstable_IdlePriority,Gs=null,Cn=null;function yc(i){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Gs,i,void 0,(i.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:_c,Ol=Math.log,vc=Math.LN2;function _c(i){return i>>>=0,i===0?32:31-(Ol(i)/vc|0)|0}var na=64,ra=4194304;function xi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ks(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,y=i.pingedLanes,E=l&268435455;if(E!==0){var R=E&~p;R!==0?h=xi(R):(y&=E,y!==0&&(h=xi(y)))}else E=l&~p,E!==0?h=xi(E):y!==0&&(h=xi(y));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,y=o&-o,p>=y||p===16&&(y&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-un(o),p=1<<l,h|=i[l],o&=~p;return h}function df(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zr(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,y=i.pendingLanes;0<y;){var E=31-un(y),R=1<<E,x=p[E];x===-1?((R&l)===0||(R&h)!==0)&&(p[E]=df(R,o)):x<=o&&(i.expiredLanes|=R),y&=~R}}function kn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Qs(){var i=na;return na<<=1,(na&4194240)===0&&(na=64),i}function Oi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Di(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-un(o),i[o]=l}function Ke(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-un(l),y=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~y}}function Mi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-un(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var De=0;function Li(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var wc,ia,Ec,Tc,Ic,Dl=!1,Sr=[],$t=null,sr=null,or=null,Vi=new Map,zn=new Map,Ar=[],ff="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(i,o){switch(i){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Vi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(o.pointerId)}}function mn(i,o,l,h,p,y){return i===null||i.nativeEvent!==y?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[p]},o!==null&&(o=Ql(o),o!==null&&ia(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function pf(i,o,l,h,p){switch(o){case"focusin":return $t=mn($t,i,o,l,h,p),!0;case"dragenter":return sr=mn(sr,i,o,l,h,p),!0;case"mouseover":return or=mn(or,i,o,l,h,p),!0;case"pointerover":var y=p.pointerId;return Vi.set(y,mn(Vi.get(y)||null,i,o,l,h,p)),!0;case"gotpointercapture":return y=p.pointerId,zn.set(y,mn(zn.get(y)||null,i,o,l,h,p)),!0}return!1}function Ac(i){var o=eo(i.target);if(o!==null){var l=rr(o);if(l!==null){if(o=l.tag,o===13){if(o=Hs(l),o!==null){i.blockedOn=o,Ic(i.priority,function(){Ec(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ei(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=sa(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Bs=h,l.target.dispatchEvent(h),Bs=null}else return o=Ql(l),o!==null&&ia(o),i.blockedOn=l,!1;o.shift()}return!0}function Ys(i,o,l){ei(i)&&l.delete(o)}function Rc(){Dl=!1,$t!==null&&ei($t)&&($t=null),sr!==null&&ei(sr)&&(sr=null),or!==null&&ei(or)&&(or=null),Vi.forEach(Ys),zn.forEach(Ys)}function ar(i,o){i.blockedOn===o&&(i.blockedOn=null,Dl||(Dl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rc)))}function lr(i){function o(p){return ar(p,i)}if(0<Sr.length){ar(Sr[0],i);for(var l=1;l<Sr.length;l++){var h=Sr[l];h.blockedOn===i&&(h.blockedOn=null)}}for($t!==null&&ar($t,i),sr!==null&&ar(sr,i),or!==null&&ar(or,i),Vi.forEach(o),zn.forEach(o),l=0;l<Ar.length;l++)h=Ar[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<Ar.length&&(l=Ar[0],l.blockedOn===null);)Ac(l),l.blockedOn===null&&Ar.shift()}var ti=J.ReactCurrentBatchConfig,Fi=!0;function st(i,o,l,h){var p=De,y=ti.transition;ti.transition=null;try{De=1,Ml(i,o,l,h)}finally{De=p,ti.transition=y}}function mf(i,o,l,h){var p=De,y=ti.transition;ti.transition=null;try{De=4,Ml(i,o,l,h)}finally{De=p,ti.transition=y}}function Ml(i,o,l,h){if(Fi){var p=sa(i,o,l,h);if(p===null)Rf(i,o,h,Xs,l),Sc(i,h);else if(pf(p,i,o,l,h))h.stopPropagation();else if(Sc(i,h),o&4&&-1<ff.indexOf(i)){for(;p!==null;){var y=Ql(p);if(y!==null&&wc(y),y=sa(i,o,l,h),y===null&&Rf(i,o,h,Xs,l),y===p)break;p=y}p!==null&&h.stopPropagation()}else Rf(i,o,h,null,l)}}var Xs=null;function sa(i,o,l,h){if(Xs=null,i=Ko(h),i=eo(i),i!==null)if(o=rr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Hs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Xs=i,null}function Ll(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mc()){case Ws:return 1;case Ni:return 4;case Bn:case xl:return 16;case gc:return 536870912;default:return 16}default:return 16}}var bn=null,oa=null,gn=null;function Vl(){if(gn)return gn;var i,o=oa,l=o.length,h,p="value"in bn?bn.value:bn.textContent,y=p.length;for(i=0;i<l&&o[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&o[l-h]===p[y-h];h++);return gn=p.slice(i,1<h?1-h:void 0)}function aa(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Rr(){return!0}function Fl(){return!1}function qt(i){function o(l,h,p,y,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(y):y[R]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Rr:Fl,this.isPropagationStopped=Fl,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),o}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=qt(ur),Pr=le({},ur,{view:0,detail:0}),gf=qt(Pr),ua,ni,Ui,Js=le({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ui&&(Ui&&i.type==="mousemove"?(ua=i.screenX-Ui.screenX,ni=i.screenY-Ui.screenY):ni=ua=0,Ui=i),ua)},movementY:function(i){return"movementY"in i?i.movementY:ni}}),ca=qt(Js),Ul=le({},Js,{dataTransfer:0}),Pc=qt(Ul),ha=le({},Pr,{relatedTarget:0}),da=qt(ha),Cc=le({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),ri=qt(Cc),kc=le({},ur,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),bc=qt(kc),Nc=le({},ur,{data:0}),jl=qt(Nc),fa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=xc[i])?!!o[i]:!1}function Cr(){return Oc}var c=le({},Pr,{key:function(i){if(i.key){var o=fa[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=aa(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?cn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(i){return i.type==="keypress"?aa(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?aa(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=qt(c),_=le({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=qt(_),U=le({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr}),$=qt(U),se=le({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=qt(se),bt=le({},Js,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=qt(bt),Vt=[9,13,27,32],Tt=d&&"CompositionEvent"in window,$n=null;d&&"documentMode"in document&&($n=document.documentMode);var Nn=d&&"TextEvent"in window&&!$n,Zs=d&&(!Tt||$n&&8<$n&&11>=$n),pa=" ",Ty=!1;function Iy(i,o){switch(i){case"keyup":return Vt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ma=!1;function EA(i,o){switch(i){case"compositionend":return Sy(o);case"keypress":return o.which!==32?null:(Ty=!0,pa);case"textInput":return i=o.data,i===pa&&Ty?null:i;default:return null}}function TA(i,o){if(ma)return i==="compositionend"||!Tt&&Iy(i,o)?(i=Vl(),gn=oa=bn=null,ma=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Zs&&o.locale!=="ko"?null:o.data;default:return null}}var IA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ay(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!IA[i.type]:o==="textarea"}function Ry(i,o,l,h){Ir(h),o=Fc(o,"onChange"),0<o.length&&(l=new la("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var Bl=null,zl=null;function SA(i){qy(i,0)}function Dc(i){var o=wa(i);if($o(o))return i}function AA(i,o){if(i==="change")return o}var Py=!1;if(d){var yf;if(d){var vf="oninput"in document;if(!vf){var Cy=document.createElement("div");Cy.setAttribute("oninput","return;"),vf=typeof Cy.oninput=="function"}yf=vf}else yf=!1;Py=yf&&(!document.documentMode||9<document.documentMode)}function ky(){Bl&&(Bl.detachEvent("onpropertychange",by),zl=Bl=null)}function by(i){if(i.propertyName==="value"&&Dc(zl)){var o=[];Ry(o,zl,i,Ko(i)),Cl(SA,o)}}function RA(i,o,l){i==="focusin"?(ky(),Bl=o,zl=l,Bl.attachEvent("onpropertychange",by)):i==="focusout"&&ky()}function PA(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Dc(zl)}function CA(i,o){if(i==="click")return Dc(o)}function kA(i,o){if(i==="input"||i==="change")return Dc(o)}function bA(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var cr=typeof Object.is=="function"?Object.is:bA;function $l(i,o){if(cr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!cr(i[p],o[p]))return!1}return!0}function Ny(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function xy(i,o){var l=Ny(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ny(l)}}function Oy(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Oy(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Dy(){for(var i=window,o=ki();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=ki(i.document)}return o}function _f(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function NA(i){var o=Dy(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Oy(l.ownerDocument.documentElement,l)){if(h!==null&&_f(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,y=Math.min(h.start,p);h=h.end===void 0?y:Math.min(h.end,p),!i.extend&&y>h&&(p=h,h=y,y=p),p=xy(l,y);var E=xy(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),y>h?(i.addRange(o),i.extend(E.node,E.offset)):(o.setEnd(E.node,E.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var xA=d&&"documentMode"in document&&11>=document.documentMode,ga=null,wf=null,ql=null,Ef=!1;function My(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ef||ga==null||ga!==ki(h)||(h=ga,"selectionStart"in h&&_f(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),ql&&$l(ql,h)||(ql=h,h=Fc(wf,"onSelect"),0<h.length&&(o=new la("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=ga)))}function Mc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ya={animationend:Mc("Animation","AnimationEnd"),animationiteration:Mc("Animation","AnimationIteration"),animationstart:Mc("Animation","AnimationStart"),transitionend:Mc("Transition","TransitionEnd")},Tf={},Ly={};d&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Lc(i){if(Tf[i])return Tf[i];if(!ya[i])return i;var o=ya[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Ly)return Tf[i]=o[l];return i}var Vy=Lc("animationend"),Fy=Lc("animationiteration"),Uy=Lc("animationstart"),jy=Lc("transitionend"),By=new Map,zy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(i,o){By.set(i,o),a(o,[i])}for(var If=0;If<zy.length;If++){var Sf=zy[If],OA=Sf.toLowerCase(),DA=Sf[0].toUpperCase()+Sf.slice(1);ji(OA,"on"+DA)}ji(Vy,"onAnimationEnd"),ji(Fy,"onAnimationIteration"),ji(Uy,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(jy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hl));function $y(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,dc(h,o,void 0,i),i.currentTarget=null}function qy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var y=void 0;if(o)for(var E=h.length-1;0<=E;E--){var R=h[E],x=R.instance,z=R.currentTarget;if(R=R.listener,x!==y&&p.isPropagationStopped())break e;$y(p,R,z),y=x}else for(E=0;E<h.length;E++){if(R=h[E],x=R.instance,z=R.currentTarget,R=R.listener,x!==y&&p.isPropagationStopped())break e;$y(p,R,z),y=x}}}if(nr)throw i=kl,nr=!1,kl=null,i}function tt(i,o){var l=o[xf];l===void 0&&(l=o[xf]=new Set);var h=i+"__bubble";l.has(h)||(Hy(o,i,2,!1),l.add(h))}function Af(i,o,l){var h=0;o&&(h|=4),Hy(l,i,h,o)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Wl(i){if(!i[Vc]){i[Vc]=!0,r.forEach(function(l){l!=="selectionchange"&&(MA.has(l)||Af(l,!1,i),Af(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Vc]||(o[Vc]=!0,Af("selectionchange",!1,o))}}function Hy(i,o,l,h){switch(Ll(o)){case 1:var p=st;break;case 4:p=mf;break;default:p=Ml}l=p.bind(null,o,l,i),p=void 0,!Xo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Rf(i,o,l,h,p){var y=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var R=h.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var x=E.tag;if((x===3||x===4)&&(x=E.stateNode.containerInfo,x===p||x.nodeType===8&&x.parentNode===p))return;E=E.return}for(;R!==null;){if(E=eo(R),E===null)return;if(x=E.tag,x===5||x===6){h=y=E;continue e}R=R.parentNode}}h=h.return}Cl(function(){var z=y,ee=Ko(l),te=[];e:{var Z=By.get(i);if(Z!==void 0){var ue=la,fe=i;switch(i){case"keypress":if(aa(l)===0)break e;case"keydown":case"keyup":ue=m;break;case"focusin":fe="focus",ue=da;break;case"focusout":fe="blur",ue=da;break;case"beforeblur":case"afterblur":ue=da;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Pc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=$;break;case Vy:case Fy:case Uy:ue=ri;break;case jy:ue=He;break;case"scroll":ue=gf;break;case"wheel":ue=Ve;break;case"copy":case"cut":case"paste":ue=bc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=I}var pe=(o&4)!==0,_t=!pe&&i==="scroll",j=pe?Z!==null?Z+"Capture":null:Z;pe=[];for(var L=z,B;L!==null;){B=L;var re=B.stateNode;if(B.tag===5&&re!==null&&(B=re,j!==null&&(re=vt(L,j),re!=null&&pe.push(Gl(L,re,B)))),_t)break;L=L.return}0<pe.length&&(Z=new ue(Z,fe,null,l,ee),te.push({event:Z,listeners:pe}))}}if((o&7)===0){e:{if(Z=i==="mouseover"||i==="pointerover",ue=i==="mouseout"||i==="pointerout",Z&&l!==Bs&&(fe=l.relatedTarget||l.fromElement)&&(eo(fe)||fe[ii]))break e;if((ue||Z)&&(Z=ee.window===ee?ee:(Z=ee.ownerDocument)?Z.defaultView||Z.parentWindow:window,ue?(fe=l.relatedTarget||l.toElement,ue=z,fe=fe?eo(fe):null,fe!==null&&(_t=rr(fe),fe!==_t||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ue=null,fe=z),ue!==fe)){if(pe=ca,re="onMouseLeave",j="onMouseEnter",L="mouse",(i==="pointerout"||i==="pointerover")&&(pe=I,re="onPointerLeave",j="onPointerEnter",L="pointer"),_t=ue==null?Z:wa(ue),B=fe==null?Z:wa(fe),Z=new pe(re,L+"leave",ue,l,ee),Z.target=_t,Z.relatedTarget=B,re=null,eo(ee)===z&&(pe=new pe(j,L+"enter",fe,l,ee),pe.target=B,pe.relatedTarget=_t,re=pe),_t=re,ue&&fe)t:{for(pe=ue,j=fe,L=0,B=pe;B;B=va(B))L++;for(B=0,re=j;re;re=va(re))B++;for(;0<L-B;)pe=va(pe),L--;for(;0<B-L;)j=va(j),B--;for(;L--;){if(pe===j||j!==null&&pe===j.alternate)break t;pe=va(pe),j=va(j)}pe=null}else pe=null;ue!==null&&Wy(te,Z,ue,pe,!1),fe!==null&&_t!==null&&Wy(te,_t,fe,pe,!0)}}e:{if(Z=z?wa(z):window,ue=Z.nodeName&&Z.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Z.type==="file")var me=AA;else if(Ay(Z))if(Py)me=kA;else{me=PA;var _e=RA}else(ue=Z.nodeName)&&ue.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(me=CA);if(me&&(me=me(i,z))){Ry(te,me,l,ee);break e}_e&&_e(i,Z,z),i==="focusout"&&(_e=Z._wrapperState)&&_e.controlled&&Z.type==="number"&&Ho(Z,"number",Z.value)}switch(_e=z?wa(z):window,i){case"focusin":(Ay(_e)||_e.contentEditable==="true")&&(ga=_e,wf=z,ql=null);break;case"focusout":ql=wf=ga=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,My(te,l,ee);break;case"selectionchange":if(xA)break;case"keydown":case"keyup":My(te,l,ee)}var we;if(Tt)e:{switch(i){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else ma?Iy(i,l)&&(Ie="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ie="onCompositionStart");Ie&&(Zs&&l.locale!=="ko"&&(ma||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&ma&&(we=Vl()):(bn=ee,oa="value"in bn?bn.value:bn.textContent,ma=!0)),_e=Fc(z,Ie),0<_e.length&&(Ie=new jl(Ie,i,null,l,ee),te.push({event:Ie,listeners:_e}),we?Ie.data=we:(we=Sy(l),we!==null&&(Ie.data=we)))),(we=Nn?EA(i,l):TA(i,l))&&(z=Fc(z,"onBeforeInput"),0<z.length&&(ee=new jl("onBeforeInput","beforeinput",null,l,ee),te.push({event:ee,listeners:z}),ee.data=we))}qy(te,o)})}function Gl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Fc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=vt(i,l),y!=null&&h.unshift(Gl(i,y,p)),y=vt(i,o),y!=null&&h.push(Gl(i,y,p))),i=i.return}return h}function va(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Wy(i,o,l,h,p){for(var y=o._reactName,E=[];l!==null&&l!==h;){var R=l,x=R.alternate,z=R.stateNode;if(x!==null&&x===h)break;R.tag===5&&z!==null&&(R=z,p?(x=vt(l,y),x!=null&&E.unshift(Gl(l,x,R))):p||(x=vt(l,y),x!=null&&E.push(Gl(l,x,R)))),l=l.return}E.length!==0&&i.push({event:o,listeners:E})}var LA=/\r\n?/g,VA=/\u0000|\uFFFD/g;function Gy(i){return(typeof i=="string"?i:""+i).replace(LA,`
`).replace(VA,"")}function Uc(i,o,l){if(o=Gy(o),Gy(i)!==o&&l)throw Error(t(425))}function jc(){}var Pf=null,Cf=null;function kf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,FA=typeof clearTimeout=="function"?clearTimeout:void 0,Ky=typeof Promise=="function"?Promise:void 0,UA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ky<"u"?function(i){return Ky.resolve(null).then(i).catch(jA)}:bf;function jA(i){setTimeout(function(){throw i})}function Nf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),lr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);lr(o)}function Bi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function Qy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var _a=Math.random().toString(36).slice(2),kr="__reactFiber$"+_a,Kl="__reactProps$"+_a,ii="__reactContainer$"+_a,xf="__reactEvents$"+_a,BA="__reactListeners$"+_a,zA="__reactHandles$"+_a;function eo(i){var o=i[kr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[ii]||l[kr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=Qy(i);i!==null;){if(l=i[kr])return l;i=Qy(i)}return o}i=l,l=i.parentNode}return null}function Ql(i){return i=i[kr]||i[ii],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function wa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Bc(i){return i[Kl]||null}var Of=[],Ea=-1;function zi(i){return{current:i}}function nt(i){0>Ea||(i.current=Of[Ea],Of[Ea]=null,Ea--)}function Je(i,o){Ea++,Of[Ea]=i.current,i.current=o}var $i={},Xt=zi($i),yn=zi(!1),to=$i;function Ta(i,o){var l=i.type.contextTypes;if(!l)return $i;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=o[y];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function vn(i){return i=i.childContextTypes,i!=null}function zc(){nt(yn),nt(Xt)}function Yy(i,o,l){if(Xt.current!==$i)throw Error(t(168));Je(Xt,o),Je(yn,l)}function Xy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,ze(i)||"Unknown",p));return le({},l,h)}function $c(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||$i,to=Xt.current,Je(Xt,i),Je(yn,yn.current),!0}function Jy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Xy(i,o,to),h.__reactInternalMemoizedMergedChildContext=i,nt(yn),nt(Xt),Je(Xt,i)):nt(yn),Je(yn,l)}var si=null,qc=!1,Df=!1;function Zy(i){si===null?si=[i]:si.push(i)}function $A(i){qc=!0,Zy(i)}function qi(){if(!Df&&si!==null){Df=!0;var i=0,o=De;try{var l=si;for(De=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}si=null,qc=!1}catch(p){throw si!==null&&(si=si.slice(i+1)),ta(Ws,qi),p}finally{De=o,Df=!1}}return null}var Ia=[],Sa=0,Hc=null,Wc=0,qn=[],Hn=0,no=null,oi=1,ai="";function ro(i,o){Ia[Sa++]=Wc,Ia[Sa++]=Hc,Hc=i,Wc=o}function ev(i,o,l){qn[Hn++]=oi,qn[Hn++]=ai,qn[Hn++]=no,no=i;var h=oi;i=ai;var p=32-un(h)-1;h&=~(1<<p),l+=1;var y=32-un(o)+p;if(30<y){var E=p-p%5;y=(h&(1<<E)-1).toString(32),h>>=E,p-=E,oi=1<<32-un(o)+p|l<<p|h,ai=y+i}else oi=1<<y|l<<p|h,ai=i}function Mf(i){i.return!==null&&(ro(i,1),ev(i,1,0))}function Lf(i){for(;i===Hc;)Hc=Ia[--Sa],Ia[Sa]=null,Wc=Ia[--Sa],Ia[Sa]=null;for(;i===no;)no=qn[--Hn],qn[Hn]=null,ai=qn[--Hn],qn[Hn]=null,oi=qn[--Hn],qn[Hn]=null}var xn=null,On=null,ot=!1,hr=null;function tv(i,o){var l=Qn(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function nv(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,xn=i,On=Bi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,xn=i,On=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=no!==null?{id:oi,overflow:ai}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Qn(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,xn=i,On=null,!0):!1;default:return!1}}function Vf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ff(i){if(ot){var o=On;if(o){var l=o;if(!nv(i,o)){if(Vf(i))throw Error(t(418));o=Bi(l.nextSibling);var h=xn;o&&nv(i,o)?tv(h,l):(i.flags=i.flags&-4097|2,ot=!1,xn=i)}}else{if(Vf(i))throw Error(t(418));i.flags=i.flags&-4097|2,ot=!1,xn=i}}}function rv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;xn=i}function Gc(i){if(i!==xn)return!1;if(!ot)return rv(i),ot=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!kf(i.type,i.memoizedProps)),o&&(o=On)){if(Vf(i))throw iv(),Error(t(418));for(;o;)tv(i,o),o=Bi(o.nextSibling)}if(rv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){On=Bi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}On=null}}else On=xn?Bi(i.stateNode.nextSibling):null;return!0}function iv(){for(var i=On;i;)i=Bi(i.nextSibling)}function Aa(){On=xn=null,ot=!1}function Uf(i){hr===null?hr=[i]:hr.push(i)}var qA=J.ReactCurrentBatchConfig;function Yl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,y=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(E){var R=p.refs;E===null?delete R[y]:R[y]=E},o._stringRef=y,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Kc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function sv(i){var o=i._init;return o(i._payload)}function ov(i){function o(j,L){if(i){var B=j.deletions;B===null?(j.deletions=[L],j.flags|=16):B.push(L)}}function l(j,L){if(!i)return null;for(;L!==null;)o(j,L),L=L.sibling;return null}function h(j,L){for(j=new Map;L!==null;)L.key!==null?j.set(L.key,L):j.set(L.index,L),L=L.sibling;return j}function p(j,L){return j=Ji(j,L),j.index=0,j.sibling=null,j}function y(j,L,B){return j.index=B,i?(B=j.alternate,B!==null?(B=B.index,B<L?(j.flags|=2,L):B):(j.flags|=2,L)):(j.flags|=1048576,L)}function E(j){return i&&j.alternate===null&&(j.flags|=2),j}function R(j,L,B,re){return L===null||L.tag!==6?(L=bp(B,j.mode,re),L.return=j,L):(L=p(L,B),L.return=j,L)}function x(j,L,B,re){var me=B.type;return me===O?ee(j,L,B.props.children,re,B.key):L!==null&&(L.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===yt&&sv(me)===L.type)?(re=p(L,B.props),re.ref=Yl(j,L,B),re.return=j,re):(re=vh(B.type,B.key,B.props,null,j.mode,re),re.ref=Yl(j,L,B),re.return=j,re)}function z(j,L,B,re){return L===null||L.tag!==4||L.stateNode.containerInfo!==B.containerInfo||L.stateNode.implementation!==B.implementation?(L=Np(B,j.mode,re),L.return=j,L):(L=p(L,B.children||[]),L.return=j,L)}function ee(j,L,B,re,me){return L===null||L.tag!==7?(L=ho(B,j.mode,re,me),L.return=j,L):(L=p(L,B),L.return=j,L)}function te(j,L,B){if(typeof L=="string"&&L!==""||typeof L=="number")return L=bp(""+L,j.mode,B),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ne:return B=vh(L.type,L.key,L.props,null,j.mode,B),B.ref=Yl(j,null,L),B.return=j,B;case he:return L=Np(L,j.mode,B),L.return=j,L;case yt:var re=L._init;return te(j,re(L._payload),B)}if(Qr(L)||ge(L))return L=ho(L,j.mode,B,null),L.return=j,L;Kc(j,L)}return null}function Z(j,L,B,re){var me=L!==null?L.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return me!==null?null:R(j,L,""+B,re);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ne:return B.key===me?x(j,L,B,re):null;case he:return B.key===me?z(j,L,B,re):null;case yt:return me=B._init,Z(j,L,me(B._payload),re)}if(Qr(B)||ge(B))return me!==null?null:ee(j,L,B,re,null);Kc(j,B)}return null}function ue(j,L,B,re,me){if(typeof re=="string"&&re!==""||typeof re=="number")return j=j.get(B)||null,R(L,j,""+re,me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case ne:return j=j.get(re.key===null?B:re.key)||null,x(L,j,re,me);case he:return j=j.get(re.key===null?B:re.key)||null,z(L,j,re,me);case yt:var _e=re._init;return ue(j,L,B,_e(re._payload),me)}if(Qr(re)||ge(re))return j=j.get(B)||null,ee(L,j,re,me,null);Kc(L,re)}return null}function fe(j,L,B,re){for(var me=null,_e=null,we=L,Ie=L=0,jt=null;we!==null&&Ie<B.length;Ie++){we.index>Ie?(jt=we,we=null):jt=we.sibling;var je=Z(j,we,B[Ie],re);if(je===null){we===null&&(we=jt);break}i&&we&&je.alternate===null&&o(j,we),L=y(je,L,Ie),_e===null?me=je:_e.sibling=je,_e=je,we=jt}if(Ie===B.length)return l(j,we),ot&&ro(j,Ie),me;if(we===null){for(;Ie<B.length;Ie++)we=te(j,B[Ie],re),we!==null&&(L=y(we,L,Ie),_e===null?me=we:_e.sibling=we,_e=we);return ot&&ro(j,Ie),me}for(we=h(j,we);Ie<B.length;Ie++)jt=ue(we,j,Ie,B[Ie],re),jt!==null&&(i&&jt.alternate!==null&&we.delete(jt.key===null?Ie:jt.key),L=y(jt,L,Ie),_e===null?me=jt:_e.sibling=jt,_e=jt);return i&&we.forEach(function(Zi){return o(j,Zi)}),ot&&ro(j,Ie),me}function pe(j,L,B,re){var me=ge(B);if(typeof me!="function")throw Error(t(150));if(B=me.call(B),B==null)throw Error(t(151));for(var _e=me=null,we=L,Ie=L=0,jt=null,je=B.next();we!==null&&!je.done;Ie++,je=B.next()){we.index>Ie?(jt=we,we=null):jt=we.sibling;var Zi=Z(j,we,je.value,re);if(Zi===null){we===null&&(we=jt);break}i&&we&&Zi.alternate===null&&o(j,we),L=y(Zi,L,Ie),_e===null?me=Zi:_e.sibling=Zi,_e=Zi,we=jt}if(je.done)return l(j,we),ot&&ro(j,Ie),me;if(we===null){for(;!je.done;Ie++,je=B.next())je=te(j,je.value,re),je!==null&&(L=y(je,L,Ie),_e===null?me=je:_e.sibling=je,_e=je);return ot&&ro(j,Ie),me}for(we=h(j,we);!je.done;Ie++,je=B.next())je=ue(we,j,Ie,je.value,re),je!==null&&(i&&je.alternate!==null&&we.delete(je.key===null?Ie:je.key),L=y(je,L,Ie),_e===null?me=je:_e.sibling=je,_e=je);return i&&we.forEach(function(IR){return o(j,IR)}),ot&&ro(j,Ie),me}function _t(j,L,B,re){if(typeof B=="object"&&B!==null&&B.type===O&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case ne:e:{for(var me=B.key,_e=L;_e!==null;){if(_e.key===me){if(me=B.type,me===O){if(_e.tag===7){l(j,_e.sibling),L=p(_e,B.props.children),L.return=j,j=L;break e}}else if(_e.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===yt&&sv(me)===_e.type){l(j,_e.sibling),L=p(_e,B.props),L.ref=Yl(j,_e,B),L.return=j,j=L;break e}l(j,_e);break}else o(j,_e);_e=_e.sibling}B.type===O?(L=ho(B.props.children,j.mode,re,B.key),L.return=j,j=L):(re=vh(B.type,B.key,B.props,null,j.mode,re),re.ref=Yl(j,L,B),re.return=j,j=re)}return E(j);case he:e:{for(_e=B.key;L!==null;){if(L.key===_e)if(L.tag===4&&L.stateNode.containerInfo===B.containerInfo&&L.stateNode.implementation===B.implementation){l(j,L.sibling),L=p(L,B.children||[]),L.return=j,j=L;break e}else{l(j,L);break}else o(j,L);L=L.sibling}L=Np(B,j.mode,re),L.return=j,j=L}return E(j);case yt:return _e=B._init,_t(j,L,_e(B._payload),re)}if(Qr(B))return fe(j,L,B,re);if(ge(B))return pe(j,L,B,re);Kc(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,L!==null&&L.tag===6?(l(j,L.sibling),L=p(L,B),L.return=j,j=L):(l(j,L),L=bp(B,j.mode,re),L.return=j,j=L),E(j)):l(j,L)}return _t}var Ra=ov(!0),av=ov(!1),Qc=zi(null),Yc=null,Pa=null,jf=null;function Bf(){jf=Pa=Yc=null}function zf(i){var o=Qc.current;nt(Qc),i._currentValue=o}function $f(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function Ca(i,o){Yc=i,jf=Pa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(_n=!0),i.firstContext=null)}function Wn(i){var o=i._currentValue;if(jf!==i)if(i={context:i,memoizedValue:o,next:null},Pa===null){if(Yc===null)throw Error(t(308));Pa=i,Yc.dependencies={lanes:0,firstContext:i}}else Pa=Pa.next=i;return o}var io=null;function qf(i){io===null?io=[i]:io.push(i)}function lv(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,qf(o)):(l.next=p.next,p.next=l),o.interleaved=l,li(i,h)}function li(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Hi=!1;function Hf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ui(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Wi(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ue&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,li(i,l)}return p=h.interleaved,p===null?(o.next=o,qf(h)):(o.next=p.next,p.next=o),h.interleaved=o,li(i,l)}function Xc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Mi(i,l)}}function cv(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=E:y=y.next=E,l=l.next}while(l!==null);y===null?p=y=o:y=y.next=o}else p=y=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Jc(i,o,l,h){var p=i.updateQueue;Hi=!1;var y=p.firstBaseUpdate,E=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var x=R,z=x.next;x.next=null,E===null?y=z:E.next=z,E=x;var ee=i.alternate;ee!==null&&(ee=ee.updateQueue,R=ee.lastBaseUpdate,R!==E&&(R===null?ee.firstBaseUpdate=z:R.next=z,ee.lastBaseUpdate=x))}if(y!==null){var te=p.baseState;E=0,ee=z=x=null,R=y;do{var Z=R.lane,ue=R.eventTime;if((h&Z)===Z){ee!==null&&(ee=ee.next={eventTime:ue,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var fe=i,pe=R;switch(Z=o,ue=l,pe.tag){case 1:if(fe=pe.payload,typeof fe=="function"){te=fe.call(ue,te,Z);break e}te=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=pe.payload,Z=typeof fe=="function"?fe.call(ue,te,Z):fe,Z==null)break e;te=le({},te,Z);break e;case 2:Hi=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,Z=p.effects,Z===null?p.effects=[R]:Z.push(R))}else ue={eventTime:ue,lane:Z,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ee===null?(z=ee=ue,x=te):ee=ee.next=ue,E|=Z;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;Z=R,R=Z.next,Z.next=null,p.lastBaseUpdate=Z,p.shared.pending=null}}while(!0);if(ee===null&&(x=te),p.baseState=x,p.firstBaseUpdate=z,p.lastBaseUpdate=ee,o=p.shared.interleaved,o!==null){p=o;do E|=p.lane,p=p.next;while(p!==o)}else y===null&&(p.shared.lanes=0);ao|=E,i.lanes=E,i.memoizedState=te}}function hv(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Xl={},br=zi(Xl),Jl=zi(Xl),Zl=zi(Xl);function so(i){if(i===Xl)throw Error(t(174));return i}function Wf(i,o){switch(Je(Zl,o),Je(Jl,i),Je(br,Xl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:kt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=kt(o,i)}nt(br),Je(br,o)}function ka(){nt(br),nt(Jl),nt(Zl)}function dv(i){so(Zl.current);var o=so(br.current),l=kt(o,i.type);o!==l&&(Je(Jl,i),Je(br,l))}function Gf(i){Jl.current===i&&(nt(br),nt(Jl))}var at=zi(0);function Zc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Kf=[];function Qf(){for(var i=0;i<Kf.length;i++)Kf[i]._workInProgressVersionPrimary=null;Kf.length=0}var eh=J.ReactCurrentDispatcher,Yf=J.ReactCurrentBatchConfig,oo=0,lt=null,Nt=null,Ft=null,th=!1,eu=!1,tu=0,HA=0;function Jt(){throw Error(t(321))}function Xf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!cr(i[l],o[l]))return!1;return!0}function Jf(i,o,l,h,p,y){if(oo=y,lt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,eh.current=i===null||i.memoizedState===null?QA:YA,i=l(h,p),eu){y=0;do{if(eu=!1,tu=0,25<=y)throw Error(t(301));y+=1,Ft=Nt=null,o.updateQueue=null,eh.current=XA,i=l(h,p)}while(eu)}if(eh.current=ih,o=Nt!==null&&Nt.next!==null,oo=0,Ft=Nt=lt=null,th=!1,o)throw Error(t(300));return i}function Zf(){var i=tu!==0;return tu=0,i}function Nr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?lt.memoizedState=Ft=i:Ft=Ft.next=i,Ft}function Gn(){if(Nt===null){var i=lt.alternate;i=i!==null?i.memoizedState:null}else i=Nt.next;var o=Ft===null?lt.memoizedState:Ft.next;if(o!==null)Ft=o,Nt=i;else{if(i===null)throw Error(t(310));Nt=i,i={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ft===null?lt.memoizedState=Ft=i:Ft=Ft.next=i}return Ft}function nu(i,o){return typeof o=="function"?o(i):o}function ep(i){var o=Gn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Nt,p=h.baseQueue,y=l.pending;if(y!==null){if(p!==null){var E=p.next;p.next=y.next,y.next=E}h.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,h=h.baseState;var R=E=null,x=null,z=y;do{var ee=z.lane;if((oo&ee)===ee)x!==null&&(x=x.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:i(h,z.action);else{var te={lane:ee,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};x===null?(R=x=te,E=h):x=x.next=te,lt.lanes|=ee,ao|=ee}z=z.next}while(z!==null&&z!==y);x===null?E=h:x.next=R,cr(h,o.memoizedState)||(_n=!0),o.memoizedState=h,o.baseState=E,o.baseQueue=x,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do y=p.lane,lt.lanes|=y,ao|=y,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function tp(i){var o=Gn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,y=o.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do y=i(y,E.action),E=E.next;while(E!==p);cr(y,o.memoizedState)||(_n=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),l.lastRenderedState=y}return[y,h]}function fv(){}function pv(i,o){var l=lt,h=Gn(),p=o(),y=!cr(h.memoizedState,p);if(y&&(h.memoizedState=p,_n=!0),h=h.queue,np(yv.bind(null,l,h,i),[i]),h.getSnapshot!==o||y||Ft!==null&&Ft.memoizedState.tag&1){if(l.flags|=2048,ru(9,gv.bind(null,l,h,p,o),void 0,null),Ut===null)throw Error(t(349));(oo&30)!==0||mv(l,o,p)}return p}function mv(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=lt.updateQueue,o===null?(o={lastEffect:null,stores:null},lt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function gv(i,o,l,h){o.value=l,o.getSnapshot=h,vv(o)&&_v(i)}function yv(i,o,l){return l(function(){vv(o)&&_v(i)})}function vv(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!cr(i,l)}catch{return!0}}function _v(i){var o=li(i,1);o!==null&&mr(o,i,1,-1)}function wv(i){var o=Nr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:i},o.queue=i,i=i.dispatch=KA.bind(null,lt,i),[o.memoizedState,i]}function ru(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=lt.updateQueue,o===null?(o={lastEffect:null,stores:null},lt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Ev(){return Gn().memoizedState}function nh(i,o,l,h){var p=Nr();lt.flags|=i,p.memoizedState=ru(1|o,l,void 0,h===void 0?null:h)}function rh(i,o,l,h){var p=Gn();h=h===void 0?null:h;var y=void 0;if(Nt!==null){var E=Nt.memoizedState;if(y=E.destroy,h!==null&&Xf(h,E.deps)){p.memoizedState=ru(o,l,y,h);return}}lt.flags|=i,p.memoizedState=ru(1|o,l,y,h)}function Tv(i,o){return nh(8390656,8,i,o)}function np(i,o){return rh(2048,8,i,o)}function Iv(i,o){return rh(4,2,i,o)}function Sv(i,o){return rh(4,4,i,o)}function Av(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Rv(i,o,l){return l=l!=null?l.concat([i]):null,rh(4,4,Av.bind(null,o,i),l)}function rp(){}function Pv(i,o){var l=Gn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Xf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Cv(i,o){var l=Gn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Xf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function kv(i,o,l){return(oo&21)===0?(i.baseState&&(i.baseState=!1,_n=!0),i.memoizedState=l):(cr(l,o)||(l=Qs(),lt.lanes|=l,ao|=l,i.baseState=!0),o)}function WA(i,o){var l=De;De=l!==0&&4>l?l:4,i(!0);var h=Yf.transition;Yf.transition={};try{i(!1),o()}finally{De=l,Yf.transition=h}}function bv(){return Gn().memoizedState}function GA(i,o,l){var h=Yi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Nv(i))xv(o,l);else if(l=lv(i,o,l,h),l!==null){var p=dn();mr(l,i,h,p),Ov(l,o,h)}}function KA(i,o,l){var h=Yi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Nv(i))xv(o,p);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var E=o.lastRenderedState,R=y(E,l);if(p.hasEagerState=!0,p.eagerState=R,cr(R,E)){var x=o.interleaved;x===null?(p.next=p,qf(o)):(p.next=x.next,x.next=p),o.interleaved=p;return}}catch{}finally{}l=lv(i,o,p,h),l!==null&&(p=dn(),mr(l,i,h,p),Ov(l,o,h))}}function Nv(i){var o=i.alternate;return i===lt||o!==null&&o===lt}function xv(i,o){eu=th=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Ov(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Mi(i,l)}}var ih={readContext:Wn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},QA={readContext:Wn,useCallback:function(i,o){return Nr().memoizedState=[i,o===void 0?null:o],i},useContext:Wn,useEffect:Tv,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,nh(4194308,4,Av.bind(null,o,i),l)},useLayoutEffect:function(i,o){return nh(4194308,4,i,o)},useInsertionEffect:function(i,o){return nh(4,2,i,o)},useMemo:function(i,o){var l=Nr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Nr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=GA.bind(null,lt,i),[h.memoizedState,i]},useRef:function(i){var o=Nr();return i={current:i},o.memoizedState=i},useState:wv,useDebugValue:rp,useDeferredValue:function(i){return Nr().memoizedState=i},useTransition:function(){var i=wv(!1),o=i[0];return i=WA.bind(null,i[1]),Nr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=lt,p=Nr();if(ot){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ut===null)throw Error(t(349));(oo&30)!==0||mv(h,o,l)}p.memoizedState=l;var y={value:l,getSnapshot:o};return p.queue=y,Tv(yv.bind(null,h,y,i),[i]),h.flags|=2048,ru(9,gv.bind(null,h,y,l,o),void 0,null),l},useId:function(){var i=Nr(),o=Ut.identifierPrefix;if(ot){var l=ai,h=oi;l=(h&~(1<<32-un(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=tu++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=HA++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},YA={readContext:Wn,useCallback:Pv,useContext:Wn,useEffect:np,useImperativeHandle:Rv,useInsertionEffect:Iv,useLayoutEffect:Sv,useMemo:Cv,useReducer:ep,useRef:Ev,useState:function(){return ep(nu)},useDebugValue:rp,useDeferredValue:function(i){var o=Gn();return kv(o,Nt.memoizedState,i)},useTransition:function(){var i=ep(nu)[0],o=Gn().memoizedState;return[i,o]},useMutableSource:fv,useSyncExternalStore:pv,useId:bv,unstable_isNewReconciler:!1},XA={readContext:Wn,useCallback:Pv,useContext:Wn,useEffect:np,useImperativeHandle:Rv,useInsertionEffect:Iv,useLayoutEffect:Sv,useMemo:Cv,useReducer:tp,useRef:Ev,useState:function(){return tp(nu)},useDebugValue:rp,useDeferredValue:function(i){var o=Gn();return Nt===null?o.memoizedState=i:kv(o,Nt.memoizedState,i)},useTransition:function(){var i=tp(nu)[0],o=Gn().memoizedState;return[i,o]},useMutableSource:fv,useSyncExternalStore:pv,useId:bv,unstable_isNewReconciler:!1};function dr(i,o){if(i&&i.defaultProps){o=le({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function ip(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:le({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var sh={isMounted:function(i){return(i=i._reactInternals)?rr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=dn(),p=Yi(i),y=ui(h,p);y.payload=o,l!=null&&(y.callback=l),o=Wi(i,y,p),o!==null&&(mr(o,i,p,h),Xc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=dn(),p=Yi(i),y=ui(h,p);y.tag=1,y.payload=o,l!=null&&(y.callback=l),o=Wi(i,y,p),o!==null&&(mr(o,i,p,h),Xc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=dn(),h=Yi(i),p=ui(l,h);p.tag=2,o!=null&&(p.callback=o),o=Wi(i,p,h),o!==null&&(mr(o,i,h,l),Xc(o,i,h))}};function Dv(i,o,l,h,p,y,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,y,E):o.prototype&&o.prototype.isPureReactComponent?!$l(l,h)||!$l(p,y):!0}function Mv(i,o,l){var h=!1,p=$i,y=o.contextType;return typeof y=="object"&&y!==null?y=Wn(y):(p=vn(o)?to:Xt.current,h=o.contextTypes,y=(h=h!=null)?Ta(i,p):$i),o=new o(l,y),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=sh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=y),o}function Lv(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&sh.enqueueReplaceState(o,o.state,null)}function sp(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Hf(i);var y=o.contextType;typeof y=="object"&&y!==null?p.context=Wn(y):(y=vn(o)?to:Xt.current,p.context=Ta(i,y)),p.state=i.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(ip(i,o,y,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&sh.enqueueReplaceState(p,p.state,null),Jc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ba(i,o){try{var l="",h=o;do l+=be(h),h=h.return;while(h);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:i,source:o,stack:p,digest:null}}function op(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function ap(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var JA=typeof WeakMap=="function"?WeakMap:Map;function Vv(i,o,l){l=ui(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){dh||(dh=!0,Tp=h),ap(i,o)},l}function Fv(i,o,l){l=ui(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){ap(i,o)}}var y=i.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){ap(i,o),typeof h!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})}),l}function Uv(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new JA;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=dR.bind(null,i,o,l),o.then(i,i))}function jv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Bv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=ui(-1,1),o.tag=2,Wi(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var ZA=J.ReactCurrentOwner,_n=!1;function hn(i,o,l,h){o.child=i===null?av(o,null,l,h):Ra(o,i.child,l,h)}function zv(i,o,l,h,p){l=l.render;var y=o.ref;return Ca(o,p),h=Jf(i,o,l,h,y,p),l=Zf(),i!==null&&!_n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ci(i,o,p)):(ot&&l&&Mf(o),o.flags|=1,hn(i,o,h,p),o.child)}function $v(i,o,l,h,p){if(i===null){var y=l.type;return typeof y=="function"&&!kp(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=y,qv(i,o,y,h,p)):(i=vh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(y=i.child,(i.lanes&p)===0){var E=y.memoizedProps;if(l=l.compare,l=l!==null?l:$l,l(E,h)&&i.ref===o.ref)return ci(i,o,p)}return o.flags|=1,i=Ji(y,h),i.ref=o.ref,i.return=o,o.child=i}function qv(i,o,l,h,p){if(i!==null){var y=i.memoizedProps;if($l(y,h)&&i.ref===o.ref)if(_n=!1,o.pendingProps=h=y,(i.lanes&p)!==0)(i.flags&131072)!==0&&(_n=!0);else return o.lanes=i.lanes,ci(i,o,p)}return lp(i,o,l,h,p)}function Hv(i,o,l){var h=o.pendingProps,p=h.children,y=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(xa,Dn),Dn|=l;else{if((l&1073741824)===0)return i=y!==null?y.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Je(xa,Dn),Dn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:l,Je(xa,Dn),Dn|=h}else y!==null?(h=y.baseLanes|l,o.memoizedState=null):h=l,Je(xa,Dn),Dn|=h;return hn(i,o,p,l),o.child}function Wv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function lp(i,o,l,h,p){var y=vn(l)?to:Xt.current;return y=Ta(o,y),Ca(o,p),l=Jf(i,o,l,h,y,p),h=Zf(),i!==null&&!_n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ci(i,o,p)):(ot&&h&&Mf(o),o.flags|=1,hn(i,o,l,p),o.child)}function Gv(i,o,l,h,p){if(vn(l)){var y=!0;$c(o)}else y=!1;if(Ca(o,p),o.stateNode===null)ah(i,o),Mv(o,l,h),sp(o,l,h,p),h=!0;else if(i===null){var E=o.stateNode,R=o.memoizedProps;E.props=R;var x=E.context,z=l.contextType;typeof z=="object"&&z!==null?z=Wn(z):(z=vn(l)?to:Xt.current,z=Ta(o,z));var ee=l.getDerivedStateFromProps,te=typeof ee=="function"||typeof E.getSnapshotBeforeUpdate=="function";te||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(R!==h||x!==z)&&Lv(o,E,h,z),Hi=!1;var Z=o.memoizedState;E.state=Z,Jc(o,h,E,p),x=o.memoizedState,R!==h||Z!==x||yn.current||Hi?(typeof ee=="function"&&(ip(o,l,ee,h),x=o.memoizedState),(R=Hi||Dv(o,l,R,h,Z,x,z))?(te||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(o.flags|=4194308)):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=x),E.props=h,E.state=x,E.context=z,h=R):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{E=o.stateNode,uv(i,o),R=o.memoizedProps,z=o.type===o.elementType?R:dr(o.type,R),E.props=z,te=o.pendingProps,Z=E.context,x=l.contextType,typeof x=="object"&&x!==null?x=Wn(x):(x=vn(l)?to:Xt.current,x=Ta(o,x));var ue=l.getDerivedStateFromProps;(ee=typeof ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(R!==te||Z!==x)&&Lv(o,E,h,x),Hi=!1,Z=o.memoizedState,E.state=Z,Jc(o,h,E,p);var fe=o.memoizedState;R!==te||Z!==fe||yn.current||Hi?(typeof ue=="function"&&(ip(o,l,ue,h),fe=o.memoizedState),(z=Hi||Dv(o,l,z,h,Z,fe,x)||!1)?(ee||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,fe,x),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,fe,x)),typeof E.componentDidUpdate=="function"&&(o.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof E.componentDidUpdate!="function"||R===i.memoizedProps&&Z===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&Z===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=fe),E.props=h,E.state=fe,E.context=x,h=z):(typeof E.componentDidUpdate!="function"||R===i.memoizedProps&&Z===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&Z===i.memoizedState||(o.flags|=1024),h=!1)}return up(i,o,l,h,y,p)}function up(i,o,l,h,p,y){Wv(i,o);var E=(o.flags&128)!==0;if(!h&&!E)return p&&Jy(o,l,!1),ci(i,o,y);h=o.stateNode,ZA.current=o;var R=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&E?(o.child=Ra(o,i.child,null,y),o.child=Ra(o,null,R,y)):hn(i,o,R,y),o.memoizedState=h.state,p&&Jy(o,l,!0),o.child}function Kv(i){var o=i.stateNode;o.pendingContext?Yy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Yy(i,o.context,!1),Wf(i,o.containerInfo)}function Qv(i,o,l,h,p){return Aa(),Uf(p),o.flags|=256,hn(i,o,l,h),o.child}var cp={dehydrated:null,treeContext:null,retryLane:0};function hp(i){return{baseLanes:i,cachePool:null,transitions:null}}function Yv(i,o,l){var h=o.pendingProps,p=at.current,y=!1,E=(o.flags&128)!==0,R;if((R=E)||(R=i!==null&&i.memoizedState===null?!1:(p&2)!==0),R?(y=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Je(at,p&1),i===null)return Ff(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(E=h.children,i=h.fallback,y?(h=o.mode,y=o.child,E={mode:"hidden",children:E},(h&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=E):y=_h(E,h,0,null),i=ho(i,h,l,null),y.return=o,i.return=o,y.sibling=i,o.child=y,o.child.memoizedState=hp(l),o.memoizedState=cp,i):dp(o,E));if(p=i.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return eR(i,o,E,h,R,p,l);if(y){y=h.fallback,E=o.mode,p=i.child,R=p.sibling;var x={mode:"hidden",children:h.children};return(E&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=x,o.deletions=null):(h=Ji(p,x),h.subtreeFlags=p.subtreeFlags&14680064),R!==null?y=Ji(R,y):(y=ho(y,E,l,null),y.flags|=2),y.return=o,h.return=o,h.sibling=y,o.child=h,h=y,y=o.child,E=i.child.memoizedState,E=E===null?hp(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=i.childLanes&~l,o.memoizedState=cp,h}return y=i.child,i=y.sibling,h=Ji(y,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function dp(i,o){return o=_h({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function oh(i,o,l,h){return h!==null&&Uf(h),Ra(o,i.child,null,l),i=dp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function eR(i,o,l,h,p,y,E){if(l)return o.flags&256?(o.flags&=-257,h=op(Error(t(422))),oh(i,o,E,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(y=h.fallback,p=o.mode,h=_h({mode:"visible",children:h.children},p,0,null),y=ho(y,p,E,null),y.flags|=2,h.return=o,y.return=o,h.sibling=y,o.child=h,(o.mode&1)!==0&&Ra(o,i.child,null,E),o.child.memoizedState=hp(E),o.memoizedState=cp,y);if((o.mode&1)===0)return oh(i,o,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var R=h.dgst;return h=R,y=Error(t(419)),h=op(y,h,void 0),oh(i,o,E,h)}if(R=(E&i.childLanes)!==0,_n||R){if(h=Ut,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,li(i,p),mr(h,i,p,-1))}return Cp(),h=op(Error(t(421))),oh(i,o,E,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=fR.bind(null,i),p._reactRetry=o,null):(i=y.treeContext,On=Bi(p.nextSibling),xn=o,ot=!0,hr=null,i!==null&&(qn[Hn++]=oi,qn[Hn++]=ai,qn[Hn++]=no,oi=i.id,ai=i.overflow,no=o),o=dp(o,h.children),o.flags|=4096,o)}function Xv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),$f(i.return,o,l)}function fp(i,o,l,h,p){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=p)}function Jv(i,o,l){var h=o.pendingProps,p=h.revealOrder,y=h.tail;if(hn(i,o,h.children,l),h=at.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Xv(i,l,o);else if(i.tag===19)Xv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Je(at,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Zc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),fp(o,!1,p,l,y);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Zc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}fp(o,!0,l,null,y);break;case"together":fp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ah(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ci(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),ao|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Ji(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Ji(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function tR(i,o,l){switch(o.tag){case 3:Kv(o),Aa();break;case 5:dv(o);break;case 1:vn(o.type)&&$c(o);break;case 4:Wf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;Je(Qc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Je(at,at.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Yv(i,o,l):(Je(at,at.current&1),i=ci(i,o,l),i!==null?i.sibling:null);Je(at,at.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return Jv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Je(at,at.current),h)break;return null;case 22:case 23:return o.lanes=0,Hv(i,o,l)}return ci(i,o,l)}var Zv,pp,e_,t_;Zv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},pp=function(){},e_=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,so(br.current);var y=null;switch(l){case"input":p=Fs(i,p),h=Fs(i,h),y=[];break;case"select":p=le({},p,{value:void 0}),h=le({},h,{value:void 0}),y=[];break;case"textarea":p=vl(i,p),h=vl(i,h),y=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=jc)}Sl(l,h);var E;l=null;for(z in p)if(!h.hasOwnProperty(z)&&p.hasOwnProperty(z)&&p[z]!=null)if(z==="style"){var R=p[z];for(E in R)R.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(s.hasOwnProperty(z)?y||(y=[]):(y=y||[]).push(z,null));for(z in h){var x=h[z];if(R=p!=null?p[z]:void 0,h.hasOwnProperty(z)&&x!==R&&(x!=null||R!=null))if(z==="style")if(R){for(E in R)!R.hasOwnProperty(E)||x&&x.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in x)x.hasOwnProperty(E)&&R[E]!==x[E]&&(l||(l={}),l[E]=x[E])}else l||(y||(y=[]),y.push(z,l)),l=x;else z==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,R=R?R.__html:void 0,x!=null&&R!==x&&(y=y||[]).push(z,x)):z==="children"?typeof x!="string"&&typeof x!="number"||(y=y||[]).push(z,""+x):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(s.hasOwnProperty(z)?(x!=null&&z==="onScroll"&&tt("scroll",i),y||R===x||(y=[])):(y=y||[]).push(z,x))}l&&(y=y||[]).push("style",l);var z=y;(o.updateQueue=z)&&(o.flags|=4)}},t_=function(i,o,l,h){l!==h&&(o.flags|=4)};function iu(i,o){if(!ot)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Zt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function nR(i,o,l){var h=o.pendingProps;switch(Lf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(o),null;case 1:return vn(o.type)&&zc(),Zt(o),null;case 3:return h=o.stateNode,ka(),nt(yn),nt(Xt),Qf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Gc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,hr!==null&&(Ap(hr),hr=null))),pp(i,o),Zt(o),null;case 5:Gf(o);var p=so(Zl.current);if(l=o.type,i!==null&&o.stateNode!=null)e_(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Zt(o),null}if(i=so(br.current),Gc(o)){h=o.stateNode,l=o.type;var y=o.memoizedProps;switch(h[kr]=o,h[Kl]=y,i=(o.mode&1)!==0,l){case"dialog":tt("cancel",h),tt("close",h);break;case"iframe":case"object":case"embed":tt("load",h);break;case"video":case"audio":for(p=0;p<Hl.length;p++)tt(Hl[p],h);break;case"source":tt("error",h);break;case"img":case"image":case"link":tt("error",h),tt("load",h);break;case"details":tt("toggle",h);break;case"input":qo(h,y),tt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},tt("invalid",h);break;case"textarea":Wo(h,y),tt("invalid",h)}Sl(l,y),p=null;for(var E in y)if(y.hasOwnProperty(E)){var R=y[E];E==="children"?typeof R=="string"?h.textContent!==R&&(y.suppressHydrationWarning!==!0&&Uc(h.textContent,R,i),p=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(y.suppressHydrationWarning!==!0&&Uc(h.textContent,R,i),p=["children",""+R]):s.hasOwnProperty(E)&&R!=null&&E==="onScroll"&&tt("scroll",h)}switch(l){case"input":Kr(h),hc(h,y,!0);break;case"textarea":Kr(h),_l(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=jc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ct(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[kr]=o,i[Kl]=h,Zv(i,o,!1,!1),o.stateNode=i;e:{switch(E=Al(l,h),l){case"dialog":tt("cancel",i),tt("close",i),p=h;break;case"iframe":case"object":case"embed":tt("load",i),p=h;break;case"video":case"audio":for(p=0;p<Hl.length;p++)tt(Hl[p],i);p=h;break;case"source":tt("error",i),p=h;break;case"img":case"image":case"link":tt("error",i),tt("load",i),p=h;break;case"details":tt("toggle",i),p=h;break;case"input":qo(i,h),p=Fs(i,h),tt("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=le({},h,{value:void 0}),tt("invalid",i);break;case"textarea":Wo(i,h),p=vl(i,h),tt("invalid",i);break;default:p=h}Sl(l,p),R=p;for(y in R)if(R.hasOwnProperty(y)){var x=R[y];y==="style"?Tl(i,x):y==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&wl(i,x)):y==="children"?typeof x=="string"?(l!=="textarea"||x!=="")&&bi(i,x):typeof x=="number"&&bi(i,""+x):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?x!=null&&y==="onScroll"&&tt("scroll",i):x!=null&&q(i,y,x,E))}switch(l){case"input":Kr(i),hc(i,h,!1);break;case"textarea":Kr(i),_l(i);break;case"option":h.value!=null&&i.setAttribute("value",""+$e(h.value));break;case"select":i.multiple=!!h.multiple,y=h.value,y!=null?Yr(i,!!h.multiple,y,!1):h.defaultValue!=null&&Yr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=jc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Zt(o),null;case 6:if(i&&o.stateNode!=null)t_(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=so(Zl.current),so(br.current),Gc(o)){if(h=o.stateNode,l=o.memoizedProps,h[kr]=o,(y=h.nodeValue!==l)&&(i=xn,i!==null))switch(i.tag){case 3:Uc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Uc(h.nodeValue,l,(i.mode&1)!==0)}y&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[kr]=o,o.stateNode=h}return Zt(o),null;case 13:if(nt(at),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ot&&On!==null&&(o.mode&1)!==0&&(o.flags&128)===0)iv(),Aa(),o.flags|=98560,y=!1;else if(y=Gc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[kr]=o}else Aa(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Zt(o),y=!1}else hr!==null&&(Ap(hr),hr=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(at.current&1)!==0?xt===0&&(xt=3):Cp())),o.updateQueue!==null&&(o.flags|=4),Zt(o),null);case 4:return ka(),pp(i,o),i===null&&Wl(o.stateNode.containerInfo),Zt(o),null;case 10:return zf(o.type._context),Zt(o),null;case 17:return vn(o.type)&&zc(),Zt(o),null;case 19:if(nt(at),y=o.memoizedState,y===null)return Zt(o),null;if(h=(o.flags&128)!==0,E=y.rendering,E===null)if(h)iu(y,!1);else{if(xt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(E=Zc(i),E!==null){for(o.flags|=128,iu(y,!1),h=E.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)y=l,i=h,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=i,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,i=E.dependencies,y.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Je(at,at.current&1|2),o.child}i=i.sibling}y.tail!==null&&Xe()>Oa&&(o.flags|=128,h=!0,iu(y,!1),o.lanes=4194304)}else{if(!h)if(i=Zc(E),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),iu(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!ot)return Zt(o),null}else 2*Xe()-y.renderingStartTime>Oa&&l!==1073741824&&(o.flags|=128,h=!0,iu(y,!1),o.lanes=4194304);y.isBackwards?(E.sibling=o.child,o.child=E):(l=y.last,l!==null?l.sibling=E:o.child=E,y.last=E)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=Xe(),o.sibling=null,l=at.current,Je(at,h?l&1|2:l&1),o):(Zt(o),null);case 22:case 23:return Pp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Dn&1073741824)!==0&&(Zt(o),o.subtreeFlags&6&&(o.flags|=8192)):Zt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function rR(i,o){switch(Lf(o),o.tag){case 1:return vn(o.type)&&zc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ka(),nt(yn),nt(Xt),Qf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Gf(o),null;case 13:if(nt(at),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Aa()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return nt(at),null;case 4:return ka(),null;case 10:return zf(o.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var lh=!1,en=!1,iR=typeof WeakSet=="function"?WeakSet:Set,de=null;function Na(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ct(i,o,h)}else l.current=null}function mp(i,o,l){try{l()}catch(h){ct(i,o,h)}}var n_=!1;function sR(i,o){if(Pf=Fi,i=Dy(),_f(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var E=0,R=-1,x=-1,z=0,ee=0,te=i,Z=null;t:for(;;){for(var ue;te!==l||p!==0&&te.nodeType!==3||(R=E+p),te!==y||h!==0&&te.nodeType!==3||(x=E+h),te.nodeType===3&&(E+=te.nodeValue.length),(ue=te.firstChild)!==null;)Z=te,te=ue;for(;;){if(te===i)break t;if(Z===l&&++z===p&&(R=E),Z===y&&++ee===h&&(x=E),(ue=te.nextSibling)!==null)break;te=Z,Z=te.parentNode}te=ue}l=R===-1||x===-1?null:{start:R,end:x}}else l=null}l=l||{start:0,end:0}}else l=null;for(Cf={focusedElem:i,selectionRange:l},Fi=!1,de=o;de!==null;)if(o=de,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,de=i;else for(;de!==null;){o=de;try{var fe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var pe=fe.memoizedProps,_t=fe.memoizedState,j=o.stateNode,L=j.getSnapshotBeforeUpdate(o.elementType===o.type?pe:dr(o.type,pe),_t);j.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var B=o.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(re){ct(o,o.return,re)}if(i=o.sibling,i!==null){i.return=o.return,de=i;break}de=o.return}return fe=n_,n_=!1,fe}function su(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var y=p.destroy;p.destroy=void 0,y!==void 0&&mp(o,l,y)}p=p.next}while(p!==h)}}function uh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function gp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function r_(i){var o=i.alternate;o!==null&&(i.alternate=null,r_(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[kr],delete o[Kl],delete o[xf],delete o[BA],delete o[zA])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function i_(i){return i.tag===5||i.tag===3||i.tag===4}function s_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||i_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function yp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=jc));else if(h!==4&&(i=i.child,i!==null))for(yp(i,o,l),i=i.sibling;i!==null;)yp(i,o,l),i=i.sibling}function vp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(vp(i,o,l),i=i.sibling;i!==null;)vp(i,o,l),i=i.sibling}var Ht=null,fr=!1;function Gi(i,o,l){for(l=l.child;l!==null;)o_(i,o,l),l=l.sibling}function o_(i,o,l){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Gs,l)}catch{}switch(l.tag){case 5:en||Na(l,o);case 6:var h=Ht,p=fr;Ht=null,Gi(i,o,l),Ht=h,fr=p,Ht!==null&&(fr?(i=Ht,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Ht.removeChild(l.stateNode));break;case 18:Ht!==null&&(fr?(i=Ht,l=l.stateNode,i.nodeType===8?Nf(i.parentNode,l):i.nodeType===1&&Nf(i,l),lr(i)):Nf(Ht,l.stateNode));break;case 4:h=Ht,p=fr,Ht=l.stateNode.containerInfo,fr=!0,Gi(i,o,l),Ht=h,fr=p;break;case 0:case 11:case 14:case 15:if(!en&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var y=p,E=y.destroy;y=y.tag,E!==void 0&&((y&2)!==0||(y&4)!==0)&&mp(l,o,E),p=p.next}while(p!==h)}Gi(i,o,l);break;case 1:if(!en&&(Na(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){ct(l,o,R)}Gi(i,o,l);break;case 21:Gi(i,o,l);break;case 22:l.mode&1?(en=(h=en)||l.memoizedState!==null,Gi(i,o,l),en=h):Gi(i,o,l);break;default:Gi(i,o,l)}}function a_(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new iR),o.forEach(function(h){var p=pR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function pr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var y=i,E=o,R=E;e:for(;R!==null;){switch(R.tag){case 5:Ht=R.stateNode,fr=!1;break e;case 3:Ht=R.stateNode.containerInfo,fr=!0;break e;case 4:Ht=R.stateNode.containerInfo,fr=!0;break e}R=R.return}if(Ht===null)throw Error(t(160));o_(y,E,p),Ht=null,fr=!1;var x=p.alternate;x!==null&&(x.return=null),p.return=null}catch(z){ct(p,o,z)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)l_(o,i),o=o.sibling}function l_(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(pr(o,i),xr(i),h&4){try{su(3,i,i.return),uh(3,i)}catch(pe){ct(i,i.return,pe)}try{su(5,i,i.return)}catch(pe){ct(i,i.return,pe)}}break;case 1:pr(o,i),xr(i),h&512&&l!==null&&Na(l,l.return);break;case 5:if(pr(o,i),xr(i),h&512&&l!==null&&Na(l,l.return),i.flags&32){var p=i.stateNode;try{bi(p,"")}catch(pe){ct(i,i.return,pe)}}if(h&4&&(p=i.stateNode,p!=null)){var y=i.memoizedProps,E=l!==null?l.memoizedProps:y,R=i.type,x=i.updateQueue;if(i.updateQueue=null,x!==null)try{R==="input"&&y.type==="radio"&&y.name!=null&&gl(p,y),Al(R,E);var z=Al(R,y);for(E=0;E<x.length;E+=2){var ee=x[E],te=x[E+1];ee==="style"?Tl(p,te):ee==="dangerouslySetInnerHTML"?wl(p,te):ee==="children"?bi(p,te):q(p,ee,te,z)}switch(R){case"input":yl(p,y);break;case"textarea":Go(p,y);break;case"select":var Z=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var ue=y.value;ue!=null?Yr(p,!!y.multiple,ue,!1):Z!==!!y.multiple&&(y.defaultValue!=null?Yr(p,!!y.multiple,y.defaultValue,!0):Yr(p,!!y.multiple,y.multiple?[]:"",!1))}p[Kl]=y}catch(pe){ct(i,i.return,pe)}}break;case 6:if(pr(o,i),xr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,y=i.memoizedProps;try{p.nodeValue=y}catch(pe){ct(i,i.return,pe)}}break;case 3:if(pr(o,i),xr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{lr(o.containerInfo)}catch(pe){ct(i,i.return,pe)}break;case 4:pr(o,i),xr(i);break;case 13:pr(o,i),xr(i),p=i.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(Ep=Xe())),h&4&&a_(i);break;case 22:if(ee=l!==null&&l.memoizedState!==null,i.mode&1?(en=(z=en)||ee,pr(o,i),en=z):pr(o,i),xr(i),h&8192){if(z=i.memoizedState!==null,(i.stateNode.isHidden=z)&&!ee&&(i.mode&1)!==0)for(de=i,ee=i.child;ee!==null;){for(te=de=ee;de!==null;){switch(Z=de,ue=Z.child,Z.tag){case 0:case 11:case 14:case 15:su(4,Z,Z.return);break;case 1:Na(Z,Z.return);var fe=Z.stateNode;if(typeof fe.componentWillUnmount=="function"){h=Z,l=Z.return;try{o=h,fe.props=o.memoizedProps,fe.state=o.memoizedState,fe.componentWillUnmount()}catch(pe){ct(h,l,pe)}}break;case 5:Na(Z,Z.return);break;case 22:if(Z.memoizedState!==null){h_(te);continue}}ue!==null?(ue.return=Z,de=ue):h_(te)}ee=ee.sibling}e:for(ee=null,te=i;;){if(te.tag===5){if(ee===null){ee=te;try{p=te.stateNode,z?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(R=te.stateNode,x=te.memoizedProps.style,E=x!=null&&x.hasOwnProperty("display")?x.display:null,R.style.display=El("display",E))}catch(pe){ct(i,i.return,pe)}}}else if(te.tag===6){if(ee===null)try{te.stateNode.nodeValue=z?"":te.memoizedProps}catch(pe){ct(i,i.return,pe)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===i)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===i)break e;for(;te.sibling===null;){if(te.return===null||te.return===i)break e;ee===te&&(ee=null),te=te.return}ee===te&&(ee=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:pr(o,i),xr(i),h&4&&a_(i);break;case 21:break;default:pr(o,i),xr(i)}}function xr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(i_(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(bi(p,""),h.flags&=-33);var y=s_(i);vp(i,y,p);break;case 3:case 4:var E=h.stateNode.containerInfo,R=s_(i);yp(i,R,E);break;default:throw Error(t(161))}}catch(x){ct(i,i.return,x)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function oR(i,o,l){de=i,u_(i)}function u_(i,o,l){for(var h=(i.mode&1)!==0;de!==null;){var p=de,y=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||lh;if(!E){var R=p.alternate,x=R!==null&&R.memoizedState!==null||en;R=lh;var z=en;if(lh=E,(en=x)&&!z)for(de=p;de!==null;)E=de,x=E.child,E.tag===22&&E.memoizedState!==null?d_(p):x!==null?(x.return=E,de=x):d_(p);for(;y!==null;)de=y,u_(y),y=y.sibling;de=p,lh=R,en=z}c_(i)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,de=y):c_(i)}}function c_(i){for(;de!==null;){var o=de;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:en||uh(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!en)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:dr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&hv(o,y,h);break;case 3:var E=o.updateQueue;if(E!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}hv(o,E,l)}break;case 5:var R=o.stateNode;if(l===null&&o.flags&4){l=R;var x=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&l.focus();break;case"img":x.src&&(l.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var z=o.alternate;if(z!==null){var ee=z.memoizedState;if(ee!==null){var te=ee.dehydrated;te!==null&&lr(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}en||o.flags&512&&gp(o)}catch(Z){ct(o,o.return,Z)}}if(o===i){de=null;break}if(l=o.sibling,l!==null){l.return=o.return,de=l;break}de=o.return}}function h_(i){for(;de!==null;){var o=de;if(o===i){de=null;break}var l=o.sibling;if(l!==null){l.return=o.return,de=l;break}de=o.return}}function d_(i){for(;de!==null;){var o=de;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{uh(4,o)}catch(x){ct(o,l,x)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(x){ct(o,p,x)}}var y=o.return;try{gp(o)}catch(x){ct(o,y,x)}break;case 5:var E=o.return;try{gp(o)}catch(x){ct(o,E,x)}}}catch(x){ct(o,o.return,x)}if(o===i){de=null;break}var R=o.sibling;if(R!==null){R.return=o.return,de=R;break}de=o.return}}var aR=Math.ceil,ch=J.ReactCurrentDispatcher,_p=J.ReactCurrentOwner,Kn=J.ReactCurrentBatchConfig,Ue=0,Ut=null,It=null,Wt=0,Dn=0,xa=zi(0),xt=0,ou=null,ao=0,hh=0,wp=0,au=null,wn=null,Ep=0,Oa=1/0,hi=null,dh=!1,Tp=null,Ki=null,fh=!1,Qi=null,ph=0,lu=0,Ip=null,mh=-1,gh=0;function dn(){return(Ue&6)!==0?Xe():mh!==-1?mh:mh=Xe()}function Yi(i){return(i.mode&1)===0?1:(Ue&2)!==0&&Wt!==0?Wt&-Wt:qA.transition!==null?(gh===0&&(gh=Qs()),gh):(i=De,i!==0||(i=window.event,i=i===void 0?16:Ll(i.type)),i)}function mr(i,o,l,h){if(50<lu)throw lu=0,Ip=null,Error(t(185));Di(i,l,h),((Ue&2)===0||i!==Ut)&&(i===Ut&&((Ue&2)===0&&(hh|=l),xt===4&&Xi(i,Wt)),En(i,h),l===1&&Ue===0&&(o.mode&1)===0&&(Oa=Xe()+500,qc&&qi()))}function En(i,o){var l=i.callbackNode;Zr(i,o);var h=Ks(i,i===Ut?Wt:0);if(h===0)l!==null&&Nl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&Nl(l),o===1)i.tag===0?$A(p_.bind(null,i)):Zy(p_.bind(null,i)),UA(function(){(Ue&6)===0&&qi()}),l=null;else{switch(Li(h)){case 1:l=Ws;break;case 4:l=Ni;break;case 16:l=Bn;break;case 536870912:l=gc;break;default:l=Bn}l=T_(l,f_.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function f_(i,o){if(mh=-1,gh=0,(Ue&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Da()&&i.callbackNode!==l)return null;var h=Ks(i,i===Ut?Wt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=yh(i,h);else{o=h;var p=Ue;Ue|=2;var y=g_();(Ut!==i||Wt!==o)&&(hi=null,Oa=Xe()+500,uo(i,o));do try{cR();break}catch(R){m_(i,R)}while(!0);Bf(),ch.current=y,Ue=p,It!==null?o=0:(Ut=null,Wt=0,o=xt)}if(o!==0){if(o===2&&(p=kn(i),p!==0&&(h=p,o=Sp(i,p))),o===1)throw l=ou,uo(i,0),Xi(i,h),En(i,Xe()),l;if(o===6)Xi(i,h);else{if(p=i.current.alternate,(h&30)===0&&!lR(p)&&(o=yh(i,h),o===2&&(y=kn(i),y!==0&&(h=y,o=Sp(i,y))),o===1))throw l=ou,uo(i,0),Xi(i,h),En(i,Xe()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:co(i,wn,hi);break;case 3:if(Xi(i,h),(h&130023424)===h&&(o=Ep+500-Xe(),10<o)){if(Ks(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){dn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=bf(co.bind(null,i,wn,hi),o);break}co(i,wn,hi);break;case 4:if(Xi(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var E=31-un(h);y=1<<E,E=o[E],E>p&&(p=E),h&=~y}if(h=p,h=Xe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*aR(h/1960))-h,10<h){i.timeoutHandle=bf(co.bind(null,i,wn,hi),h);break}co(i,wn,hi);break;case 5:co(i,wn,hi);break;default:throw Error(t(329))}}}return En(i,Xe()),i.callbackNode===l?f_.bind(null,i):null}function Sp(i,o){var l=au;return i.current.memoizedState.isDehydrated&&(uo(i,o).flags|=256),i=yh(i,o),i!==2&&(o=wn,wn=l,o!==null&&Ap(o)),i}function Ap(i){wn===null?wn=i:wn.push.apply(wn,i)}function lR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],y=p.getSnapshot;p=p.value;try{if(!cr(y(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Xi(i,o){for(o&=~wp,o&=~hh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-un(o),h=1<<l;i[l]=-1,o&=~h}}function p_(i){if((Ue&6)!==0)throw Error(t(327));Da();var o=Ks(i,0);if((o&1)===0)return En(i,Xe()),null;var l=yh(i,o);if(i.tag!==0&&l===2){var h=kn(i);h!==0&&(o=h,l=Sp(i,h))}if(l===1)throw l=ou,uo(i,0),Xi(i,o),En(i,Xe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,co(i,wn,hi),En(i,Xe()),null}function Rp(i,o){var l=Ue;Ue|=1;try{return i(o)}finally{Ue=l,Ue===0&&(Oa=Xe()+500,qc&&qi())}}function lo(i){Qi!==null&&Qi.tag===0&&(Ue&6)===0&&Da();var o=Ue;Ue|=1;var l=Kn.transition,h=De;try{if(Kn.transition=null,De=1,i)return i()}finally{De=h,Kn.transition=l,Ue=o,(Ue&6)===0&&qi()}}function Pp(){Dn=xa.current,nt(xa)}function uo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,FA(l)),It!==null)for(l=It.return;l!==null;){var h=l;switch(Lf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&zc();break;case 3:ka(),nt(yn),nt(Xt),Qf();break;case 5:Gf(h);break;case 4:ka();break;case 13:nt(at);break;case 19:nt(at);break;case 10:zf(h.type._context);break;case 22:case 23:Pp()}l=l.return}if(Ut=i,It=i=Ji(i.current,null),Wt=Dn=o,xt=0,ou=null,wp=hh=ao=0,wn=au=null,io!==null){for(o=0;o<io.length;o++)if(l=io[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,y=l.pending;if(y!==null){var E=y.next;y.next=p,h.next=E}l.pending=h}io=null}return i}function m_(i,o){do{var l=It;try{if(Bf(),eh.current=ih,th){for(var h=lt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}th=!1}if(oo=0,Ft=Nt=lt=null,eu=!1,tu=0,_p.current=null,l===null||l.return===null){xt=1,ou=o,It=null;break}e:{var y=i,E=l.return,R=l,x=o;if(o=Wt,R.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var z=x,ee=R,te=ee.tag;if((ee.mode&1)===0&&(te===0||te===11||te===15)){var Z=ee.alternate;Z?(ee.updateQueue=Z.updateQueue,ee.memoizedState=Z.memoizedState,ee.lanes=Z.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var ue=jv(E);if(ue!==null){ue.flags&=-257,Bv(ue,E,R,y,o),ue.mode&1&&Uv(y,z,o),o=ue,x=z;var fe=o.updateQueue;if(fe===null){var pe=new Set;pe.add(x),o.updateQueue=pe}else fe.add(x);break e}else{if((o&1)===0){Uv(y,z,o),Cp();break e}x=Error(t(426))}}else if(ot&&R.mode&1){var _t=jv(E);if(_t!==null){(_t.flags&65536)===0&&(_t.flags|=256),Bv(_t,E,R,y,o),Uf(ba(x,R));break e}}y=x=ba(x,R),xt!==4&&(xt=2),au===null?au=[y]:au.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var j=Vv(y,x,o);cv(y,j);break e;case 1:R=x;var L=y.type,B=y.stateNode;if((y.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ki===null||!Ki.has(B)))){y.flags|=65536,o&=-o,y.lanes|=o;var re=Fv(y,R,o);cv(y,re);break e}}y=y.return}while(y!==null)}v_(l)}catch(me){o=me,It===l&&l!==null&&(It=l=l.return);continue}break}while(!0)}function g_(){var i=ch.current;return ch.current=ih,i===null?ih:i}function Cp(){(xt===0||xt===3||xt===2)&&(xt=4),Ut===null||(ao&268435455)===0&&(hh&268435455)===0||Xi(Ut,Wt)}function yh(i,o){var l=Ue;Ue|=2;var h=g_();(Ut!==i||Wt!==o)&&(hi=null,uo(i,o));do try{uR();break}catch(p){m_(i,p)}while(!0);if(Bf(),Ue=l,ch.current=h,It!==null)throw Error(t(261));return Ut=null,Wt=0,xt}function uR(){for(;It!==null;)y_(It)}function cR(){for(;It!==null&&!pc();)y_(It)}function y_(i){var o=E_(i.alternate,i,Dn);i.memoizedProps=i.pendingProps,o===null?v_(i):It=o,_p.current=null}function v_(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=nR(l,o,Dn),l!==null){It=l;return}}else{if(l=rR(l,o),l!==null){l.flags&=32767,It=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{xt=6,It=null;return}}if(o=o.sibling,o!==null){It=o;return}It=o=i}while(o!==null);xt===0&&(xt=5)}function co(i,o,l){var h=De,p=Kn.transition;try{Kn.transition=null,De=1,hR(i,o,l,h)}finally{Kn.transition=p,De=h}return null}function hR(i,o,l,h){do Da();while(Qi!==null);if((Ue&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var y=l.lanes|l.childLanes;if(Ke(i,y),i===Ut&&(It=Ut=null,Wt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||fh||(fh=!0,T_(Bn,function(){return Da(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=Kn.transition,Kn.transition=null;var E=De;De=1;var R=Ue;Ue|=4,_p.current=null,sR(i,l),l_(l,i),NA(Cf),Fi=!!Pf,Cf=Pf=null,i.current=l,oR(l),hf(),Ue=R,De=E,Kn.transition=y}else i.current=l;if(fh&&(fh=!1,Qi=i,ph=p),y=i.pendingLanes,y===0&&(Ki=null),yc(l.stateNode),En(i,Xe()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(dh)throw dh=!1,i=Tp,Tp=null,i;return(ph&1)!==0&&i.tag!==0&&Da(),y=i.pendingLanes,(y&1)!==0?i===Ip?lu++:(lu=0,Ip=i):lu=0,qi(),null}function Da(){if(Qi!==null){var i=Li(ph),o=Kn.transition,l=De;try{if(Kn.transition=null,De=16>i?16:i,Qi===null)var h=!1;else{if(i=Qi,Qi=null,ph=0,(Ue&6)!==0)throw Error(t(331));var p=Ue;for(Ue|=4,de=i.current;de!==null;){var y=de,E=y.child;if((de.flags&16)!==0){var R=y.deletions;if(R!==null){for(var x=0;x<R.length;x++){var z=R[x];for(de=z;de!==null;){var ee=de;switch(ee.tag){case 0:case 11:case 15:su(8,ee,y)}var te=ee.child;if(te!==null)te.return=ee,de=te;else for(;de!==null;){ee=de;var Z=ee.sibling,ue=ee.return;if(r_(ee),ee===z){de=null;break}if(Z!==null){Z.return=ue,de=Z;break}de=ue}}}var fe=y.alternate;if(fe!==null){var pe=fe.child;if(pe!==null){fe.child=null;do{var _t=pe.sibling;pe.sibling=null,pe=_t}while(pe!==null)}}de=y}}if((y.subtreeFlags&2064)!==0&&E!==null)E.return=y,de=E;else e:for(;de!==null;){if(y=de,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:su(9,y,y.return)}var j=y.sibling;if(j!==null){j.return=y.return,de=j;break e}de=y.return}}var L=i.current;for(de=L;de!==null;){E=de;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,de=B;else e:for(E=L;de!==null;){if(R=de,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:uh(9,R)}}catch(me){ct(R,R.return,me)}if(R===E){de=null;break e}var re=R.sibling;if(re!==null){re.return=R.return,de=re;break e}de=R.return}}if(Ue=p,qi(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Gs,i)}catch{}h=!0}return h}finally{De=l,Kn.transition=o}}return!1}function __(i,o,l){o=ba(l,o),o=Vv(i,o,1),i=Wi(i,o,1),o=dn(),i!==null&&(Di(i,1,o),En(i,o))}function ct(i,o,l){if(i.tag===3)__(i,i,l);else for(;o!==null;){if(o.tag===3){__(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ki===null||!Ki.has(h))){i=ba(l,i),i=Fv(o,i,1),o=Wi(o,i,1),i=dn(),o!==null&&(Di(o,1,i),En(o,i));break}}o=o.return}}function dR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=dn(),i.pingedLanes|=i.suspendedLanes&l,Ut===i&&(Wt&l)===l&&(xt===4||xt===3&&(Wt&130023424)===Wt&&500>Xe()-Ep?uo(i,0):wp|=l),En(i,o)}function w_(i,o){o===0&&((i.mode&1)===0?o=1:(o=ra,ra<<=1,(ra&130023424)===0&&(ra=4194304)));var l=dn();i=li(i,o),i!==null&&(Di(i,o,l),En(i,l))}function fR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),w_(i,l)}function pR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),w_(i,l)}var E_;E_=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||yn.current)_n=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return _n=!1,tR(i,o,l);_n=(i.flags&131072)!==0}else _n=!1,ot&&(o.flags&1048576)!==0&&ev(o,Wc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;ah(i,o),i=o.pendingProps;var p=Ta(o,Xt.current);Ca(o,l),p=Jf(null,o,h,i,p,l);var y=Zf();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,vn(h)?(y=!0,$c(o)):y=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Hf(o),p.updater=sh,o.stateNode=p,p._reactInternals=o,sp(o,h,i,l),o=up(null,o,h,!0,y,l)):(o.tag=0,ot&&y&&Mf(o),hn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(ah(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=gR(h),i=dr(h,i),p){case 0:o=lp(null,o,h,i,l);break e;case 1:o=Gv(null,o,h,i,l);break e;case 11:o=zv(null,o,h,i,l);break e;case 14:o=$v(null,o,h,dr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:dr(h,p),lp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:dr(h,p),Gv(i,o,h,p,l);case 3:e:{if(Kv(o),i===null)throw Error(t(387));h=o.pendingProps,y=o.memoizedState,p=y.element,uv(i,o),Jc(o,h,null,l);var E=o.memoizedState;if(h=E.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){p=ba(Error(t(423)),o),o=Qv(i,o,h,l,p);break e}else if(h!==p){p=ba(Error(t(424)),o),o=Qv(i,o,h,l,p);break e}else for(On=Bi(o.stateNode.containerInfo.firstChild),xn=o,ot=!0,hr=null,l=av(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Aa(),h===p){o=ci(i,o,l);break e}hn(i,o,h,l)}o=o.child}return o;case 5:return dv(o),i===null&&Ff(o),h=o.type,p=o.pendingProps,y=i!==null?i.memoizedProps:null,E=p.children,kf(h,p)?E=null:y!==null&&kf(h,y)&&(o.flags|=32),Wv(i,o),hn(i,o,E,l),o.child;case 6:return i===null&&Ff(o),null;case 13:return Yv(i,o,l);case 4:return Wf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Ra(o,null,h,l):hn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:dr(h,p),zv(i,o,h,p,l);case 7:return hn(i,o,o.pendingProps,l),o.child;case 8:return hn(i,o,o.pendingProps.children,l),o.child;case 12:return hn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,y=o.memoizedProps,E=p.value,Je(Qc,h._currentValue),h._currentValue=E,y!==null)if(cr(y.value,E)){if(y.children===p.children&&!yn.current){o=ci(i,o,l);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var R=y.dependencies;if(R!==null){E=y.child;for(var x=R.firstContext;x!==null;){if(x.context===h){if(y.tag===1){x=ui(-1,l&-l),x.tag=2;var z=y.updateQueue;if(z!==null){z=z.shared;var ee=z.pending;ee===null?x.next=x:(x.next=ee.next,ee.next=x),z.pending=x}}y.lanes|=l,x=y.alternate,x!==null&&(x.lanes|=l),$f(y.return,l,o),R.lanes|=l;break}x=x.next}}else if(y.tag===10)E=y.type===o.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(t(341));E.lanes|=l,R=E.alternate,R!==null&&(R.lanes|=l),$f(E,l,o),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===o){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}hn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,Ca(o,l),p=Wn(p),h=h(p),o.flags|=1,hn(i,o,h,l),o.child;case 14:return h=o.type,p=dr(h,o.pendingProps),p=dr(h.type,p),$v(i,o,h,p,l);case 15:return qv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:dr(h,p),ah(i,o),o.tag=1,vn(h)?(i=!0,$c(o)):i=!1,Ca(o,l),Mv(o,h,p),sp(o,h,p,l),up(null,o,h,!0,i,l);case 19:return Jv(i,o,l);case 22:return Hv(i,o,l)}throw Error(t(156,o.tag))};function T_(i,o){return ta(i,o)}function mR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(i,o,l,h){return new mR(i,o,l,h)}function kp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function gR(i){if(typeof i=="function")return kp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===D)return 11;if(i===Pt)return 14}return 2}function Ji(i,o){var l=i.alternate;return l===null?(l=Qn(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function vh(i,o,l,h,p,y){var E=2;if(h=i,typeof i=="function")kp(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case O:return ho(l.children,p,y,o);case S:E=8,p|=8;break;case A:return i=Qn(12,l,o,p|2),i.elementType=A,i.lanes=y,i;case P:return i=Qn(13,l,o,p),i.elementType=P,i.lanes=y,i;case Qe:return i=Qn(19,l,o,p),i.elementType=Qe,i.lanes=y,i;case Be:return _h(l,p,y,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:E=10;break e;case M:E=9;break e;case D:E=11;break e;case Pt:E=14;break e;case yt:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Qn(E,l,o,p),o.elementType=i,o.type=h,o.lanes=y,o}function ho(i,o,l,h){return i=Qn(7,i,h,o),i.lanes=l,i}function _h(i,o,l,h){return i=Qn(22,i,h,o),i.elementType=Be,i.lanes=l,i.stateNode={isHidden:!1},i}function bp(i,o,l){return i=Qn(6,i,null,o),i.lanes=l,i}function Np(i,o,l){return o=Qn(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function yR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function xp(i,o,l,h,p,y,E,R,x){return i=new yR(i,o,l,R,x),o===1?(o=1,y===!0&&(o|=8)):o=0,y=Qn(3,null,null,o),i.current=y,y.stateNode=i,y.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(y),i}function vR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function I_(i){if(!i)return $i;i=i._reactInternals;e:{if(rr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(vn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(vn(l))return Xy(i,l,o)}return o}function S_(i,o,l,h,p,y,E,R,x){return i=xp(l,h,!0,i,p,y,E,R,x),i.context=I_(null),l=i.current,h=dn(),p=Yi(l),y=ui(h,p),y.callback=o??null,Wi(l,y,p),i.current.lanes=p,Di(i,p,h),En(i,h),i}function wh(i,o,l,h){var p=o.current,y=dn(),E=Yi(p);return l=I_(l),o.context===null?o.context=l:o.pendingContext=l,o=ui(y,E),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Wi(p,o,E),i!==null&&(mr(i,p,E,y),Xc(i,p,E)),E}function Eh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function A_(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Op(i,o){A_(i,o),(i=i.alternate)&&A_(i,o)}function _R(){return null}var R_=typeof reportError=="function"?reportError:function(i){console.error(i)};function Dp(i){this._internalRoot=i}Th.prototype.render=Dp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));wh(i,o,null,null)},Th.prototype.unmount=Dp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;lo(function(){wh(null,i,null,null)}),o[ii]=null}};function Th(i){this._internalRoot=i}Th.prototype.unstable_scheduleHydration=function(i){if(i){var o=Tc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<Ar.length&&o!==0&&o<Ar[l].priority;l++);Ar.splice(l,0,i),l===0&&Ac(i)}};function Mp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ih(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function P_(){}function wR(i,o,l,h,p){if(p){if(typeof h=="function"){var y=h;h=function(){var z=Eh(E);y.call(z)}}var E=S_(o,h,i,0,null,!1,!1,"",P_);return i._reactRootContainer=E,i[ii]=E.current,Wl(i.nodeType===8?i.parentNode:i),lo(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var R=h;h=function(){var z=Eh(x);R.call(z)}}var x=xp(i,0,!1,null,null,!1,!1,"",P_);return i._reactRootContainer=x,i[ii]=x.current,Wl(i.nodeType===8?i.parentNode:i),lo(function(){wh(o,x,l,h)}),x}function Sh(i,o,l,h,p){var y=l._reactRootContainer;if(y){var E=y;if(typeof p=="function"){var R=p;p=function(){var x=Eh(E);R.call(x)}}wh(o,E,i,p)}else E=wR(l,o,i,p,h);return Eh(E)}wc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=xi(o.pendingLanes);l!==0&&(Mi(o,l|1),En(o,Xe()),(Ue&6)===0&&(Oa=Xe()+500,qi()))}break;case 13:lo(function(){var h=li(i,1);if(h!==null){var p=dn();mr(h,i,1,p)}}),Op(i,1)}},ia=function(i){if(i.tag===13){var o=li(i,134217728);if(o!==null){var l=dn();mr(o,i,134217728,l)}Op(i,134217728)}},Ec=function(i){if(i.tag===13){var o=Yi(i),l=li(i,o);if(l!==null){var h=dn();mr(l,i,o,h)}Op(i,o)}},Tc=function(){return De},Ic=function(i,o){var l=De;try{return De=i,o()}finally{De=l}},Qo=function(i,o,l){switch(o){case"input":if(yl(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Bc(h);if(!p)throw Error(t(90));$o(h),yl(h,p)}}}break;case"textarea":Go(i,l);break;case"select":o=l.value,o!=null&&Yr(i,!!l.multiple,o,!1)}},zs=Rp,Pl=lo;var ER={usingClientEntryPoint:!1,Events:[Ql,wa,Bc,Ir,Rl,Rp]},uu={findFiberByHostInstance:eo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TR={bundleType:uu.bundleType,version:uu.version,rendererPackageName:uu.rendererPackageName,rendererConfig:uu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=bl(i),i===null?null:i.stateNode},findFiberByHostInstance:uu.findFiberByHostInstance||_R,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ah=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ah.isDisabled&&Ah.supportsFiber)try{Gs=Ah.inject(TR),Cn=Ah}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ER,Tn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mp(o))throw Error(t(200));return vR(i,o,null,l)},Tn.createRoot=function(i,o){if(!Mp(i))throw Error(t(299));var l=!1,h="",p=R_;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=xp(i,1,!1,null,null,l,!1,h,p),i[ii]=o.current,Wl(i.nodeType===8?i.parentNode:i),new Dp(o)},Tn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=bl(o),i=i===null?null:i.stateNode,i},Tn.flushSync=function(i){return lo(i)},Tn.hydrate=function(i,o,l){if(!Ih(o))throw Error(t(200));return Sh(null,i,o,!0,l)},Tn.hydrateRoot=function(i,o,l){if(!Mp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,y="",E=R_;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),o=S_(o,null,i,1,l??null,p,!1,y,E),i[ii]=o.current,Wl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Th(o)},Tn.render=function(i,o,l){if(!Ih(o))throw Error(t(200));return Sh(null,i,o,!1,l)},Tn.unmountComponentAtNode=function(i){if(!Ih(i))throw Error(t(40));return i._reactRootContainer?(lo(function(){Sh(null,null,i,!1,function(){i._reactRootContainer=null,i[ii]=null})}),!0):!1},Tn.unstable_batchedUpdates=Rp,Tn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Ih(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Sh(i,o,l,!1,h)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var L_;function E0(){if(L_)return Up.exports;L_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Up.exports=NR(),Up.exports}var V_;function xR(){if(V_)return Ph;V_=1;var n=E0();return Ph.createRoot=n.createRoot,Ph.hydrateRoot=n.hydrateRoot,Ph}var OR=xR();const DR=_0(OR);var FF=E0();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xu(){return xu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},xu.apply(this,arguments)}var vs;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(vs||(vs={}));const F_="popstate";function MR(n){n===void 0&&(n={});function e(r,s){let{pathname:a,search:u,hash:d}=r.location;return mm("",{pathname:a,search:u,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Xh(s)}return VR(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ng(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LR(){return Math.random().toString(36).substr(2,8)}function U_(n,e){return{usr:n.state,key:n.key,idx:e}}function mm(n,e,t,r){return t===void 0&&(t=null),xu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?al(e):e,{state:t,key:e&&e.key||r||LR()})}function Xh(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function al(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function VR(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,u=s.history,d=vs.Pop,f=null,g=v();g==null&&(g=0,u.replaceState(xu({},u.state,{idx:g}),""));function v(){return(u.state||{idx:null}).idx}function w(){d=vs.Pop;let C=v(),H=C==null?null:C-g;g=C,f&&f({action:d,location:N.location,delta:H})}function T(C,H){d=vs.Push;let G=mm(N.location,C,H);g=v()+1;let q=U_(G,g),J=N.createHref(G);try{u.pushState(q,"",J)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;s.location.assign(J)}a&&f&&f({action:d,location:N.location,delta:1})}function k(C,H){d=vs.Replace;let G=mm(N.location,C,H);g=v();let q=U_(G,g),J=N.createHref(G);u.replaceState(q,"",J),a&&f&&f({action:d,location:N.location,delta:0})}function V(C){let H=s.location.origin!=="null"?s.location.origin:s.location.href,G=typeof C=="string"?C:Xh(C);return G=G.replace(/ $/,"%20"),Et(H,"No window.location.(origin|href) available to create URL for href: "+G),new URL(G,H)}let N={get action(){return d},get location(){return n(s,u)},listen(C){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(F_,w),f=C,()=>{s.removeEventListener(F_,w),f=null}},createHref(C){return e(s,C)},createURL:V,encodeLocation(C){let H=V(C);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:T,replace:k,go(C){return u.go(C)}};return N}var j_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(j_||(j_={}));function FR(n,e,t){return t===void 0&&(t="/"),UR(n,e,t)}function UR(n,e,t,r){let s=typeof e=="string"?al(e):e,a=rg(s.pathname||"/",t);if(a==null)return null;let u=T0(n);jR(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let g=JR(a);d=QR(u[f],g)}return d}function T0(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(a,u,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(Et(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let g=ws([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(Et(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),T0(a.children,e,v,g)),!(a.path==null&&!a.index)&&e.push({path:g,score:GR(g,a.index),routesMeta:v})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))s(a,u);else for(let f of I0(a.path))s(a,u,f)}),e}function I0(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let u=I0(r.join("/")),d=[];return d.push(...u.map(f=>f===""?a:[a,f].join("/"))),s&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function jR(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:KR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const BR=/^:[\w-]+$/,zR=3,$R=2,qR=1,HR=10,WR=-2,B_=n=>n==="*";function GR(n,e){let t=n.split("/"),r=t.length;return t.some(B_)&&(r+=WR),e&&(r+=$R),t.filter(s=>!B_(s)).reduce((s,a)=>s+(BR.test(a)?zR:a===""?qR:HR),r)}function KR(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function QR(n,e,t){let{routesMeta:r}=n,s={},a="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],g=d===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",w=YR({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},v),T=f.route;if(!w)return null;Object.assign(s,w.params),u.push({params:s,pathname:ws([a,w.pathname]),pathnameBase:r1(ws([a,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(a=ws([a,w.pathnameBase]))}return u}function YR(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=XR(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],u=a.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:r.reduce((g,v,w)=>{let{paramName:T,isOptional:k}=v;if(T==="*"){let N=d[w]||"";u=a.slice(0,a.length-N.length).replace(/(.)\/+$/,"$1")}const V=d[w];return k&&!V?g[T]=void 0:g[T]=(V||"").replace(/%2F/g,"/"),g},{}),pathname:a,pathnameBase:u,pattern:n}}function XR(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),ng(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function JR(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ng(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function rg(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const ZR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e1=n=>ZR.test(n);function t1(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?al(n):n,a;if(t)if(e1(t))a=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),ng(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?a=z_(t.substring(1),"/"):a=z_(t,e)}else a=e;return{pathname:a,search:i1(r),hash:s1(s)}}function z_(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function zp(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ig(n,e){let t=n1(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function sg(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=al(n):(s=xu({},n),Et(!s.pathname||!s.pathname.includes("?"),zp("?","pathname","search",s)),Et(!s.pathname||!s.pathname.includes("#"),zp("#","pathname","hash",s)),Et(!s.search||!s.search.includes("#"),zp("#","search","hash",s)));let a=n===""||s.pathname==="",u=a?"/":s.pathname,d;if(u==null)d=t;else{let w=e.length-1;if(!r&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),w-=1;s.pathname=T.join("/")}d=w>=0?e[w]:"/"}let f=t1(s,d),g=u&&u!=="/"&&u.endsWith("/"),v=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(g||v)&&(f.pathname+="/"),f}const ws=n=>n.join("/").replace(/\/\/+/g,"/"),r1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),i1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,s1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function o1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const S0=["post","put","patch","delete"];new Set(S0);const a1=["get",...S0];new Set(a1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ou(){return Ou=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ou.apply(this,arguments)}const og=W.createContext(null),l1=W.createContext(null),Ns=W.createContext(null),Ad=W.createContext(null),xs=W.createContext({outlet:null,matches:[],isDataRoute:!1}),A0=W.createContext(null);function u1(n,e){let{relative:t}=e===void 0?{}:e;ll()||Et(!1);let{basename:r,navigator:s}=W.useContext(Ns),{hash:a,pathname:u,search:d}=C0(n,{relative:t}),f=u;return r!=="/"&&(f=u==="/"?r:ws([r,u])),s.createHref({pathname:f,search:d,hash:a})}function ll(){return W.useContext(Ad)!=null}function Lo(){return ll()||Et(!1),W.useContext(Ad).location}function R0(n){W.useContext(Ns).static||W.useLayoutEffect(n)}function P0(){let{isDataRoute:n}=W.useContext(xs);return n?T1():c1()}function c1(){ll()||Et(!1);let n=W.useContext(og),{basename:e,future:t,navigator:r}=W.useContext(Ns),{matches:s}=W.useContext(xs),{pathname:a}=Lo(),u=JSON.stringify(ig(s,t.v7_relativeSplatPath)),d=W.useRef(!1);return R0(()=>{d.current=!0}),W.useCallback(function(g,v){if(v===void 0&&(v={}),!d.current)return;if(typeof g=="number"){r.go(g);return}let w=sg(g,JSON.parse(u),a,v.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:ws([e,w.pathname])),(v.replace?r.replace:r.push)(w,v.state,v)},[e,r,u,a,n])}function C0(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=W.useContext(Ns),{matches:s}=W.useContext(xs),{pathname:a}=Lo(),u=JSON.stringify(ig(s,r.v7_relativeSplatPath));return W.useMemo(()=>sg(n,JSON.parse(u),a,t==="path"),[n,u,a,t])}function h1(n,e){return d1(n,e)}function d1(n,e,t,r){ll()||Et(!1);let{navigator:s}=W.useContext(Ns),{matches:a}=W.useContext(xs),u=a[a.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let g=Lo(),v;if(e){var w;let C=typeof e=="string"?al(e):e;f==="/"||(w=C.pathname)!=null&&w.startsWith(f)||Et(!1),v=C}else v=g;let T=v.pathname||"/",k=T;if(f!=="/"){let C=f.replace(/^\//,"").split("/");k="/"+T.replace(/^\//,"").split("/").slice(C.length).join("/")}let V=FR(n,{pathname:k}),N=y1(V&&V.map(C=>Object.assign({},C,{params:Object.assign({},d,C.params),pathname:ws([f,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?f:ws([f,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,t,r);return e&&N?W.createElement(Ad.Provider,{value:{location:Ou({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:vs.Pop}},N):N}function f1(){let n=E1(),e=o1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:s},t):null,null)}const p1=W.createElement(f1,null);class m1 extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?W.createElement(xs.Provider,{value:this.props.routeContext},W.createElement(A0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g1(n){let{routeContext:e,match:t,children:r}=n,s=W.useContext(og);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),W.createElement(xs.Provider,{value:e},r)}function y1(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,d=(s=t)==null?void 0:s.errors;if(d!=null){let v=u.findIndex(w=>w.route.id&&(d==null?void 0:d[w.route.id])!==void 0);v>=0||Et(!1),u=u.slice(0,Math.min(u.length,v+1))}let f=!1,g=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let w=u[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=v),w.route.id){let{loaderData:T,errors:k}=t,V=w.route.loader&&T[w.route.id]===void 0&&(!k||k[w.route.id]===void 0);if(w.route.lazy||V){f=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((v,w,T)=>{let k,V=!1,N=null,C=null;t&&(k=d&&w.route.id?d[w.route.id]:void 0,N=w.route.errorElement||p1,f&&(g<0&&T===0?(I1("route-fallback"),V=!0,C=null):g===T&&(V=!0,C=w.route.hydrateFallbackElement||null)));let H=e.concat(u.slice(0,T+1)),G=()=>{let q;return k?q=N:V?q=C:w.route.Component?q=W.createElement(w.route.Component,null):w.route.element?q=w.route.element:q=v,W.createElement(g1,{match:w,routeContext:{outlet:v,matches:H,isDataRoute:t!=null},children:q})};return t&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?W.createElement(m1,{location:t.location,revalidation:t.revalidation,component:N,error:k,children:G(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):G()},null)}var k0=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(k0||{}),b0=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(b0||{});function v1(n){let e=W.useContext(og);return e||Et(!1),e}function _1(n){let e=W.useContext(l1);return e||Et(!1),e}function w1(n){let e=W.useContext(xs);return e||Et(!1),e}function N0(n){let e=w1(),t=e.matches[e.matches.length-1];return t.route.id||Et(!1),t.route.id}function E1(){var n;let e=W.useContext(A0),t=_1(),r=N0();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function T1(){let{router:n}=v1(k0.UseNavigateStable),e=N0(b0.UseNavigateStable),t=W.useRef(!1);return R0(()=>{t.current=!0}),W.useCallback(function(s,a){a===void 0&&(a={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Ou({fromRouteId:e},a)))},[n,e])}const $_={};function I1(n,e,t){$_[n]||($_[n]=!0)}function S1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Io(n){let{to:e,replace:t,state:r,relative:s}=n;ll()||Et(!1);let{future:a,static:u}=W.useContext(Ns),{matches:d}=W.useContext(xs),{pathname:f}=Lo(),g=P0(),v=sg(e,ig(d,a.v7_relativeSplatPath),f,s==="path"),w=JSON.stringify(v);return W.useEffect(()=>g(JSON.parse(w),{replace:t,state:r,relative:s}),[g,w,s,t,r]),null}function dt(n){Et(!1)}function A1(n){let{basename:e="/",children:t=null,location:r,navigationType:s=vs.Pop,navigator:a,static:u=!1,future:d}=n;ll()&&Et(!1);let f=e.replace(/^\/*/,"/"),g=W.useMemo(()=>({basename:f,navigator:a,static:u,future:Ou({v7_relativeSplatPath:!1},d)}),[f,d,a,u]);typeof r=="string"&&(r=al(r));let{pathname:v="/",search:w="",hash:T="",state:k=null,key:V="default"}=r,N=W.useMemo(()=>{let C=rg(v,f);return C==null?null:{location:{pathname:C,search:w,hash:T,state:k,key:V},navigationType:s}},[f,v,w,T,k,V,s]);return N==null?null:W.createElement(Ns.Provider,{value:g},W.createElement(Ad.Provider,{children:t,value:N}))}function R1(n){let{children:e,location:t}=n;return h1(gm(e),t)}new Promise(()=>{});function gm(n,e){e===void 0&&(e=[]);let t=[];return W.Children.forEach(n,(r,s)=>{if(!W.isValidElement(r))return;let a=[...e,s];if(r.type===W.Fragment){t.push.apply(t,gm(r.props.children,a));return}r.type!==dt&&Et(!1),!r.props.index||!r.props.children||Et(!1);let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=gm(r.props.children,a)),t.push(u)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ym(){return ym=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ym.apply(this,arguments)}function P1(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,a;for(a=0;a<r.length;a++)s=r[a],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function C1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function k1(n,e){return n.button===0&&(!e||e==="_self")&&!C1(n)}const b1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],N1="6";try{window.__reactRouterVersion=N1}catch{}const x1="startTransition",q_=CR[x1];function O1(n){let{basename:e,children:t,future:r,window:s}=n,a=W.useRef();a.current==null&&(a.current=MR({window:s,v5Compat:!0}));let u=a.current,[d,f]=W.useState({action:u.action,location:u.location}),{v7_startTransition:g}=r||{},v=W.useCallback(w=>{g&&q_?q_(()=>f(w)):f(w)},[f,g]);return W.useLayoutEffect(()=>u.listen(v),[u,v]),W.useEffect(()=>S1(r),[r]),W.createElement(A1,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:r})}const D1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,UF=W.forwardRef(function(e,t){let{onClick:r,relative:s,reloadDocument:a,replace:u,state:d,target:f,to:g,preventScrollReset:v,viewTransition:w}=e,T=P1(e,b1),{basename:k}=W.useContext(Ns),V,N=!1;if(typeof g=="string"&&M1.test(g)&&(V=g,D1))try{let q=new URL(window.location.href),J=g.startsWith("//")?new URL(q.protocol+g):new URL(g),ne=rg(J.pathname,k);J.origin===q.origin&&ne!=null?g=ne+J.search+J.hash:N=!0}catch{}let C=u1(g,{relative:s}),H=L1(g,{replace:u,state:d,target:f,preventScrollReset:v,relative:s,viewTransition:w});function G(q){r&&r(q),q.defaultPrevented||H(q)}return W.createElement("a",ym({},T,{href:V||C,onClick:N||a?r:G,ref:t,target:f}))});var H_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(H_||(H_={}));var W_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(W_||(W_={}));function L1(n,e){let{target:t,replace:r,state:s,preventScrollReset:a,relative:u,viewTransition:d}=e===void 0?{}:e,f=P0(),g=Lo(),v=C0(n,{relative:u});return W.useCallback(w=>{if(k1(w,t)){w.preventDefault();let T=r!==void 0?r:Xh(g)===Xh(v);f(n,{replace:T,state:s,preventScrollReset:a,relative:u,viewTransition:d})}},[g,f,v,r,s,t,n,a,u,d])}var Rd=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},V1={setTimeout:(n,e)=>setTimeout(n,e),clearTimeout:n=>clearTimeout(n),setInterval:(n,e)=>setInterval(n,e),clearInterval:n=>clearInterval(n)},ds,eg,c0,F1=(c0=class{constructor(){Me(this,ds,V1);Me(this,eg,!1)}setTimeoutProvider(n){Se(this,ds,n)}setTimeout(n,e){return K(this,ds).setTimeout(n,e)}clearTimeout(n){K(this,ds).clearTimeout(n)}setInterval(n,e){return K(this,ds).setInterval(n,e)}clearInterval(n){K(this,ds).clearInterval(n)}},ds=new WeakMap,eg=new WeakMap,c0),vm=new F1;function U1(n){setTimeout(n,0)}var Pd=typeof window>"u"||"Deno"in globalThis;function gr(){}function j1(n,e){return typeof n=="function"?n(e):n}function B1(n){return typeof n=="number"&&n>=0&&n!==1/0}function z1(n,e){return Math.max(n+(e||0)-Date.now(),0)}function _m(n,e){return typeof n=="function"?n(e):n}function $1(n,e){return typeof n=="function"?n(e):n}function G_(n,e){const{type:t="all",exact:r,fetchStatus:s,predicate:a,queryKey:u,stale:d}=n;if(u){if(r){if(e.queryHash!==ag(u,e.options))return!1}else if(!Mu(e.queryKey,u))return!1}if(t!=="all"){const f=e.isActive();if(t==="active"&&!f||t==="inactive"&&f)return!1}return!(typeof d=="boolean"&&e.isStale()!==d||s&&s!==e.state.fetchStatus||a&&!a(e))}function K_(n,e){const{exact:t,status:r,predicate:s,mutationKey:a}=n;if(a){if(!e.options.mutationKey)return!1;if(t){if(Du(e.options.mutationKey)!==Du(a))return!1}else if(!Mu(e.options.mutationKey,a))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function ag(n,e){return((e==null?void 0:e.queryKeyHashFn)||Du)(n)}function Du(n){return JSON.stringify(n,(e,t)=>wm(t)?Object.keys(t).sort().reduce((r,s)=>(r[s]=t[s],r),{}):t)}function Mu(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?Object.keys(e).every(t=>Mu(n[t],e[t])):!1}var q1=Object.prototype.hasOwnProperty;function x0(n,e,t=0){if(n===e)return n;if(t>500)return e;const r=Q_(n)&&Q_(e);if(!r&&!(wm(n)&&wm(e)))return e;const a=(r?n:Object.keys(n)).length,u=r?e:Object.keys(e),d=u.length,f=r?new Array(d):{};let g=0;for(let v=0;v<d;v++){const w=r?v:u[v],T=n[w],k=e[w];if(T===k){f[w]=T,(r?v<a:q1.call(n,w))&&g++;continue}if(T===null||k===null||typeof T!="object"||typeof k!="object"){f[w]=k;continue}const V=x0(T,k,t+1);f[w]=V,V===T&&g++}return a===d&&g===a?n:f}function jF(n,e){if(!e||Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(n[t]!==e[t])return!1;return!0}function Q_(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function wm(n){if(!Y_(n))return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(!Y_(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function Y_(n){return Object.prototype.toString.call(n)==="[object Object]"}function H1(n){return new Promise(e=>{vm.setTimeout(e,n)})}function W1(n,e,t){return typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?x0(n,e):e}function G1(n,e,t=0){const r=[...n,e];return t&&r.length>t?r.slice(1):r}function K1(n,e,t=0){const r=[e,...n];return t&&r.length>t?r.slice(0,-1):r}var lg=Symbol();function O0(n,e){return!n.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!n.queryFn||n.queryFn===lg?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}function BF(n,e){return typeof n=="function"?n(...e):!!n}function Q1(n,e,t){let r=!1,s;return Object.defineProperty(n,"signal",{enumerable:!0,get:()=>(s??(s=e()),r||(r=!0,s.aborted?t():s.addEventListener("abort",t,{once:!0})),s)}),n}var yo,fs,Ga,h0,Y1=(h0=class extends Rd{constructor(){super();Me(this,yo);Me(this,fs);Me(this,Ga);Se(this,Ga,e=>{if(!Pd&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){K(this,fs)||this.setEventListener(K(this,Ga))}onUnsubscribe(){var e;this.hasListeners()||((e=K(this,fs))==null||e.call(this),Se(this,fs,void 0))}setEventListener(e){var t;Se(this,Ga,e),(t=K(this,fs))==null||t.call(this),Se(this,fs,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){K(this,yo)!==e&&(Se(this,yo,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof K(this,yo)=="boolean"?K(this,yo):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},yo=new WeakMap,fs=new WeakMap,Ga=new WeakMap,h0),D0=new Y1;function X1(){let n,e;const t=new Promise((s,a)=>{n=s,e=a});t.status="pending",t.catch(()=>{});function r(s){Object.assign(t,s),delete t.resolve,delete t.reject}return t.resolve=s=>{r({status:"fulfilled",value:s}),n(s)},t.reject=s=>{r({status:"rejected",reason:s}),e(s)},t}var J1=U1;function Z1(){let n=[],e=0,t=d=>{d()},r=d=>{d()},s=J1;const a=d=>{e?n.push(d):s(()=>{t(d)})},u=()=>{const d=n;n=[],d.length&&s(()=>{r(()=>{d.forEach(f=>{t(f)})})})};return{batch:d=>{let f;e++;try{f=d()}finally{e--,e||u()}return f},batchCalls:d=>(...f)=>{a(()=>{d(...f)})},schedule:a,setNotifyFunction:d=>{t=d},setBatchNotifyFunction:d=>{r=d},setScheduler:d=>{s=d}}}var pn=Z1(),Ka,ps,Qa,d0,eP=(d0=class extends Rd{constructor(){super();Me(this,Ka,!0);Me(this,ps);Me(this,Qa);Se(this,Qa,e=>{if(!Pd&&window.addEventListener){const t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){K(this,ps)||this.setEventListener(K(this,Qa))}onUnsubscribe(){var e;this.hasListeners()||((e=K(this,ps))==null||e.call(this),Se(this,ps,void 0))}setEventListener(e){var t;Se(this,Qa,e),(t=K(this,ps))==null||t.call(this),Se(this,ps,e(this.setOnline.bind(this)))}setOnline(e){K(this,Ka)!==e&&(Se(this,Ka,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return K(this,Ka)}},Ka=new WeakMap,ps=new WeakMap,Qa=new WeakMap,d0),Jh=new eP;function tP(n){return Math.min(1e3*2**n,3e4)}function M0(n){return(n??"online")==="online"?Jh.isOnline():!0}var Em=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function L0(n){let e=!1,t=0,r;const s=X1(),a=()=>s.status!=="pending",u=N=>{var C;if(!a()){const H=new Em(N);T(H),(C=n.onCancel)==null||C.call(n,H)}},d=()=>{e=!0},f=()=>{e=!1},g=()=>D0.isFocused()&&(n.networkMode==="always"||Jh.isOnline())&&n.canRun(),v=()=>M0(n.networkMode)&&n.canRun(),w=N=>{a()||(r==null||r(),s.resolve(N))},T=N=>{a()||(r==null||r(),s.reject(N))},k=()=>new Promise(N=>{var C;r=H=>{(a()||g())&&N(H)},(C=n.onPause)==null||C.call(n)}).then(()=>{var N;r=void 0,a()||(N=n.onContinue)==null||N.call(n)}),V=()=>{if(a())return;let N;const C=t===0?n.initialPromise:void 0;try{N=C??n.fn()}catch(H){N=Promise.reject(H)}Promise.resolve(N).then(w).catch(H=>{var he;if(a())return;const G=n.retry??(Pd?0:3),q=n.retryDelay??tP,J=typeof q=="function"?q(t,H):q,ne=G===!0||typeof G=="number"&&t<G||typeof G=="function"&&G(t,H);if(e||!ne){T(H);return}t++,(he=n.onFail)==null||he.call(n,t,H),H1(J).then(()=>g()?void 0:k()).then(()=>{e?T(H):V()})})};return{promise:s,status:()=>s.status,cancel:u,continue:()=>(r==null||r(),s),cancelRetry:d,continueRetry:f,canStart:v,start:()=>(v()?V():k().then(V),s)}}var vo,f0,V0=(f0=class{constructor(){Me(this,vo)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),B1(this.gcTime)&&Se(this,vo,vm.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Pd?1/0:300*1e3))}clearGcTimeout(){K(this,vo)&&(vm.clearTimeout(K(this,vo)),Se(this,vo,void 0))}},vo=new WeakMap,f0),_o,Ya,Yn,wo,Bt,Yu,Eo,yr,pi,p0,nP=(p0=class extends V0{constructor(t){super();Me(this,yr);Me(this,_o);Me(this,Ya);Me(this,Yn);Me(this,wo);Me(this,Bt);Me(this,Yu);Me(this,Eo);Se(this,Eo,!1),Se(this,Yu,t.defaultOptions),this.setOptions(t.options),this.observers=[],Se(this,wo,t.client),Se(this,Yn,K(this,wo).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Se(this,_o,J_(this.options)),this.state=t.state??K(this,_o),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=K(this,Bt))==null?void 0:t.promise}setOptions(t){if(this.options={...K(this,Yu),...t},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=J_(this.options);r.data!==void 0&&(this.setState(X_(r.data,r.dataUpdatedAt)),Se(this,_o,r))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&K(this,Yn).remove(this)}setData(t,r){const s=W1(this.state.data,t,this.options);return tn(this,yr,pi).call(this,{data:s,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),s}setState(t,r){tn(this,yr,pi).call(this,{type:"setState",state:t,setStateOptions:r})}cancel(t){var s,a;const r=(s=K(this,Bt))==null?void 0:s.promise;return(a=K(this,Bt))==null||a.cancel(t),r?r.then(gr).catch(gr):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(K(this,_o))}isActive(){return this.observers.some(t=>$1(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===lg||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>_m(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!z1(this.state.dataUpdatedAt,t)}onFocus(){var r;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(r=K(this,Bt))==null||r.continue()}onOnline(){var r;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(r=K(this,Bt))==null||r.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),K(this,Yn).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(r=>r!==t),this.observers.length||(K(this,Bt)&&(K(this,Eo)?K(this,Bt).cancel({revert:!0}):K(this,Bt).cancelRetry()),this.scheduleGc()),K(this,Yn).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||tn(this,yr,pi).call(this,{type:"invalidate"})}async fetch(t,r){var g,v,w,T,k,V,N,C,H,G,q,J;if(this.state.fetchStatus!=="idle"&&((g=K(this,Bt))==null?void 0:g.status())!=="rejected"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(K(this,Bt))return K(this,Bt).continueRetry(),K(this,Bt).promise}if(t&&this.setOptions(t),!this.options.queryFn){const ne=this.observers.find(he=>he.options.queryFn);ne&&this.setOptions(ne.options)}const s=new AbortController,a=ne=>{Object.defineProperty(ne,"signal",{enumerable:!0,get:()=>(Se(this,Eo,!0),s.signal)})},u=()=>{const ne=O0(this.options,r),O=(()=>{const S={client:K(this,wo),queryKey:this.queryKey,meta:this.meta};return a(S),S})();return Se(this,Eo,!1),this.options.persister?this.options.persister(ne,O,this):ne(O)},f=(()=>{const ne={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:K(this,wo),state:this.state,fetchFn:u};return a(ne),ne})();(v=this.options.behavior)==null||v.onFetch(f,this),Se(this,Ya,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((w=f.fetchOptions)==null?void 0:w.meta))&&tn(this,yr,pi).call(this,{type:"fetch",meta:(T=f.fetchOptions)==null?void 0:T.meta}),Se(this,Bt,L0({initialPromise:r==null?void 0:r.initialPromise,fn:f.fetchFn,onCancel:ne=>{ne instanceof Em&&ne.revert&&this.setState({...K(this,Ya),fetchStatus:"idle"}),s.abort()},onFail:(ne,he)=>{tn(this,yr,pi).call(this,{type:"failed",failureCount:ne,error:he})},onPause:()=>{tn(this,yr,pi).call(this,{type:"pause"})},onContinue:()=>{tn(this,yr,pi).call(this,{type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode,canRun:()=>!0}));try{const ne=await K(this,Bt).start();if(ne===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(ne),(V=(k=K(this,Yn).config).onSuccess)==null||V.call(k,ne,this),(C=(N=K(this,Yn).config).onSettled)==null||C.call(N,ne,this.state.error,this),ne}catch(ne){if(ne instanceof Em){if(ne.silent)return K(this,Bt).promise;if(ne.revert){if(this.state.data===void 0)throw ne;return this.state.data}}throw tn(this,yr,pi).call(this,{type:"error",error:ne}),(G=(H=K(this,Yn).config).onError)==null||G.call(H,ne,this),(J=(q=K(this,Yn).config).onSettled)==null||J.call(q,this.state.data,ne,this),ne}finally{this.scheduleGc()}}},_o=new WeakMap,Ya=new WeakMap,Yn=new WeakMap,wo=new WeakMap,Bt=new WeakMap,Yu=new WeakMap,Eo=new WeakMap,yr=new WeakSet,pi=function(t){const r=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...rP(s.data,this.options),fetchMeta:t.meta??null};case"success":const a={...s,...X_(t.data,t.dataUpdatedAt),dataUpdateCount:s.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return Se(this,Ya,t.manual?a:void 0),a;case"error":const u=t.error;return{...s,error:u,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:u,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=r(this.state),pn.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),K(this,Yn).notify({query:this,type:"updated",action:t})})},p0);function rP(n,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:M0(e.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function X_(n,e){return{data:n,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function J_(n){const e=typeof n.initialData=="function"?n.initialData():n.initialData,t=e!==void 0,r=t?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}function Z_(n){return{onFetch:(e,t)=>{var v,w,T,k,V;const r=e.options,s=(T=(w=(v=e.fetchOptions)==null?void 0:v.meta)==null?void 0:w.fetchMore)==null?void 0:T.direction,a=((k=e.state.data)==null?void 0:k.pages)||[],u=((V=e.state.data)==null?void 0:V.pageParams)||[];let d={pages:[],pageParams:[]},f=0;const g=async()=>{let N=!1;const C=q=>{Q1(q,()=>e.signal,()=>N=!0)},H=O0(e.options,e.fetchOptions),G=async(q,J,ne)=>{if(N)return Promise.reject();if(J==null&&q.pages.length)return Promise.resolve(q);const O=(()=>{const M={client:e.client,queryKey:e.queryKey,pageParam:J,direction:ne?"backward":"forward",meta:e.options.meta};return C(M),M})(),S=await H(O),{maxPages:A}=e.options,b=ne?K1:G1;return{pages:b(q.pages,S,A),pageParams:b(q.pageParams,J,A)}};if(s&&a.length){const q=s==="backward",J=q?iP:ew,ne={pages:a,pageParams:u},he=J(r,ne);d=await G(ne,he,q)}else{const q=n??a.length;do{const J=f===0?u[0]??r.initialPageParam:ew(r,d);if(f>0&&J==null)break;d=await G(d,J),f++}while(f<q)}return d};e.options.persister?e.fetchFn=()=>{var N,C;return(C=(N=e.options).persister)==null?void 0:C.call(N,g,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t)}:e.fetchFn=g}}}function ew(n,{pages:e,pageParams:t}){const r=e.length-1;return e.length>0?n.getNextPageParam(e[r],e,t[r],t):void 0}function iP(n,{pages:e,pageParams:t}){var r;return e.length>0?(r=n.getPreviousPageParam)==null?void 0:r.call(n,e[0],e,t[0],t):void 0}var Xu,Mr,rn,To,Lr,ss,m0,sP=(m0=class extends V0{constructor(t){super();Me(this,Lr);Me(this,Xu);Me(this,Mr);Me(this,rn);Me(this,To);Se(this,Xu,t.client),this.mutationId=t.mutationId,Se(this,rn,t.mutationCache),Se(this,Mr,[]),this.state=t.state||oP(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){K(this,Mr).includes(t)||(K(this,Mr).push(t),this.clearGcTimeout(),K(this,rn).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Se(this,Mr,K(this,Mr).filter(r=>r!==t)),this.scheduleGc(),K(this,rn).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){K(this,Mr).length||(this.state.status==="pending"?this.scheduleGc():K(this,rn).remove(this))}continue(){var t;return((t=K(this,To))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var d,f,g,v,w,T,k,V,N,C,H,G,q,J,ne,he,O,S;const r=()=>{tn(this,Lr,ss).call(this,{type:"continue"})},s={client:K(this,Xu),meta:this.options.meta,mutationKey:this.options.mutationKey};Se(this,To,L0({fn:()=>this.options.mutationFn?this.options.mutationFn(t,s):Promise.reject(new Error("No mutationFn found")),onFail:(A,b)=>{tn(this,Lr,ss).call(this,{type:"failed",failureCount:A,error:b})},onPause:()=>{tn(this,Lr,ss).call(this,{type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>K(this,rn).canRun(this)}));const a=this.state.status==="pending",u=!K(this,To).canStart();try{if(a)r();else{tn(this,Lr,ss).call(this,{type:"pending",variables:t,isPaused:u}),K(this,rn).config.onMutate&&await K(this,rn).config.onMutate(t,this,s);const b=await((f=(d=this.options).onMutate)==null?void 0:f.call(d,t,s));b!==this.state.context&&tn(this,Lr,ss).call(this,{type:"pending",context:b,variables:t,isPaused:u})}const A=await K(this,To).start();return await((v=(g=K(this,rn).config).onSuccess)==null?void 0:v.call(g,A,t,this.state.context,this,s)),await((T=(w=this.options).onSuccess)==null?void 0:T.call(w,A,t,this.state.context,s)),await((V=(k=K(this,rn).config).onSettled)==null?void 0:V.call(k,A,null,this.state.variables,this.state.context,this,s)),await((C=(N=this.options).onSettled)==null?void 0:C.call(N,A,null,t,this.state.context,s)),tn(this,Lr,ss).call(this,{type:"success",data:A}),A}catch(A){try{await((G=(H=K(this,rn).config).onError)==null?void 0:G.call(H,A,t,this.state.context,this,s))}catch(b){Promise.reject(b)}try{await((J=(q=this.options).onError)==null?void 0:J.call(q,A,t,this.state.context,s))}catch(b){Promise.reject(b)}try{await((he=(ne=K(this,rn).config).onSettled)==null?void 0:he.call(ne,void 0,A,this.state.variables,this.state.context,this,s))}catch(b){Promise.reject(b)}try{await((S=(O=this.options).onSettled)==null?void 0:S.call(O,void 0,A,t,this.state.context,s))}catch(b){Promise.reject(b)}throw tn(this,Lr,ss).call(this,{type:"error",error:A}),A}finally{K(this,rn).runNext(this)}}},Xu=new WeakMap,Mr=new WeakMap,rn=new WeakMap,To=new WeakMap,Lr=new WeakSet,ss=function(t){const r=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),pn.batch(()=>{K(this,Mr).forEach(s=>{s.onMutationUpdate(t)}),K(this,rn).notify({mutation:this,type:"updated",action:t})})},m0);function oP(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var gi,vr,Ju,g0,aP=(g0=class extends Rd{constructor(e={}){super();Me(this,gi);Me(this,vr);Me(this,Ju);this.config=e,Se(this,gi,new Set),Se(this,vr,new Map),Se(this,Ju,0)}build(e,t,r){const s=new sP({client:e,mutationCache:this,mutationId:++Rh(this,Ju)._,options:e.defaultMutationOptions(t),state:r});return this.add(s),s}add(e){K(this,gi).add(e);const t=Ch(e);if(typeof t=="string"){const r=K(this,vr).get(t);r?r.push(e):K(this,vr).set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(K(this,gi).delete(e)){const t=Ch(e);if(typeof t=="string"){const r=K(this,vr).get(t);if(r)if(r.length>1){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}else r[0]===e&&K(this,vr).delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=Ch(e);if(typeof t=="string"){const r=K(this,vr).get(t),s=r==null?void 0:r.find(a=>a.state.status==="pending");return!s||s===e}else return!0}runNext(e){var r;const t=Ch(e);if(typeof t=="string"){const s=(r=K(this,vr).get(t))==null?void 0:r.find(a=>a!==e&&a.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){pn.batch(()=>{K(this,gi).forEach(e=>{this.notify({type:"removed",mutation:e})}),K(this,gi).clear(),K(this,vr).clear()})}getAll(){return Array.from(K(this,gi))}find(e){const t={exact:!0,...e};return this.getAll().find(r=>K_(t,r))}findAll(e={}){return this.getAll().filter(t=>K_(e,t))}notify(e){pn.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return pn.batch(()=>Promise.all(e.map(t=>t.continue().catch(gr))))}},gi=new WeakMap,vr=new WeakMap,Ju=new WeakMap,g0);function Ch(n){var e;return(e=n.options.scope)==null?void 0:e.id}var Vr,y0,lP=(y0=class extends Rd{constructor(e={}){super();Me(this,Vr);this.config=e,Se(this,Vr,new Map)}build(e,t,r){const s=t.queryKey,a=t.queryHash??ag(s,t);let u=this.get(a);return u||(u=new nP({client:e,queryKey:s,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(u)),u}add(e){K(this,Vr).has(e.queryHash)||(K(this,Vr).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=K(this,Vr).get(e.queryHash);t&&(e.destroy(),t===e&&K(this,Vr).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){pn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return K(this,Vr).get(e)}getAll(){return[...K(this,Vr).values()]}find(e){const t={exact:!0,...e};return this.getAll().find(r=>G_(t,r))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(r=>G_(e,r)):t}notify(e){pn.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){pn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){pn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Vr=new WeakMap,y0),ft,ms,gs,Xa,Ja,ys,Za,el,v0,uP=(v0=class{constructor(n={}){Me(this,ft);Me(this,ms);Me(this,gs);Me(this,Xa);Me(this,Ja);Me(this,ys);Me(this,Za);Me(this,el);Se(this,ft,n.queryCache||new lP),Se(this,ms,n.mutationCache||new aP),Se(this,gs,n.defaultOptions||{}),Se(this,Xa,new Map),Se(this,Ja,new Map),Se(this,ys,0)}mount(){Rh(this,ys)._++,K(this,ys)===1&&(Se(this,Za,D0.subscribe(async n=>{n&&(await this.resumePausedMutations(),K(this,ft).onFocus())})),Se(this,el,Jh.subscribe(async n=>{n&&(await this.resumePausedMutations(),K(this,ft).onOnline())})))}unmount(){var n,e;Rh(this,ys)._--,K(this,ys)===0&&((n=K(this,Za))==null||n.call(this),Se(this,Za,void 0),(e=K(this,el))==null||e.call(this),Se(this,el,void 0))}isFetching(n){return K(this,ft).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return K(this,ms).findAll({...n,status:"pending"}).length}getQueryData(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=K(this,ft).get(e.queryHash))==null?void 0:t.state.data}ensureQueryData(n){const e=this.defaultQueryOptions(n),t=K(this,ft).build(this,e),r=t.state.data;return r===void 0?this.fetchQuery(n):(n.revalidateIfStale&&t.isStaleByTime(_m(e.staleTime,t))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(n){return K(this,ft).findAll(n).map(({queryKey:e,state:t})=>{const r=t.data;return[e,r]})}setQueryData(n,e,t){const r=this.defaultQueryOptions({queryKey:n}),s=K(this,ft).get(r.queryHash),a=s==null?void 0:s.state.data,u=j1(e,a);if(u!==void 0)return K(this,ft).build(this,r).setData(u,{...t,manual:!0})}setQueriesData(n,e,t){return pn.batch(()=>K(this,ft).findAll(n).map(({queryKey:r})=>[r,this.setQueryData(r,e,t)]))}getQueryState(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=K(this,ft).get(e.queryHash))==null?void 0:t.state}removeQueries(n){const e=K(this,ft);pn.batch(()=>{e.findAll(n).forEach(t=>{e.remove(t)})})}resetQueries(n,e){const t=K(this,ft);return pn.batch(()=>(t.findAll(n).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...n},e)))}cancelQueries(n,e={}){const t={revert:!0,...e},r=pn.batch(()=>K(this,ft).findAll(n).map(s=>s.cancel(t)));return Promise.all(r).then(gr).catch(gr)}invalidateQueries(n,e={}){return pn.batch(()=>(K(this,ft).findAll(n).forEach(t=>{t.invalidate()}),(n==null?void 0:n.refetchType)==="none"?Promise.resolve():this.refetchQueries({...n,type:(n==null?void 0:n.refetchType)??(n==null?void 0:n.type)??"active"},e)))}refetchQueries(n,e={}){const t={...e,cancelRefetch:e.cancelRefetch??!0},r=pn.batch(()=>K(this,ft).findAll(n).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let a=s.fetch(void 0,t);return t.throwOnError||(a=a.catch(gr)),s.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(gr)}fetchQuery(n){const e=this.defaultQueryOptions(n);e.retry===void 0&&(e.retry=!1);const t=K(this,ft).build(this,e);return t.isStaleByTime(_m(e.staleTime,t))?t.fetch(e):Promise.resolve(t.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(gr).catch(gr)}fetchInfiniteQuery(n){return n.behavior=Z_(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(gr).catch(gr)}ensureInfiniteQueryData(n){return n.behavior=Z_(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Jh.isOnline()?K(this,ms).resumePausedMutations():Promise.resolve()}getQueryCache(){return K(this,ft)}getMutationCache(){return K(this,ms)}getDefaultOptions(){return K(this,gs)}setDefaultOptions(n){Se(this,gs,n)}setQueryDefaults(n,e){K(this,Xa).set(Du(n),{queryKey:n,defaultOptions:e})}getQueryDefaults(n){const e=[...K(this,Xa).values()],t={};return e.forEach(r=>{Mu(n,r.queryKey)&&Object.assign(t,r.defaultOptions)}),t}setMutationDefaults(n,e){K(this,Ja).set(Du(n),{mutationKey:n,defaultOptions:e})}getMutationDefaults(n){const e=[...K(this,Ja).values()],t={};return e.forEach(r=>{Mu(n,r.mutationKey)&&Object.assign(t,r.defaultOptions)}),t}defaultQueryOptions(n){if(n._defaulted)return n;const e={...K(this,gs).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return e.queryHash||(e.queryHash=ag(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===lg&&(e.enabled=!1),e}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...K(this,gs).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){K(this,ft).clear(),K(this,ms).clear()}},ft=new WeakMap,ms=new WeakMap,gs=new WeakMap,Xa=new WeakMap,Ja=new WeakMap,ys=new WeakMap,Za=new WeakMap,el=new WeakMap,v0),F0=W.createContext(void 0),qF=n=>{const e=W.useContext(F0);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},cP=({client:n,children:e})=>(W.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),ie.jsx(F0.Provider,{value:n,children:e}));let hP={data:""},dP=n=>{if(typeof window=="object"){let e=(n?n.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(n||document.head).appendChild(e),e.firstChild}return n||hP},fP=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,pP=/\/\*[^]*?\*\/|  +/g,tw=/\n+/g,os=(n,e)=>{let t="",r="",s="";for(let a in n){let u=n[a];a[0]=="@"?a[1]=="i"?t=a+" "+u+";":r+=a[1]=="f"?os(u,a):a+"{"+os(u,a[1]=="k"?"":e)+"}":typeof u=="object"?r+=os(u,e?e.replace(/([^,])+/g,d=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,d):d?d+" "+f:f)):a):u!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=os.p?os.p(a,u):a+":"+u+";")}return t+(e&&s?e+"{"+s+"}":s)+r},di={},U0=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+U0(n[t]);return e}return n},mP=(n,e,t,r,s)=>{let a=U0(n),u=di[a]||(di[a]=(f=>{let g=0,v=11;for(;g<f.length;)v=101*v+f.charCodeAt(g++)>>>0;return"go"+v})(a));if(!di[u]){let f=a!==n?n:(g=>{let v,w,T=[{}];for(;v=fP.exec(g.replace(pP,""));)v[4]?T.shift():v[3]?(w=v[3].replace(tw," ").trim(),T.unshift(T[0][w]=T[0][w]||{})):T[0][v[1]]=v[2].replace(tw," ").trim();return T[0]})(n);di[u]=os(s?{["@keyframes "+u]:f}:f,t?"":"."+u)}let d=t&&di.g?di.g:null;return t&&(di.g=di[u]),((f,g,v,w)=>{w?g.data=g.data.replace(w,f):g.data.indexOf(f)===-1&&(g.data=v?f+g.data:g.data+f)})(di[u],e,r,d),u},gP=(n,e,t)=>n.reduce((r,s,a)=>{let u=e[a];if(u&&u.call){let d=u(t),f=d&&d.props&&d.props.className||/^go/.test(d)&&d;u=f?"."+f:d&&typeof d=="object"?d.props?"":os(d,""):d===!1?"":d}return r+s+(u??"")},"");function Cd(n){let e=this||{},t=n.call?n(e.p):n;return mP(t.unshift?t.raw?gP(t,[].slice.call(arguments,1),e.p):t.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):t,dP(e.target),e.g,e.o,e.k)}let j0,Tm,Im;Cd.bind({g:1});let Ti=Cd.bind({k:1});function yP(n,e,t,r){os.p=e,j0=n,Tm=t,Im=r}function Os(n,e){let t=this||{};return function(){let r=arguments;function s(a,u){let d=Object.assign({},a),f=d.className||s.className;t.p=Object.assign({theme:Tm&&Tm()},d),t.o=/ *go\d+/.test(f),d.className=Cd.apply(t,r)+(f?" "+f:"");let g=n;return n[0]&&(g=d.as||n,delete d.as),Im&&g[0]&&Im(d),j0(g,d)}return s}}var vP=n=>typeof n=="function",Zh=(n,e)=>vP(n)?n(e):n,_P=(()=>{let n=0;return()=>(++n).toString()})(),B0=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),wP=20,ug="default",z0=(n,e)=>{let{toastLimit:t}=n.settings;switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,t)};case 1:return{...n,toasts:n.toasts.map(u=>u.id===e.toast.id?{...u,...e.toast}:u)};case 2:let{toast:r}=e;return z0(n,{type:n.toasts.find(u=>u.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...n,toasts:n.toasts.map(u=>u.id===s||s===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(u=>u.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let a=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+a}))}}},jh=[],$0={toasts:[],pausedAt:void 0,settings:{toastLimit:wP}},Fr={},q0=(n,e=ug)=>{Fr[e]=z0(Fr[e]||$0,n),jh.forEach(([t,r])=>{t===e&&r(Fr[e])})},H0=n=>Object.keys(Fr).forEach(e=>q0(n,e)),EP=n=>Object.keys(Fr).find(e=>Fr[e].toasts.some(t=>t.id===n)),kd=(n=ug)=>e=>{q0(e,n)},TP={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},IP=(n={},e=ug)=>{let[t,r]=W.useState(Fr[e]||$0),s=W.useRef(Fr[e]);W.useEffect(()=>(s.current!==Fr[e]&&r(Fr[e]),jh.push([e,r]),()=>{let u=jh.findIndex(([d])=>d===e);u>-1&&jh.splice(u,1)}),[e]);let a=t.toasts.map(u=>{var d,f,g;return{...n,...n[u.type],...u,removeDelay:u.removeDelay||((d=n[u.type])==null?void 0:d.removeDelay)||(n==null?void 0:n.removeDelay),duration:u.duration||((f=n[u.type])==null?void 0:f.duration)||(n==null?void 0:n.duration)||TP[u.type],style:{...n.style,...(g=n[u.type])==null?void 0:g.style,...u.style}}});return{...t,toasts:a}},SP=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||_P()}),Zu=n=>(e,t)=>{let r=SP(e,n,t);return kd(r.toasterId||EP(r.id))({type:2,toast:r}),r.id},Ot=(n,e)=>Zu("blank")(n,e);Ot.error=Zu("error");Ot.success=Zu("success");Ot.loading=Zu("loading");Ot.custom=Zu("custom");Ot.dismiss=(n,e)=>{let t={type:3,toastId:n};e?kd(e)(t):H0(t)};Ot.dismissAll=n=>Ot.dismiss(void 0,n);Ot.remove=(n,e)=>{let t={type:4,toastId:n};e?kd(e)(t):H0(t)};Ot.removeAll=n=>Ot.remove(void 0,n);Ot.promise=(n,e,t)=>{let r=Ot.loading(e.loading,{...t,...t==null?void 0:t.loading});return typeof n=="function"&&(n=n()),n.then(s=>{let a=e.success?Zh(e.success,s):void 0;return a?Ot.success(a,{id:r,...t,...t==null?void 0:t.success}):Ot.dismiss(r),s}).catch(s=>{let a=e.error?Zh(e.error,s):void 0;a?Ot.error(a,{id:r,...t,...t==null?void 0:t.error}):Ot.dismiss(r)}),n};var AP=1e3,RP=(n,e="default")=>{let{toasts:t,pausedAt:r}=IP(n,e),s=W.useRef(new Map).current,a=W.useCallback((w,T=AP)=>{if(s.has(w))return;let k=setTimeout(()=>{s.delete(w),u({type:4,toastId:w})},T);s.set(w,k)},[]);W.useEffect(()=>{if(r)return;let w=Date.now(),T=t.map(k=>{if(k.duration===1/0)return;let V=(k.duration||0)+k.pauseDuration-(w-k.createdAt);if(V<0){k.visible&&Ot.dismiss(k.id);return}return setTimeout(()=>Ot.dismiss(k.id,e),V)});return()=>{T.forEach(k=>k&&clearTimeout(k))}},[t,r,e]);let u=W.useCallback(kd(e),[e]),d=W.useCallback(()=>{u({type:5,time:Date.now()})},[u]),f=W.useCallback((w,T)=>{u({type:1,toast:{id:w,height:T}})},[u]),g=W.useCallback(()=>{r&&u({type:6,time:Date.now()})},[r,u]),v=W.useCallback((w,T)=>{let{reverseOrder:k=!1,gutter:V=8,defaultPosition:N}=T||{},C=t.filter(q=>(q.position||N)===(w.position||N)&&q.height),H=C.findIndex(q=>q.id===w.id),G=C.filter((q,J)=>J<H&&q.visible).length;return C.filter(q=>q.visible).slice(...k?[G+1]:[0,G]).reduce((q,J)=>q+(J.height||0)+V,0)},[t]);return W.useEffect(()=>{t.forEach(w=>{if(w.dismissed)a(w.id,w.removeDelay);else{let T=s.get(w.id);T&&(clearTimeout(T),s.delete(w.id))}})},[t,a]),{toasts:t,handlers:{updateHeight:f,startPause:d,endPause:g,calculateOffset:v}}},PP=Ti`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,CP=Ti`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kP=Ti`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,bP=Os("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${PP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${CP} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${kP} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,NP=Ti`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,xP=Os("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${NP} 1s linear infinite;
`,OP=Ti`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,DP=Ti`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,MP=Os("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${OP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${DP} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,LP=Os("div")`
  position: absolute;
`,VP=Os("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,FP=Ti`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,UP=Os("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${FP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,jP=({toast:n})=>{let{icon:e,type:t,iconTheme:r}=n;return e!==void 0?typeof e=="string"?W.createElement(UP,null,e):e:t==="blank"?null:W.createElement(VP,null,W.createElement(xP,{...r}),t!=="loading"&&W.createElement(LP,null,t==="error"?W.createElement(bP,{...r}):W.createElement(MP,{...r})))},BP=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,zP=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,$P="0%{opacity:0;} 100%{opacity:1;}",qP="0%{opacity:1;} 100%{opacity:0;}",HP=Os("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,WP=Os("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,GP=(n,e)=>{let t=n.includes("top")?1:-1,[r,s]=B0()?[$P,qP]:[BP(t),zP(t)];return{animation:e?`${Ti(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ti(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},KP=W.memo(({toast:n,position:e,style:t,children:r})=>{let s=n.height?GP(n.position||e||"top-center",n.visible):{opacity:0},a=W.createElement(jP,{toast:n}),u=W.createElement(WP,{...n.ariaProps},Zh(n.message,n));return W.createElement(HP,{className:n.className,style:{...s,...t,...n.style}},typeof r=="function"?r({icon:a,message:u}):W.createElement(W.Fragment,null,a,u))});yP(W.createElement);var QP=({id:n,className:e,style:t,onHeightUpdate:r,children:s})=>{let a=W.useCallback(u=>{if(u){let d=()=>{let f=u.getBoundingClientRect().height;r(n,f)};d(),new MutationObserver(d).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[n,r]);return W.createElement("div",{ref:a,className:e,style:t},s)},YP=(n,e)=>{let t=n.includes("top"),r=t?{top:0}:{bottom:0},s=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:B0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...r,...s}},XP=Cd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,kh=16,JP=({reverseOrder:n,position:e="top-center",toastOptions:t,gutter:r,children:s,toasterId:a,containerStyle:u,containerClassName:d})=>{let{toasts:f,handlers:g}=RP(t,a);return W.createElement("div",{"data-rht-toaster":a||"",style:{position:"fixed",zIndex:9999,top:kh,left:kh,right:kh,bottom:kh,pointerEvents:"none",...u},className:d,onMouseEnter:g.startPause,onMouseLeave:g.endPause},f.map(v=>{let w=v.position||e,T=g.calculateOffset(v,{reverseOrder:n,gutter:r,defaultPosition:e}),k=YP(w,T);return W.createElement(QP,{id:v.id,key:v.id,onHeightUpdate:g.updateHeight,className:v.visible?XP:"",style:k},v.type==="custom"?Zh(v.message,v):s?s(v):W.createElement(KP,{toast:v,position:w}))}))},Or=Ot;const ZP="modulepreload",eC=function(n){return"/"+n},nw={},Mt=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(g=>{if(g=eC(g),g in nw)return;nw[g]=!0;const v=g.endsWith(".css"),w=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const T=document.createElement("link");if(T.rel=v?"stylesheet":ZP,v||(T.as="script"),T.crossOrigin="",T.href=g,f&&T.setAttribute("nonce",f),document.head.appendChild(T),v)return new Promise((k,V)=>{T.addEventListener("load",k),T.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${g}`)))})}))}function a(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};function W0(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=W0(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function tC(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=W0(n))&&(r&&(r+=" "),r+=e);return r}const cg="-",nC=n=>{const e=iC(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:u=>{const d=u.split(cg);return d[0]===""&&d.length!==1&&d.shift(),G0(d,e)||rC(u)},getConflictingClassGroupIds:(u,d)=>{const f=t[u]||[];return d&&r[u]?[...f,...r[u]]:f}}},G0=(n,e)=>{var u;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),s=r?G0(n.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const a=n.join(cg);return(u=e.validators.find(({validator:d})=>d(a)))==null?void 0:u.classGroupId},rw=/^\[(.+)\]$/,rC=n=>{if(rw.test(n)){const e=rw.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},iC=n=>{const{theme:e,prefix:t}=n,r={nextPart:new Map,validators:[]};return oC(Object.entries(n.classGroups),t).forEach(([a,u])=>{Sm(u,r,a,e)}),r},Sm=(n,e,t,r)=>{n.forEach(s=>{if(typeof s=="string"){const a=s===""?e:iw(e,s);a.classGroupId=t;return}if(typeof s=="function"){if(sC(s)){Sm(s(r),e,t,r);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([a,u])=>{Sm(u,iw(e,a),t,r)})})},iw=(n,e)=>{let t=n;return e.split(cg).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},sC=n=>n.isThemeGetter,oC=(n,e)=>e?n.map(([t,r])=>{const s=r.map(a=>typeof a=="string"?e+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([u,d])=>[e+u,d])):a);return[t,s]}):n,aC=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const s=(a,u)=>{t.set(a,u),e++,e>n&&(e=0,r=t,t=new Map)};return{get(a){let u=t.get(a);if(u!==void 0)return u;if((u=r.get(a))!==void 0)return s(a,u),u},set(a,u){t.has(a)?t.set(a,u):s(a,u)}}},K0="!",lC=n=>{const{separator:e,experimentalParseClassName:t}=n,r=e.length===1,s=e[0],a=e.length,u=d=>{const f=[];let g=0,v=0,w;for(let C=0;C<d.length;C++){let H=d[C];if(g===0){if(H===s&&(r||d.slice(C,C+a)===e)){f.push(d.slice(v,C)),v=C+a;continue}if(H==="/"){w=C;continue}}H==="["?g++:H==="]"&&g--}const T=f.length===0?d:d.substring(v),k=T.startsWith(K0),V=k?T.substring(1):T,N=w&&w>v?w-v:void 0;return{modifiers:f,hasImportantModifier:k,baseClassName:V,maybePostfixModifierPosition:N}};return t?d=>t({className:d,parseClassName:u}):u},uC=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(r=>{r[0]==="["?(e.push(...t.sort(),r),t=[]):t.push(r)}),e.push(...t.sort()),e},cC=n=>({cache:aC(n.cacheSize),parseClassName:lC(n),...nC(n)}),hC=/\s+/,dC=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s}=e,a=[],u=n.trim().split(hC);let d="";for(let f=u.length-1;f>=0;f-=1){const g=u[f],{modifiers:v,hasImportantModifier:w,baseClassName:T,maybePostfixModifierPosition:k}=t(g);let V=!!k,N=r(V?T.substring(0,k):T);if(!N){if(!V){d=g+(d.length>0?" "+d:d);continue}if(N=r(T),!N){d=g+(d.length>0?" "+d:d);continue}V=!1}const C=uC(v).join(":"),H=w?C+K0:C,G=H+N;if(a.includes(G))continue;a.push(G);const q=s(N,V);for(let J=0;J<q.length;++J){const ne=q[J];a.push(H+ne)}d=g+(d.length>0?" "+d:d)}return d};function fC(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=Q0(e))&&(r&&(r+=" "),r+=t);return r}const Q0=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=Q0(n[r]))&&(t&&(t+=" "),t+=e);return t};function pC(n,...e){let t,r,s,a=u;function u(f){const g=e.reduce((v,w)=>w(v),n());return t=cC(g),r=t.cache.get,s=t.cache.set,a=d,d(f)}function d(f){const g=r(f);if(g)return g;const v=dC(f,t);return s(f,v),v}return function(){return a(fC.apply(null,arguments))}}const rt=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},Y0=/^\[(?:([a-z-]+):)?(.+)\]$/i,mC=/^\d+\/\d+$/,gC=new Set(["px","full","screen"]),yC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,vC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,wC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,EC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,fi=n=>Ba(n)||gC.has(n)||mC.test(n),es=n=>ul(n,"length",kC),Ba=n=>!!n&&!Number.isNaN(Number(n)),$p=n=>ul(n,"number",Ba),hu=n=>!!n&&Number.isInteger(Number(n)),TC=n=>n.endsWith("%")&&Ba(n.slice(0,-1)),Pe=n=>Y0.test(n),ts=n=>yC.test(n),IC=new Set(["length","size","percentage"]),SC=n=>ul(n,IC,X0),AC=n=>ul(n,"position",X0),RC=new Set(["image","url"]),PC=n=>ul(n,RC,NC),CC=n=>ul(n,"",bC),du=()=>!0,ul=(n,e,t)=>{const r=Y0.exec(n);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):t(r[2]):!1},kC=n=>vC.test(n)&&!_C.test(n),X0=()=>!1,bC=n=>wC.test(n),NC=n=>EC.test(n),xC=()=>{const n=rt("colors"),e=rt("spacing"),t=rt("blur"),r=rt("brightness"),s=rt("borderColor"),a=rt("borderRadius"),u=rt("borderSpacing"),d=rt("borderWidth"),f=rt("contrast"),g=rt("grayscale"),v=rt("hueRotate"),w=rt("invert"),T=rt("gap"),k=rt("gradientColorStops"),V=rt("gradientColorStopPositions"),N=rt("inset"),C=rt("margin"),H=rt("opacity"),G=rt("padding"),q=rt("saturate"),J=rt("scale"),ne=rt("sepia"),he=rt("skew"),O=rt("space"),S=rt("translate"),A=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],M=()=>["auto",Pe,e],D=()=>[Pe,e],P=()=>["",fi,es],Qe=()=>["auto",Ba,Pe],Pt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],yt=()=>["solid","dashed","dotted","double","none"],Be=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>["start","end","center","between","around","evenly","stretch"],ge=()=>["","0",Pe],le=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>[Ba,Pe];return{cacheSize:500,separator:":",theme:{colors:[du],spacing:[fi,es],blur:["none","",ts,Pe],brightness:F(),borderColor:[n],borderRadius:["none","","full",ts,Pe],borderSpacing:D(),borderWidth:P(),contrast:F(),grayscale:ge(),hueRotate:F(),invert:ge(),gap:D(),gradientColorStops:[n],gradientColorStopPositions:[TC,es],inset:M(),margin:M(),opacity:F(),padding:D(),saturate:F(),scale:F(),sepia:ge(),skew:F(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",Pe]}],container:["container"],columns:[{columns:[ts]}],"break-after":[{"break-after":le()}],"break-before":[{"break-before":le()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Pt(),Pe]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[N]}],"inset-x":[{"inset-x":[N]}],"inset-y":[{"inset-y":[N]}],start:[{start:[N]}],end:[{end:[N]}],top:[{top:[N]}],right:[{right:[N]}],bottom:[{bottom:[N]}],left:[{left:[N]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",hu,Pe]}],basis:[{basis:M()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Pe]}],grow:[{grow:ge()}],shrink:[{shrink:ge()}],order:[{order:["first","last","none",hu,Pe]}],"grid-cols":[{"grid-cols":[du]}],"col-start-end":[{col:["auto",{span:["full",hu,Pe]},Pe]}],"col-start":[{"col-start":Qe()}],"col-end":[{"col-end":Qe()}],"grid-rows":[{"grid-rows":[du]}],"row-start-end":[{row:["auto",{span:[hu,Pe]},Pe]}],"row-start":[{"row-start":Qe()}],"row-end":[{"row-end":Qe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Pe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Pe]}],gap:[{gap:[T]}],"gap-x":[{"gap-x":[T]}],"gap-y":[{"gap-y":[T]}],"justify-content":[{justify:["normal",...oe()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...oe(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...oe(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[G]}],px:[{px:[G]}],py:[{py:[G]}],ps:[{ps:[G]}],pe:[{pe:[G]}],pt:[{pt:[G]}],pr:[{pr:[G]}],pb:[{pb:[G]}],pl:[{pl:[G]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[O]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[O]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Pe,e]}],"min-w":[{"min-w":[Pe,e,"min","max","fit"]}],"max-w":[{"max-w":[Pe,e,"none","full","min","max","fit","prose",{screen:[ts]},ts]}],h:[{h:[Pe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Pe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Pe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Pe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ts,es]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$p]}],"font-family":[{font:[du]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Pe]}],"line-clamp":[{"line-clamp":["none",Ba,$p]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",fi,Pe]}],"list-image":[{"list-image":["none",Pe]}],"list-style-type":[{list:["none","disc","decimal",Pe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[H]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[H]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...yt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",fi,es]}],"underline-offset":[{"underline-offset":["auto",fi,Pe]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Pe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Pe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[H]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Pt(),AC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",SC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},PC]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[V]}],"gradient-via-pos":[{via:[V]}],"gradient-to-pos":[{to:[V]}],"gradient-from":[{from:[k]}],"gradient-via":[{via:[k]}],"gradient-to":[{to:[k]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[H]}],"border-style":[{border:[...yt(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[H]}],"divide-style":[{divide:yt()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...yt()]}],"outline-offset":[{"outline-offset":[fi,Pe]}],"outline-w":[{outline:[fi,es]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:P()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[H]}],"ring-offset-w":[{"ring-offset":[fi,es]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",ts,CC]}],"shadow-color":[{shadow:[du]}],opacity:[{opacity:[H]}],"mix-blend":[{"mix-blend":[...Be(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Be()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",ts,Pe]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[w]}],saturate:[{saturate:[q]}],sepia:[{sepia:[ne]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[w]}],"backdrop-opacity":[{"backdrop-opacity":[H]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[ne]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Pe]}],duration:[{duration:F()}],ease:[{ease:["linear","in","out","in-out",Pe]}],delay:[{delay:F()}],animate:[{animate:["none","spin","ping","pulse","bounce",Pe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[J]}],"scale-x":[{"scale-x":[J]}],"scale-y":[{"scale-y":[J]}],rotate:[{rotate:[hu,Pe]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[he]}],"skew-y":[{"skew-y":[he]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Pe]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Pe]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Pe]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[fi,es,$p]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},OC=pC(xC),J0=6048e5,DC=864e5,Z0=6e4,eT=36e5,sw=Symbol.for("constructDateFrom");function Fn(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&sw in n?n[sw](e):n instanceof Date?new n.constructor(e):new Date(e)}function Pn(n,e){return Fn(e||n,n)}function MC(n,e,t){const r=Pn(n,t==null?void 0:t.in);return isNaN(e)?Fn(n,NaN):(r.setDate(r.getDate()+e),r)}let LC={};function bd(){return LC}function Lu(n,e){var d,f,g,v;const t=bd(),r=(e==null?void 0:e.weekStartsOn)??((f=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??t.weekStartsOn??((v=(g=t.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,s=Pn(n,e==null?void 0:e.in),a=s.getDay(),u=(a<r?7:0)+a-r;return s.setDate(s.getDate()-u),s.setHours(0,0,0,0),s}function ed(n,e){return Lu(n,{...e,weekStartsOn:1})}function tT(n,e){const t=Pn(n,e==null?void 0:e.in),r=t.getFullYear(),s=Fn(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const a=ed(s),u=Fn(t,0);u.setFullYear(r,0,4),u.setHours(0,0,0,0);const d=ed(u);return t.getTime()>=a.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function ow(n){const e=Pn(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function nT(n,...e){const t=Fn.bind(null,e.find(r=>typeof r=="object"));return e.map(t)}function td(n,e){const t=Pn(n,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function VC(n,e,t){const[r,s]=nT(t==null?void 0:t.in,n,e),a=td(r),u=td(s),d=+a-ow(a),f=+u-ow(u);return Math.round((d-f)/DC)}function FC(n,e){const t=tT(n,e),r=Fn(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),ed(r)}function rT(n){return Fn(n,Date.now())}function iT(n,e,t){const[r,s]=nT(t==null?void 0:t.in,n,e);return+td(r)==+td(s)}function UC(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function jC(n){return!(!UC(n)&&typeof n!="number"||isNaN(+Pn(n)))}function BC(n,e){const t=Pn(n,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const zC={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$C=(n,e,t)=>{let r;const s=zC[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function qp(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const qC={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},HC={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},WC={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},GC={date:qp({formats:qC,defaultWidth:"full"}),time:qp({formats:HC,defaultWidth:"full"}),dateTime:qp({formats:WC,defaultWidth:"full"})},KC={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},QC=(n,e,t,r)=>KC[n];function fu(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const u=n.defaultFormattingWidth||n.defaultWidth,d=t!=null&&t.width?String(t.width):u;s=n.formattingValues[d]||n.formattingValues[u]}else{const u=n.defaultWidth,d=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[d]||n.values[u]}const a=n.argumentCallback?n.argumentCallback(e):e;return s[a]}}const YC={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},XC={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},JC={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ZC={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ek={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},tk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},nk=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},rk={ordinalNumber:nk,era:fu({values:YC,defaultWidth:"wide"}),quarter:fu({values:XC,defaultWidth:"wide",argumentCallback:n=>n-1}),month:fu({values:JC,defaultWidth:"wide"}),day:fu({values:ZC,defaultWidth:"wide"}),dayPeriod:fu({values:ek,defaultWidth:"wide",formattingValues:tk,defaultFormattingWidth:"wide"})};function pu(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],a=e.match(s);if(!a)return null;const u=a[0],d=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],f=Array.isArray(d)?sk(d,w=>w.test(u)):ik(d,w=>w.test(u));let g;g=n.valueCallback?n.valueCallback(f):f,g=t.valueCallback?t.valueCallback(g):g;const v=e.slice(u.length);return{value:g,rest:v}}}function ik(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function sk(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function ok(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],a=e.match(n.parsePattern);if(!a)return null;let u=n.valueCallback?n.valueCallback(a[0]):a[0];u=t.valueCallback?t.valueCallback(u):u;const d=e.slice(s.length);return{value:u,rest:d}}}const ak=/^(\d+)(th|st|nd|rd)?/i,lk=/\d+/i,uk={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ck={any:[/^b/i,/^(a|c)/i]},hk={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},dk={any:[/1/i,/2/i,/3/i,/4/i]},fk={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pk={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},mk={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},gk={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},yk={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},vk={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_k={ordinalNumber:ok({matchPattern:ak,parsePattern:lk,valueCallback:n=>parseInt(n,10)}),era:pu({matchPatterns:uk,defaultMatchWidth:"wide",parsePatterns:ck,defaultParseWidth:"any"}),quarter:pu({matchPatterns:hk,defaultMatchWidth:"wide",parsePatterns:dk,defaultParseWidth:"any",valueCallback:n=>n+1}),month:pu({matchPatterns:fk,defaultMatchWidth:"wide",parsePatterns:pk,defaultParseWidth:"any"}),day:pu({matchPatterns:mk,defaultMatchWidth:"wide",parsePatterns:gk,defaultParseWidth:"any"}),dayPeriod:pu({matchPatterns:yk,defaultMatchWidth:"any",parsePatterns:vk,defaultParseWidth:"any"})},wk={code:"en-US",formatDistance:$C,formatLong:GC,formatRelative:QC,localize:rk,match:_k,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ek(n,e){const t=Pn(n,e==null?void 0:e.in);return VC(t,BC(t))+1}function Tk(n,e){const t=Pn(n,e==null?void 0:e.in),r=+ed(t)-+FC(t);return Math.round(r/J0)+1}function sT(n,e){var v,w,T,k;const t=Pn(n,e==null?void 0:e.in),r=t.getFullYear(),s=bd(),a=(e==null?void 0:e.firstWeekContainsDate)??((w=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??s.firstWeekContainsDate??((k=(T=s.locale)==null?void 0:T.options)==null?void 0:k.firstWeekContainsDate)??1,u=Fn((e==null?void 0:e.in)||n,0);u.setFullYear(r+1,0,a),u.setHours(0,0,0,0);const d=Lu(u,e),f=Fn((e==null?void 0:e.in)||n,0);f.setFullYear(r,0,a),f.setHours(0,0,0,0);const g=Lu(f,e);return+t>=+d?r+1:+t>=+g?r:r-1}function Ik(n,e){var d,f,g,v;const t=bd(),r=(e==null?void 0:e.firstWeekContainsDate)??((f=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??t.firstWeekContainsDate??((v=(g=t.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,s=sT(n,e),a=Fn((e==null?void 0:e.in)||n,0);return a.setFullYear(s,0,r),a.setHours(0,0,0,0),Lu(a,e)}function Sk(n,e){const t=Pn(n,e==null?void 0:e.in),r=+Lu(t,e)-+Ik(t,e);return Math.round(r/J0)+1}function We(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const ns={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return We(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):We(t+1,2)},d(n,e){return We(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return We(n.getHours()%12||12,e.length)},H(n,e){return We(n.getHours(),e.length)},m(n,e){return We(n.getMinutes(),e.length)},s(n,e){return We(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return We(s,e.length)}},Ma={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},aw={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return ns.y(n,e)},Y:function(n,e,t,r){const s=sT(n,r),a=s>0?s:1-s;if(e==="YY"){const u=a%100;return We(u,2)}return e==="Yo"?t.ordinalNumber(a,{unit:"year"}):We(a,e.length)},R:function(n,e){const t=tT(n);return We(t,e.length)},u:function(n,e){const t=n.getFullYear();return We(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return We(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return We(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return ns.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return We(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=Sk(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):We(s,e.length)},I:function(n,e,t){const r=Tk(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):We(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):ns.d(n,e)},D:function(n,e,t){const r=Ek(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):We(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),a=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return We(a,2);case"eo":return t.ordinalNumber(a,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),a=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return We(a,e.length);case"co":return t.ordinalNumber(a,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return We(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=Ma.noon:r===0?s=Ma.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=Ma.evening:r>=12?s=Ma.afternoon:r>=4?s=Ma.morning:s=Ma.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return ns.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):ns.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):We(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):We(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):ns.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):ns.s(n,e)},S:function(n,e){return ns.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return uw(r);case"XXXX":case"XX":return fo(r);case"XXXXX":case"XXX":default:return fo(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return uw(r);case"xxxx":case"xx":return fo(r);case"xxxxx":case"xxx":default:return fo(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+lw(r,":");case"OOOO":default:return"GMT"+fo(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+lw(r,":");case"zzzz":default:return"GMT"+fo(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return We(r,e.length)},T:function(n,e,t){return We(+n,e.length)}};function lw(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),a=r%60;return a===0?t+String(s):t+String(s)+e+We(a,2)}function uw(n,e){return n%60===0?(n>0?"-":"+")+We(Math.abs(n)/60,2):fo(n,e)}function fo(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=We(Math.trunc(r/60),2),a=We(r%60,2);return t+s+e+a}const cw=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},oT=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ak=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return cw(n,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",cw(r,e)).replace("{{time}}",oT(s,e))},Rk={p:oT,P:Ak},Pk=/^D+$/,Ck=/^Y+$/,kk=["D","DD","YY","YYYY"];function bk(n){return Pk.test(n)}function Nk(n){return Ck.test(n)}function xk(n,e,t){const r=Ok(n,e,t);if(console.warn(r),kk.includes(n))throw new RangeError(r)}function Ok(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Dk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Lk=/^'([^]*?)'?$/,Vk=/''/g,Fk=/[a-zA-Z]/;function za(n,e,t){var v,w,T,k;const r=bd(),s=r.locale??wk,a=r.firstWeekContainsDate??((w=(v=r.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??1,u=r.weekStartsOn??((k=(T=r.locale)==null?void 0:T.options)==null?void 0:k.weekStartsOn)??0,d=Pn(n,t==null?void 0:t.in);if(!jC(d))throw new RangeError("Invalid time value");let f=e.match(Mk).map(V=>{const N=V[0];if(N==="p"||N==="P"){const C=Rk[N];return C(V,s.formatLong)}return V}).join("").match(Dk).map(V=>{if(V==="''")return{isToken:!1,value:"'"};const N=V[0];if(N==="'")return{isToken:!1,value:Uk(V)};if(aw[N])return{isToken:!0,value:V};if(N.match(Fk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");return{isToken:!1,value:V}});s.localize.preprocessor&&(f=s.localize.preprocessor(d,f));const g={firstWeekContainsDate:a,weekStartsOn:u,locale:s};return f.map(V=>{if(!V.isToken)return V.value;const N=V.value;(Nk(N)||bk(N))&&xk(N,e,String(n));const C=aw[N[0]];return C(d,N,s.localize,g)}).join("")}function Uk(n){const e=n.match(Lk);return e?e[1].replace(Vk,"'"):n}function jk(n,e){return iT(Fn(n,n),rT(n))}function Bk(n,e,t){return MC(n,-1,t)}function zk(n,e){return iT(Fn(n,n),Bk(rT(n)))}function Nd(n,e){const t=()=>Fn(e==null?void 0:e.in,NaN),s=Wk(n);let a;if(s.date){const g=Gk(s.date,2);a=Kk(g.restDateString,g.year)}if(!a||isNaN(+a))return t();const u=+a;let d=0,f;if(s.time&&(d=Qk(s.time),isNaN(d)))return t();if(s.timezone){if(f=Yk(s.timezone),isNaN(f))return t()}else{const g=new Date(u+d),v=Pn(0,e==null?void 0:e.in);return v.setFullYear(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate()),v.setHours(g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds()),v}return Pn(u+d+f,e==null?void 0:e.in)}const bh={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},$k=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,qk=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Hk=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Wk(n){const e={},t=n.split(bh.dateTimeDelimiter);let r;if(t.length>2)return e;if(/:/.test(t[0])?r=t[0]:(e.date=t[0],r=t[1],bh.timeZoneDelimiter.test(e.date)&&(e.date=n.split(bh.timeZoneDelimiter)[0],r=n.substr(e.date.length,n.length))),r){const s=bh.timezone.exec(r);s?(e.time=r.replace(s[1],""),e.timezone=s[1]):e.time=r}return e}function Gk(n,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};const s=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:a===null?s:a*100,restDateString:n.slice((r[1]||r[2]).length)}}function Kk(n,e){if(e===null)return new Date(NaN);const t=n.match($k);if(!t)return new Date(NaN);const r=!!t[4],s=mu(t[1]),a=mu(t[2])-1,u=mu(t[3]),d=mu(t[4]),f=mu(t[5])-1;if(r)return tb(e,d,f)?Xk(e,d,f):new Date(NaN);{const g=new Date(0);return!Zk(e,a,u)||!eb(e,s)?new Date(NaN):(g.setUTCFullYear(e,a,Math.max(s,u)),g)}}function mu(n){return n?parseInt(n):1}function Qk(n){const e=n.match(qk);if(!e)return NaN;const t=Hp(e[1]),r=Hp(e[2]),s=Hp(e[3]);return nb(t,r,s)?t*eT+r*Z0+s*1e3:NaN}function Hp(n){return n&&parseFloat(n.replace(",","."))||0}function Yk(n){if(n==="Z")return 0;const e=n.match(Hk);if(!e)return 0;const t=e[1]==="+"?-1:1,r=parseInt(e[2]),s=e[3]&&parseInt(e[3])||0;return rb(r,s)?t*(r*eT+s*Z0):NaN}function Xk(n,e,t){const r=new Date(0);r.setUTCFullYear(n,0,4);const s=r.getUTCDay()||7,a=(e-1)*7+t+1-s;return r.setUTCDate(r.getUTCDate()+a),r}const Jk=[31,null,31,30,31,30,31,31,30,31,30,31];function aT(n){return n%400===0||n%4===0&&n%100!==0}function Zk(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(Jk[e]||(aT(n)?29:28))}function eb(n,e){return e>=1&&e<=(aT(n)?366:365)}function tb(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function nb(n,e,t){return n===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}function rb(n,e){return e>=0&&e<=59}function ib(...n){return OC(tC(n))}function HF(n){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:0,maximumFractionDigits:2}).format(n)}function WF(n,e="dd MMM yyyy"){if(!n)return"";const t=typeof n=="string"?Nd(n):n.toDate?n.toDate():n;return za(t,e)}function GF(n,e="hh:mm a"){if(!n)return"";const t=typeof n=="string"?Nd(n):n.toDate?n.toDate():n;return za(t,e)}function KF(n){if(!n)return"";const e=typeof n=="string"?Nd(n):n.toDate?n.toDate():n;return za(e,"dd MMM yyyy, hh:mm a")}function QF(n){if(!n)return"";const e=typeof n=="string"?Nd(n):n.toDate?n.toDate():n;return jk(e)?za(e,"hh:mm a"):zk(e)?"Yesterday "+za(e,"hh:mm a"):za(e,"dd MMM, hh:mm a")}function YF(n){if(!n)return"?";const e=n.trim().split(" ");return e.length===1?e[0].charAt(0).toUpperCase():(e[0].charAt(0)+e[e.length-1].charAt(0)).toUpperCase()}function XF(n,e){return n.reduce((t,r)=>{const s=typeof e=="function"?e(r):r[e];return(t[s]=t[s]||[]).push(r),t},{})}function lT({size:n="md",className:e}){const t={sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8",xl:"h-12 w-12"};return ie.jsxs("svg",{className:ib("animate-spin text-primary-600",t[n],e),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[ie.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),ie.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}function hg({message:n="Loading..."}){return ie.jsxs("div",{className:"fixed inset-0 bg-white flex flex-col items-center justify-center z-50",children:[ie.jsx(lT,{size:"xl"}),ie.jsx("p",{className:"mt-4 text-secondary-600 font-medium",children:n})]})}function JF(){return ie.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:ie.jsx(lT,{size:"lg"})})}const sb=()=>{};var hw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ob=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},cT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|g>>6,k=g&63;f||(k=64,u||(T=64)),r.push(t[v],t[w],t[T],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(uT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ob(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const g=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||g==null||w==null)throw new ab;const T=a<<2|d>>4;if(r.push(T),g!==64){const k=d<<4&240|g>>2;if(r.push(k),w!==64){const V=g<<6&192|w;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ab extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lb=function(n){const e=uT(n);return cT.encodeByteArray(e,!0)},nd=function(n){return lb(n).replace(/\./g,"")},hT=function(n){try{return cT.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=()=>ub().__FIREBASE_DEFAULTS__,hb=()=>{if(typeof process>"u"||typeof hw>"u")return;const n=hw.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},db=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hT(n[1]);return e&&JSON.parse(e)},xd=()=>{try{return sb()||cb()||hb()||db()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dT=n=>{var e,t;return(t=(e=xd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},dg=n=>{const e=dT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},fT=()=>{var n;return(n=xd())===null||n===void 0?void 0:n.config},pT=n=>{var e;return(e=xd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Od(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[nd(JSON.stringify(t)),nd(JSON.stringify(u)),""].join(".")}const Au={};function pb(){const n={prod:[],emulator:[]};for(const e of Object.keys(Au))Au[e]?n.emulator.push(e):n.prod.push(e);return n}function mb(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let dw=!1;function Dd(n,e){if(typeof window>"u"||typeof document>"u"||!Pi(window.location.host)||Au[n]===e||Au[n]||dw)return;Au[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=pb().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,k){T.setAttribute("width","24"),T.setAttribute("id",k),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{dw=!0,u()},T}function v(T,k){T.setAttribute("id",k),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=mb(r),k=t("text"),V=document.getElementById(k)||document.createElement("span"),N=t("learnmore"),C=document.getElementById(N)||document.createElement("a"),H=t("preprendIcon"),G=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const q=T.element;d(q),v(C,N);const J=g();f(G,H),q.append(G,V,C,J),document.body.appendChild(q)}a?(V.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function yb(){var n;const e=(n=xd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _b(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Eb(){const n=ln();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Tb(){return!yb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ib(){try{return typeof indexedDB=="object"}catch{return!1}}function Sb(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="FirebaseError";class er extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ab,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?Rb(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new er(s,d,r)}}function Rb(n,e){return n.replace(Pb,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pb=/\{\$([^}]+)}/g;function Cb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Po(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(fw(a)&&fw(u)){if(!Po(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function fw(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _u(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function wu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function kb(n,e){const t=new bb(n,e);return t.subscribe.bind(t)}class bb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Nb(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Wp),s.error===void 0&&(s.error=Wp),s.complete===void 0&&(s.complete=Wp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nb(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){return n&&n._delegate?n._delegate:n}class Un{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fb;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Db(e))try{this.getOrInitializeService({instanceIdentifier:po})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=po){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=po){return this.instances.has(e)}getOptions(e=po){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ob(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=po){return this.component?this.component.multipleInstances?e:po:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ob(n){return n===po?void 0:n}function Db(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const Lb={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Vb=xe.INFO,Fb={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},Ub=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Fb[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fg{constructor(e){this.name=e,this._logLevel=Vb,this._logHandler=Ub,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const jb=(n,e)=>e.some(t=>n instanceof t);let pw,mw;function Bb(){return pw||(pw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zb(){return mw||(mw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gT=new WeakMap,Am=new WeakMap,yT=new WeakMap,Gp=new WeakMap,pg=new WeakMap;function $b(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(_i(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&gT.set(t,n)}).catch(()=>{}),pg.set(e,n),e}function qb(n){if(Am.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Am.set(n,e)}let Rm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Am.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Hb(n){Rm=n(Rm)}function Wb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Kp(this),e,...t);return yT.set(r,e.sort?e.sort():[e]),_i(r)}:zb().includes(n)?function(...e){return n.apply(Kp(this),e),_i(gT.get(this))}:function(...e){return _i(n.apply(Kp(this),e))}}function Gb(n){return typeof n=="function"?Wb(n):(n instanceof IDBTransaction&&qb(n),jb(n,Bb())?new Proxy(n,Rm):n)}function _i(n){if(n instanceof IDBRequest)return $b(n);if(Gp.has(n))return Gp.get(n);const e=Gb(n);return e!==n&&(Gp.set(n,e),pg.set(e,n)),e}const Kp=n=>pg.get(n);function Md(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=_i(u);return r&&u.addEventListener("upgradeneeded",f=>{r(_i(u.result),f.oldVersion,f.newVersion,_i(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}function Qp(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),_i(t).then(()=>{})}const Kb=["get","getKey","getAll","getAllKeys","count"],Qb=["put","add","delete","clear"],Yp=new Map;function gw(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yp.get(e))return Yp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Qb.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kb.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),s&&f.done]))[0]};return Yp.set(e,a),a}Hb(n=>({...n,get:(e,t,r)=>gw(e,t)||n.get(e,t,r),has:(e,t)=>!!gw(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xb(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Xb(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pm="@firebase/app",yw="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new fg("@firebase/app"),Jb="@firebase/app-compat",Zb="@firebase/analytics-compat",eN="@firebase/analytics",tN="@firebase/app-check-compat",nN="@firebase/app-check",rN="@firebase/auth",iN="@firebase/auth-compat",sN="@firebase/database",oN="@firebase/data-connect",aN="@firebase/database-compat",lN="@firebase/functions",uN="@firebase/functions-compat",cN="@firebase/installations",hN="@firebase/installations-compat",dN="@firebase/messaging",fN="@firebase/messaging-compat",pN="@firebase/performance",mN="@firebase/performance-compat",gN="@firebase/remote-config",yN="@firebase/remote-config-compat",vN="@firebase/storage",_N="@firebase/storage-compat",wN="@firebase/firestore",EN="@firebase/ai",TN="@firebase/firestore-compat",IN="firebase",SN="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="[DEFAULT]",AN={[Pm]:"fire-core",[Jb]:"fire-core-compat",[eN]:"fire-analytics",[Zb]:"fire-analytics-compat",[nN]:"fire-app-check",[tN]:"fire-app-check-compat",[rN]:"fire-auth",[iN]:"fire-auth-compat",[sN]:"fire-rtdb",[oN]:"fire-data-connect",[aN]:"fire-rtdb-compat",[lN]:"fire-fn",[uN]:"fire-fn-compat",[cN]:"fire-iid",[hN]:"fire-iid-compat",[dN]:"fire-fcm",[fN]:"fire-fcm-compat",[pN]:"fire-perf",[mN]:"fire-perf-compat",[gN]:"fire-rc",[yN]:"fire-rc-compat",[vN]:"fire-gcs",[_N]:"fire-gcs-compat",[wN]:"fire-fst",[TN]:"fire-fst-compat",[EN]:"fire-vertex","fire-js":"fire-js",[IN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Map,RN=new Map,km=new Map;function vw(n,e){try{n.container.addComponent(e)}catch(t){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zn(n){const e=n.name;if(km.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;km.set(e,n);for(const t of rd.values())vw(t,n);for(const t of RN.values())vw(t,n);return!0}function Fo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Sn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Es=new Vo("app","Firebase",PN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Es.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=SN;function vT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Es.create("bad-app-name",{appName:String(s)});if(t||(t=fT()),!t)throw Es.create("no-options");const a=rd.get(s);if(a){if(Po(t,a.options)&&Po(r,a.config))return a;throw Es.create("duplicate-app",{appName:s})}const u=new Mb(s);for(const f of km.values())u.addComponent(f);const d=new CN(t,r,u);return rd.set(s,d),d}function Ld(n=Cm){const e=rd.get(n);if(!e&&n===Cm&&fT())return vT();if(!e)throw Es.create("no-app",{appName:n});return e}function an(n,e,t){var r;let s=(r=AN[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(d.join(" "));return}Zn(new Un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="firebase-heartbeat-database",bN=1,Vu="firebase-heartbeat-store";let Xp=null;function _T(){return Xp||(Xp=Md(kN,bN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Es.create("idb-open",{originalErrorMessage:n.message})})),Xp}async function NN(n){try{const t=(await _T()).transaction(Vu),r=await t.objectStore(Vu).get(wT(n));return await t.done,r}catch(e){if(e instanceof er)Ii.warn(e.message);else{const t=Es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ii.warn(t.message)}}}async function _w(n,e){try{const r=(await _T()).transaction(Vu,"readwrite");await r.objectStore(Vu).put(e,wT(n)),await r.done}catch(t){if(t instanceof er)Ii.warn(t.message);else{const r=Es.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ii.warn(r.message)}}}function wT(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=1024,ON=30;class DN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new LN(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ww();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>ON){const u=VN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ii.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ww(),{heartbeatsToSend:r,unsentEntries:s}=MN(this._heartbeatsCache.heartbeats),a=nd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Ii.warn(t),""}}}function ww(){return new Date().toISOString().substring(0,10)}function MN(n,e=xN){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Ew(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ew(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class LN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ib()?Sb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _w(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _w(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ew(n){return nd(JSON.stringify({version:2,heartbeats:n})).length}function VN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(n){Zn(new Un("platform-logger",e=>new Yb(e),"PRIVATE")),Zn(new Un("heartbeat",e=>new DN(e),"PRIVATE")),an(Pm,yw,n),an(Pm,yw,"esm2017"),an("fire-js","")}FN("");function mg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ET(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UN=ET,TT=new Vo("auth","Firebase",ET());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new fg("@firebase/auth");function jN(n,...e){id.logLevel<=xe.WARN&&id.warn(`Auth (${Uo}): ${n}`,...e)}function Bh(n,...e){id.logLevel<=xe.ERROR&&id.error(`Auth (${Uo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n,...e){throw gg(n,...e)}function jr(n,...e){return gg(n,...e)}function IT(n,e,t){const r=Object.assign(Object.assign({},UN()),{[e]:t});return new Vo("auth","Firebase",r).create(e,{appName:n.name})}function wi(n){return IT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return TT.create(n,...e)}function Ee(n,e,...t){if(!n)throw gg(e,...t)}function yi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bh(e),new Error(e)}function Si(n,e){n||yi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function BN(){return Tw()==="http:"||Tw()==="https:"}function Tw(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BN()||_b()||"connection"in navigator)?navigator.onLine:!0}function $N(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Si(t>e,"Short delay should be less than long delay!"),this.isMobile=gb()||wb()}get(){return zN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n,e){Si(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],WN=new tc(3e4,6e4);function Ds(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ms(n,e,t,r,s={}){return AT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=ec(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:f},a);return vb()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Pi(n.emulatorConfig.host)&&(g.credentials="include"),ST.fetch()(await RT(n,n.config.apiHost,t,d),g)})}async function AT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},qN),e);try{const s=new KN(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Nh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Nh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Nh(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw IT(n,v,g);wr(n,v)}}catch(s){if(s instanceof er)throw s;wr(n,"network-request-failed",{message:String(s)})}}async function nc(n,e,t,r,s={}){const a=await Ms(n,e,t,r,s);return"mfaPendingCredential"in a&&wr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function RT(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?yg(n.config,s):`${n.config.apiScheme}://${s}`;return HN.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function GN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(jr(this.auth,"network-request-failed")),WN.get())})}}function Nh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=jr(n,e,r);return s.customData._tokenResponse=t,s}function Iw(n){return n!==void 0&&n.enterprise!==void 0}class QN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return GN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function YN(n,e){return Ms(n,"GET","/v2/recaptchaConfig",Ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XN(n,e){return Ms(n,"POST","/v1/accounts:delete",e)}async function sd(n,e){return Ms(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JN(n,e=!1){const t=et(n),r=await t.getIdToken(e),s=vg(r);Ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Ru(Jp(s.auth_time)),issuedAtTime:Ru(Jp(s.iat)),expirationTime:Ru(Jp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Jp(n){return Number(n)*1e3}function vg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bh("JWT malformed, contained fewer than 3 sections"),null;try{const s=hT(t);return s?JSON.parse(s):(Bh("Failed to decode base64 JWT payload"),null)}catch(s){return Bh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sw(n){const e=vg(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof er&&ZN(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ZN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ru(this.lastLoginAt),this.creationTime=Ru(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Fu(n,sd(t,{idToken:r}));Ee(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?PT(a.providerUserInfo):[],d=nx(n.providerData,u),f=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?g:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Nm(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function tx(n){const e=et(n);await od(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nx(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function PT(n){return n.map(e=>{var{providerId:t}=e,r=mg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(n,e){const t=await AT(n,{},async()=>{const r=ec({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await RT(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Pi(n.emulatorConfig.host)&&(f.credentials="include"),ST.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ix(n,e){return Ms(n,"POST","/v2/accounts:revokeToken",Ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Sw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await rx(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new $a;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ee(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $a,this.toJSON())}_performRefresh(){return yi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=mg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ex(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Nm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Fu(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return JN(this,e)}reload(){return tx(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await od(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await Fu(this,XN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,g,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,k=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,V=(u=t.photoURL)!==null&&u!==void 0?u:void 0,N=(d=t.tenantId)!==null&&d!==void 0?d:void 0,C=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,H=(g=t.createdAt)!==null&&g!==void 0?g:void 0,G=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:q,emailVerified:J,isAnonymous:ne,providerData:he,stsTokenManager:O}=t;Ee(q&&O,e,"internal-error");const S=$a.fromJSON(this.name,O);Ee(typeof q=="string",e,"internal-error"),rs(w,e.name),rs(T,e.name),Ee(typeof J=="boolean",e,"internal-error"),Ee(typeof ne=="boolean",e,"internal-error"),rs(k,e.name),rs(V,e.name),rs(N,e.name),rs(C,e.name),rs(H,e.name),rs(G,e.name);const A=new _r({uid:q,auth:e,email:T,emailVerified:J,displayName:w,isAnonymous:ne,photoURL:V,phoneNumber:k,tenantId:N,stsTokenManager:S,createdAt:H,lastLoginAt:G});return he&&Array.isArray(he)&&(A.providerData=he.map(b=>Object.assign({},b))),C&&(A._redirectEventId=C),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new $a;s.updateFromServerResponse(t);const a=new _r({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await od(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ee(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?PT(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new $a;d.updateFromIdToken(r);const f=new _r({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,g),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new Map;function vi(n){Si(n instanceof Function,"Expected a class definition");let e=Aw.get(n);return e?(Si(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Aw.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}CT.type="NONE";const Rw=CT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n,e,t){return`firebase:${n}:${e}:${t}`}class qa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=zh(this.userKey,s.apiKey,a),this.fullPersistenceKey=zh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sd(this.auth,{idToken:e}).catch(()=>{});return t?_r._fromGetAccountInfoResponse(this.auth,t,e):null}return _r._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new qa(vi(Rw),e,r);const s=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||vi(Rw);const u=zh(r,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(u);if(v){let w;if(typeof v=="string"){const T=await sd(e,{idToken:v}).catch(()=>{});if(!T)break;w=await _r._fromGetAccountInfoResponse(e,T,v)}else w=_r._fromJSON(e,v);g!==a&&(d=w),a=g;break}}catch{}const f=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new qa(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new qa(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DT(e))return"Blackberry";if(MT(e))return"Webos";if(bT(e))return"Safari";if((e.includes("chrome/")||NT(e))&&!e.includes("edge/"))return"Chrome";if(OT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kT(n=ln()){return/firefox\//i.test(n)}function bT(n=ln()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NT(n=ln()){return/crios\//i.test(n)}function xT(n=ln()){return/iemobile/i.test(n)}function OT(n=ln()){return/android/i.test(n)}function DT(n=ln()){return/blackberry/i.test(n)}function MT(n=ln()){return/webos/i.test(n)}function _g(n=ln()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sx(n=ln()){var e;return _g(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ox(){return Eb()&&document.documentMode===10}function LT(n=ln()){return _g(n)||OT(n)||MT(n)||DT(n)||/windows phone/i.test(n)||xT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(n,e=[]){let t;switch(n){case"Browser":t=Pw(ln());break;case"Worker":t=`${Pw(ln())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Uo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(n,e={}){return Ms(n,"GET","/v2/passwordPolicy",Ds(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=6;class cx{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:ux,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cw(this),this.idTokenSubscription=new Cw(this),this.beforeStateQueue=new ax(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vi(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await qa.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sd(this,{idToken:e}),r=await _r._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Sn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await od(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(wi(this));const t=e?et(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lx(this),t=new cx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ix(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vi(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await qa.create(this,[vi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jN(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function jo(n){return et(n)}class Cw{constructor(e){this.auth=e,this.observer=null,this.addObserver=kb(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dx(n){Vd=n}function FT(n){return Vd.loadJS(n)}function fx(){return Vd.recaptchaEnterpriseScript}function px(){return Vd.gapiScript}function mx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class gx{constructor(){this.enterprise=new yx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vx="recaptcha-enterprise",UT="NO_RECAPTCHA";class _x{constructor(e){this.type=vx,this.auth=jo(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{YN(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new QN(f);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;Iw(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(g=>{u(g)}).catch(()=>{u(UT)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gx().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&Iw(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=fx();f.length!==0&&(f+=d),FT(f).then(()=>{s(d,a,u)}).catch(g=>{u(g)})}}).catch(d=>{u(d)})})}}async function kw(n,e,t,r=!1,s=!1){const a=new _x(n);let u;if(s)u=UT;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function xm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await kw(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await kw(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(n,e){const t=Fo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Po(a,e??{}))return s;wr(s,"already-initialized")}return t.initialize({options:e})}function Ex(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(vi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tx(n,e,t){const r=jo(n);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=jT(e),{host:u,port:d}=Ix(e),f=d===null?"":`:${d}`,g={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee(Po(g,r.config.emulator)&&Po(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Pi(u)?(Od(`${a}//${u}${f}`),Dd("Auth",!0)):Sx()}function jT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ix(n){const e=jT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:bw(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:bw(u)}}}function bw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yi("not implemented")}_getIdTokenResponse(e){return yi("not implemented")}_linkToIdToken(e,t){return yi("not implemented")}_getReauthenticationResolver(e){return yi("not implemented")}}async function Ax(n,e){return Ms(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(n,e){return nc(n,"POST","/v1/accounts:signInWithPassword",Ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(n,e){return nc(n,"POST","/v1/accounts:signInWithEmailLink",Ds(n,e))}async function Cx(n,e){return nc(n,"POST","/v1/accounts:signInWithEmailLink",Ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends wg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Uu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Uu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xm(e,t,"signInWithPassword",Rx);case"emailLink":return Px(e,{email:this._email,oobCode:this._password});default:wr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xm(e,r,"signUpPassword",Ax);case"emailLink":return Cx(e,{idToken:t,email:this._email,oobCode:this._password});default:wr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(n,e){return nc(n,"POST","/v1/accounts:signInWithIdp",Ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="http://localhost";class Co extends wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Co(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=mg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Co(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ha(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ha(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ha(e,t)}buildRequest(){const e={requestUri:kx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ec(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nx(n){const e=_u(wu(n)).link,t=e?_u(wu(e)).deep_link_id:null,r=_u(wu(n)).deep_link_id;return(r?_u(wu(r)).link:null)||r||t||e||n}class Eg{constructor(e){var t,r,s,a,u,d;const f=_u(wu(e)),g=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,w=bx((s=f.mode)!==null&&s!==void 0?s:null);Ee(g&&v&&w,"argument-error"),this.apiKey=g,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Nx(e);try{return new Eg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.providerId=cl.PROVIDER_ID}static credential(e,t){return Uu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Eg.parseLink(t);return Ee(r,"argument-error"),Uu._fromEmailAndCode(e,r.code,r.tenantId)}}cl.PROVIDER_ID="password";cl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends BT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends rc{constructor(){super("facebook.com")}static credential(e){return Co._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.FACEBOOK_SIGN_IN_METHOD="facebook.com";as.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends rc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Co._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ls.credential(t,r)}catch{return null}}}ls.GOOGLE_SIGN_IN_METHOD="google.com";ls.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends rc{constructor(){super("github.com")}static credential(e){return Co._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.GITHUB_SIGN_IN_METHOD="github.com";us.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends rc{constructor(){super("twitter.com")}static credential(e,t){return Co._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return cs.credential(t,r)}catch{return null}}}cs.TWITTER_SIGN_IN_METHOD="twitter.com";cs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(n,e){return nc(n,"POST","/v1/accounts:signUp",Ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await _r._fromIdTokenResponse(e,r,s),u=Nw(r);return new ko({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Nw(r);return new ko({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Nw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends er{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ad.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ad(e,t,r,s)}}function zT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ad._fromErrorAndOperation(n,a,e,r):a})}async function Ox(n,e,t=!1){const r=await Fu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ko._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(n,e,t=!1){const{auth:r}=n;if(Sn(r.app))return Promise.reject(wi(r));const s="reauthenticate";try{const a=await Fu(n,zT(r,s,e,n),t);Ee(a.idToken,r,"internal-error");const u=vg(a.idToken);Ee(u,r,"internal-error");const{sub:d}=u;return Ee(n.uid===d,r,"user-mismatch"),ko._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&wr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(n,e,t=!1){if(Sn(n.app))return Promise.reject(wi(n));const r="signIn",s=await zT(n,r,e),a=await ko._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function Mx(n,e){return $T(jo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(n){const e=jo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Lx(n,e,t){if(Sn(n.app))return Promise.reject(wi(n));const r=jo(n),u=await xm(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xx).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&qT(n),f}),d=await ko._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function Vx(n,e,t){return Sn(n.app)?Promise.reject(wi(n)):Mx(et(n),cl.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qT(n),r})}function Fx(n,e,t,r){return et(n).onIdTokenChanged(e,t,r)}function Ux(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function jx(n,e,t,r){return et(n).onAuthStateChanged(e,t,r)}function Bx(n){return et(n).signOut()}const ld="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ld,"1"),this.storage.removeItem(ld),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=1e3,$x=10;class WT extends HT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=LT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);ox()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$x):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}WT.type="LOCAL";const qx=WT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT extends HT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}GT.type="SESSION";const KT=GT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Fd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async g=>g(t.origin,a)),f=await Hx(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const g=Tg("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const T=w;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(){return window}function Gx(n){Br().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(){return typeof Br().WorkerGlobalScope<"u"&&typeof Br().importScripts=="function"}async function Kx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qx(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Yx(){return QT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="firebaseLocalStorageDb",Xx=1,ud="firebaseLocalStorage",XT="fbase_key";class ic{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ud(n,e){return n.transaction([ud],e?"readwrite":"readonly").objectStore(ud)}function Jx(){const n=indexedDB.deleteDatabase(YT);return new ic(n).toPromise()}function Om(){const n=indexedDB.open(YT,Xx);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ud,{keyPath:XT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ud)?e(r):(r.close(),await Jx(),e(await Om()))})})}async function xw(n,e,t){const r=Ud(n,!0).put({[XT]:e,value:t});return new ic(r).toPromise()}async function Zx(n,e){const t=Ud(n,!1).get(e),r=await new ic(t).toPromise();return r===void 0?null:r.value}function Ow(n,e){const t=Ud(n,!0).delete(e);return new ic(t).toPromise()}const eO=800,tO=3;class JT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Om(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>tO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fd._getInstance(Yx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Kx(),!this.activeServiceWorker)return;this.sender=new Wx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Om();return await xw(e,ld,"1"),await Ow(e,ld),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xw(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Zx(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ow(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Ud(s,!1).getAll();return new ic(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JT.type="LOCAL";const nO=JT;new tc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(n,e){return e?vi(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig extends wg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ha(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ha(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ha(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iO(n){return $T(n.auth,new Ig(n),n.bypassAuthState)}function sO(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Dx(t,new Ig(n),n.bypassAuthState)}async function oO(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Ox(t,new Ig(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iO;case"linkViaPopup":case"linkViaRedirect":return oO;case"reauthViaPopup":case"reauthViaRedirect":return sO;default:wr(this.auth,"internal-error")}}resolve(e){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=new tc(2e3,1e4);class ja extends ZT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,ja.currentPopupAction&&ja.currentPopupAction.cancel(),ja.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Si(this.filter.length===1,"Popup operations only handle one event");const e=Tg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ja.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aO.get())};e()}}ja.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="pendingRedirect",$h=new Map;class uO extends ZT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$h.get(this.auth._key());if(!e){try{const r=await cO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$h.set(this.auth._key(),e)}return this.bypassAuthState||$h.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cO(n,e){const t=fO(e),r=dO(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function hO(n,e){$h.set(n._key(),e)}function dO(n){return vi(n._redirectPersistence)}function fO(n){return zh(lO,n.config.apiKey,n.name)}async function pO(n,e,t=!1){if(Sn(n.app))return Promise.reject(wi(n));const r=jo(n),s=rO(r,e),u=await new uO(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=600*1e3;class gO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!eI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(jr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dw(e))}saveEventToCache(e){this.cachedEventUids.add(Dw(e)),this.lastProcessedEventTime=Date.now()}}function Dw(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yO(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(n,e={}){return Ms(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wO=/^https?/;async function EO(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vO(n);for(const t of e)try{if(TO(t))return}catch{}wr(n,"unauthorized-domain")}function TO(n){const e=bm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!wO.test(t))return!1;if(_O.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new tc(3e4,6e4);function Mw(){const n=Br().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SO(n){return new Promise((e,t)=>{var r,s,a;function u(){Mw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mw(),t(jr(n,"network-request-failed"))},timeout:IO.get()})}if(!((s=(r=Br().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Br().gapi)===null||a===void 0)&&a.load)u();else{const d=mx("iframefcb");return Br()[d]=()=>{gapi.load?u():t(jr(n,"network-request-failed"))},FT(`${px()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw qh=null,e})}let qh=null;function AO(n){return qh=qh||SO(n),qh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=new tc(5e3,15e3),PO="__/auth/iframe",CO="emulator/auth/iframe",kO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NO(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yg(e,CO):`https://${n.config.authDomain}/${PO}`,r={apiKey:e.apiKey,appName:n.name,v:Uo},s=bO.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${ec(r).slice(1)}`}async function xO(n){const e=await AO(n),t=Br().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:NO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kO,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=jr(n,"network-request-failed"),d=Br().setTimeout(()=>{a(u)},RO.get());function f(){Br().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DO=500,MO=600,LO="_blank",VO="http://localhost";class Lw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FO(n,e,t,r=DO,s=MO){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},OO),{width:r.toString(),height:s.toString(),top:a,left:u}),g=ln().toLowerCase();t&&(d=NT(g)?LO:t),kT(g)&&(e=e||VO,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[k,V])=>`${T}${k}=${V},`,"");if(sx(g)&&d!=="_self")return UO(e||"",d),new Lw(null);const w=window.open(e||"",d,v);Ee(w,n,"popup-blocked");try{w.focus()}catch{}return new Lw(w)}function UO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="__/auth/handler",BO="emulator/auth/handler",zO=encodeURIComponent("fac");async function Vw(n,e,t,r,s,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Uo,eventId:s};if(e instanceof BT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Cb(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof rc){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),g=f?`#${zO}=${encodeURIComponent(f)}`:"";return`${$O(n)}?${ec(d).slice(1)}${g}`}function $O({config:n}){return n.emulator?yg(n,BO):`https://${n.authDomain}/${jO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="webStorageSupport";class qO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KT,this._completeRedirectFn=pO,this._overrideRedirectResult=hO}async _openPopup(e,t,r,s){var a;Si((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Vw(e,t,r,bm(),s);return FO(e,u,Tg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await Vw(e,t,r,bm(),s);return Gx(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Si(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xO(e),r=new gO(e);return t.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zp,{type:Zp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Zp];u!==void 0&&t(!!u),wr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=EO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return LT()||bT()||_g()}}const HO=qO;var Fw="@firebase/auth",Uw="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KO(n){Zn(new Un("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ee(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VT(n)},g=new hx(r,s,a,f);return Ex(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new Un("auth-internal",e=>{const t=jo(e.getProvider("auth").getImmediate());return(r=>new WO(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Fw,Uw,GO(n)),an(Fw,Uw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=300,YO=pT("authIdTokenMaxAge")||QO;let jw=null;const XO=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>YO)return;const s=t==null?void 0:t.token;jw!==s&&(jw=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JO(n=Ld()){const e=Fo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wx(n,{popupRedirectResolver:HO,persistence:[nO,qx,KT]}),r=pT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=XO(a.toString());Ux(t,u,()=>u(t.currentUser)),Fx(t,d=>u(d))}}const s=dT("auth");return s&&Tx(t,`http://${s}`),t}function ZO(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}dx({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=jr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",ZO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KO("Browser");var Bw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,tI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,S){function A(){}A.prototype=S.prototype,O.D=S.prototype,O.prototype=new A,O.prototype.constructor=O,O.C=function(b,M,D){for(var P=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)P[Qe-2]=arguments[Qe];return S.prototype[M].apply(b,P)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(O,S,A){A||(A=0);var b=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)b[M]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(M=0;16>M;++M)b[M]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=O.g[0],A=O.g[1],M=O.g[2];var D=O.g[3],P=S+(D^A&(M^D))+b[0]+3614090360&4294967295;S=A+(P<<7&4294967295|P>>>25),P=D+(M^S&(A^M))+b[1]+3905402710&4294967295,D=S+(P<<12&4294967295|P>>>20),P=M+(A^D&(S^A))+b[2]+606105819&4294967295,M=D+(P<<17&4294967295|P>>>15),P=A+(S^M&(D^S))+b[3]+3250441966&4294967295,A=M+(P<<22&4294967295|P>>>10),P=S+(D^A&(M^D))+b[4]+4118548399&4294967295,S=A+(P<<7&4294967295|P>>>25),P=D+(M^S&(A^M))+b[5]+1200080426&4294967295,D=S+(P<<12&4294967295|P>>>20),P=M+(A^D&(S^A))+b[6]+2821735955&4294967295,M=D+(P<<17&4294967295|P>>>15),P=A+(S^M&(D^S))+b[7]+4249261313&4294967295,A=M+(P<<22&4294967295|P>>>10),P=S+(D^A&(M^D))+b[8]+1770035416&4294967295,S=A+(P<<7&4294967295|P>>>25),P=D+(M^S&(A^M))+b[9]+2336552879&4294967295,D=S+(P<<12&4294967295|P>>>20),P=M+(A^D&(S^A))+b[10]+4294925233&4294967295,M=D+(P<<17&4294967295|P>>>15),P=A+(S^M&(D^S))+b[11]+2304563134&4294967295,A=M+(P<<22&4294967295|P>>>10),P=S+(D^A&(M^D))+b[12]+1804603682&4294967295,S=A+(P<<7&4294967295|P>>>25),P=D+(M^S&(A^M))+b[13]+4254626195&4294967295,D=S+(P<<12&4294967295|P>>>20),P=M+(A^D&(S^A))+b[14]+2792965006&4294967295,M=D+(P<<17&4294967295|P>>>15),P=A+(S^M&(D^S))+b[15]+1236535329&4294967295,A=M+(P<<22&4294967295|P>>>10),P=S+(M^D&(A^M))+b[1]+4129170786&4294967295,S=A+(P<<5&4294967295|P>>>27),P=D+(A^M&(S^A))+b[6]+3225465664&4294967295,D=S+(P<<9&4294967295|P>>>23),P=M+(S^A&(D^S))+b[11]+643717713&4294967295,M=D+(P<<14&4294967295|P>>>18),P=A+(D^S&(M^D))+b[0]+3921069994&4294967295,A=M+(P<<20&4294967295|P>>>12),P=S+(M^D&(A^M))+b[5]+3593408605&4294967295,S=A+(P<<5&4294967295|P>>>27),P=D+(A^M&(S^A))+b[10]+38016083&4294967295,D=S+(P<<9&4294967295|P>>>23),P=M+(S^A&(D^S))+b[15]+3634488961&4294967295,M=D+(P<<14&4294967295|P>>>18),P=A+(D^S&(M^D))+b[4]+3889429448&4294967295,A=M+(P<<20&4294967295|P>>>12),P=S+(M^D&(A^M))+b[9]+568446438&4294967295,S=A+(P<<5&4294967295|P>>>27),P=D+(A^M&(S^A))+b[14]+3275163606&4294967295,D=S+(P<<9&4294967295|P>>>23),P=M+(S^A&(D^S))+b[3]+4107603335&4294967295,M=D+(P<<14&4294967295|P>>>18),P=A+(D^S&(M^D))+b[8]+1163531501&4294967295,A=M+(P<<20&4294967295|P>>>12),P=S+(M^D&(A^M))+b[13]+2850285829&4294967295,S=A+(P<<5&4294967295|P>>>27),P=D+(A^M&(S^A))+b[2]+4243563512&4294967295,D=S+(P<<9&4294967295|P>>>23),P=M+(S^A&(D^S))+b[7]+1735328473&4294967295,M=D+(P<<14&4294967295|P>>>18),P=A+(D^S&(M^D))+b[12]+2368359562&4294967295,A=M+(P<<20&4294967295|P>>>12),P=S+(A^M^D)+b[5]+4294588738&4294967295,S=A+(P<<4&4294967295|P>>>28),P=D+(S^A^M)+b[8]+2272392833&4294967295,D=S+(P<<11&4294967295|P>>>21),P=M+(D^S^A)+b[11]+1839030562&4294967295,M=D+(P<<16&4294967295|P>>>16),P=A+(M^D^S)+b[14]+4259657740&4294967295,A=M+(P<<23&4294967295|P>>>9),P=S+(A^M^D)+b[1]+2763975236&4294967295,S=A+(P<<4&4294967295|P>>>28),P=D+(S^A^M)+b[4]+1272893353&4294967295,D=S+(P<<11&4294967295|P>>>21),P=M+(D^S^A)+b[7]+4139469664&4294967295,M=D+(P<<16&4294967295|P>>>16),P=A+(M^D^S)+b[10]+3200236656&4294967295,A=M+(P<<23&4294967295|P>>>9),P=S+(A^M^D)+b[13]+681279174&4294967295,S=A+(P<<4&4294967295|P>>>28),P=D+(S^A^M)+b[0]+3936430074&4294967295,D=S+(P<<11&4294967295|P>>>21),P=M+(D^S^A)+b[3]+3572445317&4294967295,M=D+(P<<16&4294967295|P>>>16),P=A+(M^D^S)+b[6]+76029189&4294967295,A=M+(P<<23&4294967295|P>>>9),P=S+(A^M^D)+b[9]+3654602809&4294967295,S=A+(P<<4&4294967295|P>>>28),P=D+(S^A^M)+b[12]+3873151461&4294967295,D=S+(P<<11&4294967295|P>>>21),P=M+(D^S^A)+b[15]+530742520&4294967295,M=D+(P<<16&4294967295|P>>>16),P=A+(M^D^S)+b[2]+3299628645&4294967295,A=M+(P<<23&4294967295|P>>>9),P=S+(M^(A|~D))+b[0]+4096336452&4294967295,S=A+(P<<6&4294967295|P>>>26),P=D+(A^(S|~M))+b[7]+1126891415&4294967295,D=S+(P<<10&4294967295|P>>>22),P=M+(S^(D|~A))+b[14]+2878612391&4294967295,M=D+(P<<15&4294967295|P>>>17),P=A+(D^(M|~S))+b[5]+4237533241&4294967295,A=M+(P<<21&4294967295|P>>>11),P=S+(M^(A|~D))+b[12]+1700485571&4294967295,S=A+(P<<6&4294967295|P>>>26),P=D+(A^(S|~M))+b[3]+2399980690&4294967295,D=S+(P<<10&4294967295|P>>>22),P=M+(S^(D|~A))+b[10]+4293915773&4294967295,M=D+(P<<15&4294967295|P>>>17),P=A+(D^(M|~S))+b[1]+2240044497&4294967295,A=M+(P<<21&4294967295|P>>>11),P=S+(M^(A|~D))+b[8]+1873313359&4294967295,S=A+(P<<6&4294967295|P>>>26),P=D+(A^(S|~M))+b[15]+4264355552&4294967295,D=S+(P<<10&4294967295|P>>>22),P=M+(S^(D|~A))+b[6]+2734768916&4294967295,M=D+(P<<15&4294967295|P>>>17),P=A+(D^(M|~S))+b[13]+1309151649&4294967295,A=M+(P<<21&4294967295|P>>>11),P=S+(M^(A|~D))+b[4]+4149444226&4294967295,S=A+(P<<6&4294967295|P>>>26),P=D+(A^(S|~M))+b[11]+3174756917&4294967295,D=S+(P<<10&4294967295|P>>>22),P=M+(S^(D|~A))+b[2]+718787259&4294967295,M=D+(P<<15&4294967295|P>>>17),P=A+(D^(M|~S))+b[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(M+(P<<21&4294967295|P>>>11))&4294967295,O.g[2]=O.g[2]+M&4294967295,O.g[3]=O.g[3]+D&4294967295}r.prototype.u=function(O,S){S===void 0&&(S=O.length);for(var A=S-this.blockSize,b=this.B,M=this.h,D=0;D<S;){if(M==0)for(;D<=A;)s(this,O,D),D+=this.blockSize;if(typeof O=="string"){for(;D<S;)if(b[M++]=O.charCodeAt(D++),M==this.blockSize){s(this,b),M=0;break}}else for(;D<S;)if(b[M++]=O[D++],M==this.blockSize){s(this,b),M=0;break}}this.h=M,this.o+=S},r.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;var A=8*this.o;for(S=O.length-8;S<O.length;++S)O[S]=A&255,A/=256;for(this.u(O),O=Array(16),S=A=0;4>S;++S)for(var b=0;32>b;b+=8)O[A++]=this.g[S]>>>b&255;return O};function a(O,S){var A=d;return Object.prototype.hasOwnProperty.call(A,O)?A[O]:A[O]=S(O)}function u(O,S){this.h=S;for(var A=[],b=!0,M=O.length-1;0<=M;M--){var D=O[M]|0;b&&D==S||(A[M]=D,b=!1)}this.g=A}var d={};function f(O){return-128<=O&&128>O?a(O,function(S){return new u([S|0],0>S?-1:0)}):new u([O|0],0>O?-1:0)}function g(O){if(isNaN(O)||!isFinite(O))return w;if(0>O)return C(g(-O));for(var S=[],A=1,b=0;O>=A;b++)S[b]=O/A|0,A*=4294967296;return new u(S,0)}function v(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return C(v(O.substring(1),S));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=g(Math.pow(S,8)),b=w,M=0;M<O.length;M+=8){var D=Math.min(8,O.length-M),P=parseInt(O.substring(M,M+D),S);8>D?(D=g(Math.pow(S,D)),b=b.j(D).add(g(P))):(b=b.j(A),b=b.add(g(P)))}return b}var w=f(0),T=f(1),k=f(16777216);n=u.prototype,n.m=function(){if(N(this))return-C(this).m();for(var O=0,S=1,A=0;A<this.g.length;A++){var b=this.i(A);O+=(0<=b?b:4294967296+b)*S,S*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(V(this))return"0";if(N(this))return"-"+C(this).toString(O);for(var S=g(Math.pow(O,6)),A=this,b="";;){var M=J(A,S).g;A=H(A,M.j(S));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(O);if(A=M,V(A))return D+b;for(;6>D.length;)D="0"+D;b=D+b}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function V(O){if(O.h!=0)return!1;for(var S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function N(O){return O.h==-1}n.l=function(O){return O=H(this,O),N(O)?-1:V(O)?0:1};function C(O){for(var S=O.g.length,A=[],b=0;b<S;b++)A[b]=~O.g[b];return new u(A,~O.h).add(T)}n.abs=function(){return N(this)?C(this):this},n.add=function(O){for(var S=Math.max(this.g.length,O.g.length),A=[],b=0,M=0;M<=S;M++){var D=b+(this.i(M)&65535)+(O.i(M)&65535),P=(D>>>16)+(this.i(M)>>>16)+(O.i(M)>>>16);b=P>>>16,D&=65535,P&=65535,A[M]=P<<16|D}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(O,S){return O.add(C(S))}n.j=function(O){if(V(this)||V(O))return w;if(N(this))return N(O)?C(this).j(C(O)):C(C(this).j(O));if(N(O))return C(this.j(C(O)));if(0>this.l(k)&&0>O.l(k))return g(this.m()*O.m());for(var S=this.g.length+O.g.length,A=[],b=0;b<2*S;b++)A[b]=0;for(b=0;b<this.g.length;b++)for(var M=0;M<O.g.length;M++){var D=this.i(b)>>>16,P=this.i(b)&65535,Qe=O.i(M)>>>16,Pt=O.i(M)&65535;A[2*b+2*M]+=P*Pt,G(A,2*b+2*M),A[2*b+2*M+1]+=D*Pt,G(A,2*b+2*M+1),A[2*b+2*M+1]+=P*Qe,G(A,2*b+2*M+1),A[2*b+2*M+2]+=D*Qe,G(A,2*b+2*M+2)}for(b=0;b<S;b++)A[b]=A[2*b+1]<<16|A[2*b];for(b=S;b<2*S;b++)A[b]=0;return new u(A,0)};function G(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function q(O,S){this.g=O,this.h=S}function J(O,S){if(V(S))throw Error("division by zero");if(V(O))return new q(w,w);if(N(O))return S=J(C(O),S),new q(C(S.g),C(S.h));if(N(S))return S=J(O,C(S)),new q(C(S.g),S.h);if(30<O.g.length){if(N(O)||N(S))throw Error("slowDivide_ only works with positive integers.");for(var A=T,b=S;0>=b.l(O);)A=ne(A),b=ne(b);var M=he(A,1),D=he(b,1);for(b=he(b,2),A=he(A,2);!V(b);){var P=D.add(b);0>=P.l(O)&&(M=M.add(A),D=P),b=he(b,1),A=he(A,1)}return S=H(O,M.j(S)),new q(M,S)}for(M=w;0<=O.l(S);){for(A=Math.max(1,Math.floor(O.m()/S.m())),b=Math.ceil(Math.log(A)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),D=g(A),P=D.j(S);N(P)||0<P.l(O);)A-=b,D=g(A),P=D.j(S);V(D)&&(D=T),M=M.add(D),O=H(O,P)}return new q(M,O)}n.A=function(O){return J(this,O).h},n.and=function(O){for(var S=Math.max(this.g.length,O.g.length),A=[],b=0;b<S;b++)A[b]=this.i(b)&O.i(b);return new u(A,this.h&O.h)},n.or=function(O){for(var S=Math.max(this.g.length,O.g.length),A=[],b=0;b<S;b++)A[b]=this.i(b)|O.i(b);return new u(A,this.h|O.h)},n.xor=function(O){for(var S=Math.max(this.g.length,O.g.length),A=[],b=0;b<S;b++)A[b]=this.i(b)^O.i(b);return new u(A,this.h^O.h)};function ne(O){for(var S=O.g.length+1,A=[],b=0;b<S;b++)A[b]=O.i(b)<<1|O.i(b-1)>>>31;return new u(A,O.h)}function he(O,S){var A=S>>5;S%=32;for(var b=O.g.length-A,M=[],D=0;D<b;D++)M[D]=0<S?O.i(D+A)>>>S|O.i(D+A+1)<<32-S:O.i(D+A);return new u(M,O.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=v,Ts=u}).apply(typeof Bw<"u"?Bw:typeof self<"u"?self:typeof window<"u"?window:{});var xh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nI,Eu,rI,Hh,Dm,iI,sI,oI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,_){return c==Array.prototype||c==Object.prototype||(c[m]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof xh=="object"&&xh];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function s(c,m){if(m)e:{var _=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var U=c[I];if(!(U in _))break e;_=_[U]}c=c[c.length-1],I=_[c],m=m(I),m!=I&&m!=null&&e(_,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var _=0,I=!1,U={next:function(){if(!I&&_<c.length){var $=_++;return{value:m($,c[$]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}s("Array.prototype.values",function(c){return c||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,_){return c.call.apply(c.bind,arguments)}function w(c,m,_){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),c.apply(m,U)}}return function(){return c.apply(m,arguments)}}function T(c,m,_){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function k(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function V(c,m){function _(){}_.prototype=m.prototype,c.aa=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(I,U,$){for(var se=Array(arguments.length-2),He=2;He<arguments.length;He++)se[He-2]=arguments[He];return m.prototype[U].apply(I,se)}}function N(c){const m=c.length;if(0<m){const _=Array(m);for(let I=0;I<m;I++)_[I]=c[I];return _}return[]}function C(c,m){for(let _=1;_<arguments.length;_++){const I=arguments[_];if(f(I)){const U=c.length||0,$=I.length||0;c.length=U+$;for(let se=0;se<$;se++)c[U+se]=I[se]}else c.push(I)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function G(c){return/^[\s\xa0]*$/.test(c)}function q(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function J(c){return J[" "](c),c}J[" "]=function(){};var ne=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function he(c,m,_){for(const I in c)m.call(_,c[I],I,c)}function O(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function S(c){const m={};for(const _ in c)m[_]=c[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,m){let _,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(_ in I)c[_]=I[_];for(let $=0;$<A.length;$++)_=A[$],Object.prototype.hasOwnProperty.call(I,_)&&(c[_]=I[_])}}function M(c){var m=1;c=c.split(":");const _=[];for(;0<m&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function D(c){d.setTimeout(()=>{throw c},0)}function P(){var c=ge;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class Qe{constructor(){this.h=this.g=null}add(m,_){const I=Pt.get();I.set(m,_),this.h?this.h.next=I:this.g=I,this.h=I}}var Pt=new H(()=>new yt,c=>c.reset());class yt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,oe=!1,ge=new Qe,le=()=>{const c=d.Promise.resolve(void 0);Be=()=>{c.then(F)}};var F=()=>{for(var c;c=P();){try{c.h.call(c.g)}catch(_){D(_)}var m=Pt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}oe=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Ce=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return c})();function be(c,m){if(ye.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(ne){e:{try{J(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Le[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&be.aa.h.call(this)}}V(be,ye);var Le={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Ye(c,m,_,I,U){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!I,this.ha=U,this.key=++$e,this.da=this.fa=!1}function Lt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Kr(c){this.src=c,this.g={},this.h=0}Kr.prototype.add=function(c,m,_,I,U){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var se=ki(c,m,I,U);return-1<se?(m=c[se],_||(m.fa=!1)):(m=new Ye(m,this.src,$,!!I,U),m.fa=_,c.push(m)),m};function $o(c,m){var _=m.type;if(_ in c.g){var I=c.g[_],U=Array.prototype.indexOf.call(I,m,void 0),$;($=0<=U)&&Array.prototype.splice.call(I,U,1),$&&(Lt(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function ki(c,m,_,I){for(var U=0;U<c.length;++U){var $=c[U];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==I)return U}return-1}var Fs="closure_lm_"+(1e6*Math.random()|0),qo={};function gl(c,m,_,I,U){if(Array.isArray(m)){for(var $=0;$<m.length;$++)gl(c,m[$],_,I,U);return null}return _=_l(_),c&&c[ze]?c.K(m,_,g(I)?!!I.capture:!1,U):yl(c,m,_,!1,I,U)}function yl(c,m,_,I,U,$){if(!m)throw Error("Invalid event type");var se=g(U)?!!U.capture:!!U,He=Wo(c);if(He||(c[Fs]=He=new Kr(c)),_=He.add(m,_,I,se,$),_.proxy)return _;if(I=hc(),_.proxy=I,I.src=c,I.listener=_,c.addEventListener)Ce||(U=se),U===void 0&&(U=!1),c.addEventListener(m.toString(),I,U);else if(c.attachEvent)c.attachEvent(Yr(m.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function hc(){function c(_){return m.call(c.src,c.listener,_)}const m=vl;return c}function Ho(c,m,_,I,U){if(Array.isArray(m))for(var $=0;$<m.length;$++)Ho(c,m[$],_,I,U);else I=g(I)?!!I.capture:!!I,_=_l(_),c&&c[ze]?(c=c.i,m=String(m).toString(),m in c.g&&($=c.g[m],_=ki($,_,I,U),-1<_&&(Lt($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete c.g[m],c.h--)))):c&&(c=Wo(c))&&(m=c.g[m.toString()],c=-1,m&&(c=ki(m,_,I,U)),(_=-1<c?m[c]:null)&&Qr(_))}function Qr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[ze])$o(m.i,c);else{var _=c.type,I=c.proxy;m.removeEventListener?m.removeEventListener(_,I,c.capture):m.detachEvent?m.detachEvent(Yr(_),I):m.addListener&&m.removeListener&&m.removeListener(I),(_=Wo(m))?($o(_,c),_.h==0&&(_.src=null,m[Fs]=null)):Lt(c)}}}function Yr(c){return c in qo?qo[c]:qo[c]="on"+c}function vl(c,m){if(c.da)c=!0;else{m=new be(m,this);var _=c.listener,I=c.ha||c.src;c.fa&&Qr(c),c=_.call(I,m)}return c}function Wo(c){return c=c[Fs],c instanceof Kr?c:null}var Go="__closure_events_fn_"+(1e9*Math.random()>>>0);function _l(c){return typeof c=="function"?c:(c[Go]||(c[Go]=function(m){return c.handleEvent(m)}),c[Go])}function Ct(){X.call(this),this.i=new Kr(this),this.M=this,this.F=null}V(Ct,X),Ct.prototype[ze]=!0,Ct.prototype.removeEventListener=function(c,m,_,I){Ho(this,c,m,_,I)};function kt(c,m){var _,I=c.F;if(I)for(_=[];I;I=I.F)_.push(I);if(c=c.M,I=m.type||m,typeof m=="string")m=new ye(m,c);else if(m instanceof ye)m.target=m.target||c;else{var U=m;m=new ye(I,c),b(m,U)}if(U=!0,_)for(var $=_.length-1;0<=$;$--){var se=m.g=_[$];U=Xr(se,I,!0,m)&&U}if(se=m.g=c,U=Xr(se,I,!0,m)&&U,U=Xr(se,I,!1,m)&&U,_)for($=0;$<_.length;$++)se=m.g=_[$],U=Xr(se,I,!1,m)&&U}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var _=c.g[m],I=0;I<_.length;I++)Lt(_[I]);delete c.g[m],c.h--}}this.F=null},Ct.prototype.K=function(c,m,_,I){return this.i.add(String(c),m,!1,_,I)},Ct.prototype.L=function(c,m,_,I){return this.i.add(String(c),m,!0,_,I)};function Xr(c,m,_,I){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,$=0;$<m.length;++$){var se=m[$];if(se&&!se.da&&se.capture==_){var He=se.listener,bt=se.ha||se.src;se.fa&&$o(c.i,se),U=He.call(bt,I)!==!1&&U}}return U&&!I.defaultPrevented}function wl(c,m,_){if(typeof c=="function")_&&(c=T(c,_));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function bi(c){c.g=wl(()=>{c.g=null,c.i&&(c.i=!1,bi(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Us extends X{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:bi(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(c){X.call(this),this.h=c,this.g={}}V(js,X);var El=[];function Tl(c){he(c.g,function(m,_){this.g.hasOwnProperty(_)&&Qr(m)},c),c.g={}}js.prototype.N=function(){js.aa.N.call(this),Tl(this)},js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Il=d.JSON.stringify,Sl=d.JSON.parse,Al=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Bs(){}Bs.prototype.h=null;function Ko(c){return c.h||(c.h=c.i())}function Qo(){}var jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tr(){ye.call(this,"d")}V(Tr,ye);function Yo(){ye.call(this,"c")}V(Yo,ye);var Ir={},Rl=null;function zs(){return Rl=Rl||new Ct}Ir.La="serverreachability";function Pl(c){ye.call(this,Ir.La,c)}V(Pl,ye);function Jr(c){const m=zs();kt(m,new Pl(m))}Ir.STAT_EVENT="statevent";function Cl(c,m){ye.call(this,Ir.STAT_EVENT,c),this.stat=m}V(Cl,ye);function vt(c){const m=zs();kt(m,new Cl(m,c))}Ir.Ma="timingevent";function Xo(c,m){ye.call(this,Ir.Ma,c),this.size=m}V(Xo,ye);function tr(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function $s(){this.g=!0}$s.prototype.xa=function(){this.g=!1};function qs(c,m,_,I,U,$){c.info(function(){if(c.g)if($)for(var se="",He=$.split("&"),bt=0;bt<He.length;bt++){var Ve=He[bt].split("=");if(1<Ve.length){var Vt=Ve[0];Ve=Ve[1];var Tt=Vt.split("_");se=2<=Tt.length&&Tt[1]=="type"?se+(Vt+"="+Ve+"&"):se+(Vt+"=redacted&")}}else se=null;else se=$;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+m+`
`+_+`
`+se})}function Jo(c,m,_,I,U,$,se){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+m+`
`+_+`
`+$+" "+se})}function nr(c,m,_,I){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+cf(c,_)+(I?" "+I:"")})}function kl(c,m){c.info(function(){return"TIMEOUT: "+m})}$s.prototype.info=function(){};function cf(c,m){if(!c.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var I=_[c];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return Il(_)}catch{return m}}var Zo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rr;function Hs(){}V(Hs,Bs),Hs.prototype.g=function(){return new XMLHttpRequest},Hs.prototype.i=function(){return{}},rr=new Hs;function ir(c,m,_,I){this.j=c,this.i=m,this.l=_,this.R=I||1,this.U=new js(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fc}function fc(){this.i=null,this.g="",this.h=!1}var bl={},ea={};function ta(c,m,_){c.L=1,c.v=Mi(kn(m)),c.m=_,c.P=!0,Nl(c,null)}function Nl(c,m){c.F=Date.now(),Xe(c),c.A=kn(c.v);var _=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Vi(_.i,"t",I),c.C=0,_=c.j.J,c.h=new fc,c.g=Nc(c.j,_?m:null,!c.m),0<c.O&&(c.M=new Us(T(c.Y,c,c.g),c.O)),m=c.U,_=c.g,I=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(El[0]=U.toString()),U=El);for(var $=0;$<U.length;$++){var se=gl(_,U[$],I||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Jr(),qs(c.i,c.u,c.A,c.l,c.R,c.m)}ir.prototype.ca=function(c){c=c.target;const m=this.M;m&&gn(c)==3?m.j():this.Y(c)},ir.prototype.Y=function(c){try{if(c==this.g)e:{const Tt=gn(this.g);var m=this.g.Ba();const $n=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Vl(this.g)))){this.J||Tt!=4||m==7||(m==8||0>=$n?Jr(3):Jr(2)),Ws(this);var _=this.g.Z();this.X=_;t:if(pc(this)){var I=Vl(this.g);c="";var U=I.length,$=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),Ni(this);var se="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,c+=this.h.i.decode(I[m],{stream:!($&&m==U-1)});I.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,Jo(this.i,this.u,this.A,this.l,this.R,Tt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var He,bt=this.g;if((He=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(He)){var Ve=He;break t}}Ve=null}if(_=Ve)nr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xl(this,_);else{this.o=!1,this.s=3,vt(12),Bn(this),Ni(this);break e}}if(this.P){_=!0;let Nn;for(;!this.J&&this.C<se.length;)if(Nn=hf(this,se),Nn==ea){Tt==4&&(this.s=4,vt(14),_=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==bl){this.s=4,vt(15),nr(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else nr(this.i,this.l,Nn,null),xl(this,Nn);if(pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||se.length!=0||this.h.h||(this.s=1,vt(16),_=!1),this.o=this.o&&_,!_)nr(this.i,this.l,se,"[Invalid Chunked Response]"),Bn(this),Ni(this);else if(0<se.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Ul(Vt),Vt.M=!0,vt(11))}}else nr(this.i,this.l,se,null),xl(this,se);Tt==4&&Bn(this),this.o&&!this.J&&(Tt==4?da(this.j,this):(this.o=!1,Xe(this)))}else aa(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Bn(this),Ni(this)}}}catch{}finally{}};function pc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function hf(c,m){var _=c.C,I=m.indexOf(`
`,_);return I==-1?ea:(_=Number(m.substring(_,I)),isNaN(_)?bl:(I+=1,I+_>m.length?ea:(m=m.slice(I,I+_),c.C=I+_,m)))}ir.prototype.cancel=function(){this.J=!0,Bn(this)};function Xe(c){c.S=Date.now()+c.I,mc(c,c.I)}function mc(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=tr(T(c.ba,c),m)}function Ws(c){c.B&&(d.clearTimeout(c.B),c.B=null)}ir.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(kl(this.i,this.A),this.L!=2&&(Jr(),vt(17)),Bn(this),this.s=2,Ni(this)):mc(this,this.S-c)};function Ni(c){c.j.G==0||c.J||da(c.j,c)}function Bn(c){Ws(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Tl(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function xl(c,m){try{var _=c.j;if(_.G!=0&&(_.g==c||un(_.h,c))){if(!c.K&&un(_.h,c)&&_.G==3){try{var I=_.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ha(_),ur(_);else break e;ca(_),vt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=tr(T(_.Za,_),6e3));if(1>=yc(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else ri(_,11)}else if((c.K||_.g==c)&&ha(_),!G(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Ve=U[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const Vt=Ve[3];Vt!=null&&(_.la=Vt,_.j.info("VER="+_.la));const Tt=Ve[4];Tt!=null&&(_.Aa=Tt,_.j.info("SVER="+_.Aa));const $n=Ve[5];$n!=null&&typeof $n=="number"&&0<$n&&(I=1.5*$n,_.L=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const Nn=c.g;if(Nn){const Zs=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zs){var $=I.h;$.g||Zs.indexOf("spdy")==-1&&Zs.indexOf("quic")==-1&&Zs.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Ol($,$.h),$.h=null))}if(I.D){const pa=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;pa&&(I.ya=pa,Ke(I.I,I.D,pa))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),I=_;var se=c;if(I.qa=bc(I,I.J?I.ia:null,I.W),se.K){vc(I.h,se);var He=se,bt=I.L;bt&&(He.I=bt),He.B&&(Ws(He),Xe(He)),I.g=se}else Js(I);0<_.i.length&&Pr(_)}else Ve[0]!="stop"&&Ve[0]!="close"||ri(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?ri(_,7):qt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}Jr(4)}catch{}}var gc=class{constructor(c,m){this.g=c,this.map=m}};function Gs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function yc(c){return c.h?1:c.g?c.g.size:0}function un(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Ol(c,m){c.g?c.g.add(m):c.h=m}function vc(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Gs.prototype.cancel=function(){if(this.i=_c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function _c(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.D);return m}return N(c.i)}function na(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],_=c.length,I=0;I<_;I++)m.push(c[I]);return m}m=[],_=0;for(I in c)m[_++]=c[I];return m}function ra(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var _=0;_<c;_++)m.push(_);return m}m=[],_=0;for(const I in c)m[_++]=I;return m}}}function xi(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var _=ra(c),I=na(c),U=I.length,$=0;$<U;$++)m.call(void 0,I[$],_&&_[$],c)}var Ks=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function df(c,m){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var I=c[_].indexOf("="),U=null;if(0<=I){var $=c[_].substring(0,I);U=c[_].substring(I+1)}else $=c[_];m($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Zr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Zr){this.h=c.h,Qs(this,c.j),this.o=c.o,this.g=c.g,Oi(this,c.s),this.l=c.l;var m=c.i,_=new Sr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Di(this,_),this.m=c.m}else c&&(m=String(c).match(Ks))?(this.h=!1,Qs(this,m[1]||"",!0),this.o=De(m[2]||""),this.g=De(m[3]||"",!0),Oi(this,m[4]),this.l=De(m[5]||"",!0),Di(this,m[6]||"",!0),this.m=De(m[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}Zr.prototype.toString=function(){var c=[],m=this.j;m&&c.push(Li(m,ia,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Li(m,ia,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Li(_,_.charAt(0)=="/"?Tc:Ec,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Li(_,Dl)),c.join("")};function kn(c){return new Zr(c)}function Qs(c,m,_){c.j=_?De(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Oi(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Di(c,m,_){m instanceof Sr?(c.i=m,Ar(c.i,c.h)):(_||(m=Li(m,Ic)),c.i=new Sr(m,c.h))}function Ke(c,m,_){c.i.set(m,_)}function Mi(c){return Ke(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function De(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Li(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,wc),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function wc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ia=/[#\/\?@]/g,Ec=/[#\?:]/g,Tc=/[#\?]/g,Ic=/[#\?@]/g,Dl=/#/g;function Sr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function $t(c){c.g||(c.g=new Map,c.h=0,c.i&&df(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Sr.prototype,n.add=function(c,m){$t(this),this.i=null,c=zn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function sr(c,m){$t(c),m=zn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function or(c,m){return $t(c),m=zn(c,m),c.g.has(m)}n.forEach=function(c,m){$t(this),this.g.forEach(function(_,I){_.forEach(function(U){c.call(m,U,I,this)},this)},this)},n.na=function(){$t(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let I=0;I<m.length;I++){const U=c[I];for(let $=0;$<U.length;$++)_.push(m[I])}return _},n.V=function(c){$t(this);let m=[];if(typeof c=="string")or(this,c)&&(m=m.concat(this.g.get(zn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)m=m.concat(c[_])}return m},n.set=function(c,m){return $t(this),this.i=null,c=zn(this,c),or(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Vi(c,m,_){sr(c,m),0<_.length&&(c.i=null,c.g.set(zn(c,m),N(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var I=m[_];const $=encodeURIComponent(String(I)),se=this.V(I);for(I=0;I<se.length;I++){var U=$;se[I]!==""&&(U+="="+encodeURIComponent(String(se[I]))),c.push(U)}}return this.i=c.join("&")};function zn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Ar(c,m){m&&!c.j&&($t(c),c.i=null,c.g.forEach(function(_,I){var U=I.toLowerCase();I!=U&&(sr(this,I),Vi(this,U,_))},c)),c.j=m}function ff(c,m){const _=new $s;if(d.Image){const I=new Image;I.onload=k(mn,_,"TestLoadImage: loaded",!0,m,I),I.onerror=k(mn,_,"TestLoadImage: error",!1,m,I),I.onabort=k(mn,_,"TestLoadImage: abort",!1,m,I),I.ontimeout=k(mn,_,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else m(!1)}function Sc(c,m){const _=new $s,I=new AbortController,U=setTimeout(()=>{I.abort(),mn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:I.signal}).then($=>{clearTimeout(U),$.ok?mn(_,"TestPingServer: ok",!0,m):mn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),mn(_,"TestPingServer: error",!1,m)})}function mn(c,m,_,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(_)}catch{}}function pf(){this.g=new Al}function Ac(c,m,_){const I=_||"";try{xi(c,function(U,$){let se=U;g(U)&&(se=Il(U)),m.push(I+$+"="+encodeURIComponent(se))})}catch(U){throw m.push(I+"type="+encodeURIComponent("_badmap")),U}}function ei(c){this.l=c.Ub||null,this.j=c.eb||!1}V(ei,Bs),ei.prototype.g=function(){return new Ys(this.l,this.j)},ei.prototype.i=(function(c){return function(){return c}})({});function Ys(c,m){Ct.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ys,Ct),n=Ys.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,lr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ar(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,lr(this)),this.g&&(this.readyState=3,lr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?ar(this):lr(this),this.readyState==3&&Rc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,ar(this))},n.Qa=function(c){this.g&&(this.response=c,ar(this))},n.ga=function(){this.g&&ar(this)};function ar(c){c.readyState=4,c.l=null,c.j=null,c.v=null,lr(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function lr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ys.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ti(c){let m="";return he(c,function(_,I){m+=I,m+=":",m+=_,m+=`\r
`}),m}function Fi(c,m,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=ti(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Ke(c,m,_))}function st(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(st,Ct);var mf=/^https?$/i,Ml=["POST","PUT"];n=st.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rr.g(),this.v=this.o?Ko(this.o):Ko(rr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch($){Xs(this,$);return}if(c=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)_.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const $ of I.keys())_.set($,I.get($));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ml,m,void 0))||I||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,se]of _)this.g.setRequestHeader($,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oa(this),this.u=!0,this.g.send(c),this.u=!1}catch($){Xs(this,$)}};function Xs(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,sa(c),bn(c)}function sa(c){c.A||(c.A=!0,kt(c,"complete"),kt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,kt(this,"complete"),kt(this,"abort"),bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ll(this):this.bb())},n.bb=function(){Ll(this)};function Ll(c){if(c.h&&typeof u<"u"&&(!c.v[1]||gn(c)!=4||c.Z()!=2)){if(c.u&&gn(c)==4)wl(c.Ea,0,c);else if(kt(c,"readystatechange"),gn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var I;if(I=se===0){var U=String(c.D).match(Ks)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),I=!mf.test(U?U.toLowerCase():"")}_=I}if(_)kt(c,"complete"),kt(c,"success");else{c.m=6;try{var $=2<gn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",sa(c)}}finally{bn(c)}}}}function bn(c,m){if(c.g){oa(c);const _=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||kt(c,"ready");try{_.onreadystatechange=I}catch{}}}function oa(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function gn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Sl(m)}};function Vl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function aa(c){const m={};c=(c.g&&2<=gn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(G(c[I]))continue;var _=M(c[I]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[U]||[];m[U]=$,$.push(_)}O(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rr(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function Fl(c){this.Aa=0,this.i=[],this.j=new $s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rr("baseRetryDelayMs",5e3,c),this.cb=Rr("retryDelaySeedMs",1e4,c),this.Wa=Rr("forwardChannelMaxRetries",2,c),this.wa=Rr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Gs(c&&c.concurrentRequestLimit),this.Da=new pf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fl.prototype,n.la=8,n.G=1,n.connect=function(c,m,_,I){vt(0),this.W=c,this.H=m||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.I=bc(this,null,this.W),Pr(this)};function qt(c){if(la(c),c.G==3){var m=c.U++,_=kn(c.I);if(Ke(_,"SID",c.K),Ke(_,"RID",m),Ke(_,"TYPE","terminate"),ni(c,_),m=new ir(c,c.j,m),m.L=2,m.v=Mi(kn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=Nc(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Xe(m)}kc(c)}function ur(c){c.g&&(Ul(c),c.g.cancel(),c.g=null)}function la(c){ur(c),c.u&&(d.clearTimeout(c.u),c.u=null),ha(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Pr(c){if(!Cn(c.h)&&!c.s){c.s=!0;var m=c.Ga;Be||le(),oe||(Be(),oe=!0),ge.add(m,c),c.B=0}}function gf(c,m){return yc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=tr(T(c.Ga,c,m),Cc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new ir(this,this.j,c);let $=this.o;if(this.S&&($?($=S($),b($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Ui(this,U,m),_=kn(this.I),Ke(_,"RID",c),Ke(_,"CVER",22),this.D&&Ke(_,"X-HTTP-Session-Id",this.D),ni(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(ti($)))+"&"+m:this.m&&Fi(_,this.m,$)),Ol(this.h,U),this.Ua&&Ke(_,"TYPE","init"),this.P?(Ke(_,"$req",m),Ke(_,"SID","null"),U.T=!0,ta(U,_,null)):ta(U,_,m),this.G=2}}else this.G==3&&(c?ua(this,c):this.i.length==0||Cn(this.h)||ua(this))};function ua(c,m){var _;m?_=m.l:_=c.U++;const I=kn(c.I);Ke(I,"SID",c.K),Ke(I,"RID",_),Ke(I,"AID",c.T),ni(c,I),c.m&&c.o&&Fi(I,c.m,c.o),_=new ir(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Ui(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ol(c.h,_),ta(_,I,m)}function ni(c,m){c.H&&he(c.H,function(_,I){Ke(m,I,_)}),c.l&&xi({},function(_,I){Ke(m,I,_)})}function Ui(c,m,_){_=Math.min(c.i.length,_);var I=c.l?T(c.l.Na,c.l,c):null;e:{var U=c.i;let $=-1;for(;;){const se=["count="+_];$==-1?0<_?($=U[0].g,se.push("ofs="+$)):$=0:se.push("ofs="+$);let He=!0;for(let bt=0;bt<_;bt++){let Ve=U[bt].g;const Vt=U[bt].map;if(Ve-=$,0>Ve)$=Math.max(0,U[bt].g-100),He=!1;else try{Ac(Vt,se,"req"+Ve+"_")}catch{I&&I(Vt)}}if(He){I=se.join("&");break e}}}return c=c.i.splice(0,_),m.D=c,I}function Js(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Be||le(),oe||(Be(),oe=!0),ge.add(m,c),c.v=0}}function ca(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=tr(T(c.Fa,c),Cc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=tr(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),ur(this),Pc(this))};function Ul(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Pc(c){c.g=new ir(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=kn(c.qa);Ke(m,"RID","rpc"),Ke(m,"SID",c.K),Ke(m,"AID",c.T),Ke(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ke(m,"TO",c.ja),Ke(m,"TYPE","xmlhttp"),ni(c,m),c.m&&c.o&&Fi(m,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Mi(kn(m)),_.m=null,_.P=!0,Nl(_,c)}n.Za=function(){this.C!=null&&(this.C=null,ur(this),ca(this),vt(19))};function ha(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function da(c,m){var _=null;if(c.g==m){ha(c),Ul(c),c.g=null;var I=2}else if(un(c.h,m))_=m.D,vc(c.h,m),I=1;else return;if(c.G!=0){if(m.o)if(I==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=c.B;I=zs(),kt(I,new Xo(I,_)),Pr(c)}else Js(c);else if(U=m.s,U==3||U==0&&0<m.X||!(I==1&&gf(c,m)||I==2&&ca(c)))switch(_&&0<_.length&&(m=c.h,m.i=m.i.concat(_)),U){case 1:ri(c,5);break;case 4:ri(c,10);break;case 3:ri(c,6);break;default:ri(c,2)}}}function Cc(c,m){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*m}function ri(c,m){if(c.j.info("Error code "+m),m==2){var _=T(c.fb,c),I=c.Xa;const U=!I;I=new Zr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Qs(I,"https"),Mi(I),U?ff(I.toString(),_):Sc(I.toString(),_)}else vt(2);c.G=0,c.l&&c.l.sa(m),kc(c),la(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function kc(c){if(c.G=0,c.ka=[],c.l){const m=_c(c.h);(m.length!=0||c.i.length!=0)&&(C(c.ka,m),C(c.ka,c.i),c.h.i.length=0,N(c.i),c.i.length=0),c.l.ra()}}function bc(c,m,_){var I=_ instanceof Zr?kn(_):new Zr(_);if(I.g!="")m&&(I.g=m+"."+I.g),Oi(I,I.s);else{var U=d.location;I=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var $=new Zr(null);I&&Qs($,I),m&&($.g=m),U&&Oi($,U),_&&($.l=_),I=$}return _=c.D,m=c.ya,_&&m&&Ke(I,_,m),Ke(I,"VER",c.la),ni(c,I),I}function Nc(c,m,_){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new st(new ei({eb:_})):new st(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jl(){}n=jl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fa(){}fa.prototype.g=function(c,m){return new cn(c,m)};function cn(c,m){Ct.call(this),this.g=new Fl(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!G(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!G(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Cr(this)}V(cn,Ct),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){qt(this.g)},cn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Il(c),c=_);m.i.push(new gc(m.Ya++,c)),m.G==3&&Pr(m)},cn.prototype.N=function(){this.g.l=null,delete this.j,qt(this.g),delete this.g,cn.aa.N.call(this)};function xc(c){Tr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const _ in m){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}V(xc,Tr);function Oc(){Yo.call(this),this.status=1}V(Oc,Yo);function Cr(c){this.g=c}V(Cr,jl),Cr.prototype.ua=function(){kt(this.g,"a")},Cr.prototype.ta=function(c){kt(this.g,new xc(c))},Cr.prototype.sa=function(c){kt(this.g,new Oc)},Cr.prototype.ra=function(){kt(this.g,"b")},fa.prototype.createWebChannel=fa.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,oI=function(){return new fa},sI=function(){return zs()},iI=Ir,Dm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zo.NO_ERROR=0,Zo.TIMEOUT=8,Zo.HTTP_ERROR=6,Hh=Zo,dc.COMPLETE="complete",rI=dc,Qo.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,Eu=Qo,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,nI=st}).apply(typeof xh<"u"?xh:typeof self<"u"?self:typeof window<"u"?window:{});const zw="@firebase/firestore",$w="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new fg("@firebase/firestore");function La(){return bo.logLevel}function ce(n,...e){if(bo.logLevel<=xe.DEBUG){const t=e.map(Sg);bo.debug(`Firestore (${hl}): ${n}`,...t)}}function Ai(n,...e){if(bo.logLevel<=xe.ERROR){const t=e.map(Sg);bo.error(`Firestore (${hl}): ${n}`,...t)}}function Ss(n,...e){if(bo.logLevel<=xe.WARN){const t=e.map(Sg);bo.warn(`Firestore (${hl}): ${n}`,...t)}}function Sg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,aI(n,r,t)}function aI(n,e,t){let r=`FIRESTORE (${hl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ai(r),new Error(r)}function qe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||aI(e,s,r)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends er{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(sn.UNAUTHENTICATED)))}shutdown(){}}class tD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class nD{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ei,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ei)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string",31837,{l:r}),new lI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new sn(e)}}class rD{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class iD{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new rD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0,3512);const r=a=>{a.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ce("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qw(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=oD(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function ke(n,e){return n<e?-1:n>e?1:0}function Mm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ke(r,s);{const a=uI(),u=aD(a.encode(Hw(n,t)),a.encode(Hw(e,t)));return u!==0?u:ke(r,s)}}t+=r>65535?2:1}return ke(n.length,e.length)}function Hw(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function aD(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ke(n[t],e[t]);return ke(n.length,e.length)}function tl(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="__name__";class Dr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Dr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Dr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Dr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return ke(e.length,t.length)}static compareSegments(e,t){const r=Dr.isNumericId(e),s=Dr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Dr.extractNumericId(e).compare(Dr.extractNumericId(t)):Mm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ts.fromString(e.substring(4,e.length-2))}}class Ze extends Dr{construct(e,t,r){return new Ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Ze(t)}static emptyPath(){return new Ze([])}}const lD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Dr{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return lD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ww}static keyField(){return new Qt([Ww])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ae(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new ae(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ae(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new ae(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(Ze.fromString(e))}static fromName(e){return new ve(Ze.fromString(e).popFirst(5))}static empty(){return new ve(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new Ze(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(n,e,t){if(!t)throw new ae(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uD(n,e,t,r){if(e===!0&&r===!0)throw new ae(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gw(n){if(!ve.isDocumentKey(n))throw new ae(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kw(n){if(ve.isDocumentKey(n))throw new ae(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function jd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function Jn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jd(n);throw new ae(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,e){const t={typeString:n};return e&&(t.value=e),t}function sc(n,e){if(!hI(n))throw new ae(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ae(Q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=-62135596800,Yw=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Yw);return new it(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qw)throw new ae(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yw}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(sc(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:Rt("string",it._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new it(0,0))}static max(){return new Ae(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=-1;function cD(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ae.fromTimestamp(r===1e9?new it(t+1,0):new it(t,r));return new As(s,ve.empty(),e)}function hD(n){return new As(n.readTime,n.key,ju)}class As{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new As(Ae.min(),ve.empty(),ju)}static max(){return new As(Ae.max(),ve.empty(),ju)}}function dD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:ke(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==fD)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(t){return Y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,r)=>{t(e)}))}static reject(e){return new Y(((t,r)=>{r(e)}))}static waitFor(e){return new Y(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Y.resolve(!1);for(const r of e)t=t.next((s=>s?Y.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Y(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;t(e[g]).next((v=>{u[g]=v,++d,d===a&&r(u)}),(v=>s(v)))}}))}static doWhile(e,t){return new Y(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function mD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Bd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=-1;function zd(n){return n==null}function cd(n){return n===0&&1/n==-1/0}function gD(n){return typeof n=="number"&&Number.isInteger(n)&&!cd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="";function yD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xw(e)),e=vD(n.get(t),e);return Xw(e)}function vD(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case dI:t+="";break;default:t+=a}}return t}function Xw(n){return n+dI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ls(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oh(this.root,e,this.comparator,!0)}}class Oh{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Kt.RED,this.left=s??Kt.EMPTY,this.right=a??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Kt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zw(this.data.getIterator())}getIteratorFrom(e){return new Zw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Dt(this.comparator);return t.data=e,t}}class Zw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new Dt(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return tl(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new pI("Invalid base64 string: "+a):a}})(e);return new Yt(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const _D=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rs(n){if(qe(!!n,39018),typeof n=="string"){let e=0;const t=_D.exec(n);if(qe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ps(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="server_timestamp",gI="__type__",yI="__previous_value__",vI="__local_write_time__";function Pg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[gI])===null||t===void 0?void 0:t.stringValue)===mI}function $d(n){const e=n.mapValue.fields[yI];return Pg(e)?$d(e):e}function Bu(n){const e=Rs(n.mapValue.fields[vI].timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,t,r,s,a,u,d,f,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g,this.isUsingEmulator=v}}const hd="(default)";class zu{constructor(e,t){this.projectId=e,this.database=t||hd}static empty(){return new zu("","")}get isDefaultDatabase(){return this.database===hd}isEqual(e){return e instanceof zu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="__type__",ED="__max__",Dh={mapValue:{}},wI="__vector__",dd="value";function Cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pg(n)?4:ID(n)?9007199254740991:TD(n)?10:11:Te(28295,{value:n})}function Gr(n,e){if(n===e)return!0;const t=Cs(n);if(t!==Cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bu(n).isEqual(Bu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Rs(s.timestampValue),d=Rs(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Ps(s.bytesValue).isEqual(Ps(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return wt(s.geoPointValue.latitude)===wt(a.geoPointValue.latitude)&&wt(s.geoPointValue.longitude)===wt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return wt(s.integerValue)===wt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=wt(s.doubleValue),d=wt(a.doubleValue);return u===d?cd(u)===cd(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return tl(n.arrayValue.values||[],e.arrayValue.values||[],Gr);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(Jw(u)!==Jw(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Gr(u[f],d[f])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function $u(n,e){return(n.values||[]).find((t=>Gr(t,e)))!==void 0}function nl(n,e){if(n===e)return 0;const t=Cs(n),r=Cs(e);if(t!==r)return ke(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=wt(a.integerValue||a.doubleValue),f=wt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return eE(n.timestampValue,e.timestampValue);case 4:return eE(Bu(n),Bu(e));case 5:return Mm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Ps(a),f=Ps(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let g=0;g<d.length&&g<f.length;g++){const v=ke(d[g],f[g]);if(v!==0)return v}return ke(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=ke(wt(a.latitude),wt(u.latitude));return d!==0?d:ke(wt(a.longitude),wt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return tE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,g,v;const w=a.fields||{},T=u.fields||{},k=(d=w[dd])===null||d===void 0?void 0:d.arrayValue,V=(f=T[dd])===null||f===void 0?void 0:f.arrayValue,N=ke(((g=k==null?void 0:k.values)===null||g===void 0?void 0:g.length)||0,((v=V==null?void 0:V.values)===null||v===void 0?void 0:v.length)||0);return N!==0?N:tE(k,V)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Dh.mapValue&&u===Dh.mapValue)return 0;if(a===Dh.mapValue)return 1;if(u===Dh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=u.fields||{},v=Object.keys(g);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const T=Mm(f[w],v[w]);if(T!==0)return T;const k=nl(d[f[w]],g[v[w]]);if(k!==0)return k}return ke(f.length,v.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{le:t})}}function eE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ke(n,e);const t=Rs(n),r=Rs(e),s=ke(t.seconds,r.seconds);return s!==0?s:ke(t.nanos,r.nanos)}function tE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=nl(t[s],r[s]);if(a)return a}return ke(t.length,r.length)}function rl(n){return Lm(n)}function Lm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Rs(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ps(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ve.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Lm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Lm(t.fields[u])}`;return s+"}"})(n.mapValue):Te(61005,{value:n})}function Wh(n){switch(Cs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$d(n);return e?16+Wh(e):16;case 5:return 2*n.stringValue.length;case 6:return Ps(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Wh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ls(r.fields,((a,u)=>{s+=a.length+Wh(u)})),s})(n.mapValue);default:throw Te(13486,{value:n})}}function nE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Vm(n){return!!n&&"integerValue"in n}function Cg(n){return!!n&&"arrayValue"in n}function rE(n){return!!n&&"nullValue"in n}function iE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gh(n){return!!n&&"mapValue"in n}function TD(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[_I])===null||t===void 0?void 0:t.stringValue)===wI}function Pu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ls(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Pu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ID(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ED}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Gh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pu(t)}setAll(e){let t=Qt.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=Pu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Gh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Gh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ls(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new An(Pu(this.value))}}function EI(n){const e=[];return Ls(n.fields,((t,r)=>{const s=new Qt([t]);if(Gh(r)){const a=EI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new on(e,0,Ae.min(),Ae.min(),Ae.min(),An.empty(),0)}static newFoundDocument(e,t,r,s){return new on(e,1,t,Ae.min(),r,s,0)}static newNoDocument(e,t){return new on(e,2,t,Ae.min(),Ae.min(),An.empty(),0)}static newUnknownDocument(e,t){return new on(e,3,t,Ae.min(),Ae.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.position=e,this.inclusive=t}}function sE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=ve.comparator(ve.fromName(u.referenceValue),t.key):r=nl(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function oE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Gr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t="asc"){this.field=e,this.dir=t}}function SD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{}class At extends TI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new RD(e,t,r):t==="array-contains"?new kD(e,r):t==="in"?new bD(e,r):t==="not-in"?new ND(e,r):t==="array-contains-any"?new xD(e,r):new At(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new PD(e,r):new CD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(nl(t,this.value)):t!==null&&Cs(this.value)===Cs(t)&&this.matchesComparison(nl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Er extends TI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Er(e,t)}matches(e){return II(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function II(n){return n.op==="and"}function SI(n){return AD(n)&&II(n)}function AD(n){for(const e of n.filters)if(e instanceof Er)return!1;return!0}function Fm(n){if(n instanceof At)return n.field.canonicalString()+n.op.toString()+rl(n.value);if(SI(n))return n.filters.map((e=>Fm(e))).join(",");{const e=n.filters.map((t=>Fm(t))).join(",");return`${n.op}(${e})`}}function AI(n,e){return n instanceof At?(function(r,s){return s instanceof At&&r.op===s.op&&r.field.isEqual(s.field)&&Gr(r.value,s.value)})(n,e):n instanceof Er?(function(r,s){return s instanceof Er&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&AI(u,s.filters[d])),!0):!1})(n,e):void Te(19439)}function RI(n){return n instanceof At?(function(t){return`${t.field.canonicalString()} ${t.op} ${rl(t.value)}`})(n):n instanceof Er?(function(t){return t.op.toString()+" {"+t.getFilters().map(RI).join(" ,")+"}"})(n):"Filter"}class RD extends At{constructor(e,t,r){super(e,t,r),this.key=ve.fromName(r.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class PD extends At{constructor(e,t){super(e,"in",t),this.keys=PI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class CD extends At{constructor(e,t){super(e,"not-in",t),this.keys=PI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function PI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ve.fromName(r.referenceValue)))}class kD extends At{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cg(t)&&$u(t.arrayValue,this.value)}}class bD extends At{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$u(this.value.arrayValue,t)}}class ND extends At{constructor(e,t){super(e,"not-in",t)}matches(e){if($u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$u(this.value.arrayValue,t)}}class xD extends At{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>$u(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function aE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new OD(n,e,t,r,s,a,u)}function kg(n){const e=Re(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Fm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),zd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>rl(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>rl(r))).join(",")),e.Pe=t}return e.Pe}function bg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!SD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!AI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!oE(n.startAt,e.startAt)&&oE(n.endAt,e.endAt)}function Um(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function DD(n,e,t,r,s,a,u,d){return new pl(n,e,t,r,s,a,u,d)}function qd(n){return new pl(n)}function lE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function CI(n){return n.collectionGroup!==null}function Cu(n){const e=Re(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Dt(Qt.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new qu(a,r))})),t.has(Qt.keyField().canonicalString())||e.Te.push(new qu(Qt.keyField(),r))}return e.Te}function zr(n){const e=Re(n);return e.Ie||(e.Ie=MD(e,Cu(n))),e.Ie}function MD(n,e){if(n.limitType==="F")return aE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new qu(s.field,a)}));const t=n.endAt?new fd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fd(n.startAt.position,n.startAt.inclusive):null;return aE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function jm(n,e){const t=n.filters.concat([e]);return new pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pd(n,e,t){return new pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hd(n,e){return bg(zr(n),zr(e))&&n.limitType===e.limitType}function kI(n){return`${kg(zr(n))}|lt:${n.limitType}`}function Va(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>RI(s))).join(", ")}]`),zd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>rl(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>rl(s))).join(",")),`Target(${r})`})(zr(n))}; limitType=${n.limitType})`}function Wd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ve.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of Cu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const g=sE(u,d,f);return u.inclusive?g<=0:g<0})(r.startAt,Cu(r),s)||r.endAt&&!(function(u,d,f){const g=sE(u,d,f);return u.inclusive?g>=0:g>0})(r.endAt,Cu(r),s))})(n,e)}function LD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bI(n){return(e,t)=>{let r=!1;for(const s of Cu(n)){const a=VD(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function VD(n,e,t){const r=n.field.isKeyField()?ve.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),g=d.data.field(a);return f!==null&&g!==null?nl(f,g):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return fI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=new ut(ve.comparator);function Ri(){return FD}const NI=new ut(ve.comparator);function Tu(...n){let e=NI;for(const t of n)e=e.insert(t.key,t);return e}function xI(n){let e=NI;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function mo(){return ku()}function OI(){return ku()}function ku(){return new Bo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const UD=new ut(ve.comparator),jD=new Dt(ve.comparator);function Oe(...n){let e=jD;for(const t of n)e=e.add(t);return e}const BD=new Dt(ke);function zD(){return BD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cd(e)?"-0":e}}function DI(n){return{integerValue:""+n}}function $D(n,e){return gD(e)?DI(e):Ng(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this._=void 0}}function qD(n,e,t){return n instanceof Hu?(function(s,a){const u={fields:{[gI]:{stringValue:mI},[vI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Pg(a)&&(a=$d(a)),a&&(u.fields[yI]=a),{mapValue:u}})(t,e):n instanceof Wu?LI(n,e):n instanceof Gu?VI(n,e):(function(s,a){const u=MI(s,a),d=uE(u)+uE(s.Ee);return Vm(u)&&Vm(s.Ee)?DI(d):Ng(s.serializer,d)})(n,e)}function HD(n,e,t){return n instanceof Wu?LI(n,e):n instanceof Gu?VI(n,e):t}function MI(n,e){return n instanceof md?(function(r){return Vm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Hu extends Gd{}class Wu extends Gd{constructor(e){super(),this.elements=e}}function LI(n,e){const t=FI(e);for(const r of n.elements)t.some((s=>Gr(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Gu extends Gd{constructor(e){super(),this.elements=e}}function VI(n,e){let t=FI(e);for(const r of n.elements)t=t.filter((s=>!Gr(s,r)));return{arrayValue:{values:t}}}class md extends Gd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function uE(n){return wt(n.integerValue||n.doubleValue)}function FI(n){return Cg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,t){this.field=e,this.transform=t}}function GD(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Wu&&s instanceof Wu||r instanceof Gu&&s instanceof Gu?tl(r.elements,s.elements,Gr):r instanceof md&&s instanceof md?Gr(r.Ee,s.Ee):r instanceof Hu&&s instanceof Hu})(n.transform,e.transform)}class KD{constructor(e,t){this.version=e,this.transformResults=t}}class $r{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $r}static exists(e){return new $r(void 0,e)}static updateTime(e){return new $r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kd{}function UI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new BI(n.key,$r.none()):new oc(n.key,n.data,$r.none());{const t=n.data,r=An.empty();let s=new Dt(Qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new Vs(n.key,r,new Mn(s.toArray()),$r.none())}}function QD(n,e,t){n instanceof oc?(function(s,a,u){const d=s.value.clone(),f=hE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Vs?(function(s,a,u){if(!Kh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=hE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(jI(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function bu(n,e,t,r){return n instanceof oc?(function(a,u,d,f){if(!Kh(a.precondition,u))return d;const g=a.value.clone(),v=dE(a.fieldTransforms,f,u);return g.setAll(v),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null})(n,e,t,r):n instanceof Vs?(function(a,u,d,f){if(!Kh(a.precondition,u))return d;const g=dE(a.fieldTransforms,f,u),v=u.data;return v.setAll(jI(a)),v.setAll(g),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return Kh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function YD(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=MI(r.transform,s||null);a!=null&&(t===null&&(t=An.empty()),t.set(r.field,a))}return t||null}function cE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&tl(r,s,((a,u)=>GD(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class oc extends Kd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vs extends Kd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function jI(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function hE(n,e,t){const r=new Map;qe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,HD(u,d,t[s]))}return r}function dE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,qD(a,u,e))}return r}class BI extends Kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XD extends Kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&QD(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=bu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=bu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=OI();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=UI(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Ae.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&tl(this.mutations,e.mutations,((t,r)=>cE(t,r)))&&tl(this.baseMutations,e.baseMutations,((t,r)=>cE(t,r)))}}class xg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){qe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return UD})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new xg(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St,Fe;function t2(n){switch(n){case Q.OK:return Te(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function zI(n){if(n===void 0)return Ai("GRPC error has no .code"),Q.UNKNOWN;switch(n){case St.OK:return Q.OK;case St.CANCELLED:return Q.CANCELLED;case St.UNKNOWN:return Q.UNKNOWN;case St.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case St.INTERNAL:return Q.INTERNAL;case St.UNAVAILABLE:return Q.UNAVAILABLE;case St.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case St.NOT_FOUND:return Q.NOT_FOUND;case St.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case St.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case St.ABORTED:return Q.ABORTED;case St.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case St.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case St.DATA_LOSS:return Q.DATA_LOSS;default:return Te(39323,{code:n})}}(Fe=St||(St={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=new Ts([4294967295,4294967295],0);function fE(n){const e=uI().encode(n),t=new tI;return t.update(e),new Uint8Array(t.digest())}function pE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ts([t,r],0),new Ts([s,a],0)]}class Og{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Iu(`Invalid padding: ${t}`);if(r<0)throw new Iu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Iu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Iu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ts.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ts.fromNumber(r)));return s.compare(n2)===1&&(s=new Ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=fE(e),[r,s]=pE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Og(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=fE(e),[r,s]=pE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ac.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Qd(Ae.min(),s,new ut(ke),Ri(),Oe())}}class ac{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ac(r,t,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class $I{constructor(e,t){this.targetId=e,this.De=t}}class qI{constructor(e,t,r=Yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class mE{constructor(){this.ve=0,this.Ce=gE(),this.Fe=Yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Oe(),t=Oe(),r=Oe();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Te(38017,{changeType:a})}})),new ac(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=gE()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class r2{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ri(),this.je=Mh(),this.Je=Mh(),this.He=new ut(ke)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Um(a))if(r===0){const u=new ve(a.path);this.Xe(t,u,on.newNoDocument(u,Ae.min()))}else qe(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Ps(r).toUint8Array()}catch(f){if(f instanceof pI)return Ss("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Og(u,s,a)}catch(f){return Ss(f instanceof Iu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Um(d.target)){const f=new ve(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,on.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Oe();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const g=this.st(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Qd(e,t,this.He,this.ze,r);return this.ze=Ri(),this.je=Mh(),this.Je=Mh(),this.He=new ut(ke),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new mE,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Dt(ke),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Dt(ke),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new mE),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Mh(){return new ut(ve.comparator)}function gE(){return new ut(ve.comparator)}const i2={asc:"ASCENDING",desc:"DESCENDING"},s2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},o2={and:"AND",or:"OR"};class a2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bm(n,e){return n.useProto3Json||zd(e)?e:{value:e}}function gd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function l2(n,e){return gd(n,e.toTimestamp())}function qr(n){return qe(!!n,49232),Ae.fromTimestamp((function(t){const r=Rs(t);return new it(r.seconds,r.nanos)})(n))}function Dg(n,e){return zm(n,e).canonicalString()}function zm(n,e){const t=(function(s){return new Ze(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function WI(n){const e=Ze.fromString(n);return qe(XI(e),10190,{key:e.toString()}),e}function $m(n,e){return Dg(n.databaseId,e.path)}function em(n,e){const t=WI(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(KI(t))}function GI(n,e){return Dg(n.databaseId,e)}function u2(n){const e=WI(n);return e.length===4?Ze.emptyPath():KI(e)}function qm(n){return new Ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function KI(n){return qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yE(n,e,t){return{name:$m(n,e),fields:t.value.mapValue.fields}}function c2(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(g,v){return g.useProto3Json?(qe(v===void 0||typeof v=="string",58123),Yt.fromBase64String(v||"")):(qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Yt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(g){const v=g.code===void 0?Q.UNKNOWN:zI(g.code);return new ae(v,g.message||"")})(u);t=new qI(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=em(n,r.document.name),a=qr(r.document.updateTime),u=r.document.createTime?qr(r.document.createTime):Ae.min(),d=new An({mapValue:{fields:r.document.fields}}),f=on.newFoundDocument(s,a,u,d),g=r.targetIds||[],v=r.removedTargetIds||[];t=new Qh(g,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=em(n,r.document),a=r.readTime?qr(r.readTime):Ae.min(),u=on.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Qh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=em(n,r.document),a=r.removedTargetIds||[];t=new Qh([],a,s,null)}else{if(!("filter"in e))return Te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new e2(s,a),d=r.targetId;t=new $I(d,u)}}return t}function h2(n,e){let t;if(e instanceof oc)t={update:yE(n,e.key,e.value)};else if(e instanceof BI)t={delete:$m(n,e.key)};else if(e instanceof Vs)t={update:yE(n,e.key,e.data),updateMask:w2(e.fieldMask)};else{if(!(e instanceof XD))return Te(16599,{Rt:e.type});t={verify:$m(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Hu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Wu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Gu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof md)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Te(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:l2(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Te(27497)})(n,e.precondition)),t}function d2(n,e){return n&&n.length>0?(qe(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?qr(s.updateTime):qr(a);return u.isEqual(Ae.min())&&(u=qr(a)),new KD(u,s.transformResults||[])})(t,e)))):[]}function f2(n,e){return{documents:[GI(n,e.path)]}}function p2(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=GI(n,s);const a=(function(g){if(g.length!==0)return YI(Er.create(g,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(g){if(g.length!==0)return g.map((v=>(function(T){return{field:Fa(T.field),direction:y2(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Bm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{Vt:t,parent:s}}function m2(n){let e=u2(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){qe(r===1,65062);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const T=QI(w);return T instanceof Er&&SI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((T=>(function(V){return new qu(Ua(V.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,zd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(w){const T=!!w.before,k=w.values||[];return new fd(k,T)})(t.startAt));let g=null;return t.endAt&&(g=(function(w){const T=!w.before,k=w.values||[];return new fd(k,T)})(t.endAt)),DD(e,s,u,a,d,"F",f,g)}function g2(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function QI(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ua(t.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ua(t.unaryFilter.field);return At.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ua(t.unaryFilter.field);return At.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ua(t.unaryFilter.field);return At.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return At.create(Ua(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Er.create(t.compositeFilter.filters.map((r=>QI(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function y2(n){return i2[n]}function v2(n){return s2[n]}function _2(n){return o2[n]}function Fa(n){return{fieldPath:n.canonicalString()}}function Ua(n){return Qt.fromServerFormat(n.fieldPath)}function YI(n){return n instanceof At?(function(t){if(t.op==="=="){if(iE(t.value))return{unaryFilter:{field:Fa(t.field),op:"IS_NAN"}};if(rE(t.value))return{unaryFilter:{field:Fa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(iE(t.value))return{unaryFilter:{field:Fa(t.field),op:"IS_NOT_NAN"}};if(rE(t.value))return{unaryFilter:{field:Fa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fa(t.field),op:v2(t.op),value:t.value}}})(n):n instanceof Er?(function(t){const r=t.getFilters().map((s=>YI(s)));return r.length===1?r[0]:{compositeFilter:{op:_2(t.op),filters:r}}})(n):Te(54877,{filter:n})}function w2(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function XI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,r,s,a=Ae.min(),u=Ae.min(),d=Yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new _s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.gt=e}}function T2(n){const e=m2({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.Dn=new S2}addToCollectionParentIndex(e,t){return this.Dn.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(As.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(As.min())}updateCollectionGroup(e,t,r){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class S2{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Dt(Ze.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Dt(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},JI=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(JI,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new il(0)}static ur(){return new il(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="LruGarbageCollector",A2=1048576;function wE([n,e],[t,r]){const s=ke(n,t);return s===0?ke(e,r):s}class R2{constructor(e){this.Tr=e,this.buffer=new Dt(wE),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();wE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class P2{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(_E,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fl(t)?ce(_E,"Ignoring IndexedDB error during garbage collection: ",t):await dl(t)}await this.Rr(3e5)}))}}class C2{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Y.resolve(Bd.ue);const r=new R2(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(vE)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vE):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(g=Date.now(),La()<=xe.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(g-f)+`ms
Total Duration: ${g-v}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w}))))}}function k2(n,e){return new C2(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.changes=new Bo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Y.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&bu(r.mutation,s,Mn.empty(),it.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Oe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Oe()){const s=mo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=Tu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=mo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Oe())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=Ri();const u=ku(),d=(function(){return ku()})();return t.forEach(((f,g)=>{const v=r.get(g.key);s.has(g.key)&&(v===void 0||v.mutation instanceof Vs)?a=a.insert(g.key,g):v!==void 0?(u.set(g.key,v.mutation.getFieldMask()),bu(v.mutation,g,v.mutation.getFieldMask(),it.now())):u.set(g.key,Mn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((g,v)=>u.set(g,v))),t.forEach(((g,v)=>{var w;return d.set(g,new N2(v,(w=u.get(g))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=ku();let s=new ut(((u,d)=>u-d)),a=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const g=t.get(f);if(g===null)return;let v=r.get(f)||Mn.empty();v=d.applyToLocalView(g,v),r.set(f,v);const w=(s.get(d.batchId)||Oe()).add(f);s=s.insert(d.batchId,w)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,v=f.value,w=OI();v.forEach((T=>{if(!a.has(T)){const k=UI(t.get(T),r.get(T));k!==null&&w.set(T,k),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,g,w))}return Y.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return ve.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):CI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Y.resolve(mo());let d=ju,f=a;return u.next((g=>Y.forEach(g,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?Y.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,g,a))).next((()=>this.computeViews(e,f,g,Oe()))).next((v=>({batchId:d,changes:xI(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next((r=>{let s=Tu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=Tu();return this.indexManager.getCollectionParents(e,a).next((d=>Y.forEach(d,(f=>{const g=(function(w,T){return new pl(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,r,s).next((v=>{v.forEach(((w,T)=>{u=u.insert(w,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,g)=>{const v=g.getKey();u.get(v)===null&&(u=u.insert(v,on.newInvalidDocument(v)))}));let d=Tu();return u.forEach(((f,g)=>{const v=a.get(f);v!==void 0&&bu(v.mutation,g,Mn.empty(),it.now()),Wd(t,g)&&(d=d.insert(f,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Y.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:qr(s.createTime)}})(t)),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:T2(s.bundledQuery),readTime:qr(s.readTime)}})(t)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.overlays=new ut(ve.comparator),this.kr=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mo();return Y.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Y.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Y.resolve()}getOverlaysForCollection(e,t,r){const s=mo(),a=t.length+1,u=new ve(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Y.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new ut(((g,v)=>g-v));const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let v=a.get(g.largestBatchId);v===null&&(v=mo(),a=a.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=mo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=s)););return Y.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new ZD(t,r));let a=this.kr.get(t);a===void 0&&(a=Oe(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.qr=new Dt(zt.Qr),this.$r=new Dt(zt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new zt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new zt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ve(new Ze([])),r=new zt(t,e),s=new zt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ve(new Ze([])),r=new zt(t,e),s=new zt(t,e+1);let a=Oe();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new zt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ve.comparator(e.key,t.key)||ke(e.Hr,t.Hr)}static Ur(e,t){return ke(e.Hr,t.Hr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Dt(zt.Qr)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new JD(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new zt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Y.resolve(u)}lookupMutationBatch(e,t){return Y.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Y.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Rg:this.er-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new zt(t,0),s=new zt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),Y.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Dt(ke);return t.forEach((s=>{const a=new zt(s,0),u=new zt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),Y.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;ve.isDocumentKey(a)||(a=a.child(""));const u=new zt(new ve(a),0);let d=new Dt(ke);return this.Yr.forEachWhile((f=>{const g=f.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(d=d.add(f.Hr)),!0)}),u),Y.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){qe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Y.forEach(t.mutations,(s=>{const a=new zt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new zt(t,0),s=this.Yr.firstAfterOrEqual(r);return Y.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.ni=e,this.docs=(function(){return new ut(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Y.resolve(r?r.document.mutableCopy():on.newInvalidDocument(t))}getEntries(e,t){let r=Ri();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():on.newInvalidDocument(s))})),Y.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Ri();const u=t.path,d=new ve(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:v}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||dD(hD(v),r)<=0||(s.has(v.key)||Wd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return Y.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Te(9500)}ri(e,t){return Y.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new F2(this)}getSize(e){return Y.resolve(this.size)}}class F2 extends b2{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Y.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.persistence=e,this.ii=new Bo((t=>kg(t)),bg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.si=0,this.oi=new Mg,this.targetCount=0,this._i=il.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Y.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new il(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.hr(t),Y.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),Y.waitFor(a).next((()=>s))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Y.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Y.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Y.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Y.resolve(r)}containsKey(e,t){return Y.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t){this.ai={},this.overlays={},this.ui=new Bd(0),this.ci=!1,this.ci=!0,this.li=new M2,this.referenceDelegate=e(this),this.hi=new U2(this),this.indexManager=new I2,this.remoteDocumentCache=(function(s){return new V2(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new E2(t),this.Ti=new O2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new D2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new L2(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ce("MemoryPersistence","Starting transaction:",e);const s=new j2(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Y.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class j2 extends pD{constructor(e){super(),this.currentSequenceNumber=e}}class Lg{constructor(e){this.persistence=e,this.Ai=new Mg,this.Ri=null}static Vi(e){return new Lg(e)}get mi(){if(this.Ri)return this.Ri;throw Te(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Y.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.mi,(r=>{const s=ve.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Ae.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Y.or([()=>Y.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class yd{constructor(e,t){this.persistence=e,this.gi=new Bo((r=>yD(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=k2(this,t)}static Vi(e,t){return new yd(e,t)}Ii(){}di(e){return Y.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Y.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Y.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Ae.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Y.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Y.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Y.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wh(e.data.value)),t}Sr(e,t,r){return Y.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Y.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Oe(),s=Oe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Vg(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Tb()?8:mD(ln())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new B2;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(La()<=xe.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Va(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Y.resolve()):(La()<=xe.DEBUG&&ce("QueryEngine","Query:",Va(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(La()<=xe.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Va(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zr(t))):Y.resolve())}ps(e,t){if(lE(t))return Y.resolve(null);let r=zr(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=pd(t,null,"F"),r=zr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Oe(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const g=this.bs(t,d);return this.Ds(t,g,u,f.readTime)?this.ps(e,pd(t,null,"F")):this.vs(e,g,t,f)}))))})))))}ys(e,t,r,s){return lE(t)||s.isEqual(Ae.min())?Y.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Y.resolve(null):(La()<=xe.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Va(t)),this.vs(e,u,t,cD(s,ju)).next((d=>d)))}))}bs(e,t){let r=new Dt(bI(e));return t.forEach(((s,a)=>{Wd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return La()<=xe.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Va(t)),this.gs.getDocumentsMatchingQuery(e,t,As.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="LocalStore",$2=3e8;class q2{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ut(ke),this.Ms=new Bo((a=>kg(a)),bg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function H2(n,e,t,r){return new q2(n,e,t,r)}async function eS(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Oe();for(const g of s){u.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}for(const g of a){d.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((g=>({Bs:g,removedBatchIds:u,addedBatchIds:d})))}))}))}function W2(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,g,v){const w=g.batch,T=w.keys();let k=Y.resolve();return T.forEach((V=>{k=k.next((()=>v.getEntry(f,V))).next((N=>{const C=g.docVersions.get(V);qe(C!==null,48541),N.version.compareTo(C)<0&&(w.applyToRemoteDocument(N,g),N.isValidDocument()&&(N.setReadTime(g.commitVersion),v.addEntry(N)))}))})),k.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Oe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function tS(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function G2(n,e){const t=Re(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((v,w)=>{const T=s.get(w);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,w))));let k=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?k=k.withResumeToken(Yt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(v.resumeToken,r)),s=s.insert(w,k),(function(N,C,H){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=$2?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(T,k,v)&&d.push(t.hi.updateTargetData(a,k))}));let f=Ri(),g=Oe();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(K2(a,u,e.documentUpdates).next((v=>{f=v.Ls,g=v.ks}))),!r.isEqual(Ae.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return Y.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,g))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function K2(n,e,t){let r=Oe(),s=Oe();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Ri();return t.forEach(((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Ae.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ce(Fg,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function Q2(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Rg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Y2(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Y.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new _s(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Hm(n,e,t){const r=Re(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!fl(u))throw u;ce(Fg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function EE(n,e,t){const r=Re(n);let s=Ae.min(),a=Oe();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,g,v){const w=Re(f),T=w.Ms.get(v);return T!==void 0?Y.resolve(w.Fs.get(T)):w.hi.getTargetData(g,v)})(r,u,zr(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Ae.min(),t?a:Oe()))).next((d=>(X2(r,LD(e),d),{documents:d,qs:a})))))}function X2(n,e,t){let r=n.xs.get(e)||Ae.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class TE{constructor(){this.activeTargetIds=zD()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class J2{constructor(){this.Fo=new TE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new TE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="ConnectivityMonitor";class SE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(IE,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(IE,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh=null;function Wm(){return Lh===null?Lh=(function(){return 268435456+Math.round(2147483648*Math.random())})():Lh++,"0x"+Lh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="RestConnection",eM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tM{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===hd?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Wm(),d=this.Go(e,t.toUriEncodedString());ce(tm,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:g}=new URL(d),v=Pi(g);return this.jo(e,d,f,r,v).then((w=>(ce(tm,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw Ss(tm,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+hl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=eM[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="WebChannelConnection";class rM extends tM{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Wm();return new Promise(((d,f)=>{const g=new nI;g.setWithCredentials(!0),g.listenOnce(rI.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Hh.NO_ERROR:const w=g.getResponseJson();ce(nn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case Hh.TIMEOUT:ce(nn,`RPC '${e}' ${u} timed out`),f(new ae(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Hh.HTTP_ERROR:const T=g.getStatus();if(ce(nn,`RPC '${e}' ${u} failed with status:`,T,"response text:",g.getResponseText()),T>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const V=k==null?void 0:k.error;if(V&&V.status&&V.message){const N=(function(H){const G=H.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(G)>=0?G:Q.UNKNOWN})(V.status);f(new ae(N,V.message))}else f(new ae(Q.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ae(Q.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{c_:e,streamId:u,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{ce(nn,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(s);ce(nn,`RPC '${e}' ${u} sending request:`,s),g.send(t,"POST",v,r,15)}))}P_(e,t,r){const s=Wm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=oI(),d=sI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ce(nn,`Creating RPC '${e}' stream ${s}: ${v}`,f);const w=u.createWebChannel(v,f);this.T_(w);let T=!1,k=!1;const V=new nM({Ho:C=>{k?ce(nn,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(T||(ce(nn,`Opening RPC '${e}' stream ${s} transport.`),w.open(),T=!0),ce(nn,`RPC '${e}' stream ${s} sending:`,C),w.send(C))},Yo:()=>w.close()}),N=(C,H,G)=>{C.listen(H,(q=>{try{G(q)}catch(J){setTimeout((()=>{throw J}),0)}}))};return N(w,Eu.EventType.OPEN,(()=>{k||(ce(nn,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),N(w,Eu.EventType.CLOSE,(()=>{k||(k=!0,ce(nn,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(w))})),N(w,Eu.EventType.ERROR,(C=>{k||(k=!0,Ss(nn,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),V.__(new ae(Q.UNAVAILABLE,"The operation could not be completed")))})),N(w,Eu.EventType.MESSAGE,(C=>{var H;if(!k){const G=C.data[0];qe(!!G,16349);const q=G,J=(q==null?void 0:q.error)||((H=q[0])===null||H===void 0?void 0:H.error);if(J){ce(nn,`RPC '${e}' stream ${s} received error:`,J);const ne=J.status;let he=(function(A){const b=St[A];if(b!==void 0)return zI(b)})(ne),O=J.message;he===void 0&&(he=Q.INTERNAL,O="Unknown error status: "+ne+" with message "+J.message),k=!0,V.__(new ae(he,O)),w.close()}else ce(nn,`RPC '${e}' stream ${s} received:`,G),V.a_(G)}})),N(d,iI.STAT_EVENT,(C=>{C.stat===Dm.PROXY?ce(nn,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Dm.NOPROXY&&ce(nn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function nm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n){return new a2(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="PersistentStream";class rS{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new nS(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Ai(t.toString()),Ai("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new ae(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(AE,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ce(AE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iM extends rS{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=c2(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Ae.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ae.min():u.readTime?qr(u.readTime):Ae.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=qm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Um(f)?{documents:f2(a,f)}:{query:p2(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=HI(a,u.resumeToken);const g=Bm(a,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(Ae.min())>0){d.readTime=gd(a,u.snapshotVersion.toTimestamp());const g=Bm(a,u.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const r=g2(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=qm(this.serializer),t.removeTarget=e,this.k_(t)}}class sM extends rS{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=d2(e.writeResults,e.commitTime),r=qr(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=qm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>h2(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{}class aM extends oM{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ae(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,zm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ae(Q.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,zm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(Q.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class lM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ai(t),this._a=!1):ce("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="RemoteStore";class uM{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{zo(this)&&(ce(No,"Restarting streams for network reachability change."),await(async function(f){const g=Re(f);g.Ia.add(4),await lc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Xd(g)})(this))}))})),this.Aa=new lM(r,s)}}async function Xd(n){if(zo(n))for(const e of n.da)await e(!0)}async function lc(n){for(const e of n.da)await e(!1)}function iS(n,e){const t=Re(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),zg(t)?Bg(t):ml(t).x_()&&jg(t,e))}function Ug(n,e){const t=Re(n),r=ml(t);t.Ta.delete(e),r.x_()&&sS(t,e),t.Ta.size===0&&(r.x_()?r.B_():zo(t)&&t.Aa.set("Unknown"))}function jg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ml(n).H_(e)}function sS(n,e){n.Ra.$e(e),ml(n).Y_(e)}function Bg(n){n.Ra=new r2({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ml(n).start(),n.Aa.aa()}function zg(n){return zo(n)&&!ml(n).M_()&&n.Ta.size>0}function zo(n){return Re(n).Ia.size===0}function oS(n){n.Ra=void 0}async function cM(n){n.Aa.set("Online")}async function hM(n){n.Ta.forEach(((e,t)=>{jg(n,e)}))}async function dM(n,e){oS(n),zg(n)?(n.Aa.la(e),Bg(n)):n.Aa.set("Unknown")}async function fM(n,e,t){if(n.Aa.set("Online"),e instanceof qI&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ce(No,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vd(n,r)}else if(e instanceof Qh?n.Ra.Ye(e):e instanceof $I?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ae.min()))try{const r=await tS(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(g);v&&a.Ta.set(g,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,g)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(Yt.EMPTY_BYTE_STRING,v.snapshotVersion)),sS(a,f);const w=new _s(v.target,f,g,v.sequenceNumber);jg(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ce(No,"Failed to raise snapshot:",r),await vd(n,r)}}async function vd(n,e,t){if(!fl(e))throw e;n.Ia.add(1),await lc(n),n.Aa.set("Offline"),t||(t=()=>tS(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(No,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Xd(n)}))}function aS(n,e){return e().catch((t=>vd(n,t,e)))}async function Jd(n){const e=Re(n),t=ks(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Rg;for(;pM(e);)try{const s=await Q2(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,mM(e,s)}catch(s){await vd(e,s)}lS(e)&&uS(e)}function pM(n){return zo(n)&&n.Pa.length<10}function mM(n,e){n.Pa.push(e);const t=ks(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function lS(n){return zo(n)&&!ks(n).M_()&&n.Pa.length>0}function uS(n){ks(n).start()}async function gM(n){ks(n).na()}async function yM(n){const e=ks(n);for(const t of n.Pa)e.X_(t.mutations)}async function vM(n,e,t){const r=n.Pa.shift(),s=xg.from(r,e,t);await aS(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Jd(n)}async function _M(n,e){e&&ks(n).Z_&&await(async function(r,s){if((function(u){return t2(u)&&u!==Q.ABORTED})(s.code)){const a=r.Pa.shift();ks(r).N_(),await aS(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Jd(r)}})(n,e),lS(n)&&uS(n)}async function RE(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ce(No,"RemoteStore received new credentials");const r=zo(t);t.Ia.add(3),await lc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Xd(t)}async function wM(n,e){const t=Re(n);e?(t.Ia.delete(2),await Xd(t)):e||(t.Ia.add(2),await lc(t),t.Aa.set("Unknown"))}function ml(n){return n.Va||(n.Va=(function(t,r,s){const a=Re(t);return a.ia(),new iM(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:cM.bind(null,n),e_:hM.bind(null,n),n_:dM.bind(null,n),J_:fM.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),zg(n)?Bg(n):n.Aa.set("Unknown")):(await n.Va.stop(),oS(n))}))),n.Va}function ks(n){return n.ma||(n.ma=(function(t,r,s){const a=Re(t);return a.ia(),new sM(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:gM.bind(null,n),n_:_M.bind(null,n),ea:yM.bind(null,n),ta:vM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Jd(n)):(await n.ma.stop(),n.Pa.length>0&&(ce(No,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new $g(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qg(n,e){if(Ai("AsyncQueue",`${e}: ${n}`),fl(n))return new ae(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{static emptySet(e){return new Wa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ve.comparator(t.key,r.key):(t,r)=>ve.comparator(t.key,r.key),this.keyedMap=Tu(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Wa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.fa=new ut(ve.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Te(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class sl{constructor(e,t,r,s,a,u,d,f,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new sl(e,t,Wa.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class TM{constructor(){this.queries=CE(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Re(t),a=s.queries;s.queries=CE(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new ae(Q.ABORTED,"Firestore shutting down"))}}function CE(){return new Bo((n=>kI(n)),Hd)}async function Hg(n,e){const t=Re(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new EM,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=qg(u,`Initialization of query '${Va(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Gg(t)}async function Wg(n,e){const t=Re(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function IM(n,e){const t=Re(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Gg(t)}function SM(n,e,t){const r=Re(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Gg(n){n.Da.forEach((e=>{e.next()}))}var Gm,kE;(kE=Gm||(Gm={})).Fa="default",kE.Cache="cache";class Kg{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new sl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=sl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Gm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.key=e}}class hS{constructor(e){this.key=e}}class AM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Oe(),this.mutatedKeys=Oe(),this.Xa=bI(e),this.eu=new Wa(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new PE,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((v,w)=>{const T=s.get(v),k=Wd(this.query,w)?w:null,V=!!T&&this.mutatedKeys.has(T.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let C=!1;T&&k?T.data.isEqual(k.data)?V!==N&&(r.track({type:3,doc:k}),C=!0):this.iu(T,k)||(r.track({type:2,doc:k}),C=!0,(f&&this.Xa(k,f)>0||g&&this.Xa(k,g)<0)&&(d=!0)):!T&&k?(r.track({type:0,doc:k}),C=!0):T&&!k&&(r.track({type:1,doc:T}),C=!0,(f||g)&&(d=!0)),C&&(k?(u=u.add(k),a=N?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,w)=>(function(k,V){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{At:C})}};return N(k)-N(V)})(v.type,w.type)||this.Xa(v.doc,w.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,g=f!==this.Ya;return this.Ya=f,u.length!==0||g?{snapshot:new sl(this.query,e.eu,a,u,e.mutatedKeys,f===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new PE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Oe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new hS(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new cS(r))})),t}uu(e){this.Ha=e.qs,this.Za=Oe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return sl.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Qg="SyncEngine";class RM{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class PM{constructor(e){this.key=e,this.lu=!1}}class CM{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Bo((d=>kI(d)),Hd),this.Tu=new Map,this.Iu=new Set,this.du=new ut(ve.comparator),this.Eu=new Map,this.Au=new Mg,this.Ru={},this.Vu=new Map,this.mu=il.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function kM(n,e,t=!0){const r=yS(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await dS(r,e,t,!0),s}async function bM(n,e){const t=yS(n);await dS(t,e,!0,!1)}async function dS(n,e,t,r){const s=await Y2(n.localStore,zr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await NM(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&iS(n.remoteStore,s),d}async function NM(n,e,t,r,s){n.gu=(w,T,k)=>(async function(N,C,H,G){let q=C.view.nu(H);q.Ds&&(q=await EE(N.localStore,C.query,!1).then((({documents:O})=>C.view.nu(O,q))));const J=G&&G.targetChanges.get(C.targetId),ne=G&&G.targetMismatches.get(C.targetId)!=null,he=C.view.applyChanges(q,N.isPrimaryClient,J,ne);return NE(N,C.targetId,he._u),he.snapshot})(n,w,T,k);const a=await EE(n.localStore,e,!0),u=new AM(e,a.qs),d=u.nu(a.documents),f=ac.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),g=u.applyChanges(d,n.isPrimaryClient,f);NE(n,t,g._u);const v=new RM(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),g.snapshot}async function xM(n,e,t){const r=Re(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!Hd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ug(r.remoteStore,s.targetId),Km(r,s.targetId)})).catch(dl)):(Km(r,s.targetId),await Hm(r.localStore,s.targetId,!0))}async function OM(n,e){const t=Re(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ug(t.remoteStore,r.targetId))}async function DM(n,e,t){const r=BM(n);try{const s=await(function(u,d){const f=Re(u),g=it.now(),v=d.reduce(((k,V)=>k.add(V.key)),Oe());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let V=Ri(),N=Oe();return f.Os.getEntries(k,v).next((C=>{V=C,V.forEach(((H,G)=>{G.isValidDocument()||(N=N.add(H))}))})).next((()=>f.localDocuments.getOverlayedDocuments(k,V))).next((C=>{w=C;const H=[];for(const G of d){const q=YD(G,w.get(G.key).overlayedDocument);q!=null&&H.push(new Vs(G.key,q,EI(q.value.mapValue),$r.exists(!0)))}return f.mutationQueue.addMutationBatch(k,g,H,d)})).next((C=>{T=C;const H=C.applyToLocalDocumentSet(w,N);return f.documentOverlayCache.saveOverlays(k,C.batchId,H)}))})).then((()=>({batchId:T.batchId,changes:xI(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let g=u.Ru[u.currentUser.toKey()];g||(g=new ut(ke)),g=g.insert(d,f),u.Ru[u.currentUser.toKey()]=g})(r,s.batchId,t),await uc(r,s.changes),await Jd(r.remoteStore)}catch(s){const a=qg(s,"Failed to persist write");t.reject(a)}}async function fS(n,e){const t=Re(n);try{const r=await G2(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?qe(u.lu,14607):s.removedDocuments.size>0&&(qe(u.lu,42227),u.lu=!1))})),await uc(t,r,e)}catch(r){await dl(r)}}function bE(n,e,t){const r=Re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=Re(u);f.onlineState=d;let g=!1;f.queries.forEach(((v,w)=>{for(const T of w.wa)T.va(d)&&(g=!0)})),g&&Gg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MM(n,e,t){const r=Re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new ut(ve.comparator);u=u.insert(a,on.newNoDocument(a,Ae.min()));const d=Oe().add(a),f=new Qd(Ae.min(),new Map,new ut(ke),u,d);await fS(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Yg(r)}else await Hm(r.localStore,e,!1).then((()=>Km(r,e,t))).catch(dl)}async function LM(n,e){const t=Re(n),r=e.batch.batchId;try{const s=await W2(t.localStore,e);mS(t,r,null),pS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await uc(t,s)}catch(s){await dl(s)}}async function VM(n,e,t){const r=Re(n);try{const s=await(function(u,d){const f=Re(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return f.mutationQueue.lookupMutationBatch(g,d).next((w=>(qe(w!==null,37113),v=w.keys(),f.mutationQueue.removeMutationBatch(g,w)))).next((()=>f.mutationQueue.performConsistencyCheck(g))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>f.localDocuments.getDocuments(g,v)))}))})(r.localStore,e);mS(r,e,t),pS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await uc(r,s)}catch(s){await dl(s)}}function pS(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function mS(n,e,t){const r=Re(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Km(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||gS(n,r)}))}function gS(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ug(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Yg(n))}function NE(n,e,t){for(const r of t)r instanceof cS?(n.Au.addReference(r.key,e),FM(n,r)):r instanceof hS?(ce(Qg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||gS(n,r.key)):Te(19791,{yu:r})}function FM(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ce(Qg,"New document in limbo: "+t),n.Iu.add(r),Yg(n))}function Yg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ve(Ze.fromString(e)),r=n.mu.next();n.Eu.set(r,new PM(t)),n.du=n.du.insert(t,r),iS(n.remoteStore,new _s(zr(qd(t.path)),r,"TargetPurposeLimboResolution",Bd.ue))}}async function uc(n,e,t){const r=Re(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((g=>{var v;if((g||t)&&r.isPrimaryClient){const w=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=Vg.Es(f.targetId,g);a.push(w)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,g){const v=Re(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>Y.forEach(g,(T=>Y.forEach(T.Is,(k=>v.persistence.referenceDelegate.addReference(w,T.targetId,k))).next((()=>Y.forEach(T.ds,(k=>v.persistence.referenceDelegate.removeReference(w,T.targetId,k)))))))))}catch(w){if(!fl(w))throw w;ce(Fg,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const k=v.Fs.get(T),V=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(V);v.Fs=v.Fs.insert(T,N)}}})(r.localStore,a))}async function UM(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ce(Qg,"User change. New user:",e.toKey());const r=await eS(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new ae(Q.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uc(t,r.Bs)}}function jM(n,e){const t=Re(n),r=t.Eu.get(e);if(r&&r.lu)return Oe().add(r.key);{let s=Oe();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function yS(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MM.bind(null,e),e.hu.J_=IM.bind(null,e.eventManager),e.hu.pu=SM.bind(null,e.eventManager),e}function BM(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VM.bind(null,e),e}class _d{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return H2(this.persistence,new z2,e.initialUser,this.serializer)}Du(e){return new ZI(Lg.Vi,this.serializer)}bu(e){return new J2}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_d.provider={build:()=>new _d};class zM extends _d{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){qe(this.persistence.referenceDelegate instanceof yd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new P2(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new ZI((r=>yd.Vi(r,t)),this.serializer)}}class Qm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UM.bind(null,this.syncEngine),await wM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new TM})()}createDatastore(e){const t=Yd(e.databaseInfo.databaseId),r=(function(a){return new rM(a)})(e.databaseInfo);return(function(a,u,d,f){return new aM(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new uM(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>bE(this.syncEngine,t,0)),(function(){return SE.C()?new SE:new Z2})())}createSyncEngine(e,t){return(function(s,a,u,d,f,g,v){const w=new CM(s,a,u,d,f,g);return v&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=Re(s);ce(No,"RemoteStore shutting down."),a.Ia.add(5),await lc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qm.provider={build:()=>new Qm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ai("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="FirestoreClient";class $M{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=sn.UNAUTHENTICATED,this.clientId=Ag.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ce(bs,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ce(bs,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function rm(n,e){n.asyncQueue.verifyOperationInProgress(),ce(bs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await eS(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ss("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ss("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function xE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qM(n);ce(bs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>RE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>RE(e.remoteStore,s))),n._onlineComponents=e}async function qM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(bs,"Using user provided OfflineComponentProvider");try{await rm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===Q.FAILED_PRECONDITION||s.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ss("Error using user provided cache. Falling back to memory cache: "+t),await rm(n,new _d)}}else ce(bs,"Using default OfflineComponentProvider"),await rm(n,new zM(void 0));return n._offlineComponents}async function vS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(bs,"Using user provided OnlineComponentProvider"),await xE(n,n._uninitializedComponentsProvider._online)):(ce(bs,"Using default OnlineComponentProvider"),await xE(n,new Qm))),n._onlineComponents}function HM(n){return vS(n).then((e=>e.syncEngine))}async function wd(n){const e=await vS(n),t=e.eventManager;return t.onListen=kM.bind(null,e.syncEngine),t.onUnlisten=xM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OM.bind(null,e.syncEngine),t}function WM(n,e,t={}){const r=new Ei;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,g){const v=new Xg({next:T=>{v.Ou(),u.enqueueAndForget((()=>Wg(a,w)));const k=T.docs.has(d);!k&&T.fromCache?g.reject(new ae(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&T.fromCache&&f&&f.source==="server"?g.reject(new ae(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new Kg(qd(d.path),v,{includeMetadataChanges:!0,ka:!0});return Hg(a,w)})(await wd(n),n.asyncQueue,e,t,r))),r.promise}function GM(n,e,t={}){const r=new Ei;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,g){const v=new Xg({next:T=>{v.Ou(),u.enqueueAndForget((()=>Wg(a,w))),T.fromCache&&f.source==="server"?g.reject(new ae(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new Kg(d,v,{includeMetadataChanges:!0,ka:!0});return Hg(a,w)})(await wd(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="firestore.googleapis.com",DE=!0;class ME{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wS,this.ssl=DE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:DE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=JI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<A2)throw new ae(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_S((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ae(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ae(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ae(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ME({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ME(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new eD;switch(r.type){case"firstParty":return new iD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=OE.get(t);r&&(ce("ComponentProvider","Removing Datastore"),OE.delete(t),r.terminate())})(this),Promise.resolve()}}function KM(n,e,t,r={}){var s;n=Jn(n,Zd);const a=Pi(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(Od(`https://${f}`),Dd("Firestore",!0)),u.host!==wS&&u.host!==f&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Po(g,d)&&(n._setSettings(g),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=sn.MOCK_USER;else{v=mT(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ae(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new sn(T)}n._authCredentials=new tD(new lI(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class pt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(sc(t,pt._jsonSchema))return new pt(e,r||null,new ve(Ze.fromString(t.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:Rt("string",pt._jsonSchemaVersion),referencePath:Rt("string")};class Is extends Ci{constructor(e,t,r){super(e,t,qd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new ve(e))}withConverter(e){return new Is(this.firestore,e,this._path)}}function im(n,e,...t){if(n=et(n),cI("collection","path",e),n instanceof Zd){const r=Ze.fromString(e,...t);return Kw(r),new Is(n,null,r)}{if(!(n instanceof pt||n instanceof Is))throw new ae(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ze.fromString(e,...t));return Kw(r),new Is(n.firestore,null,r)}}function gu(n,e,...t){if(n=et(n),arguments.length===1&&(e=Ag.newId()),cI("doc","path",e),n instanceof Zd){const r=Ze.fromString(e,...t);return Gw(r),new pt(n,null,new ve(r))}{if(!(n instanceof pt||n instanceof Is))throw new ae(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ze.fromString(e,...t));return Gw(r),new pt(n.firestore,n instanceof Is?n.converter:null,new ve(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="AsyncQueue";class VE{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new nS(this,"async_queue_retry"),this.oc=()=>{const r=nm();r&&ce(LE,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=nm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=nm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ei;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!fl(e))throw e;ce(LE,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ai("INTERNAL UNHANDLED ERROR: ",FE(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=$g.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Te(47125,{hc:FE(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function FE(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class xo extends Zd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new VE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new VE(e),this._firestoreClient=void 0,await e}}}function QM(n,e){const t=typeof n=="object"?n:Ld(),r=typeof n=="string"?n:hd,s=Fo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=dg("firestore");a&&KM(s,...a)}return s}function ef(n){if(n._terminated)throw new ae(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||YM(n),n._firestoreClient}function YM(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,g,v){return new wD(d,f,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,_S(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $M(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(Yt.fromBase64String(e))}catch(t){throw new ae(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(sc(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:Rt("string",Xn._jsonSchemaVersion),bytes:Rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Hr._jsonSchemaVersion}}static fromJSON(e){if(sc(e,Hr._jsonSchema))return new Hr(e.latitude,e.longitude)}}Hr._jsonSchemaVersion="firestore/geoPoint/1.0",Hr._jsonSchema={type:Rt("string",Hr._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(sc(e,Wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wr(e.vectorValues);throw new ae(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wr._jsonSchemaVersion="firestore/vectorValue/1.0",Wr._jsonSchema={type:Rt("string",Wr._jsonSchemaVersion),vectorValues:Rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=/^__.*__$/;class JM{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vs(e,this.data,this.fieldMask,t,this.fieldTransforms):new oc(e,this.data,t,this.fieldTransforms)}}class ES{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Vs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function TS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ec:n})}}class Jg{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Jg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ed(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(TS(this.Ec)&&XM.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ZM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Yd(e)}Dc(e,t,r,s=!1){return new Jg({Ec:e,methodName:t,bc:r,path:Qt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zg(n){const e=n._freezeSettings(),t=Yd(n._databaseId);return new ZM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function eL(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);ty("Data must be an object, but it was:",u,r);const d=IS(r,u);let f,g;if(a.merge)f=new Mn(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const T=Ym(e,w,t);if(!u.contains(T))throw new ae(Q.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);AS(v,T)||v.push(T)}f=new Mn(v),g=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,g=u.fieldTransforms;return new JM(new An(d),f,g)}class rf extends nf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rf}}class ey extends nf{_toFieldTransform(e){return new WD(e.path,new Hu)}isEqual(e){return e instanceof ey}}function tL(n,e,t,r){const s=n.Dc(1,e,t);ty("Data must be an object, but it was:",s,r);const a=[],u=An.empty();Ls(r,((f,g)=>{const v=ny(e,f,t);g=et(g);const w=s.gc(v);if(g instanceof rf)a.push(v);else{const T=cc(g,w);T!=null&&(a.push(v),u.set(v,T))}}));const d=new Mn(a);return new ES(u,d,s.fieldTransforms)}function nL(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[Ym(e,r,t)],f=[s];if(a.length%2!=0)throw new ae(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Ym(e,a[T])),f.push(a[T+1]);const g=[],v=An.empty();for(let T=d.length-1;T>=0;--T)if(!AS(g,d[T])){const k=d[T];let V=f[T];V=et(V);const N=u.gc(k);if(V instanceof rf)g.push(k);else{const C=cc(V,N);C!=null&&(g.push(k),v.set(k,C))}}const w=new Mn(g);return new ES(v,w,u.fieldTransforms)}function rL(n,e,t,r=!1){return cc(t,n.Dc(r?4:3,e))}function cc(n,e){if(SS(n=et(n)))return ty("Unsupported field value:",e,n),IS(n,e);if(n instanceof nf)return(function(r,s){if(!TS(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=cc(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $D(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=it.fromDate(r);return{timestampValue:gd(s.serializer,a)}}if(r instanceof it){const a=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gd(s.serializer,a)}}if(r instanceof Hr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xn)return{bytesValue:HI(s.serializer,r._byteString)};if(r instanceof pt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Dg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wr)return(function(u,d){return{mapValue:{fields:{[_I]:{stringValue:wI},[dd]:{arrayValue:{values:u.toArray().map((g=>{if(typeof g!="number")throw d.wc("VectorValues must only contain numeric values.");return Ng(d.serializer,g)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${jd(r)}`)})(n,e)}function IS(n,e){const t={};return fI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(n,((r,s)=>{const a=cc(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function SS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof Hr||n instanceof Xn||n instanceof pt||n instanceof nf||n instanceof Wr)}function ty(n,e,t){if(!SS(t)||!hI(t)){const r=jd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Ym(n,e,t){if((e=et(e))instanceof tf)return e._internalPath;if(typeof e=="string")return ny(n,e);throw Ed("Field path arguments must be of type string or ",n,!1,void 0,t)}const iL=new RegExp("[~\\*/\\[\\]]");function ny(n,e,t){if(e.search(iL)>=0)throw Ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new tf(...e.split("."))._internalPath}catch{throw Ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ed(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new ae(Q.INVALID_ARGUMENT,d+n+f)}function AS(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sL extends RS{data(){return super.data()}}function sf(n,e){return typeof e=="string"?ny(n,e):e instanceof tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ry{}class iy extends ry{}function sm(n,e,...t){let r=[];e instanceof ry&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof sy)).length,d=a.filter((f=>f instanceof of)).length;if(u>1||u>0&&d>0)throw new ae(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class of extends iy{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new of(e,t,r)}_apply(e){const t=this._parse(e);return CS(e._query,t),new Ci(e.firestore,e.converter,jm(e._query,t))}_parse(e){const t=Zg(e.firestore);return(function(a,u,d,f,g,v,w){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ae(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){BE(w,v);const V=[];for(const N of w)V.push(jE(f,a,N));T={arrayValue:{values:V}}}else T=jE(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||BE(w,v),T=rL(d,u,w,v==="in"||v==="not-in");return At.create(g,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function om(n,e,t){const r=e,s=sf("where",n);return of._create(s,r,t)}class sy extends ry{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sy(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Er.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)CS(u,f),u=jm(u,f)})(e._query,t),new Ci(e.firestore,e.converter,jm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oy extends iy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new oy(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new ae(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ae(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qu(a,u)})(e._query,this._field,this._direction);return new Ci(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new pl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function eU(n,e="asc"){const t=e,r=sf("orderBy",n);return oy._create(r,t)}class ay extends iy{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ay(e,t,r)}_apply(e){return new Ci(e.firestore,e.converter,pd(e._query,this._limit,this._limitType))}}function tU(n){return ay._create("limit",n,"F")}function jE(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ae(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CI(e)&&t.indexOf("/")!==-1)throw new ae(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ze.fromString(t));if(!ve.isDocumentKey(r))throw new ae(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nE(n,new ve(r))}if(t instanceof pt)return nE(n,t._key);throw new ae(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jd(t)}.`)}function BE(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CS(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oL{convertValue(e,t="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ls(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[dd].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>wt(u.doubleValue)));return new Wr(a)}convertGeoPoint(e){return new Hr(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$d(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bu(e));default:return null}}convertTimestamp(e){const t=Rs(e);return new it(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ze.fromString(e);qe(XI(r),9688,{name:e});const s=new zu(r.get(1),r.get(3)),a=new ve(r.popFirst(5));return s.isEqual(t)||Ai(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Su{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class So extends RS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(sf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=So._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}So._jsonSchemaVersion="firestore/documentSnapshot/1.0",So._jsonSchema={type:Rt("string",So._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class Yh extends So{data(e={}){return super.data(e)}}class Ao{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Su(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Yh(this._firestore,this._userDataWriter,r.key,r,new Su(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Yh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Su(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Yh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Su(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,v=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:lL(d.type),doc:f,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ag.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){n=Jn(n,pt);const e=Jn(n.firestore,xo);return WM(ef(e),n._key).then((t=>bS(e,n,t)))}Ao._jsonSchemaVersion="firestore/querySnapshot/1.0",Ao._jsonSchema={type:Rt("string",Ao._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class ly extends oL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function am(n){n=Jn(n,Ci);const e=Jn(n.firestore,xo),t=ef(e),r=new ly(e);return PS(n._query),GM(t,n._query).then((s=>new Ao(e,r,n,s)))}function $E(n,e,t){n=Jn(n,pt);const r=Jn(n.firestore,xo),s=aL(n.converter,e);return kS(r,[eL(Zg(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,$r.none())])}function qE(n,e,t,...r){n=Jn(n,pt);const s=Jn(n.firestore,xo),a=Zg(s);let u;return u=typeof(e=et(e))=="string"||e instanceof tf?nL(a,"updateDoc",n._key,e,t,r):tL(a,"updateDoc",n._key,e),kS(s,[u.toMutation(n._key,$r.exists(!0))])}function uL(n,...e){var t,r,s;n=et(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||UE(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(UE(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,g,v;if(n instanceof pt)g=Jn(n.firestore,xo),v=qd(n._key.path),f={next:w=>{e[u]&&e[u](bS(g,n,w))},error:e[u+1],complete:e[u+2]};else{const w=Jn(n,Ci);g=Jn(w.firestore,xo),v=w._query;const T=new ly(g);f={next:k=>{e[u]&&e[u](new Ao(g,T,w,k))},error:e[u+1],complete:e[u+2]},PS(n._query)}return(function(T,k,V,N){const C=new Xg(N),H=new Kg(k,C,V);return T.asyncQueue.enqueueAndForget((async()=>Hg(await wd(T),H))),()=>{C.Ou(),T.asyncQueue.enqueueAndForget((async()=>Wg(await wd(T),H)))}})(ef(g),v,d,f)}function kS(n,e){return(function(r,s){const a=new Ei;return r.asyncQueue.enqueueAndForget((async()=>DM(await HM(r),s,a))),a.promise})(ef(n),e)}function bS(n,e,t){const r=t.docs.get(e._key),s=new ly(n);return new So(n,s,e._key,r,new Su(t.hasPendingWrites,t.fromCache),e.converter)}function yu(){return new ey("serverTimestamp")}(function(e,t=!0){(function(s){hl=s})(Uo),Zn(new Un("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new xo(new nD(r.getProvider("auth-internal")),new sD(u,r.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ae(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zu(g.options.projectId,v)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),an(zw,$w,e),an(zw,$w,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL="type.googleapis.com/google.protobuf.Int64Value",hL="type.googleapis.com/google.protobuf.UInt64Value";function NS(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function Td(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Td(e));if(typeof n=="function"||typeof n=="object")return NS(n,e=>Td(e));throw new Error("Data cannot be encoded in JSON: "+n)}function ol(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case cL:case hL:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>ol(e)):typeof n=="function"||typeof n=="object"?NS(n,e=>ol(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Rn extends er{constructor(e,t,r){super(`${uy}/${e}`,t||""),this.details=r,Object.setPrototypeOf(this,Rn.prototype)}}function dL(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Id(n,e){let t=dL(n),r=t,s;try{const a=e&&e.error;if(a){const u=a.status;if(typeof u=="string"){if(!HE[u])return new Rn("internal","internal");t=HE[u],r=u}const d=a.message;typeof d=="string"&&(r=d),s=a.details,s!==void 0&&(s=ol(s))}}catch{}return t==="ok"?null:new Rn(t,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,t,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||r.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s==null||s.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="us-central1",pL=/^data: (.*?)(?:\n|$)/;function mL(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new Rn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class gL{constructor(e,t,r,s,a=Xm,u=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=u,this.emulatorOrigin=null,this.contextProvider=new fL(e,t,r,s),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(a);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=Xm}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function yL(n,e,t){const r=Pi(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&(Od(n.emulatorOrigin),Dd("Functions",!0))}function vL(n,e,t){const r=s=>wL(n,e,s,{});return r.stream=(s,a)=>TL(n,e,s,a),r}async function _L(n,e,t,r){t["Content-Type"]="application/json";let s;try{s=await r(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}async function xS(n,e){const t={},r=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(t.Authorization="Bearer "+r.authToken),r.messagingToken&&(t["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=r.appCheckToken),t}function wL(n,e,t,r){const s=n._url(e);return EL(n,s,t,r)}async function EL(n,e,t,r){t=Td(t);const s={data:t},a=await xS(n,r),u=r.timeout||7e4,d=mL(u),f=await Promise.race([_L(e,s,a,n.fetchImpl),d.promise,n.cancelAllRequests]);if(d.cancel(),!f)throw new Rn("cancelled","Firebase Functions instance was deleted.");const g=Id(f.status,f.json);if(g)throw g;if(!f.json)throw new Rn("internal","Response is not valid JSON object.");let v=f.json.data;if(typeof v>"u"&&(v=f.json.result),typeof v>"u")throw new Rn("internal","Response is missing data field.");return{data:ol(v)}}function TL(n,e,t,r){const s=n._url(e);return IL(n,s,t,r||{})}async function IL(n,e,t,r){var s;t=Td(t);const a={data:t},u=await xS(n,r);u["Content-Type"]="application/json",u.Accept="text/event-stream";let d;try{d=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(a),headers:u,signal:r==null?void 0:r.signal})}catch(k){if(k instanceof Error&&k.name==="AbortError"){const N=new Rn("cancelled","Request was cancelled.");return{data:Promise.reject(N),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(N)}}}}}}const V=Id(0,null);return{data:Promise.reject(V),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(V)}}}}}}let f,g;const v=new Promise((k,V)=>{f=k,g=V});(s=r==null?void 0:r.signal)===null||s===void 0||s.addEventListener("abort",()=>{const k=new Rn("cancelled","Request was cancelled.");g(k)});const w=d.body.getReader(),T=SL(w,f,g,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const k=T.getReader();return{async next(){const{value:V,done:N}=await k.read();return{value:V,done:N}},async return(){return await k.cancel(),{done:!0,value:void 0}}}}},data:v}}function SL(n,e,t,r){const s=(u,d)=>{const f=u.match(pL);if(!f)return;const g=f[1];try{const v=JSON.parse(g);if("result"in v){e(ol(v.result));return}if("message"in v){d.enqueue(ol(v.message));return}if("error"in v){const w=Id(0,v);d.error(w),t(w);return}}catch(v){if(v instanceof Rn){d.error(v),t(v);return}}},a=new TextDecoder;return new ReadableStream({start(u){let d="";return f();async function f(){if(r!=null&&r.aborted){const g=new Rn("cancelled","Request was cancelled");return u.error(g),t(g),Promise.resolve()}try{const{value:g,done:v}=await n.read();if(v){d.trim()&&s(d.trim(),u),u.close();return}if(r!=null&&r.aborted){const T=new Rn("cancelled","Request was cancelled");u.error(T),t(T),await n.cancel();return}d+=a.decode(g,{stream:!0});const w=d.split(`
`);d=w.pop()||"";for(const T of w)T.trim()&&s(T.trim(),u);return f()}catch(g){const v=g instanceof Rn?g:Id(0,null);u.error(v),t(v)}}},cancel(){return n.cancel()}})}const WE="@firebase/functions",GE="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL="auth-internal",RL="app-check-internal",PL="messaging-internal";function CL(n){const e=(t,{instanceIdentifier:r})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider(AL),u=t.getProvider(PL),d=t.getProvider(RL);return new gL(s,a,u,d,r)};Zn(new Un(uy,e,"PUBLIC").setMultipleInstances(!0)),an(WE,GE,n),an(WE,GE,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(n=Ld(),e=Xm){const r=Fo(et(n),uy).getImmediate({identifier:e}),s=dg("functions");return s&&bL(r,...s),r}function bL(n,e,t){yL(et(n),e,t)}function nU(n,e,t){return vL(et(n),e)}CL();var NL="firebase",xL="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(NL,xL,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="firebasestorage.googleapis.com",DS="storageBucket",OL=120*1e3,DL=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends er{constructor(e,t,r=0){super(lm(e),`Firebase Storage: ${t} (${lm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mt||(mt={}));function lm(n){return"storage/"+n}function cy(){const n="An unknown error occurred, please check the error payload for server response.";return new gt(mt.UNKNOWN,n)}function ML(n){return new gt(mt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function LL(n){return new gt(mt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function VL(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new gt(mt.UNAUTHENTICATED,n)}function FL(){return new gt(mt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function UL(n){return new gt(mt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jL(){return new gt(mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BL(){return new gt(mt.CANCELED,"User canceled the upload/download.")}function zL(n){return new gt(mt.INVALID_URL,"Invalid URL '"+n+"'.")}function $L(n){return new gt(mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qL(){return new gt(mt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+DS+"' property when initializing the app?")}function HL(){return new gt(mt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function WL(){return new gt(mt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function GL(n){return new gt(mt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jm(n){return new gt(mt.INVALID_ARGUMENT,n)}function MS(){return new gt(mt.APP_DELETED,"The Firebase app was deleted.")}function KL(n){return new gt(mt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Nu(n,e){return new gt(mt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function vu(n){throw new gt(mt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ln.makeFromUrl(e,t)}catch{return new Ln(e,"")}if(r.path==="")return r;throw $L(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(J){J.path.charAt(J.path.length-1)==="/"&&(J.path_=J.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function g(J){J.path_=decodeURIComponent(J.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",k=new RegExp(`^https?://${w}/${v}/b/${s}/o${T}`,"i"),V={bucket:1,path:3},N=t===OS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",H=new RegExp(`^https?://${N}/${s}/${C}`,"i"),q=[{regex:d,indices:f,postModify:a},{regex:k,indices:V,postModify:g},{regex:H,indices:{bucket:1,path:2},postModify:g}];for(let J=0;J<q.length;J++){const ne=q[J],he=ne.regex.exec(e);if(he){const O=he[ne.indices.bucket];let S=he[ne.indices.path];S||(S=""),r=new Ln(O,S),ne.postModify(r);break}}if(r==null)throw zL(e);return r}}class QL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let g=!1;function v(...C){g||(g=!0,e.apply(null,C))}function w(C){s=setTimeout(()=>{s=null,n(k,f())},C)}function T(){a&&clearTimeout(a)}function k(C,...H){if(g){T();return}if(C){T(),v.call(null,C,...H);return}if(f()||u){T(),v.call(null,C,...H);return}r<64&&(r*=2);let q;d===1?(d=2,q=0):q=(r+Math.random())*1e3,w(q)}let V=!1;function N(C){V||(V=!0,T(),!g&&(s!==null?(C||(d=2),clearTimeout(s),w(0)):C||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,N(!0)},t),N}function XL(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(n){return n!==void 0}function ZL(n){return typeof n=="object"&&!Array.isArray(n)}function hy(n){return typeof n=="string"||n instanceof String}function KE(n){return dy()&&n instanceof Blob}function dy(){return typeof Blob<"u"}function QE(n,e,t,r){if(r<e)throw Jm(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Jm(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function LS(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ro;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ro||(Ro={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t,r,s,a,u,d,f,g,v,w,T=!0,k=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=g,this.progressCallback_=v,this.connectionFactory_=w,this.retry=T,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((V,N)=>{this.resolve_=V,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Vh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,g)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Ro.NO_ERROR,f=a.getStatus();if(!d||eV(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Ro.ABORT;r(!1,new Vh(!1,null,v));return}const g=this.successCodes_.indexOf(f)!==-1;r(!0,new Vh(g,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());JL(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=cy();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?MS():BL();u(f)}else{const f=jL();u(f)}};this.canceled_?t(!1,new Vh(!1,null,!0)):this.backoffId_=YL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function nV(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function rV(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iV(n,e){e&&(n["X-Firebase-GMPID"]=e)}function sV(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function oV(n,e,t,r,s,a,u=!0,d=!1){const f=LS(n.urlParams),g=n.url+f,v=Object.assign({},n.headers);return iV(v,e),nV(v,t),rV(v,a),sV(v,r),new tV(g,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lV(...n){const e=aV();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(dy())return new Blob(n);throw new gt(mt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uV(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(n){if(typeof atob>"u")throw GL("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class um{constructor(e,t){this.data=e,this.contentType=t||null}}function hV(n,e){switch(n){case Ur.RAW:return new um(VS(e));case Ur.BASE64:case Ur.BASE64URL:return new um(FS(n,e));case Ur.DATA_URL:return new um(fV(e),pV(e))}throw cy()}function VS(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function dV(n){let e;try{e=decodeURIComponent(n)}catch{throw Nu(Ur.DATA_URL,"Malformed data URL.")}return VS(e)}function FS(n,e){switch(n){case Ur.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Nu(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ur.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Nu(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=cV(e)}catch(s){throw s.message.includes("polyfill")?s:Nu(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class US{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Nu(Ur.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=mV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function fV(n){const e=new US(n);return e.base64?FS(Ur.BASE64,e.rest):dV(e.rest)}function pV(n){return new US(n).contentType}function mV(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){let r=0,s="";KE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(KE(this.data_)){const r=this.data_,s=uV(r,e,t);return s===null?null:new hs(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new hs(r,!0)}}static getBlob(...e){if(dy()){const t=e.map(r=>r instanceof hs?r.data_:r);return new hs(lV.apply(null,t))}else{const t=e.map(u=>hy(u)?hV(Ur.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new hs(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(n){let e;try{e=JSON.parse(n)}catch{return null}return ZL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gV(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function yV(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function BS(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(n,e){return e}class fn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||vV}}let Fh=null;function _V(n){return!hy(n)||n.length<2?n:BS(n)}function zS(){if(Fh)return Fh;const n=[];n.push(new fn("bucket")),n.push(new fn("generation")),n.push(new fn("metageneration")),n.push(new fn("name","fullPath",!0));function e(a,u){return _V(u)}const t=new fn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new fn("size");return s.xform=r,n.push(s),n.push(new fn("timeCreated")),n.push(new fn("updated")),n.push(new fn("md5Hash",null,!0)),n.push(new fn("cacheControl",null,!0)),n.push(new fn("contentDisposition",null,!0)),n.push(new fn("contentEncoding",null,!0)),n.push(new fn("contentLanguage",null,!0)),n.push(new fn("contentType",null,!0)),n.push(new fn("metadata","customMetadata",!0)),Fh=n,Fh}function wV(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new Ln(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function EV(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return wV(r,n),r}function $S(n,e,t){const r=jS(e);return r===null?null:EV(n,r,t)}function TV(n,e,t,r){const s=jS(e);if(s===null||!hy(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(g=>{const v=n.bucket,w=n.fullPath,T="/b/"+u(v)+"/o/"+u(w),k=fy(T,t,r),V=LS({alt:"media",token:g});return k+V})[0]}function IV(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class qS{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(n){if(!n)throw cy()}function SV(n,e){function t(r,s){const a=$S(n,s,e);return HS(a!==null),a}return t}function AV(n,e){function t(r,s){const a=$S(n,s,e);return HS(a!==null),TV(a,s,n.host,n._protocol)}return t}function WS(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=FL():s=VL():t.getStatus()===402?s=LL(n.bucket):t.getStatus()===403?s=UL(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function RV(n){const e=WS(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=ML(n.path)),a.serverResponse=s.serverResponse,a}return t}function PV(n,e,t){const r=e.fullServerUrl(),s=fy(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new qS(s,a,AV(n,t),u);return d.errorHandler=RV(e),d}function CV(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function kV(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=CV(null,e)),r}function bV(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let q="";for(let J=0;J<2;J++)q=q+Math.random().toString().slice(2);return q}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const g=kV(e,r,s),v=IV(g,t),w="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+g.contentType+`\r
\r
`,T=`\r
--`+f+"--",k=hs.getBlob(w,r,T);if(k===null)throw HL();const V={name:g.fullPath},N=fy(a,n.host,n._protocol),C="POST",H=n.maxUploadRetryTime,G=new qS(N,C,SV(n,t),H);return G.urlParams=V,G.headers=u,G.body=k.uploadData(),G.errorHandler=WS(e),G}class NV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ro.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ro.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ro.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw vu("cannot .send() more than once");if(Pi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xV extends NV{initXhr(){this.xhr_.responseType="text"}}function GS(){return new xV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this._service=e,t instanceof Ln?this._location=t:this._location=Ln.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Oo(e,t)}get root(){const e=new Ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BS(this._location.path)}get storage(){return this._service}get parent(){const e=gV(this._location.path);if(e===null)return null;const t=new Ln(this._location.bucket,e);return new Oo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw KL(e)}}function OV(n,e,t){n._throwIfRoot("uploadBytes");const r=bV(n.storage,n._location,zS(),new hs(e,!0),t);return n.storage.makeRequestWithTokens(r,GS).then(s=>({metadata:s,ref:n}))}function DV(n){n._throwIfRoot("getDownloadURL");const e=PV(n.storage,n._location,zS());return n.storage.makeRequestWithTokens(e,GS).then(t=>{if(t===null)throw WL();return t})}function MV(n,e){const t=yV(n._location.path,e),r=new Ln(n._location.bucket,t);return new Oo(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(n){return/^[A-Za-z]+:\/\//.test(n)}function VV(n,e){return new Oo(n,e)}function KS(n,e){if(n instanceof py){const t=n;if(t._bucket==null)throw qL();const r=new Oo(t,t._bucket);return e!=null?KS(r,e):r}else return e!==void 0?MV(n,e):n}function FV(n,e){if(e&&LV(e)){if(n instanceof py)return VV(n,e);throw Jm("To use ref(service, url), the first argument must be a Storage instance.")}else return KS(n,e)}function YE(n,e){const t=e==null?void 0:e[DS];return t==null?null:Ln.makeFromBucketSpec(t,n)}function UV(n,e,t,r={}){n.host=`${e}:${t}`;const s=Pi(e);s&&(Od(`https://${n.host}/b`),Dd("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:mT(a,n.app.options.projectId))}class py{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=OS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OL,this._maxUploadRetryTime=DL,this._requests=new Set,s!=null?this._bucket=Ln.makeFromBucketSpec(s,this._host):this._bucket=YE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ln.makeFromBucketSpec(this._url,e):this._bucket=YE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){QE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){QE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oo(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new QL(MS());{const u=oV(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const XE="@firebase/storage",JE="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="storage";function rU(n,e,t){return n=et(n),OV(n,e,t)}function iU(n){return n=et(n),DV(n)}function sU(n,e){return n=et(n),FV(n,e)}function jV(n=Ld(),e){n=et(n);const r=Fo(n,QS).getImmediate({identifier:e}),s=dg("storage");return s&&BV(r,...s),r}function BV(n,e,t,r={}){UV(n,e,t,r)}function zV(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new py(t,r,s,e,Uo)}function $V(){Zn(new Un(QS,zV,"PUBLIC").setMultipleInstances(!0)),an(XE,JE,""),an(XE,JE,"esm2017")}$V();const YS="@firebase/installations",my="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=1e4,JS=`w:${my}`,ZS="FIS_v2",qV="https://firebaseinstallations.googleapis.com/v1",HV=3600*1e3,WV="installations",GV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Do=new Vo(WV,GV,KV);function eA(n){return n instanceof er&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA({projectId:n}){return`${qV}/projects/${n}/installations`}function nA(n){return{token:n.token,requestStatus:2,expiresIn:YV(n.expiresIn),creationTime:Date.now()}}async function rA(n,e){const r=(await e.json()).error;return Do.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function iA({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function QV(n,{refreshToken:e}){const t=iA(n);return t.append("Authorization",XV(e)),t}async function sA(n){const e=await n();return e.status>=500&&e.status<600?n():e}function YV(n){return Number(n.replace("s","000"))}function XV(n){return`${ZS} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JV({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=tA(n),s=iA(n),a=e.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const u={fid:t,authVersion:ZS,appId:n.appId,sdkVersion:JS},d={method:"POST",headers:s,body:JSON.stringify(u)},f=await sA(()=>fetch(r,d));if(f.ok){const g=await f.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:nA(g.authToken)}}else throw await rA("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=/^[cdef][\w-]{21}$/,Zm="";function t4(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=n4(n);return e4.test(t)?t:Zm}catch{return Zm}}function n4(n){return ZV(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new Map;function lA(n,e){const t=af(n);uA(t,e),r4(t,e)}function uA(n,e){const t=aA.get(n);if(t)for(const r of t)r(e)}function r4(n,e){const t=i4();t&&t.postMessage({key:n,fid:e}),s4()}let go=null;function i4(){return!go&&"BroadcastChannel"in self&&(go=new BroadcastChannel("[Firebase] FID Change"),go.onmessage=n=>{uA(n.data.key,n.data.fid)}),go}function s4(){aA.size===0&&go&&(go.close(),go=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4="firebase-installations-database",a4=1,Mo="firebase-installations-store";let cm=null;function gy(){return cm||(cm=Md(o4,a4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Mo)}}})),cm}async function Sd(n,e){const t=af(n),s=(await gy()).transaction(Mo,"readwrite"),a=s.objectStore(Mo),u=await a.get(t);return await a.put(e,t),await s.done,(!u||u.fid!==e.fid)&&lA(n,e.fid),e}async function cA(n){const e=af(n),r=(await gy()).transaction(Mo,"readwrite");await r.objectStore(Mo).delete(e),await r.done}async function lf(n,e){const t=af(n),s=(await gy()).transaction(Mo,"readwrite"),a=s.objectStore(Mo),u=await a.get(t),d=e(u);return d===void 0?await a.delete(t):await a.put(d,t),await s.done,d&&(!u||u.fid!==d.fid)&&lA(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(n){let e;const t=await lf(n.appConfig,r=>{const s=l4(r),a=u4(n,s);return e=a.registrationPromise,a.installationEntry});return t.fid===Zm?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function l4(n){const e=n||{fid:t4(),registrationStatus:0};return hA(e)}function u4(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Do.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=c4(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:h4(n)}:{installationEntry:e}}async function c4(n,e){try{const t=await JV(n,e);return Sd(n.appConfig,t)}catch(t){throw eA(t)&&t.customData.serverCode===409?await cA(n.appConfig):await Sd(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function h4(n){let e=await ZE(n.appConfig);for(;e.registrationStatus===1;)await oA(100),e=await ZE(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await yy(n);return r||t}return e}function ZE(n){return lf(n,e=>{if(!e)throw Do.create("installation-not-found");return hA(e)})}function hA(n){return d4(n)?{fid:n.fid,registrationStatus:0}:n}function d4(n){return n.registrationStatus===1&&n.registrationTime+XS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f4({appConfig:n,heartbeatServiceProvider:e},t){const r=p4(n,t),s=QV(n,t),a=e.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const u={installation:{sdkVersion:JS,appId:n.appId}},d={method:"POST",headers:s,body:JSON.stringify(u)},f=await sA(()=>fetch(r,d));if(f.ok){const g=await f.json();return nA(g)}else throw await rA("Generate Auth Token",f)}function p4(n,{fid:e}){return`${tA(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(n,e=!1){let t;const r=await lf(n.appConfig,a=>{if(!dA(a))throw Do.create("not-registered");const u=a.authToken;if(!e&&y4(u))return a;if(u.requestStatus===1)return t=m4(n,e),a;{if(!navigator.onLine)throw Do.create("app-offline");const d=_4(a);return t=g4(n,d),d}});return t?await t:r.authToken}async function m4(n,e){let t=await e0(n.appConfig);for(;t.authToken.requestStatus===1;)await oA(100),t=await e0(n.appConfig);const r=t.authToken;return r.requestStatus===0?vy(n,e):r}function e0(n){return lf(n,e=>{if(!dA(e))throw Do.create("not-registered");const t=e.authToken;return w4(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function g4(n,e){try{const t=await f4(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Sd(n.appConfig,r),t}catch(t){if(eA(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await cA(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sd(n.appConfig,r)}throw t}}function dA(n){return n!==void 0&&n.registrationStatus===2}function y4(n){return n.requestStatus===2&&!v4(n)}function v4(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+HV}function _4(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function w4(n){return n.requestStatus===1&&n.requestTime+XS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E4(n){const e=n,{installationEntry:t,registrationPromise:r}=await yy(e);return r?r.catch(console.error):vy(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T4(n,e=!1){const t=n;return await I4(t),(await vy(t,e)).token}async function I4(n){const{registrationPromise:e}=await yy(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(n){if(!n||!n.options)throw hm("App Configuration");if(!n.name)throw hm("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw hm(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function hm(n){return Do.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="installations",A4="installations-internal",R4=n=>{const e=n.getProvider("app").getImmediate(),t=S4(e),r=Fo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},P4=n=>{const e=n.getProvider("app").getImmediate(),t=Fo(e,fA).getImmediate();return{getId:()=>E4(t),getToken:s=>T4(t,s)}};function C4(){Zn(new Un(fA,R4,"PUBLIC")),Zn(new Un(A4,P4,"PRIVATE"))}C4();an(YS,my);an(YS,my,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4="/firebase-messaging-sw.js",b4="/firebase-cloud-messaging-push-scope",pA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",N4="https://fcmregistrations.googleapis.com/v1",mA="google.c.a.c_id",x4="google.c.a.c_l",O4="google.c.a.ts",D4="google.c.a.e",t0=1e4;var n0;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(n0||(n0={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ku;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Ku||(Ku={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function M4(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let a=0;a<r.length;++a)s[a]=r.charCodeAt(a);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="fcm_token_details_db",L4=5,r0="fcm_token_object_Store";async function V4(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(dm))return null;let e=null;return(await Md(dm,L4,{upgrade:async(r,s,a,u)=>{var d;if(s<2||!r.objectStoreNames.contains(r0))return;const f=u.objectStore(r0),g=await f.index("fcmSenderId").get(n);if(await f.clear(),!!g){if(s===2){const v=g;if(!v.auth||!v.p256dh||!v.endpoint)return;e={token:v.fcmToken,createTime:(d=v.createTime)!==null&&d!==void 0?d:Date.now(),subscriptionOptions:{auth:v.auth,p256dh:v.p256dh,endpoint:v.endpoint,swScope:v.swScope,vapidKey:typeof v.vapidKey=="string"?v.vapidKey:mi(v.vapidKey)}}}else if(s===3){const v=g;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:mi(v.auth),p256dh:mi(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:mi(v.vapidKey)}}}else if(s===4){const v=g;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:mi(v.auth),p256dh:mi(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:mi(v.vapidKey)}}}}}})).close(),await Qp(dm),await Qp("fcm_vapid_details_db"),await Qp("undefined"),F4(e)?e:null}function F4(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4="firebase-messaging-database",j4=1,Qu="firebase-messaging-store";let fm=null;function gA(){return fm||(fm=Md(U4,j4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Qu)}}})),fm}async function B4(n){const e=yA(n),r=await(await gA()).transaction(Qu).objectStore(Qu).get(e);if(r)return r;{const s=await V4(n.appConfig.senderId);if(s)return await _y(n,s),s}}async function _y(n,e){const t=yA(n),s=(await gA()).transaction(Qu,"readwrite");return await s.objectStore(Qu).put(e,t),await s.done,e}function yA({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Vn=new Vo("messaging","Messaging",z4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $4(n,e){const t=await Ey(n),r=vA(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let a;try{a=await(await fetch(wy(n.appConfig),s)).json()}catch(u){throw Vn.create("token-subscribe-failed",{errorInfo:u==null?void 0:u.toString()})}if(a.error){const u=a.error.message;throw Vn.create("token-subscribe-failed",{errorInfo:u})}if(!a.token)throw Vn.create("token-subscribe-no-token");return a.token}async function q4(n,e){const t=await Ey(n),r=vA(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${wy(n.appConfig)}/${e.token}`,s)).json()}catch(u){throw Vn.create("token-update-failed",{errorInfo:u==null?void 0:u.toString()})}if(a.error){const u=a.error.message;throw Vn.create("token-update-failed",{errorInfo:u})}if(!a.token)throw Vn.create("token-update-no-token");return a.token}async function H4(n,e){const r={method:"DELETE",headers:await Ey(n)};try{const a=await(await fetch(`${wy(n.appConfig)}/${e}`,r)).json();if(a.error){const u=a.error.message;throw Vn.create("token-unsubscribe-failed",{errorInfo:u})}}catch(s){throw Vn.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function wy({projectId:n}){return`${N4}/projects/${n}/registrations`}async function Ey({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function vA({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==pA&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4=10080*60*1e3;async function G4(n){const e=await Q4(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:mi(e.getKey("auth")),p256dh:mi(e.getKey("p256dh"))},r=await B4(n.firebaseDependencies);if(r){if(Y4(r.subscriptionOptions,t))return Date.now()>=r.createTime+W4?K4(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await H4(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return i0(n.firebaseDependencies,t)}else return i0(n.firebaseDependencies,t)}async function K4(n,e){try{const t=await q4(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await _y(n.firebaseDependencies,r),t}catch(t){throw t}}async function i0(n,e){const r={token:await $4(n,e),createTime:Date.now(),subscriptionOptions:e};return await _y(n,r),r.token}async function Q4(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:M4(e)})}function Y4(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,a=e.p256dh===n.p256dh;return t&&r&&s&&a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return X4(e,n),J4(e,n),Z4(e,n),e}function X4(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const a=e.notification.icon;a&&(n.notification.icon=a)}function J4(n,e){e.data&&(n.data=e.data)}function Z4(n,e){var t,r,s,a,u;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const d=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(a=e.notification)===null||a===void 0?void 0:a.click_action;d&&(n.fcmOptions.link=d);const f=(u=e.fcmOptions)===null||u===void 0?void 0:u.analytics_label;f&&(n.fcmOptions.analyticsLabel=f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(n){return typeof n=="object"&&!!n&&mA in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(n){if(!n||!n.options)throw pm("App Configuration Object");if(!n.name)throw pm("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw pm(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function pm(n){return Vn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=tF(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rF(n){try{n.swRegistration=await navigator.serviceWorker.register(k4,{scope:b4}),n.swRegistration.update().catch(()=>{}),await iF(n.swRegistration)}catch(e){throw Vn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function iF(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${t0} ms`)),t0),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=a=>{var u;((u=a.target)===null||u===void 0?void 0:u.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sF(n,e){if(!e&&!n.swRegistration&&await rF(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Vn.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oF(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=pA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aF(n,e){if(!navigator)throw Vn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Vn.create("permission-blocked");return await oF(n,e==null?void 0:e.vapidKey),await sF(n,e==null?void 0:e.serviceWorkerRegistration),G4(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lF(n,e,t){const r=uF(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[mA],message_name:t[x4],message_time:t[O4],message_device_time:Math.floor(Date.now()/1e3)})}function uF(n){switch(n){case Ku.NOTIFICATION_CLICKED:return"notification_open";case Ku.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cF(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Ku.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(s0(t)):n.onMessageHandler.next(s0(t)));const r=t.data;eF(r)&&r[D4]==="1"&&await lF(n,t.messageType,r)}const o0="@firebase/messaging",a0="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hF=n=>{const e=new nF(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>cF(e,t)),e},dF=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>aF(e,r)}};function fF(){Zn(new Un("messaging",hF,"PUBLIC")),Zn(new Un("messaging-internal",dF,"PRIVATE")),an(o0,a0),an(o0,a0,"esm2017")}fF();const pF={apiKey:"AIzaSyDJbCGNAj3JpWLPTLm7Dw-n8dOKhBFMIGs",authDomain:"moms-469e6.firebaseapp.com",projectId:"moms-469e6",storageBucket:"moms-469e6.firebasestorage.app",messagingSenderId:"891755947587",appId:"1:891755947587:web:71f40f00b72a7481e61b2b"},uf=vT(pF),Uh=JO(uf),is=QM(uf),oU=kL(uf,"asia-south1"),aU=jV(uf),_A=W.createContext(null),l0=n=>`${n.replace(/[^0-9]/g,"")}@moms.app`;function mF({children:n}){const[e,t]=W.useState(null),[r,s]=W.useState(null),[a,u]=W.useState(!0),[d,f]=W.useState(null);W.useEffect(()=>{const N=jx(Uh,async C=>{if(d&&(d(),f(null)),t(C),C){const H=gu(is,"users",C.uid),G=uL(H,async q=>{if(q.exists()){let J={id:q.id,...q.data()};if(J.role==="agency_owner"&&!J.agencyId)try{const ne=sm(im(is,"agencies"),om("ownerId","==",C.uid)),he=await am(ne);he.empty||(J.agencyId=he.docs[0].id,await qE(H,{agencyId:J.agencyId}))}catch(ne){console.error("Error looking up agency:",ne)}s(J)}else s(null);u(!1)},q=>{q.code!=="permission-denied"&&console.error("Error fetching user data:",q),s(null),u(!1)});f(()=>G)}else s(null),u(!1)});return()=>{N(),d&&d()}},[]);const V={user:e,userData:r,loading:a,isAuthenticated:!!e,isRegistered:!!r,login:async(N,C)=>{try{const H=l0(N),G=await Vx(Uh,H,C),q=gu(is,"users",G.user.uid);if(!(await zE(q)).exists()){const ne=N.replace(/[^0-9]/g,""),he={id:G.user.uid,phone:ne,name:"User",role:"customer",status:"active",createdAt:yu(),updatedAt:yu()};await $E(q,he)}return Or.success("Login successful!"),{success:!0,user:G.user}}catch(H){console.error("Login error:",H);let G="Login failed";return H.code==="auth/user-not-found"||H.code==="auth/wrong-password"||H.code==="auth/invalid-credential"?G="Invalid phone number or password":H.code==="auth/too-many-requests"&&(G="Too many failed attempts. Please try again later."),Or.error(G),{success:!1,error:G}}},register:async(N,C,H)=>{try{const G=l0(N),q=await Lx(Uh,G,C),J=N.replace(/[^0-9]/g,"");let ne=null,he=null,O=null,S="customer";try{let b=sm(im(is,"houses"),om("memberPhones","array-contains",J)),M=await am(b);if(M.empty&&(b=sm(im(is,"houses"),om("houseAdminPhone","==",J)),M=await am(b)),!M.empty){const D=M.docs[0],P=D.data();ne=D.id,he=P.smallHouseId,O=P.agencyId,P.houseAdminPhone===J&&(S="house_admin")}}catch(b){console.error("Error checking house membership:",b)}const A={id:q.user.uid,phone:J,name:H,role:S,status:"active",...ne&&{houseId:ne},...he&&{smallHouseId:he},...O&&{agencyId:O},createdAt:yu(),updatedAt:yu()};return await $E(gu(is,"users",q.user.uid),A),s(A),ne?Or.success("Registration successful! You've been linked to your house."):Or.success("Registration successful!"),{success:!0,user:q.user}}catch(G){console.error("Register error:",G);let q="Registration failed";return G.code==="auth/email-already-in-use"?q="This phone number is already registered":G.code==="auth/weak-password"&&(q="Password should be at least 6 characters"),Or.error(q),{success:!1,error:q}}},signOut:async()=>{try{d&&(d(),f(null)),t(null),s(null),await Bx(Uh),Or.success("Signed out successfully")}catch(N){console.error("Sign out error:",N),Or.error("Failed to sign out")}},updateProfile:async N=>{if(!e)return Or.error("User not authenticated"),{success:!1};try{return await qE(gu(is,"users",e.uid),{...N,updatedAt:yu()}),s(C=>({...C,...N})),Or.success("Profile updated successfully"),{success:!0}}catch(C){return console.error("Update profile error:",C),Or.error(C.message||"Failed to update profile"),{success:!1,error:C.message}}},refreshUserData:async()=>{if(e)try{const N=await zE(gu(is,"users",e.uid));N.exists()&&s({id:N.id,...N.data()})}catch(N){console.error("Error refreshing user data:",N)}}};return ie.jsx(_A.Provider,{value:V,children:n})}function wA(){const n=W.useContext(_A);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n}const ht={SYSTEM_ADMIN:"system_admin",AGENCY_OWNER:"agency_owner",AGENCY_HELPER:"agency_helper",HOUSE_ADMIN:"house_admin",CUSTOMER:"customer"},lU={PLACED:"placed",CONFIRMED:"confirmed",PREPARING:"preparing",READY:"ready",DELIVERED:"delivered",CANCELLED:"cancelled"},uU={BREAKFAST:"breakfast",LUNCH:"lunch",DINNER:"dinner",SNACKS:"snacks"},cU={breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",snacks:"Snacks"},hU={cash:"Cash",upi:"UPI",bank_transfer:"Bank Transfer",other:"Other"},dU={system_admin:"System Admin",agency_owner:"Agency Owner",agency_helper:"Agency Helper",house_admin:"House Admin",customer:"Customer"},Ge={HOME:"/",LOGIN:"/login",REGISTER:"/register",DASHBOARD:"/dashboard",AGENCY_HOUSES:"/agency/houses",AGENCY_MENU:"/agency/menu",AGENCY_ORDERS:"/agency/orders",AGENCY_BILLS:"/agency/bills",AGENCY_PAYMENTS:"/agency/payments",AGENCY_SETTINGS:"/agency/settings",HOUSE_MEMBERS:"/house/members",HOUSE_ORDERS:"/house/orders",HOUSE_BILLS:"/house/bills",HOUSE_REQUESTS:"/house/requests",ORDER:"/order",MY_ORDERS:"/my-orders",MY_BILLS:"/my-bills",CHAT:"/chat",PROFILE:"/profile",ADMIN_AGENCIES:"/admin/agencies"};function Gt({children:n,requiredRoles:e=[]}){const{user:t,userData:r,loading:s,isAuthenticated:a,isRegistered:u}=wA(),d=Lo();return s?ie.jsx(hg,{message:"Loading..."}):a?u?e.length>0&&!e.includes(r==null?void 0:r.role)?ie.jsx(Io,{to:Ge.DASHBOARD,replace:!0}):n:ie.jsx(Io,{to:Ge.REGISTER,state:{from:d},replace:!0}):ie.jsx(Io,{to:Ge.LOGIN,state:{from:d},replace:!0})}function u0({children:n}){var a,u;const{loading:e,isAuthenticated:t,isRegistered:r}=wA(),s=Lo();if(e)return ie.jsx(hg,{message:"Loading..."});if(t&&r){const d=((u=(a=s.state)==null?void 0:a.from)==null?void 0:u.pathname)||Ge.DASHBOARD;return ie.jsx(Io,{to:d,replace:!0})}return t&&!r&&s.pathname!==Ge.REGISTER?ie.jsx(Io,{to:Ge.REGISTER,replace:!0}):n}const gF=W.lazy(()=>Mt(()=>import("./LoginPage-kH171dWl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),yF=W.lazy(()=>Mt(()=>import("./RegisterPage-DTMQ5W-l.js"),__vite__mapDeps([8,1,2,3,4,9,5,6,7]))),vF=W.lazy(()=>Mt(()=>import("./DashboardPage-CzjrY2bL.js"),__vite__mapDeps([10,11,3,9,12,13,14,15,7,16]))),_F=W.lazy(()=>Mt(()=>import("./OrderPage-Dn5taA77.js"),__vite__mapDeps([17,12,18,13,11,3,9,14,19,16,20,21]))),wF=W.lazy(()=>Mt(()=>import("./MyOrdersPage-CRKPeQim.js"),__vite__mapDeps([22,12,13,11,3,9,14,23,4,24]))),EF=W.lazy(()=>Mt(()=>import("./MyBillsPage-CjuyUOpO.js"),__vite__mapDeps([25,12,18,1,13,11,3,9,14,23,19,4,24,26,15,21]))),TF=W.lazy(()=>Mt(()=>import("./ChatPage-CLc9sbpv.js"),__vite__mapDeps([27,18,13,11,3,9,28]))),IF=W.lazy(()=>Mt(()=>import("./AgencyHousesPage-B-XcBoIi.js"),__vite__mapDeps([29,12,18,1,2,13,11,3,9,14,23,19,4,20,30,31,5,32]))),SF=W.lazy(()=>Mt(()=>import("./AgencyMenuPage-DJ79D_id.js"),__vite__mapDeps([33,12,18,1,2,13,11,3,9,19,4,20,24,16,6,32,21,34]))),AF=W.lazy(()=>Mt(()=>import("./AgencyOrdersPage-BYO7v2MV.js"),__vite__mapDeps([35,12,18,13,11,3,9,14,23,19,4,24,26,21]))),RF=W.lazy(()=>Mt(()=>import("./AgencyBillsPage-DOIBXDEo.js"),__vite__mapDeps([36,12,18,13,11,3,9,14,23,19,4,20,26]))),PF=W.lazy(()=>Mt(()=>import("./AgencyPaymentsPage-Bpjh9RPL.js"),__vite__mapDeps([37,12,18,13,11,3,9,14,23,19,4,15,28,21,26]))),CF=W.lazy(()=>Mt(()=>import("./AgencySettingsPage-CqSA3kZo.js"),__vite__mapDeps([38,1,2,11,3,9,4,16,34]))),kF=W.lazy(()=>Mt(()=>import("./HouseMembersPage-MTPo03uB.js"),__vite__mapDeps([39,12,18,1,2,13,11,3,9,14,23,19,4,20,30,40,5]))),bF=W.lazy(()=>Mt(()=>import("./HouseOrdersPage-DVOE5-jq.js"),__vite__mapDeps([41,12,13,11,3,9,14,23,19,26]))),NF=W.lazy(()=>Mt(()=>import("./HouseRequestsPage-CY6Y28sp.js"),__vite__mapDeps([42,12,18,13,11,3,9,14,23,19,4,16,21]))),xF=W.lazy(()=>Mt(()=>import("./HouseBillsPage-Cggoysui.js"),__vite__mapDeps([43,12,13,11,3,9,14,23,19,24,26]))),OF=W.lazy(()=>Mt(()=>import("./ProfilePage-B6sSCygc.js"),__vite__mapDeps([44,1,2,11,3,9,14,4,19,5,34,40]))),DF=W.lazy(()=>Mt(()=>import("./AdminAgenciesPage-C3oQJnfq.js"),__vite__mapDeps([45,12,18,1,2,13,11,3,9,14,23,19,4,20,30,5,31,32])));function MF(){return ie.jsx(W.Suspense,{fallback:ie.jsx(hg,{}),children:ie.jsxs(R1,{children:[ie.jsx(dt,{path:Ge.LOGIN,element:ie.jsx(u0,{children:ie.jsx(gF,{})})}),ie.jsx(dt,{path:Ge.REGISTER,element:ie.jsx(u0,{children:ie.jsx(yF,{})})}),ie.jsx(dt,{path:Ge.DASHBOARD,element:ie.jsx(Gt,{children:ie.jsx(vF,{})})}),ie.jsx(dt,{path:Ge.PROFILE,element:ie.jsx(Gt,{children:ie.jsx(OF,{})})}),ie.jsx(dt,{path:Ge.ORDER,element:ie.jsx(Gt,{requiredRoles:[ht.CUSTOMER,ht.HOUSE_ADMIN],children:ie.jsx(_F,{})})}),ie.jsx(dt,{path:Ge.MY_ORDERS,element:ie.jsx(Gt,{requiredRoles:[ht.CUSTOMER,ht.HOUSE_ADMIN],children:ie.jsx(wF,{})})}),ie.jsx(dt,{path:Ge.MY_BILLS,element:ie.jsx(Gt,{requiredRoles:[ht.CUSTOMER,ht.HOUSE_ADMIN],children:ie.jsx(EF,{})})}),ie.jsx(dt,{path:Ge.CHAT,element:ie.jsx(Gt,{requiredRoles:[ht.CUSTOMER,ht.HOUSE_ADMIN],children:ie.jsx(TF,{})})}),ie.jsx(dt,{path:Ge.AGENCY_HOUSES,element:ie.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER,ht.AGENCY_HELPER],children:ie.jsx(IF,{})})}),ie.jsx(dt,{path:Ge.AGENCY_MENU,element:ie.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER,ht.AGENCY_HELPER],children:ie.jsx(SF,{})})}),ie.jsx(dt,{path:Ge.AGENCY_ORDERS,element:ie.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER,ht.AGENCY_HELPER],children:ie.jsx(AF,{})})}),ie.jsx(dt,{path:Ge.AGENCY_BILLS,element:ie.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER],children:ie.jsx(RF,{})})}),ie.jsx(dt,{path:Ge.AGENCY_PAYMENTS,element:ie.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER],children:ie.jsx(PF,{})})}),ie.jsx(dt,{path:Ge.AGENCY_SETTINGS,element:ie.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER],children:ie.jsx(CF,{})})}),ie.jsx(dt,{path:Ge.HOUSE_MEMBERS,element:ie.jsx(Gt,{requiredRoles:[ht.HOUSE_ADMIN],children:ie.jsx(kF,{})})}),ie.jsx(dt,{path:Ge.HOUSE_ORDERS,element:ie.jsx(Gt,{requiredRoles:[ht.HOUSE_ADMIN],children:ie.jsx(bF,{})})}),ie.jsx(dt,{path:Ge.HOUSE_REQUESTS,element:ie.jsx(Gt,{requiredRoles:[ht.HOUSE_ADMIN],children:ie.jsx(NF,{})})}),ie.jsx(dt,{path:Ge.HOUSE_BILLS,element:ie.jsx(Gt,{requiredRoles:[ht.HOUSE_ADMIN],children:ie.jsx(xF,{})})}),ie.jsx(dt,{path:Ge.ADMIN_AGENCIES,element:ie.jsx(Gt,{requiredRoles:[ht.SYSTEM_ADMIN],children:ie.jsx(DF,{})})}),ie.jsx(dt,{path:Ge.HOME,element:ie.jsx(Io,{to:Ge.DASHBOARD,replace:!0})}),ie.jsx(dt,{path:"*",element:ie.jsx(Io,{to:Ge.DASHBOARD,replace:!0})})]})})}const LF=new uP({defaultOptions:{queries:{staleTime:1e3*60*5,retry:1,refetchOnWindowFocus:!1}}});DR.createRoot(document.getElementById("root")).render(ie.jsx(w0.StrictMode,{children:ie.jsx(cP,{client:LF,children:ie.jsx(O1,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:ie.jsxs(mF,{children:[ie.jsx(MF,{}),ie.jsx(JP,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#1e293b",color:"#fff"}}})]})})})}));export{FF as $,dU as A,jF as B,Du as C,oP as D,pn as E,gr as F,BF as G,X1 as H,$1 as I,_m as J,Pd as K,UF as L,cU as M,B1 as N,lU as O,JF as P,z1 as Q,Ge as R,Rd as S,vm as T,D0 as U,rP as V,W1 as W,nU as X,oU as Y,w0 as Z,tg as _,wA as a,CR as a0,YF as a1,Lo as a2,WF as b,ht as c,ib as d,qF as e,HF as f,uU as g,KF as h,hU as i,ie as j,sU as k,rU as l,iU as m,im as n,tU as o,eU as p,sm as q,W as r,aU as s,uL as t,P0 as u,QF as v,is as w,XF as x,GF as y,Or as z};
