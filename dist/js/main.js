!function r(o,i,l){function a(e,t){if(!i[e]){if(!o[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(c)return c(e,!0);throw(n=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",n}n=i[e]={exports:{}},o[e][0].call(n.exports,function(t){return a(o[e][1][t]||t)},n,n.exports,r,o,i,l)}return i[e].exports}for(var c="function"==typeof require&&require,t=0;t<l.length;t++)a(l[t]);return a}({1:[function(t,e,i){!function(k){!function(){"use strict";function v(t){return t.split("-")[0]}function y(t){return t.split("-")[1]}function g(t){return["top","bottom"].includes(v(t))?"x":"y"}function h(t){return"y"===t?"height":"width"}function b(t){var{reference:e,floating:n,placement:t}=t,r=e.x+e.width/2-n.width/2,o=e.y+e.height/2-n.height/2;let i;switch(v(t)){case"top":i={x:r,y:e.y-n.height};break;case"bottom":i={x:r,y:e.y+e.height};break;case"right":i={x:e.x+e.width,y:o};break;case"left":i={x:e.x-n.width,y:o};break;default:i={x:e.x,y:e.y}}var l=g(t),a=h(l);switch(y(t)){case"start":i[l]=i[l]-(e[a]/2-n[a]/2);break;case"end":i[l]=i[l]+(e[a]/2-n[a]/2)}return i}Object.defineProperty(i,"__esModule",{value:!0});function w(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function x(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function P(t,e){const{x:n,y:r,platform:o,rects:i,elements:l,strategy:a}=t;var{boundary:c="clippingParents",rootBoundary:f="viewport",elementContext:s="floating",altBoundary:t=!1,padding:e=0}=e=void 0===e?{}:e,e=w(e),t=l[t?"floating"===s?"reference":"floating":s],f=await o.getClippingClientRect({element:await o.isElement(t)?t:t.contextElement||await o.getDocumentElement({element:l.floating}),boundary:c,rootBoundary:f}),s=x(await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===s?{...i.floating,x:n,y:r}:i.reference,offsetParent:await o.getOffsetParent({element:l.floating}),strategy:a}));return{top:f.top-s.top+e.top,bottom:s.bottom-f.bottom+e.bottom,left:f.left-s.left+e.left,right:s.right-f.right+e.right}}const T=Math.min,O=Math.max;function R(t,e,n){return O(t,T(e,n))}const e={left:"right",right:"left",bottom:"top",top:"bottom"};function E(t){return t.replace(/left|right|bottom|top/g,t=>e[t])}function A(t,e){var n="start"===y(t),r=g(t),t=h(r);let o="x"===r?n?"right":"left":n?"bottom":"top";return e.reference[t]>e.floating[t]&&(o=E(o)),{main:o,cross:E(o)}}const n={start:"end",end:"start"};function C(t){return t.replace(/start|end/g,t=>n[t])}const t=["top","right","bottom","left"],L=t.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);function r(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function o(e){return t.some(t=>0<=e[t])}function D(t){return"x"===t?"y":"x"}i.arrow=p=>({name:"arrow",options:p,async fn(t){var{element:e,padding:n=0}=null!=p?p:{};const{x:r,y:o,placement:i,rects:l,platform:a}=t;if(null==e)return"production"!==k.env.NODE_ENV&&console.warn("Floating UI: No `element` was passed to the `arrow` middleware."),{};var c=w(n),f={x:r,y:o},s=g(v(i)),u=h(s),d=await a.getDimensions({element:e}),m="y"===s?"top":"left",t="y"===s?"bottom":"right",n=l.reference[u]+l.reference[s]-f[s]-l.floating[u],f=f[s]-l.reference[s],e=await a.getOffsetParent({element:e}),e=e?"y"===s?e.clientHeight||0:e.clientWidth||0:0,m=c[m],t=e-d[u]-c[t],f=e/2-d[u]/2+(n/2-f/2),t=R(m,f,t);return{data:{[s]:t,centerOffset:f-t}}}}),i.autoPlacement=function(g){return{name:"autoPlacement",options:g=void 0===g?{}:g,async fn(t){var{x:e,y:n,rects:r,middlewareData:o,placement:i}=t;const{alignment:l=null,allowedPlacements:a=L,autoAlignment:c=!0,...f}=g;if(null!=(m=o.autoPlacement)&&m.skip)return{};var s=function(e,n,t){const r=e?[...t.filter(t=>y(t)===e),...t.filter(t=>y(t)!==e)]:t.filter(t=>v(t)===t);return r.filter(t=>!e||(y(t)===e||!!n&&C(t)!==t))}(l,c,a),u=await P(t,f),t=null!=(m=null==(d=o.autoPlacement)?void 0:d.index)?m:0,d=s[t],{main:m,cross:r}=A(d,r);if(i!==d)return{x:e,y:n,reset:{placement:s[0]}};r=[u[v(d)],u[m],u[r]];const p=[...null!=(o=null==(o=o.autoPlacement)?void 0:o.overflows)?o:[],{placement:d,overflows:r}];var s=s[t+1];if(s)return{data:{index:t+1,overflows:p},reset:{placement:s}};const h=p.slice().sort((t,e)=>t.overflows[0]-e.overflows[0]);s=null==(s=h.find(t=>{let{overflows:e}=t;return e.every(t=>t<=0)}))?void 0:s.placement;return{data:{skip:!0},reset:{placement:null!=s?s:h[0].placement}}}}},i.computePosition=async(e,n,t)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=t;if("production"!==k.env.NODE_ENV&&(null==l&&console.error(["Floating UI: `platform` property was not passed to config. If you","want to use Floating UI on the web, install @floating-ui/dom","instead of the /core package. Otherwise, you can create your own","`platform`: https://floating-ui.com/docs/platform"].join(" ")),1<i.filter(t=>{var{name:t}=t;return"autoPlacement"===t||"flip"===t}).length))throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`","middleware detected. This will lead to an infinite loop. Ensure only","one of either has been passed to the `middleware` array."].join(" "));let a=await l.getElementRects({reference:e,floating:n,strategy:o}),{x:c,y:f}=b({...a,placement:r}),s=r,u={},d=0;for(let t=0;t<i.length;t++){if("production"!==k.env.NODE_ENV&&(d++,100<d))throw new Error(["Floating UI: The middleware lifecycle appears to be","running in an infinite loop. This is usually caused by a `reset`","continually being returned without a break condition."].join(" "));const{name:y,fn:w}=i[t];var{x:m,y:p,data:h,reset:g}=await w({x:c,y:f,initialPlacement:r,placement:s,strategy:o,middlewareData:u,rects:a,platform:l,elements:{reference:e,floating:n}});c=null!=m?m:c,f=null!=p?p:f,u={...u,[y]:null!=h?h:{}},g&&("object"==typeof g&&(g.placement&&(s=g.placement),g.rects&&(a=!0===g.rects?await l.getElementRects({reference:e,floating:n,strategy:o}):g.rects),{x:c,y:f}=b({...a,placement:s})),t=-1)}return{x:c,y:f,placement:s,strategy:o,middlewareData:u}},i.detectOverflow=P,i.flip=function(w){return{name:"flip",options:w=void 0===w?{}:w,async fn(t){const{placement:e,middlewareData:n,rects:r,initialPlacement:o}=t;if(null!=(u=n.flip)&&u.skip)return{};const{mainAxis:i=!0,crossAxis:l=!0,fallbackPlacements:a,fallbackStrategy:c="bestFit",flipAlignment:f=!0,...s}=w;var u=v(e),d=[o,...a||(u===o||!f?[E(o)]:(m=E(d=o),[C(d),m,C(m)]))],m=await P(t,s);const p=[];let h=(null==(t=n.flip)?void 0:t.overflows)||[];if(i&&p.push(m[u]),l&&({main:u,cross:y}=A(e,r),p.push(m[u],m[y])),h=[...h,{placement:e,overflows:p}],p.every(t=>t<=0))return{};{var g,y=(null!=(y=null==(y=n.flip)?void 0:y.index)?y:0)+1,d=d[y];if(d)return{data:{index:y,overflows:h},reset:{placement:d}};let t="bottom";switch(c){case"bestFit":{const e=null==(g=h.slice().sort((t,e)=>t.overflows.filter(t=>0<t).reduce((t,e)=>t+e,0)-e.overflows.filter(t=>0<t).reduce((t,e)=>t+e,0))[0])?void 0:g.placement;e&&(t=e);break}case"initialPlacement":t=o}return{data:{skip:!0},reset:{placement:t}}}}}},i.hide=()=>({name:"hide",async fn(t){var e=await P(t,{elementContext:"reference"}),n=await P(t,{altBoundary:!0}),e=r(e,t.rects.reference),t=r(n,t.rects.floating);return{data:{referenceHidden:o(e),referenceHiddenOffsets:e,escaped:o(t),escapedOffsets:t}}}}),i.inline=function(a){return{name:"inline",options:a=void 0===a?{}:a,async fn(t){const{placement:f,elements:e,rects:n,platform:r,strategy:o,middlewareData:i}=t,{padding:l=2,x:s,y:u}=a;if(null!=(t=i.inline)&&t.skip)return{};const d=x(await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:n.reference,offsetParent:await r.getOffsetParent({element:e.floating}),strategy:o})),m=Array.from(null!=(t=await(null==r.getClientRects?void 0:r.getClientRects({element:e.reference})))?t:[]),p=w(l);return{data:{skip:!0},reset:{rects:await r.getElementRects({reference:{getBoundingClientRect:function(){if(2===m.length&&m[0].left>m[1].right&&null!=s&&null!=u)return null!=(n=m.find(t=>s>t.left-p.left&&s<t.right+p.right&&u>t.top-p.top&&u<t.bottom+p.bottom))?n:d;if(2<=m.length){if("x"===g(f)){var t=m[0],e=m[m.length-1],n="top"===v(f),r=t.top,o=e.bottom,i=(n?t:e).left,e=(n?t:e).right;return{top:r,bottom:o,left:i,right:e,width:e-i,height:o-r,x:i,y:r}}const l="left"===v(f),a=O(...m.map(t=>t.right)),c=T(...m.map(t=>t.left));o=m.filter(t=>l?t.left===c:t.right===a),i=o[0].top,r=o[o.length-1].bottom,o=c;return{top:i,bottom:r,left:o,right:a,width:a-o,height:r-i,x:o,y:i}}return d}},floating:e.floating,strategy:o})}}}}},i.limitShift=function(h){return{options:h=void 0===h?{}:h,fn(t){var{x:e,y:n,placement:r,rects:o,middlewareData:i}=t;const{offset:l=0,mainAxis:a=!0,crossAxis:c=!0}=h;var f={x:e,y:n},t=g(r),e=D(t);let s=f[t],u=f[e];var d,m,p,n="function"==typeof l?l({...o,placement:r}):l,f="number"==typeof n?{mainAxis:n,crossAxis:0}:{mainAxis:0,crossAxis:0,...n};return a&&(n=o.reference[t]-o.floating[m="y"===t?"height":"width"]+f.mainAxis,m=o.reference[t]+o.reference[m]-f.mainAxis,s<n?s=n:s>m&&(s=m)),c&&(m="y"===t?"width":"height",r=["top","left"].includes(v(r)),p=o.reference[e]-o.floating[m]+(r&&null!=(p=null==(p=i.offset)?void 0:p[e])?p:0)+(r?0:f.crossAxis),f=o.reference[e]+o.reference[m]+(!r&&null!=(d=null==(d=i.offset)?void 0:d[e])?d:0)-(r?f.crossAxis:0),u<p?u=p:u>f&&(u=f)),{[t]:s,[e]:u}}}},i.offset=function(o){return{name:"offset",options:o=void 0===o?0:o,fn(t){var{x:e,y:n,placement:r,rects:t}=t,t=function(t){let{placement:e,rects:n,value:r}=t;var o=v(e),i=["left","top"].includes(o)?-1:1,{mainAxis:t,crossAxis:l}="number"==typeof(l="function"==typeof r?r({...n,placement:e}):r)?{mainAxis:l,crossAxis:0}:{mainAxis:0,crossAxis:0,...l};return"x"===g(o)?{x:l,y:t*i}:{x:t*i,y:l}}({placement:r,rects:t,value:o});return{x:e+t.x,y:n+t.y,data:t}}}},i.rectToClientRect=x,i.shift=function(p){return{name:"shift",options:p=void 0===p?{}:p,async fn(t){var{x:e,y:n,placement:r}=t;const{mainAxis:o=!0,crossAxis:i=!1,limiter:l={fn:t=>{var{x:e,y:t}=t;return{x:e,y:t}}},...a}=p;var c,f={x:e,y:n},s=await P(t,a),u=g(v(r)),r=D(u);let d=f[u],m=f[r];o&&(f=d+s["y"===u?"top":"left"],c=d-s["y"===u?"bottom":"right"],d=R(f,d,c)),i&&(c=m+s["y"===r?"top":"left"],s=m-s["y"===r?"bottom":"right"],m=R(c,m,s));r=l.fn({...t,[u]:d,[r]:m});return{...r,data:{x:r.x-e,y:r.y-n}}}}},i.size=function(u){return{name:"size",options:u=void 0===u?{}:u,async fn(t){var{placement:e,rects:n,middlewareData:r}=t;const{apply:o,...i}=u;if(null!=(s=r.size)&&s.skip)return{};var l=await P(t,i),a=v(e),r="end"===y(e);let c,f;"top"===a||"bottom"===a?(c=a,f=r?"left":"right"):(f=a,c=r?"top":"bottom");var s=O(l.left,0),t=O(l.right,0),a=O(l.top,0),r=O(l.bottom,0),l={height:n.floating.height-(["left","right"].includes(e)?2*(0!==a||0!==r?a+r:O(l.top,l.bottom)):l[c]),width:n.floating.width-(["top","bottom"].includes(e)?2*(0!==s||0!==t?s+t:O(l.left,l.right)):l[f])};return null!=o&&o({...l,...n}),{data:{skip:!0},reset:{rects:!0}}}}}}.call(this)}.call(this,t("_process"))},{_process:3}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("@floating-ui/core");function r(t){return"[object Window]"===(null==t?void 0:t.toString())}function a(t){if(null==t)return window;if(r(t))return t;t=t.ownerDocument;return t&&t.defaultView||window}function c(t){return a(t).getComputedStyle(t)}function f(t){return!r(t)&&t?(t.nodeName||"").toLowerCase():""}function s(t){return t instanceof a(t).HTMLElement}function i(t){return t instanceof a(t).Element}function l(t){return t instanceof a(t).ShadowRoot||t instanceof ShadowRoot}function u(t){var{overflow:e,overflowX:n,overflowY:t}=c(t);return/auto|scroll|overlay|hidden/.test(e+t+n)}function d(t){var e=navigator.userAgent.toLowerCase().includes("firefox"),t=c(t);return"none"!==t.transform||"none"!==t.perspective||"paint"===t.contain||["transform","perspective"].includes(t.willChange)||e&&"filter"===t.willChange||e&&t.filter&&"none"!==t.filter}const m=Math.min,p=Math.max,h=Math.round;function g(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect();let r=1,o=1;return e&&s(t)&&(r=0<t.offsetWidth&&h(n.width)/t.offsetWidth||1,o=0<t.offsetHeight&&h(n.height)/t.offsetHeight||1),{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function y(t){return(((e=t)instanceof a(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function w(t){return r(t)?{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}:{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function v(t){return g(y(t)).left+w(t).scrollLeft}function b(t,e,n){var r,o=s(e),i=y(e),r=g(t,o&&(t=g(r=e),h(t.width)!==r.offsetWidth||h(t.height)!==r.offsetHeight));let l={scrollLeft:0,scrollTop:0};const a={x:0,y:0};return(o||!o&&"fixed"!==n)&&("body"===f(e)&&!u(i)||(l=w(e)),s(e)?(n=g(e,!0),a.x=n.x+e.clientLeft,a.y=n.y+e.clientTop):i&&(a.x=v(i))),{x:r.left+l.scrollLeft-a.x,y:r.top+l.scrollTop-a.y,width:r.width,height:r.height}}function x(t){return"html"===f(t)?t:t.assignedSlot||t.parentNode||(l(t)?t.host:null)||y(t)}function P(t){return s(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function T(t){var e,n=a(t);let r=P(t);for(;r&&(e=r,["table","td","th"].includes(f(e)))&&"static"===getComputedStyle(r).position;)r=P(r);return(!r||"html"!==f(r)&&("body"!==f(r)||"static"!==getComputedStyle(r).position||d(r)))&&(r||function(t){let e=x(t);for(;s(e)&&!["html","body"].includes(f(e));){if(d(e))return e;e=e.parentNode}return null}(t))||n}function O(t){return{width:t.offsetWidth,height:t.offsetHeight}}function R(t,e){void 0===e&&(e=[]);var n=function t(e){return["html","body","#document"].includes(f(e))?e.ownerDocument.body:s(e)&&u(e)?e:t(x(e))}(t),t=n===(null==(t=t.ownerDocument)?void 0:t.body);const r=a(n);n=t?[r].concat(r.visualViewport||[],u(n)?n:[]):n;const o=e.concat(n);return t?o:o.concat(R(x(n)))}function E(t,e){return"viewport"===e?o.rectToClientRect(function(t){var e=a(t),n=y(t),t=e.visualViewport;let r=n.clientWidth,o=n.clientHeight,i=0,l=0;return t&&(r=t.width,o=t.height,Math.abs(e.innerWidth/t.scale-t.width)<.01&&(i=t.offsetLeft,l=t.offsetTop)),{width:r,height:o,x:i,y:l}}(t)):i(e)?(e=(r=g(n=e)).top+n.clientTop,r=r.left+n.clientLeft,{top:e,left:r,x:r,y:e,right:r+n.clientWidth,bottom:e+n.clientHeight,width:n.clientWidth,height:n.clientHeight}):o.rectToClientRect(function(t){var e=y(t),n=w(t),r=null==(i=t.ownerDocument)?void 0:i.body,o=p(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=p(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let l=-n.scrollLeft+v(t);return n=-n.scrollTop,"rtl"===c(r||e).direction&&(l+=p(e.clientWidth,r?r.clientWidth:0)-o),{width:o,height:i,x:l,y:n}}(y(t)));var n,r}function A(t){const e=R(x(t));const n=["absolute","fixed"].includes(c(t).position)&&s(t)?T(t):t;return i(n)?e.filter(t=>i(t)&&function(e,n){var t=null==n.getRootNode?void 0:n.getRootNode();if(e.contains(n))return!0;if(t&&l(t)){let t=n;do{if(t&&e===t)return!0}while(t=t.parentNode||t.host,t)}return!1}(t,n)&&"body"!==f(t)):[]}const C={getElementRects:t=>{var{reference:e,floating:n,strategy:t}=t;return{reference:b(e,T(n),t),floating:{...O(n),x:0,y:0}}},convertOffsetParentRelativeRectToViewportRelativeRect:t=>function(t){var{rect:e,offsetParent:n,strategy:r}=t,o=s(n),t=y(n);if(n===t)return e;let i={scrollLeft:0,scrollTop:0};const l={x:0,y:0};return(o||!o&&"fixed"!==r)&&("body"===f(n)&&!u(t)||(i=w(n)),s(n)&&(t=g(n,!0),l.x=t.x+n.clientLeft,l.y=t.y+n.clientTop)),{...e,x:e.x-i.scrollLeft+l.x,y:e.y-i.scrollTop+l.y}}(t),getOffsetParent:t=>{var{element:t}=t;return T(t)},isElement:t=>i(t),getDocumentElement:t=>{var{element:t}=t;return y(t)},getClippingClientRect:t=>function(t){let{element:n,boundary:e,rootBoundary:r}=t;const o=[..."clippingParents"===e?A(n):[].concat(e),r];t=o[0];const i=o.reduce((t,e)=>{e=E(n,e);return t.top=p(e.top,t.top),t.right=m(e.right,t.right),t.bottom=m(e.bottom,t.bottom),t.left=p(e.left,t.left),t},E(n,t));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}(t),getDimensions:t=>{var{element:t}=t;return O(t)},getClientRects:t=>{let{element:e}=t;return e.getClientRects()}};Object.defineProperty(n,"arrow",{enumerable:!0,get:function(){return o.arrow}}),Object.defineProperty(n,"autoPlacement",{enumerable:!0,get:function(){return o.autoPlacement}}),Object.defineProperty(n,"detectOverflow",{enumerable:!0,get:function(){return o.detectOverflow}}),Object.defineProperty(n,"flip",{enumerable:!0,get:function(){return o.flip}}),Object.defineProperty(n,"hide",{enumerable:!0,get:function(){return o.hide}}),Object.defineProperty(n,"inline",{enumerable:!0,get:function(){return o.inline}}),Object.defineProperty(n,"limitShift",{enumerable:!0,get:function(){return o.limitShift}}),Object.defineProperty(n,"offset",{enumerable:!0,get:function(){return o.offset}}),Object.defineProperty(n,"shift",{enumerable:!0,get:function(){return o.shift}}),Object.defineProperty(n,"size",{enumerable:!0,get:function(){return o.size}}),n.computePosition=(t,e,n)=>o.computePosition(t,e,{platform:C,...n}),n.getScrollParents=R},{"@floating-ui/core":1}],3:[function(t,e,n){var r,o,e=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{o="function"==typeof clearTimeout?clearTimeout:l}catch(t){o=l}}();var c,f=[],s=!1,u=-1;function d(){s&&c&&(s=!1,c.length?f=c.concat(f):u=-1,f.length&&m())}function m(){if(!s){var t=a(d);s=!0;for(var e=f.length;e;){for(c=f,f=[];++u<e;)c&&c[u].run();u=-1,e=f.length}c=null,s=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===l||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function h(){}e.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new p(t,e)),1!==f.length||s||a(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=h,e.addListener=h,e.once=h,e.off=h,e.removeListener=h,e.removeAllListeners=h,e.emit=h,e.prependListener=h,e.prependOnceListener=h,e.listeners=function(t){return[]},e.binding=function(t){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(t){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},{}],4:[function(t,e,n){t("./tooltips.js")},{"./tooltips.js":5}],5:[function(t,e,n){var{computePosition:t}=t("@floating-ui/dom");console.log(t)},{"@floating-ui/dom":2}]},{},[4]);
//# sourceMappingURL=main.js.map