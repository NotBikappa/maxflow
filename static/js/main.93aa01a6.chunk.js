(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(0),c=a.n(o),r=a(20),i=a.n(r),s=(a(67),a(68),a(19)),d=a(29),l=a(49),u=a(18),b=a(5),O=(a(51),a(97)),j=a(101),p=a(99),f=a(100),v=a(42),y=a(58);function x(e){return e+"px"}var E,m=Object(v.a)({arcLabel:{position:"absolute",top:"10px"},arrow:{display:"inline-block",position:"absolute",top:"-2px",left:"20px",border:"solid black",borderWidth:" 0 3px 3px 0",width:"6px",height:"6px",transform:"rotate(-45deg)"}}),h=Object(o.memo)((function(e){var t,a,o,c={x:e.startX,y:e.startY},r={x:e.endX,y:e.endY},i=m(),s=e.capacity,d=e.flow,l=(t=c,a=r,Math.sqrt(Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2))),u=function(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}(c,r),b=function(e,t){return Math.atan((t.y-e.y)/(t.x-e.x))+(t.x<e.x?Math.PI:0)}(c,r),O=[255,0,0],j=[0,255,0].map((function(e,t){return e+(O[t]-e)*d/s})),p={top:x(u.y),left:x(u.x),width:x(l),transform:"translateX(".concat(-l/2,"px)")+(o=b,"rotate(".concat(o,"rad)")),backgroundColor:"rgb(".concat(j.join(","),")")};return Object(n.jsxs)("div",{className:"flow-arc",style:p,children:[Object(n.jsx)("i",{className:i.arrow}),Object(n.jsxs)("span",{className:i.arcLabel,children:[d,"/",s]})]})})),D=Object(O.a)((function(e){return{label:{display:"inline-block",marginTop:e.spacing(1)}}})),k=Object(o.memo)((function(e){var t=D();return Object(n.jsxs)("div",{className:"flow-node",draggable:!0,onClick:function(t){t.preventDefault(),t.stopPropagation(),e.onClick(e.id)},onDrag:function(t){return e.onDrag(e.id,t)},onDragStart:function(e){var t=new Image;t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)},style:{top:x(e.positionY),left:x(e.positionX),backgroundColor:e.bgColor},children:[e.id,Object(n.jsx)("span",{className:t.label,children:e.label})]})})),N=a(82),g=Object(o.memo)((function(e){e.onClick,e.disabled;var t=Object(d.a)(e,["onClick","disabled"]);return Object(n.jsx)(N.a,Object(b.a)(Object(b.a)({variant:"contained",onClick:e.onClick,disabled:!e.onClick},t),{},{children:e.children}))})),A=a(48),C=a.n(A),w=a(57),_=a.n(w),M=a(47),S=a.n(M),R=a(56),T=a.n(R),I=Object(v.a)({canvas:{width:"100%",height:"100vh"}}),X=Object(O.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},grow:{flexGrow:1}}}));function V(e,t){return(t+e*t)/2}function Y(e,t){return(2*e-t)/t}function L(e){return{x:V(e.x,window.innerWidth),y:V(e.y,window.innerHeight)}}function U(e){return{x:Y(e.x,window.innerWidth),y:Y(e.y,window.innerHeight)}}function B(e,t){switch(t.type){case E.ADD_NODE:return Object(b.a)(Object(b.a)({},e),{},{nodes:Object(b.a)(Object(b.a)({},e.nodes),{},Object(u.a)({},t.payload.id,t.payload))});case E.REMOVE_NODE:for(var a=e.nodes,n=t.payload,o=(a[n],Object(d.a)(a,[n].map(l.a))),c=e.arcs,r=t.payload,i=(c[r],Object(d.a)(c,[r].map(l.a))),s=0,O=Object.values(i);s<O.length;s++){delete O[s][t.payload]}return Object(b.a)(Object(b.a)({},e),{},{arcs:i,nodes:o,selectedNode:t.payload!==e.selectedNode?e.selectedNode:void 0,source:t.payload!==e.source?e.source:void 0,sink:t.payload!==e.sink?e.source:void 0});case E.ADD_ARC:return Object(b.a)(Object(b.a)({},e),{},{selectedNode:void 0,arcs:Object(b.a)(Object(b.a)({},e.arcs),{},Object(u.a)({},t.payload.from,Object(b.a)(Object(b.a)({},e.arcs[t.payload.from]),{},Object(u.a)({},t.payload.to,t.payload.capacity))))});case E.MOVE_NODE:return Object(b.a)(Object(b.a)({},e),{},{nodes:Object(b.a)(Object(b.a)({},e.nodes),{},Object(u.a)({},t.payload.id,Object(b.a)(Object(b.a)({},e.nodes[t.payload.id]),{},{position:t.payload.position})))});case E.SET_SOURCE:return Object(b.a)(Object(b.a)({},e),{},{selectedNode:void 0,source:t.payload});case E.SET_SINK:return Object(b.a)(Object(b.a)({},e),{},{selectedNode:void 0,sink:t.payload});case E.SELECT_NODE:return Object(b.a)(Object(b.a)({},e),{},{selectedNode:t.payload!==e.selectedNode?t.payload:void 0});default:return e}}function K(){var e=Object(o.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(o.useState)(10),i=(Object(s.a)(r,1)[0],Object(o.useReducer)(B,{nodes:{},arcs:{},flow:{}})),d=Object(s.a)(i,2),l=d[0],u=d[1],O=l.sink,v=l.source,x=l.selectedNode,m=Object(o.useCallback)((function(e,t){t.preventDefault();var a=U({x:t.clientX,y:t.clientY});u({type:E.MOVE_NODE,payload:{id:e,position:a}})}),[]),D=Object(o.useCallback)((function(e){u({type:E.ADD_NODE,payload:{id:""+Date.now(),position:U({x:e.clientX,y:e.clientY})}})}),[]),N=Object(o.useMemo)((function(){return function(e){var t,a;x&&e!==x?(null===(t=l.arcs[x])||void 0===t?void 0:t[e])||(null===(a=l.arcs[e])||void 0===a?void 0:a[x])||u({type:E.ADD_ARC,payload:{from:x,to:e,capacity:Math.round(8*Math.random())+2}}):u({type:E.SELECT_NODE,payload:e})}}),[x,l.arcs]),A=Object(o.useMemo)((function(){return v&&O?function(){new Promise((function(e){e(function(e,t,a){var n={},o=Object.keys(a).reduce((function(e,t){for(var n=0,o=Object.keys(a[t]);n<o.length;n++){var c=o[n];e[c]||(e[c]={}),e[t]||(e[t]={}),e[t][c]=a[t][c],e[c][t]=-e[t][c]}return e}),{});function c(e,a,r){var i=[].concat(Object(y.a)(a),[e]);if(e===t)return{visited:i,increase:r};for(var d=null,l=function(){var t,o,l=Object(s.a)(b[u],2),O=l[0],j=l[1];if(a.find((function(e){return e===O})))return"continue";var p=null!==(t=null===(o=n[e])||void 0===o?void 0:o[O])&&void 0!==t?t:0,f=j>=0?j-p:p;return f>0&&(d=c(O,i,Math.min(r,f)))?"break":void 0},u=0,b=Object.entries(null!==(O=o[e])&&void 0!==O?O:{});u<b.length;u++){var O,j=l();if("continue"!==j&&"break"===j)break}return d}for(var r=c(e,[],1/0);r;){for(var i,d=null===(i=r)||void 0===i?void 0:i.visited,l=0;l<d.length-1;l++){var u=[d[l],d[l+1]],b=u[0],O=u[1];n[b]||(n[b]={});var j=!!a[b][O],p=r.increase*(j?1:-1),f=j?[b,O]:[O,b],v=Object(s.a)(f,2),x=v[0],E=v[1];n[x][E]?n[x][E]+=p:n[x][E]=p}r=c(e,[],1/0)}return n}(v,O,l.arcs))})).then(c)}:void 0}),[l.arcs,v,O]),w=Object(o.useMemo)((function(){return x?function(){u({type:E.REMOVE_NODE,payload:x})}:void 0}),[x]),M=Object(o.useMemo)((function(){return x&&x!==O?function(){u({type:E.SET_SOURCE,payload:x!==v?x:void 0})}:void 0}),[x,O,v]),R=Object(o.useMemo)((function(){return x&&x!==v?function(){u({type:E.SET_SINK,payload:x!==O?x:void 0})}:void 0}),[x,O,v]),V=I(),Y=X(),K=Object(o.useMemo)((function(){return Object(n.jsx)(j.a,{position:"fixed",children:Object(n.jsxs)(p.a,{className:Y.root,children:[Object(n.jsx)("div",{className:Y.grow}),Object(n.jsxs)(f.a,{variant:"contained",children:[Object(n.jsxs)(g,{onClick:M,startIcon:Object(n.jsx)(S.a,{}),children:[x===v?"Unm":"M","ark as source"]}),Object(n.jsxs)(g,{onClick:R,startIcon:Object(n.jsx)(C.a,{}),children:[x===O?"Unm":"M","ark as sink"]}),Object(n.jsx)(g,{onClick:w,startIcon:Object(n.jsx)(T.a,{}),children:"Delete"})]}),Object(n.jsx)(g,{onClick:A,color:"primary",variant:"contained",startIcon:Object(n.jsx)(_.a,{}),children:"Compute"})]})})}),[M,R,A,w,v,O,x,Y]);return Object(n.jsxs)(n.Fragment,{children:[K,Object(n.jsxs)("div",{onClick:D,className:V.canvas,children:[Object.values(l.nodes).map((function(e){var t=L(e.position);return Object(n.jsx)(k,Object(b.a)(Object(b.a)({onDrag:m,onClick:function(){return N(e.id)}},e),{},{positionX:t.x,positionY:t.y,bgColor:e.id===x?"red":void 0,label:O===e.id?Object(n.jsx)(C.a,{}):v===e.id?Object(n.jsx)(S.a,{}):void 0}),e.id)})),Object.keys(l.arcs).map((function(e){return Object.keys(l.arcs[e]).map((function(t){var o,c=L(l.nodes[e].position),r=L(l.nodes[t].position);return Object(n.jsx)(h,{flow:(null===(o=a[e])||void 0===o?void 0:o[t])||0,capacity:l.arcs[e][t],startX:c.x,startY:c.y,endX:r.x,endY:r.y},e+"-"+t)}))})).flat()]})]})}!function(e){e[e.ADD_NODE=0]="ADD_NODE",e[e.REMOVE_NODE=1]="REMOVE_NODE",e[e.MOVE_NODE=2]="MOVE_NODE",e[e.ADD_ARC=3]="ADD_ARC",e[e.SET_SOURCE=4]="SET_SOURCE",e[e.SET_SINK=5]="SET_SINK",e[e.SELECT_NODE=6]="SELECT_NODE"}(E||(E={}));var P=function(){return Object(n.jsx)(K,{})};document.addEventListener("dragover",(function(e){e.preventDefault()}),!1),i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.93aa01a6.chunk.js.map