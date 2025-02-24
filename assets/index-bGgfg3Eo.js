(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();var Vf={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function z_(){if(av)return Oo;av=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:i,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Oo.Fragment=e,Oo.jsx=t,Oo.jsxs=t,Oo}var ov;function H_(){return ov||(ov=1,Vf.exports=z_()),Vf.exports}var bn=H_(),kf={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function G_(){if(lv)return lt;lv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,M={};function S(L,ne,me){this.props=L,this.context=ne,this.refs=M,this.updater=me||A}S.prototype.isReactComponent={},S.prototype.setState=function(L,ne){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ne,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=S.prototype;function B(L,ne,me){this.props=L,this.context=ne,this.refs=M,this.updater=me||A}var U=B.prototype=new _;U.constructor=B,y(U,S.prototype),U.isPureReactComponent=!0;var C=Array.isArray,z={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function H(L,ne,me,ye,Z,ce){return me=ce.ref,{$$typeof:i,type:L,key:ne,ref:me!==void 0?me:null,props:ce}}function Y(L,ne){return H(L.type,ne,void 0,void 0,void 0,L.props)}function w(L){return typeof L=="object"&&L!==null&&L.$$typeof===i}function T(L){var ne={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(me){return ne[me]})}var G=/\/+/g;function le(L,ne){return typeof L=="object"&&L!==null&&L.key!=null?T(""+L.key):ne.toString(36)}function W(){}function P(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(W,W):(L.status="pending",L.then(function(ne){L.status==="pending"&&(L.status="fulfilled",L.value=ne)},function(ne){L.status==="pending"&&(L.status="rejected",L.reason=ne)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function Q(L,ne,me,ye,Z){var ce=typeof L;(ce==="undefined"||ce==="boolean")&&(L=null);var Ae=!1;if(L===null)Ae=!0;else switch(ce){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(L.$$typeof){case i:case e:Ae=!0;break;case g:return Ae=L._init,Q(Ae(L._payload),ne,me,ye,Z)}}if(Ae)return Z=Z(L),Ae=ye===""?"."+le(L,0):ye,C(Z)?(me="",Ae!=null&&(me=Ae.replace(G,"$&/")+"/"),Q(Z,ne,me,"",function(je){return je})):Z!=null&&(w(Z)&&(Z=Y(Z,me+(Z.key==null||L&&L.key===Z.key?"":(""+Z.key).replace(G,"$&/")+"/")+Ae)),ne.push(Z)),1;Ae=0;var Me=ye===""?".":ye+":";if(C(L))for(var be=0;be<L.length;be++)ye=L[be],ce=Me+le(ye,be),Ae+=Q(ye,ne,me,ce,Z);else if(be=x(L),typeof be=="function")for(L=be.call(L),be=0;!(ye=L.next()).done;)ye=ye.value,ce=Me+le(ye,be++),Ae+=Q(ye,ne,me,ce,Z);else if(ce==="object"){if(typeof L.then=="function")return Q(P(L),ne,me,ye,Z);throw ne=String(L),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function F(L,ne,me){if(L==null)return L;var ye=[],Z=0;return Q(L,ye,"","",function(ce){return ne.call(me,ce,Z++)}),ye}function X(L){if(L._status===-1){var ne=L._result;ne=ne(),ne.then(function(me){(L._status===0||L._status===-1)&&(L._status=1,L._result=me)},function(me){(L._status===0||L._status===-1)&&(L._status=2,L._result=me)}),L._status===-1&&(L._status=0,L._result=ne)}if(L._status===1)return L._result.default;throw L._result}var k=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function fe(){}return lt.Children={map:F,forEach:function(L,ne,me){F(L,function(){ne.apply(this,arguments)},me)},count:function(L){var ne=0;return F(L,function(){ne++}),ne},toArray:function(L){return F(L,function(ne){return ne})||[]},only:function(L){if(!w(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},lt.Component=S,lt.Fragment=t,lt.Profiler=o,lt.PureComponent=B,lt.StrictMode=r,lt.Suspense=d,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.act=function(){throw Error("act(...) is not supported in production builds of React.")},lt.cache=function(L){return function(){return L.apply(null,arguments)}},lt.cloneElement=function(L,ne,me){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ye=y({},L.props),Z=L.key,ce=void 0;if(ne!=null)for(Ae in ne.ref!==void 0&&(ce=void 0),ne.key!==void 0&&(Z=""+ne.key),ne)!N.call(ne,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ne.ref===void 0||(ye[Ae]=ne[Ae]);var Ae=arguments.length-2;if(Ae===1)ye.children=me;else if(1<Ae){for(var Me=Array(Ae),be=0;be<Ae;be++)Me[be]=arguments[be+2];ye.children=Me}return H(L.type,Z,void 0,void 0,ce,ye)},lt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},lt.createElement=function(L,ne,me){var ye,Z={},ce=null;if(ne!=null)for(ye in ne.key!==void 0&&(ce=""+ne.key),ne)N.call(ne,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Z[ye]=ne[ye]);var Ae=arguments.length-2;if(Ae===1)Z.children=me;else if(1<Ae){for(var Me=Array(Ae),be=0;be<Ae;be++)Me[be]=arguments[be+2];Z.children=Me}if(L&&L.defaultProps)for(ye in Ae=L.defaultProps,Ae)Z[ye]===void 0&&(Z[ye]=Ae[ye]);return H(L,ce,void 0,void 0,null,Z)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(L){return{$$typeof:h,render:L}},lt.isValidElement=w,lt.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:X}},lt.memo=function(L,ne){return{$$typeof:p,type:L,compare:ne===void 0?null:ne}},lt.startTransition=function(L){var ne=z.T,me={};z.T=me;try{var ye=L(),Z=z.S;Z!==null&&Z(me,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(fe,k)}catch(ce){k(ce)}finally{z.T=ne}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(L){return z.H.use(L)},lt.useActionState=function(L,ne,me){return z.H.useActionState(L,ne,me)},lt.useCallback=function(L,ne){return z.H.useCallback(L,ne)},lt.useContext=function(L){return z.H.useContext(L)},lt.useDebugValue=function(){},lt.useDeferredValue=function(L,ne){return z.H.useDeferredValue(L,ne)},lt.useEffect=function(L,ne){return z.H.useEffect(L,ne)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(L,ne,me){return z.H.useImperativeHandle(L,ne,me)},lt.useInsertionEffect=function(L,ne){return z.H.useInsertionEffect(L,ne)},lt.useLayoutEffect=function(L,ne){return z.H.useLayoutEffect(L,ne)},lt.useMemo=function(L,ne){return z.H.useMemo(L,ne)},lt.useOptimistic=function(L,ne){return z.H.useOptimistic(L,ne)},lt.useReducer=function(L,ne,me){return z.H.useReducer(L,ne,me)},lt.useRef=function(L){return z.H.useRef(L)},lt.useState=function(L){return z.H.useState(L)},lt.useSyncExternalStore=function(L,ne,me){return z.H.useSyncExternalStore(L,ne,me)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.0.0",lt}var cv;function Md(){return cv||(cv=1,kf.exports=G_()),kf.exports}var Di=Md(),Xf={exports:{}},Po={},Wf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function V_(){return uv||(uv=1,function(i){function e(F,X){var k=F.length;F.push(X);e:for(;0<k;){var fe=k-1>>>1,L=F[fe];if(0<o(L,X))F[fe]=X,F[k]=L,k=fe;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var X=F[0],k=F.pop();if(k!==X){F[0]=k;e:for(var fe=0,L=F.length,ne=L>>>1;fe<ne;){var me=2*(fe+1)-1,ye=F[me],Z=me+1,ce=F[Z];if(0>o(ye,k))Z<L&&0>o(ce,ye)?(F[fe]=ce,F[Z]=k,fe=Z):(F[fe]=ye,F[me]=k,fe=me);else if(Z<L&&0>o(ce,k))F[fe]=ce,F[Z]=k,fe=Z;else break e}}return X}function o(F,X){var k=F.sortIndex-X.sortIndex;return k!==0?k:F.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,v=null,x=3,A=!1,y=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var X=t(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=F)r(p),X.sortIndex=X.expirationTime,e(d,X);else break;X=t(p)}}function C(F){if(M=!1,U(F),!y)if(t(d)!==null)y=!0,P();else{var X=t(p);X!==null&&Q(C,X.startTime-F)}}var z=!1,N=-1,H=5,Y=-1;function w(){return!(i.unstable_now()-Y<H)}function T(){if(z){var F=i.unstable_now();Y=F;var X=!0;try{e:{y=!1,M&&(M=!1,_(N),N=-1),A=!0;var k=x;try{t:{for(U(F),v=t(d);v!==null&&!(v.expirationTime>F&&w());){var fe=v.callback;if(typeof fe=="function"){v.callback=null,x=v.priorityLevel;var L=fe(v.expirationTime<=F);if(F=i.unstable_now(),typeof L=="function"){v.callback=L,U(F),X=!0;break t}v===t(d)&&r(d),U(F)}else r(d);v=t(d)}if(v!==null)X=!0;else{var ne=t(p);ne!==null&&Q(C,ne.startTime-F),X=!1}}break e}finally{v=null,x=k,A=!1}X=void 0}}finally{X?G():z=!1}}}var G;if(typeof B=="function")G=function(){B(T)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,W=le.port2;le.port1.onmessage=T,G=function(){W.postMessage(null)}}else G=function(){S(T,0)};function P(){z||(z=!0,G())}function Q(F,X){N=S(function(){F(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_continueExecution=function(){y||A||(y=!0,P())},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(F){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var k=x;x=X;try{return F()}finally{x=k}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var k=x;x=F;try{return X()}finally{x=k}},i.unstable_scheduleCallback=function(F,X,k){var fe=i.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?fe+k:fe):k=fe,F){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=k+L,F={id:g++,callback:X,priorityLevel:F,startTime:k,expirationTime:L,sortIndex:-1},k>fe?(F.sortIndex=k,e(p,F),t(d)===null&&F===t(p)&&(M?(_(N),N=-1):M=!0,Q(C,k-fe))):(F.sortIndex=L,e(d,F),y||A||(y=!0,P())),F},i.unstable_shouldYield=w,i.unstable_wrapCallback=function(F){var X=x;return function(){var k=x;x=X;try{return F.apply(this,arguments)}finally{x=k}}}}(Yf)),Yf}var fv;function k_(){return fv||(fv=1,Wf.exports=V_()),Wf.exports}var qf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function X_(){if(hv)return Dn;hv=1;var i=Md();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(d,p,null,g)},Dn.flushSync=function(d){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,d)return d()}finally{u.T=p,r.p=g,r.d.f()}},Dn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},Dn.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},Dn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:A}):g==="script"&&r.d.X(d,{crossOrigin:v,integrity:x,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},Dn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},Dn.requestFormReset=function(d){r.d.r(d)},Dn.unstable_batchedUpdates=function(d,p){return d(p)},Dn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Dn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Dn.version="19.0.0",Dn}var dv;function W_(){if(dv)return qf.exports;dv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),qf.exports=X_(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function Y_(){if(pv)return Po;pv=1;var i=k_(),e=Md(),t=W_();function r(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var c=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),A=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),C=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function N(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var H=Symbol.for("react.client.reference");function Y(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===H?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case d:return"Fragment";case h:return"Portal";case g:return"Profiler";case p:return"StrictMode";case M:return"Suspense";case S:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case A:return(n.displayName||"Context")+".Provider";case x:return(n._context.displayName||"Context")+".Consumer";case y:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _:return s=n.displayName||null,s!==null?s:Y(n.type)||"Memo";case B:s=n._payload,n=n._init;try{return Y(n(s))}catch{}}return null}var w=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,G,le;function W(n){if(G===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);G=s&&s[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+G+n+le}var P=!1;function Q(n,s){if(!n||P)return"";P=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(he){var oe=he}Reflect.construct(n,[],_e)}else{try{_e.call()}catch(he){oe=he}n.call(_e.prototype)}}else{try{throw Error()}catch(he){oe=he}(_e=n())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(he){if(he&&oe&&typeof he.stack=="string")return[he.stack,oe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],R=m[1];if(E&&R){var I=E.split(`
`),K=R.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<K.length&&!K[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===K.length)for(l=I.length-1,f=K.length-1;1<=l&&0<=f&&I[l]!==K[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==K[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==K[f]){var de=`
`+I[l].replace(" at new "," at ");return n.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",n.displayName)),de}while(1<=l&&0<=f);break}}}finally{P=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?W(a):""}function F(n){switch(n.tag){case 26:case 27:case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function X(n){try{var s="";do s+=F(n),n=n.return;while(n);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function k(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,s.flags&4098&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function fe(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function L(n){if(k(n)!==n)throw Error(r(188))}function ne(n){var s=n.alternate;if(!s){if(s=k(n),s===null)throw Error(r(188));return s!==n?null:n}for(var a=n,l=s;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return L(f),n;if(m===l)return L(f),s;m=m.sibling}throw Error(r(188))}if(a.return!==l.return)a=f,l=m;else{for(var E=!1,R=f.child;R;){if(R===a){E=!0,a=f,l=m;break}if(R===l){E=!0,l=f,a=m;break}R=R.sibling}if(!E){for(R=m.child;R;){if(R===a){E=!0,a=m,l=f;break}if(R===l){E=!0,l=m,a=f;break}R=R.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?n:s}function me(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=me(n),s!==null)return s;n=n.sibling}return null}var ye=Array.isArray,Z=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Ae=[],Me=-1;function be(n){return{current:n}}function je(n){0>Me||(n.current=Ae[Me],Ae[Me]=null,Me--)}function De(n,s){Me++,Ae[Me]=n.current,n.current=s}var At=be(null),Ut=be(null),it=be(null),V=be(null);function Xt(n,s){switch(De(it,s),De(Ut,n),De(At,null),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?Pg(s):0;break;default:if(n=n===8?s.parentNode:s,s=n.tagName,n=n.namespaceURI)n=Pg(n),s=Ng(n,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}je(At),De(At,s)}function ot(){je(At),je(Ut),je(it)}function ht(n){n.memoizedState!==null&&De(V,n);var s=At.current,a=Ng(s,n.type);s!==a&&(De(Ut,n),De(At,a))}function Xe(n){Ut.current===n&&(je(At),je(Ut)),V.current===n&&(je(V),Ro._currentValue=ce)}var Lt=Object.prototype.hasOwnProperty,We=i.unstable_scheduleCallback,O=i.unstable_cancelCallback,b=i.unstable_shouldYield,ae=i.unstable_requestPaint,pe=i.unstable_now,Se=i.unstable_getCurrentPriorityLevel,ge=i.unstable_ImmediatePriority,Ge=i.unstable_UserBlockingPriority,Re=i.unstable_NormalPriority,Ie=i.unstable_LowPriority,xt=i.unstable_IdlePriority,Te=i.log,Fe=i.unstable_setDisableYieldValue,qe=null,Ve=null;function ze(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}function at(n){if(typeof Te=="function"&&Fe(n),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(qe,n)}catch{}}var Ke=Math.clz32?Math.clz32:Be,Bt=Math.log,J=Math.LN2;function Be(n){return n>>>=0,n===0?32:31-(Bt(n)/J|0)|0}var ue=128,xe=4194304;function we(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ue(n,s){var a=n.pendingLanes;if(a===0)return 0;var l=0,f=n.suspendedLanes,m=n.pingedLanes,E=n.warmLanes;n=n.finishedLanes!==0;var R=a&134217727;return R!==0?(a=R&~f,a!==0?l=we(a):(m&=R,m!==0?l=we(m):n||(E=R&~E,E!==0&&(l=we(E))))):(R=a&~f,R!==0?l=we(R):m!==0?l=we(m):n||(E=a&~E,E!==0&&(l=we(E)))),l===0?0:s!==0&&s!==l&&!(s&f)&&(f=l&-l,E=s&-s,f>=E||f===32&&(E&4194176)!==0)?s:l}function et(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function Wt(n,s){switch(n){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function on(){var n=ue;return ue<<=1,!(ue&4194176)&&(ue=128),n}function Tt(){var n=xe;return xe<<=1,!(xe&62914560)&&(xe=4194304),n}function Nn(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function In(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Jo(n,s,a,l,f,m){var E=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var R=n.entanglements,I=n.expirationTimes,K=n.hiddenUpdates;for(a=E&~a;0<a;){var de=31-Ke(a),_e=1<<de;R[de]=0,I[de]=-1;var oe=K[de];if(oe!==null)for(K[de]=null,de=0;de<oe.length;de++){var he=oe[de];he!==null&&(he.lane&=-536870913)}a&=~_e}l!==0&&za(n,l,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~s))}function za(n,s,a){n.pendingLanes|=s,n.suspendedLanes&=~s;var l=31-Ke(s);n.entangledLanes|=s,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194218}function Ui(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var l=31-Ke(a),f=1<<l;f&s|n[l]&s&&(n[l]|=s),a&=~f}}function Lr(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function Ha(){var n=Z.p;return n!==0?n:(n=window.event,n===void 0?32:ev(n.type))}function $o(n,s){var a=Z.p;try{return Z.p=n,s()}finally{Z.p=a}}var Kn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Kn,cn="__reactProps$"+Kn,Vi="__reactContainer$"+Kn,Br="__reactEvents$"+Kn,zc="__reactListeners$"+Kn,Hc="__reactHandles$"+Kn,el="__reactResources$"+Kn,js="__reactMarker$"+Kn;function Ga(n){delete n[ln],delete n[cn],delete n[Br],delete n[zc],delete n[Hc]}function ki(n){var s=n[ln];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Vi]||a[ln]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=zg(n);n!==null;){if(a=n[ln])return a;n=zg(n)}return s}n=a,a=n.parentNode}return null}function D(n){if(n=n[ln]||n[Vi]){var s=n.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return n}return null}function $(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(r(33))}function re(n){var s=n[el];return s||(s=n[el]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function ie(n){n[js]=!0}var ee=new Set,Ee={};function Ce(n,s){Ne(n,s),Ne(n+"Capture",s)}function Ne(n,s){for(Ee[n]=s,n=0;n<s.length;n++)ee.add(s[n])}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},Qe={};function _t(n){return Lt.call(Qe,n)?!0:Lt.call(nt,n)?!1:tt.test(n)?Qe[n]=!0:(nt[n]=!0,!1)}function St(n,s,a){if(_t(s))if(a===null)n.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+a)}}function Vt(n,s,a){if(a===null)n.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+a)}}function bt(n,s,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(s,a,""+l)}}function st(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ze(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function un(n){var s=Ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),l=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Et(n){n._valueTracker||(n._valueTracker=un(n))}function Xn(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),l="";return n&&(l=Ze(n)?n.checked?"true":"false":n.value),n=l,n!==a?(s.setValue(n),!0):!1}function _i(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Fn=/[\n"\\]/g;function mn(n){return n.replace(Fn,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Ot(n,s,a,l,f,m,E,R){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),s!=null?E==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+st(s)):n.value!==""+st(s)&&(n.value=""+st(s)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),s!=null?wn(n,E,st(s)):a!=null?wn(n,E,st(a)):l!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?n.name=""+st(R):n.removeAttribute("name")}function zn(n,s,a,l,f,m,E,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),s!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;a=a!=null?""+st(a):"",s=s!=null?""+st(s):a,R||s===n.value||(n.value=s),n.defaultValue=s}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=R?n.checked:!!l,n.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function wn(n,s,a){s==="number"&&_i(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Qt(n,s,a,l){if(n=n.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=s.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+st(a),s=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}s!==null||n[f].disabled||(s=n[f])}s!==null&&(s.selected=!0)}}function En(n,s,a){if(s!=null&&(s=""+st(s),s!==n.value&&(n.value=s),a==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=a!=null?""+st(a):""}function Or(n,s,a,l){if(s==null){if(l!=null){if(a!=null)throw Error(r(92));if(ye(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),s=a}a=st(s),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Wn(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Nx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kd(n,s,a){var l=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":l?n.setProperty(s,a):typeof a!="number"||a===0||Nx.has(s)?s==="float"?n.cssFloat=a:n[s]=(""+a).trim():n[s]=a+"px"}function Xd(n,s,a){if(s!=null&&typeof s!="object")throw Error(r(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in s)l=s[f],s.hasOwnProperty(f)&&a[f]!==l&&kd(n,f,l)}else for(var m in s)s.hasOwnProperty(m)&&kd(n,m,s[m])}function Gc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(n){return Fx.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Vc=null;function kc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pr=null,Nr=null;function Wd(n){var s=D(n);if(s&&(n=s.stateNode)){var a=n[cn]||null;e:switch(n=s.stateNode,s.type){case"input":if(Ot(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var l=a[s];if(l!==n&&l.form===n.form){var f=l[cn]||null;if(!f)throw Error(r(90));Ot(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<a.length;s++)l=a[s],l.form===n.form&&Xn(l)}break e;case"textarea":En(n,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Qt(n,!!a.multiple,s,!1)}}}var Xc=!1;function Yd(n,s,a){if(Xc)return n(s,a);Xc=!0;try{var l=n(s);return l}finally{if(Xc=!1,(Pr!==null||Nr!==null)&&(Fl(),Pr&&(s=Pr,n=Nr,Nr=Pr=null,Wd(s),n)))for(s=0;s<n.length;s++)Wd(n[s])}}function Va(n,s){var a=n.stateNode;if(a===null)return null;var l=a[cn]||null;if(l===null)return null;a=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(r(231,s,typeof a));return a}var Wc=!1;if(Oe)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{Wc=!1}var As=null,Yc=null,nl=null;function qd(){if(nl)return nl;var n,s=Yc,a=s.length,l,f="value"in As?As.value:As.textContent,m=f.length;for(n=0;n<a&&s[n]===f[n];n++);var E=a-n;for(l=1;l<=E&&s[a-l]===f[m-l];l++);return nl=f.slice(n,1<l?1-l:void 0)}function il(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function sl(){return!0}function Qd(){return!1}function Yn(n){function s(a,l,f,m,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var R in n)n.hasOwnProperty(R)&&(a=n[R],this[R]=a?a(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?sl:Qd,this.isPropagationStopped=Qd,this}return T(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),s}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Yn(Js),Xa=T({},Js,{view:0,detail:0}),zx=Yn(Xa),qc,Qc,Wa,al=T({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wa&&(Wa&&n.type==="mousemove"?(qc=n.screenX-Wa.screenX,Qc=n.screenY-Wa.screenY):Qc=qc=0,Wa=n),qc)},movementY:function(n){return"movementY"in n?n.movementY:Qc}}),Kd=Yn(al),Hx=T({},al,{dataTransfer:0}),Gx=Yn(Hx),Vx=T({},Xa,{relatedTarget:0}),Kc=Yn(Vx),kx=T({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),Xx=Yn(kx),Wx=T({},Js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Yx=Yn(Wx),qx=T({},Js,{data:0}),Zd=Yn(qx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Zx[n])?!!s[n]:!1}function Zc(){return jx}var Jx=T({},Xa,{key:function(n){if(n.key){var s=Qx[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$x=Yn(Jx),eA=T({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Yn(eA),tA=T({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),nA=Yn(tA),iA=T({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),sA=Yn(iA),rA=T({},al,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),aA=Yn(rA),oA=T({},Js,{newState:0,oldState:0}),lA=Yn(oA),cA=[9,13,27,32],jc=Oe&&"CompositionEvent"in window,Ya=null;Oe&&"documentMode"in document&&(Ya=document.documentMode);var uA=Oe&&"TextEvent"in window&&!Ya,Jd=Oe&&(!jc||Ya&&8<Ya&&11>=Ya),$d=" ",ep=!1;function tp(n,s){switch(n){case"keyup":return cA.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ir=!1;function fA(n,s){switch(n){case"compositionend":return np(s);case"keypress":return s.which!==32?null:(ep=!0,$d);case"textInput":return n=s.data,n===$d&&ep?null:n;default:return null}}function hA(n,s){if(Ir)return n==="compositionend"||!jc&&tp(n,s)?(n=qd(),nl=Yc=As=null,Ir=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Jd&&s.locale!=="ko"?null:s.data;default:return null}}var dA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!dA[n.type]:s==="textarea"}function sp(n,s,a,l){Pr?Nr?Nr.push(l):Nr=[l]:Pr=l,s=kl(s,"onChange"),0<s.length&&(a=new rl("onChange","change",null,a,l),n.push({event:a,listeners:s}))}var qa=null,Qa=null;function pA(n){Dg(n,0)}function ol(n){var s=$(n);if(Xn(s))return n}function rp(n,s){if(n==="change")return s}var ap=!1;if(Oe){var Jc;if(Oe){var $c="oninput"in document;if(!$c){var op=document.createElement("div");op.setAttribute("oninput","return;"),$c=typeof op.oninput=="function"}Jc=$c}else Jc=!1;ap=Jc&&(!document.documentMode||9<document.documentMode)}function lp(){qa&&(qa.detachEvent("onpropertychange",cp),Qa=qa=null)}function cp(n){if(n.propertyName==="value"&&ol(Qa)){var s=[];sp(s,Qa,n,kc(n)),Yd(pA,s)}}function mA(n,s,a){n==="focusin"?(lp(),qa=s,Qa=a,qa.attachEvent("onpropertychange",cp)):n==="focusout"&&lp()}function gA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(Qa)}function vA(n,s){if(n==="click")return ol(s)}function xA(n,s){if(n==="input"||n==="change")return ol(s)}function AA(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Zn=typeof Object.is=="function"?Object.is:AA;function Ka(n,s){if(Zn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),l=Object.keys(s);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Lt.call(s,f)||!Zn(n[f],s[f]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fp(n,s){var a=up(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=s&&l>=s)return{node:a,offset:s-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=up(a)}}function hp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?hp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function dp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=_i(n.document);s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=_i(n.document)}return s}function eu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function _A(n,s){var a=dp(s);s=n.focusedElem;var l=n.selectionRange;if(a!==s&&s&&s.ownerDocument&&hp(s.ownerDocument.documentElement,s)){if(l!==null&&eu(s)){if(n=l.start,a=l.end,a===void 0&&(a=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(a,s.value.length);else if(a=(n=s.ownerDocument||document)&&n.defaultView||window,a.getSelection){a=a.getSelection();var f=s.textContent.length,m=Math.min(l.start,f);l=l.end===void 0?m:Math.min(l.end,f),!a.extend&&m>l&&(f=l,l=m,m=f),f=fp(s,m);var E=fp(s,l);f&&E&&(a.rangeCount!==1||a.anchorNode!==f.node||a.anchorOffset!==f.offset||a.focusNode!==E.node||a.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),a.removeAllRanges(),m>l?(a.addRange(n),a.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),a.addRange(n)))}}for(n=[],a=s;a=a.parentNode;)a.nodeType===1&&n.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)a=n[s],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var SA=Oe&&"documentMode"in document&&11>=document.documentMode,Fr=null,tu=null,Za=null,nu=!1;function pp(n,s,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Fr==null||Fr!==_i(l)||(l=Fr,"selectionStart"in l&&eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Za&&Ka(Za,l)||(Za=l,l=kl(tu,"onSelect"),0<l.length&&(s=new rl("onSelect","select",null,s,a),n.push({event:s,listeners:l}),s.target=Fr)))}function $s(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var zr={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionrun:$s("Transition","TransitionRun"),transitionstart:$s("Transition","TransitionStart"),transitioncancel:$s("Transition","TransitionCancel"),transitionend:$s("Transition","TransitionEnd")},iu={},mp={};Oe&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function er(n){if(iu[n])return iu[n];if(!zr[n])return n;var s=zr[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in mp)return iu[n]=s[a];return n}var gp=er("animationend"),vp=er("animationiteration"),xp=er("animationstart"),EA=er("transitionrun"),yA=er("transitionstart"),MA=er("transitioncancel"),Ap=er("transitionend"),_p=new Map,Sp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Si(n,s){_p.set(n,s),Ce(s,[n])}var li=[],Hr=0,su=0;function ll(){for(var n=Hr,s=su=Hr=0;s<n;){var a=li[s];li[s++]=null;var l=li[s];li[s++]=null;var f=li[s];li[s++]=null;var m=li[s];if(li[s++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&Ep(a,f,m)}}function cl(n,s,a,l){li[Hr++]=n,li[Hr++]=s,li[Hr++]=a,li[Hr++]=l,su|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function ru(n,s,a,l){return cl(n,s,a,l),ul(n)}function _s(n,s){return cl(n,null,null,s),ul(n)}function Ep(n,s,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,m=n.return;m!==null;)m.childLanes|=a,l=m.alternate,l!==null&&(l.childLanes|=a),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;f&&s!==null&&n.tag===3&&(m=n.stateNode,f=31-Ke(a),m=m.hiddenUpdates,n=m[f],n===null?m[f]=[s]:n.push(s),s.lane=a|536870912)}function ul(n){if(50<Eo)throw Eo=0,hf=null,Error(r(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Gr={},yp=new WeakMap;function ci(n,s){if(typeof n=="object"&&n!==null){var a=yp.get(n);return a!==void 0?a:(s={value:n,source:s,stack:X(s)},yp.set(n,s),s)}return{value:n,source:s,stack:X(s)}}var Vr=[],kr=0,fl=null,hl=0,ui=[],fi=0,tr=null,Xi=1,Wi="";function nr(n,s){Vr[kr++]=hl,Vr[kr++]=fl,fl=n,hl=s}function Mp(n,s,a){ui[fi++]=Xi,ui[fi++]=Wi,ui[fi++]=tr,tr=n;var l=Xi;n=Wi;var f=32-Ke(l)-1;l&=~(1<<f),a+=1;var m=32-Ke(s)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Xi=1<<32-Ke(s)+f|a<<f|l,Wi=m+n}else Xi=1<<m|a<<f|l,Wi=n}function au(n){n.return!==null&&(nr(n,1),Mp(n,1,0))}function ou(n){for(;n===fl;)fl=Vr[--kr],Vr[kr]=null,hl=Vr[--kr],Vr[kr]=null;for(;n===tr;)tr=ui[--fi],ui[fi]=null,Wi=ui[--fi],ui[fi]=null,Xi=ui[--fi],ui[fi]=null}var Hn=null,yn=null,Ct=!1,Ei=null,Li=!1,lu=Error(r(519));function ir(n){var s=Error(r(418,""));throw $a(ci(s,n)),lu}function Tp(n){var s=n.stateNode,a=n.type,l=n.memoizedProps;switch(s[ln]=n,s[cn]=l,a){case"dialog":yt("cancel",s),yt("close",s);break;case"iframe":case"object":case"embed":yt("load",s);break;case"video":case"audio":for(a=0;a<Mo.length;a++)yt(Mo[a],s);break;case"source":yt("error",s);break;case"img":case"image":case"link":yt("error",s),yt("load",s);break;case"details":yt("toggle",s);break;case"input":yt("invalid",s),zn(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Et(s);break;case"select":yt("invalid",s);break;case"textarea":yt("invalid",s),Or(s,l.value,l.defaultValue,l.children),Et(s)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||l.suppressHydrationWarning===!0||Og(s.textContent,a)?(l.popover!=null&&(yt("beforetoggle",s),yt("toggle",s)),l.onScroll!=null&&yt("scroll",s),l.onScrollEnd!=null&&yt("scrollend",s),l.onClick!=null&&(s.onclick=Xl),s=!0):s=!1,s||ir(n)}function bp(n){for(Hn=n.return;Hn;)switch(Hn.tag){case 3:case 27:Li=!0;return;case 5:case 13:Li=!1;return;default:Hn=Hn.return}}function ja(n){if(n!==Hn)return!1;if(!Ct)return bp(n),Ct=!0,!1;var s=!1,a;if((a=n.tag!==3&&n.tag!==27)&&((a=n.tag===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Rf(n.type,n.memoizedProps)),a=!a),a&&(s=!0),s&&yn&&ir(n),bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(s===0){yn=Mi(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;n=n.nextSibling}yn=null}}else yn=Hn?Mi(n.stateNode.nextSibling):null;return!0}function Ja(){yn=Hn=null,Ct=!1}function $a(n){Ei===null?Ei=[n]:Ei.push(n)}var eo=Error(r(460)),Cp=Error(r(474)),cu={then:function(){}};function wp(n){return n=n.status,n==="fulfilled"||n==="rejected"}function dl(){}function Rp(n,s,a){switch(a=n[a],a===void 0?n.push(s):a!==s&&(s.then(dl,dl),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,n===eo?Error(r(483)):n;default:if(typeof s.status=="string")s.then(dl,dl);else{if(n=Ht,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=s,n.status="pending",n.then(function(l){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=l}},function(l){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,n===eo?Error(r(483)):n}throw to=s,eo}}var to=null;function Dp(){if(to===null)throw Error(r(459));var n=to;return to=null,n}var Xr=null,no=0;function pl(n){var s=no;return no+=1,Xr===null&&(Xr=[]),Rp(Xr,n,s)}function io(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function ml(n,s){throw s.$$typeof===c?Error(r(525)):(n=Object.prototype.toString.call(s),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function Up(n){var s=n._init;return s(n._payload)}function Lp(n){function s(te,q){if(n){var se=te.deletions;se===null?(te.deletions=[q],te.flags|=16):se.push(q)}}function a(te,q){if(!n)return null;for(;q!==null;)s(te,q),q=q.sibling;return null}function l(te){for(var q=new Map;te!==null;)te.key!==null?q.set(te.key,te):q.set(te.index,te),te=te.sibling;return q}function f(te,q){return te=Ls(te,q),te.index=0,te.sibling=null,te}function m(te,q,se){return te.index=se,n?(se=te.alternate,se!==null?(se=se.index,se<q?(te.flags|=33554434,q):se):(te.flags|=33554434,q)):(te.flags|=1048576,q)}function E(te){return n&&te.alternate===null&&(te.flags|=33554434),te}function R(te,q,se,ve){return q===null||q.tag!==6?(q=sf(se,te.mode,ve),q.return=te,q):(q=f(q,se),q.return=te,q)}function I(te,q,se,ve){var He=se.type;return He===d?de(te,q,se.props.children,ve,se.key):q!==null&&(q.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===B&&Up(He)===q.type)?(q=f(q,se.props),io(q,se),q.return=te,q):(q=Bl(se.type,se.key,se.props,null,te.mode,ve),io(q,se),q.return=te,q)}function K(te,q,se,ve){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=rf(se,te.mode,ve),q.return=te,q):(q=f(q,se.children||[]),q.return=te,q)}function de(te,q,se,ve,He){return q===null||q.tag!==7?(q=dr(se,te.mode,ve,He),q.return=te,q):(q=f(q,se),q.return=te,q)}function _e(te,q,se){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=sf(""+q,te.mode,se),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case u:return se=Bl(q.type,q.key,q.props,null,te.mode,se),io(se,q),se.return=te,se;case h:return q=rf(q,te.mode,se),q.return=te,q;case B:var ve=q._init;return q=ve(q._payload),_e(te,q,se)}if(ye(q)||N(q))return q=dr(q,te.mode,se,null),q.return=te,q;if(typeof q.then=="function")return _e(te,pl(q),se);if(q.$$typeof===A)return _e(te,Dl(te,q),se);ml(te,q)}return null}function oe(te,q,se,ve){var He=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return He!==null?null:R(te,q,""+se,ve);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case u:return se.key===He?I(te,q,se,ve):null;case h:return se.key===He?K(te,q,se,ve):null;case B:return He=se._init,se=He(se._payload),oe(te,q,se,ve)}if(ye(se)||N(se))return He!==null?null:de(te,q,se,ve,null);if(typeof se.then=="function")return oe(te,q,pl(se),ve);if(se.$$typeof===A)return oe(te,q,Dl(te,se),ve);ml(te,se)}return null}function he(te,q,se,ve,He){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return te=te.get(se)||null,R(q,te,""+ve,He);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case u:return te=te.get(ve.key===null?se:ve.key)||null,I(q,te,ve,He);case h:return te=te.get(ve.key===null?se:ve.key)||null,K(q,te,ve,He);case B:var dt=ve._init;return ve=dt(ve._payload),he(te,q,se,ve,He)}if(ye(ve)||N(ve))return te=te.get(se)||null,de(q,te,ve,He,null);if(typeof ve.then=="function")return he(te,q,se,pl(ve),He);if(ve.$$typeof===A)return he(te,q,se,Dl(q,ve),He);ml(q,ve)}return null}function ke(te,q,se,ve){for(var He=null,dt=null,Ye=q,$e=q=0,xn=null;Ye!==null&&$e<se.length;$e++){Ye.index>$e?(xn=Ye,Ye=null):xn=Ye.sibling;var wt=oe(te,Ye,se[$e],ve);if(wt===null){Ye===null&&(Ye=xn);break}n&&Ye&&wt.alternate===null&&s(te,Ye),q=m(wt,q,$e),dt===null?He=wt:dt.sibling=wt,dt=wt,Ye=xn}if($e===se.length)return a(te,Ye),Ct&&nr(te,$e),He;if(Ye===null){for(;$e<se.length;$e++)Ye=_e(te,se[$e],ve),Ye!==null&&(q=m(Ye,q,$e),dt===null?He=Ye:dt.sibling=Ye,dt=Ye);return Ct&&nr(te,$e),He}for(Ye=l(Ye);$e<se.length;$e++)xn=he(Ye,te,$e,se[$e],ve),xn!==null&&(n&&xn.alternate!==null&&Ye.delete(xn.key===null?$e:xn.key),q=m(xn,q,$e),dt===null?He=xn:dt.sibling=xn,dt=xn);return n&&Ye.forEach(function(zs){return s(te,zs)}),Ct&&nr(te,$e),He}function rt(te,q,se,ve){if(se==null)throw Error(r(151));for(var He=null,dt=null,Ye=q,$e=q=0,xn=null,wt=se.next();Ye!==null&&!wt.done;$e++,wt=se.next()){Ye.index>$e?(xn=Ye,Ye=null):xn=Ye.sibling;var zs=oe(te,Ye,wt.value,ve);if(zs===null){Ye===null&&(Ye=xn);break}n&&Ye&&zs.alternate===null&&s(te,Ye),q=m(zs,q,$e),dt===null?He=zs:dt.sibling=zs,dt=zs,Ye=xn}if(wt.done)return a(te,Ye),Ct&&nr(te,$e),He;if(Ye===null){for(;!wt.done;$e++,wt=se.next())wt=_e(te,wt.value,ve),wt!==null&&(q=m(wt,q,$e),dt===null?He=wt:dt.sibling=wt,dt=wt);return Ct&&nr(te,$e),He}for(Ye=l(Ye);!wt.done;$e++,wt=se.next())wt=he(Ye,te,$e,wt.value,ve),wt!==null&&(n&&wt.alternate!==null&&Ye.delete(wt.key===null?$e:wt.key),q=m(wt,q,$e),dt===null?He=wt:dt.sibling=wt,dt=wt);return n&&Ye.forEach(function(F_){return s(te,F_)}),Ct&&nr(te,$e),He}function jt(te,q,se,ve){if(typeof se=="object"&&se!==null&&se.type===d&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case u:e:{for(var He=se.key;q!==null;){if(q.key===He){if(He=se.type,He===d){if(q.tag===7){a(te,q.sibling),ve=f(q,se.props.children),ve.return=te,te=ve;break e}}else if(q.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===B&&Up(He)===q.type){a(te,q.sibling),ve=f(q,se.props),io(ve,se),ve.return=te,te=ve;break e}a(te,q);break}else s(te,q);q=q.sibling}se.type===d?(ve=dr(se.props.children,te.mode,ve,se.key),ve.return=te,te=ve):(ve=Bl(se.type,se.key,se.props,null,te.mode,ve),io(ve,se),ve.return=te,te=ve)}return E(te);case h:e:{for(He=se.key;q!==null;){if(q.key===He)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){a(te,q.sibling),ve=f(q,se.children||[]),ve.return=te,te=ve;break e}else{a(te,q);break}else s(te,q);q=q.sibling}ve=rf(se,te.mode,ve),ve.return=te,te=ve}return E(te);case B:return He=se._init,se=He(se._payload),jt(te,q,se,ve)}if(ye(se))return ke(te,q,se,ve);if(N(se)){if(He=N(se),typeof He!="function")throw Error(r(150));return se=He.call(se),rt(te,q,se,ve)}if(typeof se.then=="function")return jt(te,q,pl(se),ve);if(se.$$typeof===A)return jt(te,q,Dl(te,se),ve);ml(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,q!==null&&q.tag===6?(a(te,q.sibling),ve=f(q,se),ve.return=te,te=ve):(a(te,q),ve=sf(se,te.mode,ve),ve.return=te,te=ve),E(te)):a(te,q)}return function(te,q,se,ve){try{no=0;var He=jt(te,q,se,ve);return Xr=null,He}catch(Ye){if(Ye===eo)throw Ye;var dt=mi(29,Ye,null,te.mode);return dt.lanes=ve,dt.return=te,dt}finally{}}}var sr=Lp(!0),Bp=Lp(!1),Wr=be(null),gl=be(0);function Op(n,s){n=ns,De(gl,n),De(Wr,s),ns=n|s.baseLanes}function uu(){De(gl,ns),De(Wr,Wr.current)}function fu(){ns=gl.current,je(Wr),je(gl)}var hi=be(null),Bi=null;function Ss(n){var s=n.alternate;De(fn,fn.current&1),De(hi,n),Bi===null&&(s===null||Wr.current!==null||s.memoizedState!==null)&&(Bi=n)}function Pp(n){if(n.tag===22){if(De(fn,fn.current),De(hi,n),Bi===null){var s=n.alternate;s!==null&&s.memoizedState!==null&&(Bi=n)}}else Es()}function Es(){De(fn,fn.current),De(hi,hi.current)}function Yi(n){je(hi),Bi===n&&(Bi=null),je(fn)}var fn=be(0);function vl(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var TA=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){s.aborted=!0,n.forEach(function(a){return a()})}},bA=i.unstable_scheduleCallback,CA=i.unstable_NormalPriority,hn={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new TA,data:new Map,refCount:0}}function so(n){n.refCount--,n.refCount===0&&bA(CA,function(){n.controller.abort()})}var ro=null,du=0,Yr=0,qr=null;function wA(n,s){if(ro===null){var a=ro=[];du=0,Yr=_f(),qr={status:"pending",value:void 0,then:function(l){a.push(l)}}}return du++,s.then(Np,Np),s}function Np(){if(--du===0&&ro!==null){qr!==null&&(qr.status="fulfilled");var n=ro;ro=null,Yr=0,qr=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function RA(n,s){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=s;for(var f=0;f<a.length;f++)(0,a[f])(s)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var Ip=w.S;w.S=function(n,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&wA(n,s),Ip!==null&&Ip(n,s)};var rr=be(null);function pu(){var n=rr.current;return n!==null?n:Ht.pooledCache}function xl(n,s){s===null?De(rr,rr.current):De(rr,s.pool)}function Fp(){var n=pu();return n===null?null:{parent:hn._currentValue,pool:n}}var ys=0,ut=null,Pt=null,en=null,Al=!1,Qr=!1,ar=!1,_l=0,ao=0,Kr=null,DA=0;function Jt(){throw Error(r(321))}function mu(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Zn(n[a],s[a]))return!1;return!0}function gu(n,s,a,l,f,m){return ys=m,ut=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,w.H=n===null||n.memoizedState===null?or:Ms,ar=!1,m=a(l,f),ar=!1,Qr&&(m=Hp(s,a,l,f)),zp(n),m}function zp(n){w.H=Oi;var s=Pt!==null&&Pt.next!==null;if(ys=0,en=Pt=ut=null,Al=!1,ao=0,Kr=null,s)throw Error(r(300));n===null||gn||(n=n.dependencies,n!==null&&Rl(n)&&(gn=!0))}function Hp(n,s,a,l){ut=n;var f=0;do{if(Qr&&(Kr=null),ao=0,Qr=!1,25<=f)throw Error(r(301));if(f+=1,en=Pt=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}w.H=lr,m=s(a,l)}while(Qr);return m}function UA(){var n=w.H,s=n.useState()[0];return s=typeof s.then=="function"?oo(s):s,n=n.useState()[0],(Pt!==null?Pt.memoizedState:null)!==n&&(ut.flags|=1024),s}function vu(){var n=_l!==0;return _l=0,n}function xu(n,s,a){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~a}function Au(n){if(Al){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Al=!1}ys=0,en=Pt=ut=null,Qr=!1,ao=_l=0,Kr=null}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ut.memoizedState=en=n:en=en.next=n,en}function tn(){if(Pt===null){var n=ut.alternate;n=n!==null?n.memoizedState:null}else n=Pt.next;var s=en===null?ut.memoizedState:en.next;if(s!==null)en=s,Pt=n;else{if(n===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Pt=n,n={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},en===null?ut.memoizedState=en=n:en=en.next=n}return en}var Sl;Sl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function oo(n){var s=ao;return ao+=1,Kr===null&&(Kr=[]),n=Rp(Kr,n,s),s=ut,(en===null?s.memoizedState:en.next)===null&&(s=s.alternate,w.H=s===null||s.memoizedState===null?or:Ms),n}function El(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return oo(n);if(n.$$typeof===A)return Rn(n)}throw Error(r(438,String(n)))}function _u(n){var s=null,a=ut.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=Sl(),ut.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(n),l=0;l<n;l++)a[l]=C;return s.index++,a}function qi(n,s){return typeof s=="function"?s(n):s}function yl(n){var s=tn();return Su(s,Pt,n)}function Su(n,s,a){var l=n.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var f=n.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}s.baseQueue=f=m,l.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{s=f.next;var R=E=null,I=null,K=s,de=!1;do{var _e=K.lane&-536870913;if(_e!==K.lane?(Mt&_e)===_e:(ys&_e)===_e){var oe=K.revertLane;if(oe===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),_e===Yr&&(de=!0);else if((ys&oe)===oe){K=K.next,oe===Yr&&(de=!0);continue}else _e={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(R=I=_e,E=m):I=I.next=_e,ut.lanes|=oe,Bs|=oe;_e=K.action,ar&&a(m,_e),m=K.hasEagerState?K.eagerState:a(m,_e)}else oe={lane:_e,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(R=I=oe,E=m):I=I.next=oe,ut.lanes|=_e,Bs|=_e;K=K.next}while(K!==null&&K!==s);if(I===null?E=m:I.next=R,!Zn(m,n.memoizedState)&&(gn=!0,de&&(a=qr,a!==null)))throw a;n.memoizedState=m,n.baseState=E,n.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Eu(n){var s=tn(),a=s.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,m=s.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do m=n(m,E.action),E=E.next;while(E!==f);Zn(m,s.memoizedState)||(gn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,l]}function Gp(n,s,a){var l=ut,f=tn(),m=Ct;if(m){if(a===void 0)throw Error(r(407));a=a()}else a=s();var E=!Zn((Pt||f).memoizedState,a);if(E&&(f.memoizedState=a,gn=!0),f=f.queue,Tu(Xp.bind(null,l,f,n),[n]),f.getSnapshot!==s||E||en!==null&&en.memoizedState.tag&1){if(l.flags|=2048,Zr(9,kp.bind(null,l,f,a,s),{destroy:void 0},null),Ht===null)throw Error(r(349));m||ys&60||Vp(l,s,a)}return a}function Vp(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=ut.updateQueue,s===null?(s=Sl(),ut.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function kp(n,s,a,l){s.value=a,s.getSnapshot=l,Wp(s)&&Yp(n)}function Xp(n,s,a){return a(function(){Wp(s)&&Yp(n)})}function Wp(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Zn(n,a)}catch{return!0}}function Yp(n){var s=_s(n,2);s!==null&&Gn(s,n,2)}function yu(n){var s=qn();if(typeof n=="function"){var a=n;if(n=a(),ar){at(!0);try{a()}finally{at(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:n},s}function qp(n,s,a,l){return n.baseState=a,Su(n,Pt,typeof l=="function"?l:qi)}function LA(n,s,a,l,f){if(bl(n))throw Error(r(485));if(n=s.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};w.T!==null?a(!0):m.isTransition=!1,l(m),a=s.pending,a===null?(m.next=s.pending=m,Qp(s,m)):(m.next=a.next,s.pending=a.next=m)}}function Qp(n,s){var a=s.action,l=s.payload,f=n.state;if(s.isTransition){var m=w.T,E={};w.T=E;try{var R=a(f,l),I=w.S;I!==null&&I(E,R),Kp(n,s,R)}catch(K){Mu(n,s,K)}finally{w.T=m}}else try{m=a(f,l),Kp(n,s,m)}catch(K){Mu(n,s,K)}}function Kp(n,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Zp(n,s,l)},function(l){return Mu(n,s,l)}):Zp(n,s,a)}function Zp(n,s,a){s.status="fulfilled",s.value=a,jp(s),n.state=a,s=n.pending,s!==null&&(a=s.next,a===s?n.pending=null:(a=a.next,s.next=a,Qp(n,a)))}function Mu(n,s,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=a,jp(s),s=s.next;while(s!==l)}n.action=null}function jp(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function Jp(n,s){return s}function $p(n,s){if(Ct){var a=Ht.formState;if(a!==null){e:{var l=ut;if(Ct){if(yn){t:{for(var f=yn,m=Li;f.nodeType!==8;){if(!m){f=null;break t}if(f=Mi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){yn=Mi(f.nextSibling),l=f.data==="F!";break e}}ir(l)}l=!1}l&&(s=a[0])}}return a=qn(),a.memoizedState=a.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:s},a.queue=l,a=vm.bind(null,ut,l),l.dispatch=a,l=yu(!1),m=Du.bind(null,ut,!1,l.queue),l=qn(),f={state:s,dispatch:null,action:n,pending:null},l.queue=f,a=LA.bind(null,ut,f,m,a),f.dispatch=a,l.memoizedState=n,[s,a,!1]}function em(n){var s=tn();return tm(s,Pt,n)}function tm(n,s,a){s=Su(n,s,Jp)[0],n=yl(qi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?oo(s):s;var l=tn(),f=l.queue,m=f.dispatch;return a!==l.memoizedState&&(ut.flags|=2048,Zr(9,BA.bind(null,f,a),{destroy:void 0},null)),[s,m,n]}function BA(n,s){n.action=s}function nm(n){var s=tn(),a=Pt;if(a!==null)return tm(s,a,n);tn(),s=s.memoizedState,a=tn();var l=a.queue.dispatch;return a.memoizedState=n,[s,l,!1]}function Zr(n,s,a,l){return n={tag:n,create:s,inst:a,deps:l,next:null},s=ut.updateQueue,s===null&&(s=Sl(),ut.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,s.lastEffect=n),n}function im(){return tn().memoizedState}function Ml(n,s,a,l){var f=qn();ut.flags|=n,f.memoizedState=Zr(1|s,a,{destroy:void 0},l===void 0?null:l)}function Tl(n,s,a,l){var f=tn();l=l===void 0?null:l;var m=f.memoizedState.inst;Pt!==null&&l!==null&&mu(l,Pt.memoizedState.deps)?f.memoizedState=Zr(s,a,m,l):(ut.flags|=n,f.memoizedState=Zr(1|s,a,m,l))}function sm(n,s){Ml(8390656,8,n,s)}function Tu(n,s){Tl(2048,8,n,s)}function rm(n,s){return Tl(4,2,n,s)}function am(n,s){return Tl(4,4,n,s)}function om(n,s){if(typeof s=="function"){n=n();var a=s(n);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function lm(n,s,a){a=a!=null?a.concat([n]):null,Tl(4,4,om.bind(null,s,n),a)}function bu(){}function cm(n,s){var a=tn();s=s===void 0?null:s;var l=a.memoizedState;return s!==null&&mu(s,l[1])?l[0]:(a.memoizedState=[n,s],n)}function um(n,s){var a=tn();s=s===void 0?null:s;var l=a.memoizedState;if(s!==null&&mu(s,l[1]))return l[0];if(l=n(),ar){at(!0);try{n()}finally{at(!1)}}return a.memoizedState=[l,s],l}function Cu(n,s,a){return a===void 0||ys&1073741824?n.memoizedState=s:(n.memoizedState=a,n=hg(),ut.lanes|=n,Bs|=n,a)}function fm(n,s,a,l){return Zn(a,s)?a:Wr.current!==null?(n=Cu(n,a,l),Zn(n,s)||(gn=!0),n):ys&42?(n=hg(),ut.lanes|=n,Bs|=n,s):(gn=!0,n.memoizedState=a)}function hm(n,s,a,l,f){var m=Z.p;Z.p=m!==0&&8>m?m:8;var E=w.T,R={};w.T=R,Du(n,!1,s,a);try{var I=f(),K=w.S;if(K!==null&&K(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=RA(I,l);lo(n,s,de,ei(n))}else lo(n,s,l,ei(n))}catch(_e){lo(n,s,{then:function(){},status:"rejected",reason:_e},ei())}finally{Z.p=m,w.T=E}}function OA(){}function wu(n,s,a,l){if(n.tag!==5)throw Error(r(476));var f=dm(n).queue;hm(n,f,s,ce,a===null?OA:function(){return pm(n),a(l)})}function dm(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:ce},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function pm(n){var s=dm(n).next.queue;lo(n,s,{},ei())}function Ru(){return Rn(Ro)}function mm(){return tn().memoizedState}function gm(){return tn().memoizedState}function PA(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var a=ei();n=Cs(a);var l=ws(s,n,a);l!==null&&(Gn(l,s,a),fo(l,s,a)),s={cache:hu()},n.payload=s;return}s=s.return}}function NA(n,s,a){var l=ei();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},bl(n)?xm(s,a):(a=ru(n,s,a,l),a!==null&&(Gn(a,n,l),Am(a,s,l)))}function vm(n,s,a){var l=ei();lo(n,s,a,l)}function lo(n,s,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(n))xm(s,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var E=s.lastRenderedState,R=m(E,a);if(f.hasEagerState=!0,f.eagerState=R,Zn(R,E))return cl(n,s,f,0),Ht===null&&ll(),!1}catch{}finally{}if(a=ru(n,s,f,l),a!==null)return Gn(a,n,l),Am(a,s,l),!0}return!1}function Du(n,s,a,l){if(l={lane:2,revertLane:_f(),action:l,hasEagerState:!1,eagerState:null,next:null},bl(n)){if(s)throw Error(r(479))}else s=ru(n,a,l,2),s!==null&&Gn(s,n,2)}function bl(n){var s=n.alternate;return n===ut||s!==null&&s===ut}function xm(n,s){Qr=Al=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Am(n,s,a){if(a&4194176){var l=s.lanes;l&=n.pendingLanes,a|=l,s.lanes=a,Ui(n,a)}}var Oi={readContext:Rn,use:El,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt};Oi.useCacheRefresh=Jt,Oi.useMemoCache=Jt,Oi.useHostTransitionStatus=Jt,Oi.useFormState=Jt,Oi.useActionState=Jt,Oi.useOptimistic=Jt;var or={readContext:Rn,use:El,useCallback:function(n,s){return qn().memoizedState=[n,s===void 0?null:s],n},useContext:Rn,useEffect:sm,useImperativeHandle:function(n,s,a){a=a!=null?a.concat([n]):null,Ml(4194308,4,om.bind(null,s,n),a)},useLayoutEffect:function(n,s){return Ml(4194308,4,n,s)},useInsertionEffect:function(n,s){Ml(4,2,n,s)},useMemo:function(n,s){var a=qn();s=s===void 0?null:s;var l=n();if(ar){at(!0);try{n()}finally{at(!1)}}return a.memoizedState=[l,s],l},useReducer:function(n,s,a){var l=qn();if(a!==void 0){var f=a(s);if(ar){at(!0);try{a(s)}finally{at(!1)}}}else f=s;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=NA.bind(null,ut,n),[l.memoizedState,n]},useRef:function(n){var s=qn();return n={current:n},s.memoizedState=n},useState:function(n){n=yu(n);var s=n.queue,a=vm.bind(null,ut,s);return s.dispatch=a,[n.memoizedState,a]},useDebugValue:bu,useDeferredValue:function(n,s){var a=qn();return Cu(a,n,s)},useTransition:function(){var n=yu(!1);return n=hm.bind(null,ut,n.queue,!0,!1),qn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,a){var l=ut,f=qn();if(Ct){if(a===void 0)throw Error(r(407));a=a()}else{if(a=s(),Ht===null)throw Error(r(349));Mt&60||Vp(l,s,a)}f.memoizedState=a;var m={value:a,getSnapshot:s};return f.queue=m,sm(Xp.bind(null,l,m,n),[n]),l.flags|=2048,Zr(9,kp.bind(null,l,m,a,s),{destroy:void 0},null),a},useId:function(){var n=qn(),s=Ht.identifierPrefix;if(Ct){var a=Wi,l=Xi;a=(l&~(1<<32-Ke(l)-1)).toString(32)+a,s=":"+s+"R"+a,a=_l++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=DA++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},useCacheRefresh:function(){return qn().memoizedState=PA.bind(null,ut)}};or.useMemoCache=_u,or.useHostTransitionStatus=Ru,or.useFormState=$p,or.useActionState=$p,or.useOptimistic=function(n){var s=qn();s.memoizedState=s.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=Du.bind(null,ut,!0,a),a.dispatch=s,[n,s]};var Ms={readContext:Rn,use:El,useCallback:cm,useContext:Rn,useEffect:Tu,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:am,useMemo:um,useReducer:yl,useRef:im,useState:function(){return yl(qi)},useDebugValue:bu,useDeferredValue:function(n,s){var a=tn();return fm(a,Pt.memoizedState,n,s)},useTransition:function(){var n=yl(qi)[0],s=tn().memoizedState;return[typeof n=="boolean"?n:oo(n),s]},useSyncExternalStore:Gp,useId:mm};Ms.useCacheRefresh=gm,Ms.useMemoCache=_u,Ms.useHostTransitionStatus=Ru,Ms.useFormState=em,Ms.useActionState=em,Ms.useOptimistic=function(n,s){var a=tn();return qp(a,Pt,n,s)};var lr={readContext:Rn,use:El,useCallback:cm,useContext:Rn,useEffect:Tu,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:am,useMemo:um,useReducer:Eu,useRef:im,useState:function(){return Eu(qi)},useDebugValue:bu,useDeferredValue:function(n,s){var a=tn();return Pt===null?Cu(a,n,s):fm(a,Pt.memoizedState,n,s)},useTransition:function(){var n=Eu(qi)[0],s=tn().memoizedState;return[typeof n=="boolean"?n:oo(n),s]},useSyncExternalStore:Gp,useId:mm};lr.useCacheRefresh=gm,lr.useMemoCache=_u,lr.useHostTransitionStatus=Ru,lr.useFormState=nm,lr.useActionState=nm,lr.useOptimistic=function(n,s){var a=tn();return Pt!==null?qp(a,Pt,n,s):(a.baseState=n,[n,a.queue.dispatch])};function Uu(n,s,a,l){s=n.memoizedState,a=a(l,s),a=a==null?s:T({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Lu={isMounted:function(n){return(n=n._reactInternals)?k(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var l=ei(),f=Cs(l);f.payload=s,a!=null&&(f.callback=a),s=ws(n,f,l),s!==null&&(Gn(s,n,l),fo(s,n,l))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var l=ei(),f=Cs(l);f.tag=1,f.payload=s,a!=null&&(f.callback=a),s=ws(n,f,l),s!==null&&(Gn(s,n,l),fo(s,n,l))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=ei(),l=Cs(a);l.tag=2,s!=null&&(l.callback=s),s=ws(n,l,a),s!==null&&(Gn(s,n,a),fo(s,n,a))}};function _m(n,s,a,l,f,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,E):s.prototype&&s.prototype.isPureReactComponent?!Ka(a,l)||!Ka(f,m):!0}function Sm(n,s,a,l){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,l),s.state!==n&&Lu.enqueueReplaceState(s,s.state,null)}function cr(n,s){var a=s;if("ref"in s){a={};for(var l in s)l!=="ref"&&(a[l]=s[l])}if(n=n.defaultProps){a===s&&(a=T({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var Cl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Em(n){Cl(n)}function ym(n){console.error(n)}function Mm(n){Cl(n)}function wl(n,s){try{var a=n.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function Tm(n,s,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Bu(n,s,a){return a=Cs(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(n,s)},a}function bm(n){return n=Cs(n),n.tag=3,n}function Cm(n,s,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;n.payload=function(){return f(m)},n.callback=function(){Tm(s,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){Tm(s,a,l),typeof f!="function"&&(Os===null?Os=new Set([this]):Os.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function IA(n,s,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=a.alternate,s!==null&&uo(s,a,f,!0),a=hi.current,a!==null){switch(a.tag){case 13:return Bi===null?mf():a.alternate===null&&Zt===0&&(Zt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===cu?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([l]):s.add(l),vf(n,l,f)),!1;case 22:return a.flags|=65536,l===cu?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([l]):a.add(l)),vf(n,l,f)),!1}throw Error(r(435,a.tag))}return vf(n,l,f),mf(),!1}if(Ct)return s=hi.current,s!==null?(!(s.flags&65536)&&(s.flags|=256),s.flags|=65536,s.lanes=f,l!==lu&&(n=Error(r(422),{cause:l}),$a(ci(n,a)))):(l!==lu&&(s=Error(r(423),{cause:l}),$a(ci(s,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=ci(l,a),f=Bu(n.stateNode,l,f),Qu(n,f),Zt!==4&&(Zt=2)),!1;var m=Error(r(520),{cause:l});if(m=ci(m,a),_o===null?_o=[m]:_o.push(m),Zt!==4&&(Zt=2),s===null)return!0;l=ci(l,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Bu(a.stateNode,l,n),Qu(a,n),!1;case 1:if(s=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Os===null||!Os.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=bm(f),Cm(f,n,a,l),Qu(a,f),!1}a=a.return}while(a!==null);return!1}var wm=Error(r(461)),gn=!1;function Mn(n,s,a,l){s.child=n===null?Bp(s,null,a,l):sr(s,n.child,a,l)}function Rm(n,s,a,l,f){a=a.render;var m=s.ref;if("ref"in l){var E={};for(var R in l)R!=="ref"&&(E[R]=l[R])}else E=l;return fr(s),l=gu(n,s,a,E,m,f),R=vu(),n!==null&&!gn?(xu(n,s,f),Qi(n,s,f)):(Ct&&R&&au(s),s.flags|=1,Mn(n,s,l,f),s.child)}function Dm(n,s,a,l,f){if(n===null){var m=a.type;return typeof m=="function"&&!nf(m)&&m.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=m,Um(n,s,m,l,f)):(n=Bl(a.type,null,l,s,s.mode,f),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,!Vu(n,f)){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ka,a(E,l)&&n.ref===s.ref)return Qi(n,s,f)}return s.flags|=1,n=Ls(m,l),n.ref=s.ref,n.return=s,s.child=n}function Um(n,s,a,l,f){if(n!==null){var m=n.memoizedProps;if(Ka(m,l)&&n.ref===s.ref)if(gn=!1,s.pendingProps=l=m,Vu(n,f))n.flags&131072&&(gn=!0);else return s.lanes=n.lanes,Qi(n,s,f)}return Ou(n,s,a,l,f)}function Lm(n,s,a){var l=s.pendingProps,f=l.children,m=(s.stateNode._pendingVisibility&2)!==0,E=n!==null?n.memoizedState:null;if(co(n,s),l.mode==="hidden"||m){if(s.flags&128){if(l=E!==null?E.baseLanes|a:a,n!==null){for(f=s.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~l}else s.childLanes=0,s.child=null;return Bm(n,s,l,a)}if(a&536870912)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&xl(s,E!==null?E.cachePool:null),E!==null?Op(s,E):uu(),Pp(s);else return s.lanes=s.childLanes=536870912,Bm(n,s,E!==null?E.baseLanes|a:a,a)}else E!==null?(xl(s,E.cachePool),Op(s,E),Es(),s.memoizedState=null):(n!==null&&xl(s,null),uu(),Es());return Mn(n,s,f,a),s.child}function Bm(n,s,a,l){var f=pu();return f=f===null?null:{parent:hn._currentValue,pool:f},s.memoizedState={baseLanes:a,cachePool:f},n!==null&&xl(s,null),uu(),Pp(s),n!==null&&uo(n,s,l,!0),null}function co(n,s){var a=s.ref;if(a===null)n!==null&&n.ref!==null&&(s.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(n===null||n.ref!==a)&&(s.flags|=2097664)}}function Ou(n,s,a,l,f){return fr(s),a=gu(n,s,a,l,void 0,f),l=vu(),n!==null&&!gn?(xu(n,s,f),Qi(n,s,f)):(Ct&&l&&au(s),s.flags|=1,Mn(n,s,a,f),s.child)}function Om(n,s,a,l,f,m){return fr(s),s.updateQueue=null,a=Hp(s,l,a,f),zp(n),l=vu(),n!==null&&!gn?(xu(n,s,m),Qi(n,s,m)):(Ct&&l&&au(s),s.flags|=1,Mn(n,s,a,m),s.child)}function Pm(n,s,a,l,f){if(fr(s),s.stateNode===null){var m=Gr,E=a.contextType;typeof E=="object"&&E!==null&&(m=Rn(E)),m=new a(l,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Lu,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=l,m.state=s.memoizedState,m.refs={},Yu(s),E=a.contextType,m.context=typeof E=="object"&&E!==null?Rn(E):Gr,m.state=s.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(Uu(s,a,E,l),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Lu.enqueueReplaceState(m,m.state,null),po(s,l,m,f),ho(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(n===null){m=s.stateNode;var R=s.memoizedProps,I=cr(a,R);m.props=I;var K=m.context,de=a.contextType;E=Gr,typeof de=="object"&&de!==null&&(E=Rn(de));var _e=a.getDerivedStateFromProps;de=typeof _e=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=s.pendingProps!==R,de||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||K!==E)&&Sm(s,m,l,E),bs=!1;var oe=s.memoizedState;m.state=oe,po(s,l,m,f),ho(),K=s.memoizedState,R||oe!==K||bs?(typeof _e=="function"&&(Uu(s,a,_e,l),K=s.memoizedState),(I=bs||_m(s,a,I,l,oe,K,E))?(de||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=K),m.props=l,m.state=K,m.context=E,l=I):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{m=s.stateNode,qu(n,s),E=s.memoizedProps,de=cr(a,E),m.props=de,_e=s.pendingProps,oe=m.context,K=a.contextType,I=Gr,typeof K=="object"&&K!==null&&(I=Rn(K)),R=a.getDerivedStateFromProps,(K=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==_e||oe!==I)&&Sm(s,m,l,I),bs=!1,oe=s.memoizedState,m.state=oe,po(s,l,m,f),ho();var he=s.memoizedState;E!==_e||oe!==he||bs||n!==null&&n.dependencies!==null&&Rl(n.dependencies)?(typeof R=="function"&&(Uu(s,a,R,l),he=s.memoizedState),(de=bs||_m(s,a,de,l,oe,he,I)||n!==null&&n.dependencies!==null&&Rl(n.dependencies))?(K||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,he,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,he,I)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&oe===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&oe===n.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=he),m.props=l,m.state=he,m.context=I,l=de):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&oe===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&oe===n.memoizedState||(s.flags|=1024),l=!1)}return m=l,co(n,s),l=(s.flags&128)!==0,m||l?(m=s.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,n!==null&&l?(s.child=sr(s,n.child,null,f),s.child=sr(s,null,a,f)):Mn(n,s,a,f),s.memoizedState=m.state,n=s.child):n=Qi(n,s,f),n}function Nm(n,s,a,l){return Ja(),s.flags|=256,Mn(n,s,a,l),s.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Nu(n){return{baseLanes:n,cachePool:Fp()}}function Iu(n,s,a){return n=n!==null?n.childLanes&~a:0,s&&(n|=gi),n}function Im(n,s,a){var l=s.pendingProps,f=!1,m=(s.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(fn.current&2)!==0),E&&(f=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,n===null){if(Ct){if(f?Ss(s):Es(),Ct){var R=yn,I;if(I=R){e:{for(I=R,R=Li;I.nodeType!==8;){if(!R){R=null;break e}if(I=Mi(I.nextSibling),I===null){R=null;break e}}R=I}R!==null?(s.memoizedState={dehydrated:R,treeContext:tr!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912},I=mi(18,null,null,0),I.stateNode=R,I.return=s,s.child=I,Hn=s,yn=null,I=!0):I=!1}I||ir(s)}if(R=s.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?s.lanes=16:s.lanes=536870912,null;Yi(s)}return R=l.children,l=l.fallback,f?(Es(),f=s.mode,R=zu({mode:"hidden",children:R},f),l=dr(l,f,a,null),R.return=s,l.return=s,R.sibling=l,s.child=R,f=s.child,f.memoizedState=Nu(a),f.childLanes=Iu(n,E,a),s.memoizedState=Pu,l):(Ss(s),Fu(s,R))}if(I=n.memoizedState,I!==null&&(R=I.dehydrated,R!==null)){if(m)s.flags&256?(Ss(s),s.flags&=-257,s=Hu(n,s,a)):s.memoizedState!==null?(Es(),s.child=n.child,s.flags|=128,s=null):(Es(),f=l.fallback,R=s.mode,l=zu({mode:"visible",children:l.children},R),f=dr(f,R,a,null),f.flags|=2,l.return=s,f.return=s,l.sibling=f,s.child=l,sr(s,n.child,null,a),l=s.child,l.memoizedState=Nu(a),l.childLanes=Iu(n,E,a),s.memoizedState=Pu,s=f);else if(Ss(s),R.data==="$!"){if(E=R.nextSibling&&R.nextSibling.dataset,E)var K=E.dgst;E=K,l=Error(r(419)),l.stack="",l.digest=E,$a({value:l,source:null,stack:null}),s=Hu(n,s,a)}else if(gn||uo(n,s,a,!1),E=(a&n.childLanes)!==0,gn||E){if(E=Ht,E!==null){if(l=a&-a,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(E.suspendedLanes|a)?0:l,l!==0&&l!==I.retryLane)throw I.retryLane=l,_s(n,l),Gn(E,n,l),wm}R.data==="$?"||mf(),s=Hu(n,s,a)}else R.data==="$?"?(s.flags|=128,s.child=n.child,s=JA.bind(null,n),R._reactRetry=s,s=null):(n=I.treeContext,yn=Mi(R.nextSibling),Hn=s,Ct=!0,Ei=null,Li=!1,n!==null&&(ui[fi++]=Xi,ui[fi++]=Wi,ui[fi++]=tr,Xi=n.id,Wi=n.overflow,tr=s),s=Fu(s,l.children),s.flags|=4096);return s}return f?(Es(),f=l.fallback,R=s.mode,I=n.child,K=I.sibling,l=Ls(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&31457280,K!==null?f=Ls(K,f):(f=dr(f,R,a,null),f.flags|=2),f.return=s,l.return=s,l.sibling=f,s.child=l,l=f,f=s.child,R=n.child.memoizedState,R===null?R=Nu(a):(I=R.cachePool,I!==null?(K=hn._currentValue,I=I.parent!==K?{parent:K,pool:K}:I):I=Fp(),R={baseLanes:R.baseLanes|a,cachePool:I}),f.memoizedState=R,f.childLanes=Iu(n,E,a),s.memoizedState=Pu,l):(Ss(s),a=n.child,n=a.sibling,a=Ls(a,{mode:"visible",children:l.children}),a.return=s,a.sibling=null,n!==null&&(E=s.deletions,E===null?(s.deletions=[n],s.flags|=16):E.push(n)),s.child=a,s.memoizedState=null,a)}function Fu(n,s){return s=zu({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function zu(n,s){return cg(n,s,0,null)}function Hu(n,s,a){return sr(s,n.child,null,a),n=Fu(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Fm(n,s,a){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s),Xu(n.return,s,a)}function Gu(n,s,a,l,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function zm(n,s,a){var l=s.pendingProps,f=l.revealOrder,m=l.tail;if(Mn(n,s,l.children,a),l=fn.current,l&2)l=l&1|2,s.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fm(n,a,s);else if(n.tag===19)Fm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(De(fn,l),f){case"forwards":for(a=s.child,f=null;a!==null;)n=a.alternate,n!==null&&vl(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Gu(s,!1,f,a,m);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(n=f.alternate,n!==null&&vl(n)===null){s.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Gu(s,!0,a,null,m);break;case"together":Gu(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Qi(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),Bs|=s.lanes,!(a&s.childLanes))if(n!==null){if(uo(n,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(r(153));if(s.child!==null){for(n=s.child,a=Ls(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=Ls(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function Vu(n,s){return n.lanes&s?!0:(n=n.dependencies,!!(n!==null&&Rl(n)))}function FA(n,s,a){switch(s.tag){case 3:Xt(s,s.stateNode.containerInfo),Ts(s,hn,n.memoizedState.cache),Ja();break;case 27:case 5:ht(s);break;case 4:Xt(s,s.stateNode.containerInfo);break;case 10:Ts(s,s.type,s.memoizedProps.value);break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(Ss(s),s.flags|=128,null):a&s.child.childLanes?Im(n,s,a):(Ss(s),n=Qi(n,s,a),n!==null?n.sibling:null);Ss(s);break;case 19:var f=(n.flags&128)!==0;if(l=(a&s.childLanes)!==0,l||(uo(n,s,a,!1),l=(a&s.childLanes)!==0),f){if(l)return zm(n,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),De(fn,fn.current),l)break;return null;case 22:case 23:return s.lanes=0,Lm(n,s,a);case 24:Ts(s,hn,n.memoizedState.cache)}return Qi(n,s,a)}function Hm(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps)gn=!0;else{if(!Vu(n,a)&&!(s.flags&128))return gn=!1,FA(n,s,a);gn=!!(n.flags&131072)}else gn=!1,Ct&&s.flags&1048576&&Mp(s,hl,s.index);switch(s.lanes=0,s.tag){case 16:e:{n=s.pendingProps;var l=s.elementType,f=l._init;if(l=f(l._payload),s.type=l,typeof l=="function")nf(l)?(n=cr(l,n),s.tag=1,s=Pm(null,s,l,n,a)):(s.tag=0,s=Ou(null,s,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===y){s.tag=11,s=Rm(null,s,l,n,a);break e}else if(f===_){s.tag=14,s=Dm(null,s,l,n,a);break e}}throw s=Y(l)||l,Error(r(306,s,""))}}return s;case 0:return Ou(n,s,s.type,s.pendingProps,a);case 1:return l=s.type,f=cr(l,s.pendingProps),Pm(n,s,l,f,a);case 3:e:{if(Xt(s,s.stateNode.containerInfo),n===null)throw Error(r(387));var m=s.pendingProps;f=s.memoizedState,l=f.element,qu(n,s),po(s,m,null,a);var E=s.memoizedState;if(m=E.cache,Ts(s,hn,m),m!==f.cache&&Wu(s,[hn],a,!0),ho(),m=E.element,f.isDehydrated)if(f={element:m,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=Nm(n,s,m,a);break e}else if(m!==l){l=ci(Error(r(424)),s),$a(l),s=Nm(n,s,m,a);break e}else for(yn=Mi(s.stateNode.containerInfo.firstChild),Hn=s,Ct=!0,Ei=null,Li=!0,a=Bp(s,null,m,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ja(),m===l){s=Qi(n,s,a);break e}Mn(n,s,m,a)}s=s.child}return s;case 26:return co(n,s),n===null?(a=kg(s.type,null,s.pendingProps,null))?s.memoizedState=a:Ct||(a=s.type,n=s.pendingProps,l=Wl(it.current).createElement(a),l[ln]=s,l[cn]=n,Tn(l,a,n),ie(l),s.stateNode=l):s.memoizedState=kg(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return ht(s),n===null&&Ct&&(l=s.stateNode=Hg(s.type,s.pendingProps,it.current),Hn=s,Li=!0,yn=Mi(l.firstChild)),l=s.pendingProps.children,n!==null||Ct?Mn(n,s,l,a):s.child=sr(s,null,l,a),co(n,s),s.child;case 5:return n===null&&Ct&&((f=l=yn)&&(l=p_(l,s.type,s.pendingProps,Li),l!==null?(s.stateNode=l,Hn=s,yn=Mi(l.firstChild),Li=!1,f=!0):f=!1),f||ir(s)),ht(s),f=s.type,m=s.pendingProps,E=n!==null?n.memoizedProps:null,l=m.children,Rf(f,m)?l=null:E!==null&&Rf(f,E)&&(s.flags|=32),s.memoizedState!==null&&(f=gu(n,s,UA,null,null,a),Ro._currentValue=f),co(n,s),Mn(n,s,l,a),s.child;case 6:return n===null&&Ct&&((n=a=yn)&&(a=m_(a,s.pendingProps,Li),a!==null?(s.stateNode=a,Hn=s,yn=null,n=!0):n=!1),n||ir(s)),null;case 13:return Im(n,s,a);case 4:return Xt(s,s.stateNode.containerInfo),l=s.pendingProps,n===null?s.child=sr(s,null,l,a):Mn(n,s,l,a),s.child;case 11:return Rm(n,s,s.type,s.pendingProps,a);case 7:return Mn(n,s,s.pendingProps,a),s.child;case 8:return Mn(n,s,s.pendingProps.children,a),s.child;case 12:return Mn(n,s,s.pendingProps.children,a),s.child;case 10:return l=s.pendingProps,Ts(s,s.type,l.value),Mn(n,s,l.children,a),s.child;case 9:return f=s.type._context,l=s.pendingProps.children,fr(s),f=Rn(f),l=l(f),s.flags|=1,Mn(n,s,l,a),s.child;case 14:return Dm(n,s,s.type,s.pendingProps,a);case 15:return Um(n,s,s.type,s.pendingProps,a);case 19:return zm(n,s,a);case 22:return Lm(n,s,a);case 24:return fr(s),l=Rn(hn),n===null?(f=pu(),f===null&&(f=Ht,m=hu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),s.memoizedState={parent:l,cache:f},Yu(s),Ts(s,hn,f)):(n.lanes&a&&(qu(n,s),po(s,null,null,a),ho()),f=n.memoizedState,m=s.memoizedState,f.parent!==l?(f={parent:l,cache:l},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ts(s,hn,l)):(l=m.cache,Ts(s,hn,l),l!==f.cache&&Wu(s,[hn],a,!0))),Mn(n,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var ku=be(null),ur=null,Ki=null;function Ts(n,s,a){De(ku,s._currentValue),s._currentValue=a}function Zi(n){n._currentValue=ku.current,je(ku)}function Xu(n,s,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),n===a)break;n=n.return}}function Wu(n,s,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=f;for(var I=0;I<s.length;I++)if(R.context===s[I]){m.lanes|=a,R=m.alternate,R!==null&&(R.lanes|=a),Xu(m.return,a,n),l||(E=null);break e}m=R.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(r(341));E.lanes|=a,m=E.alternate,m!==null&&(m.lanes|=a),Xu(E,a,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function uo(n,s,a,l){n=null;for(var f=s,m=!1;f!==null;){if(!m){if(f.flags&524288)m=!0;else if(f.flags&262144)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=f.type;Zn(f.pendingProps.value,E.value)||(n!==null?n.push(R):n=[R])}}else if(f===V.current){if(E=f.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Ro):n=[Ro])}f=f.return}n!==null&&Wu(s,n,a,l),s.flags|=262144}function Rl(n){for(n=n.firstContext;n!==null;){if(!Zn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function fr(n){ur=n,Ki=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Rn(n){return Gm(ur,n)}function Dl(n,s){return ur===null&&fr(n),Gm(n,s)}function Gm(n,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Ki===null){if(n===null)throw Error(r(308));Ki=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else Ki=Ki.next=s;return a}var bs=!1;function Yu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Cs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ws(n,s,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,qt&2){var f=l.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),l.pending=s,s=ul(n),Ep(n,null,a),s}return cl(n,l,s,a),ul(n)}function fo(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194176)!==0)){var l=s.lanes;l&=n.pendingLanes,a|=l,s.lanes=a,Ui(n,a)}}function Qu(n,s){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?f=m=s:m=m.next=s}else f=m=s;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}var Ku=!1;function ho(){if(Ku){var n=qr;if(n!==null)throw n}}function po(n,s,a,l){Ku=!1;var f=n.updateQueue;bs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var I=R,K=I.next;I.next=null,E===null?m=K:E.next=K,E=I;var de=n.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==E&&(R===null?de.firstBaseUpdate=K:R.next=K,de.lastBaseUpdate=I))}if(m!==null){var _e=f.baseState;E=0,de=K=I=null,R=m;do{var oe=R.lane&-536870913,he=oe!==R.lane;if(he?(Mt&oe)===oe:(l&oe)===oe){oe!==0&&oe===Yr&&(Ku=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ke=n,rt=R;oe=s;var jt=a;switch(rt.tag){case 1:if(ke=rt.payload,typeof ke=="function"){_e=ke.call(jt,_e,oe);break e}_e=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=rt.payload,oe=typeof ke=="function"?ke.call(jt,_e,oe):ke,oe==null)break e;_e=T({},_e,oe);break e;case 2:bs=!0}}oe=R.callback,oe!==null&&(n.flags|=64,he&&(n.flags|=8192),he=f.callbacks,he===null?f.callbacks=[oe]:he.push(oe))}else he={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(K=de=he,I=_e):de=de.next=he,E|=oe;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;he=R,R=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);de===null&&(I=_e),f.baseState=I,f.firstBaseUpdate=K,f.lastBaseUpdate=de,m===null&&(f.shared.lanes=0),Bs|=E,n.lanes=E,n.memoizedState=_e}}function Vm(n,s){if(typeof n!="function")throw Error(r(191,n));n.call(s)}function km(n,s){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Vm(a[n],s)}function mo(n,s){try{var a=s.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var m=a.create,E=a.inst;l=m(),E.destroy=l}a=a.next}while(a!==f)}}catch(R){zt(s,s.return,R)}}function Rs(n,s,a){try{var l=s.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&n)===n){var E=l.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,f=s;var I=a;try{R()}catch(K){zt(f,I,K)}}}l=l.next}while(l!==m)}}catch(K){zt(s,s.return,K)}}function Xm(n){var s=n.updateQueue;if(s!==null){var a=n.stateNode;try{km(s,a)}catch(l){zt(n,n.return,l)}}}function Wm(n,s,a){a.props=cr(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){zt(n,s,l)}}function hr(n,s){try{var a=n.ref;if(a!==null){var l=n.stateNode;switch(n.tag){case 26:case 27:case 5:var f=l;break;default:f=l}typeof a=="function"?n.refCleanup=a(f):a.current=f}}catch(m){zt(n,s,m)}}function jn(n,s){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){zt(n,s,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){zt(n,s,f)}else a.current=null}function Ym(n){var s=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){zt(n,n.return,f)}}function qm(n,s,a){try{var l=n.stateNode;c_(l,n.type,a,s),l[cn]=s}catch(f){zt(n,n.return,f)}}function Qm(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Zu(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ju(n,s,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Xl));else if(l!==4&&l!==27&&(n=n.child,n!==null))for(ju(n,s,a),n=n.sibling;n!==null;)ju(n,s,a),n=n.sibling}function Ul(n,s,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(l!==4&&l!==27&&(n=n.child,n!==null))for(Ul(n,s,a),n=n.sibling;n!==null;)Ul(n,s,a),n=n.sibling}var ji=!1,Kt=!1,Ju=!1,Km=typeof WeakSet=="function"?WeakSet:Set,vn=null,Zm=!1;function zA(n,s){if(n=n.containerInfo,Cf=jl,n=dp(n),eu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,R=-1,I=-1,K=0,de=0,_e=n,oe=null;t:for(;;){for(var he;_e!==a||f!==0&&_e.nodeType!==3||(R=E+f),_e!==m||l!==0&&_e.nodeType!==3||(I=E+l),_e.nodeType===3&&(E+=_e.nodeValue.length),(he=_e.firstChild)!==null;)oe=_e,_e=he;for(;;){if(_e===n)break t;if(oe===a&&++K===f&&(R=E),oe===m&&++de===l&&(I=E),(he=_e.nextSibling)!==null)break;_e=oe,oe=_e.parentNode}_e=he}a=R===-1||I===-1?null:{start:R,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:n,selectionRange:a},jl=!1,vn=s;vn!==null;)if(s=vn,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,vn=n;else for(;vn!==null;){switch(s=vn,m=s.alternate,n=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if(n&1024&&m!==null){n=void 0,a=s,f=m.memoizedProps,m=m.memoizedState,l=a.stateNode;try{var ke=cr(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(ke,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(rt){zt(a,a.return,rt)}}break;case 3:if(n&1024){if(n=s.stateNode.containerInfo,a=n.nodeType,a===9)Lf(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Lf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(n&1024)throw Error(r(163))}if(n=s.sibling,n!==null){n.return=s.return,vn=n;break}vn=s.return}return ke=Zm,Zm=!1,ke}function jm(n,s,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:$i(n,a),l&4&&mo(5,a);break;case 1:if($i(n,a),l&4)if(n=a.stateNode,s===null)try{n.componentDidMount()}catch(R){zt(a,a.return,R)}else{var f=cr(a.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(f,s,n.__reactInternalSnapshotBeforeUpdate)}catch(R){zt(a,a.return,R)}}l&64&&Xm(a),l&512&&hr(a,a.return);break;case 3:if($i(n,a),l&64&&(l=a.updateQueue,l!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{km(l,n)}catch(R){zt(a,a.return,R)}}break;case 26:$i(n,a),l&512&&hr(a,a.return);break;case 27:case 5:$i(n,a),s===null&&l&4&&Ym(a),l&512&&hr(a,a.return);break;case 12:$i(n,a);break;case 13:$i(n,a),l&4&&eg(n,a);break;case 22:if(f=a.memoizedState!==null||ji,!f){s=s!==null&&s.memoizedState!==null||Kt;var m=ji,E=Kt;ji=f,(Kt=s)&&!E?Ds(n,a,(a.subtreeFlags&8772)!==0):$i(n,a),ji=m,Kt=E}l&512&&(a.memoizedProps.mode==="manual"?hr(a,a.return):jn(a,a.return));break;default:$i(n,a)}}function Jm(n){var s=n.alternate;s!==null&&(n.alternate=null,Jm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&Ga(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var nn=null,Jn=!1;function Ji(n,s,a){for(a=a.child;a!==null;)$m(n,s,a),a=a.sibling}function $m(n,s,a){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 26:Kt||jn(a,s),Ji(n,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||jn(a,s);var l=nn,f=Jn;for(nn=a.stateNode,Ji(n,s,a),a=a.stateNode,s=a.attributes;s.length;)a.removeAttributeNode(s[0]);Ga(a),nn=l,Jn=f;break;case 5:Kt||jn(a,s);case 6:f=nn;var m=Jn;if(nn=null,Ji(n,s,a),nn=f,Jn=m,nn!==null)if(Jn)try{n=nn,l=a.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)}catch(E){zt(a,s,E)}else try{nn.removeChild(a.stateNode)}catch(E){zt(a,s,E)}break;case 18:nn!==null&&(Jn?(s=nn,a=a.stateNode,s.nodeType===8?Uf(s.parentNode,a):s.nodeType===1&&Uf(s,a),Bo(s)):Uf(nn,a.stateNode));break;case 4:l=nn,f=Jn,nn=a.stateNode.containerInfo,Jn=!0,Ji(n,s,a),nn=l,Jn=f;break;case 0:case 11:case 14:case 15:Kt||Rs(2,a,s),Kt||Rs(4,a,s),Ji(n,s,a);break;case 1:Kt||(jn(a,s),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Wm(a,s,l)),Ji(n,s,a);break;case 21:Ji(n,s,a);break;case 22:Kt||jn(a,s),Kt=(l=Kt)||a.memoizedState!==null,Ji(n,s,a),Kt=l;break;default:Ji(n,s,a)}}function eg(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Bo(n)}catch(a){zt(s,s.return,a)}}function HA(n){switch(n.tag){case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new Km),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new Km),s;default:throw Error(r(435,n.tag))}}function $u(n,s){var a=HA(n);s.forEach(function(l){var f=$A.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function di(n,s){var a=s.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],m=n,E=s,R=E;e:for(;R!==null;){switch(R.tag){case 27:case 5:nn=R.stateNode,Jn=!1;break e;case 3:nn=R.stateNode.containerInfo,Jn=!0;break e;case 4:nn=R.stateNode.containerInfo,Jn=!0;break e}R=R.return}if(nn===null)throw Error(r(160));$m(m,E,f),nn=null,Jn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)tg(s,n),s=s.sibling}var yi=null;function tg(n,s){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:di(s,n),pi(n),l&4&&(Rs(3,n,n.return),mo(3,n),Rs(5,n,n.return));break;case 1:di(s,n),pi(n),l&512&&(Kt||a===null||jn(a,a.return)),l&64&&ji&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=yi;if(di(s,n),pi(n),l&512&&(Kt||a===null||jn(a,a.return)),l&4){var m=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[js]||m[ln]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Tn(m,l,a),m[ln]=n,ie(m),l=m;break e;case"link":var E=Yg("link","href",f).get(l+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(m=E[R],m.getAttribute("href")===(a.href==null?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break t}}m=f.createElement(l),Tn(m,l,a),f.head.appendChild(m);break;case"meta":if(E=Yg("meta","content",f).get(l+(a.content||""))){for(R=0;R<E.length;R++)if(m=E[R],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break t}}m=f.createElement(l),Tn(m,l,a),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[ln]=n,ie(m),l=m}n.stateNode=l}else qg(f,n.type,n.stateNode);else n.stateNode=Wg(f,l,n.memoizedProps);else m!==l?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,l===null?qg(f,n.type,n.stateNode):Wg(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&qm(n,n.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&n.alternate===null){f=n.stateNode,m=n.memoizedProps;try{for(var I=f.firstChild;I;){var K=I.nextSibling,de=I.nodeName;I[js]||de==="HEAD"||de==="BODY"||de==="SCRIPT"||de==="STYLE"||de==="LINK"&&I.rel.toLowerCase()==="stylesheet"||f.removeChild(I),I=K}for(var _e=n.type,oe=f.attributes;oe.length;)f.removeAttributeNode(oe[0]);Tn(f,_e,m),f[ln]=n,f[cn]=m}catch(ke){zt(n,n.return,ke)}}case 5:if(di(s,n),pi(n),l&512&&(Kt||a===null||jn(a,a.return)),n.flags&32){f=n.stateNode;try{Wn(f,"")}catch(ke){zt(n,n.return,ke)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,qm(n,f,a!==null?a.memoizedProps:f)),l&1024&&(Ju=!0);break;case 6:if(di(s,n),pi(n),l&4){if(n.stateNode===null)throw Error(r(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(ke){zt(n,n.return,ke)}}break;case 3:if(Ql=null,f=yi,yi=Yl(s.containerInfo),di(s,n),yi=f,pi(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(s.containerInfo)}catch(ke){zt(n,n.return,ke)}Ju&&(Ju=!1,ng(n));break;case 4:l=yi,yi=Yl(n.stateNode.containerInfo),di(s,n),pi(n),yi=l;break;case 12:di(s,n),pi(n);break;case 13:di(s,n),pi(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cf=pe()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,$u(n,l)));break;case 22:if(l&512&&(Kt||a===null||jn(a,a.return)),I=n.memoizedState!==null,K=a!==null&&a.memoizedState!==null,de=ji,_e=Kt,ji=de||I,Kt=_e||K,di(s,n),Kt=_e,ji=de,pi(n),s=n.stateNode,s._current=n,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,l&8192&&(s._visibility=I?s._visibility&-2:s._visibility|1,I&&(s=ji||Kt,a===null||K||s||jr(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(a=null,s=n;;){if(s.tag===5||s.tag===26||s.tag===27){if(a===null){K=a=s;try{if(f=K.stateNode,I)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{E=K.stateNode,R=K.memoizedProps.style;var he=R!=null&&R.hasOwnProperty("display")?R.display:null;E.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch(ke){zt(K,K.return,ke)}}}else if(s.tag===6){if(a===null){K=s;try{K.stateNode.nodeValue=I?"":K.memoizedProps}catch(ke){zt(K,K.return,ke)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,$u(n,a))));break;case 19:di(s,n),pi(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,$u(n,l)));break;case 21:break;default:di(s,n),pi(n)}}function pi(n){var s=n.flags;if(s&2){try{if(n.tag!==27){e:{for(var a=n.return;a!==null;){if(Qm(a)){var l=a;break e}a=a.return}throw Error(r(160))}switch(l.tag){case 27:var f=l.stateNode,m=Zu(n);Ul(n,m,f);break;case 5:var E=l.stateNode;l.flags&32&&(Wn(E,""),l.flags&=-33);var R=Zu(n);Ul(n,R,E);break;case 3:case 4:var I=l.stateNode.containerInfo,K=Zu(n);ju(n,K,I);break;default:throw Error(r(161))}}}catch(de){zt(n,n.return,de)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function ng(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;ng(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function $i(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)jm(n,s.alternate,s),s=s.sibling}function jr(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:Rs(4,s,s.return),jr(s);break;case 1:jn(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&Wm(s,s.return,a),jr(s);break;case 26:case 27:case 5:jn(s,s.return),jr(s);break;case 22:jn(s,s.return),s.memoizedState===null&&jr(s);break;default:jr(s)}n=n.sibling}}function Ds(n,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,f=n,m=s,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ds(f,m,a),mo(4,m);break;case 1:if(Ds(f,m,a),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(K){zt(l,l.return,K)}if(l=m,f=l.updateQueue,f!==null){var R=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Vm(I[f],R)}catch(K){zt(l,l.return,K)}}a&&E&64&&Xm(m),hr(m,m.return);break;case 26:case 27:case 5:Ds(f,m,a),a&&l===null&&E&4&&Ym(m),hr(m,m.return);break;case 12:Ds(f,m,a);break;case 13:Ds(f,m,a),a&&E&4&&eg(f,m);break;case 22:m.memoizedState===null&&Ds(f,m,a),hr(m,m.return);break;default:Ds(f,m,a)}s=s.sibling}}function ef(n,s){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&so(a))}function tf(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&so(n))}function Us(n,s,a,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)ig(n,s,a,l),s=s.sibling}function ig(n,s,a,l){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Us(n,s,a,l),f&2048&&mo(9,s);break;case 3:Us(n,s,a,l),f&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&so(n)));break;case 12:if(f&2048){Us(n,s,a,l),n=s.stateNode;try{var m=s.memoizedProps,E=m.id,R=m.onPostCommit;typeof R=="function"&&R(E,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){zt(s,s.return,I)}}else Us(n,s,a,l);break;case 23:break;case 22:m=s.stateNode,s.memoizedState!==null?m._visibility&4?Us(n,s,a,l):go(n,s):m._visibility&4?Us(n,s,a,l):(m._visibility|=4,Jr(n,s,a,l,(s.subtreeFlags&10256)!==0)),f&2048&&ef(s.alternate,s);break;case 24:Us(n,s,a,l),f&2048&&tf(s.alternate,s);break;default:Us(n,s,a,l)}}function Jr(n,s,a,l,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=n,E=s,R=a,I=l,K=E.flags;switch(E.tag){case 0:case 11:case 15:Jr(m,E,R,I,f),mo(8,E);break;case 23:break;case 22:var de=E.stateNode;E.memoizedState!==null?de._visibility&4?Jr(m,E,R,I,f):go(m,E):(de._visibility|=4,Jr(m,E,R,I,f)),f&&K&2048&&ef(E.alternate,E);break;case 24:Jr(m,E,R,I,f),f&&K&2048&&tf(E.alternate,E);break;default:Jr(m,E,R,I,f)}s=s.sibling}}function go(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=n,l=s,f=l.flags;switch(l.tag){case 22:go(a,l),f&2048&&ef(l.alternate,l);break;case 24:go(a,l),f&2048&&tf(l.alternate,l);break;default:go(a,l)}s=s.sibling}}var vo=8192;function $r(n){if(n.subtreeFlags&vo)for(n=n.child;n!==null;)sg(n),n=n.sibling}function sg(n){switch(n.tag){case 26:$r(n),n.flags&vo&&n.memoizedState!==null&&w_(yi,n.memoizedState,n.memoizedProps);break;case 5:$r(n);break;case 3:case 4:var s=yi;yi=Yl(n.stateNode.containerInfo),$r(n),yi=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=vo,vo=16777216,$r(n),vo=s):$r(n));break;default:$r(n)}}function rg(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function xo(n){var s=n.deletions;if(n.flags&16){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];vn=l,og(l,n)}rg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ag(n),n=n.sibling}function ag(n){switch(n.tag){case 0:case 11:case 15:xo(n),n.flags&2048&&Rs(9,n,n.return);break;case 3:xo(n);break;case 12:xo(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&4&&(n.return===null||n.return.tag!==13)?(s._visibility&=-5,Ll(n)):xo(n);break;default:xo(n)}}function Ll(n){var s=n.deletions;if(n.flags&16){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];vn=l,og(l,n)}rg(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:Rs(8,s,s.return),Ll(s);break;case 22:a=s.stateNode,a._visibility&4&&(a._visibility&=-5,Ll(s));break;default:Ll(s)}n=n.sibling}}function og(n,s){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Rs(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:so(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,vn=l;else e:for(a=n;vn!==null;){l=vn;var f=l.sibling,m=l.return;if(Jm(l),l===a){vn=null;break e}if(f!==null){f.return=m,vn=f;break e}vn=m}}}function GA(n,s,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(n,s,a,l){return new GA(n,s,a,l)}function nf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ls(n,s){var a=n.alternate;return a===null?(a=mi(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&31457280,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function lg(n,s){n.flags&=31457282;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,s=a.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function Bl(n,s,a,l,f,m){var E=0;if(l=n,typeof n=="function")nf(n)&&(E=1);else if(typeof n=="string")E=b_(n,a,At.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case d:return dr(a.children,f,m,s);case p:E=8,f|=24;break;case g:return n=mi(12,a,s,f|2),n.elementType=g,n.lanes=m,n;case M:return n=mi(13,a,s,f),n.elementType=M,n.lanes=m,n;case S:return n=mi(19,a,s,f),n.elementType=S,n.lanes=m,n;case U:return cg(a,f,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case v:case A:E=10;break e;case x:E=9;break e;case y:E=11;break e;case _:E=14;break e;case B:E=16,l=null;break e}E=29,a=Error(r(130,n===null?"null":typeof n,"")),l=null}return s=mi(E,a,s,f),s.elementType=n,s.type=l,s.lanes=m,s}function dr(n,s,a,l){return n=mi(7,n,l,s),n.lanes=a,n}function cg(n,s,a,l){n=mi(22,n,l,s),n.elementType=U,n.lanes=a;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=f._current;if(m===null)throw Error(r(456));if(!(f._pendingVisibility&2)){var E=_s(m,2);E!==null&&(f._pendingVisibility|=2,Gn(E,m,2))}},attach:function(){var m=f._current;if(m===null)throw Error(r(456));if(f._pendingVisibility&2){var E=_s(m,2);E!==null&&(f._pendingVisibility&=-3,Gn(E,m,2))}}};return n.stateNode=f,n}function sf(n,s,a){return n=mi(6,n,null,s),n.lanes=a,n}function rf(n,s,a){return s=mi(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function es(n){n.flags|=4}function ug(n,s){if(s.type!=="stylesheet"||s.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,!Qg(s)){if(s=hi.current,s!==null&&((Mt&4194176)===Mt?Bi!==null:(Mt&62914560)!==Mt&&!(Mt&536870912)||s!==Bi))throw to=cu,Cp;n.flags|=8192}}function Ol(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?Tt():536870912,n.lanes|=s,ta|=s)}function Ao(n,s){if(!Ct)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Yt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(s)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&31457280,l|=f.flags&31457280,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,s}function VA(n,s,a){var l=s.pendingProps;switch(ou(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(s),null;case 1:return Yt(s),null;case 3:return a=s.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),Zi(hn),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(ja(s)?es(s):n===null||n.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Ei!==null&&(df(Ei),Ei=null))),Yt(s),null;case 26:return a=s.memoizedState,n===null?(es(s),a!==null?(Yt(s),ug(s,a)):(Yt(s),s.flags&=-16777217)):a?a!==n.memoizedState?(es(s),Yt(s),ug(s,a)):(Yt(s),s.flags&=-16777217):(n.memoizedProps!==l&&es(s),Yt(s),s.flags&=-16777217),null;case 27:Xe(s),a=it.current;var f=s.type;if(n!==null&&s.stateNode!=null)n.memoizedProps!==l&&es(s);else{if(!l){if(s.stateNode===null)throw Error(r(166));return Yt(s),null}n=At.current,ja(s)?Tp(s):(n=Hg(f,l,a),s.stateNode=n,es(s))}return Yt(s),null;case 5:if(Xe(s),a=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==l&&es(s);else{if(!l){if(s.stateNode===null)throw Error(r(166));return Yt(s),null}if(n=At.current,ja(s))Tp(s);else{switch(f=Wl(it.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[ln]=s,n[cn]=l;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=n;e:switch(Tn(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&es(s)}}return Yt(s),s.flags&=-16777217,null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==l&&es(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(r(166));if(n=it.current,ja(s)){if(n=s.stateNode,a=s.memoizedProps,l=null,f=Hn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[ln]=s,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Og(n.nodeValue,a)),n||ir(s)}else n=Wl(n).createTextNode(l),n[ln]=s,s.stateNode=n}return Yt(s),null;case 13:if(l=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=ja(s),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[ln]=s}else Ja(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Yt(s),f=!1}else Ei!==null&&(df(Ei),Ei=null),f=!0;if(!f)return s.flags&256?(Yi(s),s):(Yi(s),null)}if(Yi(s),s.flags&128)return s.lanes=a,s;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=s.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return a!==n&&a&&(s.child.flags|=8192),Ol(s,s.updateQueue),Yt(s),null;case 4:return ot(),n===null&&Mf(s.stateNode.containerInfo),Yt(s),null;case 10:return Zi(s.type),Yt(s),null;case 19:if(je(fn),f=s.memoizedState,f===null)return Yt(s),null;if(l=(s.flags&128)!==0,m=f.rendering,m===null)if(l)Ao(f,!1);else{if(Zt!==0||n!==null&&n.flags&128)for(n=s.child;n!==null;){if(m=vl(n),m!==null){for(s.flags|=128,Ao(f,!1),n=m.updateQueue,s.updateQueue=n,Ol(s,n),s.subtreeFlags=0,n=a,a=s.child;a!==null;)lg(a,n),a=a.sibling;return De(fn,fn.current&1|2),s.child}n=n.sibling}f.tail!==null&&pe()>Pl&&(s.flags|=128,l=!0,Ao(f,!1),s.lanes=4194304)}else{if(!l)if(n=vl(m),n!==null){if(s.flags|=128,l=!0,n=n.updateQueue,s.updateQueue=n,Ol(s,n),Ao(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ct)return Yt(s),null}else 2*pe()-f.renderingStartTime>Pl&&a!==536870912&&(s.flags|=128,l=!0,Ao(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(n=f.last,n!==null?n.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=pe(),s.sibling=null,n=fn.current,De(fn,l?n&1|2:n&1),s):(Yt(s),null);case 22:case 23:return Yi(s),fu(),l=s.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?a&536870912&&!(s.flags&128)&&(Yt(s),s.subtreeFlags&6&&(s.flags|=8192)):Yt(s),a=s.updateQueue,a!==null&&Ol(s,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==a&&(s.flags|=2048),n!==null&&je(rr),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Zi(hn),Yt(s),null;case 25:return null}throw Error(r(156,s.tag))}function kA(n,s){switch(ou(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Zi(hn),ot(),n=s.flags,n&65536&&!(n&128)?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Xe(s),null;case 13:if(Yi(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(r(340));Ja()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return je(fn),null;case 4:return ot(),null;case 10:return Zi(s.type),null;case 22:case 23:return Yi(s),fu(),n!==null&&je(rr),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return Zi(hn),null;case 25:return null;default:return null}}function fg(n,s){switch(ou(s),s.tag){case 3:Zi(hn),ot();break;case 26:case 27:case 5:Xe(s);break;case 4:ot();break;case 13:Yi(s);break;case 19:je(fn);break;case 10:Zi(s.type);break;case 22:case 23:Yi(s),fu(),n!==null&&je(rr);break;case 24:Zi(hn)}}var XA={getCacheForType:function(n){var s=Rn(hn),a=s.data.get(n);return a===void 0&&(a=n(),s.data.set(n,a)),a}},WA=typeof WeakMap=="function"?WeakMap:Map,qt=0,Ht=null,mt=null,Mt=0,Gt=0,$n=null,ts=!1,ea=!1,af=!1,ns=0,Zt=0,Bs=0,pr=0,of=0,gi=0,ta=0,_o=null,Pi=null,lf=!1,cf=0,Pl=1/0,Nl=null,Os=null,Il=!1,mr=null,So=0,uf=0,ff=null,Eo=0,hf=null;function ei(){if(qt&2&&Mt!==0)return Mt&-Mt;if(w.T!==null){var n=Yr;return n!==0?n:_f()}return Ha()}function hg(){gi===0&&(gi=!(Mt&536870912)||Ct?on():536870912);var n=hi.current;return n!==null&&(n.flags|=32),gi}function Gn(n,s,a){(n===Ht&&Gt===2||n.cancelPendingCommit!==null)&&(na(n,0),is(n,Mt,gi,!1)),In(n,a),(!(qt&2)||n!==Ht)&&(n===Ht&&(!(qt&2)&&(pr|=a),Zt===4&&is(n,Mt,gi,!1)),Ni(n))}function dg(n,s,a){if(qt&6)throw Error(r(327));var l=!a&&(s&60)===0&&(s&n.expiredLanes)===0||et(n,s),f=l?QA(n,s):gf(n,s,!0),m=l;do{if(f===0){ea&&!l&&is(n,s,0,!1);break}else if(f===6)is(n,s,0,!ts);else{if(a=n.current.alternate,m&&!YA(a)){f=gf(n,s,!1),m=!1;continue}if(f===2){if(m=s,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var R=n;f=_o;var I=R.current.memoizedState.isDehydrated;if(I&&(na(R,E).flags|=256),E=gf(R,E,!1),E!==2){if(af&&!I){R.errorRecoveryDisabledLanes|=m,pr|=m,f=4;break e}m=Pi,Pi=f,m!==null&&df(m)}f=E}if(m=!1,f!==2)continue}}if(f===1){na(n,0),is(n,s,0,!0);break}e:{switch(l=n,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){is(l,s,gi,!ts);break e}break;case 2:Pi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(l.finishedWork=a,l.finishedLanes=s,(s&62914560)===s&&(m=cf+300-pe(),10<m)){if(is(l,s,gi,!ts),Ue(l,0)!==0)break e;l.timeoutHandle=Ig(pg.bind(null,l,a,Pi,Nl,lf,s,gi,pr,ta,ts,2,-0,0),m);break e}pg(l,a,Pi,Nl,lf,s,gi,pr,ta,ts,0,-0,0)}}break}while(!0);Ni(n)}function df(n){Pi===null?Pi=n:Pi.push.apply(Pi,n)}function pg(n,s,a,l,f,m,E,R,I,K,de,_e,oe){var he=s.subtreeFlags;if((he&8192||(he&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:C_},sg(s),s=R_(),s!==null)){n.cancelPendingCommit=s(Sg.bind(null,n,a,l,f,E,R,I,1,_e,oe)),is(n,m,E,!K);return}Sg(n,a,l,f,E,R,I,de,_e,oe)}function YA(n){for(var s=n;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!Zn(m(),f))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function is(n,s,a,l){s&=~of,s&=~pr,n.suspendedLanes|=s,n.pingedLanes&=~s,l&&(n.warmLanes|=s),l=n.expirationTimes;for(var f=s;0<f;){var m=31-Ke(f),E=1<<m;l[m]=-1,f&=~E}a!==0&&za(n,a,s)}function Fl(){return qt&6?!0:(yo(0),!1)}function pf(){if(mt!==null){if(Gt===0)var n=mt.return;else n=mt,Ki=ur=null,Au(n),Xr=null,no=0,n=mt;for(;n!==null;)fg(n.alternate,n),n=n.return;mt=null}}function na(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,f_(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),pf(),Ht=n,mt=a=Ls(n.current,null),Mt=s,Gt=0,$n=null,ts=!1,ea=et(n,s),af=!1,ta=gi=of=pr=Bs=Zt=0,Pi=_o=null,lf=!1,s&8&&(s|=s&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=s;0<l;){var f=31-Ke(l),m=1<<f;s|=n[f],l&=~m}return ns=s,ll(),a}function mg(n,s){ut=null,w.H=Oi,s===eo?(s=Dp(),Gt=3):s===Cp?(s=Dp(),Gt=4):Gt=s===wm?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,$n=s,mt===null&&(Zt=1,wl(n,ci(s,n.current)))}function gg(){var n=w.H;return w.H=Oi,n===null?Oi:n}function vg(){var n=w.A;return w.A=XA,n}function mf(){Zt=4,ts||(Mt&4194176)!==Mt&&hi.current!==null||(ea=!0),!(Bs&134217727)&&!(pr&134217727)||Ht===null||is(Ht,Mt,gi,!1)}function gf(n,s,a){var l=qt;qt|=2;var f=gg(),m=vg();(Ht!==n||Mt!==s)&&(Nl=null,na(n,s)),s=!1;var E=Zt;e:do try{if(Gt!==0&&mt!==null){var R=mt,I=$n;switch(Gt){case 8:pf(),E=6;break e;case 3:case 2:case 6:hi.current===null&&(s=!0);var K=Gt;if(Gt=0,$n=null,ia(n,R,I,K),a&&ea){E=0;break e}break;default:K=Gt,Gt=0,$n=null,ia(n,R,I,K)}}qA(),E=Zt;break}catch(de){mg(n,de)}while(!0);return s&&n.shellSuspendCounter++,Ki=ur=null,qt=l,w.H=f,w.A=m,mt===null&&(Ht=null,Mt=0,ll()),E}function qA(){for(;mt!==null;)xg(mt)}function QA(n,s){var a=qt;qt|=2;var l=gg(),f=vg();Ht!==n||Mt!==s?(Nl=null,Pl=pe()+500,na(n,s)):ea=et(n,s);e:do try{if(Gt!==0&&mt!==null){s=mt;var m=$n;t:switch(Gt){case 1:Gt=0,$n=null,ia(n,s,m,1);break;case 2:if(wp(m)){Gt=0,$n=null,Ag(s);break}s=function(){Gt===2&&Ht===n&&(Gt=7),Ni(n)},m.then(s,s);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:wp(m)?(Gt=0,$n=null,Ag(s)):(Gt=0,$n=null,ia(n,s,m,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var R=mt;if(!E||Qg(E)){Gt=0,$n=null;var I=R.sibling;if(I!==null)mt=I;else{var K=R.return;K!==null?(mt=K,zl(K)):mt=null}break t}}Gt=0,$n=null,ia(n,s,m,5);break;case 6:Gt=0,$n=null,ia(n,s,m,6);break;case 8:pf(),Zt=6;break e;default:throw Error(r(462))}}KA();break}catch(de){mg(n,de)}while(!0);return Ki=ur=null,w.H=l,w.A=f,qt=a,mt!==null?0:(Ht=null,Mt=0,ll(),Zt)}function KA(){for(;mt!==null&&!b();)xg(mt)}function xg(n){var s=Hm(n.alternate,n,ns);n.memoizedProps=n.pendingProps,s===null?zl(n):mt=s}function Ag(n){var s=n,a=s.alternate;switch(s.tag){case 15:case 0:s=Om(a,s,s.pendingProps,s.type,void 0,Mt);break;case 11:s=Om(a,s,s.pendingProps,s.type.render,s.ref,Mt);break;case 5:Au(s);default:fg(a,s),s=mt=lg(s,ns),s=Hm(a,s,ns)}n.memoizedProps=n.pendingProps,s===null?zl(n):mt=s}function ia(n,s,a,l){Ki=ur=null,Au(s),Xr=null,no=0;var f=s.return;try{if(IA(n,f,s,a,Mt)){Zt=1,wl(n,ci(a,n.current)),mt=null;return}}catch(m){if(f!==null)throw mt=f,m;Zt=1,wl(n,ci(a,n.current)),mt=null;return}s.flags&32768?(Ct||l===1?n=!0:ea||Mt&536870912?n=!1:(ts=n=!0,(l===2||l===3||l===6)&&(l=hi.current,l!==null&&l.tag===13&&(l.flags|=16384))),_g(s,n)):zl(s)}function zl(n){var s=n;do{if(s.flags&32768){_g(s,ts);return}n=s.return;var a=VA(s.alternate,s,ns);if(a!==null){mt=a;return}if(s=s.sibling,s!==null){mt=s;return}mt=s=n}while(s!==null);Zt===0&&(Zt=5)}function _g(n,s){do{var a=kA(n.alternate,n);if(a!==null){a.flags&=32767,mt=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(n=n.sibling,n!==null)){mt=n;return}mt=n=a}while(n!==null);Zt=6,mt=null}function Sg(n,s,a,l,f,m,E,R,I,K){var de=w.T,_e=Z.p;try{Z.p=2,w.T=null,ZA(n,s,a,l,_e,f,m,E,R,I,K)}finally{w.T=de,Z.p=_e}}function ZA(n,s,a,l,f,m,E,R){do sa();while(mr!==null);if(qt&6)throw Error(r(327));var I=n.finishedWork;if(l=n.finishedLanes,I===null)return null;if(n.finishedWork=null,n.finishedLanes=0,I===n.current)throw Error(r(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var K=I.lanes|I.childLanes;if(K|=su,Jo(n,l,K,m,E,R),n===Ht&&(mt=Ht=null,Mt=0),!(I.subtreeFlags&10256)&&!(I.flags&10256)||Il||(Il=!0,uf=K,ff=a,e_(Re,function(){return sa(),null})),a=(I.flags&15990)!==0,I.subtreeFlags&15990||a?(a=w.T,w.T=null,m=Z.p,Z.p=2,E=qt,qt|=4,zA(n,I),tg(I,n),_A(wf,n.containerInfo),jl=!!Cf,wf=Cf=null,n.current=I,jm(n,I.alternate,I),ae(),qt=E,Z.p=m,w.T=a):n.current=I,Il?(Il=!1,mr=n,So=l):Eg(n,K),K=n.pendingLanes,K===0&&(Os=null),ze(I.stateNode),Ni(n),s!==null)for(f=n.onRecoverableError,I=0;I<s.length;I++)K=s[I],f(K.value,{componentStack:K.stack});return So&3&&sa(),K=n.pendingLanes,l&4194218&&K&42?n===hf?Eo++:(Eo=0,hf=n):Eo=0,yo(0),null}function Eg(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,so(s)))}function sa(){if(mr!==null){var n=mr,s=uf;uf=0;var a=Lr(So),l=w.T,f=Z.p;try{if(Z.p=32>a?32:a,w.T=null,mr===null)var m=!1;else{a=ff,ff=null;var E=mr,R=So;if(mr=null,So=0,qt&6)throw Error(r(331));var I=qt;if(qt|=4,ag(E.current),ig(E,E.current,R,a),qt=I,yo(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(qe,E)}catch{}m=!0}return m}finally{Z.p=f,w.T=l,Eg(n,s)}}return!1}function yg(n,s,a){s=ci(a,s),s=Bu(n.stateNode,s,2),n=ws(n,s,2),n!==null&&(In(n,2),Ni(n))}function zt(n,s,a){if(n.tag===3)yg(n,n,a);else for(;s!==null;){if(s.tag===3){yg(s,n,a);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Os===null||!Os.has(l))){n=ci(a,n),a=bm(2),l=ws(s,a,2),l!==null&&(Cm(a,l,s,n),In(l,2),Ni(l));break}}s=s.return}}function vf(n,s,a){var l=n.pingCache;if(l===null){l=n.pingCache=new WA;var f=new Set;l.set(s,f)}else f=l.get(s),f===void 0&&(f=new Set,l.set(s,f));f.has(a)||(af=!0,f.add(a),n=jA.bind(null,n,s,a),s.then(n,n))}function jA(n,s,a){var l=n.pingCache;l!==null&&l.delete(s),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Ht===n&&(Mt&a)===a&&(Zt===4||Zt===3&&(Mt&62914560)===Mt&&300>pe()-cf?!(qt&2)&&na(n,0):of|=a,ta===Mt&&(ta=0)),Ni(n)}function Mg(n,s){s===0&&(s=Tt()),n=_s(n,s),n!==null&&(In(n,s),Ni(n))}function JA(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Mg(n,a)}function $A(n,s){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(s),Mg(n,a)}function e_(n,s){return We(n,s)}var Hl=null,ra=null,xf=!1,Gl=!1,Af=!1,gr=0;function Ni(n){n!==ra&&n.next===null&&(ra===null?Hl=ra=n:ra=ra.next=n),Gl=!0,xf||(xf=!0,n_(t_))}function yo(n,s){if(!Af&&Gl){Af=!0;do for(var a=!1,l=Hl;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,R=l.pingedLanes;m=(1<<31-Ke(42|n)+1)-1,m&=f&~(E&~R),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(a=!0,Cg(l,m))}else m=Mt,m=Ue(l,l===Ht?m:0),!(m&3)||et(l,m)||(a=!0,Cg(l,m));l=l.next}while(a);Af=!1}}function t_(){Gl=xf=!1;var n=0;gr!==0&&(u_()&&(n=gr),gr=0);for(var s=pe(),a=null,l=Hl;l!==null;){var f=l.next,m=Tg(l,s);m===0?(l.next=null,a===null?Hl=f:a.next=f,f===null&&(ra=a)):(a=l,(n!==0||m&3)&&(Gl=!0)),l=f}yo(n)}function Tg(n,s){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-Ke(m),R=1<<E,I=f[E];I===-1?(!(R&a)||R&l)&&(f[E]=Wt(R,s)):I<=s&&(n.expiredLanes|=R),m&=~R}if(s=Ht,a=Mt,a=Ue(n,n===s?a:0),l=n.callbackNode,a===0||n===s&&Gt===2||n.cancelPendingCommit!==null)return l!==null&&l!==null&&O(l),n.callbackNode=null,n.callbackPriority=0;if(!(a&3)||et(n,a)){if(s=a&-a,s===n.callbackPriority)return s;switch(l!==null&&O(l),Lr(a)){case 2:case 8:a=Ge;break;case 32:a=Re;break;case 268435456:a=xt;break;default:a=Re}return l=bg.bind(null,n),a=We(a,l),n.callbackPriority=s,n.callbackNode=a,s}return l!==null&&l!==null&&O(l),n.callbackPriority=2,n.callbackNode=null,2}function bg(n,s){var a=n.callbackNode;if(sa()&&n.callbackNode!==a)return null;var l=Mt;return l=Ue(n,n===Ht?l:0),l===0?null:(dg(n,l,s),Tg(n,pe()),n.callbackNode!=null&&n.callbackNode===a?bg.bind(null,n):null)}function Cg(n,s){if(sa())return null;dg(n,s,!0)}function n_(n){h_(function(){qt&6?We(ge,n):n()})}function _f(){return gr===0&&(gr=on()),gr}function wg(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:tl(""+n)}function Rg(n,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,n.id&&a.setAttribute("form",n.id),s.parentNode.insertBefore(a,s),n=new FormData(n),a.parentNode.removeChild(a),n}function i_(n,s,a,l,f){if(s==="submit"&&a&&a.stateNode===f){var m=wg((f[cn]||null).action),E=l.submitter;E&&(s=(s=E[cn]||null)?wg(s.formAction):E.getAttribute("formAction"),s!==null&&(m=s,E=null));var R=new rl("action","action",null,l,f);n.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(gr!==0){var I=E?Rg(f,E):new FormData(f);wu(a,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(R.preventDefault(),I=E?Rg(f,E):new FormData(f),wu(a,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Sf=0;Sf<Sp.length;Sf++){var Ef=Sp[Sf],s_=Ef.toLowerCase(),r_=Ef[0].toUpperCase()+Ef.slice(1);Si(s_,"on"+r_)}Si(gp,"onAnimationEnd"),Si(vp,"onAnimationIteration"),Si(xp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(EA,"onTransitionRun"),Si(yA,"onTransitionStart"),Si(MA,"onTransitionCancel"),Si(Ap,"onTransitionEnd"),Ne("onMouseEnter",["mouseout","mouseover"]),Ne("onMouseLeave",["mouseout","mouseover"]),Ne("onPointerEnter",["pointerout","pointerover"]),Ne("onPointerLeave",["pointerout","pointerover"]),Ce("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ce("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ce("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ce("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ce("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ce("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Dg(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var m=void 0;if(s)for(var E=l.length-1;0<=E;E--){var R=l[E],I=R.instance,K=R.currentTarget;if(R=R.listener,I!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=K;try{m(f)}catch(de){Cl(de)}f.currentTarget=null,m=I}else for(E=0;E<l.length;E++){if(R=l[E],I=R.instance,K=R.currentTarget,R=R.listener,I!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=K;try{m(f)}catch(de){Cl(de)}f.currentTarget=null,m=I}}}}function yt(n,s){var a=s[Br];a===void 0&&(a=s[Br]=new Set);var l=n+"__bubble";a.has(l)||(Ug(s,n,2,!1),a.add(l))}function yf(n,s,a){var l=0;s&&(l|=4),Ug(a,n,l,s)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Mf(n){if(!n[Vl]){n[Vl]=!0,ee.forEach(function(a){a!=="selectionchange"&&(a_.has(a)||yf(a,!1,n),yf(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Vl]||(s[Vl]=!0,yf("selectionchange",!1,s))}}function Ug(n,s,a,l){switch(ev(s)){case 2:var f=L_;break;case 8:f=B_;break;default:f=If}a=f.bind(null,s,a,n),f=void 0,!Wc||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(s,a,{capture:!0,passive:f}):n.addEventListener(s,a,!0):f!==void 0?n.addEventListener(s,a,{passive:f}):n.addEventListener(s,a,!1)}function Tf(n,s,a,l,f){var m=l;if(!(s&1)&&!(s&2)&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var R=l.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var I=E.tag;if((I===3||I===4)&&(I=E.stateNode.containerInfo,I===f||I.nodeType===8&&I.parentNode===f))return;E=E.return}for(;R!==null;){if(E=ki(R),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){l=m=E;continue e}R=R.parentNode}}l=l.return}Yd(function(){var K=m,de=kc(a),_e=[];e:{var oe=_p.get(n);if(oe!==void 0){var he=rl,ke=n;switch(n){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":he=$x;break;case"focusin":ke="focus",he=Kc;break;case"focusout":ke="blur",he=Kc;break;case"beforeblur":case"afterblur":he=Kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=nA;break;case gp:case vp:case xp:he=Xx;break;case Ap:he=sA;break;case"scroll":case"scrollend":he=zx;break;case"wheel":he=aA;break;case"copy":case"cut":case"paste":he=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=jd;break;case"toggle":case"beforetoggle":he=lA}var rt=(s&4)!==0,jt=!rt&&(n==="scroll"||n==="scrollend"),te=rt?oe!==null?oe+"Capture":null:oe;rt=[];for(var q=K,se;q!==null;){var ve=q;if(se=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||se===null||te===null||(ve=Va(q,te),ve!=null&&rt.push(To(q,ve,se))),jt)break;q=q.return}0<rt.length&&(oe=new he(oe,ke,null,a,de),_e.push({event:oe,listeners:rt}))}}if(!(s&7)){e:{if(oe=n==="mouseover"||n==="pointerover",he=n==="mouseout"||n==="pointerout",oe&&a!==Vc&&(ke=a.relatedTarget||a.fromElement)&&(ki(ke)||ke[Vi]))break e;if((he||oe)&&(oe=de.window===de?de:(oe=de.ownerDocument)?oe.defaultView||oe.parentWindow:window,he?(ke=a.relatedTarget||a.toElement,he=K,ke=ke?ki(ke):null,ke!==null&&(jt=k(ke),rt=ke.tag,ke!==jt||rt!==5&&rt!==27&&rt!==6)&&(ke=null)):(he=null,ke=K),he!==ke)){if(rt=Kd,ve="onMouseLeave",te="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(rt=jd,ve="onPointerLeave",te="onPointerEnter",q="pointer"),jt=he==null?oe:$(he),se=ke==null?oe:$(ke),oe=new rt(ve,q+"leave",he,a,de),oe.target=jt,oe.relatedTarget=se,ve=null,ki(de)===K&&(rt=new rt(te,q+"enter",ke,a,de),rt.target=se,rt.relatedTarget=jt,ve=rt),jt=ve,he&&ke)t:{for(rt=he,te=ke,q=0,se=rt;se;se=aa(se))q++;for(se=0,ve=te;ve;ve=aa(ve))se++;for(;0<q-se;)rt=aa(rt),q--;for(;0<se-q;)te=aa(te),se--;for(;q--;){if(rt===te||te!==null&&rt===te.alternate)break t;rt=aa(rt),te=aa(te)}rt=null}else rt=null;he!==null&&Lg(_e,oe,he,rt,!1),ke!==null&&jt!==null&&Lg(_e,jt,ke,rt,!0)}}e:{if(oe=K?$(K):window,he=oe.nodeName&&oe.nodeName.toLowerCase(),he==="select"||he==="input"&&oe.type==="file")var He=rp;else if(ip(oe))if(ap)He=xA;else{He=gA;var dt=mA}else he=oe.nodeName,!he||he.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?K&&Gc(K.elementType)&&(He=rp):He=vA;if(He&&(He=He(n,K))){sp(_e,He,a,de);break e}dt&&dt(n,oe,K),n==="focusout"&&K&&oe.type==="number"&&K.memoizedProps.value!=null&&wn(oe,"number",oe.value)}switch(dt=K?$(K):window,n){case"focusin":(ip(dt)||dt.contentEditable==="true")&&(Fr=dt,tu=K,Za=null);break;case"focusout":Za=tu=Fr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,pp(_e,a,de);break;case"selectionchange":if(SA)break;case"keydown":case"keyup":pp(_e,a,de)}var Ye;if(jc)e:{switch(n){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Ir?tp(n,a)&&($e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&($e="onCompositionStart");$e&&(Jd&&a.locale!=="ko"&&(Ir||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Ir&&(Ye=qd()):(As=de,Yc="value"in As?As.value:As.textContent,Ir=!0)),dt=kl(K,$e),0<dt.length&&($e=new Zd($e,n,null,a,de),_e.push({event:$e,listeners:dt}),Ye?$e.data=Ye:(Ye=np(a),Ye!==null&&($e.data=Ye)))),(Ye=uA?fA(n,a):hA(n,a))&&($e=kl(K,"onBeforeInput"),0<$e.length&&(dt=new Zd("onBeforeInput","beforeinput",null,a,de),_e.push({event:dt,listeners:$e}),dt.data=Ye)),i_(_e,n,K,a,de)}Dg(_e,s)})}function To(n,s,a){return{instance:n,listener:s,currentTarget:a}}function kl(n,s){for(var a=s+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Va(n,a),f!=null&&l.unshift(To(n,f,m)),f=Va(n,s),f!=null&&l.push(To(n,f,m))),n=n.return}return l}function aa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Lg(n,s,a,l,f){for(var m=s._reactName,E=[];a!==null&&a!==l;){var R=a,I=R.alternate,K=R.stateNode;if(R=R.tag,I!==null&&I===l)break;R!==5&&R!==26&&R!==27||K===null||(I=K,f?(K=Va(a,m),K!=null&&E.unshift(To(a,K,I))):f||(K=Va(a,m),K!=null&&E.push(To(a,K,I)))),a=a.return}E.length!==0&&n.push({event:s,listeners:E})}var o_=/\r\n?/g,l_=/\u0000|\uFFFD/g;function Bg(n){return(typeof n=="string"?n:""+n).replace(o_,`
`).replace(l_,"")}function Og(n,s){return s=Bg(s),Bg(n)===s}function Xl(){}function Nt(n,s,a,l,f,m){switch(a){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||Wn(n,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&Wn(n,""+l);break;case"className":Vt(n,"class",l);break;case"tabIndex":Vt(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(n,a,l);break;case"style":Xd(n,l,m);break;case"data":if(s!=="object"){Vt(n,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=tl(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(s!=="input"&&Nt(n,s,"name",f.name,f,null),Nt(n,s,"formEncType",f.formEncType,f,null),Nt(n,s,"formMethod",f.formMethod,f,null),Nt(n,s,"formTarget",f.formTarget,f,null)):(Nt(n,s,"encType",f.encType,f,null),Nt(n,s,"method",f.method,f,null),Nt(n,s,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=tl(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=Xl);break;case"onScroll":l!=null&&yt("scroll",n);break;case"onScrollEnd":l!=null&&yt("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=tl(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":yt("beforetoggle",n),yt("toggle",n),St(n,"popover",l);break;case"xlinkActuate":bt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":bt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":bt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":bt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":bt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":bt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":bt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":bt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":bt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":St(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ix.get(a)||a,St(n,a,l))}}function bf(n,s,a,l,f,m){switch(a){case"style":Xd(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Wn(n,l):(typeof l=="number"||typeof l=="bigint")&&Wn(n,""+l);break;case"onScroll":l!=null&&yt("scroll",n);break;case"onScrollEnd":l!=null&&yt("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ee.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),s=a.slice(2,f?a.length-7:void 0),m=n[cn]||null,m=m!=null?m[a]:null,typeof m=="function"&&n.removeEventListener(s,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(s,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):St(n,a,l)}}}function Tn(n,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",n),yt("load",n);var l=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var E=a[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Nt(n,s,m,E,a,null)}}f&&Nt(n,s,"srcSet",a.srcSet,a,null),l&&Nt(n,s,"src",a.src,a,null);return;case"input":yt("invalid",n);var R=m=E=f=null,I=null,K=null;for(l in a)if(a.hasOwnProperty(l)){var de=a[l];if(de!=null)switch(l){case"name":f=de;break;case"type":E=de;break;case"checked":I=de;break;case"defaultChecked":K=de;break;case"value":m=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,s));break;default:Nt(n,s,l,de,a,null)}}zn(n,m,R,I,K,E,f,!1),Et(n);return;case"select":yt("invalid",n),l=E=m=null;for(f in a)if(a.hasOwnProperty(f)&&(R=a[f],R!=null))switch(f){case"value":m=R;break;case"defaultValue":E=R;break;case"multiple":l=R;default:Nt(n,s,f,R,a,null)}s=m,a=E,n.multiple=!!l,s!=null?Qt(n,!!l,s,!1):a!=null&&Qt(n,!!l,a,!0);return;case"textarea":yt("invalid",n),m=f=l=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":l=R;break;case"defaultValue":f=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Nt(n,s,E,R,a,null)}Or(n,l,f,m),Et(n);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Nt(n,s,I,l,a,null)}return;case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":yt("load",n);break;case"video":case"audio":for(l=0;l<Mo.length;l++)yt(Mo[l],n);break;case"image":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"embed":case"source":case"link":yt("error",n),yt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(l=a[K],l!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Nt(n,s,K,l,a,null)}return;default:if(Gc(s)){for(de in a)a.hasOwnProperty(de)&&(l=a[de],l!==void 0&&bf(n,s,de,l,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!=null&&Nt(n,s,R,l,a,null))}function c_(n,s,a,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,R=null,I=null,K=null,de=null;for(he in a){var _e=a[he];if(a.hasOwnProperty(he)&&_e!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":I=_e;default:l.hasOwnProperty(he)||Nt(n,s,he,null,l,_e)}}for(var oe in l){var he=l[oe];if(_e=a[oe],l.hasOwnProperty(oe)&&(he!=null||_e!=null))switch(oe){case"type":m=he;break;case"name":f=he;break;case"checked":K=he;break;case"defaultChecked":de=he;break;case"value":E=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,s));break;default:he!==_e&&Nt(n,s,oe,he,l,_e)}}Ot(n,E,R,I,K,de,m,f);return;case"select":he=E=R=oe=null;for(m in a)if(I=a[m],a.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":he=I;default:l.hasOwnProperty(m)||Nt(n,s,m,null,l,I)}for(f in l)if(m=l[f],I=a[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":oe=m;break;case"defaultValue":R=m;break;case"multiple":E=m;default:m!==I&&Nt(n,s,f,m,l,I)}s=R,a=E,l=he,oe!=null?Qt(n,!!a,oe,!1):!!l!=!!a&&(s!=null?Qt(n,!!a,s,!0):Qt(n,!!a,a?[]:"",!1));return;case"textarea":he=oe=null;for(R in a)if(f=a[R],a.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Nt(n,s,R,null,l,f)}for(E in l)if(f=l[E],m=a[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":oe=f;break;case"defaultValue":he=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Nt(n,s,E,f,l,m)}En(n,oe,he);return;case"option":for(var ke in a)if(oe=a[ke],a.hasOwnProperty(ke)&&oe!=null&&!l.hasOwnProperty(ke))switch(ke){case"selected":n.selected=!1;break;default:Nt(n,s,ke,null,l,oe)}for(I in l)if(oe=l[I],he=a[I],l.hasOwnProperty(I)&&oe!==he&&(oe!=null||he!=null))switch(I){case"selected":n.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Nt(n,s,I,oe,l,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)oe=a[rt],a.hasOwnProperty(rt)&&oe!=null&&!l.hasOwnProperty(rt)&&Nt(n,s,rt,null,l,oe);for(K in l)if(oe=l[K],he=a[K],l.hasOwnProperty(K)&&oe!==he&&(oe!=null||he!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,s));break;default:Nt(n,s,K,oe,l,he)}return;default:if(Gc(s)){for(var jt in a)oe=a[jt],a.hasOwnProperty(jt)&&oe!==void 0&&!l.hasOwnProperty(jt)&&bf(n,s,jt,void 0,l,oe);for(de in l)oe=l[de],he=a[de],!l.hasOwnProperty(de)||oe===he||oe===void 0&&he===void 0||bf(n,s,de,oe,l,he);return}}for(var te in a)oe=a[te],a.hasOwnProperty(te)&&oe!=null&&!l.hasOwnProperty(te)&&Nt(n,s,te,null,l,oe);for(_e in l)oe=l[_e],he=a[_e],!l.hasOwnProperty(_e)||oe===he||oe==null&&he==null||Nt(n,s,_e,oe,l,he)}var Cf=null,wf=null;function Wl(n){return n.nodeType===9?n:n.ownerDocument}function Pg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Rf(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Df=null;function u_(){var n=window.event;return n&&n.type==="popstate"?n===Df?!1:(Df=n,!0):(Df=null,!1)}var Ig=typeof setTimeout=="function"?setTimeout:void 0,f_=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,h_=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(n){return Fg.resolve(null).then(n).catch(d_)}:Ig;function d_(n){setTimeout(function(){throw n})}function Uf(n,s){var a=s,l=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){n.removeChild(f),Bo(s);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);Bo(s)}function Lf(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Ga(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function p_(n,s,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[js])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Mi(n.nextSibling),n===null)break}return null}function m_(n,s,a){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Mi(n.nextSibling),n===null))return null;return n}function Mi(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return n}function zg(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}function Hg(n,s,a){switch(s=Wl(a),n){case"html":if(n=s.documentElement,!n)throw Error(r(452));return n;case"head":if(n=s.head,!n)throw Error(r(453));return n;case"body":if(n=s.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}var vi=new Map,Gg=new Set;function Yl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var ss=Z.d;Z.d={f:g_,r:v_,D:x_,C:A_,L:__,m:S_,X:y_,S:E_,M:M_};function g_(){var n=ss.f(),s=Fl();return n||s}function v_(n){var s=D(n);s!==null&&s.tag===5&&s.type==="form"?pm(s):ss.r(n)}var oa=typeof document>"u"?null:document;function Vg(n,s,a){var l=oa;if(l&&typeof s=="string"&&s){var f=mn(s);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),Gg.has(f)||(Gg.add(f),n={rel:n,crossOrigin:a,href:s},l.querySelector(f)===null&&(s=l.createElement("link"),Tn(s,"link",n),ie(s),l.head.appendChild(s)))}}function x_(n){ss.D(n),Vg("dns-prefetch",n,null)}function A_(n,s){ss.C(n,s),Vg("preconnect",n,s)}function __(n,s,a){ss.L(n,s,a);var l=oa;if(l&&n&&s){var f='link[rel="preload"][as="'+mn(s)+'"]';s==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+mn(a.imageSizes)+'"]')):f+='[href="'+mn(n)+'"]';var m=f;switch(s){case"style":m=la(n);break;case"script":m=ca(n)}vi.has(m)||(n=T({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:n,as:s},a),vi.set(m,n),l.querySelector(f)!==null||s==="style"&&l.querySelector(bo(m))||s==="script"&&l.querySelector(Co(m))||(s=l.createElement("link"),Tn(s,"link",n),ie(s),l.head.appendChild(s)))}}function S_(n,s){ss.m(n,s);var a=oa;if(a&&n){var l=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+mn(l)+'"][href="'+mn(n)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ca(n)}if(!vi.has(m)&&(n=T({rel:"modulepreload",href:n},s),vi.set(m,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(m)))return}l=a.createElement("link"),Tn(l,"link",n),ie(l),a.head.appendChild(l)}}}function E_(n,s,a){ss.S(n,s,a);var l=oa;if(l&&n){var f=re(l).hoistableStyles,m=la(n);s=s||"default";var E=f.get(m);if(!E){var R={loading:0,preload:null};if(E=l.querySelector(bo(m)))R.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":s},a),(a=vi.get(m))&&Bf(n,a);var I=E=l.createElement("link");ie(I),Tn(I,"link",n),I._p=new Promise(function(K,de){I.onload=K,I.onerror=de}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ql(E,s,l)}E={type:"stylesheet",instance:E,count:1,state:R},f.set(m,E)}}}function y_(n,s){ss.X(n,s);var a=oa;if(a&&n){var l=re(a).hoistableScripts,f=ca(n),m=l.get(f);m||(m=a.querySelector(Co(f)),m||(n=T({src:n,async:!0},s),(s=vi.get(f))&&Of(n,s),m=a.createElement("script"),ie(m),Tn(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function M_(n,s){ss.M(n,s);var a=oa;if(a&&n){var l=re(a).hoistableScripts,f=ca(n),m=l.get(f);m||(m=a.querySelector(Co(f)),m||(n=T({src:n,async:!0,type:"module"},s),(s=vi.get(f))&&Of(n,s),m=a.createElement("script"),ie(m),Tn(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function kg(n,s,a,l){var f=(f=it.current)?Yl(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=la(a.href),a=re(f).hoistableStyles,l=a.get(s),l||(l={type:"style",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=la(a.href);var m=re(f).hoistableStyles,E=m.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=f.querySelector(bo(n)))&&!m._p&&(E.instance=m,E.state.loading=5),vi.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(n,a),m||T_(f,n,a,E.state))),s&&l===null)throw Error(r(528,""));return E}if(s&&l!==null)throw Error(r(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ca(a),a=re(f).hoistableScripts,l=a.get(s),l||(l={type:"script",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function la(n){return'href="'+mn(n)+'"'}function bo(n){return'link[rel="stylesheet"]['+n+"]"}function Xg(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function T_(n,s,a,l){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=n.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),Tn(s,"link",a),ie(s),n.head.appendChild(s))}function ca(n){return'[src="'+mn(n)+'"]'}function Co(n){return"script[async]"+n}function Wg(n,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var l=n.querySelector('style[data-href~="'+mn(a.href)+'"]');if(l)return s.instance=l,ie(l),l;var f=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),ie(l),Tn(l,"style",f),ql(l,a.precedence,n),s.instance=l;case"stylesheet":f=la(a.href);var m=n.querySelector(bo(f));if(m)return s.state.loading|=4,s.instance=m,ie(m),m;l=Xg(a),(f=vi.get(f))&&Bf(l,f),m=(n.ownerDocument||n).createElement("link"),ie(m);var E=m;return E._p=new Promise(function(R,I){E.onload=R,E.onerror=I}),Tn(m,"link",l),s.state.loading|=4,ql(m,a.precedence,n),s.instance=m;case"script":return m=ca(a.src),(f=n.querySelector(Co(m)))?(s.instance=f,ie(f),f):(l=a,(f=vi.get(m))&&(l=T({},a),Of(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),ie(f),Tn(f,"link",l),n.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&!(s.state.loading&4)&&(l=s.instance,s.state.loading|=4,ql(l,a.precedence,n));return s.instance}function ql(n,s,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var R=l[E];if(R.dataset.precedence===s)m=R;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(n,s.firstChild))}function Bf(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Of(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var Ql=null;function Yg(n,s,a){if(Ql===null){var l=new Map,f=Ql=new Map;f.set(a,l)}else f=Ql,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var m=a[f];if(!(m[js]||m[ln]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(s)||"";E=n+E;var R=l.get(E);R?R.push(m):l.set(E,[m])}}return l}function qg(n,s,a){n=n.ownerDocument||n,n.head.insertBefore(a,s==="title"?n.querySelector("head > title"):null)}function b_(n,s,a){if(a===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Qg(n){return!(n.type==="stylesheet"&&!(n.state.loading&3))}var wo=null;function C_(){}function w_(n,s,a){if(wo===null)throw Error(r(475));var l=wo;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(s.state.loading&4)){if(s.instance===null){var f=la(a.href),m=n.querySelector(bo(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Kl.bind(l),n.then(l,l)),s.state.loading|=4,s.instance=m,ie(m);return}m=n.ownerDocument||n,a=Xg(a),(f=vi.get(f))&&Bf(a,f),m=m.createElement("link"),ie(m);var E=m;E._p=new Promise(function(R,I){E.onload=R,E.onerror=I}),Tn(m,"link",a),s.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(s,n),(n=s.state.preload)&&!(s.state.loading&3)&&(l.count++,s=Kl.bind(l),n.addEventListener("load",s),n.addEventListener("error",s))}}function R_(){if(wo===null)throw Error(r(475));var n=wo;return n.stylesheets&&n.count===0&&Pf(n,n.stylesheets),0<n.count?function(s){var a=setTimeout(function(){if(n.stylesheets&&Pf(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)Pf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Zl=null;function Pf(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Zl=new Map,s.forEach(D_,n),Zl=null,Kl.call(n))}function D_(n,s){if(!(s.state.loading&4)){var a=Zl.get(n);if(a)var l=a.get(null);else{a=new Map,Zl.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}f=s.instance,E=f.getAttribute("data-precedence"),m=a.get(E)||l,m===l&&a.set(null,f),a.set(E,f),this.count++,l=Kl.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),s.state.loading|=4}}var Ro={$$typeof:A,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function U_(n,s,a,l,f,m,E,R){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nn(0),this.hiddenUpdates=Nn(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Kg(n,s,a,l,f,m,E,R,I,K,de,_e){return n=new U_(n,s,a,E,R,I,K,_e),s=1,m===!0&&(s|=24),m=mi(3,null,null,s),n.current=m,m.stateNode=n,s=hu(),s.refCount++,n.pooledCache=s,s.refCount++,m.memoizedState={element:l,isDehydrated:a,cache:s},Yu(m),n}function Zg(n){return n?(n=Gr,n):Gr}function jg(n,s,a,l,f,m){f=Zg(f),l.context===null?l.context=f:l.pendingContext=f,l=Cs(s),l.payload={element:a},m=m===void 0?null:m,m!==null&&(l.callback=m),a=ws(n,l,s),a!==null&&(Gn(a,n,s),fo(a,n,s))}function Jg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Nf(n,s){Jg(n,s),(n=n.alternate)&&Jg(n,s)}function $g(n){if(n.tag===13){var s=_s(n,67108864);s!==null&&Gn(s,n,67108864),Nf(n,67108864)}}var jl=!0;function L_(n,s,a,l){var f=w.T;w.T=null;var m=Z.p;try{Z.p=2,If(n,s,a,l)}finally{Z.p=m,w.T=f}}function B_(n,s,a,l){var f=w.T;w.T=null;var m=Z.p;try{Z.p=8,If(n,s,a,l)}finally{Z.p=m,w.T=f}}function If(n,s,a,l){if(jl){var f=Ff(l);if(f===null)Tf(n,s,l,Jl,a),tv(n,l);else if(P_(f,n,s,a,l))l.stopPropagation();else if(tv(n,l),s&4&&-1<O_.indexOf(n)){for(;f!==null;){var m=D(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=we(m.pendingLanes);if(E!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var I=1<<31-Ke(E);R.entanglements[1]|=I,E&=~I}Ni(m),!(qt&6)&&(Pl=pe()+500,yo(0))}}break;case 13:R=_s(m,2),R!==null&&Gn(R,m,2),Fl(),Nf(m,2)}if(m=Ff(l),m===null&&Tf(n,s,l,Jl,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else Tf(n,s,l,null,a)}}function Ff(n){return n=kc(n),zf(n)}var Jl=null;function zf(n){if(Jl=null,n=ki(n),n!==null){var s=k(n);if(s===null)n=null;else{var a=s.tag;if(a===13){if(n=fe(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return Jl=n,null}function ev(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Se()){case ge:return 2;case Ge:return 8;case Re:case Ie:return 32;case xt:return 268435456;default:return 32}default:return 32}}var Hf=!1,Ps=null,Ns=null,Is=null,Do=new Map,Uo=new Map,Fs=[],O_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tv(n,s){switch(n){case"focusin":case"focusout":Ps=null;break;case"dragenter":case"dragleave":Ns=null;break;case"mouseover":case"mouseout":Is=null;break;case"pointerover":case"pointerout":Do.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(s.pointerId)}}function Lo(n,s,a,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},s!==null&&(s=D(s),s!==null&&$g(s)),n):(n.eventSystemFlags|=l,s=n.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),n)}function P_(n,s,a,l,f){switch(s){case"focusin":return Ps=Lo(Ps,n,s,a,l,f),!0;case"dragenter":return Ns=Lo(Ns,n,s,a,l,f),!0;case"mouseover":return Is=Lo(Is,n,s,a,l,f),!0;case"pointerover":var m=f.pointerId;return Do.set(m,Lo(Do.get(m)||null,n,s,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Uo.set(m,Lo(Uo.get(m)||null,n,s,a,l,f)),!0}return!1}function nv(n){var s=ki(n.target);if(s!==null){var a=k(s);if(a!==null){if(s=a.tag,s===13){if(s=fe(a),s!==null){n.blockedOn=s,$o(n.priority,function(){if(a.tag===13){var l=ei(),f=_s(a,l);f!==null&&Gn(f,a,l),Nf(a,l)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $l(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Ff(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Vc=l,a.target.dispatchEvent(l),Vc=null}else return s=D(a),s!==null&&$g(s),n.blockedOn=a,!1;s.shift()}return!0}function iv(n,s,a){$l(n)&&a.delete(s)}function N_(){Hf=!1,Ps!==null&&$l(Ps)&&(Ps=null),Ns!==null&&$l(Ns)&&(Ns=null),Is!==null&&$l(Is)&&(Is=null),Do.forEach(iv),Uo.forEach(iv)}function ec(n,s){n.blockedOn===s&&(n.blockedOn=null,Hf||(Hf=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,N_)))}var tc=null;function sv(n){tc!==n&&(tc=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){tc===n&&(tc=null);for(var s=0;s<n.length;s+=3){var a=n[s],l=n[s+1],f=n[s+2];if(typeof l!="function"){if(zf(l||a)===null)continue;break}var m=D(a);m!==null&&(n.splice(s,3),s-=3,wu(m,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function Bo(n){function s(I){return ec(I,n)}Ps!==null&&ec(Ps,n),Ns!==null&&ec(Ns,n),Is!==null&&ec(Is,n),Do.forEach(s),Uo.forEach(s);for(var a=0;a<Fs.length;a++){var l=Fs[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Fs.length&&(a=Fs[0],a.blockedOn===null);)nv(a),a.blockedOn===null&&Fs.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],m=a[l+1],E=f[cn]||null;if(typeof m=="function")E||sv(a);else if(E){var R=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[cn]||null)R=E.formAction;else if(zf(f)!==null)continue}else R=E.action;typeof R=="function"?a[l+1]=R:(a.splice(l,3),l-=3),sv(a)}}}function Gf(n){this._internalRoot=n}nc.prototype.render=Gf.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(r(409));var a=s.current,l=ei();jg(a,l,n,s,null,null)},nc.prototype.unmount=Gf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;n.tag===0&&sa(),jg(n.current,2,null,n,null,null),Fl(),s[Vi]=null}};function nc(n){this._internalRoot=n}nc.prototype.unstable_scheduleHydration=function(n){if(n){var s=Ha();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Fs.length&&s!==0&&s<Fs[a].priority;a++);Fs.splice(a,0,n),a===0&&nv(n)}};var rv=e.version;if(rv!=="19.0.0")throw Error(r(527,rv,"19.0.0"));Z.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=ne(s),n=n!==null?me(n):null,n=n===null?null:n.stateNode,n};var I_={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:ki,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{qe=ic.inject(I_),Ve=ic}catch{}}return Po.createRoot=function(n,s){if(!o(n))throw Error(r(299));var a=!1,l="",f=Em,m=ym,E=Mm,R=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(R=s.unstable_transitionCallbacks)),s=Kg(n,1,!1,null,null,a,l,f,m,E,R,null),n[Vi]=s.current,Mf(n.nodeType===8?n.parentNode:n),new Gf(s)},Po.hydrateRoot=function(n,s,a){if(!o(n))throw Error(r(299));var l=!1,f="",m=Em,E=ym,R=Mm,I=null,K=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(K=a.formState)),s=Kg(n,1,!0,s,a??null,l,f,m,E,R,I,K),s.context=Zg(null),a=s.current,l=ei(),f=Cs(l),f.callback=null,ws(a,f,l),s.current.lanes=l,In(s,l),Ni(s),n[Vi]=s.current,Mf(n),new nc(s)},Po.version="19.0.0",Po}var mv;function q_(){if(mv)return Xf.exports;mv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Xf.exports=Y_(),Xf.exports}var Nc=q_();function ko(i){let e=i[0],t=i[1],r=i[2];return Math.sqrt(e*e+t*t+r*r)}function Bh(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i}function Q_(i,e,t,r){return i[0]=e,i[1]=t,i[2]=r,i}function gv(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i}function vv(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i}function K_(i,e,t){return i[0]=e[0]*t[0],i[1]=e[1]*t[1],i[2]=e[2]*t[2],i}function Z_(i,e,t){return i[0]=e[0]/t[0],i[1]=e[1]/t[1],i[2]=e[2]/t[2],i}function Qf(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i}function j_(i,e){let t=e[0]-i[0],r=e[1]-i[1],o=e[2]-i[2];return Math.sqrt(t*t+r*r+o*o)}function J_(i,e){let t=e[0]-i[0],r=e[1]-i[1],o=e[2]-i[2];return t*t+r*r+o*o}function xv(i){let e=i[0],t=i[1],r=i[2];return e*e+t*t+r*r}function $_(i,e){return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i}function eS(i,e){return i[0]=1/e[0],i[1]=1/e[1],i[2]=1/e[2],i}function Oh(i,e){let t=e[0],r=e[1],o=e[2],c=t*t+r*r+o*o;return c>0&&(c=1/Math.sqrt(c)),i[0]=e[0]*c,i[1]=e[1]*c,i[2]=e[2]*c,i}function V0(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Av(i,e,t){let r=e[0],o=e[1],c=e[2],u=t[0],h=t[1],d=t[2];return i[0]=o*d-c*h,i[1]=c*u-r*d,i[2]=r*h-o*u,i}function tS(i,e,t,r){let o=e[0],c=e[1],u=e[2];return i[0]=o+r*(t[0]-o),i[1]=c+r*(t[1]-c),i[2]=u+r*(t[2]-u),i}function nS(i,e,t,r,o){const c=Math.exp(-r*o);let u=e[0],h=e[1],d=e[2];return i[0]=t[0]+(u-t[0])*c,i[1]=t[1]+(h-t[1])*c,i[2]=t[2]+(d-t[2])*c,i}function iS(i,e,t){let r=e[0],o=e[1],c=e[2],u=t[3]*r+t[7]*o+t[11]*c+t[15];return u=u||1,i[0]=(t[0]*r+t[4]*o+t[8]*c+t[12])/u,i[1]=(t[1]*r+t[5]*o+t[9]*c+t[13])/u,i[2]=(t[2]*r+t[6]*o+t[10]*c+t[14])/u,i}function sS(i,e,t){let r=e[0],o=e[1],c=e[2],u=t[3]*r+t[7]*o+t[11]*c+t[15];return u=u||1,i[0]=(t[0]*r+t[4]*o+t[8]*c)/u,i[1]=(t[1]*r+t[5]*o+t[9]*c)/u,i[2]=(t[2]*r+t[6]*o+t[10]*c)/u,i}function rS(i,e,t){let r=e[0],o=e[1],c=e[2];return i[0]=r*t[0]+o*t[3]+c*t[6],i[1]=r*t[1]+o*t[4]+c*t[7],i[2]=r*t[2]+o*t[5]+c*t[8],i}function aS(i,e,t){let r=e[0],o=e[1],c=e[2],u=t[0],h=t[1],d=t[2],p=t[3],g=h*c-d*o,v=d*r-u*c,x=u*o-h*r,A=h*x-d*v,y=d*g-u*x,M=u*v-h*g,S=p*2;return g*=S,v*=S,x*=S,A*=2,y*=2,M*=2,i[0]=r+g+A,i[1]=o+v+y,i[2]=c+x+M,i}const oS=function(){const i=[0,0,0],e=[0,0,0];return function(t,r){Bh(i,t),Bh(e,r),Oh(i,i),Oh(e,e);let o=V0(i,e);return o>1?0:o<-1?Math.PI:Math.acos(o)}}();function lS(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}class rn extends Array{constructor(e=0,t=e,r=e){return super(e,t,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,r=e){return e.length?this.copy(e):(Q_(this,e,t,r),this)}copy(e){return Bh(this,e),this}add(e,t){return t?gv(this,e,t):gv(this,this,e),this}sub(e,t){return t?vv(this,e,t):vv(this,this,e),this}multiply(e){return e.length?K_(this,this,e):Qf(this,this,e),this}divide(e){return e.length?Z_(this,this,e):Qf(this,this,1/e),this}inverse(e=this){return eS(this,e),this}len(){return ko(this)}distance(e){return e?j_(this,e):ko(this)}squaredLen(){return xv(this)}squaredDistance(e){return e?J_(this,e):xv(this)}negate(e=this){return $_(this,e),this}cross(e,t){return t?Av(this,e,t):Av(this,this,e),this}scale(e){return Qf(this,this,e),this}normalize(){return Oh(this,this),this}dot(e){return V0(this,e)}equals(e){return lS(this,e)}applyMatrix3(e){return rS(this,this,e),this}applyMatrix4(e){return iS(this,this,e),this}scaleRotateMatrix4(e){return sS(this,this,e),this}applyQuaternion(e){return aS(this,this,e),this}angle(e){return oS(this,e)}lerp(e,t){return tS(this,this,e,t),this}smoothLerp(e,t,r){return nS(this,this,e,t,r),this}clone(){return new rn(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],r=this[1],o=this[2];return this[0]=e[0]*t+e[4]*r+e[8]*o,this[1]=e[1]*t+e[5]*r+e[9]*o,this[2]=e[2]*t+e[6]*r+e[10]*o,this.normalize()}}const _v=new rn;let cS=1,uS=1,Sv=!1;class k0{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=cS++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in t)this.addAttribute(r,t[r])}addAttribute(e,t){if(this.attributes[e]=t,t.id=uS++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:r,type:o})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const c=this.attributes[r];this.gl.bindBuffer(c.target,c.buffer),this.glState.boundBuffer=c.buffer;let u=1;o===35674&&(u=2),o===35675&&(u=3),o===35676&&(u=4);const h=c.size/u,d=u===1?0:u*u*4,p=u===1?0:u*4;for(let g=0;g<u;g++)this.gl.vertexAttribPointer(t+g,h,c.type,c.normalized,c.stride+d,c.offset+g*p),this.gl.enableVertexAttribArray(t+g),this.gl.renderer.vertexAttribDivisor(t+g,c.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){var o;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((c,{name:u})=>{const h=this.attributes[u];h.needsUpdate&&this.updateAttribute(h)});let r=2;((o=this.attributes.index)==null?void 0:o.type)===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Sv)return console.warn("No position buffer data found to compute bounds"),Sv=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,r=e.size;this.bounds||(this.bounds={min:new rn,max:new rn,center:new rn,scale:new rn,radius:1/0});const o=this.bounds.min,c=this.bounds.max,u=this.bounds.center,h=this.bounds.scale;o.set(1/0),c.set(-1/0);for(let d=0,p=t.length;d<p;d+=r){const g=t[d],v=t[d+1],x=t[d+2];o.x=Math.min(g,o.x),o.y=Math.min(v,o.y),o.z=Math.min(x,o.z),c.x=Math.max(g,c.x),c.y=Math.max(v,c.y),c.z=Math.max(x,c.z)}h.sub(c,o),u.add(o,c).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,r=e.size;this.bounds||this.computeBoundingBox(e);let o=0;for(let c=0,u=t.length;c<u;c+=r)_v.fromArray(t,c),o=Math.max(o,this.bounds.center.squaredDistance(_v));this.bounds.radius=Math.sqrt(o)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let fS=1;const Ev={};class Td{constructor(e,{vertex:t,fragment:r,uniforms:o={},transparent:c=!1,cullFace:u=e.BACK,frontFace:h=e.CCW,depthTest:d=!0,depthWrite:p=!0,depthFunc:g=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=o,this.id=fS++,t||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=c,this.cullFace=u,this.frontFace=h,this.depthTest=d,this.depthWrite=p,this.depthFunc=g,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:r})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${yv(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${yv(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let u=0;u<r;u++){let h=this.gl.getActiveUniform(this.program,u);this.uniformLocations.set(h,this.gl.getUniformLocation(this.program,h.name));const d=h.name.match(/(\w+)/g);h.uniformName=d[0],h.nameComponents=d.slice(1)}this.attributeLocations=new Map;const o=[],c=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let u=0;u<c;u++){const h=this.gl.getActiveAttrib(this.program,u),d=this.gl.getAttribLocation(this.program,h.name);d!==-1&&(o[d]=h.name,this.attributeLocations.set(h,d))}this.attributeOrder=o.join("")}setBlendFunc(e,t,r,o){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=o,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,r){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=r}setStencilOp(e,t,r){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((o,c)=>{let u=this.uniforms[c.uniformName];for(const h of c.nameComponents){if(!u)break;if(h in u)u=u[h];else{if(Array.isArray(u.value))break;u=void 0;break}}if(!u)return Mv(`Active uniform ${c.name} has not been supplied`);if(u&&u.value===void 0)return Mv(`${c.name} uniform is missing a value parameter`);if(u.value.texture)return t=t+1,u.value.update(t),Kf(this.gl,c.type,o,t);if(u.value.length&&u.value[0].texture){const h=[];return u.value.forEach(d=>{t=t+1,d.update(t),h.push(t)}),Kf(this.gl,c.type,o,h)}Kf(this.gl,c.type,o,u.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Kf(i,e,t,r){r=r.length?hS(r):r;const o=i.renderer.state.uniformLocations.get(t);if(r.length)if(o===void 0||o.length!==r.length)i.renderer.state.uniformLocations.set(t,r.slice(0));else{if(dS(o,r))return;o.set?o.set(r):pS(o,r),i.renderer.state.uniformLocations.set(t,o)}else{if(o===r)return;i.renderer.state.uniformLocations.set(t,r)}switch(e){case 5126:return r.length?i.uniform1fv(t,r):i.uniform1f(t,r);case 35664:return i.uniform2fv(t,r);case 35665:return i.uniform3fv(t,r);case 35666:return i.uniform4fv(t,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?i.uniform1iv(t,r):i.uniform1i(t,r);case 35671:case 35667:return i.uniform2iv(t,r);case 35672:case 35668:return i.uniform3iv(t,r);case 35673:case 35669:return i.uniform4iv(t,r);case 35674:return i.uniformMatrix2fv(t,!1,r);case 35675:return i.uniformMatrix3fv(t,!1,r);case 35676:return i.uniformMatrix4fv(t,!1,r)}}function yv(i){let e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function hS(i){const e=i.length,t=i[0].length;if(t===void 0)return i;const r=e*t;let o=Ev[r];o||(Ev[r]=o=new Float32Array(r));for(let c=0;c<e;c++)o.set(i[c],c*t);return o}function dS(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function pS(i,e){for(let t=0,r=i.length;t<r;t++)i[t]=e[t]}let Zf=0;function Mv(i){Zf>100||(console.warn(i),Zf++,Zf>100&&console.warn("More than 100 program warnings - stopping logs."))}const jf=new rn;let mS=1;class X0{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:r=150,dpr:o=1,alpha:c=!1,depth:u=!0,stencil:h=!1,antialias:d=!1,premultipliedAlpha:p=!1,preserveDrawingBuffer:g=!1,powerPreference:v="default",autoClear:x=!0,webgl:A=2}={}){const y={alpha:c,depth:u,stencil:h,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v};this.dpr=o,this.alpha=c,this.color=!0,this.depth=u,this.stencil=h,this.premultipliedAlpha=p,this.autoClear=x,this.id=mS++,A===2&&(this.gl=e.getContext("webgl2",y)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",y)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,r=0,o=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=r,this.state.viewport.y=o,this.gl.viewport(r,o,e,t))}setScissor(e,t,r=0,o=0){this.gl.scissor(r,o,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,r,o){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===o||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=o,r!==void 0?this.gl.blendFuncSeparate(e,t,r,o):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,r){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===r||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,r||0))}setStencilOp(e,t,r){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===r||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=r,this.gl.stencilOp(e,t,r))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,r){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:r,sort:o}){let c=[];if(t&&r&&t.updateFrustum(),e.traverse(u=>{if(!u.visible)return!0;u.draw&&(r&&u.frustumCulled&&t&&!t.frustumIntersectsMesh(u)||c.push(u))}),o){const u=[],h=[],d=[];c.forEach(p=>{p.program.transparent?p.program.depthTest?h.push(p):d.push(p):u.push(p),p.zDepth=0,!(p.renderOrder!==0||!p.program.depthTest||!t)&&(p.worldMatrix.getTranslation(jf),jf.applyMatrix4(t.projectionViewMatrix),p.zDepth=jf.z)}),u.sort(this.sortOpaque),h.sort(this.sortTransparent),d.sort(this.sortUI),c=u.concat(h,d)}return c}render({scene:e,camera:t,target:r=null,update:o=!0,sort:c=!0,frustumCull:u=!0,clear:h}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(h||this.autoClear&&h!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),o&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:u,sort:c}).forEach(p=>{p.draw({camera:t})})}}function gS(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i}function vS(i,e,t,r,o){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i}function xS(i,e){let t=e[0],r=e[1],o=e[2],c=e[3],u=t*t+r*r+o*o+c*c;return u>0&&(u=1/Math.sqrt(u)),i[0]=t*u,i[1]=r*u,i[2]=o*u,i[3]=c*u,i}function AS(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]*e[3]}function _S(i){return i[0]=0,i[1]=0,i[2]=0,i[3]=1,i}function SS(i,e,t){t=t*.5;let r=Math.sin(t);return i[0]=r*e[0],i[1]=r*e[1],i[2]=r*e[2],i[3]=Math.cos(t),i}function Tv(i,e,t){let r=e[0],o=e[1],c=e[2],u=e[3],h=t[0],d=t[1],p=t[2],g=t[3];return i[0]=r*g+u*h+o*p-c*d,i[1]=o*g+u*d+c*h-r*p,i[2]=c*g+u*p+r*d-o*h,i[3]=u*g-r*h-o*d-c*p,i}function ES(i,e,t){t*=.5;let r=e[0],o=e[1],c=e[2],u=e[3],h=Math.sin(t),d=Math.cos(t);return i[0]=r*d+u*h,i[1]=o*d+c*h,i[2]=c*d-o*h,i[3]=u*d-r*h,i}function yS(i,e,t){t*=.5;let r=e[0],o=e[1],c=e[2],u=e[3],h=Math.sin(t),d=Math.cos(t);return i[0]=r*d-c*h,i[1]=o*d+u*h,i[2]=c*d+r*h,i[3]=u*d-o*h,i}function MS(i,e,t){t*=.5;let r=e[0],o=e[1],c=e[2],u=e[3],h=Math.sin(t),d=Math.cos(t);return i[0]=r*d+o*h,i[1]=o*d-r*h,i[2]=c*d+u*h,i[3]=u*d-c*h,i}function TS(i,e,t,r){let o=e[0],c=e[1],u=e[2],h=e[3],d=t[0],p=t[1],g=t[2],v=t[3],x,A,y,M,S;return A=o*d+c*p+u*g+h*v,A<0&&(A=-A,d=-d,p=-p,g=-g,v=-v),1-A>1e-6?(x=Math.acos(A),y=Math.sin(x),M=Math.sin((1-r)*x)/y,S=Math.sin(r*x)/y):(M=1-r,S=r),i[0]=M*o+S*d,i[1]=M*c+S*p,i[2]=M*u+S*g,i[3]=M*h+S*v,i}function bS(i,e){let t=e[0],r=e[1],o=e[2],c=e[3],u=t*t+r*r+o*o+c*c,h=u?1/u:0;return i[0]=-t*h,i[1]=-r*h,i[2]=-o*h,i[3]=c*h,i}function CS(i,e){return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[3]=e[3],i}function wS(i,e){let t=e[0]+e[4]+e[8],r;if(t>0)r=Math.sqrt(t+1),i[3]=.5*r,r=.5/r,i[0]=(e[5]-e[7])*r,i[1]=(e[6]-e[2])*r,i[2]=(e[1]-e[3])*r;else{let o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);let c=(o+1)%3,u=(o+2)%3;r=Math.sqrt(e[o*3+o]-e[c*3+c]-e[u*3+u]+1),i[o]=.5*r,r=.5/r,i[3]=(e[c*3+u]-e[u*3+c])*r,i[c]=(e[c*3+o]+e[o*3+c])*r,i[u]=(e[u*3+o]+e[o*3+u])*r}return i}function RS(i,e,t="YXZ"){let r=Math.sin(e[0]*.5),o=Math.cos(e[0]*.5),c=Math.sin(e[1]*.5),u=Math.cos(e[1]*.5),h=Math.sin(e[2]*.5),d=Math.cos(e[2]*.5);return t==="XYZ"?(i[0]=r*u*d+o*c*h,i[1]=o*c*d-r*u*h,i[2]=o*u*h+r*c*d,i[3]=o*u*d-r*c*h):t==="YXZ"?(i[0]=r*u*d+o*c*h,i[1]=o*c*d-r*u*h,i[2]=o*u*h-r*c*d,i[3]=o*u*d+r*c*h):t==="ZXY"?(i[0]=r*u*d-o*c*h,i[1]=o*c*d+r*u*h,i[2]=o*u*h+r*c*d,i[3]=o*u*d-r*c*h):t==="ZYX"?(i[0]=r*u*d-o*c*h,i[1]=o*c*d+r*u*h,i[2]=o*u*h-r*c*d,i[3]=o*u*d+r*c*h):t==="YZX"?(i[0]=r*u*d+o*c*h,i[1]=o*c*d+r*u*h,i[2]=o*u*h-r*c*d,i[3]=o*u*d-r*c*h):t==="XZY"&&(i[0]=r*u*d-o*c*h,i[1]=o*c*d-r*u*h,i[2]=o*u*h+r*c*d,i[3]=o*u*d+r*c*h),i}const DS=gS,US=vS,LS=AS,BS=xS;class OS extends Array{constructor(e=0,t=0,r=0,o=1){super(e,t,r,o),this.onChange=()=>{},this._target=this;const c=["0","1","2","3"];return new Proxy(this,{set(u,h){const d=Reflect.set(...arguments);return d&&c.includes(h)&&u.onChange(),d}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return _S(this._target),this.onChange(),this}set(e,t,r,o){return e.length?this.copy(e):(US(this._target,e,t,r,o),this.onChange(),this)}rotateX(e){return ES(this._target,this._target,e),this.onChange(),this}rotateY(e){return yS(this._target,this._target,e),this.onChange(),this}rotateZ(e){return MS(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return bS(this._target,e),this.onChange(),this}conjugate(e=this._target){return CS(this._target,e),this.onChange(),this}copy(e){return DS(this._target,e),this.onChange(),this}normalize(e=this._target){return BS(this._target,e),this.onChange(),this}multiply(e,t){return t?Tv(this._target,e,t):Tv(this._target,this._target,e),this.onChange(),this}dot(e){return LS(this._target,e)}fromMatrix3(e){return wS(this._target,e),this.onChange(),this}fromEuler(e,t){return RS(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return SS(this._target,e,t),this.onChange(),this}slerp(e,t){return TS(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const PS=1e-6;function NS(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}function IS(i,e,t,r,o,c,u,h,d,p,g,v,x,A,y,M,S){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i[4]=c,i[5]=u,i[6]=h,i[7]=d,i[8]=p,i[9]=g,i[10]=v,i[11]=x,i[12]=A,i[13]=y,i[14]=M,i[15]=S,i}function FS(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function zS(i,e){let t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=e[9],x=e[10],A=e[11],y=e[12],M=e[13],S=e[14],_=e[15],B=t*h-r*u,U=t*d-o*u,C=t*p-c*u,z=r*d-o*h,N=r*p-c*h,H=o*p-c*d,Y=g*M-v*y,w=g*S-x*y,T=g*_-A*y,G=v*S-x*M,le=v*_-A*M,W=x*_-A*S,P=B*W-U*le+C*G+z*T-N*w+H*Y;return P?(P=1/P,i[0]=(h*W-d*le+p*G)*P,i[1]=(o*le-r*W-c*G)*P,i[2]=(M*H-S*N+_*z)*P,i[3]=(x*N-v*H-A*z)*P,i[4]=(d*T-u*W-p*w)*P,i[5]=(t*W-o*T+c*w)*P,i[6]=(S*C-y*H-_*U)*P,i[7]=(g*H-x*C+A*U)*P,i[8]=(u*le-h*T+p*Y)*P,i[9]=(r*T-t*le-c*Y)*P,i[10]=(y*N-M*C+_*B)*P,i[11]=(v*C-g*N-A*B)*P,i[12]=(h*w-u*G-d*Y)*P,i[13]=(t*G-r*w+o*Y)*P,i[14]=(M*U-y*z-S*B)*P,i[15]=(g*z-v*U+x*B)*P,i):null}function W0(i){let e=i[0],t=i[1],r=i[2],o=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],g=i[9],v=i[10],x=i[11],A=i[12],y=i[13],M=i[14],S=i[15],_=e*u-t*c,B=e*h-r*c,U=e*d-o*c,C=t*h-r*u,z=t*d-o*u,N=r*d-o*h,H=p*y-g*A,Y=p*M-v*A,w=p*S-x*A,T=g*M-v*y,G=g*S-x*y,le=v*S-x*M;return _*le-B*G+U*T+C*w-z*Y+N*H}function bv(i,e,t){let r=e[0],o=e[1],c=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],x=e[9],A=e[10],y=e[11],M=e[12],S=e[13],_=e[14],B=e[15],U=t[0],C=t[1],z=t[2],N=t[3];return i[0]=U*r+C*h+z*v+N*M,i[1]=U*o+C*d+z*x+N*S,i[2]=U*c+C*p+z*A+N*_,i[3]=U*u+C*g+z*y+N*B,U=t[4],C=t[5],z=t[6],N=t[7],i[4]=U*r+C*h+z*v+N*M,i[5]=U*o+C*d+z*x+N*S,i[6]=U*c+C*p+z*A+N*_,i[7]=U*u+C*g+z*y+N*B,U=t[8],C=t[9],z=t[10],N=t[11],i[8]=U*r+C*h+z*v+N*M,i[9]=U*o+C*d+z*x+N*S,i[10]=U*c+C*p+z*A+N*_,i[11]=U*u+C*g+z*y+N*B,U=t[12],C=t[13],z=t[14],N=t[15],i[12]=U*r+C*h+z*v+N*M,i[13]=U*o+C*d+z*x+N*S,i[14]=U*c+C*p+z*A+N*_,i[15]=U*u+C*g+z*y+N*B,i}function HS(i,e,t){let r=t[0],o=t[1],c=t[2],u,h,d,p,g,v,x,A,y,M,S,_;return e===i?(i[12]=e[0]*r+e[4]*o+e[8]*c+e[12],i[13]=e[1]*r+e[5]*o+e[9]*c+e[13],i[14]=e[2]*r+e[6]*o+e[10]*c+e[14],i[15]=e[3]*r+e[7]*o+e[11]*c+e[15]):(u=e[0],h=e[1],d=e[2],p=e[3],g=e[4],v=e[5],x=e[6],A=e[7],y=e[8],M=e[9],S=e[10],_=e[11],i[0]=u,i[1]=h,i[2]=d,i[3]=p,i[4]=g,i[5]=v,i[6]=x,i[7]=A,i[8]=y,i[9]=M,i[10]=S,i[11]=_,i[12]=u*r+g*o+y*c+e[12],i[13]=h*r+v*o+M*c+e[13],i[14]=d*r+x*o+S*c+e[14],i[15]=p*r+A*o+_*c+e[15]),i}function GS(i,e,t){let r=t[0],o=t[1],c=t[2];return i[0]=e[0]*r,i[1]=e[1]*r,i[2]=e[2]*r,i[3]=e[3]*r,i[4]=e[4]*o,i[5]=e[5]*o,i[6]=e[6]*o,i[7]=e[7]*o,i[8]=e[8]*c,i[9]=e[9]*c,i[10]=e[10]*c,i[11]=e[11]*c,i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}function VS(i,e,t,r){let o=r[0],c=r[1],u=r[2],h=Math.hypot(o,c,u),d,p,g,v,x,A,y,M,S,_,B,U,C,z,N,H,Y,w,T,G,le,W,P,Q;return Math.abs(h)<PS?null:(h=1/h,o*=h,c*=h,u*=h,d=Math.sin(t),p=Math.cos(t),g=1-p,v=e[0],x=e[1],A=e[2],y=e[3],M=e[4],S=e[5],_=e[6],B=e[7],U=e[8],C=e[9],z=e[10],N=e[11],H=o*o*g+p,Y=c*o*g+u*d,w=u*o*g-c*d,T=o*c*g-u*d,G=c*c*g+p,le=u*c*g+o*d,W=o*u*g+c*d,P=c*u*g-o*d,Q=u*u*g+p,i[0]=v*H+M*Y+U*w,i[1]=x*H+S*Y+C*w,i[2]=A*H+_*Y+z*w,i[3]=y*H+B*Y+N*w,i[4]=v*T+M*G+U*le,i[5]=x*T+S*G+C*le,i[6]=A*T+_*G+z*le,i[7]=y*T+B*G+N*le,i[8]=v*W+M*P+U*Q,i[9]=x*W+S*P+C*Q,i[10]=A*W+_*P+z*Q,i[11]=y*W+B*P+N*Q,e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i)}function kS(i,e){return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function Y0(i,e){let t=e[0],r=e[1],o=e[2],c=e[4],u=e[5],h=e[6],d=e[8],p=e[9],g=e[10];return i[0]=Math.hypot(t,r,o),i[1]=Math.hypot(c,u,h),i[2]=Math.hypot(d,p,g),i}function XS(i){let e=i[0],t=i[1],r=i[2],o=i[4],c=i[5],u=i[6],h=i[8],d=i[9],p=i[10];const g=e*e+t*t+r*r,v=o*o+c*c+u*u,x=h*h+d*d+p*p;return Math.sqrt(Math.max(g,v,x))}const q0=function(){const i=[1,1,1];return function(e,t){let r=i;Y0(r,t);let o=1/r[0],c=1/r[1],u=1/r[2],h=t[0]*o,d=t[1]*c,p=t[2]*u,g=t[4]*o,v=t[5]*c,x=t[6]*u,A=t[8]*o,y=t[9]*c,M=t[10]*u,S=h+v+M,_=0;return S>0?(_=Math.sqrt(S+1)*2,e[3]=.25*_,e[0]=(x-y)/_,e[1]=(A-p)/_,e[2]=(d-g)/_):h>v&&h>M?(_=Math.sqrt(1+h-v-M)*2,e[3]=(x-y)/_,e[0]=.25*_,e[1]=(d+g)/_,e[2]=(A+p)/_):v>M?(_=Math.sqrt(1+v-h-M)*2,e[3]=(A-p)/_,e[0]=(d+g)/_,e[1]=.25*_,e[2]=(x+y)/_):(_=Math.sqrt(1+M-h-v)*2,e[3]=(d-g)/_,e[0]=(A+p)/_,e[1]=(x+y)/_,e[2]=.25*_),e}}();function WS(i,e,t,r){let o=ko([i[0],i[1],i[2]]);const c=ko([i[4],i[5],i[6]]),u=ko([i[8],i[9],i[10]]);W0(i)<0&&(o=-o),t[0]=i[12],t[1]=i[13],t[2]=i[14];const d=i.slice(),p=1/o,g=1/c,v=1/u;d[0]*=p,d[1]*=p,d[2]*=p,d[4]*=g,d[5]*=g,d[6]*=g,d[8]*=v,d[9]*=v,d[10]*=v,q0(e,d),r[0]=o,r[1]=c,r[2]=u}function YS(i,e,t,r){const o=i,c=e[0],u=e[1],h=e[2],d=e[3],p=c+c,g=u+u,v=h+h,x=c*p,A=c*g,y=c*v,M=u*g,S=u*v,_=h*v,B=d*p,U=d*g,C=d*v,z=r[0],N=r[1],H=r[2];return o[0]=(1-(M+_))*z,o[1]=(A+C)*z,o[2]=(y-U)*z,o[3]=0,o[4]=(A-C)*N,o[5]=(1-(x+_))*N,o[6]=(S+B)*N,o[7]=0,o[8]=(y+U)*H,o[9]=(S-B)*H,o[10]=(1-(x+M))*H,o[11]=0,o[12]=t[0],o[13]=t[1],o[14]=t[2],o[15]=1,o}function qS(i,e){let t=e[0],r=e[1],o=e[2],c=e[3],u=t+t,h=r+r,d=o+o,p=t*u,g=r*u,v=r*h,x=o*u,A=o*h,y=o*d,M=c*u,S=c*h,_=c*d;return i[0]=1-v-y,i[1]=g+_,i[2]=x-S,i[3]=0,i[4]=g-_,i[5]=1-p-y,i[6]=A+M,i[7]=0,i[8]=x+S,i[9]=A-M,i[10]=1-p-v,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function QS(i,e,t,r,o){let c=1/Math.tan(e/2),u=1/(r-o);return i[0]=c/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=c,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=(o+r)*u,i[11]=-1,i[12]=0,i[13]=0,i[14]=2*o*r*u,i[15]=0,i}function KS(i,e,t,r,o,c,u){let h=1/(e-t),d=1/(r-o),p=1/(c-u);return i[0]=-2*h,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=-2*d,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2*p,i[11]=0,i[12]=(e+t)*h,i[13]=(o+r)*d,i[14]=(u+c)*p,i[15]=1,i}function ZS(i,e,t,r){let o=e[0],c=e[1],u=e[2],h=r[0],d=r[1],p=r[2],g=o-t[0],v=c-t[1],x=u-t[2],A=g*g+v*v+x*x;A===0?x=1:(A=1/Math.sqrt(A),g*=A,v*=A,x*=A);let y=d*x-p*v,M=p*g-h*x,S=h*v-d*g;return A=y*y+M*M+S*S,A===0&&(p?h+=1e-6:d?p+=1e-6:d+=1e-6,y=d*x-p*v,M=p*g-h*x,S=h*v-d*g,A=y*y+M*M+S*S),A=1/Math.sqrt(A),y*=A,M*=A,S*=A,i[0]=y,i[1]=M,i[2]=S,i[3]=0,i[4]=v*S-x*M,i[5]=x*y-g*S,i[6]=g*M-v*y,i[7]=0,i[8]=g,i[9]=v,i[10]=x,i[11]=0,i[12]=o,i[13]=c,i[14]=u,i[15]=1,i}function Cv(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i[3]=e[3]+t[3],i[4]=e[4]+t[4],i[5]=e[5]+t[5],i[6]=e[6]+t[6],i[7]=e[7]+t[7],i[8]=e[8]+t[8],i[9]=e[9]+t[9],i[10]=e[10]+t[10],i[11]=e[11]+t[11],i[12]=e[12]+t[12],i[13]=e[13]+t[13],i[14]=e[14]+t[14],i[15]=e[15]+t[15],i}function wv(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i[3]=e[3]-t[3],i[4]=e[4]-t[4],i[5]=e[5]-t[5],i[6]=e[6]-t[6],i[7]=e[7]-t[7],i[8]=e[8]-t[8],i[9]=e[9]-t[9],i[10]=e[10]-t[10],i[11]=e[11]-t[11],i[12]=e[12]-t[12],i[13]=e[13]-t[13],i[14]=e[14]-t[14],i[15]=e[15]-t[15],i}function jS(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i[3]=e[3]*t,i[4]=e[4]*t,i[5]=e[5]*t,i[6]=e[6]*t,i[7]=e[7]*t,i[8]=e[8]*t,i[9]=e[9]*t,i[10]=e[10]*t,i[11]=e[11]*t,i[12]=e[12]*t,i[13]=e[13]*t,i[14]=e[14]*t,i[15]=e[15]*t,i}class qs extends Array{constructor(e=1,t=0,r=0,o=0,c=0,u=1,h=0,d=0,p=0,g=0,v=1,x=0,A=0,y=0,M=0,S=1){return super(e,t,r,o,c,u,h,d,p,g,v,x,A,y,M,S),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,r,o,c,u,h,d,p,g,v,x,A,y,M,S){return e.length?this.copy(e):(IS(this,e,t,r,o,c,u,h,d,p,g,v,x,A,y,M,S),this)}translate(e,t=this){return HS(this,t,e),this}rotate(e,t,r=this){return VS(this,r,e,t),this}scale(e,t=this){return GS(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?Cv(this,e,t):Cv(this,this,e),this}sub(e,t){return t?wv(this,e,t):wv(this,this,e),this}multiply(e,t){return e.length?t?bv(this,e,t):bv(this,this,e):jS(this,this,e),this}identity(){return FS(this),this}copy(e){return NS(this,e),this}fromPerspective({fov:e,aspect:t,near:r,far:o}={}){return QS(this,e,t,r,o),this}fromOrthogonal({left:e,right:t,bottom:r,top:o,near:c,far:u}){return KS(this,e,t,r,o,c,u),this}fromQuaternion(e){return qS(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return zS(this,e),this}compose(e,t,r){return YS(this,e,t,r),this}decompose(e,t,r){return WS(this,e,t,r),this}getRotation(e){return q0(e,this),this}getTranslation(e){return kS(e,this),this}getScaling(e){return Y0(e,this),this}getMaxScaleOnAxis(){return XS(this)}lookAt(e,t,r){return ZS(this,e,t,r),this}determinant(){return W0(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function JS(i,e,t="YXZ"){return t==="XYZ"?(i[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(i[0]=Math.atan2(-e[9],e[10]),i[2]=Math.atan2(-e[4],e[0])):(i[0]=Math.atan2(e[6],e[5]),i[2]=0)):t==="YXZ"?(i[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(i[1]=Math.atan2(e[8],e[10]),i[2]=Math.atan2(e[1],e[5])):(i[1]=Math.atan2(-e[2],e[0]),i[2]=0)):t==="ZXY"?(i[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(i[1]=Math.atan2(-e[2],e[10]),i[2]=Math.atan2(-e[4],e[5])):(i[1]=0,i[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(i[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(i[0]=Math.atan2(e[6],e[10]),i[2]=Math.atan2(e[1],e[0])):(i[0]=0,i[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(i[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(i[0]=Math.atan2(-e[9],e[5]),i[1]=Math.atan2(-e[2],e[0])):(i[0]=0,i[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(i[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(i[0]=Math.atan2(e[6],e[5]),i[1]=Math.atan2(e[8],e[0])):(i[0]=Math.atan2(-e[9],e[10]),i[1]=0)),i}const Rv=new qs;let $S=class extends Array{constructor(e=0,t=e,r=e,o="YXZ"){super(e,t,r),this.order=o,this.onChange=()=>{},this._target=this;const c=["0","1","2"];return new Proxy(this,{set(u,h){const d=Reflect.set(...arguments);return d&&c.includes(h)&&u.onChange(),d}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,r=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=r,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return JS(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,r){return Rv.fromQuaternion(e),this._target.fromRotationMatrix(Rv,t),r||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}};class bd{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new qs,this.worldMatrix=new qs,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new rn,this.quaternion=new OS,this.scale=new rn(1),this.rotation=new $S,this.up=new rn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,r=this.children.length;t<r;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,r=this.children.length;t<r;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}const eE=new qs,tE=new rn,nE=new rn;let iE=class extends bd{constructor(e,{near:t=.1,far:r=100,fov:o=45,aspect:c=1,left:u,right:h,bottom:d,top:p,zoom:g=1}={}){super(),Object.assign(this,{near:t,far:r,fov:o,aspect:c,left:u,right:h,bottom:d,top:p,zoom:g}),this.projectionMatrix=new qs,this.viewMatrix=new qs,this.projectionViewMatrix=new qs,this.worldPosition=new rn,this.type=u||h?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:e=this.near,far:t=this.far,fov:r=this.fov,aspect:o=this.aspect}={}){return Object.assign(this,{near:e,far:t,fov:r,aspect:o}),this.projectionMatrix.fromPerspective({fov:r*(Math.PI/180),aspect:o,near:e,far:t}),this.type="perspective",this}orthographic({near:e=this.near,far:t=this.far,left:r=this.left||-1,right:o=this.right||1,bottom:c=this.bottom||-1,top:u=this.top||1,zoom:h=this.zoom}={}){return Object.assign(this,{near:e,far:t,left:r,right:o,bottom:c,top:u,zoom:h}),r/=h,o/=h,c/=h,u/=h,this.projectionMatrix.fromOrthogonal({left:r,right:o,bottom:c,top:u,near:e,far:t}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(e){return super.lookAt(e,!0),this}project(e){return e.applyMatrix4(this.viewMatrix),e.applyMatrix4(this.projectionMatrix),this}unproject(e){return e.applyMatrix4(eE.inverse(this.projectionMatrix)),e.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new rn,new rn,new rn,new rn,new rn,new rn]);const e=this.projectionViewMatrix;this.frustum[0].set(e[3]-e[0],e[7]-e[4],e[11]-e[8]).constant=e[15]-e[12],this.frustum[1].set(e[3]+e[0],e[7]+e[4],e[11]+e[8]).constant=e[15]+e[12],this.frustum[2].set(e[3]+e[1],e[7]+e[5],e[11]+e[9]).constant=e[15]+e[13],this.frustum[3].set(e[3]-e[1],e[7]-e[5],e[11]-e[9]).constant=e[15]-e[13],this.frustum[4].set(e[3]-e[2],e[7]-e[6],e[11]-e[10]).constant=e[15]-e[14],this.frustum[5].set(e[3]+e[2],e[7]+e[6],e[11]+e[10]).constant=e[15]+e[14];for(let t=0;t<6;t++){const r=1/this.frustum[t].distance();this.frustum[t].multiply(r),this.frustum[t].constant*=r}}frustumIntersectsMesh(e,t=e.worldMatrix){if(!e.geometry.attributes.position||((!e.geometry.bounds||e.geometry.bounds.radius===1/0)&&e.geometry.computeBoundingSphere(),!e.geometry.bounds))return!0;const r=tE;r.copy(e.geometry.bounds.center),r.applyMatrix4(t);const o=e.geometry.bounds.radius*t.getMaxScaleOnAxis();return this.frustumIntersectsSphere(r,o)}frustumIntersectsSphere(e,t){const r=nE;for(let o=0;o<6;o++){const c=this.frustum[o];if(r.copy(c).dot(e)+c.constant<-t)return!1}return!0}};function sE(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[4],i[4]=e[5],i[5]=e[6],i[6]=e[8],i[7]=e[9],i[8]=e[10],i}function rE(i,e){let t=e[0],r=e[1],o=e[2],c=e[3],u=t+t,h=r+r,d=o+o,p=t*u,g=r*u,v=r*h,x=o*u,A=o*h,y=o*d,M=c*u,S=c*h,_=c*d;return i[0]=1-v-y,i[3]=g-_,i[6]=x+S,i[1]=g+_,i[4]=1-p-y,i[7]=A-M,i[2]=x-S,i[5]=A+M,i[8]=1-p-v,i}function aE(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i}function oE(i,e,t,r,o,c,u,h,d,p){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i[4]=c,i[5]=u,i[6]=h,i[7]=d,i[8]=p,i}function lE(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=1,i[5]=0,i[6]=0,i[7]=0,i[8]=1,i}function cE(i,e){let t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=g*u-h*p,x=-g*c+h*d,A=p*c-u*d,y=t*v+r*x+o*A;return y?(y=1/y,i[0]=v*y,i[1]=(-g*r+o*p)*y,i[2]=(h*r-o*u)*y,i[3]=x*y,i[4]=(g*t-o*d)*y,i[5]=(-h*t+o*c)*y,i[6]=A*y,i[7]=(-p*t+r*d)*y,i[8]=(u*t-r*c)*y,i):null}function Dv(i,e,t){let r=e[0],o=e[1],c=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],x=t[0],A=t[1],y=t[2],M=t[3],S=t[4],_=t[5],B=t[6],U=t[7],C=t[8];return i[0]=x*r+A*u+y*p,i[1]=x*o+A*h+y*g,i[2]=x*c+A*d+y*v,i[3]=M*r+S*u+_*p,i[4]=M*o+S*h+_*g,i[5]=M*c+S*d+_*v,i[6]=B*r+U*u+C*p,i[7]=B*o+U*h+C*g,i[8]=B*c+U*d+C*v,i}function uE(i,e,t){let r=e[0],o=e[1],c=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],x=t[0],A=t[1];return i[0]=r,i[1]=o,i[2]=c,i[3]=u,i[4]=h,i[5]=d,i[6]=x*r+A*u+p,i[7]=x*o+A*h+g,i[8]=x*c+A*d+v,i}function fE(i,e,t){let r=e[0],o=e[1],c=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],x=Math.sin(t),A=Math.cos(t);return i[0]=A*r+x*u,i[1]=A*o+x*h,i[2]=A*c+x*d,i[3]=A*u-x*r,i[4]=A*h-x*o,i[5]=A*d-x*c,i[6]=p,i[7]=g,i[8]=v,i}function hE(i,e,t){let r=t[0],o=t[1];return i[0]=r*e[0],i[1]=r*e[1],i[2]=r*e[2],i[3]=o*e[3],i[4]=o*e[4],i[5]=o*e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i}function dE(i,e){let t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=e[9],x=e[10],A=e[11],y=e[12],M=e[13],S=e[14],_=e[15],B=t*h-r*u,U=t*d-o*u,C=t*p-c*u,z=r*d-o*h,N=r*p-c*h,H=o*p-c*d,Y=g*M-v*y,w=g*S-x*y,T=g*_-A*y,G=v*S-x*M,le=v*_-A*M,W=x*_-A*S,P=B*W-U*le+C*G+z*T-N*w+H*Y;return P?(P=1/P,i[0]=(h*W-d*le+p*G)*P,i[1]=(d*T-u*W-p*w)*P,i[2]=(u*le-h*T+p*Y)*P,i[3]=(o*le-r*W-c*G)*P,i[4]=(t*W-o*T+c*w)*P,i[5]=(r*T-t*le-c*Y)*P,i[6]=(M*H-S*N+_*z)*P,i[7]=(S*C-y*H-_*U)*P,i[8]=(y*N-M*C+_*B)*P,i):null}class pE extends Array{constructor(e=1,t=0,r=0,o=0,c=1,u=0,h=0,d=0,p=1){return super(e,t,r,o,c,u,h,d,p),this}set(e,t,r,o,c,u,h,d,p){return e.length?this.copy(e):(oE(this,e,t,r,o,c,u,h,d,p),this)}translate(e,t=this){return uE(this,t,e),this}rotate(e,t=this){return fE(this,t,e),this}scale(e,t=this){return hE(this,t,e),this}multiply(e,t){return t?Dv(this,e,t):Dv(this,this,e),this}identity(){return lE(this),this}copy(e){return aE(this,e),this}fromMatrix4(e){return sE(this,e),this}fromQuaternion(e){return rE(this,e),this}fromBasis(e,t,r){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],r[0],r[1],r[2]),this}inverse(e=this){return cE(this,e),this}getNormalMatrix(e){return dE(this,e),this}}let mE=0,Cd=class extends bd{constructor(e,{geometry:t,program:r,mode:o=e.TRIANGLES,frustumCulled:c=!0,renderOrder:u=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=mE++,this.geometry=t,this.program=r,this.mode=o,this.frustumCulled=c,this.renderOrder=u,this.modelViewMatrix=new qs,this.normalMatrix=new pE,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}))}};const Uv=new Uint8Array(4);function Lv(i){return(i&i-1)===0}let gE=1,Q0=class{constructor(e,{image:t,target:r=e.TEXTURE_2D,type:o=e.UNSIGNED_BYTE,format:c=e.RGBA,internalFormat:u=c,wrapS:h=e.CLAMP_TO_EDGE,wrapT:d=e.CLAMP_TO_EDGE,wrapR:p=e.CLAMP_TO_EDGE,generateMipmaps:g=r===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:v=g?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:x=e.LINEAR,premultiplyAlpha:A=!1,unpackAlignment:y=4,flipY:M=r==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:S=0,level:_=0,width:B,height:U=B,length:C=1}={}){this.gl=e,this.id=gE++,this.image=t,this.target=r,this.type=o,this.format=c,this.internalFormat=u,this.minFilter=v,this.magFilter=x,this.wrapS=h,this.wrapT=d,this.wrapR=p,this.generateMipmaps=g,this.premultiplyAlpha=A,this.unpackAlignment=y,this.flipY=M,this.anisotropy=Math.min(S,this.gl.renderer.parameters.maxAnisotropy),this.level=_,this.width=B,this.height=U,this.length=C,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const t=!(this.image===this.store.image&&!this.needsUpdate);if((t||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!t){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,this.level,this.internalFormat,this.format,this.type,this.image[r]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let r=0;r<this.image.length;r++)this.gl.compressedTexImage2D(this.target,r,this.internalFormat,this.image[r].width,this.image[r].height,0,this.image[r].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!Lv(this.image.width)||!Lv(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Uv);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Uv);this.store.image=this.image}}};const Bv={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function Ov(i){i.length===4&&(i=i[0]+i[1]+i[1]+i[2]+i[2]+i[3]+i[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);return e||console.warn(`Unable to convert hex string ${i} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function vE(i){return i=parseInt(i),[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function Pv(i){return i===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(i)?i[0]==="#"?Ov(i):Bv[i.toLowerCase()]?Ov(Bv[i.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):vE(i)}let Nv=class extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...Pv(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(Pv(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}},K0=class Z0 extends k0{constructor(e,{width:t=1,height:r=1,widthSegments:o=1,heightSegments:c=1,attributes:u={}}={}){const h=o,d=c,p=(h+1)*(d+1),g=h*d*6,v=new Float32Array(p*3),x=new Float32Array(p*3),A=new Float32Array(p*2),y=g>65536?new Uint32Array(g):new Uint16Array(g);Z0.buildPlane(v,x,A,y,t,r,0,h,d),Object.assign(u,{position:{size:3,data:v},normal:{size:3,data:x},uv:{size:2,data:A},index:{data:y}}),super(e,u)}static buildPlane(e,t,r,o,c,u,h,d,p,g=0,v=1,x=2,A=1,y=-1,M=0,S=0){const _=M,B=c/d,U=u/p;for(let C=0;C<=p;C++){let z=C*U-u/2;for(let N=0;N<=d;N++,M++){let H=N*B-c/2;if(e[M*3+g]=H*A,e[M*3+v]=z*y,e[M*3+x]=h/2,t[M*3+g]=0,t[M*3+v]=0,t[M*3+x]=h>=0?1:-1,r[M*2]=N/d,r[M*2+1]=1-C/p,C===p||N===d)continue;let Y=_+N+C*(d+1),w=_+N+(C+1)*(d+1),T=_+N+(C+1)*(d+1)+1,G=_+N+C*(d+1)+1;o[S*6]=Y,o[S*6+1]=w,o[S*6+2]=G,o[S*6+3]=w,o[S*6+4]=T,o[S*6+5]=G,S++}}}},xE=class extends k0{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}};const AE=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,_E=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;

out vec4 fragColor;

vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
    const vec4 C = vec4(
        0.211324865405187, 0.366025403784439,
        -0.577350269189626, 0.024390243902439
    );
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);

    vec3 p = permute(
        permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0)
    );

    vec3 m = max(
        0.5 - vec3(
            dot(x0, x0),
            dot(x12.xy, x12.xy),
            dot(x12.zw, x12.zw)
        ), 
        0.0
    );
    m = m * m;
    m = m * m;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

struct ColorStop {
    vec3 color;
    float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                  int index = 0;                                                for (int i = 0; i < 2; i++) {                                      ColorStop currentColor = colors[i];                           bool isInBetween = currentColor.position <= factor;           index = int(mix(float(index), float(i), float(isInBetween)));     }                                                             ColorStop currentColor = colors[index];                       ColorStop nextColor = colors[index + 1];                      float range = nextColor.position - currentColor.position;     float lerpFactor = (factor - currentColor.position) / range;     finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
    // Compute UVs from gl_FragCoord
    vec2 uv = gl_FragCoord.xy / uResolution;
    
    // Build our three color stops from uniform array uColorStops
    ColorStop colors[3];
    colors[0] = ColorStop(uColorStops[0], 0.0);
    colors[1] = ColorStop(uColorStops[1], 0.5);
    colors[2] = ColorStop(uColorStops[2], 1.0);

    // Interpolate color along uv.x
    vec3 rampColor;
    COLOR_RAMP(colors, uv.x, rampColor);

    // Noise-based "height," scaled by amplitude
    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) 
                   * 0.5 
                   * uAmplitude;
    height = exp(height);
    height = (uv.y * 2.0 - height + 0.2);

    fragColor.rgb = 0.6 * height * rampColor;
    fragColor.a = 1.0;
}
`;function SE(i){const{colorStops:e=["#00d8ff","#7cff67","#00d8ff"],amplitude:t=1}=i,r=Di.useRef(i);r.current=i;const o=Di.useRef(null);return Di.useEffect(()=>{const c=o.current;if(!c)return;const u=new X0,h=u.gl;h.clearColor(1,1,1,1);let d;function p(){if(!c)return;const M=c.offsetWidth,S=c.offsetHeight;u.setSize(M,S),d&&(d.uniforms.uResolution.value=[M,S])}window.addEventListener("resize",p);const g=new xE(h);g.attributes.uv&&delete g.attributes.uv;const v=e.map(M=>{const S=new Nv(M);return[S.r,S.g,S.b]});d=new Td(h,{vertex:AE,fragment:_E,uniforms:{uTime:{value:0},uAmplitude:{value:t},uColorStops:{value:v},uResolution:{value:[c.offsetWidth,c.offsetHeight]}}});const x=new Cd(h,{geometry:g,program:d});c.appendChild(h.canvas);let A=0;const y=M=>{A=requestAnimationFrame(y);const{time:S=M*.01,speed:_=1}=r.current;d.uniforms.uTime.value=S*_*.1,d.uniforms.uAmplitude.value=r.current.amplitude??1;const B=r.current.colorStops??e;d.uniforms.uColorStops.value=B.map(U=>{const C=new Nv(U);return[C.r,C.g,C.b]}),u.render({scene:x})};return A=requestAnimationFrame(y),p(),()=>{var M;cancelAnimationFrame(A),window.removeEventListener("resize",p),c&&h.canvas.parentNode===c&&c.removeChild(h.canvas),(M=h.getExtension("WEBGL_lose_context"))==null||M.loseContext()}},[t]),bn.jsx("div",{ref:o,className:"aurora-container"})}const j0=()=>bn.jsx(bn.Fragment,{children:bn.jsx(SE,{colorStops:["#3A29FF","#FF94B4","#FF3232"],speed:.5})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="173",EE=0,Iv=1,yE=2,J0=1,ME=2,us=3,ms=0,_n=1,kn=2,On=0,wa=1,Fv=2,zv=3,Hv=4,TE=5,Tr=100,bE=101,CE=102,wE=103,RE=104,DE=200,UE=201,LE=202,BE=203,Ph=204,Nh=205,OE=206,PE=207,NE=208,IE=209,FE=210,zE=211,HE=212,GE=213,VE=214,Ih=0,Fh=1,zh=2,Ua=3,Hh=4,Gh=5,Vh=6,kh=7,$0=0,kE=1,XE=2,Qs=0,WE=1,YE=2,qE=3,QE=4,KE=5,ZE=6,jE=7,ex=300,La=301,Ba=302,Xh=303,Wh=304,Ic=306,Yh=1e3,Cr=1001,qh=1002,ri=1003,JE=1004,sc=1005,Bn=1006,Jf=1007,wr=1008,Cn=1009,tx=1010,nx=1011,Yo=1012,wd=1013,Ks=1014,fs=1015,qo=1016,Rd=1017,Dd=1018,Rr=1020,ix=35902,sx=1021,rx=1022,Ri=1023,ax=1024,ox=1025,Ra=1026,Dr=1027,lx=1028,Ud=1029,cx=1030,Ld=1031,Bd=1033,Cc=33776,wc=33777,Rc=33778,Dc=33779,Qh=35840,Kh=35841,Zh=35842,jh=35843,Jh=36196,$h=37492,ed=37496,td=37808,nd=37809,id=37810,sd=37811,rd=37812,ad=37813,od=37814,ld=37815,cd=37816,ud=37817,fd=37818,hd=37819,dd=37820,pd=37821,Uc=36492,md=36494,gd=36495,ux=36283,vd=36284,xd=36285,Ad=36286,Ur=3200,$E=3201,ey=0,ty=1,Fi="",Ft="srgb",Zs="srgb-linear",Bc="linear",It="srgb",ua=7680,Gv=519,ny=512,iy=513,sy=514,fx=515,ry=516,ay=517,oy=518,ly=519,Vv=35044,kv="300 es",hs=2e3,Oc=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,_d=180/Math.PI;function Qo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function cy(i,e){return(i%e+e)%e}function eh(i,e,t){return(1-t)*i+t*e}function No(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,r,o,c,u,h,d,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,u,h,d,p)}set(e,t,r,o,c,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=t,g[4]=c,g[5]=d,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,u=r[0],h=r[3],d=r[6],p=r[1],g=r[4],v=r[7],x=r[2],A=r[5],y=r[8],M=o[0],S=o[3],_=o[6],B=o[1],U=o[4],C=o[7],z=o[2],N=o[5],H=o[8];return c[0]=u*M+h*B+d*z,c[3]=u*S+h*U+d*N,c[6]=u*_+h*C+d*H,c[1]=p*M+g*B+v*z,c[4]=p*S+g*U+v*N,c[7]=p*_+g*C+v*H,c[2]=x*M+A*B+y*z,c[5]=x*S+A*U+y*N,c[8]=x*_+A*C+y*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return t*u*g-t*h*p-r*c*g+r*h*d+o*c*p-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=g*u-h*p,x=h*d-g*c,A=p*c-u*d,y=t*v+r*x+o*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=v*M,e[1]=(o*p-g*r)*M,e[2]=(h*r-o*u)*M,e[3]=x*M,e[4]=(g*t-o*d)*M,e[5]=(o*c-h*t)*M,e[6]=A*M,e[7]=(r*d-p*t)*M,e[8]=(u*t-r*c)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(r*d,r*p,-r*(d*u+p*h)+u+e,-o*p,o*d,-o*(-p*u+d*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(th.makeScale(e,t)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,t){return this.premultiply(th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new ct;function hx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uy(){const i=Pc("canvas");return i.style.display="block",i}const Xv={};function Ta(i){i in Xv||(Xv[i]=!0,console.warn(i))}function fy(i,e,t){return new Promise(function(r,o){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}function hy(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dy(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wv=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function py(){const i={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===It&&(o.r=ds(o.r),o.g=ds(o.g),o.b=ds(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=Da(o.r),o.g=Da(o.g),o.b=Da(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fi?Bc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Zs]:{primaries:e,whitePoint:r,transfer:Bc,toXYZ:Wv,fromXYZ:Yv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:r,transfer:It,toXYZ:Wv,fromXYZ:Yv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const Rt=py();function ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fa;class my{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fa===void 0&&(fa=Pc("canvas")),fa.width=e.width,fa.height=e.height;const r=fa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=fa}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ds(c[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ds(t[r]/255)*255):t[r]=ds(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gy=0;class dx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(nh(o[u].image)):c.push(nh(o[u]))}else c=nh(o);r.url=c}return t||(e.images[this.uuid]=r),r}}function nh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?my.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vy=0;class Sn extends vs{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,r=Cr,o=Cr,c=Bn,u=wr,h=Ri,d=Cn,p=Sn.DEFAULT_ANISOTROPY,g=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Qo(),this.name="",this.source=new dx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=ex;Sn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,r=0,o=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,c;const d=e.elements,p=d[0],g=d[4],v=d[8],x=d[1],A=d[5],y=d[9],M=d[2],S=d[6],_=d[10];if(Math.abs(g-x)<.01&&Math.abs(v-M)<.01&&Math.abs(y-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+M)<.1&&Math.abs(y+S)<.1&&Math.abs(p+A+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(p+1)/2,C=(A+1)/2,z=(_+1)/2,N=(g+x)/4,H=(v+M)/4,Y=(y+S)/4;return U>C&&U>z?U<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(U),o=N/r,c=H/r):C>z?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=N/o,c=Y/o):z<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(z),r=H/c,o=Y/c),this.set(r,o,c,t),this}let B=Math.sqrt((S-y)*(S-y)+(v-M)*(v-M)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(S-y)/B,this.y=(v-M)/B,this.z=(x-g)/B,this.w=Math.acos((p+A+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xy extends vs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Sn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new dx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends xy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class px extends Sn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ri,this.minFilter=ri,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends Sn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ri,this.minFilter=ri,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,c,u,h){let d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];const x=c[u+0],A=c[u+1],y=c[u+2],M=c[u+3];if(h===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h===1){e[t+0]=x,e[t+1]=A,e[t+2]=y,e[t+3]=M;return}if(v!==M||d!==x||p!==A||g!==y){let S=1-h;const _=d*x+p*A+g*y+v*M,B=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const z=Math.sqrt(U),N=Math.atan2(z,_*B);S=Math.sin(S*N)/z,h=Math.sin(h*N)/z}const C=h*B;if(d=d*S+x*C,p=p*S+A*C,g=g*S+y*C,v=v*S+M*C,S===1-h){const z=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=z,p*=z,g*=z,v*=z}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,c,u){const h=r[o],d=r[o+1],p=r[o+2],g=r[o+3],v=c[u],x=c[u+1],A=c[u+2],y=c[u+3];return e[t]=h*y+g*v+d*A-p*x,e[t+1]=d*y+g*x+p*v-h*A,e[t+2]=p*y+g*A+h*x-d*v,e[t+3]=g*y-h*v-d*x-p*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(r/2),g=h(o/2),v=h(c/2),x=d(r/2),A=d(o/2),y=d(c/2);switch(u){case"XYZ":this._x=x*g*v+p*A*y,this._y=p*A*v-x*g*y,this._z=p*g*y+x*A*v,this._w=p*g*v-x*A*y;break;case"YXZ":this._x=x*g*v+p*A*y,this._y=p*A*v-x*g*y,this._z=p*g*y-x*A*v,this._w=p*g*v+x*A*y;break;case"ZXY":this._x=x*g*v-p*A*y,this._y=p*A*v+x*g*y,this._z=p*g*y+x*A*v,this._w=p*g*v-x*A*y;break;case"ZYX":this._x=x*g*v-p*A*y,this._y=p*A*v+x*g*y,this._z=p*g*y-x*A*v,this._w=p*g*v+x*A*y;break;case"YZX":this._x=x*g*v+p*A*y,this._y=p*A*v+x*g*y,this._z=p*g*y-x*A*v,this._w=p*g*v-x*A*y;break;case"XZY":this._x=x*g*v-p*A*y,this._y=p*A*v-x*g*y,this._z=p*g*y+x*A*v,this._w=p*g*v+x*A*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],c=t[8],u=t[1],h=t[5],d=t[9],p=t[2],g=t[6],v=t[10],x=r+h+v;if(x>0){const A=.5/Math.sqrt(x+1);this._w=.25/A,this._x=(g-d)*A,this._y=(c-p)*A,this._z=(u-o)*A}else if(r>h&&r>v){const A=2*Math.sqrt(1+r-h-v);this._w=(g-d)/A,this._x=.25*A,this._y=(o+u)/A,this._z=(c+p)/A}else if(h>v){const A=2*Math.sqrt(1+h-r-v);this._w=(c-p)/A,this._x=(o+u)/A,this._y=.25*A,this._z=(d+g)/A}else{const A=2*Math.sqrt(1+v-r-h);this._w=(u-o)/A,this._x=(c+p)/A,this._y=(d+g)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,c=e._z,u=e._w,h=t._x,d=t._y,p=t._z,g=t._w;return this._x=r*g+u*h+o*p-c*d,this._y=o*g+u*d+c*h-r*p,this._z=c*g+u*p+r*d-o*h,this._w=u*g-r*h-o*d-c*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let h=u*e._w+r*e._x+o*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const A=1-t;return this._w=A*u+t*this._w,this._x=A*r+t*this._x,this._y=A*o+t*this._y,this._z=A*c+t*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=u*v+this._w*x,this._x=r*v+this._x*x,this._y=o*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*o,this.y=c[1]*t+c[4]*r+c[7]*o,this.z=c[2]*t+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*t+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*t+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*t+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*o-h*r),g=2*(h*t-c*o),v=2*(c*r-u*t);return this.x=t+d*p+u*v-h*g,this.y=r+d*g+h*p-c*v,this.z=o+d*v+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o,this.y=c[1]*t+c[5]*r+c[9]*o,this.z=c[2]*t+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,c=e.z,u=t.x,h=t.y,d=t.z;return this.x=o*d-c*h,this.y=c*u-r*d,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new j,qv=new Ko;class Zo{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ti):Ti.fromBufferAttribute(c,u),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),ac.subVectors(this.max,Io),ha.subVectors(e.a,Io),da.subVectors(e.b,Io),pa.subVectors(e.c,Io),Hs.subVectors(da,ha),Gs.subVectors(pa,da),vr.subVectors(ha,pa);let t=[0,-Hs.z,Hs.y,0,-Gs.z,Gs.y,0,-vr.z,vr.y,Hs.z,0,-Hs.x,Gs.z,0,-Gs.x,vr.z,0,-vr.x,-Hs.y,Hs.x,0,-Gs.y,Gs.x,0,-vr.y,vr.x,0];return!sh(t,ha,da,pa,ac)||(t=[1,0,0,0,1,0,0,0,1],!sh(t,ha,da,pa,ac))?!1:(oc.crossVectors(Hs,Gs),t=[oc.x,oc.y,oc.z],sh(t,ha,da,pa,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rs=[new j,new j,new j,new j,new j,new j,new j,new j],Ti=new j,rc=new Zo,ha=new j,da=new j,pa=new j,Hs=new j,Gs=new j,vr=new j,Io=new j,ac=new j,oc=new j,xr=new j;function sh(i,e,t,r,o){for(let c=0,u=i.length-3;c<=u;c+=3){xr.fromArray(i,c);const h=o.x*Math.abs(xr.x)+o.y*Math.abs(xr.y)+o.z*Math.abs(xr.z),d=e.dot(xr),p=t.dot(xr),g=r.dot(xr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const _y=new Zo,Fo=new j,rh=new j;class Od{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):_y.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Fo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(rh)),this.expandByPoint(Fo.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const as=new j,ah=new j,lc=new j,Vs=new j,oh=new j,cc=new j,lh=new j;class Sy{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ah.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),Vs.copy(this.origin).sub(ah);const c=e.distanceTo(t)*.5,u=-this.direction.dot(lc),h=Vs.dot(this.direction),d=-Vs.dot(lc),p=Vs.lengthSq(),g=Math.abs(1-u*u);let v,x,A,y;if(g>0)if(v=u*d-h,x=u*h-d,y=c*g,v>=0)if(x>=-y)if(x<=y){const M=1/g;v*=M,x*=M,A=v*(v+u*x+2*h)+x*(u*v+x+2*d)+p}else x=c,v=Math.max(0,-(u*x+h)),A=-v*v+x*(x+2*d)+p;else x=-c,v=Math.max(0,-(u*x+h)),A=-v*v+x*(x+2*d)+p;else x<=-y?(v=Math.max(0,-(-u*c+h)),x=v>0?-c:Math.min(Math.max(-c,-d),c),A=-v*v+x*(x+2*d)+p):x<=y?(v=0,x=Math.min(Math.max(-c,-d),c),A=x*(x+2*d)+p):(v=Math.max(0,-(u*c+h)),x=v>0?c:Math.min(Math.max(-c,-d),c),A=-v*v+x*(x+2*d)+p);else x=u>0?-c:c,v=Math.max(0,-(u*x+h)),A=-v*v+x*(x+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(ah).addScaledVector(lc,x),A}intersectSphere(e,t){as.subVectors(e.center,this.origin);const r=as.dot(this.direction),o=as.dot(as)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,d=r+u;return d<0?null:h<0?this.at(d,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-x.z)*v,d=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,d=(e.min.z-x.z)*v),r>d||h>o)||((h>r||r!==r)&&(r=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,r,o,c){oh.subVectors(t,e),cc.subVectors(r,e),lh.crossVectors(oh,cc);let u=this.direction.dot(lh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Vs.subVectors(this.origin,e);const d=h*this.direction.dot(cc.crossVectors(Vs,cc));if(d<0)return null;const p=h*this.direction.dot(oh.cross(Vs));if(p<0||d+p>u)return null;const g=-h*Vs.dot(lh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,r,o,c,u,h,d,p,g,v,x,A,y,M,S){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,u,h,d,p,g,v,x,A,y,M,S)}set(e,t,r,o,c,u,h,d,p,g,v,x,A,y,M,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=c,_[5]=u,_[9]=h,_[13]=d,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=A,_[7]=y,_[11]=M,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ma.setFromMatrixColumn(e,0).length(),c=1/ma.setFromMatrixColumn(e,1).length(),u=1/ma.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=u*g,A=u*v,y=h*g,M=h*v;t[0]=d*g,t[4]=-d*v,t[8]=p,t[1]=A+y*p,t[5]=x-M*p,t[9]=-h*d,t[2]=M-x*p,t[6]=y+A*p,t[10]=u*d}else if(e.order==="YXZ"){const x=d*g,A=d*v,y=p*g,M=p*v;t[0]=x+M*h,t[4]=y*h-A,t[8]=u*p,t[1]=u*v,t[5]=u*g,t[9]=-h,t[2]=A*h-y,t[6]=M+x*h,t[10]=u*d}else if(e.order==="ZXY"){const x=d*g,A=d*v,y=p*g,M=p*v;t[0]=x-M*h,t[4]=-u*v,t[8]=y+A*h,t[1]=A+y*h,t[5]=u*g,t[9]=M-x*h,t[2]=-u*p,t[6]=h,t[10]=u*d}else if(e.order==="ZYX"){const x=u*g,A=u*v,y=h*g,M=h*v;t[0]=d*g,t[4]=y*p-A,t[8]=x*p+M,t[1]=d*v,t[5]=M*p+x,t[9]=A*p-y,t[2]=-p,t[6]=h*d,t[10]=u*d}else if(e.order==="YZX"){const x=u*d,A=u*p,y=h*d,M=h*p;t[0]=d*g,t[4]=M-x*v,t[8]=y*v+A,t[1]=v,t[5]=u*g,t[9]=-h*g,t[2]=-p*g,t[6]=A*v+y,t[10]=x-M*v}else if(e.order==="XZY"){const x=u*d,A=u*p,y=h*d,M=h*p;t[0]=d*g,t[4]=-v,t[8]=p*g,t[1]=x*v+M,t[5]=u*g,t[9]=A*v-y,t[2]=y*v-A,t[6]=h*g,t[10]=M*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ey,e,yy)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ks.crossVectors(r,ti),ks.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ks.crossVectors(r,ti)),ks.normalize(),uc.crossVectors(ti,ks),o[0]=ks.x,o[4]=uc.x,o[8]=ti.x,o[1]=ks.y,o[5]=uc.y,o[9]=ti.y,o[2]=ks.z,o[6]=uc.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,u=r[0],h=r[4],d=r[8],p=r[12],g=r[1],v=r[5],x=r[9],A=r[13],y=r[2],M=r[6],S=r[10],_=r[14],B=r[3],U=r[7],C=r[11],z=r[15],N=o[0],H=o[4],Y=o[8],w=o[12],T=o[1],G=o[5],le=o[9],W=o[13],P=o[2],Q=o[6],F=o[10],X=o[14],k=o[3],fe=o[7],L=o[11],ne=o[15];return c[0]=u*N+h*T+d*P+p*k,c[4]=u*H+h*G+d*Q+p*fe,c[8]=u*Y+h*le+d*F+p*L,c[12]=u*w+h*W+d*X+p*ne,c[1]=g*N+v*T+x*P+A*k,c[5]=g*H+v*G+x*Q+A*fe,c[9]=g*Y+v*le+x*F+A*L,c[13]=g*w+v*W+x*X+A*ne,c[2]=y*N+M*T+S*P+_*k,c[6]=y*H+M*G+S*Q+_*fe,c[10]=y*Y+M*le+S*F+_*L,c[14]=y*w+M*W+S*X+_*ne,c[3]=B*N+U*T+C*P+z*k,c[7]=B*H+U*G+C*Q+z*fe,c[11]=B*Y+U*le+C*F+z*L,c[15]=B*w+U*W+C*X+z*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],v=e[6],x=e[10],A=e[14],y=e[3],M=e[7],S=e[11],_=e[15];return y*(+c*d*v-o*p*v-c*h*x+r*p*x+o*h*A-r*d*A)+M*(+t*d*A-t*p*x+c*u*x-o*u*A+o*p*g-c*d*g)+S*(+t*p*v-t*h*A-c*u*v+r*u*A+c*h*g-r*p*g)+_*(-o*h*g-t*d*v+t*h*x+o*u*v-r*u*x+r*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=e[9],x=e[10],A=e[11],y=e[12],M=e[13],S=e[14],_=e[15],B=v*S*p-M*x*p+M*d*A-h*S*A-v*d*_+h*x*_,U=y*x*p-g*S*p-y*d*A+u*S*A+g*d*_-u*x*_,C=g*M*p-y*v*p+y*h*A-u*M*A-g*h*_+u*v*_,z=y*v*d-g*M*d-y*h*x+u*M*x+g*h*S-u*v*S,N=t*B+r*U+o*C+c*z;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/N;return e[0]=B*H,e[1]=(M*x*c-v*S*c-M*o*A+r*S*A+v*o*_-r*x*_)*H,e[2]=(h*S*c-M*d*c+M*o*p-r*S*p-h*o*_+r*d*_)*H,e[3]=(v*d*c-h*x*c-v*o*p+r*x*p+h*o*A-r*d*A)*H,e[4]=U*H,e[5]=(g*S*c-y*x*c+y*o*A-t*S*A-g*o*_+t*x*_)*H,e[6]=(y*d*c-u*S*c-y*o*p+t*S*p+u*o*_-t*d*_)*H,e[7]=(u*x*c-g*d*c+g*o*p-t*x*p-u*o*A+t*d*A)*H,e[8]=C*H,e[9]=(y*v*c-g*M*c-y*r*A+t*M*A+g*r*_-t*v*_)*H,e[10]=(u*M*c-y*h*c+y*r*p-t*M*p-u*r*_+t*h*_)*H,e[11]=(g*h*c-u*v*c-g*r*p+t*v*p+u*r*A-t*h*A)*H,e[12]=z*H,e[13]=(g*M*o-y*v*o+y*r*x-t*M*x-g*r*S+t*v*S)*H,e[14]=(y*h*o-u*M*o-y*r*d+t*M*d+u*r*S-t*h*S)*H,e[15]=(u*v*o-g*h*o+g*r*d-t*v*d-u*r*x+t*h*x)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,c=e.z;return t[0]*=r,t[4]*=o,t[8]*=c,t[1]*=r,t[5]*=o,t[9]*=c,t[2]*=r,t[6]*=o,t[10]*=c,t[3]*=r,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),c=1-r,u=e.x,h=e.y,d=e.z,p=c*u,g=c*h;return this.set(p*u+r,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+r,g*d-o*u,0,p*d-o*h,g*d+o*u,c*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,c=t._x,u=t._y,h=t._z,d=t._w,p=c+c,g=u+u,v=h+h,x=c*p,A=c*g,y=c*v,M=u*g,S=u*v,_=h*v,B=d*p,U=d*g,C=d*v,z=r.x,N=r.y,H=r.z;return o[0]=(1-(M+_))*z,o[1]=(A+C)*z,o[2]=(y-U)*z,o[3]=0,o[4]=(A-C)*N,o[5]=(1-(x+_))*N,o[6]=(S+B)*N,o[7]=0,o[8]=(y+U)*H,o[9]=(S-B)*H,o[10]=(1-(x+M))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let c=ma.set(o[0],o[1],o[2]).length();const u=ma.set(o[4],o[5],o[6]).length(),h=ma.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],bi.copy(this);const p=1/c,g=1/u,v=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,t.setFromRotationMatrix(bi),r.x=c,r.y=u,r.z=h,this}makePerspective(e,t,r,o,c,u,h=hs){const d=this.elements,p=2*c/(t-e),g=2*c/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let A,y;if(h===hs)A=-(u+c)/(u-c),y=-2*u*c/(u-c);else if(h===Oc)A=-u/(u-c),y=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,c,u,h=hs){const d=this.elements,p=1/(t-e),g=1/(r-o),v=1/(u-c),x=(t+e)*p,A=(r+o)*g;let y,M;if(h===hs)y=(u+c)*v,M=-2*v;else if(h===Oc)y=c*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-A,d[2]=0,d[6]=0,d[10]=M,d[14]=-y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ma=new j,bi=new $t,Ey=new j(0,0,0),yy=new j(1,1,1),ks=new j,uc=new j,ti=new j,Qv=new $t,Kv=new Ko;class gs{constructor(e=0,t=0,r=0,o=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],v=o[2],x=o[6],A=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,A),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,A),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,A),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,A),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,A));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let My=0;const Zv=new j,ga=new Ko,os=new $t,fc=new j,zo=new j,Ty=new j,by=new Ko,jv=new j(1,0,0),Jv=new j(0,1,0),$v=new j(0,0,1),e0={type:"added"},Cy={type:"removed"},va={type:"childadded",child:null},ch={type:"childremoved",child:null};class ai extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new j,t=new gs,r=new Ko,o=new j(1,1,1);function c(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new ct}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ga.setFromAxisAngle(e,t),this.quaternion.multiply(ga),this}rotateOnWorldAxis(e,t){return ga.setFromAxisAngle(e,t),this.quaternion.premultiply(ga),this}rotateX(e){return this.rotateOnAxis(jv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis($v,e)}translateOnAxis(e,t){return Zv.copy(e).applyQuaternion(this.quaternion),this.position.add(Zv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis($v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fc.copy(e):fc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(zo,fc,this.up):os.lookAt(fc,zo,this.up),this.quaternion.setFromRotationMatrix(os),o&&(os.extractRotation(o.matrixWorld),ga.setFromRotationMatrix(os),this.quaternion.premultiply(ga.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e0),va.child=e,this.dispatchEvent(va),va.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cy),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e0),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Ty),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,by,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];c(e.shapes,v)}else c(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(e.materials,this.material[d]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(c(e.animations,d))}}if(t){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),v=u(e.shapes),x=u(e.skeletons),A=u(e.animations),y=u(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),A.length>0&&(r.animations=A),y.length>0&&(r.nodes=y)}return r.object=o,r;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ai.DEFAULT_UP=new j(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new j,ls=new j,uh=new j,cs=new j,xa=new j,Aa=new j,t0=new j,fh=new j,hh=new j,dh=new j,ph=new kt,mh=new kt,gh=new kt;class wi{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ci.subVectors(e,t),o.cross(Ci);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,r,o,c){Ci.subVectors(o,t),ls.subVectors(r,t),uh.subVectors(e,t);const u=Ci.dot(Ci),h=Ci.dot(ls),d=Ci.dot(uh),p=ls.dot(ls),g=ls.dot(uh),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,A=(p*d-h*g)*x,y=(u*g-h*d)*x;return c.set(1-A-y,y,A)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,r,o,c,u,h,d){return this.getBarycoord(e,t,r,o,cs)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,cs.x),d.addScaledVector(u,cs.y),d.addScaledVector(h,cs.z),d)}static getInterpolatedAttribute(e,t,r,o,c,u){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,t),mh.fromBufferAttribute(e,r),gh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ph,c.x),u.addScaledVector(mh,c.y),u.addScaledVector(gh,c.z),u}static isFrontFacing(e,t,r,o){return Ci.subVectors(r,t),ls.subVectors(e,t),Ci.cross(ls).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),Ci.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,c){return wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,c=this.c;let u,h;xa.subVectors(o,r),Aa.subVectors(c,r),fh.subVectors(e,r);const d=xa.dot(fh),p=Aa.dot(fh);if(d<=0&&p<=0)return t.copy(r);hh.subVectors(e,o);const g=xa.dot(hh),v=Aa.dot(hh);if(g>=0&&v<=g)return t.copy(o);const x=d*v-g*p;if(x<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(r).addScaledVector(xa,u);dh.subVectors(e,c);const A=xa.dot(dh),y=Aa.dot(dh);if(y>=0&&A<=y)return t.copy(c);const M=A*p-d*y;if(M<=0&&p>=0&&y<=0)return h=p/(p-y),t.copy(r).addScaledVector(Aa,h);const S=g*y-A*v;if(S<=0&&v-g>=0&&A-y>=0)return t0.subVectors(c,o),h=(v-g)/(v-g+(A-y)),t.copy(o).addScaledVector(t0,h);const _=1/(S+M+x);return u=M*_,h=x*_,t.copy(r).addScaledVector(xa,u).addScaledVector(Aa,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xs={h:0,s:0,l:0},hc={h:0,s:0,l:0};function vh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=cy(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,u=2*r-c;this.r=vh(u,c,e+1/3),this.g=vh(u,c,e),this.b=vh(u,c,e-1/3)}return Rt.toWorkingColorSpace(this,o),this}setStyle(e,t=Ft){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(c,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const r=gx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Rt.fromWorkingColorSpace(Ln.copy(this),e),Math.round(vt(Ln.r*255,0,255))*65536+Math.round(vt(Ln.g*255,0,255))*256+Math.round(vt(Ln.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,c=Ln.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case r:d=(o-c)/v+(o<c?6:0);break;case o:d=(c-r)/v+2;break;case c:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Ft){Rt.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xs),this.setHSL(Xs.h+e,Xs.s+t,Xs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xs),e.getHSL(hc);const r=eh(Xs.h,hc.h,t),o=eh(Xs.s,hc.s,t),c=eh(Xs.l,hc.l,t);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*o,this.g=c[1]*t+c[4]*r+c[7]*o,this.b=c[2]*t+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new pt;pt.NAMES=gx;let wy=0;class Ia extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=wa,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Nh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wa&&(r.blending=this.blending),this.side!==ms&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ph&&(r.blendSrc=this.blendSrc),this.blendDst!==Nh&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(t){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vx extends Ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new j,dc=new Pe;let Ry=0;class oi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ry++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Vv,this.updateRanges=[],this.gpuType=fs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=No(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=No(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=No(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=No(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,c){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array),c=Qn(c,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vv&&(e.usage=this.usage),e}}class xx extends oi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ax extends oi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Hi extends oi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Dy=0;const xi=new $t,xh=new ai,_a=new j,ni=new Zo,Ho=new Zo,An=new j;class Gi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hx(e)?Ax:xx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,r){return xi.makeTranslation(e,t,r),this.applyMatrix4(xi),this}scale(e,t,r){return xi.makeScale(e,t,r),this.applyMatrix4(xi),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Hi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const c=e[o];t.setXYZ(o,c.x,c.y,c.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Od);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let c=0,u=t.length;c<u;c++){const h=t[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(ni.min,Ho.min),ni.expandByPoint(An),An.addVectors(ni.max,Ho.max),ni.expandByPoint(An)):(ni.expandByPoint(Ho.min),ni.expandByPoint(Ho.max))}ni.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)An.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(An));if(t)for(let c=0,u=t.length;c<u;c++){const h=t[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)An.fromBufferAttribute(h,p),d&&(_a.fromBufferAttribute(e,p),An.add(_a)),o=Math.max(o,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let Y=0;Y<r.count;Y++)h[Y]=new j,d[Y]=new j;const p=new j,g=new j,v=new j,x=new Pe,A=new Pe,y=new Pe,M=new j,S=new j;function _(Y,w,T){p.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,T),x.fromBufferAttribute(c,Y),A.fromBufferAttribute(c,w),y.fromBufferAttribute(c,T),g.sub(p),v.sub(p),A.sub(x),y.sub(x);const G=1/(A.x*y.y-y.x*A.y);isFinite(G)&&(M.copy(g).multiplyScalar(y.y).addScaledVector(v,-A.y).multiplyScalar(G),S.copy(v).multiplyScalar(A.x).addScaledVector(g,-y.x).multiplyScalar(G),h[Y].add(M),h[w].add(M),h[T].add(M),d[Y].add(S),d[w].add(S),d[T].add(S))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let Y=0,w=B.length;Y<w;++Y){const T=B[Y],G=T.start,le=T.count;for(let W=G,P=G+le;W<P;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const U=new j,C=new j,z=new j,N=new j;function H(Y){z.fromBufferAttribute(o,Y),N.copy(z);const w=h[Y];U.copy(w),U.sub(z.multiplyScalar(z.dot(w))).normalize(),C.crossVectors(N,w);const G=C.dot(d[Y])<0?-1:1;u.setXYZW(Y,U.x,U.y,U.z,G)}for(let Y=0,w=B.length;Y<w;++Y){const T=B[Y],G=T.start,le=T.count;for(let W=G,P=G+le;W<P;W+=3)H(e.getX(W+0)),H(e.getX(W+1)),H(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,A=r.count;x<A;x++)r.setXYZ(x,0,0,0);const o=new j,c=new j,u=new j,h=new j,d=new j,p=new j,g=new j,v=new j;if(e)for(let x=0,A=e.count;x<A;x+=3){const y=e.getX(x+0),M=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,y),c.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,S),h.add(g),d.add(g),p.add(g),r.setXYZ(y,h.x,h.y,h.z),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,A=t.count;x<A;x+=3)o.fromBufferAttribute(t,x+0),c.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(d.length*g);let A=0,y=0;for(let M=0,S=d.length;M<S;M++){h.isInterleavedBufferAttribute?A=d[M]*h.data.stride+h.offset:A=d[M]*g;for(let _=0;_<g;_++)x[y++]=p[A++]}return new oi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gi,r=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=e(d,r);t.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],A=e(x,r);d.push(A)}t.morphAttributes[h]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,x=p.length;v<x;v++){const A=p[v];g.push(A.toJSON(e.data))}g.length>0&&(o[d]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,A=v.length;x<A;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n0=new $t,Ar=new Sy,pc=new Od,i0=new j,mc=new j,gc=new j,vc=new j,Ah=new j,xc=new j,s0=new j,Ac=new j;class si extends ai{constructor(e=new Gi,t=new vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){xc.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],v=c[d];g!==0&&(Ah.fromBufferAttribute(v,e),u?xc.addScaledVector(Ah,g):xc.addScaledVector(Ah.sub(t),g))}t.add(xc)}return t}raycast(e,t){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(c),Ar.copy(e.ray).recast(e.near),!(pc.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(pc,i0)===null||Ar.origin.distanceToSquared(i0)>(e.far-e.near)**2))&&(n0.copy(c).invert(),Ar.copy(e.ray).applyMatrix4(n0),!(r.boundingBox!==null&&Ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,r){let o;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,A=c.drawRange;if(h!==null)if(Array.isArray(u))for(let y=0,M=x.length;y<M;y++){const S=x[y],_=u[S.materialIndex],B=Math.max(S.start,A.start),U=Math.min(h.count,Math.min(S.start+S.count,A.start+A.count));for(let C=B,z=U;C<z;C+=3){const N=h.getX(C),H=h.getX(C+1),Y=h.getX(C+2);o=_c(this,_,e,r,p,g,v,N,H,Y),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const y=Math.max(0,A.start),M=Math.min(h.count,A.start+A.count);for(let S=y,_=M;S<_;S+=3){const B=h.getX(S),U=h.getX(S+1),C=h.getX(S+2);o=_c(this,u,e,r,p,g,v,B,U,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let y=0,M=x.length;y<M;y++){const S=x[y],_=u[S.materialIndex],B=Math.max(S.start,A.start),U=Math.min(d.count,Math.min(S.start+S.count,A.start+A.count));for(let C=B,z=U;C<z;C+=3){const N=C,H=C+1,Y=C+2;o=_c(this,_,e,r,p,g,v,N,H,Y),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const y=Math.max(0,A.start),M=Math.min(d.count,A.start+A.count);for(let S=y,_=M;S<_;S+=3){const B=S,U=S+1,C=S+2;o=_c(this,u,e,r,p,g,v,B,U,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Uy(i,e,t,r,o,c,u,h){let d;if(e.side===_n?d=r.intersectTriangle(u,c,o,!0,h):d=r.intersectTriangle(o,c,u,e.side===ms,h),d===null)return null;Ac.copy(h),Ac.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Ac);return p<t.near||p>t.far?null:{distance:p,point:Ac.clone(),object:i}}function _c(i,e,t,r,o,c,u,h,d,p){i.getVertexPosition(h,mc),i.getVertexPosition(d,gc),i.getVertexPosition(p,vc);const g=Uy(i,e,t,r,mc,gc,vc,s0);if(g){const v=new j;wi.getBarycoord(s0,mc,gc,vc,v),o&&(g.uv=wi.getInterpolatedAttribute(o,h,d,p,v,new Pe)),c&&(g.uv1=wi.getInterpolatedAttribute(c,h,d,p,v,new Pe)),u&&(g.normal=wi.getInterpolatedAttribute(u,h,d,p,v,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:d,c:p,normal:new j,materialIndex:0};wi.getNormal(mc,gc,vc,x.normal),g.face=x,g.barycoord=v}return g}class jo extends Gi{constructor(e=1,t=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],v=[];let x=0,A=0;y("z","y","x",-1,-1,r,t,e,u,c,0),y("z","y","x",1,-1,r,t,-e,u,c,1),y("x","z","y",1,1,e,r,t,o,u,2),y("x","z","y",1,-1,e,r,-t,o,u,3),y("x","y","z",1,-1,e,t,r,o,c,4),y("x","y","z",-1,-1,e,t,-r,o,c,5),this.setIndex(d),this.setAttribute("position",new Hi(p,3)),this.setAttribute("normal",new Hi(g,3)),this.setAttribute("uv",new Hi(v,2));function y(M,S,_,B,U,C,z,N,H,Y,w){const T=C/H,G=z/Y,le=C/2,W=z/2,P=N/2,Q=H+1,F=Y+1;let X=0,k=0;const fe=new j;for(let L=0;L<F;L++){const ne=L*G-W;for(let me=0;me<Q;me++){const ye=me*T-le;fe[M]=ye*B,fe[S]=ne*U,fe[_]=P,p.push(fe.x,fe.y,fe.z),fe[M]=0,fe[S]=0,fe[_]=N>0?1:-1,g.push(fe.x,fe.y,fe.z),v.push(me/H),v.push(1-L/Y),X+=1}}for(let L=0;L<Y;L++)for(let ne=0;ne<H;ne++){const me=x+ne+Q*L,ye=x+ne+Q*(L+1),Z=x+(ne+1)+Q*(L+1),ce=x+(ne+1)+Q*L;d.push(me,ye,ce),d.push(ye,Z,ce),k+=6}h.addGroup(A,k,w),A+=k,x+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oa(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Vn(i){const e={};for(let t=0;t<i.length;t++){const r=Oa(i[t]);for(const o in r)e[o]=r[o]}return e}function Ly(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _x(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const By={clone:Oa,merge:Vn};var Oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oy,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=Ly(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Pd extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=hs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ws=new j,r0=new Pe,a0=new Pe;class ii extends Pd{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ws.x,Ws.y).multiplyScalar(-e/Ws.z),Ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ws.x,Ws.y).multiplyScalar(-e/Ws.z)}getViewSize(e,t){return this.getViewBounds(e,r0,a0),t.subVectors(a0,r0)}setViewOffset(e,t,r,o,c,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($f*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/d,t-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sa=-90,Ea=1;class Ny extends ai{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Sa,Ea,e,t);o.layers=this.layers,this.add(o);const c=new ii(Sa,Ea,e,t);c.layers=this.layers,this.add(c);const u=new ii(Sa,Ea,e,t);u.layers=this.layers,this.add(u);const h=new ii(Sa,Ea,e,t);h.layers=this.layers,this.add(h);const d=new ii(Sa,Ea,e,t);d.layers=this.layers,this.add(d);const p=new ii(Sa,Ea,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,c,u,h,d]=t;for(const p of t)this.remove(p);if(e===hs)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Oc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,c),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,h),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(v,x,A),e.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class Sx extends Sn{constructor(e,t,r,o,c,u,h,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:La,super(e,t,r,o,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Iy extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Sx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new jo(5,5,5),c=new an({name:"CubemapFromEquirect",uniforms:Oa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:_n,blending:On});c.uniforms.tEquirect.value=t;const u=new si(o,c),h=t.minFilter;return t.minFilter===wr&&(t.minFilter=Bn),new Ny(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(c)}}class Sc extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fy={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,r),_=this._getHandJoint(p,M);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),A=.02,y=.005;p.inputState.pinching&&x>A+y?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=A-y&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Sc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Nd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new pt(e),this.near=t,this.far=r}clone(){return new Nd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sd extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ya extends oi{constructor(e,t,r,o=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sh=new j,zy=new j,Hy=new ct;class yr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Sh.subVectors(r,t).cross(zy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Sh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:t.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Hy.getNormalMatrix(e),o=this.coplanarPoint(Sh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Od,Ec=new j;class Ex{constructor(e=new yr,t=new yr,r=new yr,o=new yr,c=new yr,u=new yr){this.planes=[e,t,r,o,c,u]}set(e,t,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=hs){const r=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],d=o[3],p=o[4],g=o[5],v=o[6],x=o[7],A=o[8],y=o[9],M=o[10],S=o[11],_=o[12],B=o[13],U=o[14],C=o[15];if(r[0].setComponents(d-c,x-p,S-A,C-_).normalize(),r[1].setComponents(d+c,x+p,S+A,C+_).normalize(),r[2].setComponents(d+u,x+g,S+y,C+B).normalize(),r[3].setComponents(d-u,x-g,S-y,C-B).normalize(),r[4].setComponents(d-h,x-v,S-M,C-U).normalize(),t===hs)r[5].setComponents(d+h,x+v,S+M,C+U).normalize();else if(t===Oc)r[5].setComponents(h,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ec.x=o.normal.x>0?e.max.x:e.min.x,Ec.y=o.normal.y>0?e.max.y:e.min.y,Ec.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Id extends Sn{constructor(e,t,r,o,c,u,h,d,p,g=Ra){if(g!==Ra&&g!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ra&&(r=Ks),r===void 0&&g===Dr&&(r=Rr),super(null,o,c,u,h,d,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:ri,this.minFilter=d!==void 0?d:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),c=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),t.push(c),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const c=r.length;let u;t?u=t:u=e*r[c-1];let h=0,d=c-1,p;for(;h<=d;)if(o=Math.floor(h+(d-h)/2),p=r[o]-u,p<0)h=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,r[o]===u)return o/(c-1);const g=r[o],x=r[o+1]-g,A=(u-g)/x;return(o+A)/(c-1)}getTangent(e,t){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),d=t||(u.isVector2?new Pe:new j);return d.copy(h).sub(u).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new j,o=[],c=[],u=[],h=new j,d=new $t;for(let A=0;A<=e;A++){const y=A/e;o[A]=this.getTangentAt(y,new j)}c[0]=new j,u[0]=new j;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),x=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),x<=p&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let A=1;A<=e;A++){if(c[A]=c[A-1].clone(),u[A]=u[A-1].clone(),h.crossVectors(o[A-1],o[A]),h.length()>Number.EPSILON){h.normalize();const y=Math.acos(vt(o[A-1].dot(o[A]),-1,1));c[A].applyMatrix4(d.makeRotationAxis(h,y))}u[A].crossVectors(o[A],c[A])}if(t===!0){let A=Math.acos(vt(c[0].dot(c[e]),-1,1));A/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(A=-A);for(let y=1;y<=e;y++)c[y].applyMatrix4(d.makeRotationAxis(o[y],A*y)),u[y].crossVectors(o[y],c[y])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yx extends xs{constructor(e=0,t=0,r=1,o=1,c=0,u=Math.PI*2,h=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=d}getPoint(e,t=new Pe){const r=t,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+e*c;let d=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=d-this.aX,A=p-this.aY;d=x*g-A*v+this.aX,p=x*v+A*g+this.aY}return r.set(d,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gy extends yx{constructor(e,t,r,o,c,u){super(e,t,r,r,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let i=0,e=0,t=0,r=0;function o(c,u,h,d){i=c,e=h,t=-3*c+3*u-2*h-d,r=2*c-2*u+h+d}return{initCatmullRom:function(c,u,h,d,p){o(u,h,p*(h-c),p*(d-u))},initNonuniformCatmullRom:function(c,u,h,d,p,g,v){let x=(u-c)/p-(h-c)/(p+g)+(h-u)/g,A=(h-u)/g-(d-u)/(g+v)+(d-h)/v;x*=g,A*=g,o(u,h,x,A)},calc:function(c){const u=c*c,h=u*c;return i+e*c+t*u+r*h}}}const yc=new j,Eh=new Fd,yh=new Fd,Mh=new Fd;class Vy extends xs{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new j){const r=t,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),d=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:d===0&&h===c-1&&(h=c-2,d=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(yc.subVectors(o[0],o[1]).add(o[0]),p=yc);const v=o[h%c],x=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(yc.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=yc),this.curveType==="centripetal"||this.curveType==="chordal"){const A=this.curveType==="chordal"?.5:.25;let y=Math.pow(p.distanceToSquared(v),A),M=Math.pow(v.distanceToSquared(x),A),S=Math.pow(x.distanceToSquared(g),A);M<1e-4&&(M=1),y<1e-4&&(y=M),S<1e-4&&(S=M),Eh.initNonuniformCatmullRom(p.x,v.x,x.x,g.x,y,M,S),yh.initNonuniformCatmullRom(p.y,v.y,x.y,g.y,y,M,S),Mh.initNonuniformCatmullRom(p.z,v.z,x.z,g.z,y,M,S)}else this.curveType==="catmullrom"&&(Eh.initCatmullRom(p.x,v.x,x.x,g.x,this.tension),yh.initCatmullRom(p.y,v.y,x.y,g.y,this.tension),Mh.initCatmullRom(p.z,v.z,x.z,g.z,this.tension));return r.set(Eh.calc(d),yh.calc(d),Mh.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new j().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function o0(i,e,t,r,o){const c=(r-e)*.5,u=(o-t)*.5,h=i*i,d=i*h;return(2*t-2*r+c+u)*d+(-3*t+3*r-2*c-u)*h+c*i+t}function ky(i,e){const t=1-i;return t*t*e}function Xy(i,e){return 2*(1-i)*i*e}function Wy(i,e){return i*i*e}function Xo(i,e,t,r){return ky(i,e)+Xy(i,t)+Wy(i,r)}function Yy(i,e){const t=1-i;return t*t*t*e}function qy(i,e){const t=1-i;return 3*t*t*i*e}function Qy(i,e){return 3*(1-i)*i*i*e}function Ky(i,e){return i*i*i*e}function Wo(i,e,t,r,o){return Yy(i,e)+qy(i,t)+Qy(i,r)+Ky(i,o)}class Zy extends xs{constructor(e=new Pe,t=new Pe,r=new Pe,o=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Pe){const r=t,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return r.set(Wo(e,o.x,c.x,u.x,h.x),Wo(e,o.y,c.y,u.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jy extends xs{constructor(e=new j,t=new j,r=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new j){const r=t,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return r.set(Wo(e,o.x,c.x,u.x,h.x),Wo(e,o.y,c.y,u.y,h.y),Wo(e,o.z,c.z,u.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jy extends xs{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mx extends xs{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $y extends xs{constructor(e=new Pe,t=new Pe,r=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Pe){const r=t,o=this.v0,c=this.v1,u=this.v2;return r.set(Xo(e,o.x,c.x,u.x),Xo(e,o.y,c.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tx extends xs{constructor(e=new j,t=new j,r=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new j){const r=t,o=this.v0,c=this.v1,u=this.v2;return r.set(Xo(e,o.x,c.x,u.x),Xo(e,o.y,c.y,u.y),Xo(e,o.z,c.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eM extends xs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const r=t,o=this.points,c=(o.length-1)*e,u=Math.floor(c),h=c-u,d=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return r.set(o0(h,d.x,p.x,g.x,v.x),o0(h,d.y,p.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Pe().fromArray(o))}return this}}var tM=Object.freeze({__proto__:null,ArcCurve:Gy,CatmullRomCurve3:Vy,CubicBezierCurve:Zy,CubicBezierCurve3:jy,EllipseCurve:yx,LineCurve:Jy,LineCurve3:Mx,QuadraticBezierCurve:$y,QuadraticBezierCurve3:Tx,SplineCurve:eM});class Pa extends Gi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const c=e/2,u=t/2,h=Math.floor(r),d=Math.floor(o),p=h+1,g=d+1,v=e/h,x=t/d,A=[],y=[],M=[],S=[];for(let _=0;_<g;_++){const B=_*x-u;for(let U=0;U<p;U++){const C=U*v-c;y.push(C,-B,0),M.push(0,0,1),S.push(U/h),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let B=0;B<h;B++){const U=B+p*_,C=B+p*(_+1),z=B+1+p*(_+1),N=B+1+p*_;A.push(U,C,N),A.push(C,z,N)}this.setIndex(A),this.setAttribute("position",new Hi(y,3)),this.setAttribute("normal",new Hi(M,3)),this.setAttribute("uv",new Hi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class zd extends Gi{constructor(e=new Tx(new j(-1,-1,0),new j(-1,1,0),new j(1,1,0)),t=64,r=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:c};const u=e.computeFrenetFrames(t,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new j,d=new j,p=new Pe;let g=new j;const v=[],x=[],A=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new Hi(v,3)),this.setAttribute("normal",new Hi(x,3)),this.setAttribute("uv",new Hi(A,2));function M(){for(let U=0;U<t;U++)S(U);S(c===!1?t:0),B(),_()}function S(U){g=e.getPointAt(U/t,g);const C=u.normals[U],z=u.binormals[U];for(let N=0;N<=o;N++){const H=N/o*Math.PI*2,Y=Math.sin(H),w=-Math.cos(H);d.x=w*C.x+Y*z.x,d.y=w*C.y+Y*z.y,d.z=w*C.z+Y*z.z,d.normalize(),x.push(d.x,d.y,d.z),h.x=g.x+r*d.x,h.y=g.y+r*d.y,h.z=g.z+r*d.z,v.push(h.x,h.y,h.z)}}function _(){for(let U=1;U<=t;U++)for(let C=1;C<=o;C++){const z=(o+1)*(U-1)+(C-1),N=(o+1)*U+(C-1),H=(o+1)*U+C,Y=(o+1)*(U-1)+C;y.push(z,N,Y),y.push(N,H,Y)}}function B(){for(let U=0;U<=t;U++)for(let C=0;C<=o;C++)p.x=U/t,p.y=C/o,A.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zd(new tM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class nM extends Ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ur,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends Ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bx{constructor(e,t,r){const o=this;let c=!1,u=0,h=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const A=p[v],y=p[v+1];if(A.global&&(A.lastIndex=0),A.test(g))return y}return null}}}class sM extends Pd{constructor(e=-1,t=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class l0 extends Gi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class rM extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class aM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=c0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=c0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function c0(){return performance.now()}class ft{constructor(e){this.value=e}clone(){return new ft(this.value.clone===void 0?this.value:this.value.clone())}}function u0(i,e,t,r){const o=oM(r);switch(t){case sx:return i*e;case ax:return i*e;case ox:return i*e*2;case lx:return i*e/o.components*o.byteLength;case Ud:return i*e/o.components*o.byteLength;case cx:return i*e*2/o.components*o.byteLength;case Ld:return i*e*2/o.components*o.byteLength;case rx:return i*e*3/o.components*o.byteLength;case Ri:return i*e*4/o.components*o.byteLength;case Bd:return i*e*4/o.components*o.byteLength;case Cc:case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kh:case jh:return Math.max(i,16)*Math.max(e,8)/4;case Qh:case Zh:return Math.max(i,8)*Math.max(e,8)/2;case Jh:case $h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ed:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case id:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ad:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ld:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ud:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uc:case md:case gd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ux:case vd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xd:case Ad:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oM(i){switch(i){case Cn:case tx:return{byteLength:1,components:1};case Yo:case nx:case qo:return{byteLength:2,components:1};case Rd:case Dd:return{byteLength:2,components:4};case Ks:case wd:case fs:return{byteLength:4,components:1};case ix:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cx(){let i=null,e=!1,t=null,r=null;function o(c,u){t(c,u),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function lM(i){const e=new WeakMap;function t(h,d){const p=h.array,g=h.usage,v=p.byteLength,x=i.createBuffer();i.bindBuffer(d,x),i.bufferData(d,p,g),h.onUploadCallback();let A;if(p instanceof Float32Array)A=i.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?A=i.HALF_FLOAT:A=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)A=i.SHORT;else if(p instanceof Uint32Array)A=i.UNSIGNED_INT;else if(p instanceof Int32Array)A=i.INT;else if(p instanceof Int8Array)A=i.BYTE;else if(p instanceof Uint8Array)A=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)A=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:A,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,d,p){const g=d.array,v=d.updateRanges;if(i.bindBuffer(p,h),v.length===0)i.bufferSubData(p,0,g);else{v.sort((A,y)=>A.start-y.start);let x=0;for(let A=1;A<v.length;A++){const y=v[x],M=v[A];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++x,v[x]=M)}v.length=x+1;for(let A=0,y=v.length;A<y;A++){const M=v[A];i.bufferSubData(p,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(i.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:o,remove:c,update:u}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:fM,alphamap_pars_fragment:hM,alphatest_fragment:dM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:vM,batching_vertex:xM,begin_vertex:AM,beginnormal_vertex:_M,bsdfs:SM,iridescence_fragment:EM,bumpmap_pars_fragment:yM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:CM,color_fragment:wM,color_pars_fragment:RM,color_pars_vertex:DM,color_vertex:UM,common:LM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:OM,displacementmap_pars_vertex:PM,displacementmap_vertex:NM,emissivemap_fragment:IM,emissivemap_pars_fragment:FM,colorspace_fragment:zM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:kM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:t1,envmap_vertex:WM,fog_vertex:YM,fog_pars_vertex:qM,fog_fragment:QM,fog_pars_fragment:KM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:jM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:$M,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:s1,lights_phong_pars_fragment:r1,lights_physical_fragment:a1,lights_physical_pars_fragment:o1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:v1,map_particle_pars_fragment:x1,metalnessmap_fragment:A1,metalnessmap_pars_fragment:_1,morphinstance_vertex:S1,morphcolor_vertex:E1,morphnormal_vertex:y1,morphtarget_pars_vertex:M1,morphtarget_vertex:T1,normal_fragment_begin:b1,normal_fragment_maps:C1,normal_pars_fragment:w1,normal_pars_vertex:R1,normal_vertex:D1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:P1,opaque_fragment:N1,packing:I1,premultiplied_alpha_fragment:F1,project_vertex:z1,dithering_fragment:H1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:W1,shadowmap_vertex:Y1,shadowmask_pars_fragment:q1,skinbase_vertex:Q1,skinning_pars_vertex:K1,skinning_vertex:Z1,skinnormal_vertex:j1,specularmap_fragment:J1,specularmap_pars_fragment:$1,tonemapping_fragment:eT,tonemapping_pars_fragment:tT,transmission_fragment:nT,transmission_pars_fragment:iT,uv_pars_fragment:sT,uv_pars_vertex:rT,uv_vertex:aT,worldpos_vertex:oT,background_vert:lT,background_frag:cT,backgroundCube_vert:uT,backgroundCube_frag:fT,cube_vert:hT,cube_frag:dT,depth_vert:pT,depth_frag:mT,distanceRGBA_vert:gT,distanceRGBA_frag:vT,equirect_vert:xT,equirect_frag:AT,linedashed_vert:_T,linedashed_frag:ST,meshbasic_vert:ET,meshbasic_frag:yT,meshlambert_vert:MT,meshlambert_frag:TT,meshmatcap_vert:bT,meshmatcap_frag:CT,meshnormal_vert:wT,meshnormal_frag:RT,meshphong_vert:DT,meshphong_frag:UT,meshphysical_vert:LT,meshphysical_frag:BT,meshtoon_vert:OT,meshtoon_frag:PT,points_vert:NT,points_frag:IT,shadow_vert:FT,shadow_frag:zT,sprite_vert:HT,sprite_frag:GT},Le={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ii={basic:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new pt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Vn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Vn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new pt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Vn([Le.points,Le.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Vn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Vn([Le.common,Le.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Vn([Le.sprite,Le.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Vn([Le.common,Le.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Vn([Le.lights,Le.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ii.physical={uniforms:Vn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Mc={r:0,b:0,g:0},Sr=new gs,VT=new $t;function kT(i,e,t,r,o,c,u){const h=new pt(0);let d=c===!0?0:1,p,g,v=null,x=0,A=null;function y(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?t:e).get(C)),C}function M(U){let C=!1;const z=y(U);z===null?_(h,d):z&&z.isColor&&(_(z,1),C=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(i.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(U,C){const z=y(C);z&&(z.isCubeTexture||z.mapping===Ic)?(g===void 0&&(g=new si(new jo(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Oa(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,H,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Sr.copy(C.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(VT.makeRotationFromEuler(Sr)),g.material.toneMapped=Rt.getTransfer(z.colorSpace)!==It,(v!==z||x!==z.version||A!==i.toneMapping)&&(g.material.needsUpdate=!0,v=z,x=z.version,A=i.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new si(new Pa(2,2),new an({name:"BackgroundMaterial",uniforms:Oa(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==It,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||x!==z.version||A!==i.toneMapping)&&(p.material.needsUpdate=!0,v=z,x=z.version,A=i.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,C){U.getRGB(Mc,_x(i)),r.buffers.color.setClear(Mc.r,Mc.g,Mc.b,C,u)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),d=C,_(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,_(h,d)},render:M,addToRenderList:S,dispose:B}}function XT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,u=!1;function h(T,G,le,W,P){let Q=!1;const F=v(W,le,G);c!==F&&(c=F,p(c.object)),Q=A(T,W,le,P),Q&&y(T,W,le,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,C(T,G,le,W),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function d(){return i.createVertexArray()}function p(T){return i.bindVertexArray(T)}function g(T){return i.deleteVertexArray(T)}function v(T,G,le){const W=le.wireframe===!0;let P=r[T.id];P===void 0&&(P={},r[T.id]=P);let Q=P[G.id];Q===void 0&&(Q={},P[G.id]=Q);let F=Q[W];return F===void 0&&(F=x(d()),Q[W]=F),F}function x(T){const G=[],le=[],W=[];for(let P=0;P<t;P++)G[P]=0,le[P]=0,W[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:W,object:T,attributes:{},index:null}}function A(T,G,le,W){const P=c.attributes,Q=G.attributes;let F=0;const X=le.getAttributes();for(const k in X)if(X[k].location>=0){const L=P[k];let ne=Q[k];if(ne===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),L===void 0||L.attribute!==ne||ne&&L.data!==ne.data)return!0;F++}return c.attributesNum!==F||c.index!==W}function y(T,G,le,W){const P={},Q=G.attributes;let F=0;const X=le.getAttributes();for(const k in X)if(X[k].location>=0){let L=Q[k];L===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(L=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(L=T.instanceColor));const ne={};ne.attribute=L,L&&L.data&&(ne.data=L.data),P[k]=ne,F++}c.attributes=P,c.attributesNum=F,c.index=W}function M(){const T=c.newAttributes;for(let G=0,le=T.length;G<le;G++)T[G]=0}function S(T){_(T,0)}function _(T,G){const le=c.newAttributes,W=c.enabledAttributes,P=c.attributeDivisors;le[T]=1,W[T]===0&&(i.enableVertexAttribArray(T),W[T]=1),P[T]!==G&&(i.vertexAttribDivisor(T,G),P[T]=G)}function B(){const T=c.newAttributes,G=c.enabledAttributes;for(let le=0,W=G.length;le<W;le++)G[le]!==T[le]&&(i.disableVertexAttribArray(le),G[le]=0)}function U(T,G,le,W,P,Q,F){F===!0?i.vertexAttribIPointer(T,G,le,P,Q):i.vertexAttribPointer(T,G,le,W,P,Q)}function C(T,G,le,W){M();const P=W.attributes,Q=le.getAttributes(),F=G.defaultAttributeValues;for(const X in Q){const k=Q[X];if(k.location>=0){let fe=P[X];if(fe===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(fe=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(fe=T.instanceColor)),fe!==void 0){const L=fe.normalized,ne=fe.itemSize,me=e.get(fe);if(me===void 0)continue;const ye=me.buffer,Z=me.type,ce=me.bytesPerElement,Ae=Z===i.INT||Z===i.UNSIGNED_INT||fe.gpuType===wd;if(fe.isInterleavedBufferAttribute){const Me=fe.data,be=Me.stride,je=fe.offset;if(Me.isInstancedInterleavedBuffer){for(let De=0;De<k.locationSize;De++)_(k.location+De,Me.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let De=0;De<k.locationSize;De++)S(k.location+De);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let De=0;De<k.locationSize;De++)U(k.location+De,ne/k.locationSize,Z,L,be*ce,(je+ne/k.locationSize*De)*ce,Ae)}else{if(fe.isInstancedBufferAttribute){for(let Me=0;Me<k.locationSize;Me++)_(k.location+Me,fe.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<k.locationSize;Me++)S(k.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Me=0;Me<k.locationSize;Me++)U(k.location+Me,ne/k.locationSize,Z,L,ne*ce,ne/k.locationSize*Me*ce,Ae)}}else if(F!==void 0){const L=F[X];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(k.location,L);break;case 3:i.vertexAttrib3fv(k.location,L);break;case 4:i.vertexAttrib4fv(k.location,L);break;default:i.vertexAttrib1fv(k.location,L)}}}}B()}function z(){Y();for(const T in r){const G=r[T];for(const le in G){const W=G[le];for(const P in W)g(W[P].object),delete W[P];delete G[le]}delete r[T]}}function N(T){if(r[T.id]===void 0)return;const G=r[T.id];for(const le in G){const W=G[le];for(const P in W)g(W[P].object),delete W[P];delete G[le]}delete r[T.id]}function H(T){for(const G in r){const le=r[G];if(le[T.id]===void 0)continue;const W=le[T.id];for(const P in W)g(W[P].object),delete W[P];delete le[T.id]}}function Y(){w(),u=!0,c!==o&&(c=o,p(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfProgram:H,initAttributes:M,enableAttribute:S,disableUnusedAttributes:B}}function WT(i,e,t){let r;function o(p){r=p}function c(p,g){i.drawArrays(r,p,g),t.update(g,r,1)}function u(p,g,v){v!==0&&(i.drawArraysInstanced(r,p,g,v),t.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let A=0;for(let y=0;y<v;y++)A+=g[y];t.update(A,r,1)}function d(p,g,v,x){if(v===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let y=0;y<p.length;y++)u(p[y],g[y],x[y]);else{A.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let y=0;for(let M=0;M<v;M++)y+=g[M]*x[M];t.update(y,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function YT(i,e,t,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==Ri&&r.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const Y=H===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Cn&&r.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==fs&&!Y)}function d(H){if(H==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),A=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=y>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:A,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:B,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:z,maxSamples:N}}function qT(i){const e=this;let t=null,r=0,o=!1,c=!1;const u=new yr,h=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const A=v.length!==0||x||r!==0||o;return o=x,r=v.length,A},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,A){const y=v.clippingPlanes,M=v.clipIntersection,S=v.clipShadows,_=i.get(v);if(!o||y===null||y.length===0||c&&!S)c?g(null):p();else{const B=c?0:r,U=B*4;let C=_.clippingState||null;d.value=C,C=g(y,x,U,A);for(let z=0;z!==U;++z)C[z]=t[z];_.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=B}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,A,y){const M=v!==null?v.length:0;let S=null;if(M!==0){if(S=d.value,y!==!0||S===null){const _=A+M*4,B=x.matrixWorldInverse;h.getNormalMatrix(B),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,C=A;U!==M;++U,C+=4)u.copy(v[U]).applyMatrix4(B,h),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function QT(i){let e=new WeakMap;function t(u,h){return h===Xh?u.mapping=La:h===Wh&&(u.mapping=Ba),u}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===Xh||h===Wh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new Iy(d.height);return p.fromEquirectangularTexture(i,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ca=4,f0=[.125,.215,.35,.446,.526,.582],br=20,Th=new sM,h0=new pt;let bh=null,Ch=0,wh=0,Rh=!1;const Mr=(1+Math.sqrt(5))/2,Ma=1/Mr,d0=[new j(-Mr,Ma,0),new j(Mr,Ma,0),new j(-Ma,0,Mr),new j(Ma,0,Mr),new j(0,Mr,-Ma),new j(0,Mr,Ma),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class p0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){bh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Ch,wh),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===La||e.mapping===Ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:qo,format:Ri,colorSpace:Zs,depthBuffer:!1},o=m0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(e,t,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KT(c)),this._blurMaterial=ZT(c,e,t)}return o}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,Th)}_sceneToCubeUV(e,t,r,o){const h=new ii(90,1,t,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(h0),g.toneMapping=Qs,g.autoClear=!1;const A=new vx({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),y=new si(new jo,A);let M=!1;const S=e.background;S?S.isColor&&(A.color.copy(S),e.background=null,M=!0):(A.color.copy(h0),M=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(h.up.set(0,d[_],0),h.lookAt(p[_],0,0)):B===1?(h.up.set(0,0,d[_]),h.lookAt(0,p[_],0)):(h.up.set(0,d[_],0),h.lookAt(0,0,p[_]));const U=this._cubeSize;Tc(o,B*U,_>2?U:0,U,U),g.setRenderTarget(o),M&&g.render(y,h),g.render(e,h)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===La||e.mapping===Ba;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new si(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const d=this._cubeSize;Tc(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Th)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=d0[(o-c-1)%d0.length];this._blur(e,c-1,c,u,h)}t.autoClear=r}_blur(e,t,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,t,r,o,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new si(this._lodPlanes[o],p),x=p.uniforms,A=this._sizeLods[r]-1,y=isFinite(c)?Math.PI/(2*A):2*Math.PI/(2*br-1),M=c/y,S=isFinite(c)?1+Math.floor(g*M):br;S>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${br}`);const _=[];let B=0;for(let H=0;H<br;++H){const Y=H/M,w=Math.exp(-Y*Y/2);_.push(w),H===0?B+=w:H<S&&(B+=2*w)}for(let H=0;H<_.length;H++)_[H]=_[H]/B;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=u==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=y,x.mipInt.value=U-r;const C=this._sizeLods[o],z=3*C*(o>U-Ca?o-U+Ca:0),N=4*(this._cubeSize-C);Tc(t,z,N,3*C,2*C),d.setRenderTarget(t),d.render(v,Th)}}function KT(i){const e=[],t=[],r=[];let o=i;const c=i-Ca+1+f0.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let d=1/h;u>i-Ca?d=f0[u-i+Ca-1]:u===0&&(d=0),r.push(d);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],A=6,y=6,M=3,S=2,_=1,B=new Float32Array(M*y*A),U=new Float32Array(S*y*A),C=new Float32Array(_*y*A);for(let N=0;N<A;N++){const H=N%3*2/3-1,Y=N>2?0:-1,w=[H,Y,0,H+2/3,Y,0,H+2/3,Y+1,0,H,Y,0,H+2/3,Y+1,0,H,Y+1,0];B.set(w,M*y*N),U.set(x,S*y*N);const T=[N,N,N,N,N,N];C.set(T,_*y*N)}const z=new Gi;z.setAttribute("position",new oi(B,M)),z.setAttribute("uv",new oi(U,S)),z.setAttribute("faceIndex",new oi(C,_)),e.push(z),o>Ca&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function m0(i,e,t){const r=new Pn(i,e,t);return r.texture.mapping=Ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tc(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function ZT(i,e,t){const r=new Float32Array(br),o=new j(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function g0(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function v0(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jT(i){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const d=h.mapping,p=d===Xh||d===Wh,g=d===La||d===Ba;if(p||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new p0(i)),v=p?t.fromEquirectangular(h,v):t.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const A=h.image;return p&&A&&A.height>0||g&&A&&o(A)?(t===null&&(t=new p0(i)),v=p?t.fromEquirectangular(h):t.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function JT(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ta("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function $T(i,e,t,r){const o={},c=new WeakMap;function u(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const y in x.attributes)e.remove(x.attributes[y]);x.removeEventListener("dispose",u),delete o[x.id];const A=c.get(x);A&&(e.remove(A),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(v,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function d(v){const x=v.attributes;for(const A in x)e.update(x[A],i.ARRAY_BUFFER)}function p(v){const x=[],A=v.index,y=v.attributes.position;let M=0;if(A!==null){const B=A.array;M=A.version;for(let U=0,C=B.length;U<C;U+=3){const z=B[U+0],N=B[U+1],H=B[U+2];x.push(z,N,N,H,H,z)}}else if(y!==void 0){const B=y.array;M=y.version;for(let U=0,C=B.length/3-1;U<C;U+=3){const z=U+0,N=U+1,H=U+2;x.push(z,N,N,H,H,z)}}else return;const S=new(hx(x)?Ax:xx)(x,1);S.version=M;const _=c.get(v);_&&e.remove(_),c.set(v,S)}function g(v){const x=c.get(v);if(x){const A=v.index;A!==null&&x.version<A.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function eb(i,e,t){let r;function o(x){r=x}let c,u;function h(x){c=x.type,u=x.bytesPerElement}function d(x,A){i.drawElements(r,A,c,x*u),t.update(A,r,1)}function p(x,A,y){y!==0&&(i.drawElementsInstanced(r,A,c,x*u,y),t.update(A,r,y))}function g(x,A,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,A,0,c,x,0,y);let S=0;for(let _=0;_<y;_++)S+=A[_];t.update(S,r,1)}function v(x,A,y,M){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/u,A[_],M[_]);else{S.multiDrawElementsInstancedWEBGL(r,A,0,c,x,0,M,0,y);let _=0;for(let B=0;B<y;B++)_+=A[B]*M[B];t.update(_,r,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function tb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=h*(c/3);break;case i.LINES:t.lines+=h*(c/2);break;case i.LINE_STRIP:t.lines+=h*(c-1);break;case i.LINE_LOOP:t.lines+=h*c;break;case i.POINTS:t.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function nb(i,e,t){const r=new WeakMap,o=new kt;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let T=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",T)};var A=T;x!==void 0&&x.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;y===!0&&(C=1),M===!0&&(C=2),S===!0&&(C=3);let z=h.attributes.position.count*C,N=1;z>e.maxTextureSize&&(N=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const H=new Float32Array(z*N*4*v),Y=new px(H,z,N,v);Y.type=fs,Y.needsUpdate=!0;const w=C*4;for(let G=0;G<v;G++){const le=_[G],W=B[G],P=U[G],Q=z*N*4*G;for(let F=0;F<le.count;F++){const X=F*w;y===!0&&(o.fromBufferAttribute(le,F),H[Q+X+0]=o.x,H[Q+X+1]=o.y,H[Q+X+2]=o.z,H[Q+X+3]=0),M===!0&&(o.fromBufferAttribute(W,F),H[Q+X+4]=o.x,H[Q+X+5]=o.y,H[Q+X+6]=o.z,H[Q+X+7]=0),S===!0&&(o.fromBufferAttribute(P,F),H[Q+X+8]=o.x,H[Q+X+9]=o.y,H[Q+X+10]=o.z,H[Q+X+11]=P.itemSize===4?o.w:1)}}x={count:v,texture:Y,size:new Pe(z,N)},r.set(h,x),h.addEventListener("dispose",T)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let y=0;for(let S=0;S<p.length;S++)y+=p[S];const M=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:c}}function ib(i,e,t,r){let o=new WeakMap;function c(d){const p=r.render.frame,g=d.geometry,v=e.get(d,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return v}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const wx=new Sn,x0=new Id(1,1),Rx=new px,Dx=new Ay,Ux=new Sx,A0=[],_0=[],S0=new Float32Array(16),E0=new Float32Array(9),y0=new Float32Array(4);function Fa(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let c=A0[o];if(c===void 0&&(c=new Float32Array(o),A0[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=t,i[u].toArray(c,h)}return c}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Fc(i,e){let t=_0[e];t===void 0&&(t=new Int32Array(e),_0[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function sb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function lb(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,r))return;y0.set(r),i.uniformMatrix2fv(this.addr,!1,y0),pn(t,r)}}function cb(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,r))return;E0.set(r),i.uniformMatrix3fv(this.addr,!1,E0),pn(t,r)}}function ub(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,r))return;S0.set(r),i.uniformMatrix4fv(this.addr,!1,S0),pn(t,r)}}function fb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function db(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function mb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function xb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function Ab(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(x0.compareFunction=fx,c=x0):c=wx,t.setTexture2D(e||c,o)}function _b(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Dx,o)}function Sb(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ux,o)}function Eb(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Rx,o)}function yb(i){switch(i){case 5126:return sb;case 35664:return rb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Mb(i,e){i.uniform1fv(this.addr,e)}function Tb(i,e){const t=Fa(e,this.size,2);i.uniform2fv(this.addr,t)}function bb(i,e){const t=Fa(e,this.size,3);i.uniform3fv(this.addr,t)}function Cb(i,e){const t=Fa(e,this.size,4);i.uniform4fv(this.addr,t)}function wb(i,e){const t=Fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rb(i,e){const t=Fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Db(i,e){const t=Fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ub(i,e){i.uniform1iv(this.addr,e)}function Lb(i,e){i.uniform2iv(this.addr,e)}function Bb(i,e){i.uniform3iv(this.addr,e)}function Ob(i,e){i.uniform4iv(this.addr,e)}function Pb(i,e){i.uniform1uiv(this.addr,e)}function Nb(i,e){i.uniform2uiv(this.addr,e)}function Ib(i,e){i.uniform3uiv(this.addr,e)}function Fb(i,e){i.uniform4uiv(this.addr,e)}function zb(i,e,t){const r=this.cache,o=e.length,c=Fc(t,o);dn(r,c)||(i.uniform1iv(this.addr,c),pn(r,c));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||wx,c[u])}function Hb(i,e,t){const r=this.cache,o=e.length,c=Fc(t,o);dn(r,c)||(i.uniform1iv(this.addr,c),pn(r,c));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Dx,c[u])}function Gb(i,e,t){const r=this.cache,o=e.length,c=Fc(t,o);dn(r,c)||(i.uniform1iv(this.addr,c),pn(r,c));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Ux,c[u])}function Vb(i,e,t){const r=this.cache,o=e.length,c=Fc(t,o);dn(r,c)||(i.uniform1iv(this.addr,c),pn(r,c));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Rx,c[u])}function kb(i){switch(i){case 5126:return Mb;case 35664:return Tb;case 35665:return bb;case 35666:return Cb;case 35674:return wb;case 35675:return Rb;case 35676:return Db;case 5124:case 35670:return Ub;case 35667:case 35671:return Lb;case 35668:case 35672:return Bb;case 35669:case 35673:return Ob;case 5125:return Pb;case 36294:return Nb;case 36295:return Ib;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Vb}}class Xb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yb(t.type)}}class Wb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kb(t.type)}}class Yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,t[h.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function M0(i,e){i.seq.push(e),i.map[e.id]=e}function qb(i,e,t){const r=i.name,o=r.length;for(Dh.lastIndex=0;;){const c=Dh.exec(r),u=Dh.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){M0(t,p===void 0?new Xb(h,i,e):new Wb(h,i,e));break}else{let v=t.map[h];v===void 0&&(v=new Yb(h),M0(t,v)),t=v}}}class Lc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(t,o),u=e.getUniformLocation(t,c.name);qb(c,u,this)}}setValue(e,t,r,o){const c=this.map[t];c!==void 0&&c.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let c=0,u=t.length;c!==u;++c){const h=t[c],d=r[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function T0(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Qb=37297;let Kb=0;function Zb(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const b0=new ct;function jb(i){Rt._getMatrix(b0,Rt.workingColorSpace,i);const e=`mat3( ${b0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(i)){case Bc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function C0(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+Zb(i.getShaderSource(e),u)}else return o}function Jb(i,e){const t=jb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $b(i,e){let t;switch(e){case WE:t="Linear";break;case YE:t="Reinhard";break;case qE:t="Cineon";break;case QE:t="ACESFilmic";break;case ZE:t="AgX";break;case jE:t="Neutral";break;case KE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bc=new j;function e2(){Rt.getLuminanceCoefficients(bc);const i=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function n2(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function i2(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=i.getActiveAttrib(e,o),u=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),t[u]={type:c.type,location:i.getAttribLocation(e,u),locationSize:h}}return t}function Vo(i){return i!==""}function w0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(i){return i.replace(s2,a2)}const r2=new Map;function a2(i,e){let t=Je[e];if(t===void 0){const r=r2.get(e);if(r!==void 0)t=Je[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ed(t)}const o2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(i){return i.replace(o2,l2)}function l2(i,e,t,r){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function U0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===J0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ME?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===us&&(e="SHADOWMAP_TYPE_VSM"),e}function u2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case La:case Ba:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ba:e="ENVMAP_MODE_REFRACTION";break}return e}function h2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $0:e="ENVMAP_BLENDING_MULTIPLY";break;case kE:e="ENVMAP_BLENDING_MIX";break;case XE:e="ENVMAP_BLENDING_ADD";break}return e}function d2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function p2(i,e,t,r){const o=i.getContext(),c=t.defines;let u=t.vertexShader,h=t.fragmentShader;const d=c2(t),p=u2(t),g=f2(t),v=h2(t),x=d2(t),A=t2(t),y=n2(c),M=o.createProgram();let S,_,B=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Vo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(S=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qs?"#define TONE_MAPPING":"",t.toneMapping!==Qs?Je.tonemapping_pars_fragment:"",t.toneMapping!==Qs?$b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Jb("linearToOutputTexel",t.outputColorSpace),e2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),u=Ed(u),u=w0(u,t),u=R0(u,t),h=Ed(h),h=w0(h,t),h=R0(h,t),u=D0(u),h=D0(h),t.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,S=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=B+S+u,C=B+_+h,z=T0(o,o.VERTEX_SHADER,U),N=T0(o,o.FRAGMENT_SHADER,C);o.attachShader(M,z),o.attachShader(M,N),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function H(G){if(i.debug.checkShaderErrors){const le=o.getProgramInfoLog(M).trim(),W=o.getShaderInfoLog(z).trim(),P=o.getShaderInfoLog(N).trim();let Q=!0,F=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,M,z,N);else{const X=C0(o,z,"vertex"),k=C0(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+X+`
`+k)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(W===""||P==="")&&(F=!1);F&&(G.diagnostics={runnable:Q,programLog:le,vertexShader:{log:W,prefix:S},fragmentShader:{log:P,prefix:_}})}o.deleteShader(z),o.deleteShader(N),Y=new Lc(o,M),w=i2(o,M)}let Y;this.getUniforms=function(){return Y===void 0&&H(this),Y};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(M,Qb)),T},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=z,this.fragmentShader=N,this}let m2=0;class g2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new v2(e),t.set(e,r)),r}}class v2{constructor(e){this.id=m2++,this.code=e,this.usedTimes=0}}function x2(i,e,t,r,o,c,u){const h=new mx,d=new g2,p=new Set,g=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let A=o.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,T,G,le,W){const P=le.fog,Q=W.geometry,F=w.isMeshStandardMaterial?le.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||F),k=X&&X.mapping===Ic?X.image.height:null,fe=y[w.type];w.precision!==null&&(A=o.getMaxPrecision(w.precision),A!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",A,"instead."));const L=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ne=L!==void 0?L.length:0;let me=0;Q.morphAttributes.position!==void 0&&(me=1),Q.morphAttributes.normal!==void 0&&(me=2),Q.morphAttributes.color!==void 0&&(me=3);let ye,Z,ce,Ae;if(fe){const Tt=Ii[fe];ye=Tt.vertexShader,Z=Tt.fragmentShader}else ye=w.vertexShader,Z=w.fragmentShader,d.update(w),ce=d.getVertexShaderID(w),Ae=d.getFragmentShaderID(w);const Me=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),je=W.isInstancedMesh===!0,De=W.isBatchedMesh===!0,At=!!w.map,Ut=!!w.matcap,it=!!X,V=!!w.aoMap,Xt=!!w.lightMap,ot=!!w.bumpMap,ht=!!w.normalMap,Xe=!!w.displacementMap,Lt=!!w.emissiveMap,We=!!w.metalnessMap,O=!!w.roughnessMap,b=w.anisotropy>0,ae=w.clearcoat>0,pe=w.dispersion>0,Se=w.iridescence>0,ge=w.sheen>0,Ge=w.transmission>0,Re=b&&!!w.anisotropyMap,Ie=ae&&!!w.clearcoatMap,xt=ae&&!!w.clearcoatNormalMap,Te=ae&&!!w.clearcoatRoughnessMap,Fe=Se&&!!w.iridescenceMap,qe=Se&&!!w.iridescenceThicknessMap,Ve=ge&&!!w.sheenColorMap,ze=ge&&!!w.sheenRoughnessMap,at=!!w.specularMap,Ke=!!w.specularColorMap,Bt=!!w.specularIntensityMap,J=Ge&&!!w.transmissionMap,Be=Ge&&!!w.thicknessMap,ue=!!w.gradientMap,xe=!!w.alphaMap,we=w.alphaTest>0,Ue=!!w.alphaHash,et=!!w.extensions;let Wt=Qs;w.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const on={shaderID:fe,shaderType:w.type,shaderName:w.name,vertexShader:ye,fragmentShader:Z,defines:w.defines,customVertexShaderID:ce,customFragmentShaderID:Ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:A,batching:De,batchingColor:De&&W._colorsTexture!==null,instancing:je,instancingColor:je&&W.instanceColor!==null,instancingMorph:je&&W.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Zs,alphaToCoverage:!!w.alphaToCoverage,map:At,matcap:Ut,envMap:it,envMapMode:it&&X.mapping,envMapCubeUVHeight:k,aoMap:V,lightMap:Xt,bumpMap:ot,normalMap:ht,displacementMap:x&&Xe,emissiveMap:Lt,normalMapObjectSpace:ht&&w.normalMapType===ty,normalMapTangentSpace:ht&&w.normalMapType===ey,metalnessMap:We,roughnessMap:O,anisotropy:b,anisotropyMap:Re,clearcoat:ae,clearcoatMap:Ie,clearcoatNormalMap:xt,clearcoatRoughnessMap:Te,dispersion:pe,iridescence:Se,iridescenceMap:Fe,iridescenceThicknessMap:qe,sheen:ge,sheenColorMap:Ve,sheenRoughnessMap:ze,specularMap:at,specularColorMap:Ke,specularIntensityMap:Bt,transmission:Ge,transmissionMap:J,thicknessMap:Be,gradientMap:ue,opaque:w.transparent===!1&&w.blending===wa&&w.alphaToCoverage===!1,alphaMap:xe,alphaTest:we,alphaHash:Ue,combine:w.combine,mapUv:At&&M(w.map.channel),aoMapUv:V&&M(w.aoMap.channel),lightMapUv:Xt&&M(w.lightMap.channel),bumpMapUv:ot&&M(w.bumpMap.channel),normalMapUv:ht&&M(w.normalMap.channel),displacementMapUv:Xe&&M(w.displacementMap.channel),emissiveMapUv:Lt&&M(w.emissiveMap.channel),metalnessMapUv:We&&M(w.metalnessMap.channel),roughnessMapUv:O&&M(w.roughnessMap.channel),anisotropyMapUv:Re&&M(w.anisotropyMap.channel),clearcoatMapUv:Ie&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:xt&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(w.sheenRoughnessMap.channel),specularMapUv:at&&M(w.specularMap.channel),specularColorMapUv:Ke&&M(w.specularColorMap.channel),specularIntensityMapUv:Bt&&M(w.specularIntensityMap.channel),transmissionMapUv:J&&M(w.transmissionMap.channel),thicknessMapUv:Be&&M(w.thicknessMap.channel),alphaMapUv:xe&&M(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ht||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Q.attributes.uv&&(At||xe),fog:!!P,useFog:w.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:be,skinning:W.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:At&&w.map.isVideoTexture===!0&&Rt.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Lt&&w.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===kn,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:et&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&w.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return on.vertexUv1s=p.has(1),on.vertexUv2s=p.has(2),on.vertexUv3s=p.has(3),p.clear(),on}function _(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)T.push(G),T.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(B(T,w),U(T,w),T.push(i.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function B(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function U(w,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reverseDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),w.push(h.mask)}function C(w){const T=y[w.type];let G;if(T){const le=Ii[T];G=By.clone(le.uniforms)}else G=w.uniforms;return G}function z(w,T){let G;for(let le=0,W=g.length;le<W;le++){const P=g[le];if(P.cacheKey===T){G=P,++G.usedTimes;break}}return G===void 0&&(G=new p2(i,T,w,c),g.push(G)),G}function N(w){if(--w.usedTimes===0){const T=g.indexOf(w);g[T]=g[g.length-1],g.pop(),w.destroy()}}function H(w){d.remove(w)}function Y(){d.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:z,releaseProgram:N,releaseShaderCache:H,programs:g,dispose:Y}}function A2(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function r(u){i.delete(u)}function o(u,h,d){i.get(u)[h]=d}function c(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:c}}function _2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function L0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function B0(){const i=[];let e=0;const t=[],r=[],o=[];function c(){e=0,t.length=0,r.length=0,o.length=0}function u(v,x,A,y,M,S){let _=i[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:A,groupOrder:y,renderOrder:v.renderOrder,z:M,group:S},i[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=A,_.groupOrder=y,_.renderOrder=v.renderOrder,_.z=M,_.group=S),e++,_}function h(v,x,A,y,M,S){const _=u(v,x,A,y,M,S);A.transmission>0?r.push(_):A.transparent===!0?o.push(_):t.push(_)}function d(v,x,A,y,M,S){const _=u(v,x,A,y,M,S);A.transmission>0?r.unshift(_):A.transparent===!0?o.unshift(_):t.unshift(_)}function p(v,x){t.length>1&&t.sort(v||_2),r.length>1&&r.sort(x||L0),o.length>1&&o.sort(x||L0)}function g(){for(let v=e,x=i.length;v<x;v++){const A=i[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:r,transparent:o,init:c,push:h,unshift:d,finish:g,sort:p}}function S2(){let i=new WeakMap;function e(r,o){const c=i.get(r);let u;return c===void 0?(u=new B0,i.set(r,[u])):o>=c.length?(u=new B0,c.push(u)):u=c[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function E2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new pt};break;case"SpotLight":t={position:new j,direction:new j,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function y2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let M2=0;function T2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function b2(i){const e=new E2,t=y2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new j);const o=new j,c=new $t,u=new $t;function h(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let A=0,y=0,M=0,S=0,_=0,B=0,U=0,C=0,z=0,N=0,H=0;p.sort(T2);for(let w=0,T=p.length;w<T;w++){const G=p[w],le=G.color,W=G.intensity,P=G.distance,Q=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=le.r*W,v+=le.g*W,x+=le.b*W;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],W);H++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const X=G.shadow,k=t.get(G);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,r.directionalShadow[A]=k,r.directionalShadowMap[A]=Q,r.directionalShadowMatrix[A]=G.shadow.matrix,B++}r.directional[A]=F,A++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(le).multiplyScalar(W),F.distance=P,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[M]=F;const X=G.shadow;if(G.map&&(r.spotLightMap[z]=G.map,z++,X.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[M]=X.matrix,G.castShadow){const k=t.get(G);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,r.spotShadow[M]=k,r.spotShadowMap[M]=Q,C++}M++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy(le).multiplyScalar(W),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=F,S++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const X=G.shadow,k=t.get(G);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,r.pointShadow[y]=k,r.pointShadowMap[y]=Q,r.pointShadowMatrix[y]=G.shadow.matrix,U++}r.point[y]=F,y++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(W),F.groundColor.copy(G.groundColor).multiplyScalar(W),r.hemi[_]=F,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==A||Y.pointLength!==y||Y.spotLength!==M||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==B||Y.numPointShadows!==U||Y.numSpotShadows!==C||Y.numSpotMaps!==z||Y.numLightProbes!==H)&&(r.directional.length=A,r.spot.length=M,r.rectArea.length=S,r.point.length=y,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+z-N,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=H,Y.directionalLength=A,Y.pointLength=y,Y.spotLength=M,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=B,Y.numPointShadows=U,Y.numSpotShadows=C,Y.numSpotMaps=z,Y.numLightProbes=H,r.version=M2++)}function d(p,g){let v=0,x=0,A=0,y=0,M=0;const S=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const U=p[_];if(U.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),v++}else if(U.isSpotLight){const C=r.spot[A];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),A++}else if(U.isRectAreaLight){const C=r.rectArea[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),u.identity(),c.copy(U.matrixWorld),c.premultiply(S),u.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),y++}else if(U.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const C=r.hemi[M];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(S),M++}}}return{setup:h,setupView:d,state:r}}function O0(i){const e=new b2(i),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function c(g){t.push(g)}function u(g){r.push(g)}function h(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function C2(i){let e=new WeakMap;function t(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new O0(i),e.set(o,[h])):c>=u.length?(h=new O0(i),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const w2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D2(i,e,t){let r=new Ex;const o=new Pe,c=new Pe,u=new kt,h=new nM({depthPacking:$E}),d=new iM,p={},g=t.maxTextureSize,v={[ms]:_n,[_n]:ms,[kn]:kn},x=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:w2,fragmentShader:R2}),A=x.clone();A.defines.HORIZONTAL_PASS=1;const y=new Gi;y.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new si(y,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let _=this.type;this.render=function(N,H,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const w=i.getRenderTarget(),T=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),le=i.state;le.setBlending(On),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const W=_!==us&&this.type===us,P=_===us&&this.type!==us;for(let Q=0,F=N.length;Q<F;Q++){const X=N[Q],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const fe=k.getFrameExtents();if(o.multiply(fe),c.copy(k.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/fe.x),o.x=c.x*fe.x,k.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/fe.y),o.y=c.y*fe.y,k.mapSize.y=c.y)),k.map===null||W===!0||P===!0){const ne=this.type!==us?{minFilter:ri,magFilter:ri}:{};k.map!==null&&k.map.dispose(),k.map=new Pn(o.x,o.y,ne),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const L=k.getViewportCount();for(let ne=0;ne<L;ne++){const me=k.getViewport(ne);u.set(c.x*me.x,c.y*me.y,c.x*me.z,c.y*me.w),le.viewport(u),k.updateMatrices(X,ne),r=k.getFrustum(),C(H,Y,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===us&&B(k,Y),k.needsUpdate=!1}_=this.type,S.needsUpdate=!1,i.setRenderTarget(w,T,G)};function B(N,H){const Y=e.update(M);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,A.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,A.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Pn(o.x,o.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(H,null,Y,x,M,null),A.uniforms.shadow_pass.value=N.mapPass.texture,A.uniforms.resolution.value=N.mapSize,A.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(H,null,Y,A,M,null)}function U(N,H,Y,w){let T=null;const G=Y.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)T=G;else if(T=Y.isPointLight===!0?d:h,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0){const le=T.uuid,W=H.uuid;let P=p[le];P===void 0&&(P={},p[le]=P);let Q=P[W];Q===void 0&&(Q=T.clone(),P[W]=Q,H.addEventListener("dispose",z)),T=Q}if(T.visible=H.visible,T.wireframe=H.wireframe,w===us?T.side=H.shadowSide!==null?H.shadowSide:H.side:T.side=H.shadowSide!==null?H.shadowSide:v[H.side],T.alphaMap=H.alphaMap,T.alphaTest=H.alphaTest,T.map=H.map,T.clipShadows=H.clipShadows,T.clippingPlanes=H.clippingPlanes,T.clipIntersection=H.clipIntersection,T.displacementMap=H.displacementMap,T.displacementScale=H.displacementScale,T.displacementBias=H.displacementBias,T.wireframeLinewidth=H.wireframeLinewidth,T.linewidth=H.linewidth,Y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const le=i.properties.get(T);le.light=Y}return T}function C(N,H,Y,w,T){if(N.visible===!1)return;if(N.layers.test(H.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===us)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,N.matrixWorld);const W=e.update(N),P=N.material;if(Array.isArray(P)){const Q=W.groups;for(let F=0,X=Q.length;F<X;F++){const k=Q[F],fe=P[k.materialIndex];if(fe&&fe.visible){const L=U(N,fe,w,T);N.onBeforeShadow(i,N,H,Y,W,L,k),i.renderBufferDirect(Y,null,W,L,N,k),N.onAfterShadow(i,N,H,Y,W,L,k)}}}else if(P.visible){const Q=U(N,P,w,T);N.onBeforeShadow(i,N,H,Y,W,Q,null),i.renderBufferDirect(Y,null,W,Q,N,null),N.onAfterShadow(i,N,H,Y,W,Q,null)}}const le=N.children;for(let W=0,P=le.length;W<P;W++)C(le[W],H,Y,w,T)}function z(N){N.target.removeEventListener("dispose",z);for(const Y in p){const w=p[Y],T=N.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const U2={[Ih]:Fh,[zh]:Vh,[Hh]:kh,[Ua]:Gh,[Fh]:Ih,[Vh]:zh,[kh]:Hh,[Gh]:Ua};function L2(i,e){function t(){let J=!1;const Be=new kt;let ue=null;const xe=new kt(0,0,0,0);return{setMask:function(we){ue!==we&&!J&&(i.colorMask(we,we,we,we),ue=we)},setLocked:function(we){J=we},setClear:function(we,Ue,et,Wt,on){on===!0&&(we*=Wt,Ue*=Wt,et*=Wt),Be.set(we,Ue,et,Wt),xe.equals(Be)===!1&&(i.clearColor(we,Ue,et,Wt),xe.copy(Be))},reset:function(){J=!1,ue=null,xe.set(-1,0,0,0)}}}function r(){let J=!1,Be=!1,ue=null,xe=null,we=null;return{setReversed:function(Ue){if(Be!==Ue){const et=e.get("EXT_clip_control");Be?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const Wt=we;we=null,this.setClear(Wt)}Be=Ue},getReversed:function(){return Be},setTest:function(Ue){Ue?Me(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ue){ue!==Ue&&!J&&(i.depthMask(Ue),ue=Ue)},setFunc:function(Ue){if(Be&&(Ue=U2[Ue]),xe!==Ue){switch(Ue){case Ih:i.depthFunc(i.NEVER);break;case Fh:i.depthFunc(i.ALWAYS);break;case zh:i.depthFunc(i.LESS);break;case Ua:i.depthFunc(i.LEQUAL);break;case Hh:i.depthFunc(i.EQUAL);break;case Gh:i.depthFunc(i.GEQUAL);break;case Vh:i.depthFunc(i.GREATER);break;case kh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Ue}},setLocked:function(Ue){J=Ue},setClear:function(Ue){we!==Ue&&(Be&&(Ue=1-Ue),i.clearDepth(Ue),we=Ue)},reset:function(){J=!1,ue=null,xe=null,we=null,Be=!1}}}function o(){let J=!1,Be=null,ue=null,xe=null,we=null,Ue=null,et=null,Wt=null,on=null;return{setTest:function(Tt){J||(Tt?Me(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Tt){Be!==Tt&&!J&&(i.stencilMask(Tt),Be=Tt)},setFunc:function(Tt,Nn,In){(ue!==Tt||xe!==Nn||we!==In)&&(i.stencilFunc(Tt,Nn,In),ue=Tt,xe=Nn,we=In)},setOp:function(Tt,Nn,In){(Ue!==Tt||et!==Nn||Wt!==In)&&(i.stencilOp(Tt,Nn,In),Ue=Tt,et=Nn,Wt=In)},setLocked:function(Tt){J=Tt},setClear:function(Tt){on!==Tt&&(i.clearStencil(Tt),on=Tt)},reset:function(){J=!1,Be=null,ue=null,xe=null,we=null,Ue=null,et=null,Wt=null,on=null}}}const c=new t,u=new r,h=new o,d=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,A=[],y=null,M=!1,S=null,_=null,B=null,U=null,C=null,z=null,N=null,H=new pt(0,0,0),Y=0,w=!1,T=null,G=null,le=null,W=null,P=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=X>=2);let fe=null,L={};const ne=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),ye=new kt().fromArray(ne),Z=new kt().fromArray(me);function ce(J,Be,ue,xe){const we=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(J,Ue),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<ue;et++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Be,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Be+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ue}const Ae={};Ae[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Me(i.DEPTH_TEST),u.setFunc(Ua),ot(!1),ht(Iv),Me(i.CULL_FACE),V(On);function Me(J){g[J]!==!0&&(i.enable(J),g[J]=!0)}function be(J){g[J]!==!1&&(i.disable(J),g[J]=!1)}function je(J,Be){return v[J]!==Be?(i.bindFramebuffer(J,Be),v[J]=Be,J===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Be),J===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Be),!0):!1}function De(J,Be){let ue=A,xe=!1;if(J){ue=x.get(Be),ue===void 0&&(ue=[],x.set(Be,ue));const we=J.textures;if(ue.length!==we.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,et=we.length;Ue<et;Ue++)ue[Ue]=i.COLOR_ATTACHMENT0+Ue;ue.length=we.length,xe=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ue)}function At(J){return y!==J?(i.useProgram(J),y=J,!0):!1}const Ut={[Tr]:i.FUNC_ADD,[bE]:i.FUNC_SUBTRACT,[CE]:i.FUNC_REVERSE_SUBTRACT};Ut[wE]=i.MIN,Ut[RE]=i.MAX;const it={[DE]:i.ZERO,[UE]:i.ONE,[LE]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[FE]:i.SRC_ALPHA_SATURATE,[NE]:i.DST_COLOR,[OE]:i.DST_ALPHA,[BE]:i.ONE_MINUS_SRC_COLOR,[Nh]:i.ONE_MINUS_SRC_ALPHA,[IE]:i.ONE_MINUS_DST_COLOR,[PE]:i.ONE_MINUS_DST_ALPHA,[zE]:i.CONSTANT_COLOR,[HE]:i.ONE_MINUS_CONSTANT_COLOR,[GE]:i.CONSTANT_ALPHA,[VE]:i.ONE_MINUS_CONSTANT_ALPHA};function V(J,Be,ue,xe,we,Ue,et,Wt,on,Tt){if(J===On){M===!0&&(be(i.BLEND),M=!1);return}if(M===!1&&(Me(i.BLEND),M=!0),J!==TE){if(J!==S||Tt!==w){if((_!==Tr||C!==Tr)&&(i.blendEquation(i.FUNC_ADD),_=Tr,C=Tr),Tt)switch(J){case wa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fv:i.blendFunc(i.ONE,i.ONE);break;case zv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hv:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fv:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hv:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}B=null,U=null,z=null,N=null,H.set(0,0,0),Y=0,S=J,w=Tt}return}we=we||Be,Ue=Ue||ue,et=et||xe,(Be!==_||we!==C)&&(i.blendEquationSeparate(Ut[Be],Ut[we]),_=Be,C=we),(ue!==B||xe!==U||Ue!==z||et!==N)&&(i.blendFuncSeparate(it[ue],it[xe],it[Ue],it[et]),B=ue,U=xe,z=Ue,N=et),(Wt.equals(H)===!1||on!==Y)&&(i.blendColor(Wt.r,Wt.g,Wt.b,on),H.copy(Wt),Y=on),S=J,w=!1}function Xt(J,Be){J.side===kn?be(i.CULL_FACE):Me(i.CULL_FACE);let ue=J.side===_n;Be&&(ue=!ue),ot(ue),J.blending===wa&&J.transparent===!1?V(On):V(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),u.setFunc(J.depthFunc),u.setTest(J.depthTest),u.setMask(J.depthWrite),c.setMask(J.colorWrite);const xe=J.stencilWrite;h.setTest(xe),xe&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Lt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(J){T!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),T=J)}function ht(J){J!==EE?(Me(i.CULL_FACE),J!==G&&(J===Iv?i.cullFace(i.BACK):J===yE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),G=J}function Xe(J){J!==le&&(F&&i.lineWidth(J),le=J)}function Lt(J,Be,ue){J?(Me(i.POLYGON_OFFSET_FILL),(W!==Be||P!==ue)&&(i.polygonOffset(Be,ue),W=Be,P=ue)):be(i.POLYGON_OFFSET_FILL)}function We(J){J?Me(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function O(J){J===void 0&&(J=i.TEXTURE0+Q-1),fe!==J&&(i.activeTexture(J),fe=J)}function b(J,Be,ue){ue===void 0&&(fe===null?ue=i.TEXTURE0+Q-1:ue=fe);let xe=L[ue];xe===void 0&&(xe={type:void 0,texture:void 0},L[ue]=xe),(xe.type!==J||xe.texture!==Be)&&(fe!==ue&&(i.activeTexture(ue),fe=ue),i.bindTexture(J,Be||Ae[J]),xe.type=J,xe.texture=Be)}function ae(){const J=L[fe];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ge(){try{i.texSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function xt(){try{i.texStorage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function qe(){try{i.texImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ve(J){ye.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),ye.copy(J))}function ze(J){Z.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Z.copy(J))}function at(J,Be){let ue=p.get(Be);ue===void 0&&(ue=new WeakMap,p.set(Be,ue));let xe=ue.get(J);xe===void 0&&(xe=i.getUniformBlockIndex(Be,J.name),ue.set(J,xe))}function Ke(J,Be){const xe=p.get(Be).get(J);d.get(Be)!==xe&&(i.uniformBlockBinding(Be,xe,J.__bindingPointIndex),d.set(Be,xe))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},fe=null,L={},v={},x=new WeakMap,A=[],y=null,M=!1,S=null,_=null,B=null,U=null,C=null,z=null,N=null,H=new pt(0,0,0),Y=0,w=!1,T=null,G=null,le=null,W=null,P=null,ye.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Me,disable:be,bindFramebuffer:je,drawBuffers:De,useProgram:At,setBlending:V,setMaterial:Xt,setFlipSided:ot,setCullFace:ht,setLineWidth:Xe,setPolygonOffset:Lt,setScissorTest:We,activeTexture:O,bindTexture:b,unbindTexture:ae,compressedTexImage2D:pe,compressedTexImage3D:Se,texImage2D:Fe,texImage3D:qe,updateUBOMapping:at,uniformBlockBinding:Ke,texStorage2D:xt,texStorage3D:Te,texSubImage2D:ge,texSubImage3D:Ge,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ie,scissor:Ve,viewport:ze,reset:Bt}}function B2(i,e,t,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pe,g=new WeakMap;let v;const x=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,b){return A?new OffscreenCanvas(O,b):Pc("canvas")}function M(O,b,ae){let pe=1;const Se=We(O);if((Se.width>ae||Se.height>ae)&&(pe=ae/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ge=Math.floor(pe*Se.width),Ge=Math.floor(pe*Se.height);v===void 0&&(v=y(ge,Ge));const Re=b?y(ge,Ge):v;return Re.width=ge,Re.height=Ge,Re.getContext("2d").drawImage(O,0,0,ge,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ge+"x"+Ge+")."),Re}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){i.generateMipmap(O)}function B(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function U(O,b,ae,pe,Se=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ge=b;if(b===i.RED&&(ae===i.FLOAT&&(ge=i.R32F),ae===i.HALF_FLOAT&&(ge=i.R16F),ae===i.UNSIGNED_BYTE&&(ge=i.R8)),b===i.RED_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.R8UI),ae===i.UNSIGNED_SHORT&&(ge=i.R16UI),ae===i.UNSIGNED_INT&&(ge=i.R32UI),ae===i.BYTE&&(ge=i.R8I),ae===i.SHORT&&(ge=i.R16I),ae===i.INT&&(ge=i.R32I)),b===i.RG&&(ae===i.FLOAT&&(ge=i.RG32F),ae===i.HALF_FLOAT&&(ge=i.RG16F),ae===i.UNSIGNED_BYTE&&(ge=i.RG8)),b===i.RG_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RG8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RG16UI),ae===i.UNSIGNED_INT&&(ge=i.RG32UI),ae===i.BYTE&&(ge=i.RG8I),ae===i.SHORT&&(ge=i.RG16I),ae===i.INT&&(ge=i.RG32I)),b===i.RGB_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),ae===i.UNSIGNED_INT&&(ge=i.RGB32UI),ae===i.BYTE&&(ge=i.RGB8I),ae===i.SHORT&&(ge=i.RGB16I),ae===i.INT&&(ge=i.RGB32I)),b===i.RGBA_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),ae===i.UNSIGNED_INT&&(ge=i.RGBA32UI),ae===i.BYTE&&(ge=i.RGBA8I),ae===i.SHORT&&(ge=i.RGBA16I),ae===i.INT&&(ge=i.RGBA32I)),b===i.RGB&&ae===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),b===i.RGBA){const Ge=Se?Bc:Rt.getTransfer(pe);ae===i.FLOAT&&(ge=i.RGBA32F),ae===i.HALF_FLOAT&&(ge=i.RGBA16F),ae===i.UNSIGNED_BYTE&&(ge=Ge===It?i.SRGB8_ALPHA8:i.RGBA8),ae===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),ae===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function C(O,b){let ae;return O?b===null||b===Ks||b===Rr?ae=i.DEPTH24_STENCIL8:b===fs?ae=i.DEPTH32F_STENCIL8:b===Yo&&(ae=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ks||b===Rr?ae=i.DEPTH_COMPONENT24:b===fs?ae=i.DEPTH_COMPONENT32F:b===Yo&&(ae=i.DEPTH_COMPONENT16),ae}function z(O,b){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==ri&&O.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function N(O){const b=O.target;b.removeEventListener("dispose",N),Y(b),b.isVideoTexture&&g.delete(b)}function H(O){const b=O.target;b.removeEventListener("dispose",H),T(b)}function Y(O){const b=r.get(O);if(b.__webglInit===void 0)return;const ae=O.source,pe=x.get(ae);if(pe){const Se=pe[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&w(O),Object.keys(pe).length===0&&x.delete(ae)}r.remove(O)}function w(O){const b=r.get(O);i.deleteTexture(b.__webglTexture);const ae=O.source,pe=x.get(ae);delete pe[b.__cacheKey],u.memory.textures--}function T(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Se=0;Se<b.__webglFramebuffer[pe].length;Se++)i.deleteFramebuffer(b.__webglFramebuffer[pe][Se]);else i.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)i.deleteFramebuffer(b.__webglFramebuffer[pe]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ae=O.textures;for(let pe=0,Se=ae.length;pe<Se;pe++){const ge=r.get(ae[pe]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),u.memory.textures--),r.remove(ae[pe])}r.remove(O)}let G=0;function le(){G=0}function W(){const O=G;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),G+=1,O}function P(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function Q(O,b){const ae=r.get(O);if(O.isVideoTexture&&Xe(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const pe=O.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(ae,O,b);return}}t.bindTexture(i.TEXTURE_2D,ae.__webglTexture,i.TEXTURE0+b)}function F(O,b){const ae=r.get(O);if(O.version>0&&ae.__version!==O.version){Z(ae,O,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ae.__webglTexture,i.TEXTURE0+b)}function X(O,b){const ae=r.get(O);if(O.version>0&&ae.__version!==O.version){Z(ae,O,b);return}t.bindTexture(i.TEXTURE_3D,ae.__webglTexture,i.TEXTURE0+b)}function k(O,b){const ae=r.get(O);if(O.version>0&&ae.__version!==O.version){ce(ae,O,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture,i.TEXTURE0+b)}const fe={[Yh]:i.REPEAT,[Cr]:i.CLAMP_TO_EDGE,[qh]:i.MIRRORED_REPEAT},L={[ri]:i.NEAREST,[JE]:i.NEAREST_MIPMAP_NEAREST,[sc]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Jf]:i.LINEAR_MIPMAP_NEAREST,[wr]:i.LINEAR_MIPMAP_LINEAR},ne={[ny]:i.NEVER,[ly]:i.ALWAYS,[iy]:i.LESS,[fx]:i.LEQUAL,[sy]:i.EQUAL,[oy]:i.GEQUAL,[ry]:i.GREATER,[ay]:i.NOTEQUAL};function me(O,b){if(b.type===fs&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Jf||b.magFilter===sc||b.magFilter===wr||b.minFilter===Bn||b.minFilter===Jf||b.minFilter===sc||b.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,fe[b.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,fe[b.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,fe[b.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,L[b.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ri||b.minFilter!==sc&&b.minFilter!==wr||b.type===fs&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ye(O,b){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",N));const pe=b.source;let Se=x.get(pe);Se===void 0&&(Se={},x.set(pe,Se));const ge=P(b);if(ge!==O.__cacheKey){Se[ge]===void 0&&(Se[ge]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Se[ge].usedTimes++;const Ge=Se[O.__cacheKey];Ge!==void 0&&(Se[O.__cacheKey].usedTimes--,Ge.usedTimes===0&&w(b)),O.__cacheKey=ge,O.__webglTexture=Se[ge].texture}return ae}function Z(O,b,ae){let pe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=i.TEXTURE_3D);const Se=ye(O,b),ge=b.source;t.bindTexture(pe,O.__webglTexture,i.TEXTURE0+ae);const Ge=r.get(ge);if(ge.version!==Ge.__version||Se===!0){t.activeTexture(i.TEXTURE0+ae);const Re=Rt.getPrimaries(Rt.workingColorSpace),Ie=b.colorSpace===Fi?null:Rt.getPrimaries(b.colorSpace),xt=b.colorSpace===Fi||Re===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Te=M(b.image,!1,o.maxTextureSize);Te=Lt(b,Te);const Fe=c.convert(b.format,b.colorSpace),qe=c.convert(b.type);let Ve=U(b.internalFormat,Fe,qe,b.colorSpace,b.isVideoTexture);me(pe,b);let ze;const at=b.mipmaps,Ke=b.isVideoTexture!==!0,Bt=Ge.__version===void 0||Se===!0,J=ge.dataReady,Be=z(b,Te);if(b.isDepthTexture)Ve=C(b.format===Dr,b.type),Bt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Ve,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,Ve,Te.width,Te.height,0,Fe,qe,null));else if(b.isDataTexture)if(at.length>0){Ke&&Bt&&t.texStorage2D(i.TEXTURE_2D,Be,Ve,at[0].width,at[0].height);for(let ue=0,xe=at.length;ue<xe;ue++)ze=at[ue],Ke?J&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ze.width,ze.height,Fe,qe,ze.data):t.texImage2D(i.TEXTURE_2D,ue,Ve,ze.width,ze.height,0,Fe,qe,ze.data);b.generateMipmaps=!1}else Ke?(Bt&&t.texStorage2D(i.TEXTURE_2D,Be,Ve,Te.width,Te.height),J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,Fe,qe,Te.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,Te.width,Te.height,0,Fe,qe,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&Bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Ve,at[0].width,at[0].height,Te.depth);for(let ue=0,xe=at.length;ue<xe;ue++)if(ze=at[ue],b.format!==Ri)if(Fe!==null)if(Ke){if(J)if(b.layerUpdates.size>0){const we=u0(ze.width,ze.height,b.format,b.type);for(const Ue of b.layerUpdates){const et=ze.data.subarray(Ue*we/ze.data.BYTES_PER_ELEMENT,(Ue+1)*we/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ue,ze.width,ze.height,1,Fe,et)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Te.depth,Fe,ze.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Ve,ze.width,ze.height,Te.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Te.depth,Fe,qe,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Ve,ze.width,ze.height,Te.depth,0,Fe,qe,ze.data)}else{Ke&&Bt&&t.texStorage2D(i.TEXTURE_2D,Be,Ve,at[0].width,at[0].height);for(let ue=0,xe=at.length;ue<xe;ue++)ze=at[ue],b.format!==Ri?Fe!==null?Ke?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ze.width,ze.height,Fe,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Ve,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?J&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ze.width,ze.height,Fe,qe,ze.data):t.texImage2D(i.TEXTURE_2D,ue,Ve,ze.width,ze.height,0,Fe,qe,ze.data)}else if(b.isDataArrayTexture)if(Ke){if(Bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Ve,Te.width,Te.height,Te.depth),J)if(b.layerUpdates.size>0){const ue=u0(Te.width,Te.height,b.format,b.type);for(const xe of b.layerUpdates){const we=Te.data.subarray(xe*ue/Te.data.BYTES_PER_ELEMENT,(xe+1)*ue/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,Te.width,Te.height,1,Fe,qe,we)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Fe,qe,Te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,Te.width,Te.height,Te.depth,0,Fe,qe,Te.data);else if(b.isData3DTexture)Ke?(Bt&&t.texStorage3D(i.TEXTURE_3D,Be,Ve,Te.width,Te.height,Te.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Fe,qe,Te.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,Te.width,Te.height,Te.depth,0,Fe,qe,Te.data);else if(b.isFramebufferTexture){if(Bt)if(Ke)t.texStorage2D(i.TEXTURE_2D,Be,Ve,Te.width,Te.height);else{let ue=Te.width,xe=Te.height;for(let we=0;we<Be;we++)t.texImage2D(i.TEXTURE_2D,we,Ve,ue,xe,0,Fe,qe,null),ue>>=1,xe>>=1}}else if(at.length>0){if(Ke&&Bt){const ue=We(at[0]);t.texStorage2D(i.TEXTURE_2D,Be,Ve,ue.width,ue.height)}for(let ue=0,xe=at.length;ue<xe;ue++)ze=at[ue],Ke?J&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Fe,qe,ze):t.texImage2D(i.TEXTURE_2D,ue,Ve,Fe,qe,ze);b.generateMipmaps=!1}else if(Ke){if(Bt){const ue=We(Te);t.texStorage2D(i.TEXTURE_2D,Be,Ve,ue.width,ue.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,qe,Te)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Fe,qe,Te);S(b)&&_(pe),Ge.__version=ge.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function ce(O,b,ae){if(b.image.length!==6)return;const pe=ye(O,b),Se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+ae);const ge=r.get(Se);if(Se.version!==ge.__version||pe===!0){t.activeTexture(i.TEXTURE0+ae);const Ge=Rt.getPrimaries(Rt.workingColorSpace),Re=b.colorSpace===Fi?null:Rt.getPrimaries(b.colorSpace),Ie=b.colorSpace===Fi||Ge===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const xt=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let xe=0;xe<6;xe++)!xt&&!Te?Fe[xe]=M(b.image[xe],!0,o.maxCubemapSize):Fe[xe]=Te?b.image[xe].image:b.image[xe],Fe[xe]=Lt(b,Fe[xe]);const qe=Fe[0],Ve=c.convert(b.format,b.colorSpace),ze=c.convert(b.type),at=U(b.internalFormat,Ve,ze,b.colorSpace),Ke=b.isVideoTexture!==!0,Bt=ge.__version===void 0||pe===!0,J=Se.dataReady;let Be=z(b,qe);me(i.TEXTURE_CUBE_MAP,b);let ue;if(xt){Ke&&Bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,at,qe.width,qe.height);for(let xe=0;xe<6;xe++){ue=Fe[xe].mipmaps;for(let we=0;we<ue.length;we++){const Ue=ue[we];b.format!==Ri?Ve!==null?Ke?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,Ue.width,Ue.height,Ve,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,at,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,Ue.width,Ue.height,Ve,ze,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,at,Ue.width,Ue.height,0,Ve,ze,Ue.data)}}}else{if(ue=b.mipmaps,Ke&&Bt){ue.length>0&&Be++;const xe=We(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Te){Ke?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe[xe].width,Fe[xe].height,Ve,ze,Fe[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Fe[xe].width,Fe[xe].height,0,Ve,ze,Fe[xe].data);for(let we=0;we<ue.length;we++){const et=ue[we].image[xe].image;Ke?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,et.width,et.height,Ve,ze,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,at,et.width,et.height,0,Ve,ze,et.data)}}else{Ke?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ve,ze,Fe[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Ve,ze,Fe[xe]);for(let we=0;we<ue.length;we++){const Ue=ue[we];Ke?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,Ve,ze,Ue.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,at,Ve,ze,Ue.image[xe])}}}S(b)&&_(i.TEXTURE_CUBE_MAP),ge.__version=Se.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ae(O,b,ae,pe,Se,ge){const Ge=c.convert(ae.format,ae.colorSpace),Re=c.convert(ae.type),Ie=U(ae.internalFormat,Ge,Re,ae.colorSpace),xt=r.get(b),Te=r.get(ae);if(Te.__renderTarget=b,!xt.__hasExternalTextures){const Fe=Math.max(1,b.width>>ge),qe=Math.max(1,b.height>>ge);Se===i.TEXTURE_3D||Se===i.TEXTURE_2D_ARRAY?t.texImage3D(Se,ge,Ie,Fe,qe,b.depth,0,Ge,Re,null):t.texImage2D(Se,ge,Ie,Fe,qe,0,Ge,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),ht(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,Se,Te.__webglTexture,0,ot(b)):(Se===i.TEXTURE_2D||Se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,Se,Te.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(O,b,ae){if(i.bindRenderbuffer(i.RENDERBUFFER,O),b.depthBuffer){const pe=b.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,ge=C(b.stencilBuffer,Se),Ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=ot(b);ht(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ge,b.width,b.height):ae?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ge,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ge,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,O)}else{const pe=b.textures;for(let Se=0;Se<pe.length;Se++){const ge=pe[Se],Ge=c.convert(ge.format,ge.colorSpace),Re=c.convert(ge.type),Ie=U(ge.internalFormat,Ge,Re,ge.colorSpace),xt=ot(b);ae&&ht(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Ie,b.width,b.height):ht(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,Ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(b.depthTexture);pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q(b.depthTexture,0);const Se=pe.__webglTexture,ge=ot(b);if(b.depthTexture.format===Ra)ht(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(b.depthTexture.format===Dr)ht(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function je(O){const b=r.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=pe}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");be(b.__webglFramebuffer,O)}else if(ae){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=i.createRenderbuffer(),Me(b.__webglDepthbuffer[pe],O,!1);else{const Se=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Me(b.__webglDepthbuffer,O,!1);else{const pe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,Se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(O,b,ae){const pe=r.get(O);b!==void 0&&Ae(pe.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ae!==void 0&&je(O)}function At(O){const b=O.texture,ae=r.get(O),pe=r.get(b);O.addEventListener("dispose",H);const Se=O.textures,ge=O.isWebGLCubeRenderTarget===!0,Ge=Se.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=b.version,u.memory.textures++),ge){ae.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0){ae.__webglFramebuffer[Re]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)ae.__webglFramebuffer[Re][Ie]=i.createFramebuffer()}else ae.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)ae.__webglFramebuffer[Re]=i.createFramebuffer()}else ae.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let Re=0,Ie=Se.length;Re<Ie;Re++){const xt=r.get(Se[Re]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),u.memory.textures++)}if(O.samples>0&&ht(O)===!1){ae.__webglMultisampledFramebuffer=i.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Re=0;Re<Se.length;Re++){const Ie=Se[Re];ae.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ae.__webglColorRenderbuffer[Re]);const xt=c.convert(Ie.format,Ie.colorSpace),Te=c.convert(Ie.type),Fe=U(Ie.internalFormat,xt,Te,Ie.colorSpace,O.isXRRenderTarget===!0),qe=ot(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Fe,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(ae.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),me(i.TEXTURE_CUBE_MAP,b);for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)Ae(ae.__webglFramebuffer[Re][Ie],O,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ie);else Ae(ae.__webglFramebuffer[Re],O,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Re=0,Ie=Se.length;Re<Ie;Re++){const xt=Se[Re],Te=r.get(xt);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),me(i.TEXTURE_2D,xt),Ae(ae.__webglFramebuffer,O,xt,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),S(xt)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,pe.__webglTexture),me(Re,b),b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)Ae(ae.__webglFramebuffer[Ie],O,b,i.COLOR_ATTACHMENT0,Re,Ie);else Ae(ae.__webglFramebuffer,O,b,i.COLOR_ATTACHMENT0,Re,0);S(b)&&_(Re),t.unbindTexture()}O.depthBuffer&&je(O)}function Ut(O){const b=O.textures;for(let ae=0,pe=b.length;ae<pe;ae++){const Se=b[ae];if(S(Se)){const ge=B(O),Ge=r.get(Se).__webglTexture;t.bindTexture(ge,Ge),_(ge),t.unbindTexture()}}}const it=[],V=[];function Xt(O){if(O.samples>0){if(ht(O)===!1){const b=O.textures,ae=O.width,pe=O.height;let Se=i.COLOR_BUFFER_BIT;const ge=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=r.get(O),Re=b.length>1;if(Re)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Se|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Se|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const xt=r.get(b[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,ae,pe,0,0,ae,pe,Se,i.NEAREST),d===!0&&(it.length=0,V.length=0,it.push(i.COLOR_ATTACHMENT0+Ie),O.depthBuffer&&O.resolveDepthBuffer===!1&&(it.push(ge),V.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const xt=r.get(b[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,xt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const b=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ot(O){return Math.min(o.maxSamples,O.samples)}function ht(O){const b=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(O){const b=u.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function Lt(O,b){const ae=O.colorSpace,pe=O.format,Se=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==Zs&&ae!==Fi&&(Rt.getTransfer(ae)===It?(pe!==Ri||Se!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),b}function We(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=le,this.setTexture2D=Q,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=De,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ht}function O2(i,e){function t(r,o=Fi){let c;const u=Rt.getTransfer(o);if(r===Cn)return i.UNSIGNED_BYTE;if(r===Rd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Dd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ix)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===tx)return i.BYTE;if(r===nx)return i.SHORT;if(r===Yo)return i.UNSIGNED_SHORT;if(r===wd)return i.INT;if(r===Ks)return i.UNSIGNED_INT;if(r===fs)return i.FLOAT;if(r===qo)return i.HALF_FLOAT;if(r===sx)return i.ALPHA;if(r===rx)return i.RGB;if(r===Ri)return i.RGBA;if(r===ax)return i.LUMINANCE;if(r===ox)return i.LUMINANCE_ALPHA;if(r===Ra)return i.DEPTH_COMPONENT;if(r===Dr)return i.DEPTH_STENCIL;if(r===lx)return i.RED;if(r===Ud)return i.RED_INTEGER;if(r===cx)return i.RG;if(r===Ld)return i.RG_INTEGER;if(r===Bd)return i.RGBA_INTEGER;if(r===Cc||r===wc||r===Rc||r===Dc)if(u===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Cc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Cc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qh||r===Kh||r===Zh||r===jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===$h||r===ed)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Jh||r===$h)return u===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ed)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===td||r===nd||r===id||r===sd||r===rd||r===ad||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===td)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===id)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ad)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===od)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ld)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ud)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uc||r===md||r===gd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Uc)return u===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ux||r===vd||r===xd||r===Ad)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Uc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rr?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const P2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Sn,c=e.properties.get(o);c.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new an({vertexShader:P2,fragmentShader:N2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new Pa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F2 extends vs{constructor(e,t){super();const r=this;let o=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,v=null,x=null,A=null,y=null;const M=new I2,S=t.getContextAttributes();let _=null,B=null;const U=[],C=[],z=new Pe;let N=null;const H=new ii;H.viewport=new kt;const Y=new ii;Y.viewport=new kt;const w=[H,Y],T=new rM;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=U[Z];return ce===void 0&&(ce=new _h,U[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=U[Z];return ce===void 0&&(ce=new _h,U[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=U[Z];return ce===void 0&&(ce=new _h,U[Z]=ce),ce.getHandSpace()};function W(Z){const ce=C.indexOf(Z.inputSource);if(ce===-1)return;const Ae=U[ce];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,p||u),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function P(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<U.length;Z++){const ce=C[Z];ce!==null&&(C[Z]=null,U[Z].disconnect(ce))}G=null,le=null,M.reset(),e.setRenderTarget(_),A=null,x=null,v=null,o=null,B=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:A},this.getBinding=function(){return v},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",P),o.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Me=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=S.stencil?Dr:Ra,Me=S.stencil?Rr:Ks);const je={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:c};v=new XRWebGLBinding(o,t),x=v.createProjectionLayer(je),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new Pn(x.textureWidth,x.textureHeight,{format:Ri,type:Cn,depthTexture:new Id(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Ae={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};A=new XRWebGLLayer(o,t,Ae),o.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),B=new Pn(A.framebufferWidth,A.framebufferHeight,{format:Ri,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}B.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),ye.setContext(o),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(Z){for(let ce=0;ce<Z.removed.length;ce++){const Ae=Z.removed[ce],Me=C.indexOf(Ae);Me>=0&&(C[Me]=null,U[Me].disconnect(Ae))}for(let ce=0;ce<Z.added.length;ce++){const Ae=Z.added[ce];let Me=C.indexOf(Ae);if(Me===-1){for(let je=0;je<U.length;je++)if(je>=C.length){C.push(Ae),Me=je;break}else if(C[je]===null){C[je]=Ae,Me=je;break}if(Me===-1)break}const be=U[Me];be&&be.connect(Ae)}}const F=new j,X=new j;function k(Z,ce,Ae){F.setFromMatrixPosition(ce.matrixWorld),X.setFromMatrixPosition(Ae.matrixWorld);const Me=F.distanceTo(X),be=ce.projectionMatrix.elements,je=Ae.projectionMatrix.elements,De=be[14]/(be[10]-1),At=be[14]/(be[10]+1),Ut=(be[9]+1)/be[5],it=(be[9]-1)/be[5],V=(be[8]-1)/be[0],Xt=(je[8]+1)/je[0],ot=De*V,ht=De*Xt,Xe=Me/(-V+Xt),Lt=Xe*-V;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(Xe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const We=De+Xe,O=At+Xe,b=ot-Lt,ae=ht+(Me-Lt),pe=Ut*At/O*We,Se=it*At/O*We;Z.projectionMatrix.makePerspective(b,ae,pe,Se,We,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ce=Z.near,Ae=Z.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(Ae=M.depthFar)),T.near=Y.near=H.near=ce,T.far=Y.far=H.far=Ae,(G!==T.near||le!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),G=T.near,le=T.far),H.layers.mask=Z.layers.mask|2,Y.layers.mask=Z.layers.mask|4,T.layers.mask=H.layers.mask|Y.layers.mask;const Me=Z.parent,be=T.cameras;fe(T,Me);for(let je=0;je<be.length;je++)fe(be[je],Me);be.length===2?k(T,H,Y):T.projectionMatrix.copy(H.projectionMatrix),L(Z,T,Me)};function L(Z,ce,Ae){Ae===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_d*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(x===null&&A===null))return d},this.setFoveation=function(Z){d=Z,x!==null&&(x.fixedFoveation=Z),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let ne=null;function me(Z,ce){if(g=ce.getViewerPose(p||u),y=ce,g!==null){const Ae=g.views;A!==null&&(e.setRenderTargetFramebuffer(B,A.framebuffer),e.setRenderTarget(B));let Me=!1;Ae.length!==T.cameras.length&&(T.cameras.length=0,Me=!0);for(let De=0;De<Ae.length;De++){const At=Ae[De];let Ut=null;if(A!==null)Ut=A.getViewport(At);else{const V=v.getViewSubImage(x,At);Ut=V.viewport,De===0&&(e.setRenderTargetTextures(B,V.colorTexture,x.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(B))}let it=w[De];it===void 0&&(it=new ii,it.layers.enable(De),it.viewport=new kt,w[De]=it),it.matrix.fromArray(At.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(At.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),De===0&&(T.matrix.copy(it.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Me===!0&&T.cameras.push(it)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const De=v.getDepthInformation(Ae[0]);De&&De.isValid&&De.texture&&M.init(e,De,o.renderState)}}for(let Ae=0;Ae<U.length;Ae++){const Me=C[Ae],be=U[Ae];Me!==null&&be!==void 0&&be.update(Me,ce,p||u)}ne&&ne(Z,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),y=null}const ye=new Cx;ye.setAnimationLoop(me),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}}const Er=new gs,z2=new $t;function H2(i,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,_x(i)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,B,U,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&A(S,_,C)):_.isMeshMatcapMaterial?(c(S,_),y(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),M(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?d(S,_,B,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===_n&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===_n&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const B=e.get(_),U=B.envMap,C=B.envMapRotation;U&&(S.envMap.value=U,Er.copy(C),Er.x*=-1,Er.y*=-1,Er.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),S.envMapRotation.value.setFromMatrix4(z2.makeRotationFromEuler(Er)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,B,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*B,S.scale.value=U*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function A(S,_,B){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===_n&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=B.texture,S.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,_){_.matcap&&(S.matcap.value=_.matcap)}function M(S,_){const B=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(B.matrixWorld),S.nearDistance.value=B.shadow.camera.near,S.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function G2(i,e,t,r){let o={},c={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(B,U){const C=U.program;r.uniformBlockBinding(B,C)}function p(B,U){let C=o[B.id];C===void 0&&(y(B),C=g(B),o[B.id]=C,B.addEventListener("dispose",S));const z=U.program;r.updateUBOMapping(B,z);const N=e.render.frame;c[B.id]!==N&&(x(B),c[B.id]=N)}function g(B){const U=v();B.__bindingPointIndex=U;const C=i.createBuffer(),z=B.__size,N=B.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,z,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,U,C),C}function v(){for(let B=0;B<h;B++)if(u.indexOf(B)===-1)return u.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const U=o[B.id],C=B.uniforms,z=B.__cache;i.bindBuffer(i.UNIFORM_BUFFER,U);for(let N=0,H=C.length;N<H;N++){const Y=Array.isArray(C[N])?C[N]:[C[N]];for(let w=0,T=Y.length;w<T;w++){const G=Y[w];if(A(G,N,w,z)===!0){const le=G.__offset,W=Array.isArray(G.value)?G.value:[G.value];let P=0;for(let Q=0;Q<W.length;Q++){const F=W[Q],X=M(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,le+P,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,le,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function A(B,U,C,z){const N=B.value,H=U+"_"+C;if(z[H]===void 0)return typeof N=="number"||typeof N=="boolean"?z[H]=N:z[H]=N.clone(),!0;{const Y=z[H];if(typeof N=="number"||typeof N=="boolean"){if(Y!==N)return z[H]=N,!0}else if(Y.equals(N)===!1)return Y.copy(N),!0}return!1}function y(B){const U=B.uniforms;let C=0;const z=16;for(let H=0,Y=U.length;H<Y;H++){const w=Array.isArray(U[H])?U[H]:[U[H]];for(let T=0,G=w.length;T<G;T++){const le=w[T],W=Array.isArray(le.value)?le.value:[le.value];for(let P=0,Q=W.length;P<Q;P++){const F=W[P],X=M(F),k=C%z,fe=k%X.boundary,L=k+fe;C+=fe,L!==0&&z-L<X.storage&&(C+=z-L),le.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=X.storage}}}const N=C%z;return N>0&&(C+=z-N),B.__size=C,B.__cache={},this}function M(B){const U={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(U.boundary=4,U.storage=4):B.isVector2?(U.boundary=8,U.storage=8):B.isVector3||B.isColor?(U.boundary=16,U.storage=12):B.isVector4?(U.boundary=16,U.storage=16):B.isMatrix3?(U.boundary=48,U.storage=48):B.isMatrix4?(U.boundary=64,U.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),U}function S(B){const U=B.target;U.removeEventListener("dispose",S);const C=u.indexOf(U.__bindingPointIndex);u.splice(C,1),i.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function _(){for(const B in o)i.deleteBuffer(o[B]);u=[],o={},c={}}return{bind:d,update:p,dispose:_}}class V2{constructor(e={}){const{canvas:t=uy(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const y=new Uint32Array(4),M=new Int32Array(4);let S=null,_=null;const B=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=Qs,this.toneMappingExposure=1;const C=this;let z=!1,N=0,H=0,Y=null,w=-1,T=null;const G=new kt,le=new kt;let W=null;const P=new pt(0);let Q=0,F=t.width,X=t.height,k=1,fe=null,L=null;const ne=new kt(0,0,F,X),me=new kt(0,0,F,X);let ye=!1;const Z=new Ex;let ce=!1,Ae=!1;this.transmissionResolutionScale=1;const Me=new $t,be=new $t,je=new j,De=new kt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function it(){return Y===null?k:1}let V=r;function Xt(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),V===null){const $="webgl2";if(V=Xt($,D),V===null)throw Xt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ot,ht,Xe,Lt,We,O,b,ae,pe,Se,ge,Ge,Re,Ie,xt,Te,Fe,qe,Ve,ze,at,Ke,Bt,J;function Be(){ot=new JT(V),ot.init(),Ke=new O2(V,ot),ht=new YT(V,ot,e,Ke),Xe=new L2(V,ot),ht.reverseDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),Lt=new tb(V),We=new A2,O=new B2(V,ot,Xe,We,ht,Ke,Lt),b=new QT(C),ae=new jT(C),pe=new lM(V),Bt=new XT(V,pe),Se=new $T(V,pe,Lt,Bt),ge=new ib(V,Se,pe,Lt),Ve=new nb(V,ht,O),Te=new qT(We),Ge=new x2(C,b,ae,ot,ht,Bt,Te),Re=new H2(C,We),Ie=new S2,xt=new C2(ot),qe=new kT(C,b,ae,Xe,ge,A,d),Fe=new D2(C,ge,ht),J=new G2(V,Lt,ht,Xe),ze=new WT(V,ot,Lt),at=new eb(V,ot,Lt),Lt.programs=Ge.programs,C.capabilities=ht,C.extensions=ot,C.properties=We,C.renderLists=Ie,C.shadowMap=Fe,C.state=Xe,C.info=Lt}Be();const ue=new F2(C,V);this.xr=ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=ot.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ot.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(D){D!==void 0&&(k=D,this.setSize(F,X,!1))},this.getSize=function(D){return D.set(F,X)},this.setSize=function(D,$,re=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,X=$,t.width=Math.floor(D*k),t.height=Math.floor($*k),re===!0&&(t.style.width=D+"px",t.style.height=$+"px"),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(F*k,X*k).floor()},this.setDrawingBufferSize=function(D,$,re){F=D,X=$,k=re,t.width=Math.floor(D*re),t.height=Math.floor($*re),this.setViewport(0,0,D,$)},this.getCurrentViewport=function(D){return D.copy(G)},this.getViewport=function(D){return D.copy(ne)},this.setViewport=function(D,$,re,ie){D.isVector4?ne.set(D.x,D.y,D.z,D.w):ne.set(D,$,re,ie),Xe.viewport(G.copy(ne).multiplyScalar(k).round())},this.getScissor=function(D){return D.copy(me)},this.setScissor=function(D,$,re,ie){D.isVector4?me.set(D.x,D.y,D.z,D.w):me.set(D,$,re,ie),Xe.scissor(le.copy(me).multiplyScalar(k).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(D){Xe.setScissorTest(ye=D)},this.setOpaqueSort=function(D){fe=D},this.setTransparentSort=function(D){L=D},this.getClearColor=function(D){return D.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(D=!0,$=!0,re=!0){let ie=0;if(D){let ee=!1;if(Y!==null){const Ee=Y.texture.format;ee=Ee===Bd||Ee===Ld||Ee===Ud}if(ee){const Ee=Y.texture.type,Ce=Ee===Cn||Ee===Ks||Ee===Yo||Ee===Rr||Ee===Rd||Ee===Dd,Ne=qe.getClearColor(),Oe=qe.getClearAlpha(),tt=Ne.r,nt=Ne.g,Qe=Ne.b;Ce?(y[0]=tt,y[1]=nt,y[2]=Qe,y[3]=Oe,V.clearBufferuiv(V.COLOR,0,y)):(M[0]=tt,M[1]=nt,M[2]=Qe,M[3]=Oe,V.clearBufferiv(V.COLOR,0,M))}else ie|=V.COLOR_BUFFER_BIT}$&&(ie|=V.DEPTH_BUFFER_BIT),re&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),qe.dispose(),Ie.dispose(),xt.dispose(),We.dispose(),b.dispose(),ae.dispose(),ge.dispose(),Bt.dispose(),J.dispose(),Ge.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Jo),ue.removeEventListener("sessionend",za),Ui.stop()};function xe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const D=Lt.autoReset,$=Fe.enabled,re=Fe.autoUpdate,ie=Fe.needsUpdate,ee=Fe.type;Be(),Lt.autoReset=D,Fe.enabled=$,Fe.autoUpdate=re,Fe.needsUpdate=ie,Fe.type=ee}function Ue(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function et(D){const $=D.target;$.removeEventListener("dispose",et),Wt($)}function Wt(D){on(D),We.remove(D)}function on(D){const $=We.get(D).programs;$!==void 0&&($.forEach(function(re){Ge.releaseProgram(re)}),D.isShaderMaterial&&Ge.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,re,ie,ee,Ee){$===null&&($=At);const Ce=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=zc(D,$,re,ie,ee);Xe.setMaterial(ie,Ce);let Oe=re.index,tt=1;if(ie.wireframe===!0){if(Oe=Se.getWireframeAttribute(re),Oe===void 0)return;tt=2}const nt=re.drawRange,Qe=re.attributes.position;let _t=nt.start*tt,St=(nt.start+nt.count)*tt;Ee!==null&&(_t=Math.max(_t,Ee.start*tt),St=Math.min(St,(Ee.start+Ee.count)*tt)),Oe!==null?(_t=Math.max(_t,0),St=Math.min(St,Oe.count)):Qe!=null&&(_t=Math.max(_t,0),St=Math.min(St,Qe.count));const Vt=St-_t;if(Vt<0||Vt===1/0)return;Bt.setup(ee,ie,Ne,re,Oe);let bt,st=ze;if(Oe!==null&&(bt=pe.get(Oe),st=at,st.setIndex(bt)),ee.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*it()),st.setMode(V.LINES)):st.setMode(V.TRIANGLES);else if(ee.isLine){let Ze=ie.linewidth;Ze===void 0&&(Ze=1),Xe.setLineWidth(Ze*it()),ee.isLineSegments?st.setMode(V.LINES):ee.isLineLoop?st.setMode(V.LINE_LOOP):st.setMode(V.LINE_STRIP)}else ee.isPoints?st.setMode(V.POINTS):ee.isSprite&&st.setMode(V.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)st.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))st.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Ze=ee._multiDrawStarts,un=ee._multiDrawCounts,Et=ee._multiDrawCount,Xn=Oe?pe.get(Oe).bytesPerElement:1,_i=We.get(ie).currentProgram.getUniforms();for(let Fn=0;Fn<Et;Fn++)_i.setValue(V,"_gl_DrawID",Fn),st.render(Ze[Fn]/Xn,un[Fn])}else if(ee.isInstancedMesh)st.renderInstances(_t,Vt,ee.count);else if(re.isInstancedBufferGeometry){const Ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,un=Math.min(re.instanceCount,Ze);st.renderInstances(_t,Vt,un)}else st.render(_t,Vt)};function Tt(D,$,re){D.transparent===!0&&D.side===kn&&D.forceSinglePass===!1?(D.side=_n,D.needsUpdate=!0,cn(D,$,re),D.side=ms,D.needsUpdate=!0,cn(D,$,re),D.side=kn):cn(D,$,re)}this.compile=function(D,$,re=null){re===null&&(re=D),_=xt.get(re),_.init($),U.push(_),re.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),D!==re&&D.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),_.setupLights();const ie=new Set;return D.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ee=ee.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const Ne=Ee[Ce];Tt(Ne,re,ee),ie.add(Ne)}else Tt(Ee,re,ee),ie.add(Ee)}),U.pop(),_=null,ie},this.compileAsync=function(D,$,re=null){const ie=this.compile(D,$,re);return new Promise(ee=>{function Ee(){if(ie.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&ie.delete(Ce)}),ie.size===0){ee(D);return}setTimeout(Ee,10)}ot.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Nn=null;function In(D){Nn&&Nn(D)}function Jo(){Ui.stop()}function za(){Ui.start()}const Ui=new Cx;Ui.setAnimationLoop(In),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(D){Nn=D,ue.setAnimationLoop(D),D===null?Ui.stop():Ui.start()},ue.addEventListener("sessionstart",Jo),ue.addEventListener("sessionend",za),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera($),$=ue.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,$,Y),_=xt.get(D,U.length),_.init($),U.push(_),be.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Z.setFromProjectionMatrix(be),Ae=this.localClippingEnabled,ce=Te.init(this.clippingPlanes,Ae),S=Ie.get(D,B.length),S.init(),B.push(S),ue.enabled===!0&&ue.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Lr(Ee,$,-1/0,C.sortObjects)}Lr(D,$,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(fe,L),Ut=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ut&&qe.addToRenderList(S,D),this.info.render.frame++,ce===!0&&Te.beginShadows();const re=_.state.shadowsArray;Fe.render(re,D,$),ce===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,ee=S.transmissive;if(_.setupLights(),$.isArrayCamera){const Ee=$.cameras;if(ee.length>0)for(let Ce=0,Ne=Ee.length;Ce<Ne;Ce++){const Oe=Ee[Ce];$o(ie,ee,D,Oe)}Ut&&qe.render(D);for(let Ce=0,Ne=Ee.length;Ce<Ne;Ce++){const Oe=Ee[Ce];Ha(S,D,Oe,Oe.viewport)}}else ee.length>0&&$o(ie,ee,D,$),Ut&&qe.render(D),Ha(S,D,$);Y!==null&&H===0&&(O.updateMultisampleRenderTarget(Y),O.updateRenderTargetMipmap(Y)),D.isScene===!0&&D.onAfterRender(C,D,$),Bt.resetDefaultState(),w=-1,T=null,U.pop(),U.length>0?(_=U[U.length-1],ce===!0&&Te.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?S=B[B.length-1]:S=null};function Lr(D,$,re,ie){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Z.intersectsSprite(D)){ie&&De.setFromMatrixPosition(D.matrixWorld).applyMatrix4(be);const Ce=ge.update(D),Ne=D.material;Ne.visible&&S.push(D,Ce,Ne,re,De.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Z.intersectsObject(D))){const Ce=ge.update(D),Ne=D.material;if(ie&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),De.copy(D.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(D.matrixWorld).applyMatrix4(be)),Array.isArray(Ne)){const Oe=Ce.groups;for(let tt=0,nt=Oe.length;tt<nt;tt++){const Qe=Oe[tt],_t=Ne[Qe.materialIndex];_t&&_t.visible&&S.push(D,Ce,_t,re,De.z,Qe)}}else Ne.visible&&S.push(D,Ce,Ne,re,De.z,null)}}const Ee=D.children;for(let Ce=0,Ne=Ee.length;Ce<Ne;Ce++)Lr(Ee[Ce],$,re,ie)}function Ha(D,$,re,ie){const ee=D.opaque,Ee=D.transmissive,Ce=D.transparent;_.setupLightsView(re),ce===!0&&Te.setGlobalState(C.clippingPlanes,re),ie&&Xe.viewport(G.copy(ie)),ee.length>0&&Kn(ee,$,re),Ee.length>0&&Kn(Ee,$,re),Ce.length>0&&Kn(Ce,$,re),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function $o(D,$,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ie.id]===void 0&&(_.state.transmissionRenderTarget[ie.id]=new Pn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?qo:Cn,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[ie.id],Ce=ie.viewport||G;Ee.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const Ne=C.getRenderTarget();C.setRenderTarget(Ee),C.getClearColor(P),Q=C.getClearAlpha(),Q<1&&C.setClearColor(16777215,.5),C.clear(),Ut&&qe.render(re);const Oe=C.toneMapping;C.toneMapping=Qs;const tt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),_.setupLightsView(ie),ce===!0&&Te.setGlobalState(C.clippingPlanes,ie),Kn(D,re,ie),O.updateMultisampleRenderTarget(Ee),O.updateRenderTargetMipmap(Ee),ot.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Qe=0,_t=$.length;Qe<_t;Qe++){const St=$[Qe],Vt=St.object,bt=St.geometry,st=St.material,Ze=St.group;if(st.side===kn&&Vt.layers.test(ie.layers)){const un=st.side;st.side=_n,st.needsUpdate=!0,ln(Vt,re,ie,bt,st,Ze),st.side=un,st.needsUpdate=!0,nt=!0}}nt===!0&&(O.updateMultisampleRenderTarget(Ee),O.updateRenderTargetMipmap(Ee))}C.setRenderTarget(Ne),C.setClearColor(P,Q),tt!==void 0&&(ie.viewport=tt),C.toneMapping=Oe}function Kn(D,$,re){const ie=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Ee=D.length;ee<Ee;ee++){const Ce=D[ee],Ne=Ce.object,Oe=Ce.geometry,tt=ie===null?Ce.material:ie,nt=Ce.group;Ne.layers.test(re.layers)&&ln(Ne,$,re,Oe,tt,nt)}}function ln(D,$,re,ie,ee,Ee){D.onBeforeRender(C,$,re,ie,ee,Ee),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ee.onBeforeRender(C,$,re,ie,D,Ee),ee.transparent===!0&&ee.side===kn&&ee.forceSinglePass===!1?(ee.side=_n,ee.needsUpdate=!0,C.renderBufferDirect(re,$,ie,ee,D,Ee),ee.side=ms,ee.needsUpdate=!0,C.renderBufferDirect(re,$,ie,ee,D,Ee),ee.side=kn):C.renderBufferDirect(re,$,ie,ee,D,Ee),D.onAfterRender(C,$,re,ie,ee,Ee)}function cn(D,$,re){$.isScene!==!0&&($=At);const ie=We.get(D),ee=_.state.lights,Ee=_.state.shadowsArray,Ce=ee.state.version,Ne=Ge.getParameters(D,ee.state,Ee,$,re),Oe=Ge.getProgramCacheKey(Ne);let tt=ie.programs;ie.environment=D.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(D.isMeshStandardMaterial?ae:b).get(D.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,tt===void 0&&(D.addEventListener("dispose",et),tt=new Map,ie.programs=tt);let nt=tt.get(Oe);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===Ce)return Br(D,Ne),nt}else Ne.uniforms=Ge.getUniforms(D),D.onBeforeCompile(Ne,C),nt=Ge.acquireProgram(Ne,Oe),tt.set(Oe,nt),ie.uniforms=Ne.uniforms;const Qe=ie.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qe.clippingPlanes=Te.uniform),Br(D,Ne),ie.needsLights=el(D),ie.lightsStateVersion=Ce,ie.needsLights&&(Qe.ambientLightColor.value=ee.state.ambient,Qe.lightProbe.value=ee.state.probe,Qe.directionalLights.value=ee.state.directional,Qe.directionalLightShadows.value=ee.state.directionalShadow,Qe.spotLights.value=ee.state.spot,Qe.spotLightShadows.value=ee.state.spotShadow,Qe.rectAreaLights.value=ee.state.rectArea,Qe.ltc_1.value=ee.state.rectAreaLTC1,Qe.ltc_2.value=ee.state.rectAreaLTC2,Qe.pointLights.value=ee.state.point,Qe.pointLightShadows.value=ee.state.pointShadow,Qe.hemisphereLights.value=ee.state.hemi,Qe.directionalShadowMap.value=ee.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Qe.spotShadowMap.value=ee.state.spotShadowMap,Qe.spotLightMatrix.value=ee.state.spotLightMatrix,Qe.spotLightMap.value=ee.state.spotLightMap,Qe.pointShadowMap.value=ee.state.pointShadowMap,Qe.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=nt,ie.uniformsList=null,nt}function Vi(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=Lc.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function Br(D,$){const re=We.get(D);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function zc(D,$,re,ie,ee){$.isScene!==!0&&($=At),O.resetTextureUnits();const Ee=$.fog,Ce=ie.isMeshStandardMaterial?$.environment:null,Ne=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Zs,Oe=(ie.isMeshStandardMaterial?ae:b).get(ie.envMap||Ce),tt=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!re.morphAttributes.position,_t=!!re.morphAttributes.normal,St=!!re.morphAttributes.color;let Vt=Qs;ie.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const bt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,st=bt!==void 0?bt.length:0,Ze=We.get(ie),un=_.state.lights;if(ce===!0&&(Ae===!0||D!==T)){const Qt=D===T&&ie.id===w;Te.setState(ie,D,Qt)}let Et=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==un.state.version||Ze.outputColorSpace!==Ne||ee.isBatchedMesh&&Ze.batching===!1||!ee.isBatchedMesh&&Ze.batching===!0||ee.isBatchedMesh&&Ze.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ze.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ze.instancing===!1||!ee.isInstancedMesh&&Ze.instancing===!0||ee.isSkinnedMesh&&Ze.skinning===!1||!ee.isSkinnedMesh&&Ze.skinning===!0||ee.isInstancedMesh&&Ze.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ze.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ze.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ze.instancingMorph===!1&&ee.morphTexture!==null||Ze.envMap!==Oe||ie.fog===!0&&Ze.fog!==Ee||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Te.numPlanes||Ze.numIntersection!==Te.numIntersection)||Ze.vertexAlphas!==tt||Ze.vertexTangents!==nt||Ze.morphTargets!==Qe||Ze.morphNormals!==_t||Ze.morphColors!==St||Ze.toneMapping!==Vt||Ze.morphTargetsCount!==st)&&(Et=!0):(Et=!0,Ze.__version=ie.version);let Xn=Ze.currentProgram;Et===!0&&(Xn=cn(ie,$,ee));let _i=!1,Fn=!1,mn=!1;const Ot=Xn.getUniforms(),zn=Ze.uniforms;if(Xe.useProgram(Xn.program)&&(_i=!0,Fn=!0,mn=!0),ie.id!==w&&(w=ie.id,Fn=!0),_i||T!==D){Xe.buffers.depth.getReversed()?(Me.copy(D.projectionMatrix),hy(Me),dy(Me),Ot.setValue(V,"projectionMatrix",Me)):Ot.setValue(V,"projectionMatrix",D.projectionMatrix),Ot.setValue(V,"viewMatrix",D.matrixWorldInverse);const En=Ot.map.cameraPosition;En!==void 0&&En.setValue(V,je.setFromMatrixPosition(D.matrixWorld)),ht.logarithmicDepthBuffer&&Ot.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ot.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),T!==D&&(T=D,Fn=!0,mn=!0)}if(ee.isSkinnedMesh){Ot.setOptional(V,ee,"bindMatrix"),Ot.setOptional(V,ee,"bindMatrixInverse");const Qt=ee.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Ot.setValue(V,"boneTexture",Qt.boneTexture,O))}ee.isBatchedMesh&&(Ot.setOptional(V,ee,"batchingTexture"),Ot.setValue(V,"batchingTexture",ee._matricesTexture,O),Ot.setOptional(V,ee,"batchingIdTexture"),Ot.setValue(V,"batchingIdTexture",ee._indirectTexture,O),Ot.setOptional(V,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ot.setValue(V,"batchingColorTexture",ee._colorsTexture,O));const wn=re.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Ve.update(ee,re,Xn),(Fn||Ze.receiveShadow!==ee.receiveShadow)&&(Ze.receiveShadow=ee.receiveShadow,Ot.setValue(V,"receiveShadow",ee.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(zn.envMap.value=Oe,zn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&$.environment!==null&&(zn.envMapIntensity.value=$.environmentIntensity),Fn&&(Ot.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ze.needsLights&&Hc(zn,mn),Ee&&ie.fog===!0&&Re.refreshFogUniforms(zn,Ee),Re.refreshMaterialUniforms(zn,ie,k,X,_.state.transmissionRenderTarget[D.id]),Lc.upload(V,Vi(Ze),zn,O)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Lc.upload(V,Vi(Ze),zn,O),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ot.setValue(V,"center",ee.center),Ot.setValue(V,"modelViewMatrix",ee.modelViewMatrix),Ot.setValue(V,"normalMatrix",ee.normalMatrix),Ot.setValue(V,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Qt=ie.uniformsGroups;for(let En=0,Or=Qt.length;En<Or;En++){const Wn=Qt[En];J.update(Wn,Xn),J.bind(Wn,Xn)}}return Xn}function Hc(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function el(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(D,$,re){We.get(D.texture).__webglTexture=$,We.get(D.depthTexture).__webglTexture=re;const ie=We.get(D);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=re===void 0,ie.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,$){const re=We.get(D);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0};const js=V.createFramebuffer();this.setRenderTarget=function(D,$=0,re=0){Y=D,N=$,H=re;let ie=!0,ee=null,Ee=!1,Ce=!1;if(D){const Oe=We.get(D);if(Oe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(V.FRAMEBUFFER,null),ie=!1;else if(Oe.__webglFramebuffer===void 0)O.setupRenderTarget(D);else if(Oe.__hasExternalTextures)O.rebindTextures(D,We.get(D.texture).__webglTexture,We.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Qe=D.depthTexture;if(Oe.__boundDepthTexture!==Qe){if(Qe!==null&&We.has(Qe)&&(D.width!==Qe.image.width||D.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(D)}}const tt=D.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const nt=We.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(nt[$])?ee=nt[$][re]:ee=nt[$],Ee=!0):D.samples>0&&O.useMultisampledRTT(D)===!1?ee=We.get(D).__webglMultisampledFramebuffer:Array.isArray(nt)?ee=nt[re]:ee=nt,G.copy(D.viewport),le.copy(D.scissor),W=D.scissorTest}else G.copy(ne).multiplyScalar(k).floor(),le.copy(me).multiplyScalar(k).floor(),W=ye;if(re!==0&&(ee=js),Xe.bindFramebuffer(V.FRAMEBUFFER,ee)&&ie&&Xe.drawBuffers(D,ee),Xe.viewport(G),Xe.scissor(le),Xe.setScissorTest(W),Ee){const Oe=We.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,re)}else if(Ce){const Oe=We.get(D.texture),tt=$;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oe.__webglTexture,re,tt)}else if(D!==null&&re!==0){const Oe=We.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,re)}w=-1},this.readRenderTargetPixels=function(D,$,re,ie,ee,Ee,Ce){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=We.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Xe.bindFramebuffer(V.FRAMEBUFFER,Ne);try{const Oe=D.texture,tt=Oe.format,nt=Oe.type;if(!ht.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-ie&&re>=0&&re<=D.height-ee&&V.readPixels($,re,ie,ee,Ke.convert(tt),Ke.convert(nt),Ee)}finally{const Oe=Y!==null?We.get(Y).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(D,$,re,ie,ee,Ee,Ce){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=We.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){const Oe=D.texture,tt=Oe.format,nt=Oe.type;if(!ht.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=D.width-ie&&re>=0&&re<=D.height-ee){Xe.bindFramebuffer(V.FRAMEBUFFER,Ne);const Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,Ee.byteLength,V.STREAM_READ),V.readPixels($,re,ie,ee,Ke.convert(tt),Ke.convert(nt),0);const _t=Y!==null?We.get(Y).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,_t);const St=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await fy(V,St,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ee),V.deleteBuffer(Qe),V.deleteSync(St),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,$=null,re=0){D.isTexture!==!0&&(Ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,D=arguments[1]);const ie=Math.pow(2,-re),ee=Math.floor(D.image.width*ie),Ee=Math.floor(D.image.height*ie),Ce=$!==null?$.x:0,Ne=$!==null?$.y:0;O.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ce,Ne,ee,Ee),Xe.unbindTexture()};const Ga=V.createFramebuffer(),ki=V.createFramebuffer();this.copyTextureToTexture=function(D,$,re=null,ie=null,ee=0,Ee=null){D.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,D=arguments[1],$=arguments[2],Ee=arguments[3]||0,re=null),Ee===null&&(ee!==0?(Ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=ee,ee=0):Ee=0);let Ce,Ne,Oe,tt,nt,Qe,_t,St,Vt;const bt=D.isCompressedTexture?D.mipmaps[Ee]:D.image;if(re!==null)Ce=re.max.x-re.min.x,Ne=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,nt=re.min.y,Qe=re.isBox3?re.min.z:0;else{const wn=Math.pow(2,-ee);Ce=Math.floor(bt.width*wn),Ne=Math.floor(bt.height*wn),D.isDataArrayTexture?Oe=bt.depth:D.isData3DTexture?Oe=Math.floor(bt.depth*wn):Oe=1,tt=0,nt=0,Qe=0}ie!==null?(_t=ie.x,St=ie.y,Vt=ie.z):(_t=0,St=0,Vt=0);const st=Ke.convert($.format),Ze=Ke.convert($.type);let un;$.isData3DTexture?(O.setTexture3D($,0),un=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(O.setTexture2DArray($,0),un=V.TEXTURE_2D_ARRAY):(O.setTexture2D($,0),un=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const Et=V.getParameter(V.UNPACK_ROW_LENGTH),Xn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),_i=V.getParameter(V.UNPACK_SKIP_PIXELS),Fn=V.getParameter(V.UNPACK_SKIP_ROWS),mn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,bt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const Ot=D.isDataArrayTexture||D.isData3DTexture,zn=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const wn=We.get(D),Qt=We.get($),En=We.get(wn.__renderTarget),Or=We.get(Qt.__renderTarget);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Wn=0;Wn<Oe;Wn++)Ot&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.get(D).__webglTexture,ee,Qe+Wn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.get($).__webglTexture,Ee,Vt+Wn)),V.blitFramebuffer(tt,nt,Ce,Ne,_t,St,Ce,Ne,V.DEPTH_BUFFER_BIT,V.NEAREST);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ee!==0||D.isRenderTargetTexture||We.has(D)){const wn=We.get(D),Qt=We.get($);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,Ga),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,ki);for(let En=0;En<Oe;En++)Ot?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,wn.__webglTexture,ee,Qe+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wn.__webglTexture,ee),zn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qt.__webglTexture,Ee,Vt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Qt.__webglTexture,Ee),ee!==0?V.blitFramebuffer(tt,nt,Ce,Ne,_t,St,Ce,Ne,V.COLOR_BUFFER_BIT,V.NEAREST):zn?V.copyTexSubImage3D(un,Ee,_t,St,Vt+En,tt,nt,Ce,Ne):V.copyTexSubImage2D(un,Ee,_t,St,tt,nt,Ce,Ne);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else zn?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(un,Ee,_t,St,Vt,Ce,Ne,Oe,st,Ze,bt.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(un,Ee,_t,St,Vt,Ce,Ne,Oe,st,bt.data):V.texSubImage3D(un,Ee,_t,St,Vt,Ce,Ne,Oe,st,Ze,bt):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ee,_t,St,Ce,Ne,st,Ze,bt.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ee,_t,St,bt.width,bt.height,st,bt.data):V.texSubImage2D(V.TEXTURE_2D,Ee,_t,St,Ce,Ne,st,Ze,bt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,_i),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,mn),Ee===0&&$.generateMipmaps&&V.generateMipmap(un),Xe.unbindTexture()},this.copyTextureToTexture3D=function(D,$,re=null,ie=null,ee=0){return D.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,ie=arguments[1]||null,D=arguments[2],$=arguments[3],ee=arguments[4]||0),Ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,$,re,ie,ee)},this.initRenderTarget=function(D){We.get(D).__webglFramebuffer===void 0&&O.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?O.setTextureCube(D,0):D.isData3DTexture?O.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?O.setTexture2DArray(D,0):O.setTexture2D(D,0),Xe.unbindTexture()},this.resetState=function(){N=0,H=0,Y=null,Xe.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}/**
 * postprocessing v6.36.7 build Thu Feb 06 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Uh=1/1e3,k2=1e3,X2=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*Uh}get fixedDelta(){return this._fixedDelta*Uh}set fixedDelta(i){this._fixedDelta=i*k2}get elapsed(){return this._elapsed*Uh}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},W2=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Gi;return t.setAttribute("position",new oi(i,3)),t.setAttribute("uv",new oi(e,2)),t})(),Ai=class yd{static get fullscreenGeometry(){return W2}constructor(e="Pass",t=new Sd,r=new Pd){this.name=e,this.renderer=null,this.scene=t,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new si(yd.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Sd),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Ur){}render(e,t,r,o,c){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,r){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Pn||t instanceof Ia||t instanceof Sn||t instanceof yd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Y2=class extends Ai{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,r,o){const c=i.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},q2=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Lx="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Bx=class extends an{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new ft(null),opacity:new ft(1)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:q2,vertexShader:Lx})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},Q2=class extends Ai{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new Bx,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new Pn(1,1,{minFilter:Bn,magFilter:Bn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,r,o){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Cn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===Ft&&(this.renderTarget.texture.colorSpace=Ft))}},P0=new pt,Gd=class extends Ai{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,r,o){const c=this.overrideClearColor,u=this.overrideClearAlpha,h=i.getClearAlpha(),d=c!==null,p=u>=0;d?(i.getClearColor(P0),i.setClearColor(c,p?u:h)):p&&i.setClearAlpha(u),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),d?i.setClearColor(P0,h):p&&i.setClearAlpha(h)}},K2=class extends Ai{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new Gd(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,r,o){const c=i.getContext(),u=i.state.buffers,h=this.scene,d=this.camera,p=this.clearPass,g=this.inverted?0:1,v=1-g;u.color.setMask(!1),u.depth.setMask(!1),u.color.setLocked(!0),u.depth.setLocked(!0),u.stencil.setTest(!0),u.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),u.stencil.setFunc(c.ALWAYS,g,4294967295),u.stencil.setClear(v),u.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(i,null):(p.render(i,e),p.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(h,d)):(i.setRenderTarget(e),i.render(h,d),i.setRenderTarget(t),i.render(h,d)),u.color.setLocked(!1),u.depth.setLocked(!1),u.stencil.setLocked(!1),u.stencil.setFunc(c.EQUAL,1,4294967295),u.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),u.stencil.setLocked(!0)}},Z2=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:r=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,o,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Q2,this.depthTexture=null,this.passes=[],this.timer=new X2,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new Pe),t=i.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===Cn&&i.outputColorSpace===Ft&&(this.inputBuffer.texture.colorSpace=Ft,this.outputBuffer.texture.colorSpace=Ft,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(i,t,r)}}replaceRenderer(i,e=!0){const t=this.renderer,r=t.domElement.parentNode;return this.setRenderer(i),e&&r!==null&&(r.removeChild(t.domElement),r.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new Id;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=Dr,i.type=Rr):i.type=Ks,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,r){const o=this.renderer,c=o===null?new Pe:o.getDrawingBufferSize(new Pe),u={minFilter:Bn,magFilter:Bn,stencilBuffer:e,depthBuffer:i,type:t},h=new Pn(c.width,c.height,u);return r>0&&(h.ignoreDepthForMultisampleCopy=!1,h.samples=r),t===Cn&&o!==null&&o.outputColorSpace===Ft&&(h.texture.colorSpace=Ft),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,r=this.renderer,o=r.getDrawingBufferSize(new Pe),c=r.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(i.setRenderer(r),i.setSize(o.width,o.height),i.initialize(r,c,u),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(i of t)i.setDepthTexture(h)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const c=(h,d)=>h||d.needsDepthTexture;e.reduce(c,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let r=this.inputBuffer,o=this.outputBuffer,c=!1,u,h,d;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(e,r,o,i,c),p.needsSwap&&(c&&(t.renderToScreen=p.renderToScreen,u=e.getContext(),h=e.state.buffers.stencil,h.setFunc(u.NOTEQUAL,1,4294967295),t.render(e,r,o,i,c),h.setFunc(u.EQUAL,1,4294967295)),d=r,r=o,o=d),p instanceof K2?c=!0:p instanceof Y2&&(c=!1))}setSize(i,e,t){const r=this.renderer,o=r.getSize(new Pe);(i===void 0||e===void 0)&&(i=o.width,e=o.height),(o.width!==i||o.height!==e)&&r.setSize(i,e,t);const c=r.getDrawingBufferSize(new Pe);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const u of this.passes)u.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ai.fullscreenGeometry.dispose()}},ps={NONE:0,DEPTH:1,CONVOLUTION:2},Dt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},j2=class{constructor(){this.shaderParts=new Map([[Dt.FRAGMENT_HEAD,null],[Dt.FRAGMENT_MAIN_UV,null],[Dt.FRAGMENT_MAIN_IMAGE,null],[Dt.VERTEX_HEAD,null],[Dt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ps.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Zs}},Lh=!1,N0=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case kn:t=this.materialsFlatShadedDoubleSide;break;case _n:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case kn:t=this.materialsDoubleSide;break;case _n:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof an))return i.clone();const e=i.uniforms,t=new Map;for(const o in e){const c=e[o].value;c.isRenderTargetTexture&&(e[o].value=null,t.set(o,c))}const r=i.clone();for(const o of t)e[o[0]].value=o[1],r.uniforms[o[0]].value=o[1];return r}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=ms;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.side=_n,r}),this.materialsDoubleSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.side=kn,r}),this.materialsFlatShaded=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r.side=_n,r}),this.materialsFlatShadedDoubleSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r.side=kn,r})}}render(i,e,t){const r=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,Lh){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const c of o)c[0].material=c[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=o}i.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Lh}static set workaroundEnabled(i){Lh=i}},Ys=-1,zi=class extends vs{constructor(i,e=Ys,t=Ys,r=1){super(),this.resizable=i,this.baseSize=new Pe(1,1),this.preferredSize=new Pe(e,t),this.target=this.preferredSize,this.s=r,this.effectiveSize=new Pe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,e=this.preferredSize,t=this.effectiveSize,r=this.scale;e.width!==Ys?t.width=e.width:e.height!==Ys?t.width=Math.round(e.height*(i.width/Math.max(i.height,1))):t.width=Math.round(i.width*r),e.height!==Ys?t.height=e.height:e.width!==Ys?t.height=Math.round(e.width/Math.max(i.width/Math.max(i.height,1),1)):t.height=Math.round(i.height*r)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(Ys),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,e){(this.baseSize.width!==i||this.baseSize.height!==e)&&(this.baseSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,e){(this.preferredSize.width!==i||this.preferredSize.height!==e)&&(this.preferredSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Ys}},gt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},J2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",$2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",eC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",tC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",nC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",iC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",sC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",rC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",aC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",oC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",lC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",cC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",uC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",fC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",hC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",dC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",pC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",mC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",gC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",vC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",xC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",AC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",_C="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",SC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",EC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",yC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",MC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",TC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",bC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",CC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",wC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",RC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",DC=new Map([[gt.ADD,J2],[gt.ALPHA,$2],[gt.AVERAGE,eC],[gt.COLOR,tC],[gt.COLOR_BURN,nC],[gt.COLOR_DODGE,iC],[gt.DARKEN,sC],[gt.DIFFERENCE,rC],[gt.DIVIDE,aC],[gt.DST,null],[gt.EXCLUSION,oC],[gt.HARD_LIGHT,lC],[gt.HARD_MIX,cC],[gt.HUE,uC],[gt.INVERT,fC],[gt.INVERT_RGB,hC],[gt.LIGHTEN,dC],[gt.LINEAR_BURN,pC],[gt.LINEAR_DODGE,mC],[gt.LINEAR_LIGHT,gC],[gt.LUMINOSITY,vC],[gt.MULTIPLY,xC],[gt.NEGATION,AC],[gt.NORMAL,_C],[gt.OVERLAY,SC],[gt.PIN_LIGHT,EC],[gt.REFLECT,yC],[gt.SATURATION,MC],[gt.SCREEN,TC],[gt.SOFT_LIGHT,bC],[gt.SRC,CC],[gt.SUBTRACT,wC],[gt.VIVID_LIGHT,RC]]),UC=class extends vs{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new ft(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return DC.get(this.blendFunction)}},Vd={MEDIUM:2,LARGE:3},LC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,BC="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",OC=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],PC=class extends an{constructor(i=new kt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new ft(null),texelSize:new ft(new kt),scale:new ft(1),kernel:new ft(0)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:LC,vertexShader:BC}),this.setTexelSize(i.x,i.y),this.kernelSize=Vd.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return OC[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,e){this.uniforms.texelSize.value.set(i,e,i*.5,e*.5)}setSize(i,e){const t=1/i,r=1/e;this.uniforms.texelSize.value.set(t,r,t*.5,r*.5)}},NC=class extends Ai{constructor({kernelSize:i=Vd.MEDIUM,resolutionScale:e=.5,width:t=zi.AUTO_SIZE,height:r=zi.AUTO_SIZE,resolutionX:o=t,resolutionY:c=r}={}){super("KawaseBlurPass"),this.renderTargetA=new Pn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const u=this.resolution=new zi(this,o,c,e);u.addEventListener("change",h=>this.setSize(u.baseWidth,u.baseHeight)),this._blurMaterial=new PC,this._blurMaterial.kernelSize=i,this.copyMaterial=new Bx}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,r,o){const c=this.scene,u=this.camera,h=this.renderTargetA,d=this.renderTargetB,p=this.blurMaterial,g=p.kernelSequence;let v=e;this.fullscreenMaterial=p;for(let x=0,A=g.length;x<A;++x){const y=x&1?d:h;p.kernel=g[x],p.inputBuffer=v.texture,i.setRenderTarget(y),i.render(c,u),v=y}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=v.texture,i.setRenderTarget(this.renderToScreen?null:t),i.render(c,u)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const r=t.width,o=t.height;this.renderTargetA.setSize(r,o),this.renderTargetB.setSize(r,o),this.blurMaterial.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Cn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):i!==null&&i.outputColorSpace===Ft&&(this.renderTargetA.texture.colorSpace=Ft,this.renderTargetB.texture.colorSpace=Ft))}static get AUTO_SIZE(){return zi.AUTO_SIZE}},IC=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,FC=class extends an{constructor(i=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Na.replace(/\D+/g,"")},uniforms:{inputBuffer:new ft(null),threshold:new ft(0),smoothing:new ft(1),range:new ft(null)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:IC,vertexShader:Lx}),this.colorOutput=i,this.luminanceRange=e}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get threshold(){return this.uniforms.threshold.value}set threshold(i){this.smoothing>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=i}getThreshold(){return this.threshold}setThreshold(i){this.threshold=i}get smoothing(){return this.uniforms.smoothing.value}set smoothing(i){this.threshold>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=i}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(i){this.smoothing=i}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(i){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(i){i?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(i){return this.colorOutput}setColorOutputEnabled(i){this.colorOutput=i}get useRange(){return this.luminanceRange!==null}set useRange(i){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(i){i!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=i,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(i){this.luminanceRange=i}},zC=class extends Ai{constructor({renderTarget:i,luminanceRange:e,colorOutput:t,resolutionScale:r=1,width:o=zi.AUTO_SIZE,height:c=zi.AUTO_SIZE,resolutionX:u=o,resolutionY:h=c}={}){super("LuminancePass"),this.fullscreenMaterial=new FC(t,e),this.needsSwap=!1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new Pn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const d=this.resolution=new zi(this,u,h,r);d.addEventListener("change",p=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(i,e,t,r,o){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}initialize(i,e,t){t!==void 0&&t!==Cn&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},HC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,GC="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",VC=class extends an{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new ft(null),texelSize:new ft(new Pe)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:HC,vertexShader:GC})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},kC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,XC="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",WC=class extends an{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new ft(null),supportBuffer:new ft(null),texelSize:new ft(new Pe),radius:new ft(.85)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:kC,vertexShader:XC})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}set supportBuffer(i){this.uniforms.supportBuffer.value=i}get radius(){return this.uniforms.radius.value}set radius(i){this.uniforms.radius.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},YC=class extends Ai{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Pn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new VC,this.upsamplingMaterial=new WC,this.resolution=new Pe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(i){if(this.levels!==i){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<i;++t){const r=e.clone();r.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(r)}this.upsamplingMipmaps.push(e);for(let t=1,r=i-1;t<r;++t){const o=e.clone();o.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(o)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(i){this.upsamplingMaterial.radius=i}render(i,e,t,r,o){const{scene:c,camera:u}=this,{downsamplingMaterial:h,upsamplingMaterial:d}=this,{downsamplingMipmaps:p,upsamplingMipmaps:g}=this;let v=e;this.fullscreenMaterial=h;for(let x=0,A=p.length;x<A;++x){const y=p[x];h.setSize(v.width,v.height),h.inputBuffer=v.texture,i.setRenderTarget(y),i.render(c,u),v=y}this.fullscreenMaterial=d;for(let x=g.length-1;x>=0;--x){const A=g[x];d.setSize(v.width,v.height),d.inputBuffer=v.texture,d.supportBuffer=p[x].texture,i.setRenderTarget(A),i.render(c,u),v=A}}setSize(i,e){const t=this.resolution;t.set(i,e);let r=t.width,o=t.height;for(let c=0,u=this.downsamplingMipmaps.length;c<u;++c)r=Math.round(r*.5),o=Math.round(o*.5),this.downsamplingMipmaps[c].setSize(r,o),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(r,o)}initialize(i,e,t){if(t!==void 0){const r=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const o of r)o.texture.type=t;if(t!==Cn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(i!==null&&i.outputColorSpace===Ft)for(const o of r)o.texture.colorSpace=Ft}}dispose(){super.dispose();for(const i of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))i.dispose()}},Ox=class extends vs{constructor(i,e,{attributes:t=ps.NONE,blendFunction:r=gt.NORMAL,defines:o=new Map,uniforms:c=new Map,extensions:u=null,vertexShader:h=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=h,this.defines=o,this.uniforms=c,this.extensions=u,this.blendMode=new UC(r),this.blendMode.addEventListener("change",d=>this.setChanged()),this._inputColorSpace=Zs,this._outputColorSpace=Fi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=Ur){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof Pn||e instanceof Ia||e instanceof Sn||e instanceof Ai)&&this[i].dispose()}}},qC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,QC=class extends Ox{constructor({blendFunction:i=gt.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:r=!1,intensity:o=1,radius:c=.85,levels:u=8,kernelSize:h=Vd.LARGE,resolutionScale:d=.5,width:p=zi.AUTO_SIZE,height:g=zi.AUTO_SIZE,resolutionX:v=p,resolutionY:x=g}={}){super("BloomEffect",qC,{blendFunction:i,uniforms:new Map([["map",new ft(null)],["intensity",new ft(o)]])}),this.renderTarget=new Pn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new NC({kernelSize:h}),this.luminancePass=new zC({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new YC,this.mipmapBlurPass.enabled=r,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=u,this.uniforms.get("map").value=r?this.mipmapBlurPass.texture:this.renderTarget.texture;const A=this.resolution=new zi(this,v,x,d);A.addEventListener("change",y=>this.setSize(A.baseWidth,A.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.blurPass.dithering}set dithering(i){this.blurPass.dithering=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(i){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(i){this.uniforms.get("intensity").value=i}getIntensity(){return this.intensity}setIntensity(i){this.intensity=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}update(i,e,t){const r=this.renderTarget,o=this.luminancePass;o.enabled?(o.render(i,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,o.renderTarget):this.blurPass.render(i,o.renderTarget,r)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,e):this.blurPass.render(i,e,r)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(i,e),this.mipmapBlurPass.setSize(i,e)}initialize(i,e,t){this.blurPass.initialize(i,e,t),this.luminancePass.initialize(i,e,t),this.mipmapBlurPass.initialize(i,e,t),t!==void 0&&(this.renderTarget.texture.type=t,i!==null&&i.outputColorSpace===Ft&&(this.renderTarget.texture.colorSpace=Ft))}},I0=class extends Ai{constructor(i,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=i,this.input=e}setInput(i){this.input=i}render(i,e,t,r,o){const c=this.fullscreenMaterial.uniforms;e!==null&&c!==void 0&&c[this.input]!==void 0&&(c[this.input].value=e.texture),i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}initialize(i,e,t){t!==void 0&&t!==Cn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},KC=class extends Ai{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new Gd,this.overrideMaterialManager=t===null?null:new N0(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new N0(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,r,o){const c=this.scene,u=this.camera,h=this.selection,d=u.layers.mask,p=c.background,g=i.shadowMap.autoUpdate,v=this.renderToScreen?null:e;h!==null&&u.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(v),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,c,u):i.render(c,u),u.layers.mask=d,c.background=p,i.shadowMap.autoUpdate=g}},Px={COLOR:2},ZC={DISABLED:0},ba={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},jC=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,JC=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,$C=class extends an{constructor(i=new Pe,e=Px.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Na.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new ft(null),depthBuffer:new ft(null),predicationBuffer:new ft(null),texelSize:new ft(i)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jC,vertexShader:JC}),this.edgeDetectionMode=e}set depthBuffer(i){this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=Ur){this.depthBuffer=i,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(i){this.defines.EDGE_DETECTION_MODE=i.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(i){this.edgeDetectionMode=i}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(i){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=i.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(i){this.localContrastAdaptationFactor=i}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(i){this.defines.EDGE_THRESHOLD=i.toFixed("6"),this.defines.DEPTH_THRESHOLD=(i*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(i){this.edgeDetectionThreshold=i}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(i){this.defines.PREDICATION_MODE=i.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(i){this.predicationMode=i}set predicationBuffer(i){this.uniforms.predicationBuffer.value=i}setPredicationBuffer(i){this.uniforms.predicationBuffer.value=i}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(i){this.defines.PREDICATION_THRESHOLD=i.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(i){this.predicationThreshold=i}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(i){this.defines.PREDICATION_SCALE=i.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(i){this.predicationScale=i}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(i){this.defines.PREDICATION_STRENGTH=i.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(i){this.predicationStrength=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},ew=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,tw="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",nw=class extends an{constructor(i=new Pe,e=new Pe){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new ft(null),searchTexture:new ft(null),areaTexture:new ft(null),resolution:new ft(e),texelSize:new ft(i)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ew,vertexShader:tw})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(i){this.uniforms.searchTexture.value=i}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(i){this.uniforms.areaTexture.value=i}setLookupTextures(i,e){this.searchTexture=i,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(i){const e=Math.min(Math.max(i,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(i){this.orthogonalSearchSteps=i}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(i){const e=Math.min(Math.max(i,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(i){this.diagonalSearchSteps=i}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(i){i?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(i){this.diagonalDetection=i}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(i){const e=Math.min(Math.max(i,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(i){this.cornerRounding=i}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(i){i?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(i){this.cornerDetection=i}setSize(i,e){const t=this.uniforms;t.texelSize.value.set(1/i,1/e),t.resolution.value.set(i,e)}},F0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",z0="data:image/png;base64,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",iw="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",sw="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",Go=class extends Ox{constructor({blendFunction:i=gt.SRC,preset:e=ba.MEDIUM,edgeDetectionMode:t=Px.COLOR,predicationMode:r=ZC.DISABLED}={}){super("SMAAEffect",iw,{vertexShader:sw,blendFunction:i,attributes:ps.CONVOLUTION|ps.DEPTH,uniforms:new Map([["weightMap",new ft(null)]])});let o,c;arguments.length>1&&(o=arguments[0],c=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new Pn(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Gd(!0,!1,!1),this.clearPass.overrideClearColor=new pt(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new I0(new $C),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=r,this.weightsPass=new I0(new nw);const u=new bx;u.onLoad=()=>{const h=new Sn(o);h.name="SMAA.Search",h.magFilter=ri,h.minFilter=ri,h.generateMipmaps=!1,h.needsUpdate=!0,h.flipY=!0,this.weightsMaterial.searchTexture=h;const d=new Sn(c);d.name="SMAA.Area",d.magFilter=Bn,d.minFilter=Bn,d.generateMipmaps=!1,d.needsUpdate=!0,d.flipY=!1,this.weightsMaterial.areaTexture=d,this.dispatchEvent({type:"load"})},u.itemStart("search"),u.itemStart("area"),o!==void 0&&c!==void 0?(u.itemEnd("search"),u.itemEnd("area")):typeof Image<"u"&&(o=new Image,c=new Image,o.addEventListener("load",()=>u.itemEnd("search")),c.addEventListener("load",()=>u.itemEnd("area")),o.src=F0,c.src=z0),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(i){this.edgeDetectionMaterial.edgeDetectionThreshold=i}setOrthogonalSearchSteps(i){this.weightsMaterial.orthogonalSearchSteps=i}applyPreset(i){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(i){case ba.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case ba.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case ba.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case ba.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(i,e=Ur){this.edgeDetectionMaterial.depthBuffer=i,this.edgeDetectionMaterial.depthPacking=e}update(i,e,t){this.clearPass.render(i,this.renderTargetEdges),this.edgeDetectionPass.render(i,e,this.renderTargetEdges),this.weightsPass.render(i,this.renderTargetEdges,this.renderTargetWeights)}setSize(i,e){this.edgeDetectionMaterial.setSize(i,e),this.weightsMaterial.setSize(i,e),this.renderTargetEdges.setSize(i,e),this.renderTargetWeights.setSize(i,e)}dispose(){const{searchTexture:i,areaTexture:e}=this.weightsMaterial;i!==null&&e!==null&&(i.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return F0}static get areaImageDataURL(){return z0}},rw=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,aw="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",ow=class extends an{constructor(i,e,t,r,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Na.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ft(null),depthBuffer:new ft(null),resolution:new ft(new Pe),texelSize:new ft(new Pe),cameraNear:new ft(.3),cameraFar:new ft(1e3),aspect:new ft(1),time:new ft(0)},blending:On,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(r)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=Ur){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=rw.replace(Dt.FRAGMENT_HEAD,i.get(Dt.FRAGMENT_HEAD)||"").replace(Dt.FRAGMENT_MAIN_UV,i.get(Dt.FRAGMENT_MAIN_UV)||"").replace(Dt.FRAGMENT_MAIN_IMAGE,i.get(Dt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=aw.replace(Dt.VERTEX_HEAD,i.get(Dt.VERTEX_HEAD)||"").replace(Dt.VERTEX_MAIN_SUPPORT,i.get(Dt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof ii?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return Dt}};function H0(i,e,t){for(const r of e){const o="$1"+i+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const u of t.entries())u[1]!==null&&t.set(u[0],u[1].replace(c,o))}}function lw(i,e,t){let r=e.getFragmentShader(),o=e.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),u=r!==void 0&&/mainUv/.test(r);if(t.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(u&&t.attributes&ps.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!u)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,d=t.shaderParts;let p=d.get(Dt.FRAGMENT_HEAD)||"",g=d.get(Dt.FRAGMENT_MAIN_UV)||"",v=d.get(Dt.FRAGMENT_MAIN_IMAGE)||"",x=d.get(Dt.VERTEX_HEAD)||"",A=d.get(Dt.VERTEX_MAIN_SUPPORT)||"";const y=new Set,M=new Set;if(u&&(g+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const B=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);A+=`	${i}MainSupport(`,A+=B?`vUv);
`:`);
`;for(const U of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const C of U[1].split(/\s*,\s*/))t.varyings.add(C),y.add(C),M.add(C);for(const U of o.matchAll(h))M.add(U[1])}for(const B of r.matchAll(h))M.add(B[1]);for(const B of e.defines.keys())M.add(B.replace(/\([\w\s,]*\)/g,""));for(const B of e.uniforms.keys())M.add(B);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((B,U)=>t.uniforms.set(i+U.charAt(0).toUpperCase()+U.slice(1),B)),e.defines.forEach((B,U)=>t.defines.set(i+U.charAt(0).toUpperCase()+U.slice(1),B));const S=new Map([["fragment",r],["vertex",o]]);H0(i,M,t.defines),H0(i,M,S),r=S.get("fragment"),o=S.get("vertex");const _=e.blendMode;if(t.blendModes.set(_.blendFunction,_),c){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(v+=e.inputColorSpace===Ft?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Fi?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const B=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;v+=`${i}MainImage(color0, UV, `,t.attributes&ps.DEPTH&&B.test(r)&&(v+="depth, ",t.readDepth=!0),v+=`color1);
	`;const U=i+"BlendOpacity";t.uniforms.set(U,_.opacity),v+=`color0 = blend${_.blendFunction}(color0, color1, ${U});

	`,p+=`uniform float ${U};

`}if(p+=r+`
`,o!==null&&(x+=o+`
`),d.set(Dt.FRAGMENT_HEAD,p),d.set(Dt.FRAGMENT_MAIN_UV,g),d.set(Dt.FRAGMENT_MAIN_IMAGE,v),d.set(Dt.VERTEX_HEAD,x),d.set(Dt.VERTEX_MAIN_SUPPORT,A),e.extensions!==null)for(const B of e.extensions)t.extensions.add(B)}}var G0=class extends Ai{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new ow(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new j2;let e=0;for(const u of this.effects)if(u.blendMode.blendFunction===gt.DST)i.attributes|=u.getAttributes()&ps.DEPTH;else{if(i.attributes&u.getAttributes()&ps.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${u.name})`);lw("e"+e++,u,i)}let t=i.shaderParts.get(Dt.FRAGMENT_HEAD),r=i.shaderParts.get(Dt.FRAGMENT_MAIN_IMAGE),o=i.shaderParts.get(Dt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const u of i.blendModes.values())t+=u.getShaderCode().replace(c,`blend${u.blendFunction}`)+`
`;i.attributes&ps.DEPTH?(i.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===Ft&&(r+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Dt.FRAGMENT_HEAD,t),i.shaderParts.set(Dt.FRAGMENT_MAIN_IMAGE,r),i.shaderParts.set(Dt.FRAGMENT_MAIN_UV,o);for(const[u,h]of i.shaderParts)h!==null&&i.shaderParts.set(u,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=Ur){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,r,o){for(const c of this.effects)c.update(i,e,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=r*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const r of this.effects)r.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==Cn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}};const cw=({effectOptions:i={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}}})=>{const e=Di.useRef(null);return Di.useEffect(()=>{const t={uFreq:{value:new j(3,6,10)},uAmp:{value:new j(30,30,20)}},r={uFreq:{value:new Pe(5,2)},uAmp:{value:new Pe(25,15)}},o={uFreq:{value:new Pe(2,3)},uAmp:{value:new Pe(35,10)}},c={uFreq:{value:new kt(4,8,8,1)},uAmp:{value:new kt(25,5,10,10)}},u={uFreq:{value:new Pe(4,8)},uAmp:{value:new Pe(10,20)},uPowY:{value:new Pe(20,2)}};let h=W=>Math.sin(W)*.5+.5;const d={mountainDistortion:{uniforms:t,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(W,P)=>{let Q=.02,F=t.uFreq.value,X=t.uAmp.value,k=new j(Math.cos(W*Math.PI*F.x+P)*X.x-Math.cos(Q*Math.PI*F.x+P)*X.x,h(W*Math.PI*F.y+P)*X.y-h(Q*Math.PI*F.y+P)*X.y,h(W*Math.PI*F.z+P)*X.z-h(Q*Math.PI*F.z+P)*X.z),fe=new j(2,2,2),L=new j(0,0,-5);return k.multiply(fe).add(L)}},xyDistortion:{uniforms:r,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(W,P)=>{let Q=.02,F=r.uFreq.value,X=r.uAmp.value,k=new j(Math.cos(W*Math.PI*F.x+P)*X.x-Math.cos(Q*Math.PI*F.x+P)*X.x,Math.sin(W*Math.PI*F.y+P+Math.PI/2)*X.y-Math.sin(Q*Math.PI*F.y+P+Math.PI/2)*X.y,0),fe=new j(2,.4,1),L=new j(0,0,-3);return k.multiply(fe).add(L)}},LongRaceDistortion:{uniforms:o,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(W,P)=>{let Q=.0125,F=o.uFreq.value,X=o.uAmp.value,k=new j(Math.sin(W*Math.PI*F.x+P)*X.x-Math.sin(Q*Math.PI*F.x+P)*X.x,Math.sin(W*Math.PI*F.y+P)*X.y-Math.sin(Q*Math.PI*F.y+P)*X.y,0),fe=new j(1,1,0),L=new j(0,0,-5);return k.multiply(fe).add(L)}},turbulentDistortion:{uniforms:c,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(W,P)=>{const Q=c.uFreq.value,F=c.uAmp.value,X=me=>Math.cos(Math.PI*me*Q.x+P)*F.x+Math.pow(Math.cos(Math.PI*me*Q.y+P*(Q.y/Q.x)),2)*F.y,k=me=>-h(Math.PI*me*Q.z+P)*F.z-Math.pow(h(Math.PI*me*Q.w+P/(Q.z/Q.w)),5)*F.w;let fe=new j(X(W)-X(W+.007),k(W)-k(W+.007),0),L=new j(-2,-5,0),ne=new j(0,0,-10);return fe.multiply(L).add(ne)}},turbulentDistortionStill:{uniforms:c,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:u,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:u,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(W,P)=>{const Q=u.uFreq.value,F=u.uAmp.value,X=u.uPowY.value,k=ye=>Math.sin(ye*Math.PI*Q.x+P)*F.x,fe=ye=>Math.pow(ye*X.x,X.y)+Math.sin(ye*Math.PI*Q.y+P)*F.y;let L=new j(k(W)-k(W+.01),fe(W)-fe(W+.01),0),ne=new j(-2,-4,0),me=new j(0,0,-10);return L.multiply(ne).add(me)}}};class p{constructor(P,Q={}){this.options=Q,this.options.distortion==null&&(this.options.distortion={uniforms:g,getDistortion:v}),this.container=P,this.renderer=new V2({antialias:!1,alpha:!0}),this.renderer.setSize(P.offsetWidth,P.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new Z2(this.renderer),P.append(this.renderer.domElement),this.camera=new ii(Q.fov,P.offsetWidth/P.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new Sd,this.scene.background=null;let F=new Nd(Q.colors.background,Q.length*.2,Q.length*500);this.scene.fog=F,this.fogUniforms={fogColor:{value:F.color},fogNear:{value:F.near},fogFar:{value:F.far}},this.clock=new aM,this.assets={},this.disposed=!1,this.road=new z(this,Q),this.leftCarLights=new M(this,Q,Q.colors.leftCars,Q.movingAwaySpeed,new Pe(0,1-Q.carLightsFade)),this.rightCarLights=new M(this,Q,Q.colors.rightCars,Q.movingCloserSpeed,new Pe(1,0+Q.carLightsFade)),this.leftSticks=new B(this,Q),this.fovTarget=Q.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this)}initPasses(){this.renderPass=new KC(this.scene,this.camera),this.bloomPass=new G0(this.camera,new QC({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const P=new G0(this.camera,new Go({preset:ba.MEDIUM,searchImage:Go.searchImageDataURL,areaImage:Go.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,P.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(P)}loadAssets(){const P=this.assets;return new Promise(Q=>{const F=new bx(Q),X=new Image,k=new Image;P.smaa={},X.addEventListener("load",function(){P.smaa.search=this,F.itemEnd("smaa-search")}),k.addEventListener("load",function(){P.smaa.area=this,F.itemEnd("smaa-area")}),F.itemStart("smaa-search"),F.itemStart("smaa-area"),X.src=Go.searchImageDataURL,k.src=Go.areaImageDataURL})}init(){this.initPasses();const P=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-P.roadWidth/2-P.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(P.roadWidth/2+P.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(P.roadWidth+P.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.tick()}onMouseDown(P){this.options.onSpeedUp&&this.options.onSpeedUp(P),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(P){this.options.onSlowDown&&this.options.onSlowDown(P),this.fovTarget=this.options.fov,this.speedUpTarget=0}update(P){let Q=Math.exp(-(-60*Math.log2(.9))*P);this.speedUp+=y(this.speedUp,this.speedUpTarget,Q,1e-5),this.timeOffset+=this.speedUp*P;let F=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(F),this.leftCarLights.update(F),this.leftSticks.update(F),this.road.update(F);let X=!1,k=y(this.camera.fov,this.fovTarget,Q);if(k!==0&&(this.camera.fov+=k*P*6,X=!0),this.options.distortion.getJS){const fe=this.options.distortion.getJS(.025,F);this.camera.lookAt(new j(this.camera.position.x+fe.x,this.camera.position.y+fe.y,this.camera.position.z+fe.z)),X=!0}X&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(P){this.composer.render(P)}dispose(){this.disposed=!0}setSize(P,Q,F){this.composer.setSize(P,Q,F)}tick(){if(this.disposed||!this)return;if(le(this.renderer,this.setSize)){const Q=this.renderer.domElement;this.camera.aspect=Q.clientWidth/Q.clientHeight,this.camera.updateProjectionMatrix()}const P=this.clock.getDelta();this.render(P),this.update(P),requestAnimationFrame(this.tick)}}const g={uDistortionX:{value:new Pe(80,3)},uDistortionY:{value:new Pe(-40,2.5)}},v=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,x=W=>Array.isArray(W)?Math.random()*(W[1]-W[0])+W[0]:Math.random()*W,A=W=>Array.isArray(W)?W[Math.floor(Math.random()*W.length)]:W;function y(W,P,Q=.1,F=.001){let X=(P-W)*Q;return Math.abs(X)<F&&(X=P-W),X}class M{constructor(P,Q,F,X,k){this.webgl=P,this.options=Q,this.colors=F,this.speed=X,this.fade=k}init(){const P=this.options;let Q=new Mx(new j(0,0,0),new j(0,0,-1)),F=new zd(Q,40,1,8,!1),X=new l0().copy(F);X.instanceCount=P.lightPairsPerRoadWay*2;let k=P.roadWidth/P.lanesPerRoad,fe=[],L=[],ne=[],me=this.colors;Array.isArray(me)?me=me.map(ce=>new pt(ce)):me=new pt(me);for(let ce=0;ce<P.lightPairsPerRoadWay;ce++){let Ae=x(P.carLightsRadius),Me=x(P.carLightsLength),be=x(this.speed),De=ce%P.lanesPerRoad*k-P.roadWidth/2+k/2,At=x(P.carWidthPercentage)*k,Ut=x(P.carShiftX)*k;De+=Ut;let it=x(P.carFloorSeparation)+Ae*1.3,V=-x(P.length);fe.push(De-At/2),fe.push(it),fe.push(V),fe.push(De+At/2),fe.push(it),fe.push(V),L.push(Ae),L.push(Me),L.push(be),L.push(Ae),L.push(Me),L.push(be);let Xt=A(me);ne.push(Xt.r),ne.push(Xt.g),ne.push(Xt.b),ne.push(Xt.r),ne.push(Xt.g),ne.push(Xt.b)}X.setAttribute("aOffset",new ya(new Float32Array(fe),3,!1)),X.setAttribute("aMetrics",new ya(new Float32Array(L),3,!1)),X.setAttribute("aColor",new ya(new Float32Array(ne),3,!1));let ye=new an({fragmentShader:S,vertexShader:_,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:P.length},uFade:{value:this.fade}},this.webgl.fogUniforms,P.distortion.uniforms)});ye.onBeforeCompile=ce=>{ce.vertexShader=ce.vertexShader.replace("#include <getDistortion_vertex>",P.distortion.getDistortion)};let Z=new si(X,ye);Z.frustumCulled=!1,this.webgl.scene.add(Z),this.mesh=Z}update(P){this.mesh.material.uniforms.uTime.value=P}}const S=`
      #define USE_FOG;
      ${Je.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${Je.fog_fragment}
      }
    `,_=`
      #define USE_FOG;
      ${Je.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${Je.fog_vertex}
      }
    `;class B{constructor(P,Q){this.webgl=P,this.options=Q}init(){const P=this.options,Q=new Pa(1,1);let F=new l0().copy(Q),X=P.totalSideLightSticks;F.instanceCount=X;let k=P.length/(X-1);const fe=[],L=[],ne=[];let me=P.colors.sticks;Array.isArray(me)?me=me.map(ce=>new pt(ce)):me=new pt(me);for(let ce=0;ce<X;ce++){let Ae=x(P.lightStickWidth),Me=x(P.lightStickHeight);fe.push((ce-1)*k*2+k*Math.random());let be=A(me);L.push(be.r),L.push(be.g),L.push(be.b),ne.push(Ae),ne.push(Me)}F.setAttribute("aOffset",new ya(new Float32Array(fe),1,!1)),F.setAttribute("aColor",new ya(new Float32Array(L),3,!1)),F.setAttribute("aMetrics",new ya(new Float32Array(ne),2,!1));const ye=new an({fragmentShader:C,vertexShader:U,side:kn,uniforms:Object.assign({uTravelLength:{value:P.length},uTime:{value:0}},this.webgl.fogUniforms,P.distortion.uniforms)});ye.onBeforeCompile=ce=>{ce.vertexShader=ce.vertexShader.replace("#include <getDistortion_vertex>",P.distortion.getDistortion)};const Z=new si(F,ye);Z.frustumCulled=!1,this.webgl.scene.add(Z),this.mesh=Z}update(P){this.mesh.material.uniforms.uTime.value=P}}const U=`
      #define USE_FOG;
      ${Je.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${Je.fog_vertex}
      }
    `,C=`
      #define USE_FOG;
      ${Je.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${Je.fog_fragment}
      }
    `;class z{constructor(P,Q){this.webgl=P,this.options=Q,this.uTime={value:0}}createPlane(P,Q,F){const X=this.options;let k=100;const fe=new Pa(F?X.roadWidth:X.islandWidth,X.length,20,k);let L={uTravelLength:{value:X.length},uColor:{value:new pt(F?X.colors.roadColor:X.colors.islandColor)},uTime:this.uTime};F&&(L=Object.assign(L,{uLanes:{value:X.lanesPerRoad},uBrokenLinesColor:{value:new pt(X.colors.brokenLines)},uShoulderLinesColor:{value:new pt(X.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:X.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:X.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:X.brokenLinesWidthPercentage}}));const ne=new an({fragmentShader:F?T:H,vertexShader:G,side:kn,uniforms:Object.assign(L,this.webgl.fogUniforms,X.distortion.uniforms)});ne.onBeforeCompile=ye=>{ye.vertexShader=ye.vertexShader.replace("#include <getDistortion_vertex>",X.distortion.getDistortion)};const me=new si(fe,ne);return me.rotation.x=-Math.PI/2,me.position.z=-X.length/2,me.position.x+=(this.options.islandWidth/2+X.roadWidth/2)*P,this.webgl.scene.add(me),me}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(P){this.uTime.value=P}}const N=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${Je.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${Je.fog_fragment}
      }
    `,H=N.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),T=N.replace("#include <roadMarkings_fragment>",`
      uv.y = mod(uv.y + uTime * 0.05, 1.);  // Adjust speed of markings
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));  // Dashes in the middle
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x); // Side continuous lines

      brokenLines = mix(brokenLines, sideLines, uv.x);
      // color = mix(color, uBrokenLinesColor, brokenLines);

      // vec2 noiseFreq = vec2(4., 7000.);
      // float roadNoise = random(floor(uv * noiseFreq) / noiseFreq) * 0.02 - 0.01; 
      // color += roadNoise;
    `).replace("#include <roadMarkings_vars>",`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `),G=`
      #define USE_FOG;
      uniform float uTime;
      ${Je.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${Je.fog_vertex}
      }
    `;function le(W,P){const Q=W.domElement,F=Q.clientWidth,X=Q.clientHeight,k=Q.width!==F||Q.height!==X;return k&&P(F,X,!1),k}(function(){const W=document.getElementById("lights");i.distortion=d[i.distortion];const P=new p(W,i);P.loadAssets().then(P.init)})()},[]),bn.jsx("div",{id:"lights",ref:e})},uw=()=>bn.jsx(bn.Fragment,{children:bn.jsx(cw,{effectOptions:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}}})});function fw(i,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>i.apply(this,r),e)}}function hw(i,e,t){return i+(e-i)*t}function dw(i){const e=Object.getPrototypeOf(i);Object.getOwnPropertyNames(e).forEach(t=>{t!=="constructor"&&typeof i[t]=="function"&&(i[t]=i[t].bind(i))})}function pw(i,e,t="bold 30px monospace",r="black"){const o=document.createElement("canvas"),c=o.getContext("2d");c.font=t;const u=c.measureText(e),h=Math.ceil(u.width),d=Math.ceil(parseInt(t,10)*1.2);o.width=h+20,o.height=d+20,c.font=t,c.fillStyle=r,c.textBaseline="middle",c.textAlign="center",c.clearRect(0,0,o.width,o.height),c.fillText(e,o.width/2,o.height/2);const p=new Q0(i,{generateMipmaps:!1});return p.image=o,{texture:p,width:o.width,height:o.height}}class mw{constructor({gl:e,plane:t,renderer:r,text:o,textColor:c="#545050",font:u="30px sans-serif"}){dw(this),this.gl=e,this.plane=t,this.renderer=r,this.text=o,this.textColor=c,this.font=u,this.createMesh()}createMesh(){const{texture:e,width:t,height:r}=pw(this.gl,this.text,this.font,this.textColor),o=new K0(this.gl),c=new Td(this.gl,{vertex:`
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,uniforms:{tMap:{value:e}},transparent:!0});this.mesh=new Cd(this.gl,{geometry:o,program:c});const u=t/r,h=this.plane.scale.y*.15,d=h*u;this.mesh.scale.set(d,h,1),this.mesh.position.y=-this.plane.scale.y*.5-h*.5-.05,this.mesh.setParent(this.plane)}}class gw{constructor({geometry:e,gl:t,image:r,index:o,length:c,renderer:u,scene:h,screen:d,text:p,viewport:g,bend:v,textColor:x,borderRadius:A=0,font:y}){this.extra=0,this.geometry=e,this.gl=t,this.image=r,this.index=o,this.length=c,this.renderer=u,this.scene=h,this.screen=d,this.text=p,this.viewport=g,this.bend=v,this.textColor=x,this.borderRadius=A,this.font=y,this.createShader(),this.createMesh(),this.createTitle(),this.onResize()}createShader(){const e=new Q0(this.gl,{generateMipmaps:!1});this.program=new Td(this.gl,{depthTest:!1,depthWrite:!1,vertex:`
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        // Rounded box SDF for UV space
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          // Apply rounded corners (assumes vUv in [0,1])
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          if(d > 0.0) {
            discard;
          }
          
          gl_FragColor = vec4(color.rgb, 1.0);
        }
      `,uniforms:{tMap:{value:e},uPlaneSizes:{value:[0,0]},uImageSizes:{value:[0,0]},uSpeed:{value:0},uTime:{value:100*Math.random()},uBorderRadius:{value:this.borderRadius}},transparent:!0});const t=new Image;t.crossOrigin="anonymous",t.src=this.image,t.onload=()=>{e.image=t,this.program.uniforms.uImageSizes.value=[t.naturalWidth,t.naturalHeight]}}createMesh(){this.plane=new Cd(this.gl,{geometry:this.geometry,program:this.program}),this.plane.setParent(this.scene)}createTitle(){this.title=new mw({gl:this.gl,plane:this.plane,renderer:this.renderer,text:this.text,textColor:this.textColor,fontFamily:this.font})}update(e,t){this.plane.position.x=this.x-e.current-this.extra;const r=this.plane.position.x,o=this.viewport.width/2;if(this.bend===0)this.plane.position.y=0,this.plane.rotation.z=0;else{const h=Math.abs(this.bend),d=(o*o+h*h)/(2*h),p=Math.min(Math.abs(r),o),g=d-Math.sqrt(d*d-p*p);this.bend>0?(this.plane.position.y=-g,this.plane.rotation.z=-Math.sign(r)*Math.asin(p/d)):(this.plane.position.y=g,this.plane.rotation.z=Math.sign(r)*Math.asin(p/d))}this.speed=e.current-e.last,this.program.uniforms.uTime.value+=.04,this.program.uniforms.uSpeed.value=this.speed;const c=this.plane.scale.x/2,u=this.viewport.width/2;this.isBefore=this.plane.position.x+c<-u,this.isAfter=this.plane.position.x-c>u,t==="right"&&this.isBefore&&(this.extra-=this.widthTotal,this.isBefore=this.isAfter=!1),t==="left"&&this.isAfter&&(this.extra+=this.widthTotal,this.isBefore=this.isAfter=!1)}onResize({screen:e,viewport:t}={}){e&&(this.screen=e),t&&(this.viewport=t,this.plane.program.uniforms.uViewportSizes&&(this.plane.program.uniforms.uViewportSizes.value=[this.viewport.width,this.viewport.height])),this.scale=this.screen.height/1500,this.plane.scale.y=this.viewport.height*(900*this.scale)/this.screen.height,this.plane.scale.x=this.viewport.width*(700*this.scale)/this.screen.width,this.plane.program.uniforms.uPlaneSizes.value=[this.plane.scale.x,this.plane.scale.y],this.padding=2,this.width=this.plane.scale.x+this.padding,this.widthTotal=this.width*this.length,this.x=this.width*this.index}}class vw{constructor(e,{items:t,bend:r,textColor:o="#ffffff",borderRadius:c=0,font:u="bold 30px DM Sans"}={}){document.documentElement.classList.remove("no-js"),this.container=e,this.scroll={ease:.05,current:0,target:0,last:0},this.onCheckDebounce=fw(this.onCheck,200),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(t,r,o,c,u),this.update(),this.addEventListeners()}createRenderer(){this.renderer=new X0({alpha:!0}),this.gl=this.renderer.gl,this.gl.clearColor(0,0,0,0),this.container.appendChild(this.gl.canvas)}createCamera(){this.camera=new iE(this.gl),this.camera.fov=45,this.camera.position.z=20}createScene(){this.scene=new bd}createGeometry(){this.planeGeometry=new K0(this.gl,{heightSegments:50,widthSegments:100})}createMedias(e,t=1,r,o,c){const u=[{image:"https://picsum.photos/seed/1/800/600?grayscale",text:"Bridge"},{image:"https://picsum.photos/seed/2/800/600?grayscale",text:"Desk Setup"},{image:"https://picsum.photos/seed/3/800/600?grayscale",text:"Waterfall"},{image:"https://picsum.photos/seed/4/800/600?grayscale",text:"Strawberries"},{image:"https://picsum.photos/seed/5/800/600?grayscale",text:"Deep Diving"},{image:"https://picsum.photos/seed/16/800/600?grayscale",text:"Train Track"},{image:"https://picsum.photos/seed/17/800/600?grayscale",text:"Santorini"},{image:"https://picsum.photos/seed/8/800/600?grayscale",text:"Blurry Lights"},{image:"https://picsum.photos/seed/9/800/600?grayscale",text:"New York"},{image:"https://picsum.photos/seed/10/800/600?grayscale",text:"Good Boy"},{image:"https://picsum.photos/seed/21/800/600?grayscale",text:"Coastline"},{image:"https://picsum.photos/seed/12/800/600?grayscale",text:"Palm Trees"}],h=e&&e.length?e:u;this.mediasImages=h.concat(h),this.medias=this.mediasImages.map((d,p)=>new gw({geometry:this.planeGeometry,gl:this.gl,image:d.image,index:p,length:this.mediasImages.length,renderer:this.renderer,scene:this.scene,screen:this.screen,text:d.text,viewport:this.viewport,bend:t,textColor:r,borderRadius:o,font:c}))}onTouchDown(e){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=e.touches?e.touches[0].clientX:e.clientX}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,r=(this.start-t)*.05;this.scroll.target=this.scroll.position+r}onTouchUp(){this.isDown=!1,this.onCheck()}onWheel(){this.scroll.target+=2,this.onCheckDebounce()}onCheck(){if(!this.medias||!this.medias[0])return;const e=this.medias[0].width,t=Math.round(Math.abs(this.scroll.target)/e),r=e*t;this.scroll.target=this.scroll.target<0?-r:r}onResize(){this.screen={width:this.container.clientWidth,height:this.container.clientHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.screen.width/this.screen.height});const e=this.camera.fov*Math.PI/180,t=2*Math.tan(e/2)*this.camera.position.z,r=t*this.camera.aspect;this.viewport={width:r,height:t},this.medias&&this.medias.forEach(o=>o.onResize({screen:this.screen,viewport:this.viewport}))}update(){this.scroll.current=hw(this.scroll.current,this.scroll.target,this.scroll.ease);const e=this.scroll.current>this.scroll.last?"right":"left";this.medias&&this.medias.forEach(t=>t.update(this.scroll,e)),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,this.raf=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){this.boundOnResize=this.onResize.bind(this),this.boundOnWheel=this.onWheel.bind(this),this.boundOnTouchDown=this.onTouchDown.bind(this),this.boundOnTouchMove=this.onTouchMove.bind(this),this.boundOnTouchUp=this.onTouchUp.bind(this),window.addEventListener("resize",this.boundOnResize),window.addEventListener("mousewheel",this.boundOnWheel),window.addEventListener("wheel",this.boundOnWheel),window.addEventListener("mousedown",this.boundOnTouchDown),window.addEventListener("mousemove",this.boundOnTouchMove),window.addEventListener("mouseup",this.boundOnTouchUp),window.addEventListener("touchstart",this.boundOnTouchDown),window.addEventListener("touchmove",this.boundOnTouchMove),window.addEventListener("touchend",this.boundOnTouchUp)}destroy(){window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.boundOnResize),window.removeEventListener("mousewheel",this.boundOnWheel),window.removeEventListener("wheel",this.boundOnWheel),window.removeEventListener("mousedown",this.boundOnTouchDown),window.removeEventListener("mousemove",this.boundOnTouchMove),window.removeEventListener("mouseup",this.boundOnTouchUp),window.removeEventListener("touchstart",this.boundOnTouchDown),window.removeEventListener("touchmove",this.boundOnTouchMove),window.removeEventListener("touchend",this.boundOnTouchUp),this.renderer&&this.renderer.gl&&this.renderer.gl.canvas.parentNode&&this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)}}function xw({items:i,bend:e=3,textColor:t="#ffffff",borderRadius:r=.05,font:o="bold 30px DM Sans"}){const c=Di.useRef(null);return Di.useEffect(()=>{const u=new vw(c.current,{items:i,bend:e,textColor:t,borderRadius:r,font:o});return()=>{u.destroy()}},[i,e,t,r,o]),bn.jsx("div",{className:"circular-gallery",ref:c})}Nc.createRoot(document.getElementById("Aurora1")).render(bn.jsx(Di.StrictMode,{children:bn.jsx(j0,{})}));Nc.createRoot(document.getElementById("Aurora2")).render(bn.jsx(Di.StrictMode,{children:bn.jsx(j0,{})}));Nc.createRoot(document.getElementById("Hyperspeed")).render(bn.jsx(Di.StrictMode,{children:bn.jsx(uw,{})}));Nc.createRoot(document.getElementById("Gallery")).render(bn.jsx(Di.StrictMode,{children:bn.jsx(xw,{})}));
