// Inspection only. Original qb factory fragment. Do not execute.
function __renderer_fragment__(e){
var nr=Ft&&"documentMode"in document&&11>=document.documentMode;
var rr=null;
var ir=null;
var or=null;
var sr=!1;
function ar(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;sr||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},or&&Jn(or,r)||(or=r,0<(r=td(ir,"onSelect")).length&&(t=new Xt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}
function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}
var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")};
var ur={};
var dr={};
function pr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}
Ft&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);
var fr=pr("animationend");
var hr=pr("animationiteration");
var mr=pr("animationstart");
var gr=pr("transitionrun");
var yr=pr("transitionstart");
var br=pr("transitioncancel");
var vr=pr("transitionend");
var xr=new Map;
var wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kr(e,t){xr.set(e,t),et(t,[e])}
wr.push("scrollEnd");
var Sr="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)};
var Cr=[];
var Ar=0;
var Er=0;
function jr(){for(var e=Ar,t=Er=Ar=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var i=Cr[t];Cr[t++]=null;var o=Cr[t];if(Cr[t++]=null,null!==r&&null!==i){var s=r.pending;null===s?i.next=i:(i.next=s.next,s.next=i),r.pending=i}0!==o&&Mr(n,i,o)}}
function Tr(e,t,n,r){Cr[Ar++]=e,Cr[Ar++]=t,Cr[Ar++]=n,Cr[Ar++]=r,Er|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}
function Nr(e,t,n,r){return Tr(e,t,n,r),_r(e)}
function Ir(e,t){return Tr(e,null,null,t),_r(e)}
function Mr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(i=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,i&&null!==t&&(i=31-ye(n),null===(r=(e=o.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),o):null}
function _r(e){if(50<Uc)throw Uc=0,Vc=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}
var Pr={};
function Or(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}
function Lr(e,t,n,r){return new Or(e,t,n,r)}
function Rr(e){return!(!(e=e.prototype)||!e.isReactComponent)}
function Dr(e,t){var n=e.alternate;return null===n?((n=Lr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}
function Fr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}
function Br(e,t,n,r,o,s){var a=0;if(r=e,"function"==typeof e)Rr(e)&&(a=1);else if("string"==typeof e)a=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;return!0;case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e);case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(e,n,z.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case C:return(e=Lr(31,n,t,o)).elementType=C,e.lanes=s,e;case h:return $r(n.children,o,s,t);case m:a=8,o|=24;break;case g:return(e=Lr(12,n,t,2|o)).elementType=g,e.lanes=s,e;case x:return(e=Lr(13,n,t,o)).elementType=x,e.lanes=s,e;case w:return(e=Lr(19,n,t,o)).elementType=w,e.lanes=s,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case b:a=10;break e;case y:a=9;break e;case v:a=11;break e;case k:a=14;break e;case S:a=16,r=null;break e}a=29,n=Error(i(130,null===e?"null":typeof e,"")),r=null}return(t=Lr(a,n,t,o)).elementType=e,t.type=r,t.lanes=s,t}
function $r(e,t,n,r){return(e=Lr(7,e,r,t)).lanes=n,e}
function zr(e,t,n){return(e=Lr(6,e,null,t)).lanes=n,e}
function Ur(e){var t=Lr(18,null,null,0);return t.stateNode=e,t}
function Vr(e,t,n){return(t=Lr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}
var Hr=new WeakMap;
function qr(e,t){if("object"==typeof e&&null!==e){var n=Hr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:X(t)},Hr.set(e,t),t)}return{value:e,source:t,stack:X(t)}}
var Wr=[];
var Kr=0;
var Yr=null;
var Gr=0;
var Jr=[];
var Zr=0;
var Qr=null;
var Xr=1;
var ei="";
function ti(e,t){Wr[Kr++]=Gr,Wr[Kr++]=Yr,Yr=e,Gr=t}
function ni(e,t,n){Jr[Zr++]=Xr,Jr[Zr++]=ei,Jr[Zr++]=Qr,Qr=e;var r=Xr;e=ei;var i=32-ye(r)-1;r&=~(1<<i),n+=1;var o=32-ye(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xr=1<<32-ye(t)+i|n<<i|r,ei=o+e}else Xr=1<<o|n<<i|r,ei=e}
function ri(e){null!==e.return&&(ti(e,1),ni(e,1,0))}
function ii(e){for(;e===Yr;)Yr=Wr[--Kr],Wr[Kr]=null,Gr=Wr[--Kr],Wr[Kr]=null;for(;e===Qr;)Qr=Jr[--Zr],Jr[Zr]=null,ei=Jr[--Zr],Jr[Zr]=null,Xr=Jr[--Zr],Jr[Zr]=null}
function oi(e,t){Jr[Zr++]=Xr,Jr[Zr++]=ei,Jr[Zr++]=Qr,Xr=t.id,ei=t.overflow,Qr=e}
var si=null;
var ai=null;
var li=!1;
var ci=null;
var ui=!1;
var di=Error(i(519));
function pi(e){throw bi(qr(Error(i(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),di}
function fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Fe]=e,t[Be]=r,n){case"dialog":Yu("cancel",t),Yu("close",t);break;case"iframe":case"object":case"embed":Yu("load",t);break;case"video":case"audio":for(n=0;n<qu.length;n++)Yu(qu[n],t);break;case"source":Yu("error",t);break;case"img":case"image":case"link":Yu("error",t),Yu("load",t);break;case"details":Yu("toggle",t);break;case"input":Yu("invalid",t),gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Yu("invalid",t);break;case"textarea":Yu("invalid",t),xt(t,r.value,r.defaultValue,r.children)}"string"!=typeof(n=r.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||ad(t.textContent,n)?(null!=r.popover&&(Yu("beforetoggle",t),Yu("toggle",t)),null!=r.onScroll&&Yu("scroll",t),null!=r.onScrollEnd&&Yu("scrollend",t),null!=r.onClick&&(t.onclick=Nt),t=!0):t=!1,t||pi(e,!0)}
function hi(e){for(si=e.return;si;)switch(si.tag){case 5:case 31:case 13:return void(ui=!1);case 27:case 3:return void(ui=!0);default:si=si.return}}
function mi(e){if(e!==si)return!1;if(!li)return hi(e),li=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||yd(e.type,e.memoizedProps)),t=!t),t&&ai&&pi(e),hi(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));ai=Pd(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));ai=Pd(e)}else 27===n?(n=ai,Cd(e.type)?(e=_d,_d=null,ai=e):ai=n):ai=si?Md(e.stateNode.nextSibling):null;return!0}
function gi(){ai=si=null,li=!1}
function yi(){var e=ci;return null!==e&&(null===Tc?Tc=e:Tc.push.apply(Tc,e),ci=null),e}
function bi(e){null===ci?ci=[e]:ci.push(e)}
var vi=R(null);
var xi=null;
var wi=null;
function ki(e,t,n){F(vi,t._currentValue),t._currentValue=n}
function Si(e){e._currentValue=vi.current,D(vi)}
function Ci(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}
function Ai(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var s=o.dependencies;if(null!==s){var a=o.child;s=s.firstContext;e:for(;null!==s;){var l=s;s=o;for(var c=0;c<t.length;c++)if(l.context===t[c]){s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ci(s.return,n,e),r||(a=null);break e}s=l.next}}else if(18===o.tag){if(null===(a=o.return))throw Error(i(341));a.lanes|=n,null!==(s=a.alternate)&&(s.lanes|=n),Ci(a,n,e),a=null}else a=o.child;if(null!==a)a.return=o;else for(a=o;null!==a;){if(a===e){a=null;break}if(null!==(o=a.sibling)){o.return=a.return,a=o;break}a=a.return}o=a}}
function Ei(e,t,n,r){e=null;for(var o=t,s=!1;null!==o;){if(!s)if(524288&o.flags)s=!0;else if(262144&o.flags)break;if(10===o.tag){var a=o.alternate;if(null===a)throw Error(i(387));if(null!==(a=a.memoizedProps)){var l=o.type;Gn(o.pendingProps.value,a.value)||(null!==e?e.push(l):e=[l])}}else if(o===H.current){if(null===(a=o.alternate))throw Error(i(387));a.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(lp):e=[lp])}o=o.return}null!==e&&Ai(t,e,n,r),t.flags|=262144}
function ji(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}
function Ti(e){xi=e,wi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}
function Ni(e){return Mi(xi,e)}
function Ii(e,t){return null===xi&&Ti(e),Mi(e,t)}
function Mi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===wi){if(null===e)throw Error(i(308));wi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wi=wi.next=t;return n}
var _i="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}};
var Pi=t.unstable_scheduleCallback;
var Oi=t.unstable_NormalPriority;
var Li={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};
function Ri(){return{controller:new _i,data:new Map,refCount:0}}
function Di(e){e.refCount--,0===e.refCount&&Pi(Oi,function(){e.controller.abort()})}
var Fi=null;
var Bi=0;
var $i=0;
var zi=null;
function Ui(){if(0===--Bi&&null!==Fi){null!==zi&&(zi.status="fulfilled");var e=Fi;Fi=null,$i=0,zi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}
var Vi=M.S;
M.S=function(e,t){Mc=oe(),"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Fi){var n=Fi=[];Bi=0,$i=$u(),zi={status:"pending",value:void 0,then:function(e){n.push(e)}}}Bi++,t.then(Ui,Ui)}(0,t),null!==Vi&&Vi(e,t)};
var Hi=R(null);
function qi(){var e=Hi.current;return null!==e?e:dc.pooledCache}
function Wi(e,t){F(Hi,null===t?Hi.current:t.pool)}
function Ki(){var e=qi();return null===e?null:{parent:Li._currentValue,pool:e}}
var Yi=Error(i(460));
var Gi=Error(i(474));
var Ji=Error(i(542));
var Zi={then:function(){}};
function Qi(e){return"fulfilled"===(e=e.status)||"rejected"===e}
function Xi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Nt,Nt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ro(e=t.reason),e;default:if("string"==typeof t.status)t.then(Nt,Nt);else{if(null!==(e=dc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ro(e=t.reason),e}throw to=t,Yi}}
function eo(e){try{return(0,e._init)(e._payload)}catch(m1){if(null!==m1&&"object"==typeof m1&&"function"==typeof m1.then)throw to=m1,Yi;throw m1}}
var to=null;
function no(){if(null===to)throw Error(i(459));var e=to;return to=null,e}
function ro(e){if(e===Yi||e===Ji)throw Error(i(483))}
var io=null;
var oo=0;
function so(e){var t=oo;return oo+=1,null===io&&(io=[]),Xi(io,e,t)}
function ao(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}
function lo(e,t){if(t.$$typeof===d)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}
function co(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=Dr(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=zr(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===h?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===S&&eo(i)===t.type)?(ao(t=o(t,n.props),n),t.return=e,t):(ao(t=Br(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Vr(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=$r(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function m(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=zr(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case p:return ao(n=Br(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case f:return(t=Vr(t,e.mode,n)).return=e,t;case S:return m(e,t=eo(t),n)}if(I(t)||j(t))return(t=$r(t,e.mode,n,null)).return=e,t;if("function"==typeof t.then)return m(e,so(t),n);if(t.$$typeof===b)return m(e,Ii(e,t),n);lo(e,t)}return null}function g(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case p:return n.key===i?c(e,t,n,r):null;case f:return n.key===i?u(e,t,n,r):null;case S:return g(e,t,n=eo(n),r)}if(I(n)||j(n))return null!==i?null:d(e,t,n,r,null);if("function"==typeof n.then)return g(e,t,so(n),r);if(n.$$typeof===b)return g(e,t,Ii(e,n),r);lo(e,n)}return null}function y(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case p:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case f:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return y(e,t,n,r=eo(r),i)}if(I(r)||j(r))return d(t,e=e.get(n)||null,r,i,null);if("function"==typeof r.then)return y(e,t,n,so(r),i);if(r.$$typeof===b)return y(e,t,n,Ii(t,r),i);lo(t,r)}return null}function v(l,c,u,d){if("object"==typeof u&&null!==u&&u.type===h&&null===u.key&&(u=u.props.children),"object"==typeof u&&null!==u){switch(u.$$typeof){case p:e:{for(var x=u.key;null!==c;){if(c.key===x){if((x=u.type)===h){if(7===c.tag){n(l,c.sibling),(d=o(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===x||"object"==typeof x&&null!==x&&x.$$typeof===S&&eo(x)===c.type){n(l,c.sibling),ao(d=o(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===h?((d=$r(u.props.children,l.mode,d,u.key)).return=l,l=d):(ao(d=Br(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return a(l);case f:e:{for(x=u.key;null!==c;){if(c.key===x){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=o(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Vr(u,l.mode,d)).return=l,l=d}return a(l);case S:return v(l,c,u=eo(u),d)}if(I(u))return function(i,o,a,l){for(var c=null,u=null,d=o,p=o=0,f=null;null!==d&&p<a.length;p++){d.index>p?(f=d,d=null):f=d.sibling;var h=g(i,d,a[p],l);if(null===h){null===d&&(d=f);break}e&&d&&null===h.alternate&&t(i,d),o=s(h,o,p),null===u?c=h:u.sibling=h,u=h,d=f}if(p===a.length)return n(i,d),li&&ti(i,p),c;if(null===d){for(;p<a.length;p++)null!==(d=m(i,a[p],l))&&(o=s(d,o,p),null===u?c=d:u.sibling=d,u=d);return li&&ti(i,p),c}for(d=r(d);p<a.length;p++)null!==(f=y(d,i,p,a[p],l))&&(e&&null!==f.alternate&&d.delete(null===f.key?p:f.key),o=s(f,o,p),null===u?c=f:u.sibling=f,u=f);return e&&d.forEach(function(e){return t(i,e)}),li&&ti(i,p),c}(l,c,u,d);if(j(u)){if("function"!=typeof(x=j(u)))throw Error(i(150));return function(o,a,l,c){if(null==l)throw Error(i(151));for(var u=null,d=null,p=a,f=a=0,h=null,b=l.next();null!==p&&!b.done;f++,b=l.next()){p.index>f?(h=p,p=null):h=p.sibling;var v=g(o,p,b.value,c);if(null===v){null===p&&(p=h);break}e&&p&&null===v.alternate&&t(o,p),a=s(v,a,f),null===d?u=v:d.sibling=v,d=v,p=h}if(b.done)return n(o,p),li&&ti(o,f),u;if(null===p){for(;!b.done;f++,b=l.next())null!==(b=m(o,b.value,c))&&(a=s(b,a,f),null===d?u=b:d.sibling=b,d=b);return li&&ti(o,f),u}for(p=r(p);!b.done;f++,b=l.next())null!==(b=y(p,o,f,b.value,c))&&(e&&null!==b.alternate&&p.delete(null===b.key?f:b.key),a=s(b,a,f),null===d?u=b:d.sibling=b,d=b);return e&&p.forEach(function(e){return t(o,e)}),li&&ti(o,f),u}(l,c,u=x.call(u),d)}if("function"==typeof u.then)return v(l,c,so(u),d);if(u.$$typeof===b)return v(l,c,Ii(l,u),d);lo(l,u)}return"string"==typeof u&&""!==u||"number"==typeof u||"bigint"==typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=o(c,u)).return=l,l=d):(n(l,c),(d=zr(u,l.mode,d)).return=l,l=d),a(l)):n(l,c)}return function(e,t,n,r){try{oo=0;var i=v(e,t,n,r);return io=null,i}catch(m1){if(m1===Yi||m1===Ji)throw m1;var o=Lr(29,m1,null,e.mode);return o.lanes=r,o.return=e,o}}}
var uo=co(!0);
var po=co(!1);
var fo=!1;
function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}
function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}
function go(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}
function yo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&uc){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=_r(e),Mr(e,null,n),t}return Tr(e,r,t,n),_r(e)}
function bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Me(e,n)}}
function vo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?i=o=s:o=o.next=s,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}
var xo=!1;
function wo(){if(xo){if(null!==zi)throw zi}}
function ko(e,t,n,r){xo=!1;var i=e.updateQueue;fo=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,c=l.next;l.next=null,null===s?o=c:s.next=c,s=l;var d=e.alternate;null!==d&&((a=(d=d.updateQueue).lastBaseUpdate)!==s&&(null===a?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(null!==o){var p=i.baseState;for(s=0,d=c=l=null,a=o;;){var f=-536870913&a.lane,h=f!==a.lane;if(h?(fc&f)===f:(r&f)===f){0!==f&&f===$i&&(xo=!0),null!==d&&(d=d.next={lane:0,tag:a.tag,payload:a.payload,callback:null,next:null});e:{var m=e,g=a;f=t;var y=n;switch(g.tag){case 1:if("function"==typeof(m=g.payload)){p=m.call(y,p,f);break e}p=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null==(f="function"==typeof(m=g.payload)?m.call(y,p,f):m))break e;p=u({},p,f);break e;case 2:fo=!0}}null!==(f=a.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=i.callbacks)?i.callbacks=[f]:h.push(f))}else h={lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===d?(c=d=h,l=p):d=d.next=h,s|=f;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(h=a).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}null===d&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null===o&&(i.shared.lanes=0),wc|=s,e.lanes=s,e.memoizedState=p}}
function So(e,t){if("function"!=typeof e)throw Error(i(191,e));e.call(t)}
function Co(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)So(n[e],t)}
var Ao=R(null);
var Eo=R(0);
function jo(e,t){F(Eo,e=vc),F(Ao,t),vc=e|t.baseLanes}
function To(){F(Eo,vc),F(Ao,Ao.current)}
function No(){vc=Eo.current,D(Ao),D(Eo)}
var Io=R(null);
var Mo=null;
function _o(e){var t=e.alternate;F(Do,1&Do.current),F(Io,e),null===Mo&&(null===t||null!==Ao.current||null!==t.memoizedState)&&(Mo=e)}
function Po(e){F(Do,Do.current),F(Io,e),null===Mo&&(Mo=e)}
function Oo(e){22===e.tag?(F(Do,Do.current),F(Io,e),null===Mo&&(Mo=e)):Lo()}
function Lo(){F(Do,Do.current),F(Io,Io.current)}
function Ro(e){D(Io),Mo===e&&(Mo=null),D(Do)}
var Do=R(0);
function Fo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Nd(n)||Id(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(128&t.flags)return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}
var Bo=0;
var $o=null;
var zo=null;
var Uo=null;
var Vo=!1;
var Ho=!1;
var qo=!1;
var Wo=0;
var Ko=0;
var Yo=null;
var Go=0;
function Jo(){throw Error(i(321))}
function Zo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}
function Qo(e,t,n,r,i,o){return Bo=o,$o=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=null===e||null===e.memoizedState?fa:ha,qo=!1,o=n(r,i),qo=!1,Ho&&(o=es(t,n,r,i)),Xo(e),o}
function Xo(e){M.H=pa;var t=null!==zo&&null!==zo.next;if(Bo=0,Uo=zo=$o=null,Vo=!1,Ko=0,Yo=null,t)throw Error(i(300));null===e||Ia||null!==(e=e.dependencies)&&ji(e)&&(Ia=!0)}
function es(e,t,n,r){$o=e;var o=0;do{if(Ho&&(Yo=null),Ko=0,Ho=!1,25<=o)throw Error(i(301));if(o+=1,Uo=zo=null,null!=e.updateQueue){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,null!=s.memoCache&&(s.memoCache.index=0)}M.H=ma,s=t(n,r)}while(Ho);return s}
function ts(){var e=M.H,t=e.useState()[0];return t="function"==typeof t.then?as(t):t,e=e.useState()[0],(null!==zo?zo.memoizedState:null)!==e&&($o.flags|=1024),t}
function ns(){var e=0!==Wo;return Wo=0,e}
function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}
function is(e){if(Vo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Vo=!1}Bo=0,Uo=zo=$o=null,Ho=!1,Ko=Wo=0,Yo=null}
function os(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Uo?$o.memoizedState=Uo=e:Uo=Uo.next=e,Uo}
function ss(){if(null===zo){var e=$o.alternate;e=null!==e?e.memoizedState:null}else e=zo.next;var t=null===Uo?$o.memoizedState:Uo.next;if(null!==t)Uo=t,zo=e;else{if(null===e){if(null===$o.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(zo=e).memoizedState,baseState:zo.baseState,baseQueue:zo.baseQueue,queue:zo.queue,next:null},null===Uo?$o.memoizedState=Uo=e:Uo=Uo.next=e}return Uo}
function as(e){var t=Ko;return Ko+=1,null===Yo&&(Yo=[]),e=Xi(Yo,e,t),t=$o,null===(null===Uo?t.memoizedState:Uo.next)&&(t=t.alternate,M.H=null===t||null===t.memoizedState?fa:ha),e}
function ls(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return as(e);if(e.$$typeof===b)return Ni(e)}throw Error(i(438,String(e)))}
function cs(e){var t=null,n=$o.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=$o.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},$o.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}
function us(e,t){return"function"==typeof t?t(e):t}
function ds(e){return ps(ss(),zo,e)}
function ps(e,t,n){var r=e.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=n;var o=e.baseQueue,s=r.pending;if(null!==s){if(null!==o){var a=o.next;o.next=s.next,s.next=a}t.baseQueue=o=s,r.pending=null}if(s=e.baseState,null===o)e.memoizedState=s;else{var l=a=null,c=null,u=t=o.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(fc&p)===p:(Bo&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===$i&&(d=!0);else{if((Bo&f)===f){u=u.next,f===$i&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,a=s):c=c.next=p,$o.lanes|=f,wc|=f}p=u.action,qo&&n(s,p),s=u.hasEagerState?u.eagerState:n(s,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,a=s):c=c.next=f,$o.lanes|=p,wc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?a=s:c.next=l,!Gn(s,e.memoizedState)&&(Ia=!0,d&&null!==(n=zi)))throw n;e.memoizedState=s,e.baseState=a,e.baseQueue=c,r.lastRenderedState=s}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}
function fs(e){var t=ss(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(null!==o){n.pending=null;var a=o=o.next;do{s=e(s,a.action),a=a.next}while(a!==o);Gn(s,t.memoizedState)||(Ia=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}
}
