// Inspection only. Original qb factory fragment. Do not execute.
function __renderer_fragment__(e){
var t=Ub();
var n=Ec();
var r=Hb();
function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}
function s(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}
function a(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}
function l(e){if(o(e)!==e)throw Error(i(188))}
function c(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=c(e)))return t;e=e.sibling}return null}
var u=Object.assign;
var d=Symbol.for("react.element");
var p=Symbol.for("react.transitional.element");
var f=Symbol.for("react.portal");
var h=Symbol.for("react.fragment");
var m=Symbol.for("react.strict_mode");
var g=Symbol.for("react.profiler");
var y=Symbol.for("react.consumer");
var b=Symbol.for("react.context");
var v=Symbol.for("react.forward_ref");
var x=Symbol.for("react.suspense");
var w=Symbol.for("react.suspense_list");
var k=Symbol.for("react.memo");
var S=Symbol.for("react.lazy");
var C=Symbol.for("react.activity");
var A=Symbol.for("react.memo_cache_sentinel");
var E=Symbol.iterator;
function j(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=E&&e[E]||e["@@iterator"])?e:null}
var T=Symbol.for("react.client.reference");
function N(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===T?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case h:return"Fragment";case g:return"Profiler";case m:return"StrictMode";case x:return"Suspense";case w:return"SuspenseList";case C:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case f:return"Portal";case b:return e.displayName||"Context";case y:return(e._context.displayName||"Context")+".Consumer";case v:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case k:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case S:t=e._payload,e=e._init;try{return N(e(t))}catch(m1){}}return null}
var I=Array.isArray;
var M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
var _=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
var P={pending:!1,data:null,method:null,action:null};
var O=[];
var L=-1;
function R(e){return{current:e}}
function D(e){0>L||(e.current=O[L],O[L]=null,L--)}
function F(e,t){L++,O[L]=e.current,e.current=t}
var B;
var $;
var z=R(null);
var U=R(null);
var V=R(null);
var H=R(null);
function q(e,t){switch(F(V,t),F(U,e),F(z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?md(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=gd(t=md(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(z),F(z,e)}
function W(){D(z),D(U),D(V)}
function K(e){null!==e.memoizedState&&F(H,e);var t=z.current,n=gd(t,e.type);t!==n&&(F(U,e),F(z,n))}
function Y(e){U.current===e&&(D(z),D(U)),H.current===e&&(D(H),lp._currentValue=P)}
function G(e){if(void 0===B)try{throw Error()}catch(m1){var t=m1.stack.trim().match(/\n( *(at )?)/);B=t&&t[1]||"",$=-1<m1.stack.indexOf("\n    at")?" (<anonymous>)":-1<m1.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+B+e+$}
var J=!1;
function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(m1){var r=m1}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(BZ){r=BZ}(n=e())&&"function"==typeof n.catch&&n.catch(function(){})}}catch(o){if(o&&r&&"string"==typeof o.stack)return[o.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),s=o[0],a=o[1];if(s&&a){var l=s.split("\n"),c=a.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{J=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?G(n):""}
function Q(e,t){switch(e.tag){case 26:case 27:case 5:return G(e.type);case 16:return G("Lazy");case 13:return e.child!==t&&null!==t?G("Suspense Fallback"):G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return Z(e.type,!1);case 11:return Z(e.type.render,!1);case 1:return Z(e.type,!0);case 31:return G("Activity");default:return""}}
function X(e){try{var t="",n=null;do{t+=Q(e,n),n=e,e=e.return}while(e);return t}catch(m1){return"\nError generating stack: "+m1.message+"\n"+m1.stack}}
var ee=Object.prototype.hasOwnProperty;
var te=t.unstable_scheduleCallback;
var ne=t.unstable_cancelCallback;
var re=t.unstable_shouldYield;
var ie=t.unstable_requestPaint;
var oe=t.unstable_now;
var se=t.unstable_getCurrentPriorityLevel;
var ae=t.unstable_ImmediatePriority;
var le=t.unstable_UserBlockingPriority;
var ce=t.unstable_NormalPriority;
var ue=t.unstable_LowPriority;
var de=t.unstable_IdlePriority;
var pe=t.log;
var fe=t.unstable_setDisableYieldValue;
var he=null;
var me=null;
function ge(e){if("function"==typeof pe&&fe(e),me&&"function"==typeof me.setStrictMode)try{me.setStrictMode(he,e)}catch(t){}}
var ye=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(be(e)/ve|0)|0};
var be=Math.log;
var ve=Math.LN2;
var xe=256;
var we=262144;
var ke=4194304;
function Se(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}
function Ce(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var a=134217727&r;return 0!==a?0!==(r=a&~o)?i=Se(r):0!==(s&=a)?i=Se(s):n||0!==(n=a&~e)&&(i=Se(n)):0!==(a=r&~o)?i=Se(a):0!==s?i=Se(s):n||0!==(n=r&~e)&&(i=Se(n)),0===i?0:0!==t&&t!==i&&0===(t&o)&&((o=i&-i)>=(n=t&-t)||32===o&&4194048&n)?t:i}
function Ae(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}
function Ee(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}
function je(){var e=ke;return!(62914560&(ke<<=1))&&(ke=4194304),e}
function Te(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}
function Ne(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}
function Ie(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ye(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}
function Me(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}
function _e(e,t){var n=t&-t;return 0!==((n=42&n?1:Pe(n))&(e.suspendedLanes|t))?0:n}
function Pe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}
function Oe(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}
function Le(){var e=_.p;return 0!==e?e:void 0===(e=window.event)?32:kp(e.type)}
function Re(e,t){var n=_.p;try{return _.p=e,t()}finally{_.p=n}}
var De=Math.random().toString(36).slice(2);
var Fe="__reactFiber$"+De;
var Be="__reactProps$"+De;
var $e="__reactContainer$"+De;
var ze="__reactEvents$"+De;
var Ue="__reactListeners$"+De;
var Ve="__reactHandles$"+De;
var He="__reactResources$"+De;
var qe="__reactMarker$"+De;
function We(e){delete e[Fe],delete e[Be],delete e[ze],delete e[Ue],delete e[Ve]}
function Ke(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$e]||n[Fe]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Od(e);null!==e;){if(n=e[Fe])return n;e=Od(e)}return t}n=(e=n).parentNode}return null}
function Ye(e){if(e=e[Fe]||e[$e]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}
function Ge(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}
function Je(e){var t=e[He];return t||(t=e[He]={hoistableStyles:new Map,hoistableScripts:new Map}),t}
function Ze(e){e[qe]=!0}
var Qe=new Set;
var Xe={};
function et(e,t){tt(e,t),tt(e+"Capture",t)}
function tt(e,t){for(Xe[e]=t,e=0;e<t.length;e++)Qe.add(t[e])}
var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
var rt={};
var it={};
function ot(e,t,n){if(i=t,ee.call(it,i)||!ee.call(rt,i)&&(nt.test(i)?it[i]=!0:(rt[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}
function st(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}
function at(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}
function lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}
function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}
function ut(e){if(!e._valueTracker){var t=ct(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}
function dt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}
function pt(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(d0){return e.body}}
var ft=/[\n"\\]/g;
function ht(e){return e.replace(ft,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}
function mt(e,t,n,r,i,o,s,a){e.name="",null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s?e.type=s:e.removeAttribute("type"),null!=t?"number"===s?(0===t&&""===e.value||e.value!=t)&&(e.value=""+lt(t)):e.value!==""+lt(t)&&(e.value=""+lt(t)):"submit"!==s&&"reset"!==s||e.removeAttribute("value"),null!=t?yt(e,s,lt(t)):null!=n?yt(e,s,lt(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=o&&(e.defaultChecked=!!o),null!=i&&(e.checked=i&&"function"!=typeof i&&"symbol"!=typeof i),null!=a&&"function"!=typeof a&&"symbol"!=typeof a&&"boolean"!=typeof a?e.name=""+lt(a):e.removeAttribute("name")}
function gt(e,t,n,r,i,o,s,a){if(null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o&&(e.type=o),null!=t||null!=n){if(("submit"===o||"reset"===o)&&null==t)return void ut(e);n=null!=n?""+lt(n):"",t=null!=t?""+lt(t):n,a||t===e.value||(e.value=t),e.defaultValue=t}r="function"!=typeof(r=null!=r?r:i)&&"symbol"!=typeof r&&!!r,e.checked=a?e.checked:!!r,e.defaultChecked=!!r,null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s&&(e.name=s),ut(e)}
function yt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}
function bt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}
function vt(e,t,n){null==t||((t=""+lt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+lt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}
function xt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(i(92));if(I(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??="",t=n}n=lt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),ut(e)}
function wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}
var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
function St(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}
function Ct(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&St(e,o,r)}else for(var s in t)t.hasOwnProperty(s)&&St(e,s,t[s])}
function At(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}
var Et=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]);
var jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Tt(e){return jt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}
function Nt(){}
var It=null;
function Mt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}
var _t=null;
var Pt=null;
function Ot(e){var t=Ye(e);if(t&&(e=t.stateNode)){var n=e[Be]||null;e:switch(e=t.stateNode,t.type){case"input":if(mt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[Be]||null;if(!o)throw Error(i(90));mt(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&dt(r)}break e;case"textarea":vt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}
var Lt=!1;
function Rt(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==_t||null!==Pt)&&(Zc(),_t&&(t=_t,e=Pt,Pt=_t=null,Ot(t),e)))for(t=0;t<e.length;t++)Ot(e[t])}}
function Dt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Be]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(i(231,t,typeof n));return n}
var Ft=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement);
var Bt=!1;
if(Ft)try{var $t={};Object.defineProperty($t,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch(d0){Bt=!1}
var zt=null;
var Ut=null;
var Vt=null;
function Ht(){if(Vt)return Vt;var e,t,n=Ut,r=n.length,i="value"in zt?zt.value:zt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[o-t];t++);return Vt=i.slice(e,1<t?1-t:void 0)}
function qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}
function Wt(){return!0}
function Kt(){return!1}
function Yt(e){function t(t,n,r,i,o){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Wt:Kt,this.isPropagationStopped=Kt,this}return u(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){},isPersistent:Wt}),t}
var Gt;
var Jt;
var Zt;
var Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0};
var Xt=Yt(Qt);
var en=u({},Qt,{view:0,detail:0});
var tn=Yt(en);
var nn=u({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zt&&(Zt&&"mousemove"===e.type?(Gt=e.screenX-Zt.screenX,Jt=e.screenY-Zt.screenY):Jt=Gt=0,Zt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Jt}});
var rn=Yt(nn);
var on=Yt(u({},nn,{dataTransfer:0}));
var sn=Yt(u({},en,{relatedTarget:0}));
var an=Yt(u({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0}));
var ln=Yt(u({},Qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}));
var cn=Yt(u({},Qt,{data:0}));
var un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"};
var dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};
var pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};
function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}
function hn(){return fn}
var mn=Yt(u({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}));
var gn=Yt(u({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}));
var yn=Yt(u({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn}));
var bn=Yt(u({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0}));
var vn=Yt(u({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}));
var xn=Yt(u({},Qt,{newState:0,oldState:0}));
var wn=[9,13,27,32];
var kn=Ft&&"CompositionEvent"in window;
var Sn=null;
Ft&&"documentMode"in document&&(Sn=document.documentMode);
var Cn=Ft&&"TextEvent"in window&&!Sn;
var An=Ft&&(!kn||Sn&&8<Sn&&11>=Sn);
var En=String.fromCharCode(32);
var jn=!1;
function Tn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}
function Nn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}
var In=!1;
var Mn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};
function _n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Mn[e.type]:"textarea"===t}
function Pn(e,t,n,r){_t?Pt?Pt.push(r):Pt=[r]:_t=r,0<(t=td(t,"onChange")).length&&(n=new Xt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}
var On=null;
var Ln=null;
function Rn(e){Ku(e,0)}
function Dn(e){if(dt(Ge(e)))return e}
function Fn(e,t){if("change"===e)return t}
var Bn=!1;
if(Ft){var $n;if(Ft){var zn="oninput"in document;if(!zn){var Un=document.createElement("div");Un.setAttribute("oninput","return;"),zn="function"==typeof Un.oninput}$n=zn}else $n=!1;Bn=$n&&(!document.documentMode||9<document.documentMode)}
function Vn(){On&&(On.detachEvent("onpropertychange",Hn),Ln=On=null)}
function Hn(e){if("value"===e.propertyName&&Dn(Ln)){var t=[];Pn(t,Ln,e,Mt(e)),Rt(Rn,t)}}
function qn(e,t,n){"focusin"===e?(Vn(),Ln=n,(On=t).attachEvent("onpropertychange",Hn)):"focusout"===e&&Vn()}
function Wn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Dn(Ln)}
function Kn(e,t){if("click"===e)return Dn(t)}
function Yn(e,t){if("input"===e||"change"===e)return Dn(t)}
var Gn="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};
function Jn(e,t){if(Gn(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ee.call(t,i)||!Gn(e[i],t[i]))return!1}return!0}
function Zn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}
function Qn(e,t){var n,r=Zn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Zn(r)}}
function Xn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Xn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}
function er(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}
function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}
}
