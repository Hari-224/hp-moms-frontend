const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-B-ni0WfZ.js","assets/index.esm-BA58FhFx.js","assets/types-7h59Fkfz.js","assets/Button-CiOENXfr.js","assets/Input-DSy_cLET.js","assets/phone-BAkRmmYQ.js","assets/lock-BbfJ0KVP.js","assets/arrow-right-Daz0MiMs.js","assets/RegisterPage-Cx5Gs8_P.js","assets/user-DVTd2ZHA.js","assets/DashboardPage-DYxVxr0A.js","assets/Card-BgyJxnnv.js","assets/useQuery-DiLk-DaS.js","assets/api-DOR-wefx.js","assets/Badge-Bb7NU6h0.js","assets/indian-rupee-BiIBptTw.js","assets/clock-Ol14wkjx.js","assets/OrderPage-DVk1QnyA.js","assets/useMutation-CDmglRiW.js","assets/Modal-B6DbCECy.js","assets/plus-DsVY0QKG.js","assets/check-CZ9WrWSr.js","assets/MyOrdersPage-Bodf5OKu.js","assets/EmptyState-idfWPYnV.js","assets/calendar-CwUE91eJ.js","assets/MyBillsPage-3JRRR5e1.js","assets/eye-BawcbnTh.js","assets/ChatPage-DEAnnk5R.js","assets/image-BgYytPsi.js","assets/AgencyHousesPage-DEq5OgOl.js","assets/search-DCZalx11.js","assets/square-pen-EL8dCp3t.js","assets/trash-2-CLHE8Nky.js","assets/AgencyMenuPage-6wvHc-Tj.js","assets/save-DXxxMTj2.js","assets/AgencyOrdersPage-BccgP0Cp.js","assets/AgencyBillsPage-D-UMPxSp.js","assets/AgencyPaymentsPage-CU46J01Q.js","assets/AgencySettingsPage-BG13b6My.js","assets/HouseMembersPage-eJnTX2xe.js","assets/shield-jL7mq--s.js","assets/HouseOrdersPage-DXCBK2HP.js","assets/HouseRequestsPage-DsAbawyC.js","assets/HouseBillsPage-DBSmN21-.js","assets/ProfilePage-DQSHYEaf.js","assets/AdminAgenciesPage-aUoWvNPe.js"])))=>i.map(i=>d[i]);
var __=n=>{throw TypeError(n)};var Np=(n,e,t)=>e.has(n)||__("Cannot "+t);var W=(n,e,t)=>(Np(n,e,"read from private field"),t?t.call(n):e.get(n)),Me=(n,e,t)=>e.has(n)?__("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),Se=(n,e,t,r)=>(Np(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),tn=(n,e,t)=>(Np(n,e,"access private method"),t);var Ih=(n,e,t,r)=>({set _(s){Se(n,e,s,t)},get _(){return W(n,e,r)}});function gR(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in n)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(n,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function a0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xp={exports:{}},uu={},Op={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function yR(){if(w_)return Ne;w_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(F){return F===null||typeof F!="object"?null:(F=w&&F[w]||F["@@iterator"],typeof F=="function"?F:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,x={};function k(F,Y,ye){this.props=F,this.context=Y,this.refs=x,this.updater=ye||P}k.prototype.isReactComponent={},k.prototype.setState=function(F,Y){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Y,"setState")},k.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function q(){}q.prototype=k.prototype;function X(F,Y,ye){this.props=F,this.context=Y,this.refs=x,this.updater=ye||P}var G=X.prototype=new q;G.constructor=X,D(G,k.prototype),G.isPureReactComponent=!0;var te=Array.isArray,ie=Object.prototype.hasOwnProperty,ge={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function S(F,Y,ye){var Ce,be={},Le=null,ze=null;if(Y!=null)for(Ce in Y.ref!==void 0&&(ze=Y.ref),Y.key!==void 0&&(Le=""+Y.key),Y)ie.call(Y,Ce)&&!O.hasOwnProperty(Ce)&&(be[Ce]=Y[Ce]);var $e=arguments.length-2;if($e===1)be.children=ye;else if(1<$e){for(var Ye=Array($e),Lt=0;Lt<$e;Lt++)Ye[Lt]=arguments[Lt+2];be.children=Ye}if(F&&F.defaultProps)for(Ce in $e=F.defaultProps,$e)be[Ce]===void 0&&(be[Ce]=$e[Ce]);return{$$typeof:n,type:F,key:Le,ref:ze,props:be,_owner:ge.current}}function R(F,Y){return{$$typeof:n,type:F.type,key:Y,ref:F.ref,props:F.props,_owner:F._owner}}function b(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function V(F){var Y={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ye){return Y[ye]})}var L=/\/+/g;function C(F,Y){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):Y.toString(36)}function Qe(F,Y,ye,Ce,be){var Le=typeof F;(Le==="undefined"||Le==="boolean")&&(F=null);var ze=!1;if(F===null)ze=!0;else switch(Le){case"string":case"number":ze=!0;break;case"object":switch(F.$$typeof){case n:case e:ze=!0}}if(ze)return ze=F,be=be(ze),F=Ce===""?"."+C(ze,0):Ce,te(be)?(ye="",F!=null&&(ye=F.replace(L,"$&/")+"/"),Qe(be,Y,ye,"",function(Lt){return Lt})):be!=null&&(b(be)&&(be=R(be,ye+(!be.key||ze&&ze.key===be.key?"":(""+be.key).replace(L,"$&/")+"/")+F)),Y.push(be)),1;if(ze=0,Ce=Ce===""?".":Ce+":",te(F))for(var $e=0;$e<F.length;$e++){Le=F[$e];var Ye=Ce+C(Le,$e);ze+=Qe(Le,Y,ye,Ye,be)}else if(Ye=T(F),typeof Ye=="function")for(F=Ye.call(F),$e=0;!(Le=F.next()).done;)Le=Le.value,Ye=Ce+C(Le,$e++),ze+=Qe(Le,Y,ye,Ye,be);else if(Le==="object")throw Y=String(F),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return ze}function Pt(F,Y,ye){if(F==null)return F;var Ce=[],be=0;return Qe(F,Ce,"","",function(Le){return Y.call(ye,Le,be++)}),Ce}function yt(F){if(F._status===-1){var Y=F._result;Y=Y(),Y.then(function(ye){(F._status===0||F._status===-1)&&(F._status=1,F._result=ye)},function(ye){(F._status===0||F._status===-1)&&(F._status=2,F._result=ye)}),F._status===-1&&(F._status=0,F._result=Y)}if(F._status===1)return F._result.default;throw F._result}var Be={current:null},oe={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:oe,ReactCurrentOwner:ge};function le(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Pt,forEach:function(F,Y,ye){Pt(F,function(){Y.apply(this,arguments)},ye)},count:function(F){var Y=0;return Pt(F,function(){Y++}),Y},toArray:function(F){return Pt(F,function(Y){return Y})||[]},only:function(F){if(!b(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Ne.Component=k,Ne.Fragment=t,Ne.Profiler=s,Ne.PureComponent=X,Ne.StrictMode=r,Ne.Suspense=f,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ne.act=le,Ne.cloneElement=function(F,Y,ye){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ce=D({},F.props),be=F.key,Le=F.ref,ze=F._owner;if(Y!=null){if(Y.ref!==void 0&&(Le=Y.ref,ze=ge.current),Y.key!==void 0&&(be=""+Y.key),F.type&&F.type.defaultProps)var $e=F.type.defaultProps;for(Ye in Y)ie.call(Y,Ye)&&!O.hasOwnProperty(Ye)&&(Ce[Ye]=Y[Ye]===void 0&&$e!==void 0?$e[Ye]:Y[Ye])}var Ye=arguments.length-2;if(Ye===1)Ce.children=ye;else if(1<Ye){$e=Array(Ye);for(var Lt=0;Lt<Ye;Lt++)$e[Lt]=arguments[Lt+2];Ce.children=$e}return{$$typeof:n,type:F.type,key:be,ref:Le,props:Ce,_owner:ze}},Ne.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},Ne.createElement=S,Ne.createFactory=function(F){var Y=S.bind(null,F);return Y.type=F,Y},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(F){return{$$typeof:d,render:F}},Ne.isValidElement=b,Ne.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:yt}},Ne.memo=function(F,Y){return{$$typeof:g,type:F,compare:Y===void 0?null:Y}},Ne.startTransition=function(F){var Y=oe.transition;oe.transition={};try{F()}finally{oe.transition=Y}},Ne.unstable_act=le,Ne.useCallback=function(F,Y){return Be.current.useCallback(F,Y)},Ne.useContext=function(F){return Be.current.useContext(F)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(F){return Be.current.useDeferredValue(F)},Ne.useEffect=function(F,Y){return Be.current.useEffect(F,Y)},Ne.useId=function(){return Be.current.useId()},Ne.useImperativeHandle=function(F,Y,ye){return Be.current.useImperativeHandle(F,Y,ye)},Ne.useInsertionEffect=function(F,Y){return Be.current.useInsertionEffect(F,Y)},Ne.useLayoutEffect=function(F,Y){return Be.current.useLayoutEffect(F,Y)},Ne.useMemo=function(F,Y){return Be.current.useMemo(F,Y)},Ne.useReducer=function(F,Y,ye){return Be.current.useReducer(F,Y,ye)},Ne.useRef=function(F){return Be.current.useRef(F)},Ne.useState=function(F){return Be.current.useState(F)},Ne.useSyncExternalStore=function(F,Y,ye){return Be.current.useSyncExternalStore(F,Y,ye)},Ne.useTransition=function(){return Be.current.useTransition()},Ne.version="18.3.1",Ne}var E_;function Km(){return E_||(E_=1,Op.exports=yR()),Op.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function vR(){if(T_)return uu;T_=1;var n=Km(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,g){var v,w={},T=null,P=null;g!==void 0&&(T=""+g),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(P=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:P,props:w,_owner:s.current}}return uu.Fragment=t,uu.jsx=u,uu.jsxs=u,uu}var I_;function _R(){return I_||(I_=1,xp.exports=vR()),xp.exports}var re=_R(),H=Km();const l0=a0(H),wR=gR({__proto__:null,default:l0},[H]);var Sh={},Dp={exports:{}},Tn={},Mp={exports:{}},Lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function ER(){return S_||(S_=1,(function(n){function e(oe,me){var le=oe.length;oe.push(me);e:for(;0<le;){var F=le-1>>>1,Y=oe[F];if(0<s(Y,me))oe[F]=me,oe[le]=Y,le=F;else break e}}function t(oe){return oe.length===0?null:oe[0]}function r(oe){if(oe.length===0)return null;var me=oe[0],le=oe.pop();if(le!==me){oe[0]=le;e:for(var F=0,Y=oe.length,ye=Y>>>1;F<ye;){var Ce=2*(F+1)-1,be=oe[Ce],Le=Ce+1,ze=oe[Le];if(0>s(be,le))Le<Y&&0>s(ze,be)?(oe[F]=ze,oe[Le]=le,F=Le):(oe[F]=be,oe[Ce]=le,F=Ce);else if(Le<Y&&0>s(ze,le))oe[F]=ze,oe[Le]=le,F=Le;else break e}}return me}function s(oe,me){var le=oe.sortIndex-me.sortIndex;return le!==0?le:oe.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],g=[],v=1,w=null,T=3,P=!1,D=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(oe){for(var me=t(g);me!==null;){if(me.callback===null)r(g);else if(me.startTime<=oe)r(g),me.sortIndex=me.expirationTime,e(f,me);else break;me=t(g)}}function te(oe){if(x=!1,G(oe),!D)if(t(f)!==null)D=!0,yt(ie);else{var me=t(g);me!==null&&Be(te,me.startTime-oe)}}function ie(oe,me){D=!1,x&&(x=!1,q(S),S=-1),P=!0;var le=T;try{for(G(me),w=t(f);w!==null&&(!(w.expirationTime>me)||oe&&!V());){var F=w.callback;if(typeof F=="function"){w.callback=null,T=w.priorityLevel;var Y=F(w.expirationTime<=me);me=n.unstable_now(),typeof Y=="function"?w.callback=Y:w===t(f)&&r(f),G(me)}else r(f);w=t(f)}if(w!==null)var ye=!0;else{var Ce=t(g);Ce!==null&&Be(te,Ce.startTime-me),ye=!1}return ye}finally{w=null,T=le,P=!1}}var ge=!1,O=null,S=-1,R=5,b=-1;function V(){return!(n.unstable_now()-b<R)}function L(){if(O!==null){var oe=n.unstable_now();b=oe;var me=!0;try{me=O(!0,oe)}finally{me?C():(ge=!1,O=null)}}else ge=!1}var C;if(typeof X=="function")C=function(){X(L)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Pt=Qe.port2;Qe.port1.onmessage=L,C=function(){Pt.postMessage(null)}}else C=function(){k(L,0)};function yt(oe){O=oe,ge||(ge=!0,C())}function Be(oe,me){S=k(function(){oe(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(oe){oe.callback=null},n.unstable_continueExecution=function(){D||P||(D=!0,yt(ie))},n.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<oe?Math.floor(1e3/oe):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(oe){switch(T){case 1:case 2:case 3:var me=3;break;default:me=T}var le=T;T=me;try{return oe()}finally{T=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(oe,me){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var le=T;T=oe;try{return me()}finally{T=le}},n.unstable_scheduleCallback=function(oe,me,le){var F=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,oe){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=le+Y,oe={id:v++,callback:me,priorityLevel:oe,startTime:le,expirationTime:Y,sortIndex:-1},le>F?(oe.sortIndex=le,e(g,oe),t(f)===null&&oe===t(g)&&(x?(q(S),S=-1):x=!0,Be(te,le-F))):(oe.sortIndex=Y,e(f,oe),D||P||(D=!0,yt(ie))),oe},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(oe){var me=T;return function(){var le=T;T=me;try{return oe.apply(this,arguments)}finally{T=le}}}})(Lp)),Lp}var A_;function TR(){return A_||(A_=1,Mp.exports=ER()),Mp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function IR(){if(R_)return Tn;R_=1;var n=Km(),e=TR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return f.call(w,i)?!0:f.call(v,i)?!1:g.test(i)?w[i]=!0:(v[i]=!0,!1)}function P(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function D(i,o,l,h){if(o===null||typeof o>"u"||P(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function x(i,o,l,h,p,y,E){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=y,this.removeEmptyString=E}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){k[i]=new x(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];k[o]=new x(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){k[i]=new x(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){k[i]=new x(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){k[i]=new x(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){k[i]=new x(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){k[i]=new x(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){k[i]=new x(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){k[i]=new x(i,5,!1,i.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function X(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(q,X);k[o]=new x(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(q,X);k[o]=new x(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(q,X);k[o]=new x(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){k[i]=new x(i,1,!1,i.toLowerCase(),null,!1,!1)}),k.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){k[i]=new x(i,1,!1,i.toLowerCase(),null,!0,!0)});function G(i,o,l,h){var p=k.hasOwnProperty(o)?k[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(D(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var te=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),ge=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),V=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),oe=Symbol.iterator;function me(i){return i===null||typeof i!="object"?null:(i=oe&&i[oe]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,F;function Y(i){if(F===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);F=o&&o[1]||""}return`
`+F+i}var ye=!1;function Ce(i,o){if(!i||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(z){var h=z}Reflect.construct(i,[],o)}else{try{o.call()}catch(z){h=z}i.call(o.prototype)}else{try{throw Error()}catch(z){h=z}i()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var p=z.stack.split(`
`),y=h.stack.split(`
`),E=p.length-1,A=y.length-1;1<=E&&0<=A&&p[E]!==y[A];)A--;for(;1<=E&&0<=A;E--,A--)if(p[E]!==y[A]){if(E!==1||A!==1)do if(E--,A--,0>A||p[E]!==y[A]){var N=`
`+p[E].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=E&&0<=A);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Y(i):""}function be(i){switch(i.tag){case 5:return Y(i.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function Le(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case ge:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case Qe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case L:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Pt:return o=i.displayName||null,o!==null?o:Le(i.type)||"Memo";case yt:o=i._payload,i=i._init;try{return Le(i(o))}catch{}}return null}function ze(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ye(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Lt(i){var o=Ye(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,y.call(this,E)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Gr(i){i._valueTracker||(i._valueTracker=Lt(i))}function jo(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Ye(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Pi(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Vs(i,o){var l=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Bo(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=$e(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ml(i,o){o=o.checked,o!=null&&G(i,"checked",o,!1)}function gl(i,o){ml(i,o);var l=$e(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?zo(i,o.type,l):o.hasOwnProperty("defaultValue")&&zo(i,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function lc(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function zo(i,o,l){(o!=="number"||Pi(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Kr=Array.isArray;function Qr(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+$e(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function yl(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function $o(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Kr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:$e(l)}}function qo(i,o){var l=$e(o.value),h=$e(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function vl(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ct(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ct(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Yr,_l=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Yr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ci(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Us=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(i){Us.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Fs[o]=Fs[i]})});function wl(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Fs.hasOwnProperty(i)&&Fs[i]?(""+o).trim():o+"px"}function El(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=wl(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Tl=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(i,o){if(o){if(Tl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Sl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var js=null;function Ho(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Wo=null,jn=null,Er=null;function Go(i){if(i=Kl(i)){if(typeof Wo!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Fc(o),Wo(i.stateNode,i.type,o))}}function Tr(i){jn?Er?Er.push(i):Er=[i]:jn=i}function Al(){if(jn){var i=jn,o=Er;if(Er=jn=null,Go(i),o)for(i=0;i<o.length;i++)Go(o[i])}}function Bs(i,o){return i(o)}function Rl(){}var Xr=!1;function Pl(i,o,l){if(Xr)return i(o,l);Xr=!0;try{return Bs(i,o,l)}finally{Xr=!1,(jn!==null||Er!==null)&&(Rl(),Al())}}function vt(i,o){var l=i.stateNode;if(l===null)return null;var h=Fc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Ko=!1;if(d)try{var er={};Object.defineProperty(er,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Ko=!1}function zs(i,o,l,h,p,y,E,A,N){var z=Array.prototype.slice.call(arguments,3);try{o.apply(l,z)}catch(Z){this.onError(Z)}}var $s=!1,Qo=null,tr=!1,Cl=null,sf={onError:function(i){$s=!0,Qo=i}};function Yo(i,o,l,h,p,y,E,A,N){$s=!1,Qo=null,zs.apply(sf,arguments)}function uc(i,o,l,h,p,y,E,A,N){if(Yo.apply(this,arguments),$s){if($s){var z=Qo;$s=!1,Qo=null}else throw Error(t(198));tr||(tr=!0,Cl=z)}}function nr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function qs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function rr(i){if(nr(i)!==i)throw Error(t(188))}function cc(i){var o=i.alternate;if(!o){if(o=nr(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return rr(p),i;if(y===h)return rr(p),o;y=y.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=y;else{for(var E=!1,A=p.child;A;){if(A===l){E=!0,l=p,h=y;break}if(A===h){E=!0,h=p,l=y;break}A=A.sibling}if(!E){for(A=y.child;A;){if(A===l){E=!0,l=y,h=p;break}if(A===h){E=!0,h=y,l=p;break}A=A.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function kl(i){return i=cc(i),i!==null?Xo(i):null}function Xo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Xo(i);if(o!==null)return o;i=i.sibling}return null}var Jo=e.unstable_scheduleCallback,bl=e.unstable_cancelCallback,hc=e.unstable_shouldYield,of=e.unstable_requestPaint,Xe=e.unstable_now,dc=e.unstable_getCurrentPriorityLevel,Hs=e.unstable_ImmediatePriority,ki=e.unstable_UserBlockingPriority,Bn=e.unstable_NormalPriority,Nl=e.unstable_LowPriority,fc=e.unstable_IdlePriority,Ws=null,Cn=null;function pc(i){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Ws,i,void 0,(i.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:gc,xl=Math.log,mc=Math.LN2;function gc(i){return i>>>=0,i===0?32:31-(xl(i)/mc|0)|0}var Zo=64,ea=4194304;function bi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Gs(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,y=i.pingedLanes,E=l&268435455;if(E!==0){var A=E&~p;A!==0?h=bi(A):(y&=E,y!==0&&(h=bi(y)))}else E=l&~p,E!==0?h=bi(E):y!==0&&(h=bi(y));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,y=o&-o,p>=y||p===16&&(y&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-un(o),p=1<<l,h|=i[l],o&=~p;return h}function af(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jr(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,y=i.pendingLanes;0<y;){var E=31-un(y),A=1<<E,N=p[E];N===-1?((A&l)===0||(A&h)!==0)&&(p[E]=af(A,o)):N<=o&&(i.expiredLanes|=A),y&=~A}}function kn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ks(){var i=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),i}function Ni(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function xi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-un(o),i[o]=l}function Ke(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-un(l),y=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~y}}function Oi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-un(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var De=0;function Di(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var yc,ta,vc,_c,wc,Ol=!1,Ir=[],$t=null,ir=null,sr=null,Mi=new Map,zn=new Map,Sr=[],lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(i,o){switch(i){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Mi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(o.pointerId)}}function mn(i,o,l,h,p,y){return i===null||i.nativeEvent!==y?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[p]},o!==null&&(o=Kl(o),o!==null&&ta(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function uf(i,o,l,h,p){switch(o){case"focusin":return $t=mn($t,i,o,l,h,p),!0;case"dragenter":return ir=mn(ir,i,o,l,h,p),!0;case"mouseover":return sr=mn(sr,i,o,l,h,p),!0;case"pointerover":var y=p.pointerId;return Mi.set(y,mn(Mi.get(y)||null,i,o,l,h,p)),!0;case"gotpointercapture":return y=p.pointerId,zn.set(y,mn(zn.get(y)||null,i,o,l,h,p)),!0}return!1}function Tc(i){var o=Zs(i.target);if(o!==null){var l=nr(o);if(l!==null){if(o=l.tag,o===13){if(o=qs(l),o!==null){i.blockedOn=o,wc(i.priority,function(){vc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Zr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=na(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);js=h,l.target.dispatchEvent(h),js=null}else return o=Kl(l),o!==null&&ta(o),i.blockedOn=l,!1;o.shift()}return!0}function Qs(i,o,l){Zr(i)&&l.delete(o)}function Ic(){Ol=!1,$t!==null&&Zr($t)&&($t=null),ir!==null&&Zr(ir)&&(ir=null),sr!==null&&Zr(sr)&&(sr=null),Mi.forEach(Qs),zn.forEach(Qs)}function or(i,o){i.blockedOn===o&&(i.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ic)))}function ar(i){function o(p){return or(p,i)}if(0<Ir.length){or(Ir[0],i);for(var l=1;l<Ir.length;l++){var h=Ir[l];h.blockedOn===i&&(h.blockedOn=null)}}for($t!==null&&or($t,i),ir!==null&&or(ir,i),sr!==null&&or(sr,i),Mi.forEach(o),zn.forEach(o),l=0;l<Sr.length;l++)h=Sr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<Sr.length&&(l=Sr[0],l.blockedOn===null);)Tc(l),l.blockedOn===null&&Sr.shift()}var ei=te.ReactCurrentBatchConfig,Li=!0;function st(i,o,l,h){var p=De,y=ei.transition;ei.transition=null;try{De=1,Dl(i,o,l,h)}finally{De=p,ei.transition=y}}function cf(i,o,l,h){var p=De,y=ei.transition;ei.transition=null;try{De=4,Dl(i,o,l,h)}finally{De=p,ei.transition=y}}function Dl(i,o,l,h){if(Li){var p=na(i,o,l,h);if(p===null)Ef(i,o,h,Ys,l),Ec(i,h);else if(uf(p,i,o,l,h))h.stopPropagation();else if(Ec(i,h),o&4&&-1<lf.indexOf(i)){for(;p!==null;){var y=Kl(p);if(y!==null&&yc(y),y=na(i,o,l,h),y===null&&Ef(i,o,h,Ys,l),y===p)break;p=y}p!==null&&h.stopPropagation()}else Ef(i,o,h,null,l)}}var Ys=null;function na(i,o,l,h){if(Ys=null,i=Ho(h),i=Zs(i),i!==null)if(o=nr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=qs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Ys=i,null}function Ml(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case Hs:return 1;case ki:return 4;case Bn:case Nl:return 16;case fc:return 536870912;default:return 16}default:return 16}}var bn=null,ra=null,gn=null;function Ll(){if(gn)return gn;var i,o=ra,l=o.length,h,p="value"in bn?bn.value:bn.textContent,y=p.length;for(i=0;i<l&&o[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&o[l-h]===p[y-h];h++);return gn=p.slice(i,1<h?1-h:void 0)}function ia(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Ar(){return!0}function Vl(){return!1}function qt(i){function o(l,h,p,y,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(y):y[A]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Ar:Vl,this.isPropagationStopped=Vl,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),o}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=qt(lr),Rr=le({},lr,{view:0,detail:0}),hf=qt(Rr),oa,ti,Vi,Xs=le({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Vi&&(Vi&&i.type==="mousemove"?(oa=i.screenX-Vi.screenX,ti=i.screenY-Vi.screenY):ti=oa=0,Vi=i),oa)},movementY:function(i){return"movementY"in i?i.movementY:ti}}),aa=qt(Xs),Fl=le({},Xs,{dataTransfer:0}),Sc=qt(Fl),la=le({},Rr,{relatedTarget:0}),ua=qt(la),Ac=le({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),ni=qt(Ac),Rc=le({},lr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Pc=qt(Rc),Cc=le({},lr,{data:0}),Ul=qt(Cc),ca={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=kc[i])?!!o[i]:!1}function Pr(){return bc}var c=le({},Rr,{key:function(i){if(i.key){var o=ca[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ia(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?cn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pr,charCode:function(i){return i.type==="keypress"?ia(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ia(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=qt(c),_=le({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=qt(_),U=le({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pr}),$=qt(U),se=le({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=qt(se),bt=le({},Xs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=qt(bt),Vt=[9,13,27,32],Tt=d&&"CompositionEvent"in window,$n=null;d&&"documentMode"in document&&($n=document.documentMode);var Nn=d&&"TextEvent"in window&&!$n,Js=d&&(!Tt||$n&&8<$n&&11>=$n),ha=" ",fy=!1;function py(i,o){switch(i){case"keyup":return Vt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function my(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var da=!1;function fA(i,o){switch(i){case"compositionend":return my(o);case"keypress":return o.which!==32?null:(fy=!0,ha);case"textInput":return i=o.data,i===ha&&fy?null:i;default:return null}}function pA(i,o){if(da)return i==="compositionend"||!Tt&&py(i,o)?(i=Ll(),gn=ra=bn=null,da=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Js&&o.locale!=="ko"?null:o.data;default:return null}}var mA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gy(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!mA[i.type]:o==="textarea"}function yy(i,o,l,h){Tr(h),o=Mc(o,"onChange"),0<o.length&&(l=new sa("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var jl=null,Bl=null;function gA(i){My(i,0)}function Nc(i){var o=ya(i);if(jo(o))return i}function yA(i,o){if(i==="change")return o}var vy=!1;if(d){var df;if(d){var ff="oninput"in document;if(!ff){var _y=document.createElement("div");_y.setAttribute("oninput","return;"),ff=typeof _y.oninput=="function"}df=ff}else df=!1;vy=df&&(!document.documentMode||9<document.documentMode)}function wy(){jl&&(jl.detachEvent("onpropertychange",Ey),Bl=jl=null)}function Ey(i){if(i.propertyName==="value"&&Nc(Bl)){var o=[];yy(o,Bl,i,Ho(i)),Pl(gA,o)}}function vA(i,o,l){i==="focusin"?(wy(),jl=o,Bl=l,jl.attachEvent("onpropertychange",Ey)):i==="focusout"&&wy()}function _A(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Nc(Bl)}function wA(i,o){if(i==="click")return Nc(o)}function EA(i,o){if(i==="input"||i==="change")return Nc(o)}function TA(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var ur=typeof Object.is=="function"?Object.is:TA;function zl(i,o){if(ur(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!ur(i[p],o[p]))return!1}return!0}function Ty(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Iy(i,o){var l=Ty(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ty(l)}}function Sy(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Sy(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Ay(){for(var i=window,o=Pi();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Pi(i.document)}return o}function pf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function IA(i){var o=Ay(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Sy(l.ownerDocument.documentElement,l)){if(h!==null&&pf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,y=Math.min(h.start,p);h=h.end===void 0?y:Math.min(h.end,p),!i.extend&&y>h&&(p=h,h=y,y=p),p=Iy(l,y);var E=Iy(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),y>h?(i.addRange(o),i.extend(E.node,E.offset)):(o.setEnd(E.node,E.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var SA=d&&"documentMode"in document&&11>=document.documentMode,fa=null,mf=null,$l=null,gf=!1;function Ry(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gf||fa==null||fa!==Pi(h)||(h=fa,"selectionStart"in h&&pf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),$l&&zl($l,h)||($l=h,h=Mc(mf,"onSelect"),0<h.length&&(o=new sa("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=fa)))}function xc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var pa={animationend:xc("Animation","AnimationEnd"),animationiteration:xc("Animation","AnimationIteration"),animationstart:xc("Animation","AnimationStart"),transitionend:xc("Transition","TransitionEnd")},yf={},Py={};d&&(Py=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Oc(i){if(yf[i])return yf[i];if(!pa[i])return i;var o=pa[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Py)return yf[i]=o[l];return i}var Cy=Oc("animationend"),ky=Oc("animationiteration"),by=Oc("animationstart"),Ny=Oc("transitionend"),xy=new Map,Oy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(i,o){xy.set(i,o),a(o,[i])}for(var vf=0;vf<Oy.length;vf++){var _f=Oy[vf],AA=_f.toLowerCase(),RA=_f[0].toUpperCase()+_f.slice(1);Fi(AA,"on"+RA)}Fi(Cy,"onAnimationEnd"),Fi(ky,"onAnimationIteration"),Fi(by,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(Ny,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ql));function Dy(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,uc(h,o,void 0,i),i.currentTarget=null}function My(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var y=void 0;if(o)for(var E=h.length-1;0<=E;E--){var A=h[E],N=A.instance,z=A.currentTarget;if(A=A.listener,N!==y&&p.isPropagationStopped())break e;Dy(p,A,z),y=N}else for(E=0;E<h.length;E++){if(A=h[E],N=A.instance,z=A.currentTarget,A=A.listener,N!==y&&p.isPropagationStopped())break e;Dy(p,A,z),y=N}}}if(tr)throw i=Cl,tr=!1,Cl=null,i}function tt(i,o){var l=o[Pf];l===void 0&&(l=o[Pf]=new Set);var h=i+"__bubble";l.has(h)||(Ly(o,i,2,!1),l.add(h))}function wf(i,o,l){var h=0;o&&(h|=4),Ly(l,i,h,o)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Hl(i){if(!i[Dc]){i[Dc]=!0,r.forEach(function(l){l!=="selectionchange"&&(PA.has(l)||wf(l,!1,i),wf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Dc]||(o[Dc]=!0,wf("selectionchange",!1,o))}}function Ly(i,o,l,h){switch(Ml(o)){case 1:var p=st;break;case 4:p=cf;break;default:p=Dl}l=p.bind(null,o,l,i),p=void 0,!Ko||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function Ef(i,o,l,h,p){var y=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var N=E.tag;if((N===3||N===4)&&(N=E.stateNode.containerInfo,N===p||N.nodeType===8&&N.parentNode===p))return;E=E.return}for(;A!==null;){if(E=Zs(A),E===null)return;if(N=E.tag,N===5||N===6){h=y=E;continue e}A=A.parentNode}}h=h.return}Pl(function(){var z=y,Z=Ho(l),ee=[];e:{var J=xy.get(i);if(J!==void 0){var ue=sa,de=i;switch(i){case"keypress":if(ia(l)===0)break e;case"keydown":case"keyup":ue=m;break;case"focusin":de="focus",ue=ua;break;case"focusout":de="blur",ue=ua;break;case"beforeblur":case"afterblur":ue=ua;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=$;break;case Cy:case ky:case by:ue=ni;break;case Ny:ue=He;break;case"scroll":ue=hf;break;case"wheel":ue=Ve;break;case"copy":case"cut":case"paste":ue=Pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=I}var fe=(o&4)!==0,_t=!fe&&i==="scroll",j=fe?J!==null?J+"Capture":null:J;fe=[];for(var M=z,B;M!==null;){B=M;var ne=B.stateNode;if(B.tag===5&&ne!==null&&(B=ne,j!==null&&(ne=vt(M,j),ne!=null&&fe.push(Wl(M,ne,B)))),_t)break;M=M.return}0<fe.length&&(J=new ue(J,de,null,l,Z),ee.push({event:J,listeners:fe}))}}if((o&7)===0){e:{if(J=i==="mouseover"||i==="pointerover",ue=i==="mouseout"||i==="pointerout",J&&l!==js&&(de=l.relatedTarget||l.fromElement)&&(Zs(de)||de[ri]))break e;if((ue||J)&&(J=Z.window===Z?Z:(J=Z.ownerDocument)?J.defaultView||J.parentWindow:window,ue?(de=l.relatedTarget||l.toElement,ue=z,de=de?Zs(de):null,de!==null&&(_t=nr(de),de!==_t||de.tag!==5&&de.tag!==6)&&(de=null)):(ue=null,de=z),ue!==de)){if(fe=aa,ne="onMouseLeave",j="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(fe=I,ne="onPointerLeave",j="onPointerEnter",M="pointer"),_t=ue==null?J:ya(ue),B=de==null?J:ya(de),J=new fe(ne,M+"leave",ue,l,Z),J.target=_t,J.relatedTarget=B,ne=null,Zs(Z)===z&&(fe=new fe(j,M+"enter",de,l,Z),fe.target=B,fe.relatedTarget=_t,ne=fe),_t=ne,ue&&de)t:{for(fe=ue,j=de,M=0,B=fe;B;B=ma(B))M++;for(B=0,ne=j;ne;ne=ma(ne))B++;for(;0<M-B;)fe=ma(fe),M--;for(;0<B-M;)j=ma(j),B--;for(;M--;){if(fe===j||j!==null&&fe===j.alternate)break t;fe=ma(fe),j=ma(j)}fe=null}else fe=null;ue!==null&&Vy(ee,J,ue,fe,!1),de!==null&&_t!==null&&Vy(ee,_t,de,fe,!0)}}e:{if(J=z?ya(z):window,ue=J.nodeName&&J.nodeName.toLowerCase(),ue==="select"||ue==="input"&&J.type==="file")var pe=yA;else if(gy(J))if(vy)pe=EA;else{pe=_A;var _e=vA}else(ue=J.nodeName)&&ue.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(pe=wA);if(pe&&(pe=pe(i,z))){yy(ee,pe,l,Z);break e}_e&&_e(i,J,z),i==="focusout"&&(_e=J._wrapperState)&&_e.controlled&&J.type==="number"&&zo(J,"number",J.value)}switch(_e=z?ya(z):window,i){case"focusin":(gy(_e)||_e.contentEditable==="true")&&(fa=_e,mf=z,$l=null);break;case"focusout":$l=mf=fa=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Ry(ee,l,Z);break;case"selectionchange":if(SA)break;case"keydown":case"keyup":Ry(ee,l,Z)}var we;if(Tt)e:{switch(i){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else da?py(i,l)&&(Ie="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ie="onCompositionStart");Ie&&(Js&&l.locale!=="ko"&&(da||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&da&&(we=Ll()):(bn=Z,ra="value"in bn?bn.value:bn.textContent,da=!0)),_e=Mc(z,Ie),0<_e.length&&(Ie=new Ul(Ie,i,null,l,Z),ee.push({event:Ie,listeners:_e}),we?Ie.data=we:(we=my(l),we!==null&&(Ie.data=we)))),(we=Nn?fA(i,l):pA(i,l))&&(z=Mc(z,"onBeforeInput"),0<z.length&&(Z=new Ul("onBeforeInput","beforeinput",null,l,Z),ee.push({event:Z,listeners:z}),Z.data=we))}My(ee,o)})}function Wl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Mc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=vt(i,l),y!=null&&h.unshift(Wl(i,y,p)),y=vt(i,o),y!=null&&h.push(Wl(i,y,p))),i=i.return}return h}function ma(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Vy(i,o,l,h,p){for(var y=o._reactName,E=[];l!==null&&l!==h;){var A=l,N=A.alternate,z=A.stateNode;if(N!==null&&N===h)break;A.tag===5&&z!==null&&(A=z,p?(N=vt(l,y),N!=null&&E.unshift(Wl(l,N,A))):p||(N=vt(l,y),N!=null&&E.push(Wl(l,N,A)))),l=l.return}E.length!==0&&i.push({event:o,listeners:E})}var CA=/\r\n?/g,kA=/\u0000|\uFFFD/g;function Fy(i){return(typeof i=="string"?i:""+i).replace(CA,`
`).replace(kA,"")}function Lc(i,o,l){if(o=Fy(o),Fy(i)!==o&&l)throw Error(t(425))}function Vc(){}var Tf=null,If=null;function Sf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,bA=typeof clearTimeout=="function"?clearTimeout:void 0,Uy=typeof Promise=="function"?Promise:void 0,NA=typeof queueMicrotask=="function"?queueMicrotask:typeof Uy<"u"?function(i){return Uy.resolve(null).then(i).catch(xA)}:Af;function xA(i){setTimeout(function(){throw i})}function Rf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),ar(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);ar(o)}function Ui(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function jy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Cr="__reactFiber$"+ga,Gl="__reactProps$"+ga,ri="__reactContainer$"+ga,Pf="__reactEvents$"+ga,OA="__reactListeners$"+ga,DA="__reactHandles$"+ga;function Zs(i){var o=i[Cr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[ri]||l[Cr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=jy(i);i!==null;){if(l=i[Cr])return l;i=jy(i)}return o}i=l,l=i.parentNode}return null}function Kl(i){return i=i[Cr]||i[ri],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ya(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Fc(i){return i[Gl]||null}var Cf=[],va=-1;function ji(i){return{current:i}}function nt(i){0>va||(i.current=Cf[va],Cf[va]=null,va--)}function Je(i,o){va++,Cf[va]=i.current,i.current=o}var Bi={},Xt=ji(Bi),yn=ji(!1),eo=Bi;function _a(i,o){var l=i.type.contextTypes;if(!l)return Bi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=o[y];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function vn(i){return i=i.childContextTypes,i!=null}function Uc(){nt(yn),nt(Xt)}function By(i,o,l){if(Xt.current!==Bi)throw Error(t(168));Je(Xt,o),Je(yn,l)}function zy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,ze(i)||"Unknown",p));return le({},l,h)}function jc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Bi,eo=Xt.current,Je(Xt,i),Je(yn,yn.current),!0}function $y(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=zy(i,o,eo),h.__reactInternalMemoizedMergedChildContext=i,nt(yn),nt(Xt),Je(Xt,i)):nt(yn),Je(yn,l)}var ii=null,Bc=!1,kf=!1;function qy(i){ii===null?ii=[i]:ii.push(i)}function MA(i){Bc=!0,qy(i)}function zi(){if(!kf&&ii!==null){kf=!0;var i=0,o=De;try{var l=ii;for(De=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}ii=null,Bc=!1}catch(p){throw ii!==null&&(ii=ii.slice(i+1)),Jo(Hs,zi),p}finally{De=o,kf=!1}}return null}var wa=[],Ea=0,zc=null,$c=0,qn=[],Hn=0,to=null,si=1,oi="";function no(i,o){wa[Ea++]=$c,wa[Ea++]=zc,zc=i,$c=o}function Hy(i,o,l){qn[Hn++]=si,qn[Hn++]=oi,qn[Hn++]=to,to=i;var h=si;i=oi;var p=32-un(h)-1;h&=~(1<<p),l+=1;var y=32-un(o)+p;if(30<y){var E=p-p%5;y=(h&(1<<E)-1).toString(32),h>>=E,p-=E,si=1<<32-un(o)+p|l<<p|h,oi=y+i}else si=1<<y|l<<p|h,oi=i}function bf(i){i.return!==null&&(no(i,1),Hy(i,1,0))}function Nf(i){for(;i===zc;)zc=wa[--Ea],wa[Ea]=null,$c=wa[--Ea],wa[Ea]=null;for(;i===to;)to=qn[--Hn],qn[Hn]=null,oi=qn[--Hn],qn[Hn]=null,si=qn[--Hn],qn[Hn]=null}var xn=null,On=null,ot=!1,cr=null;function Wy(i,o){var l=Qn(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Gy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,xn=i,On=Ui(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,xn=i,On=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=to!==null?{id:si,overflow:oi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Qn(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,xn=i,On=null,!0):!1;default:return!1}}function xf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Of(i){if(ot){var o=On;if(o){var l=o;if(!Gy(i,o)){if(xf(i))throw Error(t(418));o=Ui(l.nextSibling);var h=xn;o&&Gy(i,o)?Wy(h,l):(i.flags=i.flags&-4097|2,ot=!1,xn=i)}}else{if(xf(i))throw Error(t(418));i.flags=i.flags&-4097|2,ot=!1,xn=i}}}function Ky(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;xn=i}function qc(i){if(i!==xn)return!1;if(!ot)return Ky(i),ot=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Sf(i.type,i.memoizedProps)),o&&(o=On)){if(xf(i))throw Qy(),Error(t(418));for(;o;)Wy(i,o),o=Ui(o.nextSibling)}if(Ky(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){On=Ui(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}On=null}}else On=xn?Ui(i.stateNode.nextSibling):null;return!0}function Qy(){for(var i=On;i;)i=Ui(i.nextSibling)}function Ta(){On=xn=null,ot=!1}function Df(i){cr===null?cr=[i]:cr.push(i)}var LA=te.ReactCurrentBatchConfig;function Ql(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,y=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(E){var A=p.refs;E===null?delete A[y]:A[y]=E},o._stringRef=y,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Hc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Yy(i){var o=i._init;return o(i._payload)}function Xy(i){function o(j,M){if(i){var B=j.deletions;B===null?(j.deletions=[M],j.flags|=16):B.push(M)}}function l(j,M){if(!i)return null;for(;M!==null;)o(j,M),M=M.sibling;return null}function h(j,M){for(j=new Map;M!==null;)M.key!==null?j.set(M.key,M):j.set(M.index,M),M=M.sibling;return j}function p(j,M){return j=Yi(j,M),j.index=0,j.sibling=null,j}function y(j,M,B){return j.index=B,i?(B=j.alternate,B!==null?(B=B.index,B<M?(j.flags|=2,M):B):(j.flags|=2,M)):(j.flags|=1048576,M)}function E(j){return i&&j.alternate===null&&(j.flags|=2),j}function A(j,M,B,ne){return M===null||M.tag!==6?(M=Ap(B,j.mode,ne),M.return=j,M):(M=p(M,B),M.return=j,M)}function N(j,M,B,ne){var pe=B.type;return pe===O?Z(j,M,B.props.children,ne,B.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===yt&&Yy(pe)===M.type)?(ne=p(M,B.props),ne.ref=Ql(j,M,B),ne.return=j,ne):(ne=mh(B.type,B.key,B.props,null,j.mode,ne),ne.ref=Ql(j,M,B),ne.return=j,ne)}function z(j,M,B,ne){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=Rp(B,j.mode,ne),M.return=j,M):(M=p(M,B.children||[]),M.return=j,M)}function Z(j,M,B,ne,pe){return M===null||M.tag!==7?(M=co(B,j.mode,ne,pe),M.return=j,M):(M=p(M,B),M.return=j,M)}function ee(j,M,B){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Ap(""+M,j.mode,B),M.return=j,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ie:return B=mh(M.type,M.key,M.props,null,j.mode,B),B.ref=Ql(j,null,M),B.return=j,B;case ge:return M=Rp(M,j.mode,B),M.return=j,M;case yt:var ne=M._init;return ee(j,ne(M._payload),B)}if(Kr(M)||me(M))return M=co(M,j.mode,B,null),M.return=j,M;Hc(j,M)}return null}function J(j,M,B,ne){var pe=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return pe!==null?null:A(j,M,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ie:return B.key===pe?N(j,M,B,ne):null;case ge:return B.key===pe?z(j,M,B,ne):null;case yt:return pe=B._init,J(j,M,pe(B._payload),ne)}if(Kr(B)||me(B))return pe!==null?null:Z(j,M,B,ne,null);Hc(j,B)}return null}function ue(j,M,B,ne,pe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return j=j.get(B)||null,A(M,j,""+ne,pe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case ie:return j=j.get(ne.key===null?B:ne.key)||null,N(M,j,ne,pe);case ge:return j=j.get(ne.key===null?B:ne.key)||null,z(M,j,ne,pe);case yt:var _e=ne._init;return ue(j,M,B,_e(ne._payload),pe)}if(Kr(ne)||me(ne))return j=j.get(B)||null,Z(M,j,ne,pe,null);Hc(M,ne)}return null}function de(j,M,B,ne){for(var pe=null,_e=null,we=M,Ie=M=0,jt=null;we!==null&&Ie<B.length;Ie++){we.index>Ie?(jt=we,we=null):jt=we.sibling;var je=J(j,we,B[Ie],ne);if(je===null){we===null&&(we=jt);break}i&&we&&je.alternate===null&&o(j,we),M=y(je,M,Ie),_e===null?pe=je:_e.sibling=je,_e=je,we=jt}if(Ie===B.length)return l(j,we),ot&&no(j,Ie),pe;if(we===null){for(;Ie<B.length;Ie++)we=ee(j,B[Ie],ne),we!==null&&(M=y(we,M,Ie),_e===null?pe=we:_e.sibling=we,_e=we);return ot&&no(j,Ie),pe}for(we=h(j,we);Ie<B.length;Ie++)jt=ue(we,j,Ie,B[Ie],ne),jt!==null&&(i&&jt.alternate!==null&&we.delete(jt.key===null?Ie:jt.key),M=y(jt,M,Ie),_e===null?pe=jt:_e.sibling=jt,_e=jt);return i&&we.forEach(function(Xi){return o(j,Xi)}),ot&&no(j,Ie),pe}function fe(j,M,B,ne){var pe=me(B);if(typeof pe!="function")throw Error(t(150));if(B=pe.call(B),B==null)throw Error(t(151));for(var _e=pe=null,we=M,Ie=M=0,jt=null,je=B.next();we!==null&&!je.done;Ie++,je=B.next()){we.index>Ie?(jt=we,we=null):jt=we.sibling;var Xi=J(j,we,je.value,ne);if(Xi===null){we===null&&(we=jt);break}i&&we&&Xi.alternate===null&&o(j,we),M=y(Xi,M,Ie),_e===null?pe=Xi:_e.sibling=Xi,_e=Xi,we=jt}if(je.done)return l(j,we),ot&&no(j,Ie),pe;if(we===null){for(;!je.done;Ie++,je=B.next())je=ee(j,je.value,ne),je!==null&&(M=y(je,M,Ie),_e===null?pe=je:_e.sibling=je,_e=je);return ot&&no(j,Ie),pe}for(we=h(j,we);!je.done;Ie++,je=B.next())je=ue(we,j,Ie,je.value,ne),je!==null&&(i&&je.alternate!==null&&we.delete(je.key===null?Ie:je.key),M=y(je,M,Ie),_e===null?pe=je:_e.sibling=je,_e=je);return i&&we.forEach(function(mR){return o(j,mR)}),ot&&no(j,Ie),pe}function _t(j,M,B,ne){if(typeof B=="object"&&B!==null&&B.type===O&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case ie:e:{for(var pe=B.key,_e=M;_e!==null;){if(_e.key===pe){if(pe=B.type,pe===O){if(_e.tag===7){l(j,_e.sibling),M=p(_e,B.props.children),M.return=j,j=M;break e}}else if(_e.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===yt&&Yy(pe)===_e.type){l(j,_e.sibling),M=p(_e,B.props),M.ref=Ql(j,_e,B),M.return=j,j=M;break e}l(j,_e);break}else o(j,_e);_e=_e.sibling}B.type===O?(M=co(B.props.children,j.mode,ne,B.key),M.return=j,j=M):(ne=mh(B.type,B.key,B.props,null,j.mode,ne),ne.ref=Ql(j,M,B),ne.return=j,j=ne)}return E(j);case ge:e:{for(_e=B.key;M!==null;){if(M.key===_e)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){l(j,M.sibling),M=p(M,B.children||[]),M.return=j,j=M;break e}else{l(j,M);break}else o(j,M);M=M.sibling}M=Rp(B,j.mode,ne),M.return=j,j=M}return E(j);case yt:return _e=B._init,_t(j,M,_e(B._payload),ne)}if(Kr(B))return de(j,M,B,ne);if(me(B))return fe(j,M,B,ne);Hc(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,M!==null&&M.tag===6?(l(j,M.sibling),M=p(M,B),M.return=j,j=M):(l(j,M),M=Ap(B,j.mode,ne),M.return=j,j=M),E(j)):l(j,M)}return _t}var Ia=Xy(!0),Jy=Xy(!1),Wc=ji(null),Gc=null,Sa=null,Mf=null;function Lf(){Mf=Sa=Gc=null}function Vf(i){var o=Wc.current;nt(Wc),i._currentValue=o}function Ff(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function Aa(i,o){Gc=i,Mf=Sa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(_n=!0),i.firstContext=null)}function Wn(i){var o=i._currentValue;if(Mf!==i)if(i={context:i,memoizedValue:o,next:null},Sa===null){if(Gc===null)throw Error(t(308));Sa=i,Gc.dependencies={lanes:0,firstContext:i}}else Sa=Sa.next=i;return o}var ro=null;function Uf(i){ro===null?ro=[i]:ro.push(i)}function Zy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Uf(o)):(l.next=p.next,p.next=l),o.interleaved=l,ai(i,h)}function ai(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var $i=!1;function jf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ev(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function li(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function qi(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ue&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,ai(i,l)}return p=h.interleaved,p===null?(o.next=o,Uf(h)):(o.next=p.next,p.next=o),h.interleaved=o,ai(i,l)}function Kc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Oi(i,l)}}function tv(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=E:y=y.next=E,l=l.next}while(l!==null);y===null?p=y=o:y=y.next=o}else p=y=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Qc(i,o,l,h){var p=i.updateQueue;$i=!1;var y=p.firstBaseUpdate,E=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var N=A,z=N.next;N.next=null,E===null?y=z:E.next=z,E=N;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==E&&(A===null?Z.firstBaseUpdate=z:A.next=z,Z.lastBaseUpdate=N))}if(y!==null){var ee=p.baseState;E=0,Z=z=N=null,A=y;do{var J=A.lane,ue=A.eventTime;if((h&J)===J){Z!==null&&(Z=Z.next={eventTime:ue,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var de=i,fe=A;switch(J=o,ue=l,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){ee=de.call(ue,ee,J);break e}ee=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,J=typeof de=="function"?de.call(ue,ee,J):de,J==null)break e;ee=le({},ee,J);break e;case 2:$i=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,J=p.effects,J===null?p.effects=[A]:J.push(A))}else ue={eventTime:ue,lane:J,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(z=Z=ue,N=ee):Z=Z.next=ue,E|=J;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;J=A,A=J.next,J.next=null,p.lastBaseUpdate=J,p.shared.pending=null}}while(!0);if(Z===null&&(N=ee),p.baseState=N,p.firstBaseUpdate=z,p.lastBaseUpdate=Z,o=p.shared.interleaved,o!==null){p=o;do E|=p.lane,p=p.next;while(p!==o)}else y===null&&(p.shared.lanes=0);oo|=E,i.lanes=E,i.memoizedState=ee}}function nv(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Yl={},kr=ji(Yl),Xl=ji(Yl),Jl=ji(Yl);function io(i){if(i===Yl)throw Error(t(174));return i}function Bf(i,o){switch(Je(Jl,o),Je(Xl,i),Je(kr,Yl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:kt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=kt(o,i)}nt(kr),Je(kr,o)}function Ra(){nt(kr),nt(Xl),nt(Jl)}function rv(i){io(Jl.current);var o=io(kr.current),l=kt(o,i.type);o!==l&&(Je(Xl,i),Je(kr,l))}function zf(i){Xl.current===i&&(nt(kr),nt(Xl))}var at=ji(0);function Yc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var $f=[];function qf(){for(var i=0;i<$f.length;i++)$f[i]._workInProgressVersionPrimary=null;$f.length=0}var Xc=te.ReactCurrentDispatcher,Hf=te.ReactCurrentBatchConfig,so=0,lt=null,Nt=null,Ft=null,Jc=!1,Zl=!1,eu=0,VA=0;function Jt(){throw Error(t(321))}function Wf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!ur(i[l],o[l]))return!1;return!0}function Gf(i,o,l,h,p,y){if(so=y,lt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Xc.current=i===null||i.memoizedState===null?BA:zA,i=l(h,p),Zl){y=0;do{if(Zl=!1,eu=0,25<=y)throw Error(t(301));y+=1,Ft=Nt=null,o.updateQueue=null,Xc.current=$A,i=l(h,p)}while(Zl)}if(Xc.current=th,o=Nt!==null&&Nt.next!==null,so=0,Ft=Nt=lt=null,Jc=!1,o)throw Error(t(300));return i}function Kf(){var i=eu!==0;return eu=0,i}function br(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?lt.memoizedState=Ft=i:Ft=Ft.next=i,Ft}function Gn(){if(Nt===null){var i=lt.alternate;i=i!==null?i.memoizedState:null}else i=Nt.next;var o=Ft===null?lt.memoizedState:Ft.next;if(o!==null)Ft=o,Nt=i;else{if(i===null)throw Error(t(310));Nt=i,i={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ft===null?lt.memoizedState=Ft=i:Ft=Ft.next=i}return Ft}function tu(i,o){return typeof o=="function"?o(i):o}function Qf(i){var o=Gn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Nt,p=h.baseQueue,y=l.pending;if(y!==null){if(p!==null){var E=p.next;p.next=y.next,y.next=E}h.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,h=h.baseState;var A=E=null,N=null,z=y;do{var Z=z.lane;if((so&Z)===Z)N!==null&&(N=N.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:i(h,z.action);else{var ee={lane:Z,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};N===null?(A=N=ee,E=h):N=N.next=ee,lt.lanes|=Z,oo|=Z}z=z.next}while(z!==null&&z!==y);N===null?E=h:N.next=A,ur(h,o.memoizedState)||(_n=!0),o.memoizedState=h,o.baseState=E,o.baseQueue=N,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do y=p.lane,lt.lanes|=y,oo|=y,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function Yf(i){var o=Gn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,y=o.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do y=i(y,E.action),E=E.next;while(E!==p);ur(y,o.memoizedState)||(_n=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),l.lastRenderedState=y}return[y,h]}function iv(){}function sv(i,o){var l=lt,h=Gn(),p=o(),y=!ur(h.memoizedState,p);if(y&&(h.memoizedState=p,_n=!0),h=h.queue,Xf(lv.bind(null,l,h,i),[i]),h.getSnapshot!==o||y||Ft!==null&&Ft.memoizedState.tag&1){if(l.flags|=2048,nu(9,av.bind(null,l,h,p,o),void 0,null),Ut===null)throw Error(t(349));(so&30)!==0||ov(l,o,p)}return p}function ov(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=lt.updateQueue,o===null?(o={lastEffect:null,stores:null},lt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function av(i,o,l,h){o.value=l,o.getSnapshot=h,uv(o)&&cv(i)}function lv(i,o,l){return l(function(){uv(o)&&cv(i)})}function uv(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!ur(i,l)}catch{return!0}}function cv(i){var o=ai(i,1);o!==null&&pr(o,i,1,-1)}function hv(i){var o=br();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tu,lastRenderedState:i},o.queue=i,i=i.dispatch=jA.bind(null,lt,i),[o.memoizedState,i]}function nu(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=lt.updateQueue,o===null?(o={lastEffect:null,stores:null},lt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function dv(){return Gn().memoizedState}function Zc(i,o,l,h){var p=br();lt.flags|=i,p.memoizedState=nu(1|o,l,void 0,h===void 0?null:h)}function eh(i,o,l,h){var p=Gn();h=h===void 0?null:h;var y=void 0;if(Nt!==null){var E=Nt.memoizedState;if(y=E.destroy,h!==null&&Wf(h,E.deps)){p.memoizedState=nu(o,l,y,h);return}}lt.flags|=i,p.memoizedState=nu(1|o,l,y,h)}function fv(i,o){return Zc(8390656,8,i,o)}function Xf(i,o){return eh(2048,8,i,o)}function pv(i,o){return eh(4,2,i,o)}function mv(i,o){return eh(4,4,i,o)}function gv(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function yv(i,o,l){return l=l!=null?l.concat([i]):null,eh(4,4,gv.bind(null,o,i),l)}function Jf(){}function vv(i,o){var l=Gn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Wf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function _v(i,o){var l=Gn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Wf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function wv(i,o,l){return(so&21)===0?(i.baseState&&(i.baseState=!1,_n=!0),i.memoizedState=l):(ur(l,o)||(l=Ks(),lt.lanes|=l,oo|=l,i.baseState=!0),o)}function FA(i,o){var l=De;De=l!==0&&4>l?l:4,i(!0);var h=Hf.transition;Hf.transition={};try{i(!1),o()}finally{De=l,Hf.transition=h}}function Ev(){return Gn().memoizedState}function UA(i,o,l){var h=Ki(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Tv(i))Iv(o,l);else if(l=Zy(i,o,l,h),l!==null){var p=dn();pr(l,i,h,p),Sv(l,o,h)}}function jA(i,o,l){var h=Ki(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Tv(i))Iv(o,p);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var E=o.lastRenderedState,A=y(E,l);if(p.hasEagerState=!0,p.eagerState=A,ur(A,E)){var N=o.interleaved;N===null?(p.next=p,Uf(o)):(p.next=N.next,N.next=p),o.interleaved=p;return}}catch{}finally{}l=Zy(i,o,p,h),l!==null&&(p=dn(),pr(l,i,h,p),Sv(l,o,h))}}function Tv(i){var o=i.alternate;return i===lt||o!==null&&o===lt}function Iv(i,o){Zl=Jc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Sv(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Oi(i,l)}}var th={readContext:Wn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},BA={readContext:Wn,useCallback:function(i,o){return br().memoizedState=[i,o===void 0?null:o],i},useContext:Wn,useEffect:fv,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Zc(4194308,4,gv.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Zc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Zc(4,2,i,o)},useMemo:function(i,o){var l=br();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=br();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=UA.bind(null,lt,i),[h.memoizedState,i]},useRef:function(i){var o=br();return i={current:i},o.memoizedState=i},useState:hv,useDebugValue:Jf,useDeferredValue:function(i){return br().memoizedState=i},useTransition:function(){var i=hv(!1),o=i[0];return i=FA.bind(null,i[1]),br().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=lt,p=br();if(ot){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ut===null)throw Error(t(349));(so&30)!==0||ov(h,o,l)}p.memoizedState=l;var y={value:l,getSnapshot:o};return p.queue=y,fv(lv.bind(null,h,y,i),[i]),h.flags|=2048,nu(9,av.bind(null,h,y,l,o),void 0,null),l},useId:function(){var i=br(),o=Ut.identifierPrefix;if(ot){var l=oi,h=si;l=(h&~(1<<32-un(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=eu++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=VA++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},zA={readContext:Wn,useCallback:vv,useContext:Wn,useEffect:Xf,useImperativeHandle:yv,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:_v,useReducer:Qf,useRef:dv,useState:function(){return Qf(tu)},useDebugValue:Jf,useDeferredValue:function(i){var o=Gn();return wv(o,Nt.memoizedState,i)},useTransition:function(){var i=Qf(tu)[0],o=Gn().memoizedState;return[i,o]},useMutableSource:iv,useSyncExternalStore:sv,useId:Ev,unstable_isNewReconciler:!1},$A={readContext:Wn,useCallback:vv,useContext:Wn,useEffect:Xf,useImperativeHandle:yv,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:_v,useReducer:Yf,useRef:dv,useState:function(){return Yf(tu)},useDebugValue:Jf,useDeferredValue:function(i){var o=Gn();return Nt===null?o.memoizedState=i:wv(o,Nt.memoizedState,i)},useTransition:function(){var i=Yf(tu)[0],o=Gn().memoizedState;return[i,o]},useMutableSource:iv,useSyncExternalStore:sv,useId:Ev,unstable_isNewReconciler:!1};function hr(i,o){if(i&&i.defaultProps){o=le({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Zf(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:le({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var nh={isMounted:function(i){return(i=i._reactInternals)?nr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=dn(),p=Ki(i),y=li(h,p);y.payload=o,l!=null&&(y.callback=l),o=qi(i,y,p),o!==null&&(pr(o,i,p,h),Kc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=dn(),p=Ki(i),y=li(h,p);y.tag=1,y.payload=o,l!=null&&(y.callback=l),o=qi(i,y,p),o!==null&&(pr(o,i,p,h),Kc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=dn(),h=Ki(i),p=li(l,h);p.tag=2,o!=null&&(p.callback=o),o=qi(i,p,h),o!==null&&(pr(o,i,h,l),Kc(o,i,h))}};function Av(i,o,l,h,p,y,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,y,E):o.prototype&&o.prototype.isPureReactComponent?!zl(l,h)||!zl(p,y):!0}function Rv(i,o,l){var h=!1,p=Bi,y=o.contextType;return typeof y=="object"&&y!==null?y=Wn(y):(p=vn(o)?eo:Xt.current,h=o.contextTypes,y=(h=h!=null)?_a(i,p):Bi),o=new o(l,y),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=nh,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=y),o}function Pv(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&nh.enqueueReplaceState(o,o.state,null)}function ep(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},jf(i);var y=o.contextType;typeof y=="object"&&y!==null?p.context=Wn(y):(y=vn(o)?eo:Xt.current,p.context=_a(i,y)),p.state=i.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(Zf(i,o,y,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&nh.enqueueReplaceState(p,p.state,null),Qc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Pa(i,o){try{var l="",h=o;do l+=be(h),h=h.return;while(h);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:i,source:o,stack:p,digest:null}}function tp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function np(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var qA=typeof WeakMap=="function"?WeakMap:Map;function Cv(i,o,l){l=li(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){uh||(uh=!0,yp=h),np(i,o)},l}function kv(i,o,l){l=li(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){np(i,o)}}var y=i.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){np(i,o),typeof h!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})}),l}function bv(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new qA;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=iR.bind(null,i,o,l),o.then(i,i))}function Nv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function xv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=li(-1,1),o.tag=2,qi(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var HA=te.ReactCurrentOwner,_n=!1;function hn(i,o,l,h){o.child=i===null?Jy(o,null,l,h):Ia(o,i.child,l,h)}function Ov(i,o,l,h,p){l=l.render;var y=o.ref;return Aa(o,p),h=Gf(i,o,l,h,y,p),l=Kf(),i!==null&&!_n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ui(i,o,p)):(ot&&l&&bf(o),o.flags|=1,hn(i,o,h,p),o.child)}function Dv(i,o,l,h,p){if(i===null){var y=l.type;return typeof y=="function"&&!Sp(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=y,Mv(i,o,y,h,p)):(i=mh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(y=i.child,(i.lanes&p)===0){var E=y.memoizedProps;if(l=l.compare,l=l!==null?l:zl,l(E,h)&&i.ref===o.ref)return ui(i,o,p)}return o.flags|=1,i=Yi(y,h),i.ref=o.ref,i.return=o,o.child=i}function Mv(i,o,l,h,p){if(i!==null){var y=i.memoizedProps;if(zl(y,h)&&i.ref===o.ref)if(_n=!1,o.pendingProps=h=y,(i.lanes&p)!==0)(i.flags&131072)!==0&&(_n=!0);else return o.lanes=i.lanes,ui(i,o,p)}return rp(i,o,l,h,p)}function Lv(i,o,l){var h=o.pendingProps,p=h.children,y=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(ka,Dn),Dn|=l;else{if((l&1073741824)===0)return i=y!==null?y.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Je(ka,Dn),Dn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:l,Je(ka,Dn),Dn|=h}else y!==null?(h=y.baseLanes|l,o.memoizedState=null):h=l,Je(ka,Dn),Dn|=h;return hn(i,o,p,l),o.child}function Vv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function rp(i,o,l,h,p){var y=vn(l)?eo:Xt.current;return y=_a(o,y),Aa(o,p),l=Gf(i,o,l,h,y,p),h=Kf(),i!==null&&!_n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ui(i,o,p)):(ot&&h&&bf(o),o.flags|=1,hn(i,o,l,p),o.child)}function Fv(i,o,l,h,p){if(vn(l)){var y=!0;jc(o)}else y=!1;if(Aa(o,p),o.stateNode===null)ih(i,o),Rv(o,l,h),ep(o,l,h,p),h=!0;else if(i===null){var E=o.stateNode,A=o.memoizedProps;E.props=A;var N=E.context,z=l.contextType;typeof z=="object"&&z!==null?z=Wn(z):(z=vn(l)?eo:Xt.current,z=_a(o,z));var Z=l.getDerivedStateFromProps,ee=typeof Z=="function"||typeof E.getSnapshotBeforeUpdate=="function";ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==h||N!==z)&&Pv(o,E,h,z),$i=!1;var J=o.memoizedState;E.state=J,Qc(o,h,E,p),N=o.memoizedState,A!==h||J!==N||yn.current||$i?(typeof Z=="function"&&(Zf(o,l,Z,h),N=o.memoizedState),(A=$i||Av(o,l,A,h,J,N,z))?(ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(o.flags|=4194308)):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=N),E.props=h,E.state=N,E.context=z,h=A):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{E=o.stateNode,ev(i,o),A=o.memoizedProps,z=o.type===o.elementType?A:hr(o.type,A),E.props=z,ee=o.pendingProps,J=E.context,N=l.contextType,typeof N=="object"&&N!==null?N=Wn(N):(N=vn(l)?eo:Xt.current,N=_a(o,N));var ue=l.getDerivedStateFromProps;(Z=typeof ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==ee||J!==N)&&Pv(o,E,h,N),$i=!1,J=o.memoizedState,E.state=J,Qc(o,h,E,p);var de=o.memoizedState;A!==ee||J!==de||yn.current||$i?(typeof ue=="function"&&(Zf(o,l,ue,h),de=o.memoizedState),(z=$i||Av(o,l,z,h,J,de,N)||!1)?(Z||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,de,N),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,de,N)),typeof E.componentDidUpdate=="function"&&(o.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&J===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&J===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=de),E.props=h,E.state=de,E.context=N,h=z):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&J===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&J===i.memoizedState||(o.flags|=1024),h=!1)}return ip(i,o,l,h,y,p)}function ip(i,o,l,h,p,y){Vv(i,o);var E=(o.flags&128)!==0;if(!h&&!E)return p&&$y(o,l,!1),ui(i,o,y);h=o.stateNode,HA.current=o;var A=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&E?(o.child=Ia(o,i.child,null,y),o.child=Ia(o,null,A,y)):hn(i,o,A,y),o.memoizedState=h.state,p&&$y(o,l,!0),o.child}function Uv(i){var o=i.stateNode;o.pendingContext?By(i,o.pendingContext,o.pendingContext!==o.context):o.context&&By(i,o.context,!1),Bf(i,o.containerInfo)}function jv(i,o,l,h,p){return Ta(),Df(p),o.flags|=256,hn(i,o,l,h),o.child}var sp={dehydrated:null,treeContext:null,retryLane:0};function op(i){return{baseLanes:i,cachePool:null,transitions:null}}function Bv(i,o,l){var h=o.pendingProps,p=at.current,y=!1,E=(o.flags&128)!==0,A;if((A=E)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(y=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Je(at,p&1),i===null)return Of(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(E=h.children,i=h.fallback,y?(h=o.mode,y=o.child,E={mode:"hidden",children:E},(h&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=E):y=gh(E,h,0,null),i=co(i,h,l,null),y.return=o,i.return=o,y.sibling=i,o.child=y,o.child.memoizedState=op(l),o.memoizedState=sp,i):ap(o,E));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return WA(i,o,E,h,A,p,l);if(y){y=h.fallback,E=o.mode,p=i.child,A=p.sibling;var N={mode:"hidden",children:h.children};return(E&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=N,o.deletions=null):(h=Yi(p,N),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?y=Yi(A,y):(y=co(y,E,l,null),y.flags|=2),y.return=o,h.return=o,h.sibling=y,o.child=h,h=y,y=o.child,E=i.child.memoizedState,E=E===null?op(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=i.childLanes&~l,o.memoizedState=sp,h}return y=i.child,i=y.sibling,h=Yi(y,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function ap(i,o){return o=gh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function rh(i,o,l,h){return h!==null&&Df(h),Ia(o,i.child,null,l),i=ap(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function WA(i,o,l,h,p,y,E){if(l)return o.flags&256?(o.flags&=-257,h=tp(Error(t(422))),rh(i,o,E,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(y=h.fallback,p=o.mode,h=gh({mode:"visible",children:h.children},p,0,null),y=co(y,p,E,null),y.flags|=2,h.return=o,y.return=o,h.sibling=y,o.child=h,(o.mode&1)!==0&&Ia(o,i.child,null,E),o.child.memoizedState=op(E),o.memoizedState=sp,y);if((o.mode&1)===0)return rh(i,o,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,y=Error(t(419)),h=tp(y,h,void 0),rh(i,o,E,h)}if(A=(E&i.childLanes)!==0,_n||A){if(h=Ut,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,ai(i,p),pr(h,i,p,-1))}return Ip(),h=tp(Error(t(421))),rh(i,o,E,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=sR.bind(null,i),p._reactRetry=o,null):(i=y.treeContext,On=Ui(p.nextSibling),xn=o,ot=!0,cr=null,i!==null&&(qn[Hn++]=si,qn[Hn++]=oi,qn[Hn++]=to,si=i.id,oi=i.overflow,to=o),o=ap(o,h.children),o.flags|=4096,o)}function zv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Ff(i.return,o,l)}function lp(i,o,l,h,p){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=p)}function $v(i,o,l){var h=o.pendingProps,p=h.revealOrder,y=h.tail;if(hn(i,o,h.children,l),h=at.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&zv(i,l,o);else if(i.tag===19)zv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Je(at,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Yc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),lp(o,!1,p,l,y);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Yc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}lp(o,!0,l,null,y);break;case"together":lp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ih(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ui(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),oo|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Yi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Yi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function GA(i,o,l){switch(o.tag){case 3:Uv(o),Ta();break;case 5:rv(o);break;case 1:vn(o.type)&&jc(o);break;case 4:Bf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;Je(Wc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Je(at,at.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Bv(i,o,l):(Je(at,at.current&1),i=ui(i,o,l),i!==null?i.sibling:null);Je(at,at.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return $v(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Je(at,at.current),h)break;return null;case 22:case 23:return o.lanes=0,Lv(i,o,l)}return ui(i,o,l)}var qv,up,Hv,Wv;qv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},up=function(){},Hv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,io(kr.current);var y=null;switch(l){case"input":p=Vs(i,p),h=Vs(i,h),y=[];break;case"select":p=le({},p,{value:void 0}),h=le({},h,{value:void 0}),y=[];break;case"textarea":p=yl(i,p),h=yl(i,h),y=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Vc)}Il(l,h);var E;l=null;for(z in p)if(!h.hasOwnProperty(z)&&p.hasOwnProperty(z)&&p[z]!=null)if(z==="style"){var A=p[z];for(E in A)A.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(s.hasOwnProperty(z)?y||(y=[]):(y=y||[]).push(z,null));for(z in h){var N=h[z];if(A=p!=null?p[z]:void 0,h.hasOwnProperty(z)&&N!==A&&(N!=null||A!=null))if(z==="style")if(A){for(E in A)!A.hasOwnProperty(E)||N&&N.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in N)N.hasOwnProperty(E)&&A[E]!==N[E]&&(l||(l={}),l[E]=N[E])}else l||(y||(y=[]),y.push(z,l)),l=N;else z==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,A=A?A.__html:void 0,N!=null&&A!==N&&(y=y||[]).push(z,N)):z==="children"?typeof N!="string"&&typeof N!="number"||(y=y||[]).push(z,""+N):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(s.hasOwnProperty(z)?(N!=null&&z==="onScroll"&&tt("scroll",i),y||A===N||(y=[])):(y=y||[]).push(z,N))}l&&(y=y||[]).push("style",l);var z=y;(o.updateQueue=z)&&(o.flags|=4)}},Wv=function(i,o,l,h){l!==h&&(o.flags|=4)};function ru(i,o){if(!ot)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Zt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function KA(i,o,l){var h=o.pendingProps;switch(Nf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(o),null;case 1:return vn(o.type)&&Uc(),Zt(o),null;case 3:return h=o.stateNode,Ra(),nt(yn),nt(Xt),qf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(qc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,cr!==null&&(wp(cr),cr=null))),up(i,o),Zt(o),null;case 5:zf(o);var p=io(Jl.current);if(l=o.type,i!==null&&o.stateNode!=null)Hv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Zt(o),null}if(i=io(kr.current),qc(o)){h=o.stateNode,l=o.type;var y=o.memoizedProps;switch(h[Cr]=o,h[Gl]=y,i=(o.mode&1)!==0,l){case"dialog":tt("cancel",h),tt("close",h);break;case"iframe":case"object":case"embed":tt("load",h);break;case"video":case"audio":for(p=0;p<ql.length;p++)tt(ql[p],h);break;case"source":tt("error",h);break;case"img":case"image":case"link":tt("error",h),tt("load",h);break;case"details":tt("toggle",h);break;case"input":Bo(h,y),tt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},tt("invalid",h);break;case"textarea":$o(h,y),tt("invalid",h)}Il(l,y),p=null;for(var E in y)if(y.hasOwnProperty(E)){var A=y[E];E==="children"?typeof A=="string"?h.textContent!==A&&(y.suppressHydrationWarning!==!0&&Lc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(y.suppressHydrationWarning!==!0&&Lc(h.textContent,A,i),p=["children",""+A]):s.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&tt("scroll",h)}switch(l){case"input":Gr(h),lc(h,y,!0);break;case"textarea":Gr(h),vl(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=Vc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ct(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[Cr]=o,i[Gl]=h,qv(i,o,!1,!1),o.stateNode=i;e:{switch(E=Sl(l,h),l){case"dialog":tt("cancel",i),tt("close",i),p=h;break;case"iframe":case"object":case"embed":tt("load",i),p=h;break;case"video":case"audio":for(p=0;p<ql.length;p++)tt(ql[p],i);p=h;break;case"source":tt("error",i),p=h;break;case"img":case"image":case"link":tt("error",i),tt("load",i),p=h;break;case"details":tt("toggle",i),p=h;break;case"input":Bo(i,h),p=Vs(i,h),tt("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=le({},h,{value:void 0}),tt("invalid",i);break;case"textarea":$o(i,h),p=yl(i,h),tt("invalid",i);break;default:p=h}Il(l,p),A=p;for(y in A)if(A.hasOwnProperty(y)){var N=A[y];y==="style"?El(i,N):y==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&_l(i,N)):y==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&Ci(i,N):typeof N=="number"&&Ci(i,""+N):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?N!=null&&y==="onScroll"&&tt("scroll",i):N!=null&&G(i,y,N,E))}switch(l){case"input":Gr(i),lc(i,h,!1);break;case"textarea":Gr(i),vl(i);break;case"option":h.value!=null&&i.setAttribute("value",""+$e(h.value));break;case"select":i.multiple=!!h.multiple,y=h.value,y!=null?Qr(i,!!h.multiple,y,!1):h.defaultValue!=null&&Qr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Vc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Zt(o),null;case 6:if(i&&o.stateNode!=null)Wv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=io(Jl.current),io(kr.current),qc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Cr]=o,(y=h.nodeValue!==l)&&(i=xn,i!==null))switch(i.tag){case 3:Lc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Lc(h.nodeValue,l,(i.mode&1)!==0)}y&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Cr]=o,o.stateNode=h}return Zt(o),null;case 13:if(nt(at),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ot&&On!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Qy(),Ta(),o.flags|=98560,y=!1;else if(y=qc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Cr]=o}else Ta(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Zt(o),y=!1}else cr!==null&&(wp(cr),cr=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(at.current&1)!==0?xt===0&&(xt=3):Ip())),o.updateQueue!==null&&(o.flags|=4),Zt(o),null);case 4:return Ra(),up(i,o),i===null&&Hl(o.stateNode.containerInfo),Zt(o),null;case 10:return Vf(o.type._context),Zt(o),null;case 17:return vn(o.type)&&Uc(),Zt(o),null;case 19:if(nt(at),y=o.memoizedState,y===null)return Zt(o),null;if(h=(o.flags&128)!==0,E=y.rendering,E===null)if(h)ru(y,!1);else{if(xt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(E=Yc(i),E!==null){for(o.flags|=128,ru(y,!1),h=E.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)y=l,i=h,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=i,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,i=E.dependencies,y.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Je(at,at.current&1|2),o.child}i=i.sibling}y.tail!==null&&Xe()>ba&&(o.flags|=128,h=!0,ru(y,!1),o.lanes=4194304)}else{if(!h)if(i=Yc(E),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),ru(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!ot)return Zt(o),null}else 2*Xe()-y.renderingStartTime>ba&&l!==1073741824&&(o.flags|=128,h=!0,ru(y,!1),o.lanes=4194304);y.isBackwards?(E.sibling=o.child,o.child=E):(l=y.last,l!==null?l.sibling=E:o.child=E,y.last=E)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=Xe(),o.sibling=null,l=at.current,Je(at,h?l&1|2:l&1),o):(Zt(o),null);case 22:case 23:return Tp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Dn&1073741824)!==0&&(Zt(o),o.subtreeFlags&6&&(o.flags|=8192)):Zt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function QA(i,o){switch(Nf(o),o.tag){case 1:return vn(o.type)&&Uc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Ra(),nt(yn),nt(Xt),qf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return zf(o),null;case 13:if(nt(at),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ta()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return nt(at),null;case 4:return Ra(),null;case 10:return Vf(o.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var sh=!1,en=!1,YA=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ca(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ct(i,o,h)}else l.current=null}function cp(i,o,l){try{l()}catch(h){ct(i,o,h)}}var Gv=!1;function XA(i,o){if(Tf=Li,i=Ay(),pf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var E=0,A=-1,N=-1,z=0,Z=0,ee=i,J=null;t:for(;;){for(var ue;ee!==l||p!==0&&ee.nodeType!==3||(A=E+p),ee!==y||h!==0&&ee.nodeType!==3||(N=E+h),ee.nodeType===3&&(E+=ee.nodeValue.length),(ue=ee.firstChild)!==null;)J=ee,ee=ue;for(;;){if(ee===i)break t;if(J===l&&++z===p&&(A=E),J===y&&++Z===h&&(N=E),(ue=ee.nextSibling)!==null)break;ee=J,J=ee.parentNode}ee=ue}l=A===-1||N===-1?null:{start:A,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(If={focusedElem:i,selectionRange:l},Li=!1,he=o;he!==null;)if(o=he,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,he=i;else for(;he!==null;){o=he;try{var de=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,_t=de.memoizedState,j=o.stateNode,M=j.getSnapshotBeforeUpdate(o.elementType===o.type?fe:hr(o.type,fe),_t);j.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var B=o.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){ct(o,o.return,ne)}if(i=o.sibling,i!==null){i.return=o.return,he=i;break}he=o.return}return de=Gv,Gv=!1,de}function iu(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var y=p.destroy;p.destroy=void 0,y!==void 0&&cp(o,l,y)}p=p.next}while(p!==h)}}function oh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function hp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Kv(i){var o=i.alternate;o!==null&&(i.alternate=null,Kv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Cr],delete o[Gl],delete o[Pf],delete o[OA],delete o[DA])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Qv(i){return i.tag===5||i.tag===3||i.tag===4}function Yv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Qv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function dp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Vc));else if(h!==4&&(i=i.child,i!==null))for(dp(i,o,l),i=i.sibling;i!==null;)dp(i,o,l),i=i.sibling}function fp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(fp(i,o,l),i=i.sibling;i!==null;)fp(i,o,l),i=i.sibling}var Ht=null,dr=!1;function Hi(i,o,l){for(l=l.child;l!==null;)Xv(i,o,l),l=l.sibling}function Xv(i,o,l){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Ws,l)}catch{}switch(l.tag){case 5:en||Ca(l,o);case 6:var h=Ht,p=dr;Ht=null,Hi(i,o,l),Ht=h,dr=p,Ht!==null&&(dr?(i=Ht,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Ht.removeChild(l.stateNode));break;case 18:Ht!==null&&(dr?(i=Ht,l=l.stateNode,i.nodeType===8?Rf(i.parentNode,l):i.nodeType===1&&Rf(i,l),ar(i)):Rf(Ht,l.stateNode));break;case 4:h=Ht,p=dr,Ht=l.stateNode.containerInfo,dr=!0,Hi(i,o,l),Ht=h,dr=p;break;case 0:case 11:case 14:case 15:if(!en&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var y=p,E=y.destroy;y=y.tag,E!==void 0&&((y&2)!==0||(y&4)!==0)&&cp(l,o,E),p=p.next}while(p!==h)}Hi(i,o,l);break;case 1:if(!en&&(Ca(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){ct(l,o,A)}Hi(i,o,l);break;case 21:Hi(i,o,l);break;case 22:l.mode&1?(en=(h=en)||l.memoizedState!==null,Hi(i,o,l),en=h):Hi(i,o,l);break;default:Hi(i,o,l)}}function Jv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new YA),o.forEach(function(h){var p=oR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function fr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var y=i,E=o,A=E;e:for(;A!==null;){switch(A.tag){case 5:Ht=A.stateNode,dr=!1;break e;case 3:Ht=A.stateNode.containerInfo,dr=!0;break e;case 4:Ht=A.stateNode.containerInfo,dr=!0;break e}A=A.return}if(Ht===null)throw Error(t(160));Xv(y,E,p),Ht=null,dr=!1;var N=p.alternate;N!==null&&(N.return=null),p.return=null}catch(z){ct(p,o,z)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Zv(o,i),o=o.sibling}function Zv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(fr(o,i),Nr(i),h&4){try{iu(3,i,i.return),oh(3,i)}catch(fe){ct(i,i.return,fe)}try{iu(5,i,i.return)}catch(fe){ct(i,i.return,fe)}}break;case 1:fr(o,i),Nr(i),h&512&&l!==null&&Ca(l,l.return);break;case 5:if(fr(o,i),Nr(i),h&512&&l!==null&&Ca(l,l.return),i.flags&32){var p=i.stateNode;try{Ci(p,"")}catch(fe){ct(i,i.return,fe)}}if(h&4&&(p=i.stateNode,p!=null)){var y=i.memoizedProps,E=l!==null?l.memoizedProps:y,A=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{A==="input"&&y.type==="radio"&&y.name!=null&&ml(p,y),Sl(A,E);var z=Sl(A,y);for(E=0;E<N.length;E+=2){var Z=N[E],ee=N[E+1];Z==="style"?El(p,ee):Z==="dangerouslySetInnerHTML"?_l(p,ee):Z==="children"?Ci(p,ee):G(p,Z,ee,z)}switch(A){case"input":gl(p,y);break;case"textarea":qo(p,y);break;case"select":var J=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var ue=y.value;ue!=null?Qr(p,!!y.multiple,ue,!1):J!==!!y.multiple&&(y.defaultValue!=null?Qr(p,!!y.multiple,y.defaultValue,!0):Qr(p,!!y.multiple,y.multiple?[]:"",!1))}p[Gl]=y}catch(fe){ct(i,i.return,fe)}}break;case 6:if(fr(o,i),Nr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,y=i.memoizedProps;try{p.nodeValue=y}catch(fe){ct(i,i.return,fe)}}break;case 3:if(fr(o,i),Nr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{ar(o.containerInfo)}catch(fe){ct(i,i.return,fe)}break;case 4:fr(o,i),Nr(i);break;case 13:fr(o,i),Nr(i),p=i.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(gp=Xe())),h&4&&Jv(i);break;case 22:if(Z=l!==null&&l.memoizedState!==null,i.mode&1?(en=(z=en)||Z,fr(o,i),en=z):fr(o,i),Nr(i),h&8192){if(z=i.memoizedState!==null,(i.stateNode.isHidden=z)&&!Z&&(i.mode&1)!==0)for(he=i,Z=i.child;Z!==null;){for(ee=he=Z;he!==null;){switch(J=he,ue=J.child,J.tag){case 0:case 11:case 14:case 15:iu(4,J,J.return);break;case 1:Ca(J,J.return);var de=J.stateNode;if(typeof de.componentWillUnmount=="function"){h=J,l=J.return;try{o=h,de.props=o.memoizedProps,de.state=o.memoizedState,de.componentWillUnmount()}catch(fe){ct(h,l,fe)}}break;case 5:Ca(J,J.return);break;case 22:if(J.memoizedState!==null){n_(ee);continue}}ue!==null?(ue.return=J,he=ue):n_(ee)}Z=Z.sibling}e:for(Z=null,ee=i;;){if(ee.tag===5){if(Z===null){Z=ee;try{p=ee.stateNode,z?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(A=ee.stateNode,N=ee.memoizedProps.style,E=N!=null&&N.hasOwnProperty("display")?N.display:null,A.style.display=wl("display",E))}catch(fe){ct(i,i.return,fe)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=z?"":ee.memoizedProps}catch(fe){ct(i,i.return,fe)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===i)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===i)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===i)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:fr(o,i),Nr(i),h&4&&Jv(i);break;case 21:break;default:fr(o,i),Nr(i)}}function Nr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Qv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Ci(p,""),h.flags&=-33);var y=Yv(i);fp(i,y,p);break;case 3:case 4:var E=h.stateNode.containerInfo,A=Yv(i);dp(i,A,E);break;default:throw Error(t(161))}}catch(N){ct(i,i.return,N)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function JA(i,o,l){he=i,e_(i)}function e_(i,o,l){for(var h=(i.mode&1)!==0;he!==null;){var p=he,y=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||sh;if(!E){var A=p.alternate,N=A!==null&&A.memoizedState!==null||en;A=sh;var z=en;if(sh=E,(en=N)&&!z)for(he=p;he!==null;)E=he,N=E.child,E.tag===22&&E.memoizedState!==null?r_(p):N!==null?(N.return=E,he=N):r_(p);for(;y!==null;)he=y,e_(y),y=y.sibling;he=p,sh=A,en=z}t_(i)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,he=y):t_(i)}}function t_(i){for(;he!==null;){var o=he;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:en||oh(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!en)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:hr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&nv(o,y,h);break;case 3:var E=o.updateQueue;if(E!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}nv(o,E,l)}break;case 5:var A=o.stateNode;if(l===null&&o.flags&4){l=A;var N=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var z=o.alternate;if(z!==null){var Z=z.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&ar(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}en||o.flags&512&&hp(o)}catch(J){ct(o,o.return,J)}}if(o===i){he=null;break}if(l=o.sibling,l!==null){l.return=o.return,he=l;break}he=o.return}}function n_(i){for(;he!==null;){var o=he;if(o===i){he=null;break}var l=o.sibling;if(l!==null){l.return=o.return,he=l;break}he=o.return}}function r_(i){for(;he!==null;){var o=he;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{oh(4,o)}catch(N){ct(o,l,N)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(N){ct(o,p,N)}}var y=o.return;try{hp(o)}catch(N){ct(o,y,N)}break;case 5:var E=o.return;try{hp(o)}catch(N){ct(o,E,N)}}}catch(N){ct(o,o.return,N)}if(o===i){he=null;break}var A=o.sibling;if(A!==null){A.return=o.return,he=A;break}he=o.return}}var ZA=Math.ceil,ah=te.ReactCurrentDispatcher,pp=te.ReactCurrentOwner,Kn=te.ReactCurrentBatchConfig,Ue=0,Ut=null,It=null,Wt=0,Dn=0,ka=ji(0),xt=0,su=null,oo=0,lh=0,mp=0,ou=null,wn=null,gp=0,ba=1/0,ci=null,uh=!1,yp=null,Wi=null,ch=!1,Gi=null,hh=0,au=0,vp=null,dh=-1,fh=0;function dn(){return(Ue&6)!==0?Xe():dh!==-1?dh:dh=Xe()}function Ki(i){return(i.mode&1)===0?1:(Ue&2)!==0&&Wt!==0?Wt&-Wt:LA.transition!==null?(fh===0&&(fh=Ks()),fh):(i=De,i!==0||(i=window.event,i=i===void 0?16:Ml(i.type)),i)}function pr(i,o,l,h){if(50<au)throw au=0,vp=null,Error(t(185));xi(i,l,h),((Ue&2)===0||i!==Ut)&&(i===Ut&&((Ue&2)===0&&(lh|=l),xt===4&&Qi(i,Wt)),En(i,h),l===1&&Ue===0&&(o.mode&1)===0&&(ba=Xe()+500,Bc&&zi()))}function En(i,o){var l=i.callbackNode;Jr(i,o);var h=Gs(i,i===Ut?Wt:0);if(h===0)l!==null&&bl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&bl(l),o===1)i.tag===0?MA(s_.bind(null,i)):qy(s_.bind(null,i)),NA(function(){(Ue&6)===0&&zi()}),l=null;else{switch(Di(h)){case 1:l=Hs;break;case 4:l=ki;break;case 16:l=Bn;break;case 536870912:l=fc;break;default:l=Bn}l=f_(l,i_.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function i_(i,o){if(dh=-1,fh=0,(Ue&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Na()&&i.callbackNode!==l)return null;var h=Gs(i,i===Ut?Wt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=ph(i,h);else{o=h;var p=Ue;Ue|=2;var y=a_();(Ut!==i||Wt!==o)&&(ci=null,ba=Xe()+500,lo(i,o));do try{nR();break}catch(A){o_(i,A)}while(!0);Lf(),ah.current=y,Ue=p,It!==null?o=0:(Ut=null,Wt=0,o=xt)}if(o!==0){if(o===2&&(p=kn(i),p!==0&&(h=p,o=_p(i,p))),o===1)throw l=su,lo(i,0),Qi(i,h),En(i,Xe()),l;if(o===6)Qi(i,h);else{if(p=i.current.alternate,(h&30)===0&&!eR(p)&&(o=ph(i,h),o===2&&(y=kn(i),y!==0&&(h=y,o=_p(i,y))),o===1))throw l=su,lo(i,0),Qi(i,h),En(i,Xe()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:uo(i,wn,ci);break;case 3:if(Qi(i,h),(h&130023424)===h&&(o=gp+500-Xe(),10<o)){if(Gs(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){dn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Af(uo.bind(null,i,wn,ci),o);break}uo(i,wn,ci);break;case 4:if(Qi(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var E=31-un(h);y=1<<E,E=o[E],E>p&&(p=E),h&=~y}if(h=p,h=Xe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*ZA(h/1960))-h,10<h){i.timeoutHandle=Af(uo.bind(null,i,wn,ci),h);break}uo(i,wn,ci);break;case 5:uo(i,wn,ci);break;default:throw Error(t(329))}}}return En(i,Xe()),i.callbackNode===l?i_.bind(null,i):null}function _p(i,o){var l=ou;return i.current.memoizedState.isDehydrated&&(lo(i,o).flags|=256),i=ph(i,o),i!==2&&(o=wn,wn=l,o!==null&&wp(o)),i}function wp(i){wn===null?wn=i:wn.push.apply(wn,i)}function eR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],y=p.getSnapshot;p=p.value;try{if(!ur(y(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Qi(i,o){for(o&=~mp,o&=~lh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-un(o),h=1<<l;i[l]=-1,o&=~h}}function s_(i){if((Ue&6)!==0)throw Error(t(327));Na();var o=Gs(i,0);if((o&1)===0)return En(i,Xe()),null;var l=ph(i,o);if(i.tag!==0&&l===2){var h=kn(i);h!==0&&(o=h,l=_p(i,h))}if(l===1)throw l=su,lo(i,0),Qi(i,o),En(i,Xe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,uo(i,wn,ci),En(i,Xe()),null}function Ep(i,o){var l=Ue;Ue|=1;try{return i(o)}finally{Ue=l,Ue===0&&(ba=Xe()+500,Bc&&zi())}}function ao(i){Gi!==null&&Gi.tag===0&&(Ue&6)===0&&Na();var o=Ue;Ue|=1;var l=Kn.transition,h=De;try{if(Kn.transition=null,De=1,i)return i()}finally{De=h,Kn.transition=l,Ue=o,(Ue&6)===0&&zi()}}function Tp(){Dn=ka.current,nt(ka)}function lo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,bA(l)),It!==null)for(l=It.return;l!==null;){var h=l;switch(Nf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Uc();break;case 3:Ra(),nt(yn),nt(Xt),qf();break;case 5:zf(h);break;case 4:Ra();break;case 13:nt(at);break;case 19:nt(at);break;case 10:Vf(h.type._context);break;case 22:case 23:Tp()}l=l.return}if(Ut=i,It=i=Yi(i.current,null),Wt=Dn=o,xt=0,su=null,mp=lh=oo=0,wn=ou=null,ro!==null){for(o=0;o<ro.length;o++)if(l=ro[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,y=l.pending;if(y!==null){var E=y.next;y.next=p,h.next=E}l.pending=h}ro=null}return i}function o_(i,o){do{var l=It;try{if(Lf(),Xc.current=th,Jc){for(var h=lt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Jc=!1}if(so=0,Ft=Nt=lt=null,Zl=!1,eu=0,pp.current=null,l===null||l.return===null){xt=1,su=o,It=null;break}e:{var y=i,E=l.return,A=l,N=o;if(o=Wt,A.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var z=N,Z=A,ee=Z.tag;if((Z.mode&1)===0&&(ee===0||ee===11||ee===15)){var J=Z.alternate;J?(Z.updateQueue=J.updateQueue,Z.memoizedState=J.memoizedState,Z.lanes=J.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var ue=Nv(E);if(ue!==null){ue.flags&=-257,xv(ue,E,A,y,o),ue.mode&1&&bv(y,z,o),o=ue,N=z;var de=o.updateQueue;if(de===null){var fe=new Set;fe.add(N),o.updateQueue=fe}else de.add(N);break e}else{if((o&1)===0){bv(y,z,o),Ip();break e}N=Error(t(426))}}else if(ot&&A.mode&1){var _t=Nv(E);if(_t!==null){(_t.flags&65536)===0&&(_t.flags|=256),xv(_t,E,A,y,o),Df(Pa(N,A));break e}}y=N=Pa(N,A),xt!==4&&(xt=2),ou===null?ou=[y]:ou.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var j=Cv(y,N,o);tv(y,j);break e;case 1:A=N;var M=y.type,B=y.stateNode;if((y.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Wi===null||!Wi.has(B)))){y.flags|=65536,o&=-o,y.lanes|=o;var ne=kv(y,A,o);tv(y,ne);break e}}y=y.return}while(y!==null)}u_(l)}catch(pe){o=pe,It===l&&l!==null&&(It=l=l.return);continue}break}while(!0)}function a_(){var i=ah.current;return ah.current=th,i===null?th:i}function Ip(){(xt===0||xt===3||xt===2)&&(xt=4),Ut===null||(oo&268435455)===0&&(lh&268435455)===0||Qi(Ut,Wt)}function ph(i,o){var l=Ue;Ue|=2;var h=a_();(Ut!==i||Wt!==o)&&(ci=null,lo(i,o));do try{tR();break}catch(p){o_(i,p)}while(!0);if(Lf(),Ue=l,ah.current=h,It!==null)throw Error(t(261));return Ut=null,Wt=0,xt}function tR(){for(;It!==null;)l_(It)}function nR(){for(;It!==null&&!hc();)l_(It)}function l_(i){var o=d_(i.alternate,i,Dn);i.memoizedProps=i.pendingProps,o===null?u_(i):It=o,pp.current=null}function u_(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=KA(l,o,Dn),l!==null){It=l;return}}else{if(l=QA(l,o),l!==null){l.flags&=32767,It=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{xt=6,It=null;return}}if(o=o.sibling,o!==null){It=o;return}It=o=i}while(o!==null);xt===0&&(xt=5)}function uo(i,o,l){var h=De,p=Kn.transition;try{Kn.transition=null,De=1,rR(i,o,l,h)}finally{Kn.transition=p,De=h}return null}function rR(i,o,l,h){do Na();while(Gi!==null);if((Ue&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var y=l.lanes|l.childLanes;if(Ke(i,y),i===Ut&&(It=Ut=null,Wt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ch||(ch=!0,f_(Bn,function(){return Na(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=Kn.transition,Kn.transition=null;var E=De;De=1;var A=Ue;Ue|=4,pp.current=null,XA(i,l),Zv(l,i),IA(If),Li=!!Tf,If=Tf=null,i.current=l,JA(l),of(),Ue=A,De=E,Kn.transition=y}else i.current=l;if(ch&&(ch=!1,Gi=i,hh=p),y=i.pendingLanes,y===0&&(Wi=null),pc(l.stateNode),En(i,Xe()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(uh)throw uh=!1,i=yp,yp=null,i;return(hh&1)!==0&&i.tag!==0&&Na(),y=i.pendingLanes,(y&1)!==0?i===vp?au++:(au=0,vp=i):au=0,zi(),null}function Na(){if(Gi!==null){var i=Di(hh),o=Kn.transition,l=De;try{if(Kn.transition=null,De=16>i?16:i,Gi===null)var h=!1;else{if(i=Gi,Gi=null,hh=0,(Ue&6)!==0)throw Error(t(331));var p=Ue;for(Ue|=4,he=i.current;he!==null;){var y=he,E=y.child;if((he.flags&16)!==0){var A=y.deletions;if(A!==null){for(var N=0;N<A.length;N++){var z=A[N];for(he=z;he!==null;){var Z=he;switch(Z.tag){case 0:case 11:case 15:iu(8,Z,y)}var ee=Z.child;if(ee!==null)ee.return=Z,he=ee;else for(;he!==null;){Z=he;var J=Z.sibling,ue=Z.return;if(Kv(Z),Z===z){he=null;break}if(J!==null){J.return=ue,he=J;break}he=ue}}}var de=y.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var _t=fe.sibling;fe.sibling=null,fe=_t}while(fe!==null)}}he=y}}if((y.subtreeFlags&2064)!==0&&E!==null)E.return=y,he=E;else e:for(;he!==null;){if(y=he,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:iu(9,y,y.return)}var j=y.sibling;if(j!==null){j.return=y.return,he=j;break e}he=y.return}}var M=i.current;for(he=M;he!==null;){E=he;var B=E.child;if((E.subtreeFlags&2064)!==0&&B!==null)B.return=E,he=B;else e:for(E=M;he!==null;){if(A=he,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:oh(9,A)}}catch(pe){ct(A,A.return,pe)}if(A===E){he=null;break e}var ne=A.sibling;if(ne!==null){ne.return=A.return,he=ne;break e}he=A.return}}if(Ue=p,zi(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Ws,i)}catch{}h=!0}return h}finally{De=l,Kn.transition=o}}return!1}function c_(i,o,l){o=Pa(l,o),o=Cv(i,o,1),i=qi(i,o,1),o=dn(),i!==null&&(xi(i,1,o),En(i,o))}function ct(i,o,l){if(i.tag===3)c_(i,i,l);else for(;o!==null;){if(o.tag===3){c_(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Wi===null||!Wi.has(h))){i=Pa(l,i),i=kv(o,i,1),o=qi(o,i,1),i=dn(),o!==null&&(xi(o,1,i),En(o,i));break}}o=o.return}}function iR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=dn(),i.pingedLanes|=i.suspendedLanes&l,Ut===i&&(Wt&l)===l&&(xt===4||xt===3&&(Wt&130023424)===Wt&&500>Xe()-gp?lo(i,0):mp|=l),En(i,o)}function h_(i,o){o===0&&((i.mode&1)===0?o=1:(o=ea,ea<<=1,(ea&130023424)===0&&(ea=4194304)));var l=dn();i=ai(i,o),i!==null&&(xi(i,o,l),En(i,l))}function sR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),h_(i,l)}function oR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),h_(i,l)}var d_;d_=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||yn.current)_n=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return _n=!1,GA(i,o,l);_n=(i.flags&131072)!==0}else _n=!1,ot&&(o.flags&1048576)!==0&&Hy(o,$c,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;ih(i,o),i=o.pendingProps;var p=_a(o,Xt.current);Aa(o,l),p=Gf(null,o,h,i,p,l);var y=Kf();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,vn(h)?(y=!0,jc(o)):y=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,jf(o),p.updater=nh,o.stateNode=p,p._reactInternals=o,ep(o,h,i,l),o=ip(null,o,h,!0,y,l)):(o.tag=0,ot&&y&&bf(o),hn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(ih(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=lR(h),i=hr(h,i),p){case 0:o=rp(null,o,h,i,l);break e;case 1:o=Fv(null,o,h,i,l);break e;case 11:o=Ov(null,o,h,i,l);break e;case 14:o=Dv(null,o,h,hr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:hr(h,p),rp(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:hr(h,p),Fv(i,o,h,p,l);case 3:e:{if(Uv(o),i===null)throw Error(t(387));h=o.pendingProps,y=o.memoizedState,p=y.element,ev(i,o),Qc(o,h,null,l);var E=o.memoizedState;if(h=E.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){p=Pa(Error(t(423)),o),o=jv(i,o,h,l,p);break e}else if(h!==p){p=Pa(Error(t(424)),o),o=jv(i,o,h,l,p);break e}else for(On=Ui(o.stateNode.containerInfo.firstChild),xn=o,ot=!0,cr=null,l=Jy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ta(),h===p){o=ui(i,o,l);break e}hn(i,o,h,l)}o=o.child}return o;case 5:return rv(o),i===null&&Of(o),h=o.type,p=o.pendingProps,y=i!==null?i.memoizedProps:null,E=p.children,Sf(h,p)?E=null:y!==null&&Sf(h,y)&&(o.flags|=32),Vv(i,o),hn(i,o,E,l),o.child;case 6:return i===null&&Of(o),null;case 13:return Bv(i,o,l);case 4:return Bf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Ia(o,null,h,l):hn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:hr(h,p),Ov(i,o,h,p,l);case 7:return hn(i,o,o.pendingProps,l),o.child;case 8:return hn(i,o,o.pendingProps.children,l),o.child;case 12:return hn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,y=o.memoizedProps,E=p.value,Je(Wc,h._currentValue),h._currentValue=E,y!==null)if(ur(y.value,E)){if(y.children===p.children&&!yn.current){o=ui(i,o,l);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var A=y.dependencies;if(A!==null){E=y.child;for(var N=A.firstContext;N!==null;){if(N.context===h){if(y.tag===1){N=li(-1,l&-l),N.tag=2;var z=y.updateQueue;if(z!==null){z=z.shared;var Z=z.pending;Z===null?N.next=N:(N.next=Z.next,Z.next=N),z.pending=N}}y.lanes|=l,N=y.alternate,N!==null&&(N.lanes|=l),Ff(y.return,l,o),A.lanes|=l;break}N=N.next}}else if(y.tag===10)E=y.type===o.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(t(341));E.lanes|=l,A=E.alternate,A!==null&&(A.lanes|=l),Ff(E,l,o),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===o){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}hn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,Aa(o,l),p=Wn(p),h=h(p),o.flags|=1,hn(i,o,h,l),o.child;case 14:return h=o.type,p=hr(h,o.pendingProps),p=hr(h.type,p),Dv(i,o,h,p,l);case 15:return Mv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:hr(h,p),ih(i,o),o.tag=1,vn(h)?(i=!0,jc(o)):i=!1,Aa(o,l),Rv(o,h,p),ep(o,h,p,l),ip(null,o,h,!0,i,l);case 19:return $v(i,o,l);case 22:return Lv(i,o,l)}throw Error(t(156,o.tag))};function f_(i,o){return Jo(i,o)}function aR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(i,o,l,h){return new aR(i,o,l,h)}function Sp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function lR(i){if(typeof i=="function")return Sp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===Pt)return 14}return 2}function Yi(i,o){var l=i.alternate;return l===null?(l=Qn(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function mh(i,o,l,h,p,y){var E=2;if(h=i,typeof i=="function")Sp(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case O:return co(l.children,p,y,o);case S:E=8,p|=8;break;case R:return i=Qn(12,l,o,p|2),i.elementType=R,i.lanes=y,i;case C:return i=Qn(13,l,o,p),i.elementType=C,i.lanes=y,i;case Qe:return i=Qn(19,l,o,p),i.elementType=Qe,i.lanes=y,i;case Be:return gh(l,p,y,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:E=10;break e;case V:E=9;break e;case L:E=11;break e;case Pt:E=14;break e;case yt:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Qn(E,l,o,p),o.elementType=i,o.type=h,o.lanes=y,o}function co(i,o,l,h){return i=Qn(7,i,h,o),i.lanes=l,i}function gh(i,o,l,h){return i=Qn(22,i,h,o),i.elementType=Be,i.lanes=l,i.stateNode={isHidden:!1},i}function Ap(i,o,l){return i=Qn(6,i,null,o),i.lanes=l,i}function Rp(i,o,l){return o=Qn(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function uR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Pp(i,o,l,h,p,y,E,A,N){return i=new uR(i,o,l,A,N),o===1?(o=1,y===!0&&(o|=8)):o=0,y=Qn(3,null,null,o),i.current=y,y.stateNode=i,y.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},jf(y),i}function cR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function p_(i){if(!i)return Bi;i=i._reactInternals;e:{if(nr(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(vn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(vn(l))return zy(i,l,o)}return o}function m_(i,o,l,h,p,y,E,A,N){return i=Pp(l,h,!0,i,p,y,E,A,N),i.context=p_(null),l=i.current,h=dn(),p=Ki(l),y=li(h,p),y.callback=o??null,qi(l,y,p),i.current.lanes=p,xi(i,p,h),En(i,h),i}function yh(i,o,l,h){var p=o.current,y=dn(),E=Ki(p);return l=p_(l),o.context===null?o.context=l:o.pendingContext=l,o=li(y,E),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=qi(p,o,E),i!==null&&(pr(i,p,E,y),Kc(i,p,E)),E}function vh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function g_(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Cp(i,o){g_(i,o),(i=i.alternate)&&g_(i,o)}function hR(){return null}var y_=typeof reportError=="function"?reportError:function(i){console.error(i)};function kp(i){this._internalRoot=i}_h.prototype.render=kp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));yh(i,o,null,null)},_h.prototype.unmount=kp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;ao(function(){yh(null,i,null,null)}),o[ri]=null}};function _h(i){this._internalRoot=i}_h.prototype.unstable_scheduleHydration=function(i){if(i){var o=_c();i={blockedOn:null,target:i,priority:o};for(var l=0;l<Sr.length&&o!==0&&o<Sr[l].priority;l++);Sr.splice(l,0,i),l===0&&Tc(i)}};function bp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function wh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function v_(){}function dR(i,o,l,h,p){if(p){if(typeof h=="function"){var y=h;h=function(){var z=vh(E);y.call(z)}}var E=m_(o,h,i,0,null,!1,!1,"",v_);return i._reactRootContainer=E,i[ri]=E.current,Hl(i.nodeType===8?i.parentNode:i),ao(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var z=vh(N);A.call(z)}}var N=Pp(i,0,!1,null,null,!1,!1,"",v_);return i._reactRootContainer=N,i[ri]=N.current,Hl(i.nodeType===8?i.parentNode:i),ao(function(){yh(o,N,l,h)}),N}function Eh(i,o,l,h,p){var y=l._reactRootContainer;if(y){var E=y;if(typeof p=="function"){var A=p;p=function(){var N=vh(E);A.call(N)}}yh(o,E,i,p)}else E=dR(l,o,i,p,h);return vh(E)}yc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=bi(o.pendingLanes);l!==0&&(Oi(o,l|1),En(o,Xe()),(Ue&6)===0&&(ba=Xe()+500,zi()))}break;case 13:ao(function(){var h=ai(i,1);if(h!==null){var p=dn();pr(h,i,1,p)}}),Cp(i,1)}},ta=function(i){if(i.tag===13){var o=ai(i,134217728);if(o!==null){var l=dn();pr(o,i,134217728,l)}Cp(i,134217728)}},vc=function(i){if(i.tag===13){var o=Ki(i),l=ai(i,o);if(l!==null){var h=dn();pr(l,i,o,h)}Cp(i,o)}},_c=function(){return De},wc=function(i,o){var l=De;try{return De=i,o()}finally{De=l}},Wo=function(i,o,l){switch(o){case"input":if(gl(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Fc(h);if(!p)throw Error(t(90));jo(h),gl(h,p)}}}break;case"textarea":qo(i,l);break;case"select":o=l.value,o!=null&&Qr(i,!!l.multiple,o,!1)}},Bs=Ep,Rl=ao;var fR={usingClientEntryPoint:!1,Events:[Kl,ya,Fc,Tr,Al,Ep]},lu={findFiberByHostInstance:Zs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pR={bundleType:lu.bundleType,version:lu.version,rendererPackageName:lu.rendererPackageName,rendererConfig:lu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=kl(i),i===null?null:i.stateNode},findFiberByHostInstance:lu.findFiberByHostInstance||hR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Th.isDisabled&&Th.supportsFiber)try{Ws=Th.inject(pR),Cn=Th}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fR,Tn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(o))throw Error(t(200));return cR(i,o,null,l)},Tn.createRoot=function(i,o){if(!bp(i))throw Error(t(299));var l=!1,h="",p=y_;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Pp(i,1,!1,null,null,l,!1,h,p),i[ri]=o.current,Hl(i.nodeType===8?i.parentNode:i),new kp(o)},Tn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=kl(o),i=i===null?null:i.stateNode,i},Tn.flushSync=function(i){return ao(i)},Tn.hydrate=function(i,o,l){if(!wh(o))throw Error(t(200));return Eh(null,i,o,!0,l)},Tn.hydrateRoot=function(i,o,l){if(!bp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,y="",E=y_;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),o=m_(o,null,i,1,l??null,p,!1,y,E),i[ri]=o.current,Hl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new _h(o)},Tn.render=function(i,o,l){if(!wh(o))throw Error(t(200));return Eh(null,i,o,!1,l)},Tn.unmountComponentAtNode=function(i){if(!wh(i))throw Error(t(40));return i._reactRootContainer?(ao(function(){Eh(null,null,i,!1,function(){i._reactRootContainer=null,i[ri]=null})}),!0):!1},Tn.unstable_batchedUpdates=Ep,Tn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!wh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Eh(i,o,l,!1,h)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var P_;function u0(){if(P_)return Dp.exports;P_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Dp.exports=IR(),Dp.exports}var C_;function SR(){if(C_)return Sh;C_=1;var n=u0();return Sh.createRoot=n.createRoot,Sh.hydrateRoot=n.hydrateRoot,Sh}var AR=SR();const RR=a0(AR);var OF=u0();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ku(){return ku=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ku.apply(this,arguments)}var ms;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(ms||(ms={}));const k_="popstate";function PR(n){n===void 0&&(n={});function e(r,s){let{pathname:a,search:u,hash:d}=r.location;return am("",{pathname:a,search:u,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Yh(s)}return kR(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Qm(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CR(){return Math.random().toString(36).substr(2,8)}function b_(n,e){return{usr:n.state,key:n.key,idx:e}}function am(n,e,t,r){return t===void 0&&(t=null),ku({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ol(e):e,{state:t,key:e&&e.key||r||CR()})}function Yh(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ol(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function kR(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,u=s.history,d=ms.Pop,f=null,g=v();g==null&&(g=0,u.replaceState(ku({},u.state,{idx:g}),""));function v(){return(u.state||{idx:null}).idx}function w(){d=ms.Pop;let k=v(),q=k==null?null:k-g;g=k,f&&f({action:d,location:x.location,delta:q})}function T(k,q){d=ms.Push;let X=am(x.location,k,q);g=v()+1;let G=b_(X,g),te=x.createHref(X);try{u.pushState(G,"",te)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;s.location.assign(te)}a&&f&&f({action:d,location:x.location,delta:1})}function P(k,q){d=ms.Replace;let X=am(x.location,k,q);g=v();let G=b_(X,g),te=x.createHref(X);u.replaceState(G,"",te),a&&f&&f({action:d,location:x.location,delta:0})}function D(k){let q=s.location.origin!=="null"?s.location.origin:s.location.href,X=typeof k=="string"?k:Yh(k);return X=X.replace(/ $/,"%20"),Et(q,"No window.location.(origin|href) available to create URL for href: "+X),new URL(X,q)}let x={get action(){return d},get location(){return n(s,u)},listen(k){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(k_,w),f=k,()=>{s.removeEventListener(k_,w),f=null}},createHref(k){return e(s,k)},createURL:D,encodeLocation(k){let q=D(k);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:T,replace:P,go(k){return u.go(k)}};return x}var N_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(N_||(N_={}));function bR(n,e,t){return t===void 0&&(t="/"),NR(n,e,t)}function NR(n,e,t,r){let s=typeof e=="string"?ol(e):e,a=Ym(s.pathname||"/",t);if(a==null)return null;let u=c0(n);xR(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let g=qR(a);d=BR(u[f],g)}return d}function c0(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(a,u,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(Et(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let g=ys([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(Et(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),c0(a.children,e,v,g)),!(a.path==null&&!a.index)&&e.push({path:g,score:UR(g,a.index),routesMeta:v})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))s(a,u);else for(let f of h0(a.path))s(a,u,f)}),e}function h0(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let u=h0(r.join("/")),d=[];return d.push(...u.map(f=>f===""?a:[a,f].join("/"))),s&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function xR(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:jR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const OR=/^:[\w-]+$/,DR=3,MR=2,LR=1,VR=10,FR=-2,x_=n=>n==="*";function UR(n,e){let t=n.split("/"),r=t.length;return t.some(x_)&&(r+=FR),e&&(r+=MR),t.filter(s=>!x_(s)).reduce((s,a)=>s+(OR.test(a)?DR:a===""?LR:VR),r)}function jR(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function BR(n,e,t){let{routesMeta:r}=n,s={},a="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],g=d===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",w=zR({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},v),T=f.route;if(!w)return null;Object.assign(s,w.params),u.push({params:s,pathname:ys([a,w.pathname]),pathnameBase:QR(ys([a,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(a=ys([a,w.pathnameBase]))}return u}function zR(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=$R(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],u=a.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:r.reduce((g,v,w)=>{let{paramName:T,isOptional:P}=v;if(T==="*"){let x=d[w]||"";u=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const D=d[w];return P&&!D?g[T]=void 0:g[T]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:a,pathnameBase:u,pattern:n}}function $R(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Qm(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function qR(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qm(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Ym(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const HR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,WR=n=>HR.test(n);function GR(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?ol(n):n,a;if(t)if(WR(t))a=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),Qm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?a=O_(t.substring(1),"/"):a=O_(t,e)}else a=e;return{pathname:a,search:YR(r),hash:XR(s)}}function O_(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Vp(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function KR(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Xm(n,e){let t=KR(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Jm(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=ol(n):(s=ku({},n),Et(!s.pathname||!s.pathname.includes("?"),Vp("?","pathname","search",s)),Et(!s.pathname||!s.pathname.includes("#"),Vp("#","pathname","hash",s)),Et(!s.search||!s.search.includes("#"),Vp("#","search","hash",s)));let a=n===""||s.pathname==="",u=a?"/":s.pathname,d;if(u==null)d=t;else{let w=e.length-1;if(!r&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),w-=1;s.pathname=T.join("/")}d=w>=0?e[w]:"/"}let f=GR(s,d),g=u&&u!=="/"&&u.endsWith("/"),v=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(g||v)&&(f.pathname+="/"),f}const ys=n=>n.join("/").replace(/\/\/+/g,"/"),QR=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),YR=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,XR=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function JR(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const d0=["post","put","patch","delete"];new Set(d0);const ZR=["get",...d0];new Set(ZR);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bu(){return bu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},bu.apply(this,arguments)}const Zm=H.createContext(null),e1=H.createContext(null),ks=H.createContext(null),Id=H.createContext(null),bs=H.createContext({outlet:null,matches:[],isDataRoute:!1}),f0=H.createContext(null);function t1(n,e){let{relative:t}=e===void 0?{}:e;al()||Et(!1);let{basename:r,navigator:s}=H.useContext(ks),{hash:a,pathname:u,search:d}=g0(n,{relative:t}),f=u;return r!=="/"&&(f=u==="/"?r:ys([r,u])),s.createHref({pathname:f,search:d,hash:a})}function al(){return H.useContext(Id)!=null}function Oo(){return al()||Et(!1),H.useContext(Id).location}function p0(n){H.useContext(ks).static||H.useLayoutEffect(n)}function m0(){let{isDataRoute:n}=H.useContext(bs);return n?p1():n1()}function n1(){al()||Et(!1);let n=H.useContext(Zm),{basename:e,future:t,navigator:r}=H.useContext(ks),{matches:s}=H.useContext(bs),{pathname:a}=Oo(),u=JSON.stringify(Xm(s,t.v7_relativeSplatPath)),d=H.useRef(!1);return p0(()=>{d.current=!0}),H.useCallback(function(g,v){if(v===void 0&&(v={}),!d.current)return;if(typeof g=="number"){r.go(g);return}let w=Jm(g,JSON.parse(u),a,v.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:ys([e,w.pathname])),(v.replace?r.replace:r.push)(w,v.state,v)},[e,r,u,a,n])}function g0(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=H.useContext(ks),{matches:s}=H.useContext(bs),{pathname:a}=Oo(),u=JSON.stringify(Xm(s,r.v7_relativeSplatPath));return H.useMemo(()=>Jm(n,JSON.parse(u),a,t==="path"),[n,u,a,t])}function r1(n,e){return i1(n,e)}function i1(n,e,t,r){al()||Et(!1);let{navigator:s}=H.useContext(ks),{matches:a}=H.useContext(bs),u=a[a.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let g=Oo(),v;if(e){var w;let k=typeof e=="string"?ol(e):e;f==="/"||(w=k.pathname)!=null&&w.startsWith(f)||Et(!1),v=k}else v=g;let T=v.pathname||"/",P=T;if(f!=="/"){let k=f.replace(/^\//,"").split("/");P="/"+T.replace(/^\//,"").split("/").slice(k.length).join("/")}let D=bR(n,{pathname:P}),x=u1(D&&D.map(k=>Object.assign({},k,{params:Object.assign({},d,k.params),pathname:ys([f,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?f:ys([f,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,t,r);return e&&x?H.createElement(Id.Provider,{value:{location:bu({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:ms.Pop}},x):x}function s1(){let n=f1(),e=JR(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:s},t):null,null)}const o1=H.createElement(s1,null);class a1 extends H.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?H.createElement(bs.Provider,{value:this.props.routeContext},H.createElement(f0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l1(n){let{routeContext:e,match:t,children:r}=n,s=H.useContext(Zm);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),H.createElement(bs.Provider,{value:e},r)}function u1(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,d=(s=t)==null?void 0:s.errors;if(d!=null){let v=u.findIndex(w=>w.route.id&&(d==null?void 0:d[w.route.id])!==void 0);v>=0||Et(!1),u=u.slice(0,Math.min(u.length,v+1))}let f=!1,g=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let w=u[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=v),w.route.id){let{loaderData:T,errors:P}=t,D=w.route.loader&&T[w.route.id]===void 0&&(!P||P[w.route.id]===void 0);if(w.route.lazy||D){f=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((v,w,T)=>{let P,D=!1,x=null,k=null;t&&(P=d&&w.route.id?d[w.route.id]:void 0,x=w.route.errorElement||o1,f&&(g<0&&T===0?(m1("route-fallback"),D=!0,k=null):g===T&&(D=!0,k=w.route.hydrateFallbackElement||null)));let q=e.concat(u.slice(0,T+1)),X=()=>{let G;return P?G=x:D?G=k:w.route.Component?G=H.createElement(w.route.Component,null):w.route.element?G=w.route.element:G=v,H.createElement(l1,{match:w,routeContext:{outlet:v,matches:q,isDataRoute:t!=null},children:G})};return t&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?H.createElement(a1,{location:t.location,revalidation:t.revalidation,component:x,error:P,children:X(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):X()},null)}var y0=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(y0||{}),v0=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(v0||{});function c1(n){let e=H.useContext(Zm);return e||Et(!1),e}function h1(n){let e=H.useContext(e1);return e||Et(!1),e}function d1(n){let e=H.useContext(bs);return e||Et(!1),e}function _0(n){let e=d1(),t=e.matches[e.matches.length-1];return t.route.id||Et(!1),t.route.id}function f1(){var n;let e=H.useContext(f0),t=h1(),r=_0();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function p1(){let{router:n}=c1(y0.UseNavigateStable),e=_0(v0.UseNavigateStable),t=H.useRef(!1);return p0(()=>{t.current=!0}),H.useCallback(function(s,a){a===void 0&&(a={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,bu({fromRouteId:e},a)))},[n,e])}const D_={};function m1(n,e,t){D_[n]||(D_[n]=!0)}function g1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function To(n){let{to:e,replace:t,state:r,relative:s}=n;al()||Et(!1);let{future:a,static:u}=H.useContext(ks),{matches:d}=H.useContext(bs),{pathname:f}=Oo(),g=m0(),v=Jm(e,Xm(d,a.v7_relativeSplatPath),f,s==="path"),w=JSON.stringify(v);return H.useEffect(()=>g(JSON.parse(w),{replace:t,state:r,relative:s}),[g,w,s,t,r]),null}function dt(n){Et(!1)}function y1(n){let{basename:e="/",children:t=null,location:r,navigationType:s=ms.Pop,navigator:a,static:u=!1,future:d}=n;al()&&Et(!1);let f=e.replace(/^\/*/,"/"),g=H.useMemo(()=>({basename:f,navigator:a,static:u,future:bu({v7_relativeSplatPath:!1},d)}),[f,d,a,u]);typeof r=="string"&&(r=ol(r));let{pathname:v="/",search:w="",hash:T="",state:P=null,key:D="default"}=r,x=H.useMemo(()=>{let k=Ym(v,f);return k==null?null:{location:{pathname:k,search:w,hash:T,state:P,key:D},navigationType:s}},[f,v,w,T,P,D,s]);return x==null?null:H.createElement(ks.Provider,{value:g},H.createElement(Id.Provider,{children:t,value:x}))}function v1(n){let{children:e,location:t}=n;return r1(lm(e),t)}new Promise(()=>{});function lm(n,e){e===void 0&&(e=[]);let t=[];return H.Children.forEach(n,(r,s)=>{if(!H.isValidElement(r))return;let a=[...e,s];if(r.type===H.Fragment){t.push.apply(t,lm(r.props.children,a));return}r.type!==dt&&Et(!1),!r.props.index||!r.props.children||Et(!1);let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=lm(r.props.children,a)),t.push(u)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function um(){return um=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},um.apply(this,arguments)}function _1(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,a;for(a=0;a<r.length;a++)s=r[a],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function w1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function E1(n,e){return n.button===0&&(!e||e==="_self")&&!w1(n)}const T1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],I1="6";try{window.__reactRouterVersion=I1}catch{}const S1="startTransition",M_=wR[S1];function A1(n){let{basename:e,children:t,future:r,window:s}=n,a=H.useRef();a.current==null&&(a.current=PR({window:s,v5Compat:!0}));let u=a.current,[d,f]=H.useState({action:u.action,location:u.location}),{v7_startTransition:g}=r||{},v=H.useCallback(w=>{g&&M_?M_(()=>f(w)):f(w)},[f,g]);return H.useLayoutEffect(()=>u.listen(v),[u,v]),H.useEffect(()=>g1(r),[r]),H.createElement(y1,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:r})}const R1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DF=H.forwardRef(function(e,t){let{onClick:r,relative:s,reloadDocument:a,replace:u,state:d,target:f,to:g,preventScrollReset:v,viewTransition:w}=e,T=_1(e,T1),{basename:P}=H.useContext(ks),D,x=!1;if(typeof g=="string"&&P1.test(g)&&(D=g,R1))try{let G=new URL(window.location.href),te=g.startsWith("//")?new URL(G.protocol+g):new URL(g),ie=Ym(te.pathname,P);te.origin===G.origin&&ie!=null?g=ie+te.search+te.hash:x=!0}catch{}let k=t1(g,{relative:s}),q=C1(g,{replace:u,state:d,target:f,preventScrollReset:v,relative:s,viewTransition:w});function X(G){r&&r(G),G.defaultPrevented||q(G)}return H.createElement("a",um({},T,{href:D||k,onClick:x||a?r:X,ref:t,target:f}))});var L_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(L_||(L_={}));var V_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(V_||(V_={}));function C1(n,e){let{target:t,replace:r,state:s,preventScrollReset:a,relative:u,viewTransition:d}=e===void 0?{}:e,f=m0(),g=Oo(),v=g0(n,{relative:u});return H.useCallback(w=>{if(E1(w,t)){w.preventDefault();let T=r!==void 0?r:Yh(g)===Yh(v);f(n,{replace:T,state:s,preventScrollReset:a,relative:u,viewTransition:d})}},[g,f,v,r,s,t,n,a,u,d])}var Sd=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},k1={setTimeout:(n,e)=>setTimeout(n,e),clearTimeout:n=>clearTimeout(n),setInterval:(n,e)=>setInterval(n,e),clearInterval:n=>clearInterval(n)},us,Gm,JE,b1=(JE=class{constructor(){Me(this,us,k1);Me(this,Gm,!1)}setTimeoutProvider(n){Se(this,us,n)}setTimeout(n,e){return W(this,us).setTimeout(n,e)}clearTimeout(n){W(this,us).clearTimeout(n)}setInterval(n,e){return W(this,us).setInterval(n,e)}clearInterval(n){W(this,us).clearInterval(n)}},us=new WeakMap,Gm=new WeakMap,JE),cm=new b1;function N1(n){setTimeout(n,0)}var Ad=typeof window>"u"||"Deno"in globalThis;function mr(){}function x1(n,e){return typeof n=="function"?n(e):n}function O1(n){return typeof n=="number"&&n>=0&&n!==1/0}function D1(n,e){return Math.max(n+(e||0)-Date.now(),0)}function hm(n,e){return typeof n=="function"?n(e):n}function M1(n,e){return typeof n=="function"?n(e):n}function F_(n,e){const{type:t="all",exact:r,fetchStatus:s,predicate:a,queryKey:u,stale:d}=n;if(u){if(r){if(e.queryHash!==eg(u,e.options))return!1}else if(!xu(e.queryKey,u))return!1}if(t!=="all"){const f=e.isActive();if(t==="active"&&!f||t==="inactive"&&f)return!1}return!(typeof d=="boolean"&&e.isStale()!==d||s&&s!==e.state.fetchStatus||a&&!a(e))}function U_(n,e){const{exact:t,status:r,predicate:s,mutationKey:a}=n;if(a){if(!e.options.mutationKey)return!1;if(t){if(Nu(e.options.mutationKey)!==Nu(a))return!1}else if(!xu(e.options.mutationKey,a))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function eg(n,e){return((e==null?void 0:e.queryKeyHashFn)||Nu)(n)}function Nu(n){return JSON.stringify(n,(e,t)=>dm(t)?Object.keys(t).sort().reduce((r,s)=>(r[s]=t[s],r),{}):t)}function xu(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?Object.keys(e).every(t=>xu(n[t],e[t])):!1}var L1=Object.prototype.hasOwnProperty;function w0(n,e,t=0){if(n===e)return n;if(t>500)return e;const r=j_(n)&&j_(e);if(!r&&!(dm(n)&&dm(e)))return e;const a=(r?n:Object.keys(n)).length,u=r?e:Object.keys(e),d=u.length,f=r?new Array(d):{};let g=0;for(let v=0;v<d;v++){const w=r?v:u[v],T=n[w],P=e[w];if(T===P){f[w]=T,(r?v<a:L1.call(n,w))&&g++;continue}if(T===null||P===null||typeof T!="object"||typeof P!="object"){f[w]=P;continue}const D=w0(T,P,t+1);f[w]=D,D===T&&g++}return a===d&&g===a?n:f}function MF(n,e){if(!e||Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(n[t]!==e[t])return!1;return!0}function j_(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function dm(n){if(!B_(n))return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(!B_(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function B_(n){return Object.prototype.toString.call(n)==="[object Object]"}function V1(n){return new Promise(e=>{cm.setTimeout(e,n)})}function F1(n,e,t){return typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?w0(n,e):e}function U1(n,e,t=0){const r=[...n,e];return t&&r.length>t?r.slice(1):r}function j1(n,e,t=0){const r=[e,...n];return t&&r.length>t?r.slice(0,-1):r}var tg=Symbol();function E0(n,e){return!n.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!n.queryFn||n.queryFn===tg?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}function LF(n,e){return typeof n=="function"?n(...e):!!n}function B1(n,e,t){let r=!1,s;return Object.defineProperty(n,"signal",{enumerable:!0,get:()=>(s??(s=e()),r||(r=!0,s.aborted?t():s.addEventListener("abort",t,{once:!0})),s)}),n}var go,cs,Ha,ZE,z1=(ZE=class extends Sd{constructor(){super();Me(this,go);Me(this,cs);Me(this,Ha);Se(this,Ha,e=>{if(!Ad&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){W(this,cs)||this.setEventListener(W(this,Ha))}onUnsubscribe(){var e;this.hasListeners()||((e=W(this,cs))==null||e.call(this),Se(this,cs,void 0))}setEventListener(e){var t;Se(this,Ha,e),(t=W(this,cs))==null||t.call(this),Se(this,cs,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){W(this,go)!==e&&(Se(this,go,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof W(this,go)=="boolean"?W(this,go):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},go=new WeakMap,cs=new WeakMap,Ha=new WeakMap,ZE),T0=new z1;function $1(){let n,e;const t=new Promise((s,a)=>{n=s,e=a});t.status="pending",t.catch(()=>{});function r(s){Object.assign(t,s),delete t.resolve,delete t.reject}return t.resolve=s=>{r({status:"fulfilled",value:s}),n(s)},t.reject=s=>{r({status:"rejected",reason:s}),e(s)},t}var q1=N1;function H1(){let n=[],e=0,t=d=>{d()},r=d=>{d()},s=q1;const a=d=>{e?n.push(d):s(()=>{t(d)})},u=()=>{const d=n;n=[],d.length&&s(()=>{r(()=>{d.forEach(f=>{t(f)})})})};return{batch:d=>{let f;e++;try{f=d()}finally{e--,e||u()}return f},batchCalls:d=>(...f)=>{a(()=>{d(...f)})},schedule:a,setNotifyFunction:d=>{t=d},setBatchNotifyFunction:d=>{r=d},setScheduler:d=>{s=d}}}var pn=H1(),Wa,hs,Ga,e0,W1=(e0=class extends Sd{constructor(){super();Me(this,Wa,!0);Me(this,hs);Me(this,Ga);Se(this,Ga,e=>{if(!Ad&&window.addEventListener){const t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){W(this,hs)||this.setEventListener(W(this,Ga))}onUnsubscribe(){var e;this.hasListeners()||((e=W(this,hs))==null||e.call(this),Se(this,hs,void 0))}setEventListener(e){var t;Se(this,Ga,e),(t=W(this,hs))==null||t.call(this),Se(this,hs,e(this.setOnline.bind(this)))}setOnline(e){W(this,Wa)!==e&&(Se(this,Wa,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return W(this,Wa)}},Wa=new WeakMap,hs=new WeakMap,Ga=new WeakMap,e0),Xh=new W1;function G1(n){return Math.min(1e3*2**n,3e4)}function I0(n){return(n??"online")==="online"?Xh.isOnline():!0}var fm=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function S0(n){let e=!1,t=0,r;const s=$1(),a=()=>s.status!=="pending",u=x=>{var k;if(!a()){const q=new fm(x);T(q),(k=n.onCancel)==null||k.call(n,q)}},d=()=>{e=!0},f=()=>{e=!1},g=()=>T0.isFocused()&&(n.networkMode==="always"||Xh.isOnline())&&n.canRun(),v=()=>I0(n.networkMode)&&n.canRun(),w=x=>{a()||(r==null||r(),s.resolve(x))},T=x=>{a()||(r==null||r(),s.reject(x))},P=()=>new Promise(x=>{var k;r=q=>{(a()||g())&&x(q)},(k=n.onPause)==null||k.call(n)}).then(()=>{var x;r=void 0,a()||(x=n.onContinue)==null||x.call(n)}),D=()=>{if(a())return;let x;const k=t===0?n.initialPromise:void 0;try{x=k??n.fn()}catch(q){x=Promise.reject(q)}Promise.resolve(x).then(w).catch(q=>{var ge;if(a())return;const X=n.retry??(Ad?0:3),G=n.retryDelay??G1,te=typeof G=="function"?G(t,q):G,ie=X===!0||typeof X=="number"&&t<X||typeof X=="function"&&X(t,q);if(e||!ie){T(q);return}t++,(ge=n.onFail)==null||ge.call(n,t,q),V1(te).then(()=>g()?void 0:P()).then(()=>{e?T(q):D()})})};return{promise:s,status:()=>s.status,cancel:u,continue:()=>(r==null||r(),s),cancelRetry:d,continueRetry:f,canStart:v,start:()=>(v()?D():P().then(D),s)}}var yo,t0,A0=(t0=class{constructor(){Me(this,yo)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),O1(this.gcTime)&&Se(this,yo,cm.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Ad?1/0:300*1e3))}clearGcTimeout(){W(this,yo)&&(cm.clearTimeout(W(this,yo)),Se(this,yo,void 0))}},yo=new WeakMap,t0),vo,Ka,Yn,_o,Bt,Gu,wo,gr,pi,n0,K1=(n0=class extends A0{constructor(t){super();Me(this,gr);Me(this,vo);Me(this,Ka);Me(this,Yn);Me(this,_o);Me(this,Bt);Me(this,Gu);Me(this,wo);Se(this,wo,!1),Se(this,Gu,t.defaultOptions),this.setOptions(t.options),this.observers=[],Se(this,_o,t.client),Se(this,Yn,W(this,_o).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Se(this,vo,$_(this.options)),this.state=t.state??W(this,vo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=W(this,Bt))==null?void 0:t.promise}setOptions(t){if(this.options={...W(this,Gu),...t},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=$_(this.options);r.data!==void 0&&(this.setState(z_(r.data,r.dataUpdatedAt)),Se(this,vo,r))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&W(this,Yn).remove(this)}setData(t,r){const s=F1(this.state.data,t,this.options);return tn(this,gr,pi).call(this,{data:s,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),s}setState(t,r){tn(this,gr,pi).call(this,{type:"setState",state:t,setStateOptions:r})}cancel(t){var s,a;const r=(s=W(this,Bt))==null?void 0:s.promise;return(a=W(this,Bt))==null||a.cancel(t),r?r.then(mr).catch(mr):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(W(this,vo))}isActive(){return this.observers.some(t=>M1(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===tg||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>hm(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!D1(this.state.dataUpdatedAt,t)}onFocus(){var r;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(r=W(this,Bt))==null||r.continue()}onOnline(){var r;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(r=W(this,Bt))==null||r.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),W(this,Yn).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(r=>r!==t),this.observers.length||(W(this,Bt)&&(W(this,wo)?W(this,Bt).cancel({revert:!0}):W(this,Bt).cancelRetry()),this.scheduleGc()),W(this,Yn).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||tn(this,gr,pi).call(this,{type:"invalidate"})}async fetch(t,r){var g,v,w,T,P,D,x,k,q,X,G,te;if(this.state.fetchStatus!=="idle"&&((g=W(this,Bt))==null?void 0:g.status())!=="rejected"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(W(this,Bt))return W(this,Bt).continueRetry(),W(this,Bt).promise}if(t&&this.setOptions(t),!this.options.queryFn){const ie=this.observers.find(ge=>ge.options.queryFn);ie&&this.setOptions(ie.options)}const s=new AbortController,a=ie=>{Object.defineProperty(ie,"signal",{enumerable:!0,get:()=>(Se(this,wo,!0),s.signal)})},u=()=>{const ie=E0(this.options,r),O=(()=>{const S={client:W(this,_o),queryKey:this.queryKey,meta:this.meta};return a(S),S})();return Se(this,wo,!1),this.options.persister?this.options.persister(ie,O,this):ie(O)},f=(()=>{const ie={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:W(this,_o),state:this.state,fetchFn:u};return a(ie),ie})();(v=this.options.behavior)==null||v.onFetch(f,this),Se(this,Ka,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((w=f.fetchOptions)==null?void 0:w.meta))&&tn(this,gr,pi).call(this,{type:"fetch",meta:(T=f.fetchOptions)==null?void 0:T.meta}),Se(this,Bt,S0({initialPromise:r==null?void 0:r.initialPromise,fn:f.fetchFn,onCancel:ie=>{ie instanceof fm&&ie.revert&&this.setState({...W(this,Ka),fetchStatus:"idle"}),s.abort()},onFail:(ie,ge)=>{tn(this,gr,pi).call(this,{type:"failed",failureCount:ie,error:ge})},onPause:()=>{tn(this,gr,pi).call(this,{type:"pause"})},onContinue:()=>{tn(this,gr,pi).call(this,{type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode,canRun:()=>!0}));try{const ie=await W(this,Bt).start();if(ie===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(ie),(D=(P=W(this,Yn).config).onSuccess)==null||D.call(P,ie,this),(k=(x=W(this,Yn).config).onSettled)==null||k.call(x,ie,this.state.error,this),ie}catch(ie){if(ie instanceof fm){if(ie.silent)return W(this,Bt).promise;if(ie.revert){if(this.state.data===void 0)throw ie;return this.state.data}}throw tn(this,gr,pi).call(this,{type:"error",error:ie}),(X=(q=W(this,Yn).config).onError)==null||X.call(q,ie,this),(te=(G=W(this,Yn).config).onSettled)==null||te.call(G,this.state.data,ie,this),ie}finally{this.scheduleGc()}}},vo=new WeakMap,Ka=new WeakMap,Yn=new WeakMap,_o=new WeakMap,Bt=new WeakMap,Gu=new WeakMap,wo=new WeakMap,gr=new WeakSet,pi=function(t){const r=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...Q1(s.data,this.options),fetchMeta:t.meta??null};case"success":const a={...s,...z_(t.data,t.dataUpdatedAt),dataUpdateCount:s.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return Se(this,Ka,t.manual?a:void 0),a;case"error":const u=t.error;return{...s,error:u,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:u,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=r(this.state),pn.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),W(this,Yn).notify({query:this,type:"updated",action:t})})},n0);function Q1(n,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:I0(e.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function z_(n,e){return{data:n,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function $_(n){const e=typeof n.initialData=="function"?n.initialData():n.initialData,t=e!==void 0,r=t?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}function q_(n){return{onFetch:(e,t)=>{var v,w,T,P,D;const r=e.options,s=(T=(w=(v=e.fetchOptions)==null?void 0:v.meta)==null?void 0:w.fetchMore)==null?void 0:T.direction,a=((P=e.state.data)==null?void 0:P.pages)||[],u=((D=e.state.data)==null?void 0:D.pageParams)||[];let d={pages:[],pageParams:[]},f=0;const g=async()=>{let x=!1;const k=G=>{B1(G,()=>e.signal,()=>x=!0)},q=E0(e.options,e.fetchOptions),X=async(G,te,ie)=>{if(x)return Promise.reject();if(te==null&&G.pages.length)return Promise.resolve(G);const O=(()=>{const V={client:e.client,queryKey:e.queryKey,pageParam:te,direction:ie?"backward":"forward",meta:e.options.meta};return k(V),V})(),S=await q(O),{maxPages:R}=e.options,b=ie?j1:U1;return{pages:b(G.pages,S,R),pageParams:b(G.pageParams,te,R)}};if(s&&a.length){const G=s==="backward",te=G?Y1:H_,ie={pages:a,pageParams:u},ge=te(r,ie);d=await X(ie,ge,G)}else{const G=n??a.length;do{const te=f===0?u[0]??r.initialPageParam:H_(r,d);if(f>0&&te==null)break;d=await X(d,te),f++}while(f<G)}return d};e.options.persister?e.fetchFn=()=>{var x,k;return(k=(x=e.options).persister)==null?void 0:k.call(x,g,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t)}:e.fetchFn=g}}}function H_(n,{pages:e,pageParams:t}){const r=e.length-1;return e.length>0?n.getNextPageParam(e[r],e,t[r],t):void 0}function Y1(n,{pages:e,pageParams:t}){var r;return e.length>0?(r=n.getPreviousPageParam)==null?void 0:r.call(n,e[0],e,t[0],t):void 0}var Ku,Or,rn,Eo,Dr,ns,r0,X1=(r0=class extends A0{constructor(t){super();Me(this,Dr);Me(this,Ku);Me(this,Or);Me(this,rn);Me(this,Eo);Se(this,Ku,t.client),this.mutationId=t.mutationId,Se(this,rn,t.mutationCache),Se(this,Or,[]),this.state=t.state||J1(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){W(this,Or).includes(t)||(W(this,Or).push(t),this.clearGcTimeout(),W(this,rn).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Se(this,Or,W(this,Or).filter(r=>r!==t)),this.scheduleGc(),W(this,rn).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){W(this,Or).length||(this.state.status==="pending"?this.scheduleGc():W(this,rn).remove(this))}continue(){var t;return((t=W(this,Eo))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var d,f,g,v,w,T,P,D,x,k,q,X,G,te,ie,ge,O,S;const r=()=>{tn(this,Dr,ns).call(this,{type:"continue"})},s={client:W(this,Ku),meta:this.options.meta,mutationKey:this.options.mutationKey};Se(this,Eo,S0({fn:()=>this.options.mutationFn?this.options.mutationFn(t,s):Promise.reject(new Error("No mutationFn found")),onFail:(R,b)=>{tn(this,Dr,ns).call(this,{type:"failed",failureCount:R,error:b})},onPause:()=>{tn(this,Dr,ns).call(this,{type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>W(this,rn).canRun(this)}));const a=this.state.status==="pending",u=!W(this,Eo).canStart();try{if(a)r();else{tn(this,Dr,ns).call(this,{type:"pending",variables:t,isPaused:u}),W(this,rn).config.onMutate&&await W(this,rn).config.onMutate(t,this,s);const b=await((f=(d=this.options).onMutate)==null?void 0:f.call(d,t,s));b!==this.state.context&&tn(this,Dr,ns).call(this,{type:"pending",context:b,variables:t,isPaused:u})}const R=await W(this,Eo).start();return await((v=(g=W(this,rn).config).onSuccess)==null?void 0:v.call(g,R,t,this.state.context,this,s)),await((T=(w=this.options).onSuccess)==null?void 0:T.call(w,R,t,this.state.context,s)),await((D=(P=W(this,rn).config).onSettled)==null?void 0:D.call(P,R,null,this.state.variables,this.state.context,this,s)),await((k=(x=this.options).onSettled)==null?void 0:k.call(x,R,null,t,this.state.context,s)),tn(this,Dr,ns).call(this,{type:"success",data:R}),R}catch(R){try{await((X=(q=W(this,rn).config).onError)==null?void 0:X.call(q,R,t,this.state.context,this,s))}catch(b){Promise.reject(b)}try{await((te=(G=this.options).onError)==null?void 0:te.call(G,R,t,this.state.context,s))}catch(b){Promise.reject(b)}try{await((ge=(ie=W(this,rn).config).onSettled)==null?void 0:ge.call(ie,void 0,R,this.state.variables,this.state.context,this,s))}catch(b){Promise.reject(b)}try{await((S=(O=this.options).onSettled)==null?void 0:S.call(O,void 0,R,t,this.state.context,s))}catch(b){Promise.reject(b)}throw tn(this,Dr,ns).call(this,{type:"error",error:R}),R}finally{W(this,rn).runNext(this)}}},Ku=new WeakMap,Or=new WeakMap,rn=new WeakMap,Eo=new WeakMap,Dr=new WeakSet,ns=function(t){const r=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),pn.batch(()=>{W(this,Or).forEach(s=>{s.onMutationUpdate(t)}),W(this,rn).notify({mutation:this,type:"updated",action:t})})},r0);function J1(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var gi,yr,Qu,i0,Z1=(i0=class extends Sd{constructor(e={}){super();Me(this,gi);Me(this,yr);Me(this,Qu);this.config=e,Se(this,gi,new Set),Se(this,yr,new Map),Se(this,Qu,0)}build(e,t,r){const s=new X1({client:e,mutationCache:this,mutationId:++Ih(this,Qu)._,options:e.defaultMutationOptions(t),state:r});return this.add(s),s}add(e){W(this,gi).add(e);const t=Ah(e);if(typeof t=="string"){const r=W(this,yr).get(t);r?r.push(e):W(this,yr).set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(W(this,gi).delete(e)){const t=Ah(e);if(typeof t=="string"){const r=W(this,yr).get(t);if(r)if(r.length>1){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}else r[0]===e&&W(this,yr).delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=Ah(e);if(typeof t=="string"){const r=W(this,yr).get(t),s=r==null?void 0:r.find(a=>a.state.status==="pending");return!s||s===e}else return!0}runNext(e){var r;const t=Ah(e);if(typeof t=="string"){const s=(r=W(this,yr).get(t))==null?void 0:r.find(a=>a!==e&&a.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){pn.batch(()=>{W(this,gi).forEach(e=>{this.notify({type:"removed",mutation:e})}),W(this,gi).clear(),W(this,yr).clear()})}getAll(){return Array.from(W(this,gi))}find(e){const t={exact:!0,...e};return this.getAll().find(r=>U_(t,r))}findAll(e={}){return this.getAll().filter(t=>U_(e,t))}notify(e){pn.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return pn.batch(()=>Promise.all(e.map(t=>t.continue().catch(mr))))}},gi=new WeakMap,yr=new WeakMap,Qu=new WeakMap,i0);function Ah(n){var e;return(e=n.options.scope)==null?void 0:e.id}var Mr,s0,eP=(s0=class extends Sd{constructor(e={}){super();Me(this,Mr);this.config=e,Se(this,Mr,new Map)}build(e,t,r){const s=t.queryKey,a=t.queryHash??eg(s,t);let u=this.get(a);return u||(u=new K1({client:e,queryKey:s,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(u)),u}add(e){W(this,Mr).has(e.queryHash)||(W(this,Mr).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=W(this,Mr).get(e.queryHash);t&&(e.destroy(),t===e&&W(this,Mr).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){pn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return W(this,Mr).get(e)}getAll(){return[...W(this,Mr).values()]}find(e){const t={exact:!0,...e};return this.getAll().find(r=>F_(t,r))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(r=>F_(e,r)):t}notify(e){pn.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){pn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){pn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Mr=new WeakMap,s0),ft,ds,fs,Qa,Ya,ps,Xa,Ja,o0,tP=(o0=class{constructor(n={}){Me(this,ft);Me(this,ds);Me(this,fs);Me(this,Qa);Me(this,Ya);Me(this,ps);Me(this,Xa);Me(this,Ja);Se(this,ft,n.queryCache||new eP),Se(this,ds,n.mutationCache||new Z1),Se(this,fs,n.defaultOptions||{}),Se(this,Qa,new Map),Se(this,Ya,new Map),Se(this,ps,0)}mount(){Ih(this,ps)._++,W(this,ps)===1&&(Se(this,Xa,T0.subscribe(async n=>{n&&(await this.resumePausedMutations(),W(this,ft).onFocus())})),Se(this,Ja,Xh.subscribe(async n=>{n&&(await this.resumePausedMutations(),W(this,ft).onOnline())})))}unmount(){var n,e;Ih(this,ps)._--,W(this,ps)===0&&((n=W(this,Xa))==null||n.call(this),Se(this,Xa,void 0),(e=W(this,Ja))==null||e.call(this),Se(this,Ja,void 0))}isFetching(n){return W(this,ft).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return W(this,ds).findAll({...n,status:"pending"}).length}getQueryData(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=W(this,ft).get(e.queryHash))==null?void 0:t.state.data}ensureQueryData(n){const e=this.defaultQueryOptions(n),t=W(this,ft).build(this,e),r=t.state.data;return r===void 0?this.fetchQuery(n):(n.revalidateIfStale&&t.isStaleByTime(hm(e.staleTime,t))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(n){return W(this,ft).findAll(n).map(({queryKey:e,state:t})=>{const r=t.data;return[e,r]})}setQueryData(n,e,t){const r=this.defaultQueryOptions({queryKey:n}),s=W(this,ft).get(r.queryHash),a=s==null?void 0:s.state.data,u=x1(e,a);if(u!==void 0)return W(this,ft).build(this,r).setData(u,{...t,manual:!0})}setQueriesData(n,e,t){return pn.batch(()=>W(this,ft).findAll(n).map(({queryKey:r})=>[r,this.setQueryData(r,e,t)]))}getQueryState(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=W(this,ft).get(e.queryHash))==null?void 0:t.state}removeQueries(n){const e=W(this,ft);pn.batch(()=>{e.findAll(n).forEach(t=>{e.remove(t)})})}resetQueries(n,e){const t=W(this,ft);return pn.batch(()=>(t.findAll(n).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...n},e)))}cancelQueries(n,e={}){const t={revert:!0,...e},r=pn.batch(()=>W(this,ft).findAll(n).map(s=>s.cancel(t)));return Promise.all(r).then(mr).catch(mr)}invalidateQueries(n,e={}){return pn.batch(()=>(W(this,ft).findAll(n).forEach(t=>{t.invalidate()}),(n==null?void 0:n.refetchType)==="none"?Promise.resolve():this.refetchQueries({...n,type:(n==null?void 0:n.refetchType)??(n==null?void 0:n.type)??"active"},e)))}refetchQueries(n,e={}){const t={...e,cancelRefetch:e.cancelRefetch??!0},r=pn.batch(()=>W(this,ft).findAll(n).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let a=s.fetch(void 0,t);return t.throwOnError||(a=a.catch(mr)),s.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(mr)}fetchQuery(n){const e=this.defaultQueryOptions(n);e.retry===void 0&&(e.retry=!1);const t=W(this,ft).build(this,e);return t.isStaleByTime(hm(e.staleTime,t))?t.fetch(e):Promise.resolve(t.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(mr).catch(mr)}fetchInfiniteQuery(n){return n.behavior=q_(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(mr).catch(mr)}ensureInfiniteQueryData(n){return n.behavior=q_(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Xh.isOnline()?W(this,ds).resumePausedMutations():Promise.resolve()}getQueryCache(){return W(this,ft)}getMutationCache(){return W(this,ds)}getDefaultOptions(){return W(this,fs)}setDefaultOptions(n){Se(this,fs,n)}setQueryDefaults(n,e){W(this,Qa).set(Nu(n),{queryKey:n,defaultOptions:e})}getQueryDefaults(n){const e=[...W(this,Qa).values()],t={};return e.forEach(r=>{xu(n,r.queryKey)&&Object.assign(t,r.defaultOptions)}),t}setMutationDefaults(n,e){W(this,Ya).set(Nu(n),{mutationKey:n,defaultOptions:e})}getMutationDefaults(n){const e=[...W(this,Ya).values()],t={};return e.forEach(r=>{xu(n,r.mutationKey)&&Object.assign(t,r.defaultOptions)}),t}defaultQueryOptions(n){if(n._defaulted)return n;const e={...W(this,fs).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return e.queryHash||(e.queryHash=eg(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===tg&&(e.enabled=!1),e}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...W(this,fs).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){W(this,ft).clear(),W(this,ds).clear()}},ft=new WeakMap,ds=new WeakMap,fs=new WeakMap,Qa=new WeakMap,Ya=new WeakMap,ps=new WeakMap,Xa=new WeakMap,Ja=new WeakMap,o0),R0=H.createContext(void 0),UF=n=>{const e=H.useContext(R0);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},nP=({client:n,children:e})=>(H.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),re.jsx(R0.Provider,{value:n,children:e}));let rP={data:""},iP=n=>{if(typeof window=="object"){let e=(n?n.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(n||document.head).appendChild(e),e.firstChild}return n||rP},sP=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,oP=/\/\*[^]*?\*\/|  +/g,W_=/\n+/g,rs=(n,e)=>{let t="",r="",s="";for(let a in n){let u=n[a];a[0]=="@"?a[1]=="i"?t=a+" "+u+";":r+=a[1]=="f"?rs(u,a):a+"{"+rs(u,a[1]=="k"?"":e)+"}":typeof u=="object"?r+=rs(u,e?e.replace(/([^,])+/g,d=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,d):d?d+" "+f:f)):a):u!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=rs.p?rs.p(a,u):a+":"+u+";")}return t+(e&&s?e+"{"+s+"}":s)+r},hi={},P0=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+P0(n[t]);return e}return n},aP=(n,e,t,r,s)=>{let a=P0(n),u=hi[a]||(hi[a]=(f=>{let g=0,v=11;for(;g<f.length;)v=101*v+f.charCodeAt(g++)>>>0;return"go"+v})(a));if(!hi[u]){let f=a!==n?n:(g=>{let v,w,T=[{}];for(;v=sP.exec(g.replace(oP,""));)v[4]?T.shift():v[3]?(w=v[3].replace(W_," ").trim(),T.unshift(T[0][w]=T[0][w]||{})):T[0][v[1]]=v[2].replace(W_," ").trim();return T[0]})(n);hi[u]=rs(s?{["@keyframes "+u]:f}:f,t?"":"."+u)}let d=t&&hi.g?hi.g:null;return t&&(hi.g=hi[u]),((f,g,v,w)=>{w?g.data=g.data.replace(w,f):g.data.indexOf(f)===-1&&(g.data=v?f+g.data:g.data+f)})(hi[u],e,r,d),u},lP=(n,e,t)=>n.reduce((r,s,a)=>{let u=e[a];if(u&&u.call){let d=u(t),f=d&&d.props&&d.props.className||/^go/.test(d)&&d;u=f?"."+f:d&&typeof d=="object"?d.props?"":rs(d,""):d===!1?"":d}return r+s+(u??"")},"");function Rd(n){let e=this||{},t=n.call?n(e.p):n;return aP(t.unshift?t.raw?lP(t,[].slice.call(arguments,1),e.p):t.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):t,iP(e.target),e.g,e.o,e.k)}let C0,pm,mm;Rd.bind({g:1});let Ei=Rd.bind({k:1});function uP(n,e,t,r){rs.p=e,C0=n,pm=t,mm=r}function Ns(n,e){let t=this||{};return function(){let r=arguments;function s(a,u){let d=Object.assign({},a),f=d.className||s.className;t.p=Object.assign({theme:pm&&pm()},d),t.o=/ *go\d+/.test(f),d.className=Rd.apply(t,r)+(f?" "+f:"");let g=n;return n[0]&&(g=d.as||n,delete d.as),mm&&g[0]&&mm(d),C0(g,d)}return s}}var cP=n=>typeof n=="function",Jh=(n,e)=>cP(n)?n(e):n,hP=(()=>{let n=0;return()=>(++n).toString()})(),k0=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),dP=20,ng="default",b0=(n,e)=>{let{toastLimit:t}=n.settings;switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,t)};case 1:return{...n,toasts:n.toasts.map(u=>u.id===e.toast.id?{...u,...e.toast}:u)};case 2:let{toast:r}=e;return b0(n,{type:n.toasts.find(u=>u.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...n,toasts:n.toasts.map(u=>u.id===s||s===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(u=>u.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let a=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+a}))}}},Uh=[],N0={toasts:[],pausedAt:void 0,settings:{toastLimit:dP}},Lr={},x0=(n,e=ng)=>{Lr[e]=b0(Lr[e]||N0,n),Uh.forEach(([t,r])=>{t===e&&r(Lr[e])})},O0=n=>Object.keys(Lr).forEach(e=>x0(n,e)),fP=n=>Object.keys(Lr).find(e=>Lr[e].toasts.some(t=>t.id===n)),Pd=(n=ng)=>e=>{x0(e,n)},pP={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mP=(n={},e=ng)=>{let[t,r]=H.useState(Lr[e]||N0),s=H.useRef(Lr[e]);H.useEffect(()=>(s.current!==Lr[e]&&r(Lr[e]),Uh.push([e,r]),()=>{let u=Uh.findIndex(([d])=>d===e);u>-1&&Uh.splice(u,1)}),[e]);let a=t.toasts.map(u=>{var d,f,g;return{...n,...n[u.type],...u,removeDelay:u.removeDelay||((d=n[u.type])==null?void 0:d.removeDelay)||(n==null?void 0:n.removeDelay),duration:u.duration||((f=n[u.type])==null?void 0:f.duration)||(n==null?void 0:n.duration)||pP[u.type],style:{...n.style,...(g=n[u.type])==null?void 0:g.style,...u.style}}});return{...t,toasts:a}},gP=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||hP()}),Yu=n=>(e,t)=>{let r=gP(e,n,t);return Pd(r.toasterId||fP(r.id))({type:2,toast:r}),r.id},Ot=(n,e)=>Yu("blank")(n,e);Ot.error=Yu("error");Ot.success=Yu("success");Ot.loading=Yu("loading");Ot.custom=Yu("custom");Ot.dismiss=(n,e)=>{let t={type:3,toastId:n};e?Pd(e)(t):O0(t)};Ot.dismissAll=n=>Ot.dismiss(void 0,n);Ot.remove=(n,e)=>{let t={type:4,toastId:n};e?Pd(e)(t):O0(t)};Ot.removeAll=n=>Ot.remove(void 0,n);Ot.promise=(n,e,t)=>{let r=Ot.loading(e.loading,{...t,...t==null?void 0:t.loading});return typeof n=="function"&&(n=n()),n.then(s=>{let a=e.success?Jh(e.success,s):void 0;return a?Ot.success(a,{id:r,...t,...t==null?void 0:t.success}):Ot.dismiss(r),s}).catch(s=>{let a=e.error?Jh(e.error,s):void 0;a?Ot.error(a,{id:r,...t,...t==null?void 0:t.error}):Ot.dismiss(r)}),n};var yP=1e3,vP=(n,e="default")=>{let{toasts:t,pausedAt:r}=mP(n,e),s=H.useRef(new Map).current,a=H.useCallback((w,T=yP)=>{if(s.has(w))return;let P=setTimeout(()=>{s.delete(w),u({type:4,toastId:w})},T);s.set(w,P)},[]);H.useEffect(()=>{if(r)return;let w=Date.now(),T=t.map(P=>{if(P.duration===1/0)return;let D=(P.duration||0)+P.pauseDuration-(w-P.createdAt);if(D<0){P.visible&&Ot.dismiss(P.id);return}return setTimeout(()=>Ot.dismiss(P.id,e),D)});return()=>{T.forEach(P=>P&&clearTimeout(P))}},[t,r,e]);let u=H.useCallback(Pd(e),[e]),d=H.useCallback(()=>{u({type:5,time:Date.now()})},[u]),f=H.useCallback((w,T)=>{u({type:1,toast:{id:w,height:T}})},[u]),g=H.useCallback(()=>{r&&u({type:6,time:Date.now()})},[r,u]),v=H.useCallback((w,T)=>{let{reverseOrder:P=!1,gutter:D=8,defaultPosition:x}=T||{},k=t.filter(G=>(G.position||x)===(w.position||x)&&G.height),q=k.findIndex(G=>G.id===w.id),X=k.filter((G,te)=>te<q&&G.visible).length;return k.filter(G=>G.visible).slice(...P?[X+1]:[0,X]).reduce((G,te)=>G+(te.height||0)+D,0)},[t]);return H.useEffect(()=>{t.forEach(w=>{if(w.dismissed)a(w.id,w.removeDelay);else{let T=s.get(w.id);T&&(clearTimeout(T),s.delete(w.id))}})},[t,a]),{toasts:t,handlers:{updateHeight:f,startPause:d,endPause:g,calculateOffset:v}}},_P=Ei`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,wP=Ei`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,EP=Ei`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,TP=Ns("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${wP} 0.15s ease-out forwards;
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
    animation: ${EP} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,IP=Ei`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,SP=Ns("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${IP} 1s linear infinite;
`,AP=Ei`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,RP=Ei`
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
}`,PP=Ns("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${AP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${RP} 0.2s ease-out forwards;
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
`,CP=Ns("div")`
  position: absolute;
`,kP=Ns("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,bP=Ei`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,NP=Ns("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${bP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xP=({toast:n})=>{let{icon:e,type:t,iconTheme:r}=n;return e!==void 0?typeof e=="string"?H.createElement(NP,null,e):e:t==="blank"?null:H.createElement(kP,null,H.createElement(SP,{...r}),t!=="loading"&&H.createElement(CP,null,t==="error"?H.createElement(TP,{...r}):H.createElement(PP,{...r})))},OP=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,DP=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,MP="0%{opacity:0;} 100%{opacity:1;}",LP="0%{opacity:1;} 100%{opacity:0;}",VP=Ns("div")`
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
`,FP=Ns("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,UP=(n,e)=>{let t=n.includes("top")?1:-1,[r,s]=k0()?[MP,LP]:[OP(t),DP(t)];return{animation:e?`${Ei(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ei(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},jP=H.memo(({toast:n,position:e,style:t,children:r})=>{let s=n.height?UP(n.position||e||"top-center",n.visible):{opacity:0},a=H.createElement(xP,{toast:n}),u=H.createElement(FP,{...n.ariaProps},Jh(n.message,n));return H.createElement(VP,{className:n.className,style:{...s,...t,...n.style}},typeof r=="function"?r({icon:a,message:u}):H.createElement(H.Fragment,null,a,u))});uP(H.createElement);var BP=({id:n,className:e,style:t,onHeightUpdate:r,children:s})=>{let a=H.useCallback(u=>{if(u){let d=()=>{let f=u.getBoundingClientRect().height;r(n,f)};d(),new MutationObserver(d).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[n,r]);return H.createElement("div",{ref:a,className:e,style:t},s)},zP=(n,e)=>{let t=n.includes("top"),r=t?{top:0}:{bottom:0},s=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...r,...s}},$P=Rd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Rh=16,qP=({reverseOrder:n,position:e="top-center",toastOptions:t,gutter:r,children:s,toasterId:a,containerStyle:u,containerClassName:d})=>{let{toasts:f,handlers:g}=vP(t,a);return H.createElement("div",{"data-rht-toaster":a||"",style:{position:"fixed",zIndex:9999,top:Rh,left:Rh,right:Rh,bottom:Rh,pointerEvents:"none",...u},className:d,onMouseEnter:g.startPause,onMouseLeave:g.endPause},f.map(v=>{let w=v.position||e,T=g.calculateOffset(v,{reverseOrder:n,gutter:r,defaultPosition:e}),P=zP(w,T);return H.createElement(BP,{id:v.id,key:v.id,onHeightUpdate:g.updateHeight,className:v.visible?$P:"",style:P},v.type==="custom"?Jh(v.message,v):s?s(v):H.createElement(jP,{toast:v,position:w}))}))},di=Ot;const HP="modulepreload",WP=function(n){return"/"+n},G_={},Mt=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=u(t.map(g=>{if(g=WP(g),g in G_)return;G_[g]=!0;const v=g.endsWith(".css"),w=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const T=document.createElement("link");if(T.rel=v?"stylesheet":HP,v||(T.as="script"),T.crossOrigin="",T.href=g,f&&T.setAttribute("nonce",f),document.head.appendChild(T),v)return new Promise((P,D)=>{T.addEventListener("load",P),T.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${g}`)))})}))}function a(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};function D0(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=D0(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function GP(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=D0(n))&&(r&&(r+=" "),r+=e);return r}const rg="-",KP=n=>{const e=YP(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:u=>{const d=u.split(rg);return d[0]===""&&d.length!==1&&d.shift(),M0(d,e)||QP(u)},getConflictingClassGroupIds:(u,d)=>{const f=t[u]||[];return d&&r[u]?[...f,...r[u]]:f}}},M0=(n,e)=>{var u;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),s=r?M0(n.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const a=n.join(rg);return(u=e.validators.find(({validator:d})=>d(a)))==null?void 0:u.classGroupId},K_=/^\[(.+)\]$/,QP=n=>{if(K_.test(n)){const e=K_.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},YP=n=>{const{theme:e,prefix:t}=n,r={nextPart:new Map,validators:[]};return JP(Object.entries(n.classGroups),t).forEach(([a,u])=>{gm(u,r,a,e)}),r},gm=(n,e,t,r)=>{n.forEach(s=>{if(typeof s=="string"){const a=s===""?e:Q_(e,s);a.classGroupId=t;return}if(typeof s=="function"){if(XP(s)){gm(s(r),e,t,r);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([a,u])=>{gm(u,Q_(e,a),t,r)})})},Q_=(n,e)=>{let t=n;return e.split(rg).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},XP=n=>n.isThemeGetter,JP=(n,e)=>e?n.map(([t,r])=>{const s=r.map(a=>typeof a=="string"?e+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([u,d])=>[e+u,d])):a);return[t,s]}):n,ZP=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const s=(a,u)=>{t.set(a,u),e++,e>n&&(e=0,r=t,t=new Map)};return{get(a){let u=t.get(a);if(u!==void 0)return u;if((u=r.get(a))!==void 0)return s(a,u),u},set(a,u){t.has(a)?t.set(a,u):s(a,u)}}},L0="!",eC=n=>{const{separator:e,experimentalParseClassName:t}=n,r=e.length===1,s=e[0],a=e.length,u=d=>{const f=[];let g=0,v=0,w;for(let k=0;k<d.length;k++){let q=d[k];if(g===0){if(q===s&&(r||d.slice(k,k+a)===e)){f.push(d.slice(v,k)),v=k+a;continue}if(q==="/"){w=k;continue}}q==="["?g++:q==="]"&&g--}const T=f.length===0?d:d.substring(v),P=T.startsWith(L0),D=P?T.substring(1):T,x=w&&w>v?w-v:void 0;return{modifiers:f,hasImportantModifier:P,baseClassName:D,maybePostfixModifierPosition:x}};return t?d=>t({className:d,parseClassName:u}):u},tC=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(r=>{r[0]==="["?(e.push(...t.sort(),r),t=[]):t.push(r)}),e.push(...t.sort()),e},nC=n=>({cache:ZP(n.cacheSize),parseClassName:eC(n),...KP(n)}),rC=/\s+/,iC=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s}=e,a=[],u=n.trim().split(rC);let d="";for(let f=u.length-1;f>=0;f-=1){const g=u[f],{modifiers:v,hasImportantModifier:w,baseClassName:T,maybePostfixModifierPosition:P}=t(g);let D=!!P,x=r(D?T.substring(0,P):T);if(!x){if(!D){d=g+(d.length>0?" "+d:d);continue}if(x=r(T),!x){d=g+(d.length>0?" "+d:d);continue}D=!1}const k=tC(v).join(":"),q=w?k+L0:k,X=q+x;if(a.includes(X))continue;a.push(X);const G=s(x,D);for(let te=0;te<G.length;++te){const ie=G[te];a.push(q+ie)}d=g+(d.length>0?" "+d:d)}return d};function sC(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=V0(e))&&(r&&(r+=" "),r+=t);return r}const V0=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=V0(n[r]))&&(t&&(t+=" "),t+=e);return t};function oC(n,...e){let t,r,s,a=u;function u(f){const g=e.reduce((v,w)=>w(v),n());return t=nC(g),r=t.cache.get,s=t.cache.set,a=d,d(f)}function d(f){const g=r(f);if(g)return g;const v=iC(f,t);return s(f,v),v}return function(){return a(sC.apply(null,arguments))}}const rt=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},F0=/^\[(?:([a-z-]+):)?(.+)\]$/i,aC=/^\d+\/\d+$/,lC=new Set(["px","full","screen"]),uC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,cC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,dC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,fC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,fi=n=>Fa(n)||lC.has(n)||aC.test(n),Ji=n=>ll(n,"length",EC),Fa=n=>!!n&&!Number.isNaN(Number(n)),Fp=n=>ll(n,"number",Fa),cu=n=>!!n&&Number.isInteger(Number(n)),pC=n=>n.endsWith("%")&&Fa(n.slice(0,-1)),Pe=n=>F0.test(n),Zi=n=>uC.test(n),mC=new Set(["length","size","percentage"]),gC=n=>ll(n,mC,U0),yC=n=>ll(n,"position",U0),vC=new Set(["image","url"]),_C=n=>ll(n,vC,IC),wC=n=>ll(n,"",TC),hu=()=>!0,ll=(n,e,t)=>{const r=F0.exec(n);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):t(r[2]):!1},EC=n=>cC.test(n)&&!hC.test(n),U0=()=>!1,TC=n=>dC.test(n),IC=n=>fC.test(n),SC=()=>{const n=rt("colors"),e=rt("spacing"),t=rt("blur"),r=rt("brightness"),s=rt("borderColor"),a=rt("borderRadius"),u=rt("borderSpacing"),d=rt("borderWidth"),f=rt("contrast"),g=rt("grayscale"),v=rt("hueRotate"),w=rt("invert"),T=rt("gap"),P=rt("gradientColorStops"),D=rt("gradientColorStopPositions"),x=rt("inset"),k=rt("margin"),q=rt("opacity"),X=rt("padding"),G=rt("saturate"),te=rt("scale"),ie=rt("sepia"),ge=rt("skew"),O=rt("space"),S=rt("translate"),R=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",Pe,e],L=()=>[Pe,e],C=()=>["",fi,Ji],Qe=()=>["auto",Fa,Pe],Pt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],yt=()=>["solid","dashed","dotted","double","none"],Be=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>["start","end","center","between","around","evenly","stretch"],me=()=>["","0",Pe],le=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>[Fa,Pe];return{cacheSize:500,separator:":",theme:{colors:[hu],spacing:[fi,Ji],blur:["none","",Zi,Pe],brightness:F(),borderColor:[n],borderRadius:["none","","full",Zi,Pe],borderSpacing:L(),borderWidth:C(),contrast:F(),grayscale:me(),hueRotate:F(),invert:me(),gap:L(),gradientColorStops:[n],gradientColorStopPositions:[pC,Ji],inset:V(),margin:V(),opacity:F(),padding:L(),saturate:F(),scale:F(),sepia:me(),skew:F(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",Pe]}],container:["container"],columns:[{columns:[Zi]}],"break-after":[{"break-after":le()}],"break-before":[{"break-before":le()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Pt(),Pe]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",cu,Pe]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Pe]}],grow:[{grow:me()}],shrink:[{shrink:me()}],order:[{order:["first","last","none",cu,Pe]}],"grid-cols":[{"grid-cols":[hu]}],"col-start-end":[{col:["auto",{span:["full",cu,Pe]},Pe]}],"col-start":[{"col-start":Qe()}],"col-end":[{"col-end":Qe()}],"grid-rows":[{"grid-rows":[hu]}],"row-start-end":[{row:["auto",{span:[cu,Pe]},Pe]}],"row-start":[{"row-start":Qe()}],"row-end":[{"row-end":Qe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Pe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Pe]}],gap:[{gap:[T]}],"gap-x":[{"gap-x":[T]}],"gap-y":[{"gap-y":[T]}],"justify-content":[{justify:["normal",...oe()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...oe(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...oe(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[X]}],px:[{px:[X]}],py:[{py:[X]}],ps:[{ps:[X]}],pe:[{pe:[X]}],pt:[{pt:[X]}],pr:[{pr:[X]}],pb:[{pb:[X]}],pl:[{pl:[X]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[O]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[O]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Pe,e]}],"min-w":[{"min-w":[Pe,e,"min","max","fit"]}],"max-w":[{"max-w":[Pe,e,"none","full","min","max","fit","prose",{screen:[Zi]},Zi]}],h:[{h:[Pe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Pe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Pe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Pe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Zi,Ji]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Fp]}],"font-family":[{font:[hu]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Pe]}],"line-clamp":[{"line-clamp":["none",Fa,Fp]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",fi,Pe]}],"list-image":[{"list-image":["none",Pe]}],"list-style-type":[{list:["none","disc","decimal",Pe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[q]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...yt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",fi,Ji]}],"underline-offset":[{"underline-offset":["auto",fi,Pe]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Pe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Pe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[q]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Pt(),yC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",gC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},_C]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[D]}],"gradient-via-pos":[{via:[D]}],"gradient-to-pos":[{to:[D]}],"gradient-from":[{from:[P]}],"gradient-via":[{via:[P]}],"gradient-to":[{to:[P]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[q]}],"border-style":[{border:[...yt(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[q]}],"divide-style":[{divide:yt()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...yt()]}],"outline-offset":[{"outline-offset":[fi,Pe]}],"outline-w":[{outline:[fi,Ji]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:C()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[q]}],"ring-offset-w":[{"ring-offset":[fi,Ji]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Zi,wC]}],"shadow-color":[{shadow:[hu]}],opacity:[{opacity:[q]}],"mix-blend":[{"mix-blend":[...Be(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Be()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",Zi,Pe]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[w]}],saturate:[{saturate:[G]}],sepia:[{sepia:[ie]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[w]}],"backdrop-opacity":[{"backdrop-opacity":[q]}],"backdrop-saturate":[{"backdrop-saturate":[G]}],"backdrop-sepia":[{"backdrop-sepia":[ie]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Pe]}],duration:[{duration:F()}],ease:[{ease:["linear","in","out","in-out",Pe]}],delay:[{delay:F()}],animate:[{animate:["none","spin","ping","pulse","bounce",Pe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[te]}],"scale-x":[{"scale-x":[te]}],"scale-y":[{"scale-y":[te]}],rotate:[{rotate:[cu,Pe]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[ge]}],"skew-y":[{"skew-y":[ge]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Pe]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Pe]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Pe]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[fi,Ji,Fp]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},AC=oC(SC),j0=6048e5,RC=864e5,B0=6e4,z0=36e5,Y_=Symbol.for("constructDateFrom");function Fn(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&Y_ in n?n[Y_](e):n instanceof Date?new n.constructor(e):new Date(e)}function Pn(n,e){return Fn(e||n,n)}function PC(n,e,t){const r=Pn(n,t==null?void 0:t.in);return isNaN(e)?Fn(n,NaN):(r.setDate(r.getDate()+e),r)}let CC={};function Cd(){return CC}function Ou(n,e){var d,f,g,v;const t=Cd(),r=(e==null?void 0:e.weekStartsOn)??((f=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??t.weekStartsOn??((v=(g=t.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,s=Pn(n,e==null?void 0:e.in),a=s.getDay(),u=(a<r?7:0)+a-r;return s.setDate(s.getDate()-u),s.setHours(0,0,0,0),s}function Zh(n,e){return Ou(n,{...e,weekStartsOn:1})}function $0(n,e){const t=Pn(n,e==null?void 0:e.in),r=t.getFullYear(),s=Fn(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const a=Zh(s),u=Fn(t,0);u.setFullYear(r,0,4),u.setHours(0,0,0,0);const d=Zh(u);return t.getTime()>=a.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function X_(n){const e=Pn(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function q0(n,...e){const t=Fn.bind(null,e.find(r=>typeof r=="object"));return e.map(t)}function ed(n,e){const t=Pn(n,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function kC(n,e,t){const[r,s]=q0(t==null?void 0:t.in,n,e),a=ed(r),u=ed(s),d=+a-X_(a),f=+u-X_(u);return Math.round((d-f)/RC)}function bC(n,e){const t=$0(n,e),r=Fn(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),Zh(r)}function H0(n){return Fn(n,Date.now())}function W0(n,e,t){const[r,s]=q0(t==null?void 0:t.in,n,e);return+ed(r)==+ed(s)}function NC(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function xC(n){return!(!NC(n)&&typeof n!="number"||isNaN(+Pn(n)))}function OC(n,e){const t=Pn(n,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const DC={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},MC=(n,e,t)=>{let r;const s=DC[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function Up(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const LC={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},VC={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},FC={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},UC={date:Up({formats:LC,defaultWidth:"full"}),time:Up({formats:VC,defaultWidth:"full"}),dateTime:Up({formats:FC,defaultWidth:"full"})},jC={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},BC=(n,e,t,r)=>jC[n];function du(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const u=n.defaultFormattingWidth||n.defaultWidth,d=t!=null&&t.width?String(t.width):u;s=n.formattingValues[d]||n.formattingValues[u]}else{const u=n.defaultWidth,d=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[d]||n.values[u]}const a=n.argumentCallback?n.argumentCallback(e):e;return s[a]}}const zC={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$C={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},qC={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},HC={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},WC={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},GC={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},KC=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},QC={ordinalNumber:KC,era:du({values:zC,defaultWidth:"wide"}),quarter:du({values:$C,defaultWidth:"wide",argumentCallback:n=>n-1}),month:du({values:qC,defaultWidth:"wide"}),day:du({values:HC,defaultWidth:"wide"}),dayPeriod:du({values:WC,defaultWidth:"wide",formattingValues:GC,defaultFormattingWidth:"wide"})};function fu(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],a=e.match(s);if(!a)return null;const u=a[0],d=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],f=Array.isArray(d)?XC(d,w=>w.test(u)):YC(d,w=>w.test(u));let g;g=n.valueCallback?n.valueCallback(f):f,g=t.valueCallback?t.valueCallback(g):g;const v=e.slice(u.length);return{value:g,rest:v}}}function YC(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function XC(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function JC(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],a=e.match(n.parsePattern);if(!a)return null;let u=n.valueCallback?n.valueCallback(a[0]):a[0];u=t.valueCallback?t.valueCallback(u):u;const d=e.slice(s.length);return{value:u,rest:d}}}const ZC=/^(\d+)(th|st|nd|rd)?/i,ek=/\d+/i,tk={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},nk={any:[/^b/i,/^(a|c)/i]},rk={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ik={any:[/1/i,/2/i,/3/i,/4/i]},sk={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ok={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ak={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},lk={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},uk={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ck={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},hk={ordinalNumber:JC({matchPattern:ZC,parsePattern:ek,valueCallback:n=>parseInt(n,10)}),era:fu({matchPatterns:tk,defaultMatchWidth:"wide",parsePatterns:nk,defaultParseWidth:"any"}),quarter:fu({matchPatterns:rk,defaultMatchWidth:"wide",parsePatterns:ik,defaultParseWidth:"any",valueCallback:n=>n+1}),month:fu({matchPatterns:sk,defaultMatchWidth:"wide",parsePatterns:ok,defaultParseWidth:"any"}),day:fu({matchPatterns:ak,defaultMatchWidth:"wide",parsePatterns:lk,defaultParseWidth:"any"}),dayPeriod:fu({matchPatterns:uk,defaultMatchWidth:"any",parsePatterns:ck,defaultParseWidth:"any"})},dk={code:"en-US",formatDistance:MC,formatLong:UC,formatRelative:BC,localize:QC,match:hk,options:{weekStartsOn:0,firstWeekContainsDate:1}};function fk(n,e){const t=Pn(n,e==null?void 0:e.in);return kC(t,OC(t))+1}function pk(n,e){const t=Pn(n,e==null?void 0:e.in),r=+Zh(t)-+bC(t);return Math.round(r/j0)+1}function G0(n,e){var v,w,T,P;const t=Pn(n,e==null?void 0:e.in),r=t.getFullYear(),s=Cd(),a=(e==null?void 0:e.firstWeekContainsDate)??((w=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??s.firstWeekContainsDate??((P=(T=s.locale)==null?void 0:T.options)==null?void 0:P.firstWeekContainsDate)??1,u=Fn((e==null?void 0:e.in)||n,0);u.setFullYear(r+1,0,a),u.setHours(0,0,0,0);const d=Ou(u,e),f=Fn((e==null?void 0:e.in)||n,0);f.setFullYear(r,0,a),f.setHours(0,0,0,0);const g=Ou(f,e);return+t>=+d?r+1:+t>=+g?r:r-1}function mk(n,e){var d,f,g,v;const t=Cd(),r=(e==null?void 0:e.firstWeekContainsDate)??((f=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??t.firstWeekContainsDate??((v=(g=t.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,s=G0(n,e),a=Fn((e==null?void 0:e.in)||n,0);return a.setFullYear(s,0,r),a.setHours(0,0,0,0),Ou(a,e)}function gk(n,e){const t=Pn(n,e==null?void 0:e.in),r=+Ou(t,e)-+mk(t,e);return Math.round(r/j0)+1}function We(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const es={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return We(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):We(t+1,2)},d(n,e){return We(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return We(n.getHours()%12||12,e.length)},H(n,e){return We(n.getHours(),e.length)},m(n,e){return We(n.getMinutes(),e.length)},s(n,e){return We(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return We(s,e.length)}},xa={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},J_={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return es.y(n,e)},Y:function(n,e,t,r){const s=G0(n,r),a=s>0?s:1-s;if(e==="YY"){const u=a%100;return We(u,2)}return e==="Yo"?t.ordinalNumber(a,{unit:"year"}):We(a,e.length)},R:function(n,e){const t=$0(n);return We(t,e.length)},u:function(n,e){const t=n.getFullYear();return We(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return We(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return We(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return es.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return We(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=gk(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):We(s,e.length)},I:function(n,e,t){const r=pk(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):We(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):es.d(n,e)},D:function(n,e,t){const r=fk(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):We(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),a=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return We(a,2);case"eo":return t.ordinalNumber(a,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),a=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return We(a,e.length);case"co":return t.ordinalNumber(a,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return We(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=xa.noon:r===0?s=xa.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=xa.evening:r>=12?s=xa.afternoon:r>=4?s=xa.morning:s=xa.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return es.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):es.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):We(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):We(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):es.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):es.s(n,e)},S:function(n,e){return es.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return ew(r);case"XXXX":case"XX":return ho(r);case"XXXXX":case"XXX":default:return ho(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return ew(r);case"xxxx":case"xx":return ho(r);case"xxxxx":case"xxx":default:return ho(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Z_(r,":");case"OOOO":default:return"GMT"+ho(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Z_(r,":");case"zzzz":default:return"GMT"+ho(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return We(r,e.length)},T:function(n,e,t){return We(+n,e.length)}};function Z_(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),a=r%60;return a===0?t+String(s):t+String(s)+e+We(a,2)}function ew(n,e){return n%60===0?(n>0?"-":"+")+We(Math.abs(n)/60,2):ho(n,e)}function ho(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=We(Math.trunc(r/60),2),a=We(r%60,2);return t+s+e+a}const tw=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},K0=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},yk=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return tw(n,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",tw(r,e)).replace("{{time}}",K0(s,e))},vk={p:K0,P:yk},_k=/^D+$/,wk=/^Y+$/,Ek=["D","DD","YY","YYYY"];function Tk(n){return _k.test(n)}function Ik(n){return wk.test(n)}function Sk(n,e,t){const r=Ak(n,e,t);if(console.warn(r),Ek.includes(n))throw new RangeError(r)}function Ak(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Rk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ck=/^'([^]*?)'?$/,kk=/''/g,bk=/[a-zA-Z]/;function Ua(n,e,t){var v,w,T,P;const r=Cd(),s=r.locale??dk,a=r.firstWeekContainsDate??((w=(v=r.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??1,u=r.weekStartsOn??((P=(T=r.locale)==null?void 0:T.options)==null?void 0:P.weekStartsOn)??0,d=Pn(n,t==null?void 0:t.in);if(!xC(d))throw new RangeError("Invalid time value");let f=e.match(Pk).map(D=>{const x=D[0];if(x==="p"||x==="P"){const k=vk[x];return k(D,s.formatLong)}return D}).join("").match(Rk).map(D=>{if(D==="''")return{isToken:!1,value:"'"};const x=D[0];if(x==="'")return{isToken:!1,value:Nk(D)};if(J_[x])return{isToken:!0,value:D};if(x.match(bk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:D}});s.localize.preprocessor&&(f=s.localize.preprocessor(d,f));const g={firstWeekContainsDate:a,weekStartsOn:u,locale:s};return f.map(D=>{if(!D.isToken)return D.value;const x=D.value;(Ik(x)||Tk(x))&&Sk(x,e,String(n));const k=J_[x[0]];return k(d,x,s.localize,g)}).join("")}function Nk(n){const e=n.match(Ck);return e?e[1].replace(kk,"'"):n}function xk(n,e){return W0(Fn(n,n),H0(n))}function Ok(n,e,t){return PC(n,-1,t)}function Dk(n,e){return W0(Fn(n,n),Ok(H0(n)))}function kd(n,e){const t=()=>Fn(e==null?void 0:e.in,NaN),s=Fk(n);let a;if(s.date){const g=Uk(s.date,2);a=jk(g.restDateString,g.year)}if(!a||isNaN(+a))return t();const u=+a;let d=0,f;if(s.time&&(d=Bk(s.time),isNaN(d)))return t();if(s.timezone){if(f=zk(s.timezone),isNaN(f))return t()}else{const g=new Date(u+d),v=Pn(0,e==null?void 0:e.in);return v.setFullYear(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate()),v.setHours(g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds()),v}return Pn(u+d+f,e==null?void 0:e.in)}const Ph={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Mk=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Lk=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Vk=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Fk(n){const e={},t=n.split(Ph.dateTimeDelimiter);let r;if(t.length>2)return e;if(/:/.test(t[0])?r=t[0]:(e.date=t[0],r=t[1],Ph.timeZoneDelimiter.test(e.date)&&(e.date=n.split(Ph.timeZoneDelimiter)[0],r=n.substr(e.date.length,n.length))),r){const s=Ph.timezone.exec(r);s?(e.time=r.replace(s[1],""),e.timezone=s[1]):e.time=r}return e}function Uk(n,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};const s=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:a===null?s:a*100,restDateString:n.slice((r[1]||r[2]).length)}}function jk(n,e){if(e===null)return new Date(NaN);const t=n.match(Mk);if(!t)return new Date(NaN);const r=!!t[4],s=pu(t[1]),a=pu(t[2])-1,u=pu(t[3]),d=pu(t[4]),f=pu(t[5])-1;if(r)return Gk(e,d,f)?$k(e,d,f):new Date(NaN);{const g=new Date(0);return!Hk(e,a,u)||!Wk(e,s)?new Date(NaN):(g.setUTCFullYear(e,a,Math.max(s,u)),g)}}function pu(n){return n?parseInt(n):1}function Bk(n){const e=n.match(Lk);if(!e)return NaN;const t=jp(e[1]),r=jp(e[2]),s=jp(e[3]);return Kk(t,r,s)?t*z0+r*B0+s*1e3:NaN}function jp(n){return n&&parseFloat(n.replace(",","."))||0}function zk(n){if(n==="Z")return 0;const e=n.match(Vk);if(!e)return 0;const t=e[1]==="+"?-1:1,r=parseInt(e[2]),s=e[3]&&parseInt(e[3])||0;return Qk(r,s)?t*(r*z0+s*B0):NaN}function $k(n,e,t){const r=new Date(0);r.setUTCFullYear(n,0,4);const s=r.getUTCDay()||7,a=(e-1)*7+t+1-s;return r.setUTCDate(r.getUTCDate()+a),r}const qk=[31,null,31,30,31,30,31,31,30,31,30,31];function Q0(n){return n%400===0||n%4===0&&n%100!==0}function Hk(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(qk[e]||(Q0(n)?29:28))}function Wk(n,e){return e>=1&&e<=(Q0(n)?366:365)}function Gk(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function Kk(n,e,t){return n===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}function Qk(n,e){return e>=0&&e<=59}function Yk(...n){return AC(GP(n))}function jF(n){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:0,maximumFractionDigits:2}).format(n)}function BF(n,e="dd MMM yyyy"){if(!n)return"";const t=typeof n=="string"?kd(n):n.toDate?n.toDate():n;return Ua(t,e)}function zF(n,e="hh:mm a"){if(!n)return"";const t=typeof n=="string"?kd(n):n.toDate?n.toDate():n;return Ua(t,e)}function $F(n){if(!n)return"";const e=typeof n=="string"?kd(n):n.toDate?n.toDate():n;return Ua(e,"dd MMM yyyy, hh:mm a")}function qF(n){if(!n)return"";const e=typeof n=="string"?kd(n):n.toDate?n.toDate():n;return xk(e)?Ua(e,"hh:mm a"):Dk(e)?"Yesterday "+Ua(e,"hh:mm a"):Ua(e,"dd MMM, hh:mm a")}function HF(n){if(!n)return"?";const e=n.trim().split(" ");return e.length===1?e[0].charAt(0).toUpperCase():(e[0].charAt(0)+e[e.length-1].charAt(0)).toUpperCase()}function WF(n,e){return n.reduce((t,r)=>{const s=typeof e=="function"?e(r):r[e];return(t[s]=t[s]||[]).push(r),t},{})}function Y0({size:n="md",className:e}){const t={sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8",xl:"h-12 w-12"};return re.jsxs("svg",{className:Yk("animate-spin text-primary-600",t[n],e),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[re.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),re.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}function ig({message:n="Loading..."}){return re.jsxs("div",{className:"fixed inset-0 bg-white flex flex-col items-center justify-center z-50",children:[re.jsx(Y0,{size:"xl"}),re.jsx("p",{className:"mt-4 text-secondary-600 font-medium",children:n})]})}function GF(){return re.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:re.jsx(Y0,{size:"lg"})})}const Xk=()=>{};var nw={};/**
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
 */const X0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Jk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},J0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|g>>6,P=g&63;f||(P=64,u||(T=64)),r.push(t[v],t[w],t[T],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(X0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const g=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||g==null||w==null)throw new Zk;const T=a<<2|d>>4;if(r.push(T),g!==64){const P=d<<4&240|g>>2;if(r.push(P),w!==64){const D=g<<6&192|w;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eb=function(n){const e=X0(n);return J0.encodeByteArray(e,!0)},td=function(n){return eb(n).replace(/\./g,"")},Z0=function(n){try{return J0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nb=()=>tb().__FIREBASE_DEFAULTS__,rb=()=>{if(typeof process>"u"||typeof nw>"u")return;const n=nw.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ib=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Z0(n[1]);return e&&JSON.parse(e)},bd=()=>{try{return Xk()||nb()||rb()||ib()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eT=n=>{var e,t;return(t=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},sg=n=>{const e=eT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tT=()=>{var n;return(n=bd())===null||n===void 0?void 0:n.config},nT=n=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class sb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ri(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function rT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[td(JSON.stringify(t)),td(JSON.stringify(u)),""].join(".")}const Tu={};function ob(){const n={prod:[],emulator:[]};for(const e of Object.keys(Tu))Tu[e]?n.emulator.push(e):n.prod.push(e);return n}function ab(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let rw=!1;function xd(n,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||Tu[n]===e||Tu[n]||rw)return;Tu[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=ob().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,P){T.setAttribute("width","24"),T.setAttribute("id",P),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{rw=!0,u()},T}function v(T,P){T.setAttribute("id",P),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=ab(r),P=t("text"),D=document.getElementById(P)||document.createElement("span"),x=t("learnmore"),k=document.getElementById(x)||document.createElement("a"),q=t("preprendIcon"),X=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const G=T.element;d(G),v(k,x);const te=g();f(X,q),G.append(X,D,k,te),document.body.appendChild(G)}a?(D.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function ub(){var n;const e=(n=bd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hb(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function db(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fb(){const n=ln();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pb(){return!ub()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mb(){try{return typeof indexedDB=="object"}catch{return!1}}function gb(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const yb="FirebaseError";class Zn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yb,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?vb(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Zn(s,d,r)}}function vb(n,e){return n.replace(_b,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _b=/\{\$([^}]+)}/g;function wb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ao(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(iw(a)&&iw(u)){if(!Ao(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function iw(n){return n!==null&&typeof n=="object"}/**
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
 */function Xu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function yu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Eb(n,e){const t=new Tb(n,e);return t.subscribe.bind(t)}class Tb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ib(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Bp),s.error===void 0&&(s.error=Bp),s.complete===void 0&&(s.complete=Bp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ib(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bp(){}/**
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
 */const fo="[DEFAULT]";/**
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
 */class Sb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sb;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rb(e))try{this.getOrInitializeService({instanceIdentifier:fo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=fo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fo){return this.instances.has(e)}getOptions(e=fo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ab(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fo){return this.component?this.component.multipleInstances?e:fo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ab(n){return n===fo?void 0:n}function Rb(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const Cb={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},kb=xe.INFO,bb={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},Nb=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=bb[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class og{constructor(e){this.name=e,this._logLevel=kb,this._logHandler=Nb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const xb=(n,e)=>e.some(t=>n instanceof t);let sw,ow;function Ob(){return sw||(sw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Db(){return ow||(ow=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iT=new WeakMap,ym=new WeakMap,sT=new WeakMap,zp=new WeakMap,ag=new WeakMap;function Mb(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(_i(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&iT.set(t,n)}).catch(()=>{}),ag.set(e,n),e}function Lb(n){if(ym.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});ym.set(n,e)}let vm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ym.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Vb(n){vm=n(vm)}function Fb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($p(this),e,...t);return sT.set(r,e.sort?e.sort():[e]),_i(r)}:Db().includes(n)?function(...e){return n.apply($p(this),e),_i(iT.get(this))}:function(...e){return _i(n.apply($p(this),e))}}function Ub(n){return typeof n=="function"?Fb(n):(n instanceof IDBTransaction&&Lb(n),xb(n,Ob())?new Proxy(n,vm):n)}function _i(n){if(n instanceof IDBRequest)return Mb(n);if(zp.has(n))return zp.get(n);const e=Ub(n);return e!==n&&(zp.set(n,e),ag.set(e,n)),e}const $p=n=>ag.get(n);function Od(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=_i(u);return r&&u.addEventListener("upgradeneeded",f=>{r(_i(u.result),f.oldVersion,f.newVersion,_i(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}function qp(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),_i(t).then(()=>{})}const jb=["get","getKey","getAll","getAllKeys","count"],Bb=["put","add","delete","clear"],Hp=new Map;function aw(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hp.get(e))return Hp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Bb.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jb.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),s&&f.done]))[0]};return Hp.set(e,a),a}Vb(n=>({...n,get:(e,t,r)=>aw(e,t)||n.get(e,t,r),has:(e,t)=>!!aw(e,t)||n.has(e,t)}));/**
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
 */class zb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($b(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function $b(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _m="@firebase/app",lw="0.13.2";/**
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
 */const Ti=new og("@firebase/app"),qb="@firebase/app-compat",Hb="@firebase/analytics-compat",Wb="@firebase/analytics",Gb="@firebase/app-check-compat",Kb="@firebase/app-check",Qb="@firebase/auth",Yb="@firebase/auth-compat",Xb="@firebase/database",Jb="@firebase/data-connect",Zb="@firebase/database-compat",eN="@firebase/functions",tN="@firebase/functions-compat",nN="@firebase/installations",rN="@firebase/installations-compat",iN="@firebase/messaging",sN="@firebase/messaging-compat",oN="@firebase/performance",aN="@firebase/performance-compat",lN="@firebase/remote-config",uN="@firebase/remote-config-compat",cN="@firebase/storage",hN="@firebase/storage-compat",dN="@firebase/firestore",fN="@firebase/ai",pN="@firebase/firestore-compat",mN="firebase",gN="11.10.0";/**
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
 */const wm="[DEFAULT]",yN={[_m]:"fire-core",[qb]:"fire-core-compat",[Wb]:"fire-analytics",[Hb]:"fire-analytics-compat",[Kb]:"fire-app-check",[Gb]:"fire-app-check-compat",[Qb]:"fire-auth",[Yb]:"fire-auth-compat",[Xb]:"fire-rtdb",[Jb]:"fire-data-connect",[Zb]:"fire-rtdb-compat",[eN]:"fire-fn",[tN]:"fire-fn-compat",[nN]:"fire-iid",[rN]:"fire-iid-compat",[iN]:"fire-fcm",[sN]:"fire-fcm-compat",[oN]:"fire-perf",[aN]:"fire-perf-compat",[lN]:"fire-rc",[uN]:"fire-rc-compat",[cN]:"fire-gcs",[hN]:"fire-gcs-compat",[dN]:"fire-fst",[pN]:"fire-fst-compat",[fN]:"fire-vertex","fire-js":"fire-js",[mN]:"fire-js-all"};/**
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
 */const nd=new Map,vN=new Map,Em=new Map;function uw(n,e){try{n.container.addComponent(e)}catch(t){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jn(n){const e=n.name;if(Em.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;Em.set(e,n);for(const t of nd.values())uw(t,n);for(const t of vN.values())uw(t,n);return!0}function Mo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Sn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const _N={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vs=new Do("app","Firebase",_N);/**
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
 */class wN{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vs.create("app-deleted",{appName:this._name})}}/**
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
 */const Lo=gN;function oT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw vs.create("bad-app-name",{appName:String(s)});if(t||(t=tT()),!t)throw vs.create("no-options");const a=nd.get(s);if(a){if(Ao(t,a.options)&&Ao(r,a.config))return a;throw vs.create("duplicate-app",{appName:s})}const u=new Pb(s);for(const f of Em.values())u.addComponent(f);const d=new wN(t,r,u);return nd.set(s,d),d}function Dd(n=wm){const e=nd.get(n);if(!e&&n===wm&&tT())return oT();if(!e)throw vs.create("no-app",{appName:n});return e}function an(n,e,t){var r;let s=(r=yN[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(d.join(" "));return}Jn(new Un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const EN="firebase-heartbeat-database",TN=1,Du="firebase-heartbeat-store";let Wp=null;function aT(){return Wp||(Wp=Od(EN,TN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Du)}catch(t){console.warn(t)}}}}).catch(n=>{throw vs.create("idb-open",{originalErrorMessage:n.message})})),Wp}async function IN(n){try{const t=(await aT()).transaction(Du),r=await t.objectStore(Du).get(lT(n));return await t.done,r}catch(e){if(e instanceof Zn)Ti.warn(e.message);else{const t=vs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ti.warn(t.message)}}}async function cw(n,e){try{const r=(await aT()).transaction(Du,"readwrite");await r.objectStore(Du).put(e,lT(n)),await r.done}catch(t){if(t instanceof Zn)Ti.warn(t.message);else{const r=vs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ti.warn(r.message)}}}function lT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const SN=1024,AN=30;class RN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new CN(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=hw();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>AN){const u=kN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ti.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hw(),{heartbeatsToSend:r,unsentEntries:s}=PN(this._heartbeatsCache.heartbeats),a=td(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Ti.warn(t),""}}}function hw(){return new Date().toISOString().substring(0,10)}function PN(n,e=SN){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),dw(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),dw(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class CN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mb()?gb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await IN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return cw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return cw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dw(n){return td(JSON.stringify({version:2,heartbeats:n})).length}function kN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function bN(n){Jn(new Un("platform-logger",e=>new zb(e),"PRIVATE")),Jn(new Un("heartbeat",e=>new RN(e),"PRIVATE")),an(_m,lw,n),an(_m,lw,"esm2017"),an("fire-js","")}bN("");function lg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function uT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NN=uT,cT=new Do("auth","Firebase",uT());/**
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
 */const rd=new og("@firebase/auth");function xN(n,...e){rd.logLevel<=xe.WARN&&rd.warn(`Auth (${Lo}): ${n}`,...e)}function jh(n,...e){rd.logLevel<=xe.ERROR&&rd.error(`Auth (${Lo}): ${n}`,...e)}/**
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
 */function _r(n,...e){throw ug(n,...e)}function Fr(n,...e){return ug(n,...e)}function hT(n,e,t){const r=Object.assign(Object.assign({},NN()),{[e]:t});return new Do("auth","Firebase",r).create(e,{appName:n.name})}function wi(n){return hT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ug(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return cT.create(n,...e)}function Ee(n,e,...t){if(!n)throw ug(e,...t)}function yi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jh(e),new Error(e)}function Ii(n,e){n||yi(e)}/**
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
 */function Tm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ON(){return fw()==="http:"||fw()==="https:"}function fw(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function DN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ON()||hb()||"connection"in navigator)?navigator.onLine:!0}function MN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ju{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ii(t>e,"Short delay should be less than long delay!"),this.isMobile=lb()||db()}get(){return DN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cg(n,e){Ii(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FN=new Ju(3e4,6e4);function xs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Os(n,e,t,r,s={}){return fT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Xu(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:f},a);return cb()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Ri(n.emulatorConfig.host)&&(g.credentials="include"),dT.fetch()(await pT(n,n.config.apiHost,t,d),g)})}async function fT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},LN),e);try{const s=new jN(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Ch(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ch(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Ch(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Ch(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw hT(n,v,g);_r(n,v)}}catch(s){if(s instanceof Zn)throw s;_r(n,"network-request-failed",{message:String(s)})}}async function Zu(n,e,t,r,s={}){const a=await Os(n,e,t,r,s);return"mfaPendingCredential"in a&&_r(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function pT(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?cg(n.config,s):`${n.config.apiScheme}://${s}`;return VN.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function UN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Fr(this.auth,"network-request-failed")),FN.get())})}}function Ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Fr(n,e,r);return s.customData._tokenResponse=t,s}function pw(n){return n!==void 0&&n.enterprise!==void 0}class BN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return UN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zN(n,e){return Os(n,"GET","/v2/recaptchaConfig",xs(n,e))}/**
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
 */async function $N(n,e){return Os(n,"POST","/v1/accounts:delete",e)}async function id(n,e){return Os(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Iu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qN(n,e=!1){const t=et(n),r=await t.getIdToken(e),s=hg(r);Ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Iu(Gp(s.auth_time)),issuedAtTime:Iu(Gp(s.iat)),expirationTime:Iu(Gp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Gp(n){return Number(n)*1e3}function hg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return jh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Z0(t);return s?JSON.parse(s):(jh("Failed to decode base64 JWT payload"),null)}catch(s){return jh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mw(n){const e=hg(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Zn&&HN(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function HN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class WN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Im{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Iu(this.lastLoginAt),this.creationTime=Iu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sd(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Mu(n,id(t,{idToken:r}));Ee(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?mT(a.providerUserInfo):[],d=KN(n.providerData,u),f=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?g:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Im(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function GN(n){const e=et(n);await sd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KN(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mT(n){return n.map(e=>{var{providerId:t}=e,r=lg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QN(n,e){const t=await fT(n,{},async()=>{const r=Xu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await pT(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Ri(n.emulatorConfig.host)&&(f.credentials="include"),dT.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function YN(n,e){return Os(n,"POST","/v2/accounts:revokeToken",xs(n,e))}/**
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
 */class ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=mw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await QN(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new ja;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ee(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ja,this.toJSON())}_performRefresh(){return yi("not implemented")}}/**
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
 */function ts(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=lg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Im(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Mu(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qN(this,e)}reload(){return GN(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await sd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await Mu(this,$N(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,g,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,D=(u=t.photoURL)!==null&&u!==void 0?u:void 0,x=(d=t.tenantId)!==null&&d!==void 0?d:void 0,k=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,q=(g=t.createdAt)!==null&&g!==void 0?g:void 0,X=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:G,emailVerified:te,isAnonymous:ie,providerData:ge,stsTokenManager:O}=t;Ee(G&&O,e,"internal-error");const S=ja.fromJSON(this.name,O);Ee(typeof G=="string",e,"internal-error"),ts(w,e.name),ts(T,e.name),Ee(typeof te=="boolean",e,"internal-error"),Ee(typeof ie=="boolean",e,"internal-error"),ts(P,e.name),ts(D,e.name),ts(x,e.name),ts(k,e.name),ts(q,e.name),ts(X,e.name);const R=new vr({uid:G,auth:e,email:T,emailVerified:te,displayName:w,isAnonymous:ie,photoURL:D,phoneNumber:P,tenantId:x,stsTokenManager:S,createdAt:q,lastLoginAt:X});return ge&&Array.isArray(ge)&&(R.providerData=ge.map(b=>Object.assign({},b))),k&&(R._redirectEventId=k),R}static async _fromIdTokenResponse(e,t,r=!1){const s=new ja;s.updateFromServerResponse(t);const a=new vr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sd(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ee(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?mT(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new ja;d.updateFromIdToken(r);const f=new vr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Im(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,g),f}}/**
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
 */const gw=new Map;function vi(n){Ii(n instanceof Function,"Expected a class definition");let e=gw.get(n);return e?(Ii(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gw.set(n,e),e)}/**
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
 */class gT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gT.type="NONE";const yw=gT;/**
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
 */function Bh(n,e,t){return`firebase:${n}:${e}:${t}`}class Ba{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Bh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Bh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await id(this.auth,{idToken:e}).catch(()=>{});return t?vr._fromGetAccountInfoResponse(this.auth,t,e):null}return vr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ba(vi(yw),e,r);const s=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||vi(yw);const u=Bh(r,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(u);if(v){let w;if(typeof v=="string"){const T=await id(e,{idToken:v}).catch(()=>{});if(!T)break;w=await vr._fromGetAccountInfoResponse(e,T,v)}else w=vr._fromJSON(e,v);g!==a&&(d=w),a=g;break}}catch{}const f=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ba(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new Ba(a,e,r))}}/**
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
 */function vw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TT(e))return"Blackberry";if(IT(e))return"Webos";if(vT(e))return"Safari";if((e.includes("chrome/")||_T(e))&&!e.includes("edge/"))return"Chrome";if(ET(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yT(n=ln()){return/firefox\//i.test(n)}function vT(n=ln()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _T(n=ln()){return/crios\//i.test(n)}function wT(n=ln()){return/iemobile/i.test(n)}function ET(n=ln()){return/android/i.test(n)}function TT(n=ln()){return/blackberry/i.test(n)}function IT(n=ln()){return/webos/i.test(n)}function dg(n=ln()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function XN(n=ln()){var e;return dg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JN(){return fb()&&document.documentMode===10}function ST(n=ln()){return dg(n)||ET(n)||IT(n)||TT(n)||/windows phone/i.test(n)||wT(n)}/**
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
 */function AT(n,e=[]){let t;switch(n){case"Browser":t=vw(ln());break;case"Worker":t=`${vw(ln())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Lo}/${r}`}/**
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
 */class ZN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ex(n,e={}){return Os(n,"GET","/v2/passwordPolicy",xs(n,e))}/**
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
 */const tx=6;class nx{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:tx,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class rx{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _w(this),this.idTokenSubscription=new _w(this),this.beforeStateQueue=new ZN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vi(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Ba.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await id(this,{idToken:e}),r=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Sn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(wi(this));const t=e?et(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ex(this),t=new nx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Do("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await YN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vi(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Ba.create(this,[vi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xN(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Vo(n){return et(n)}class _w{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eb(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ix(n){Md=n}function RT(n){return Md.loadJS(n)}function sx(){return Md.recaptchaEnterpriseScript}function ox(){return Md.gapiScript}function ax(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class lx{constructor(){this.enterprise=new ux}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ux{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const cx="recaptcha-enterprise",PT="NO_RECAPTCHA";class hx{constructor(e){this.type=cx,this.auth=Vo(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{zN(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new BN(f);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;pw(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(g=>{u(g)}).catch(()=>{u(PT)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lx().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&pw(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=sx();f.length!==0&&(f+=d),RT(f).then(()=>{s(d,a,u)}).catch(g=>{u(g)})}}).catch(d=>{u(d)})})}}async function ww(n,e,t,r=!1,s=!1){const a=new hx(n);let u;if(s)u=PT;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Sm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await ww(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await ww(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function dx(n,e){const t=Mo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ao(a,e??{}))return s;_r(s,"already-initialized")}return t.initialize({options:e})}function fx(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(vi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function px(n,e,t){const r=Vo(n);Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=CT(e),{host:u,port:d}=mx(e),f=d===null?"":`:${d}`,g={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ee(Ao(g,r.config.emulator)&&Ao(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Ri(u)?(Nd(`${a}//${u}${f}`),xd("Auth",!0)):gx()}function CT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mx(n){const e=CT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Ew(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Ew(u)}}}function Ew(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class fg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yi("not implemented")}_getIdTokenResponse(e){return yi("not implemented")}_linkToIdToken(e,t){return yi("not implemented")}_getReauthenticationResolver(e){return yi("not implemented")}}async function yx(n,e){return Os(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vx(n,e){return Zu(n,"POST","/v1/accounts:signInWithPassword",xs(n,e))}/**
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
 */async function _x(n,e){return Zu(n,"POST","/v1/accounts:signInWithEmailLink",xs(n,e))}async function wx(n,e){return Zu(n,"POST","/v1/accounts:signInWithEmailLink",xs(n,e))}/**
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
 */class Lu extends fg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Lu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Lu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sm(e,t,"signInWithPassword",vx);case"emailLink":return _x(e,{email:this._email,oobCode:this._password});default:_r(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sm(e,r,"signUpPassword",yx);case"emailLink":return wx(e,{idToken:t,email:this._email,oobCode:this._password});default:_r(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function za(n,e){return Zu(n,"POST","/v1/accounts:signInWithIdp",xs(n,e))}/**
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
 */const Ex="http://localhost";class Ro extends fg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_r("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=lg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Ro(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return za(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,za(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,za(e,t)}buildRequest(){const e={requestUri:Ex,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xu(t)}return e}}/**
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
 */function Tx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ix(n){const e=gu(yu(n)).link,t=e?gu(yu(e)).deep_link_id:null,r=gu(yu(n)).deep_link_id;return(r?gu(yu(r)).link:null)||r||t||e||n}class pg{constructor(e){var t,r,s,a,u,d;const f=gu(yu(e)),g=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,w=Tx((s=f.mode)!==null&&s!==void 0?s:null);Ee(g&&v&&w,"argument-error"),this.apiKey=g,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Ix(e);try{return new pg(t)}catch{return null}}}/**
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
 */class ul{constructor(){this.providerId=ul.PROVIDER_ID}static credential(e,t){return Lu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=pg.parseLink(t);return Ee(r,"argument-error"),Lu._fromEmailAndCode(e,r.code,r.tenantId)}}ul.PROVIDER_ID="password";ul.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ul.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ec extends kT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class is extends ec{constructor(){super("facebook.com")}static credential(e){return Ro._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";/**
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
 */class ss extends ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ro._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ss.credential(t,r)}catch{return null}}}ss.GOOGLE_SIGN_IN_METHOD="google.com";ss.PROVIDER_ID="google.com";/**
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
 */class os extends ec{constructor(){super("github.com")}static credential(e){return Ro._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.GITHUB_SIGN_IN_METHOD="github.com";os.PROVIDER_ID="github.com";/**
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
 */class as extends ec{constructor(){super("twitter.com")}static credential(e,t){return Ro._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return as.credential(t,r)}catch{return null}}}as.TWITTER_SIGN_IN_METHOD="twitter.com";as.PROVIDER_ID="twitter.com";/**
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
 */async function Sx(n,e){return Zu(n,"POST","/v1/accounts:signUp",xs(n,e))}/**
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
 */class Po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await vr._fromIdTokenResponse(e,r,s),u=Tw(r);return new Po({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Tw(r);return new Po({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Tw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class od extends Zn{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,od.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new od(e,t,r,s)}}function bT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?od._fromErrorAndOperation(n,a,e,r):a})}async function Ax(n,e,t=!1){const r=await Mu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Po._forOperation(n,"link",r)}/**
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
 */async function Rx(n,e,t=!1){const{auth:r}=n;if(Sn(r.app))return Promise.reject(wi(r));const s="reauthenticate";try{const a=await Mu(n,bT(r,s,e,n),t);Ee(a.idToken,r,"internal-error");const u=hg(a.idToken);Ee(u,r,"internal-error");const{sub:d}=u;return Ee(n.uid===d,r,"user-mismatch"),Po._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&_r(r,"user-mismatch"),a}}/**
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
 */async function NT(n,e,t=!1){if(Sn(n.app))return Promise.reject(wi(n));const r="signIn",s=await bT(n,r,e),a=await Po._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function Px(n,e){return NT(Vo(n),e)}/**
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
 */async function xT(n){const e=Vo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cx(n,e,t){if(Sn(n.app))return Promise.reject(wi(n));const r=Vo(n),u=await Sm(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sx).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&xT(n),f}),d=await Po._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function kx(n,e,t){return Sn(n.app)?Promise.reject(wi(n)):Px(et(n),ul.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xT(n),r})}function bx(n,e,t,r){return et(n).onIdTokenChanged(e,t,r)}function Nx(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function xx(n,e,t,r){return et(n).onAuthStateChanged(e,t,r)}function Ox(n){return et(n).signOut()}const ad="__sak";/**
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
 */class OT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ad,"1"),this.storage.removeItem(ad),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Dx=1e3,Mx=10;class DT extends OT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ST(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);JN()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mx):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}DT.type="LOCAL";const Lx=DT;/**
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
 */class MT extends OT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}MT.type="SESSION";const LT=MT;/**
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
 */function Vx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ld{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ld(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async g=>g(t.origin,a)),f=await Vx(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ld.receivers=[];/**
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
 */function mg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Fx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const g=mg("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const T=w;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Ur(){return window}function Ux(n){Ur().location.href=n}/**
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
 */function VT(){return typeof Ur().WorkerGlobalScope<"u"&&typeof Ur().importScripts=="function"}async function jx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bx(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zx(){return VT()?self:null}/**
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
 */const FT="firebaseLocalStorageDb",$x=1,ld="firebaseLocalStorage",UT="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vd(n,e){return n.transaction([ld],e?"readwrite":"readonly").objectStore(ld)}function qx(){const n=indexedDB.deleteDatabase(FT);return new tc(n).toPromise()}function Am(){const n=indexedDB.open(FT,$x);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ld,{keyPath:UT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ld)?e(r):(r.close(),await qx(),e(await Am()))})})}async function Iw(n,e,t){const r=Vd(n,!0).put({[UT]:e,value:t});return new tc(r).toPromise()}async function Hx(n,e){const t=Vd(n,!1).get(e),r=await new tc(t).toPromise();return r===void 0?null:r.value}function Sw(n,e){const t=Vd(n,!0).delete(e);return new tc(t).toPromise()}const Wx=800,Gx=3;class jT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Am(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Gx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ld._getInstance(zx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jx(),!this.activeServiceWorker)return;this.sender=new Fx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Am();return await Iw(e,ad,"1"),await Sw(e,ad),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Iw(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Hx(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Vd(s,!1).getAll();return new tc(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jT.type="LOCAL";const Kx=jT;new Ju(3e4,6e4);/**
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
 */function Qx(n,e){return e?vi(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class gg extends fg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return za(e,this._buildIdpRequest())}_linkToIdToken(e,t){return za(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return za(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yx(n){return NT(n.auth,new gg(n),n.bypassAuthState)}function Xx(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Rx(t,new gg(n),n.bypassAuthState)}async function Jx(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Ax(t,new gg(n),n.bypassAuthState)}/**
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
 */class BT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yx;case"linkViaPopup":case"linkViaRedirect":return Jx;case"reauthViaPopup":case"reauthViaRedirect":return Xx;default:_r(this.auth,"internal-error")}}resolve(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zx=new Ju(2e3,1e4);class Va extends BT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Va.currentPopupAction&&Va.currentPopupAction.cancel(),Va.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Ii(this.filter.length===1,"Popup operations only handle one event");const e=mg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Va.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zx.get())};e()}}Va.currentPopupAction=null;/**
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
 */const eO="pendingRedirect",zh=new Map;class tO extends BT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zh.get(this.auth._key());if(!e){try{const r=await nO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zh.set(this.auth._key(),e)}return this.bypassAuthState||zh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nO(n,e){const t=sO(e),r=iO(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function rO(n,e){zh.set(n._key(),e)}function iO(n){return vi(n._redirectPersistence)}function sO(n){return Bh(eO,n.config.apiKey,n.name)}async function oO(n,e,t=!1){if(Sn(n.app))return Promise.reject(wi(n));const r=Vo(n),s=Qx(r,e),u=await new tO(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const aO=600*1e3;class lO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Fr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Aw(e))}saveEventToCache(e){this.cachedEventUids.add(Aw(e)),this.lastProcessedEventTime=Date.now()}}function Aw(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uO(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zT(n);default:return!1}}/**
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
 */async function cO(n,e={}){return Os(n,"GET","/v1/projects",e)}/**
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
 */const hO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dO=/^https?/;async function fO(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cO(n);for(const t of e)try{if(pO(t))return}catch{}_r(n,"unauthorized-domain")}function pO(n){const e=Tm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!dO.test(t))return!1;if(hO.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mO=new Ju(3e4,6e4);function Rw(){const n=Ur().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gO(n){return new Promise((e,t)=>{var r,s,a;function u(){Rw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rw(),t(Fr(n,"network-request-failed"))},timeout:mO.get()})}if(!((s=(r=Ur().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Ur().gapi)===null||a===void 0)&&a.load)u();else{const d=ax("iframefcb");return Ur()[d]=()=>{gapi.load?u():t(Fr(n,"network-request-failed"))},RT(`${ox()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw $h=null,e})}let $h=null;function yO(n){return $h=$h||gO(n),$h}/**
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
 */const vO=new Ju(5e3,15e3),_O="__/auth/iframe",wO="emulator/auth/iframe",EO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IO(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cg(e,wO):`https://${n.config.authDomain}/${_O}`,r={apiKey:e.apiKey,appName:n.name,v:Lo},s=TO.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Xu(r).slice(1)}`}async function SO(n){const e=await yO(n),t=Ur().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:IO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EO,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Fr(n,"network-request-failed"),d=Ur().setTimeout(()=>{a(u)},vO.get());function f(){Ur().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const AO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RO=500,PO=600,CO="_blank",kO="http://localhost";class Pw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bO(n,e,t,r=RO,s=PO){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},AO),{width:r.toString(),height:s.toString(),top:a,left:u}),g=ln().toLowerCase();t&&(d=_T(g)?CO:t),yT(g)&&(e=e||kO,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[P,D])=>`${T}${P}=${D},`,"");if(XN(g)&&d!=="_self")return NO(e||"",d),new Pw(null);const w=window.open(e||"",d,v);Ee(w,n,"popup-blocked");try{w.focus()}catch{}return new Pw(w)}function NO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const xO="__/auth/handler",OO="emulator/auth/handler",DO=encodeURIComponent("fac");async function Cw(n,e,t,r,s,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Lo,eventId:s};if(e instanceof kT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",wb(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof ec){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),g=f?`#${DO}=${encodeURIComponent(f)}`:"";return`${MO(n)}?${Xu(d).slice(1)}${g}`}function MO({config:n}){return n.emulator?cg(n,OO):`https://${n.authDomain}/${xO}`}/**
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
 */const Kp="webStorageSupport";class LO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LT,this._completeRedirectFn=oO,this._overrideRedirectResult=rO}async _openPopup(e,t,r,s){var a;Ii((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Cw(e,t,r,Tm(),s);return bO(e,u,mg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await Cw(e,t,r,Tm(),s);return Ux(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Ii(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await SO(e),r=new lO(e);return t.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kp,{type:Kp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Kp];u!==void 0&&t(!!u),_r(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ST()||vT()||dg()}}const VO=LO;var kw="@firebase/auth",bw="1.10.8";/**
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
 */class FO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jO(n){Jn(new Un("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ee(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AT(n)},g=new rx(r,s,a,f);return fx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Jn(new Un("auth-internal",e=>{const t=Vo(e.getProvider("auth").getImmediate());return(r=>new FO(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(kw,bw,UO(n)),an(kw,bw,"esm2017")}/**
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
 */const BO=300,zO=nT("authIdTokenMaxAge")||BO;let Nw=null;const $O=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zO)return;const s=t==null?void 0:t.token;Nw!==s&&(Nw=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qO(n=Dd()){const e=Mo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dx(n,{popupRedirectResolver:VO,persistence:[Kx,Lx,LT]}),r=nT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=$O(a.toString());Nx(t,u,()=>u(t.currentUser)),bx(t,d=>u(d))}}const s=eT("auth");return s&&px(t,`http://${s}`),t}function HO(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ix({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Fr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",HO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jO("Browser");var xw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,$T;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,S){function R(){}R.prototype=S.prototype,O.D=S.prototype,O.prototype=new R,O.prototype.constructor=O,O.C=function(b,V,L){for(var C=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)C[Qe-2]=arguments[Qe];return S.prototype[V].apply(b,C)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(O,S,R){R||(R=0);var b=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)b[V]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(V=0;16>V;++V)b[V]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=O.g[0],R=O.g[1],V=O.g[2];var L=O.g[3],C=S+(L^R&(V^L))+b[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=L+(V^S&(R^V))+b[1]+3905402710&4294967295,L=S+(C<<12&4294967295|C>>>20),C=V+(R^L&(S^R))+b[2]+606105819&4294967295,V=L+(C<<17&4294967295|C>>>15),C=R+(S^V&(L^S))+b[3]+3250441966&4294967295,R=V+(C<<22&4294967295|C>>>10),C=S+(L^R&(V^L))+b[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=L+(V^S&(R^V))+b[5]+1200080426&4294967295,L=S+(C<<12&4294967295|C>>>20),C=V+(R^L&(S^R))+b[6]+2821735955&4294967295,V=L+(C<<17&4294967295|C>>>15),C=R+(S^V&(L^S))+b[7]+4249261313&4294967295,R=V+(C<<22&4294967295|C>>>10),C=S+(L^R&(V^L))+b[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=L+(V^S&(R^V))+b[9]+2336552879&4294967295,L=S+(C<<12&4294967295|C>>>20),C=V+(R^L&(S^R))+b[10]+4294925233&4294967295,V=L+(C<<17&4294967295|C>>>15),C=R+(S^V&(L^S))+b[11]+2304563134&4294967295,R=V+(C<<22&4294967295|C>>>10),C=S+(L^R&(V^L))+b[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=L+(V^S&(R^V))+b[13]+4254626195&4294967295,L=S+(C<<12&4294967295|C>>>20),C=V+(R^L&(S^R))+b[14]+2792965006&4294967295,V=L+(C<<17&4294967295|C>>>15),C=R+(S^V&(L^S))+b[15]+1236535329&4294967295,R=V+(C<<22&4294967295|C>>>10),C=S+(V^L&(R^V))+b[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=L+(R^V&(S^R))+b[6]+3225465664&4294967295,L=S+(C<<9&4294967295|C>>>23),C=V+(S^R&(L^S))+b[11]+643717713&4294967295,V=L+(C<<14&4294967295|C>>>18),C=R+(L^S&(V^L))+b[0]+3921069994&4294967295,R=V+(C<<20&4294967295|C>>>12),C=S+(V^L&(R^V))+b[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=L+(R^V&(S^R))+b[10]+38016083&4294967295,L=S+(C<<9&4294967295|C>>>23),C=V+(S^R&(L^S))+b[15]+3634488961&4294967295,V=L+(C<<14&4294967295|C>>>18),C=R+(L^S&(V^L))+b[4]+3889429448&4294967295,R=V+(C<<20&4294967295|C>>>12),C=S+(V^L&(R^V))+b[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=L+(R^V&(S^R))+b[14]+3275163606&4294967295,L=S+(C<<9&4294967295|C>>>23),C=V+(S^R&(L^S))+b[3]+4107603335&4294967295,V=L+(C<<14&4294967295|C>>>18),C=R+(L^S&(V^L))+b[8]+1163531501&4294967295,R=V+(C<<20&4294967295|C>>>12),C=S+(V^L&(R^V))+b[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=L+(R^V&(S^R))+b[2]+4243563512&4294967295,L=S+(C<<9&4294967295|C>>>23),C=V+(S^R&(L^S))+b[7]+1735328473&4294967295,V=L+(C<<14&4294967295|C>>>18),C=R+(L^S&(V^L))+b[12]+2368359562&4294967295,R=V+(C<<20&4294967295|C>>>12),C=S+(R^V^L)+b[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=L+(S^R^V)+b[8]+2272392833&4294967295,L=S+(C<<11&4294967295|C>>>21),C=V+(L^S^R)+b[11]+1839030562&4294967295,V=L+(C<<16&4294967295|C>>>16),C=R+(V^L^S)+b[14]+4259657740&4294967295,R=V+(C<<23&4294967295|C>>>9),C=S+(R^V^L)+b[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=L+(S^R^V)+b[4]+1272893353&4294967295,L=S+(C<<11&4294967295|C>>>21),C=V+(L^S^R)+b[7]+4139469664&4294967295,V=L+(C<<16&4294967295|C>>>16),C=R+(V^L^S)+b[10]+3200236656&4294967295,R=V+(C<<23&4294967295|C>>>9),C=S+(R^V^L)+b[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=L+(S^R^V)+b[0]+3936430074&4294967295,L=S+(C<<11&4294967295|C>>>21),C=V+(L^S^R)+b[3]+3572445317&4294967295,V=L+(C<<16&4294967295|C>>>16),C=R+(V^L^S)+b[6]+76029189&4294967295,R=V+(C<<23&4294967295|C>>>9),C=S+(R^V^L)+b[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=L+(S^R^V)+b[12]+3873151461&4294967295,L=S+(C<<11&4294967295|C>>>21),C=V+(L^S^R)+b[15]+530742520&4294967295,V=L+(C<<16&4294967295|C>>>16),C=R+(V^L^S)+b[2]+3299628645&4294967295,R=V+(C<<23&4294967295|C>>>9),C=S+(V^(R|~L))+b[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=L+(R^(S|~V))+b[7]+1126891415&4294967295,L=S+(C<<10&4294967295|C>>>22),C=V+(S^(L|~R))+b[14]+2878612391&4294967295,V=L+(C<<15&4294967295|C>>>17),C=R+(L^(V|~S))+b[5]+4237533241&4294967295,R=V+(C<<21&4294967295|C>>>11),C=S+(V^(R|~L))+b[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=L+(R^(S|~V))+b[3]+2399980690&4294967295,L=S+(C<<10&4294967295|C>>>22),C=V+(S^(L|~R))+b[10]+4293915773&4294967295,V=L+(C<<15&4294967295|C>>>17),C=R+(L^(V|~S))+b[1]+2240044497&4294967295,R=V+(C<<21&4294967295|C>>>11),C=S+(V^(R|~L))+b[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=L+(R^(S|~V))+b[15]+4264355552&4294967295,L=S+(C<<10&4294967295|C>>>22),C=V+(S^(L|~R))+b[6]+2734768916&4294967295,V=L+(C<<15&4294967295|C>>>17),C=R+(L^(V|~S))+b[13]+1309151649&4294967295,R=V+(C<<21&4294967295|C>>>11),C=S+(V^(R|~L))+b[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=L+(R^(S|~V))+b[11]+3174756917&4294967295,L=S+(C<<10&4294967295|C>>>22),C=V+(S^(L|~R))+b[2]+718787259&4294967295,V=L+(C<<15&4294967295|C>>>17),C=R+(L^(V|~S))+b[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(V+(C<<21&4294967295|C>>>11))&4294967295,O.g[2]=O.g[2]+V&4294967295,O.g[3]=O.g[3]+L&4294967295}r.prototype.u=function(O,S){S===void 0&&(S=O.length);for(var R=S-this.blockSize,b=this.B,V=this.h,L=0;L<S;){if(V==0)for(;L<=R;)s(this,O,L),L+=this.blockSize;if(typeof O=="string"){for(;L<S;)if(b[V++]=O.charCodeAt(L++),V==this.blockSize){s(this,b),V=0;break}}else for(;L<S;)if(b[V++]=O[L++],V==this.blockSize){s(this,b),V=0;break}}this.h=V,this.o+=S},r.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;var R=8*this.o;for(S=O.length-8;S<O.length;++S)O[S]=R&255,R/=256;for(this.u(O),O=Array(16),S=R=0;4>S;++S)for(var b=0;32>b;b+=8)O[R++]=this.g[S]>>>b&255;return O};function a(O,S){var R=d;return Object.prototype.hasOwnProperty.call(R,O)?R[O]:R[O]=S(O)}function u(O,S){this.h=S;for(var R=[],b=!0,V=O.length-1;0<=V;V--){var L=O[V]|0;b&&L==S||(R[V]=L,b=!1)}this.g=R}var d={};function f(O){return-128<=O&&128>O?a(O,function(S){return new u([S|0],0>S?-1:0)}):new u([O|0],0>O?-1:0)}function g(O){if(isNaN(O)||!isFinite(O))return w;if(0>O)return k(g(-O));for(var S=[],R=1,b=0;O>=R;b++)S[b]=O/R|0,R*=4294967296;return new u(S,0)}function v(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return k(v(O.substring(1),S));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(S,8)),b=w,V=0;V<O.length;V+=8){var L=Math.min(8,O.length-V),C=parseInt(O.substring(V,V+L),S);8>L?(L=g(Math.pow(S,L)),b=b.j(L).add(g(C))):(b=b.j(R),b=b.add(g(C)))}return b}var w=f(0),T=f(1),P=f(16777216);n=u.prototype,n.m=function(){if(x(this))return-k(this).m();for(var O=0,S=1,R=0;R<this.g.length;R++){var b=this.i(R);O+=(0<=b?b:4294967296+b)*S,S*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(D(this))return"0";if(x(this))return"-"+k(this).toString(O);for(var S=g(Math.pow(O,6)),R=this,b="";;){var V=te(R,S).g;R=q(R,V.j(S));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(O);if(R=V,D(R))return L+b;for(;6>L.length;)L="0"+L;b=L+b}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function D(O){if(O.h!=0)return!1;for(var S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function x(O){return O.h==-1}n.l=function(O){return O=q(this,O),x(O)?-1:D(O)?0:1};function k(O){for(var S=O.g.length,R=[],b=0;b<S;b++)R[b]=~O.g[b];return new u(R,~O.h).add(T)}n.abs=function(){return x(this)?k(this):this},n.add=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],b=0,V=0;V<=S;V++){var L=b+(this.i(V)&65535)+(O.i(V)&65535),C=(L>>>16)+(this.i(V)>>>16)+(O.i(V)>>>16);b=C>>>16,L&=65535,C&=65535,R[V]=C<<16|L}return new u(R,R[R.length-1]&-2147483648?-1:0)};function q(O,S){return O.add(k(S))}n.j=function(O){if(D(this)||D(O))return w;if(x(this))return x(O)?k(this).j(k(O)):k(k(this).j(O));if(x(O))return k(this.j(k(O)));if(0>this.l(P)&&0>O.l(P))return g(this.m()*O.m());for(var S=this.g.length+O.g.length,R=[],b=0;b<2*S;b++)R[b]=0;for(b=0;b<this.g.length;b++)for(var V=0;V<O.g.length;V++){var L=this.i(b)>>>16,C=this.i(b)&65535,Qe=O.i(V)>>>16,Pt=O.i(V)&65535;R[2*b+2*V]+=C*Pt,X(R,2*b+2*V),R[2*b+2*V+1]+=L*Pt,X(R,2*b+2*V+1),R[2*b+2*V+1]+=C*Qe,X(R,2*b+2*V+1),R[2*b+2*V+2]+=L*Qe,X(R,2*b+2*V+2)}for(b=0;b<S;b++)R[b]=R[2*b+1]<<16|R[2*b];for(b=S;b<2*S;b++)R[b]=0;return new u(R,0)};function X(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function G(O,S){this.g=O,this.h=S}function te(O,S){if(D(S))throw Error("division by zero");if(D(O))return new G(w,w);if(x(O))return S=te(k(O),S),new G(k(S.g),k(S.h));if(x(S))return S=te(O,k(S)),new G(k(S.g),S.h);if(30<O.g.length){if(x(O)||x(S))throw Error("slowDivide_ only works with positive integers.");for(var R=T,b=S;0>=b.l(O);)R=ie(R),b=ie(b);var V=ge(R,1),L=ge(b,1);for(b=ge(b,2),R=ge(R,2);!D(b);){var C=L.add(b);0>=C.l(O)&&(V=V.add(R),L=C),b=ge(b,1),R=ge(R,1)}return S=q(O,V.j(S)),new G(V,S)}for(V=w;0<=O.l(S);){for(R=Math.max(1,Math.floor(O.m()/S.m())),b=Math.ceil(Math.log(R)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),L=g(R),C=L.j(S);x(C)||0<C.l(O);)R-=b,L=g(R),C=L.j(S);D(L)&&(L=T),V=V.add(L),O=q(O,C)}return new G(V,O)}n.A=function(O){return te(this,O).h},n.and=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],b=0;b<S;b++)R[b]=this.i(b)&O.i(b);return new u(R,this.h&O.h)},n.or=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],b=0;b<S;b++)R[b]=this.i(b)|O.i(b);return new u(R,this.h|O.h)},n.xor=function(O){for(var S=Math.max(this.g.length,O.g.length),R=[],b=0;b<S;b++)R[b]=this.i(b)^O.i(b);return new u(R,this.h^O.h)};function ie(O){for(var S=O.g.length+1,R=[],b=0;b<S;b++)R[b]=O.i(b)<<1|O.i(b-1)>>>31;return new u(R,O.h)}function ge(O,S){var R=S>>5;S%=32;for(var b=O.g.length-R,V=[],L=0;L<b;L++)V[L]=0<S?O.i(L+R)>>>S|O.i(L+R+1)<<32-S:O.i(L+R);return new u(V,O.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$T=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=v,_s=u}).apply(typeof xw<"u"?xw:typeof self<"u"?self:typeof window<"u"?window:{});var kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qT,vu,HT,qh,Rm,WT,GT,KT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,_){return c==Array.prototype||c==Object.prototype||(c[m]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof kh=="object"&&kh];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function s(c,m){if(m)e:{var _=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var U=c[I];if(!(U in _))break e;_=_[U]}c=c[c.length-1],I=_[c],m=m(I),m!=I&&m!=null&&e(_,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var _=0,I=!1,U={next:function(){if(!I&&_<c.length){var $=_++;return{value:m($,c[$]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}s("Array.prototype.values",function(c){return c||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,_){return c.call.apply(c.bind,arguments)}function w(c,m,_){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),c.apply(m,U)}}return function(){return c.apply(m,arguments)}}function T(c,m,_){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function P(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function D(c,m){function _(){}_.prototype=m.prototype,c.aa=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(I,U,$){for(var se=Array(arguments.length-2),He=2;He<arguments.length;He++)se[He-2]=arguments[He];return m.prototype[U].apply(I,se)}}function x(c){const m=c.length;if(0<m){const _=Array(m);for(let I=0;I<m;I++)_[I]=c[I];return _}return[]}function k(c,m){for(let _=1;_<arguments.length;_++){const I=arguments[_];if(f(I)){const U=c.length||0,$=I.length||0;c.length=U+$;for(let se=0;se<$;se++)c[U+se]=I[se]}else c.push(I)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function X(c){return/^[\s\xa0]*$/.test(c)}function G(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function te(c){return te[" "](c),c}te[" "]=function(){};var ie=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ge(c,m,_){for(const I in c)m.call(_,c[I],I,c)}function O(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function S(c){const m={};for(const _ in c)m[_]=c[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,m){let _,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(_ in I)c[_]=I[_];for(let $=0;$<R.length;$++)_=R[$],Object.prototype.hasOwnProperty.call(I,_)&&(c[_]=I[_])}}function V(c){var m=1;c=c.split(":");const _=[];for(;0<m&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function L(c){d.setTimeout(()=>{throw c},0)}function C(){var c=me;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class Qe{constructor(){this.h=this.g=null}add(m,_){const I=Pt.get();I.set(m,_),this.h?this.h.next=I:this.g=I,this.h=I}}var Pt=new q(()=>new yt,c=>c.reset());class yt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,oe=!1,me=new Qe,le=()=>{const c=d.Promise.resolve(void 0);Be=()=>{c.then(F)}};var F=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){L(_)}var m=Pt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}oe=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Ce=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return c})();function be(c,m){if(ye.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(ie){e:{try{te(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Le[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&be.aa.h.call(this)}}D(be,ye);var Le={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Ye(c,m,_,I,U){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!I,this.ha=U,this.key=++$e,this.da=this.fa=!1}function Lt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Gr(c){this.src=c,this.g={},this.h=0}Gr.prototype.add=function(c,m,_,I,U){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var se=Pi(c,m,I,U);return-1<se?(m=c[se],_||(m.fa=!1)):(m=new Ye(m,this.src,$,!!I,U),m.fa=_,c.push(m)),m};function jo(c,m){var _=m.type;if(_ in c.g){var I=c.g[_],U=Array.prototype.indexOf.call(I,m,void 0),$;($=0<=U)&&Array.prototype.splice.call(I,U,1),$&&(Lt(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Pi(c,m,_,I){for(var U=0;U<c.length;++U){var $=c[U];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==I)return U}return-1}var Vs="closure_lm_"+(1e6*Math.random()|0),Bo={};function ml(c,m,_,I,U){if(Array.isArray(m)){for(var $=0;$<m.length;$++)ml(c,m[$],_,I,U);return null}return _=vl(_),c&&c[ze]?c.K(m,_,g(I)?!!I.capture:!1,U):gl(c,m,_,!1,I,U)}function gl(c,m,_,I,U,$){if(!m)throw Error("Invalid event type");var se=g(U)?!!U.capture:!!U,He=$o(c);if(He||(c[Vs]=He=new Gr(c)),_=He.add(m,_,I,se,$),_.proxy)return _;if(I=lc(),_.proxy=I,I.src=c,I.listener=_,c.addEventListener)Ce||(U=se),U===void 0&&(U=!1),c.addEventListener(m.toString(),I,U);else if(c.attachEvent)c.attachEvent(Qr(m.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function lc(){function c(_){return m.call(c.src,c.listener,_)}const m=yl;return c}function zo(c,m,_,I,U){if(Array.isArray(m))for(var $=0;$<m.length;$++)zo(c,m[$],_,I,U);else I=g(I)?!!I.capture:!!I,_=vl(_),c&&c[ze]?(c=c.i,m=String(m).toString(),m in c.g&&($=c.g[m],_=Pi($,_,I,U),-1<_&&(Lt($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete c.g[m],c.h--)))):c&&(c=$o(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Pi(m,_,I,U)),(_=-1<c?m[c]:null)&&Kr(_))}function Kr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[ze])jo(m.i,c);else{var _=c.type,I=c.proxy;m.removeEventListener?m.removeEventListener(_,I,c.capture):m.detachEvent?m.detachEvent(Qr(_),I):m.addListener&&m.removeListener&&m.removeListener(I),(_=$o(m))?(jo(_,c),_.h==0&&(_.src=null,m[Vs]=null)):Lt(c)}}}function Qr(c){return c in Bo?Bo[c]:Bo[c]="on"+c}function yl(c,m){if(c.da)c=!0;else{m=new be(m,this);var _=c.listener,I=c.ha||c.src;c.fa&&Kr(c),c=_.call(I,m)}return c}function $o(c){return c=c[Vs],c instanceof Gr?c:null}var qo="__closure_events_fn_"+(1e9*Math.random()>>>0);function vl(c){return typeof c=="function"?c:(c[qo]||(c[qo]=function(m){return c.handleEvent(m)}),c[qo])}function Ct(){Y.call(this),this.i=new Gr(this),this.M=this,this.F=null}D(Ct,Y),Ct.prototype[ze]=!0,Ct.prototype.removeEventListener=function(c,m,_,I){zo(this,c,m,_,I)};function kt(c,m){var _,I=c.F;if(I)for(_=[];I;I=I.F)_.push(I);if(c=c.M,I=m.type||m,typeof m=="string")m=new ye(m,c);else if(m instanceof ye)m.target=m.target||c;else{var U=m;m=new ye(I,c),b(m,U)}if(U=!0,_)for(var $=_.length-1;0<=$;$--){var se=m.g=_[$];U=Yr(se,I,!0,m)&&U}if(se=m.g=c,U=Yr(se,I,!0,m)&&U,U=Yr(se,I,!1,m)&&U,_)for($=0;$<_.length;$++)se=m.g=_[$],U=Yr(se,I,!1,m)&&U}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var _=c.g[m],I=0;I<_.length;I++)Lt(_[I]);delete c.g[m],c.h--}}this.F=null},Ct.prototype.K=function(c,m,_,I){return this.i.add(String(c),m,!1,_,I)},Ct.prototype.L=function(c,m,_,I){return this.i.add(String(c),m,!0,_,I)};function Yr(c,m,_,I){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,$=0;$<m.length;++$){var se=m[$];if(se&&!se.da&&se.capture==_){var He=se.listener,bt=se.ha||se.src;se.fa&&jo(c.i,se),U=He.call(bt,I)!==!1&&U}}return U&&!I.defaultPrevented}function _l(c,m,_){if(typeof c=="function")_&&(c=T(c,_));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function Ci(c){c.g=_l(()=>{c.g=null,c.i&&(c.i=!1,Ci(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Fs extends Y{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Ci(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(c){Y.call(this),this.h=c,this.g={}}D(Us,Y);var wl=[];function El(c){ge(c.g,function(m,_){this.g.hasOwnProperty(_)&&Kr(m)},c),c.g={}}Us.prototype.N=function(){Us.aa.N.call(this),El(this)},Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tl=d.JSON.stringify,Il=d.JSON.parse,Sl=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function js(){}js.prototype.h=null;function Ho(c){return c.h||(c.h=c.i())}function Wo(){}var jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Er(){ye.call(this,"d")}D(Er,ye);function Go(){ye.call(this,"c")}D(Go,ye);var Tr={},Al=null;function Bs(){return Al=Al||new Ct}Tr.La="serverreachability";function Rl(c){ye.call(this,Tr.La,c)}D(Rl,ye);function Xr(c){const m=Bs();kt(m,new Rl(m))}Tr.STAT_EVENT="statevent";function Pl(c,m){ye.call(this,Tr.STAT_EVENT,c),this.stat=m}D(Pl,ye);function vt(c){const m=Bs();kt(m,new Pl(m,c))}Tr.Ma="timingevent";function Ko(c,m){ye.call(this,Tr.Ma,c),this.size=m}D(Ko,ye);function er(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function zs(){this.g=!0}zs.prototype.xa=function(){this.g=!1};function $s(c,m,_,I,U,$){c.info(function(){if(c.g)if($)for(var se="",He=$.split("&"),bt=0;bt<He.length;bt++){var Ve=He[bt].split("=");if(1<Ve.length){var Vt=Ve[0];Ve=Ve[1];var Tt=Vt.split("_");se=2<=Tt.length&&Tt[1]=="type"?se+(Vt+"="+Ve+"&"):se+(Vt+"=redacted&")}}else se=null;else se=$;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+m+`
`+_+`
`+se})}function Qo(c,m,_,I,U,$,se){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+m+`
`+_+`
`+$+" "+se})}function tr(c,m,_,I){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+sf(c,_)+(I?" "+I:"")})}function Cl(c,m){c.info(function(){return"TIMEOUT: "+m})}zs.prototype.info=function(){};function sf(c,m){if(!c.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var I=_[c];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return Tl(_)}catch{return m}}var Yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nr;function qs(){}D(qs,js),qs.prototype.g=function(){return new XMLHttpRequest},qs.prototype.i=function(){return{}},nr=new qs;function rr(c,m,_,I){this.j=c,this.i=m,this.l=_,this.R=I||1,this.U=new Us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var kl={},Xo={};function Jo(c,m,_){c.L=1,c.v=Oi(kn(m)),c.m=_,c.P=!0,bl(c,null)}function bl(c,m){c.F=Date.now(),Xe(c),c.A=kn(c.v);var _=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Mi(_.i,"t",I),c.C=0,_=c.j.J,c.h=new cc,c.g=Cc(c.j,_?m:null,!c.m),0<c.O&&(c.M=new Fs(T(c.Y,c,c.g),c.O)),m=c.U,_=c.g,I=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(wl[0]=U.toString()),U=wl);for(var $=0;$<U.length;$++){var se=ml(_,U[$],I||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Xr(),$s(c.i,c.u,c.A,c.l,c.R,c.m)}rr.prototype.ca=function(c){c=c.target;const m=this.M;m&&gn(c)==3?m.j():this.Y(c)},rr.prototype.Y=function(c){try{if(c==this.g)e:{const Tt=gn(this.g);var m=this.g.Ba();const $n=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Ll(this.g)))){this.J||Tt!=4||m==7||(m==8||0>=$n?Xr(3):Xr(2)),Hs(this);var _=this.g.Z();this.X=_;t:if(hc(this)){var I=Ll(this.g);c="";var U=I.length,$=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),ki(this);var se="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,c+=this.h.i.decode(I[m],{stream:!($&&m==U-1)});I.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,Qo(this.i,this.u,this.A,this.l,this.R,Tt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var He,bt=this.g;if((He=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(He)){var Ve=He;break t}}Ve=null}if(_=Ve)tr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nl(this,_);else{this.o=!1,this.s=3,vt(12),Bn(this),ki(this);break e}}if(this.P){_=!0;let Nn;for(;!this.J&&this.C<se.length;)if(Nn=of(this,se),Nn==Xo){Tt==4&&(this.s=4,vt(14),_=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==kl){this.s=4,vt(15),tr(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else tr(this.i,this.l,Nn,null),Nl(this,Nn);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||se.length!=0||this.h.h||(this.s=1,vt(16),_=!1),this.o=this.o&&_,!_)tr(this.i,this.l,se,"[Invalid Chunked Response]"),Bn(this),ki(this);else if(0<se.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Fl(Vt),Vt.M=!0,vt(11))}}else tr(this.i,this.l,se,null),Nl(this,se);Tt==4&&Bn(this),this.o&&!this.J&&(Tt==4?ua(this.j,this):(this.o=!1,Xe(this)))}else ia(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Bn(this),ki(this)}}}catch{}finally{}};function hc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function of(c,m){var _=c.C,I=m.indexOf(`
`,_);return I==-1?Xo:(_=Number(m.substring(_,I)),isNaN(_)?kl:(I+=1,I+_>m.length?Xo:(m=m.slice(I,I+_),c.C=I+_,m)))}rr.prototype.cancel=function(){this.J=!0,Bn(this)};function Xe(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=er(T(c.ba,c),m)}function Hs(c){c.B&&(d.clearTimeout(c.B),c.B=null)}rr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Cl(this.i,this.A),this.L!=2&&(Xr(),vt(17)),Bn(this),this.s=2,ki(this)):dc(this,this.S-c)};function ki(c){c.j.G==0||c.J||ua(c.j,c)}function Bn(c){Hs(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,El(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Nl(c,m){try{var _=c.j;if(_.G!=0&&(_.g==c||un(_.h,c))){if(!c.K&&un(_.h,c)&&_.G==3){try{var I=_.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)la(_),lr(_);else break e;aa(_),vt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=er(T(_.Za,_),6e3));if(1>=pc(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else ni(_,11)}else if((c.K||_.g==c)&&la(_),!X(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Ve=U[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const Vt=Ve[3];Vt!=null&&(_.la=Vt,_.j.info("VER="+_.la));const Tt=Ve[4];Tt!=null&&(_.Aa=Tt,_.j.info("SVER="+_.Aa));const $n=Ve[5];$n!=null&&typeof $n=="number"&&0<$n&&(I=1.5*$n,_.L=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const Nn=c.g;if(Nn){const Js=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Js){var $=I.h;$.g||Js.indexOf("spdy")==-1&&Js.indexOf("quic")==-1&&Js.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(xl($,$.h),$.h=null))}if(I.D){const ha=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;ha&&(I.ya=ha,Ke(I.I,I.D,ha))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),I=_;var se=c;if(I.qa=Pc(I,I.J?I.ia:null,I.W),se.K){mc(I.h,se);var He=se,bt=I.L;bt&&(He.I=bt),He.B&&(Hs(He),Xe(He)),I.g=se}else Xs(I);0<_.i.length&&Rr(_)}else Ve[0]!="stop"&&Ve[0]!="close"||ni(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?ni(_,7):qt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}Xr(4)}catch{}}var fc=class{constructor(c,m){this.g=c,this.map=m}};function Ws(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function pc(c){return c.h?1:c.g?c.g.size:0}function un(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function xl(c,m){c.g?c.g.add(m):c.h=m}function mc(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Ws.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.D);return m}return x(c.i)}function Zo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],_=c.length,I=0;I<_;I++)m.push(c[I]);return m}m=[],_=0;for(I in c)m[_++]=c[I];return m}function ea(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var _=0;_<c;_++)m.push(_);return m}m=[],_=0;for(const I in c)m[_++]=I;return m}}}function bi(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var _=ea(c),I=Zo(c),U=I.length,$=0;$<U;$++)m.call(void 0,I[$],_&&_[$],c)}var Gs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function af(c,m){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var I=c[_].indexOf("="),U=null;if(0<=I){var $=c[_].substring(0,I);U=c[_].substring(I+1)}else $=c[_];m($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Jr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Jr){this.h=c.h,Ks(this,c.j),this.o=c.o,this.g=c.g,Ni(this,c.s),this.l=c.l;var m=c.i,_=new Ir;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),xi(this,_),this.m=c.m}else c&&(m=String(c).match(Gs))?(this.h=!1,Ks(this,m[1]||"",!0),this.o=De(m[2]||""),this.g=De(m[3]||"",!0),Ni(this,m[4]),this.l=De(m[5]||"",!0),xi(this,m[6]||"",!0),this.m=De(m[7]||"")):(this.h=!1,this.i=new Ir(null,this.h))}Jr.prototype.toString=function(){var c=[],m=this.j;m&&c.push(Di(m,ta,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Di(m,ta,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Di(_,_.charAt(0)=="/"?_c:vc,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Di(_,Ol)),c.join("")};function kn(c){return new Jr(c)}function Ks(c,m,_){c.j=_?De(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Ni(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function xi(c,m,_){m instanceof Ir?(c.i=m,Sr(c.i,c.h)):(_||(m=Di(m,wc)),c.i=new Ir(m,c.h))}function Ke(c,m,_){c.i.set(m,_)}function Oi(c){return Ke(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function De(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Di(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,yc),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ta=/[#\/\?@]/g,vc=/[#\?:]/g,_c=/[#\?]/g,wc=/[#\?@]/g,Ol=/#/g;function Ir(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function $t(c){c.g||(c.g=new Map,c.h=0,c.i&&af(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Ir.prototype,n.add=function(c,m){$t(this),this.i=null,c=zn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function ir(c,m){$t(c),m=zn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function sr(c,m){return $t(c),m=zn(c,m),c.g.has(m)}n.forEach=function(c,m){$t(this),this.g.forEach(function(_,I){_.forEach(function(U){c.call(m,U,I,this)},this)},this)},n.na=function(){$t(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let I=0;I<m.length;I++){const U=c[I];for(let $=0;$<U.length;$++)_.push(m[I])}return _},n.V=function(c){$t(this);let m=[];if(typeof c=="string")sr(this,c)&&(m=m.concat(this.g.get(zn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)m=m.concat(c[_])}return m},n.set=function(c,m){return $t(this),this.i=null,c=zn(this,c),sr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Mi(c,m,_){ir(c,m),0<_.length&&(c.i=null,c.g.set(zn(c,m),x(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var I=m[_];const $=encodeURIComponent(String(I)),se=this.V(I);for(I=0;I<se.length;I++){var U=$;se[I]!==""&&(U+="="+encodeURIComponent(String(se[I]))),c.push(U)}}return this.i=c.join("&")};function zn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Sr(c,m){m&&!c.j&&($t(c),c.i=null,c.g.forEach(function(_,I){var U=I.toLowerCase();I!=U&&(ir(this,I),Mi(this,U,_))},c)),c.j=m}function lf(c,m){const _=new zs;if(d.Image){const I=new Image;I.onload=P(mn,_,"TestLoadImage: loaded",!0,m,I),I.onerror=P(mn,_,"TestLoadImage: error",!1,m,I),I.onabort=P(mn,_,"TestLoadImage: abort",!1,m,I),I.ontimeout=P(mn,_,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else m(!1)}function Ec(c,m){const _=new zs,I=new AbortController,U=setTimeout(()=>{I.abort(),mn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:I.signal}).then($=>{clearTimeout(U),$.ok?mn(_,"TestPingServer: ok",!0,m):mn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),mn(_,"TestPingServer: error",!1,m)})}function mn(c,m,_,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(_)}catch{}}function uf(){this.g=new Sl}function Tc(c,m,_){const I=_||"";try{bi(c,function(U,$){let se=U;g(U)&&(se=Tl(U)),m.push(I+$+"="+encodeURIComponent(se))})}catch(U){throw m.push(I+"type="+encodeURIComponent("_badmap")),U}}function Zr(c){this.l=c.Ub||null,this.j=c.eb||!1}D(Zr,js),Zr.prototype.g=function(){return new Qs(this.l,this.j)},Zr.prototype.i=(function(c){return function(){return c}})({});function Qs(c,m){Ct.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Qs,Ct),n=Qs.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,ar(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ic(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ic(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?or(this):ar(this),this.readyState==3&&Ic(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,or(this))},n.Qa=function(c){this.g&&(this.response=c,or(this))},n.ga=function(){this.g&&or(this)};function or(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ar(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function ar(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ei(c){let m="";return ge(c,function(_,I){m+=I,m+=":",m+=_,m+=`\r
`}),m}function Li(c,m,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=ei(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Ke(c,m,_))}function st(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(st,Ct);var cf=/^https?$/i,Dl=["POST","PUT"];n=st.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nr.g(),this.v=this.o?Ho(this.o):Ho(nr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch($){Ys(this,$);return}if(c=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)_.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const $ of I.keys())_.set($,I.get($));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Dl,m,void 0))||I||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,se]of _)this.g.setRequestHeader($,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ra(this),this.u=!0,this.g.send(c),this.u=!1}catch($){Ys(this,$)}};function Ys(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,na(c),bn(c)}function na(c){c.A||(c.A=!0,kt(c,"complete"),kt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,kt(this,"complete"),kt(this,"abort"),bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ml(this):this.bb())},n.bb=function(){Ml(this)};function Ml(c){if(c.h&&typeof u<"u"&&(!c.v[1]||gn(c)!=4||c.Z()!=2)){if(c.u&&gn(c)==4)_l(c.Ea,0,c);else if(kt(c,"readystatechange"),gn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var I;if(I=se===0){var U=String(c.D).match(Gs)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),I=!cf.test(U?U.toLowerCase():"")}_=I}if(_)kt(c,"complete"),kt(c,"success");else{c.m=6;try{var $=2<gn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",na(c)}}finally{bn(c)}}}}function bn(c,m){if(c.g){ra(c);const _=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||kt(c,"ready");try{_.onreadystatechange=I}catch{}}}function ra(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function gn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Il(m)}};function Ll(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ia(c){const m={};c=(c.g&&2<=gn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(X(c[I]))continue;var _=V(c[I]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[U]||[];m[U]=$,$.push(_)}O(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function Vl(c){this.Aa=0,this.i=[],this.j=new zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,c),this.cb=Ar("retryDelaySeedMs",1e4,c),this.Wa=Ar("forwardChannelMaxRetries",2,c),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ws(c&&c.concurrentRequestLimit),this.Da=new uf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Vl.prototype,n.la=8,n.G=1,n.connect=function(c,m,_,I){vt(0),this.W=c,this.H=m||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.I=Pc(this,null,this.W),Rr(this)};function qt(c){if(sa(c),c.G==3){var m=c.U++,_=kn(c.I);if(Ke(_,"SID",c.K),Ke(_,"RID",m),Ke(_,"TYPE","terminate"),ti(c,_),m=new rr(c,c.j,m),m.L=2,m.v=Oi(kn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=Cc(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Xe(m)}Rc(c)}function lr(c){c.g&&(Fl(c),c.g.cancel(),c.g=null)}function sa(c){lr(c),c.u&&(d.clearTimeout(c.u),c.u=null),la(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Rr(c){if(!Cn(c.h)&&!c.s){c.s=!0;var m=c.Ga;Be||le(),oe||(Be(),oe=!0),me.add(m,c),c.B=0}}function hf(c,m){return pc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=er(T(c.Ga,c,m),Ac(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new rr(this,this.j,c);let $=this.o;if(this.S&&($?($=S($),b($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Vi(this,U,m),_=kn(this.I),Ke(_,"RID",c),Ke(_,"CVER",22),this.D&&Ke(_,"X-HTTP-Session-Id",this.D),ti(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(ei($)))+"&"+m:this.m&&Li(_,this.m,$)),xl(this.h,U),this.Ua&&Ke(_,"TYPE","init"),this.P?(Ke(_,"$req",m),Ke(_,"SID","null"),U.T=!0,Jo(U,_,null)):Jo(U,_,m),this.G=2}}else this.G==3&&(c?oa(this,c):this.i.length==0||Cn(this.h)||oa(this))};function oa(c,m){var _;m?_=m.l:_=c.U++;const I=kn(c.I);Ke(I,"SID",c.K),Ke(I,"RID",_),Ke(I,"AID",c.T),ti(c,I),c.m&&c.o&&Li(I,c.m,c.o),_=new rr(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Vi(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),xl(c.h,_),Jo(_,I,m)}function ti(c,m){c.H&&ge(c.H,function(_,I){Ke(m,I,_)}),c.l&&bi({},function(_,I){Ke(m,I,_)})}function Vi(c,m,_){_=Math.min(c.i.length,_);var I=c.l?T(c.l.Na,c.l,c):null;e:{var U=c.i;let $=-1;for(;;){const se=["count="+_];$==-1?0<_?($=U[0].g,se.push("ofs="+$)):$=0:se.push("ofs="+$);let He=!0;for(let bt=0;bt<_;bt++){let Ve=U[bt].g;const Vt=U[bt].map;if(Ve-=$,0>Ve)$=Math.max(0,U[bt].g-100),He=!1;else try{Tc(Vt,se,"req"+Ve+"_")}catch{I&&I(Vt)}}if(He){I=se.join("&");break e}}}return c=c.i.splice(0,_),m.D=c,I}function Xs(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Be||le(),oe||(Be(),oe=!0),me.add(m,c),c.v=0}}function aa(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=er(T(c.Fa,c),Ac(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=er(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),lr(this),Sc(this))};function Fl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new rr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=kn(c.qa);Ke(m,"RID","rpc"),Ke(m,"SID",c.K),Ke(m,"AID",c.T),Ke(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ke(m,"TO",c.ja),Ke(m,"TYPE","xmlhttp"),ti(c,m),c.m&&c.o&&Li(m,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Oi(kn(m)),_.m=null,_.P=!0,bl(_,c)}n.Za=function(){this.C!=null&&(this.C=null,lr(this),aa(this),vt(19))};function la(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function ua(c,m){var _=null;if(c.g==m){la(c),Fl(c),c.g=null;var I=2}else if(un(c.h,m))_=m.D,mc(c.h,m),I=1;else return;if(c.G!=0){if(m.o)if(I==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=c.B;I=Bs(),kt(I,new Ko(I,_)),Rr(c)}else Xs(c);else if(U=m.s,U==3||U==0&&0<m.X||!(I==1&&hf(c,m)||I==2&&aa(c)))switch(_&&0<_.length&&(m=c.h,m.i=m.i.concat(_)),U){case 1:ni(c,5);break;case 4:ni(c,10);break;case 3:ni(c,6);break;default:ni(c,2)}}}function Ac(c,m){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*m}function ni(c,m){if(c.j.info("Error code "+m),m==2){var _=T(c.fb,c),I=c.Xa;const U=!I;I=new Jr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ks(I,"https"),Oi(I),U?lf(I.toString(),_):Ec(I.toString(),_)}else vt(2);c.G=0,c.l&&c.l.sa(m),Rc(c),sa(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Rc(c){if(c.G=0,c.ka=[],c.l){const m=gc(c.h);(m.length!=0||c.i.length!=0)&&(k(c.ka,m),k(c.ka,c.i),c.h.i.length=0,x(c.i),c.i.length=0),c.l.ra()}}function Pc(c,m,_){var I=_ instanceof Jr?kn(_):new Jr(_);if(I.g!="")m&&(I.g=m+"."+I.g),Ni(I,I.s);else{var U=d.location;I=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var $=new Jr(null);I&&Ks($,I),m&&($.g=m),U&&Ni($,U),_&&($.l=_),I=$}return _=c.D,m=c.ya,_&&m&&Ke(I,_,m),Ke(I,"VER",c.la),ti(c,I),I}function Cc(c,m,_){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new st(new Zr({eb:_})):new st(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ul(){}n=Ul.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ca(){}ca.prototype.g=function(c,m){return new cn(c,m)};function cn(c,m){Ct.call(this),this.g=new Vl(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!X(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!X(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Pr(this)}D(cn,Ct),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){qt(this.g)},cn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Tl(c),c=_);m.i.push(new fc(m.Ya++,c)),m.G==3&&Rr(m)},cn.prototype.N=function(){this.g.l=null,delete this.j,qt(this.g),delete this.g,cn.aa.N.call(this)};function kc(c){Er.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const _ in m){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}D(kc,Er);function bc(){Go.call(this),this.status=1}D(bc,Go);function Pr(c){this.g=c}D(Pr,Ul),Pr.prototype.ua=function(){kt(this.g,"a")},Pr.prototype.ta=function(c){kt(this.g,new kc(c))},Pr.prototype.sa=function(c){kt(this.g,new bc)},Pr.prototype.ra=function(){kt(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,KT=function(){return new ca},GT=function(){return Bs()},WT=Tr,Rm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,qh=Yo,uc.COMPLETE="complete",HT=uc,Wo.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,vu=Wo,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,qT=st}).apply(typeof kh<"u"?kh:typeof self<"u"?self:typeof window<"u"?window:{});const Ow="@firebase/firestore",Dw="4.8.0";/**
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
 */let cl="11.10.0";/**
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
 */const Co=new og("@firebase/firestore");function Oa(){return Co.logLevel}function ce(n,...e){if(Co.logLevel<=xe.DEBUG){const t=e.map(yg);Co.debug(`Firestore (${cl}): ${n}`,...t)}}function Si(n,...e){if(Co.logLevel<=xe.ERROR){const t=e.map(yg);Co.error(`Firestore (${cl}): ${n}`,...t)}}function Ts(n,...e){if(Co.logLevel<=xe.WARN){const t=e.map(yg);Co.warn(`Firestore (${cl}): ${n}`,...t)}}function yg(n){if(typeof n=="string")return n;try{/**
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
 */function Te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,QT(n,r,t)}function QT(n,e,t){let r=`FIRESTORE (${cl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Si(r),new Error(r)}function qe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||QT(e,s,r)}function Re(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ws{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class YT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(sn.UNAUTHENTICATED)))}shutdown(){}}class GO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class KO{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ws,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ws)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string",31837,{l:r}),new YT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new sn(e)}}class QO{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YO{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new QO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Mw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0,3512);const r=a=>{a.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ce("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Mw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Mw(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function JO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function XT(){return new TextEncoder}/**
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
 */class vg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=JO(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function ke(n,e){return n<e?-1:n>e?1:0}function Pm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ke(r,s);{const a=XT(),u=ZO(a.encode(Lw(n,t)),a.encode(Lw(e,t)));return u!==0?u:ke(r,s)}}t+=r>65535?2:1}return ke(n.length,e.length)}function Lw(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ZO(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ke(n[t],e[t]);return ke(n.length,e.length)}function Za(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Vw="__name__";class xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=xr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return ke(e.length,t.length)}static compareSegments(e,t){const r=xr.isNumericId(e),s=xr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?xr.extractNumericId(e).compare(xr.extractNumericId(t)):Pm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _s.fromString(e.substring(4,e.length-2))}}class Ze extends xr{construct(e,t,r){return new Ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Ze(t)}static emptyPath(){return new Ze([])}}const eD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends xr{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return eD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vw}static keyField(){return new Qt([Vw])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ae(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new ae(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ae(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new ae(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
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
 */function JT(n,e,t){if(!t)throw new ae(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tD(n,e,t,r){if(e===!0&&r===!0)throw new ae(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fw(n){if(!ve.isDocumentKey(n))throw new ae(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uw(n){if(ve.isDocumentKey(n))throw new ae(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ZT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Fd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function jr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fd(n);throw new ae(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Rt(n,e){const t={typeString:n};return e&&(t.value=e),t}function nc(n,e){if(!ZT(n))throw new ae(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ae(K.INVALID_ARGUMENT,t);return!0}/**
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
 */const jw=-62135596800,Bw=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Bw);return new it(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jw)throw new ae(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bw}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(nc(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:Rt("string",it._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
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
 */const Vu=-1;function nD(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ae.fromTimestamp(r===1e9?new it(t+1,0):new it(t,r));return new Is(s,ve.empty(),e)}function rD(n){return new Is(n.readTime,n.key,Vu)}class Is{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Is(Ae.min(),ve.empty(),Vu)}static max(){return new Is(Ae.max(),ve.empty(),Vu)}}function iD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:ke(n.largestBatchId,e.largestBatchId))}/**
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
 */const sD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function hl(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==sD)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,r)=>{t(e)}))}static reject(e){return new Q(((t,r)=>{r(e)}))}static waitFor(e){return new Q(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=Q.resolve(!1);for(const r of e)t=t.next((s=>s?Q.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new Q(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;t(e[g]).next((v=>{u[g]=v,++d,d===a&&r(u)}),(v=>s(v)))}}))}static doWhile(e,t){return new Q(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function aD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function dl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ud{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ud.ue=-1;/**
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
 */const _g=-1;function jd(n){return n==null}function ud(n){return n===0&&1/n==-1/0}function lD(n){return typeof n=="number"&&Number.isInteger(n)&&!ud(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const eI="";function uD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=zw(e)),e=cD(n.get(t),e);return zw(e)}function cD(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case eI:t+="";break;default:t+=a}}return t}function zw(n){return n+eI+""}/**
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
 */function $w(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ds(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ut{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bh(this.root,e,this.comparator,!1)}getReverseIterator(){return new bh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bh(this.root,e,this.comparator,!0)}}class bh{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Kt.RED,this.left=s??Kt.EMPTY,this.right=a??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Kt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Dt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qw(this.data.getIterator())}getIteratorFrom(e){return new qw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Dt(this.comparator);return t.data=e,t}}class qw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new Dt(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Za(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class nI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new nI("Invalid base64 string: "+a):a}})(e);return new Yt(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const hD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ss(n){if(qe(!!n,39018),typeof n=="string"){let e=0;const t=hD.exec(n);if(qe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function As(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
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
 */const rI="server_timestamp",iI="__type__",sI="__previous_value__",oI="__local_write_time__";function wg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[iI])===null||t===void 0?void 0:t.stringValue)===rI}function Bd(n){const e=n.mapValue.fields[sI];return wg(e)?Bd(e):e}function Fu(n){const e=Ss(n.mapValue.fields[oI].timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class dD{constructor(e,t,r,s,a,u,d,f,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g,this.isUsingEmulator=v}}const cd="(default)";class Uu{constructor(e,t){this.projectId=e,this.database=t||cd}static empty(){return new Uu("","")}get isDefaultDatabase(){return this.database===cd}isEqual(e){return e instanceof Uu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const aI="__type__",fD="__max__",Nh={mapValue:{}},lI="__vector__",hd="value";function Rs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wg(n)?4:mD(n)?9007199254740991:pD(n)?10:11:Te(28295,{value:n})}function Wr(n,e){if(n===e)return!0;const t=Rs(n);if(t!==Rs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fu(n).isEqual(Fu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ss(s.timestampValue),d=Ss(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return As(s.bytesValue).isEqual(As(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return wt(s.geoPointValue.latitude)===wt(a.geoPointValue.latitude)&&wt(s.geoPointValue.longitude)===wt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return wt(s.integerValue)===wt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=wt(s.doubleValue),d=wt(a.doubleValue);return u===d?ud(u)===ud(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return Za(n.arrayValue.values||[],e.arrayValue.values||[],Wr);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if($w(u)!==$w(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Wr(u[f],d[f])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function ju(n,e){return(n.values||[]).find((t=>Wr(t,e)))!==void 0}function el(n,e){if(n===e)return 0;const t=Rs(n),r=Rs(e);if(t!==r)return ke(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=wt(a.integerValue||a.doubleValue),f=wt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return Hw(n.timestampValue,e.timestampValue);case 4:return Hw(Fu(n),Fu(e));case 5:return Pm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=As(a),f=As(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let g=0;g<d.length&&g<f.length;g++){const v=ke(d[g],f[g]);if(v!==0)return v}return ke(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=ke(wt(a.latitude),wt(u.latitude));return d!==0?d:ke(wt(a.longitude),wt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ww(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,g,v;const w=a.fields||{},T=u.fields||{},P=(d=w[hd])===null||d===void 0?void 0:d.arrayValue,D=(f=T[hd])===null||f===void 0?void 0:f.arrayValue,x=ke(((g=P==null?void 0:P.values)===null||g===void 0?void 0:g.length)||0,((v=D==null?void 0:D.values)===null||v===void 0?void 0:v.length)||0);return x!==0?x:Ww(P,D)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Nh.mapValue&&u===Nh.mapValue)return 0;if(a===Nh.mapValue)return 1;if(u===Nh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=u.fields||{},v=Object.keys(g);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const T=Pm(f[w],v[w]);if(T!==0)return T;const P=el(d[f[w]],g[v[w]]);if(P!==0)return P}return ke(f.length,v.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{le:t})}}function Hw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ke(n,e);const t=Ss(n),r=Ss(e),s=ke(t.seconds,r.seconds);return s!==0?s:ke(t.nanos,r.nanos)}function Ww(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=el(t[s],r[s]);if(a)return a}return ke(t.length,r.length)}function tl(n){return Cm(n)}function Cm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ss(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return As(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ve.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Cm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Cm(t.fields[u])}`;return s+"}"})(n.mapValue):Te(61005,{value:n})}function Hh(n){switch(Rs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bd(n);return e?16+Hh(e):16;case 5:return 2*n.stringValue.length;case 6:return As(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Hh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ds(r.fields,((a,u)=>{s+=a.length+Hh(u)})),s})(n.mapValue);default:throw Te(13486,{value:n})}}function Gw(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function km(n){return!!n&&"integerValue"in n}function Eg(n){return!!n&&"arrayValue"in n}function Kw(n){return!!n&&"nullValue"in n}function Qw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wh(n){return!!n&&"mapValue"in n}function pD(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[aI])===null||t===void 0?void 0:t.stringValue)===lI}function Su(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ds(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Su(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Su(n.arrayValue.values[t]);return e}return Object.assign({},n)}function mD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===fD}/**
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
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Su(t)}setAll(e){let t=Qt.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=Su(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Wh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Wr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Wh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ds(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new An(Su(this.value))}}function uI(n){const e=[];return Ds(n.fields,((t,r)=>{const s=new Qt([t]);if(Wh(r)){const a=uI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Mn(e)}/**
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
 */class dd{constructor(e,t){this.position=e,this.inclusive=t}}function Yw(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=ve.comparator(ve.fromName(u.referenceValue),t.key):r=el(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Wr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Bu{constructor(e,t="asc"){this.field=e,this.dir=t}}function gD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class cI{}class At extends cI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new vD(e,t,r):t==="array-contains"?new ED(e,r):t==="in"?new TD(e,r):t==="not-in"?new ID(e,r):t==="array-contains-any"?new SD(e,r):new At(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _D(e,r):new wD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(el(t,this.value)):t!==null&&Rs(this.value)===Rs(t)&&this.matchesComparison(el(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wr extends cI{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new wr(e,t)}matches(e){return hI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function hI(n){return n.op==="and"}function dI(n){return yD(n)&&hI(n)}function yD(n){for(const e of n.filters)if(e instanceof wr)return!1;return!0}function bm(n){if(n instanceof At)return n.field.canonicalString()+n.op.toString()+tl(n.value);if(dI(n))return n.filters.map((e=>bm(e))).join(",");{const e=n.filters.map((t=>bm(t))).join(",");return`${n.op}(${e})`}}function fI(n,e){return n instanceof At?(function(r,s){return s instanceof At&&r.op===s.op&&r.field.isEqual(s.field)&&Wr(r.value,s.value)})(n,e):n instanceof wr?(function(r,s){return s instanceof wr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&fI(u,s.filters[d])),!0):!1})(n,e):void Te(19439)}function pI(n){return n instanceof At?(function(t){return`${t.field.canonicalString()} ${t.op} ${tl(t.value)}`})(n):n instanceof wr?(function(t){return t.op.toString()+" {"+t.getFilters().map(pI).join(" ,")+"}"})(n):"Filter"}class vD extends At{constructor(e,t,r){super(e,t,r),this.key=ve.fromName(r.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class _D extends At{constructor(e,t){super(e,"in",t),this.keys=mI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class wD extends At{constructor(e,t){super(e,"not-in",t),this.keys=mI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function mI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ve.fromName(r.referenceValue)))}class ED extends At{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Eg(t)&&ju(t.arrayValue,this.value)}}class TD extends At{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ju(this.value.arrayValue,t)}}class ID extends At{constructor(e,t){super(e,"not-in",t)}matches(e){if(ju(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ju(this.value.arrayValue,t)}}class SD extends At{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Eg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ju(this.value.arrayValue,r)))}}/**
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
 */class AD{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function Jw(n,e=null,t=[],r=[],s=null,a=null,u=null){return new AD(n,e,t,r,s,a,u)}function Tg(n){const e=Re(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>bm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),jd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>tl(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>tl(r))).join(",")),e.Pe=t}return e.Pe}function Ig(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!gD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xw(n.startAt,e.startAt)&&Xw(n.endAt,e.endAt)}function Nm(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class fl{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function RD(n,e,t,r,s,a,u,d){return new fl(n,e,t,r,s,a,u,d)}function zd(n){return new fl(n)}function Zw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gI(n){return n.collectionGroup!==null}function Au(n){const e=Re(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Dt(Qt.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Bu(a,r))})),t.has(Qt.keyField().canonicalString())||e.Te.push(new Bu(Qt.keyField(),r))}return e.Te}function Br(n){const e=Re(n);return e.Ie||(e.Ie=PD(e,Au(n))),e.Ie}function PD(n,e){if(n.limitType==="F")return Jw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Bu(s.field,a)}));const t=n.endAt?new dd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new dd(n.startAt.position,n.startAt.inclusive):null;return Jw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xm(n,e){const t=n.filters.concat([e]);return new fl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function fd(n,e,t){return new fl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $d(n,e){return Ig(Br(n),Br(e))&&n.limitType===e.limitType}function yI(n){return`${Tg(Br(n))}|lt:${n.limitType}`}function Da(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>pI(s))).join(", ")}]`),jd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>tl(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>tl(s))).join(",")),`Target(${r})`})(Br(n))}; limitType=${n.limitType})`}function qd(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ve.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of Au(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const g=Yw(u,d,f);return u.inclusive?g<=0:g<0})(r.startAt,Au(r),s)||r.endAt&&!(function(u,d,f){const g=Yw(u,d,f);return u.inclusive?g>=0:g>0})(r.endAt,Au(r),s))})(n,e)}function CD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vI(n){return(e,t)=>{let r=!1;for(const s of Au(n)){const a=kD(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function kD(n,e,t){const r=n.field.isKeyField()?ve.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),g=d.data.field(a);return f!==null&&g!==null?el(f,g):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Te(19790,{direction:n.dir})}}/**
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
 */class Fo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ds(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return tI(this.inner)}size(){return this.innerSize}}/**
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
 */const bD=new ut(ve.comparator);function Ai(){return bD}const _I=new ut(ve.comparator);function _u(...n){let e=_I;for(const t of n)e=e.insert(t.key,t);return e}function wI(n){let e=_I;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function po(){return Ru()}function EI(){return Ru()}function Ru(){return new Fo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ND=new ut(ve.comparator),xD=new Dt(ve.comparator);function Oe(...n){let e=xD;for(const t of n)e=e.add(t);return e}const OD=new Dt(ke);function DD(){return OD}/**
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
 */function Sg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ud(e)?"-0":e}}function TI(n){return{integerValue:""+n}}function MD(n,e){return lD(e)?TI(e):Sg(n,e)}/**
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
 */class Hd{constructor(){this._=void 0}}function LD(n,e,t){return n instanceof zu?(function(s,a){const u={fields:{[iI]:{stringValue:rI},[oI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&wg(a)&&(a=Bd(a)),a&&(u.fields[sI]=a),{mapValue:u}})(t,e):n instanceof $u?SI(n,e):n instanceof qu?AI(n,e):(function(s,a){const u=II(s,a),d=eE(u)+eE(s.Ee);return km(u)&&km(s.Ee)?TI(d):Sg(s.serializer,d)})(n,e)}function VD(n,e,t){return n instanceof $u?SI(n,e):n instanceof qu?AI(n,e):t}function II(n,e){return n instanceof pd?(function(r){return km(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class zu extends Hd{}class $u extends Hd{constructor(e){super(),this.elements=e}}function SI(n,e){const t=RI(e);for(const r of n.elements)t.some((s=>Wr(s,r)))||t.push(r);return{arrayValue:{values:t}}}class qu extends Hd{constructor(e){super(),this.elements=e}}function AI(n,e){let t=RI(e);for(const r of n.elements)t=t.filter((s=>!Wr(s,r)));return{arrayValue:{values:t}}}class pd extends Hd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function eE(n){return wt(n.integerValue||n.doubleValue)}function RI(n){return Eg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class FD{constructor(e,t){this.field=e,this.transform=t}}function UD(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof $u&&s instanceof $u||r instanceof qu&&s instanceof qu?Za(r.elements,s.elements,Wr):r instanceof pd&&s instanceof pd?Wr(r.Ee,s.Ee):r instanceof zu&&s instanceof zu})(n.transform,e.transform)}class jD{constructor(e,t){this.version=e,this.transformResults=t}}class zr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zr}static exists(e){return new zr(void 0,e)}static updateTime(e){return new zr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wd{}function PI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new kI(n.key,zr.none()):new rc(n.key,n.data,zr.none());{const t=n.data,r=An.empty();let s=new Dt(Qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new Ms(n.key,r,new Mn(s.toArray()),zr.none())}}function BD(n,e,t){n instanceof rc?(function(s,a,u){const d=s.value.clone(),f=nE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Ms?(function(s,a,u){if(!Gh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=nE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(CI(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Pu(n,e,t,r){return n instanceof rc?(function(a,u,d,f){if(!Gh(a.precondition,u))return d;const g=a.value.clone(),v=rE(a.fieldTransforms,f,u);return g.setAll(v),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ms?(function(a,u,d,f){if(!Gh(a.precondition,u))return d;const g=rE(a.fieldTransforms,f,u),v=u.data;return v.setAll(CI(a)),v.setAll(g),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return Gh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function zD(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=II(r.transform,s||null);a!=null&&(t===null&&(t=An.empty()),t.set(r.field,a))}return t||null}function tE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Za(r,s,((a,u)=>UD(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class rc extends Wd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ms extends Wd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function CI(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function nE(n,e,t){const r=new Map;qe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,VD(u,d,t[s]))}return r}function rE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,LD(a,u,e))}return r}class kI extends Wd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $D extends Wd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qD{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&BD(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Pu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Pu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=EI();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=PI(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Ae.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&Za(this.mutations,e.mutations,((t,r)=>tE(t,r)))&&Za(this.baseMutations,e.baseMutations,((t,r)=>tE(t,r)))}}class Ag{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){qe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return ND})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Ag(e,t,r,s)}}/**
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
 */class HD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var St,Fe;function GD(n){switch(n){case K.OK:return Te(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function bI(n){if(n===void 0)return Si("GRPC error has no .code"),K.UNKNOWN;switch(n){case St.OK:return K.OK;case St.CANCELLED:return K.CANCELLED;case St.UNKNOWN:return K.UNKNOWN;case St.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case St.INTERNAL:return K.INTERNAL;case St.UNAVAILABLE:return K.UNAVAILABLE;case St.UNAUTHENTICATED:return K.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case St.NOT_FOUND:return K.NOT_FOUND;case St.ALREADY_EXISTS:return K.ALREADY_EXISTS;case St.PERMISSION_DENIED:return K.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case St.ABORTED:return K.ABORTED;case St.OUT_OF_RANGE:return K.OUT_OF_RANGE;case St.UNIMPLEMENTED:return K.UNIMPLEMENTED;case St.DATA_LOSS:return K.DATA_LOSS;default:return Te(39323,{code:n})}}(Fe=St||(St={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const KD=new _s([4294967295,4294967295],0);function iE(n){const e=XT().encode(n),t=new $T;return t.update(e),new Uint8Array(t.digest())}function sE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new _s([t,r],0),new _s([s,a],0)]}class Rg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new wu(`Invalid padding: ${t}`);if(r<0)throw new wu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new wu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=_s.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(_s.fromNumber(r)));return s.compare(KD)===1&&(s=new _s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=iE(e),[r,s]=sE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Rg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=iE(e),[r,s]=sE(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class wu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ic.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gd(Ae.min(),s,new ut(ke),Ai(),Oe())}}class ic{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ic(r,t,Oe(),Oe(),Oe())}}/**
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
 */class Kh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class NI{constructor(e,t){this.targetId=e,this.De=t}}class xI{constructor(e,t,r=Yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class oE{constructor(){this.ve=0,this.Ce=aE(),this.Fe=Yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Oe(),t=Oe(),r=Oe();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Te(38017,{changeType:a})}})),new ic(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=aE()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class QD{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ai(),this.je=xh(),this.Je=xh(),this.He=new ut(ke)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Nm(a))if(r===0){const u=new ve(a.path);this.Xe(t,u,on.newNoDocument(u,Ae.min()))}else qe(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=As(r).toUint8Array()}catch(f){if(f instanceof nI)return Ts("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Rg(u,s,a)}catch(f){return Ts(f instanceof wu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Nm(d.target)){const f=new ve(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,on.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=Oe();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const g=this.st(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Gd(e,t,this.He,this.ze,r);return this.ze=Ai(),this.je=xh(),this.Je=xh(),this.He=new ut(ke),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new oE,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Dt(ke),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Dt(ke),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new oE),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function xh(){return new ut(ve.comparator)}function aE(){return new ut(ve.comparator)}const YD={asc:"ASCENDING",desc:"DESCENDING"},XD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JD={and:"AND",or:"OR"};class ZD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Om(n,e){return n.useProto3Json||jd(e)?e:{value:e}}function md(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function e2(n,e){return md(n,e.toTimestamp())}function $r(n){return qe(!!n,49232),Ae.fromTimestamp((function(t){const r=Ss(t);return new it(r.seconds,r.nanos)})(n))}function Pg(n,e){return Dm(n,e).canonicalString()}function Dm(n,e){const t=(function(s){return new Ze(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function DI(n){const e=Ze.fromString(n);return qe(UI(e),10190,{key:e.toString()}),e}function Mm(n,e){return Pg(n.databaseId,e.path)}function Qp(n,e){const t=DI(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(LI(t))}function MI(n,e){return Pg(n.databaseId,e)}function t2(n){const e=DI(n);return e.length===4?Ze.emptyPath():LI(e)}function Lm(n){return new Ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function LI(n){return qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lE(n,e,t){return{name:Mm(n,e),fields:t.value.mapValue.fields}}function n2(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(g,v){return g.useProto3Json?(qe(v===void 0||typeof v=="string",58123),Yt.fromBase64String(v||"")):(qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Yt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(g){const v=g.code===void 0?K.UNKNOWN:bI(g.code);return new ae(v,g.message||"")})(u);t=new xI(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qp(n,r.document.name),a=$r(r.document.updateTime),u=r.document.createTime?$r(r.document.createTime):Ae.min(),d=new An({mapValue:{fields:r.document.fields}}),f=on.newFoundDocument(s,a,u,d),g=r.targetIds||[],v=r.removedTargetIds||[];t=new Kh(g,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qp(n,r.document),a=r.readTime?$r(r.readTime):Ae.min(),u=on.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Kh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qp(n,r.document),a=r.removedTargetIds||[];t=new Kh([],a,s,null)}else{if(!("filter"in e))return Te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new WD(s,a),d=r.targetId;t=new NI(d,u)}}return t}function r2(n,e){let t;if(e instanceof rc)t={update:lE(n,e.key,e.value)};else if(e instanceof kI)t={delete:Mm(n,e.key)};else if(e instanceof Ms)t={update:lE(n,e.key,e.data),updateMask:d2(e.fieldMask)};else{if(!(e instanceof $D))return Te(16599,{Rt:e.type});t={verify:Mm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof zu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof $u)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof qu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof pd)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Te(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:e2(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Te(27497)})(n,e.precondition)),t}function i2(n,e){return n&&n.length>0?(qe(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?$r(s.updateTime):$r(a);return u.isEqual(Ae.min())&&(u=$r(a)),new jD(u,s.transformResults||[])})(t,e)))):[]}function s2(n,e){return{documents:[MI(n,e.path)]}}function o2(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=MI(n,s);const a=(function(g){if(g.length!==0)return FI(wr.create(g,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(g){if(g.length!==0)return g.map((v=>(function(T){return{field:Ma(T.field),direction:u2(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Om(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{Vt:t,parent:s}}function a2(n){let e=t2(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){qe(r===1,65062);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const T=VI(w);return T instanceof wr&&dI(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((T=>(function(D){return new Bu(La(D.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,jd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(w){const T=!!w.before,P=w.values||[];return new dd(P,T)})(t.startAt));let g=null;return t.endAt&&(g=(function(w){const T=!w.before,P=w.values||[];return new dd(P,T)})(t.endAt)),RD(e,s,u,a,d,"F",f,g)}function l2(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function VI(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=La(t.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=La(t.unaryFilter.field);return At.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=La(t.unaryFilter.field);return At.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=La(t.unaryFilter.field);return At.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return At.create(La(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return wr.create(t.compositeFilter.filters.map((r=>VI(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function u2(n){return YD[n]}function c2(n){return XD[n]}function h2(n){return JD[n]}function Ma(n){return{fieldPath:n.canonicalString()}}function La(n){return Qt.fromServerFormat(n.fieldPath)}function FI(n){return n instanceof At?(function(t){if(t.op==="=="){if(Qw(t.value))return{unaryFilter:{field:Ma(t.field),op:"IS_NAN"}};if(Kw(t.value))return{unaryFilter:{field:Ma(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qw(t.value))return{unaryFilter:{field:Ma(t.field),op:"IS_NOT_NAN"}};if(Kw(t.value))return{unaryFilter:{field:Ma(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ma(t.field),op:c2(t.op),value:t.value}}})(n):n instanceof wr?(function(t){const r=t.getFilters().map((s=>FI(s)));return r.length===1?r[0]:{compositeFilter:{op:h2(t.op),filters:r}}})(n):Te(54877,{filter:n})}function d2(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function UI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class gs{constructor(e,t,r,s,a=Ae.min(),u=Ae.min(),d=Yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class f2{constructor(e){this.gt=e}}function p2(n){const e=a2({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fd(e,e.limit,"L"):e}/**
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
 */class m2{constructor(){this.Dn=new g2}addToCollectionParentIndex(e,t){return this.Dn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Is.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Is.min())}updateCollectionGroup(e,t,r){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class g2{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Dt(Ze.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Dt(Ze.comparator)).toArray()}}/**
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
 */const uE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jI=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(jI,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);/**
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
 */class nl{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new nl(0)}static ur(){return new nl(-1)}}/**
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
 */const cE="LruGarbageCollector",y2=1048576;function hE([n,e],[t,r]){const s=ke(n,t);return s===0?ke(e,r):s}class v2{constructor(e){this.Tr=e,this.buffer=new Dt(hE),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();hE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _2{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(cE,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){dl(t)?ce(cE,"Ignoring IndexedDB error during garbage collection: ",t):await hl(t)}await this.Rr(3e5)}))}}class w2{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Ud.ue);const r=new v2(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(uE)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uE):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(g=Date.now(),Oa()<=xe.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(g-f)+`ms
Total Duration: ${g-v}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w}))))}}function E2(n,e){return new w2(n,e)}/**
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
 */class T2{constructor(){this.changes=new Fo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class I2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class S2{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Pu(r.mutation,s,Mn.empty(),it.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Oe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Oe()){const s=po();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=_u();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=po();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Oe())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=Ai();const u=Ru(),d=(function(){return Ru()})();return t.forEach(((f,g)=>{const v=r.get(g.key);s.has(g.key)&&(v===void 0||v.mutation instanceof Ms)?a=a.insert(g.key,g):v!==void 0?(u.set(g.key,v.mutation.getFieldMask()),Pu(v.mutation,g,v.mutation.getFieldMask(),it.now())):u.set(g.key,Mn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((g,v)=>u.set(g,v))),t.forEach(((g,v)=>{var w;return d.set(g,new I2(v,(w=u.get(g))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Ru();let s=new ut(((u,d)=>u-d)),a=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const g=t.get(f);if(g===null)return;let v=r.get(f)||Mn.empty();v=d.applyToLocalView(g,v),r.set(f,v);const w=(s.get(d.batchId)||Oe()).add(f);s=s.insert(d.batchId,w)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,v=f.value,w=EI();v.forEach((T=>{if(!a.has(T)){const P=PI(t.get(T),r.get(T));P!==null&&w.set(T,P),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,g,w))}return Q.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return ve.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):Q.resolve(po());let d=Vu,f=a;return u.next((g=>Q.forEach(g,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,g,a))).next((()=>this.computeViews(e,f,g,Oe()))).next((v=>({batchId:d,changes:wI(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next((r=>{let s=_u();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=_u();return this.indexManager.getCollectionParents(e,a).next((d=>Q.forEach(d,(f=>{const g=(function(w,T){return new fl(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,r,s).next((v=>{v.forEach(((w,T)=>{u=u.insert(w,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,g)=>{const v=g.getKey();u.get(v)===null&&(u=u.insert(v,on.newInvalidDocument(v)))}));let d=_u();return u.forEach(((f,g)=>{const v=a.get(f);v!==void 0&&Pu(v.mutation,g,Mn.empty(),it.now()),qd(t,g)&&(d=d.insert(f,g))})),d}))}}/**
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
 */class A2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:$r(s.createTime)}})(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:p2(s.bundledQuery),readTime:$r(s.readTime)}})(t)),Q.resolve()}}/**
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
 */class R2{constructor(){this.overlays=new ut(ve.comparator),this.kr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=po();return Q.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),Q.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),Q.resolve()}getOverlaysForCollection(e,t,r){const s=po(),a=t.length+1,u=new ve(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return Q.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new ut(((g,v)=>g-v));const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let v=a.get(g.largestBatchId);v===null&&(v=po(),a=a.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=po(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=s)););return Q.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new HD(t,r));let a=this.kr.get(t);a===void 0&&(a=Oe(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class P2{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class Cg{constructor(){this.qr=new Dt(zt.Qr),this.$r=new Dt(zt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new zt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new zt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ve(new Ze([])),r=new zt(t,e),s=new zt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ve(new Ze([])),r=new zt(t,e),s=new zt(t,e+1);let a=Oe();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new zt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ve.comparator(e.key,t.key)||ke(e.Hr,t.Hr)}static Ur(e,t){return ke(e.Hr,t.Hr)||ve.comparator(e.key,t.key)}}/**
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
 */class C2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Dt(zt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new qD(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new zt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(u)}lookupMutationBatch(e,t){return Q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return Q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?_g:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new zt(t,0),s=new zt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),Q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Dt(ke);return t.forEach((s=>{const a=new zt(s,0),u=new zt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),Q.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;ve.isDocumentKey(a)||(a=a.child(""));const u=new zt(new ve(a),0);let d=new Dt(ke);return this.Yr.forEachWhile((f=>{const g=f.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(d=d.add(f.Hr)),!0)}),u),Q.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){qe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Q.forEach(t.mutations,(s=>{const a=new zt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new zt(t,0),s=this.Yr.firstAfterOrEqual(r);return Q.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class k2{constructor(e){this.ni=e,this.docs=(function(){return new ut(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Q.resolve(r?r.document.mutableCopy():on.newInvalidDocument(t))}getEntries(e,t){let r=Ai();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():on.newInvalidDocument(s))})),Q.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Ai();const u=t.path,d=new ve(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:v}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||iD(rD(v),r)<=0||(s.has(v.key)||qd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return Q.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Te(9500)}ri(e,t){return Q.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new b2(this)}getSize(e){return Q.resolve(this.size)}}class b2 extends T2{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class N2{constructor(e){this.persistence=e,this.ii=new Fo((t=>Tg(t)),Ig),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.si=0,this.oi=new Cg,this.targetCount=0,this._i=nl.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),Q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new nl(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.hr(t),Q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),Q.waitFor(a).next((()=>s))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return Q.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),Q.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),Q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return Q.resolve(r)}containsKey(e,t){return Q.resolve(this.oi.containsKey(t))}}/**
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
 */class BI{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ud(0),this.ci=!1,this.ci=!0,this.li=new P2,this.referenceDelegate=e(this),this.hi=new N2(this),this.indexManager=new m2,this.remoteDocumentCache=(function(s){return new k2(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new f2(t),this.Ti=new A2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new R2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new C2(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ce("MemoryPersistence","Starting transaction:",e);const s=new x2(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return Q.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class x2 extends oD{constructor(e){super(),this.currentSequenceNumber=e}}class kg{constructor(e){this.persistence=e,this.Ai=new Cg,this.Ri=null}static Vi(e){return new kg(e)}get mi(){if(this.Ri)return this.Ri;throw Te(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),Q.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,(r=>{const s=ve.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,Ae.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return Q.or([()=>Q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class gd{constructor(e,t){this.persistence=e,this.gi=new Fo((r=>uD(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=E2(this,t)}static Vi(e,t){return new gd(e,t)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return Q.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?Q.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Ae.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hh(e.data.value)),t}Sr(e,t,r){return Q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return Q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class bg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Oe(),s=Oe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new bg(e,t.fromCache,r,s)}}/**
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
 */class O2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class D2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return pb()?8:aD(ln())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new O2;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Oa()<=xe.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Da(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):(Oa()<=xe.DEBUG&&ce("QueryEngine","Query:",Da(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Oa()<=xe.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Da(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Br(t))):Q.resolve())}ps(e,t){if(Zw(t))return Q.resolve(null);let r=Br(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=fd(t,null,"F"),r=Br(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Oe(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const g=this.bs(t,d);return this.Ds(t,g,u,f.readTime)?this.ps(e,fd(t,null,"F")):this.vs(e,g,t,f)}))))})))))}ys(e,t,r,s){return Zw(t)||s.isEqual(Ae.min())?Q.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?Q.resolve(null):(Oa()<=xe.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Da(t)),this.vs(e,u,t,nD(s,Vu)).next((d=>d)))}))}bs(e,t){let r=new Dt(vI(e));return t.forEach(((s,a)=>{qd(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Oa()<=xe.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Da(t)),this.gs.getDocumentsMatchingQuery(e,t,Is.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const Ng="LocalStore",M2=3e8;class L2{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ut(ke),this.Ms=new Fo((a=>Tg(a)),Ig),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new S2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function V2(n,e,t,r){return new L2(n,e,t,r)}async function zI(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Oe();for(const g of s){u.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}for(const g of a){d.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((g=>({Bs:g,removedBatchIds:u,addedBatchIds:d})))}))}))}function F2(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,g,v){const w=g.batch,T=w.keys();let P=Q.resolve();return T.forEach((D=>{P=P.next((()=>v.getEntry(f,D))).next((x=>{const k=g.docVersions.get(D);qe(k!==null,48541),x.version.compareTo(k)<0&&(w.applyToRemoteDocument(x,g),x.isValidDocument()&&(x.setReadTime(g.commitVersion),v.addEntry(x)))}))})),P.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Oe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function $I(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function U2(n,e){const t=Re(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((v,w)=>{const T=s.get(w);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,w))));let P=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?P=P.withResumeToken(Yt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(v.resumeToken,r)),s=s.insert(w,P),(function(x,k,q){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=M2?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(T,P,v)&&d.push(t.hi.updateTargetData(a,P))}));let f=Ai(),g=Oe();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(j2(a,u,e.documentUpdates).next((v=>{f=v.Ls,g=v.ks}))),!r.isEqual(Ae.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return Q.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,g))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function j2(n,e,t){let r=Oe(),s=Oe();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Ai();return t.forEach(((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Ae.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ce(Ng,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function B2(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=_g),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function z2(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,Q.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new gs(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Vm(n,e,t){const r=Re(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!dl(u))throw u;ce(Ng,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function dE(n,e,t){const r=Re(n);let s=Ae.min(),a=Oe();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,g,v){const w=Re(f),T=w.Ms.get(v);return T!==void 0?Q.resolve(w.Fs.get(T)):w.hi.getTargetData(g,v)})(r,u,Br(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Ae.min(),t?a:Oe()))).next((d=>($2(r,CD(e),d),{documents:d,qs:a})))))}function $2(n,e,t){let r=n.xs.get(e)||Ae.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class fE{constructor(){this.activeTargetIds=DD()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q2{constructor(){this.Fo=new fE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new fE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class H2{xo(e){}shutdown(){}}/**
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
 */const pE="ConnectivityMonitor";class mE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(pE,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(pE,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oh=null;function Fm(){return Oh===null?Oh=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oh++,"0x"+Oh.toString(16)}/**
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
 */const Yp="RestConnection",W2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class G2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===cd?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Fm(),d=this.Go(e,t.toUriEncodedString());ce(Yp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:g}=new URL(d),v=Ri(g);return this.jo(e,d,f,r,v).then((w=>(ce(Yp,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw Ts(Yp,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+cl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=W2[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class K2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const nn="WebChannelConnection";class Q2 extends G2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Fm();return new Promise(((d,f)=>{const g=new qT;g.setWithCredentials(!0),g.listenOnce(HT.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case qh.NO_ERROR:const w=g.getResponseJson();ce(nn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case qh.TIMEOUT:ce(nn,`RPC '${e}' ${u} timed out`),f(new ae(K.DEADLINE_EXCEEDED,"Request time out"));break;case qh.HTTP_ERROR:const T=g.getStatus();if(ce(nn,`RPC '${e}' ${u} failed with status:`,T,"response text:",g.getResponseText()),T>0){let P=g.getResponseJson();Array.isArray(P)&&(P=P[0]);const D=P==null?void 0:P.error;if(D&&D.status&&D.message){const x=(function(q){const X=q.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(X)>=0?X:K.UNKNOWN})(D.status);f(new ae(x,D.message))}else f(new ae(K.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ae(K.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{c_:e,streamId:u,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{ce(nn,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(s);ce(nn,`RPC '${e}' ${u} sending request:`,s),g.send(t,"POST",v,r,15)}))}P_(e,t,r){const s=Fm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=KT(),d=GT(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ce(nn,`Creating RPC '${e}' stream ${s}: ${v}`,f);const w=u.createWebChannel(v,f);this.T_(w);let T=!1,P=!1;const D=new K2({Ho:k=>{P?ce(nn,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(T||(ce(nn,`Opening RPC '${e}' stream ${s} transport.`),w.open(),T=!0),ce(nn,`RPC '${e}' stream ${s} sending:`,k),w.send(k))},Yo:()=>w.close()}),x=(k,q,X)=>{k.listen(q,(G=>{try{X(G)}catch(te){setTimeout((()=>{throw te}),0)}}))};return x(w,vu.EventType.OPEN,(()=>{P||(ce(nn,`RPC '${e}' stream ${s} transport opened.`),D.s_())})),x(w,vu.EventType.CLOSE,(()=>{P||(P=!0,ce(nn,`RPC '${e}' stream ${s} transport closed`),D.__(),this.I_(w))})),x(w,vu.EventType.ERROR,(k=>{P||(P=!0,Ts(nn,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),D.__(new ae(K.UNAVAILABLE,"The operation could not be completed")))})),x(w,vu.EventType.MESSAGE,(k=>{var q;if(!P){const X=k.data[0];qe(!!X,16349);const G=X,te=(G==null?void 0:G.error)||((q=G[0])===null||q===void 0?void 0:q.error);if(te){ce(nn,`RPC '${e}' stream ${s} received error:`,te);const ie=te.status;let ge=(function(R){const b=St[R];if(b!==void 0)return bI(b)})(ie),O=te.message;ge===void 0&&(ge=K.INTERNAL,O="Unknown error status: "+ie+" with message "+te.message),P=!0,D.__(new ae(ge,O)),w.close()}else ce(nn,`RPC '${e}' stream ${s} received:`,X),D.a_(X)}})),x(d,WT.STAT_EVENT,(k=>{k.stat===Rm.PROXY?ce(nn,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Rm.NOPROXY&&ce(nn,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.o_()}),0),D}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Xp(){return typeof document<"u"?document:null}/**
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
 */function Kd(n){return new ZD(n,!0)}/**
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
 */class qI{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const gE="PersistentStream";class HI{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new qI(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Si(t.toString()),Si("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new ae(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(gE,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ce(gE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Y2 extends HI{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=n2(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Ae.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ae.min():u.readTime?$r(u.readTime):Ae.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Lm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Nm(f)?{documents:s2(a,f)}:{query:o2(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=OI(a,u.resumeToken);const g=Om(a,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(Ae.min())>0){d.readTime=md(a,u.snapshotVersion.toTimestamp());const g=Om(a,u.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const r=l2(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Lm(this.serializer),t.removeTarget=e,this.k_(t)}}class X2 extends HI{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=i2(e.writeResults,e.commitTime),r=$r(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Lm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>r2(this.serializer,r)))};this.k_(t)}}/**
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
 */class J2{}class Z2 extends J2{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ae(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Dm(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ae(K.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Dm(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(K.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class eM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Si(t),this._a=!1):ce("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ko="RemoteStore";class tM{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Uo(this)&&(ce(ko,"Restarting streams for network reachability change."),await(async function(f){const g=Re(f);g.Ia.add(4),await sc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Qd(g)})(this))}))})),this.Aa=new eM(r,s)}}async function Qd(n){if(Uo(n))for(const e of n.da)await e(!0)}async function sc(n){for(const e of n.da)await e(!1)}function WI(n,e){const t=Re(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Mg(t)?Dg(t):pl(t).x_()&&Og(t,e))}function xg(n,e){const t=Re(n),r=pl(t);t.Ta.delete(e),r.x_()&&GI(t,e),t.Ta.size===0&&(r.x_()?r.B_():Uo(t)&&t.Aa.set("Unknown"))}function Og(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}pl(n).H_(e)}function GI(n,e){n.Ra.$e(e),pl(n).Y_(e)}function Dg(n){n.Ra=new QD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),pl(n).start(),n.Aa.aa()}function Mg(n){return Uo(n)&&!pl(n).M_()&&n.Ta.size>0}function Uo(n){return Re(n).Ia.size===0}function KI(n){n.Ra=void 0}async function nM(n){n.Aa.set("Online")}async function rM(n){n.Ta.forEach(((e,t)=>{Og(n,e)}))}async function iM(n,e){KI(n),Mg(n)?(n.Aa.la(e),Dg(n)):n.Aa.set("Unknown")}async function sM(n,e,t){if(n.Aa.set("Online"),e instanceof xI&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ce(ko,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yd(n,r)}else if(e instanceof Kh?n.Ra.Ye(e):e instanceof NI?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ae.min()))try{const r=await $I(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(g);v&&a.Ta.set(g,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,g)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(Yt.EMPTY_BYTE_STRING,v.snapshotVersion)),GI(a,f);const w=new gs(v.target,f,g,v.sequenceNumber);Og(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ce(ko,"Failed to raise snapshot:",r),await yd(n,r)}}async function yd(n,e,t){if(!dl(e))throw e;n.Ia.add(1),await sc(n),n.Aa.set("Offline"),t||(t=()=>$I(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(ko,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Qd(n)}))}function QI(n,e){return e().catch((t=>yd(n,t,e)))}async function Yd(n){const e=Re(n),t=Ps(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:_g;for(;oM(e);)try{const s=await B2(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,aM(e,s)}catch(s){await yd(e,s)}YI(e)&&XI(e)}function oM(n){return Uo(n)&&n.Pa.length<10}function aM(n,e){n.Pa.push(e);const t=Ps(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function YI(n){return Uo(n)&&!Ps(n).M_()&&n.Pa.length>0}function XI(n){Ps(n).start()}async function lM(n){Ps(n).na()}async function uM(n){const e=Ps(n);for(const t of n.Pa)e.X_(t.mutations)}async function cM(n,e,t){const r=n.Pa.shift(),s=Ag.from(r,e,t);await QI(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Yd(n)}async function hM(n,e){e&&Ps(n).Z_&&await(async function(r,s){if((function(u){return GD(u)&&u!==K.ABORTED})(s.code)){const a=r.Pa.shift();Ps(r).N_(),await QI(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await Yd(r)}})(n,e),YI(n)&&XI(n)}async function yE(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ce(ko,"RemoteStore received new credentials");const r=Uo(t);t.Ia.add(3),await sc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Qd(t)}async function dM(n,e){const t=Re(n);e?(t.Ia.delete(2),await Qd(t)):e||(t.Ia.add(2),await sc(t),t.Aa.set("Unknown"))}function pl(n){return n.Va||(n.Va=(function(t,r,s){const a=Re(t);return a.ia(),new Y2(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:nM.bind(null,n),e_:rM.bind(null,n),n_:iM.bind(null,n),J_:sM.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Mg(n)?Dg(n):n.Aa.set("Unknown")):(await n.Va.stop(),KI(n))}))),n.Va}function Ps(n){return n.ma||(n.ma=(function(t,r,s){const a=Re(t);return a.ia(),new X2(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:lM.bind(null,n),n_:hM.bind(null,n),ea:uM.bind(null,n),ta:cM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Yd(n)):(await n.ma.stop(),n.Pa.length>0&&(ce(ko,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Lg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Lg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vg(n,e){if(Si("AsyncQueue",`${e}: ${n}`),dl(n))return new ae(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class $a{static emptySet(e){return new $a(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ve.comparator(t.key,r.key):(t,r)=>ve.comparator(t.key,r.key),this.keyedMap=_u(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $a)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new $a;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class vE{constructor(){this.fa=new ut(ve.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Te(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class rl{constructor(e,t,r,s,a,u,d,f,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new rl(e,t,$a.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fM{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class pM{constructor(){this.queries=_E(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Re(t),a=s.queries;s.queries=_E(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new ae(K.ABORTED,"Firestore shutting down"))}}function _E(){return new Fo((n=>yI(n)),$d)}async function JI(n,e){const t=Re(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new fM,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Vg(u,`Initialization of query '${Da(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Fg(t)}async function ZI(n,e){const t=Re(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function mM(n,e){const t=Re(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Fg(t)}function gM(n,e,t){const r=Re(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Fg(n){n.Da.forEach((e=>{e.next()}))}var Um,wE;(wE=Um||(Um={})).Fa="default",wE.Cache="cache";class eS{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=rl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Um.Cache}}/**
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
 */class tS{constructor(e){this.key=e}}class nS{constructor(e){this.key=e}}class yM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Oe(),this.mutatedKeys=Oe(),this.Xa=vI(e),this.eu=new $a(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new vE,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((v,w)=>{const T=s.get(v),P=qd(this.query,w)?w:null,D=!!T&&this.mutatedKeys.has(T.key),x=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let k=!1;T&&P?T.data.isEqual(P.data)?D!==x&&(r.track({type:3,doc:P}),k=!0):this.iu(T,P)||(r.track({type:2,doc:P}),k=!0,(f&&this.Xa(P,f)>0||g&&this.Xa(P,g)<0)&&(d=!0)):!T&&P?(r.track({type:0,doc:P}),k=!0):T&&!P&&(r.track({type:1,doc:T}),k=!0,(f||g)&&(d=!0)),k&&(P?(u=u.add(P),a=x?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,w)=>(function(P,D){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{At:k})}};return x(P)-x(D)})(v.type,w.type)||this.Xa(v.doc,w.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,g=f!==this.Ya;return this.Ya=f,u.length!==0||g?{snapshot:new rl(this.query,e.eu,a,u,e.mutatedKeys,f===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new vE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Oe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new nS(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new tS(r))})),t}uu(e){this.Ha=e.qs,this.Za=Oe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return rl.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ug="SyncEngine";class vM{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class _M{constructor(e){this.key=e,this.lu=!1}}class wM{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Fo((d=>yI(d)),$d),this.Tu=new Map,this.Iu=new Set,this.du=new ut(ve.comparator),this.Eu=new Map,this.Au=new Cg,this.Ru={},this.Vu=new Map,this.mu=nl.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function EM(n,e,t=!0){const r=lS(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await rS(r,e,t,!0),s}async function TM(n,e){const t=lS(n);await rS(t,e,!0,!1)}async function rS(n,e,t,r){const s=await z2(n.localStore,Br(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await IM(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&WI(n.remoteStore,s),d}async function IM(n,e,t,r,s){n.gu=(w,T,P)=>(async function(x,k,q,X){let G=k.view.nu(q);G.Ds&&(G=await dE(x.localStore,k.query,!1).then((({documents:O})=>k.view.nu(O,G))));const te=X&&X.targetChanges.get(k.targetId),ie=X&&X.targetMismatches.get(k.targetId)!=null,ge=k.view.applyChanges(G,x.isPrimaryClient,te,ie);return TE(x,k.targetId,ge._u),ge.snapshot})(n,w,T,P);const a=await dE(n.localStore,e,!0),u=new yM(e,a.qs),d=u.nu(a.documents),f=ic.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),g=u.applyChanges(d,n.isPrimaryClient,f);TE(n,t,g._u);const v=new vM(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),g.snapshot}async function SM(n,e,t){const r=Re(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!$d(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xg(r.remoteStore,s.targetId),jm(r,s.targetId)})).catch(hl)):(jm(r,s.targetId),await Vm(r.localStore,s.targetId,!0))}async function AM(n,e){const t=Re(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xg(t.remoteStore,r.targetId))}async function RM(n,e,t){const r=OM(n);try{const s=await(function(u,d){const f=Re(u),g=it.now(),v=d.reduce(((P,D)=>P.add(D.key)),Oe());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let D=Ai(),x=Oe();return f.Os.getEntries(P,v).next((k=>{D=k,D.forEach(((q,X)=>{X.isValidDocument()||(x=x.add(q))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,D))).next((k=>{w=k;const q=[];for(const X of d){const G=zD(X,w.get(X.key).overlayedDocument);G!=null&&q.push(new Ms(X.key,G,uI(G.value.mapValue),zr.exists(!0)))}return f.mutationQueue.addMutationBatch(P,g,q,d)})).next((k=>{T=k;const q=k.applyToLocalDocumentSet(w,x);return f.documentOverlayCache.saveOverlays(P,k.batchId,q)}))})).then((()=>({batchId:T.batchId,changes:wI(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let g=u.Ru[u.currentUser.toKey()];g||(g=new ut(ke)),g=g.insert(d,f),u.Ru[u.currentUser.toKey()]=g})(r,s.batchId,t),await oc(r,s.changes),await Yd(r.remoteStore)}catch(s){const a=Vg(s,"Failed to persist write");t.reject(a)}}async function iS(n,e){const t=Re(n);try{const r=await U2(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?qe(u.lu,14607):s.removedDocuments.size>0&&(qe(u.lu,42227),u.lu=!1))})),await oc(t,r,e)}catch(r){await hl(r)}}function EE(n,e,t){const r=Re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=Re(u);f.onlineState=d;let g=!1;f.queries.forEach(((v,w)=>{for(const T of w.wa)T.va(d)&&(g=!0)})),g&&Fg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PM(n,e,t){const r=Re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new ut(ve.comparator);u=u.insert(a,on.newNoDocument(a,Ae.min()));const d=Oe().add(a),f=new Gd(Ae.min(),new Map,new ut(ke),u,d);await iS(r,f),r.du=r.du.remove(a),r.Eu.delete(e),jg(r)}else await Vm(r.localStore,e,!1).then((()=>jm(r,e,t))).catch(hl)}async function CM(n,e){const t=Re(n),r=e.batch.batchId;try{const s=await F2(t.localStore,e);oS(t,r,null),sS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await oc(t,s)}catch(s){await hl(s)}}async function kM(n,e,t){const r=Re(n);try{const s=await(function(u,d){const f=Re(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return f.mutationQueue.lookupMutationBatch(g,d).next((w=>(qe(w!==null,37113),v=w.keys(),f.mutationQueue.removeMutationBatch(g,w)))).next((()=>f.mutationQueue.performConsistencyCheck(g))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>f.localDocuments.getDocuments(g,v)))}))})(r.localStore,e);oS(r,e,t),sS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await oc(r,s)}catch(s){await hl(s)}}function sS(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function oS(n,e,t){const r=Re(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function jm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||aS(n,r)}))}function aS(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),jg(n))}function TE(n,e,t){for(const r of t)r instanceof tS?(n.Au.addReference(r.key,e),bM(n,r)):r instanceof nS?(ce(Ug,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||aS(n,r.key)):Te(19791,{yu:r})}function bM(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ce(Ug,"New document in limbo: "+t),n.Iu.add(r),jg(n))}function jg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ve(Ze.fromString(e)),r=n.mu.next();n.Eu.set(r,new _M(t)),n.du=n.du.insert(t,r),WI(n.remoteStore,new gs(Br(zd(t.path)),r,"TargetPurposeLimboResolution",Ud.ue))}}async function oc(n,e,t){const r=Re(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((g=>{var v;if((g||t)&&r.isPrimaryClient){const w=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=bg.Es(f.targetId,g);a.push(w)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,g){const v=Re(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>Q.forEach(g,(T=>Q.forEach(T.Is,(P=>v.persistence.referenceDelegate.addReference(w,T.targetId,P))).next((()=>Q.forEach(T.ds,(P=>v.persistence.referenceDelegate.removeReference(w,T.targetId,P)))))))))}catch(w){if(!dl(w))throw w;ce(Ng,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const P=v.Fs.get(T),D=P.snapshotVersion,x=P.withLastLimboFreeSnapshotVersion(D);v.Fs=v.Fs.insert(T,x)}}})(r.localStore,a))}async function NM(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ce(Ug,"User change. New user:",e.toKey());const r=await zI(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new ae(K.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oc(t,r.Bs)}}function xM(n,e){const t=Re(n),r=t.Eu.get(e);if(r&&r.lu)return Oe().add(r.key);{let s=Oe();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function lS(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=iS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PM.bind(null,e),e.hu.J_=mM.bind(null,e.eventManager),e.hu.pu=gM.bind(null,e.eventManager),e}function OM(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kM.bind(null,e),e}class vd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return V2(this.persistence,new D2,e.initialUser,this.serializer)}Du(e){return new BI(kg.Vi,this.serializer)}bu(e){return new q2}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vd.provider={build:()=>new vd};class DM extends vd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){qe(this.persistence.referenceDelegate instanceof gd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _2(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new BI((r=>gd.Vi(r,t)),this.serializer)}}class Bm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>EE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NM.bind(null,this.syncEngine),await dM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new pM})()}createDatastore(e){const t=Kd(e.databaseInfo.databaseId),r=(function(a){return new Q2(a)})(e.databaseInfo);return(function(a,u,d,f){return new Z2(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new tM(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>EE(this.syncEngine,t,0)),(function(){return mE.C()?new mE:new H2})())}createSyncEngine(e,t){return(function(s,a,u,d,f,g,v){const w=new wM(s,a,u,d,f,g);return v&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=Re(s);ce(ko,"RemoteStore shutting down."),a.Ia.add(5),await sc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bm.provider={build:()=>new Bm};/**
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
 */class uS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Si("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Cs="FirestoreClient";class MM{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=sn.UNAUTHENTICATED,this.clientId=vg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ce(Cs,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ce(Cs,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Jp(n,e){n.asyncQueue.verifyOperationInProgress(),ce(Cs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await zI(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Ts("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ts("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function IE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await LM(n);ce(Cs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>yE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>yE(e.remoteStore,s))),n._onlineComponents=e}async function LM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(Cs,"Using user provided OfflineComponentProvider");try{await Jp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===K.FAILED_PRECONDITION||s.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ts("Error using user provided cache. Falling back to memory cache: "+t),await Jp(n,new vd)}}else ce(Cs,"Using default OfflineComponentProvider"),await Jp(n,new DM(void 0));return n._offlineComponents}async function cS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(Cs,"Using user provided OnlineComponentProvider"),await IE(n,n._uninitializedComponentsProvider._online)):(ce(Cs,"Using default OnlineComponentProvider"),await IE(n,new Bm))),n._onlineComponents}function VM(n){return cS(n).then((e=>e.syncEngine))}async function zm(n){const e=await cS(n),t=e.eventManager;return t.onListen=EM.bind(null,e.syncEngine),t.onUnlisten=SM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=TM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=AM.bind(null,e.syncEngine),t}function FM(n,e,t={}){const r=new ws;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,g){const v=new uS({next:T=>{v.Ou(),u.enqueueAndForget((()=>ZI(a,w)));const P=T.docs.has(d);!P&&T.fromCache?g.reject(new ae(K.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&T.fromCache&&f&&f.source==="server"?g.reject(new ae(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new eS(zd(d.path),v,{includeMetadataChanges:!0,ka:!0});return JI(a,w)})(await zm(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function hS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const SE=new Map;/**
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
 */const dS="firestore.googleapis.com",AE=!0;class RE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dS,this.ssl=AE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:AE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<y2)throw new ae(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new RE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new RE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new WO;switch(r.type){case"firstParty":return new YO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=SE.get(t);r&&(ce("ComponentProvider","Removing Datastore"),SE.delete(t),r.terminate())})(this),Promise.resolve()}}function UM(n,e,t,r={}){var s;n=jr(n,Xd);const a=Ri(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(Nd(`https://${f}`),xd("Firestore",!0)),u.host!==dS&&u.host!==f&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Ao(g,d)&&(n._setSettings(g),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=sn.MOCK_USER;else{v=rT(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ae(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new sn(T)}n._authCredentials=new GO(new YT(v,w))}}/**
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
 */class Ls{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class pt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(nc(t,pt._jsonSchema))return new pt(e,r||null,new ve(Ze.fromString(t.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:Rt("string",pt._jsonSchemaVersion),referencePath:Rt("string")};class Es extends Ls{constructor(e,t,r){super(e,t,zd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new ve(e))}withConverter(e){return new Es(this.firestore,e,this._path)}}function QF(n,e,...t){if(n=et(n),JT("collection","path",e),n instanceof Xd){const r=Ze.fromString(e,...t);return Uw(r),new Es(n,null,r)}{if(!(n instanceof pt||n instanceof Es))throw new ae(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ze.fromString(e,...t));return Uw(r),new Es(n.firestore,null,r)}}function Dh(n,e,...t){if(n=et(n),arguments.length===1&&(e=vg.newId()),JT("doc","path",e),n instanceof Xd){const r=Ze.fromString(e,...t);return Fw(r),new pt(n,null,new ve(r))}{if(!(n instanceof pt||n instanceof Es))throw new ae(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ze.fromString(e,...t));return Fw(r),new pt(n.firestore,n instanceof Es?n.converter:null,new ve(r))}}/**
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
 */const PE="AsyncQueue";class CE{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new qI(this,"async_queue_retry"),this.oc=()=>{const r=Xp();r&&ce(PE,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Xp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Xp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ws;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!dl(e))throw e;ce(PE,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Si("INTERNAL UNHANDLED ERROR: ",kE(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Lg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Te(47125,{hc:kE(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function kE(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function bE(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class il extends Xd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new CE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new CE(e),this._firestoreClient=void 0,await e}}}function jM(n,e){const t=typeof n=="object"?n:Dd(),r=typeof n=="string"?n:cd,s=Mo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=sg("firestore");a&&UM(s,...a)}return s}function Bg(n){if(n._terminated)throw new ae(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||BM(n),n._firestoreClient}function BM(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,g,v){return new dD(d,f,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,hS(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new MM(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(Yt.fromBase64String(e))}catch(t){throw new ae(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(nc(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:Rt("string",Xn._jsonSchemaVersion),bytes:Rt("string")};/**
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
 */class Jd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zd{constructor(e){this._methodName=e}}/**
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
 */class qr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:qr._jsonSchemaVersion}}static fromJSON(e){if(nc(e,qr._jsonSchema))return new qr(e.latitude,e.longitude)}}qr._jsonSchemaVersion="firestore/geoPoint/1.0",qr._jsonSchema={type:Rt("string",qr._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
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
 */class Hr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Hr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(nc(e,Hr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Hr(e.vectorValues);throw new ae(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hr._jsonSchemaVersion="firestore/vectorValue/1.0",Hr._jsonSchema={type:Rt("string",Hr._jsonSchemaVersion),vectorValues:Rt("object")};/**
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
 */const zM=/^__.*__$/;class $M{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new rc(e,this.data,t,this.fieldTransforms)}}class fS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ms(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ec:n})}}class zg{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new zg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return _d(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pS(this.Ec)&&zM.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class qM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Kd(e)}Dc(e,t,r,s=!1){return new zg({Ec:e,methodName:t,bc:r,path:Qt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $g(n){const e=n._freezeSettings(),t=Kd(n._databaseId);return new qM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function HM(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);Hg("Data must be an object, but it was:",u,r);const d=mS(r,u);let f,g;if(a.merge)f=new Mn(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const T=$m(e,w,t);if(!u.contains(T))throw new ae(K.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);yS(v,T)||v.push(T)}f=new Mn(v),g=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,g=u.fieldTransforms;return new $M(new An(d),f,g)}class ef extends Zd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ef}}class qg extends Zd{_toFieldTransform(e){return new FD(e.path,new zu)}isEqual(e){return e instanceof qg}}function WM(n,e,t,r){const s=n.Dc(1,e,t);Hg("Data must be an object, but it was:",s,r);const a=[],u=An.empty();Ds(r,((f,g)=>{const v=Wg(e,f,t);g=et(g);const w=s.gc(v);if(g instanceof ef)a.push(v);else{const T=ac(g,w);T!=null&&(a.push(v),u.set(v,T))}}));const d=new Mn(a);return new fS(u,d,s.fieldTransforms)}function GM(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[$m(e,r,t)],f=[s];if(a.length%2!=0)throw new ae(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push($m(e,a[T])),f.push(a[T+1]);const g=[],v=An.empty();for(let T=d.length-1;T>=0;--T)if(!yS(g,d[T])){const P=d[T];let D=f[T];D=et(D);const x=u.gc(P);if(D instanceof ef)g.push(P);else{const k=ac(D,x);k!=null&&(g.push(P),v.set(P,k))}}const w=new Mn(g);return new fS(v,w,u.fieldTransforms)}function KM(n,e,t,r=!1){return ac(t,n.Dc(r?4:3,e))}function ac(n,e){if(gS(n=et(n)))return Hg("Unsupported field value:",e,n),mS(n,e);if(n instanceof Zd)return(function(r,s){if(!pS(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=ac(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=it.fromDate(r);return{timestampValue:md(s.serializer,a)}}if(r instanceof it){const a=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:md(s.serializer,a)}}if(r instanceof qr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xn)return{bytesValue:OI(s.serializer,r._byteString)};if(r instanceof pt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Pg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hr)return(function(u,d){return{mapValue:{fields:{[aI]:{stringValue:lI},[hd]:{arrayValue:{values:u.toArray().map((g=>{if(typeof g!="number")throw d.wc("VectorValues must only contain numeric values.");return Sg(d.serializer,g)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Fd(r)}`)})(n,e)}function mS(n,e){const t={};return tI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ds(n,((r,s)=>{const a=ac(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function gS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof qr||n instanceof Xn||n instanceof pt||n instanceof Zd||n instanceof Hr)}function Hg(n,e,t){if(!gS(t)||!ZT(t)){const r=Fd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function $m(n,e,t){if((e=et(e))instanceof Jd)return e._internalPath;if(typeof e=="string")return Wg(n,e);throw _d("Field path arguments must be of type string or ",n,!1,void 0,t)}const QM=new RegExp("[~\\*/\\[\\]]");function Wg(n,e,t){if(e.search(QM)>=0)throw _d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Jd(...e.split("."))._internalPath}catch{throw _d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _d(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new ae(K.INVALID_ARGUMENT,d+n+f)}function yS(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class vS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YM extends vS{data(){return super.data()}}function Gg(n,e){return typeof e=="string"?Wg(n,e):e instanceof Jd?e._internalPath:e._delegate._internalPath}/**
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
 */function XM(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kg{}class Qg extends Kg{}function YF(n,e,...t){let r=[];e instanceof Kg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof Xg)).length,d=a.filter((f=>f instanceof Yg)).length;if(u>1||u>0&&d>0)throw new ae(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Yg extends Qg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yg(e,t,r)}_apply(e){const t=this._parse(e);return _S(e._query,t),new Ls(e.firestore,e.converter,xm(e._query,t))}_parse(e){const t=$g(e.firestore);return(function(a,u,d,f,g,v,w){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ae(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){xE(w,v);const D=[];for(const x of w)D.push(NE(f,a,x));T={arrayValue:{values:D}}}else T=NE(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||xE(w,v),T=KM(d,u,w,v==="in"||v==="not-in");return At.create(g,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Xg extends Kg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:wr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)_S(u,f),u=xm(u,f)})(e._query,t),new Ls(e.firestore,e.converter,xm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Jg extends Qg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Jg(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new ae(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ae(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bu(a,u)})(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new fl(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function XF(n,e="asc"){const t=e,r=Gg("orderBy",n);return Jg._create(r,t)}class Zg extends Qg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Zg(e,t,r)}_apply(e){return new Ls(e.firestore,e.converter,fd(e._query,this._limit,this._limitType))}}function JF(n){return Zg._create("limit",n,"F")}function NE(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ae(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gI(e)&&t.indexOf("/")!==-1)throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ze.fromString(t));if(!ve.isDocumentKey(r))throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gw(n,new ve(r))}if(t instanceof pt)return Gw(n,t._key);throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fd(t)}.`)}function xE(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _S(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class JM{convertValue(e,t="none"){switch(Rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ds(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[hd].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>wt(u.doubleValue)));return new Hr(a)}convertGeoPoint(e){return new qr(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fu(e));default:return null}}convertTimestamp(e){const t=Ss(e);return new it(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ze.fromString(e);qe(UI(r),9688,{name:e});const s=new Uu(r.get(1),r.get(3)),a=new ve(r.popFirst(5));return s.isEqual(t)||Si(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function ZM(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Eu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Io extends vS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Gg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Io._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Io._jsonSchemaVersion="firestore/documentSnapshot/1.0",Io._jsonSchema={type:Rt("string",Io._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class Qh extends Io{data(e={}){return super.data(e)}}class qa{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Eu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Qh(this._firestore,this._userDataWriter,r.key,r,new Eu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new Qh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Eu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Qh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Eu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,v=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:eL(d.type),doc:f,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
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
 */function tL(n){n=jr(n,pt);const e=jr(n.firestore,il);return FM(Bg(e),n._key).then((t=>TS(e,n,t)))}qa._jsonSchemaVersion="firestore/querySnapshot/1.0",qa._jsonSchema={type:Rt("string",qa._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class wS extends JM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function nL(n,e,t){n=jr(n,pt);const r=jr(n.firestore,il),s=ZM(n.converter,e);return ES(r,[HM($g(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,zr.none())])}function rL(n,e,t,...r){n=jr(n,pt);const s=jr(n.firestore,il),a=$g(s);let u;return u=typeof(e=et(e))=="string"||e instanceof Jd?GM(a,"updateDoc",n._key,e,t,r):WM(a,"updateDoc",n._key,e),ES(s,[u.toMutation(n._key,zr.exists(!0))])}function iL(n,...e){var t,r,s;n=et(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||bE(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(bE(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,g,v;if(n instanceof pt)g=jr(n.firestore,il),v=zd(n._key.path),f={next:w=>{e[u]&&e[u](TS(g,n,w))},error:e[u+1],complete:e[u+2]};else{const w=jr(n,Ls);g=jr(w.firestore,il),v=w._query;const T=new wS(g);f={next:P=>{e[u]&&e[u](new qa(g,T,w,P))},error:e[u+1],complete:e[u+2]},XM(n._query)}return(function(T,P,D,x){const k=new uS(x),q=new eS(P,k,D);return T.asyncQueue.enqueueAndForget((async()=>JI(await zm(T),q))),()=>{k.Ou(),T.asyncQueue.enqueueAndForget((async()=>ZI(await zm(T),q)))}})(Bg(g),v,d,f)}function ES(n,e){return(function(r,s){const a=new ws;return r.asyncQueue.enqueueAndForget((async()=>RM(await VM(r),s,a))),a.promise})(Bg(n),e)}function TS(n,e,t){const r=t.docs.get(e._key),s=new wS(n);return new Io(n,s,e._key,r,new Eu(t.hasPendingWrites,t.fromCache),e.converter)}function Zp(){return new qg("serverTimestamp")}(function(e,t=!0){(function(s){cl=s})(Lo),Jn(new Un("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new il(new KO(r.getProvider("auth-internal")),new XO(u,r.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ae(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uu(g.options.projectId,v)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),an(Ow,Dw,e),an(Ow,Dw,"esm2017")})();/**
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
 */const sL="type.googleapis.com/google.protobuf.Int64Value",oL="type.googleapis.com/google.protobuf.UInt64Value";function IS(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function wd(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>wd(e));if(typeof n=="function"||typeof n=="object")return IS(n,e=>wd(e));throw new Error("Data cannot be encoded in JSON: "+n)}function sl(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case sL:case oL:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>sl(e)):typeof n=="function"||typeof n=="object"?IS(n,e=>sl(e)):n}/**
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
 */const ey="functions";/**
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
 */const OE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Rn extends Zn{constructor(e,t,r){super(`${ey}/${e}`,t||""),this.details=r,Object.setPrototypeOf(this,Rn.prototype)}}function aL(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ed(n,e){let t=aL(n),r=t,s;try{const a=e&&e.error;if(a){const u=a.status;if(typeof u=="string"){if(!OE[u])return new Rn("internal","internal");t=OE[u],r=u}const d=a.message;typeof d=="string"&&(r=d),s=a.details,s!==void 0&&(s=sl(s))}}catch{}return t==="ok"?null:new Rn(t,r,s)}/**
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
 */class lL{constructor(e,t,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||r.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s==null||s.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
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
 */const qm="us-central1",uL=/^data: (.*?)(?:\n|$)/;function cL(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new Rn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class hL{constructor(e,t,r,s,a=qm,u=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=u,this.emulatorOrigin=null,this.contextProvider=new lL(e,t,r,s),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(a);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=qm}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function dL(n,e,t){const r=Ri(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&(Nd(n.emulatorOrigin),xd("Functions",!0))}function fL(n,e,t){const r=s=>mL(n,e,s,{});return r.stream=(s,a)=>yL(n,e,s,a),r}async function pL(n,e,t,r){t["Content-Type"]="application/json";let s;try{s=await r(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let a=null;try{a=await s.json()}catch{}return{status:s.status,json:a}}async function SS(n,e){const t={},r=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(t.Authorization="Bearer "+r.authToken),r.messagingToken&&(t["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=r.appCheckToken),t}function mL(n,e,t,r){const s=n._url(e);return gL(n,s,t,r)}async function gL(n,e,t,r){t=wd(t);const s={data:t},a=await SS(n,r),u=r.timeout||7e4,d=cL(u),f=await Promise.race([pL(e,s,a,n.fetchImpl),d.promise,n.cancelAllRequests]);if(d.cancel(),!f)throw new Rn("cancelled","Firebase Functions instance was deleted.");const g=Ed(f.status,f.json);if(g)throw g;if(!f.json)throw new Rn("internal","Response is not valid JSON object.");let v=f.json.data;if(typeof v>"u"&&(v=f.json.result),typeof v>"u")throw new Rn("internal","Response is missing data field.");return{data:sl(v)}}function yL(n,e,t,r){const s=n._url(e);return vL(n,s,t,r||{})}async function vL(n,e,t,r){var s;t=wd(t);const a={data:t},u=await SS(n,r);u["Content-Type"]="application/json",u.Accept="text/event-stream";let d;try{d=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(a),headers:u,signal:r==null?void 0:r.signal})}catch(P){if(P instanceof Error&&P.name==="AbortError"){const x=new Rn("cancelled","Request was cancelled.");return{data:Promise.reject(x),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(x)}}}}}}const D=Ed(0,null);return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}let f,g;const v=new Promise((P,D)=>{f=P,g=D});(s=r==null?void 0:r.signal)===null||s===void 0||s.addEventListener("abort",()=>{const P=new Rn("cancelled","Request was cancelled.");g(P)});const w=d.body.getReader(),T=_L(w,f,g,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const P=T.getReader();return{async next(){const{value:D,done:x}=await P.read();return{value:D,done:x}},async return(){return await P.cancel(),{done:!0,value:void 0}}}}},data:v}}function _L(n,e,t,r){const s=(u,d)=>{const f=u.match(uL);if(!f)return;const g=f[1];try{const v=JSON.parse(g);if("result"in v){e(sl(v.result));return}if("message"in v){d.enqueue(sl(v.message));return}if("error"in v){const w=Ed(0,v);d.error(w),t(w);return}}catch(v){if(v instanceof Rn){d.error(v),t(v);return}}},a=new TextDecoder;return new ReadableStream({start(u){let d="";return f();async function f(){if(r!=null&&r.aborted){const g=new Rn("cancelled","Request was cancelled");return u.error(g),t(g),Promise.resolve()}try{const{value:g,done:v}=await n.read();if(v){d.trim()&&s(d.trim(),u),u.close();return}if(r!=null&&r.aborted){const T=new Rn("cancelled","Request was cancelled");u.error(T),t(T),await n.cancel();return}d+=a.decode(g,{stream:!0});const w=d.split(`
`);d=w.pop()||"";for(const T of w)T.trim()&&s(T.trim(),u);return f()}catch(g){const v=g instanceof Rn?g:Ed(0,null);u.error(v),t(v)}}},cancel(){return n.cancel()}})}const DE="@firebase/functions",ME="0.12.9";/**
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
 */const wL="auth-internal",EL="app-check-internal",TL="messaging-internal";function IL(n){const e=(t,{instanceIdentifier:r})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider(wL),u=t.getProvider(TL),d=t.getProvider(EL);return new hL(s,a,u,d,r)};Jn(new Un(ey,e,"PUBLIC").setMultipleInstances(!0)),an(DE,ME,n),an(DE,ME,"esm2017")}/**
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
 */function SL(n=Dd(),e=qm){const r=Mo(et(n),ey).getImmediate({identifier:e}),s=sg("functions");return s&&AL(r,...s),r}function AL(n,e,t){dL(et(n),e,t)}function ZF(n,e,t){return fL(et(n),e)}IL();var RL="firebase",PL="11.10.0";/**
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
 */an(RL,PL,"app");/**
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
 */const AS="firebasestorage.googleapis.com",RS="storageBucket",CL=120*1e3,kL=600*1e3;/**
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
 */class gt extends Zn{constructor(e,t,r=0){super(em(e),`Firebase Storage: ${t} (${em(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return em(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mt||(mt={}));function em(n){return"storage/"+n}function ty(){const n="An unknown error occurred, please check the error payload for server response.";return new gt(mt.UNKNOWN,n)}function bL(n){return new gt(mt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function NL(n){return new gt(mt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xL(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new gt(mt.UNAUTHENTICATED,n)}function OL(){return new gt(mt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DL(n){return new gt(mt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ML(){return new gt(mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LL(){return new gt(mt.CANCELED,"User canceled the upload/download.")}function VL(n){return new gt(mt.INVALID_URL,"Invalid URL '"+n+"'.")}function FL(n){return new gt(mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function UL(){return new gt(mt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+RS+"' property when initializing the app?")}function jL(){return new gt(mt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BL(){return new gt(mt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zL(n){return new gt(mt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Hm(n){return new gt(mt.INVALID_ARGUMENT,n)}function PS(){return new gt(mt.APP_DELETED,"The Firebase app was deleted.")}function $L(n){return new gt(mt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cu(n,e){return new gt(mt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function mu(n){throw new gt(mt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Ln{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ln.makeFromUrl(e,t)}catch{return new Ln(e,"")}if(r.path==="")return r;throw FL(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(te){te.path.charAt(te.path.length-1)==="/"&&(te.path_=te.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function g(te){te.path_=decodeURIComponent(te.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",P=new RegExp(`^https?://${w}/${v}/b/${s}/o${T}`,"i"),D={bucket:1,path:3},x=t===AS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",q=new RegExp(`^https?://${x}/${s}/${k}`,"i"),G=[{regex:d,indices:f,postModify:a},{regex:P,indices:D,postModify:g},{regex:q,indices:{bucket:1,path:2},postModify:g}];for(let te=0;te<G.length;te++){const ie=G[te],ge=ie.regex.exec(e);if(ge){const O=ge[ie.indices.bucket];let S=ge[ie.indices.path];S||(S=""),r=new Ln(O,S),ie.postModify(r);break}}if(r==null)throw VL(e);return r}}class qL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function HL(n,e,t){let r=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let g=!1;function v(...k){g||(g=!0,e.apply(null,k))}function w(k){s=setTimeout(()=>{s=null,n(P,f())},k)}function T(){a&&clearTimeout(a)}function P(k,...q){if(g){T();return}if(k){T(),v.call(null,k,...q);return}if(f()||u){T(),v.call(null,k,...q);return}r<64&&(r*=2);let G;d===1?(d=2,G=0):G=(r+Math.random())*1e3,w(G)}let D=!1;function x(k){D||(D=!0,T(),!g&&(s!==null?(k||(d=2),clearTimeout(s),w(0)):k||(d=1)))}return w(0),a=setTimeout(()=>{u=!0,x(!0)},t),x}function WL(n){n(!1)}/**
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
 */function GL(n){return n!==void 0}function KL(n){return typeof n=="object"&&!Array.isArray(n)}function ny(n){return typeof n=="string"||n instanceof String}function LE(n){return ry()&&n instanceof Blob}function ry(){return typeof Blob<"u"}function VE(n,e,t,r){if(r<e)throw Hm(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Hm(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function iy(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function CS(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var So;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(So||(So={}));/**
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
 */function QL(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
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
 */class YL{constructor(e,t,r,s,a,u,d,f,g,v,w,T=!0,P=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=g,this.progressCallback_=v,this.connectionFactory_=w,this.retry=T,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,x)=>{this.resolve_=D,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Mh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,g)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===So.NO_ERROR,f=a.getStatus();if(!d||QL(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===So.ABORT;r(!1,new Mh(!1,null,v));return}const g=this.successCodes_.indexOf(f)!==-1;r(!0,new Mh(g,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());GL(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=ty();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?PS():LL();u(f)}else{const f=ML();u(f)}};this.canceled_?t(!1,new Mh(!1,null,!0)):this.backoffId_=HL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function XL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function JL(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZL(n,e){e&&(n["X-Firebase-GMPID"]=e)}function eV(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function tV(n,e,t,r,s,a,u=!0,d=!1){const f=CS(n.urlParams),g=n.url+f,v=Object.assign({},n.headers);return ZL(v,e),XL(v,t),JL(v,a),eV(v,r),new YL(g,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,d)}/**
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
 */function nV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rV(...n){const e=nV();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ry())return new Blob(n);throw new gt(mt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iV(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function sV(n){if(typeof atob>"u")throw zL("base-64");return atob(n)}/**
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
 */const Vr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tm{constructor(e,t){this.data=e,this.contentType=t||null}}function oV(n,e){switch(n){case Vr.RAW:return new tm(kS(e));case Vr.BASE64:case Vr.BASE64URL:return new tm(bS(n,e));case Vr.DATA_URL:return new tm(lV(e),uV(e))}throw ty()}function kS(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function aV(n){let e;try{e=decodeURIComponent(n)}catch{throw Cu(Vr.DATA_URL,"Malformed data URL.")}return kS(e)}function bS(n,e){switch(n){case Vr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Cu(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Vr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Cu(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=sV(e)}catch(s){throw s.message.includes("polyfill")?s:Cu(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class NS{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Cu(Vr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=cV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lV(n){const e=new NS(n);return e.base64?bS(Vr.BASE64,e.rest):aV(e.rest)}function uV(n){return new NS(n).contentType}function cV(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class ls{constructor(e,t){let r=0,s="";LE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(LE(this.data_)){const r=this.data_,s=iV(r,e,t);return s===null?null:new ls(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new ls(r,!0)}}static getBlob(...e){if(ry()){const t=e.map(r=>r instanceof ls?r.data_:r);return new ls(rV.apply(null,t))}else{const t=e.map(u=>ny(u)?oV(Vr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new ls(s,!0)}}uploadData(){return this.data_}}/**
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
 */function xS(n){let e;try{e=JSON.parse(n)}catch{return null}return KL(e)?e:null}/**
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
 */function hV(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function dV(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function OS(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function fV(n,e){return e}class fn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||fV}}let Lh=null;function pV(n){return!ny(n)||n.length<2?n:OS(n)}function DS(){if(Lh)return Lh;const n=[];n.push(new fn("bucket")),n.push(new fn("generation")),n.push(new fn("metageneration")),n.push(new fn("name","fullPath",!0));function e(a,u){return pV(u)}const t=new fn("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new fn("size");return s.xform=r,n.push(s),n.push(new fn("timeCreated")),n.push(new fn("updated")),n.push(new fn("md5Hash",null,!0)),n.push(new fn("cacheControl",null,!0)),n.push(new fn("contentDisposition",null,!0)),n.push(new fn("contentEncoding",null,!0)),n.push(new fn("contentLanguage",null,!0)),n.push(new fn("contentType",null,!0)),n.push(new fn("metadata","customMetadata",!0)),Lh=n,Lh}function mV(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new Ln(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function gV(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return mV(r,n),r}function MS(n,e,t){const r=xS(e);return r===null?null:gV(n,r,t)}function yV(n,e,t,r){const s=xS(e);if(s===null||!ny(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(g=>{const v=n.bucket,w=n.fullPath,T="/b/"+u(v)+"/o/"+u(w),P=iy(T,t,r),D=CS({alt:"media",token:g});return P+D})[0]}function vV(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class LS{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function VS(n){if(!n)throw ty()}function _V(n,e){function t(r,s){const a=MS(n,s,e);return VS(a!==null),a}return t}function wV(n,e){function t(r,s){const a=MS(n,s,e);return VS(a!==null),yV(a,s,n.host,n._protocol)}return t}function FS(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=OL():s=xL():t.getStatus()===402?s=NL(n.bucket):t.getStatus()===403?s=DL(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function EV(n){const e=FS(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=bL(n.path)),a.serverResponse=s.serverResponse,a}return t}function TV(n,e,t){const r=e.fullServerUrl(),s=iy(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new LS(s,a,wV(n,t),u);return d.errorHandler=EV(e),d}function IV(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function SV(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=IV(null,e)),r}function AV(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let G="";for(let te=0;te<2;te++)G=G+Math.random().toString().slice(2);return G}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const g=SV(e,r,s),v=vV(g,t),w="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+g.contentType+`\r
\r
`,T=`\r
--`+f+"--",P=ls.getBlob(w,r,T);if(P===null)throw jL();const D={name:g.fullPath},x=iy(a,n.host,n._protocol),k="POST",q=n.maxUploadRetryTime,X=new LS(x,k,_V(n,t),q);return X.urlParams=D,X.headers=u,X.body=P.uploadData(),X.errorHandler=FS(e),X}class RV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=So.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=So.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=So.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,a){if(this.sent_)throw mu("cannot .send() more than once");if(Ri(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw mu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw mu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PV extends RV{initXhr(){this.xhr_.responseType="text"}}function US(){return new PV}/**
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
 */class bo{constructor(e,t){this._service=e,t instanceof Ln?this._location=t:this._location=Ln.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new bo(e,t)}get root(){const e=new Ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return OS(this._location.path)}get storage(){return this._service}get parent(){const e=hV(this._location.path);if(e===null)return null;const t=new Ln(this._location.bucket,e);return new bo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw $L(e)}}function CV(n,e,t){n._throwIfRoot("uploadBytes");const r=AV(n.storage,n._location,DS(),new ls(e,!0),t);return n.storage.makeRequestWithTokens(r,US).then(s=>({metadata:s,ref:n}))}function kV(n){n._throwIfRoot("getDownloadURL");const e=TV(n.storage,n._location,DS());return n.storage.makeRequestWithTokens(e,US).then(t=>{if(t===null)throw BL();return t})}function bV(n,e){const t=dV(n._location.path,e),r=new Ln(n._location.bucket,t);return new bo(n.storage,r)}/**
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
 */function NV(n){return/^[A-Za-z]+:\/\//.test(n)}function xV(n,e){return new bo(n,e)}function jS(n,e){if(n instanceof sy){const t=n;if(t._bucket==null)throw UL();const r=new bo(t,t._bucket);return e!=null?jS(r,e):r}else return e!==void 0?bV(n,e):n}function OV(n,e){if(e&&NV(e)){if(n instanceof sy)return xV(n,e);throw Hm("To use ref(service, url), the first argument must be a Storage instance.")}else return jS(n,e)}function FE(n,e){const t=e==null?void 0:e[RS];return t==null?null:Ln.makeFromBucketSpec(t,n)}function DV(n,e,t,r={}){n.host=`${e}:${t}`;const s=Ri(e);s&&(Nd(`https://${n.host}/b`),xd("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:rT(a,n.app.options.projectId))}class sy{constructor(e,t,r,s,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=AS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CL,this._maxUploadRetryTime=kL,this._requests=new Set,s!=null?this._bucket=Ln.makeFromBucketSpec(s,this._host):this._bucket=FE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ln.makeFromBucketSpec(this._url,e):this._bucket=FE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){VE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){VE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bo(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new qL(PS());{const u=tV(e,this._appId,r,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const UE="@firebase/storage",jE="0.13.14";/**
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
 */const BS="storage";function eU(n,e,t){return n=et(n),CV(n,e,t)}function tU(n){return n=et(n),kV(n)}function nU(n,e){return n=et(n),OV(n,e)}function MV(n=Dd(),e){n=et(n);const r=Mo(n,BS).getImmediate({identifier:e}),s=sg("storage");return s&&LV(r,...s),r}function LV(n,e,t,r={}){DV(n,e,t,r)}function VV(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new sy(t,r,s,e,Lo)}function FV(){Jn(new Un(BS,VV,"PUBLIC").setMultipleInstances(!0)),an(UE,jE,""),an(UE,jE,"esm2017")}FV();const zS="@firebase/installations",oy="0.6.18";/**
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
 */const $S=1e4,qS=`w:${oy}`,HS="FIS_v2",UV="https://firebaseinstallations.googleapis.com/v1",jV=3600*1e3,BV="installations",zV="Installations";/**
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
 */const $V={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},No=new Do(BV,zV,$V);function WS(n){return n instanceof Zn&&n.code.includes("request-failed")}/**
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
 */function GS({projectId:n}){return`${UV}/projects/${n}/installations`}function KS(n){return{token:n.token,requestStatus:2,expiresIn:HV(n.expiresIn),creationTime:Date.now()}}async function QS(n,e){const r=(await e.json()).error;return No.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function YS({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function qV(n,{refreshToken:e}){const t=YS(n);return t.append("Authorization",WV(e)),t}async function XS(n){const e=await n();return e.status>=500&&e.status<600?n():e}function HV(n){return Number(n.replace("s","000"))}function WV(n){return`${HS} ${n}`}/**
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
 */async function GV({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=GS(n),s=YS(n),a=e.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const u={fid:t,authVersion:HS,appId:n.appId,sdkVersion:qS},d={method:"POST",headers:s,body:JSON.stringify(u)},f=await XS(()=>fetch(r,d));if(f.ok){const g=await f.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:KS(g.authToken)}}else throw await QS("Create Installation",f)}/**
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
 */function JS(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function KV(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const QV=/^[cdef][\w-]{21}$/,Wm="";function YV(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=XV(n);return QV.test(t)?t:Wm}catch{return Wm}}function XV(n){return KV(n).substr(0,22)}/**
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
 */function tf(n){return`${n.appName}!${n.appId}`}/**
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
 */const ZS=new Map;function eA(n,e){const t=tf(n);tA(t,e),JV(t,e)}function tA(n,e){const t=ZS.get(n);if(t)for(const r of t)r(e)}function JV(n,e){const t=ZV();t&&t.postMessage({key:n,fid:e}),e4()}let mo=null;function ZV(){return!mo&&"BroadcastChannel"in self&&(mo=new BroadcastChannel("[Firebase] FID Change"),mo.onmessage=n=>{tA(n.data.key,n.data.fid)}),mo}function e4(){ZS.size===0&&mo&&(mo.close(),mo=null)}/**
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
 */const t4="firebase-installations-database",n4=1,xo="firebase-installations-store";let nm=null;function ay(){return nm||(nm=Od(t4,n4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(xo)}}})),nm}async function Td(n,e){const t=tf(n),s=(await ay()).transaction(xo,"readwrite"),a=s.objectStore(xo),u=await a.get(t);return await a.put(e,t),await s.done,(!u||u.fid!==e.fid)&&eA(n,e.fid),e}async function nA(n){const e=tf(n),r=(await ay()).transaction(xo,"readwrite");await r.objectStore(xo).delete(e),await r.done}async function nf(n,e){const t=tf(n),s=(await ay()).transaction(xo,"readwrite"),a=s.objectStore(xo),u=await a.get(t),d=e(u);return d===void 0?await a.delete(t):await a.put(d,t),await s.done,d&&(!u||u.fid!==d.fid)&&eA(n,d.fid),d}/**
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
 */async function ly(n){let e;const t=await nf(n.appConfig,r=>{const s=r4(r),a=i4(n,s);return e=a.registrationPromise,a.installationEntry});return t.fid===Wm?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function r4(n){const e=n||{fid:YV(),registrationStatus:0};return rA(e)}function i4(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(No.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=s4(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:o4(n)}:{installationEntry:e}}async function s4(n,e){try{const t=await GV(n,e);return Td(n.appConfig,t)}catch(t){throw WS(t)&&t.customData.serverCode===409?await nA(n.appConfig):await Td(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function o4(n){let e=await BE(n.appConfig);for(;e.registrationStatus===1;)await JS(100),e=await BE(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ly(n);return r||t}return e}function BE(n){return nf(n,e=>{if(!e)throw No.create("installation-not-found");return rA(e)})}function rA(n){return a4(n)?{fid:n.fid,registrationStatus:0}:n}function a4(n){return n.registrationStatus===1&&n.registrationTime+$S<Date.now()}/**
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
 */async function l4({appConfig:n,heartbeatServiceProvider:e},t){const r=u4(n,t),s=qV(n,t),a=e.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const u={installation:{sdkVersion:qS,appId:n.appId}},d={method:"POST",headers:s,body:JSON.stringify(u)},f=await XS(()=>fetch(r,d));if(f.ok){const g=await f.json();return KS(g)}else throw await QS("Generate Auth Token",f)}function u4(n,{fid:e}){return`${GS(n)}/${e}/authTokens:generate`}/**
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
 */async function uy(n,e=!1){let t;const r=await nf(n.appConfig,a=>{if(!iA(a))throw No.create("not-registered");const u=a.authToken;if(!e&&d4(u))return a;if(u.requestStatus===1)return t=c4(n,e),a;{if(!navigator.onLine)throw No.create("app-offline");const d=p4(a);return t=h4(n,d),d}});return t?await t:r.authToken}async function c4(n,e){let t=await zE(n.appConfig);for(;t.authToken.requestStatus===1;)await JS(100),t=await zE(n.appConfig);const r=t.authToken;return r.requestStatus===0?uy(n,e):r}function zE(n){return nf(n,e=>{if(!iA(e))throw No.create("not-registered");const t=e.authToken;return m4(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function h4(n,e){try{const t=await l4(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Td(n.appConfig,r),t}catch(t){if(WS(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await nA(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Td(n.appConfig,r)}throw t}}function iA(n){return n!==void 0&&n.registrationStatus===2}function d4(n){return n.requestStatus===2&&!f4(n)}function f4(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+jV}function p4(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function m4(n){return n.requestStatus===1&&n.requestTime+$S<Date.now()}/**
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
 */async function g4(n){const e=n,{installationEntry:t,registrationPromise:r}=await ly(e);return r?r.catch(console.error):uy(e).catch(console.error),t.fid}/**
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
 */async function y4(n,e=!1){const t=n;return await v4(t),(await uy(t,e)).token}async function v4(n){const{registrationPromise:e}=await ly(n);e&&await e}/**
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
 */function _4(n){if(!n||!n.options)throw rm("App Configuration");if(!n.name)throw rm("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw rm(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function rm(n){return No.create("missing-app-config-values",{valueName:n})}/**
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
 */const sA="installations",w4="installations-internal",E4=n=>{const e=n.getProvider("app").getImmediate(),t=_4(e),r=Mo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},T4=n=>{const e=n.getProvider("app").getImmediate(),t=Mo(e,sA).getImmediate();return{getId:()=>g4(t),getToken:s=>y4(t,s)}};function I4(){Jn(new Un(sA,E4,"PUBLIC")),Jn(new Un(w4,T4,"PRIVATE"))}I4();an(zS,oy);an(zS,oy,"esm2017");/**
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
 */const S4="/firebase-messaging-sw.js",A4="/firebase-cloud-messaging-push-scope",oA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",R4="https://fcmregistrations.googleapis.com/v1",aA="google.c.a.c_id",P4="google.c.a.c_l",C4="google.c.a.ts",k4="google.c.a.e",$E=1e4;var qE;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(qE||(qE={}));/**
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
 */var Hu;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Hu||(Hu={}));/**
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
 */function mi(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function b4(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let a=0;a<r.length;++a)s[a]=r.charCodeAt(a);return s}/**
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
 */const im="fcm_token_details_db",N4=5,HE="fcm_token_object_Store";async function x4(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(im))return null;let e=null;return(await Od(im,N4,{upgrade:async(r,s,a,u)=>{var d;if(s<2||!r.objectStoreNames.contains(HE))return;const f=u.objectStore(HE),g=await f.index("fcmSenderId").get(n);if(await f.clear(),!!g){if(s===2){const v=g;if(!v.auth||!v.p256dh||!v.endpoint)return;e={token:v.fcmToken,createTime:(d=v.createTime)!==null&&d!==void 0?d:Date.now(),subscriptionOptions:{auth:v.auth,p256dh:v.p256dh,endpoint:v.endpoint,swScope:v.swScope,vapidKey:typeof v.vapidKey=="string"?v.vapidKey:mi(v.vapidKey)}}}else if(s===3){const v=g;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:mi(v.auth),p256dh:mi(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:mi(v.vapidKey)}}}else if(s===4){const v=g;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:mi(v.auth),p256dh:mi(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:mi(v.vapidKey)}}}}}})).close(),await qp(im),await qp("fcm_vapid_details_db"),await qp("undefined"),O4(e)?e:null}function O4(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const D4="firebase-messaging-database",M4=1,Wu="firebase-messaging-store";let sm=null;function lA(){return sm||(sm=Od(D4,M4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Wu)}}})),sm}async function L4(n){const e=uA(n),r=await(await lA()).transaction(Wu).objectStore(Wu).get(e);if(r)return r;{const s=await x4(n.appConfig.senderId);if(s)return await cy(n,s),s}}async function cy(n,e){const t=uA(n),s=(await lA()).transaction(Wu,"readwrite");return await s.objectStore(Wu).put(e,t),await s.done,e}function uA({appConfig:n}){return n.appId}/**
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
 */const V4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Vn=new Do("messaging","Messaging",V4);/**
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
 */async function F4(n,e){const t=await dy(n),r=cA(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let a;try{a=await(await fetch(hy(n.appConfig),s)).json()}catch(u){throw Vn.create("token-subscribe-failed",{errorInfo:u==null?void 0:u.toString()})}if(a.error){const u=a.error.message;throw Vn.create("token-subscribe-failed",{errorInfo:u})}if(!a.token)throw Vn.create("token-subscribe-no-token");return a.token}async function U4(n,e){const t=await dy(n),r=cA(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${hy(n.appConfig)}/${e.token}`,s)).json()}catch(u){throw Vn.create("token-update-failed",{errorInfo:u==null?void 0:u.toString()})}if(a.error){const u=a.error.message;throw Vn.create("token-update-failed",{errorInfo:u})}if(!a.token)throw Vn.create("token-update-no-token");return a.token}async function j4(n,e){const r={method:"DELETE",headers:await dy(n)};try{const a=await(await fetch(`${hy(n.appConfig)}/${e}`,r)).json();if(a.error){const u=a.error.message;throw Vn.create("token-unsubscribe-failed",{errorInfo:u})}}catch(s){throw Vn.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function hy({projectId:n}){return`${R4}/projects/${n}/registrations`}async function dy({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function cA({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==oA&&(s.web.applicationPubKey=r),s}/**
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
 */const B4=10080*60*1e3;async function z4(n){const e=await q4(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:mi(e.getKey("auth")),p256dh:mi(e.getKey("p256dh"))},r=await L4(n.firebaseDependencies);if(r){if(H4(r.subscriptionOptions,t))return Date.now()>=r.createTime+B4?$4(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await j4(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return WE(n.firebaseDependencies,t)}else return WE(n.firebaseDependencies,t)}async function $4(n,e){try{const t=await U4(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await cy(n.firebaseDependencies,r),t}catch(t){throw t}}async function WE(n,e){const r={token:await F4(n,e),createTime:Date.now(),subscriptionOptions:e};return await cy(n,r),r.token}async function q4(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:b4(e)})}function H4(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,a=e.p256dh===n.p256dh;return t&&r&&s&&a}/**
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
 */function GE(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return W4(e,n),G4(e,n),K4(e,n),e}function W4(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const a=e.notification.icon;a&&(n.notification.icon=a)}function G4(n,e){e.data&&(n.data=e.data)}function K4(n,e){var t,r,s,a,u;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const d=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(a=e.notification)===null||a===void 0?void 0:a.click_action;d&&(n.fcmOptions.link=d);const f=(u=e.fcmOptions)===null||u===void 0?void 0:u.analytics_label;f&&(n.fcmOptions.analyticsLabel=f)}/**
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
 */function Q4(n){return typeof n=="object"&&!!n&&aA in n}/**
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
 */function Y4(n){if(!n||!n.options)throw om("App Configuration Object");if(!n.name)throw om("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw om(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function om(n){return Vn.create("missing-app-config-values",{valueName:n})}/**
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
 */class X4{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Y4(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function J4(n){try{n.swRegistration=await navigator.serviceWorker.register(S4,{scope:A4}),n.swRegistration.update().catch(()=>{}),await Z4(n.swRegistration)}catch(e){throw Vn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function Z4(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${$E} ms`)),$E),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=a=>{var u;((u=a.target)===null||u===void 0?void 0:u.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
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
 */async function eF(n,e){if(!e&&!n.swRegistration&&await J4(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Vn.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function tF(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=oA)}/**
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
 */async function nF(n,e){if(!navigator)throw Vn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Vn.create("permission-blocked");return await tF(n,e==null?void 0:e.vapidKey),await eF(n,e==null?void 0:e.serviceWorkerRegistration),z4(n)}/**
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
 */async function rF(n,e,t){const r=iF(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[aA],message_name:t[P4],message_time:t[C4],message_device_time:Math.floor(Date.now()/1e3)})}function iF(n){switch(n){case Hu.NOTIFICATION_CLICKED:return"notification_open";case Hu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function sF(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Hu.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(GE(t)):n.onMessageHandler.next(GE(t)));const r=t.data;Q4(r)&&r[k4]==="1"&&await rF(n,t.messageType,r)}const KE="@firebase/messaging",QE="0.12.22";/**
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
 */const oF=n=>{const e=new X4(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>sF(e,t)),e},aF=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>nF(e,r)}};function lF(){Jn(new Un("messaging",oF,"PUBLIC")),Jn(new Un("messaging-internal",aF,"PRIVATE")),an(KE,QE),an(KE,QE,"esm2017")}lF();const uF={apiKey:"YOUR_API_KEY",authDomain:"moms-469e6.firebaseapp.com",projectId:"moms-469e6",storageBucket:"moms-469e6.firebasestorage.app",messagingSenderId:"YOUR_SENDER_ID",appId:"YOUR_APP_ID"},rf=oT(uF),Vh=qO(rf),Fh=jM(rf),rU=SL(rf,"asia-south1"),iU=MV(rf),hA=H.createContext(null),YE=n=>`${n.replace(/[^0-9]/g,"")}@moms.app`;function cF({children:n}){const[e,t]=H.useState(null),[r,s]=H.useState(null),[a,u]=H.useState(!0);H.useEffect(()=>{const P=xx(Vh,async D=>{if(t(D),D){const x=Dh(Fh,"users",D.uid),k=iL(x,q=>{q.exists()?s({id:q.id,...q.data()}):s(null),u(!1)},q=>{console.error("Error fetching user data:",q),s(null),u(!1)});return()=>k()}else s(null),u(!1)});return()=>P()},[]);const T={user:e,userData:r,loading:a,isAuthenticated:!!e,isRegistered:!!r,login:async(P,D)=>{try{const x=YE(P),k=await kx(Vh,x,D);return di.success("Login successful!"),{success:!0,user:k.user}}catch(x){console.error("Login error:",x);let k="Login failed";return x.code==="auth/user-not-found"||x.code==="auth/wrong-password"||x.code==="auth/invalid-credential"?k="Invalid phone number or password":x.code==="auth/too-many-requests"&&(k="Too many failed attempts. Please try again later."),di.error(k),{success:!1,error:k}}},register:async(P,D,x)=>{try{const k=YE(P),q=await Cx(Vh,k,D),X={id:q.user.uid,phone:P,name:x,role:"customer",status:"active",createdAt:Zp(),updatedAt:Zp()};return await nL(Dh(Fh,"users",q.user.uid),X),s(X),di.success("Registration successful!"),{success:!0,user:q.user}}catch(k){console.error("Register error:",k);let q="Registration failed";return k.code==="auth/email-already-in-use"?q="This phone number is already registered":k.code==="auth/weak-password"&&(q="Password should be at least 6 characters"),di.error(q),{success:!1,error:q}}},signOut:async()=>{try{await Ox(Vh),t(null),s(null),di.success("Signed out successfully")}catch(P){console.error("Sign out error:",P),di.error("Failed to sign out")}},updateProfile:async P=>{if(!e)return di.error("User not authenticated"),{success:!1};try{return await rL(Dh(Fh,"users",e.uid),{...P,updatedAt:Zp()}),s(D=>({...D,...P})),di.success("Profile updated successfully"),{success:!0}}catch(D){return console.error("Update profile error:",D),di.error(D.message||"Failed to update profile"),{success:!1,error:D.message}}},refreshUserData:async()=>{if(e)try{const P=await tL(Dh(Fh,"users",e.uid));P.exists()&&s({id:P.id,...P.data()})}catch(P){console.error("Error refreshing user data:",P)}}};return re.jsx(hA.Provider,{value:T,children:n})}function dA(){const n=H.useContext(hA);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n}const ht={SYSTEM_ADMIN:"system_admin",AGENCY_OWNER:"agency_owner",AGENCY_HELPER:"agency_helper",HOUSE_ADMIN:"house_admin",CUSTOMER:"customer"},sU={PLACED:"placed",CONFIRMED:"confirmed",PREPARING:"preparing",READY:"ready",DELIVERED:"delivered",CANCELLED:"cancelled"},oU={BREAKFAST:"breakfast",LUNCH:"lunch",DINNER:"dinner",SNACKS:"snacks"},aU={breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",snacks:"Snacks"},lU={cash:"Cash",upi:"UPI",bank_transfer:"Bank Transfer",other:"Other"},uU={system_admin:"System Admin",agency_owner:"Agency Owner",agency_helper:"Agency Helper",house_admin:"House Admin",customer:"Customer"},Ge={HOME:"/",LOGIN:"/login",REGISTER:"/register",DASHBOARD:"/dashboard",AGENCY_HOUSES:"/agency/houses",AGENCY_MENU:"/agency/menu",AGENCY_ORDERS:"/agency/orders",AGENCY_BILLS:"/agency/bills",AGENCY_PAYMENTS:"/agency/payments",AGENCY_SETTINGS:"/agency/settings",HOUSE_MEMBERS:"/house/members",HOUSE_ORDERS:"/house/orders",HOUSE_BILLS:"/house/bills",HOUSE_REQUESTS:"/house/requests",ORDER:"/order",MY_ORDERS:"/my-orders",MY_BILLS:"/my-bills",CHAT:"/chat",PROFILE:"/profile",ADMIN_AGENCIES:"/admin/agencies"};function Gt({children:n,requiredRoles:e=[]}){const{user:t,userData:r,loading:s,isAuthenticated:a,isRegistered:u}=dA(),d=Oo();return s?re.jsx(ig,{message:"Loading..."}):a?u?e.length>0&&!e.includes(r==null?void 0:r.role)?re.jsx(To,{to:Ge.DASHBOARD,replace:!0}):n:re.jsx(To,{to:Ge.REGISTER,state:{from:d},replace:!0}):re.jsx(To,{to:Ge.LOGIN,state:{from:d},replace:!0})}function XE({children:n}){var a,u;const{loading:e,isAuthenticated:t,isRegistered:r}=dA(),s=Oo();if(e)return re.jsx(ig,{message:"Loading..."});if(t&&r){const d=((u=(a=s.state)==null?void 0:a.from)==null?void 0:u.pathname)||Ge.DASHBOARD;return re.jsx(To,{to:d,replace:!0})}return t&&!r&&s.pathname!==Ge.REGISTER?re.jsx(To,{to:Ge.REGISTER,replace:!0}):n}const hF=H.lazy(()=>Mt(()=>import("./LoginPage-B-ni0WfZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),dF=H.lazy(()=>Mt(()=>import("./RegisterPage-Cx5Gs8_P.js"),__vite__mapDeps([8,1,2,3,4,9,5,6,7]))),fF=H.lazy(()=>Mt(()=>import("./DashboardPage-DYxVxr0A.js"),__vite__mapDeps([10,11,3,9,12,13,14,15,7,16]))),pF=H.lazy(()=>Mt(()=>import("./OrderPage-DVk1QnyA.js"),__vite__mapDeps([17,12,18,13,11,3,9,14,19,16,20,21]))),mF=H.lazy(()=>Mt(()=>import("./MyOrdersPage-Bodf5OKu.js"),__vite__mapDeps([22,12,13,11,3,9,14,23,4,24]))),gF=H.lazy(()=>Mt(()=>import("./MyBillsPage-3JRRR5e1.js"),__vite__mapDeps([25,12,18,1,13,11,3,9,14,23,19,4,24,26,15,21]))),yF=H.lazy(()=>Mt(()=>import("./ChatPage-DEAnnk5R.js"),__vite__mapDeps([27,18,13,11,3,9,28]))),vF=H.lazy(()=>Mt(()=>import("./AgencyHousesPage-DEq5OgOl.js"),__vite__mapDeps([29,12,18,1,2,13,11,3,9,14,23,19,4,20,30,31,5,32]))),_F=H.lazy(()=>Mt(()=>import("./AgencyMenuPage-6wvHc-Tj.js"),__vite__mapDeps([33,12,18,1,2,13,11,3,9,19,4,20,24,16,6,32,34]))),wF=H.lazy(()=>Mt(()=>import("./AgencyOrdersPage-BccgP0Cp.js"),__vite__mapDeps([35,12,18,13,11,3,9,14,23,19,4,24,26,21]))),EF=H.lazy(()=>Mt(()=>import("./AgencyBillsPage-D-UMPxSp.js"),__vite__mapDeps([36,12,18,13,11,3,9,14,23,19,4,20,26]))),TF=H.lazy(()=>Mt(()=>import("./AgencyPaymentsPage-CU46J01Q.js"),__vite__mapDeps([37,12,18,13,11,3,9,14,23,19,4,15,28,21,26]))),IF=H.lazy(()=>Mt(()=>import("./AgencySettingsPage-BG13b6My.js"),__vite__mapDeps([38,1,2,11,3,9,4,16,34]))),SF=H.lazy(()=>Mt(()=>import("./HouseMembersPage-eJnTX2xe.js"),__vite__mapDeps([39,12,18,1,2,13,11,3,9,14,23,19,4,20,30,40,5]))),AF=H.lazy(()=>Mt(()=>import("./HouseOrdersPage-DXCBK2HP.js"),__vite__mapDeps([41,12,13,11,3,9,14,23,19,26]))),RF=H.lazy(()=>Mt(()=>import("./HouseRequestsPage-DsAbawyC.js"),__vite__mapDeps([42,12,18,13,11,3,9,14,23,19,4,16,21]))),PF=H.lazy(()=>Mt(()=>import("./HouseBillsPage-DBSmN21-.js"),__vite__mapDeps([43,12,13,11,3,9,14,23,19,24,26]))),CF=H.lazy(()=>Mt(()=>import("./ProfilePage-DQSHYEaf.js"),__vite__mapDeps([44,1,2,11,3,9,14,4,19,5,34,40]))),kF=H.lazy(()=>Mt(()=>import("./AdminAgenciesPage-aUoWvNPe.js"),__vite__mapDeps([45,12,18,1,2,13,11,3,9,14,23,19,4,20,30,5,31,32])));function bF(){return re.jsx(H.Suspense,{fallback:re.jsx(ig,{}),children:re.jsxs(v1,{children:[re.jsx(dt,{path:Ge.LOGIN,element:re.jsx(XE,{children:re.jsx(hF,{})})}),re.jsx(dt,{path:Ge.REGISTER,element:re.jsx(XE,{children:re.jsx(dF,{})})}),re.jsx(dt,{path:Ge.DASHBOARD,element:re.jsx(Gt,{children:re.jsx(fF,{})})}),re.jsx(dt,{path:Ge.PROFILE,element:re.jsx(Gt,{children:re.jsx(CF,{})})}),re.jsx(dt,{path:Ge.ORDER,element:re.jsx(Gt,{requiredRoles:[ht.CUSTOMER,ht.HOUSE_ADMIN],children:re.jsx(pF,{})})}),re.jsx(dt,{path:Ge.MY_ORDERS,element:re.jsx(Gt,{requiredRoles:[ht.CUSTOMER,ht.HOUSE_ADMIN],children:re.jsx(mF,{})})}),re.jsx(dt,{path:Ge.MY_BILLS,element:re.jsx(Gt,{requiredRoles:[ht.CUSTOMER,ht.HOUSE_ADMIN],children:re.jsx(gF,{})})}),re.jsx(dt,{path:Ge.CHAT,element:re.jsx(Gt,{requiredRoles:[ht.CUSTOMER,ht.HOUSE_ADMIN],children:re.jsx(yF,{})})}),re.jsx(dt,{path:Ge.AGENCY_HOUSES,element:re.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER,ht.AGENCY_HELPER],children:re.jsx(vF,{})})}),re.jsx(dt,{path:Ge.AGENCY_MENU,element:re.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER,ht.AGENCY_HELPER],children:re.jsx(_F,{})})}),re.jsx(dt,{path:Ge.AGENCY_ORDERS,element:re.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER,ht.AGENCY_HELPER],children:re.jsx(wF,{})})}),re.jsx(dt,{path:Ge.AGENCY_BILLS,element:re.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER],children:re.jsx(EF,{})})}),re.jsx(dt,{path:Ge.AGENCY_PAYMENTS,element:re.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER],children:re.jsx(TF,{})})}),re.jsx(dt,{path:Ge.AGENCY_SETTINGS,element:re.jsx(Gt,{requiredRoles:[ht.AGENCY_OWNER],children:re.jsx(IF,{})})}),re.jsx(dt,{path:Ge.HOUSE_MEMBERS,element:re.jsx(Gt,{requiredRoles:[ht.HOUSE_ADMIN],children:re.jsx(SF,{})})}),re.jsx(dt,{path:Ge.HOUSE_ORDERS,element:re.jsx(Gt,{requiredRoles:[ht.HOUSE_ADMIN],children:re.jsx(AF,{})})}),re.jsx(dt,{path:Ge.HOUSE_REQUESTS,element:re.jsx(Gt,{requiredRoles:[ht.HOUSE_ADMIN],children:re.jsx(RF,{})})}),re.jsx(dt,{path:Ge.HOUSE_BILLS,element:re.jsx(Gt,{requiredRoles:[ht.HOUSE_ADMIN],children:re.jsx(PF,{})})}),re.jsx(dt,{path:Ge.ADMIN_AGENCIES,element:re.jsx(Gt,{requiredRoles:[ht.SYSTEM_ADMIN],children:re.jsx(kF,{})})}),re.jsx(dt,{path:Ge.HOME,element:re.jsx(To,{to:Ge.DASHBOARD,replace:!0})}),re.jsx(dt,{path:"*",element:re.jsx(To,{to:Ge.DASHBOARD,replace:!0})})]})})}const NF=new tP({defaultOptions:{queries:{staleTime:1e3*60*5,retry:1,refetchOnWindowFocus:!1}}});RR.createRoot(document.getElementById("root")).render(re.jsx(l0.StrictMode,{children:re.jsx(nP,{client:NF,children:re.jsx(A1,{children:re.jsxs(cF,{children:[re.jsx(bF,{}),re.jsx(qP,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#1e293b",color:"#fff"}}})]})})})}));export{OF as $,uU as A,MF as B,Nu as C,J1 as D,pn as E,mr as F,LF as G,$1 as H,M1 as I,hm as J,Ad as K,DF as L,aU as M,O1 as N,sU as O,GF as P,D1 as Q,Ge as R,Sd as S,cm as T,T0 as U,Q1 as V,F1 as W,ZF as X,rU as Y,l0 as Z,Km as _,dA as a,wR as a0,HF as a1,Oo as a2,BF as b,ht as c,Yk as d,UF as e,jF as f,oU as g,$F as h,lU as i,re as j,nU as k,eU as l,tU as m,QF as n,JF as o,XF as p,YF as q,H as r,iU as s,iL as t,m0 as u,qF as v,Fh as w,WF as x,zF as y,di as z};
