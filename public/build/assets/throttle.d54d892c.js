import{u as v}from"./app.7f0e9691.js";var F=typeof v=="object"&&v&&v.Object===Object&&v,M=F,B=M,U=typeof self=="object"&&self&&self.Object===Object&&self,X=B||U||Function("return this")(),w=X,D=w,H=D.Symbol,G=H,x=G,L=Object.prototype,q=L.hasOwnProperty,z=L.toString,m=x?x.toStringTag:void 0;function J(e){var r=q.call(e,m),n=e[m];try{e[m]=void 0;var i=!0}catch{}var o=z.call(e);return i&&(r?e[m]=n:delete e[m]),o}var K=J,Q=Object.prototype,V=Q.toString;function Y(e){return V.call(e)}var Z=Y,E=G,ee=K,re=Z,te="[object Null]",ne="[object Undefined]",I=E?E.toStringTag:void 0;function ie(e){return e==null?e===void 0?ne:te:I&&I in Object(e)?ee(e):re(e)}var ae=ie;function oe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var S=oe;function fe(e){return e!=null&&typeof e=="object"}var ce=fe,ue=ae,se=ce,de="[object Symbol]";function be(e){return typeof e=="symbol"||se(e)&&ue(e)==de}var le=be,me=w,ge=function(){return me.Date.now()},ve=ge,Te=/\s/;function ye(e){for(var r=e.length;r--&&Te.test(e.charAt(r)););return r}var je=ye,$e=je,Se=/^\s+/;function Oe(e){return e&&e.slice(0,$e(e)+1).replace(Se,"")}var pe=Oe,_e=pe,k=S,he=le,R=0/0,xe=/^[-+]0x[0-9a-f]+$/i,Ee=/^0b[01]+$/i,Ie=/^0o[0-7]+$/i,ke=parseInt;function Re(e){if(typeof e=="number")return e;if(he(e))return R;if(k(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=k(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=_e(e);var n=Ee.test(e);return n||Ie.test(e)?ke(e.slice(2),n?2:8):xe.test(e)?R:+e}var Ne=Re,we=S,$=ve,N=Ne,Ge="Expected a function",Le=Math.max,We=Math.min;function Ce(e,r,n){var i,o,s,u,a,c,d=0,O=!1,b=!1,T=!0;if(typeof e!="function")throw new TypeError(Ge);r=N(r)||0,we(n)&&(O=!!n.leading,b="maxWait"in n,s=b?Le(N(n.maxWait)||0,r):s,T="trailing"in n?!!n.trailing:T);function y(t){var f=i,l=o;return i=o=void 0,d=t,u=e.apply(l,f),u}function W(t){return d=t,a=setTimeout(g,r),O?y(t):u}function C(t){var f=t-c,l=t-d,h=r-f;return b?We(h,s-l):h}function p(t){var f=t-c,l=t-d;return c===void 0||f>=r||f<0||b&&l>=s}function g(){var t=$();if(p(t))return _(t);a=setTimeout(g,C(t))}function _(t){return a=void 0,T&&i?y(t):(i=o=void 0,u)}function P(){a!==void 0&&clearTimeout(a),d=0,i=c=o=a=void 0}function A(){return a===void 0?u:_($())}function j(){var t=$(),f=p(t);if(i=arguments,o=this,c=t,f){if(a===void 0)return W(c);if(b)return clearTimeout(a),a=setTimeout(g,r),y(c)}return a===void 0&&(a=setTimeout(g,r)),u}return j.cancel=P,j.flush=A,j}var Pe=Ce,Ae=Pe,Fe=S,Me="Expected a function";function Be(e,r,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(Me);return Fe(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ae(e,r,{leading:i,maxWait:r,trailing:o})}var Ue=Be,De=Ue;export{G as _,le as a,ae as b,w as c,ce as d,M as e,S as i,De as t};
