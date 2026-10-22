(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function sx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var td={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function Yb(){if(Wv)return al;Wv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var d in c)d!=="key"&&(f[d]=c[d])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:h,ref:c!==void 0?c:null,props:f}}return al.Fragment=n,al.jsx=a,al.jsxs=a,al}var Zv;function Wb(){return Zv||(Zv=1,td.exports=Yb()),td.exports}var M=Wb(),nd={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function Zb(){if(Kv)return at;Kv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),b=Symbol.iterator;function T(R){return R===null||typeof R!="object"?null:(R=b&&R[b]||R["@@iterator"],typeof R=="function"?R:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function L(R,Q,_e){this.props=R,this.context=Q,this.refs=x,this.updater=_e||D}L.prototype.isReactComponent={},L.prototype.setState=function(R,Q){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Q,"setState")},L.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function P(){}P.prototype=L.prototype;function U(R,Q,_e){this.props=R,this.context=Q,this.refs=x,this.updater=_e||D}var V=U.prototype=new P;V.constructor=U,S(V,L.prototype),V.isPureReactComponent=!0;var H=Array.isArray;function z(){}var I={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function A(R,Q,_e){var de=_e.ref;return{$$typeof:o,type:R,key:Q,ref:de!==void 0?de:null,props:_e}}function G(R,Q){return A(R.type,Q,R.props)}function se(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function ie(R){var Q={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(_e){return Q[_e]})}var ue=/\/+/g;function W(R,Q){return typeof R=="object"&&R!==null&&R.key!=null?ie(""+R.key):Q.toString(36)}function F(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(z,z):(R.status="pending",R.then(function(Q){R.status==="pending"&&(R.status="fulfilled",R.value=Q)},function(Q){R.status==="pending"&&(R.status="rejected",R.reason=Q)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function te(R,Q,_e,de,we){var Xe=typeof R;(Xe==="undefined"||Xe==="boolean")&&(R=null);var Le=!1;if(R===null)Le=!0;else switch(Xe){case"bigint":case"string":case"number":Le=!0;break;case"object":switch(R.$$typeof){case o:case n:Le=!0;break;case _:return Le=R._init,te(Le(R._payload),Q,_e,de,we)}}if(Le)return we=we(R),Le=de===""?"."+W(R,0):de,H(we)?(_e="",Le!=null&&(_e=Le.replace(ue,"$&/")+"/"),te(we,Q,_e,"",function(st){return st})):we!=null&&(se(we)&&(we=G(we,_e+(we.key==null||R&&R.key===we.key?"":(""+we.key).replace(ue,"$&/")+"/")+Le)),Q.push(we)),1;Le=0;var Re=de===""?".":de+":";if(H(R))for(var Ge=0;Ge<R.length;Ge++)de=R[Ge],Xe=Re+W(de,Ge),Le+=te(de,Q,_e,Xe,we);else if(Ge=T(R),typeof Ge=="function")for(R=Ge.call(R),Ge=0;!(de=R.next()).done;)de=de.value,Xe=Re+W(de,Ge++),Le+=te(de,Q,_e,Xe,we);else if(Xe==="object"){if(typeof R.then=="function")return te(F(R),Q,_e,de,we);throw Q=String(R),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Le}function q(R,Q,_e){if(R==null)return R;var de=[],we=0;return te(R,de,"","",function(Xe){return Q.call(_e,Xe,we++)}),de}function ve(R){if(R._status===-1){var Q=R._result,_e=Q();_e.then(function(de){(R._status===0||R._status===-1)&&(R._status=1,R._result=de,_e.status===void 0&&(_e.status="fulfilled",_e.value=de))},function(de){(R._status===0||R._status===-1)&&(R._status=2,R._result=de,_e.status===void 0&&(_e.status="rejected",_e.reason=de))}),R._status===-1&&(R._status=0,R._result=_e)}if(R._status===1)return R._result.default;throw R._result}var fe=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function Me(R){var Q=I.T,_e={};_e.types=Q!==null?Q.types:null,I.T=_e;try{var de=R(),we=I.S;we!==null&&we(_e,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(z,fe)}catch(Xe){fe(Xe)}finally{Q!==null&&_e.types!==null&&(Q.types=_e.types),I.T=Q}}function Te(R){var Q=I.T;if(Q!==null){var _e=Q.types;_e===null?Q.types=[R]:_e.indexOf(R)===-1&&_e.push(R)}else Me(Te.bind(null,R))}var ht={map:q,forEach:function(R,Q,_e){q(R,function(){Q.apply(this,arguments)},_e)},count:function(R){var Q=0;return q(R,function(){Q++}),Q},toArray:function(R){return q(R,function(Q){return Q})||[]},only:function(R){if(!se(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return at.Activity=m,at.Children=ht,at.Component=L,at.Fragment=a,at.Profiler=c,at.PureComponent=U,at.StrictMode=s,at.Suspense=p,at.ViewTransition=y,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,at.__COMPILER_RUNTIME={__proto__:null,c:function(R){return I.H.useMemoCache(R)}},at.addTransitionType=Te,at.cache=function(R){return function(){return R.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(R,Q,_e){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var de=S({},R.props),we=R.key;if(Q!=null)for(Xe in Q.key!==void 0&&(we=""+Q.key),Q)!C.call(Q,Xe)||Xe==="key"||Xe==="__self"||Xe==="__source"||Xe==="ref"&&Q.ref===void 0||(de[Xe]=Q[Xe]);var Xe=arguments.length-2;if(Xe===1)de.children=_e;else if(1<Xe){for(var Le=Array(Xe),Re=0;Re<Xe;Re++)Le[Re]=arguments[Re+2];de.children=Le}return A(R.type,we,de)},at.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:f,_context:R},R},at.createElement=function(R,Q,_e){var de,we={},Xe=null;if(Q!=null)for(de in Q.key!==void 0&&(Xe=""+Q.key),Q)C.call(Q,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(we[de]=Q[de]);var Le=arguments.length-2;if(Le===1)we.children=_e;else if(1<Le){for(var Re=Array(Le),Ge=0;Ge<Le;Ge++)Re[Ge]=arguments[Ge+2];we.children=Re}if(R&&R.defaultProps)for(de in Le=R.defaultProps,Le)we[de]===void 0&&(we[de]=Le[de]);return A(R,Xe,we)},at.createRef=function(){return{current:null}},at.forwardRef=function(R){return{$$typeof:d,render:R}},at.isValidElement=se,at.lazy=function(R){return{$$typeof:_,_payload:{_status:-1,_result:R},_init:ve}},at.memo=function(R,Q){return{$$typeof:v,type:R,compare:Q===void 0?null:Q}},at.startTransition=Me,at.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},at.use=function(R){return I.H.use(R)},at.useActionState=function(R,Q,_e){return I.H.useActionState(R,Q,_e)},at.useCallback=function(R,Q){return I.H.useCallback(R,Q)},at.useContext=function(R){return I.H.useContext(R)},at.useDebugValue=function(){},at.useDeferredValue=function(R,Q){return I.H.useDeferredValue(R,Q)},at.useEffect=function(R,Q){return I.H.useEffect(R,Q)},at.useEffectEvent=function(R){return I.H.useEffectEvent(R)},at.useId=function(){return I.H.useId()},at.useImperativeHandle=function(R,Q,_e){return I.H.useImperativeHandle(R,Q,_e)},at.useInsertionEffect=function(R,Q){return I.H.useInsertionEffect(R,Q)},at.useLayoutEffect=function(R,Q){return I.H.useLayoutEffect(R,Q)},at.useMemo=function(R,Q){return I.H.useMemo(R,Q)},at.useOptimistic=function(R,Q){return I.H.useOptimistic(R,Q)},at.useReducer=function(R,Q,_e){return I.H.useReducer(R,Q,_e)},at.useRef=function(R){return I.H.useRef(R)},at.useState=function(R){return I.H.useState(R)},at.useSyncExternalStore=function(R,Q,_e){return I.H.useSyncExternalStore(R,Q,_e)},at.useTransition=function(){return I.H.useTransition()},at.version="19.3.0",at}var Qv;function Rp(){return Qv||(Qv=1,nd.exports=Zb()),nd.exports}var Ue=Rp();const Kb=sx(Ue);var id={exports:{}},rl={},ad={exports:{}},rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function Qb(){return Jv||(Jv=1,(function(o){function n(F,te){var q=F.length;F.push(te);e:for(;0<q;){var ve=q-1>>>1,fe=F[ve];if(0<c(fe,te))F[ve]=te,F[q]=fe,q=ve;else break e}}function a(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var te=F[0],q=F.pop();if(q!==te){F[0]=q;e:for(var ve=0,fe=F.length,Me=fe>>>1;ve<Me;){var Te=2*(ve+1)-1,ht=F[Te],R=Te+1,Q=F[R];if(0>c(ht,q))R<fe&&0>c(Q,ht)?(F[ve]=Q,F[R]=q,ve=R):(F[ve]=ht,F[Te]=q,ve=Te);else if(R<fe&&0>c(Q,q))F[ve]=Q,F[R]=q,ve=R;else break e}}return te}function c(F,te){var q=F.sortIndex-te.sortIndex;return q!==0?q:F.id-te.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],v=[],_=1,m=null,y=3,b=!1,T=!1,D=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var te=a(v);te!==null;){if(te.callback===null)s(v);else if(te.startTime<=F)s(v),te.sortIndex=te.expirationTime,n(p,te);else break;te=a(v)}}function V(F){if(D=!1,U(F),!T)if(a(p)!==null)T=!0,H||(H=!0,se());else{var te=a(v);te!==null&&W(V,te.startTime-F)}}var H=!1,z=-1,I=5,C=-1;function A(){return S?!0:!(o.unstable_now()-C<I)}function G(){if(S=!1,H){var F=o.unstable_now();C=F;var te=!0;try{e:{T=!1,D&&(D=!1,L(z),z=-1),b=!0;var q=y;try{t:{for(U(F),m=a(p);m!==null&&!(m.expirationTime>F&&A());){var ve=m.callback;if(typeof ve=="function"){m.callback=null,y=m.priorityLevel;var fe=ve(m.expirationTime<=F);if(F=o.unstable_now(),typeof fe=="function"){m.callback=fe,U(F),te=!0;break t}m===a(p)&&s(p),U(F)}else s(p);m=a(p)}if(m!==null)te=!0;else{var Me=a(v);Me!==null&&W(V,Me.startTime-F),te=!1}}break e}finally{m=null,y=q,b=!1}te=void 0}}finally{te?se():H=!1}}}var se;if(typeof P=="function")se=function(){P(G)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ue=ie.port2;ie.port1.onmessage=G,se=function(){ue.postMessage(null)}}else se=function(){x(G,0)};function W(F,te){z=x(function(){F(o.unstable_now())},te)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(F){switch(y){case 1:case 2:case 3:var te=3;break;default:te=y}var q=y;y=te;try{return F()}finally{y=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,te){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=y;y=F;try{return te()}finally{y=q}},o.unstable_scheduleCallback=function(F,te,q){var ve=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ve+q:ve):q=ve,F){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=q+fe,F={id:_++,callback:te,priorityLevel:F,startTime:q,expirationTime:fe,sortIndex:-1},q>ve?(F.sortIndex=q,n(v,F),a(p)===null&&F===a(v)&&(D?(L(z),z=-1):D=!0,W(V,q-ve))):(F.sortIndex=fe,n(p,F),T||b||(T=!0,H||(H=!0,se()))),F},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(F){var te=y;return function(){var q=y;y=te;try{return F.apply(this,arguments)}finally{y=q}}}})(rd)),rd}var $v;function Jb(){return $v||($v=1,ad.exports=Qb()),ad.exports}var sd={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function $b(){if(e_)return Un;e_=1;var o=Rp();function n(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:b===h?h:""+b,children:_,containerInfo:m,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(_){return{$$typeof:f,_reason:_}},Un.createPortal=function(_,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return d(_,m,null,y)},Un.flushSync=function(_){var m=p.T,y=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=m,s.p=y,s.d.f()}},Un.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},Un.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Un.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var y=m.as,b=v(y,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:T,fetchPriority:D}):y==="script"&&s.d.X(_,{crossOrigin:b,integrity:T,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=v(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(_)},Un.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=v(y,m.crossOrigin);s.d.L(_,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(_,m){if(typeof _=="string")if(m){var y=v(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(_)},Un.requestFormReset=function(_){s.d.r(_)},Un.unstable_batchedUpdates=function(_,m){return _(m)},Un.useFormState=function(_,m,y){return p.H.useFormState(_,m,y)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var t_;function eM(){if(t_)return sd.exports;t_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),sd.exports=$b(),sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function tM(){if(n_)return rl;n_=1;var o=Jb(),n=Rp(),a=eM();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,i=t;i&&!i.alternate;)t=i,(t.flags&4098)!==0&&(e=t.return),i=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var i=e,r=t;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return p(l),e;if(u===r)return p(l),t;u=u.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=u;else{for(var g=!1,E=l.child;E;){if(E===i){g=!0,i=l,r=u;break}if(E===r){g=!0,r=l,i=u;break}E=E.sibling}if(!g){for(E=u.child;E;){if(E===i){g=!0,i=u,r=l;break}if(E===r){g=!0,r=u,i=l;break}E=E.sibling}if(!g)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}function m(e,t,i,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&i(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,i,r,l,u))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function b(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function T(e){var t=[null,null],i=y(e);return i===null||D(t,e,i.child,{foundSelf:!1}),t}function D(e,t,i,r){for(;i!==null;){if(i===t)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return e[1]=i,!0;e[0]=i}else if((i.tag!==22||i.memoizedState===null)&&D(e,t,i.child,r))return!0;i=i.sibling}return!1}function S(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,L=null;function P(e,t,i){return e===i?!0:e===t?(x=e,!0):!1}function U(e,t,i){return e===i?(L=e,!1):e===t?(L!==null&&(x=e),!0):!1}function V(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function H(e,t,i){for(var r=0,l=e;l;l=i(l))r++;l=0;for(var u=t;u;u=i(u))l++;for(;0<r-l;)e=i(e),r--;for(;0<l-r;)t=i(t),l--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=i(e),t=i(t)}return null}var z=Object.assign,I=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),ue=Symbol.for("react.consumer"),W=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),Te=Symbol.for("react.legacy_hidden"),ht=Symbol.for("react.memo_cache_sentinel"),R=Symbol.for("react.view_transition"),Q=Symbol.for("react.recoverable"),_e=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function Xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case ie:return"Profiler";case se:return"StrictMode";case te:return"Suspense";case q:return"SuspenseList";case Me:return"Activity";case R:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case W:return e.displayName||"Context";case ue:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ve:return t=e.displayName||null,t!==null?t:Xe(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return Xe(e(t))}catch{}}return null}var Le=Array.isArray,Re=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ge=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},j=[],hn=-1;function rt(e){return{current:e}}function Je(e){0>hn||(e.current=j[hn],j[hn]=null,hn--)}function Ne(e,t){hn++,j[hn]=e.current,e.current=t}var yt=rt(null),Ye=rt(null),O=rt(null),w=rt(null);function ae(e,t){switch(Ne(O,t),Ne(Ye,e),Ne(yt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?iv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=iv(t),e=av(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Je(yt),Ne(yt,e)}function xe(){Je(yt),Je(Ye),Je(O)}function Se(e){var t=e.memoizedState;t!==null&&(Ps._currentValue=t.memoizedState,Ne(w,e)),t=yt.current;var i=av(t,e.type);t!==i&&(Ne(Ye,e),Ne(yt,i))}function ge(e){Ye.current===e&&(Je(yt),Je(Ye)),w.current===e&&(Je(w),Ps._currentValue=st)}var We,Pe;function Fe(e){if(We===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);We=t&&t[1]||"",Pe=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+e+Pe}var gt=!1;function Ee(e,t){if(!e||gt)return"";gt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(De){var Y=De}Reflect.construct(e,[],me)}else{try{me.call()}catch(De){Y=De}me=!1;try{var ne=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),me=!0,new e}finally{me&&(ne!==void 0?Object.defineProperty(e.prototype,"props",ne):delete e.prototype.props)}}}else{try{throw Error()}catch(De){Y=De}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(De){if(De&&Y&&typeof De.stack=="string")return[De.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],E=u[1];if(g&&E){var B=g.split(`
`),K=E.split(`
`);for(l=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;l<K.length&&!K[l].includes("DetermineComponentFrameRoot");)l++;if(r===B.length||l===K.length)for(r=B.length-1,l=K.length-1;1<=r&&0<=l&&B[r]!==K[l];)l--;for(;1<=r&&0<=l;r--,l--)if(B[r]!==K[l]){if(r!==1||l!==1)do if(r--,l--,0>l||B[r]!==K[l]){var re=`
`+B[r].replace(" at new "," at ");return e.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",e.displayName)),re}while(1<=r&&0<=l);break}}}finally{gt=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Fe(i):""}function je(e,t){switch(e.tag){case 26:case 27:case 5:return Fe(e.type);case 16:return Fe("Lazy");case 13:return e.child!==t&&t!==null?Fe("Suspense Fallback"):Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return Fe("Activity");case 30:return Fe("ViewTransition");default:return""}}function et(e){try{var t="",i=null;do t+=je(e,i),i=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var nt=Object.prototype.hasOwnProperty,ke=o.unstable_scheduleCallback,mt=o.unstable_cancelCallback,lt=o.unstable_shouldYield,It=o.unstable_requestPaint,X=o.unstable_now,Ie=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,ye=o.unstable_UserBlockingPriority,Be=o.unstable_NormalPriority,He=o.unstable_LowPriority,ot=o.unstable_IdlePriority,Zt=o.log,vn=o.unstable_setDisableYieldValue,Et=null,Yt=null;function _n(e){if(typeof Zt=="function"&&vn(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(Et,e)}catch{}}var Ln=Math.clz32?Math.clz32:ho,Sl=Math.log,Wi=Math.LN2;function ho(e){return e>>>=0,e===0?32:31-(Sl(e)/Wi|0)|0}var ur=256,fr=262144,Zi=4194304;function Oi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,t,i){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~u,r!==0?l=Oi(r):(g&=E,g!==0?l=Oi(g):i||(i=E&~e,i!==0&&(l=Oi(i))))):(E=r&~u,E!==0?l=Oi(E):g!==0?l=Oi(g):i||(i=r&~e,i!==0&&(l=Oi(i)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,i=t&-t,u>=i||u===32&&(i&4194048)!==0)?t:l}function Ta(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function po(e,t){(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ln(i),l=1<<r;t|=e[r],i&=~l}return t}function Cu(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bl(){var e=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),e}function mo(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function hr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ru(e,t,i,r,l,u){var g=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var E=e.entanglements,B=e.expirationTimes,K=e.hiddenUpdates;for(i=g&~i;0<i;){var re=31-Ln(i),me=1<<re;E[re]=0,B[re]=-1;var Y=K[re];if(Y!==null)for(K[re]=null,re=0;re<Y.length;re++){var ne=Y[re];ne!==null&&(ne.lane&=-536870913)}i&=~me}r!==0&&Ml(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(g&~t))}function Ml(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ln(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|i&261930}function N(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-Ln(i),l=1<<r;l&t|e[r]&t&&(e[r]|=t),i&=~l}}function J(e,t){var i=t&-t;return i=(i&42)!==0?1:oe(i),(i&(e.suspendedLanes|t))!==0?0:i}function oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function le(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $(){var e=Ge.p;return e!==0?e:(e=window.event,e===void 0?32:Gv(e.type))}function be(e,t){var i=Ge.p;try{return Ge.p=e,t()}finally{Ge.p=i}}var Ce=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Ce,Oe="__reactProps$"+Ce,$e="__reactContainer$"+Ce,it="__reactEvents$"+Ce,Qe="__reactListeners$"+Ce,Tt="__reactHandles$"+Ce,Ct="__reactResources$"+Ce,jt="__reactMarker$"+Ce,Ht="__reactLoad$"+Ce;function vt(e){delete e[Ae],delete e[Oe],delete e[Qe],delete e[Tt]}function Ze(e){var t;if(t=e[Ae])return t;for(var i=e.parentNode;i;){if(t=i[$e]||i[Ae]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Sv(e);e!==null;){if(i=e[Ae])return i;e=Sv(e)}return t}e=i,i=e.parentNode}return null}function Kt(e){if(e=e[Ae]||e[$e]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function xn(e){var t=e[Ct];return t||(t=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Wt(e){e[jt]=!0}function On(e){e[Ht]=void 0}var Aa=new Set,Gt={};function sn(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Gt[e]=t,e=0;e<t.length;e++)Aa.add(t[e])}var Tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),An={},$r={};function Qi(e){return nt.call($r,e)?!0:nt.call(An,e)?!1:Tn.test(e)?$r[e]=!0:(An[e]=!0,!1)}var Rt=!1;function kp(){var e=Rt;return Rt=!1,e}function El(e,t,i){if(Qi(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,i)}}function Tl(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,i)}}function Ji(e,t,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,r)}}function ei(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dy(e,t,i){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,u.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nu(e){if(!e._valueTracker){var t=jp(e)?"checked":"value";e._valueTracker=dy(e,t,""+e[t])}}function Xp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=jp(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}var py=/[\n"\\]/g;function ui(e){return e.replace(py,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Du(e,t,i,r,l,u,g,E){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ei(t)):e.value!==""+ei(t)&&(e.value=""+ei(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?g==="number"&&e.value==t?Uu(e,ei(e.value)):Uu(e,ei(t)):i!=null?Uu(e,ei(i)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+ei(E):e.removeAttribute("name")}function qp(e,t,i,r,l,u,g,E){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Nu(e);return}i=i!=null?""+ei(i):"",t=t!=null?""+ei(t):i,E||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Nu(e)}function Uu(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function es(e,t,i,r){if(e=e.options,t){t={};for(var l=0;l<i.length;l++)t["$"+i[l]]=!0;for(i=0;i<e.length;i++)l=t.hasOwnProperty("$"+e[i].value),e[i].selected!==l&&(e[i].selected=l),l&&r&&(e[i].defaultSelected=!0)}else{for(i=""+ei(i),t=null,l=0;l<e.length;l++){if(e[l].value===i){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Yp(e,t,i){if(t!=null&&(t=""+ei(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+ei(i):""}function Wp(e,t,i,r){if(t==null){if(r!=null){if(i!=null)throw Error(s(92));if(Le(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),t=i}i=ei(t),e.defaultValue=i,r=e.textContent,r===i&&r!==""&&r!==null&&(e.value=r),Nu(e)}function ts(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var my=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zp(e,t,i){var r=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,i):typeof i!="number"||i===0||my.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function Kp(e,t,i){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",Rt=!0);for(var l in t)r=t[l],t.hasOwnProperty(l)&&i[l]!==r&&(Zp(e,l,r),Rt=!0)}else for(var u in t)t.hasOwnProperty(u)&&Zp(e,u,t[u])}function Lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(e){return vy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zi(){}var Ou=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,is=null;function Qp(e){var t=Kt(e);if(t&&(e=t.stateNode)){var i=e[Oe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Du(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ui(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var l=r[Oe]||null;if(!l)throw Error(s(90));Du(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<i.length;t++)r=i[t],r.form===e.form&&Xp(r)}break e;case"textarea":Yp(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&es(e,!!i.multiple,t,!1)}}}var Pu=!1;function Jp(e,t,i){if(Pu)return e(t,i);Pu=!0;try{var r=e(t);return r}finally{if(Pu=!1,(ns!==null||is!==null)&&(Ac(),ns&&(t=ns,e=is,is=ns=null,Qp(t),e)))for(t=0;t<e.length;t++)Qp(e[t])}}function go(e,t){var i=e.stateNode;if(i===null)return null;var r=i[Oe]||null;if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,t,typeof i));return i}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if($i)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Iu=!1}var wa=null,Bu=null,wl=null;function $p(){if(wl)return wl;var e,t=Bu,i=t.length,r,l="value"in wa?wa.value:wa.textContent,u=l.length;for(e=0;e<i&&t[e]===l[e];e++);var g=i-e;for(r=1;r<=g&&t[i-r]===l[u-r];r++);return wl=l.slice(e,1<r?1-r:void 0)}function Cl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function em(){return!1}function Fn(e){function t(i,r,l,u,g){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(i=e[E],this[E]=i?i(u):u[E]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Rl:em,this.isPropagationStopped=em,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Fn(Ca),_o=z({},Ca,{view:0,detail:0}),_y=Fn(_o),Fu,Hu,xo,Dl=z({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Fu=e.screenX-xo.screenX,Hu=e.screenY-xo.screenY):Hu=Fu=0,xo=e),Fu)},movementY:function(e){return"movementY"in e?e.movementY:Hu}}),tm=Fn(Dl),xy=z({},Dl,{dataTransfer:0}),yy=Fn(xy),Sy=z({},_o,{relatedTarget:0}),Gu=Fn(Sy),by=z({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),My=Fn(by),Ey=z({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ty=Fn(Ey),Ay=z({},Ca,{data:0}),nm=Fn(Ay),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ry[e])?!!t[e]:!1}function Vu(){return Ny}var Dy=z({},_o,{key:function(e){if(e.key){var t=wy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?Cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uy=Fn(Dy),Ly=z({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Fn(Ly),Oy=z({},Ca,{submitter:0}),zy=Fn(Oy),Py=z({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Iy=Fn(Py),By=z({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=Fn(By),Hy=z({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=Fn(Hy),Vy=z({},Ca,{newState:0,oldState:0,source:0}),ky=Fn(Vy),jy=[9,13,27,32],ku=$i&&"CompositionEvent"in window,yo=null;$i&&"documentMode"in document&&(yo=document.documentMode);var Xy=$i&&"TextEvent"in window&&!yo,am=$i&&(!ku||yo&&8<yo&&11>=yo),rm=" ",sm=!1;function om(e,t){switch(e){case"keyup":return jy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var as=!1;function qy(e,t){switch(e){case"compositionend":return lm(t);case"keypress":return t.which!==32?null:(sm=!0,rm);case"textInput":return e=t.data,e===rm&&sm?null:e;default:return null}}function Yy(e,t){if(as)return e==="compositionend"||!ku&&om(e,t)?(e=$p(),wl=Bu=wa=null,as=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return am&&t.locale!=="ko"?null:t.data;default:return null}}var Wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wy[e.type]:t==="textarea"}function um(e,t,i,r){ns?is?is.push(r):is=[r]:ns=r,t=Uc(t,"onChange"),0<t.length&&(i=new Nl("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var So=null,bo=null;function Zy(e){Q0(e,0)}function Ul(e){var t=St(e);if(Xp(t))return e}function fm(e,t){if(e==="change")return t}var hm=!1;if($i){var ju;if($i){var Xu="oninput"in document;if(!Xu){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Xu=typeof dm.oninput=="function"}ju=Xu}else ju=!1;hm=ju&&(!document.documentMode||9<document.documentMode)}function pm(){So&&(So.detachEvent("onpropertychange",mm),bo=So=null)}function mm(e){if(e.propertyName==="value"&&Ul(bo)){var t=[];um(t,bo,e,zu(e)),Jp(Zy,t)}}function Ky(e,t,i){e==="focusin"?(pm(),So=t,bo=i,So.attachEvent("onpropertychange",mm)):e==="focusout"&&pm()}function Qy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ul(bo)}function Jy(e,t){if(e==="click")return Ul(t)}function $y(e,t){if(e==="input"||e==="change")return Ul(t)}function eS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ti=typeof Object.is=="function"?Object.is:eS;function Mo(e,t){if(ti(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!nt.call(t,l)||!ti(e[l],t[l]))return!1}return!0}function qu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vm(e,t){var i=gm(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=gm(i)}}function _m(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_m(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qu(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=qu(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var tS=$i&&"documentMode"in document&&11>=document.documentMode,rs=null,Wu=null,Eo=null,Zu=!1;function ym(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Zu||rs==null||rs!==qu(r)||(r=rs,"selectionStart"in r&&Yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Mo(Eo,r)||(Eo=r,r=Uc(Wu,"onSelect"),0<r.length&&(t=new Nl("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=rs)))}function dr(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ss={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Ku={},Sm={};$i&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function pr(e){if(Ku[e])return Ku[e];if(!ss[e])return e;var t=ss[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Sm)return Ku[e]=t[i];return e}var bm=pr("animationend"),Mm=pr("animationiteration"),Em=pr("animationstart"),nS=pr("transitionrun"),iS=pr("transitionstart"),aS=pr("transitioncancel"),Tm=pr("transitionend"),Am=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function bi(e,t){Am.set(e,t),sn(t,[e])}var rS=0;function ea(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ai.identifierPrefix;var i=rS++;return e="_"+e+"t_"+i.toString(32)+"_",t.autoName=e}function wm(e){if(e==null||typeof e=="string")return e;var t=null,i=As;if(i!==null)for(var r=0;r<i.length;r++){var l=e[i[r]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function ta(e,t){return e=wm(e),t=wm(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],os=0,Ju=0;function Ol(){for(var e=os,t=Ju=os=0;t<e;){var i=fi[t];fi[t++]=null;var r=fi[t];fi[t++]=null;var l=fi[t];fi[t++]=null;var u=fi[t];if(fi[t++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}u!==0&&Cm(i,l,u)}}function zl(e,t,i,r){fi[os++]=e,fi[os++]=t,fi[os++]=i,fi[os++]=r,Ju|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function $u(e,t,i,r){return zl(e,t,i,r),Pl(e)}function mr(e,t){return zl(e,null,null,t),Pl(e)}function Cm(e,t,i){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i);for(var l=!1,u=e.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Ln(i),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[t]:r.push(t),t.lane=i|536870912),u):null}function Pl(e){if(50<qo)throw qo=0,Tc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ls={};function sS(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,t,i,r){return new sS(e,t,i,r)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,t){var i=e.alternate;return i===null?(i=Xn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&1206910976,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Rm(e,t){e.flags&=1206910978;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Il(e,t,i,r,l,u){var g=0;if(r=e,typeof r=="function")ef(r)&&(g=1);else if(typeof r=="string")g=Ob(e,i,yt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case Me:return e=Xn(31,i,t,l),e.elementType=Me,e.lanes=u,e;case G:return gr(i.children,l,u,t);case se:g=8,l|=24;break;case ie:return e=Xn(12,i,t,l|2),e.elementType=ie,e.lanes=u,e;case te:return e=Xn(13,i,t,l),e.elementType=te,e.lanes=u,e;case q:return e=Xn(19,i,t,l),e.elementType=q,e.lanes=u,e;case Te:case R:return e=l|32,e=Xn(30,i,t,e),e.elementType=R,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case W:g=10;break e;case ue:g=9;break e;case F:g=11;break e;case ve:g=14;break e;case fe:g=16,r=null;break e}g=29,i=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=Xn(g,i,t,l),t.elementType=e,t.type=r,t.lanes=u,t}function gr(e,t,i,r){return e=Xn(7,e,r,t),e.lanes=i,e}function tf(e,t,i){return e=Xn(6,e,null,t),e.lanes=i,e}function Nm(e){var t=Xn(18,null,null,0);return t.stateNode=e,t}function nf(e,t,i){return t=Xn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Dm=new WeakMap;function hi(e,t){if(typeof e=="object"&&e!==null){var i=Dm.get(e);return i!==void 0?i:(t={value:e,source:t,stack:et(t)},Dm.set(e,t),t)}return{value:e,source:t,stack:et(t)}}var cs=[],us=0,Bl=null,To=0,di=[],pi=0,Ra=null,Pi=1,Ii="";function ia(e,t){cs[us++]=To,cs[us++]=Bl,Bl=e,To=t}function Um(e,t,i){di[pi++]=Pi,di[pi++]=Ii,di[pi++]=Ra,Ra=e;var r=Pi;e=Ii;var l=32-Ln(r)-1;r&=~(1<<l),i+=1;var u=32-Ln(t)+l;if(30<u){var g=l-l%5;u=(r&(1<<g)-1).toString(32),r>>=g,l-=g,Pi=1<<32-Ln(t)+l|i<<l|r,Ii=u+e}else Pi=1<<u|i<<l|r,Ii=e}function Fl(e){e.return!==null&&(ia(e,1),Um(e,1,0))}function af(e){for(;e===Bl;)Bl=cs[--us],cs[us]=null,To=cs[--us],cs[us]=null;for(;e===Ra;)Ra=di[--pi],di[pi]=null,Ii=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null}function Lm(e,t){di[pi++]=Pi,di[pi++]=Ii,di[pi++]=Ra,Pi=t.id,Ii=t.overflow,Ra=e}var yn=null,Xt=null,pt=!1,Na=null,mi=!1,rf=Error(s(519));function Da(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(hi(t,e)),rf}function Om(e){var t=e.stateNode,i=e.type,r=e.memoizedProps;switch(t[Ae]=e,t[Oe]=r,i){case"dialog":xt("cancel",t),xt("close",t);break;case"iframe":case"object":case"embed":xt("load",t);break;case"video":case"audio":for(i=0;i<Wo.length;i++)xt(Wo[i],t);break;case"source":xt("error",t);break;case"img":case"image":case"link":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"input":xt("invalid",t),qp(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":xt("invalid",t);break;case"textarea":xt("invalid",t),Wp(t,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||r.suppressHydrationWarning===!0||tv(t.textContent,i)?(r.popover!=null&&(xt("beforetoggle",t),xt("toggle",t)),r.onScroll!=null&&xt("scroll",t),r.onScrollEnd!=null&&xt("scrollend",t),r.onClick!=null&&(t.onclick=zi),t=!0):t=!1,t||Da(e,!0)}function Hl(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:yn=yn.return}}function fs(e){if(e!==yn)return!1;if(!pt)return Hl(e),pt=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||zh(e.type,e.memoizedProps)),i=!i),i&&Xt&&Da(e),Hl(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xt=yv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xt=yv(e)}else t===27?(t=Xt,Ya(e.type)?(e=jh,jh=null,Xt=e):Xt=t):Xt=yn?vi(e.stateNode.nextSibling):null;return!0}function vr(){Xt=yn=null,pt=!1}function sf(){var e=Na;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Na=null),e}function Ao(e){Na===null?Na=[e]:Na.push(e)}var of=rt(null),_r=null,aa=null;function Ua(e,t,i){Ne(of,t._currentValue),t._currentValue=i}function ra(e){e._currentValue=of.current,Je(of)}function Gl(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function lf(e,t,i,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var g=l.child;u=u.firstContext;e:for(;u!==null;){var E=u;u=l;for(var B=0;B<t.length;B++)if(E.context===t[B]){u.lanes|=i,E=u.alternate,E!==null&&(E.lanes|=i),Gl(u.return,i,e),r||(g=null);break e}u=E.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=i,u=g.alternate,u!==null&&(u.lanes|=i),Gl(g,i,e),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,g=l.alternate,g!==null&&(g.lanes|=i),Gl(l.return,i,e),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===e){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function xr(e,t,i,r){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=l.type;ti(l.pendingProps.value,g.value)||(e!==null?e.push(E):e=[E])}}else if(l===w.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ps):e=[Ps])}l=l.return}return e!==null&&lf(t,e,i,r),t.flags|=262144,e!==null}function Vl(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yr(e){_r=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return zm(_r,e)}function kl(e,t){return _r===null&&yr(e),zm(e,t)}function zm(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},aa===null){if(e===null)throw Error(s(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return i}var oS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},lS=o.unstable_scheduleCallback,cS=o.unstable_NormalPriority,on={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new oS,data:new Map,refCount:0}}function wo(e){e.refCount--,e.refCount===0&&lS(cS,function(){e.controller.abort()})}function Pm(e,t){if((e.pendingLanes&4194048)!==0){var i=e.transitionTypes;for(i===null&&(i=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];i.indexOf(r)===-1&&i.push(r)}}}var Co=null;function uS(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ro=null,uf=0,Sr=0,hs=null;function fS(e,t){if(Ro===null){var i=Ro=[];uf=0,Sr=Ah(),hs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return uf++,t.then(Im,Im),t}function Im(){if(--uf===0&&(Co=null,Ro!==null)){hs!==null&&(hs.status="fulfilled");var e=Ro;Ro=null,Sr=0,hs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hS(e,t){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<i.length;l++)(0,i[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Bm=Re.S;Re.S=function(e,t){if(N0=X(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&fS(e,t),Co!==null)for(var i=Ns;i!==null;)Pm(i,Co),i=i.next;if(i=e.types,i!==null){for(var r=Ns;r!==null;)Pm(r,i),r=r.next;if(Sr!==0){r=Co,r===null&&(r=Co=[]);for(var l=0;l<i.length;l++){var u=i[l];r.indexOf(u)===-1&&r.push(u)}}}Bm!==null&&Bm(e,t)};var br=rt(null);function ff(){var e=br.current;return e!==null?e:Vt.pooledCache}function jl(e,t){t===null?Ne(br,br.current):Ne(br,t.pool)}function Fm(){var e=ff();return e===null?null:{parent:on._currentValue,pool:e}}var ds=Error(s(460)),hf=Error(s(474)),Xl=Error(s(542)),ql={then:function(){}};function Hm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gm(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(zi,zi),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,km(e),e===void 0&&!("reason"in t)?Error(s(600)):e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=Vt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,km(e),e}throw Er=t,ds}}function Mr(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Er=i,ds):i}}var Er=null;function Vm(){if(Er===null)throw Error(s(459));var e=Er;return Er=null,e}function km(e){if(e===ds||e===Xl)throw Error(s(483))}var ps=null,No=0;function Yl(e){var t=No;return No+=1,ps===null&&(ps=[]),Gm(ps,e,t)}function La(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wl(e,t){throw t.$$typeof===I?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jm(e){function t(Z,k){if(e){var ee=Z.deletions;ee===null?(Z.deletions=[k],Z.flags|=16):ee.push(k)}}function i(Z,k){if(!e)return null;for(;k!==null;)t(Z,k),k=k.sibling;return null}function r(Z){for(var k=new Map;Z!==null;)Z.key===null?k.set(Z.index,Z):k.set(Z.key,Z),Z=Z.sibling;return k}function l(Z,k){return Z=na(Z,k),Z.index=0,Z.sibling=null,Z}function u(Z,k,ee){return Z.index=ee,e?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<k?(Z.flags|=2,k):ee):(Z.flags|=134217730,k)):(Z.flags|=1048576,k)}function g(Z){return e&&Z.alternate===null&&(Z.flags|=134217730),Z}function E(Z,k,ee,pe){return k===null||k.tag!==6?(k=tf(ee,Z.mode,pe),k.return=Z,k):(k=l(k,ee),k.return=Z,k)}function B(Z,k,ee,pe){var Ve=ee.type;return Ve===G?(Z=re(Z,k,ee.props.children,pe,ee.key),La(Z,ee),Z):k!==null&&(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===fe&&Mr(Ve)===k.type)?(k=l(k,ee.props),La(k,ee),k.return=Z,k):(k=Il(ee.type,ee.key,ee.props,null,Z.mode,pe),La(k,ee),k.return=Z,k)}function K(Z,k,ee,pe){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=nf(ee,Z.mode,pe),k.return=Z,k):(k=l(k,ee.children||[]),k.return=Z,k)}function re(Z,k,ee,pe,Ve){return k===null||k.tag!==7?(k=gr(ee,Z.mode,pe,Ve),k.return=Z,k):(k=l(k,ee),k.return=Z,k)}function me(Z,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=tf(""+k,Z.mode,ee),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case C:return ee=Il(k.type,k.key,k.props,null,Z.mode,ee),La(ee,k),ee.return=Z,ee;case A:return k=nf(k,Z.mode,ee),k.return=Z,k;case fe:return k=Mr(k),me(Z,k,ee)}if(Le(k)||de(k))return k=gr(k,Z.mode,ee,null),k.return=Z,k;if(typeof k.then=="function")return me(Z,Yl(k),ee);if(k.$$typeof===W)return me(Z,kl(Z,k),ee);Wl(Z,k)}return null}function Y(Z,k,ee,pe){var Ve=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Ve!==null?null:E(Z,k,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case C:return ee.key===Ve?B(Z,k,ee,pe):null;case A:return ee.key===Ve?K(Z,k,ee,pe):null;case fe:return ee=Mr(ee),Y(Z,k,ee,pe)}if(Le(ee)||de(ee))return Ve!==null?null:re(Z,k,ee,pe,null);if(typeof ee.then=="function")return Y(Z,k,Yl(ee),pe);if(ee.$$typeof===W)return Y(Z,k,kl(Z,ee),pe);Wl(Z,ee)}return null}function ne(Z,k,ee,pe,Ve){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Z=Z.get(ee)||null,E(k,Z,""+pe,Ve);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case C:return Z=Z.get(pe.key===null?ee:pe.key)||null,B(k,Z,pe,Ve);case A:return Z=Z.get(pe.key===null?ee:pe.key)||null,K(k,Z,pe,Ve);case fe:return pe=Mr(pe),ne(Z,k,ee,pe,Ve)}if(Le(pe)||de(pe))return Z=Z.get(ee)||null,re(k,Z,pe,Ve,null);if(typeof pe.then=="function")return ne(Z,k,ee,Yl(pe),Ve);if(pe.$$typeof===W)return ne(Z,k,ee,kl(k,pe),Ve);Wl(k,pe)}return null}function De(Z,k,ee,pe){for(var Ve=null,Mt=null,Ke=k,tt=k=0,un=null;Ke!==null&&tt<ee.length;tt++){Ke.index>tt?(un=Ke,Ke=null):un=Ke.sibling;var wt=Y(Z,Ke,ee[tt],pe);if(wt===null){Ke===null&&(Ke=un);break}e&&Ke&&wt.alternate===null&&t(Z,Ke),k=u(wt,k,tt),Mt===null?Ve=wt:Mt.sibling=wt,Mt=wt,Ke=un}if(tt===ee.length)return i(Z,Ke),pt&&ia(Z,tt),Ve;if(Ke===null){for(;tt<ee.length;tt++)Ke=me(Z,ee[tt],pe),Ke!==null&&(k=u(Ke,k,tt),Mt===null?Ve=Ke:Mt.sibling=Ke,Mt=Ke);return pt&&ia(Z,tt),Ve}for(Ke=r(Ke);tt<ee.length;tt++)un=ne(Ke,Z,tt,ee[tt],pe),un!==null&&(e&&(wt=un.alternate,wt!==null&&Ke.delete(wt.key===null?tt:wt.key)),k=u(un,k,tt),Mt===null?Ve=un:Mt.sibling=un,Mt=un);return e&&Ke.forEach(function(Ja){return t(Z,Ja)}),pt&&ia(Z,tt),Ve}function qe(Z,k,ee,pe){if(ee==null)throw Error(s(151));for(var Ve=null,Mt=null,Ke=k,tt=k=0,un=null,wt=ee.next();Ke!==null&&!wt.done;tt++,wt=ee.next()){Ke.index>tt?(un=Ke,Ke=null):un=Ke.sibling;var Ja=Y(Z,Ke,wt.value,pe);if(Ja===null){Ke===null&&(Ke=un);break}e&&Ke&&Ja.alternate===null&&t(Z,Ke),k=u(Ja,k,tt),Mt===null?Ve=Ja:Mt.sibling=Ja,Mt=Ja,Ke=un}if(wt.done)return i(Z,Ke),pt&&ia(Z,tt),Ve;if(Ke===null){for(;!wt.done;tt++,wt=ee.next())wt=me(Z,wt.value,pe),wt!==null&&(k=u(wt,k,tt),Mt===null?Ve=wt:Mt.sibling=wt,Mt=wt);return pt&&ia(Z,tt),Ve}for(Ke=r(Ke);!wt.done;tt++,wt=ee.next())wt=ne(Ke,Z,tt,wt.value,pe),wt!==null&&(e&&(un=wt.alternate,un!==null&&Ke.delete(un.key===null?tt:un.key)),k=u(wt,k,tt),Mt===null?Ve=wt:Mt.sibling=wt,Mt=wt);return e&&Ke.forEach(function(qb){return t(Z,qb)}),pt&&ia(Z,tt),Ve}function ut(Z,k,ee,pe){if(typeof ee=="object"&&ee!==null&&ee.type===G&&ee.key===null&&ee.props.ref===void 0&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case C:e:{for(var Ve=ee.key;k!==null;){if(k.key===Ve){if(Ve=ee.type,Ve===G){if(k.tag===7){i(Z,k.sibling),pe=l(k,ee.props.children),La(pe,ee),pe.return=Z,Z=pe;break e}}else if(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===fe&&Mr(Ve)===k.type){i(Z,k.sibling),pe=l(k,ee.props),La(pe,ee),pe.return=Z,Z=pe;break e}i(Z,k);break}else t(Z,k);k=k.sibling}ee.type===G?(pe=gr(ee.props.children,Z.mode,pe,ee.key),La(pe,ee),pe.return=Z,Z=pe):(pe=Il(ee.type,ee.key,ee.props,null,Z.mode,pe),La(pe,ee),pe.return=Z,Z=pe)}return g(Z);case A:e:{for(Ve=ee.key;k!==null;){if(k.key===Ve)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){i(Z,k.sibling),pe=l(k,ee.children||[]),pe.return=Z,Z=pe;break e}else{i(Z,k);break}else t(Z,k);k=k.sibling}pe=nf(ee,Z.mode,pe),pe.return=Z,Z=pe}return g(Z);case fe:return ee=Mr(ee),ut(Z,k,ee,pe)}if(Le(ee))return De(Z,k,ee,pe);if(de(ee)){if(Ve=de(ee),typeof Ve!="function")throw Error(s(150));return ee=Ve.call(ee),qe(Z,k,ee,pe)}if(typeof ee.then=="function")return ut(Z,k,Yl(ee),pe);if(ee.$$typeof===W)return ut(Z,k,kl(Z,ee),pe);Wl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(i(Z,k.sibling),pe=l(k,ee),pe.return=Z,Z=pe):(i(Z,k),pe=tf(ee,Z.mode,pe),pe.return=Z,Z=pe),g(Z)):i(Z,k)}return function(Z,k,ee,pe){try{No=0;var Ve=ut(Z,k,ee,pe);return ps=null,Ve}catch(Ke){if(Ke===ds||Ke===Xl)throw Ke;var Mt=Xn(29,Ke,null,Z.mode);return Mt.lanes=pe,Mt.return=Z,Mt}finally{}}}var Tr=jm(!0),Xm=jm(!1),Oa=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Dt&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=Pl(e),Cm(e,null,i),t}return zl(e,r,t,i),Pl(e)}function Do(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,N(e,i)}}function mf(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=g:u=u.next=g,i=i.next}while(i!==null);u===null?l=u=t:u=u.next=t}else l=u=t;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var gf=!1;function Uo(){if(gf){var e=hs;if(e!==null)throw e}}function Lo(e,t,i,r){gf=!1;var l=e.updateQueue;Oa=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var B=E,K=B.next;B.next=null,g===null?u=K:g.next=K,g=B;var re=e.alternate;re!==null&&(re=re.updateQueue,E=re.lastBaseUpdate,E!==g&&(E===null?re.firstBaseUpdate=K:E.next=K,re.lastBaseUpdate=B))}if(u!==null){var me=l.baseState;g=0,re=K=B=null,E=u;do{var Y=E.lane&-536870913,ne=Y!==E.lane;if(ne?(bt&Y)===Y:(r&Y)===Y){Y!==0&&Y===Sr&&(gf=!0),re!==null&&(re=re.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var De=e,qe=E;Y=t;var ut=i;switch(qe.tag){case 1:if(De=qe.payload,typeof De=="function"){me=De.call(ut,me,Y);break e}me=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=qe.payload,Y=typeof De=="function"?De.call(ut,me,Y):De,Y==null)break e;me=z({},me,Y);break e;case 2:Oa=!0}}Y=E.callback,Y!==null&&(e.flags|=64,ne&&(e.flags|=8192),ne=l.callbacks,ne===null?l.callbacks=[Y]:ne.push(Y))}else ne={lane:Y,tag:E.tag,payload:E.payload,callback:E.callback,next:null},re===null?(K=re=ne,B=me):re=re.next=ne,g|=Y;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;ne=E,E=ne.next,ne.next=null,l.lastBaseUpdate=ne,l.shared.pending=null}}while(!0);re===null&&(B=me),l.baseState=B,l.firstBaseUpdate=K,l.lastBaseUpdate=re,u===null&&(l.shared.lanes=0),ka|=g,e.lanes=g,e.memoizedState=me}}function qm(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ym(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)qm(i[e],t)}var Ia=rt(null),Zl=rt(0);function Wm(e,t){e=ua,Ne(Zl,e),Ne(Ia,t),ua=e|t.baseLanes}function vf(){Ne(Zl,ua),Ne(Ia,Ia.current)}function _f(){ua=Zl.current,Je(Ia),Je(Zl)}var Cn=rt(null),zn=null;function Ba(e){var t=e.alternate;Ne(Rn,Rn.current&1),Ne(Cn,e),zn===null&&(t===null||Ia.current!==null||t.memoizedState!==null)&&(zn=e)}function xf(e){Ne(Rn,Rn.current),Ne(Cn,e),zn===null&&(zn=e)}function Zm(e){e.tag===22?(Ne(Rn,Rn.current),Ne(Cn,e),zn===null&&(zn=e)):Fa()}function Fa(){Ne(Rn,Rn.current),Ne(Cn,Cn.current)}function ni(e){Je(Cn),zn===e&&(zn=null),Je(Rn)}var Rn=rt(0);function Oo(e,t){Ne(Cn,Cn.current),Ne(Rn,t)}function yf(e){Je(Rn),Je(Cn),zn===e&&(zn=null)}function Kl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Vh(i)||kh(i)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=0,ct=null,Bt=null,ln=null,Ql=!1,ms=!1,Ar=!1,Jl=0,zo=0,gs=null,dS=0;function $t(){throw Error(s(321))}function Sf(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!ti(e[i],t[i]))return!1;return!0}function bf(e,t,i,r,l,u){return sa=u,ct=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Re.H=e===null||e.memoizedState===null?Ug:Lg,Ar=!1,u=i(r,l),Ar=!1,ms&&(u=Qm(t,i,r,l)),Km(e),u}function Km(e){Re.H=rc;var t=Bt!==null&&Bt.next!==null;if(sa=0,ln=Bt=ct=null,Ql=!1,zo=0,gs=null,t)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&Vl(e)&&(cn=!0))}function Qm(e,t,i,r){ct=e;var l=0;do{if(ms&&(gs=null),zo=0,ms=!1,25<=l)throw Error(s(301));if(l+=1,ln=Bt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Re.H=SS,u=t(i,r)}while(ms);return u}function pS(){var e=Re.H,t=e.useState()[0];return t=typeof t.then=="function"?Po(t):t,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(ct.flags|=1024),t}function Mf(){var e=Jl!==0;return Jl=0,e}function Ef(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function Tf(e){if(Ql){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ql=!1}sa=0,ln=Bt=ct=null,ms=!1,zo=Jl=0,gs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ct.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(Bt===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var t=ln===null?ct.memoizedState:ln.next;if(t!==null)ln=t,Bt=e;else{if(e===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},ln===null?ct.memoizedState=ln=e:ln=ln.next=e}return ln}function $l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=zo;return zo+=1,gs===null&&(gs=[]),e=Gm(gs,e,t),t=ct,(ln===null?t.memoizedState:ln.next)===null&&(t=t.alternate,Re.H=t===null||t.memoizedState===null?Ug:Lg),e}function ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===Q)return;if(e.$$typeof===W)return wn(e)}throw Error(s(438,String(e)))}function Af(e){var t=null,i=ct.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var r=ct.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=$l(),ct.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),r=0;r<e;r++)i[r]=ht;return t.index++,i}function oa(e,t){return typeof t=="function"?t(e):t}function tc(e){var t=nn();return wf(t,Bt,e)}function wf(e,t,i){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}t.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var E=g=null,B=null,K=t,re=!1;do{var me=K.lane&-536870913;if(me!==K.lane?(bt&me)===me:(sa&me)===me){var Y=K.revertLane;if(Y===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),me===Sr&&(re=!0);else if((sa&Y)===Y){K=K.next,Y===Sr&&(re=!0);continue}else me={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(E=B=me,g=u):B=B.next=me,ct.lanes|=Y,ka|=Y;me=K.action,Ar&&i(u,me),u=K.hasEagerState?K.eagerState:i(u,me)}else Y={lane:me,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(E=B=Y,g=u):B=B.next=Y,ct.lanes|=me,ka|=me;K=K.next}while(K!==null&&K!==t);if(B===null?g=u:B.next=E,!ti(u,e.memoizedState)&&(cn=!0,re&&(i=hs,i!==null)))throw i;e.memoizedState=u,e.baseState=g,e.baseQueue=B,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Cf(e){var t=nn(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var r=i.dispatch,l=i.pending,u=t.memoizedState;if(l!==null){i.pending=null;var g=l=l.next;do u=e(u,g.action),g=g.next;while(g!==l);ti(u,t.memoizedState)||(cn=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,r]}function Jm(e,t,i){var r=ct,l=nn(),u=pt;if(u){if(i===void 0)throw Error(s(407));i=i()}else i=t();var g=!ti((Bt||l).memoizedState,i);if(g&&(l.memoizedState=i,cn=!0),l=l.queue,Df(tg.bind(null,r,l,e),[e]),e=l.getSnapshot!==t||g||ln!==null&&(ln.memoizedState.tag&1)!==0,vs(e?9:8,{destroy:void 0},eg.bind(null,r,l,i,t),null),e){if(r.flags|=2048,Vt===null)throw Error(s(349));u||(sa&127)!==0||$m(r,t,i)}return i}function $m(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ct.updateQueue,t===null?(t=$l(),ct.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function eg(e,t,i,r){t.value=i,t.getSnapshot=r,ng(t)&&ig(e)}function tg(e,t,i){return i(function(){ng(t)&&ig(e)})}function ng(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!ti(e,i)}catch{return!0}}function ig(e){var t=mr(e,2);t!==null&&Zn(t,e,2)}function Rf(e){var t=Hn();if(typeof e=="function"){var i=e;if(e=i(),Ar){_n(!0);try{i()}finally{_n(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t}function ag(e,t,i,r){return e.baseState=i,wf(e,Bt,typeof r=="function"?r:oa)}function mS(e,t,i,r,l){if(ac(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};Re.T!==null?i(!0):u.isTransition=!1,r(u),i=t.pending,i===null?(u.next=t.pending=u,rg(t,u)):(u.next=i.next,t.pending=i.next=u)}}function rg(e,t){var i=t.action,r=t.payload,l=e.state;if(t.isTransition){var u=Re.T,g={};g.types=u!==null?u.types:null,Re.T=g;try{var E=i(l,r),B=Re.S;B!==null&&B(g,E),sg(e,t,E)}catch(K){Nf(e,t,K)}finally{u!==null&&g.types!==null&&(u.types=g.types),Re.T=u}}else try{u=i(l,r),sg(e,t,u)}catch(K){Nf(e,t,K)}}function sg(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){og(e,t,r)},function(r){return Nf(e,t,r)}):og(e,t,i)}function og(e,t,i){t.status="fulfilled",t.value=i,lg(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,rg(e,i)))}function Nf(e,t,i){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=i,lg(t),t=t.next;while(t!==r)}e.action=null}function lg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cg(e,t){return t}function ug(e,t){if(pt){var i=Vt.formState;if(i!==null){e:{var r=ct;if(pt){if(Xt){t:{for(var l=Xt,u=mi;l.nodeType!==8;){if(!u){l=null;break t}if(l=vi(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Xt=vi(l.nextSibling),r=l.data==="F!";break e}}Da(r)}r=!1}r&&(t=i[0])}}return i=Hn(),i.memoizedState=i.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:t},i.queue=r,i=Rg.bind(null,ct,r),r.dispatch=i,r=Rf(!1),u=Pf.bind(null,ct,!1,r.queue),r=Hn(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,i=mS.bind(null,ct,l,u,i),l.dispatch=i,r.memoizedState=e,[t,i,!1]}function fg(e){var t=nn();return hg(t,Bt,e)}function hg(e,t,i){if(t=wf(e,t,cg)[0],e=tc(oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Po(t)}catch(g){throw g===ds?Xl:g}else r=t;t=nn();var l=t.queue,u=l.dispatch;return i!==t.memoizedState&&(ct.flags|=2048,vs(9,{destroy:void 0},gS.bind(null,l,i),null)),[r,u,e]}function gS(e,t){e.action=t}function dg(e){var t=nn(),i=Bt;if(i!==null)return hg(t,i,e);nn(),t=t.memoizedState,i=nn();var r=i.queue.dispatch;return i.memoizedState=e,[t,r,!1]}function vs(e,t,i,r){return e={tag:e,create:i,deps:r,inst:t,next:null},t=ct.updateQueue,t===null&&(t=$l(),ct.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e),e}function pg(){return nn().memoizedState}function nc(e,t,i,r){var l=Hn();ct.flags|=e,l.memoizedState=vs(1|t,{destroy:void 0},i,r===void 0?null:r)}function ic(e,t,i,r){var l=nn();r=r===void 0?null:r;var u=l.memoizedState.inst;Bt!==null&&r!==null&&Sf(r,Bt.memoizedState.deps)?l.memoizedState=vs(t,u,i,r):(ct.flags|=e,l.memoizedState=vs(1|t,u,i,r))}function mg(e,t){nc(8390656,8,e,t)}function Df(e,t){ic(2048,8,e,t)}function vS(e){ct.flags|=4;var t=ct.updateQueue;if(t===null)t=$l(),ct.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function gg(e){var t=nn().memoizedState;return vS({ref:t,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vg(e,t){return ic(4,2,e,t)}function _g(e,t){return ic(4,4,e,t)}function xg(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yg(e,t,i){i=i!=null?i.concat([e]):null,ic(4,4,xg.bind(null,t,e),i)}function Uf(){}function Sg(e,t){var i=nn();t=t===void 0?null:t;var r=i.memoizedState;return t!==null&&Sf(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function bg(e,t){var i=nn();t=t===void 0?null:t;var r=i.memoizedState;if(t!==null&&Sf(t,r[1]))return r[0];if(r=e(),Ar){_n(!0);try{e()}finally{_n(!1)}}return i.memoizedState=[r,t],r}function Lf(e,t,i){return i===void 0||(sa&1073741824)!==0&&(bt&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=U0(),ct.lanes|=e,ka|=e,i)}function Mg(e,t,i,r){return ti(i,t)?i:Ia.current!==null?(e=Lf(e,i,r),ti(e,t)||(cn=!0),e):(sa&106)===0||(sa&1073741824)!==0&&(bt&261930)===0?(cn=!0,e.memoizedState=i):(e=U0(),ct.lanes|=e,ka|=e,t)}function Eg(e,t,i,r,l){var u=Ge.p;Ge.p=u!==0&&8>u?u:8;var g=Re.T,E={};E.types=g!==null?g.types:null,Re.T=E,Pf(e,!1,t,i);try{var B=l(),K=Re.S;if(K!==null&&K(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=hS(B,r);Io(e,t,re,si(e))}else Io(e,t,r,si(e))}catch(me){Io(e,t,{then:function(){},status:"rejected",reason:me},si())}finally{Ge.p=u,g!==null&&E.types!==null&&(g.types=E.types),Re.T=g}}function _S(){}function Of(e,t,i,r){if(e.tag!==5)throw Error(s(476));var l=Tg(e).queue;Eg(e,l,t,st,i===null?_S:function(){return Ag(e),i(r)})}function Tg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:st},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ag(e){var t=Tg(e);t.next===null&&(t=e.alternate.memoizedState),Io(e,t.next.queue,{},si())}function zf(){return wn(Ps)}function wg(){return nn().memoizedState}function Cg(){return nn().memoizedState}function xS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=si();e=za(i);var r=Pa(t,e,i);r!==null&&(Zn(r,t,i),Do(r,t,i)),t={cache:cf()},e.payload=t;return}t=t.return}}function yS(e,t,i){var r=si();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ac(e)?Ng(t,i):(i=$u(e,t,i,r),i!==null&&(Zn(i,e,r),Dg(i,t,r)))}function Rg(e,t,i){var r=si();Io(e,t,i,r)}function Io(e,t,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ac(e))Ng(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var g=t.lastRenderedState,E=u(g,i);if(l.hasEagerState=!0,l.eagerState=E,ti(E,g))return zl(e,t,l,0),Vt===null&&Ol(),!1}catch{}finally{}if(i=$u(e,t,l,r),i!==null)return Zn(i,e,r),Dg(i,t,r),!0}return!1}function Pf(e,t,i,r){if(r={lane:2,revertLane:Ah(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ac(e)){if(t)throw Error(s(479))}else t=$u(e,i,r,2),t!==null&&Zn(t,e,2)}function ac(e){var t=e.alternate;return e===ct||t!==null&&t===ct}function Ng(e,t){ms=Ql=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Dg(e,t,i){if((i&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,N(e,i)}}var rc={readContext:wn,use:ec,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t,useEffectEvent:$t},Ug={readContext:wn,use:ec,useCallback:function(e,t){return Hn().memoizedState=[e,t===void 0?null:t],e},useContext:wn,useEffect:mg,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,nc(4194308,4,xg.bind(null,t,e),i)},useLayoutEffect:function(e,t){return nc(4194308,4,e,t)},useInsertionEffect:function(e,t){nc(4,2,e,t)},useMemo:function(e,t){var i=Hn();t=t===void 0?null:t;var r=e();if(Ar){_n(!0);try{e()}finally{_n(!1)}}return i.memoizedState=[r,t],r},useReducer:function(e,t,i){var r=Hn();if(i!==void 0){var l=i(t);if(Ar){_n(!0);try{i(t)}finally{_n(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=yS.bind(null,ct,e),[r.memoizedState,e]},useRef:function(e){var t=Hn();return e={current:e},t.memoizedState=e},useState:function(e){e=Rf(e);var t=e.queue,i=Rg.bind(null,ct,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Uf,useDeferredValue:function(e,t){var i=Hn();return Lf(i,e,t)},useTransition:function(){var e=Rf(!1);return e=Eg.bind(null,ct,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var r=ct,l=Hn();if(pt){if(i===void 0)throw Error(s(407));i=i()}else{if(i=t(),Vt===null)throw Error(s(349));(bt&127)!==0||$m(r,t,i)}l.memoizedState=i;var u={value:i,getSnapshot:t};return l.queue=u,mg(tg.bind(null,r,u,e),[e]),r.flags|=2048,vs(9,{destroy:void 0},eg.bind(null,r,u,i,t),null),i},useId:function(){var e=Hn(),t=Vt.identifierPrefix;if(pt){var i=Ii,r=Pi;i=(r&~(1<<32-Ln(r)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Jl++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=dS++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zf,useFormState:ug,useActionState:ug,useOptimistic:function(e){var t=Hn();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=Pf.bind(null,ct,!0,i),i.dispatch=t,[e,t]},useMemoCache:Af,useCacheRefresh:function(){return Hn().memoizedState=xS.bind(null,ct)},useEffectEvent:function(e){var t=Hn(),i={impl:e};return t.memoizedState=i,function(){if((Dt&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Lg={readContext:wn,use:ec,useCallback:Sg,useContext:wn,useEffect:Df,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:_g,useMemo:bg,useReducer:tc,useRef:pg,useState:function(){return tc(oa)},useDebugValue:Uf,useDeferredValue:function(e,t){var i=nn();return Mg(i,Bt.memoizedState,e,t)},useTransition:function(){var e=tc(oa)[0],t=nn().memoizedState;return[typeof e=="boolean"?e:Po(e),t]},useSyncExternalStore:Jm,useId:wg,useHostTransitionStatus:zf,useFormState:fg,useActionState:fg,useOptimistic:function(e,t){var i=nn();return ag(i,Bt,e,t)},useMemoCache:Af,useCacheRefresh:Cg,useEffectEvent:gg},SS={readContext:wn,use:ec,useCallback:Sg,useContext:wn,useEffect:Df,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:_g,useMemo:bg,useReducer:Cf,useRef:pg,useState:function(){return Cf(oa)},useDebugValue:Uf,useDeferredValue:function(e,t){var i=nn();return Bt===null?Lf(i,e,t):Mg(i,Bt.memoizedState,e,t)},useTransition:function(){var e=Cf(oa)[0],t=nn().memoizedState;return[typeof e=="boolean"?e:Po(e),t]},useSyncExternalStore:Jm,useId:wg,useHostTransitionStatus:zf,useFormState:dg,useActionState:dg,useOptimistic:function(e,t){var i=nn();return Bt!==null?ag(i,Bt,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Af,useCacheRefresh:Cg,useEffectEvent:gg};function If(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:z({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Bf={enqueueSetState:function(e,t,i){e=e._reactInternals;var r=si(),l=za(r);l.payload=t,i!=null&&(l.callback=i),t=Pa(e,l,r),t!==null&&(Zn(t,e,r),Do(t,e,r))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=si(),l=za(r);l.tag=1,l.payload=t,i!=null&&(l.callback=i),t=Pa(e,l,r),t!==null&&(Zn(t,e,r),Do(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=si(),r=za(i);r.tag=2,t!=null&&(r.callback=t),t=Pa(e,r,i),t!==null&&(Zn(t,e,i),Do(t,e,i))}};function Og(e,t,i,r,l,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,g):t.prototype&&t.prototype.isPureReactComponent?!Mo(i,r)||!Mo(l,u):!0}function zg(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&Bf.enqueueReplaceState(t,t.state,null)}function wr(e,t){var i=t;if("ref"in t){i={};for(var r in t)r!=="ref"&&(i[r]=t[r])}if(e=e.defaultProps){i===t&&(i=z({},i));for(var l in e)i[l]===void 0&&(i[l]=e[l])}return i}function Pg(e){Ll(e)}function Ig(e){console.error(e)}function Bg(e){Ll(e)}function sc(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Fg(e,t,i){try{var r=e.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ff(e,t,i){return i=za(i),i.tag=3,i.payload={element:null},i.callback=function(){sc(e,t)},i}function Hg(e){return e=za(e),e.tag=3,e}function Gg(e,t,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){Fg(t,i,r)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Fg(t,i,r),typeof l!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function bS(e,t,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=i.alternate,t!==null&&xr(t,i,l,!0),i=Cn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return zn===null?wc():i.alternate===null&&en===0&&(en=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===ql?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([r]):t.add(r),Mh(e,r,l)),!1;case 22:return i.flags|=65536,r===ql?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([r]):i.add(r)),Mh(e,r,l)),!1}throw Error(s(435,i.tag))}return Mh(e,r,l),wc(),!1}if(pt)return t=Cn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==rf&&(e=Error(s(422),{cause:r}),Ao(hi(e,i)))):(r!==rf&&(t=Error(s(423),{cause:r}),Ao(hi(t,i))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=hi(r,i),l=Ff(e.stateNode,r,l),mf(e,l),en!==4&&(en=2)),!1;var u=Error(s(520),{cause:r});if(u=hi(u,i),Xo===null?Xo=[u]:Xo.push(u),en!==4&&(en=2),t===null)return!0;r=hi(r,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=l&-l,i.lanes|=e,e=Ff(i.stateNode,r,e),mf(i,e),!1;case 1:if(t=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ja===null||!ja.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Hg(l),Gg(l,e,i,r),mf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Hf=Error(s(461)),cn=!1;function pn(e,t,i,r){t.child=e===null?Xm(t,null,i,r):Tr(t,e.child,i,r)}function Vg(e,t,i,r,l){i=i.render;var u=t.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return yr(t),r=bf(e,t,i,g,u,l),E=Mf(),e!==null&&!cn?(Ef(e,t,l),la(e,t,l)):(pt&&E&&Fl(t),t.flags|=1,pn(e,t,r,l),t.child)}function kg(e,t,i,r,l){if(e===null){var u=i.type;return typeof u=="function"&&!ef(u)&&u.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=u,jg(e,t,u,r,l)):(e=Il(i.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Wf(e,l)){var g=u.memoizedProps;if(i=i.compare,i=i!==null?i:Mo,i(g,r)&&e.ref===t.ref)return la(e,t,l)}return t.flags|=1,e=na(u,r),e.ref=t.ref,e.return=t,t.child=e}function jg(e,t,i,r,l){if(e!==null){var u=e.memoizedProps;if(Mo(u,r)&&e.ref===t.ref)if(cn=!1,t.pendingProps=r=u,Wf(e,l))(e.flags&131072)!==0&&(cn=!0);else return t.lanes=e.lanes,la(e,t,l)}return Gf(e,t,i,r,l)}function Xg(e,t,i,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(r=t.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,t.child=null;return qg(e,t,u,i,r)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jl(t,u!==null?u.cachePool:null),u!==null?Wm(t,u):vf(),Zm(t);else return r=t.lanes=536870912,qg(e,t,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(jl(t,u.cachePool),Wm(t,u),Fa(),t.memoizedState=null):(e!==null&&jl(t,null),vf(),Fa());return pn(e,t,l,i),t.child}function Bo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qg(e,t,i,r,l){var u=ff();return u=u===null?null:{parent:on._currentValue,pool:u},t.memoizedState={baseLanes:i,cachePool:u},e!==null&&jl(t,null),vf(),Zm(t),e!==null&&xr(e,t,r,!0),t.childLanes=l,null}function oc(e,t){return t=lc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Yg(e,t,i){return Tr(t,e.child,null,i),e=oc(t,t.pendingProps),e.flags|=2,ni(t),t.memoizedState=null,e}function MS(e,t,i){var r=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pt){if(r.mode==="hidden")return e=oc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bo(null,e);if(xf(t),(e=Xt)?(e=xv(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=Nm(e),i.return=t,t.child=i,yn=t,Xt=null)):e=null,e===null)throw Da(t);return t.lanes=536870912,null}return oc(t,r)}var u=e.memoizedState;if(u!==null){var g=u.dehydrated;if(xf(t),l)if(t.flags&256)t.flags&=-257,t=Yg(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(cn||xr(e,t,i,!1),l=(i&e.childLanes)!==0,cn||l){if(Ia.current===null){if(r=Vt,r!==null&&(g=J(r,i),g!==0&&g!==u.retryLane))throw u.retryLane=g,mr(e,g),Zn(r,e,g),Hf;wc()}t=Yg(e,t,i)}else e=u.treeContext,Xt=vi(g.nextSibling),yn=t,pt=!0,Na=null,mi=!1,e!==null&&Lm(t,e),t=oc(t,r),t.flags|=134221824;return t}return e=na(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _s(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Gf(e,t,i,r,l){return yr(t),i=bf(e,t,i,r,void 0,l),r=Mf(),e!==null&&!cn?(Ef(e,t,l),la(e,t,l)):(pt&&r&&Fl(t),t.flags|=1,pn(e,t,i,l),t.child)}function Wg(e,t,i,r,l,u){return yr(t),t.updateQueue=null,i=Qm(t,r,i,l),Km(e),r=Mf(),e!==null&&!cn?(Ef(e,t,u),la(e,t,u)):(pt&&r&&Fl(t),t.flags|=1,pn(e,t,i,u),t.child)}function Zg(e,t,i,r,l){if(yr(t),t.stateNode===null){var u=ls,g=i.contextType;typeof g=="object"&&g!==null&&(u=wn(g)),u=new i(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Bf,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},df(t),g=i.contextType,u.context=typeof g=="object"&&g!==null?wn(g):ls,u.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(If(t,i,g,r),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&Bf.enqueueReplaceState(u,u.state,null),Lo(t,r,u,l),Uo(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var E=t.memoizedProps,B=wr(i,E);u.props=B;var K=u.context,re=i.contextType;g=ls,typeof re=="object"&&re!==null&&(g=wn(re));var me=i.getDerivedStateFromProps;re=typeof me=="function"||typeof u.getSnapshotBeforeUpdate=="function",E=t.pendingProps!==E,re||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(E||K!==g)&&zg(t,u,r,g),Oa=!1;var Y=t.memoizedState;u.state=Y,Lo(t,r,u,l),Uo(),K=t.memoizedState,E||Y!==K||Oa?(typeof me=="function"&&(If(t,i,me,r),K=t.memoizedState),(B=Oa||Og(t,i,B,r,Y,K,g))?(re||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=K),u.props=r,u.state=K,u.context=g,r=B):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,pf(e,t),g=t.memoizedProps,re=wr(i,g),u.props=re,me=t.pendingProps,Y=u.context,K=i.contextType,B=ls,typeof K=="object"&&K!==null&&(B=wn(K)),E=i.getDerivedStateFromProps,(K=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==me||Y!==B)&&zg(t,u,r,B),Oa=!1,Y=t.memoizedState,u.state=Y,Lo(t,r,u,l),Uo();var ne=t.memoizedState;g!==me||Y!==ne||Oa||e!==null&&e.dependencies!==null&&Vl(e.dependencies)?(typeof E=="function"&&(If(t,i,E,r),ne=t.memoizedState),(re=Oa||Og(t,i,re,r,Y,ne,B)||e!==null&&e.dependencies!==null&&Vl(e.dependencies))?(K||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ne,B),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ne,B)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ne),u.props=r,u.state=ne,u.context=B,r=re):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,_s(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=Tr(t,e.child,null,l),t.child=Tr(t,null,i,l)):pn(e,t,i,l),t.memoizedState=u.state,e=t.child):e=la(e,t,l),e}function Kg(e,t,i,r){return vr(),t.flags|=256,pn(e,t,i,r),t.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(e){return{baseLanes:e,cachePool:Fm()}}function jf(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=ri),e}function Qg(e,t,i){var r=t.pendingProps,l=!1,u=(t.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(Rn.current&2)!==0),g&&(l=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(pt){if(l?Ba(t):Fa(),(e=Xt)?(e=xv(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=Nm(e),i.return=t,t.child=i,yn=t,Xt=null)):e=null,e===null)throw Da(t);return kh(e)?t.lanes=32:t.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Fa(),l=t.mode,u=lc({mode:"hidden",children:u},l),r=gr(r,l,i,null),u.return=t,r.return=t,u.sibling=r,t.child=u,r=t.child,r.memoizedState=kf(i),r.childLanes=jf(e,g,i),t.memoizedState=Vf,Bo(null,r)):(Ba(t),Xf(t,u))}var E=e.memoizedState;if(E!==null){var B=E.dehydrated;if(B!==null)return ES(e,t,u,g,r,B,E,i)}return l?(Fa(),l=r.fallback,u=t.mode,E=e.child,B=E.sibling,r=na(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,B!==null?l=na(B,l):(l=gr(l,u,i,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,Bo(null,r),r=t.child,l=e.child.memoizedState,l===null?l=kf(i):(u=l.cachePool,u!==null?(E=on._currentValue,u=u.parent!==E?{parent:E,pool:E}:u):u=Fm(),l={baseLanes:l.baseLanes|i,cachePool:u}),r.memoizedState=l,r.childLanes=jf(e,g,i),t.memoizedState=Vf,Bo(e.child,r)):(Ba(t),i=e.child,e=i.sibling,i=na(i,{mode:"visible",children:r.children}),i.return=t,i.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=i,t.memoizedState=null,i)}function Xf(e,t){return t=lc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function lc(e,t){return e=Xn(22,e,null,t),e.lanes=0,e}function cc(e,t,i){return Tr(t,e.child,null,i),e=Xf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ES(e,t,i,r,l,u,g,E){if(i)return t.flags&256?(Ba(t),t.flags&=-257,cc(e,t,E)):t.memoizedState!==null?(Fa(),t.child=e.child,t.flags|=128,null):(Fa(),u=l.fallback,g=t.mode,l=lc({mode:"visible",children:l.children},g),u=gr(u,g,E,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Tr(t,e.child,null,E),l=t.child,l.memoizedState=kf(E),l.childLanes=jf(e,r,E),t.memoizedState=Vf,Bo(null,l));if(Ba(t),kh(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Ao({value:l,source:null,stack:null})),cc(e,t,E)}if(cn||xr(e,t,E,!1),r=(E&e.childLanes)!==0,cn||r){if(Ia.current!==null)return cc(e,t,E);if(r=Vt,r!==null&&(l=J(r,E),l!==0&&l!==g.retryLane))throw g.retryLane=l,mr(e,l),Zn(r,e,l),Hf;return Vh(u)||wc(),cc(e,t,E)}return Vh(u)?(t.flags|=192,t.child=e.child,null):(e=g.treeContext,Xt=vi(u.nextSibling),yn=t,pt=!0,Na=null,mi=!1,e!==null&&Lm(t,e),t=Xf(t,l.children),t.flags|=134221824,t)}function Jg(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gl(e.return,t,i)}function $g(e){for(var t=null;e!==null;){var i=e.alternate;i!==null&&Kl(i)===null&&(t=e),e=e.sibling}return t}function uc(e,t,i,r,l,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:u}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=i,g.tailMode=l,g.treeForkCount=u)}function qf(e){var t=e.child;for(e.child=null;t!==null;){var i=t.sibling;t.sibling=e.child,e.child=t,t=i}}function Yf(e,t,i){var r=t.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var g=Rn.current;if(t.flags&128)return Oo(t,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,t.flags|=128):g&=1,Oo(t,g),l==="backwards"&&e!==null?(qf(e),pn(e,t,r,i),qf(e)):pn(e,t,r,i),r=pt?To:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jg(e,i,t);else if(e.tag===19)Jg(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":i=$g(t.child),i===null?(l=t.child,t.child=null):(l=i.sibling,i.sibling=null,qf(t)),uc(t,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(i=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kl(e)===null){t.child=l;break}e=l.sibling,l.sibling=i,i=l,l=e}uc(t,!0,i,null,u,r);break;case"together":uc(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:i=$g(t.child),i===null?(l=t.child,t.child=null):(l=i.sibling,i.sibling=null),uc(t,!1,l,i,u,r)}return t.child}function e0(e,t,i){var r=t.pendingProps;return Ua(t,t.type,r.value),pn(e,t,r.children,i),t.child}function la(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(xr(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,i=na(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=na(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Wf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vl(e)))}function TS(e,t,i){switch(t.tag){case 3:ae(t,t.stateNode.containerInfo),Ua(t,on,e.memoizedState.cache),vr();break;case 27:case 5:Se(t);break;case 4:ae(t,t.stateNode.containerInfo);break;case 10:Ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,xf(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ba(t),t.flags|=128,null;r=xr(e,t,i,!1);var l=t.child.childLanes;return r||(i&l)!==0?Qg(e,t,i):(Ba(t),e=la(e,t,i),e!==null?e.sibling:null)}Ba(t);break;case 19:if(t.flags&128)return Yf(e,t,i);if(l=(e.flags&128)!==0,r=(i&t.childLanes)!==0,r||(xr(e,t,i,!1),r=(i&t.childLanes)!==0),l){if(r)return Yf(e,t,i);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Oo(t,Rn.current),r)break;return null;case 22:return t.lanes=0,Xg(e,t,i,t.pendingProps);case 24:Ua(t,on,e.memoizedState.cache)}return la(e,t,i)}function t0(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)cn=!0;else{if(!Wf(e,i)&&(t.flags&128)===0)return cn=!1,TS(e,t,i);cn=(e.flags&131072)!==0}else cn=!1,pt&&(t.flags&1048576)!==0&&Um(t,To,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Mr(t.elementType),t.type=e,typeof e=="function")ef(e)?(r=wr(e,r),t.tag=1,t=Zg(null,t,e,r,i)):(t.tag=0,t=Gf(null,t,e,r,i));else{if(e!=null){var l=e.$$typeof;if(l===F){t.tag=11,t=Vg(null,t,e,r,i);break e}else if(l===ve){t.tag=14,t=kg(null,t,e,r,i);break e}else if(l===W){t.tag=10,t.type=e,t=e0(null,t,i);break e}}throw t=Xe(e)||e,Error(s(306,t,""))}}return t;case 0:return Gf(e,t,t.type,t.pendingProps,i);case 1:return r=t.type,l=wr(r,t.pendingProps),Zg(e,t,r,l,i);case 3:e:{if(ae(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var u=t.memoizedState;l=u.element,pf(e,t),Lo(t,r,null,i);var g=t.memoizedState;if(r=g.cache,Ua(t,on,r),r!==u.cache&&lf(t,[on],i,!0),Uo(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Kg(e,t,r,i);break e}else if(r!==l){l=hi(Error(s(424)),t),Ao(l),t=Kg(e,t,r,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xt=vi(e.firstChild),yn=t,pt=!0,Na=null,mi=!0,i=Xm(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(vr(),r===l){t=la(e,t,i);break e}pn(e,t,r,i)}t=t.child}return t;case 26:return _s(e,t),e===null?(i=Av(t.type,null,t.pendingProps,null))?t.memoizedState=i:pt||(t.stateNode=rv(t.type,t.pendingProps,O.current,t)):t.memoizedState=Av(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&pt&&(r=t.stateNode=bv(t.type,t.pendingProps,O.current),yn=t,mi=!0,l=Xt,Ya(t.type)?(jh=l,Xt=vi(r.firstChild)):Xt=l),pn(e,t,t.pendingProps.children,i),_s(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pt&&((l=r=Xt)&&(r=xb(r,t.type,t.pendingProps,mi),r!==null?(t.stateNode=r,yn=t,Xt=vi(r.firstChild),mi=!1,l=!0):l=!1),l||Da(t)),Se(t),l=t.type,u=t.pendingProps,g=e!==null?e.memoizedProps:null,r=u.children,zh(l,u)?r=null:g!==null&&zh(l,g)&&(t.flags|=32),t.memoizedState!==null&&(l=bf(e,t,pS,null,null,i),Ps._currentValue=l),_s(e,t),pn(e,t,r,i),t.child;case 6:return e===null&&pt&&((e=i=Xt)&&(i=yb(i,t.pendingProps,mi),i!==null?(t.stateNode=i,yn=t,Xt=null,e=!0):e=!1),e||Da(t)),null;case 13:return Qg(e,t,i);case 4:return ae(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,i):pn(e,t,r,i),t.child;case 11:return Vg(e,t,t.type,t.pendingProps,i);case 7:return r=t.pendingProps,_s(e,t),pn(e,t,r,i),t.child;case 8:return pn(e,t,t.pendingProps.children,i),t.child;case 12:return pn(e,t,t.pendingProps.children,i),t.child;case 10:return e0(e,t,i);case 9:return l=t.type._context,r=t.pendingProps.children,yr(t),l=wn(l),r=r(l),t.flags|=1,pn(e,t,r,i),t.child;case 14:return kg(e,t,t.type,t.pendingProps,i);case 15:return jg(e,t,t.type,t.pendingProps,i);case 19:return Yf(e,t,i);case 31:return MS(e,t,i);case 22:return Xg(e,t,i,t.pendingProps);case 24:return yr(t),r=wn(on),e===null?(l=ff(),l===null&&(l=Vt,u=cf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),t.memoizedState={parent:r,cache:l},df(t),Ua(t,on,l)):((e.lanes&i)!==0&&(pf(e,t),Lo(t,null,null,i),Uo()),l=e.memoizedState,u=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ua(t,on,r)):(r=u.cache,Ua(t,on,r),r!==l.cache&&lf(t,[on],i,!0))),pn(e,t,t.pendingProps.children,i),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!=="auto"?t.flags|=e===null?18882560:18874368:pt&&Fl(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:_s(e,t),pn(e,t,r.children,i),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function ca(e){e.flags|=4}function Zf(e,t,i,r,l){var u;if((u=(e.mode&32)!==0)&&(u=i===null?Nv(t,r):Nv(t,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(P0())e.flags|=8192;else throw Er=ql,hf}else e.flags&=-16777217}function n0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dv(t))if(P0())e.flags|=8192;else throw Er=ql,hf}function fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?bl():536870912,e.lanes|=t,Ms|=t)}function Fo(e,t){if(!pt)switch(e.tailMode){case"visible":break;case"collapsed":for(var i=e.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null}}function qt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var l=e.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function AS(e,t,i){var r=t.pendingProps;switch(af(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(t),null;case 1:return qt(t),null;case 3:return i=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(on),xe(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(fs(t)?ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sf())),qt(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(ca(t),u!==null?(qt(t),n0(t,u)):(qt(t),Zf(t,l,null,r,i))):u?u!==e.memoizedState?(ca(t),qt(t),n0(t,u)):(qt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&ca(t),qt(t),Zf(t,l,e,r,i)),null;case 27:if(ge(t),i=O.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ca(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return qt(t),t.subtreeFlags&=-33554433,null}e=yt.current,fs(t)?Om(t):(e=bv(l,r,i),t.stateNode=e,ca(t))}return qt(t),t.subtreeFlags&=-33554433,null;case 5:if(ge(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ca(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return qt(t),t.subtreeFlags&=-33554433,null}if(u=yt.current,fs(t))Om(t);else{var g=Ko(O.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}u[Ae]=t,u[Oe]=r;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=u;e:switch(Dn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ca(t)}}return qt(t),t.subtreeFlags&=-33554433,Zf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ca(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=O.current,fs(t)){if(e=t.stateNode,i=t.memoizedProps,r=null,l=yn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[Ae]=t,e=!!(e.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||tv(e.nodeValue,i)),e||Da(t,!0)}else e=Ko(e).createTextNode(r),e[Ae]=t,t.stateNode=e}return qt(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(r=fs(t),i!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ae]=t}else vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qt(t),e=!1}else i=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(ni(t),t):(ni(t),null);if((t.flags&128)!==0)throw Error(s(558))}return qt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ae]=t}else vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qt(t),l=!1}else l=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(ni(t),t):(ni(t),null)}return ni(t),(t.flags&128)!==0?(t.lanes=i,t):(i=r!==null,e=e!==null&&e.memoizedState!==null,i&&(r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),fc(t,t.updateQueue),qt(t),null);case 4:return xe(),e===null&&Nh(t.stateNode.containerInfo),t.flags|=67108864,qt(t),null;case 10:return ra(t.type),qt(t),null;case 19:if(yf(t),r=t.memoizedState,r===null)return qt(t),null;if(l=(t.flags&128)!==0,u=r.rendering,u===null)if(l)Fo(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Kl(e),u!==null){for(t.flags|=128,Fo(r,!1),e=u.updateQueue,t.updateQueue=e,fc(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Rm(i,e),i=i.sibling;return Oo(t,Rn.current&1|2),pt&&ia(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&X()>Mc&&(t.flags|=128,l=!0,Fo(r,!1),t.lanes=4194304)}else{if(!l)if(e=Kl(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,fc(t,e),Fo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!pt)return qt(t),null}else 2*X()-r.renderingStartTime>Mc&&i!==536870912&&(t.flags|=128,l=!0,Fo(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(i=e;i!==null;){if(i.alternate!==null){i=!1;break e}i=i.sibling}i=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=X(),e.sibling=null,u=Rn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||pt?Oo(t,u):(i=u,Ne(Cn,t),Ne(Rn,i),zn===null&&(zn=t)),pt&&ia(t,r.treeForkCount),e}return qt(t),null;case 22:case 23:return ni(t),_f(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(i&536870912)!==0&&(t.flags&128)===0&&(qt(t),t.subtreeFlags&6&&(t.flags|=8192)):qt(t),i=t.updateQueue,i!==null&&fc(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==i&&(t.flags|=2048),e!==null&&Je(br),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ra(on),qt(t),null;case 25:return null;case 30:return t.flags|=33554432,qt(t),null}throw Error(s(156,t.tag))}function wS(e,t){switch(af(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(on),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ge(t),null;case 31:if(t.memoizedState!==null){if(ni(t),t.alternate===null)throw Error(s(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ni(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return yf(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return xe(),null;case 10:return ra(t.type),null;case 22:case 23:return ni(t),_f(),e!==null&&Je(br),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(on),null;case 25:return null;default:return null}}function i0(e,t){switch(af(t),t.tag){case 3:ra(on),xe();break;case 26:case 27:case 5:ge(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&ni(t);break;case 13:ni(t);break;case 19:yf(t);break;case 10:ra(t.type);break;case 22:case 23:ni(t),_f(),e!==null&&Je(br);break;case 24:ra(on)}}function Ho(e,t){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&e)===e){r=void 0;var u=i.create,g=i.inst;r=u(),g.destroy=r}i=i.next}while(i!==l)}}catch(E){Ot(t,t.return,E)}}function Ha(e,t,i){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,l=t;var B=i,K=E;try{K()}catch(re){Ot(l,B,re)}}}r=r.next}while(r!==u)}}catch(re){Ot(t,t.return,re)}}function a0(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{Ym(t,i)}catch(r){Ot(e,e.return,r)}}}function r0(e,t,i){i.props=wr(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(r){Ot(e,t,r)}}function Bi(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=ea(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=hv(u)),r=l.ref;break;case 7:if(e.stateNode===null){var g=new oi(e);m(e.child,!1,vb,g,void 0,void 0),e.stateNode=g}r=e.stateNode;break;default:r=e.stateNode}typeof i=="function"?e.refCleanup=i(r):i.current=r}}catch(E){Ot(e,t,E)}}function Nn(e,t){var i=e.ref,r=e.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Ot(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Ot(e,t,l)}else i.current=null}function hc(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var i=0;i<t.length;i++)_v(e.stateNode,t[i])}function s0(e){for(var t=e.return;t!==null&&(Qf(t)&&_v(e.stateNode,t.stateNode),!Kf(t));)t=t.return}function Go(e){for(var t=e.return;t!==null&&(Qf(t)&&_b(e.stateNode,t.stateNode),!Kf(t));)t=t.return}function Kf(e){return e.tag===5||e.tag===3||e.tag===27}function Qf(e){return e&&e.tag===7&&e.stateNode!==null}function Jf(e){var t=e.type,i=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break e;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Ot(e,e.return,l)}}function $f(e,t,i){try{var r=e.stateNode;$S(r,e.type,i,t),r[Oe]=t}catch(l){Ot(e,e.return,l)}}function o0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function eh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function th(e,t,i,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(l),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=zi)),hc(e,r),Rt=!0;else if(l!==4&&(l===27&&(hc(e,r),r=null,Ya(e.type)&&(i=e.stateNode,t=null)),e=e.child,e!==null))for(th(e,t,i,r),e=e.sibling;e!==null;)th(e,t,i,r),e=e.sibling}function dc(e,t,i,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?i.insertBefore(l,t):i.appendChild(l),hc(e,r),Rt=!0;else if(l!==4&&(l===27&&(hc(e,r),r=null,Ya(e.type)&&(i=e.stateNode)),e=e.child,e!==null))for(dc(e,t,i,r),e=e.sibling;e!==null;)dc(e,t,i,r),e=e.sibling}function l0(e){var t=e.stateNode,i=e.memoizedProps;try{for(var r=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Dn(t,r,i),t[Ae]=e,t[Oe]=i}catch(u){Ot(e,e.return,u)}}var pc=!1,ii=null;function c0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(pc=!0)}var Fi=null;function u0(){var e=Fi;return Fi=null,e}var qn=0;function xs(e,t,i,r,l){return qn=0,f0(e.child,t,i,r,l)}function f0(e,t,i,r,l){for(var u=!1;e!==null;){if(e.tag===5){var g=e.stateNode;if(r!==null){var E=Bh(g);r.push(E),E.view&&(u=!0)}else u||Bh(g).view&&(u=!0);pc=!0,uv(g,qn===0?t:t+"_"+qn,i),qn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||f0(e.child,t,i,r,l)&&(u=!0));e=e.sibling}return u}function Hi(e,t){for(;e!==null;)e.tag===5?fv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Hi(e.child,t)),e=e.sibling}function mc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(mc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(s(544));var i=t.name;t=ta(t.default,t.share),t!=="none"&&(xs(e,i,t,null,!1)||Hi(e.child,!1))}e=e.sibling}}function nh(e,t){if(e.tag===30){var i=e.stateNode,r=e.memoizedProps,l=ea(r,i),u=ta(r.default,i.paired?r.share:r.enter);u!=="none"?xs(e,l,u,null,!1)?(mc(e),i.paired||t||ws(e,r.onEnter)):Hi(e.child,!1):mc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)nh(e,t),e=e.sibling;else mc(e)}function ih(e){if(ii!==null&&ii.size!==0){var t=ii;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var i=e.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=t.get(r);if(l!==void 0){var u=ta(i.default,i.share);if(u!=="none"&&(xs(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,ws(e,i.onShare)):Hi(e.child,!1)),t.delete(r),t.size===0)break}}}ih(e)}e=e.sibling}}}function ah(e){if(e.tag===30){var t=e.memoizedProps,i=ea(t,e.stateNode),r=ii!==null?ii.get(i):void 0,l=ta(t.default,r!==void 0?t.share:t.exit);l!=="none"&&(xs(e,i,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ii.delete(i),ws(e,t.onShare)):ws(e,t.onExit):Hi(e.child,!1)),ii!==null&&ih(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ah(e),e=e.sibling;else ii!==null&&ih(e)}function h0(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,i=ea(t,e.stateNode);t=ta(t.default,t.update),e.flags&=-5,t!=="none"&&xs(e,i,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&h0(e);e=e.sibling}}function rh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Hi(e.child,!1))}rh(e)}e=e.sibling}}function gc(e){if(e.tag===30)e.stateNode.paired=null,Hi(e.child,!1),rh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gc(e),e=e.sibling;else rh(e)}function d0(e){for(e=e.child;e!==null;)e.tag===30?Hi(e.child,!1):(e.subtreeFlags&33554432)!==0&&d0(e),e=e.sibling}function sh(e,t,i,r,l,u,g){for(var E=!1;t!==null;){if(t.tag===5){var B=t.stateNode;if(u!==null&&qn<u.length){var K=u[qn],re=Bh(B);(K.view||re.view)&&(E=!0);var me;if(me=(e.flags&4)===0)if(re.clip)me=!0;else{me=K.rect;var Y=re.rect;me=me.y!==Y.y||me.x!==Y.x||me.height!==Y.height||me.width!==Y.width}me&&(e.flags|=4),re.abs?re=!K.abs:(K=K.rect,re=re.rect,re=K.height!==re.height||K.width!==re.width),re&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&uv(B,qn===0?i:i+"_"+qn,l),E&&(e.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(B,qn===0?r:r+"_"+qn,t.memoizedProps)),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&g?e.flags|=t.flags&32:sh(e,t.child,i,r,l,u,g)&&(E=!0));t=t.sibling}return E}function p0(e,t){for(e=e.child;e!==null;){if(e.tag===30){var i=e.memoizedProps,r=e.stateNode,l=ea(i,r),u=ta(i.default,i.update),g;g=e.memoizedState,e.memoizedState=null,r=e;var E=e.child;qn=0,l=sh(r,E,l,l,u,g,!1),(e.flags&4)!==0&&l&&ws(e,i.onUpdate)}else(e.subtreeFlags&33554432)!==0&&p0(e);e=e.sibling}}var Sn=!1,Ut=!1,Gi=!1,oh=!1,m0=typeof WeakSet=="function"?WeakSet:Set,bn=null,Vi=!1,Vo=!1,vc=!1,lh=!1;function CS(e,t,i){if(e=e.containerInfo,Lh=Is,e=xm(e),Yu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break e}var E=0,B=-1,K=-1,re=0,me=0,Y=e,ne=null;t:for(;;){for(var De;Y!==r||u!==0&&Y.nodeType!==3||(B=E+u),Y!==g||l!==0&&Y.nodeType!==3||(K=E+l),Y.nodeType===3&&(E+=Y.nodeValue.length),(De=Y.firstChild)!==null;)ne=Y,Y=De;for(;;){if(Y===e)break t;if(ne===r&&++re===u&&(B=E),ne===g&&++me===l&&(K=E),(De=Y.nextSibling)!==null)break;Y=ne,ne=Y.parentNode}Y=De}r=B===-1||K===-1?null:{start:B,end:K}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oh={focusedElem:e,selectionRange:r},Is=!1,i=(i&335544064)===i,bn=t,t=i?9270:1024;bn!==null;){if(e=bn,i&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)i&&ah(r[u]);if(e.alternate===null&&(e.flags&2)!==0)i&&c0(e),_c(i);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&ah(r),_c(i);continue}else if(r!==null&&r.memoizedState!==null){i&&c0(e),_c(i);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,bn=r):(i&&h0(e),_c(i))}}ii=null}function _c(e){for(;bn!==null;){var t=bn,i=e,r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var u=t.stateNode;try{var g=wr(t.type,l);i=u.getSnapshotBeforeUpdate(g,r),u.__reactInternalSnapshotBeforeUpdate=i}catch(E){Ot(t,t.return,E)}}break;case 3:if((l&1024)!==0){if(r=t.stateNode.containerInfo,i=r.nodeType,i===9)Gh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Gh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ea(r.memoizedProps,r.stateNode),l=t.memoizedProps,l=ta(l.default,l.update),l!=="none"&&xs(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,bn=r;break}bn=t.return}}function g0(e,t,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:ki(e,i),r&4&&Ho(5,i);break;case 1:if(ki(e,i),r&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(g){Ot(i,i.return,g)}else{var l=wr(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ot(i,i.return,g)}}r&64&&a0(i),r&512&&Bi(i,i.return);break;case 3:if(ki(e,i),r&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Ym(e,t)}catch(g){Ot(i,i.return,g)}}break;case 27:t===null&&r&4&&l0(i);case 26:case 5:ki(e,i),t===null&&r&4&&Jf(i),r&512&&Bi(i,i.return);break;case 12:ki(e,i);break;case 31:ki(e,i),r&4&&y0(e,i);break;case 13:ki(e,i),r&4&&S0(e,i),r&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=HS.bind(null,i),Sb(e,i))));break;case 22:if(r=i.memoizedState!==null||Sn,!r){var u=t!==null&&t.memoizedState!==null||Ut;t=Sn,l=Ut,Sn=r,(Ut=u)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ti(e,i,r)):ki(e,i),Sn=t,Ut=l}break;case 30:ki(e,i),r&512&&Bi(i,i.return);break;case 7:r&512&&Bi(i,i.return);default:ki(e,i)}}function ch(e,t){for(e=e.child;e!==null;)v0(e,t),e=e.sibling}function v0(e,t){switch(e.tag){case 5:case 26:try{var i=e.stateNode;if(t){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(B){Ot(e,e.return,B)}uh(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Rt=!0}catch(B){Ot(e,e.return,B)}break;case 18:try{var E=e.stateNode;t?cv(E,!0):cv(e.stateNode,!1)}catch(B){Ot(e,e.return,B)}break;case 22:case 23:e.memoizedState===null&&ch(e,t);break;default:ch(e,t)}}function uh(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var i=e,r=t;switch(i.tag){case 4:v0(i,r);break e;case 22:i.memoizedState===null&&uh(i,r);break e;default:uh(i,r)}}e=e.sibling}}function _0(e){var t=e.alternate;t!==null&&(e.alternate=null,_0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,Yn=!1;function Mi(e,t,i){for(i=i.child;i!==null;)x0(e,t,i),i=i.sibling}function x0(e,t,i){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Et,i)}catch{}switch(i.tag){case 26:Ut||Nn(i,t),Mi(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ut&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ut||Nn(i,t),Go(i);var r=Qt,l=Yn;Ya(i.type)&&(Qt=i.stateNode,Yn=!1),Mi(e,t,i),Mv(i.stateNode,i.type,i.memoizedProps),Qt=r,Yn=l;break;case 5:Ut||Nn(i,t),Go(i);case 6:if(i.tag===6&&Go(i),r=Qt,l=Yn,Qt=null,Mi(e,t,i),Qt=r,Yn=l,Qt!==null)if(Yn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(i.stateNode),Rt=!0}catch(u){Ot(i,t,u)}else try{Qt.removeChild(i.stateNode),Rt=!0}catch(u){Ot(i,t,u)}break;case 18:Qt!==null&&(Yn?(e=Qt,lv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Bs(e)):lv(Qt,i.stateNode));break;case 4:r=Qt,l=Yn,Qt=i.stateNode.containerInfo,Yn=!0,Mi(e,t,i),Qt=r,Yn=l;break;case 0:case 11:case 14:case 15:Ha(2,i,t),Ut||Ha(4,i,t),Mi(e,t,i);break;case 1:Ut||(Nn(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"&&r0(i,t,r)),Mi(e,t,i);break;case 21:Mi(e,t,i);break;case 22:Ut=(r=Ut)||i.memoizedState!==null,Mi(e,t,i),Ut=r;break;case 30:Nn(i,t),Mi(e,t,i);break;case 7:Ut||Nn(i,t),Mi(e,t,i);break;default:Mi(e,t,i)}}function y0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bs(e)}catch(i){Ot(t,t.return,i)}}}function S0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bs(e)}catch(i){Ot(t,t.return,i)}}function RS(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new m0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new m0),t;default:throw Error(s(435,e.tag))}}function xc(e,t){var i=RS(e);t.forEach(function(r){if(!i.has(r)){i.add(r);var l=GS.bind(null,e,r);r.then(l,l)}})}function Gn(e,t,i){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],g=e,E=t,B=E;e:for(;B!==null;){switch(B.tag){case 27:if(Ya(B.type)){Qt=B.stateNode,Yn=!1;break e}break;case 5:Qt=B.stateNode,Yn=!1;break e;case 3:case 4:Qt=B.stateNode.containerInfo,Yn=!0;break e}B=B.return}if(Qt===null)throw Error(s(160));x0(g,E,u),Qt=null,Yn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)b0(t,e,i),t=t.sibling}var Ei=null;function b0(e,t,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var g=r[u];g.ref.impl=g.nextImpl}Gn(t,e,i),Vn(e),l&4&&(Ha(3,e,e.return),Ho(3,e),Ha(5,e,e.return));break;case 1:Gn(t,e,i),Vn(e),l&512&&(Ut||r===null||Nn(r,r.return)),l&64&&Sn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?t:i.concat(t))));break;case 26:if(u=Ei,Gn(t,e,i),Vn(e),l&512&&(Ut||r===null||Nn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=e.memoizedState,r===null)if(i===null)if(e.stateNode===null)if(Sn)e.stateNode=rv(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,i=e.memoizedProps,l=u.ownerDocument||u;t:switch(t){case"title":r=l.getElementsByTagName("title")[0],(!r||r[jt]||r[Ae]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(t),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,t,i),r[Ae]=e,Wt(r),t=r;break e;case"link":if(u=Rv("link","href",l).get(t+(i.href||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(g,1);break t}}r=l.createElement(t),Dn(r,t,i),l.head.appendChild(r);break;case"meta":if(u=Rv("meta","content",l).get(t+(i.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(g,1);break t}}r=l.createElement(t),Dn(r,t,i),l.head.appendChild(r);break;default:throw Error(s(468,t))}r[Ae]=e,Wt(r),t=r}e.stateNode=t}else Sn||Wh(u,e.type,e.stateNode);else e.stateNode=Cv(u,i,e.memoizedProps);else l!==i?(l===null?(t=r.stateNode,t===null||Ut||t.parentNode.removeChild(t)):l.count--,i===null?Sn||Wh(u,e.type,e.stateNode):Cv(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&$f(e,e.memoizedProps,r.memoizedProps);break;case 27:Gn(t,e,i),Vn(e),l&512&&(Ut||r===null||Nn(r,r.return)),r!==null&&l&4&&$f(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Gi,Gi=!1,Gn(t,e,i),Gi=u,Vn(e),l&512&&(Ut||r===null||Nn(r,r.return)),e.flags&32){t=e.stateNode;try{ts(t,""),Rt=!0}catch(re){Ot(e,e.return,re)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,$f(e,t,r!==null?r.memoizedProps:t)),l&1024&&(oh=!0);break;case 6:if(Gn(t,e,i),Vn(e),l&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,i=e.stateNode;try{i.nodeValue=t,Rt=!0}catch(re){Ot(e,e.return,re)}}break;case 3:if(Rt=!1,Oc=null,u=Ei,Ei=Qo(t.containerInfo),Gn(t,e,i),Ei=u,Vn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Bs(t.containerInfo)}catch(re){Ot(e,e.return,re)}oh&&(oh=!1,M0(e)),Rt=!1;break;case 4:l=Gi,Gi=Sn,r=kp(),u=Ei,Ei=Qo(e.stateNode.containerInfo),Gn(t,e,i),Vn(e),Ei=u,Rt&&Vo&&(vc=!0),Rt=r,Gi=l;break;case 12:Gn(t,e,i),Vn(e);break;case 31:Gn(t,e,i),Vn(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xc(e,t)));break;case 13:Gn(t,e,i),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(bc=X()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xc(e,t)));break;case 22:u=e.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var E=Sn,B=Ut,K=Gi;Sn=E||u,Gi=K||u,Ut=B||g,Gn(t,e,i),Ut=B,Gi=K,Sn=E,Vn(e),l&8192&&(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,!u||r===null||g||Sn||Ut||(t=g||Ut,i=Sn,r=Ut,Sn=u||Sn,Ut=t,Ga(e,2),Sn=i,Ut=r),!u&&Gi||ch(e,u)),l&4&&(t=e.updateQueue,t!==null&&(i=t.retryQueue,i!==null&&(t.retryQueue=null,xc(e,i))));break;case 19:Gn(t,e,i),Vn(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xc(e,t)));break;case 30:l&512&&(Ut||r===null||Nn(r,r.return)),l=kp(),u=Vo,g=(i&335544064)===i,E=e.memoizedProps,Vo=g&&ta(E.default,E.update)!=="none",Gn(t,e,i),Vn(e),g&&r!==null&&Rt&&(e.flags|=4),Vo=u,Rt=l;break;case 21:break;case 7:l&512&&(Ut||r===null||Nn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Gn(t,e,i),Vn(e)}}function Vn(e){var t=e.flags;if(t&2){try{for(var i,r=e.return;r!==null;){if(o0(r)){i=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(Qf(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(Kf(l))break;l=l.return}var g=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,B=eh(e);dc(e,B,E,g);break;case 5:var K=i.stateNode;i.flags&32&&(ts(K,""),i.flags&=-33);var re=eh(e);dc(e,re,K,g);break;case 3:case 4:var me=i.stateNode.containerInfo,Y=eh(e);th(e,Y,me,g);break;default:throw Error(s(161))}}catch(ne){Ot(e,e.return,ne)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;M0(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Is=!0,t.reset(),Is=!1),e=e.sibling}}function ys(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)E0(t,e),t=t.sibling;else p0(t)}function E0(e,t){var i=e.alternate;if(i===null)nh(e,!1);else switch(e.tag){case 3:if(lh=Vi=!1,u0(),ys(t,e),!Vi&&!vc){if(e=Fi,e!==null)for(var r=0;r<e.length;r+=3){i=e[r];var l=e[r+1];fv(i,e[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),lh=!0}Fi=null;break;case 5:ys(t,e);break;case 4:r=Vi,Vi=!1,ys(t,e),Vi&&(vc=!0),Vi=r;break;case 22:e.memoizedState===null&&(i.memoizedState!==null?nh(e,!1):ys(t,e));break;case 30:r=Vi,l=u0(),Vi=!1,ys(t,e),Vi&&(e.flags|=4);var u=e.memoizedProps,g=e.stateNode;t=ea(u,g),g=ea(i.memoizedProps,g);var E=ta(u.default,u.update);E==="none"?t=!1:(u=i.memoizedState,i.memoizedState=null,i=e.child,qn=0,t=sh(e,i,t,g,E,u,!0),qn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(ws(e,e.memoizedProps.onUpdate),Fi=l):l!==null&&(l.push.apply(l,Fi),Fi=l),Vi=(e.flags&32)!==0?!0:r;break;default:ys(t,e)}}function ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)g0(e,t.alternate,t),t=t.sibling}function Ga(e,t){for(e=e.child;e!==null;){var i=e,r=t;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Ga(i,r);break;case 1:Nn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&r0(i,i.return,l),Ga(i,r);break;case 27:(r&2)!==0&&Mv(i.stateNode,i.type,i.memoizedProps);case 5:Nn(i,i.return),i.tag!==5&&i.tag!==27||Go(i),Ga(i,r);break;case 6:Go(i);break;case 26:Nn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ut||l.parentNode.removeChild(l),Ga(i,r);break;case 22:i.memoizedState===null&&Ga(i,r);break;case 30:Nn(i,i.return),Ga(i,r);break;case 7:Nn(i,i.return);default:Ga(i,r)}e=e.sibling}}function Ti(e,t,i){for(i=(t.subtreeFlags&8772)!==0?i:i&-2,t=t.child;t!==null;){var r=t.alternate,l=e,u=t,g=u.flags,E=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:Ti(l,u,i),Ho(4,u);break;case 1:if(Ti(l,u,i),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(re){Ot(r,r.return,re)}if(r=u,l=r.updateQueue,l!==null){var B=r.stateNode;try{var K=l.shared.hiddenCallbacks;if(K!==null)for(l.shared.hiddenCallbacks=null,l=0;l<K.length;l++)qm(K[l],B)}catch(re){Ot(r,r.return,re)}}E&&g&64&&a0(u),Bi(u,u.return);break;case 27:(i&2)!==0&&l0(u);case 5:u.tag!==5&&u.tag!==27||s0(u),Ti(l,u,i),E&&r===null&&g&4&&Jf(u),Bi(u,u.return);break;case 6:s0(u);break;case 26:B=u.stateNode,u.memoizedState!==null||B===null||Sn||Wh(Qo(B.ownerDocument),u.type,B),Ti(l,u,i),E&&r===null&&g&4&&Jf(u),Bi(u,u.return);break;case 12:Ti(l,u,i);break;case 31:Ti(l,u,i),E&&g&4&&y0(l,u);break;case 13:Ti(l,u,i),E&&g&4&&S0(l,u);break;case 22:u.memoizedState===null&&Ti(l,u,i),Bi(u,u.return);break;case 30:Ti(l,u,i),Bi(u,u.return);break;case 7:Bi(u,u.return);default:Ti(l,u,i)}t=t.sibling}}function fh(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&wo(i))}function hh(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wo(e))}function gi(e,t,i,r){var l=(i&335544064)===i;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)T0(e,t,i,r),t=t.sibling;else l&&d0(t)}function T0(e,t,i,r){var l=(i&335544064)===i;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&gc(t);var u=t.flags;switch(t.tag){case 0:case 11:case 15:gi(e,t,i,r),u&2048&&Ho(9,t);break;case 1:gi(e,t,i,r);break;case 3:gi(e,t,i,r),l&&lh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,t.alternate!==null&&(u=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==u&&(t.refCount++,u!=null&&wo(u)));break;case 12:if(u&2048){gi(e,t,i,r),u=t.stateNode;try{var g=t.memoizedProps,E=g.id,B=g.onPostCommit;typeof B=="function"&&B(E,t.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(K){Ot(t,t.return,K)}}else gi(e,t,i,r);break;case 31:gi(e,t,i,r);break;case 13:gi(e,t,i,r);break;case 23:break;case 22:g=t.stateNode,E=t.alternate,t.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&gc(E),g._visibility&2?gi(e,t,i,r):ko(e,t)):(l&&E!==null&&E.memoizedState!==null&&gc(t),g._visibility&2?gi(e,t,i,r):(g._visibility|=2,Ss(e,t,i,r,(t.subtreeFlags&10256)!==0||!1))),u&2048&&fh(E,t);break;case 24:gi(e,t,i,r),u&2048&&hh(t.alternate,t);break;case 30:l&&(u=t.alternate,u!==null&&(Hi(u.child,!0),Hi(t.child,!0))),gi(e,t,i,r);break;default:gi(e,t,i,r)}}function Ss(e,t,i,r,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,g=t,E=i,B=r,K=g.flags;switch(g.tag){case 0:case 11:case 15:Ss(u,g,E,B,l),Ho(8,g);break;case 23:break;case 22:var re=g.stateNode;g.memoizedState!==null?re._visibility&2?Ss(u,g,E,B,l):ko(u,g):(re._visibility|=2,Ss(u,g,E,B,l)),l&&K&2048&&fh(g.alternate,g);break;case 24:Ss(u,g,E,B,l),l&&K&2048&&hh(g.alternate,g);break;default:Ss(u,g,E,B,l)}t=t.sibling}}function ko(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,r=t,l=r.flags;switch(r.tag){case 22:ko(i,r),l&2048&&fh(r.alternate,r);break;case 24:ko(i,r),l&2048&&hh(r.alternate,r);break;default:ko(i,r)}t=t.sibling}}var Cr=8192;function Rr(e,t,i){if(e.subtreeFlags&Cr)for(e=e.child;e!==null;)A0(e,t,i),e=e.sibling}function A0(e,t,i){switch(e.tag){case 26:Rr(e,t,i),e.flags&Cr&&(e.memoizedState!==null?zb(i,Ei,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Lv(i,e)));break;case 5:Rr(e,t,i),e.flags&Cr&&(e=e.stateNode,(t&335544128)===t&&Lv(i,e));break;case 3:case 4:var r=Ei;Ei=Qo(e.stateNode.containerInfo),Rr(e,t,i),Ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,Rr(e,t,i),Cr=r):Rr(e,t,i));break;case 30:if((e.flags&Cr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ii===null&&(ii=new Map),ii.set(r,l)}Rr(e,t,i);break;default:Rr(e,t,i)}}function w0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];bn=r,R0(r,e)}w0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)C0(e),e=e.sibling}function C0(e){switch(e.tag){case 0:case 11:case 15:jo(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:jo(e);break;case 12:jo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yc(e)):jo(e);break;default:jo(e)}}function yc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];bn=r,R0(r,e)}w0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ha(8,t,t.return),yc(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,yc(t));break;default:yc(t)}e=e.sibling}}function R0(e,t){for(;bn!==null;){var i=bn;switch(i.tag){case 0:case 11:case 15:Ha(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,bn=r;else e:for(i=e;bn!==null;){r=bn;var l=r.sibling,u=r.return;if(_0(r),r===i){bn=null;break e}if(l!==null){l.return=u,bn=l;break e}bn=u}}}var NS={getCacheForType:function(e){var t=wn(on),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return wn(on).controller.signal}},DS=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Vt=null,_t=null,bt=0,Lt=0,ai=null,Va=!1,bs=!1,dh=!1,ua=0,en=0,ka=0,Nr=0,Sc=0,ri=0,Ms=0,Xo=null,Wn=null,ph=!1,bc=0,N0=0,Mc=1/0,Ec=null,ja=null,Jt=0,Ai=null,Dr=null,ji=0,mh=0,gh=null,D0=null,Es=null,Ts=null,As=null,qo=0,Tc=null;function si(){return(Dt&2)!==0&&bt!==0?bt&-bt:Re.T!==null?Ah():$()}function U0(){if(ri===0)if((bt&536870912)===0||pt){var e=fr;fr<<=1,(fr&3932160)===0&&(fr=262144),ri=e}else ri=536870912;return e=Cn.current,e!==null&&(e.flags|=32),ri}function ws(e,t){if(t!=null){var i=e.stateNode,r=i.ref;r===null&&(r=i.ref=hv(ea(e.memoizedProps,i))),Ts===null&&(Ts=[]),Ts.push(t.bind(null,r))}}function Zn(e,t,i){(e===Vt&&(Lt===2||Lt===9)||e.cancelPendingCommit!==null)&&(Cs(e,0),Xa(e,bt,ri,!1)),hr(e,i),((Dt&2)===0||e!==Vt)&&(e===Vt&&((Dt&2)===0&&(Nr|=i),en===4&&Xa(e,bt,ri,!1)),Xi(e))}function L0(e,t,i){if((Dt&6)!==0)throw Error(s(327));var r=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Ta(e,t),l=r?OS(e,t):_h(e,t,!0),u=r;do{if(l===0){bs&&!r&&Xa(e,t,0,!1);break}else{if(i=e.current.alternate,u&&!US(i)){l=_h(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var E=e;l=Xo;var B=E.current.memoizedState.isDehydrated;if(B&&(Cs(E,g).flags|=256),g=_h(E,g,!1),g!==2&&g!==6){if(dh&&!B){E.errorRecoveryDisabledLanes|=u,Nr|=u,l=4;break e}u=Wn,Wn=l,u!==null&&(Wn===null?Wn=u:Wn.push.apply(Wn,u))}l=g}if(u=!1,l!==2)continue}}if(l===1){Cs(e,0),Xa(e,t,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Xa(r,t,ri,!Va);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=bc+300-X(),10<l)){if(Xa(r,t,ri,!Va),Ki(r,0,!0)!==0)break e;ji=t,r.timeoutHandle=Ih(O0.bind(null,r,i,Wn,Ec,ph,t,ri,Nr,Ms,Va,u,"Throttled",-0,0),l);break e}O0(r,i,Wn,Ec,ph,t,ri,Nr,Ms,Va,u,null,-0,0)}}break}while(!0);Xi(e)}function O0(e,t,i,r,l,u,g,E,B,K,re,me,Y,ne){e.timeoutHandle=-1;var De=t.subtreeFlags,qe=(u&335544064)===u;if(me=null,(qe||De&8192||(De&16785408)===16785408)&&(me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},ii=null,A0(t,u,me),qe&&(De=me,qe=e.containerInfo,qe=(qe.nodeType===9?qe:qe.ownerDocument).__reactViewTransition,qe!=null&&(De.count++,De.waitingForViewTransition=!0,De=el.bind(De),qe.finished.then(De,De))),De=(u&62914560)===u?bc-X():(u&4194048)===u?N0-X():0,De=Pb(me,De),De!==null)){ji=u,e.cancelPendingCommit=De(V0.bind(null,e,t,u,i,r,l,g,E,B,K,re,me,null,Y,ne)),Xa(e,u,g,!K);return}V0(e,t,u,i,r,l,g,E,B,K,re,me)}function US(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],u=l.getSnapshot;l=l.value;try{if(!ti(u(),l))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(e,t,i,r){t=po(e,t),t&=~Sc,t&=~Nr,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var u=31-Ln(l),g=1<<u;r[u]=-1,l&=~g}i!==0&&Ml(e,i,t)}function Ac(){return(Dt&6)===0?(Yo(0),!1):!0}function vh(){if(_t!==null){if(Lt===0)var e=_t.return;else e=_t,aa=_r=null,Tf(e),ps=null,No=0,e=_t;for(;e!==null;)i0(e.alternate,e),e=e.return;_t=null}}function Cs(e,t){var i=e.timeoutHandle;return i!==-1&&(e.timeoutHandle=-1,nb(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),ji=0,vh(),Vt=e,_t=i=na(e.current,null),bt=t,Lt=0,ai=null,Va=!1,bs=Ta(e,t),dh=!1,Ms=ri=Sc=Nr=ka=en=0,Wn=Xo=null,ph=!1,ua=po(e,t),Ol(),i}function z0(e,t){ct=null,Re.H=rc,t===ds||t===Xl?(t=Vm(),Lt=3):t===hf?(t=Vm(),Lt=4):Lt=t===Hf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ai=t,_t===null&&(en=1,sc(e,hi(t,e.current)))}function P0(){var e=Cn.current;return e===null?!0:(bt&4194048)===bt?zn===null:(bt&62914560)===bt||(bt&536870912)!==0?e===zn:!1}function I0(){var e=Re.H;return Re.H=rc,e===null?rc:e}function B0(){var e=Re.A;return Re.A=NS,e}function wc(){en=4,Va||(bt&4194048)!==bt&&Cn.current!==null||(bs=!0),(ka&134217727)===0&&(Nr&134217727)===0||Vt===null||Xa(Vt,bt,ri,!1)}function _h(e,t,i){var r=Dt;Dt|=2;var l=I0(),u=B0();(Vt!==e||bt!==t)&&(Ec=null,Cs(e,t)),t=!1;var g=en;e:do try{if(Lt!==0&&_t!==null){var E=_t,B=ai;switch(Lt){case 8:vh(),g=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(t=!0);var K=Lt;if(Lt=0,ai=null,Rs(e,E,B,K),i&&bs){g=0;break e}break;default:K=Lt,Lt=0,ai=null,Rs(e,E,B,K)}}LS(),g=en;break}catch(re){z0(e,re)}while(!0);return t&&e.shellSuspendCounter++,aa=_r=null,Dt=r,Re.H=l,Re.A=u,_t===null&&(Vt=null,bt=0,Ol()),g}function LS(){for(;_t!==null;)F0(_t)}function OS(e,t){var i=Dt;Dt|=2;var r=I0(),l=B0();Vt!==e||bt!==t?(Ec=null,Mc=X()+500,Cs(e,t)):bs=Ta(e,t);e:do try{if(Lt!==0&&_t!==null){t=_t;var u=ai;t:switch(Lt){case 1:Lt=0,ai=null,Rs(e,t,u,1);break;case 2:case 9:if(Hm(u)){Lt=0,ai=null,H0(t);break}t=function(){Lt!==2&&Lt!==9||Vt!==e||(Lt=7),Xi(e)},u.then(t,t);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:Hm(u)?(Lt=0,ai=null,H0(t)):(Lt=0,ai=null,Rs(e,t,u,7));break;case 5:var g=null;switch(_t.tag){case 26:g=_t.memoizedState;case 5:case 27:var E=_t;if(g?Dv(g):E.stateNode.complete){Lt=0,ai=null;var B=E.sibling;if(B!==null)_t=B;else{var K=E.return;K!==null?(_t=K,Cc(K)):_t=null}break t}}Lt=0,ai=null,Rs(e,t,u,5);break;case 6:Lt=0,ai=null,Rs(e,t,u,6);break;case 8:vh(),en=6;break e;default:throw Error(s(462))}}zS();break}catch(re){z0(e,re)}while(!0);return aa=_r=null,Re.H=r,Re.A=l,Dt=i,_t!==null?0:(Vt=null,bt=0,Ol(),en)}function zS(){for(;_t!==null&&!lt();)F0(_t)}function F0(e){var t=t0(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Cc(e):_t=t}function H0(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=Wg(i,t,t.pendingProps,t.type,void 0,bt);break;case 11:t=Wg(i,t,t.pendingProps,t.type.render,t.ref,bt);break;case 5:Tf(t);var r=t;r===yn&&(pt?(Hl(r),r.tag===5&&r.stateNode!=null&&(Xt=r.stateNode)):(Hl(r),pt=!0));default:i0(i,t),t=_t=Rm(t,ua),t=t0(i,t,ua)}e.memoizedProps=e.pendingProps,t===null?Cc(e):_t=t}function Rs(e,t,i,r){aa=_r=null,Tf(t),ps=null,No=0;var l=t.return;try{if(bS(e,l,t,i,bt)){en=1,sc(e,hi(i,e.current)),_t=null;return}}catch(u){if(l!==null)throw _t=l,u;en=1,sc(e,hi(i,e.current)),_t=null;return}t.flags&32768?(pt||r===1?e=!0:bs||(bt&536870912)!==0?e=!1:(Va=e=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),G0(t,e)):Cc(t)}function Cc(e){var t=e;do{if((t.flags&32768)!==0){G0(t,Va);return}e=t.return;var i=AS(t.alternate,t,ua);if(i!==null){_t=i;return}if(t=t.sibling,t!==null){_t=t;return}_t=t=e}while(t!==null);en===0&&(en=5)}function G0(e,t){do{var i=wS(e.alternate,e);if(i!==null){i.flags&=32767,_t=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){_t=e;return}_t=e=i}while(e!==null);en=6,_t=null}function V0(e,t,i,r,l,u,g,E,B,K,re,me){e.cancelPendingCommit=null;do Rc();while(Jt!==0);if((Dt&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===Vt&&(_t=Vt=null,bt=0),Dr=t,Ai=e,ji=i,gh=l,D0=r,PS(e,t,i,g,E,B,me)}}function PS(e,t,i,r,l,u,g){var E=t.lanes|t.childLanes;if(mh=E,E|=Ju,Ru(e,i,E,r,l,u),Ts=null,(i&335544064)===i?(As=uS(e),r=10262):(As=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,VS(Be,function(){return bh(),null})):(e.callbackNode=null,e.callbackPriority=0),pc=!1,r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=Re.T,Re.T=null,l=Ge.p,Ge.p=2,u=Dt,Dt|=4;try{CS(e,t,i)}finally{Dt=u,Ge.p=l,Re.T=r}}Jt=1,pc?Es=lb(g,e.containerInfo,As,xh,yh,BS,Sh,bh,IS):(xh(),yh(),Sh())}function IS(e){if(Jt!==0){var t=Ai.onRecoverableError;t(e,{componentStack:null})}}function BS(){Jt===3&&(Jt=0,E0(Dr,Ai),Jt=4)}function xh(){if(Jt===1){Jt=0;var e=Ai,t=Dr,i=ji,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=Re.T,Re.T=null;var l=Ge.p;Ge.p=2;var u=Dt;Dt|=4;try{Vo=vc=!1,b0(t,e,i),i=Oh;var g=xm(e.containerInfo),E=i.focusedElem,B=i.selectionRange;if(g!==E&&E&&E.ownerDocument&&_m(E.ownerDocument.documentElement,E)){if(B!==null&&Yu(E)){var K=B.start,re=B.end;if(re===void 0&&(re=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(re,E.value.length);else{var me=E.ownerDocument||document,Y=me&&me.defaultView||window;if(Y.getSelection){var ne=Y.getSelection(),De=E.textContent.length,qe=Math.min(B.start,De),ut=B.end===void 0?qe:Math.min(B.end,De);!ne.extend&&qe>ut&&(g=ut,ut=qe,qe=g);var Z=vm(E,qe),k=vm(E,ut);if(Z&&k&&(ne.rangeCount!==1||ne.anchorNode!==Z.node||ne.anchorOffset!==Z.offset||ne.focusNode!==k.node||ne.focusOffset!==k.offset)){var ee=me.createRange();ee.setStart(Z.node,Z.offset),ne.removeAllRanges(),qe>ut?(ne.addRange(ee),ne.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ne.addRange(ee))}}}}for(me=[],ne=E;ne=ne.parentNode;)ne.nodeType===1&&me.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<me.length;E++){var pe=me[E];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}Is=!!Lh,Oh=Lh=null}finally{Dt=u,Ge.p=l,Re.T=r}}e.current=t,Jt=2}}function yh(){if(Jt===2){Jt=0;var e=Ai,t=Dr,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=Re.T,Re.T=null;var r=Ge.p;Ge.p=2;var l=Dt;Dt|=4;try{g0(e,t.alternate,t)}finally{Dt=l,Ge.p=r,Re.T=i}}Jt=3}}function Sh(){if(Jt===4||Jt===3){Jt=0;var e=Es;Es=null,It();var t=Ai,i=Dr,r=ji,l=D0,u=(r&335544064)===r?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?Jt=5:(Jt=0,Dr=Ai=null,k0(t,t.pendingLanes)),u=t.pendingLanes,u===0&&(ja=null),le(r),i=i.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Re.T,u=Ge.p,Ge.p=2,Re.T=null;try{for(var g=t.onRecoverableError,E=0;E<l.length;E++){var B=l[E];g(B.value,{componentStack:B.stack})}}finally{Re.T=i,Ge.p=u}}if(l=Ts,g=As,As=null,l!==null&&(Ts=null,g===null&&(g=[]),e!==null))for(B=0;B<l.length;B++)i=(0,l[B])(g),i!==void 0&&e.finished.finally(i);(ji&3)!==0&&Rc(),Xi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===Tc?qo++:(qo=0,Tc=t):(qo=0,Tc=null),Yo(0)}}function k0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wo(t)))}function Rc(){return Es!==null&&(Es.skipTransition(),Es=null),xh(),yh(),Sh(),bh()}function bh(){if(Jt!==5)return!1;var e=Ai,t=mh;mh=0;var i=le(ji),r=Re.T,l=Ge.p;try{Ge.p=32>i?32:i,Re.T=null,i=gh,gh=null;var u=Ai,g=ji;if(Jt=0,Dr=Ai=null,ji=0,(Dt&6)!==0)throw Error(s(331));var E=Dt;if(Dt|=4,C0(u.current),T0(u,u.current,g,i),Dt=E,Yo(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Et,u)}catch{}return!0}finally{Ge.p=l,Re.T=r,k0(e,t)}}function j0(e,t,i){t=hi(i,t),t=Ff(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(hr(e,2),Xi(e))}function Ot(e,t,i){if(e.tag===3)j0(e,e,i);else for(;t!==null;){if(t.tag===3){j0(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ja===null||!ja.has(r))){e=hi(i,e),i=Hg(2),r=Pa(t,i,2),r!==null&&(Gg(i,r,t,e),hr(r,2),Xi(r));break}}t=t.return}}function Mh(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new DS;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(i)||(dh=!0,l.add(i),e=FS.bind(null,e,t,i),t.then(e,e))}function FS(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Vt===e&&(bt&i)===i&&((en===4||en===3&&(bt&62914560)===bt&&300>X()-bc)&&(Dt&2)===0?Cs(e,0):Sc|=i,Ms===bt&&(Ms=0)),Xi(e)}function X0(e,t){t===0&&(t=bl()),e=mr(e,t),e!==null&&(hr(e,t),Xi(e))}function HS(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),X0(e,i)}function GS(e,t){var i=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),X0(e,i)}function VS(e,t){return ke(e,t)}var Ns=null,Ds=null,Eh=!1,Nc=!1,Th=!1,qa=0;function Xi(e){e!==Ds&&e.next===null&&(Ds===null?Ns=Ds=e:Ds=Ds.next=e),Nc=!0,Eh||(Eh=!0,jS())}function Yo(e,t){if(!Th&&Nc){Th=!0;do for(var i=!1,r=Ns;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var g=r.suspendedLanes,E=r.pingedLanes;u=(1<<31-Ln(42|e)+1)-1,u&=l&~(g&~E),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,Z0(r,u))}else u=bt,u=Ki(r,r===Vt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ta(r,u)||(i=!0,Z0(r,u));r=r.next}while(i);Th=!1}}function kS(){q0()}function q0(){Nc=Eh=!1;var e=0;qa!==0&&tb()&&(e=qa);for(var t=X(),i=null,r=Ns;r!==null;){var l=r.next,u=Y0(r,t);u===0?(r.next=null,i===null?Ns=l:i.next=l,l===null&&(Ds=i)):(i=r,(e!==0||(u&3)!==0)&&(Nc=!0)),r=l}Jt!==0&&Jt!==5||Yo(e),qa!==0&&(qa=0)}function Y0(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var g=31-Ln(u),E=1<<g,B=l[g];B===-1?((E&i)===0||(E&r)!==0)&&(l[g]=Cu(E,t)):B<=t&&(e.expiredLanes|=E),u&=~E}if(t=Vt,i=bt,i=Ki(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,i===0||e===t&&(Lt===2||Lt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&mt(r),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Ta(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(r!==null&&mt(r),le(i)){case 2:case 8:i=ye;break;case 32:i=Be;break;case 268435456:i=ot;break;default:i=Be}return r=W0.bind(null,e),i=ke(i,r),e.callbackPriority=t,e.callbackNode=i,t}return r!==null&&r!==null&&mt(r),e.callbackPriority=2,e.callbackNode=null,2}function W0(e,t){if(Jt!==0&&Jt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Rc()&&e.callbackNode!==i)return null;var r=bt;return r=Ki(e,e===Vt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(L0(e,r,t),Y0(e,X()),e.callbackNode!=null&&e.callbackNode===i?W0.bind(null,e):null)}function Z0(e,t){if(Rc())return null;L0(e,t,!0)}function jS(){ib(function(){(Dt&6)!==0?ke(he,kS):q0()})}function Ah(){if(qa===0){var e=Sr;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),qa=e}return qa}function K0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Al(e)}function XS(e,t,i,r,l){if(t==="submit"&&i&&i.stateNode===l){var u=K0((l[Oe]||null).action),g=r.submitter;g&&(t=(t=g[Oe]||null)?K0(t.formAction):g.getAttribute("formAction"),t!==null&&(u=t,g=null));var E=new Nl("action","action",null,r,l);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(qa!==0){var B=new FormData(l,g);Of(i,{pending:!0,data:B,method:l.method,action:u},null,B)}}else typeof u=="function"&&(E.preventDefault(),B=new FormData(l,g),Of(i,{pending:!0,data:B,method:l.method,action:u},u,B))},currentTarget:l}]})}}for(var wh=0;wh<Qu.length;wh++){var Ch=Qu[wh],qS=Ch.toLowerCase(),YS=Ch[0].toUpperCase()+Ch.slice(1);bi(qS,"on"+YS)}bi(bm,"onAnimationEnd"),bi(Mm,"onAnimationIteration"),bi(Em,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(nS,"onTransitionRun"),bi(iS,"onTransitionStart"),bi(aS,"onTransitionCancel"),bi(Tm,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function Q0(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],l=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var g=r.length-1;0<=g;g--){var E=r[g],B=E.instance,K=E.currentTarget;if(E=E.listener,B!==u&&l.isPropagationStopped())break e;u=E,l.currentTarget=K;try{u(l)}catch(re){Ll(re)}l.currentTarget=null,u=B}else for(g=0;g<r.length;g++){if(E=r[g],B=E.instance,K=E.currentTarget,E=E.listener,B!==u&&l.isPropagationStopped())break e;u=E,l.currentTarget=K;try{u(l)}catch(re){Ll(re)}l.currentTarget=null,u=B}}}}function xt(e,t){var i=t[it];i===void 0&&(i=t[it]=new Set);var r=e+"__bubble";i.has(r)||(J0(t,e,2,!1),i.add(r))}function Rh(e,t,i){var r=0;t&&(r|=4),J0(i,e,r,t)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Nh(e){if(!e[Dc]){e[Dc]=!0,Aa.forEach(function(i){i!=="selectionchange"&&(WS.has(i)||Rh(i,!1,e),Rh(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dc]||(t[Dc]=!0,Rh("selectionchange",!1,t))}}function J0(e,t,i,r){switch(Gv(t)){case 2:var l=Hb;break;case 8:l=Gb;break;default:l=Kh}i=l.bind(null,t,i,e),l=void 0,!Iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,i,{capture:!0,passive:l}):e.addEventListener(t,i,!0):l!==void 0?e.addEventListener(t,i,{passive:l}):e.addEventListener(t,i,!1)}function Dh(e,t,i,r,l){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===l)break;if(g===4)for(g=r.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;E!==null;){if(g=Ze(E),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){r=u=g;continue e}E=E.parentNode}}r=r.return}Jp(function(){var K=u,re=zu(i),me=[];e:{var Y=Am.get(e);if(Y!==void 0){var ne=Nl,De=e;switch(e){case"keypress":if(Cl(i)===0)break e;case"keydown":case"keyup":ne=Uy;break;case"focusin":De="focus",ne=Gu;break;case"focusout":De="blur",ne=Gu;break;case"beforeblur":case"afterblur":ne=Gu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Iy;break;case bm:case Mm:case Em:ne=My;break;case Tm:ne=Fy;break;case"scroll":case"scrollend":ne=_y;break;case"wheel":ne=Gy;break;case"copy":case"cut":case"paste":ne=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=im;break;case"submit":ne=zy;break;case"toggle":case"beforetoggle":ne=ky}var qe=(t&4)!==0,ut=!qe&&(e==="scroll"||e==="scrollend"),Z=qe?Y!==null?Y+"Capture":null:Y;qe=[];for(var k=K,ee;k!==null;){var pe=k;if(ee=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||ee===null||Z===null||(pe=go(k,Z),pe!=null&&qe.push(Zo(k,pe,ee))),ut)break;k=k.return}0<qe.length&&(Y=new ne(Y,De,null,i,re),me.push({event:Y,listeners:qe}))}}if((t&7)===0){e:{if(ne=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",ne&&i!==Ou&&(De=i.relatedTarget||i.fromElement)&&(Ze(De)||De[$e]))break e;(Y||ne)&&(De=re.window===re?re:(ne=re.ownerDocument)?ne.defaultView||ne.parentWindow:window,Y?(ne=i.relatedTarget||i.toElement,Y=K,ne=ne?Ze(ne):null,ne!==null&&(ut=f(ne),qe=ne.tag,ne!==ut||qe!==5&&qe!==27&&qe!==6)&&(ne=null)):(Y=null,ne=K),Y!==ne&&(qe=tm,pe="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(qe=im,pe="onPointerLeave",Z="onPointerEnter",k="pointer"),ut=Y==null?De:St(Y),ee=ne==null?De:St(ne),De=new qe(pe,k+"leave",Y,i,re),De.target=ut,De.relatedTarget=ee,pe=null,Ze(re)===K&&(qe=new qe(Z,k+"enter",ne,i,re),qe.target=ee,qe.relatedTarget=ut,pe=qe),ut=pe,qe=Y&&ne?H(Y,ne,ZS):null,Y!==null&&$0(me,De,Y,qe,!1),ne!==null&&ut!==null&&$0(me,ut,ne,qe,!0)))}e:{if(Y=K?St(K):window,ne=Y.nodeName&&Y.nodeName.toLowerCase(),ne==="select"||ne==="input"&&Y.type==="file")var Ve=fm;else if(cm(Y))if(hm)Ve=$y;else{Ve=Qy;var Mt=Ky}else ne=Y.nodeName,!ne||ne.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?K&&Lu(K.elementType)&&(Ve=fm):Ve=Jy;if(Ve&&(Ve=Ve(e,K))){um(me,Ve,i,re);break e}Mt&&Mt(e,Y,K)}switch(Mt=K?St(K):window,e){case"focusin":(cm(Mt)||Mt.contentEditable==="true")&&(rs=Mt,Wu=K,Eo=null);break;case"focusout":Eo=Wu=rs=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,ym(me,i,re);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":ym(me,i,re)}var Ke;if(ku)e:{switch(e){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else as?om(e,i)&&(tt="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(tt="onCompositionStart");tt&&(am&&i.locale!=="ko"&&(as||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&as&&(Ke=$p()):(wa=re,Bu="value"in wa?wa.value:wa.textContent,as=!0)),Mt=Uc(K,tt),0<Mt.length&&(tt=new nm(tt,e,null,i,re),me.push({event:tt,listeners:Mt}),Ke?tt.data=Ke:(Ke=lm(i),Ke!==null&&(tt.data=Ke)))),(Ke=Xy?qy(e,i):Yy(e,i))&&(tt=Uc(K,"onBeforeInput"),0<tt.length&&(Mt=new nm("onBeforeInput","beforeinput",null,i,re),me.push({event:Mt,listeners:tt}),Mt.data=Ke)),XS(me,e,K,i,re)}Q0(me,t)})}function Zo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Uc(e,t){for(var i=t+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=go(e,i),l!=null&&r.unshift(Zo(e,l,u)),l=go(e,t),l!=null&&r.push(Zo(e,l,u))),e.tag===3)return r;e=e.return}return[]}function ZS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $0(e,t,i,r,l){for(var u=t._reactName,g=[];i!==null&&i!==r;){var E=i,B=E.alternate,K=E.stateNode;if(E=E.tag,B!==null&&B===r)break;E!==5&&E!==26&&E!==27||K===null||(B=K,l?(K=go(i,u),K!=null&&g.unshift(Zo(i,K,B))):l||(K=go(i,u),K!=null&&g.push(Zo(i,K,B)))),i=i.return}g.length!==0&&e.push({event:t,listeners:g})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function ev(e){return(typeof e=="string"?e:""+e).replace(KS,`
`).replace(QS,"")}function tv(e,t){return t=ev(t),ev(e)===t}function zt(e,t,i,r,l,u){switch(i){case"children":if(typeof r=="string")t==="body"||t==="textarea"&&r===""||ts(e,r);else if(typeof r=="number"||typeof r=="bigint")t!=="body"&&ts(e,""+r);else return;break;case"className":Tl(e,"class",r);break;case"tabIndex":Tl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Tl(e,i,r);break;case"style":Kp(e,r,u);return;case"data":if(t!=="object"){Tl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=Al(r),e.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(t!=="input"&&zt(e,t,"name",l.name,l,null),zt(e,t,"formEncType",l.formEncType,l,null),zt(e,t,"formMethod",l.formMethod,l,null),zt(e,t,"formTarget",l.formTarget,l,null)):(zt(e,t,"encType",l.encType,l,null),zt(e,t,"method",l.method,l,null),zt(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=Al(r),e.setAttribute(i,r);break;case"onClick":r!=null&&(e.onclick=zi);return;case"onScroll":r!=null&&xt("scroll",e);return;case"onScrollEnd":r!=null&&xt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(e.innerHTML=i)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}i=Al(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":r===!0?e.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(i,r):e.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(i):e.setAttribute(i,r);break;case"popover":xt("beforetoggle",e),xt("toggle",e),El(e,"popover",r);break;case"xlinkActuate":Ji(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ji(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ji(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ji(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ji(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ji(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":El(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=gy.get(i)||i,El(e,i,r);else return}Rt=!0}function Uh(e,t,i,r,l,u){switch(i){case"style":Kp(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(e.innerHTML=i)}}break;case"children":if(typeof r=="string")ts(e,r);else if(typeof r=="number"||typeof r=="bigint")ts(e,""+r);else return;break;case"onScroll":r!=null&&xt("scroll",e);return;case"onScrollEnd":r!=null&&xt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Gt.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),u=i.slice(2,l?i.length-7:void 0),t=e[Oe]||null,t=t!=null?t[i]:null,typeof t=="function"&&e.removeEventListener(u,t,l),typeof r=="function")){typeof t!="function"&&t!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(u,r,l);break e}Rt=!0,i in e?e[i]=r:r===!0?e.setAttribute(i,""):El(e,i,r)}return}Rt=!0}function Dn(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var r=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var g=i[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:zt(e,t,u,g,i,null)}}l&&zt(e,t,"srcSet",i.srcSet,i,null),r&&zt(e,t,"src",i.src,i,null);return;case"input":xt("invalid",e);var E=u=g=l=null,B=null,K=null;for(r in i)if(i.hasOwnProperty(r)){var re=i[r];if(re!=null)switch(r){case"name":l=re;break;case"type":g=re;break;case"checked":B=re;break;case"defaultChecked":K=re;break;case"value":u=re;break;case"defaultValue":E=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,t));break;default:zt(e,t,r,re,i,null)}}qp(e,u,E,B,K,g,l,!1);return;case"select":xt("invalid",e),r=g=u=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":u=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:zt(e,t,l,E,i,null)}t=u,i=g,e.multiple=!!r,t!=null?es(e,!!r,t,!1):i!=null&&es(e,!!r,i,!0);return;case"textarea":xt("invalid",e),u=l=r=null;for(g in i)if(i.hasOwnProperty(g)&&(E=i[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":l=E;break;case"children":u=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:zt(e,t,g,E,i,null)}Wp(e,r,l,u);return;case"option":for(B in i)if(i.hasOwnProperty(B)&&(r=i[B],r!=null))switch(B){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:zt(e,t,B,r,i,null)}return;case"dialog":xt("beforetoggle",e),xt("toggle",e),xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(r=0;r<Wo.length;r++)xt(Wo[r],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in i)if(i.hasOwnProperty(K)&&(r=i[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:zt(e,t,K,r,i,null)}return;default:if(Lu(t)){for(re in i)i.hasOwnProperty(re)&&(r=i[re],r!==void 0&&Uh(e,t,re,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&zt(e,t,E,r,i,null))}var JS={};function $S(e,t,i,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,g=null,E=null,B=null,K=null,re=null;for(ne in i){var me=i[ne];if(i.hasOwnProperty(ne)&&me!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":B=me;default:r.hasOwnProperty(ne)||zt(e,t,ne,null,r,me)}}for(var Y in r){var ne=r[Y];if(me=i[Y],r.hasOwnProperty(Y)&&(ne!=null||me!=null))switch(Y){case"type":ne!==me&&(Rt=!0),u=ne;break;case"name":ne!==me&&(Rt=!0),l=ne;break;case"checked":ne!==me&&(Rt=!0),K=ne;break;case"defaultChecked":ne!==me&&(Rt=!0),re=ne;break;case"value":ne!==me&&(Rt=!0),g=ne;break;case"defaultValue":ne!==me&&(Rt=!0),E=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,t));break;default:ne!==me&&zt(e,t,Y,ne,r,me)}}Du(e,g,E,B,K,re,u,l);return;case"select":ne=g=E=Y=null;for(u in i)if(B=i[u],i.hasOwnProperty(u)&&B!=null)switch(u){case"value":break;case"multiple":ne=B;default:r.hasOwnProperty(u)||zt(e,t,u,null,r,B)}for(l in r)if(u=r[l],B=i[l],r.hasOwnProperty(l)&&(u!=null||B!=null))switch(l){case"value":u!==B&&(Rt=!0),Y=u;break;case"defaultValue":u!==B&&(Rt=!0),E=u;break;case"multiple":u!==B&&(Rt=!0),g=u;default:u!==B&&zt(e,t,l,u,r,B)}t=E,i=g,r=ne,Y!=null?es(e,!!i,Y,!1):!!r!=!!i&&(t!=null?es(e,!!i,t,!0):es(e,!!i,i?[]:"",!1));return;case"textarea":ne=Y=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:zt(e,t,E,null,r,l)}for(g in r)if(l=r[g],u=i[g],r.hasOwnProperty(g)&&(l!=null||u!=null))switch(g){case"value":l!==u&&(Rt=!0),Y=l;break;case"defaultValue":l!==u&&(Rt=!0),ne=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&zt(e,t,g,l,r,u)}Yp(e,Y,ne);return;case"option":for(var De in i)if(Y=i[De],i.hasOwnProperty(De)&&Y!=null&&!r.hasOwnProperty(De))switch(De){case"selected":e.selected=!1;break;default:zt(e,t,De,null,r,Y)}for(B in r)if(Y=r[B],ne=i[B],r.hasOwnProperty(B)&&Y!==ne&&(Y!=null||ne!=null))switch(B){case"selected":Y!==ne&&(Rt=!0),e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:zt(e,t,B,Y,r,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qe in i)Y=i[qe],i.hasOwnProperty(qe)&&Y!=null&&!r.hasOwnProperty(qe)&&zt(e,t,qe,null,r,Y);for(K in r)if(Y=r[K],ne=i[K],r.hasOwnProperty(K)&&Y!==ne&&(Y!=null||ne!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:zt(e,t,K,Y,r,ne)}return;default:if(Lu(t)){for(var ut in i)Y=i[ut],i.hasOwnProperty(ut)&&Y!==void 0&&!r.hasOwnProperty(ut)&&Uh(e,t,ut,void 0,r,Y);for(re in r)Y=r[re],ne=i[re],!r.hasOwnProperty(re)||Y===ne||Y===void 0&&ne===void 0||Uh(e,t,re,Y,r,ne);return}}for(var Z in i)Y=i[Z],i.hasOwnProperty(Z)&&Y!=null&&!r.hasOwnProperty(Z)&&zt(e,t,Z,null,r,Y);for(me in r)Y=r[me],ne=i[me],!r.hasOwnProperty(me)||Y===ne||Y==null&&ne==null||zt(e,t,me,Y,r,ne)}function nv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],u=l.transferSize,g=l.initiatorType,E=l.duration;if(u&&E&&nv(g)){for(g=0,E=l.responseEnd,r+=1;r<i.length;r++){var B=i[r],K=B.startTime;if(K>E)break;var re=B.transferSize,me=B.initiatorType;re&&nv(me)&&(B=B.responseEnd,g+=re*(B<E?1:(E-K)/(B-K)))}if(--r,t+=8*(u+g)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lh=null,Oh=null;function Ko(e){return e.nodeType===9?e:e.ownerDocument}function iv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function av(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rv(e,t,i,r){return i=Ko(i).createElement(e),i[Ae]=r,i[Oe]=t,Dn(i,e,t),Wt(i),i}function zh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ph=null;function tb(){var e=window.event;return e&&e.type==="popstate"?e===Ph?!1:(Ph=e,!0):(Ph=null,!1)}var Ih=typeof setTimeout=="function"?setTimeout:void 0,nb=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,ov=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ih,ib=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(e){return sv.resolve(null).then(e).catch(ab)}:Ih;function ab(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function lv(e,t){var i=t,r=0;do{var l=i.nextSibling;if(e.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){e.removeChild(l),Bs(t);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Xh(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Xh(i);for(var u=i.firstChild;u;){var g=u.nextSibling,E=u.nodeName;u[jt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=g}}else i==="body"&&Xh(e.ownerDocument.body);i=l}while(i);Bs(t)}function cv(e,t){var i=e;e=0;do{var r=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=r}while(i)}function uv(e,t,i){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,i!=null&&(e.style.viewTransitionClass=i),i=getComputedStyle(e),i.display==="inline"){if(t=e.getClientRects(),t.length===1)var r=1;else for(var l=r=0;l<t.length;l++){var u=t[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+i.paddingTop,e.marginBottom="-"+i.paddingBottom)}}function fv(e,t){e=e.style,t=t.style;var i=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(i=t.display,e.display=i==null||typeof i=="boolean"?"":i,i=t.margin,i!=null?e.margin=i:(i=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=i==null||typeof i=="boolean"?"":i,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function rb(e,t,i){return i=i.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=i.innerHeight&&e.left<=i.innerWidth}}function Bh(e){var t=e.getBoundingClientRect(),i=getComputedStyle(e);return rb(t,i,e)}function sb(e){return e.documentElement.clientHeight}function ob(e){this.addEventListener("load",e),this.addEventListener("error",e)}function lb(e,t,i,r,l,u,g,E,B){var K=t.nodeType===9?t:t.ownerDocument;try{var re=K.startViewTransition({update:function(){var Y=K.defaultView,ne=Y.navigation&&Y.navigation.transition,De=K.fonts.status;r();var qe=[];if(De==="loaded"&&(sb(K),K.fonts.status==="loading"&&qe.push(K.fonts.ready)),De=qe.length,e!==null)for(var ut=e.suspenseyImages,Z=0,k=0;k<ut.length;k++){var ee=ut[k];if(!ee.complete){var pe=ee.getBoundingClientRect();if(0<pe.bottom&&0<pe.right&&pe.top<Y.innerHeight&&pe.left<Y.innerWidth){if(Z+=Uv(ee),Z>zc){qe.length=De;break}ee=new Promise(ob.bind(ee)),qe.push(ee)}}}if(0<qe.length)return Y=Promise.race([Promise.all(qe),new Promise(function(Ve){return setTimeout(Ve,500)})]).then(l,l),(ne?Promise.allSettled([ne.finished,Y]):Y).then(u,u);if(l(),ne)return ne.finished.then(u,u);u()},types:i});K.__reactViewTransition=re;var me=[];return re.ready.then(function(){for(var Y=K.documentElement.getAnimations({subtree:!0}),ne=0;ne<Y.length;ne++){var De=Y[ne],qe=De.effect,ut=qe.pseudoElement;if(ut!=null&&ut.startsWith("::view-transition")){me.push(De),De=qe.getKeyframes();for(var Z=ut=void 0,k=!0,ee=0;ee<De.length;ee++){var pe=De[ee],Ve=pe.width;if(ut===void 0)ut=Ve;else if(ut!==Ve){k=!1;break}if(Ve=pe.height,Z===void 0)Z=Ve;else if(Z!==Ve){k=!1;break}delete pe.width,delete pe.height,pe.transform==="none"&&delete pe.transform}k&&ut!==void 0&&Z!==void 0&&(qe.setKeyframes(De),k=getComputedStyle(qe.target,qe.pseudoElement),k.width!==ut||k.height!==Z)&&(k=De[0],k.width=ut,k.height=Z,k=De[De.length-1],k.width=ut,k.height=Z,qe.setKeyframes(De))}}g()},function(Y){K.__reactViewTransition===re&&(K.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&B(Y)}finally{r(),l(),g()}}),re.finished.finally(function(){for(var Y=0;Y<me.length;Y++)me[Y].cancel();K.__reactViewTransition===re&&(K.__reactViewTransition=null),E()}),re}catch{return r(),l(),g(),null}}function Ur(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ur.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:z({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ur.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,i=e.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var u=i[l].effect;u!==null&&u.target===e&&u.pseudoElement===t&&r.push(i[l])}return r},Ur.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function hv(e){return{name:e,group:new Ur("group",e),imagePair:new Ur("image-pair",e),old:new Ur("old",e),new:new Ur("new",e)}}function oi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(e,t,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(pv(u,e,t,i)===-1){var g=this,E=t;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(B){g.removeEventListener(e,t,i),typeof t=="function"?t.call(this,B):t.handleEvent(B)}),r!==null&&(l=g.removeEventListener.bind(g,e,t,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Us(i),u.push({type:e,listener:t,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,cb,e,E,r)}this._eventListeners=u}};function cb(e,t,i,r){return S(e).addEventListener(t,i,r),!1}oi.prototype.removeEventListener=function(e,t,i){var r=this._eventListeners;if(r!==null&&(t=pv(r,e,t,i),t!==-1)){var l=r[t];i=l.attachedListener;var u=l.cleanup;l=Us(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,ub,e,i,l),r.splice(t,1),u!==null&&u()}};function ub(e,t,i,r){return S(e).removeEventListener(t,i,r),!1}function Us(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function dv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function pv(e,t,i,r){if(e.length===0)return-1;r=dv(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===t&&u.listener===i&&dv(u.optionsOrUseCapture)===r)return l}return-1}oi.prototype.dispatchEvent=function(e){var t=y(this._fragmentFiber);if(t===null)return!0;t=S(t);var i=this._eventListeners;if(i!==null&&0<i.length||!e.bubbles){var r=t.nodeType===9?t.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var u=i[l];r.addEventListener(u.type,u.attachedListener,Us(u.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),i)for(l=0;l<i.length;l++)u=i[l],r.removeEventListener(u.type,u.attachedListener,Us(u.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},oi.prototype.focus=function(e){m(this._fragmentFiber.child,!0,mv,e,void 0,void 0)};function mv(e,t){return e.tag===6?!1:(e=S(e),bb(e,t))}oi.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Fh,t,void 0,void 0);for(var i=t.length-1;0<=i&&!mv(t[i],e);i--);};function Fh(e,t){return t.push(e),!1}oi.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=S(e),e=Ko(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,fb,e,void 0,void 0))};function fb(e,t){return e.tag===6?!1:(e=S(e),e===t||e.contains(t)?(t.blur(),!0):!1)}oi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,hb,e,void 0,void 0)};function hb(e,t){return e.tag===6||(e=S(e),t.observe(e)),!1}oi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,db,e,void 0,void 0);for(var i=t=0;i<wi.length;i++){var r=wi[i];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):wi[t++]=r}wi.length=t}};function db(e,t){return e.tag===6||(e=S(e),t.unobserve(e)),!1}var wi=[],Hh=!1;function pb(e,t,i){wi.push({fragmentInstance:e,observer:t,instance:i}),Hh||(Hh=!0,Mb(function(){Hh=!1;var r=wi;wi=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}oi.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,mb,e,void 0,void 0),e};function mb(e,t){if(e.tag===6){e=e.stateNode;var i=e.ownerDocument.createRange();i.selectNodeContents(e),t.push.apply(t,i.getClientRects())}else e=S(e),t.push.apply(t,e.getClientRects());return!1}oi.prototype.getRootNode=function(e){var t=y(this._fragmentFiber);return t===null?this:S(t).getRootNode(e)},oi.prototype.compareDocumentPosition=function(e){var t=y(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,Fh,i,void 0,void 0);var r=S(t);if(i.length===0){if(i=r,b(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(i=t)}t=this._fragmentFiber;var l=r=i.compareDocumentPosition(e);return i===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=T(t)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=S(i).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=S(i[0]),l=S(i[i.length-1]);var u=b(this._fragmentFiber)?t.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=t.compareDocumentPosition(e),E=l.compareDocumentPosition(e),B=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||u&&l===e||B||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||gb(t,this._fragmentFiber,i[0],i[i.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function gb(e,t,i,r,l){var u=Ze(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===t||u.alternate===t)){i=!0;break e}u=u.return}i=!1}return i}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=t,t=y(t);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==t&&u.alternate!==t)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!u)&&!(t=u===i)&&(t=H(i,u,V),t===null?t=!1:(m(t,!0,P,u,i),u=x,x=null,t=u!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!u)&&!(t=u===r)&&(t=H(r,u,V),t===null?t=!1:(m(t,!0,U,u,r),u=x,L=x=null,t=u!==null)),t):!1}function gv(e,t){var i=e.ownerDocument.createRange();i.selectNodeContents(e),e=i.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var t=[];m(this._fragmentFiber.child,!1,Fh,t,void 0,void 0);var i=e!==!1;if(t.length===0){var r=T(this._fragmentFiber);if(r=i?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=S(r),gv(e,i);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=i?t.length-1:0;r!==(i?-1:t.length);){var l=t[r];l.tag===6?(l=S(l),gv(l,i)):S(l).scrollIntoView(e),r+=i?-1:1}};function vb(e,t){return e=S(e),vv(e,t),!1}function vv(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function _v(e,t){var i=t._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];e.addEventListener(l.type,l.attachedListener,Us(l.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){for(var g=0,E=0;E<wi.length;E++){var B=wi[E];(B.fragmentInstance!==t||B.observer!==u||B.instance!==e)&&(wi[g++]=B)}wi.length=g,u.observe(e)}),vv(e,t))}function _b(e,t){var i=t._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];e.removeEventListener(l.type,l.attachedListener,Us(l.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?pb(t,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Gh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Gh(i),vt(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function xb(e,t,i,r){for(;e.nodeType===1;){var l=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[jt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function yb(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=vi(e.nextSibling),e===null))return null;return e}function xv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vi(e.nextSibling),e===null))return null;return e}function Vh(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Sb(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var r=function(){t(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function vi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var jh=null;function yv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return vi(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Sv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function bb(e,t){function i(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",i,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",i,!0)}return r}function Mb(e){ov(function(){ov(function(t){return e(t)})})}function bv(e,t,i){switch(t=Ko(i),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Mv(e,t,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&zt(e,t,r,null,JS,l)}i.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===zi&&(e.onclick=null),vt(e)}function Xh(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vt(e)}var _i=new Map,Ev=new Set;function Qo(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var fa=Ge.d;Ge.d={f:Eb,r:Tb,D:Ab,C:wb,L:Cb,m:Rb,X:Db,S:Nb,M:Ub};function Eb(){var e=fa.f(),t=Ac();return e||t}function Tb(e){var t=Kt(e);t!==null&&t.tag===5&&t.type==="form"?Ag(t):fa.r(e)}var Ls=typeof document>"u"?null:document;function Tv(e,t,i){var r=Ls;if(r&&typeof t=="string"&&t){var l=ui(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),Ev.has(l)||(Ev.add(l),e={rel:e,crossOrigin:i,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),Dn(t,"link",e),Wt(t),r.head.appendChild(t)))}}function Ab(e){fa.D(e),Tv("dns-prefetch",e,null)}function wb(e,t){fa.C(e,t),Tv("preconnect",e,t)}function Cb(e,t,i){fa.L(e,t,i);var r=Ls;if(r&&e&&t){var l='link[rel="preload"][as="'+ui(t)+'"]';t==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+ui(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+ui(i.imageSizes)+'"]')):l+='[href="'+ui(e)+'"]';var u=l;switch(t){case"style":u=Os(e);break;case"script":u=zs(e)}if(!(_i.has(u)||(e=z({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),_i.set(u,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(Jo(u))||t==="script"&&r.querySelector($o(u))))){var g=r.createElement("link");Dn(g,"link",e),t==="style"&&(g[Ht]=!0,g.onload=g.onerror=function(){On(g)}),Wt(g),r.head.appendChild(g)}}}function Rb(e,t){fa.m(e,t);var i=Ls;if(i&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ui(r)+'"][href="'+ui(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=zs(e)}if(!_i.has(u)&&(e=z({rel:"modulepreload",href:e},t),_i.set(u,e),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector($o(u)))return}r=i.createElement("link"),Dn(r,"link",e),Wt(r),i.head.appendChild(r)}}}function Nb(e,t,i){fa.S(e,t,i);var r=Ls;if(r&&e){var l=xn(r).hoistableStyles,u=Os(e);t=t||"default";var g=l.get(u);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(Jo(u)))E.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},i),(i=_i.get(u))&&qh(e,i);var B=g=r.createElement("link");Wt(B),Dn(B,"link",e),B._p=new Promise(function(K,re){B.onload=K,B.onerror=re}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Lc(g,t,r)}g={type:"stylesheet",instance:g,count:1,state:E},l.set(u,g)}}}function Db(e,t){fa.X(e,t);var i=Ls;if(i&&e){var r=xn(i).hoistableScripts,l=zs(e),u=r.get(l);u||(u=i.querySelector($o(l)),u||(e=z({src:e,async:!0},t),(t=_i.get(l))&&Yh(e,t),u=i.createElement("script"),Wt(u),Dn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Ub(e,t){fa.M(e,t);var i=Ls;if(i&&e){var r=xn(i).hoistableScripts,l=zs(e),u=r.get(l);u||(u=i.querySelector($o(l)),u||(e=z({src:e,async:!0,type:"module"},t),(t=_i.get(l))&&Yh(e,t),u=i.createElement("script"),Wt(u),Dn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Av(e,t,i,r){var l=(l=O.current)?Qo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Os(i.href),t=xn(l).hoistableStyles,r=t.get(i),r||(r={type:"style",instance:null,count:0,state:null},t.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Os(i.href);var u=xn(l).hoistableStyles,g=u.get(e);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,g),(u=l.querySelector(Jo(e)))?u._p||(g.instance=u,g.state.loading=5):(u=_i.get(e),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},_i.set(e,u)),Lb(l,e,u,g.state))),t&&r===null)throw Error(s(528,""));return g}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(i=zs(i),t=xn(l).hoistableScripts,r=t.get(i),r||(r={type:"script",instance:null,count:0,state:null},t.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Os(e){return'href="'+ui(e)+'"'}function Jo(e){return'link[rel="stylesheet"]['+e+"]"}function wv(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function Lb(e,t,i,r){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ht]!==!0){r.loading=1;return}}else t=e.createElement("link"),t[Ht]=!0,t.onload=t.onerror=On.bind(null,t),Dn(t,"link",i),Wt(t),e.head.appendChild(t);r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2})}function zs(e){return'[src="'+ui(e)+'"]'}function $o(e){return"script[async]"+e}function Cv(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+ui(i.href)+'"]');if(r)return t.instance=r,Wt(r),r;var l=z({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Wt(r),Dn(r,"style",l),Lc(r,i.precedence,e),t.instance=r;case"stylesheet":l=Os(i.href);var u=e.querySelector(Jo(l));if(u)return t.state.loading|=4,t.instance=u,Wt(u),u;r=wv(i),(l=_i.get(l))&&qh(r,l),u=(e.ownerDocument||e).createElement("link"),Wt(u);var g=u;return g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),Dn(u,"link",r),t.state.loading|=4,Lc(u,i.precedence,e),t.instance=u;case"script":return u=zs(i.src),(l=e.querySelector($o(u)))?(t.instance=l,Wt(l),l):(r=i,(l=_i.get(u))&&(r=z({},i),Yh(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Wt(l),Dn(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Lc(r,i.precedence,e));return t.instance}function Lc(e,t,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===t)u=E;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function qh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Oc=null;function Rv(e,t,i){if(Oc===null){var r=new Map,l=Oc=new Map;l.set(i,r)}else l=Oc,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(e))return r;for(r.set(e,null),i=i.getElementsByTagName(e),l=0;l<i.length;l++){var u=i[l];if(!(u[jt]||u[Ae]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(t)||"";g=e+g;var E=r.get(g);E?E.push(u):r.set(g,[u])}}return r}function Wh(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function Ob(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Nv(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Lv(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Uv(t),e.suspenseyImages.push(t)),e=Ib.bind(e),t.decode().then(e,e))}function zb(e,t,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Os(r.href),u=t.querySelector(Jo(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=el.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=u,Wt(u);return}u=t.ownerDocument||t,r=wv(r),(l=_i.get(l))&&qh(r,l),u=u.createElement("link"),Wt(u);var g=u;g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),Dn(u,"link",r),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=el.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var zc=0;function Pb(e,t){return e.stylesheets&&e.count===0&&Ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var r=setTimeout(function(){if(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&zc===0&&(zc=62500*eb());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>zc?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Ov(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ic(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function el(){this.count--,Ov(this)}function Ib(){this.imgCount--,Ov(this)}var Pc=null;function Ic(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pc=new Map,t.forEach(Bb,e),Pc=null,el.call(e))}function Bb(e,t){if(!(t.state.loading&4)){var i=Pc.get(e);if(i)var r=i.get(null);else{i=new Map,Pc.set(e,i);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var g=l[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),r=g)}r&&i.set(null,r)}l=t.instance,g=l.getAttribute("data-precedence"),u=i.get(g)||r,u===r&&i.set(null,l),i.set(g,l),this.count++,r=el.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ps={$$typeof:W,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function Fb(e,t,i,r,l,u,g,E,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.hiddenUpdates=mo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function zv(e,t,i,r,l,u,g,E,B,K,re,me){return e=new Fb(e,t,i,g,B,K,re,me,E),t=1,u===!0&&(t|=24),u=Xn(3,null,null,t),e.current=u,u.stateNode=e,t=cf(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:t},df(u),e}function Pv(e){return e?(e=ls,e):ls}function Iv(e,t,i,r,l,u){l=Pv(l),r.context===null?r.context=l:r.pendingContext=l,r=za(t),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=Pa(e,r,t),i!==null&&(Zn(i,e,t),Do(i,e,t))}function Bv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Zh(e,t){Bv(e,t),(e=e.alternate)&&Bv(e,t)}function Fv(e){if(e.tag===13||e.tag===31){var t=mr(e,67108864);t!==null&&Zn(t,e,67108864),Zh(e,67108864)}}function Hv(e){if(e.tag===13||e.tag===31){var t=si();t=oe(t);var i=mr(e,t);i!==null&&Zn(i,e,t),Zh(e,t)}}var Is=!0;function Hb(e,t,i,r){var l=Re.T;Re.T=null;var u=Ge.p;try{Ge.p=2,Kh(e,t,i,r)}finally{Ge.p=u,Re.T=l}}function Gb(e,t,i,r){var l=Re.T;Re.T=null;var u=Ge.p;try{Ge.p=8,Kh(e,t,i,r)}finally{Ge.p=u,Re.T=l}}function Kh(e,t,i,r){if(Is){var l=Qh(r);if(l===null)Dh(e,t,r,Bc,i),Vv(e,r);else if(kb(l,e,t,i,r))r.stopPropagation();else if(Vv(e,r),t&4&&-1<Vb.indexOf(e)){for(;l!==null;){var u=Kt(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=Oi(u.pendingLanes);if(g!==0){var E=u;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var B=1<<31-Ln(g);E.entanglements[1]|=B,g&=~B}Xi(u),(Dt&6)===0&&(Mc=X()+500,Yo(0))}}break;case 31:case 13:E=mr(u,2),E!==null&&Zn(E,u,2),Ac(),Zh(u,2)}if(u=Qh(r),u===null&&Dh(e,t,r,Bc,i),u===l)break;l=u}l!==null&&r.stopPropagation()}else Dh(e,t,r,null,i)}}function Qh(e){return e=zu(e),Jh(e)}var Bc=null;function Jh(e){if(Bc=null,e=Ze(e),e!==null){var t=f(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=h(t),e!==null)return e;e=null}else if(i===31){if(e=d(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bc=e,null}function Gv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ie()){case he:return 2;case ye:return 8;case Be:case He:return 32;case ot:return 268435456;default:return 32}default:return 32}}var $h=!1,Wa=null,Za=null,Ka=null,tl=new Map,nl=new Map,Qa=[],Vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vv(e,t){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":tl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(t.pointerId)}}function il(e,t,i,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Kt(t),t!==null&&Fv(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function kb(e,t,i,r,l){switch(t){case"focusin":return Wa=il(Wa,e,t,i,r,l),!0;case"dragenter":return Za=il(Za,e,t,i,r,l),!0;case"mouseover":return Ka=il(Ka,e,t,i,r,l),!0;case"pointerover":var u=l.pointerId;return tl.set(u,il(tl.get(u)||null,e,t,i,r,l)),!0;case"gotpointercapture":return u=l.pointerId,nl.set(u,il(nl.get(u)||null,e,t,i,r,l)),!0}return!1}function kv(e){var t=Ze(e.target);if(t!==null){var i=f(t);if(i!==null){if(t=i.tag,t===13){if(t=h(i),t!==null){e.blockedOn=t,be(e.priority,function(){Hv(i)});return}}else if(t===31){if(t=d(i),t!==null){e.blockedOn=t,be(e.priority,function(){Hv(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Qh(e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);Ou=r,i.target.dispatchEvent(r),Ou=null}else return t=Kt(i),t!==null&&Fv(t),e.blockedOn=i,!1;t.shift()}return!0}function jv(e,t,i){Fc(e)&&i.delete(t)}function jb(){$h=!1,Wa!==null&&Fc(Wa)&&(Wa=null),Za!==null&&Fc(Za)&&(Za=null),Ka!==null&&Fc(Ka)&&(Ka=null),tl.forEach(jv),nl.forEach(jv)}function Hc(e,t){e.blockedOn===t&&(e.blockedOn=null,$h||($h=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,jb)))}var Gc=null;function Xv(e){Gc!==e&&(Gc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var t=0;t<e.length;t+=3){var i=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(Jh(r||i)===null)continue;break}var u=Kt(i);u!==null&&(e.splice(t,3),t-=3,Of(u,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Bs(e){function t(B){return Hc(B,e)}Wa!==null&&Hc(Wa,e),Za!==null&&Hc(Za,e),Ka!==null&&Hc(Ka,e),tl.forEach(t),nl.forEach(t);for(var i=0;i<Qa.length;i++){var r=Qa[i];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Qa.length&&(i=Qa[0],i.blockedOn===null);)kv(i),i.blockedOn===null&&Qa.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],u=i[r+1],g=l[Oe]||null;if(typeof u=="function")g||Xv(i);else if(g){var E=null;if(u&&u.hasAttribute("formAction")){if(l=u,g=u[Oe]||null)E=g.formAction;else if(Jh(l)!==null)continue}else E=g.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),Xv(i)}}}function qv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ed(e){this._internalRoot=e}Vc.prototype.render=ed.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var i=t.current,r=si();Iv(i,r,e,t,null,null)},Vc.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Iv(e.current,2,null,e,null,null),Ac(),t[$e]=null}};function Vc(e){this._internalRoot=e}Vc.prototype.unstable_scheduleHydration=function(e){if(e){var t=$();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Qa.length&&t!==0&&t<Qa[i].priority;i++);Qa.splice(i,0,e),i===0&&kv(e)}};var Yv=n.version;if(Yv!=="19.3.0")throw Error(s(527,Yv,"19.3.0"));Ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Xb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Re,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{Et=kc.inject(Xb),Yt=kc}catch{}}return rl.createRoot=function(e,t){if(!c(e))throw Error(s(299));var i=!1,r="",l=Pg,u=Ig,g=Bg;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=zv(e,1,!1,null,null,i,r,null,l,u,g,qv),e[$e]=t.current,Nh(e),new ed(t)},rl.hydrateRoot=function(e,t,i){if(!c(e))throw Error(s(299));var r=!1,l="",u=Pg,g=Ig,E=Bg,B=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(B=i.formState)),t=zv(e,1,!0,t,i??null,r,l,B,u,g,E,qv),t.context=Pv(null),i=t.current,r=si(),r=oe(r),l=za(r),l.callback=null,Pa(i,l,r),i=r,t.current.lanes=i,hr(t,i),Xi(t),e[$e]=t.current,Nh(e),new Vc(t)},rl.version="19.3.0",rl}var i_;function nM(){if(i_)return id.exports;i_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),id.exports=tM(),id.exports}var iM=nM();const aM=sx(iM);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="174",rM=0,a_=1,sM=2,ox=1,oM=2,va=3,lr=0,Jn=1,_a=2,sr=0,Zr=1,jr=2,r_=3,s_=4,lM=5,Xr=100,cM=101,uM=102,fM=103,hM=104,dM=200,pM=201,mM=202,gM=203,Fd=204,Hd=205,vM=206,_M=207,xM=208,yM=209,SM=210,bM=211,MM=212,EM=213,TM=214,Gd=0,Vd=1,kd=2,io=3,jd=4,Xd=5,qd=6,Yd=7,lx=0,AM=1,wM=2,or=0,CM=1,RM=2,NM=3,DM=4,UM=5,LM=6,OM=7,cx=300,ao=301,ro=302,Wd=303,Zd=304,Eu=306,Kd=1e3,Yr=1001,Qd=1002,Li=1003,zM=1004,jc=1005,Yi=1006,od=1007,Wr=1008,Ma=1009,ux=1010,fx=1011,dl=1012,Dp=1013,Qr=1014,xa=1015,ml=1016,Up=1017,Lp=1018,so=1020,hx=35902,dx=1021,px=1022,Ui=1023,mx=1024,gx=1025,to=1026,oo=1027,vx=1028,Op=1029,_x=1030,zp=1031,Pp=1033,mu=33776,gu=33777,vu=33778,_u=33779,Jd=35840,$d=35841,ep=35842,tp=35843,np=36196,ip=37492,ap=37496,rp=37808,sp=37809,op=37810,lp=37811,cp=37812,up=37813,fp=37814,hp=37815,dp=37816,pp=37817,mp=37818,gp=37819,vp=37820,_p=37821,xu=36492,xp=36494,yp=36495,xx=36283,Sp=36284,bp=36285,Mp=36286,PM=3200,IM=3201,BM=0,FM=1,rr="",yi="srgb",lo="srgb-linear",Su="linear",Ft="srgb",Fs=7680,o_=519,HM=512,GM=513,VM=514,yx=515,kM=516,jM=517,XM=518,qM=519,l_=35044,c_="300 es",ya=2e3,bu=2001;class uo{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const c=s[n];if(c!==void 0){const f=c.indexOf(a);f!==-1&&c.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const c=s.slice(0);for(let f=0,h=c.length;f<h;f++)c[f].call(this,n);n.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,Ep=180/Math.PI;function gl(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[n&255]+Pn[n>>8&255]+"-"+Pn[n>>16&15|64]+Pn[n>>24&255]+"-"+Pn[a&63|128]+Pn[a>>8&255]+"-"+Pn[a>>16&255]+Pn[a>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function At(o,n,a){return Math.max(n,Math.min(a,o))}function YM(o,n){return(o%n+n)%n}function cd(o,n,a){return(1-a)*o+a*n}function sl(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class kt{constructor(n=0,a=0){kt.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,c=n.elements;return this.x=c[0]*a+c[3]*s+c[6],this.y=c[1]*a+c[4]*s+c[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=At(this.x,n.x,a.x),this.y=At(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=At(this.x,n,a),this.y=At(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(At(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),c=Math.sin(a),f=this.x-n.x,h=this.y-n.y;return this.x=f*s-h*c+n.x,this.y=f*c+h*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(n,a,s,c,f,h,d,p,v){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,h,d,p,v)}set(n,a,s,c,f,h,d,p,v){const _=this.elements;return _[0]=n,_[1]=c,_[2]=d,_[3]=a,_[4]=f,_[5]=p,_[6]=s,_[7]=h,_[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,h=s[0],d=s[3],p=s[6],v=s[1],_=s[4],m=s[7],y=s[2],b=s[5],T=s[8],D=c[0],S=c[3],x=c[6],L=c[1],P=c[4],U=c[7],V=c[2],H=c[5],z=c[8];return f[0]=h*D+d*L+p*V,f[3]=h*S+d*P+p*H,f[6]=h*x+d*U+p*z,f[1]=v*D+_*L+m*V,f[4]=v*S+_*P+m*H,f[7]=v*x+_*U+m*z,f[2]=y*D+b*L+T*V,f[5]=y*S+b*P+T*H,f[8]=y*x+b*U+T*z,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],h=n[4],d=n[5],p=n[6],v=n[7],_=n[8];return a*h*_-a*d*v-s*f*_+s*d*p+c*f*v-c*h*p}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],h=n[4],d=n[5],p=n[6],v=n[7],_=n[8],m=_*h-d*v,y=d*p-_*f,b=v*f-h*p,T=a*m+s*y+c*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return n[0]=m*D,n[1]=(c*v-_*s)*D,n[2]=(d*s-c*h)*D,n[3]=y*D,n[4]=(_*a-c*p)*D,n[5]=(c*f-d*a)*D,n[6]=b*D,n[7]=(s*p-v*a)*D,n[8]=(h*a-s*f)*D,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,c,f,h,d){const p=Math.cos(f),v=Math.sin(f);return this.set(s*p,s*v,-s*(p*h+v*d)+h+n,-c*v,c*p,-c*(-v*h+p*d)+d+a,0,0,1),this}scale(n,a){return this.premultiply(ud.makeScale(n,a)),this}rotate(n){return this.premultiply(ud.makeRotation(-n)),this}translate(n,a){return this.premultiply(ud.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<9;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new ft;function Sx(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function Mu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function WM(){const o=Mu("canvas");return o.style.display="block",o}const u_={};function Hr(o){o in u_||(u_[o]=!0,console.warn(o))}function ZM(o,n,a){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function KM(o){const n=o.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function QM(o){const n=o.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const f_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const o={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(c,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Ft&&(c.r=ba(c.r),c.g=ba(c.g),c.b=ba(c.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ft&&(c.r=no(c.r),c.g=no(c.g),c.b=no(c.b))),c},fromWorkingColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},toWorkingColorSpace:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===rr?Su:this.spaces[c].transfer},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,h){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[lo]:{primaries:n,whitePoint:s,transfer:Su,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:n,whitePoint:s,transfer:Ft,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const Nt=JM();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function no(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Hs;class $M{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let a;if(n instanceof HTMLCanvasElement)a=n;else{Hs===void 0&&(Hs=Mu("canvas")),Hs.width=n.width,Hs.height=n.height;const s=Hs.getContext("2d");n instanceof ImageData?s.putImageData(n,0,0):s.drawImage(n,0,0,n.width,n.height),a=Hs}return a.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=Mu("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const c=s.getImageData(0,0,n.width,n.height),f=c.data;for(let h=0;h<f.length;h++)f[h]=ba(f[h]/255)*255;return s.putImageData(c,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(ba(a[s]/255)*255):a[s]=ba(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let eE=0;class Ip{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=gl(),this.data=n,this.dataReady=!0,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let h=0,d=c.length;h<d;h++)c[h].isDataTexture?f.push(fd(c[h].image)):f.push(fd(c[h]))}else f=fd(c);s.url=f}return a||(n.images[this.uuid]=s),s}}function fd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$M.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tE=0;class jn extends uo{constructor(n=jn.DEFAULT_IMAGE,a=jn.DEFAULT_MAPPING,s=Yr,c=Yr,f=Yi,h=Wr,d=Ui,p=Ma,v=jn.DEFAULT_ANISOTROPY,_=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=gl(),this.name="",this.source=new Ip(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=h,this.anisotropy=v,this.format=d,this.internalFormat=null,this.type=p,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==cx)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Kd:n.x=n.x-Math.floor(n.x);break;case Yr:n.x=n.x<0?0:1;break;case Qd:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Kd:n.y=n.y-Math.floor(n.y);break;case Yr:n.y=n.y<0?0:1;break;case Qd:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=cx;jn.DEFAULT_ANISOTROPY=1;class an{constructor(n=0,a=0,s=0,c=1){an.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=c}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,c){return this.x=n,this.y=a,this.z=s,this.w=c,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=this.w,h=n.elements;return this.x=h[0]*a+h[4]*s+h[8]*c+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*c+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*c+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*c+h[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,c,f;const p=n.elements,v=p[0],_=p[4],m=p[8],y=p[1],b=p[5],T=p[9],D=p[2],S=p[6],x=p[10];if(Math.abs(_-y)<.01&&Math.abs(m-D)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(m+D)<.1&&Math.abs(T+S)<.1&&Math.abs(v+b+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const P=(v+1)/2,U=(b+1)/2,V=(x+1)/2,H=(_+y)/4,z=(m+D)/4,I=(T+S)/4;return P>U&&P>V?P<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(P),c=H/s,f=z/s):U>V?U<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(U),s=H/c,f=I/c):V<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(V),s=z/f,c=I/f),this.set(s,c,f,a),this}let L=Math.sqrt((S-T)*(S-T)+(m-D)*(m-D)+(y-_)*(y-_));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(m-D)/L,this.z=(y-_)/L,this.w=Math.acos((v+b+x-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=At(this.x,n.x,a.x),this.y=At(this.y,n.y,a.y),this.z=At(this.z,n.z,a.z),this.w=At(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=At(this.x,n,a),this.y=At(this.y,n,a),this.z=At(this.z,n,a),this.w=At(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nE extends uo{constructor(n=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=1,this.scissor=new an(0,0,n,a),this.scissorTest=!1,this.viewport=new an(0,0,n,a);const c={width:n,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new jn(c,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=n,this.textures[c].image.height=a,this.textures[c].image.depth=s;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const c=Object.assign({},n.textures[a].image);this.textures[a].source=new Ip(c)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends nE{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class bx extends jn{constructor(n=null,a=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Li,this.minFilter=Li,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class iE extends jn{constructor(n=null,a=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Li,this.minFilter=Li,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(n=0,a=0,s=0,c=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=c}static slerpFlat(n,a,s,c,f,h,d){let p=s[c+0],v=s[c+1],_=s[c+2],m=s[c+3];const y=f[h+0],b=f[h+1],T=f[h+2],D=f[h+3];if(d===0){n[a+0]=p,n[a+1]=v,n[a+2]=_,n[a+3]=m;return}if(d===1){n[a+0]=y,n[a+1]=b,n[a+2]=T,n[a+3]=D;return}if(m!==D||p!==y||v!==b||_!==T){let S=1-d;const x=p*y+v*b+_*T+m*D,L=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const V=Math.sqrt(P),H=Math.atan2(V,x*L);S=Math.sin(S*H)/V,d=Math.sin(d*H)/V}const U=d*L;if(p=p*S+y*U,v=v*S+b*U,_=_*S+T*U,m=m*S+D*U,S===1-d){const V=1/Math.sqrt(p*p+v*v+_*_+m*m);p*=V,v*=V,_*=V,m*=V}}n[a]=p,n[a+1]=v,n[a+2]=_,n[a+3]=m}static multiplyQuaternionsFlat(n,a,s,c,f,h){const d=s[c],p=s[c+1],v=s[c+2],_=s[c+3],m=f[h],y=f[h+1],b=f[h+2],T=f[h+3];return n[a]=d*T+_*m+p*b-v*y,n[a+1]=p*T+_*y+v*m-d*b,n[a+2]=v*T+_*b+d*y-p*m,n[a+3]=_*T-d*m-p*y-v*b,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,c){return this._x=n,this._y=a,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,c=n._y,f=n._z,h=n._order,d=Math.cos,p=Math.sin,v=d(s/2),_=d(c/2),m=d(f/2),y=p(s/2),b=p(c/2),T=p(f/2);switch(h){case"XYZ":this._x=y*_*m+v*b*T,this._y=v*b*m-y*_*T,this._z=v*_*T+y*b*m,this._w=v*_*m-y*b*T;break;case"YXZ":this._x=y*_*m+v*b*T,this._y=v*b*m-y*_*T,this._z=v*_*T-y*b*m,this._w=v*_*m+y*b*T;break;case"ZXY":this._x=y*_*m-v*b*T,this._y=v*b*m+y*_*T,this._z=v*_*T+y*b*m,this._w=v*_*m-y*b*T;break;case"ZYX":this._x=y*_*m-v*b*T,this._y=v*b*m+y*_*T,this._z=v*_*T-y*b*m,this._w=v*_*m+y*b*T;break;case"YZX":this._x=y*_*m+v*b*T,this._y=v*b*m+y*_*T,this._z=v*_*T-y*b*m,this._w=v*_*m-y*b*T;break;case"XZY":this._x=y*_*m-v*b*T,this._y=v*b*m-y*_*T,this._z=v*_*T+y*b*m,this._w=v*_*m+y*b*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,c=Math.sin(s);return this._x=n.x*c,this._y=n.y*c,this._z=n.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],c=a[4],f=a[8],h=a[1],d=a[5],p=a[9],v=a[2],_=a[6],m=a[10],y=s+d+m;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(_-p)*b,this._y=(f-v)*b,this._z=(h-c)*b}else if(s>d&&s>m){const b=2*Math.sqrt(1+s-d-m);this._w=(_-p)/b,this._x=.25*b,this._y=(c+h)/b,this._z=(f+v)/b}else if(d>m){const b=2*Math.sqrt(1+d-s-m);this._w=(f-v)/b,this._x=(c+h)/b,this._y=.25*b,this._z=(p+_)/b}else{const b=2*Math.sqrt(1+m-s-d);this._w=(h-c)/b,this._x=(f+v)/b,this._y=(p+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(At(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const c=Math.min(1,a/s);return this.slerp(n,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,c=n._y,f=n._z,h=n._w,d=a._x,p=a._y,v=a._z,_=a._w;return this._x=s*_+h*d+c*v-f*p,this._y=c*_+h*p+f*d-s*v,this._z=f*_+h*v+s*p-c*d,this._w=h*_-s*d-c*p-f*v,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,c=this._y,f=this._z,h=this._w;let d=h*n._w+s*n._x+c*n._y+f*n._z;if(d<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,d=-d):this.copy(n),d>=1)return this._w=h,this._x=s,this._y=c,this._z=f,this;const p=1-d*d;if(p<=Number.EPSILON){const b=1-a;return this._w=b*h+a*this._w,this._x=b*s+a*this._x,this._y=b*c+a*this._y,this._z=b*f+a*this._z,this.normalize(),this}const v=Math.sqrt(p),_=Math.atan2(v,d),m=Math.sin((1-a)*_)/v,y=Math.sin(a*_)/v;return this._w=h*m+this._w*y,this._x=s*m+this._x*y,this._y=c*m+this._y*y,this._z=f*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(n),c*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(n=0,a=0,s=0){ce.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(d_.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(d_.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*c,this.y=f[1]*a+f[4]*s+f[7]*c,this.z=f[2]*a+f[5]*s+f[8]*c,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=n.elements,h=1/(f[3]*a+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*c+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*c+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*c+f[14])*h,this}applyQuaternion(n){const a=this.x,s=this.y,c=this.z,f=n.x,h=n.y,d=n.z,p=n.w,v=2*(h*c-d*s),_=2*(d*a-f*c),m=2*(f*s-h*a);return this.x=a+p*v+h*m-d*_,this.y=s+p*_+d*v-f*m,this.z=c+p*m+f*_-h*v,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*c,this.y=f[1]*a+f[5]*s+f[9]*c,this.z=f[2]*a+f[6]*s+f[10]*c,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=At(this.x,n.x,a.x),this.y=At(this.y,n.y,a.y),this.z=At(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=At(this.x,n,a),this.y=At(this.y,n,a),this.z=At(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,c=n.y,f=n.z,h=a.x,d=a.y,p=a.z;return this.x=c*p-f*d,this.y=f*h-s*p,this.z=s*d-c*h,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return hd.copy(this).projectOnVector(n),this.sub(hd)}reflect(n){return this.sub(hd.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(At(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,c=this.z-n.z;return a*a+s*s+c*c}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const c=Math.sin(a)*n;return this.x=c*Math.sin(s),this.y=Math.cos(a)*n,this.z=c*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),c=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=c,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new ce,d_=new vl;class _l{constructor(n=new ce(1/0,1/0,1/0),a=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(Ci.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(Ci.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=Ci.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)n.isMesh===!0?n.getVertexPosition(h,Ci):Ci.fromBufferAttribute(f,h),Ci.applyMatrix4(n.matrixWorld),this.expandByPoint(Ci);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Xc.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Xc.copy(s.boundingBox)),Xc.applyMatrix4(n.matrixWorld),this.union(Xc)}const c=n.children;for(let f=0,h=c.length;f<h;f++)this.expandByObject(c[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,Ci),Ci.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(ol),qc.subVectors(this.max,ol),Gs.subVectors(n.a,ol),Vs.subVectors(n.b,ol),ks.subVectors(n.c,ol),$a.subVectors(Vs,Gs),er.subVectors(ks,Vs),Lr.subVectors(Gs,ks);let a=[0,-$a.z,$a.y,0,-er.z,er.y,0,-Lr.z,Lr.y,$a.z,0,-$a.x,er.z,0,-er.x,Lr.z,0,-Lr.x,-$a.y,$a.x,0,-er.y,er.x,0,-Lr.y,Lr.x,0];return!dd(a,Gs,Vs,ks,qc)||(a=[1,0,0,0,1,0,0,0,1],!dd(a,Gs,Vs,ks,qc))?!1:(Yc.crossVectors($a,er),a=[Yc.x,Yc.y,Yc.z],dd(a,Gs,Vs,ks,qc))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Ci).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(Ci).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(ha),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const ha=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ci=new ce,Xc=new _l,Gs=new ce,Vs=new ce,ks=new ce,$a=new ce,er=new ce,Lr=new ce,ol=new ce,qc=new ce,Yc=new ce,Or=new ce;function dd(o,n,a,s,c){for(let f=0,h=o.length-3;f<=h;f+=3){Or.fromArray(o,f);const d=c.x*Math.abs(Or.x)+c.y*Math.abs(Or.y)+c.z*Math.abs(Or.z),p=n.dot(Or),v=a.dot(Or),_=s.dot(Or);if(Math.max(-Math.max(p,v,_),Math.min(p,v,_))>d)return!1}return!0}const aE=new _l,ll=new ce,pd=new ce;class Tu{constructor(n=new ce,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):aE.setFromPoints(n).getCenter(s);let c=0;for(let f=0,h=n.length;f<h;f++)c=Math.max(c,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(c),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;ll.subVectors(n,this.center);const a=ll.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),c=(s-this.radius)*.5;this.center.addScaledVector(ll,c/s),this.radius+=c}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(pd.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(ll.copy(n.center).add(pd)),this.expandByPoint(ll.copy(n.center).sub(pd))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const da=new ce,md=new ce,Wc=new ce,tr=new ce,gd=new ce,Zc=new ce,vd=new ce;class Mx{constructor(n=new ce,a=new ce(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,da)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=da.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(da.copy(this.origin).addScaledVector(this.direction,a),da.distanceToSquared(n))}distanceSqToSegment(n,a,s,c){md.copy(n).add(a).multiplyScalar(.5),Wc.copy(a).sub(n).normalize(),tr.copy(this.origin).sub(md);const f=n.distanceTo(a)*.5,h=-this.direction.dot(Wc),d=tr.dot(this.direction),p=-tr.dot(Wc),v=tr.lengthSq(),_=Math.abs(1-h*h);let m,y,b,T;if(_>0)if(m=h*p-d,y=h*d-p,T=f*_,m>=0)if(y>=-T)if(y<=T){const D=1/_;m*=D,y*=D,b=m*(m+h*y+2*d)+y*(h*m+y+2*p)+v}else y=f,m=Math.max(0,-(h*y+d)),b=-m*m+y*(y+2*p)+v;else y=-f,m=Math.max(0,-(h*y+d)),b=-m*m+y*(y+2*p)+v;else y<=-T?(m=Math.max(0,-(-h*f+d)),y=m>0?-f:Math.min(Math.max(-f,-p),f),b=-m*m+y*(y+2*p)+v):y<=T?(m=0,y=Math.min(Math.max(-f,-p),f),b=y*(y+2*p)+v):(m=Math.max(0,-(h*f+d)),y=m>0?f:Math.min(Math.max(-f,-p),f),b=-m*m+y*(y+2*p)+v);else y=h>0?-f:f,m=Math.max(0,-(h*y+d)),b=-m*m+y*(y+2*p)+v;return s&&s.copy(this.origin).addScaledVector(this.direction,m),c&&c.copy(md).addScaledVector(Wc,y),b}intersectSphere(n,a){da.subVectors(n.center,this.origin);const s=da.dot(this.direction),c=da.dot(da)-s*s,f=n.radius*n.radius;if(c>f)return null;const h=Math.sqrt(f-c),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,a):this.at(d,a)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,c,f,h,d,p;const v=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,y=this.origin;return v>=0?(s=(n.min.x-y.x)*v,c=(n.max.x-y.x)*v):(s=(n.max.x-y.x)*v,c=(n.min.x-y.x)*v),_>=0?(f=(n.min.y-y.y)*_,h=(n.max.y-y.y)*_):(f=(n.max.y-y.y)*_,h=(n.min.y-y.y)*_),s>h||f>c||((f>s||isNaN(s))&&(s=f),(h<c||isNaN(c))&&(c=h),m>=0?(d=(n.min.z-y.z)*m,p=(n.max.z-y.z)*m):(d=(n.max.z-y.z)*m,p=(n.min.z-y.z)*m),s>p||d>c)||((d>s||s!==s)&&(s=d),(p<c||c!==c)&&(c=p),c<0)?null:this.at(s>=0?s:c,a)}intersectsBox(n){return this.intersectBox(n,da)!==null}intersectTriangle(n,a,s,c,f){gd.subVectors(a,n),Zc.subVectors(s,n),vd.crossVectors(gd,Zc);let h=this.direction.dot(vd),d;if(h>0){if(c)return null;d=1}else if(h<0)d=-1,h=-h;else return null;tr.subVectors(this.origin,n);const p=d*this.direction.dot(Zc.crossVectors(tr,Zc));if(p<0)return null;const v=d*this.direction.dot(gd.cross(tr));if(v<0||p+v>h)return null;const _=-d*tr.dot(vd);return _<0?null:this.at(_/h,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(n,a,s,c,f,h,d,p,v,_,m,y,b,T,D,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,h,d,p,v,_,m,y,b,T,D,S)}set(n,a,s,c,f,h,d,p,v,_,m,y,b,T,D,S){const x=this.elements;return x[0]=n,x[4]=a,x[8]=s,x[12]=c,x[1]=f,x[5]=h,x[9]=d,x[13]=p,x[2]=v,x[6]=_,x[10]=m,x[14]=y,x[3]=b,x[7]=T,x[11]=D,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,c=1/js.setFromMatrixColumn(n,0).length(),f=1/js.setFromMatrixColumn(n,1).length(),h=1/js.setFromMatrixColumn(n,2).length();return a[0]=s[0]*c,a[1]=s[1]*c,a[2]=s[2]*c,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,c=n.y,f=n.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(c),v=Math.sin(c),_=Math.cos(f),m=Math.sin(f);if(n.order==="XYZ"){const y=h*_,b=h*m,T=d*_,D=d*m;a[0]=p*_,a[4]=-p*m,a[8]=v,a[1]=b+T*v,a[5]=y-D*v,a[9]=-d*p,a[2]=D-y*v,a[6]=T+b*v,a[10]=h*p}else if(n.order==="YXZ"){const y=p*_,b=p*m,T=v*_,D=v*m;a[0]=y+D*d,a[4]=T*d-b,a[8]=h*v,a[1]=h*m,a[5]=h*_,a[9]=-d,a[2]=b*d-T,a[6]=D+y*d,a[10]=h*p}else if(n.order==="ZXY"){const y=p*_,b=p*m,T=v*_,D=v*m;a[0]=y-D*d,a[4]=-h*m,a[8]=T+b*d,a[1]=b+T*d,a[5]=h*_,a[9]=D-y*d,a[2]=-h*v,a[6]=d,a[10]=h*p}else if(n.order==="ZYX"){const y=h*_,b=h*m,T=d*_,D=d*m;a[0]=p*_,a[4]=T*v-b,a[8]=y*v+D,a[1]=p*m,a[5]=D*v+y,a[9]=b*v-T,a[2]=-v,a[6]=d*p,a[10]=h*p}else if(n.order==="YZX"){const y=h*p,b=h*v,T=d*p,D=d*v;a[0]=p*_,a[4]=D-y*m,a[8]=T*m+b,a[1]=m,a[5]=h*_,a[9]=-d*_,a[2]=-v*_,a[6]=b*m+T,a[10]=y-D*m}else if(n.order==="XZY"){const y=h*p,b=h*v,T=d*p,D=d*v;a[0]=p*_,a[4]=-m,a[8]=v*_,a[1]=y*m+D,a[5]=h*_,a[9]=b*m-T,a[2]=T*m-b,a[6]=d*_,a[10]=D*m+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(rE,n,sE)}lookAt(n,a,s){const c=this.elements;return li.subVectors(n,a),li.lengthSq()===0&&(li.z=1),li.normalize(),nr.crossVectors(s,li),nr.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),nr.crossVectors(s,li)),nr.normalize(),Kc.crossVectors(li,nr),c[0]=nr.x,c[4]=Kc.x,c[8]=li.x,c[1]=nr.y,c[5]=Kc.y,c[9]=li.y,c[2]=nr.z,c[6]=Kc.z,c[10]=li.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,h=s[0],d=s[4],p=s[8],v=s[12],_=s[1],m=s[5],y=s[9],b=s[13],T=s[2],D=s[6],S=s[10],x=s[14],L=s[3],P=s[7],U=s[11],V=s[15],H=c[0],z=c[4],I=c[8],C=c[12],A=c[1],G=c[5],se=c[9],ie=c[13],ue=c[2],W=c[6],F=c[10],te=c[14],q=c[3],ve=c[7],fe=c[11],Me=c[15];return f[0]=h*H+d*A+p*ue+v*q,f[4]=h*z+d*G+p*W+v*ve,f[8]=h*I+d*se+p*F+v*fe,f[12]=h*C+d*ie+p*te+v*Me,f[1]=_*H+m*A+y*ue+b*q,f[5]=_*z+m*G+y*W+b*ve,f[9]=_*I+m*se+y*F+b*fe,f[13]=_*C+m*ie+y*te+b*Me,f[2]=T*H+D*A+S*ue+x*q,f[6]=T*z+D*G+S*W+x*ve,f[10]=T*I+D*se+S*F+x*fe,f[14]=T*C+D*ie+S*te+x*Me,f[3]=L*H+P*A+U*ue+V*q,f[7]=L*z+P*G+U*W+V*ve,f[11]=L*I+P*se+U*F+V*fe,f[15]=L*C+P*ie+U*te+V*Me,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],c=n[8],f=n[12],h=n[1],d=n[5],p=n[9],v=n[13],_=n[2],m=n[6],y=n[10],b=n[14],T=n[3],D=n[7],S=n[11],x=n[15];return T*(+f*p*m-c*v*m-f*d*y+s*v*y+c*d*b-s*p*b)+D*(+a*p*b-a*v*y+f*h*y-c*h*b+c*v*_-f*p*_)+S*(+a*v*m-a*d*b-f*h*m+s*h*b+f*d*_-s*v*_)+x*(-c*d*_-a*p*m+a*d*y+c*h*m-s*h*y+s*p*_)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const c=this.elements;return n.isVector3?(c[12]=n.x,c[13]=n.y,c[14]=n.z):(c[12]=n,c[13]=a,c[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],h=n[4],d=n[5],p=n[6],v=n[7],_=n[8],m=n[9],y=n[10],b=n[11],T=n[12],D=n[13],S=n[14],x=n[15],L=m*S*v-D*y*v+D*p*b-d*S*b-m*p*x+d*y*x,P=T*y*v-_*S*v-T*p*b+h*S*b+_*p*x-h*y*x,U=_*D*v-T*m*v+T*d*b-h*D*b-_*d*x+h*m*x,V=T*m*p-_*D*p-T*d*y+h*D*y+_*d*S-h*m*S,H=a*L+s*P+c*U+f*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return n[0]=L*z,n[1]=(D*y*f-m*S*f-D*c*b+s*S*b+m*c*x-s*y*x)*z,n[2]=(d*S*f-D*p*f+D*c*v-s*S*v-d*c*x+s*p*x)*z,n[3]=(m*p*f-d*y*f-m*c*v+s*y*v+d*c*b-s*p*b)*z,n[4]=P*z,n[5]=(_*S*f-T*y*f+T*c*b-a*S*b-_*c*x+a*y*x)*z,n[6]=(T*p*f-h*S*f-T*c*v+a*S*v+h*c*x-a*p*x)*z,n[7]=(h*y*f-_*p*f+_*c*v-a*y*v-h*c*b+a*p*b)*z,n[8]=U*z,n[9]=(T*m*f-_*D*f-T*s*b+a*D*b+_*s*x-a*m*x)*z,n[10]=(h*D*f-T*d*f+T*s*v-a*D*v-h*s*x+a*d*x)*z,n[11]=(_*d*f-h*m*f-_*s*v+a*m*v+h*s*b-a*d*b)*z,n[12]=V*z,n[13]=(_*D*c-T*m*c+T*s*y-a*D*y-_*s*S+a*m*S)*z,n[14]=(T*d*c-h*D*c-T*s*p+a*D*p+h*s*S-a*d*S)*z,n[15]=(h*m*c-_*d*c+_*s*p-a*m*p-h*s*y+a*d*y)*z,this}scale(n){const a=this.elements,s=n.x,c=n.y,f=n.z;return a[0]*=s,a[4]*=c,a[8]*=f,a[1]*=s,a[5]*=c,a[9]*=f,a[2]*=s,a[6]*=c,a[10]*=f,a[3]*=s,a[7]*=c,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],c=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,c))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),c=Math.sin(a),f=1-s,h=n.x,d=n.y,p=n.z,v=f*h,_=f*d;return this.set(v*h+s,v*d-c*p,v*p+c*d,0,v*d+c*p,_*d+s,_*p-c*h,0,v*p-c*d,_*p+c*h,f*p*p+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,c,f,h){return this.set(1,s,f,0,n,1,h,0,a,c,1,0,0,0,0,1),this}compose(n,a,s){const c=this.elements,f=a._x,h=a._y,d=a._z,p=a._w,v=f+f,_=h+h,m=d+d,y=f*v,b=f*_,T=f*m,D=h*_,S=h*m,x=d*m,L=p*v,P=p*_,U=p*m,V=s.x,H=s.y,z=s.z;return c[0]=(1-(D+x))*V,c[1]=(b+U)*V,c[2]=(T-P)*V,c[3]=0,c[4]=(b-U)*H,c[5]=(1-(y+x))*H,c[6]=(S+L)*H,c[7]=0,c[8]=(T+P)*z,c[9]=(S-L)*z,c[10]=(1-(y+D))*z,c[11]=0,c[12]=n.x,c[13]=n.y,c[14]=n.z,c[15]=1,this}decompose(n,a,s){const c=this.elements;let f=js.set(c[0],c[1],c[2]).length();const h=js.set(c[4],c[5],c[6]).length(),d=js.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),n.x=c[12],n.y=c[13],n.z=c[14],Ri.copy(this);const v=1/f,_=1/h,m=1/d;return Ri.elements[0]*=v,Ri.elements[1]*=v,Ri.elements[2]*=v,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=m,Ri.elements[9]*=m,Ri.elements[10]*=m,a.setFromRotationMatrix(Ri),s.x=f,s.y=h,s.z=d,this}makePerspective(n,a,s,c,f,h,d=ya){const p=this.elements,v=2*f/(a-n),_=2*f/(s-c),m=(a+n)/(a-n),y=(s+c)/(s-c);let b,T;if(d===ya)b=-(h+f)/(h-f),T=-2*h*f/(h-f);else if(d===bu)b=-h/(h-f),T=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(n,a,s,c,f,h,d=ya){const p=this.elements,v=1/(a-n),_=1/(s-c),m=1/(h-f),y=(a+n)*v,b=(s+c)*_;let T,D;if(d===ya)T=(h+f)*m,D=-2*m;else if(d===bu)T=f*m,D=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*v,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-b,p[2]=0,p[6]=0,p[10]=D,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<16;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const js=new ce,Ri=new rn,rE=new ce(0,0,0),sE=new ce(1,1,1),nr=new ce,Kc=new ce,li=new ce,p_=new rn,m_=new vl;class Ea{constructor(n=0,a=0,s=0,c=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=c}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,c=this._order){return this._x=n,this._y=a,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const c=n.elements,f=c[0],h=c[4],d=c[8],p=c[1],v=c[5],_=c[9],m=c[2],y=c[6],b=c[10];switch(a){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,v),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(p,v)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(At(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,b),this._z=Math.atan2(-h,v)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,v));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,v),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,v),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-_,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return p_.makeRotationFromQuaternion(n),this.setFromRotationMatrix(p_,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return m_.setFromEuler(this),this.setFromQuaternion(m_,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";let Ex=class{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}},oE=0;const g_=new ce,Xs=new vl,pa=new rn,Qc=new ce,cl=new ce,lE=new ce,cE=new vl,v_=new ce(1,0,0),__=new ce(0,1,0),x_=new ce(0,0,1),y_={type:"added"},uE={type:"removed"},qs={type:"childadded",child:null},_d={type:"childremoved",child:null};class $n extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const n=new ce,a=new Ea,s=new vl,c=new ce(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new rn},normalMatrix:{value:new ft}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Xs.setFromAxisAngle(n,a),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(n,a){return Xs.setFromAxisAngle(n,a),this.quaternion.premultiply(Xs),this}rotateX(n){return this.rotateOnAxis(v_,n)}rotateY(n){return this.rotateOnAxis(__,n)}rotateZ(n){return this.rotateOnAxis(x_,n)}translateOnAxis(n,a){return g_.copy(n).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(v_,n)}translateY(n){return this.translateOnAxis(__,n)}translateZ(n){return this.translateOnAxis(x_,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Qc.copy(n):Qc.set(n,a,s);const c=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(cl,Qc,this.up):pa.lookAt(Qc,cl,this.up),this.quaternion.setFromRotationMatrix(pa),c&&(pa.extractRotation(c.matrixWorld),Xs.setFromRotationMatrix(pa),this.quaternion.premultiply(Xs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(y_),qs.child=n,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(uE),_d.child=n,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),pa.multiply(n.parent.matrixWorld)),n.applyMatrix4(pa),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(y_),qs.child=n,this.dispatchEvent(qs),qs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,c=this.children.length;s<c;s++){const h=this.children[s].getObjectByProperty(n,a);if(h!==void 0)return h}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,n,lE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,cE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(n)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(n.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let v=0,_=p.length;v<_;v++){const m=p[v];f(n.shapes,m)}else f(n.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,v=this.material.length;p<v;p++)d.push(f(n.materials,this.material[p]));c.material=d}else c.material=f(n.materials,this.material);if(this.children.length>0){c.children=[];for(let d=0;d<this.children.length;d++)c.children.push(this.children[d].toJSON(n).object)}if(this.animations.length>0){c.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];c.animations.push(f(n.animations,p))}}if(a){const d=h(n.geometries),p=h(n.materials),v=h(n.textures),_=h(n.images),m=h(n.shapes),y=h(n.skeletons),b=h(n.animations),T=h(n.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),v.length>0&&(s.textures=v),_.length>0&&(s.images=_),m.length>0&&(s.shapes=m),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),T.length>0&&(s.nodes=T)}return s.object=c,s;function h(d){const p=[];for(const v in d){const _=d[v];delete _.metadata,p.push(_)}return p}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const c=n.children[s];this.add(c.clone())}return this}}$n.DEFAULT_UP=new ce(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new ce,ma=new ce,xd=new ce,ga=new ce,Ys=new ce,Ws=new ce,S_=new ce,yd=new ce,Sd=new ce,bd=new ce,Md=new an,Ed=new an,Td=new an;class Di{constructor(n=new ce,a=new ce,s=new ce){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,c){c.subVectors(s,a),Ni.subVectors(n,a),c.cross(Ni);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(n,a,s,c,f){Ni.subVectors(c,a),ma.subVectors(s,a),xd.subVectors(n,a);const h=Ni.dot(Ni),d=Ni.dot(ma),p=Ni.dot(xd),v=ma.dot(ma),_=ma.dot(xd),m=h*v-d*d;if(m===0)return f.set(0,0,0),null;const y=1/m,b=(v*p-d*_)*y,T=(h*_-d*p)*y;return f.set(1-b-T,T,b)}static containsPoint(n,a,s,c){return this.getBarycoord(n,a,s,c,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(n,a,s,c,f,h,d,p){return this.getBarycoord(n,a,s,c,ga)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,ga.x),p.addScaledVector(h,ga.y),p.addScaledVector(d,ga.z),p)}static getInterpolatedAttribute(n,a,s,c,f,h){return Md.setScalar(0),Ed.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(n,a),Ed.fromBufferAttribute(n,s),Td.fromBufferAttribute(n,c),h.setScalar(0),h.addScaledVector(Md,f.x),h.addScaledVector(Ed,f.y),h.addScaledVector(Td,f.z),h}static isFrontFacing(n,a,s,c){return Ni.subVectors(s,a),ma.subVectors(n,a),Ni.cross(ma).dot(c)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,c){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[c]),this}setFromAttributeAndIndices(n,a,s,c){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,c),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ni.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ni.cross(ma).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Di.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Di.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,c,f){return Di.getInterpolation(n,this.a,this.b,this.c,a,s,c,f)}containsPoint(n){return Di.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Di.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,c=this.b,f=this.c;let h,d;Ys.subVectors(c,s),Ws.subVectors(f,s),yd.subVectors(n,s);const p=Ys.dot(yd),v=Ws.dot(yd);if(p<=0&&v<=0)return a.copy(s);Sd.subVectors(n,c);const _=Ys.dot(Sd),m=Ws.dot(Sd);if(_>=0&&m<=_)return a.copy(c);const y=p*m-_*v;if(y<=0&&p>=0&&_<=0)return h=p/(p-_),a.copy(s).addScaledVector(Ys,h);bd.subVectors(n,f);const b=Ys.dot(bd),T=Ws.dot(bd);if(T>=0&&b<=T)return a.copy(f);const D=b*v-p*T;if(D<=0&&v>=0&&T<=0)return d=v/(v-T),a.copy(s).addScaledVector(Ws,d);const S=_*T-b*m;if(S<=0&&m-_>=0&&b-T>=0)return S_.subVectors(f,c),d=(m-_)/(m-_+(b-T)),a.copy(c).addScaledVector(S_,d);const x=1/(S+D+y);return h=D*x,d=y*x,a.copy(s).addScaledVector(Ys,h).addScaledVector(Ws,d)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function Ad(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class Pt{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const c=n;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=yi){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Nt.toWorkingColorSpace(this,a),this}setRGB(n,a,s,c=Nt.workingColorSpace){return this.r=n,this.g=a,this.b=s,Nt.toWorkingColorSpace(this,c),this}setHSL(n,a,s,c=Nt.workingColorSpace){if(n=YM(n,1),a=At(a,0,1),s=At(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=Ad(h,f,n+1/3),this.g=Ad(h,f,n),this.b=Ad(h,f,n-1/3)}return Nt.toWorkingColorSpace(this,c),this}setStyle(n,a=yi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const h=c[1],d=c[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=c[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=yi){const s=Tx[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=ba(n.r),this.g=ba(n.g),this.b=ba(n.b),this}copyLinearToSRGB(n){return this.r=no(n.r),this.g=no(n.g),this.b=no(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=yi){return Nt.fromWorkingColorSpace(In.copy(this),n),Math.round(At(In.r*255,0,255))*65536+Math.round(At(In.g*255,0,255))*256+Math.round(At(In.b*255,0,255))}getHexString(n=yi){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=Nt.workingColorSpace){Nt.fromWorkingColorSpace(In.copy(this),a);const s=In.r,c=In.g,f=In.b,h=Math.max(s,c,f),d=Math.min(s,c,f);let p,v;const _=(d+h)/2;if(d===h)p=0,v=0;else{const m=h-d;switch(v=_<=.5?m/(h+d):m/(2-h-d),h){case s:p=(c-f)/m+(c<f?6:0);break;case c:p=(f-s)/m+2;break;case f:p=(s-c)/m+4;break}p/=6}return n.h=p,n.s=v,n.l=_,n}getRGB(n,a=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(In.copy(this),a),n.r=In.r,n.g=In.g,n.b=In.b,n}getStyle(n=yi){Nt.fromWorkingColorSpace(In.copy(this),n);const a=In.r,s=In.g,c=In.b;return n!==yi?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(n,a,s){return this.getHSL(ir),this.setHSL(ir.h+n,ir.s+a,ir.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(ir),n.getHSL(Jc);const s=cd(ir.h,Jc.h,a),c=cd(ir.s,Jc.s,a),f=cd(ir.l,Jc.l,a);return this.setHSL(s,c,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,c=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*c,this.g=f[1]*a+f[4]*s+f[7]*c,this.b=f[2]*a+f[5]*s+f[8]*c,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Pt;Pt.NAMES=Tx;let fE=0;class xl extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=Zr,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Hd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(s.blending=this.blending),this.side!==lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fd&&(s.blendSrc=this.blendSrc),this.blendDst!==Hd&&(s.blendDst=this.blendDst),this.blendEquation!==Xr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(a){const f=c(n.textures),h=c(n.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const c=a.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ax extends xl{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const fn=new ce,$c=new kt;let hE=0;class Bn{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hE++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=l_,this.updateRanges=[],this.gpuType=xa,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[n+c]=a.array[s+c];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)$c.fromBufferAttribute(this,a),$c.applyMatrix3(n),this.setXY(a,$c.x,$c.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyMatrix3(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyMatrix4(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyNormalMatrix(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.transformDirection(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=sl(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Kn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=sl(a,this.array)),a}setX(n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=sl(a,this.array)),a}setY(n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=sl(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=sl(a,this.array)),a}setW(n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Kn(a,this.array),s=Kn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,c){return n*=this.itemSize,this.normalized&&(a=Kn(a,this.array),s=Kn(s,this.array),c=Kn(c,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this}setXYZW(n,a,s,c,f){return n*=this.itemSize,this.normalized&&(a=Kn(a,this.array),s=Kn(s,this.array),c=Kn(c,this.array),f=Kn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==l_&&(n.usage=this.usage),n}}class wx extends Bn{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class Cx extends Bn{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class Kr extends Bn{constructor(n,a,s){super(new Float32Array(n),a,s)}}let dE=0;const xi=new rn,wd=new $n,Zs=new ce,ci=new _l,ul=new _l,Mn=new ce;class Qn extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(Sx(n)?Cx:wx)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ft().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(n),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return xi.makeRotationFromQuaternion(n),this.applyMatrix4(xi),this}rotateX(n){return xi.makeRotationX(n),this.applyMatrix4(xi),this}rotateY(n){return xi.makeRotationY(n),this.applyMatrix4(xi),this}rotateZ(n){return xi.makeRotationZ(n),this.applyMatrix4(xi),this}translate(n,a,s){return xi.makeTranslation(n,a,s),this.applyMatrix4(xi),this}scale(n,a,s){return xi.makeScale(n,a,s),this.applyMatrix4(xi),this}lookAt(n){return wd.lookAt(n),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let c=0,f=n.length;c<f;c++){const h=n[c];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Kr(s,3))}else{const s=Math.min(n.length,a.count);for(let c=0;c<s;c++){const f=n[c];a.setXYZ(c,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,c=a.length;s<c;s++){const f=a[s];ci.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(n){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(n),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];ul.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ci.min,ul.min),ci.expandByPoint(Mn),Mn.addVectors(ci.max,ul.max),ci.expandByPoint(Mn)):(ci.expandByPoint(ul.min),ci.expandByPoint(ul.max))}ci.getCenter(s);let c=0;for(let f=0,h=n.count;f<h;f++)Mn.fromBufferAttribute(n,f),c=Math.max(c,s.distanceToSquared(Mn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],p=this.morphTargetsRelative;for(let v=0,_=d.count;v<_;v++)Mn.fromBufferAttribute(d,v),p&&(Zs.fromBufferAttribute(n,v),Mn.add(Zs)),c=Math.max(c,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,c=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let I=0;I<s.count;I++)d[I]=new ce,p[I]=new ce;const v=new ce,_=new ce,m=new ce,y=new kt,b=new kt,T=new kt,D=new ce,S=new ce;function x(I,C,A){v.fromBufferAttribute(s,I),_.fromBufferAttribute(s,C),m.fromBufferAttribute(s,A),y.fromBufferAttribute(f,I),b.fromBufferAttribute(f,C),T.fromBufferAttribute(f,A),_.sub(v),m.sub(v),b.sub(y),T.sub(y);const G=1/(b.x*T.y-T.x*b.y);isFinite(G)&&(D.copy(_).multiplyScalar(T.y).addScaledVector(m,-b.y).multiplyScalar(G),S.copy(m).multiplyScalar(b.x).addScaledVector(_,-T.x).multiplyScalar(G),d[I].add(D),d[C].add(D),d[A].add(D),p[I].add(S),p[C].add(S),p[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.count}]);for(let I=0,C=L.length;I<C;++I){const A=L[I],G=A.start,se=A.count;for(let ie=G,ue=G+se;ie<ue;ie+=3)x(n.getX(ie+0),n.getX(ie+1),n.getX(ie+2))}const P=new ce,U=new ce,V=new ce,H=new ce;function z(I){V.fromBufferAttribute(c,I),H.copy(V);const C=d[I];P.copy(C),P.sub(V.multiplyScalar(V.dot(C))).normalize(),U.crossVectors(H,C);const G=U.dot(p[I])<0?-1:1;h.setXYZW(I,P.x,P.y,P.z,G)}for(let I=0,C=L.length;I<C;++I){const A=L[I],G=A.start,se=A.count;for(let ie=G,ue=G+se;ie<ue;ie+=3)z(n.getX(ie+0)),z(n.getX(ie+1)),z(n.getX(ie+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Bn(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const c=new ce,f=new ce,h=new ce,d=new ce,p=new ce,v=new ce,_=new ce,m=new ce;if(n)for(let y=0,b=n.count;y<b;y+=3){const T=n.getX(y+0),D=n.getX(y+1),S=n.getX(y+2);c.fromBufferAttribute(a,T),f.fromBufferAttribute(a,D),h.fromBufferAttribute(a,S),_.subVectors(h,f),m.subVectors(c,f),_.cross(m),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,D),v.fromBufferAttribute(s,S),d.add(_),p.add(_),v.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(D,p.x,p.y,p.z),s.setXYZ(S,v.x,v.y,v.z)}else for(let y=0,b=a.count;y<b;y+=3)c.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),h.fromBufferAttribute(a,y+2),_.subVectors(h,f),m.subVectors(c,f),_.cross(m),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)Mn.fromBufferAttribute(n,a),Mn.normalize(),n.setXYZ(a,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function n(d,p){const v=d.array,_=d.itemSize,m=d.normalized,y=new v.constructor(p.length*_);let b=0,T=0;for(let D=0,S=p.length;D<S;D++){d.isInterleavedBufferAttribute?b=p[D]*d.data.stride+d.offset:b=p[D]*_;for(let x=0;x<_;x++)y[T++]=v[b++]}return new Bn(y,_,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Qn,s=this.index.array,c=this.attributes;for(const d in c){const p=c[d],v=n(p,s);a.setAttribute(d,v)}const f=this.morphAttributes;for(const d in f){const p=[],v=f[d];for(let _=0,m=v.length;_<m;_++){const y=v[_],b=n(y,s);p.push(b)}a.morphAttributes[d]=p}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const v=h[d];a.addGroup(v.start,v.count,v.materialIndex)}return a}toJSON(){const n={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const v in p)p[v]!==void 0&&(n[v]=p[v]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const p in s){const v=s[p];n.data.attributes[p]=v.toJSON(n.data)}const c={};let f=!1;for(const p in this.morphAttributes){const v=this.morphAttributes[p],_=[];for(let m=0,y=v.length;m<y;m++){const b=v[m];_.push(b.toJSON(n.data))}_.length>0&&(c[p]=_,f=!0)}f&&(n.data.morphAttributes=c,n.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(n.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(n.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone(a));const c=n.attributes;for(const v in c){const _=c[v];this.setAttribute(v,_.clone(a))}const f=n.morphAttributes;for(const v in f){const _=[],m=f[v];for(let y=0,b=m.length;y<b;y++)_.push(m[y].clone(a));this.morphAttributes[v]=_}this.morphTargetsRelative=n.morphTargetsRelative;const h=n.groups;for(let v=0,_=h.length;v<_;v++){const m=h[v];this.addGroup(m.start,m.count,m.materialIndex)}const d=n.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=n.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const b_=new rn,zr=new Mx,eu=new Tu,M_=new ce,tu=new ce,nu=new ce,iu=new ce,Cd=new ce,au=new ce,E_=new ce,ru=new ce;class Sa extends $n{constructor(n=new Qn,a=new Ax){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=c.length;f<h;f++){const d=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(n,a){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(c,n);const d=this.morphTargetInfluences;if(f&&d){au.set(0,0,0);for(let p=0,v=f.length;p<v;p++){const _=d[p],m=f[p];_!==0&&(Cd.fromBufferAttribute(m,n),h?au.addScaledVector(Cd,_):au.addScaledVector(Cd.sub(a),_))}a.add(au)}return a}raycast(n,a){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(f),zr.copy(n.ray).recast(n.near),!(eu.containsPoint(zr.origin)===!1&&(zr.intersectSphere(eu,M_)===null||zr.origin.distanceToSquared(M_)>(n.far-n.near)**2))&&(b_.copy(f).invert(),zr.copy(n.ray).applyMatrix4(b_),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,zr)))}_computeIntersections(n,a,s){let c;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,v=f.attributes.uv,_=f.attributes.uv1,m=f.attributes.normal,y=f.groups,b=f.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,D=y.length;T<D;T++){const S=y[T],x=h[S.materialIndex],L=Math.max(S.start,b.start),P=Math.min(d.count,Math.min(S.start+S.count,b.start+b.count));for(let U=L,V=P;U<V;U+=3){const H=d.getX(U),z=d.getX(U+1),I=d.getX(U+2);c=su(this,x,n,s,v,_,m,H,z,I),c&&(c.faceIndex=Math.floor(U/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const T=Math.max(0,b.start),D=Math.min(d.count,b.start+b.count);for(let S=T,x=D;S<x;S+=3){const L=d.getX(S),P=d.getX(S+1),U=d.getX(S+2);c=su(this,h,n,s,v,_,m,L,P,U),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,D=y.length;T<D;T++){const S=y[T],x=h[S.materialIndex],L=Math.max(S.start,b.start),P=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let U=L,V=P;U<V;U+=3){const H=U,z=U+1,I=U+2;c=su(this,x,n,s,v,_,m,H,z,I),c&&(c.faceIndex=Math.floor(U/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const T=Math.max(0,b.start),D=Math.min(p.count,b.start+b.count);for(let S=T,x=D;S<x;S+=3){const L=S,P=S+1,U=S+2;c=su(this,h,n,s,v,_,m,L,P,U),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}}}function pE(o,n,a,s,c,f,h,d){let p;if(n.side===Jn?p=s.intersectTriangle(h,f,c,!0,d):p=s.intersectTriangle(c,f,h,n.side===lr,d),p===null)return null;ru.copy(d),ru.applyMatrix4(o.matrixWorld);const v=a.ray.origin.distanceTo(ru);return v<a.near||v>a.far?null:{distance:v,point:ru.clone(),object:o}}function su(o,n,a,s,c,f,h,d,p,v){o.getVertexPosition(d,tu),o.getVertexPosition(p,nu),o.getVertexPosition(v,iu);const _=pE(o,n,a,s,tu,nu,iu,E_);if(_){const m=new ce;Di.getBarycoord(E_,tu,nu,iu,m),c&&(_.uv=Di.getInterpolatedAttribute(c,d,p,v,m,new kt)),f&&(_.uv1=Di.getInterpolatedAttribute(f,d,p,v,m,new kt)),h&&(_.normal=Di.getInterpolatedAttribute(h,d,p,v,m,new ce),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:v,normal:new ce,materialIndex:0};Di.getNormal(tu,nu,iu,y.normal),_.face=y,_.barycoord=m}return _}class yl extends Qn{constructor(n=1,a=1,s=1,c=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:c,heightSegments:f,depthSegments:h};const d=this;c=Math.floor(c),f=Math.floor(f),h=Math.floor(h);const p=[],v=[],_=[],m=[];let y=0,b=0;T("z","y","x",-1,-1,s,a,n,h,f,0),T("z","y","x",1,-1,s,a,-n,h,f,1),T("x","z","y",1,1,n,s,a,c,h,2),T("x","z","y",1,-1,n,s,-a,c,h,3),T("x","y","z",1,-1,n,a,s,c,f,4),T("x","y","z",-1,-1,n,a,-s,c,f,5),this.setIndex(p),this.setAttribute("position",new Kr(v,3)),this.setAttribute("normal",new Kr(_,3)),this.setAttribute("uv",new Kr(m,2));function T(D,S,x,L,P,U,V,H,z,I,C){const A=U/z,G=V/I,se=U/2,ie=V/2,ue=H/2,W=z+1,F=I+1;let te=0,q=0;const ve=new ce;for(let fe=0;fe<F;fe++){const Me=fe*G-ie;for(let Te=0;Te<W;Te++){const ht=Te*A-se;ve[D]=ht*L,ve[S]=Me*P,ve[x]=ue,v.push(ve.x,ve.y,ve.z),ve[D]=0,ve[S]=0,ve[x]=H>0?1:-1,_.push(ve.x,ve.y,ve.z),m.push(Te/z),m.push(1-fe/I),te+=1}}for(let fe=0;fe<I;fe++)for(let Me=0;Me<z;Me++){const Te=y+Me+W*fe,ht=y+Me+W*(fe+1),R=y+(Me+1)+W*(fe+1),Q=y+(Me+1)+W*fe;p.push(Te,ht,Q),p.push(ht,R,Q),q+=6}d.addGroup(b,q,C),b+=q,y+=te}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new yl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function co(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const c=o[a][s];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=c.clone():Array.isArray(c)?n[a][s]=c.slice():n[a][s]=c}}return n}function kn(o){const n={};for(let a=0;a<o.length;a++){const s=co(o[a]);for(const c in s)n[c]=s[c]}return n}function mE(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function Rx(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:Nt.workingColorSpace}const gE={clone:co,merge:kn};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends xl{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=co(n.uniforms),this.uniformsGroups=mE(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const c in this.uniforms){const h=this.uniforms[c].value;h&&h.isTexture?a.uniforms[c]={type:"t",value:h.toJSON(n).uuid}:h&&h.isColor?a.uniforms[c]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[c]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[c]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[c]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[c]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[c]={type:"m4",value:h.toArray()}:a.uniforms[c]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class Nx extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ya}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ce,T_=new kt,A_=new kt;class Si extends Nx{constructor(n=50,a=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=Ep*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return Ep*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ar.x,ar.y).multiplyScalar(-n/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ar.x,ar.y).multiplyScalar(-n/ar.z)}getViewSize(n,a){return this.getViewBounds(n,T_,A_),a.subVectors(A_,T_)}setViewOffset(n,a,s,c,f,h){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(ld*.5*this.fov)/this.zoom,s=2*a,c=this.aspect*s,f=-.5*c;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,v=h.fullHeight;f+=h.offsetX*c/p,a-=h.offsetY*s/v,c*=h.width/p,s*=h.height/v}const d=this.filmOffset;d!==0&&(f+=n*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,a,a-s,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Ks=-90,Qs=1;class xE extends $n{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Si(Ks,Qs,n,a);c.layers=this.layers,this.add(c);const f=new Si(Ks,Qs,n,a);f.layers=this.layers,this.add(f);const h=new Si(Ks,Qs,n,a);h.layers=this.layers,this.add(h);const d=new Si(Ks,Qs,n,a);d.layers=this.layers,this.add(d);const p=new Si(Ks,Qs,n,a);p.layers=this.layers,this.add(p);const v=new Si(Ks,Qs,n,a);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,c,f,h,d,p]=a;for(const v of a)this.remove(v);if(n===ya)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(n===bu)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const v of a)this.add(v),v.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,v,_]=this.children,m=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),T=n.xr.enabled;n.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,c),n.render(a,f),n.setRenderTarget(s,1,c),n.render(a,h),n.setRenderTarget(s,2,c),n.render(a,d),n.setRenderTarget(s,3,c),n.render(a,p),n.setRenderTarget(s,4,c),n.render(a,v),s.texture.generateMipmaps=D,n.setRenderTarget(s,5,c),n.render(a,_),n.setRenderTarget(m,y,b),n.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Dx extends jn{constructor(n,a,s,c,f,h,d,p,v,_){n=n!==void 0?n:[],a=a!==void 0?a:ao,super(n,a,s,c,f,h,d,p,v,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class yE extends Jr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},c=[s,s,s,s,s,s];this.texture=new Dx(c,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:Yi}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new yl(5,5,5),f=new cr({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:sr});f.uniforms.tEquirect.value=a;const h=new Sa(c,f),d=a.minFilter;return a.minFilter===Wr&&(a.minFilter=Yi),new xE(1,10,this).update(n,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(n,a,s,c){const f=n.getRenderTarget();for(let h=0;h<6;h++)n.setRenderTarget(this,h),n.clear(a,s,c);n.setRenderTarget(f)}}class ou extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SE={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let c=null,f=null,h=null;const d=this._targetRay,p=this._grip,v=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(v&&n.hand){h=!0;for(const D of n.hand.values()){const S=a.getJointPose(D,s),x=this._getHandJoint(v,D);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=v.joints["index-finger-tip"],m=v.joints["thumb-tip"],y=_.position.distanceTo(m.position),b=.02,T=.005;v.inputState.pinching&&y>b+T?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!v.inputState.pinching&&y<=b-T&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else p!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(c=a.getPose(n.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return d!==null&&(d.visible=c!==null),p!==null&&(p.visible=f!==null),v!==null&&(v.visible=h!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new ou;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class bE extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const Nd=new ce,ME=new ce,EE=new ft;class Gr{constructor(n=new ce(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,c){return this.normal.set(n,a,s),this.constant=c,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const c=Nd.subVectors(s,a).cross(ME.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(c,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Nd),c=this.normal.dot(s);if(c===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||EE.getNormalMatrix(n),c=this.coplanarPoint(Nd).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Tu,lu=new ce;class Ux{constructor(n=new Gr,a=new Gr,s=new Gr,c=new Gr,f=new Gr,h=new Gr){this.planes=[n,a,s,c,f,h]}set(n,a,s,c,f,h){const d=this.planes;return d[0].copy(n),d[1].copy(a),d[2].copy(s),d[3].copy(c),d[4].copy(f),d[5].copy(h),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=ya){const s=this.planes,c=n.elements,f=c[0],h=c[1],d=c[2],p=c[3],v=c[4],_=c[5],m=c[6],y=c[7],b=c[8],T=c[9],D=c[10],S=c[11],x=c[12],L=c[13],P=c[14],U=c[15];if(s[0].setComponents(p-f,y-v,S-b,U-x).normalize(),s[1].setComponents(p+f,y+v,S+b,U+x).normalize(),s[2].setComponents(p+h,y+_,S+T,U+L).normalize(),s[3].setComponents(p-h,y-_,S-T,U-L).normalize(),s[4].setComponents(p-d,y-m,S-D,U-P).normalize(),a===ya)s[5].setComponents(p+d,y+m,S+D,U+P).normalize();else if(a===bu)s[5].setComponents(d,m,D,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Pr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(n){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(n.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(n){const a=this.planes,s=n.center,c=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const c=a[s];if(lu.x=c.normal.x>0?n.max.x:n.min.x,lu.y=c.normal.y>0?n.max.y:n.min.y,lu.z=c.normal.z>0?n.max.z:n.min.z,c.distanceToPoint(lu)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vr extends xl{constructor(n){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const w_=new rn,Tp=new Mx,cu=new Tu,uu=new ce;class Js extends $n{constructor(n=new Qn,a=new Vr){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}raycast(n,a){const s=this.geometry,c=this.matrixWorld,f=n.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),cu.copy(s.boundingSphere),cu.applyMatrix4(c),cu.radius+=f,n.ray.intersectsSphere(cu)===!1)return;w_.copy(c).invert(),Tp.copy(n.ray).applyMatrix4(w_);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,v=s.index,m=s.attributes.position;if(v!==null){const y=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let T=y,D=b;T<D;T++){const S=v.getX(T);uu.fromBufferAttribute(m,S),C_(uu,S,p,c,n,a,this)}}else{const y=Math.max(0,h.start),b=Math.min(m.count,h.start+h.count);for(let T=y,D=b;T<D;T++)uu.fromBufferAttribute(m,T),C_(uu,T,p,c,n,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=c.length;f<h;f++){const d=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function C_(o,n,a,s,c,f,h){const d=Tp.distanceSqToPoint(o);if(d<a){const p=new ce;Tp.closestPointToPoint(o,p),p.applyMatrix4(s);const v=c.ray.origin.distanceTo(p);if(v<c.near||v>c.far)return;f.push({distance:v,distanceToRay:Math.sqrt(d),point:p,index:n,face:null,faceIndex:null,barycoord:null,object:h})}}class TE extends jn{constructor(n,a,s,c,f,h,d,p,v){super(n,a,s,c,f,h,d,p,v),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lx extends jn{constructor(n,a,s,c,f,h,d,p,v,_=to){if(_!==to&&_!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===to&&(s=Qr),s===void 0&&_===oo&&(s=so),super(null,c,f,h,d,p,_,s,v),this.isDepthTexture=!0,this.image={width:n,height:a},this.magFilter=d!==void 0?d:Li,this.minFilter=p!==void 0?p:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Ip(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Au extends Qn{constructor(n=1,a=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:c};const f=n/2,h=a/2,d=Math.floor(s),p=Math.floor(c),v=d+1,_=p+1,m=n/d,y=a/p,b=[],T=[],D=[],S=[];for(let x=0;x<_;x++){const L=x*y-h;for(let P=0;P<v;P++){const U=P*m-f;T.push(U,-L,0),D.push(0,0,1),S.push(P/d),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<d;L++){const P=L+v*x,U=L+v*(x+1),V=L+1+v*(x+1),H=L+1+v*x;b.push(P,U,H),b.push(U,V,H)}this.setIndex(b),this.setAttribute("position",new Kr(T,3)),this.setAttribute("normal",new Kr(D,3)),this.setAttribute("uv",new Kr(S,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Au(n.width,n.height,n.widthSegments,n.heightSegments)}}class AE extends xl{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class wE extends xl{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class CE extends Nx{constructor(n=-1,a=1,s=1,c=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=c,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,c,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-n,h=s+n,d=c+a,p=c-a;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,h=f+v*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class RE extends Si{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n,this.index=0}}function R_(o,n,a,s){const c=NE(s);switch(a){case dx:return o*n;case mx:return o*n;case gx:return o*n*2;case vx:return o*n/c.components*c.byteLength;case Op:return o*n/c.components*c.byteLength;case _x:return o*n*2/c.components*c.byteLength;case zp:return o*n*2/c.components*c.byteLength;case px:return o*n*3/c.components*c.byteLength;case Ui:return o*n*4/c.components*c.byteLength;case Pp:return o*n*4/c.components*c.byteLength;case mu:case gu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case vu:case _u:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case $d:case tp:return Math.max(o,16)*Math.max(n,8)/4;case Jd:case ep:return Math.max(o,8)*Math.max(n,8)/2;case np:case ip:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case ap:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case rp:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case sp:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case op:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case lp:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case cp:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case up:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case fp:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case hp:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case dp:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case pp:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case mp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case gp:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case vp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case _p:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case xu:case xp:case yp:return Math.ceil(o/4)*Math.ceil(n/4)*16;case xx:case Sp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case bp:case Mp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function NE(o){switch(o){case Ma:case ux:return{byteLength:1,components:1};case dl:case fx:case ml:return{byteLength:2,components:1};case Up:case Lp:return{byteLength:2,components:4};case Qr:case Dp:case xa:return{byteLength:4,components:1};case hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ox(){let o=null,n=!1,a=null,s=null;function c(f,h){a(f,h),s=o.requestAnimationFrame(c)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(c),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function DE(o){const n=new WeakMap;function a(d,p){const v=d.array,_=d.usage,m=v.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,v,_),d.onUploadCallback();let b;if(v instanceof Float32Array)b=o.FLOAT;else if(v instanceof Uint16Array)d.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)b=o.SHORT;else if(v instanceof Uint32Array)b=o.UNSIGNED_INT;else if(v instanceof Int32Array)b=o.INT;else if(v instanceof Int8Array)b=o.BYTE;else if(v instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:y,type:b,bytesPerElement:v.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,v){const _=p.array,m=p.updateRanges;if(o.bindBuffer(v,d),m.length===0)o.bufferSubData(v,0,_);else{m.sort((b,T)=>b.start-T.start);let y=0;for(let b=1;b<m.length;b++){const T=m[y],D=m[b];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++y,m[y]=D)}m.length=y+1;for(let b=0,T=m.length;b<T;b++){const D=m[b];o.bufferSubData(v,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=n.get(d);p&&(o.deleteBuffer(p.buffer),n.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=n.get(d);(!_||_.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const v=n.get(d);if(v===void 0)n.set(d,a(d,p));else if(v.version<d.version){if(v.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,d,p),v.version=d.version}}return{get:c,remove:f,update:h}}var UE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LE=`#ifdef USE_ALPHAHASH
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
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BE=`#ifdef USE_AOMAP
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
#endif`,FE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HE=`#ifdef USE_BATCHING
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
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XE=`#ifdef USE_IRIDESCENCE
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
#endif`,qE=`#ifdef USE_BUMPMAP
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
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x1=`#ifdef USE_GRADIENTMAP
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
}`,y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M1=`uniform bool receiveShadow;
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
#endif`,E1=`#ifdef USE_ENVMAP
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
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
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
#endif`,N1=`struct PhysicalMaterial {
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
}`,D1=`
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G1=`#if defined( USE_POINTS_UV )
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
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
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
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eT=`#ifdef USE_NORMALMAP
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
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gT=`float getShadowMask() {
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
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_T=`#ifdef USE_SKINNING
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
#endif`,xT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,ST=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ET=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TT=`#ifdef USE_TRANSMISSION
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
#endif`,AT=`#ifdef USE_TRANSMISSION
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UT=`uniform sampler2D t2D;
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`#include <common>
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
}`,BT=`#if DEPTH_PACKING == 3200
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
}`,FT=`#define DISTANCE
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
}`,HT=`#define DISTANCE
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`uniform float scale;
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
}`,jT=`uniform vec3 diffuse;
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
}`,XT=`#include <common>
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
}`,qT=`uniform vec3 diffuse;
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
}`,YT=`#define LAMBERT
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
}`,WT=`#define LAMBERT
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
}`,ZT=`#define MATCAP
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
}`,KT=`#define MATCAP
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
}`,QT=`#define NORMAL
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
}`,JT=`#define NORMAL
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
}`,$T=`#define PHONG
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
}`,eA=`#define PHONG
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
}`,tA=`#define STANDARD
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
}`,nA=`#define STANDARD
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
}`,iA=`#define TOON
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
}`,aA=`#define TOON
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
}`,rA=`uniform float size;
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
}`,sA=`uniform vec3 diffuse;
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
}`,oA=`#include <common>
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
}`,lA=`uniform vec3 color;
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
}`,cA=`uniform float rotation;
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
}`,uA=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:UE,alphahash_pars_fragment:LE,alphamap_fragment:OE,alphamap_pars_fragment:zE,alphatest_fragment:PE,alphatest_pars_fragment:IE,aomap_fragment:BE,aomap_pars_fragment:FE,batching_pars_vertex:HE,batching_vertex:GE,begin_vertex:VE,beginnormal_vertex:kE,bsdfs:jE,iridescence_fragment:XE,bumpmap_pars_fragment:qE,clipping_planes_fragment:YE,clipping_planes_pars_fragment:WE,clipping_planes_pars_vertex:ZE,clipping_planes_vertex:KE,color_fragment:QE,color_pars_fragment:JE,color_pars_vertex:$E,color_vertex:e1,common:t1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:a1,displacementmap_vertex:r1,emissivemap_fragment:s1,emissivemap_pars_fragment:o1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:u1,envmap_common_pars_fragment:f1,envmap_pars_fragment:h1,envmap_pars_vertex:d1,envmap_physical_pars_fragment:E1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:v1,fog_pars_fragment:_1,gradientmap_pars_fragment:x1,lightmap_pars_fragment:y1,lights_lambert_fragment:S1,lights_lambert_pars_fragment:b1,lights_pars_begin:M1,lights_toon_fragment:T1,lights_toon_pars_fragment:A1,lights_phong_fragment:w1,lights_phong_pars_fragment:C1,lights_physical_fragment:R1,lights_physical_pars_fragment:N1,lights_fragment_begin:D1,lights_fragment_maps:U1,lights_fragment_end:L1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:I1,map_fragment:B1,map_pars_fragment:F1,map_particle_fragment:H1,map_particle_pars_fragment:G1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:k1,morphinstance_vertex:j1,morphcolor_vertex:X1,morphnormal_vertex:q1,morphtarget_pars_vertex:Y1,morphtarget_vertex:W1,normal_fragment_begin:Z1,normal_fragment_maps:K1,normal_pars_fragment:Q1,normal_pars_vertex:J1,normal_vertex:$1,normalmap_pars_fragment:eT,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:nT,clearcoat_pars_fragment:iT,iridescence_pars_fragment:aT,opaque_fragment:rT,packing:sT,premultiplied_alpha_fragment:oT,project_vertex:lT,dithering_fragment:cT,dithering_pars_fragment:uT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:hT,shadowmap_pars_fragment:dT,shadowmap_pars_vertex:pT,shadowmap_vertex:mT,shadowmask_pars_fragment:gT,skinbase_vertex:vT,skinning_pars_vertex:_T,skinning_vertex:xT,skinnormal_vertex:yT,specularmap_fragment:ST,specularmap_pars_fragment:bT,tonemapping_fragment:MT,tonemapping_pars_fragment:ET,transmission_fragment:TT,transmission_pars_fragment:AT,uv_pars_fragment:wT,uv_pars_vertex:CT,uv_vertex:RT,worldpos_vertex:NT,background_vert:DT,background_frag:UT,backgroundCube_vert:LT,backgroundCube_frag:OT,cube_vert:zT,cube_frag:PT,depth_vert:IT,depth_frag:BT,distanceRGBA_vert:FT,distanceRGBA_frag:HT,equirect_vert:GT,equirect_frag:VT,linedashed_vert:kT,linedashed_frag:jT,meshbasic_vert:XT,meshbasic_frag:qT,meshlambert_vert:YT,meshlambert_frag:WT,meshmatcap_vert:ZT,meshmatcap_frag:KT,meshnormal_vert:QT,meshnormal_frag:JT,meshphong_vert:$T,meshphong_frag:eA,meshphysical_vert:tA,meshphysical_frag:nA,meshtoon_vert:iA,meshtoon_frag:aA,points_vert:rA,points_frag:sA,shadow_vert:oA,shadow_frag:lA,sprite_vert:cA,sprite_frag:uA},ze={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},qi={basic:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:kn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:kn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Pt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:kn([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:kn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:kn([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:kn([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:kn([ze.common,ze.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:kn([ze.lights,ze.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};qi.physical={uniforms:kn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const fu={r:0,b:0,g:0},Ir=new Ea,fA=new rn;function hA(o,n,a,s,c,f,h){const d=new Pt(0);let p=f===!0?0:1,v,_,m=null,y=0,b=null;function T(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?a:n).get(U)),U}function D(P){let U=!1;const V=T(P);V===null?x(d,p):V&&V.isColor&&(x(V,1),U=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(P,U){const V=T(U);V&&(V.isCubeTexture||V.mapping===Eu)?(_===void 0&&(_=new Sa(new yl(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:co(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,z,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(_)),Ir.copy(U.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(fA.makeRotationFromEuler(Ir)),_.material.toneMapped=Nt.getTransfer(V.colorSpace)!==Ft,(m!==V||y!==V.version||b!==o.toneMapping)&&(_.material.needsUpdate=!0,m=V,y=V.version,b=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(v===void 0&&(v=new Sa(new Au(2,2),new cr({name:"BackgroundMaterial",uniforms:co(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(v)),v.material.uniforms.t2D.value=V,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.toneMapped=Nt.getTransfer(V.colorSpace)!==Ft,V.matrixAutoUpdate===!0&&V.updateMatrix(),v.material.uniforms.uvTransform.value.copy(V.matrix),(m!==V||y!==V.version||b!==o.toneMapping)&&(v.material.needsUpdate=!0,m=V,y=V.version,b=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null))}function x(P,U){P.getRGB(fu,Rx(o)),s.buffers.color.setClear(fu.r,fu.g,fu.b,U,h)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),p=U,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,x(d,p)},render:D,addToRenderList:S,dispose:L}}function dA(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=y(null);let f=c,h=!1;function d(A,G,se,ie,ue){let W=!1;const F=m(ie,se,G);f!==F&&(f=F,v(f.object)),W=b(A,ie,se,ue),W&&T(A,ie,se,ue),ue!==null&&n.update(ue,o.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,U(A,G,se,ie),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(ue).buffer))}function p(){return o.createVertexArray()}function v(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function m(A,G,se){const ie=se.wireframe===!0;let ue=s[A.id];ue===void 0&&(ue={},s[A.id]=ue);let W=ue[G.id];W===void 0&&(W={},ue[G.id]=W);let F=W[ie];return F===void 0&&(F=y(p()),W[ie]=F),F}function y(A){const G=[],se=[],ie=[];for(let ue=0;ue<a;ue++)G[ue]=0,se[ue]=0,ie[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:se,attributeDivisors:ie,object:A,attributes:{},index:null}}function b(A,G,se,ie){const ue=f.attributes,W=G.attributes;let F=0;const te=se.getAttributes();for(const q in te)if(te[q].location>=0){const fe=ue[q];let Me=W[q];if(Me===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;F++}return f.attributesNum!==F||f.index!==ie}function T(A,G,se,ie){const ue={},W=G.attributes;let F=0;const te=se.getAttributes();for(const q in te)if(te[q].location>=0){let fe=W[q];fe===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor));const Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),ue[q]=Me,F++}f.attributes=ue,f.attributesNum=F,f.index=ie}function D(){const A=f.newAttributes;for(let G=0,se=A.length;G<se;G++)A[G]=0}function S(A){x(A,0)}function x(A,G){const se=f.newAttributes,ie=f.enabledAttributes,ue=f.attributeDivisors;se[A]=1,ie[A]===0&&(o.enableVertexAttribArray(A),ie[A]=1),ue[A]!==G&&(o.vertexAttribDivisor(A,G),ue[A]=G)}function L(){const A=f.newAttributes,G=f.enabledAttributes;for(let se=0,ie=G.length;se<ie;se++)G[se]!==A[se]&&(o.disableVertexAttribArray(se),G[se]=0)}function P(A,G,se,ie,ue,W,F){F===!0?o.vertexAttribIPointer(A,G,se,ue,W):o.vertexAttribPointer(A,G,se,ie,ue,W)}function U(A,G,se,ie){D();const ue=ie.attributes,W=se.getAttributes(),F=G.defaultAttributeValues;for(const te in W){const q=W[te];if(q.location>=0){let ve=ue[te];if(ve===void 0&&(te==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),te==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor)),ve!==void 0){const fe=ve.normalized,Me=ve.itemSize,Te=n.get(ve);if(Te===void 0)continue;const ht=Te.buffer,R=Te.type,Q=Te.bytesPerElement,_e=R===o.INT||R===o.UNSIGNED_INT||ve.gpuType===Dp;if(ve.isInterleavedBufferAttribute){const de=ve.data,we=de.stride,Xe=ve.offset;if(de.isInstancedInterleavedBuffer){for(let Le=0;Le<q.locationSize;Le++)x(q.location+Le,de.meshPerAttribute);A.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Le=0;Le<q.locationSize;Le++)S(q.location+Le);o.bindBuffer(o.ARRAY_BUFFER,ht);for(let Le=0;Le<q.locationSize;Le++)P(q.location+Le,Me/q.locationSize,R,fe,we*Q,(Xe+Me/q.locationSize*Le)*Q,_e)}else{if(ve.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)x(q.location+de,ve.meshPerAttribute);A.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let de=0;de<q.locationSize;de++)S(q.location+de);o.bindBuffer(o.ARRAY_BUFFER,ht);for(let de=0;de<q.locationSize;de++)P(q.location+de,Me/q.locationSize,R,fe,Me*Q,Me/q.locationSize*de*Q,_e)}}else if(F!==void 0){const fe=F[te];if(fe!==void 0)switch(fe.length){case 2:o.vertexAttrib2fv(q.location,fe);break;case 3:o.vertexAttrib3fv(q.location,fe);break;case 4:o.vertexAttrib4fv(q.location,fe);break;default:o.vertexAttrib1fv(q.location,fe)}}}}L()}function V(){I();for(const A in s){const G=s[A];for(const se in G){const ie=G[se];for(const ue in ie)_(ie[ue].object),delete ie[ue];delete G[se]}delete s[A]}}function H(A){if(s[A.id]===void 0)return;const G=s[A.id];for(const se in G){const ie=G[se];for(const ue in ie)_(ie[ue].object),delete ie[ue];delete G[se]}delete s[A.id]}function z(A){for(const G in s){const se=s[G];if(se[A.id]===void 0)continue;const ie=se[A.id];for(const ue in ie)_(ie[ue].object),delete ie[ue];delete se[A.id]}}function I(){C(),h=!0,f!==c&&(f=c,v(f.object))}function C(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:I,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:S,disableUnusedAttributes:L}}function pA(o,n,a){let s;function c(v){s=v}function f(v,_){o.drawArrays(s,v,_),a.update(_,s,1)}function h(v,_,m){m!==0&&(o.drawArraysInstanced(s,v,_,m),a.update(_,s,m))}function d(v,_,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,v,0,_,0,m);let b=0;for(let T=0;T<m;T++)b+=_[T];a.update(b,s,1)}function p(v,_,m,y){if(m===0)return;const b=n.get("WEBGL_multi_draw");if(b===null)for(let T=0;T<v.length;T++)h(v[T],_[T],y[T]);else{b.multiDrawArraysInstancedWEBGL(s,v,0,_,0,y,0,m);let T=0;for(let D=0;D<m;D++)T+=_[D]*y[D];a.update(T,s,1)}}this.setMode=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function mA(o,n,a,s){let c;function f(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const z=n.get("EXT_texture_filter_anisotropic");c=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function h(z){return!(z!==Ui&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const I=z===ml&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(z!==Ma&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==xa&&!I)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=a.precision!==void 0?a.precision:"highp";const _=p(v);_!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",_,"instead."),v=_);const m=a.logarithmicDepthBuffer===!0,y=a.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=T>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:v,logarithmicDepthBuffer:m,reverseDepthBuffer:y,maxTextures:b,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:V,maxSamples:H}}function gA(o){const n=this;let a=null,s=0,c=!1,f=!1;const h=new Gr,d=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const b=m.length!==0||y||s!==0||c;return c=y,s=m.length,b},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,y){a=_(m,y,0)},this.setState=function(m,y,b){const T=m.clippingPlanes,D=m.clipIntersection,S=m.clipShadows,x=o.get(m);if(!c||T===null||T.length===0||f&&!S)f?_(null):v();else{const L=f?0:s,P=L*4;let U=x.clippingState||null;p.value=U,U=_(T,y,P,b);for(let V=0;V!==P;++V)U[V]=a[V];x.clippingState=U,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=L}};function v(){p.value!==a&&(p.value=a,p.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function _(m,y,b,T){const D=m!==null?m.length:0;let S=null;if(D!==0){if(S=p.value,T!==!0||S===null){const x=b+D*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,U=b;P!==D;++P,U+=4)h.copy(m[P]).applyMatrix4(L,d),h.normal.toArray(S,U),S[U+3]=h.constant}p.value=S,p.needsUpdate=!0}return n.numPlanes=D,n.numIntersection=0,S}}function vA(o){let n=new WeakMap;function a(h,d){return d===Wd?h.mapping=ao:d===Zd&&(h.mapping=ro),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wd||d===Zd)if(n.has(h)){const p=n.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new yE(p.height);return v.fromEquirectangularTexture(o,h),n.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=n.get(d);p!==void 0&&(n.delete(d),p.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const eo=4,N_=[.125,.215,.35,.446,.526,.582],qr=20,Dd=new CE,D_=new Pt;let Ud=null,Ld=0,Od=0,zd=!1;const kr=(1+Math.sqrt(5))/2,$s=1/kr,U_=[new ce(-kr,$s,0),new ce(kr,$s,0),new ce(-$s,0,kr),new ce($s,0,kr),new ce(0,kr,-$s),new ce(0,kr,$s),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)],_A=new ce;class L_{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,c=100,f={}){const{size:h=256,position:d=_A}=f;Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(n,s,c,p,d),a>0&&this._blur(p,0,0,a),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Ud,Ld,Od),this._renderer.xr.enabled=zd,n.scissorTest=!1,hu(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===ao||n.mapping===ro?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:ml,format:Ui,colorSpace:lo,depthBuffer:!1},c=O_(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xA(f)),this._blurMaterial=yA(f,n,a)}return c}_compileMaterial(n){const a=new Sa(this._lodPlanes[0],n);this._renderer.compile(a,Dd)}_sceneToCubeUV(n,a,s,c,f){const p=new Si(90,1,a,s),v=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,b=m.toneMapping;m.getClearColor(D_),m.toneMapping=or,m.autoClear=!1;const T=new Ax({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),D=new Sa(new yl,T);let S=!1;const x=n.background;x?x.isColor&&(T.color.copy(x),n.background=null,S=!0):(T.color.copy(D_),S=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,v[L],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+_[L],f.y,f.z)):P===1?(p.up.set(0,0,v[L]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+_[L],f.z)):(p.up.set(0,v[L],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+_[L]));const U=this._cubeSize;hu(c,P*U,L>2?U:0,U,U),m.setRenderTarget(c),S&&m.render(D,p),m.render(n,p)}D.geometry.dispose(),D.material.dispose(),m.toneMapping=b,m.autoClear=y,n.background=x}_textureToCubeUV(n,a){const s=this._renderer,c=n.mapping===ao||n.mapping===ro;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const f=c?this._cubemapMaterial:this._equirectMaterial,h=new Sa(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=n;const p=this._cubeSize;hu(a,0,0,3*p,2*p),s.setRenderTarget(a),s.render(h,Dd)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=U_[(c-f-1)%U_.length];this._blur(n,f-1,f,h,d)}a.autoClear=s}_blur(n,a,s,c,f){const h=this._pingPongRenderTarget;this._halfBlur(n,h,a,s,c,"latitudinal",f),this._halfBlur(h,n,s,s,c,"longitudinal",f)}_halfBlur(n,a,s,c,f,h,d){const p=this._renderer,v=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,m=new Sa(this._lodPlanes[c],v),y=v.uniforms,b=this._sizeLods[s]-1,T=isFinite(f)?Math.PI/(2*b):2*Math.PI/(2*qr-1),D=f/T,S=isFinite(f)?1+Math.floor(_*D):qr;S>qr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qr}`);const x=[];let L=0;for(let z=0;z<qr;++z){const I=z/D,C=Math.exp(-I*I/2);x.push(C),z===0?L+=C:z<S&&(L+=2*C)}for(let z=0;z<x.length;z++)x[z]=x[z]/L;y.envMap.value=n.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=T,y.mipInt.value=P-s;const U=this._sizeLods[c],V=3*U*(c>P-eo?c-P+eo:0),H=4*(this._cubeSize-U);hu(a,V,H,3*U,2*U),p.setRenderTarget(a),p.render(m,Dd)}}function xA(o){const n=[],a=[],s=[];let c=o;const f=o-eo+1+N_.length;for(let h=0;h<f;h++){const d=Math.pow(2,c);a.push(d);let p=1/d;h>o-eo?p=N_[h-o+eo-1]:h===0&&(p=0),s.push(p);const v=1/(d-2),_=-v,m=1+v,y=[_,_,m,_,m,m,_,_,m,m,_,m],b=6,T=6,D=3,S=2,x=1,L=new Float32Array(D*T*b),P=new Float32Array(S*T*b),U=new Float32Array(x*T*b);for(let H=0;H<b;H++){const z=H%3*2/3-1,I=H>2?0:-1,C=[z,I,0,z+2/3,I,0,z+2/3,I+1,0,z,I,0,z+2/3,I+1,0,z,I+1,0];L.set(C,D*T*H),P.set(y,S*T*H);const A=[H,H,H,H,H,H];U.set(A,x*T*H)}const V=new Qn;V.setAttribute("position",new Bn(L,D)),V.setAttribute("uv",new Bn(P,S)),V.setAttribute("faceIndex",new Bn(U,x)),n.push(V),c>eo&&c--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function O_(o,n,a){const s=new Jr(o,n,a);return s.texture.mapping=Eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function hu(o,n,a,s,c){o.viewport.set(n,a,s,c),o.scissor.set(n,a,s,c)}function yA(o,n,a){const s=new Float32Array(qr),c=new ce(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function z_(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function P_(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Bp(){return`

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
	`}function SA(o){let n=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const p=d.mapping,v=p===Wd||p===Zd,_=p===ao||p===ro;if(v||_){let m=n.get(d);const y=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return a===null&&(a=new L_(o)),m=v?a.fromEquirectangular(d,m):a.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const b=d.image;return v&&b&&b.height>0||_&&b&&c(b)?(a===null&&(a=new L_(o)),m=v?a.fromEquirectangular(d):a.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function c(d){let p=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&p++;return p===v}function f(d){const p=d.target;p.removeEventListener("dispose",f);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function bA(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let c;switch(s){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(s)}return n[s]=c,c}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const c=a(s);return c===null&&Hr("THREE.WebGLRenderer: "+s+" extension not supported."),c}}}function MA(o,n,a,s){const c={},f=new WeakMap;function h(m){const y=m.target;y.index!==null&&n.remove(y.index);for(const T in y.attributes)n.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete c[y.id];const b=f.get(y);b&&(n.remove(b),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function d(m,y){return c[y.id]===!0||(y.addEventListener("dispose",h),c[y.id]=!0,a.memory.geometries++),y}function p(m){const y=m.attributes;for(const b in y)n.update(y[b],o.ARRAY_BUFFER)}function v(m){const y=[],b=m.index,T=m.attributes.position;let D=0;if(b!==null){const L=b.array;D=b.version;for(let P=0,U=L.length;P<U;P+=3){const V=L[P+0],H=L[P+1],z=L[P+2];y.push(V,H,H,z,z,V)}}else if(T!==void 0){const L=T.array;D=T.version;for(let P=0,U=L.length/3-1;P<U;P+=3){const V=P+0,H=P+1,z=P+2;y.push(V,H,H,z,z,V)}}else return;const S=new(Sx(y)?Cx:wx)(y,1);S.version=D;const x=f.get(m);x&&n.remove(x),f.set(m,S)}function _(m){const y=f.get(m);if(y){const b=m.index;b!==null&&y.version<b.version&&v(m)}else v(m);return f.get(m)}return{get:d,update:p,getWireframeAttribute:_}}function EA(o,n,a){let s;function c(y){s=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function p(y,b){o.drawElements(s,b,f,y*h),a.update(b,s,1)}function v(y,b,T){T!==0&&(o.drawElementsInstanced(s,b,f,y*h,T),a.update(b,s,T))}function _(y,b,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,f,y,0,T);let S=0;for(let x=0;x<T;x++)S+=b[x];a.update(S,s,1)}function m(y,b,T,D){if(T===0)return;const S=n.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)v(y[x]/h,b[x],D[x]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,f,y,0,D,0,T);let x=0;for(let L=0;L<T;L++)x+=b[L]*D[L];a.update(x,s,1)}}this.setMode=c,this.setIndex=d,this.render=p,this.renderInstances=v,this.renderMultiDraw=_,this.renderMultiDrawInstances=m}function TA(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function c(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:c,update:s}}function AA(o,n,a){const s=new WeakMap,c=new an;function f(h,d,p){const v=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==m){let A=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var b=A;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),D===!0&&(U=2),S===!0&&(U=3);let V=d.attributes.position.count*U,H=1;V>n.maxTextureSize&&(H=Math.ceil(V/n.maxTextureSize),V=n.maxTextureSize);const z=new Float32Array(V*H*4*m),I=new bx(z,V,H,m);I.type=xa,I.needsUpdate=!0;const C=U*4;for(let G=0;G<m;G++){const se=x[G],ie=L[G],ue=P[G],W=V*H*4*G;for(let F=0;F<se.count;F++){const te=F*C;T===!0&&(c.fromBufferAttribute(se,F),z[W+te+0]=c.x,z[W+te+1]=c.y,z[W+te+2]=c.z,z[W+te+3]=0),D===!0&&(c.fromBufferAttribute(ie,F),z[W+te+4]=c.x,z[W+te+5]=c.y,z[W+te+6]=c.z,z[W+te+7]=0),S===!0&&(c.fromBufferAttribute(ue,F),z[W+te+8]=c.x,z[W+te+9]=c.y,z[W+te+10]=c.z,z[W+te+11]=ue.itemSize===4?c.w:1)}}y={count:m,texture:I,size:new kt(V,H)},s.set(d,y),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let T=0;for(let S=0;S<v.length;S++)T+=v[S];const D=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",D),p.getUniforms().setValue(o,"morphTargetInfluences",v)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,a),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function wA(o,n,a,s){let c=new WeakMap;function f(p){const v=s.render.frame,_=p.geometry,m=n.get(p,_);if(c.get(m)!==v&&(n.update(m),c.set(m,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),c.get(p)!==v&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return m}function h(){c=new WeakMap}function d(p){const v=p.target;v.removeEventListener("dispose",d),a.remove(v.instanceMatrix),v.instanceColor!==null&&a.remove(v.instanceColor)}return{update:f,dispose:h}}const zx=new jn,I_=new Lx(1,1),Px=new bx,Ix=new iE,Bx=new Dx,B_=[],F_=[],H_=new Float32Array(16),G_=new Float32Array(9),V_=new Float32Array(4);function fo(o,n,a){const s=o[0];if(s<=0||s>0)return o;const c=n*a;let f=B_[c];if(f===void 0&&(f=new Float32Array(c),B_[c]=f),n!==0){s.toArray(f,0);for(let h=1,d=0;h!==n;++h)d+=a,o[h].toArray(f,d)}return f}function mn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function gn(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function wu(o,n){let a=F_[n];a===void 0&&(a=new Int32Array(n),F_[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function CA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function RA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2fv(this.addr,n),gn(a,n)}}function NA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(mn(a,n))return;o.uniform3fv(this.addr,n),gn(a,n)}}function DA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4fv(this.addr,n),gn(a,n)}}function UA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;V_.set(s),o.uniformMatrix2fv(this.addr,!1,V_),gn(a,s)}}function LA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;G_.set(s),o.uniformMatrix3fv(this.addr,!1,G_),gn(a,s)}}function OA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(mn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),gn(a,n)}else{if(mn(a,s))return;H_.set(s),o.uniformMatrix4fv(this.addr,!1,H_),gn(a,s)}}function zA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function PA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2iv(this.addr,n),gn(a,n)}}function IA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(mn(a,n))return;o.uniform3iv(this.addr,n),gn(a,n)}}function BA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4iv(this.addr,n),gn(a,n)}}function FA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function HA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(mn(a,n))return;o.uniform2uiv(this.addr,n),gn(a,n)}}function GA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(mn(a,n))return;o.uniform3uiv(this.addr,n),gn(a,n)}}function VA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(mn(a,n))return;o.uniform4uiv(this.addr,n),gn(a,n)}}function kA(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(I_.compareFunction=yx,f=I_):f=zx,a.setTexture2D(n||f,c)}function jA(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture3D(n||Ix,c)}function XA(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTextureCube(n||Bx,c)}function qA(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture2DArray(n||Px,c)}function YA(o){switch(o){case 5126:return CA;case 35664:return RA;case 35665:return NA;case 35666:return DA;case 35674:return UA;case 35675:return LA;case 35676:return OA;case 5124:case 35670:return zA;case 35667:case 35671:return PA;case 35668:case 35672:return IA;case 35669:case 35673:return BA;case 5125:return FA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return qA}}function WA(o,n){o.uniform1fv(this.addr,n)}function ZA(o,n){const a=fo(n,this.size,2);o.uniform2fv(this.addr,a)}function KA(o,n){const a=fo(n,this.size,3);o.uniform3fv(this.addr,a)}function QA(o,n){const a=fo(n,this.size,4);o.uniform4fv(this.addr,a)}function JA(o,n){const a=fo(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function $A(o,n){const a=fo(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function ew(o,n){const a=fo(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function tw(o,n){o.uniform1iv(this.addr,n)}function nw(o,n){o.uniform2iv(this.addr,n)}function iw(o,n){o.uniform3iv(this.addr,n)}function aw(o,n){o.uniform4iv(this.addr,n)}function rw(o,n){o.uniform1uiv(this.addr,n)}function sw(o,n){o.uniform2uiv(this.addr,n)}function ow(o,n){o.uniform3uiv(this.addr,n)}function lw(o,n){o.uniform4uiv(this.addr,n)}function cw(o,n,a){const s=this.cache,c=n.length,f=wu(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let h=0;h!==c;++h)a.setTexture2D(n[h]||zx,f[h])}function uw(o,n,a){const s=this.cache,c=n.length,f=wu(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let h=0;h!==c;++h)a.setTexture3D(n[h]||Ix,f[h])}function fw(o,n,a){const s=this.cache,c=n.length,f=wu(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let h=0;h!==c;++h)a.setTextureCube(n[h]||Bx,f[h])}function hw(o,n,a){const s=this.cache,c=n.length,f=wu(a,c);mn(s,f)||(o.uniform1iv(this.addr,f),gn(s,f));for(let h=0;h!==c;++h)a.setTexture2DArray(n[h]||Px,f[h])}function dw(o){switch(o){case 5126:return WA;case 35664:return ZA;case 35665:return KA;case 35666:return QA;case 35674:return JA;case 35675:return $A;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return aw;case 5125:return rw;case 36294:return sw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return hw}}class pw{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=YA(a.type)}}class mw{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=dw(a.type)}}class gw{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const c=this.seq;for(let f=0,h=c.length;f!==h;++f){const d=c[f];d.setValue(n,a[d.id],s)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function k_(o,n){o.seq.push(n),o.map[n.id]=n}function vw(o,n,a){const s=o.name,c=s.length;for(Pd.lastIndex=0;;){const f=Pd.exec(s),h=Pd.lastIndex;let d=f[1];const p=f[2]==="]",v=f[3];if(p&&(d=d|0),v===void 0||v==="["&&h+2===c){k_(a,v===void 0?new pw(d,o,n):new mw(d,o,n));break}else{let m=a.map[d];m===void 0&&(m=new gw(d),k_(a,m)),a=m}}}class yu{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const f=n.getActiveUniform(a,c),h=n.getUniformLocation(a,f.name);vw(f,h,this)}}setValue(n,a,s,c){const f=this.map[a];f!==void 0&&f.setValue(n,s,c)}setOptional(n,a,s){const c=a[s];c!==void 0&&this.setValue(n,s,c)}static upload(n,a,s,c){for(let f=0,h=a.length;f!==h;++f){const d=a[f],p=s[d.id];p.needsUpdate!==!1&&d.setValue(n,p.value,c)}}static seqWithValue(n,a){const s=[];for(let c=0,f=n.length;c!==f;++c){const h=n[c];h.id in a&&s.push(h)}return s}}function j_(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const _w=37297;let xw=0;function yw(o,n){const a=o.split(`
`),s=[],c=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let h=c;h<f;h++){const d=h+1;s.push(`${d===n?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const X_=new ft;function Sw(o){Nt._getMatrix(X_,Nt.workingColorSpace,o);const n=`mat3( ${X_.elements.map(a=>a.toFixed(4))} )`;switch(Nt.getTransfer(o)){case Su:return[n,"LinearTransferOETF"];case Ft:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function q_(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),c=o.getShaderInfoLog(n).trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return a.toUpperCase()+`

`+c+`

`+yw(o.getShaderSource(n),h)}else return c}function bw(o,n){const a=Sw(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function Mw(o,n){let a;switch(n){case CM:a="Linear";break;case RM:a="Reinhard";break;case NM:a="Cineon";break;case DM:a="ACESFilmic";break;case LM:a="AgX";break;case OM:a="Neutral";break;case UM:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const du=new ce;function Ew(){Nt.getLuminanceCoefficients(du);const o=du.x.toFixed(4),n=du.y.toFixed(4),a=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function Aw(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function ww(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(n,c),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(n,h),locationSize:d}}return a}function hl(o){return o!==""}function Y_(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function W_(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(o){return o.replace(Cw,Nw)}const Rw=new Map;function Nw(o,n){let a=dt[n];if(a===void 0){const s=Rw.get(n);if(s!==void 0)a=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return Ap(a)}const Dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(o){return o.replace(Dw,Uw)}function Uw(o,n,a,s){let c="";for(let f=parseInt(n);f<parseInt(a);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function K_(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Lw(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ox?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===oM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===va&&(n="SHADOWMAP_TYPE_VSM"),n}function Ow(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ao:case ro:n="ENVMAP_TYPE_CUBE";break;case Eu:n="ENVMAP_TYPE_CUBE_UV";break}return n}function zw(o){let n="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ro:n="ENVMAP_MODE_REFRACTION";break}return n}function Pw(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case lx:n="ENVMAP_BLENDING_MULTIPLY";break;case AM:n="ENVMAP_BLENDING_MIX";break;case wM:n="ENVMAP_BLENDING_ADD";break}return n}function Iw(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function Bw(o,n,a,s){const c=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const p=Lw(a),v=Ow(a),_=zw(a),m=Pw(a),y=Iw(a),b=Tw(a),T=Aw(f),D=c.createProgram();let S,x,L=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T].filter(hl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T].filter(hl).join(`
`),x.length>0&&(x+=`
`)):(S=[K_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),x=[K_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.envMap?"#define "+_:"",a.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==or?"#define TONE_MAPPING":"",a.toneMapping!==or?dt.tonemapping_pars_fragment:"",a.toneMapping!==or?Mw("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,bw("linearToOutputTexel",a.outputColorSpace),Ew(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(hl).join(`
`)),h=Ap(h),h=Y_(h,a),h=W_(h,a),d=Ap(d),d=Y_(d,a),d=W_(d,a),h=Z_(h),d=Z_(d),a.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",a.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+S+h,U=L+x+d,V=j_(c,c.VERTEX_SHADER,P),H=j_(c,c.FRAGMENT_SHADER,U);c.attachShader(D,V),c.attachShader(D,H),a.index0AttributeName!==void 0?c.bindAttribLocation(D,0,a.index0AttributeName):a.morphTargets===!0&&c.bindAttribLocation(D,0,"position"),c.linkProgram(D);function z(G){if(o.debug.checkShaderErrors){const se=c.getProgramInfoLog(D).trim(),ie=c.getShaderInfoLog(V).trim(),ue=c.getShaderInfoLog(H).trim();let W=!0,F=!0;if(c.getProgramParameter(D,c.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,D,V,H);else{const te=q_(c,V,"vertex"),q=q_(c,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(D,c.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+se+`
`+te+`
`+q)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ie===""||ue==="")&&(F=!1);F&&(G.diagnostics={runnable:W,programLog:se,vertexShader:{log:ie,prefix:S},fragmentShader:{log:ue,prefix:x}})}c.deleteShader(V),c.deleteShader(H),I=new yu(c,D),C=ww(c,D)}let I;this.getUniforms=function(){return I===void 0&&z(this),I};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let A=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=c.getProgramParameter(D,_w)),A},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(D),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=xw++,this.cacheKey=n,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=H,this}let Fw=0;class Hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,c=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(n);return h.has(c)===!1&&(h.add(c),c.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new Gw(n),a.set(n,s)),s}}class Gw{constructor(n){this.id=Fw++,this.code=n,this.usedTimes=0}}function Vw(o,n,a,s,c,f,h){const d=new Ex,p=new Hw,v=new Set,_=[],m=c.logarithmicDepthBuffer,y=c.vertexTextures;let b=c.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(C){return v.add(C),C===0?"uv":`uv${C}`}function S(C,A,G,se,ie){const ue=se.fog,W=ie.geometry,F=C.isMeshStandardMaterial?se.environment:null,te=(C.isMeshStandardMaterial?a:n).get(C.envMap||F),q=te&&te.mapping===Eu?te.image.height:null,ve=T[C.type];C.precision!==null&&(b=c.getMaxPrecision(C.precision),b!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",b,"instead."));const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Me=fe!==void 0?fe.length:0;let Te=0;W.morphAttributes.position!==void 0&&(Te=1),W.morphAttributes.normal!==void 0&&(Te=2),W.morphAttributes.color!==void 0&&(Te=3);let ht,R,Q,_e;if(ve){const Et=qi[ve];ht=Et.vertexShader,R=Et.fragmentShader}else ht=C.vertexShader,R=C.fragmentShader,p.update(C),Q=p.getVertexShaderID(C),_e=p.getFragmentShaderID(C);const de=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),Xe=ie.isInstancedMesh===!0,Le=ie.isBatchedMesh===!0,Re=!!C.map,Ge=!!C.matcap,st=!!te,j=!!C.aoMap,hn=!!C.lightMap,rt=!!C.bumpMap,Je=!!C.normalMap,Ne=!!C.displacementMap,yt=!!C.emissiveMap,Ye=!!C.metalnessMap,O=!!C.roughnessMap,w=C.anisotropy>0,ae=C.clearcoat>0,xe=C.dispersion>0,Se=C.iridescence>0,ge=C.sheen>0,We=C.transmission>0,Pe=w&&!!C.anisotropyMap,Fe=ae&&!!C.clearcoatMap,gt=ae&&!!C.clearcoatNormalMap,Ee=ae&&!!C.clearcoatRoughnessMap,je=Se&&!!C.iridescenceMap,et=Se&&!!C.iridescenceThicknessMap,nt=ge&&!!C.sheenColorMap,ke=ge&&!!C.sheenRoughnessMap,mt=!!C.specularMap,lt=!!C.specularColorMap,It=!!C.specularIntensityMap,X=We&&!!C.transmissionMap,Ie=We&&!!C.thicknessMap,he=!!C.gradientMap,ye=!!C.alphaMap,Be=C.alphaTest>0,He=!!C.alphaHash,ot=!!C.extensions;let Zt=or;C.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Zt=o.toneMapping);const vn={shaderID:ve,shaderType:C.type,shaderName:C.name,vertexShader:ht,fragmentShader:R,defines:C.defines,customVertexShaderID:Q,customFragmentShaderID:_e,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:b,batching:Le,batchingColor:Le&&ie._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ie.instanceColor!==null,instancingMorph:Xe&&ie.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:lo,alphaToCoverage:!!C.alphaToCoverage,map:Re,matcap:Ge,envMap:st,envMapMode:st&&te.mapping,envMapCubeUVHeight:q,aoMap:j,lightMap:hn,bumpMap:rt,normalMap:Je,displacementMap:y&&Ne,emissiveMap:yt,normalMapObjectSpace:Je&&C.normalMapType===FM,normalMapTangentSpace:Je&&C.normalMapType===BM,metalnessMap:Ye,roughnessMap:O,anisotropy:w,anisotropyMap:Pe,clearcoat:ae,clearcoatMap:Fe,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ee,dispersion:xe,iridescence:Se,iridescenceMap:je,iridescenceThicknessMap:et,sheen:ge,sheenColorMap:nt,sheenRoughnessMap:ke,specularMap:mt,specularColorMap:lt,specularIntensityMap:It,transmission:We,transmissionMap:X,thicknessMap:Ie,gradientMap:he,opaque:C.transparent===!1&&C.blending===Zr&&C.alphaToCoverage===!1,alphaMap:ye,alphaTest:Be,alphaHash:He,combine:C.combine,mapUv:Re&&D(C.map.channel),aoMapUv:j&&D(C.aoMap.channel),lightMapUv:hn&&D(C.lightMap.channel),bumpMapUv:rt&&D(C.bumpMap.channel),normalMapUv:Je&&D(C.normalMap.channel),displacementMapUv:Ne&&D(C.displacementMap.channel),emissiveMapUv:yt&&D(C.emissiveMap.channel),metalnessMapUv:Ye&&D(C.metalnessMap.channel),roughnessMapUv:O&&D(C.roughnessMap.channel),anisotropyMapUv:Pe&&D(C.anisotropyMap.channel),clearcoatMapUv:Fe&&D(C.clearcoatMap.channel),clearcoatNormalMapUv:gt&&D(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&D(C.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&D(C.iridescenceMap.channel),iridescenceThicknessMapUv:et&&D(C.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&D(C.sheenColorMap.channel),sheenRoughnessMapUv:ke&&D(C.sheenRoughnessMap.channel),specularMapUv:mt&&D(C.specularMap.channel),specularColorMapUv:lt&&D(C.specularColorMap.channel),specularIntensityMapUv:It&&D(C.specularIntensityMap.channel),transmissionMapUv:X&&D(C.transmissionMap.channel),thicknessMapUv:Ie&&D(C.thicknessMap.channel),alphaMapUv:ye&&D(C.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Je||w),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!W.attributes.uv&&(Re||ye),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:we,skinning:ie.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Re&&C.map.isVideoTexture===!0&&Nt.getTransfer(C.map.colorSpace)===Ft,decodeVideoTextureEmissive:yt&&C.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(C.emissiveMap.colorSpace)===Ft,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===_a,flipSided:C.side===Jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ot&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&C.extensions.multiDraw===!0||Le)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return vn.vertexUv1s=v.has(1),vn.vertexUv2s=v.has(2),vn.vertexUv3s=v.has(3),v.clear(),vn}function x(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)A.push(G),A.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(L(A,C),P(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function L(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function P(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const A=T[C.type];let G;if(A){const se=qi[A];G=gE.clone(se.uniforms)}else G=C.uniforms;return G}function V(C,A){let G;for(let se=0,ie=_.length;se<ie;se++){const ue=_[se];if(ue.cacheKey===A){G=ue,++G.usedTimes;break}}return G===void 0&&(G=new Bw(o,A,C,f),_.push(G)),G}function H(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function z(C){p.remove(C)}function I(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:U,acquireProgram:V,releaseProgram:H,releaseShaderCache:z,programs:_,dispose:I}}function kw(){let o=new WeakMap;function n(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function c(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:c,dispose:f}}function jw(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function Q_(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function J_(){const o=[];let n=0;const a=[],s=[],c=[];function f(){n=0,a.length=0,s.length=0,c.length=0}function h(m,y,b,T,D,S){let x=o[n];return x===void 0?(x={id:m.id,object:m,geometry:y,material:b,groupOrder:T,renderOrder:m.renderOrder,z:D,group:S},o[n]=x):(x.id=m.id,x.object=m,x.geometry=y,x.material=b,x.groupOrder=T,x.renderOrder=m.renderOrder,x.z=D,x.group=S),n++,x}function d(m,y,b,T,D,S){const x=h(m,y,b,T,D,S);b.transmission>0?s.push(x):b.transparent===!0?c.push(x):a.push(x)}function p(m,y,b,T,D,S){const x=h(m,y,b,T,D,S);b.transmission>0?s.unshift(x):b.transparent===!0?c.unshift(x):a.unshift(x)}function v(m,y){a.length>1&&a.sort(m||jw),s.length>1&&s.sort(y||Q_),c.length>1&&c.sort(y||Q_)}function _(){for(let m=n,y=o.length;m<y;m++){const b=o[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:a,transmissive:s,transparent:c,init:f,push:d,unshift:p,finish:_,sort:v}}function Xw(){let o=new WeakMap;function n(s,c){const f=o.get(s);let h;return f===void 0?(h=new J_,o.set(s,[h])):c>=f.length?(h=new J_,f.push(h)):h=f[c],h}function a(){o=new WeakMap}return{get:n,dispose:a}}function qw(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new ce,color:new Pt};break;case"SpotLight":a={position:new ce,direction:new ce,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ce,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ce,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":a={color:new Pt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return o[n.id]=a,a}}}function Yw(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let Ww=0;function Zw(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function Kw(o){const n=new qw,a=Yw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)s.probe.push(new ce);const c=new ce,f=new rn,h=new rn;function d(v){let _=0,m=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let b=0,T=0,D=0,S=0,x=0,L=0,P=0,U=0,V=0,H=0,z=0;v.sort(Zw);for(let C=0,A=v.length;C<A;C++){const G=v[C],se=G.color,ie=G.intensity,ue=G.distance,W=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=se.r*ie,m+=se.g*ie,y+=se.b*ie;else if(G.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(G.sh.coefficients[F],ie);z++}else if(G.isDirectionalLight){const F=n.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const te=G.shadow,q=a.get(G);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,s.directionalShadow[b]=q,s.directionalShadowMap[b]=W,s.directionalShadowMatrix[b]=G.shadow.matrix,L++}s.directional[b]=F,b++}else if(G.isSpotLight){const F=n.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(se).multiplyScalar(ie),F.distance=ue,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,s.spot[D]=F;const te=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,te.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[D]=te.matrix,G.castShadow){const q=a.get(G);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,s.spotShadow[D]=q,s.spotShadowMap[D]=W,U++}D++}else if(G.isRectAreaLight){const F=n.get(G);F.color.copy(se).multiplyScalar(ie),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=F,S++}else if(G.isPointLight){const F=n.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const te=G.shadow,q=a.get(G);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,s.pointShadow[T]=q,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=G.shadow.matrix,P++}s.point[T]=F,T++}else if(G.isHemisphereLight){const F=n.get(G);F.skyColor.copy(G.color).multiplyScalar(ie),F.groundColor.copy(G.groundColor).multiplyScalar(ie),s.hemi[x]=F,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=m,s.ambient[2]=y;const I=s.hash;(I.directionalLength!==b||I.pointLength!==T||I.spotLength!==D||I.rectAreaLength!==S||I.hemiLength!==x||I.numDirectionalShadows!==L||I.numPointShadows!==P||I.numSpotShadows!==U||I.numSpotMaps!==V||I.numLightProbes!==z)&&(s.directional.length=b,s.spot.length=D,s.rectArea.length=S,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+V-H,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,I.directionalLength=b,I.pointLength=T,I.spotLength=D,I.rectAreaLength=S,I.hemiLength=x,I.numDirectionalShadows=L,I.numPointShadows=P,I.numSpotShadows=U,I.numSpotMaps=V,I.numLightProbes=z,s.version=Ww++)}function p(v,_){let m=0,y=0,b=0,T=0,D=0;const S=_.matrixWorldInverse;for(let x=0,L=v.length;x<L;x++){const P=v[x];if(P.isDirectionalLight){const U=s.directional[m];U.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(S),m++}else if(P.isSpotLight){const U=s.spot[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(S),b++}else if(P.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),h.identity(),f.copy(P.matrixWorld),f.premultiply(S),h.extractRotation(f),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(P.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),y++}else if(P.isHemisphereLight){const U=s.hemi[D];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),D++}}}return{setup:d,setupView:p,state:s}}function $_(o){const n=new Kw(o),a=[],s=[];function c(_){v.camera=_,a.length=0,s.length=0}function f(_){a.push(_)}function h(_){s.push(_)}function d(){n.setup(a)}function p(_){n.setupView(a,_)}const v={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:v,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function Qw(o){let n=new WeakMap;function a(c,f=0){const h=n.get(c);let d;return h===void 0?(d=new $_(o),n.set(c,[d])):f>=h.length?(d=new $_(o),h.push(d)):d=h[f],d}function s(){n=new WeakMap}return{get:a,dispose:s}}const Jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
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
}`;function e2(o,n,a){let s=new Ux;const c=new kt,f=new kt,h=new an,d=new AE({depthPacking:IM}),p=new wE,v={},_=a.maxTextureSize,m={[lr]:Jn,[Jn]:lr,[_a]:_a},y=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Jw,fragmentShader:$w}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const T=new Qn;T.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Sa(T,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ox;let x=this.type;this.render=function(H,z,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),se=o.state;se.setBlending(sr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ie=x!==va&&this.type===va,ue=x===va&&this.type!==va;for(let W=0,F=H.length;W<F;W++){const te=H[W],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;c.copy(q.mapSize);const ve=q.getFrameExtents();if(c.multiply(ve),f.copy(q.mapSize),(c.x>_||c.y>_)&&(c.x>_&&(f.x=Math.floor(_/ve.x),c.x=f.x*ve.x,q.mapSize.x=f.x),c.y>_&&(f.y=Math.floor(_/ve.y),c.y=f.y*ve.y,q.mapSize.y=f.y)),q.map===null||ie===!0||ue===!0){const Me=this.type!==va?{minFilter:Li,magFilter:Li}:{};q.map!==null&&q.map.dispose(),q.map=new Jr(c.x,c.y,Me),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const fe=q.getViewportCount();for(let Me=0;Me<fe;Me++){const Te=q.getViewport(Me);h.set(f.x*Te.x,f.y*Te.y,f.x*Te.z,f.y*Te.w),se.viewport(h),q.updateMatrices(te,Me),s=q.getFrustum(),U(z,I,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===va&&L(q,I),q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(C,A,G)};function L(H,z){const I=n.update(D);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Jr(c.x,c.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(z,null,I,y,D,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(z,null,I,b,D,null)}function P(H,z,I,C){let A=null;const G=I.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)A=G;else if(A=I.isPointLight===!0?p:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const se=A.uuid,ie=z.uuid;let ue=v[se];ue===void 0&&(ue={},v[se]=ue);let W=ue[ie];W===void 0&&(W=A.clone(),ue[ie]=W,z.addEventListener("dispose",V)),A=W}if(A.visible=z.visible,A.wireframe=z.wireframe,C===va?A.side=z.shadowSide!==null?z.shadowSide:z.side:A.side=z.shadowSide!==null?z.shadowSide:m[z.side],A.alphaMap=z.alphaMap,A.alphaTest=z.alphaTest,A.map=z.map,A.clipShadows=z.clipShadows,A.clippingPlanes=z.clippingPlanes,A.clipIntersection=z.clipIntersection,A.displacementMap=z.displacementMap,A.displacementScale=z.displacementScale,A.displacementBias=z.displacementBias,A.wireframeLinewidth=z.wireframeLinewidth,A.linewidth=z.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const se=o.properties.get(A);se.light=I}return A}function U(H,z,I,C,A){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===va)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,H.matrixWorld);const ie=n.update(H),ue=H.material;if(Array.isArray(ue)){const W=ie.groups;for(let F=0,te=W.length;F<te;F++){const q=W[F],ve=ue[q.materialIndex];if(ve&&ve.visible){const fe=P(H,ve,C,A);H.onBeforeShadow(o,H,z,I,ie,fe,q),o.renderBufferDirect(I,null,ie,fe,H,q),H.onAfterShadow(o,H,z,I,ie,fe,q)}}}else if(ue.visible){const W=P(H,ue,C,A);H.onBeforeShadow(o,H,z,I,ie,W,null),o.renderBufferDirect(I,null,ie,W,H,null),H.onAfterShadow(o,H,z,I,ie,W,null)}}const se=H.children;for(let ie=0,ue=se.length;ie<ue;ie++)U(se[ie],z,I,C,A)}function V(H){H.target.removeEventListener("dispose",V);for(const I in v){const C=v[I],A=H.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const t2={[Gd]:Vd,[kd]:qd,[jd]:Yd,[io]:Xd,[Vd]:Gd,[qd]:kd,[Yd]:jd,[Xd]:io};function n2(o,n){function a(){let X=!1;const Ie=new an;let he=null;const ye=new an(0,0,0,0);return{setMask:function(Be){he!==Be&&!X&&(o.colorMask(Be,Be,Be,Be),he=Be)},setLocked:function(Be){X=Be},setClear:function(Be,He,ot,Zt,vn){vn===!0&&(Be*=Zt,He*=Zt,ot*=Zt),Ie.set(Be,He,ot,Zt),ye.equals(Ie)===!1&&(o.clearColor(Be,He,ot,Zt),ye.copy(Ie))},reset:function(){X=!1,he=null,ye.set(-1,0,0,0)}}}function s(){let X=!1,Ie=!1,he=null,ye=null,Be=null;return{setReversed:function(He){if(Ie!==He){const ot=n.get("EXT_clip_control");Ie?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Zt=Be;Be=null,this.setClear(Zt)}Ie=He},getReversed:function(){return Ie},setTest:function(He){He?de(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(He){he!==He&&!X&&(o.depthMask(He),he=He)},setFunc:function(He){if(Ie&&(He=t2[He]),ye!==He){switch(He){case Gd:o.depthFunc(o.NEVER);break;case Vd:o.depthFunc(o.ALWAYS);break;case kd:o.depthFunc(o.LESS);break;case io:o.depthFunc(o.LEQUAL);break;case jd:o.depthFunc(o.EQUAL);break;case Xd:o.depthFunc(o.GEQUAL);break;case qd:o.depthFunc(o.GREATER);break;case Yd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ye=He}},setLocked:function(He){X=He},setClear:function(He){Be!==He&&(Ie&&(He=1-He),o.clearDepth(He),Be=He)},reset:function(){X=!1,he=null,ye=null,Be=null,Ie=!1}}}function c(){let X=!1,Ie=null,he=null,ye=null,Be=null,He=null,ot=null,Zt=null,vn=null;return{setTest:function(Et){X||(Et?de(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(Et){Ie!==Et&&!X&&(o.stencilMask(Et),Ie=Et)},setFunc:function(Et,Yt,_n){(he!==Et||ye!==Yt||Be!==_n)&&(o.stencilFunc(Et,Yt,_n),he=Et,ye=Yt,Be=_n)},setOp:function(Et,Yt,_n){(He!==Et||ot!==Yt||Zt!==_n)&&(o.stencilOp(Et,Yt,_n),He=Et,ot=Yt,Zt=_n)},setLocked:function(Et){X=Et},setClear:function(Et){vn!==Et&&(o.clearStencil(Et),vn=Et)},reset:function(){X=!1,Ie=null,he=null,ye=null,Be=null,He=null,ot=null,Zt=null,vn=null}}}const f=new a,h=new s,d=new c,p=new WeakMap,v=new WeakMap;let _={},m={},y=new WeakMap,b=[],T=null,D=!1,S=null,x=null,L=null,P=null,U=null,V=null,H=null,z=new Pt(0,0,0),I=0,C=!1,A=null,G=null,se=null,ie=null,ue=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,te=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=te>=2);let ve=null,fe={};const Me=o.getParameter(o.SCISSOR_BOX),Te=o.getParameter(o.VIEWPORT),ht=new an().fromArray(Me),R=new an().fromArray(Te);function Q(X,Ie,he,ye){const Be=new Uint8Array(4),He=o.createTexture();o.bindTexture(X,He),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ot=0;ot<he;ot++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ie,0,o.RGBA,1,1,ye,0,o.RGBA,o.UNSIGNED_BYTE,Be):o.texImage2D(Ie+ot,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Be);return He}const _e={};_e[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),_e[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),_e[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),de(o.DEPTH_TEST),h.setFunc(io),rt(!1),Je(a_),de(o.CULL_FACE),j(sr);function de(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function we(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Xe(X,Ie){return m[X]!==Ie?(o.bindFramebuffer(X,Ie),m[X]=Ie,X===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ie),X===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Le(X,Ie){let he=b,ye=!1;if(X){he=y.get(Ie),he===void 0&&(he=[],y.set(Ie,he));const Be=X.textures;if(he.length!==Be.length||he[0]!==o.COLOR_ATTACHMENT0){for(let He=0,ot=Be.length;He<ot;He++)he[He]=o.COLOR_ATTACHMENT0+He;he.length=Be.length,ye=!0}}else he[0]!==o.BACK&&(he[0]=o.BACK,ye=!0);ye&&o.drawBuffers(he)}function Re(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const Ge={[Xr]:o.FUNC_ADD,[cM]:o.FUNC_SUBTRACT,[uM]:o.FUNC_REVERSE_SUBTRACT};Ge[fM]=o.MIN,Ge[hM]=o.MAX;const st={[dM]:o.ZERO,[pM]:o.ONE,[mM]:o.SRC_COLOR,[Fd]:o.SRC_ALPHA,[SM]:o.SRC_ALPHA_SATURATE,[xM]:o.DST_COLOR,[vM]:o.DST_ALPHA,[gM]:o.ONE_MINUS_SRC_COLOR,[Hd]:o.ONE_MINUS_SRC_ALPHA,[yM]:o.ONE_MINUS_DST_COLOR,[_M]:o.ONE_MINUS_DST_ALPHA,[bM]:o.CONSTANT_COLOR,[MM]:o.ONE_MINUS_CONSTANT_COLOR,[EM]:o.CONSTANT_ALPHA,[TM]:o.ONE_MINUS_CONSTANT_ALPHA};function j(X,Ie,he,ye,Be,He,ot,Zt,vn,Et){if(X===sr){D===!0&&(we(o.BLEND),D=!1);return}if(D===!1&&(de(o.BLEND),D=!0),X!==lM){if(X!==S||Et!==C){if((x!==Xr||U!==Xr)&&(o.blendEquation(o.FUNC_ADD),x=Xr,U=Xr),Et)switch(X){case Zr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jr:o.blendFunc(o.ONE,o.ONE);break;case r_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case s_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Zr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jr:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case r_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case s_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,P=null,V=null,H=null,z.set(0,0,0),I=0,S=X,C=Et}return}Be=Be||Ie,He=He||he,ot=ot||ye,(Ie!==x||Be!==U)&&(o.blendEquationSeparate(Ge[Ie],Ge[Be]),x=Ie,U=Be),(he!==L||ye!==P||He!==V||ot!==H)&&(o.blendFuncSeparate(st[he],st[ye],st[He],st[ot]),L=he,P=ye,V=He,H=ot),(Zt.equals(z)===!1||vn!==I)&&(o.blendColor(Zt.r,Zt.g,Zt.b,vn),z.copy(Zt),I=vn),S=X,C=!1}function hn(X,Ie){X.side===_a?we(o.CULL_FACE):de(o.CULL_FACE);let he=X.side===Jn;Ie&&(he=!he),rt(he),X.blending===Zr&&X.transparent===!1?j(sr):j(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),f.setMask(X.colorWrite);const ye=X.stencilWrite;d.setTest(ye),ye&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),yt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){A!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),A=X)}function Je(X){X!==rM?(de(o.CULL_FACE),X!==G&&(X===a_?o.cullFace(o.BACK):X===sM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),G=X}function Ne(X){X!==se&&(F&&o.lineWidth(X),se=X)}function yt(X,Ie,he){X?(de(o.POLYGON_OFFSET_FILL),(ie!==Ie||ue!==he)&&(o.polygonOffset(Ie,he),ie=Ie,ue=he)):we(o.POLYGON_OFFSET_FILL)}function Ye(X){X?de(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function O(X){X===void 0&&(X=o.TEXTURE0+W-1),ve!==X&&(o.activeTexture(X),ve=X)}function w(X,Ie,he){he===void 0&&(ve===null?he=o.TEXTURE0+W-1:he=ve);let ye=fe[he];ye===void 0&&(ye={type:void 0,texture:void 0},fe[he]=ye),(ye.type!==X||ye.texture!==Ie)&&(ve!==he&&(o.activeTexture(he),ve=he),o.bindTexture(X,Ie||_e[X]),ye.type=X,ye.texture=Ie)}function ae(){const X=fe[ve];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function xe(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(X){ht.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ht.copy(X))}function ke(X){R.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),R.copy(X))}function mt(X,Ie){let he=v.get(Ie);he===void 0&&(he=new WeakMap,v.set(Ie,he));let ye=he.get(X);ye===void 0&&(ye=o.getUniformBlockIndex(Ie,X.name),he.set(X,ye))}function lt(X,Ie){const ye=v.get(Ie).get(X);p.get(Ie)!==ye&&(o.uniformBlockBinding(Ie,ye,X.__bindingPointIndex),p.set(Ie,ye))}function It(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ve=null,fe={},m={},y=new WeakMap,b=[],T=null,D=!1,S=null,x=null,L=null,P=null,U=null,V=null,H=null,z=new Pt(0,0,0),I=0,C=!1,A=null,G=null,se=null,ie=null,ue=null,ht.set(0,0,o.canvas.width,o.canvas.height),R.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:de,disable:we,bindFramebuffer:Xe,drawBuffers:Le,useProgram:Re,setBlending:j,setMaterial:hn,setFlipSided:rt,setCullFace:Je,setLineWidth:Ne,setPolygonOffset:yt,setScissorTest:Ye,activeTexture:O,bindTexture:w,unbindTexture:ae,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:je,texImage3D:et,updateUBOMapping:mt,uniformBlockBinding:lt,texStorage2D:gt,texStorage3D:Ee,texSubImage2D:ge,texSubImage3D:We,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Fe,scissor:nt,viewport:ke,reset:It}}function i2(o,n,a,s,c,f,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new kt,_=new WeakMap;let m;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,w){return b?new OffscreenCanvas(O,w):Mu("canvas")}function D(O,w,ae){let xe=1;const Se=Ye(O);if((Se.width>ae||Se.height>ae)&&(xe=ae/Math.max(Se.width,Se.height)),xe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ge=Math.floor(xe*Se.width),We=Math.floor(xe*Se.height);m===void 0&&(m=T(ge,We));const Pe=w?T(ge,We):m;return Pe.width=ge,Pe.height=We,Pe.getContext("2d").drawImage(O,0,0,ge,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ge+"x"+We+")."),Pe}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(O,w,ae,xe,Se=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ge=w;if(w===o.RED&&(ae===o.FLOAT&&(ge=o.R32F),ae===o.HALF_FLOAT&&(ge=o.R16F),ae===o.UNSIGNED_BYTE&&(ge=o.R8)),w===o.RED_INTEGER&&(ae===o.UNSIGNED_BYTE&&(ge=o.R8UI),ae===o.UNSIGNED_SHORT&&(ge=o.R16UI),ae===o.UNSIGNED_INT&&(ge=o.R32UI),ae===o.BYTE&&(ge=o.R8I),ae===o.SHORT&&(ge=o.R16I),ae===o.INT&&(ge=o.R32I)),w===o.RG&&(ae===o.FLOAT&&(ge=o.RG32F),ae===o.HALF_FLOAT&&(ge=o.RG16F),ae===o.UNSIGNED_BYTE&&(ge=o.RG8)),w===o.RG_INTEGER&&(ae===o.UNSIGNED_BYTE&&(ge=o.RG8UI),ae===o.UNSIGNED_SHORT&&(ge=o.RG16UI),ae===o.UNSIGNED_INT&&(ge=o.RG32UI),ae===o.BYTE&&(ge=o.RG8I),ae===o.SHORT&&(ge=o.RG16I),ae===o.INT&&(ge=o.RG32I)),w===o.RGB_INTEGER&&(ae===o.UNSIGNED_BYTE&&(ge=o.RGB8UI),ae===o.UNSIGNED_SHORT&&(ge=o.RGB16UI),ae===o.UNSIGNED_INT&&(ge=o.RGB32UI),ae===o.BYTE&&(ge=o.RGB8I),ae===o.SHORT&&(ge=o.RGB16I),ae===o.INT&&(ge=o.RGB32I)),w===o.RGBA_INTEGER&&(ae===o.UNSIGNED_BYTE&&(ge=o.RGBA8UI),ae===o.UNSIGNED_SHORT&&(ge=o.RGBA16UI),ae===o.UNSIGNED_INT&&(ge=o.RGBA32UI),ae===o.BYTE&&(ge=o.RGBA8I),ae===o.SHORT&&(ge=o.RGBA16I),ae===o.INT&&(ge=o.RGBA32I)),w===o.RGB&&ae===o.UNSIGNED_INT_5_9_9_9_REV&&(ge=o.RGB9_E5),w===o.RGBA){const We=Se?Su:Nt.getTransfer(xe);ae===o.FLOAT&&(ge=o.RGBA32F),ae===o.HALF_FLOAT&&(ge=o.RGBA16F),ae===o.UNSIGNED_BYTE&&(ge=We===Ft?o.SRGB8_ALPHA8:o.RGBA8),ae===o.UNSIGNED_SHORT_4_4_4_4&&(ge=o.RGBA4),ae===o.UNSIGNED_SHORT_5_5_5_1&&(ge=o.RGB5_A1)}return(ge===o.R16F||ge===o.R32F||ge===o.RG16F||ge===o.RG32F||ge===o.RGBA16F||ge===o.RGBA32F)&&n.get("EXT_color_buffer_float"),ge}function U(O,w){let ae;return O?w===null||w===Qr||w===so?ae=o.DEPTH24_STENCIL8:w===xa?ae=o.DEPTH32F_STENCIL8:w===dl&&(ae=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Qr||w===so?ae=o.DEPTH_COMPONENT24:w===xa?ae=o.DEPTH_COMPONENT32F:w===dl&&(ae=o.DEPTH_COMPONENT16),ae}function V(O,w){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Li&&O.minFilter!==Yi?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function H(O){const w=O.target;w.removeEventListener("dispose",H),I(w),w.isVideoTexture&&_.delete(w)}function z(O){const w=O.target;w.removeEventListener("dispose",z),A(w)}function I(O){const w=s.get(O);if(w.__webglInit===void 0)return;const ae=O.source,xe=y.get(ae);if(xe){const Se=xe[w.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&C(O),Object.keys(xe).length===0&&y.delete(ae)}s.remove(O)}function C(O){const w=s.get(O);o.deleteTexture(w.__webglTexture);const ae=O.source,xe=y.get(ae);delete xe[w.__cacheKey],h.memory.textures--}function A(O){const w=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(w.__webglFramebuffer[xe]))for(let Se=0;Se<w.__webglFramebuffer[xe].length;Se++)o.deleteFramebuffer(w.__webglFramebuffer[xe][Se]);else o.deleteFramebuffer(w.__webglFramebuffer[xe]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[xe])}else{if(Array.isArray(w.__webglFramebuffer))for(let xe=0;xe<w.__webglFramebuffer.length;xe++)o.deleteFramebuffer(w.__webglFramebuffer[xe]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let xe=0;xe<w.__webglColorRenderbuffer.length;xe++)w.__webglColorRenderbuffer[xe]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[xe]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ae=O.textures;for(let xe=0,Se=ae.length;xe<Se;xe++){const ge=s.get(ae[xe]);ge.__webglTexture&&(o.deleteTexture(ge.__webglTexture),h.memory.textures--),s.remove(ae[xe])}s.remove(O)}let G=0;function se(){G=0}function ie(){const O=G;return O>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+c.maxTextures),G+=1,O}function ue(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function W(O,w){const ae=s.get(O);if(O.isVideoTexture&&Ne(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const xe=O.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(ae,O,w);return}}a.bindTexture(o.TEXTURE_2D,ae.__webglTexture,o.TEXTURE0+w)}function F(O,w){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){R(ae,O,w);return}a.bindTexture(o.TEXTURE_2D_ARRAY,ae.__webglTexture,o.TEXTURE0+w)}function te(O,w){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){R(ae,O,w);return}a.bindTexture(o.TEXTURE_3D,ae.__webglTexture,o.TEXTURE0+w)}function q(O,w){const ae=s.get(O);if(O.version>0&&ae.__version!==O.version){Q(ae,O,w);return}a.bindTexture(o.TEXTURE_CUBE_MAP,ae.__webglTexture,o.TEXTURE0+w)}const ve={[Kd]:o.REPEAT,[Yr]:o.CLAMP_TO_EDGE,[Qd]:o.MIRRORED_REPEAT},fe={[Li]:o.NEAREST,[zM]:o.NEAREST_MIPMAP_NEAREST,[jc]:o.NEAREST_MIPMAP_LINEAR,[Yi]:o.LINEAR,[od]:o.LINEAR_MIPMAP_NEAREST,[Wr]:o.LINEAR_MIPMAP_LINEAR},Me={[HM]:o.NEVER,[qM]:o.ALWAYS,[GM]:o.LESS,[yx]:o.LEQUAL,[VM]:o.EQUAL,[XM]:o.GEQUAL,[kM]:o.GREATER,[jM]:o.NOTEQUAL};function Te(O,w){if(w.type===xa&&n.has("OES_texture_float_linear")===!1&&(w.magFilter===Yi||w.magFilter===od||w.magFilter===jc||w.magFilter===Wr||w.minFilter===Yi||w.minFilter===od||w.minFilter===jc||w.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,ve[w.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ve[w.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ve[w.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,fe[w.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Me[w.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Li||w.minFilter!==jc&&w.minFilter!==Wr||w.type===xa&&n.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const ae=n.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,c.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function ht(O,w){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",H));const xe=w.source;let Se=y.get(xe);Se===void 0&&(Se={},y.set(xe,Se));const ge=ue(w);if(ge!==O.__cacheKey){Se[ge]===void 0&&(Se[ge]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ae=!0),Se[ge].usedTimes++;const We=Se[O.__cacheKey];We!==void 0&&(Se[O.__cacheKey].usedTimes--,We.usedTimes===0&&C(w)),O.__cacheKey=ge,O.__webglTexture=Se[ge].texture}return ae}function R(O,w,ae){let xe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xe=o.TEXTURE_3D);const Se=ht(O,w),ge=w.source;a.bindTexture(xe,O.__webglTexture,o.TEXTURE0+ae);const We=s.get(ge);if(ge.version!==We.__version||Se===!0){a.activeTexture(o.TEXTURE0+ae);const Pe=Nt.getPrimaries(Nt.workingColorSpace),Fe=w.colorSpace===rr?null:Nt.getPrimaries(w.colorSpace),gt=w.colorSpace===rr||Pe===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ee=D(w.image,!1,c.maxTextureSize);Ee=yt(w,Ee);const je=f.convert(w.format,w.colorSpace),et=f.convert(w.type);let nt=P(w.internalFormat,je,et,w.colorSpace,w.isVideoTexture);Te(xe,w);let ke;const mt=w.mipmaps,lt=w.isVideoTexture!==!0,It=We.__version===void 0||Se===!0,X=ge.dataReady,Ie=V(w,Ee);if(w.isDepthTexture)nt=U(w.format===oo,w.type),It&&(lt?a.texStorage2D(o.TEXTURE_2D,1,nt,Ee.width,Ee.height):a.texImage2D(o.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,je,et,null));else if(w.isDataTexture)if(mt.length>0){lt&&It&&a.texStorage2D(o.TEXTURE_2D,Ie,nt,mt[0].width,mt[0].height);for(let he=0,ye=mt.length;he<ye;he++)ke=mt[he],lt?X&&a.texSubImage2D(o.TEXTURE_2D,he,0,0,ke.width,ke.height,je,et,ke.data):a.texImage2D(o.TEXTURE_2D,he,nt,ke.width,ke.height,0,je,et,ke.data);w.generateMipmaps=!1}else lt?(It&&a.texStorage2D(o.TEXTURE_2D,Ie,nt,Ee.width,Ee.height),X&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee.width,Ee.height,je,et,Ee.data)):a.texImage2D(o.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,je,et,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&It&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,nt,mt[0].width,mt[0].height,Ee.depth);for(let he=0,ye=mt.length;he<ye;he++)if(ke=mt[he],w.format!==Ui)if(je!==null)if(lt){if(X)if(w.layerUpdates.size>0){const Be=R_(ke.width,ke.height,w.format,w.type);for(const He of w.layerUpdates){const ot=ke.data.subarray(He*Be/ke.data.BYTES_PER_ELEMENT,(He+1)*Be/ke.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,He,ke.width,ke.height,1,je,ot)}w.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Ee.depth,je,ke.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,nt,ke.width,ke.height,Ee.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?X&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Ee.depth,je,et,ke.data):a.texImage3D(o.TEXTURE_2D_ARRAY,he,nt,ke.width,ke.height,Ee.depth,0,je,et,ke.data)}else{lt&&It&&a.texStorage2D(o.TEXTURE_2D,Ie,nt,mt[0].width,mt[0].height);for(let he=0,ye=mt.length;he<ye;he++)ke=mt[he],w.format!==Ui?je!==null?lt?X&&a.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,ke.width,ke.height,je,ke.data):a.compressedTexImage2D(o.TEXTURE_2D,he,nt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?X&&a.texSubImage2D(o.TEXTURE_2D,he,0,0,ke.width,ke.height,je,et,ke.data):a.texImage2D(o.TEXTURE_2D,he,nt,ke.width,ke.height,0,je,et,ke.data)}else if(w.isDataArrayTexture)if(lt){if(It&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,nt,Ee.width,Ee.height,Ee.depth),X)if(w.layerUpdates.size>0){const he=R_(Ee.width,Ee.height,w.format,w.type);for(const ye of w.layerUpdates){const Be=Ee.data.subarray(ye*he/Ee.data.BYTES_PER_ELEMENT,(ye+1)*he/Ee.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,je,et,Be)}w.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,je,et,Ee.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,nt,Ee.width,Ee.height,Ee.depth,0,je,et,Ee.data);else if(w.isData3DTexture)lt?(It&&a.texStorage3D(o.TEXTURE_3D,Ie,nt,Ee.width,Ee.height,Ee.depth),X&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,je,et,Ee.data)):a.texImage3D(o.TEXTURE_3D,0,nt,Ee.width,Ee.height,Ee.depth,0,je,et,Ee.data);else if(w.isFramebufferTexture){if(It)if(lt)a.texStorage2D(o.TEXTURE_2D,Ie,nt,Ee.width,Ee.height);else{let he=Ee.width,ye=Ee.height;for(let Be=0;Be<Ie;Be++)a.texImage2D(o.TEXTURE_2D,Be,nt,he,ye,0,je,et,null),he>>=1,ye>>=1}}else if(mt.length>0){if(lt&&It){const he=Ye(mt[0]);a.texStorage2D(o.TEXTURE_2D,Ie,nt,he.width,he.height)}for(let he=0,ye=mt.length;he<ye;he++)ke=mt[he],lt?X&&a.texSubImage2D(o.TEXTURE_2D,he,0,0,je,et,ke):a.texImage2D(o.TEXTURE_2D,he,nt,je,et,ke);w.generateMipmaps=!1}else if(lt){if(It){const he=Ye(Ee);a.texStorage2D(o.TEXTURE_2D,Ie,nt,he.width,he.height)}X&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,je,et,Ee)}else a.texImage2D(o.TEXTURE_2D,0,nt,je,et,Ee);S(w)&&x(xe),We.__version=ge.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Q(O,w,ae){if(w.image.length!==6)return;const xe=ht(O,w),Se=w.source;a.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ae);const ge=s.get(Se);if(Se.version!==ge.__version||xe===!0){a.activeTexture(o.TEXTURE0+ae);const We=Nt.getPrimaries(Nt.workingColorSpace),Pe=w.colorSpace===rr?null:Nt.getPrimaries(w.colorSpace),Fe=w.colorSpace===rr||We===Pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const gt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,je=[];for(let ye=0;ye<6;ye++)!gt&&!Ee?je[ye]=D(w.image[ye],!0,c.maxCubemapSize):je[ye]=Ee?w.image[ye].image:w.image[ye],je[ye]=yt(w,je[ye]);const et=je[0],nt=f.convert(w.format,w.colorSpace),ke=f.convert(w.type),mt=P(w.internalFormat,nt,ke,w.colorSpace),lt=w.isVideoTexture!==!0,It=ge.__version===void 0||xe===!0,X=Se.dataReady;let Ie=V(w,et);Te(o.TEXTURE_CUBE_MAP,w);let he;if(gt){lt&&It&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,mt,et.width,et.height);for(let ye=0;ye<6;ye++){he=je[ye].mipmaps;for(let Be=0;Be<he.length;Be++){const He=he[Be];w.format!==Ui?nt!==null?lt?X&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,0,0,He.width,He.height,nt,He.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,mt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,0,0,He.width,He.height,nt,ke,He.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be,mt,He.width,He.height,0,nt,ke,He.data)}}}else{if(he=w.mipmaps,lt&&It){he.length>0&&Ie++;const ye=Ye(je[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,mt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,je[ye].width,je[ye].height,nt,ke,je[ye].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,mt,je[ye].width,je[ye].height,0,nt,ke,je[ye].data);for(let Be=0;Be<he.length;Be++){const ot=he[Be].image[ye].image;lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,0,0,ot.width,ot.height,nt,ke,ot.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,mt,ot.width,ot.height,0,nt,ke,ot.data)}}else{lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,nt,ke,je[ye]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,mt,nt,ke,je[ye]);for(let Be=0;Be<he.length;Be++){const He=he[Be];lt?X&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,0,0,nt,ke,He.image[ye]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Be+1,mt,nt,ke,He.image[ye])}}}S(w)&&x(o.TEXTURE_CUBE_MAP),ge.__version=Se.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function _e(O,w,ae,xe,Se,ge){const We=f.convert(ae.format,ae.colorSpace),Pe=f.convert(ae.type),Fe=P(ae.internalFormat,We,Pe,ae.colorSpace),gt=s.get(w),Ee=s.get(ae);if(Ee.__renderTarget=w,!gt.__hasExternalTextures){const je=Math.max(1,w.width>>ge),et=Math.max(1,w.height>>ge);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?a.texImage3D(Se,ge,Fe,je,et,w.depth,0,We,Pe,null):a.texImage2D(Se,ge,Fe,je,et,0,We,Pe,null)}a.bindFramebuffer(o.FRAMEBUFFER,O),Je(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xe,Se,Ee.__webglTexture,0,rt(w)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xe,Se,Ee.__webglTexture,ge),a.bindFramebuffer(o.FRAMEBUFFER,null)}function de(O,w,ae){if(o.bindRenderbuffer(o.RENDERBUFFER,O),w.depthBuffer){const xe=w.depthTexture,Se=xe&&xe.isDepthTexture?xe.type:null,ge=U(w.stencilBuffer,Se),We=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=rt(w);Je(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe,ge,w.width,w.height):ae?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe,ge,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ge,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,O)}else{const xe=w.textures;for(let Se=0;Se<xe.length;Se++){const ge=xe[Se],We=f.convert(ge.format,ge.colorSpace),Pe=f.convert(ge.type),Fe=P(ge.internalFormat,We,Pe,ge.colorSpace),gt=rt(w);ae&&Je(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,Fe,w.width,w.height):Je(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,Fe,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(w.depthTexture);xe.__renderTarget=w,(!xe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const Se=xe.__webglTexture,ge=rt(w);if(w.depthTexture.format===to)Je(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0);else if(w.depthTexture.format===oo)Je(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Xe(O){const w=s.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const xe=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),xe){const Se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,xe.removeEventListener("dispose",Se)};xe.addEventListener("dispose",Se),w.__depthDisposeCallback=Se}w.__boundDepthTexture=xe}if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,O)}else if(ae){w.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(a.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[xe]),w.__webglDepthbuffer[xe]===void 0)w.__webglDepthbuffer[xe]=o.createRenderbuffer(),de(w.__webglDepthbuffer[xe],O,!1);else{const Se=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer[xe];o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,ge)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),de(w.__webglDepthbuffer,O,!1);else{const xe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Se=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Se),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,Se)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(O,w,ae){const xe=s.get(O);w!==void 0&&_e(xe.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ae!==void 0&&Xe(O)}function Re(O){const w=O.texture,ae=s.get(O),xe=s.get(w);O.addEventListener("dispose",z);const Se=O.textures,ge=O.isWebGLCubeRenderTarget===!0,We=Se.length>1;if(We||(xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture()),xe.__version=w.version,h.memory.textures++),ge){ae.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(w.mipmaps&&w.mipmaps.length>0){ae.__webglFramebuffer[Pe]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)ae.__webglFramebuffer[Pe][Fe]=o.createFramebuffer()}else ae.__webglFramebuffer[Pe]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)ae.__webglFramebuffer[Pe]=o.createFramebuffer()}else ae.__webglFramebuffer=o.createFramebuffer();if(We)for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++){const gt=s.get(Se[Pe]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Je(O)===!1){ae.__webglMultisampledFramebuffer=o.createFramebuffer(),ae.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){const Fe=Se[Pe];ae.__webglColorRenderbuffer[Pe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ae.__webglColorRenderbuffer[Pe]);const gt=f.convert(Fe.format,Fe.colorSpace),Ee=f.convert(Fe.type),je=P(Fe.internalFormat,gt,Ee,Fe.colorSpace,O.isXRRenderTarget===!0),et=rt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,et,je,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pe,o.RENDERBUFFER,ae.__webglColorRenderbuffer[Pe])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=o.createRenderbuffer(),de(ae.__webglDepthRenderbuffer,O,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ge){a.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),Te(o.TEXTURE_CUBE_MAP,w);for(let Pe=0;Pe<6;Pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)_e(ae.__webglFramebuffer[Pe][Fe],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Fe);else _e(ae.__webglFramebuffer[Pe],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(w)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(We){for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++){const gt=Se[Pe],Ee=s.get(gt);a.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),Te(o.TEXTURE_2D,gt),_e(ae.__webglFramebuffer,O,gt,o.COLOR_ATTACHMENT0+Pe,o.TEXTURE_2D,0),S(gt)&&x(o.TEXTURE_2D)}a.unbindTexture()}else{let Pe=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pe=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Pe,xe.__webglTexture),Te(Pe,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)_e(ae.__webglFramebuffer[Fe],O,w,o.COLOR_ATTACHMENT0,Pe,Fe);else _e(ae.__webglFramebuffer,O,w,o.COLOR_ATTACHMENT0,Pe,0);S(w)&&x(Pe),a.unbindTexture()}O.depthBuffer&&Xe(O)}function Ge(O){const w=O.textures;for(let ae=0,xe=w.length;ae<xe;ae++){const Se=w[ae];if(S(Se)){const ge=L(O),We=s.get(Se).__webglTexture;a.bindTexture(ge,We),x(ge),a.unbindTexture()}}}const st=[],j=[];function hn(O){if(O.samples>0){if(Je(O)===!1){const w=O.textures,ae=O.width,xe=O.height;let Se=o.COLOR_BUFFER_BIT;const ge=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=s.get(O),Pe=w.length>1;if(Pe)for(let Fe=0;Fe<w.length;Fe++)a.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),Pe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const gt=s.get(w[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,ae,xe,0,0,ae,xe,Se,o.NEAREST),p===!0&&(st.length=0,j.length=0,st.push(o.COLOR_ATTACHMENT0+Fe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(st.push(ge),j.push(ge),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,j)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,st))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Pe)for(let Fe=0;Fe<w.length;Fe++){a.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const gt=s.get(w[Fe]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,gt,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const w=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function rt(O){return Math.min(c.maxSamples,O.samples)}function Je(O){const w=s.get(O);return O.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(O){const w=h.render.frame;_.get(O)!==w&&(_.set(O,w),O.update())}function yt(O,w){const ae=O.colorSpace,xe=O.format,Se=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==lo&&ae!==rr&&(Nt.getTransfer(ae)===Ft?(xe!==Ui||Se!==Ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),w}function Ye(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(v.width=O.naturalWidth||O.width,v.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(v.width=O.displayWidth,v.height=O.displayHeight):(v.width=O.width,v.height=O.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=se,this.setTexture2D=W,this.setTexture2DArray=F,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=Le,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Je}function a2(o,n){function a(s,c=rr){let f;const h=Nt.getTransfer(c);if(s===Ma)return o.UNSIGNED_BYTE;if(s===Up)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Lp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===hx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ux)return o.BYTE;if(s===fx)return o.SHORT;if(s===dl)return o.UNSIGNED_SHORT;if(s===Dp)return o.INT;if(s===Qr)return o.UNSIGNED_INT;if(s===xa)return o.FLOAT;if(s===ml)return o.HALF_FLOAT;if(s===dx)return o.ALPHA;if(s===px)return o.RGB;if(s===Ui)return o.RGBA;if(s===mx)return o.LUMINANCE;if(s===gx)return o.LUMINANCE_ALPHA;if(s===to)return o.DEPTH_COMPONENT;if(s===oo)return o.DEPTH_STENCIL;if(s===vx)return o.RED;if(s===Op)return o.RED_INTEGER;if(s===_x)return o.RG;if(s===zp)return o.RG_INTEGER;if(s===Pp)return o.RGBA_INTEGER;if(s===mu||s===gu||s===vu||s===_u)if(h===Ft)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===mu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===mu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jd||s===$d||s===ep||s===tp)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Jd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$d)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ep)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===np||s===ip||s===ap)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===np||s===ip)return h===Ft?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===ap)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rp||s===sp||s===op||s===lp||s===cp||s===up||s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===vp||s===_p)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===rp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===op)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===up)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vp)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_p)return h===Ft?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xu||s===xp||s===yp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===xu)return h===Ft?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xx||s===Sp||s===bp||s===Mp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===xu)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Sp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===so?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const r2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s2=`
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

}`;class o2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a,s){if(this.texture===null){const c=new jn,f=n.properties.get(c);f.__webglTexture=a.texture,(a.depthNear!==s.depthNear||a.depthFar!==s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new cr({vertexShader:r2,fragmentShader:s2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Sa(new Au(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l2 extends uo{constructor(n,a){super();const s=this;let c=null,f=1,h=null,d="local-floor",p=1,v=null,_=null,m=null,y=null,b=null,T=null;const D=new o2,S=a.getContextAttributes();let x=null,L=null;const P=[],U=[],V=new kt;let H=null;const z=new Si;z.viewport=new an;const I=new Si;I.viewport=new an;const C=[z,I],A=new RE;let G=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let Q=P[R];return Q===void 0&&(Q=new Rd,P[R]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(R){let Q=P[R];return Q===void 0&&(Q=new Rd,P[R]=Q),Q.getGripSpace()},this.getHand=function(R){let Q=P[R];return Q===void 0&&(Q=new Rd,P[R]=Q),Q.getHandSpace()};function ie(R){const Q=U.indexOf(R.inputSource);if(Q===-1)return;const _e=P[Q];_e!==void 0&&(_e.update(R.inputSource,R.frame,v||h),_e.dispatchEvent({type:R.type,data:R.inputSource}))}function ue(){c.removeEventListener("select",ie),c.removeEventListener("selectstart",ie),c.removeEventListener("selectend",ie),c.removeEventListener("squeeze",ie),c.removeEventListener("squeezestart",ie),c.removeEventListener("squeezeend",ie),c.removeEventListener("end",ue),c.removeEventListener("inputsourceschange",W);for(let R=0;R<P.length;R++){const Q=U[R];Q!==null&&(U[R]=null,P[R].disconnect(Q))}G=null,se=null,D.reset(),n.setRenderTarget(x),b=null,y=null,m=null,c=null,L=null,ht.stop(),s.isPresenting=!1,n.setPixelRatio(H),n.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){f=R,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){d=R,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||h},this.setReferenceSpace=function(R){v=R},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return m},this.getFrame=function(){return T},this.getSession=function(){return c},this.setSession=async function(R){if(c=R,c!==null){if(x=n.getRenderTarget(),c.addEventListener("select",ie),c.addEventListener("selectstart",ie),c.addEventListener("selectend",ie),c.addEventListener("squeeze",ie),c.addEventListener("squeezestart",ie),c.addEventListener("squeezeend",ie),c.addEventListener("end",ue),c.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await a.makeXRCompatible(),H=n.getPixelRatio(),n.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,de=null,we=null;S.depth&&(we=S.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,_e=S.stencil?oo:to,de=S.stencil?so:Qr);const Xe={colorFormat:a.RGBA8,depthFormat:we,scaleFactor:f};m=new XRWebGLBinding(c,a),y=m.createProjectionLayer(Xe),c.updateRenderState({layers:[y]}),n.setPixelRatio(1),n.setSize(y.textureWidth,y.textureHeight,!1),L=new Jr(y.textureWidth,y.textureHeight,{format:Ui,type:Ma,depthTexture:new Lx(y.textureWidth,y.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:n.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:f};b=new XRWebGLLayer(c,a,_e),c.updateRenderState({baseLayer:b}),n.setPixelRatio(1),n.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Jr(b.framebufferWidth,b.framebufferHeight,{format:Ui,type:Ma,colorSpace:n.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),v=null,h=await c.requestReferenceSpace(d),ht.setContext(c),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function W(R){for(let Q=0;Q<R.removed.length;Q++){const _e=R.removed[Q],de=U.indexOf(_e);de>=0&&(U[de]=null,P[de].disconnect(_e))}for(let Q=0;Q<R.added.length;Q++){const _e=R.added[Q];let de=U.indexOf(_e);if(de===-1){for(let Xe=0;Xe<P.length;Xe++)if(Xe>=U.length){U.push(_e),de=Xe;break}else if(U[Xe]===null){U[Xe]=_e,de=Xe;break}if(de===-1)break}const we=P[de];we&&we.connect(_e)}}const F=new ce,te=new ce;function q(R,Q,_e){F.setFromMatrixPosition(Q.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const de=F.distanceTo(te),we=Q.projectionMatrix.elements,Xe=_e.projectionMatrix.elements,Le=we[14]/(we[10]-1),Re=we[14]/(we[10]+1),Ge=(we[9]+1)/we[5],st=(we[9]-1)/we[5],j=(we[8]-1)/we[0],hn=(Xe[8]+1)/Xe[0],rt=Le*j,Je=Le*hn,Ne=de/(-j+hn),yt=Ne*-j;if(Q.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(yt),R.translateZ(Ne),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),we[10]===-1)R.projectionMatrix.copy(Q.projectionMatrix),R.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ye=Le+Ne,O=Re+Ne,w=rt-yt,ae=Je+(de-yt),xe=Ge*Re/O*Ye,Se=st*Re/O*Ye;R.projectionMatrix.makePerspective(w,ae,xe,Se,Ye,O),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function ve(R,Q){Q===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(Q.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(c===null)return;let Q=R.near,_e=R.far;D.texture!==null&&(D.depthNear>0&&(Q=D.depthNear),D.depthFar>0&&(_e=D.depthFar)),A.near=I.near=z.near=Q,A.far=I.far=z.far=_e,(G!==A.near||se!==A.far)&&(c.updateRenderState({depthNear:A.near,depthFar:A.far}),G=A.near,se=A.far),z.layers.mask=R.layers.mask|2,I.layers.mask=R.layers.mask|4,A.layers.mask=z.layers.mask|I.layers.mask;const de=R.parent,we=A.cameras;ve(A,de);for(let Xe=0;Xe<we.length;Xe++)ve(we[Xe],de);we.length===2?q(A,z,I):A.projectionMatrix.copy(z.projectionMatrix),fe(R,A,de)};function fe(R,Q,_e){_e===null?R.matrix.copy(Q.matrixWorld):(R.matrix.copy(_e.matrixWorld),R.matrix.invert(),R.matrix.multiply(Q.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(Q.projectionMatrix),R.projectionMatrixInverse.copy(Q.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Ep*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&b===null))return p},this.setFoveation=function(R){p=R,y!==null&&(y.fixedFoveation=R),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=R)},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(A)};let Me=null;function Te(R,Q){if(_=Q.getViewerPose(v||h),T=Q,_!==null){const _e=_.views;b!==null&&(n.setRenderTargetFramebuffer(L,b.framebuffer),n.setRenderTarget(L));let de=!1;_e.length!==A.cameras.length&&(A.cameras.length=0,de=!0);for(let Le=0;Le<_e.length;Le++){const Re=_e[Le];let Ge=null;if(b!==null)Ge=b.getViewport(Re);else{const j=m.getViewSubImage(y,Re);Ge=j.viewport,Le===0&&(n.setRenderTargetTextures(L,j.colorTexture,y.ignoreDepthValues?void 0:j.depthStencilTexture),n.setRenderTarget(L))}let st=C[Le];st===void 0&&(st=new Si,st.layers.enable(Le),st.viewport=new an,C[Le]=st),st.matrix.fromArray(Re.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Re.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Le===0&&(A.matrix.copy(st.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),de===!0&&A.cameras.push(st)}const we=c.enabledFeatures;if(we&&we.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&m){const Le=m.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&D.init(n,Le,c.renderState)}}for(let _e=0;_e<P.length;_e++){const de=U[_e],we=P[_e];de!==null&&we!==void 0&&we.update(de,Q,v||h)}Me&&Me(R,Q),Q.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Q}),T=null}const ht=new Ox;ht.setAnimationLoop(Te),this.setAnimationLoop=function(R){Me=R},this.dispose=function(){}}}const Br=new Ea,c2=new rn;function u2(o,n){function a(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,Rx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function c(S,x,L,P,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),m(S,x)):x.isMeshPhongMaterial?(f(S,x),_(S,x)):x.isMeshStandardMaterial?(f(S,x),y(S,x),x.isMeshPhysicalMaterial&&b(S,x,U)):x.isMeshMatcapMaterial?(f(S,x),T(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),D(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?p(S,x,L,P):x.isSpriteMaterial?v(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,a(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Jn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,a(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Jn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,a(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,a(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=n.get(x),P=L.envMap,U=L.envMapRotation;P&&(S.envMap.value=P,Br.copy(U),Br.x*=-1,Br.y*=-1,Br.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),S.envMapRotation.value.setFromMatrix4(c2.makeRotationFromEuler(Br)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,L,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=P*.5,x.map&&(S.map.value=x.map,a(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function b(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function D(S,x){const L=n.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function f2(o,n,a,s){let c={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,P){const U=P.program;s.uniformBlockBinding(L,U)}function v(L,P){let U=c[L.id];U===void 0&&(T(L),U=_(L),c[L.id]=U,L.addEventListener("dispose",S));const V=P.program;s.updateUBOMapping(L,V);const H=n.render.frame;f[L.id]!==H&&(y(L),f[L.id]=H)}function _(L){const P=m();L.__bindingPointIndex=P;const U=o.createBuffer(),V=L.__size,H=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,V,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function m(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const P=c[L.id],U=L.uniforms,V=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let H=0,z=U.length;H<z;H++){const I=Array.isArray(U[H])?U[H]:[U[H]];for(let C=0,A=I.length;C<A;C++){const G=I[C];if(b(G,H,C,V)===!0){const se=G.__offset,ie=Array.isArray(G.value)?G.value:[G.value];let ue=0;for(let W=0;W<ie.length;W++){const F=ie[W],te=D(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,se+ue,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,ue),ue+=te.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(L,P,U,V){const H=L.value,z=P+"_"+U;if(V[z]===void 0)return typeof H=="number"||typeof H=="boolean"?V[z]=H:V[z]=H.clone(),!0;{const I=V[z];if(typeof H=="number"||typeof H=="boolean"){if(I!==H)return V[z]=H,!0}else if(I.equals(H)===!1)return I.copy(H),!0}return!1}function T(L){const P=L.uniforms;let U=0;const V=16;for(let z=0,I=P.length;z<I;z++){const C=Array.isArray(P[z])?P[z]:[P[z]];for(let A=0,G=C.length;A<G;A++){const se=C[A],ie=Array.isArray(se.value)?se.value:[se.value];for(let ue=0,W=ie.length;ue<W;ue++){const F=ie[ue],te=D(F),q=U%V,ve=q%te.boundary,fe=q+ve;U+=ve,fe!==0&&V-fe<te.storage&&(U+=V-fe),se.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=U,U+=te.storage}}}const H=U%V;return H>0&&(U+=V-H),L.__size=U,L.__cache={},this}function D(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function S(L){const P=L.target;P.removeEventListener("dispose",S);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(c[P.id]),delete c[P.id],delete f[P.id]}function x(){for(const L in c)o.deleteBuffer(c[L]);h=[],c={},f={}}return{bind:p,update:v,dispose:x}}class h2{constructor(n={}){const{canvas:a=WM(),context:s=null,depth:c=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:v=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:y=!1}=n;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const T=new Uint32Array(4),D=new Int32Array(4);let S=null,x=null;const L=[],P=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this.toneMapping=or,this.toneMappingExposure=1;const U=this;let V=!1,H=0,z=0,I=null,C=-1,A=null;const G=new an,se=new an;let ie=null;const ue=new Pt(0);let W=0,F=a.width,te=a.height,q=1,ve=null,fe=null;const Me=new an(0,0,F,te),Te=new an(0,0,F,te);let ht=!1;const R=new Ux;let Q=!1,_e=!1;this.transmissionResolutionScale=1;const de=new rn,we=new rn,Xe=new ce,Le=new an,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function st(){return I===null?q:1}let j=s;function hn(N,J){return a.getContext(N,J)}try{const N={alpha:!0,depth:c,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:v,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Np}`),a.addEventListener("webglcontextlost",ye,!1),a.addEventListener("webglcontextrestored",Be,!1),a.addEventListener("webglcontextcreationerror",He,!1),j===null){const J="webgl2";if(j=hn(J,N),j===null)throw hn(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let rt,Je,Ne,yt,Ye,O,w,ae,xe,Se,ge,We,Pe,Fe,gt,Ee,je,et,nt,ke,mt,lt,It,X;function Ie(){rt=new bA(j),rt.init(),lt=new a2(j,rt),Je=new mA(j,rt,n,lt),Ne=new n2(j,rt),Je.reverseDepthBuffer&&y&&Ne.buffers.depth.setReversed(!0),yt=new TA(j),Ye=new kw,O=new i2(j,rt,Ne,Ye,Je,lt,yt),w=new vA(U),ae=new SA(U),xe=new DE(j),It=new dA(j,xe),Se=new MA(j,xe,yt,It),ge=new wA(j,Se,xe,yt),nt=new AA(j,Je,O),Ee=new gA(Ye),We=new Vw(U,w,ae,rt,Je,It,Ee),Pe=new u2(U,Ye),Fe=new Xw,gt=new Qw(rt),et=new hA(U,w,ae,Ne,ge,b,p),je=new e2(U,ge,Je),X=new f2(j,yt,Je,Ne),ke=new pA(j,rt,yt),mt=new EA(j,rt,yt),yt.programs=We.programs,U.capabilities=Je,U.extensions=rt,U.properties=Ye,U.renderLists=Fe,U.shadowMap=je,U.state=Ne,U.info=yt}Ie();const he=new l2(U,j);this.xr=he,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=rt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=rt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(N){N!==void 0&&(q=N,this.setSize(F,te,!1))},this.getSize=function(N){return N.set(F,te)},this.setSize=function(N,J,oe=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=N,te=J,a.width=Math.floor(N*q),a.height=Math.floor(J*q),oe===!0&&(a.style.width=N+"px",a.style.height=J+"px"),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(F*q,te*q).floor()},this.setDrawingBufferSize=function(N,J,oe){F=N,te=J,q=oe,a.width=Math.floor(N*oe),a.height=Math.floor(J*oe),this.setViewport(0,0,N,J)},this.getCurrentViewport=function(N){return N.copy(G)},this.getViewport=function(N){return N.copy(Me)},this.setViewport=function(N,J,oe,le){N.isVector4?Me.set(N.x,N.y,N.z,N.w):Me.set(N,J,oe,le),Ne.viewport(G.copy(Me).multiplyScalar(q).round())},this.getScissor=function(N){return N.copy(Te)},this.setScissor=function(N,J,oe,le){N.isVector4?Te.set(N.x,N.y,N.z,N.w):Te.set(N,J,oe,le),Ne.scissor(se.copy(Te).multiplyScalar(q).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(N){Ne.setScissorTest(ht=N)},this.setOpaqueSort=function(N){ve=N},this.setTransparentSort=function(N){fe=N},this.getClearColor=function(N){return N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,oe=!0){let le=0;if(N){let $=!1;if(I!==null){const be=I.texture.format;$=be===Pp||be===zp||be===Op}if($){const be=I.texture.type,Ce=be===Ma||be===Qr||be===dl||be===so||be===Up||be===Lp,Ae=et.getClearColor(),Oe=et.getClearAlpha(),$e=Ae.r,it=Ae.g,Qe=Ae.b;Ce?(T[0]=$e,T[1]=it,T[2]=Qe,T[3]=Oe,j.clearBufferuiv(j.COLOR,0,T)):(D[0]=$e,D[1]=it,D[2]=Qe,D[3]=Oe,j.clearBufferiv(j.COLOR,0,D))}else le|=j.COLOR_BUFFER_BIT}J&&(le|=j.DEPTH_BUFFER_BIT),oe&&(le|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",ye,!1),a.removeEventListener("webglcontextrestored",Be,!1),a.removeEventListener("webglcontextcreationerror",He,!1),et.dispose(),Fe.dispose(),gt.dispose(),Ye.dispose(),w.dispose(),ae.dispose(),ge.dispose(),It.dispose(),X.dispose(),We.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ln),he.removeEventListener("sessionend",Sl),Wi.stop()};function ye(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const N=yt.autoReset,J=je.enabled,oe=je.autoUpdate,le=je.needsUpdate,$=je.type;Ie(),yt.autoReset=N,je.enabled=J,je.autoUpdate=oe,je.needsUpdate=le,je.type=$}function He(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ot(N){const J=N.target;J.removeEventListener("dispose",ot),Zt(J)}function Zt(N){vn(N),Ye.remove(N)}function vn(N){const J=Ye.get(N).programs;J!==void 0&&(J.forEach(function(oe){We.releaseProgram(oe)}),N.isShaderMaterial&&We.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,oe,le,$,be){J===null&&(J=Re);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Ae=Cu(N,J,oe,le,$);Ne.setMaterial(le,Ce);let Oe=oe.index,$e=1;if(le.wireframe===!0){if(Oe=Se.getWireframeAttribute(oe),Oe===void 0)return;$e=2}const it=oe.drawRange,Qe=oe.attributes.position;let Tt=it.start*$e,Ct=(it.start+it.count)*$e;be!==null&&(Tt=Math.max(Tt,be.start*$e),Ct=Math.min(Ct,(be.start+be.count)*$e)),Oe!==null?(Tt=Math.max(Tt,0),Ct=Math.min(Ct,Oe.count)):Qe!=null&&(Tt=Math.max(Tt,0),Ct=Math.min(Ct,Qe.count));const jt=Ct-Tt;if(jt<0||jt===1/0)return;It.setup($,le,Ae,oe,Oe);let Ht,vt=ke;if(Oe!==null&&(Ht=xe.get(Oe),vt=mt,vt.setIndex(Ht)),$.isMesh)le.wireframe===!0?(Ne.setLineWidth(le.wireframeLinewidth*st()),vt.setMode(j.LINES)):vt.setMode(j.TRIANGLES);else if($.isLine){let Ze=le.linewidth;Ze===void 0&&(Ze=1),Ne.setLineWidth(Ze*st()),$.isLineSegments?vt.setMode(j.LINES):$.isLineLoop?vt.setMode(j.LINE_LOOP):vt.setMode(j.LINE_STRIP)}else $.isPoints?vt.setMode(j.POINTS):$.isSprite&&vt.setMode(j.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ze=$._multiDrawStarts,Kt=$._multiDrawCounts,St=$._multiDrawCount,xn=Oe?xe.get(Oe).bytesPerElement:1,Wt=Ye.get(le).currentProgram.getUniforms();for(let On=0;On<St;On++)Wt.setValue(j,"_gl_DrawID",On),vt.render(Ze[On]/xn,Kt[On])}else if($.isInstancedMesh)vt.renderInstances(Tt,jt,$.count);else if(oe.isInstancedBufferGeometry){const Ze=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Kt=Math.min(oe.instanceCount,Ze);vt.renderInstances(Tt,jt,Kt)}else vt.render(Tt,jt)};function Et(N,J,oe){N.transparent===!0&&N.side===_a&&N.forceSinglePass===!1?(N.side=Jn,N.needsUpdate=!0,Ki(N,J,oe),N.side=lr,N.needsUpdate=!0,Ki(N,J,oe),N.side=_a):Ki(N,J,oe)}this.compile=function(N,J,oe=null){oe===null&&(oe=N),x=gt.get(oe),x.init(J),P.push(x),oe.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),N!==oe&&N.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const le=new Set;return N.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){const Ae=be[Ce];Et(Ae,oe,$),le.add(Ae)}else Et(be,oe,$),le.add(be)}),x=P.pop(),le},this.compileAsync=function(N,J,oe=null){const le=this.compile(N,J,oe);return new Promise($=>{function be(){if(le.forEach(function(Ce){Ye.get(Ce).currentProgram.isReady()&&le.delete(Ce)}),le.size===0){$(N);return}setTimeout(be,10)}rt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Yt=null;function _n(N){Yt&&Yt(N)}function Ln(){Wi.stop()}function Sl(){Wi.start()}const Wi=new Ox;Wi.setAnimationLoop(_n),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(N){Yt=N,he.setAnimationLoop(N),N===null?Wi.stop():Wi.start()},he.addEventListener("sessionstart",Ln),he.addEventListener("sessionend",Sl),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(J),J=he.getCamera()),N.isScene===!0&&N.onBeforeRender(U,N,J,I),x=gt.get(N,P.length),x.init(J),P.push(x),we.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),R.setFromProjectionMatrix(we),_e=this.localClippingEnabled,Q=Ee.init(this.clippingPlanes,_e),S=Fe.get(N,L.length),S.init(),L.push(S),he.enabled===!0&&he.isPresenting===!0){const be=U.xr.getDepthSensingMesh();be!==null&&ho(be,J,-1/0,U.sortObjects)}ho(N,J,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(ve,fe),Ge=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ge&&et.addToRenderList(S,N),this.info.render.frame++,Q===!0&&Ee.beginShadows();const oe=x.state.shadowsArray;je.render(oe,N,J),Q===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,$=S.transmissive;if(x.setupLights(),J.isArrayCamera){const be=J.cameras;if($.length>0)for(let Ce=0,Ae=be.length;Ce<Ae;Ce++){const Oe=be[Ce];fr(le,$,N,Oe)}Ge&&et.render(N);for(let Ce=0,Ae=be.length;Ce<Ae;Ce++){const Oe=be[Ce];ur(S,N,Oe,Oe.viewport)}}else $.length>0&&fr(le,$,N,J),Ge&&et.render(N),ur(S,N,J);I!==null&&z===0&&(O.updateMultisampleRenderTarget(I),O.updateRenderTargetMipmap(I)),N.isScene===!0&&N.onAfterRender(U,N,J),It.resetDefaultState(),C=-1,A=null,P.pop(),P.length>0?(x=P[P.length-1],Q===!0&&Ee.setGlobalState(U.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function ho(N,J,oe,le){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)oe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||R.intersectsSprite(N)){le&&Le.setFromMatrixPosition(N.matrixWorld).applyMatrix4(we);const Ce=ge.update(N),Ae=N.material;Ae.visible&&S.push(N,Ce,Ae,oe,Le.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||R.intersectsObject(N))){const Ce=ge.update(N),Ae=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Le.copy(N.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Le.copy(Ce.boundingSphere.center)),Le.applyMatrix4(N.matrixWorld).applyMatrix4(we)),Array.isArray(Ae)){const Oe=Ce.groups;for(let $e=0,it=Oe.length;$e<it;$e++){const Qe=Oe[$e],Tt=Ae[Qe.materialIndex];Tt&&Tt.visible&&S.push(N,Ce,Tt,oe,Le.z,Qe)}}else Ae.visible&&S.push(N,Ce,Ae,oe,Le.z,null)}}const be=N.children;for(let Ce=0,Ae=be.length;Ce<Ae;Ce++)ho(be[Ce],J,oe,le)}function ur(N,J,oe,le){const $=N.opaque,be=N.transmissive,Ce=N.transparent;x.setupLightsView(oe),Q===!0&&Ee.setGlobalState(U.clippingPlanes,oe),le&&Ne.viewport(G.copy(le)),$.length>0&&Zi($,J,oe),be.length>0&&Zi(be,J,oe),Ce.length>0&&Zi(Ce,J,oe),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function fr(N,J,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[le.id]===void 0&&(x.state.transmissionRenderTarget[le.id]=new Jr(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?ml:Ma,minFilter:Wr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const be=x.state.transmissionRenderTarget[le.id],Ce=le.viewport||G;be.setSize(Ce.z*U.transmissionResolutionScale,Ce.w*U.transmissionResolutionScale);const Ae=U.getRenderTarget();U.setRenderTarget(be),U.getClearColor(ue),W=U.getClearAlpha(),W<1&&U.setClearColor(16777215,.5),U.clear(),Ge&&et.render(oe);const Oe=U.toneMapping;U.toneMapping=or;const $e=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),x.setupLightsView(le),Q===!0&&Ee.setGlobalState(U.clippingPlanes,le),Zi(N,oe,le),O.updateMultisampleRenderTarget(be),O.updateRenderTargetMipmap(be),rt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Qe=0,Tt=J.length;Qe<Tt;Qe++){const Ct=J[Qe],jt=Ct.object,Ht=Ct.geometry,vt=Ct.material,Ze=Ct.group;if(vt.side===_a&&jt.layers.test(le.layers)){const Kt=vt.side;vt.side=Jn,vt.needsUpdate=!0,Oi(jt,oe,le,Ht,vt,Ze),vt.side=Kt,vt.needsUpdate=!0,it=!0}}it===!0&&(O.updateMultisampleRenderTarget(be),O.updateRenderTargetMipmap(be))}U.setRenderTarget(Ae),U.setClearColor(ue,W),$e!==void 0&&(le.viewport=$e),U.toneMapping=Oe}function Zi(N,J,oe){const le=J.isScene===!0?J.overrideMaterial:null;for(let $=0,be=N.length;$<be;$++){const Ce=N[$],Ae=Ce.object,Oe=Ce.geometry,$e=le===null?Ce.material:le,it=Ce.group;Ae.layers.test(oe.layers)&&Oi(Ae,J,oe,Oe,$e,it)}}function Oi(N,J,oe,le,$,be){N.onBeforeRender(U,J,oe,le,$,be),N.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),$.onBeforeRender(U,J,oe,le,N,be),$.transparent===!0&&$.side===_a&&$.forceSinglePass===!1?($.side=Jn,$.needsUpdate=!0,U.renderBufferDirect(oe,J,le,$,N,be),$.side=lr,$.needsUpdate=!0,U.renderBufferDirect(oe,J,le,$,N,be),$.side=_a):U.renderBufferDirect(oe,J,le,$,N,be),N.onAfterRender(U,J,oe,le,$,be)}function Ki(N,J,oe){J.isScene!==!0&&(J=Re);const le=Ye.get(N),$=x.state.lights,be=x.state.shadowsArray,Ce=$.state.version,Ae=We.getParameters(N,$.state,be,J,oe),Oe=We.getProgramCacheKey(Ae);let $e=le.programs;le.environment=N.isMeshStandardMaterial?J.environment:null,le.fog=J.fog,le.envMap=(N.isMeshStandardMaterial?ae:w).get(N.envMap||le.environment),le.envMapRotation=le.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,$e===void 0&&(N.addEventListener("dispose",ot),$e=new Map,le.programs=$e);let it=$e.get(Oe);if(it!==void 0){if(le.currentProgram===it&&le.lightsStateVersion===Ce)return po(N,Ae),it}else Ae.uniforms=We.getUniforms(N),N.onBeforeCompile(Ae,U),it=We.acquireProgram(Ae,Oe),$e.set(Oe,it),le.uniforms=Ae.uniforms;const Qe=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Qe.clippingPlanes=Ee.uniform),po(N,Ae),le.needsLights=mo(N),le.lightsStateVersion=Ce,le.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMap.value=$.state.directionalShadowMap,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotShadowMap.value=$.state.spotShadowMap,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMap.value=$.state.pointShadowMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),le.currentProgram=it,le.uniformsList=null,it}function Ta(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=yu.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function po(N,J){const oe=Ye.get(N);oe.outputColorSpace=J.outputColorSpace,oe.batching=J.batching,oe.batchingColor=J.batchingColor,oe.instancing=J.instancing,oe.instancingColor=J.instancingColor,oe.instancingMorph=J.instancingMorph,oe.skinning=J.skinning,oe.morphTargets=J.morphTargets,oe.morphNormals=J.morphNormals,oe.morphColors=J.morphColors,oe.morphTargetsCount=J.morphTargetsCount,oe.numClippingPlanes=J.numClippingPlanes,oe.numIntersection=J.numClipIntersection,oe.vertexAlphas=J.vertexAlphas,oe.vertexTangents=J.vertexTangents,oe.toneMapping=J.toneMapping}function Cu(N,J,oe,le,$){J.isScene!==!0&&(J=Re),O.resetTextureUnits();const be=J.fog,Ce=le.isMeshStandardMaterial?J.environment:null,Ae=I===null?U.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:lo,Oe=(le.isMeshStandardMaterial?ae:w).get(le.envMap||Ce),$e=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,it=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!oe.morphAttributes.position,Tt=!!oe.morphAttributes.normal,Ct=!!oe.morphAttributes.color;let jt=or;le.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(jt=U.toneMapping);const Ht=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,vt=Ht!==void 0?Ht.length:0,Ze=Ye.get(le),Kt=x.state.lights;if(Q===!0&&(_e===!0||N!==A)){const Tn=N===A&&le.id===C;Ee.setState(le,N,Tn)}let St=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Kt.state.version||Ze.outputColorSpace!==Ae||$.isBatchedMesh&&Ze.batching===!1||!$.isBatchedMesh&&Ze.batching===!0||$.isBatchedMesh&&Ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ze.instancing===!1||!$.isInstancedMesh&&Ze.instancing===!0||$.isSkinnedMesh&&Ze.skinning===!1||!$.isSkinnedMesh&&Ze.skinning===!0||$.isInstancedMesh&&Ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ze.instancingMorph===!1&&$.morphTexture!==null||Ze.envMap!==Oe||le.fog===!0&&Ze.fog!==be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==it||Ze.morphTargets!==Qe||Ze.morphNormals!==Tt||Ze.morphColors!==Ct||Ze.toneMapping!==jt||Ze.morphTargetsCount!==vt)&&(St=!0):(St=!0,Ze.__version=le.version);let xn=Ze.currentProgram;St===!0&&(xn=Ki(le,J,$));let Wt=!1,On=!1,Aa=!1;const Gt=xn.getUniforms(),sn=Ze.uniforms;if(Ne.useProgram(xn.program)&&(Wt=!0,On=!0,Aa=!0),le.id!==C&&(C=le.id,On=!0),Wt||A!==N){Ne.buffers.depth.getReversed()?(de.copy(N.projectionMatrix),KM(de),QM(de),Gt.setValue(j,"projectionMatrix",de)):Gt.setValue(j,"projectionMatrix",N.projectionMatrix),Gt.setValue(j,"viewMatrix",N.matrixWorldInverse);const An=Gt.map.cameraPosition;An!==void 0&&An.setValue(j,Xe.setFromMatrixPosition(N.matrixWorld)),Je.logarithmicDepthBuffer&&Gt.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Gt.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),A!==N&&(A=N,On=!0,Aa=!0)}if($.isSkinnedMesh){Gt.setOptional(j,$,"bindMatrix"),Gt.setOptional(j,$,"bindMatrixInverse");const Tn=$.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Gt.setValue(j,"boneTexture",Tn.boneTexture,O))}$.isBatchedMesh&&(Gt.setOptional(j,$,"batchingTexture"),Gt.setValue(j,"batchingTexture",$._matricesTexture,O),Gt.setOptional(j,$,"batchingIdTexture"),Gt.setValue(j,"batchingIdTexture",$._indirectTexture,O),Gt.setOptional(j,$,"batchingColorTexture"),$._colorsTexture!==null&&Gt.setValue(j,"batchingColorTexture",$._colorsTexture,O));const dn=oe.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&nt.update($,oe,xn),(On||Ze.receiveShadow!==$.receiveShadow)&&(Ze.receiveShadow=$.receiveShadow,Gt.setValue(j,"receiveShadow",$.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(sn.envMap.value=Oe,sn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&J.environment!==null&&(sn.envMapIntensity.value=J.environmentIntensity),On&&(Gt.setValue(j,"toneMappingExposure",U.toneMappingExposure),Ze.needsLights&&bl(sn,Aa),be&&le.fog===!0&&Pe.refreshFogUniforms(sn,be),Pe.refreshMaterialUniforms(sn,le,q,te,x.state.transmissionRenderTarget[N.id]),yu.upload(j,Ta(Ze),sn,O)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(yu.upload(j,Ta(Ze),sn,O),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Gt.setValue(j,"center",$.center),Gt.setValue(j,"modelViewMatrix",$.modelViewMatrix),Gt.setValue(j,"normalMatrix",$.normalMatrix),Gt.setValue(j,"modelMatrix",$.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Tn=le.uniformsGroups;for(let An=0,$r=Tn.length;An<$r;An++){const Qi=Tn[An];X.update(Qi,xn),X.bind(Qi,xn)}}return xn}function bl(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function mo(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(N,J,oe){Ye.get(N.texture).__webglTexture=J,Ye.get(N.depthTexture).__webglTexture=oe;const le=Ye.get(N);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=oe===void 0,le.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,J){const oe=Ye.get(N);oe.__webglFramebuffer=J,oe.__useDefaultFramebuffer=J===void 0};const hr=j.createFramebuffer();this.setRenderTarget=function(N,J=0,oe=0){I=N,H=J,z=oe;let le=!0,$=null,be=!1,Ce=!1;if(N){const Oe=Ye.get(N);if(Oe.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(j.FRAMEBUFFER,null),le=!1;else if(Oe.__webglFramebuffer===void 0)O.setupRenderTarget(N);else if(Oe.__hasExternalTextures)O.rebindTextures(N,Ye.get(N.texture).__webglTexture,Ye.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Qe=N.depthTexture;if(Oe.__boundDepthTexture!==Qe){if(Qe!==null&&Ye.has(Qe)&&(N.width!==Qe.image.width||N.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(N)}}const $e=N.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ce=!0);const it=Ye.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(it[J])?$=it[J][oe]:$=it[J],be=!0):N.samples>0&&O.useMultisampledRTT(N)===!1?$=Ye.get(N).__webglMultisampledFramebuffer:Array.isArray(it)?$=it[oe]:$=it,G.copy(N.viewport),se.copy(N.scissor),ie=N.scissorTest}else G.copy(Me).multiplyScalar(q).floor(),se.copy(Te).multiplyScalar(q).floor(),ie=ht;if(oe!==0&&($=hr),Ne.bindFramebuffer(j.FRAMEBUFFER,$)&&le&&Ne.drawBuffers(N,$),Ne.viewport(G),Ne.scissor(se),Ne.setScissorTest(ie),be){const Oe=Ye.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,Oe.__webglTexture,oe)}else if(Ce){const Oe=Ye.get(N.texture),$e=J;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Oe.__webglTexture,oe,$e)}else if(N!==null&&oe!==0){const Oe=Ye.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Oe.__webglTexture,oe)}C=-1},this.readRenderTargetPixels=function(N,J,oe,le,$,be,Ce){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ye.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ae=Ae[Ce]),Ae){Ne.bindFramebuffer(j.FRAMEBUFFER,Ae);try{const Oe=N.texture,$e=Oe.format,it=Oe.type;if(!Je.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-le&&oe>=0&&oe<=N.height-$&&j.readPixels(J,oe,le,$,lt.convert($e),lt.convert(it),be)}finally{const Oe=I!==null?Ye.get(I).__webglFramebuffer:null;Ne.bindFramebuffer(j.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(N,J,oe,le,$,be,Ce){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ye.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ae=Ae[Ce]),Ae){const Oe=N.texture,$e=Oe.format,it=Oe.type;if(!Je.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=N.width-le&&oe>=0&&oe<=N.height-$){Ne.bindFramebuffer(j.FRAMEBUFFER,Ae);const Qe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Qe),j.bufferData(j.PIXEL_PACK_BUFFER,be.byteLength,j.STREAM_READ),j.readPixels(J,oe,le,$,lt.convert($e),lt.convert(it),0);const Tt=I!==null?Ye.get(I).__webglFramebuffer:null;Ne.bindFramebuffer(j.FRAMEBUFFER,Tt);const Ct=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await ZM(j,Ct,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Qe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,be),j.deleteBuffer(Qe),j.deleteSync(Ct),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,J=null,oe=0){N.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,N=arguments[1]);const le=Math.pow(2,-oe),$=Math.floor(N.image.width*le),be=Math.floor(N.image.height*le),Ce=J!==null?J.x:0,Ae=J!==null?J.y:0;O.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,oe,0,0,Ce,Ae,$,be),Ne.unbindTexture()};const Ru=j.createFramebuffer(),Ml=j.createFramebuffer();this.copyTextureToTexture=function(N,J,oe=null,le=null,$=0,be=null){N.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,N=arguments[1],J=arguments[2],be=arguments[3]||0,oe=null),be===null&&($!==0?(Hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=$,$=0):be=0);let Ce,Ae,Oe,$e,it,Qe,Tt,Ct,jt;const Ht=N.isCompressedTexture?N.mipmaps[be]:N.image;if(oe!==null)Ce=oe.max.x-oe.min.x,Ae=oe.max.y-oe.min.y,Oe=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,it=oe.min.y,Qe=oe.isBox3?oe.min.z:0;else{const dn=Math.pow(2,-$);Ce=Math.floor(Ht.width*dn),Ae=Math.floor(Ht.height*dn),N.isDataArrayTexture?Oe=Ht.depth:N.isData3DTexture?Oe=Math.floor(Ht.depth*dn):Oe=1,$e=0,it=0,Qe=0}le!==null?(Tt=le.x,Ct=le.y,jt=le.z):(Tt=0,Ct=0,jt=0);const vt=lt.convert(J.format),Ze=lt.convert(J.type);let Kt;J.isData3DTexture?(O.setTexture3D(J,0),Kt=j.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(O.setTexture2DArray(J,0),Kt=j.TEXTURE_2D_ARRAY):(O.setTexture2D(J,0),Kt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,J.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,J.unpackAlignment);const St=j.getParameter(j.UNPACK_ROW_LENGTH),xn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Wt=j.getParameter(j.UNPACK_SKIP_PIXELS),On=j.getParameter(j.UNPACK_SKIP_ROWS),Aa=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ht.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ht.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,$e),j.pixelStorei(j.UNPACK_SKIP_ROWS,it),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Qe);const Gt=N.isDataArrayTexture||N.isData3DTexture,sn=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const dn=Ye.get(N),Tn=Ye.get(J),An=Ye.get(dn.__renderTarget),$r=Ye.get(Tn.__renderTarget);Ne.bindFramebuffer(j.READ_FRAMEBUFFER,An.__webglFramebuffer),Ne.bindFramebuffer(j.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Qi=0;Qi<Oe;Qi++)Gt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(N).__webglTexture,$,Qe+Qi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(J).__webglTexture,be,jt+Qi)),j.blitFramebuffer($e,it,Ce,Ae,Tt,Ct,Ce,Ae,j.DEPTH_BUFFER_BIT,j.NEAREST);Ne.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if($!==0||N.isRenderTargetTexture||Ye.has(N)){const dn=Ye.get(N),Tn=Ye.get(J);Ne.bindFramebuffer(j.READ_FRAMEBUFFER,Ru),Ne.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ml);for(let An=0;An<Oe;An++)Gt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,dn.__webglTexture,$,Qe+An):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,dn.__webglTexture,$),sn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Tn.__webglTexture,be,jt+An):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Tn.__webglTexture,be),$!==0?j.blitFramebuffer($e,it,Ce,Ae,Tt,Ct,Ce,Ae,j.COLOR_BUFFER_BIT,j.NEAREST):sn?j.copyTexSubImage3D(Kt,be,Tt,Ct,jt+An,$e,it,Ce,Ae):j.copyTexSubImage2D(Kt,be,Tt,Ct,$e,it,Ce,Ae);Ne.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else sn?N.isDataTexture||N.isData3DTexture?j.texSubImage3D(Kt,be,Tt,Ct,jt,Ce,Ae,Oe,vt,Ze,Ht.data):J.isCompressedArrayTexture?j.compressedTexSubImage3D(Kt,be,Tt,Ct,jt,Ce,Ae,Oe,vt,Ht.data):j.texSubImage3D(Kt,be,Tt,Ct,jt,Ce,Ae,Oe,vt,Ze,Ht):N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,be,Tt,Ct,Ce,Ae,vt,Ze,Ht.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,be,Tt,Ct,Ht.width,Ht.height,vt,Ht.data):j.texSubImage2D(j.TEXTURE_2D,be,Tt,Ct,Ce,Ae,vt,Ze,Ht);j.pixelStorei(j.UNPACK_ROW_LENGTH,St),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Wt),j.pixelStorei(j.UNPACK_SKIP_ROWS,On),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Aa),be===0&&J.generateMipmaps&&j.generateMipmap(Kt),Ne.unbindTexture()},this.copyTextureToTexture3D=function(N,J,oe=null,le=null,$=0){return N.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,le=arguments[1]||null,N=arguments[2],J=arguments[3],$=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,J,oe,le,$)},this.initRenderTarget=function(N){Ye.get(N).__webglFramebuffer===void 0&&O.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?O.setTextureCube(N,0):N.isData3DTexture?O.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?O.setTexture2DArray(N,0):O.setTexture2D(N,0),Ne.unbindTexture()},this.resetState=function(){H=0,z=0,I=null,Ne.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorspace=Nt._getDrawingBufferColorSpace(n),a.unpackColorSpace=Nt._getUnpackColorSpace()}}function d2({ambiance:o="daylight"}){const n=Ue.useRef(null);return Ue.useEffect(()=>{const a=n.current;if(!a)return;const s=new bE,c=new Si(65,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=45;const f=new h2({alpha:!0,antialias:!0,powerPreference:"low-power"});f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),a.appendChild(f.domElement);const h=o==="candlelight",d=(L,P,U,V=.9,H=0)=>{const z=document.createElement("canvas");z.width=64,z.height=64;const I=z.getContext("2d"),C=I.createRadialGradient(32,32,0,32,32,32);return C.addColorStop(0,`rgba(${L},${P},${U},${V})`),C.addColorStop(.4,`rgba(${L},${P},${U},${V*.4})`),C.addColorStop(1,`rgba(${L},${P},${U},${H})`),I.fillStyle=C,I.fillRect(0,0,64,64),new TE(z)},_=h?(()=>{const L=[],P=d(255,180,50,1),U=new Qn,V=50,H=new Float32Array(V*3),z=new Float32Array(V*3),I=new Float32Array(V),C=new Float32Array(V);for(let R=0;R<V;R++)H[R*3]=(Math.random()-.5)*70,H[R*3+1]=(Math.random()-.5)*50-5,H[R*3+2]=(Math.random()-.5)*30,z[R*3]=(Math.random()-.5)*.025,z[R*3+1]=Math.random()*.03+.015,z[R*3+2]=(Math.random()-.5)*.015,I[R]=Math.random()*Math.PI*2,C[R]=Math.random();U.setAttribute("position",new Bn(H,3));const A=new Vr({size:1.4,map:P,transparent:!0,blending:jr,depthWrite:!1,opacity:.9});L.push({pts:new Js(U,A),pos:H,vel:z,phase:I,life:C,count:V,type:"ember"});const G=d(245,130,30,.55),se=new Qn,ie=35,ue=new Float32Array(ie*3),W=new Float32Array(ie*3),F=new Float32Array(ie);for(let R=0;R<ie;R++)ue[R*3]=(Math.random()-.5)*80,ue[R*3+1]=(Math.random()-.5)*55,ue[R*3+2]=(Math.random()-.5)*25,W[R*3]=(Math.random()-.5)*.012,W[R*3+1]=Math.random()*.018+.006,F[R]=Math.random()*Math.PI*2;se.setAttribute("position",new Bn(ue,3));const te=new Vr({size:6.5,map:G,transparent:!0,blending:jr,depthWrite:!1,opacity:.6});L.push({pts:new Js(se,te),pos:ue,vel:W,phase:F,count:ie,type:"glow"});const q=d(180,60,10,.3),ve=new Qn,fe=20,Me=new Float32Array(fe*3),Te=new Float32Array(fe*3);for(let R=0;R<fe;R++)Me[R*3]=(Math.random()-.5)*60,Me[R*3+1]=(Math.random()-.5)*45,Me[R*3+2]=(Math.random()-.5)*20,Te[R*3]=(Math.random()-.5)*.007,Te[R*3+1]=Math.random()*.009+.003;ve.setAttribute("position",new Bn(Me,3));const ht=new Vr({size:14,map:q,transparent:!0,blending:jr,depthWrite:!1,opacity:.25});return L.push({pts:new Js(ve,ht),pos:Me,vel:Te,count:fe,type:"smoke"}),L})():(()=>{const L=[],P=d(255,215,100,.7),U=new Qn,V=60,H=new Float32Array(V*3),z=new Float32Array(V*3),I=new Float32Array(V);for(let Te=0;Te<V;Te++)H[Te*3]=(Math.random()-.5)*100,H[Te*3+1]=(Math.random()-.5)*70,H[Te*3+2]=(Math.random()-.5)*40,z[Te*3]=(Math.random()-.5)*.008,z[Te*3+1]=Math.random()*.012+.003,z[Te*3+2]=(Math.random()-.5)*.006,I[Te]=Math.random()*Math.PI*2;U.setAttribute("position",new Bn(H,3));const C=new Vr({size:2.2,map:P,transparent:!0,blending:jr,depthWrite:!1,opacity:.55});L.push({pts:new Js(U,C),pos:H,vel:z,phase:I,count:V,type:"mote"});const A=d(255,245,220,.95),G=new Qn,se=120,ie=new Float32Array(se*3),ue=new Float32Array(se*3);for(let Te=0;Te<se;Te++)ie[Te*3]=(Math.random()-.5)*90,ie[Te*3+1]=(Math.random()-.5)*65,ie[Te*3+2]=(Math.random()-.5)*35,ue[Te*3]=(Math.random()-.5)*.004,ue[Te*3+1]=Math.random()*.007+.001,ue[Te*3+2]=0;G.setAttribute("position",new Bn(ie,3));const W=new Vr({size:.7,map:A,transparent:!0,blending:Zr,depthWrite:!1,opacity:.35});L.push({pts:new Js(G,W),pos:ie,vel:ue,count:se,type:"dust"});const F=d(255,230,140,.25),te=new Qn,q=8,ve=new Float32Array(q*3),fe=new Float32Array(q*3);for(let Te=0;Te<q;Te++)ve[Te*3]=(Math.random()-.5)*70,ve[Te*3+1]=(Math.random()-.5)*50,ve[Te*3+2]=(Math.random()-.5)*20,fe[Te*3+1]=Math.random()*.005+.001;te.setAttribute("position",new Bn(ve,3));const Me=new Vr({size:12,map:F,transparent:!0,blending:jr,depthWrite:!1,opacity:.4});return L.push({pts:new Js(te,Me),pos:ve,vel:fe,count:q,type:"beam"}),L})();_.forEach(L=>s.add(L.pts));let m=0,y=0;const b=L=>{m=(L.clientX/window.innerWidth-.5)*3,y=(L.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",b);const T=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",T);let D,S=0;const x=()=>{D=requestAnimationFrame(x),S+=.016,_.forEach(L=>{const{pos:P,vel:U,count:V,type:H,phase:z,life:I}=L;for(let C=0;C<V;C++){P[C*3]+=U[C*3],P[C*3+1]+=U[C*3+1],P[C*3+2]+=U[C*3+2],z&&(P[C*3]+=Math.sin(S*.5+z[C])*.008);const A=H==="beam"?35:H==="smoke"?28:32;P[C*3+1]>A&&(P[C*3+1]=-A,P[C*3]=(Math.random()-.5)*(H==="dust"?90:80),I&&(I[C]=0))}if(L.pts.geometry.attributes.position.needsUpdate=!0,h&&(H==="ember"||H==="glow")){const C=.85+Math.sin(S*3.5+(H==="ember"?0:1.2))*.15;L.pts.material.opacity=(H==="ember"?.9:.6)*C}!h&&H==="mote"&&(L.pts.material.opacity=.45+Math.sin(S*.6)*.12)}),c.position.x+=(m-c.position.x)*.025,c.position.y+=(-y-c.position.y)*.025,c.lookAt(0,0,0),f.render(s,c)};return x(),()=>{cancelAnimationFrame(D),window.removeEventListener("mousemove",b),window.removeEventListener("resize",T),a!=null&&a.contains(f.domElement)&&a.removeChild(f.domElement),_.forEach(L=>{var P;L.pts.geometry.dispose(),(P=L.pts.material.map)==null||P.dispose(),L.pts.material.dispose()}),f.dispose()}},[o]),M.jsx("div",{ref:n,className:"fixed inset-0 pointer-events-none z-0",style:{transition:"opacity 1s ease"},"aria-hidden":"true"})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function m2(o,n,a=[]){if(n==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:p2(o),size:24,node:n,...a.length>0?{aliases:a}:{}}}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=o=>{let n="",a=!1;for(const s of o){if(s==="-"||s==="_"||s<=" "){a=n.length>0;continue}n.length===0?n+=s.toLowerCase():n+=a?s.toUpperCase():s,a=!1}return n};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=o=>{const n=g2(o);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=(...o)=>o.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Id(o){return o!=null}function _2(o,n={}){var y,b;const a=n.attributeNames??{},s=T=>a[T]??T,c=o.size??o.width??Fr.width,f=o.size??o.height??Fr.height,h=((y=o.aliases)==null?void 0:y.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],d=[...o.name?[`lucide-${o.name}`]:[],...h],p=((b=n.className)==null?void 0:b.split(" ").filter(Boolean))??[],v=n.includeDefaultClasses===!1?wp(...p):wp("lucide",...d,...p),_=n.absoluteStrokeWidth?Number(n.strokeWidth??Fr["stroke-width"])*Number(o.size??o.width??Fr.width)/Number(n.size??n.width??Fr.width):n.strokeWidth??Fr["stroke-width"];return["svg",{...Object.entries(Fr).reduce((T,[D,S])=>(T[s(D)]=S,T),{}),..."color"in n&&n.color&&{[s("stroke")]:n.color},..."size"in n&&Id(n.size)&&{[s("width")]:n.size,[s("height")]:n.size},..."width"in n&&Id(n.width)&&{[s("width")]:n.width},..."height"in n&&Id(n.height)&&{[s("height")]:n.height},[s("stroke-width")]:_,...v&&{[s("class")]:v},[s("viewBox")]:`0 0 ${c} ${f}`,...n.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},o.node.map(T=>{const[D,S,x]=T,L=n.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...S}:S;return x?[D,L,x]:[D,L]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function x2(o,n={}){return _2(o,{...n,attributeNames:{...n.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=o=>{for(const n in o)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1},S2=Ue.createContext({}),b2=()=>Ue.useContext(S2),M2=Ue.forwardRef(({color:o,size:n,width:a,height:s,strokeWidth:c,absoluteStrokeWidth:f,nonScalingStroke:h,className:d="",children:p,iconNode:v=[],icon:_={node:v,aliases:[],size:24},...m},y)=>{const{size:b=24,strokeWidth:T=2,absoluteStrokeWidth:D=!1,nonScalingStroke:S=!1,color:x="currentColor",className:L=""}=b2()??{},P=!!p||y2(m),[U,V,H=[]]=x2(_,{color:o??x,width:a??n??b,height:s??n??b,strokeWidth:c??T,absoluteStrokeWidth:f??D,nonScalingStroke:h??S,className:wp(L,d),hasA11yProp:P,attributes:m});return Ue.createElement(U,{ref:y,...V},[...H.map(([z,I])=>Ue.createElement(z,I)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function tn(o,n=[],a=[]){const s=typeof o=="string"?m2(o,n,a):o,c=Ue.forwardRef(({className:f,...h},d)=>Ue.createElement(M2,{ref:d,icon:s,className:f,...h}));return s.name&&(c.displayName=v2(s.name)),c}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"arrow-down-to-line",size:24,node:[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]};Fx.node;const E2=tn(Fx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"arrow-up-down",size:24,node:[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]};Hx.node;const T2=tn(Hx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Gx.node;const pl=tn(Gx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};Vx.node;const A2=tn(Vx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};kx.node;const w2=tn(kx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};jx.node;const Xx=tn(jx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};qx.node;const Yx=tn(qx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Wx.node;const C2=tn(Wx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Zx.node;const Kx=tn(Zx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};Qx.node;const Fp=tn(Qx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"pen-line",size:24,node:[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-3"]};Jx.node;const Hp=tn(Jx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};$x.node;const ey=tn($x);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};ty.node;const Gp=tn(ty);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};ny.node;const R2=tn(ny);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};iy.node;const ex=tn(iy);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"shuffle",size:24,node:[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]};ay.node;const N2=tn(ay);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};ry.node;const D2=tn(ry);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};sy.node;const oy=tn(sy);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly={name:"type",size:24,node:[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]]};ly.node;const cy=tn(ly);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};uy.node;const U2=tn(uy);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};fy.node;const L2=tn(fy);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};hy.node;const Vp=tn(hy),O2=[{id:"book-frankenstein",title:"Frankenstein",author:"Mary Shelley",category:"Classic Fiction",year:1818,rating:4.9,pages:280,height:260,thickness:44,spineColor:"#2A362B",textColor:"#F3EAD8",coverTexture:"leather",coverEmblem:"dragon",fontStyle:"cormorant",description:"Mary Shelley's foundational gothic masterpiece of ambition, science, and the tragic consequences of creating life beyond human limits.",tableOfContents:["Letter I: To Mrs. Saville, England","Chapter I: Geneva and Youth","Chapter IV: The Secret of Life","Chapter V: The Creature Awakens","Chapter X: Encounter on the Mer de Glace"],samplePages:[{pageNumber:1,title:"Letter I",content:`You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.

I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight.`},{pageNumber:2,title:"Chapter IV: The Discovery",content:`No one can conceive the variety of feelings which bore me onwards, like a whirlwind, eager to penetrate into the secret mechanisms of nature. In the midst of this darkness a sudden light broke in upon me—a light so brilliant and wondrous, yet so simple.

I found that I possessed the key to bestow animation upon lifeless matter. The astonishment which I had at first experienced on this discovery soon gave place to delight and rapture.`},{pageNumber:3,title:"Chapter V: The Spark of Being",content:`It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet.

It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.`},{pageNumber:4,title:"The Awakening",content:`How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful! Great God!

His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes.`}],tags:["Gothic","Science Fiction","Classics","Horror"]},{id:"book-alice",title:"Alice in Wonderland",author:"Lewis Carroll",category:"Fantasy & Magic",year:1865,rating:4.9,pages:192,height:240,thickness:36,spineColor:"#1D4ED8",textColor:"#FEF3C7",coverTexture:"cloth",coverEmblem:"champagne",fontStyle:"playfair",description:"Lewis Carroll's whimsical classic following young Alice down a rabbit hole into a surreal underground realm of wonder, logic, and madness.",tableOfContents:["Chapter I: Down the Rabbit-Hole","Chapter II: The Pool of Tears","Chapter V: Advice from a Caterpillar","Chapter VI: Pig and Pepper","Chapter VII: A Mad Tea-Party"],samplePages:[{pageNumber:1,title:"Chapter I: Down the Rabbit-Hole",content:`Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'

So she was considering in her own mind whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.`},{pageNumber:2,title:"Down the Well",content:`There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet.

Burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge. In another moment down went Alice after it, never once considering how in the world she was to get out again.`},{pageNumber:3,title:"The Fall",content:`The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.

Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything.`},{pageNumber:4,title:"Drink Me",content:`There was nothing on the table but a tiny golden key, and Alice's first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them.

However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high. Round its neck was a paper label, with the words 'DRINK ME' beautifully printed on it in large letters.`}],tags:["Wonderland","Fantasy","Classic","Adventure"]},{id:"book-dorian-gray",title:"The Picture of Dorian Gray",author:"Oscar Wilde",category:"Classic Fiction",year:1890,rating:4.8,pages:256,height:252,thickness:40,spineColor:"#9F1239",textColor:"#FFE4E6",coverTexture:"velvet",coverEmblem:"palette",fontStyle:"playfair",description:"Oscar Wilde's dazzling, decadent tale of youth, vanity, moral decay, and a portrait that bears the hidden sins of its ageless subject.",tableOfContents:["The Preface: Art and Morality","Chapter I: The Studio of Basil Hallward","Chapter II: Lord Henry's Philosophy","Chapter VII: Sibyl Vane's Performance","Chapter XX: The Final Canvas"],samplePages:[{pageNumber:1,title:"The Preface",content:`The artist is the creator of beautiful things. To reveal art and conceal the artist is art's aim. The critic is he who can translate into another manner or a new material his impression of beautiful things.

There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all. The nineteenth century dislike of Realism is the rage of Caliban seeing his own face in a glass. The moral life of man forms part of the subject-matter of the artist, but the morality of art consists in the perfect use of an imperfect medium.`},{pageNumber:2,title:"Chapter I: The Studio",content:`The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.

In the centre of the room, clamped to an upright easel, stood the full-length portrait of a young man of extraordinary personal beauty, and in front of it, some little distance off, was sitting the artist himself, Basil Hallward.`},{pageNumber:3,title:"The Influence of Youth",content:`'Because you have the most marvellous youth, and youth is the one thing worth having.'

'I don't feel that, Lord Henry.'

'No, you don't feel it now. Some day, when you are old and wrinkled and ugly, when thought has seared your forehead with its lines, and hideous passions have branded your lips with their hideous fires, you will feel it. You will feel it terribly. Now, wherever you go, you charm the world. Will it always be so?'`},{pageNumber:4,title:"The Fatal Wish",content:`Dorian Gray looked at the open portrait. A look of joy came into his eyes, as if he had recognized himself for the first time.

'How sad it is!' murmured Dorian Gray, with his eyes still fixed upon his own picture. 'How sad it is! I shall grow old, and horrible, and dreadful. But this picture will remain always young. If it were only the other way! If it were I who was to be always young, and the picture that was to grow old! For that—for that—I would give everything!'`}],tags:["Aestheticism","Gothic","Psychological","Classics"]},{id:"book-sherlock",title:"Adventures of Sherlock Holmes",author:"Sir Arthur Conan Doyle",category:"Mystery & Crime",year:1892,rating:4.9,pages:308,height:258,thickness:44,spineColor:"#854D0E",textColor:"#FEF9C3",coverTexture:"leather",coverEmblem:"magnifier",fontStyle:"cormorant",description:"The quintessential detective encounters of Sherlock Holmes and Dr. John Watson, beginning with the matchless Irene Adler in A Scandal in Bohemia.",tableOfContents:["I: A Scandal in Bohemia","II: The Red-Headed League","III: A Case of Identity","IV: The Boscombe Valley Mystery","V: The Five Orange Pips"],samplePages:[{pageNumber:1,title:"I: A Scandal in Bohemia",content:`To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex.

It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen.`},{pageNumber:2,title:"Baker Street Chamber",content:`I had called upon my friend Sherlock Holmes upon the second night after Christmas, with the intention of wishing him the compliments of the season. He was lounging upon the sofa in a purple dressing-gown, a pipe-rack within his reach upon the right, and a pile of crumpled morning papers, evidently newly studied, near at hand.

Beside the couch was a wooden chair, and on the angle of its back hung a very seedy and disreputable hard-felt hat, much the worse for wear.`},{pageNumber:3,title:"The Science of Deduction",content:`'You see, my dear Watson, but you do not observe. The distinction is clear. For example, you have frequently seen the steps which lead up from the hall to this room.'

'Frequently.'

'How often?'

'Well, some hundreds of times.'

'Then how many are there?'

'How many? I don't know.'

'Quite so! You have not observed. And yet you have seen. That is just my point. Now, I know that there are seventeen steps, because I have both seen and observed.'`},{pageNumber:4,title:"The Disguise",content:`It was close upon four before the door opened, and a drunken-looking groom, ill-kempt and side-whiskered, with an inflamed face and disreputable clothes, walked into the room.

Accustomed as I was to my friend's amazing powers in the use of disguises, I had to look three times before I was certain that it was indeed he. With a nod he vanished into the bedroom, whence he emerged in five minutes tweed-suited and respectable, as of old.`}],tags:["Detective","Mystery","Baker Street","Victorian"]},{id:"book-meditations",title:"Meditations",author:"Marcus Aurelius",category:"Philosophy",year:180,rating:4.9,pages:196,height:236,thickness:34,spineColor:"#9A3412",textColor:"#FEF3C7",coverTexture:"leather",coverEmblem:"pillar",fontStyle:"cinzel",description:"The private journal of the Roman Emperor Marcus Aurelius, offering timeless Stoic wisdom on inner peace, virtue, mortality, and resilience.",tableOfContents:["Book I: Debts and Lessons","Book II: On the River Gran","Book IV: The Inner Citadel","Book VII: Endurance of Soul","Book XII: The Present Moment"],samplePages:[{pageNumber:1,title:"Book II : 1",content:`When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they cannot distinguish good from evil.

But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own—not of the same blood or birth, but the same mind, and possessing a share of the divine.`},{pageNumber:2,title:"Book IV : The Inner Citadel",content:`People look for retreats for themselves, in the country, by the coast, or in the hills. There is nowhere that a person can find a more peaceful and trouble-free retreat than in his own mind.

So constantly give yourself this retreat, and renew yourself. Let your basic principles be brief and fundamental, the kind that will at once wash away all anguish and send you back without any irritation at the world to which you must return.`},{pageNumber:3,title:"Book VII : The River of Time",content:`Time is a river, a violent current of events, glimpsed once and already carried past us, and another follows and is gone.

Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. Look through the outward veneer of people and circumstances, and keep your core unharmed.`},{pageNumber:4,title:"Book XII : The Final Stage",content:`You have embarked, you have made the voyage, you have come to shore; now step out. If for another life, there is no place empty of gods, even there; if to oblivion, you will be done with endurance of pleasures and pains, and serving a vessel that is vastly inferior to the master within it.

Depart then with goodwill; for the power that frees you is gracious.`}],tags:["Stoicism","Roman History","Philosophy","Wisdom"]},{id:"book-pride-prejudice",title:"Pride and Prejudice",author:"Jane Austen",category:"Classic Fiction",year:1813,rating:4.9,pages:340,height:262,thickness:48,spineColor:"#354F52",textColor:"#CAD2C5",coverTexture:"linen",coverEmblem:"book",fontStyle:"playfair",description:"Jane Austen's sparkling, witty masterpiece exploring societal expectations, pride, first impressions, and the spirited romance between Elizabeth Bennet and Mr. Darcy.",tableOfContents:["Chapter I: A Truth Universally Acknowledged","Chapter III: The Ball at Meryton","Chapter XXXIV: Mr. Darcy's Proposal","Chapter XLIII: Pemberley Explored","Chapter LVIII: In the Grounds of Longbourn"],samplePages:[{pageNumber:1,title:"Chapter I",content:`It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.`},{pageNumber:2,title:"Netherfield Park",content:`'My dear Mr. Bennet,' said his lady to him one day, 'have you heard that Netherfield Park is let at last?'

Mr. Bennet replied that he had not.

'But it is,' returned she; 'for Mrs. Long has just been here, and she told me all about it.'

Mr. Bennet made no answer.

'Do you not want to know who has taken it?' cried his wife impatiently.

'You want to tell me, and I have no objection to hearing it.'`},{pageNumber:3,title:"Chapter III: The Assembly",content:`Mr. Darcy was the principal attraction of the room. He was discovered to be proud, to be above his company, and above being pleased; and not all his large estate in Derbyshire could then save him from having a most forbidding, disagreeable countenance.

Elizabeth Bennet had been obliged, by the scarcity of gentlemen, to sit down for two dances; and during part of that time, Mr. Darcy had been standing near enough for her to hear a conversation between him and Mr. Bingley.`},{pageNumber:4,title:"First Impressions",content:`'She is tolerable; but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men.'

Elizabeth remained with no very cordial feelings toward him. She told the story, however, with great spirit among her friends; for she had a lively, playful disposition, which delighted in anything ridiculous.`}],tags:["Romance","Regency","Classics","Wit"]},{id:"book-time-machine",title:"The Time Machine",author:"H.G. Wells",category:"Sci-Fi & Tech",year:1895,rating:4.8,pages:160,height:238,thickness:32,spineColor:"#0F172A",textColor:"#38BDF8",coverTexture:"cyber",coverEmblem:"circuit",fontStyle:"mono",description:"The pioneering science fiction novella introducing the fourth dimension of space-time and hurling a Victorian inventor 800,000 years into humanity's twilight.",tableOfContents:["I: The Fourth Dimension","II: The Mechanism Demonstrated","III: The Flight through Time","IV: The Golden Age of the Eloi","V: The Dark Morlocks Below"],samplePages:[{pageNumber:1,title:"I: The Fourth Dimension",content:`The Time Traveller was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated. The fire burned brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses.

'You must follow me carefully. I shall have to controvert one or two ideas that are almost universally accepted. The geometry, for instance, they taught you at school is founded on a misconception.'`},{pageNumber:2,title:"Space and Time",content:`'Clearly,' the Time Traveller proceeded, 'any real body must have extension in four directions: it must have Length, Breadth, Thickness, and—Duration. But through a natural infirmity of the flesh, which I will explain to you in a moment, we incline to overlook this fact.

There are really four dimensions, three which we call the three planes of Space, and a fourth, Time. There is, however, a tendency to draw an unreal distinction between the former three dimensions and the latter.'`},{pageNumber:3,title:"III: The Flight through Time",content:`I drew a breath, set my teeth, gripped the starting lever with both hands, and went off with a thud. The laboratory grew faint and hazy, then went out like a blown candle.

Night followed day like the flapping of a black wing. The dim suggestion of the laboratory seemed presently to fall away from me, and I saw the sun hopping swiftly across the sky, leaping it every minute, and every minute marking a day. I supposed strange things were happening to the Earth.`},{pageNumber:4,title:"Year 802,701 AD",content:`As I stood there in the gathering dark I thought that in this golden age the old problem of population had at last solved itself. Humanity had achieved ease, comfort, and peace, and had paid for it by dwindling into fragile, child-like beings.

Then, from the deep circular shafts in the earth, came the faint, rhythmic thudding of great underground machines, and I realized with horror that the Eloi were not alone in this twilight world.`}],tags:["Science Fiction","Time Travel","Futurism","Classics"]},{id:"book-prophet",title:"The Prophet",author:"Kahlil Gibran",category:"Philosophy",year:1923,rating:4.9,pages:140,height:230,thickness:30,spineColor:"#B08968",textColor:"#EDE0D4",coverTexture:"washi",coverEmblem:"galaxy",fontStyle:"cinzel",description:"Kahlil Gibran's poetic masterpiece of prose poetry exploring universal human truths on love, marriage, joy, sorrow, freedom, and self-knowledge.",tableOfContents:["The Coming of the Ship","On Love","On Joy and Sorrow","On Work and Craft","The Farewell"],samplePages:[{pageNumber:1,title:"The Coming of the Ship",content:`Almustafa, the chosen and the beloved, who was a dawn unto his own day, had waited twelve years in the city of Orphalese for his ship that was to return and bear him back to the isle of his birth.

And in the twelfth year, on the seventh day of Ielool, the month of reaping, he climbed the hill without the city walls and looked seaward; and he beheld his ship coming with the mist. Then the gates of his heart were flung open, and his joy flew far over the sea.`},{pageNumber:2,title:"On Love",content:`When love beckons to you, follow him, though his ways are hard and steep. And when his wings enfold you yield to him, though the sword hidden among his pinions may wound you.

Love gives naught but itself and takes naught but from itself. Love possesses not nor would it be possessed; for love is sufficient unto love. Think not you can direct the course of love, for love, if it finds you worthy, directs your course.`},{pageNumber:3,title:"On Joy and Sorrow",content:`Your joy is your sorrow unmasked. And the selfsame well from which your laughter rises was oftentimes filled with your tears. And how else can it be?

The deeper that sorrow carves into your being, the more joy you can contain. Is not the cup that holds your wine the very cup that was burned in the potter's oven? When you are sorrowful look again in your heart, and you shall see that in truth you are weeping for that which has been your delight.`},{pageNumber:4,title:"On Work",content:`You work that you may keep pace with the earth and the soul of the earth. For to be idle is to become a stranger unto the seasons, and to step out of life's procession, that marches in majesty and proud submission towards the infinite.

And what is it to work with love? It is to weave the cloth with threads drawn from your heart, even as if your beloved were to wear that cloth. Work is love made visible.`}],tags:["Poetry","Spirituality","Philosophy","Classics"]}],tx=["All","Classic Fiction","Sci-Fi & Tech","Philosophy","Fantasy & Magic","History & Arts","Mystery & Crime"];class z2{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx){const n=window.AudioContext||window.webkitAudioContext;n&&(this.ctx=new n)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playPageTurn(){if(this.muted||(this.init(),!this.ctx))return;const n=this.ctx.currentTime,a=this.ctx.sampleRate*.18,s=this.ctx.createBuffer(1,a,this.ctx.sampleRate),c=s.getChannelData(0);for(let p=0;p<a;p++)c[p]=(Math.random()*2-1)*Math.exp(-p/(a*.4));const f=this.ctx.createBufferSource();f.buffer=s;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(1400,n),h.frequency.exponentialRampToValueAtTime(800,n+.18),h.Q.setValueAtTime(3,n);const d=this.ctx.createGain();d.gain.setValueAtTime(.01,n),d.gain.linearRampToValueAtTime(.35,n+.03),d.gain.exponentialRampToValueAtTime(.001,n+.18),f.connect(h),h.connect(d),d.connect(this.ctx.destination),f.start(n)}playBookPickUp(){if(this.muted||(this.init(),!this.ctx))return;const n=this.ctx.currentTime,a=this.ctx.createOscillator(),s=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(160,n),a.frequency.exponentialRampToValueAtTime(60,n+.12),s.gain.setValueAtTime(.3,n),s.gain.exponentialRampToValueAtTime(.001,n+.12),a.connect(s),s.connect(this.ctx.destination),a.start(n),a.stop(n+.12),this.playShelfSlide(.1)}playBookOpen(){if(this.muted||(this.init(),!this.ctx))return;const n=this.ctx.currentTime,a=this.ctx.sampleRate*.35,s=this.ctx.createBuffer(1,a,this.ctx.sampleRate),c=s.getChannelData(0);for(let p=0;p<a;p++)c[p]=(Math.random()*2-1)*Math.sin(p/a*Math.PI);const f=this.ctx.createBufferSource();f.buffer=s;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(400,n),h.frequency.linearRampToValueAtTime(2200,n+.2),h.frequency.exponentialRampToValueAtTime(300,n+.35);const d=this.ctx.createGain();d.gain.setValueAtTime(.01,n),d.gain.linearRampToValueAtTime(.28,n+.1),d.gain.exponentialRampToValueAtTime(.001,n+.35),f.connect(h),h.connect(d),d.connect(this.ctx.destination),f.start(n)}playBookClose(){if(this.muted||(this.init(),!this.ctx))return;const n=this.ctx.currentTime,a=this.ctx.createOscillator(),s=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(130,n),a.frequency.exponentialRampToValueAtTime(45,n+.22),s.gain.setValueAtTime(.45,n),s.gain.exponentialRampToValueAtTime(.001,n+.22),a.connect(s),s.connect(this.ctx.destination),a.start(n),a.stop(n+.22);const c=this.ctx.createBuffer(1,this.ctx.sampleRate*.08,this.ctx.sampleRate),f=c.getChannelData(0);for(let v=0;v<f.length;v++)f[v]=(Math.random()*2-1)*Math.exp(-v/(f.length*.3));const h=this.ctx.createBufferSource();h.buffer=c;const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=1200;const p=this.ctx.createGain();p.gain.setValueAtTime(.2,n),p.gain.exponentialRampToValueAtTime(.001,n+.08),h.connect(d),d.connect(p),p.connect(this.ctx.destination),h.start(n)}playShelfSlide(n=.15){if(this.muted||(this.init(),!this.ctx))return;const a=this.ctx.currentTime,s=this.ctx.sampleRate*.12,c=this.ctx.createBuffer(1,s,this.ctx.sampleRate),f=c.getChannelData(0);for(let v=0;v<s;v++)f[v]=(Math.random()*2-1)*.5;const h=this.ctx.createBufferSource();h.buffer=c;const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(600,a),d.frequency.linearRampToValueAtTime(900,a+.12),d.Q.value=4;const p=this.ctx.createGain();p.gain.setValueAtTime(n,a),p.gain.exponentialRampToValueAtTime(.001,a+.12),h.connect(d),d.connect(p),p.connect(this.ctx.destination),h.start(a)}playStamp(){if(this.muted||(this.init(),!this.ctx))return;const n=this.ctx.currentTime,a=this.ctx.createOscillator(),s=this.ctx.createGain();a.type="square",a.frequency.setValueAtTime(320,n),a.frequency.exponentialRampToValueAtTime(80,n+.09),s.gain.setValueAtTime(.35,n),s.gain.exponentialRampToValueAtTime(.001,n+.09),a.connect(s),s.connect(this.ctx.destination),a.start(n),a.stop(n+.09)}}const En=new z2;function P2({searchQuery:o,onSearchChange:n,activeCategory:a,onCategoryChange:s,onOpenAddModal:c,ambiance:f,onToggleAmbiance:h,onRandomPick:d,sortBy:p,onSortChange:v}){const[_,m]=Ue.useState(En.muted),[y,b]=Ue.useState(!1),[T,D]=Ue.useState(!1),S=()=>{const L=En.toggleMute();m(L)},x=f==="candlelight";return M.jsxs("header",{className:"w-full max-w-5xl mx-auto pt-8 pb-3 px-4 select-none z-20",children:[M.jsxs("div",{className:"flex items-center justify-between gap-4 pb-4 border-b border-[#e8ded0] dark:border-[#3d2a1b]",children:[M.jsx("div",{className:"flex items-center gap-2.5",children:M.jsx("span",{className:"font-serif font-bold text-lg tracking-widest uppercase transition-colors",children:"ATHENAEUM"})}),M.jsx("nav",{className:"hidden md:flex items-center gap-6 text-xs tracking-wider",children:tx.map(L=>{const P=a===L;return M.jsxs("button",{onClick:()=>{En.playShelfSlide(.06),s(L)},className:`transition-colors cursor-pointer py-1 relative ${P?"font-bold opacity-100":"opacity-40 hover:opacity-80"}`,children:[M.jsx("span",{children:L}),P&&M.jsx("span",{className:"absolute bottom-0 left-0 right-0 h-[1.5px] bg-current rounded-full"})]},L)})}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("button",{onClick:d,className:"w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer",title:"Pick a random book from the shelf",children:M.jsx(N2,{className:"w-3.5 h-3.5"})}),M.jsx("button",{onClick:h,className:"w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer",title:x?"Switch to Daylight":"Switch to Candlelight Dusk",children:x?M.jsx(D2,{className:"w-4 h-4 text-amber-300"}):M.jsx(C2,{className:"w-4 h-4 text-amber-600"})}),M.jsxs("div",{className:"relative",children:[M.jsx("button",{onClick:()=>D(!T),className:"w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer",title:"Organize Shelf",children:M.jsx(T2,{className:"w-3.5 h-3.5"})}),T&&M.jsx("div",{className:"absolute right-0 top-10 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-1.5 shadow-xl text-xs z-50 whitespace-nowrap flex flex-col gap-1",children:[{id:"default",label:"Default Order"},{id:"thickness",label:"Book Width / Thickness"},{id:"year",label:"Publication Year"},{id:"title",label:"Title (A → Z)"}].map(L=>M.jsx("button",{onClick:()=>{v(L.id),D(!1),En.playShelfSlide(.08)},className:`px-3 py-1 text-left rounded-lg transition cursor-pointer ${p===L.id?"bg-stone-100 dark:bg-stone-800 font-bold":"opacity-70 hover:opacity-100"}`,children:L.label},L.id))})]}),M.jsx("div",{className:"relative flex items-center",children:y?M.jsxs("div",{className:"flex items-center bg-white dark:bg-stone-900 border border-[#ded5c7] dark:border-stone-800 rounded-full px-3 py-1 shadow-xs animate-in fade-in zoom-in-95 duration-150",children:[M.jsx(ex,{className:"w-3.5 h-3.5 opacity-40 mr-2"}),M.jsx("input",{type:"text",autoFocus:!0,placeholder:"Filter volumes...",value:o,onChange:L=>n(L.target.value),className:"bg-transparent text-xs focus:outline-none w-32 sm:w-40"}),M.jsx("button",{onClick:()=>{b(!1),n("")},className:"opacity-40 hover:opacity-80 text-xs ml-1",children:"✕"})]}):M.jsx("button",{onClick:()=>b(!0),className:"w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer",title:"Search",children:M.jsx(ex,{className:"w-4 h-4"})})}),M.jsx("button",{onClick:c,className:"w-8 h-8 rounded-full bg-stone-900 dark:bg-amber-400 text-white dark:text-stone-950 flex items-center justify-center shadow-xs transition cursor-pointer",title:"Place New Book",children:M.jsx(Gp,{className:"w-4 h-4"})}),M.jsx("button",{onClick:S,className:"w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer",title:_?"Unmute":"Mute",children:_?M.jsx(L2,{className:"w-4 h-4"}):M.jsx(U2,{className:"w-4 h-4"})})]})]}),M.jsx("div",{className:"md:hidden flex items-center gap-3 overflow-x-auto py-2 scrollbar-none text-xs",children:tx.map(L=>M.jsx("button",{onClick:()=>{En.playShelfSlide(.06),s(L)},className:`whitespace-nowrap px-2.5 py-1 rounded-full ${a===L?"bg-stone-900 dark:bg-amber-400 text-white dark:text-stone-950 font-semibold":"opacity-50 hover:opacity-100"}`,children:L},L))})]})}function I2({book:o,isPulledOut:n,isPushingBack:a,onShelfSelect:s,onSelect:c,onEditBook:f,onDeleteBook:h}){var U;const[d,p]=Ue.useState(!1),[v,_]=Ue.useState(!1);Ue.useEffect(()=>{if(n){const V=setTimeout(()=>_(!0),560);return()=>clearTimeout(V)}else _(!1)},[n]);const m=()=>{n||(p(!0),En.playShelfSlide(.06))},y=()=>{p(!1)},b=()=>{n?(En.playShelfSlide(.12),s(o)):(En.playBookPickUp(),s(o))},T=V=>{V.stopPropagation(),En.playBookOpen(),c(o)},D=V=>{switch(V){case"cormorant":return"font-cormorant tracking-wider";case"cinzel":return"font-cinzel tracking-widest";case"mono":return"font-mono-tech tracking-tight";case"playfair":default:return"font-playfair tracking-wide"}},S=V=>{switch(V){case"linen":return"texture-linen";case"marbled":return"texture-marbled";case"goldleaf":return"texture-goldleaf";case"velvet":return"texture-velvet";case"cyber":return"texture-cyber";case"botanical":return"texture-botanical";case"washi":return"texture-washi";case"leather":default:return"texture-leather"}},x=o.height?Math.min(270,Math.max(225,o.height)):245,L=o.thickness?Math.min(65,Math.max(30,o.thickness)):40,P=()=>n&&v?"book-spine-selected float-idle":n?"book-spine-selected":a?"book-spine-pushing-back":"";return M.jsxs("div",{className:"relative flex flex-col items-center select-none group",style:{zIndex:n?50:d?40:10},onMouseEnter:m,onMouseLeave:y,children:[n&&M.jsx("div",{className:"put-back-hint",children:"↓ tap to put back"}),M.jsxs("div",{onClick:b,className:`relative transition-all duration-300 ease-out cursor-pointer preserve-3d ${P()}`,style:{height:`${x}px`,width:`${L}px`,...!n&&!a?{transform:d?"translateY(-14px) scale(1.025)":"translateY(0) scale(1)"}:{}},children:[M.jsxs("div",{className:`w-full h-full rounded-t-[4px] rounded-b-[2px] book-spine-tactile flex flex-col justify-between items-center py-3.5 px-1 relative overflow-hidden transition-colors border-x border-t border-white/20 ${S(o.coverTexture)}`,style:{backgroundColor:o.spineColor||"#2A362B"},children:[M.jsx("div",{className:"book-spotlight-shimmer"}),M.jsx("div",{className:"absolute top-5 left-1 right-1 h-[1px] bg-white/35"}),M.jsx("div",{className:"absolute bottom-5 left-1 right-1 h-[1px] bg-white/35"}),M.jsx("div",{className:"pt-0.5 z-10 text-center",children:M.jsx("div",{className:"w-4.5 h-4.5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center mx-auto shadow-xs",children:M.jsx("span",{className:"text-[9px] font-serif font-bold text-white/90",children:((U=o.category)==null?void 0:U.charAt(0))||"B"})})}),M.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center py-2 my-auto overflow-hidden z-10 w-full",children:[M.jsx("div",{className:`[writing-mode:vertical-rl] rotate-180 text-center font-bold text-xs uppercase truncate max-h-[135px] ${D(o.fontStyle)}`,style:{color:o.textColor||"#F3EAD8",textShadow:"0 1px 2px rgba(0,0,0,0.3)"},title:o.title,children:o.title}),M.jsx("div",{className:"[writing-mode:vertical-rl] rotate-180 text-[8.5px] font-medium tracking-wider truncate max-h-[55px] mt-2 opacity-85 text-white/85",title:o.author,children:o.author})]}),M.jsx("div",{className:"pb-0.5 z-10",children:M.jsxs("span",{className:"text-[8px] font-mono tracking-tighter text-white/70",children:[o.pages,"p"]})}),M.jsx("div",{className:"absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-3.5 rounded-b-[1px] shadow-xs transition-transform duration-200",style:{backgroundColor:"#D97706",transform:d||n?"translateY(2px)":"translateY(0)"}})]}),n?M.jsx("div",{className:"book-depth-shadow"}):M.jsx("div",{className:"absolute -bottom-1.5 left-0.5 right-0.5 h-2.5 book-contact-shadow transition-all duration-300",style:{transform:d?"scale(1.18)":"scale(1)"}}),n&&M.jsx("div",{className:"book-glow-ring"}),M.jsxs("div",{className:`absolute inset-0 rounded-t-[4px] rounded-b-[2px] flex flex-col items-center justify-center gap-2.5 p-1 transition-all duration-200 z-30 ${n?"book-action-dock-selected bg-stone-950/70":d?"opacity-100 pointer-events-auto bg-stone-950/80":"opacity-0 pointer-events-none bg-stone-950/80"}`,onClick:V=>V.stopPropagation(),children:[M.jsx("button",{onClick:T,className:"w-7 h-7 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 flex items-center justify-center shadow-md transition-transform transform hover:scale-110 cursor-pointer",title:"Open and Read",children:M.jsx(pl,{className:"w-3.5 h-3.5"})}),M.jsx("button",{onClick:V=>{V.stopPropagation(),f(o)},className:"w-7 h-7 rounded-full bg-white hover:bg-stone-100 text-stone-800 flex items-center justify-center shadow-md transition-transform transform hover:scale-110 cursor-pointer",title:"Edit Details",children:M.jsx(ey,{className:"w-3.5 h-3.5"})}),M.jsx("button",{onClick:V=>{V.stopPropagation(),window.confirm(`Remove "${o.title}" from library?`)&&h(o.id)},className:"w-7 h-7 rounded-full bg-stone-800 hover:bg-rose-600 text-white flex items-center justify-center shadow-md transition-transform transform hover:scale-110 cursor-pointer",title:"Delete Book",children:M.jsx(oy,{className:"w-3.5 h-3.5"})}),n&&M.jsx("button",{onClick:V=>{V.stopPropagation(),En.playShelfSlide(.12),s(o)},className:"w-7 h-7 rounded-full bg-amber-600/80 hover:bg-amber-500 text-white flex items-center justify-center shadow-md transition-transform transform hover:scale-110 cursor-pointer mt-0.5",title:"Put back on shelf",children:M.jsx(E2,{className:"w-3.5 h-3.5"})})]})]})]})}function B2({books:o,onSelectBook:n,onEditBook:a,onDeleteBook:s,onAddBookOpen:c}){const h=[],[d,p]=Ue.useState(null),[v,_]=Ue.useState(null);if(o.length===0)h.push([]);else for(let b=0;b<o.length;b+=6)h.push(o.slice(b,b+6));const m=Ue.useCallback(b=>{d===b.id?(_(b.id),p(null),setTimeout(()=>_(null),450)):(d&&(_(d),setTimeout(()=>_(null),450)),p(b.id))},[d]),y=Ue.useCallback(b=>{n(b)},[n]);return M.jsx("div",{className:"w-full max-w-5xl mx-auto px-4 py-8",children:M.jsxs("div",{className:"relative rounded-xl real-shelf-unit flex overflow-hidden border border-[#ded5c7]",children:[M.jsx("div",{className:"w-4 sm:w-6 shrink-0 shelf-side-pillar"}),M.jsx("div",{className:"flex-1 flex flex-col py-6 px-4 sm:px-8 gap-10 bg-[#faf8f4] theme-candlelight:bg-[#151109]",children:o.length===0?M.jsxs("div",{className:"py-24 text-center flex flex-col items-center justify-center",children:[M.jsx("p",{className:"text-sm font-serif text-stone-400 mb-3",children:"Shelf is currently empty"}),M.jsx("button",{onClick:c,className:"text-xs font-semibold text-stone-600 hover:text-stone-900 underline cursor-pointer",children:"Add a new book"})]}):h.map((b,T)=>M.jsxs("div",{className:"relative flex flex-col",children:[M.jsx("div",{className:"shelf-3d-perspective",children:M.jsx("div",{className:"flex items-end justify-start gap-3 sm:gap-5 px-3 sm:px-6 pt-4 min-h-[280px] overflow-x-auto overflow-y-visible scrollbar-none z-10 preserve-3d",children:b.map(D=>M.jsx(I2,{book:D,isPulledOut:d===D.id,isPushingBack:v===D.id,onShelfSelect:m,onSelect:y,onEditBook:a,onDeleteBook:s},D.id))})}),M.jsxs("div",{className:"relative w-full z-20",children:[M.jsx("div",{className:"h-4 real-shelf-wood rounded-t-[1px]"}),M.jsx("div",{className:"h-2.5 real-shelf-lip shadow-xs"}),M.jsx("div",{className:"h-5 real-shelf-shadow pointer-events-none"})]})]},`shelf-${T}`))}),M.jsx("div",{className:"w-4 sm:w-6 shrink-0 shelf-side-pillar"})]})})}const F2=650,nx=800;function H2(o){return o<.5?2*o*o:-1+(4-2*o)*o}function ix(o){return 1-Math.pow(1-o,3)}function G2({book:o,onCloseViewer:n}){const[a,s]=Ue.useState("closed"),[c,f]=Ue.useState(0),[h,d]=Ue.useState(0),[p,v]=Ue.useState(!1),[_,m]=Ue.useState("next"),[y,b]=Ue.useState(0),[T,D]=Ue.useState(!1),S=Ue.useRef(null),x=Ue.useRef(null),L=Ue.useRef(0),P=o.samplePages||[],U=Math.max(1,Math.ceil(P.length/2)),V=fe=>P[fe]||{title:["Preface","Chapter I","Chapter II","Chapter III","Epilogue"][fe%5]??`Page ${fe+1}`,content:fe===0?o.description||"The story begins here…":"The narrative continues across these pages…"},H=V(h*2),z=V(h*2+1),I=h*2+1,C=h*2+2,A=_==="next"?z:H,G=V(_==="next"?L.current*2:L.current*2+1),se={cormorant:"font-cormorant",cinzel:"font-cinzel",mono:"font-mono-tech"}[o.fontStyle]||"font-playfair",ie={linen:"texture-linen",marbled:"texture-marbled",goldleaf:"texture-goldleaf",velvet:"texture-velvet",cyber:"texture-cyber",botanical:"texture-botanical",washi:"texture-washi"}[o.coverTexture]||"texture-leather",ue=Ue.useCallback(()=>{if(a==="open")return;En.playBookOpen(),s("open"),x.current=null;const fe=Me=>{x.current||(x.current=Me);const Te=Math.min((Me-x.current)/nx,1);f(ix(Te)*-165),Te<1&&(S.current=requestAnimationFrame(fe))};S.current=requestAnimationFrame(fe)},[a]),W=Ue.useCallback(()=>{if(a==="closed")return;En.playBookClose(),x.current=null;const fe=Me=>{x.current||(x.current=Me);const Te=Math.min((Me-x.current)/nx,1);f(ix(Te)*165-165),Te<1?S.current=requestAnimationFrame(fe):(s("closed"),f(0),d(0))};S.current=requestAnimationFrame(fe)},[a]),F=Ue.useCallback((fe,Me)=>{if(p)return;En.playPageTurn(),L.current=Me,m(fe),v(!0),b(0),x.current=null;const Te=fe==="next"?-180:180,ht=R=>{x.current||(x.current=R);const Q=Math.min((R-x.current)/F2,1);b(H2(Q)*Te),Q<1?S.current=requestAnimationFrame(ht):(b(Te),setTimeout(()=>{d(Me),v(!1),b(0)},20))};S.current=requestAnimationFrame(ht)},[p]),te=Ue.useCallback(()=>{!p&&h<U-1&&F("next",h+1)},[p,h,U,F]),q=Ue.useCallback(()=>{!p&&h>0&&F("prev",h-1)},[p,h,F]),ve=Ue.useCallback(fe=>{!p&&fe!==h&&F(fe>h?"next":"prev",fe)},[p,h,F]);return Ue.useEffect(()=>{const fe=Me=>{Me.key==="ArrowRight"&&te(),Me.key==="ArrowLeft"&&q(),Me.key==="Escape"&&n()};return window.addEventListener("keydown",fe),()=>window.removeEventListener("keydown",fe)},[te,q,n]),Ue.useEffect(()=>()=>{cancelAnimationFrame(S.current)},[]),M.jsxs("div",{className:"flex flex-col items-center w-full max-w-5xl mx-auto select-none",children:[M.jsxs("div",{className:"w-full flex items-center justify-between pb-3 mb-5 text-xs border-b border-stone-200/70 dark:border-stone-800",children:[M.jsxs("div",{className:"flex items-center gap-2 font-serif text-stone-800 dark:text-stone-200",children:[M.jsx("span",{className:"font-bold text-sm",children:o.title}),M.jsx("span",{className:"opacity-30",children:"/"}),M.jsx("span",{className:"opacity-60 italic",children:o.author}),o.year&&M.jsx("span",{className:"opacity-35 font-mono text-[10px]",children:o.year})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[a==="open"&&M.jsxs("button",{onClick:()=>{En.playShelfSlide(.07),D(fe=>!fe)},className:`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full transition cursor-pointer ${T?"text-amber-800 bg-amber-100 font-semibold":"opacity-55 hover:opacity-100 hover:bg-stone-100"}`,children:[M.jsx(A2,{className:`w-3.5 h-3.5 ${T?"fill-amber-500 text-amber-500":""}`}),M.jsx("span",{children:T?"Bookmarked":"Bookmark"})]}),a==="open"?M.jsxs("button",{onClick:W,className:"flex items-center gap-1.5 text-xs text-stone-200 hover:text-stone-400 transition cursor-pointer",children:[M.jsx(R2,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Close Book"})]}):M.jsxs("button",{onClick:ue,className:"flex items-center gap-1.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 px-4 py-1.5 rounded-full shadow transition active:scale-95 cursor-pointer",children:[M.jsx(pl,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Open Book"})]}),M.jsx("button",{onClick:n,className:"w-7 h-7 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-stone-100 transition cursor-pointer",title:"Return to shelf · Esc",children:M.jsx(Vp,{className:"w-4 h-4"})})]})]}),M.jsxs("div",{className:"relative w-full flex items-center justify-center",style:{perspective:"2000px",minHeight:"520px"},children:[a==="closed"&&M.jsxs("div",{onClick:ue,className:"group relative cursor-pointer",style:{width:"300px",height:"450px",transformStyle:"preserve-3d",transform:"rotateY(-12deg) rotateX(3deg)",filter:"drop-shadow(0 45px 55px rgba(0,0,0,0.28))",transition:"filter 0.3s ease, transform 0.3s ease"},children:[M.jsx("div",{className:"absolute right-[-13px] top-2 rounded-r-sm overflow-hidden",style:{width:"15px",height:"calc(100% - 8px)",background:"repeating-linear-gradient(to bottom,#f5efe4 0px,#f5efe4 1.5px,#e0d4be 1.5px,#e0d4be 3px)",borderRight:"1px solid #d4c8b0"}}),M.jsx("div",{className:"absolute bottom-[-10px] left-3 right-[-6px] rounded-b-sm overflow-hidden",style:{height:"12px",background:"repeating-linear-gradient(to right,#f5efe4 0px,#f5efe4 1.5px,#e0d4be 1.5px,#e0d4be 3px)",borderBottom:"1px solid #d4c8b0"}}),M.jsxs("div",{className:`w-full h-full rounded-r-2xl rounded-l-sm relative p-7 flex flex-col justify-between items-center overflow-hidden border border-white/20 ${ie}`,style:{backgroundColor:o.spineColor||"#2A362B",boxShadow:"0 20px 50px -10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)"},children:[M.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-9 bg-gradient-to-r from-black/35 via-black/12 to-transparent pointer-events-none"}),M.jsx("div",{className:"absolute inset-[18px] border border-white/22 rounded-lg pointer-events-none"}),M.jsx("div",{className:"absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"}),M.jsx("div",{className:"pt-1 text-center z-10",children:M.jsxs("span",{className:"text-[9px] font-mono tracking-[0.2em] text-white/60 uppercase",children:[o.year," · ",o.coverTexture||"Classic"]})}),M.jsxs("div",{className:"flex flex-col items-center text-center z-10 my-auto px-3 gap-3",children:[M.jsx("h1",{className:`text-[26px] font-bold leading-tight text-white ${se}`,style:{textShadow:"0 2px 14px rgba(0,0,0,0.45)"},children:o.title}),M.jsxs("div",{className:"flex items-center gap-2 w-full justify-center",children:[M.jsx("div",{className:"h-px flex-1 bg-white/30"}),M.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-white/40"}),M.jsx("div",{className:"h-px flex-1 bg-white/30"})]}),M.jsx("h2",{className:"text-[10.5px] tracking-[0.18em] uppercase font-semibold text-white/80",children:o.author})]}),M.jsxs("div",{className:"pb-1 z-10 w-full flex items-center justify-between px-2",children:[M.jsxs("span",{className:"text-[9px] font-mono text-white/60",children:[o.pages,"p"]}),M.jsx("span",{className:"text-[9px] uppercase font-bold tracking-widest text-white/60",children:o.category})]}),M.jsx("div",{className:"absolute -bottom-3 left-16 w-2.5 h-6 rounded-b-[2px] shadow-sm",style:{backgroundColor:"#D97706",clipPath:"polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)"}}),M.jsx("div",{className:"absolute inset-0 flex items-end justify-center pb-9 opacity-0 group-hover:opacity-100 transition-all duration-250 pointer-events-none",children:M.jsxs("div",{className:"px-4 py-2 rounded-full bg-white/95 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-xl border border-stone-200/80",children:[M.jsx(pl,{className:"w-3.5 h-3.5 text-amber-500"}),M.jsx("span",{children:"Click to open"})]})})]})]}),a==="open"&&M.jsxs("div",{className:"relative w-full max-w-4xl flex flex-col items-center",style:{animation:"bookSpreadOpen 0.45s cubic-bezier(0.22,1,0.36,1) both"},children:[M.jsxs("div",{className:"relative w-full rounded-2xl flex overflow-hidden",style:{height:"480px",boxShadow:"0 35px 80px -15px rgba(45,35,25,0.25), 0 8px 20px -5px rgba(45,35,25,0.10)",border:"1px solid #e0d8cc",transformStyle:"preserve-3d"},children:[M.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 book-gutter-crease z-30 pointer-events-none"}),T&&M.jsx("div",{className:"absolute top-0 left-[calc(50%-8px)] w-3 h-[58%] bg-amber-500 z-40 rounded-b-sm shadow-lg",style:{clipPath:"polygon(0 0,100% 0,100% 92%,50% 100%,0 92%)",animation:"bookmarkDrop 0.3s ease both"}}),M.jsx(ax,{page:H,pageNum:I,book:o,fontClass:se,side:"left",dim:p&&_==="prev"}),M.jsx(ax,{page:z,pageNum:C,book:o,fontClass:se,side:"right",dim:p&&_==="next"}),p&&M.jsxs("div",{className:"absolute top-0 bottom-0 z-50 pointer-events-none",style:{left:_==="next"?"50%":"0%",width:"50%",transformOrigin:_==="next"?"left center":"right center",transformStyle:"preserve-3d",transform:`rotateY(${y}deg)`,willChange:"transform",filter:`drop-shadow(${_==="next"?`${-Math.abs(Math.sin(y*Math.PI/180))*18}px`:`${Math.abs(Math.sin(y*Math.PI/180))*18}px`} 0 ${Math.abs(Math.sin(y*Math.PI/180))*28}px rgba(0,0,0,0.22))`},children:[M.jsxs("div",{className:"absolute inset-0 paper-warm-linen text-stone-900 flex flex-col border-stone-200",style:{padding:"2.2rem 1.8rem 1.4rem",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",borderLeft:_==="next"?"1px solid #e8e0d0":"none",borderRight:_==="prev"?"1px solid #e8e0d0":"none"},children:[M.jsx("div",{className:"page-turn-shadow absolute inset-0 pointer-events-none"}),M.jsx(Cp,{page:A,book:o,fontClass:se,pageNum:_==="next"?C:I,isLeft:_==="prev",isDropCap:!0})]}),M.jsxs("div",{className:"absolute inset-0 paper-warm-linen text-stone-900 flex flex-col border-stone-200",style:{padding:"2.2rem 1.8rem 1.4rem",transform:"rotateY(180deg)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",borderRight:_==="next"?"1px solid #e8e0d0":"none",borderLeft:_==="prev"?"1px solid #e8e0d0":"none"},children:[M.jsx("div",{className:"page-turn-shadow-reverse absolute inset-0 pointer-events-none"}),M.jsx(Cp,{page:G,book:o,fontClass:se,pageNum:_==="next"?L.current*2+1:L.current*2+2,isLeft:_==="next"})]})]})]}),M.jsxs("div",{className:"flex flex-col items-center w-full mt-5 gap-3 px-2",children:[M.jsxs("div",{className:"flex items-center justify-between w-full gap-3",children:[M.jsxs("button",{onClick:q,disabled:h===0||p,className:`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition ${h===0||p?"opacity-20 cursor-not-allowed":"cursor-pointer text-stone-700 hover:bg-stone-100 active:scale-95"}`,children:[M.jsx(Xx,{className:"w-4 h-4"})," Previous"]}),M.jsxs("div",{className:"flex items-center gap-3 flex-1 max-w-sm bg-stone-100 px-5 py-2 rounded-full border border-stone-200",children:[M.jsxs("span",{className:"text-[10px] font-mono text-stone-400 shrink-0",children:["p.",I]}),M.jsx("input",{type:"range",min:"0",max:U-1,step:"1",value:h,disabled:p,onChange:fe=>ve(Number(fe.target.value)),className:"w-full accent-amber-500 cursor-pointer h-1.5 rounded-full"}),M.jsxs("span",{className:"text-[10px] font-mono text-stone-400 shrink-0",children:["p.",U*2]})]}),M.jsxs("button",{onClick:te,disabled:h===U-1||p,className:`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition ${h===U-1||p?"opacity-20 cursor-not-allowed":"cursor-pointer text-stone-700 hover:bg-stone-100 active:scale-95"}`,children:["Next ",M.jsx(Yx,{className:"w-4 h-4"})]})]}),M.jsx("div",{className:"flex items-center gap-1.5",children:Array.from({length:U},(fe,Me)=>M.jsx("button",{onClick:()=>ve(Me),disabled:p,className:`rounded-full transition-all cursor-pointer ${Me===h?"w-6 h-2 bg-amber-500":"w-2 h-2 bg-stone-300 hover:bg-amber-300"}`},Me))}),M.jsx("p",{className:"text-[10px] font-mono text-stone-400 opacity-60",children:"← → arrow keys to turn pages · Esc to close"})]})]})]})]})}function ax({page:o,pageNum:n,book:a,fontClass:s,side:c,dim:f}){return M.jsx("div",{className:"w-1/2 h-full paper-warm-linen text-stone-900 flex flex-col relative select-text overflow-y-auto transition-opacity duration-200",style:{padding:"2.2rem 1.8rem 1.4rem",borderRight:c==="left"?"1px solid #e8e0d0":"none",opacity:f?.6:1},children:M.jsx(Cp,{page:o,book:a,fontClass:s,pageNum:n,isLeft:c==="left",isDropCap:c==="left"})})}function Cp({page:o,book:n,fontClass:a,pageNum:s,isLeft:c,isDropCap:f=!1}){var h;return M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:`flex justify-between text-[10.5px] text-stone-400 font-serif border-b border-stone-200/70 pb-2 mb-4 shrink-0 ${c?"":"flex-row-reverse"}`,children:[M.jsx("span",{className:"italic truncate max-w-[50%]",children:c?n.title:o.title}),M.jsx("span",{className:"truncate max-w-[50%] text-right",children:c?o.title:n.author})]}),M.jsx("div",{className:`flex-1 text-[13px] leading-[1.9] text-stone-800 ${a} overflow-y-auto`,children:f&&((h=o.content)==null?void 0:h.length)>0?M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"float-left text-[44px] font-bold leading-[0.82] pr-2.5 pt-1 text-stone-900",style:{fontFamily:"Georgia, serif"},children:o.content.charAt(0)}),M.jsx("p",{className:"whitespace-pre-line",children:o.content.slice(1)})]}):M.jsx("p",{className:"whitespace-pre-line",children:o.content||"…"})}),M.jsxs("div",{className:`flex justify-between text-[10px] text-stone-400 font-serif border-t border-stone-200/70 pt-2 mt-4 shrink-0 ${c?"":"flex-row-reverse"}`,children:[M.jsx("span",{children:c?n.author:"Athenaeum"}),M.jsx("span",{children:s})]})]})}function V2({book:o,onClose:n}){return o?M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto",style:{background:"rgba(0,0,0,0.62)",backdropFilter:"none",animation:"fadeInUp 0.25s ease both"},onClick:a=>{a.target===a.currentTarget&&n()},children:M.jsx("div",{className:"relative w-full max-w-5xl bg-[#fcfbf9] dark:bg-[#1c1411] border border-[#ddd4c4] dark:border-[#3a2518] rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.45)] p-5 sm:p-8 flex flex-col z-10 my-auto",children:M.jsx(G2,{book:o,onCloseViewer:n})})}):null}const Bd=[{name:"Forest Olive",hex:"#2A362B",text:"#F3EAD8"},{name:"Terracotta Rust",hex:"#9A3412",text:"#FEF3C7"},{name:"Deep Indigo",hex:"#1E293B",text:"#38BDF8"},{name:"Vintage Ochre",hex:"#854D0E",text:"#FEF9C3"},{name:"Crimson Rose",hex:"#9F1239",text:"#FFE4E6"},{name:"Midnight Ink",hex:"#0F172A",text:"#E2E8F0"},{name:"Sage Moss",hex:"#354F52",text:"#CAD2C5"},{name:"Warm Sand",hex:"#B08968",text:"#EDE0D4"},{name:"Royal Amethyst",hex:"#581C87",text:"#F3E8FF"},{name:"Cobalt Blue",hex:"#1D4ED8",text:"#DBEAFE"},{name:"Matcha Mist",hex:"#4A5759",text:"#D8E2DC"},{name:"Sunset Coral",hex:"#C2410C",text:"#FFEDD5"}],k2=[{id:"leather",name:"Leather Bound"},{id:"linen",name:"Linen Cloth"},{id:"marbled",name:"Marbled Pattern"},{id:"goldleaf",name:"Gold Leaf"},{id:"velvet",name:"Matte Velvet"},{id:"cyber",name:"Cyberpunk"},{id:"botanical",name:"Botanical Kraft"},{id:"washi",name:"Japanese Washi"}],j2=[{id:"playfair",name:"Playfair Display",class:"font-playfair"},{id:"cormorant",name:"Cormorant Garamond",class:"font-cormorant"},{id:"cinzel",name:"Cinzel Roman",class:"font-cinzel"},{id:"mono",name:"JetBrains Mono",class:"font-mono-tech"}],X2=["Classic Fiction","Sci-Fi & Tech","Philosophy","Fantasy & Magic","History & Arts","Mystery & Crime"],rx=[{id:"details",label:"Book Details",icon:pl},{id:"design",label:"Cover Design",icon:Fp},{id:"pages",label:"Write Pages",icon:Hp}];function q2({pages:o,onChange:n}){var p,v;const[a,s]=Ue.useState(0),c=()=>{const _=[...o,{pageNumber:o.length+1,title:`Chapter ${o.length+1}`,content:""}];n(_),s(_.length-1)},f=_=>{if(o.length<=1)return;const m=o.filter((y,b)=>b!==_).map((y,b)=>({...y,pageNumber:b+1}));n(m),s(Math.min(_,m.length-1))},h=(_,m,y)=>{n(o.map((b,T)=>T===_?{...b,[m]:y}:b))},d=o[a]||{title:"",content:""};return M.jsxs("div",{className:"flex flex-col gap-4",children:[M.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[o.map((_,m)=>M.jsx("button",{type:"button",onClick:()=>s(m),className:`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${m===a?"bg-stone-900 text-white shadow":"bg-stone-100 border border-stone-200 text-stone-600 hover:border-stone-400"}`,children:_.title?_.title.slice(0,12):`Page ${m+1}`},m)),M.jsxs("button",{type:"button",onClick:c,className:"flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 transition cursor-pointer",children:[M.jsx(Gp,{className:"w-3 h-3"})," Add Page"]})]}),M.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm",children:[M.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("button",{type:"button",onClick:()=>s(_=>Math.max(0,_-1)),disabled:a===0,className:"w-6 h-6 rounded-md flex items-center justify-center text-stone-500 hover:bg-stone-200 disabled:opacity-30 cursor-pointer transition",children:M.jsx(Xx,{className:"w-3.5 h-3.5"})}),M.jsxs("span",{className:"text-[11px] font-mono text-stone-500",children:["Page ",a+1," / ",o.length]}),M.jsx("button",{type:"button",onClick:()=>s(_=>Math.min(o.length-1,_+1)),disabled:a===o.length-1,className:"w-6 h-6 rounded-md flex items-center justify-center text-stone-500 hover:bg-stone-200 disabled:opacity-30 cursor-pointer transition",children:M.jsx(Yx,{className:"w-3.5 h-3.5"})})]}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("input",{type:"text",value:d.title,onChange:_=>h(a,"title",_.target.value),placeholder:"Page title / chapter name…",className:"text-xs px-2 py-1 border border-stone-200 rounded-lg bg-white text-stone-800 focus:outline-none focus:border-stone-500 w-48"}),M.jsx("button",{type:"button",onClick:()=>f(a),disabled:o.length<=1,className:"w-6 h-6 rounded-md flex items-center justify-center text-stone-400 hover:text-rose-600 hover:bg-rose-50 disabled:opacity-30 cursor-pointer transition",title:"Remove this page",children:M.jsx(oy,{className:"w-3.5 h-3.5"})})]})]}),M.jsx("div",{className:"paper-warm-linen p-0",children:M.jsx("textarea",{value:d.content,onChange:_=>h(a,"content",_.target.value),placeholder:`Write the content for "${d.title||"this page"}" here…

You can write anything — prose, poetry, notes. This will appear exactly as typed when you open the book.`,className:"w-full bg-transparent border-none outline-none resize-none text-[13px] leading-[1.85] text-stone-800 font-serif p-6",rows:11,style:{fontFamily:"Georgia, serif"}})}),M.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-stone-50/80 border-t border-stone-200",children:[M.jsxs("span",{className:"text-[10px] font-mono text-stone-400",children:[((p=d.content)==null?void 0:p.split(/\s+/).filter(Boolean).length)||0," words · ",((v=d.content)==null?void 0:v.length)||0," chars"]}),M.jsx("span",{className:"text-[10px] text-stone-400 italic",children:"Tip: Each page shows ~200 words in the reader"})]})]}),M.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-stone-500 bg-stone-50 rounded-lg px-3 py-2 border border-stone-200",children:[M.jsx(Hp,{className:"w-3.5 h-3.5 text-stone-400 shrink-0"}),M.jsxs("span",{children:[M.jsx("strong",{children:o.length})," pages written ·"," ",M.jsx("strong",{children:o.reduce((_,m)=>{var y;return _+(((y=m.content)==null?void 0:y.split(/\s+/).filter(Boolean).length)||0)},0)})," total words"]})]})]})}function Y2({isOpen:o,onClose:n,onAddBook:a}){const[s,c]=Ue.useState("details"),[f,h]=Ue.useState(""),[d,p]=Ue.useState(""),[v,_]=Ue.useState("Classic Fiction"),[m,y]=Ue.useState(new Date().getFullYear()),[b,T]=Ue.useState(280),[D,S]=Ue.useState(40),[x,L]=Ue.useState(Bd[0].hex),[P,U]=Ue.useState(Bd[0].text),[V,H]=Ue.useState("playfair"),[z,I]=Ue.useState("leather"),[C,A]=Ue.useState(""),[G,se]=Ue.useState([{pageNumber:1,title:"Chapter I",content:""},{pageNumber:2,title:"Chapter II",content:""}]);if(!o)return null;const ie=W=>{T(W),S(Math.min(65,Math.max(30,Math.floor(W/7.5))))},ue=W=>{if(W.preventDefault(),!f.trim()||!d.trim()){c("details");return}En.playBookPickUp();const F=G.filter(q=>q.content.trim().length>0),te=F.length>0?F:[{pageNumber:1,title:"Chapter I",content:C.trim()||"The pages await the first words…"},{pageNumber:2,title:"Chapter II",content:"The story continues on the next page…"}];a({title:f.trim(),author:d.trim(),category:v,year:parseInt(m,10)||new Date().getFullYear(),pages:parseInt(b,10)||240,thickness:parseInt(D,10)||40,spineColor:x,textColor:P,fontStyle:V,coverTexture:z,description:C.trim()||`A volume by ${d.trim()}.`,samplePages:te,tags:[v]}),n(),h(""),p(""),A(""),se([{pageNumber:1,title:"Chapter I",content:""},{pageNumber:2,title:"Chapter II",content:""}]),c("details")};return M.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/45 backdrop-blur-xs",children:M.jsxs("div",{className:"relative w-full max-w-4xl bg-[#fcfbf9] border border-[#ded5c7] rounded-2xl shadow-2xl z-10 my-auto flex flex-col text-stone-900 max-h-[95vh] overflow-hidden",children:[M.jsxs("div",{className:"flex items-center justify-between px-7 py-5 border-b border-stone-200 shrink-0",children:[M.jsxs("div",{className:"flex items-center gap-2.5",children:[M.jsx(pl,{className:"w-4 h-4 text-stone-500"}),M.jsx("h2",{className:"text-base font-serif font-bold text-stone-900",children:"Craft & Place New Volume"})]}),M.jsx("button",{onClick:n,className:"w-7 h-7 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer",children:M.jsx(Vp,{className:"w-4 h-4"})})]}),M.jsx("div",{className:"flex items-center gap-0 px-7 pt-4 shrink-0 border-b border-stone-200",children:rx.map(W=>{const F=W.icon;return M.jsxs("button",{type:"button",onClick:()=>c(W.id),className:`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition cursor-pointer -mb-px ${s===W.id?"border-stone-900 text-stone-900 bg-white":"border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-50"}`,children:[M.jsx(F,{className:"w-3.5 h-3.5"}),W.label,W.id==="pages"&&M.jsx("span",{className:"ml-0.5 text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-bold",children:G.length})]},W.id)})}),M.jsxs("form",{onSubmit:ue,className:"flex flex-col flex-1 overflow-hidden",children:[M.jsxs("div",{className:"flex-1 overflow-y-auto px-7 py-6",children:[s==="details"&&M.jsxs("div",{className:"flex flex-col gap-5",children:[M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 block",children:"Title *"}),M.jsx("input",{type:"text",required:!0,placeholder:"Book title…",value:f,onChange:W=>h(W.target.value),className:"w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700 focus:ring-1 focus:ring-stone-300 transition"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 block",children:"Author *"}),M.jsx("input",{type:"text",required:!0,placeholder:"Author name…",value:d,onChange:W=>p(W.target.value),className:"w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700 focus:ring-1 focus:ring-stone-300 transition"})]})]}),M.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[M.jsxs("div",{className:"col-span-2",children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 block",children:"Category"}),M.jsx("select",{value:v,onChange:W=>_(W.target.value),className:"w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700",children:X2.map(W=>M.jsx("option",{value:W,children:W},W))})]}),M.jsxs("div",{children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 block",children:"Year"}),M.jsx("input",{type:"number",value:m,onChange:W=>y(W.target.value),className:"w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 block",children:"Rating"}),M.jsx("input",{type:"number",min:"1",max:"5",step:"0.1",defaultValue:"4.5",className:"w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700"})]})]}),M.jsxs("div",{className:"p-4 bg-stone-100/80 rounded-2xl border border-stone-200 flex flex-col gap-4",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between text-xs font-semibold text-stone-700 mb-2",children:[M.jsx("span",{children:"Volume Length (pages)"}),M.jsxs("span",{className:"font-mono text-stone-900",children:[b," pages"]})]}),M.jsx("input",{type:"range",min:"80",max:"1200",step:"20",value:b,onChange:W=>ie(Number(W.target.value)),className:"w-full accent-stone-900 cursor-pointer"})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between text-xs font-semibold text-stone-700 mb-2",children:[M.jsx("span",{children:"Shelf Thickness (book width)"}),M.jsxs("span",{className:"font-mono text-stone-900",children:[D,"px"]})]}),M.jsx("input",{type:"range",min:"28",max:"68",step:"1",value:D,onChange:W=>S(Number(W.target.value)),className:"w-full accent-amber-600 cursor-pointer"})]})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 block",children:["Synopsis ",M.jsx("span",{className:"font-normal opacity-60",children:"(shown on book cover & used as first-page fallback)"})]}),M.jsx("textarea",{rows:"3",placeholder:"A brief description of the book…",value:C,onChange:W=>A(W.target.value),className:"w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700 resize-none"})]}),M.jsxs("div",{className:"flex items-center gap-2 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800",children:[M.jsx(Hp,{className:"w-3.5 h-3.5 shrink-0 text-amber-500"}),M.jsxs("span",{children:["Go to the ",M.jsx("strong",{children:"Write Pages"})," tab to write the actual content of each page — one by one, just like a real book."]})]})]}),s==="design"&&M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6",children:[M.jsxs("div",{className:"md:col-span-8 flex flex-col gap-5",children:[M.jsxs("div",{children:[M.jsxs("label",{className:"text-xs font-semibold text-stone-600 mb-2 flex items-center gap-1.5",children:[M.jsx(Kx,{className:"w-3.5 h-3.5"})," Cover Material"]}),M.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:k2.map(W=>M.jsx("button",{type:"button",onClick:()=>I(W.id),className:`px-2.5 py-2 rounded-xl border text-xs cursor-pointer transition-all ${z===W.id?"border-stone-900 bg-white font-bold shadow-sm":"border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300"}`,children:W.name},W.id))})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"text-xs font-semibold text-stone-600 mb-2 flex items-center gap-1.5",children:[M.jsx(Fp,{className:"w-3.5 h-3.5"})," Cover Color"]}),M.jsx("div",{className:"flex flex-wrap gap-2",children:Bd.map(W=>M.jsxs("button",{type:"button",onClick:()=>{L(W.hex),U(W.text)},className:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] cursor-pointer transition-all ${x===W.hex?"border-stone-900 bg-white font-semibold shadow-sm":"border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300"}`,children:[M.jsx("span",{className:"w-3 h-3 rounded-full shadow-sm",style:{backgroundColor:W.hex}}),W.name]},W.name))}),M.jsxs("div",{className:"flex items-center gap-3 mt-3",children:[M.jsx("label",{className:"text-[11px] text-stone-500",children:"Custom color:"}),M.jsx("input",{type:"color",value:x,onChange:W=>L(W.target.value),className:"w-8 h-8 rounded-lg border border-stone-300 cursor-pointer bg-transparent p-0.5",title:"Pick any cover color"}),M.jsx("span",{className:"text-[11px] font-mono text-stone-500",children:x})]})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"text-xs font-semibold text-stone-600 mb-2 flex items-center gap-1.5",children:[M.jsx(cy,{className:"w-3.5 h-3.5"})," Typography"]}),M.jsx("div",{className:"grid grid-cols-2 gap-2",children:j2.map(W=>M.jsx("button",{type:"button",onClick:()=>H(W.id),className:`px-3 py-2.5 rounded-xl border text-left text-xs cursor-pointer transition-all ${V===W.id?"border-stone-900 bg-white font-bold shadow-sm":"border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300"} ${W.class}`,children:W.name},W.id))})]})]}),M.jsxs("div",{className:"md:col-span-4 flex flex-col items-center justify-start gap-4 p-5 bg-stone-100/70 rounded-2xl border border-stone-200",children:[M.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-stone-400 font-semibold",children:"Live Preview"}),M.jsxs("div",{className:`rounded-t-[4px] rounded-b-[2px] book-spine-tactile flex flex-col justify-between items-center py-4 px-1 relative overflow-hidden transition-all duration-300 texture-${z}`,style:{height:"240px",width:`${D}px`,backgroundColor:x},children:[M.jsx("div",{className:"w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0",children:M.jsx("span",{className:"text-[9px] text-white/90 font-serif font-bold",children:v.charAt(0)})}),M.jsx("div",{className:"flex-1 flex flex-col items-center justify-center overflow-hidden px-0.5",children:M.jsx("div",{className:`[writing-mode:vertical-rl] rotate-180 text-center font-bold text-xs uppercase truncate max-h-[120px] font-${V}`,style:{color:P},children:f||"BOOK TITLE"})}),M.jsxs("div",{className:"text-[8px] font-mono text-white/60 shrink-0",children:[b,"p"]})]}),M.jsxs("p",{className:"text-[10px] text-stone-400 text-center",children:[D,"px wide · ",z]}),M.jsxs("div",{className:`w-28 rounded-r-lg rounded-l-sm p-3 flex flex-col items-center justify-between overflow-hidden border border-white/20 texture-${z}`,style:{height:"110px",backgroundColor:x},children:[M.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-3 bg-black/20 rounded-l-sm"}),M.jsx("span",{className:"text-[8px] font-mono text-white/60 uppercase tracking-widest z-10",children:m}),M.jsx("span",{className:`text-[10px] font-bold text-center text-white z-10 leading-tight font-${V}`,style:{textShadow:"0 1px 4px rgba(0,0,0,0.4)"},children:f||"Title"}),M.jsx("span",{className:"text-[8px] text-white/70 z-10 tracking-widest uppercase",children:d||"Author"})]})]})]}),s==="pages"&&M.jsxs("div",{className:"flex flex-col gap-4",children:[M.jsx("div",{className:"flex items-center justify-between",children:M.jsxs("div",{children:[M.jsx("h3",{className:"text-sm font-bold text-stone-900",children:"Write Your Pages"}),M.jsx("p",{className:"text-xs text-stone-500 mt-0.5",children:"Write each page individually. These will appear when reading the book."})]})}),M.jsx(q2,{pages:G,onChange:se})]})]}),M.jsxs("div",{className:"flex items-center justify-between gap-3 px-7 py-4 border-t border-stone-200 shrink-0 bg-stone-50/80",children:[M.jsx("div",{className:"flex items-center gap-2",children:rx.map((W,F)=>M.jsx("button",{type:"button",onClick:()=>c(W.id),className:`w-2 h-2 rounded-full transition cursor-pointer ${s===W.id?"bg-stone-900 w-5":"bg-stone-300"}`},W.id))}),M.jsxs("div",{className:"flex items-center gap-2.5",children:[M.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-xl border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-medium cursor-pointer transition",children:"Cancel"}),M.jsxs("button",{type:"submit",className:"flex items-center gap-1.5 px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs shadow transition active:scale-95 cursor-pointer",children:[M.jsx(Gp,{className:"w-3.5 h-3.5"}),"Place on Shelf"]})]})]})]})]})})}const fl=[{name:"Forest Olive",hex:"#2A362B",text:"#F3EAD8"},{name:"Terracotta Rust",hex:"#9A3412",text:"#FEF3C7"},{name:"Deep Indigo",hex:"#1E293B",text:"#38BDF8"},{name:"Vintage Ochre",hex:"#854D0E",text:"#FEF9C3"},{name:"Crimson Rose",hex:"#9F1239",text:"#FFE4E6"},{name:"Midnight Ink",hex:"#0F172A",text:"#E2E8F0"},{name:"Sage Moss",hex:"#354F52",text:"#CAD2C5"},{name:"Warm Sand",hex:"#B08968",text:"#EDE0D4"},{name:"Royal Amethyst",hex:"#581C87",text:"#F3E8FF"},{name:"Cobalt Blue",hex:"#1D4ED8",text:"#DBEAFE"},{name:"Matcha Mist",hex:"#4A5759",text:"#D8E2DC"},{name:"Sunset Coral",hex:"#C2410C",text:"#FFEDD5"}],W2=[{id:"leather",name:"Leather Bound"},{id:"linen",name:"Linen Cloth"},{id:"marbled",name:"Marbled Pattern"},{id:"goldleaf",name:"Gold Leaf"},{id:"velvet",name:"Matte Velvet"},{id:"cyber",name:"Cyberpunk"},{id:"botanical",name:"Botanical Kraft"},{id:"washi",name:"Japanese Washi"}],Z2=[{id:"playfair",name:"Playfair Display",class:"font-playfair"},{id:"cormorant",name:"Cormorant Garamond",class:"font-cormorant"},{id:"cinzel",name:"Cinzel Roman",class:"font-cinzel"},{id:"mono",name:"JetBrains Mono",class:"font-mono-tech"}],K2=["Classic Fiction","Sci-Fi & Tech","Philosophy","Fantasy & Magic","History & Arts","Mystery & Crime"];function Q2({book:o,isOpen:n,onClose:a,onSaveBook:s}){const[c,f]=Ue.useState(""),[h,d]=Ue.useState(""),[p,v]=Ue.useState("Classic Fiction"),[_,m]=Ue.useState(2026),[y,b]=Ue.useState(280),[T,D]=Ue.useState(40),[S,x]=Ue.useState(fl[0].hex),[L,P]=Ue.useState(fl[0].text),[U,V]=Ue.useState("playfair"),[H,z]=Ue.useState("leather"),[I,C]=Ue.useState("book"),[A,G]=Ue.useState(""),[se,ie]=Ue.useState("");if(Ue.useEffect(()=>{var F,te;o&&(f(o.title||""),d(o.author||""),v(o.category||"Classic Fiction"),m(o.year||2026),b(o.pages||250),D(o.thickness||Math.min(60,Math.max(30,Math.floor((o.pages||250)/7)))),x(o.spineColor||fl[0].hex),P(o.textColor||fl[0].text),V(o.fontStyle||"playfair"),z(o.coverTexture||"leather"),C(o.coverEmblem||"book"),G(o.description||""),ie(((te=(F=o.samplePages)==null?void 0:F[0])==null?void 0:te.content)||""))},[o]),!n||!o)return null;const ue=F=>{b(F);const te=Math.min(65,Math.max(30,Math.floor(F/7.5)));D(te)},W=F=>{var q,ve,fe,Me,Te;if(F.preventDefault(),!c.trim()||!h.trim())return;En.playBookPickUp();const te={...o,title:c,author:h,category:p,year:parseInt(_,10)||o.year,pages:parseInt(y,10)||o.pages,thickness:parseInt(T,10)||40,spineColor:S,textColor:L,fontStyle:U,coverTexture:H,coverEmblem:I,description:A.trim()||o.description,samplePages:[{pageNumber:1,title:((ve=(q=o.samplePages)==null?void 0:q[0])==null?void 0:ve.title)||"Chapter I",content:se.trim()||((Me=(fe=o.samplePages)==null?void 0:fe[0])==null?void 0:Me.content)||A},((Te=o.samplePages)==null?void 0:Te[1])||{pageNumber:2,title:"Notes",content:"Archival reflections and notes."}]};s(te),a()};return M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-200",children:M.jsxs("div",{className:"relative w-full max-w-4xl bg-[#fcfbf9] border border-[#ded5c7] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-auto flex flex-col text-stone-900 max-h-[92vh] overflow-y-auto",children:[M.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-stone-200 mb-5",children:[M.jsxs("div",{className:"flex items-center gap-2.5",children:[M.jsx(ey,{className:"w-4 h-4 text-stone-600"}),M.jsx("h2",{className:"text-lg font-serif font-bold text-stone-900",children:"Edit Book & Cover Crafting"})]}),M.jsx("button",{onClick:a,className:"w-7 h-7 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer",children:M.jsx(Vp,{className:"w-4 h-4"})})]}),M.jsxs("form",{onSubmit:W,className:"grid grid-cols-1 md:grid-cols-12 gap-6",children:[M.jsxs("div",{className:"md:col-span-8 flex flex-col gap-4",children:[M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[M.jsxs("div",{children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1 block",children:"Title"}),M.jsx("input",{type:"text",required:!0,value:c,onChange:F=>f(F.target.value),className:"w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1 block",children:"Author"}),M.jsx("input",{type:"text",required:!0,value:h,onChange:F=>d(F.target.value),className:"w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"})]})]}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[M.jsxs("div",{className:"sm:col-span-2",children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1 block",children:"Category"}),M.jsx("select",{value:p,onChange:F=>v(F.target.value),className:"w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800",children:K2.map(F=>M.jsx("option",{value:F,children:F},F))})]}),M.jsxs("div",{children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1 block",children:"Year"}),M.jsx("input",{type:"number",value:_,onChange:F=>m(F.target.value),className:"w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"})]})]}),M.jsxs("div",{className:"p-3.5 bg-stone-100/80 rounded-xl border border-stone-200 flex flex-col gap-3",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between text-xs font-semibold text-stone-700 mb-1",children:[M.jsx("span",{children:"Page Slider (Volume Length):"}),M.jsxs("span",{className:"font-mono text-stone-900 font-bold",children:[y," pages"]})]}),M.jsx("input",{type:"range",min:"80",max:"1200",step:"20",value:y,onChange:F=>ue(Number(F.target.value)),className:"w-full accent-stone-900 cursor-pointer"})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between text-xs font-semibold text-stone-700 mb-1",children:[M.jsx("span",{children:"Book Width / Shelf Thickness:"}),M.jsxs("span",{className:"font-mono text-stone-900 font-bold",children:[T,"px width"]})]}),M.jsx("input",{type:"range",min:"28",max:"68",step:"1",value:T,onChange:F=>D(Number(F.target.value)),className:"w-full accent-amber-600 cursor-pointer"})]})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5",children:[M.jsx(Kx,{className:"w-3.5 h-3.5 text-stone-500"}),M.jsx("span",{children:"Cover Material Texture"})]}),M.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:W2.map(F=>M.jsx("button",{type:"button",onClick:()=>z(F.id),className:`px-2.5 py-1.5 rounded-lg border text-xs cursor-pointer transition-all ${H===F.id?"border-stone-900 bg-white font-bold shadow-xs":"border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300"}`,children:F.name},F.id))})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5",children:[M.jsx(Fp,{className:"w-3.5 h-3.5 text-stone-500"}),M.jsx("span",{children:"Curated Color Palette"})]}),M.jsx("div",{className:"flex flex-wrap gap-1.5",children:fl.map(F=>M.jsxs("button",{type:"button",onClick:()=>{x(F.hex),P(F.text)},className:`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[11px] cursor-pointer transition-all ${S===F.hex?"border-stone-900 bg-white font-semibold shadow-xs":"border-stone-200 bg-stone-50 text-stone-600"}`,children:[M.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:F.hex}}),M.jsx("span",{children:F.name})]},F.name))})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5",children:[M.jsx(cy,{className:"w-3.5 h-3.5 text-stone-500"}),M.jsx("span",{children:"Typography"})]}),M.jsx("div",{className:"grid grid-cols-2 gap-2",children:Z2.map(F=>M.jsx("button",{type:"button",onClick:()=>V(F.id),className:`px-3 py-1.5 rounded-lg border text-left text-xs cursor-pointer transition-all ${U===F.id?"border-stone-900 bg-white font-bold":"border-stone-200 bg-stone-50 text-stone-600"} ${F.class}`,children:F.name},F.id))})]}),M.jsxs("div",{children:[M.jsx("label",{className:"text-xs font-semibold text-stone-600 mb-1 block",children:"Synopsis"}),M.jsx("textarea",{rows:"2",value:A,onChange:F=>G(F.target.value),className:"w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"})]})]}),M.jsxs("div",{className:"md:col-span-4 flex flex-col items-center justify-center p-5 bg-stone-100/70 rounded-xl border border-stone-200",children:[M.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-4 font-semibold",children:"Live Width & Texture"}),M.jsxs("div",{className:`rounded-t-[4px] rounded-b-[2px] book-spine-tactile flex flex-col justify-between items-center py-4 px-1 relative transition-all duration-300 texture-${H}`,style:{height:"250px",width:`${T}px`,backgroundColor:S},children:[M.jsx("div",{className:"w-4 h-4 rounded-full bg-white/20 flex items-center justify-center",children:M.jsx("span",{className:"text-[9px] text-white/90 font-serif font-bold",children:p.charAt(0)})}),M.jsx("div",{className:"flex-1 flex flex-col items-center justify-center my-auto overflow-hidden",children:M.jsx("div",{className:`[writing-mode:vertical-rl] rotate-180 text-center font-bold text-xs uppercase truncate max-h-[120px] font-${U}`,style:{color:L},children:c||"TITLE"})}),M.jsxs("div",{className:"text-[8px] font-mono text-white/70",children:[y,"p"]})]}),M.jsxs("p",{className:"text-[10px] text-stone-400 text-center mt-4",children:["Width: ",T,"px · ",H]})]}),M.jsxs("div",{className:"md:col-span-12 flex justify-end gap-2.5 pt-3 border-t border-stone-200",children:[M.jsx("button",{type:"button",onClick:a,className:"px-4 py-1.5 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-medium cursor-pointer",children:"Cancel"}),M.jsxs("button",{type:"submit",className:"flex items-center gap-1.5 px-5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs shadow-xs transition cursor-pointer",children:[M.jsx(w2,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Save Changes"})]})]})]})]})})}const pu="http://localhost:5000/api";function J2(){const[o,n]=Ue.useState(()=>{const I=localStorage.getItem("athenaeum_books_cache_v4");if(I)try{return JSON.parse(I)}catch(C){console.error("Failed to parse cached books:",C)}return O2}),[a,s]=Ue.useState(null),[c,f]=Ue.useState(null),[h,d]=Ue.useState(!1),[p,v]=Ue.useState(""),[_,m]=Ue.useState("All"),[y,b]=Ue.useState("default"),[T,D]=Ue.useState("daylight"),[S,x]=Ue.useState(!1);Ue.useEffect(()=>{T==="candlelight"?(document.body.classList.add("theme-candlelight"),document.body.classList.remove("theme-daylight")):(document.body.classList.remove("theme-candlelight"),document.body.classList.add("theme-daylight"))},[T]),Ue.useEffect(()=>{async function I(){try{const C=await fetch(`${pu}/books`);if(C.ok){const A=await C.json();A.data&&Array.isArray(A.data)&&A.data.length>0&&(n(A.data),x(!0),localStorage.setItem("athenaeum_books_cache_v3",JSON.stringify(A.data)))}}catch(C){console.warn("Backend server not reached yet, using local library storage:",C.message),x(!1)}}I()},[]),Ue.useEffect(()=>{localStorage.setItem("athenaeum_books_cache_v4",JSON.stringify(o))},[o]),Ue.useEffect(()=>{if(a){const I=o.find(C=>C.id===a.id);I&&s(I)}},[o]);const L=async I=>{const C=`book-${Date.now()}`,A={id:C,...I,height:235+Math.floor(Math.random()*30),thickness:I.thickness||Math.min(56,Math.max(34,Math.floor(I.pages/7)))};if(n(G=>[A,...G]),S)try{const G=await fetch(`${pu}/books`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});if(G.ok){const se=await G.json();se.data&&n(ie=>ie.map(ue=>ue.id===C?se.data:ue))}}catch(G){console.error("Error syncing added book to backend:",G)}},P=async I=>{if(n(C=>C.map(A=>A.id===I.id?I:A)),a&&a.id===I.id&&s(I),S)try{await fetch(`${pu}/books/${I.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)})}catch(C){console.error("Error syncing edited book to backend:",C)}},U=async I=>{if(n(C=>C.filter(A=>A.id!==I)),a&&a.id===I&&s(null),S)try{await fetch(`${pu}/books/${I}`,{method:"DELETE"})}catch(C){console.error("Error deleting book on backend:",C)}},V=()=>{const I=z.length>0?z:o;if(I.length===0)return;En.playBookPickUp();const C=Math.floor(Math.random()*I.length);s(I[C])},H=()=>{En.playShelfSlide(.1),D(I=>I==="daylight"?"candlelight":"daylight")},z=Ue.useMemo(()=>{let I=o.filter(C=>{var A,G,se,ie;if(_!=="All"&&((A=C.category)==null?void 0:A.toLowerCase())!==_.toLowerCase())return!1;if(p.trim()){const ue=p.toLowerCase(),W=(G=C.title)==null?void 0:G.toLowerCase().includes(ue),F=(se=C.author)==null?void 0:se.toLowerCase().includes(ue),te=(ie=C.category)==null?void 0:ie.toLowerCase().includes(ue),q=C.tags&&C.tags.some(ve=>ve.toLowerCase().includes(ue));if(!W&&!F&&!te&&!q)return!1}return!0});return y==="thickness"?I.sort((C,A)=>(A.thickness||A.pages||0)-(C.thickness||C.pages||0)):y==="year"?I.sort((C,A)=>(A.year||0)-(C.year||0)):y==="title"&&I.sort((C,A)=>(C.title||"").localeCompare(A.title||"")),I},[o,_,p,y]);return M.jsxs("div",{className:"min-h-screen flex flex-col relative overflow-hidden font-sans antialiased transition-colors duration-500",children:[M.jsx(d2,{ambiance:T}),M.jsx(P2,{searchQuery:p,onSearchChange:v,activeCategory:_,onCategoryChange:m,onOpenAddModal:()=>d(!0),ambiance:T,onToggleAmbiance:H,onRandomPick:V,sortBy:y,onSortChange:b}),M.jsx("main",{className:"flex-1 z-10 flex flex-col justify-center",children:M.jsx(B2,{books:z,onSelectBook:I=>s(I),onEditBook:I=>f(I),onDeleteBook:U,onAddBookOpen:()=>d(!0)})}),a&&M.jsx(V2,{book:a,onClose:()=>s(null)}),M.jsx(Y2,{isOpen:h,onClose:()=>d(!1),onAddBook:L}),M.jsx(Q2,{book:c,isOpen:!!c,onClose:()=>f(null),onSaveBook:P}),M.jsxs("footer",{className:"w-full py-5 px-4 z-10 text-[11px] opacity-40 max-w-5xl mx-auto flex items-center justify-between",children:[M.jsx("span",{children:"Athenaeum Folio"}),M.jsxs("span",{className:"font-mono text-[10px]",children:[o.length," volumes · ",T," mode"]})]})]})}aM.createRoot(document.getElementById("root")).render(M.jsx(Kb.StrictMode,{children:M.jsx(J2,{})}));
