/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

//     Underscore.js 1.9.2
//     https://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.2";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();
/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */
/*jslint */
/*global require: false, define: false, requirejs: false,
  window: false, clearInterval: false, document: false,
  self: false, setInterval: false */


define('domReady',[],function () {
    'use strict';

    var isTop, testDiv, scrollIntervalId,
        isBrowser = typeof window !== "undefined" && window.document,
        isPageLoaded = !isBrowser,
        doc = isBrowser ? document : null,
        readyCalls = [];

    function runCallbacks(callbacks) {
        var i;
        for (i = 0; i < callbacks.length; i += 1) {
            callbacks[i](doc);
        }
    }

    function callReady() {
        var callbacks = readyCalls;

        if (isPageLoaded) {
            //Call the DOM ready callbacks
            if (callbacks.length) {
                readyCalls = [];
                runCallbacks(callbacks);
            }
        }
    }

    /**
     * Sets the page as loaded.
     */
    function pageLoaded() {
        if (!isPageLoaded) {
            isPageLoaded = true;
            if (scrollIntervalId) {
                clearInterval(scrollIntervalId);
            }

            callReady();
        }
    }

    if (isBrowser) {
        if (document.addEventListener) {
            //Standards. Hooray! Assumption here that if standards based,
            //it knows about DOMContentLoaded.
            document.addEventListener("DOMContentLoaded", pageLoaded, false);
            window.addEventListener("load", pageLoaded, false);
        } else if (window.attachEvent) {
            window.attachEvent("onload", pageLoaded);

            testDiv = document.createElement('div');
            try {
                isTop = window.frameElement === null;
            } catch (e) {}

            //DOMContentLoaded approximation that uses a doScroll, as found by
            //Diego Perini: http://javascript.nwbox.com/IEContentLoaded/,
            //but modified by other contributors, including jdalton
            if (testDiv.doScroll && isTop && window.external) {
                scrollIntervalId = setInterval(function () {
                    try {
                        testDiv.doScroll();
                        pageLoaded();
                    } catch (e) {}
                }, 30);
            }
        }

        //Check if document already complete, and if so, just trigger page load
        //listeners. Latest webkit browsers also use "interactive", and
        //will fire the onDOMContentLoaded before "interactive" but not after
        //entering "interactive" or "complete". More details:
        //http://dev.w3.org/html5/spec/the-end.html#the-end
        //http://stackoverflow.com/questions/3665561/document-readystate-of-interactive-vs-ondomcontentloaded
        //Hmm, this is more complicated on further use, see "firing too early"
        //bug: https://github.com/requirejs/domReady/issues/1
        //so removing the || document.readyState === "interactive" test.
        //There is still a window.onload binding that should get fired if
        //DOMContentLoaded is missed.
        if (document.readyState === "complete") {
            pageLoaded();
        }
    }

    /** START OF PUBLIC API **/

    /**
     * Registers a callback for DOM ready. If DOM is already ready, the
     * callback is called immediately.
     * @param {Function} callback
     */
    function domReady(callback) {
        if (isPageLoaded) {
            callback(doc);
        } else {
            readyCalls.push(callback);
        }
        return domReady;
    }

    domReady.version = '2.0.1';

    /**
     * Loader Plugin API method
     */
    domReady.load = function (name, req, onLoad, config) {
        if (config.isBuild) {
            onLoad(null);
        } else {
            domReady(onLoad);
        }
    };

    /** END OF PUBLIC API **/

    return domReady;
});

/**
 * 예)
 * commonDomain.GLOBAL_TICKET_API_HTTPS
 */
var commonDomain = {

    GLOBAL_CDN_TICKET_HTTPS: DeployPhaseUtils.convertUrl("https://cdnticket.melon.co.kr"),

    GLOBAL_TICKET_HTTPS: DeployPhaseUtils.convertUrl("https://ticket.melon.com"),

    GLOBAL_TICKET_API_HTTPS: DeployPhaseUtils.convertUrl("https://tktapi.melon.com"),

    GLOBAL_MEMBER_MELON_HTTPS: DeployPhaseUtils.convertUrl("https://member.melon.com"),

    GLOBAL_APP_MELON_HTTPS: DeployPhaseUtils.convertUrl("https://m2.melon.com"),

    GLOBAL_CMT_MELON_HTTPS: DeployPhaseUtils.convertUrl("https://cmt.melon.com")





};
define("ticketDomain", function(){});

/**
 * commonCode.systemErrorCode9
 *
 */
var commonCode = {

    //시스템 에러 코드
    systemErrorCode1:-1,
    systemErrorCode2:-2,
    systemErrorCode3:-3,
    systemErrorCode4:-4,
    systemErrorCode5:-5,
    systemErrorCode6:-6,
    systemErrorCode7:-7,
    systemErrorCode8:-8,
    systemErrorCode9:-9,

    CURRENT_PAGE_TYPE:'perf', //sns 공유 이벤트 사용됨(facebook, twitter)
    facebookAppId:"357952407588971",

    RESERVATION_CLASS_TYPE1 : "R",   //일반예매
    RESERVATION_CLASS_TYPE2 : "P",   //선예매
    RESERVATION_CLASS_TYPE3 : "S",   //상시상품

    RESERVATION_CLASS_TYPE_CASTING_CALENDAR : "C",   //캐스팅 캘린더 타입
    RESERVATION_CLASS_TYPE_DEFAULT : "D",   //일반 예매 타입




    POC_CODE_PC : "SC0002",
    SELL_TYPE_CODE1 : "ST0001",   //일반예매
    SELL_TYPE_CODE2 : "ST0002",   //선예매
    SELL_TYPE_CODE3 : "ST0003",    //추첨식예매

    PROD_TYPE_CODE1 : "PT0001",   //일반상품
    PROD_TYPE_CODE2 : "PT0002",   //상시상품

    INTERLOCK_CODE1 : "IL0001",  //클립
    INTERLOCK_CODE2 : "IL0002",  //세종
    INTERLOCK_CODE3 : "IL0003",  //LG

    AUTHE_TYPE_CODE1 : "BG0001",  //팬클럽
    AUTHE_TYPE_CODE2 : "BG0002",  //기구매자
    AUTHE_TYPE_CODE3 : "BG0003",  //친밀도
    AUTHE_TYPE_CODE4 : "BG0004",  //맴버십
    AUTHE_TYPE_CODE5 : "BG0005",  //예매권
    AUTHE_TYPE_CODE6 : "BG0006",  //일반
    AUTHE_TYPE_CODE7 : "BG0007",  //멜론유료회원
    AUTHE_TYPE_CODE8 : "BG0008",  //선예매코드
    AUTHE_TYPE_CODE9 : "BG0009",   //멜론회원등급


    GRADE_CODE1 : "GR0001", //전체관람가
    GRADE_CODE2 : "GR0002", //12개월 이상
    GRADE_CODE3 : "GR0003", //20개월 이상
    GRADE_CODE4 : "GR0004", //24개월 이상
    GRADE_CODE5 : "GR0005", //36개월 이상
    GRADE_CODE6 : "GR0006", //48개월 이상
    GRADE_CODE7 : "GR0007", //만 4세 이상
    GRADE_CODE8 : "GR0008", //만 5세 이상
    GRADE_CODE9 : "GR0009", //만 6세 이상
    GRADE_CODE10 : "GR0010", //미취학아동입장불가
    GRADE_CODE11 : "GR0011", //만 7세 이상
    GRADE_CODE12 : "GR0012", //만 8세 이상
    GRADE_CODE13 : "GR0013", //만 9세 이상
    GRADE_CODE14 : "GR0014", //만 10세 이상
    GRADE_CODE15 : "GR0015", //만 11세 이상
    GRADE_CODE16 : "GR0016", //만 12세 이상
    GRADE_CODE17 : "GR0017", //만 13세 이상
    GRADE_CODE18 : "GR0018", //만 14세 이상
    GRADE_CODE19 : "GR0019", //만 15세 이상
    GRADE_CODE20 : "GR0020", //만 16세 이상
    GRADE_CODE21 : "GR0021", //만 17세 이상
    GRADE_CODE22 : "GR0022", //만 18세 이상
    GRADE_CODE23 : "GR0023", //만 19세 이상



    EXTERNAL_SUCCESS :"000000",     //멜론 외부연동 성공 값
    EXTERNAL_SUCCESS1 :"0000",
    EXTERNAL_MELON_MEMBER_SUCCESS : "1",


    CMT_CHNL_EVALUE : 916, /** 채널코드 - 기대평 */
    CMT_CHNL_REVIEW : 917, /** 채널코드 - 공연후기 */
    CMT_CHNL_QNA : 918, /** 채널코드 - Q & A */
    CMT_CHNL_EVENT : 919, /** 채널코드 - 멜론티켓 이벤트 */
    CMT_CHNL_WISH : 920, /** 채널코드 - 위시콘서트 */

    STATE_FLG_SS0100:"SS0100",  //판매준비
    STATE_FLG_SS0200:"SS0200",  //판매가능
    STATE_FLG_SS0300:"SS0300",  //매진
    STATE_FLG_SS0400:"SS0400",  //공연취소
    STATE_FLG_SS0500:"SS0500",  //판매중지
    STATE_FLG_SS0600:"SS0600",  //공연완료
    STATE_FLG_SS0700:"SS0700"   //판매불가







};
define("ticketCode", function(){});

/**
 *
 * commonUtil.bannerLanding()
 */
var commonUtil = {

    /**
     * url 별 첫번째 Path 조회
     * 값이 있으면 해당 path 리턴
     * 값이 없으면 "" 값 리턴
     * @returns {string}
     */
    urlFindFirst : function( ) {
        var result = "";

        var global_common_requestURL = $("#global_common_requestURL").val();

        if ( global_common_requestURL != null && global_common_requestURL != "" ) {
            var urlAarray = global_common_requestURL.split('/');

            if(_.isArray(urlAarray) && urlAarray.length > 0 ){
                result = _.first(_.filter(urlAarray,function(val){return val != "";}));
            }
        }

        return result;
    },

    /**
     * url 별 마지막 Path 조회
     * 값이 있으면 해당 path 리턴
     * 값이 없으면 "" 값 리턴
     * @returns {string}
     */
    urlFindLast : function( urlData ) {
        var result = "";

        var global_common_requestURL = (urlData != null) ? urlData : $("#global_common_requestURL").val();

        if ( global_common_requestURL != null && global_common_requestURL != "" ) {
            var urlAarray = global_common_requestURL.split('/');

            if(_.isArray(urlAarray) && urlAarray.length > 0 ){
                result = _.last(_.filter(urlAarray,function(val){return val != "";}));
            }
        }

        return result;
    },
    /**
     * obj length
     * 성공 : object length or 0
     * 실패 : 0
     * @param obj
     * @returns {*}
     * @private
     */
    getObjectDataLength : function( obj, pathArray ) {
        var result = 0;

        try {

            var objPathChk = _.property(pathArray)(obj);

            if ( _.isObject(objPathChk) ) {
                result = _.size(objPathChk);
            }
        } catch (e) {
            result = 0;
        }

        return result;
    },
    /**
     * object chk
     * true : object
     * false : not object
     * @param obj
     * @param pathArray
     * @returns {boolean}
     */
    isObjectCheck : function( obj, pathArray ) {
        var result = false;

        try {

            var objPathChk = _.property(pathArray)(obj);

            if ( _.isObject(objPathChk) ) {
                result = true;
            }
        } catch (e) {
            result = false;
        }

        return result;
    },
    /**
     * 오브젝트 값이 있으면 해당 값 리턴
     * 오브젝트 값이 없으면 "" 리턴
     * @param obj
     * @param pathArray
     * inputObjectValueCheck(result,['data','authYn']);
     * @returns {*}
     */
    inputObjectValueCheck : function( obj, pathArray ) {
        var result = "";

        try {
            if(obj != null) {
                result = _.property(pathArray)(obj) != null ? _.property(pathArray)(obj) : "";
            }
        } catch (e) {
            result = "";
        }

        return result;
    },
    /**
     * 오브젝트 값이 있으면 해당 값 리턴
     * 오브젝트 값이 없으면 배열([]) 리턴
     * @param obj
     * @param pathArray
     * @returns {*}
     */
    inputObjectArrayCheck : function( objArray, pathArray ) {
        var result = [];

        try {
            if(objArray != null){
                result =  _.property(pathArray)(objArray) != null ? _.property(pathArray)(objArray) : [];
            }
        } catch (e) {
            result = [];
        }

        return result;
    },

    /**
     * 배너 랜딩 함수
     * commonUtil.bannerLanding(type, value);
     * @param type
     * @param value
     */
    bannerLanding:function (type, value) {
        var ticketDomainUrl = commonDomain.GLOBAL_TICKET_HTTPS;

        switch ( type ) {

            case "TD":
                location.href = ticketDomainUrl + "/performance/index.htm?prodId="+value;
                break;
            case "EV":
                location.href = ticketDomainUrl + "/event/detail.htm?mid=1&eventId="+value;
                break;
            case "U":
                var blakExpression = /ticket.melon.com/;
                var blankTypeExists = blakExpression.test(value);

                if(!blankTypeExists){
                    var newWindow = window.open("about:blank");
                    newWindow.location.href = value;
                    break;
                }
                location.href = value;
                break;
            case "BR":
                location.href = ticketDomainUrl + "/performance/bridge.htm?brgId="+value;
                break;
            case "PR":
                location.href = ticketDomainUrl + "/plan/index.htm?planId="+value;
                break;
            case "MV":
                photoViewer("B", 0, 0, value);
                break;
            case "AL":
                melon.play.playAlbum('0',value);
                break;
            case "AR":
                location.href = ticketDomainUrl + "/artist/index.htm?artistId="+value;
                break;
            case "TR":
                melon.play.playSong('0',value);
                break;
        }
    },
    /**
     * 토스트 출력
     * @param pBox //문구 정보
     * @param type //1,2 타입에 따라 css 변환
     */
    toast: function(pBox, type) {
        var _this = this;

        if (null != pBox && !_this._floatToast) {

            if ('string' === typeof pBox) {
                var _dl = [];

                if(type === 1) {
                    _dl.push('<div class="layerPop alertPop" id="alert_pop01" style="width:400px;">');
                } else {
                    _dl.push('<div class="layerPop alertPop2" id="alert_pop01" style="width:400px;">');
                }
                _dl.push('<div class="inner">');
                _dl.push('<h3 class="screen_out">알림</h3>');
                _dl.push('<div class="con">');
                _dl.push('<p class="txt">'+pBox+'</p>');
                _dl.push('</div>');
                _dl.push('</div>');
                _dl.push('</div>');

                pBox = $(_dl.join(''));
            }

            pBox.css({'display':'block', 'width': '400px',  'left': '-40px', 'top': '3px'});
            pBox.appendTo('body');

            pBox.fadeIn(200, function(e){
                _this._floatToast = true;

                setTimeout(function() {
                    pBox.fadeOut(300, function(){
                        pBox.remove();

                        _this._floatToast = false;
                    });
                }, 500);
            });
        }
    },
    /**
     * 페이지 로딩시 IE 체크 함수
     */
    ieBrowserCheck : function(){
        try{
            var ua = navigator.userAgent;

            if (ua.indexOf("MSIE 6") > 0 || ua.indexOf("MSIE 7") > 0 || ua.indexOf("MSIE 8") > 0) {
                alert("멜론티켓 예매서비스는 익스플로러 9버전 이상에서 원활히 사용하실 수 있습니다. 익스플로러를 업데이트 하거나 크롬 브라우저를 사용해주시기 바랍니다.");
            }
        } catch(e) {}
    },
    /**
     * 파리미터 값 가져오기
     * @param variable
     * @returns {string}
     */
    getQueryVariable : function(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }

        return '';
    },
    /**
     * P : 공연상세포토, H : 공연장상세포토, A : 아티스트포토, B : 배너용 영상
     * @param type
     * @param contentId
     * @param index
     * @param medId
     */
    photoViewer : function(type, contentId, index, medId) {
        if ( medId != undefined && medId != null ) {
            window.open("/common/popup/popPhotoViewer.htm?type="+type+"&contentId="+contentId+"&index="+index+"&medId="+medId, "photoViewer", "width=795px,height=752px");
        } else {
            window.open("/common/popup/popPhotoViewer.htm?type="+type+"&contentId="+contentId+"&index="+index, "photoViewer", "width=795px,height=752px");
        }
    },
    melonArtistVideoViewer : function( mvId ) {

        if(mvId != undefined) {
            window.open(DeployPhaseUtils.convertUrl("https://vod.melon.com/video/detail2.htm?mvId="+mvId+"&menuId=26020105"));
        }
    },
    /**
     * 파라미터 값 가져오기
     * @param variable
     * @returns {string}
     */
    getQueryVariable : function(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }

        return '';
    },
    /**
     * 윈도우 팝업
     *
     * @param	pUrl		- 경로
     * @param	pWidth 		- 넓이값
     * @param	pHeight		- 높이값
     * @param	pOptions	- 옵션값
     */
    openWin : function(pUrl, pWidth, pHeight, pOptions){

        if(!pOptions) {
            pOptions = "resizable=no toolbar=no menubar=no location=no scrollbars=no status=yes";
        }
        var _opt = "width=" + pWidth + " height=" + pHeight + " " + pOptions;

        window.open( pUrl, name, _opt );
    },
    /**
     * 윈도우 팝업 with 이름
     *
     * @param	pUrl		- 경로
     * @param	pWidth 		- 넓이값
     * @param	pHeight		- 높이값
     * @param	pOptions	- 옵션값
     * @param	pName 	    - 팝업 이름
     */
    openWinEx : function(pUrl, pWidth, pHeight, pName, pOptions){

        if(!pOptions) {
            pOptions = "resizable=no toolbar=no menubar=no location=no scrollbars=no status=yes";
        }
        var _opt = "width=" + pWidth + " height=" + pHeight + " " + pOptions;

        window.open( pUrl, pName, _opt );
    }







};
define("ticketUtil", function(){});

/**
 * commonStringUtil.convertStringToDate
 */
var commonStringUtil = {

    /**
     * 스트링 문자열 일자표기 데이트형으로 변환
     *
     * @param pDateString - 스트링 Date (Format:'yyyyMMddhhmmss', 'yyyyMMddhhmm')
     * @returns Date - Date 타입
     */
    convertStringToDate: function(pDateString) {
        var _this = this, _date = null, _regexp;

        if (commonStringUtil.isEmpty(pDateString)) {
            return null;
        }

        // 자릿수 채우기
        if (12 < pDateString.length && 14 > pDateString.length) {
            do {
                pDateString += '0';
            } while (14 > pDateString.length);
        }

        if(14 === pDateString.length) {
            _regexp = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
        }
        else if (12 === pDateString.length) {
            _regexp = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/;
        }

        var _tmpArr = pDateString.match(_regexp);

        if (6 > _tmpArr.length) {
            return null;
        }

        _date = new Date();
        _date.setFullYear(_tmpArr[1]);
        _date.setMonth(Number(_tmpArr[2]) -1);
        _date.setDate(_tmpArr[3]);
        _date.setHours(_tmpArr[4]);
        _date.setMinutes(_tmpArr[5]);

        // 초단위 추가설정
        if (7 === _tmpArr.length) {
            _date.setSeconds(_tmpArr[6]);
        }

        return _date;
    },

    /**
     * 해당 날짜의 요일 구하기
     *
     * @param pDateString		스트링 Date
     */
    getWeekByDate : function (pDateString) {
        pDateString = pDateString.replace(/[^0-9]/gi,'');
        if(pDateString.length < 8 ){
            return '';
        }

        var _year  		= pDateString.substr(0,4);
        var _mon 		= pDateString.substr(4,2);
        var _day   		= pDateString.substr(6,2);
        var _weekstr 	= ['일','월','화','수','목','금','토'];
        var _date		= new Date(_year, _mon-1, _day);
        var _wn	= '';

        _wn = _weekstr[_date.getDay()];

        return	_wn;
    },

    /**
     * 스트링 문자열 일자표기 경과 시간 표기로 변환
     *
     * @param pDateString - 스트링 Date (Format:'yyyyMMddhhmmss')
     * @returns String - 변환된 경과시간 표기
     *
     * 1시간 미만 : N분 전
     * 24시간 미만 : N시간 전
     * 1일 ~ 7일 : N일 전
     * 7일 이상 : YY년 MM월 DD일
     *
     */
    convertDateReadable: function(pDataString) {
        var _this = this, _convDate, _currDate, _result = [];
        _convDate = commonStringUtil.convertStringToDate(pDataString);

        if (undefined !== _convDate) {
            var _currDate = new Date(), _subDate = _currDate - _convDate;

            // 1시간 미만
            if (_subDate < 1000*60*60) {
                _result.push(Math.floor(_subDate / 1000 / 60) +'분 전');
            }

            // 24시간 미만
            else if (_subDate < 1000*60*60*60) {
                _result.push(Math.floor(_subDate / 1000 / 60 / 60) +'시간 전');
            }

            // 1 ~ 7일 미만
            else if (_subDate > 1000*60*60*60 && _subDate < 1000*60*60*60*7) {
                _result.push(Math.floor(_subDate / 1000 / 60 / 60 / 24) +'일 전 ');
            }

            // 7일 이상
            else {
                _result.push(_convDate.getFullYear().toString().replace(/^\d{2}/, '') + '년');
                _result.push(_convDate.getMonth() + 1 + '월');
                _result.push(_convDate.getDate() + '일');
            }
        }

        return _result.join(' ');
    },

    /**
     * 현재일이 해당 일자에 포함되어 있는지 확인
     *
     * @param pStartDate - 시작일
     * @param pEndDate - 종료일
     */
    validBetweenDate: function(pStartDate, pEndDate) {
        var _this = this, _isValid = false, _now = new Date();

        return (commonStringUtil.convertStringToDate(pStartDate) <= _now) && (commonStringUtil.convertStringToDate(pEndDate) >= _now);
    },

    /**
     * 통화 금액 콤마구분
     */
    numberFormat: function(pString) {
        pString = '' + pString;
        return pString.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },

    /**
     * 이메일 포맷 여부 확인
     */
    isEmail: function (pString) {
        return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(pString);
    },

    /**
     * 문자열 빈값 체크
     *
     *  @param pString - 체크할 문자
     *  @returns Boolean - 공백 여부
     */
    isEmpty: function(pString) {

        if (undefined === pString || null === pString) {
            return true;
        }
        else {
            if ('' === $.trim(pString)) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    /**
     * 문자열 빈값 체크
     *
     *	@param pString - 체크할 문자
     *  @returns Boolean - 공백 여부
     */
    isNotEmpty: function(pString) {
        return !commonStringUtil.isEmpty(pString);
    }
};
define("ticketStringUtil", function(){});

/**!

 @license
 handlebars v4.5.3

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define('Handlebars',[],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=r();return a.compile=function(b,c){return k.compile(b,c,a)},a.precompile=function(b,c){return k.precompile(b,c,a)},a.AST=i["default"],a.Compiler=k.Compiler,a.JavaScriptCompiler=m["default"],a.Parser=j.parser,a.parse=j.parse,a.parseWithoutProcessing=j.parseWithoutProcessing,a}var e=c(1)["default"];b.__esModule=!0;var f=c(2),g=e(f),h=c(40),i=e(h),j=c(41),k=c(46),l=c(49),m=e(l),n=c(44),o=e(n),p=c(39),q=e(p),r=g["default"].create,s=d();s.create=d,q["default"](s),s.Visitor=o["default"],s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(3)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(4),h=e(g),i=c(33),j=f(i),k=c(6),l=f(k),m=c(5),n=e(m),o=c(34),p=e(o),q=c(39),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(1)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(5),g=c(6),h=e(g),i=c(10),j=c(30),k=c(32),l=e(k),m="4.5.3";b.VERSION=m;var n=8;b.COMPILER_REVISION=n;var o=7;b.LAST_COMPATIBLE_COMPILER_REVISION=o;var p={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};b.REVISION_CHANGES=p;var q="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===q){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===q)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===q){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var r=l["default"].log;b.log=r,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0,i=void 0,j=void 0;c&&(g=c.start.line,h=c.end.line,i=c.start.column,j=c.end.column,a+=" - "+g+":"+i);for(var k=Error.prototype.constructor.call(this,a),l=0;l<f.length;l++)this[f[l]]=k[f[l]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,this.endLineNumber=h,e?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:j,enumerable:!0})):(this.column=i,this.endColumn=j))}catch(m){}}var e=c(7)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(8),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){h["default"](a),j["default"](a),l["default"](a),n["default"](a),p["default"](a),r["default"](a),t["default"](a)}function e(a,b,c){a.helpers[b]&&(a.hooks[b]=a.helpers[b],c||delete a.helpers[b])}var f=c(1)["default"];b.__esModule=!0,b.registerDefaultHelpers=d,b.moveHelperToHooks=e;var g=c(11),h=f(g),i=c(12),j=f(i),k=c(25),l=f(k),m=c(26),n=f(m),o=c(27),p=f(o),q=c(28),r=f(q),s=c(29),t=f(s)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){(function(d){"use strict";var e=c(13)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(5),h=c(6),i=f(h);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,d){l&&(l.key=b,l.index=c,l.first=0===c,l.last=!!d,m&&(l.contextPath=m+b)),k+=f(a[b],{data:l,blockParams:g.blockParams([a[b],b],[m+b,null])})}if(!b)throw new i["default"]("Must pass iterator to #each");var f=b.fn,h=b.inverse,j=0,k="",l=void 0,m=void 0;if(b.data&&b.ids&&(m=g.appendContextPath(b.data.contextPath,b.ids[0])+"."),g.isFunction(a)&&(a=a.call(this)),b.data&&(l=g.createFrame(b.data)),a&&"object"==typeof a)if(g.isArray(a))for(var n=a.length;j<n;j++)j in a&&c(j,j,j===a.length-1);else if(d.Symbol&&a[d.Symbol.iterator]){for(var o=[],p=a[d.Symbol.iterator](),q=p.next();!q.done;q=p.next())o.push(q.value);a=o;for(var n=a.length;j<n;j++)c(j,j,j===a.length-1)}else!function(){var b=void 0;e(a).forEach(function(a){void 0!==b&&c(b,j-1),b=a,j++}),void 0!==b&&c(b,j-1,!0)}();return 0===j&&(k=h(this)),k})},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b,c){a.exports={"default":c(14),__esModule:!0}},function(a,b,c){c(15),a.exports=c(21).Object.keys},function(a,b,c){var d=c(16);c(18)("keys",function(a){return function(b){return a(d(b))}})},function(a,b,c){var d=c(17);a.exports=function(a){return Object(d(a))}},function(a,b){a.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}},function(a,b,c){var d=c(19),e=c(21),f=c(24);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(20),e=c(21),f=c(22),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(23);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(6),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("if",function(a,b){if(2!=arguments.length)throw new g["default"]("#if requires exactly one argument");return e.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||e.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){if(2!=arguments.length)throw new g["default"]("#unless requires exactly one argument");return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0;var c=/^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/;b.dangerousPropertyRegex=c,b["default"]=function(a){a.registerHelper("lookup",function(a,b){if(!a)return a;if(!c.test(String(b))||Object.prototype.propertyIsEnumerable.call(a,b))return a[b]})}},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("with",function(a,b){if(2!=arguments.length)throw new g["default"]("#with requires exactly one argument");e.isFunction(a)&&(a=a.call(this));var c=b.fn;if(e.isEmpty(a))return b.inverse(this);var d=b.data;return b.data&&b.ids&&(d=e.createFrame(b.data),d.contextPath=e.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:d,blockParams:e.blockParams([a],[d&&d.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(1)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(31),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=s.COMPILER_REVISION;if(!(b>=s.LAST_COMPATIBLE_COMPILER_REVISION&&b<=s.COMPILER_REVISION)){if(b<s.LAST_COMPATIBLE_COMPILER_REVISION){var d=s.REVISION_CHANGES[c],e=s.REVISION_CHANGES[b];throw new r["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new r["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=p.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=p.extend({},e,{hooks:this.hooks}),g=b.VM.invokePartial.call(this,c,d,f);if(null==g&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),g=e.partials[e.name](d,f)),null!=g){if(e.indent){for(var h=g.split("\n"),i=0,j=h.length;i<j&&(h[i]||i+1!==j);i++)h[i]=e.indent+h[i];g=h.join("\n")}return g}throw new r["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(g,b,g.helpers,g.partials,f,i,h)}var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],f=e.data;d._setup(e),!e.partial&&a.useData&&(f=j(b,f));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=e.depths?b!=e.depths[0]?[b].concat(e.depths):e.depths:[b]),(c=k(a.main,c,g,e.depths||[],f,i))(b,e)}if(!b)throw new r["default"]("No environment passed to template");if(!a||!a.main)throw new r["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e=a.compiler&&7===a.compiler[0],g={strict:function(a,b,c){if(!(a&&b in a))throw new r["default"]('"'+b+'" not defined in '+a,{loc:c});return a[b]},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:p.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},nullContext:l({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){if(c.partial)g.helpers=c.helpers,g.partials=c.partials,g.decorators=c.decorators,g.hooks=c.hooks;else{g.helpers=p.extend({},b.helpers,c.helpers),a.usePartial&&(g.partials=p.extend({},b.partials,c.partials)),(a.usePartial||a.useDecorators)&&(g.decorators=p.extend({},b.decorators,c.decorators)),g.hooks={};var d=c.allowCallsToHelperMissing||e;t.moveHelperToHooks(g,"helperMissing",d),t.moveHelperToHooks(g,"blockHelperMissing",d)}},d._child=function(b,c,d,e){if(a.useBlockParams&&!d)throw new r["default"]("must pass block params");if(a.useDepths&&!e)throw new r["default"]("must pass parent depths");return f(g,b,a[b],c,0,d,e)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=s.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=s.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=p.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new r["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?s.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),p.extend(b,g)}return b}var l=c(35)["default"],m=c(3)["default"],n=c(1)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var o=c(5),p=m(o),q=c(6),r=n(q),s=c(4),t=c(10)},function(a,b,c){a.exports={"default":c(36),__esModule:!0}},function(a,b,c){c(37),a.exports=c(21).Object.seal},function(a,b,c){var d=c(38);c(18)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b.__esModule=!0;var c={helpers:{helperExpression:function(a){return"SubExpression"===a.type||("MustacheStatement"===a.type||"BlockStatement"===a.type)&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return 1===a.parts.length&&!c.helpers.scopedId(a)&&!a.depth}}};b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if("Program"===a.type)return a;i["default"].yy=o,o.locInfo=function(a){return new o.SourceLocation(b&&b.srcName,a)};var c=i["default"].parse(a);return c}function e(a,b){var c=d(a,b),e=new k["default"](b);return e.accept(c)}var f=c(1)["default"],g=c(3)["default"];b.__esModule=!0,b.parseWithoutProcessing=d,b.parse=e;var h=c(42),i=f(h),j=c(43),k=f(j),l=c(45),m=g(l),n=c(5);b.parser=i["default"];var o={};n.extend(o,m)},function(a,b){"use strict";b.__esModule=!0;var c=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return f[h-1];case 2:this.$=d.prepareProgram(f[h]);break;case 3:this.$=f[h];break;case 4:this.$=f[h];break;case 5:this.$=f[h];break;case 6:this.$=f[h];break;case 7:this.$=f[h];break;case 8:this.$=f[h];break;case 9:this.$={type:"CommentStatement",value:d.stripComment(f[h]),strip:d.stripFlags(f[h],f[h]),loc:d.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:f[h],value:f[h],loc:d.locInfo(this._$)};break;case 11:this.$=d.prepareRawBlock(f[h-2],f[h-1],f[h],this._$);break;case 12:this.$={path:f[h-3],params:f[h-2],hash:f[h-1]};break;case 13:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!1,this._$);break;case 14:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!0,this._$);break;case 15:this.$={open:f[h-5],path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 16:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 17:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 18:this.$={strip:d.stripFlags(f[h-1],f[h-1]),program:f[h]};break;case 19:var i=d.prepareBlock(f[h-2],f[h-1],f[h],f[h],!1,this._$),j=d.prepareProgram([i],f[h-1].loc);j.chained=!0,this.$={strip:f[h-2].strip,program:j,chain:!0};break;case 20:this.$=f[h];break;case 21:this.$={path:f[h-1],strip:d.stripFlags(f[h-2],f[h])};break;case 22:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 23:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 24:this.$={type:"PartialStatement",name:f[h-3],params:f[h-2],hash:f[h-1],indent:"",strip:d.stripFlags(f[h-4],f[h]),loc:d.locInfo(this._$)};break;case 25:this.$=d.preparePartialBlock(f[h-2],f[h-1],f[h],this._$);break;case 26:this.$={path:f[h-3],params:f[h-2],hash:f[h-1],strip:d.stripFlags(f[h-4],f[h])};break;case 27:this.$=f[h];break;case 28:this.$=f[h];break;case 29:this.$={type:"SubExpression",path:f[h-3],params:f[h-2],hash:f[h-1],loc:d.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:f[h],loc:d.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:d.id(f[h-2]),value:f[h],loc:d.locInfo(this._$)};break;case 32:this.$=d.id(f[h-1]);break;case 33:this.$=f[h];break;case 34:this.$=f[h];break;case 35:this.$={type:"StringLiteral",value:f[h],original:f[h],loc:d.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(f[h]),original:Number(f[h]),loc:d.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===f[h],original:"true"===f[h],loc:d.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:d.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:d.locInfo(this._$)};break;case 40:this.$=f[h];break;case 41:this.$=f[h];break;case 42:this.$=d.preparePath(!0,f[h],this._$);break;case 43:this.$=d.preparePath(!1,f[h],this._$);break;case 44:f[h-2].push({part:d.id(f[h]),original:f[h],separator:f[h-1]}),this.$=f[h-2];break;case 45:this.$=[{part:d.id(f[h]),original:f[h]}];break;case 46:this.$=[];break;case 47:f[h-1].push(f[h]);break;case 48:this.$=[];break;case 49:f[h-1].push(f[h]);break;case 50:this.$=[];break;case 51:f[h-1].push(f[h]);break;case 58:this.$=[];break;case 59:f[h-1].push(f[h]);break;case 64:this.$=[];break;case 65:f[h-1].push(f[h]);break;case 70:this.$=[];break;case 71:f[h-1].push(f[h]);break;case 78:this.$=[];break;case 79:f[h-1].push(f[h]);break;case 82:this.$=[];break;case 83:f[h-1].push(f[h]);break;case 86:this.$=[];break;case 87:f[h-1].push(f[h]);break;case 90:this.$=[];break;case 91:f[h-1].push(f[h]);break;case 94:this.$=[];break;case 95:f[h-1].push(f[h]);break;case 98:this.$=[f[h]];break;case 99:f[h-1].push(f[h]);break;case 100:this.$=[f[h]];break;case 101:f[h-1].push(f[h])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],
81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(a,b){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(null!==n&&"undefined"!=typeof n||(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substring(a,b.yyleng-c+a)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(e(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(b.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return b.yytext=e(1,2).replace(/\\"/g,'"'),80;case 32:return b.yytext=e(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return b.yytext=b.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=a}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"ContentStatement"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"ContentStatement"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"ContentStatement"===d.type&&(c||!d.rightStripped)){var e=d.value;d.value=d.value.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.value!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"ContentStatement"===d.type&&(c||!d.leftStripped)){var e=d.value;return d.value=d.value.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.value!==e,d.leftStripped}}var i=c(1)["default"];b.__esModule=!0;var j=c(44),k=i(j);d.prototype=new k["default"],d.prototype.Program=function(a){var b=!this.options.ignoreStandalone,c=!this.isRootSeen;this.isRootSeen=!0;for(var d=a.body,i=0,j=d.length;i<j;i++){var k=d[i],l=this.accept(k);if(l){var m=e(d,i,c),n=f(d,i,c),o=l.openStandalone&&m,p=l.closeStandalone&&n,q=l.inlineStandalone&&m&&n;l.close&&g(d,i,!0),l.open&&h(d,i,!0),b&&q&&(g(d,i),h(d,i)&&"PartialStatement"===k.type&&(k.indent=/([ \t]+$)/.exec(d[i-1].original)[1])),b&&o&&(g((k.program||k.inverse).body),h(d,i)),b&&p&&(g(d,i),h((k.inverse||k.program).body))}}return a},d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var b=a.program||a.inverse,c=a.program&&a.inverse,d=c,i=c;if(c&&c.chained)for(d=c.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var j={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:f(b.body),closeStandalone:e((d||b).body)};if(a.openStrip.close&&g(b.body,null,!0),c){var k=a.inverseStrip;k.open&&h(b.body,null,!0),k.close&&g(d.body,null,!0),a.closeStrip.open&&h(i.body,null,!0),!this.options.ignoreStandalone&&e(b.body)&&f(d.body)&&(h(b.body),g(d.body))}else a.closeStrip.open&&h(b.body,null,!0);return j},d.prototype.Decorator=d.prototype.MustacheStatement=function(a){return a.strip},d.prototype.PartialStatement=d.prototype.CommentStatement=function(a){var b=a.strip||{};return{inlineStandalone:!0,open:b.open,close:b.close}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(){this.parents=[]}function e(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash")}function f(a){e.call(this,a),this.acceptKey(a,"program"),this.acceptKey(a,"inverse")}function g(a){this.acceptRequired(a,"name"),this.acceptArray(a.params),this.acceptKey(a,"hash")}var h=c(1)["default"];b.__esModule=!0;var i=c(6),j=h(i);d.prototype={constructor:d,mutating:!1,acceptKey:function(a,b){var c=this.accept(a[b]);if(this.mutating){if(c&&!d.prototype[c.type])throw new j["default"]('Unexpected node type "'+c.type+'" found when accepting '+b+" on "+a.type);a[b]=c}},acceptRequired:function(a,b){if(this.acceptKey(a,b),!a[b])throw new j["default"](a.type+" requires "+b)},acceptArray:function(a){for(var b=0,c=a.length;b<c;b++)this.acceptKey(a,b),a[b]||(a.splice(b,1),b--,c--)},accept:function(a){if(a){if(!this[a.type])throw new j["default"]("Unknown type: "+a.type,a);this.current&&this.parents.unshift(this.current),this.current=a;var b=this[a.type](a);return this.current=this.parents.shift(),!this.mutating||b?b:b!==!1?a:void 0}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:e,Decorator:e,BlockStatement:f,DecoratorBlock:f,PartialStatement:g,PartialBlockStatement:function(a){g.call(this,a),this.acceptKey(a,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:e,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if(b=b.path?b.path.original:b,a.path.original!==b){var c={loc:a.path.loc};throw new q["default"](a.path.original+" doesn't match "+b,c)}}function e(a,b){this.source=a,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function f(a){return/^\[.*\]$/.test(a)?a.substring(1,a.length-1):a}function g(a,b){return{open:"~"===a.charAt(2),close:"~"===b.charAt(b.length-3)}}function h(a){return a.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function i(a,b,c){c=this.locInfo(c);for(var d=a?"@":"",e=[],f=0,g=0,h=b.length;g<h;g++){var i=b[g].part,j=b[g].original!==i;if(d+=(b[g].separator||"")+i,j||".."!==i&&"."!==i&&"this"!==i)e.push(i);else{if(e.length>0)throw new q["default"]("Invalid path: "+d,{loc:c});".."===i&&f++}}return{type:"PathExpression",data:a,depth:f,parts:e,original:d,loc:c}}function j(a,b,c,d,e,f){var g=d.charAt(3)||d.charAt(2),h="{"!==g&&"&"!==g,i=/\*/.test(d);return{type:i?"Decorator":"MustacheStatement",path:a,params:b,hash:c,escaped:h,strip:e,loc:this.locInfo(f)}}function k(a,b,c,e){d(a,c),e=this.locInfo(e);var f={type:"Program",body:b,strip:{},loc:e};return{type:"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:f,openStrip:{},inverseStrip:{},closeStrip:{},loc:e}}function l(a,b,c,e,f,g){e&&e.path&&d(a,e);var h=/\*/.test(a.open);b.blockParams=a.blockParams;var i=void 0,j=void 0;if(c){if(h)throw new q["default"]("Unexpected inverse block on decorator",c);c.chain&&(c.program.body[0].closeStrip=e.strip),j=c.strip,i=c.program}return f&&(f=i,i=b,b=f),{type:h?"DecoratorBlock":"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:b,inverse:i,openStrip:a.strip,inverseStrip:j,closeStrip:e&&e.strip,loc:this.locInfo(g)}}function m(a,b){if(!b&&a.length){var c=a[0].loc,d=a[a.length-1].loc;c&&d&&(b={source:c.source,start:{line:c.start.line,column:c.start.column},end:{line:d.end.line,column:d.end.column}})}return{type:"Program",body:a,strip:{},loc:b}}function n(a,b,c,e){return d(a,c),{type:"PartialBlockStatement",name:a.path,params:a.params,hash:a.hash,program:b,openStrip:a.strip,closeStrip:c&&c.strip,loc:this.locInfo(e)}}var o=c(1)["default"];b.__esModule=!0,b.SourceLocation=e,b.id=f,b.stripFlags=g,b.stripComment=h,b.preparePath=i,b.prepareMustache=j,b.prepareRawBlock=k,b.prepareBlock=l,b.prepareProgram=m,b.preparePartialBlock=n;var p=c(6),q=o(p)},function(a,b,c){"use strict";function d(){}function e(a,b,c){if(null==a||"string"!=typeof a&&"Program"!==a.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a,b),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function f(a,b,c){function d(){var d=c.parse(a,b),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}function e(a,b){return f||(f=d()),f.call(this,a,b)}if(void 0===b&&(b={}),null==a||"string"!=typeof a&&"Program"!==a.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=m.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var f=void 0;return e._setup=function(a){return f||(f=d()),f._setup(a)},e._child=function(a,b,c,e){return f||(f=d()),f._child(a,b,c,e)},e}function g(a,b){if(a===b)return!0;if(m.isArray(a)&&m.isArray(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!g(a[c],b[c]))return!1;return!0}}function h(a){if(!a.path.parts){var b=a.path;a.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var i=c(47)["default"],j=c(1)["default"];b.__esModule=!0,b.Compiler=d,b.precompile=e,b.compile=f;var k=c(6),l=j(k),m=c(5),n=c(40),o=j(n),p=[].slice;d.prototype={compiler:d,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!g(d.args,e.args))return!1}b=this.children.length;for(var c=0;c<b;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[],b.knownHelpers=m.extend(i(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},b.knownHelpers),this.accept(a)},compileProgram:function(a){var b=new this.compiler,c=b.compile(a,this.options),d=this.guid++;return this.usePartial=this.usePartial||c.usePartial,this.children[d]=c,this.useDepths=this.useDepths||c.useDepths,d},accept:function(a){if(!this[a.type])throw new l["default"]("Unknown type: "+a.type,a);this.sourceNode.unshift(a);var b=this[a.type](a);return this.sourceNode.shift(),b},Program:function(a){this.options.blockParams.unshift(a.blockParams);for(var b=a.body,c=b.length,d=0;d<c;d++)this.accept(b[d]);return this.options.blockParams.shift(),this.isSimple=1===c,this.blockParams=a.blockParams?a.blockParams.length:0,this},BlockStatement:function(a){h(a);var b=a.program,c=a.inverse;b=b&&this.compileProgram(b),c=c&&this.compileProgram(c);var d=this.classifySexpr(a);"helper"===d?this.helperSexpr(a,b,c):"simple"===d?(this.simpleSexpr(a),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("blockValue",a.path.original)):(this.ambiguousSexpr(a,b,c),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(a){var b=a.program&&this.compileProgram(a.program),c=this.setupFullMustacheParams(a,b,void 0),d=a.path;this.useDecorators=!0,this.opcode("registerDecorator",c.length,d.original)},PartialStatement:function(a){this.usePartial=!0;var b=a.program;b&&(b=this.compileProgram(a.program));var c=a.params;if(c.length>1)throw new l["default"]("Unsupported number of partial arguments: "+c.length,a);c.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):c.push({type:"PathExpression",parts:[],depth:0}));var d=a.name.original,e="SubExpression"===a.name.type;e&&this.accept(a.name),this.setupFullMustacheParams(a,b,void 0,!0);var f=a.indent||"";this.options.preventIndent&&f&&(this.opcode("appendContent",f),f=""),this.opcode("invokePartial",e,d,f),this.opcode("append")},PartialBlockStatement:function(a){this.PartialStatement(a)},MustacheStatement:function(a){this.SubExpression(a),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(a){this.DecoratorBlock(a)},ContentStatement:function(a){a.value&&this.opcode("appendContent",a.value)},CommentStatement:function(){},SubExpression:function(a){h(a);var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ambiguousSexpr:function(a,b,c){var d=a.path,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),d.strict=!0,this.accept(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.path,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper "+f,a);e.strict=!0,e.falsy=!0,this.accept(e),this.opcode("invokeHelper",d.length,e.original,o["default"].helpers.simpleId(e))}},PathExpression:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0],c=o["default"].helpers.scopedId(a),d=!a.depth&&!c&&this.blockParamIndex(b);d?this.opcode("lookupBlockParam",d,a.parts):b?a.data?(this.options.data=!0,this.opcode("lookupData",a.depth,a.parts,a.strict)):this.opcode("lookupOnContext",a.parts,a.falsy,a.strict,c):this.opcode("pushContext")},StringLiteral:function(a){this.opcode("pushString",a.value)},NumberLiteral:function(a){this.opcode("pushLiteral",a.value)},BooleanLiteral:function(a){this.opcode("pushLiteral",a.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(a){var b=a.pairs,c=0,d=b.length;for(this.opcode("pushHash");c<d;c++)this.pushParam(b[c].value);for(;c--;)this.opcode("assignToHash",b[c].key);this.opcode("popHash")},opcode:function(a){this.opcodes.push({opcode:a,args:p.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(a){a&&(this.useDepths=!0)},classifySexpr:function(a){var b=o["default"].helpers.simpleId(a.path),c=b&&!!this.blockParamIndex(a.path.parts[0]),d=!c&&o["default"].helpers.helperExpression(a),e=!c&&(d||b);if(e&&!d){var f=a.path.parts[0],g=this.options;g.knownHelpers[f]?d=!0:g.knownHelpersOnly&&(e=!1)}return d?"helper":e?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;b<c;b++)this.pushParam(a[b])},pushParam:function(a){var b=null!=a.value?a.value:a.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",b,a.type),"SubExpression"===a.type&&this.accept(a);else{if(this.trackIds){var c=void 0;if(!a.parts||o["default"].helpers.scopedId(a)||a.depth||(c=this.blockParamIndex(a.parts[0])),c){var d=a.parts.slice(1).join(".");this.opcode("pushId","BlockParam",c,d)}else b=a.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",a.type,b)}this.accept(a)}},setupFullMustacheParams:function(a,b,c,d){var e=a.params;return this.pushParams(e),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.accept(a.hash):this.opcode("emptyHash",d),e},blockParamIndex:function(a){for(var b=0,c=this.options.blockParams.length;b<c;b++){var d=this.options.blockParams[b],e=d&&m.indexOf(d,a);if(d&&e>=0)return[b,e]}}}},function(a,b,c){a.exports={"default":c(48),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b){return d.create(a,b)}},function(a,b,c){"use strict";function d(a){this.value=a}function e(){}function f(a,b,c,d){var e=b.popStack(),f=0,g=c.length;for(a&&g--;f<g;f++)e=b.nameLookup(e,c[f],d);return a?[b.aliasable("container.strict"),"(",e,", ",b.quotedString(c[f]),", ",JSON.stringify(b.source.currentLocation)," )"]:e}var g=c(13)["default"],h=c(1)["default"];b.__esModule=!0;var i=c(4),j=c(6),k=h(j),l=c(5),m=c(50),n=h(m),o=c(28);e.prototype={nameLookup:function(a,b){function c(){return e.isValidJavaScriptVariableName(b)?[a,".",b]:[a,"[",JSON.stringify(b),"]"]}if(o.dangerousPropertyRegex.test(b)){var d=[this.aliasable("container.propertyIsEnumerable"),".call(",a,",",JSON.stringify(b),")"];return["(",d,"?",c()," : undefined)"]}return c()},depthedLookup:function(a){return[this.aliasable("container.lookup"),'(depths, "',a,'")']},compilerInfo:function(){var a=i.COMPILER_REVISION,b=i.REVISION_CHANGES[a];return[a,b]},appendToBuffer:function(a,b,c){return l.isArray(a)||(a=[a]),a=this.source.wrap(a,b),this.environment.isSimple?["return ",a,";"]:c?["buffer += ",a,";"]:(a.appendToBuffer=!0,a)},initializeBuffer:function(){return this.quotedString("")},compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.useDepths||a.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||a.useBlockParams;var e=a.opcodes,f=void 0,g=void 0,h=void 0,i=void 0;for(h=0,i=e.length;h<i;h++)f=e[h],this.source.currentLocation=f.loc,g=g||f.loc,this[f.opcode].apply(this,f.args);if(this.source.currentLocation=g,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new k["default"]("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend("var decorators = container.decorators;\n"),this.decorators.push("return fn;"),d?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var j=this.createFunctionContext(d);if(this.isChild)return j;var l={compiler:this.compilerInfo(),main:j};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var m=this.context,n=m.programs,o=m.decorators;for(h=0,i=n.length;h<i;h++)n[h]&&(l[h]=n[h],o[h]&&(l[h+"_d"]=o[h],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),d?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),b.srcName?(l=l.toStringWithSourceMap({file:b.destName}),l.map=l.map&&l.map.toString()):l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new n["default"](this.options.srcName),this.decorators=new n["default"](this.options.srcName)},createFunctionContext:function(a){var b=this,c="",d=this.stackVars.concat(this.registers.list);d.length>0&&(c+=", "+d.join(", "));var e=0;g(this.aliases).forEach(function(a){var d=b.aliases[a];d.children&&d.referenceCount>1&&(c+=", alias"+ ++e+"="+a,d.children[0]="alias"+e)});var f=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&f.push("blockParams"),this.useDepths&&f.push("depths");var h=this.mergeSource(c);return a?(f.push(h),Function.apply(this,f)):this.source.wrap(["function(",f.join(","),") {\n  ",h,"}"])},mergeSource:function(a){var b=this.environment.isSimple,c=!this.forceBuffer,d=void 0,e=void 0,f=void 0,g=void 0;return this.source.each(function(a){a.appendToBuffer?(f?a.prepend("  + "):f=a,g=a):(f&&(e?f.prepend("buffer += "):d=!0,g.add(";"),f=g=void 0),e=!0,b||(c=!1))}),c?f?(f.prepend("return "),g.add(";")):e||this.source.push('return "";'):(a+=", buffer = "+(d?"":this.initializeBuffer()),
f?(f.prepend("return buffer + "),g.add(";")):this.source.push("return buffer;")),a&&this.source.prepend("var "+a.substring(2)+(d?"":";\n")),this.source.merge()},blockValue:function(a){var b=this.aliasable("container.hooks.blockHelperMissing"),c=[this.contextName(0)];this.setupHelperArgs(a,0,c);var d=this.popStack();c.splice(1,0,d),this.push(this.source.functionCall(b,"call",c))},ambiguousBlockValue:function(){var a=this.aliasable("container.hooks.blockHelperMissing"),b=[this.contextName(0)];this.setupHelperArgs("",0,b,!0),this.flushInline();var c=this.topStack();b.splice(1,0,c),this.pushSource(["if (!",this.lastHelper,") { ",c," = ",this.source.functionCall(a,"call",b),"}"])},appendContent:function(a){this.pendingContent?a=this.pendingContent+a:this.pendingLocation=this.source.currentLocation,this.pendingContent=a},append:function(){if(this.isInline())this.replaceStack(function(a){return[" != null ? ",a,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var a=this.popStack();this.pushSource(["if (",a," != null) { ",this.appendToBuffer(a,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c,d){var e=0;d||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[e++])),this.resolvePath("context",a,e,b,c)},lookupBlockParam:function(a,b){this.useBlockParams=!0,this.push(["blockParams[",a[0],"][",a[1],"]"]),this.resolvePath("context",b,1)},lookupData:function(a,b,c){a?this.pushStackLiteral("container.data(data, "+a+")"):this.pushStackLiteral("data"),this.resolvePath("data",b,0,!0,c)},resolvePath:function(a,b,c,d,e){var g=this;if(this.options.strict||this.options.assumeObjects)return void this.push(f(this.options.strict&&e,this,b,a));for(var h=b.length;c<h;c++)this.replaceStack(function(e){var f=g.nameLookup(e,b[c],a);return d?[" && ",f]:[" != null ? ",f," : ",e]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"SubExpression"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(a){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(a?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(a.ids)),this.stringParams&&(this.push(this.objectLiteral(a.contexts)),this.push(this.objectLiteral(a.types))),this.push(this.objectLiteral(a.values))},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},registerDecorator:function(a,b){var c=this.nameLookup("decorators",b,"decorator"),d=this.setupHelperArgs(b,a);this.decorators.push(["fn = ",this.decorators.functionCall(c,"",["fn","props","container",d])," || fn;"])},invokeHelper:function(a,b,c){var d=this.popStack(),e=this.setupHelper(a,b),f=[];c&&f.push(e.name),f.push(d),this.options.strict||f.push(this.aliasable("container.hooks.helperMissing"));var g=["(",this.itemsSeparatedBy(f,"||"),")"],h=this.source.functionCall(g,"call",e.callParams);this.push(h)},itemsSeparatedBy:function(a,b){var c=[];c.push(a[0]);for(var d=1;d<a.length;d++)c.push(b,a[d]);return c},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(this.source.functionCall(c.name,"call",c.callParams))},invokeAmbiguous:function(a,b){this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper"),f=["(","(helper = ",e," || ",c,")"];this.options.strict||(f[0]="(helper = ",f.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",f,d.paramsInit?["),(",d.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",d.callParams)," : helper))"])},invokePartial:function(a,b,c){var d=[],e=this.setupParams(b,1,d);a&&(b=this.popStack(),delete e.name),c&&(e.indent=JSON.stringify(c)),e.helpers="helpers",e.partials="partials",e.decorators="container.decorators",a?d.unshift(b):d.unshift(this.nameLookup("partials",b,"partial")),this.options.compat&&(e.depths="depths"),e=this.objectLiteral(e),d.push(e),this.push(this.source.functionCall("container.invokePartial","",d))},assignToHash:function(a){var b=this.popStack(),c=void 0,d=void 0,e=void 0;this.trackIds&&(e=this.popStack()),this.stringParams&&(d=this.popStack(),c=this.popStack());var f=this.hash;c&&(f.contexts[a]=c),d&&(f.types[a]=d),e&&(f.ids[a]=e),f.values[a]=b},pushId:function(a,b,c){"BlockParam"===a?this.pushStackLiteral("blockParams["+b[0]+"].path["+b[1]+"]"+(c?" + "+JSON.stringify("."+c):"")):"PathExpression"===a?this.pushString(b):"SubExpression"===a?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:e,compileChildren:function(a,b){for(var c=a.children,d=void 0,e=void 0,f=0,g=c.length;f<g;f++){d=c[f],e=new this.compiler;var h=this.matchExistingProgram(d);if(null==h){this.context.programs.push("");var i=this.context.programs.length;d.index=i,d.name="program"+i,this.context.programs[i]=e.compile(d,b,this.context,!this.precompile),this.context.decorators[i]=e.decorators,this.context.environments[i]=d,this.useDepths=this.useDepths||e.useDepths,this.useBlockParams=this.useBlockParams||e.useBlockParams,d.useDepths=this.useDepths,d.useBlockParams=this.useBlockParams}else d.index=h.index,d.name="program"+h.index,this.useDepths=this.useDepths||h.useDepths,this.useBlockParams=this.useBlockParams||h.useBlockParams}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return d}},programExpression:function(a){var b=this.environment.children[a],c=[b.index,"data",b.blockParams];return(this.useBlockParams||this.useDepths)&&c.push("blockParams"),this.useDepths&&c.push("depths"),"container.program("+c.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},push:function(a){return a instanceof d||(a=this.source.wrap(a)),this.inlineStack.push(a),a},pushStackLiteral:function(a){this.push(new d(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),a&&this.source.push(a)},replaceStack:function(a){var b=["("],c=void 0,e=void 0,f=void 0;if(!this.isInline())throw new k["default"]("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof d)c=[g.value],b=["(",c],f=!0;else{e=!0;var h=this.incrStack();b=["((",this.push(h)," = ",g,")"],c=this.topStack()}var i=a.call(this,c);f||this.popStack(),e&&this.stackSlot--,this.push(b.concat(i,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var e=a[b];if(e instanceof d)this.compileStack.push(e);else{var f=this.incrStack();this.pushSource([f," = ",e,";"]),this.compileStack.push(f)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof d)return c.value;if(!b){if(!this.stackSlot)throw new k["default"]("Invalid stack pop");this.stackSlot--}return c},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof d?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return this.source.quotedString(a)},objectLiteral:function(a){return this.source.objectLiteral(a)},aliasable:function(a){var b=this.aliases[a];return b?(b.referenceCount++,b):(b=this.aliases[a]=this.source.wrap(a),b.aliasable=!0,b.referenceCount=1,b)},setupHelper:function(a,b,c){var d=[],e=this.setupHelperArgs(b,a,d,c),f=this.nameLookup("helpers",b,"helper"),g=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:d,paramsInit:e,name:f,callParams:[g].concat(d)}},setupParams:function(a,b,c){var d={},e=[],f=[],g=[],h=!c,i=void 0;h&&(c=[]),d.name=this.quotedString(a),d.hash=this.popStack(),this.trackIds&&(d.hashIds=this.popStack()),this.stringParams&&(d.hashTypes=this.popStack(),d.hashContexts=this.popStack());var j=this.popStack(),k=this.popStack();(k||j)&&(d.fn=k||"container.noop",d.inverse=j||"container.noop");for(var l=b;l--;)i=this.popStack(),c[l]=i,this.trackIds&&(g[l]=this.popStack()),this.stringParams&&(f[l]=this.popStack(),e[l]=this.popStack());return h&&(d.args=this.source.generateArray(c)),this.trackIds&&(d.ids=this.source.generateArray(g)),this.stringParams&&(d.types=this.source.generateArray(f),d.contexts=this.source.generateArray(e)),this.options.data&&(d.data="data"),this.useBlockParams&&(d.blockParams="blockParams"),d},setupHelperArgs:function(a,b,c,d){var e=this.setupParams(a,b,c);return e.loc=JSON.stringify(this.source.currentLocation),e=this.objectLiteral(e),d?(this.useRegister("options"),c.push("options"),["options=",e]):c?(c.push(e),""):e}},function(){for(var a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),b=e.RESERVED_WORDS={},c=0,d=a.length;c<d;c++)b[a[c]]=!0}(),e.isValidJavaScriptVariableName=function(a){return!e.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b,c){if(g.isArray(a)){for(var d=[],e=0,f=a.length;e<f;e++)d.push(b.wrap(a[e],c));return d}return"boolean"==typeof a||"number"==typeof a?a+"":a}function e(a){this.srcFile=a,this.source=[]}var f=c(13)["default"];b.__esModule=!0;var g=c(5),h=void 0;try{}catch(i){}h||(h=function(a,b,c,d){this.src="",d&&this.add(d)},h.prototype={add:function(a){g.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){g.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),e.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,b){this.source.unshift(this.wrap(a,b))},push:function(a,b){this.source.push(this.wrap(a,b))},merge:function(){var a=this.empty();return this.each(function(b){a.add(["  ",b,"\n"])}),a},each:function(a){for(var b=0,c=this.source.length;b<c;b++)a(this.source[b])},empty:function(){var a=this.currentLocation||{start:{}};return new h(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var b=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return a instanceof h?a:(a=d(a,this,b),new h(b.start.line,b.start.column,this.srcFile,a))},functionCall:function(a,b,c){return c=this.generateList(c),this.wrap([a,b?"."+b+"(":"(",c,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=this,c=[];f(a).forEach(function(e){var f=d(a[e],b);"undefined"!==f&&c.push([b.quotedString(e),":",f])});var e=this.generateList(c);return e.prepend("{"),e.add("}"),e},generateList:function(a){for(var b=this.empty(),c=0,e=a.length;c<e;c++)c&&b.add(","),b.add(d(a[c],this));return b},generateArray:function(a){var b=this.generateList(a);return b.prepend("["),b.add("]"),b}},b["default"]=e,a.exports=b["default"]}])});
/**
 * performanceUtil.getSimpleTS();
 *
 */
var performanceUtil = {

    timeMillisecondForkoreanGMT : 1000 * 60 * 60 * 9,


    getSimpleTS : function( timeMillisecond ) {
        var resultStr = '';

        var _date = ( timeMillisecond == undefined ? new Date() : new Date(timeMillisecond + performanceUtil.timeMillisecondForkoreanGMT));

        try {

            if ( !_date.toISOString ) {
                resultStr = performanceUtil.getTS( _date );
            }else if( _date.toISOString() == "Invalid Date" ) {
                resultStr = performanceUtil.getTS( _date );
            } else {
                resultStr = _date.toISOString().replace(/[-:T]/g,'').replace(/\.(?:\d{3})Z/g,'');
            }

        } catch(e) {
            resultStr = performanceUtil.getTS( _date );
        }

        return resultStr;
    },
    getTS : function( date ) {

        if ( performanceUtil.isValidDate( date ) ) {
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            var strDate = date.getFullYear().toString()
                + ((month < 10) ? '0' + month : month).toString()
                + ((day < 10) ? '0' + day : day).toString()
                + ((hours < 10) ? '0' + hours : hours).toString()
                + ((minutes < 10) ? '0' + minutes : minutes).toString()
                + ((seconds < 10) ? '0' + seconds : seconds).toString();

            return strDate;
        }

        return null;
    },
    isValidDate : function( date ) {
        if (Object.prototype.toString.call(date) !== "[object Date]") {
            return false;
        }
        return !isNaN(date.getTime());
    },
    dateFormat : function( dt ) {
        var _dt = '', _tl = '';
        var scheculedtStr   = dt.length >= 8 ? dt.substr(0,4) + "/" + dt.substr(4,2) + "/" + dt.substr(6,2) : "";

        if(commonStringUtil.isNotEmpty(dt)) {

            if(dt.search('8888') > -1) {
                _tl = '공연일 추후공지 (' + performanceUtil.getWeekDayEx(scheculedtStr) + ')';
            } else {
                _dt = dt.match(/([0-9]{4})([0-9]{2})([0-9]{2})/);
                _tl = _dt[1] + '년 ' + _dt[2] + '월 ' + _dt[3] + '일 ' + performanceUtil.getWeekDayEx(scheculedtStr) + '요일';
            }
        }

        return _tl;
    },
    getWeekDayEx : function( dt ) {
        var week = new Array('일', '월', '화', '수', '목', '금', '토');
        var day = new Date(dt).getDay();
        return week[day];
    },
    timeFormat : function(tm) {
        var _tm = '', _tl = '';

        if( commonStringUtil.isNotEmpty(tm) ) {

            if(tm.search('2323') > -1) {
                _tl='공연시간 추후공지 ';
            } else {
                _tm = tm.match(/([0-9]{2})([0-9]{2})/);
                _tl = _tm[1] + '시 ' + _tm[2] + '분';
            }
        }

        return _tl;
    },
    comma : function(str) {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    },
    getUsercond : function( prodId, pocCode, sellTypeCode, sellCondNo, autheTypeCode ) {

        try {
            var ucName = 'K_USERCOND_' + getMemberKey() + prodId + pocCode + sellTypeCode + sellCondNo + autheTypeCode;
            var ucValue = getCookie(ucName);
            return ucValue;
        } catch(e) {
            return 'N';
        }
    },
    setUsercond : function(prodId, pocCode, sellTypeCode, sellCondNo, autheTypeCode, v) {
        try {
            var ucName = 'K_USERCOND_' + getMemberKey() + prodId + pocCode + sellTypeCode + sellCondNo + autheTypeCode;
            setCookie(ucName, v, 0, "/", MELON.WEBSVC.POC.melonDomain);
        } catch(e){}
    },
    /**
     * 스트링 문자열 일자표기 데이트형으로 변환
     *
     * @param pDateString - 스트링 Date (Format:'yyyyMMddhhmmss', 'yyyyMMddhhmm')
     * @returns Date - Date 타입
     */
    convertStringToDate : function( pDateString ) {
        var _date = null, _regexp;

        if ( commonStringUtil.isEmpty(pDateString) ) {
            return null;
        }

        // 자릿수 채우기
        if (12 < pDateString.length && 14 > pDateString.length) {
            do {
                pDateString += '0';
            } while (14 > pDateString.length);
        }

        if(14 === pDateString.length) {
            _regexp = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
        } else if (12 === pDateString.length) {
            _regexp = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/;
        }

        var _tmpArr = pDateString.match(_regexp);

        if (6 > _tmpArr.length) {
            return null;
        }

        _date = new Date();
        _date.setFullYear(_tmpArr[1]);
        _date.setMonth(Number(_tmpArr[2]) -1);
        _date.setDate(_tmpArr[3]);
        _date.setHours(_tmpArr[4]);
        _date.setMinutes(_tmpArr[5]);

        // 초단위 추가설정
        if (7 === _tmpArr.length) {
            _date.setSeconds(_tmpArr[6]);
        }

        return _date;
    },
    /**
     * RGB값으로 컬러 코드값 반환
     *
     * @returns String (Color Code)
     */
    hexc : function(colorval) {
        var startStr = colorval.substring(0,1);

        if(startStr === '#') {
            return colorval.substring(1);
        }
        else {
            var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

            delete(parts[0]);

            for (var i = 1; i <= 3; ++i) {
                parts[i] = parseInt(parts[i]).toString(16);
                if (parts[i].length == 1) parts[i] = '0' + parts[i];
            }

            return parts[1]+parts[2]+parts[3];
        }
    }









};
define("js/app/performance/util/performanceUtil", function(){});

define('js/app/performance/util/handlebarsTemplateUtil',[
    "jquery",
    "Handlebars"

], function ( $ , Handlebars ) {
    'use strict';

    var exports = {};

    function init() {

    }

    function commmonUtil() {
        /**
         * 분기문
         */
        Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                case '!=':
                    return (v1 != v2) ? options.fn(this) : options.inverse(this);
                case '!==':
                    return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                case '&&':
                    return (v1 && v2) ? options.fn(this) : options.inverse(this);
                case '||':
                    return (v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        });



    }



    exports.scheduleHandlebarsUtil = function( objData ) {
        commmonUtil();

        /**
         * Date 일자 부분 변환 함수
         */
        Handlebars.registerHelper('dateWord', function ( scheduleDate ) {
            return performanceUtil.dateFormat(scheduleDate);
        });

        /**
         * 시간 리스트 포맷 변환 함수
         */
        Handlebars.registerHelper('timeFormat', function ( scheduleDate ) {
            return performanceUtil.timeFormat(scheduleDate);
        });

        Handlebars.registerHelper('castingCalendarStyle1', function ( val, isCastingYn ) {
            var result = "";

            if( isCastingYn === "N" ) {
                result = "style='text-align:center;'";
            }

            return result;
        });

        /**
         * 캐스팅 캘린더 사용여부 확인 함수
         */
        Handlebars.registerHelper('isCastingCalendar', function ( casting, options ) {
            if( commonStringUtil.isNotEmpty(casting) ) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        });

        /**
         * 천단위 콤마 함수
         */
        Handlebars.registerHelper('commaFormat', function ( priceVal ) {
            return performanceUtil.comma(priceVal);
        });

        /**
         * 등급 카운트 출력 함수
         */
        Handlebars.registerHelper('gradeCount', function ( realSeatCntlk ) {
            var result = "";

            if ( realSeatCntlk == 0 ) {
                result = "매진";
            } else if( realSeatCntlk == 10000 ) {
                result = "";
            } else {
                result = performanceUtil.comma(realSeatCntlk) + "석";
            }

            return result;
        });


        Handlebars.registerHelper('ifDataCompareAnd', function (val1, val2, el) {
            var result = "";
            if ( val1 != null && val2 != null && val1.length > 0 && val2 > 0 ) {
                result = el;
            }

            return result;
        });

        Handlebars.registerHelper('ifDataCompareOr', function (val1, val2, el) {
            var result = "";

            if(val1 != null || val2 > 0 ){
                result = el;
            }

            return result;
        });


    };

    return {
        init:init,
        template:exports
    };
});
define('js/app/performance/view/performanceView',[
    "jquery",
    "underscore",
    "ticketUtil",
    "Handlebars",
    "js/app/performance/util/performanceUtil",
    "ticketStringUtil",
    "js/app/performance/util/handlebarsTemplateUtil"
], function ( $ ,underscore,ticketUtil, Handlebars,
              performanceUtil,ticketStringUtil, handlebarsTemplateUtil) {
    'use strict';

    var exports = {};

    function init() {

    }


    /**
     * 관련공연 슬라이더 시작함수
     */
    exports.relationPerformanceInit = function( ) {
        try {

            //관련공연 스크립트
            $("#consert_area").fnSlider({
                prev : $("#consert_area .prev"), // prev 버튼 지정
                next : $("#consert_area .next"), // next 버튼 지정
                //indicator : "",                               // Indicator 지정
                paging : $("#consert_area .control.page"),// paging 텍스트 지정 (현재/전체)
                slideNum : 1, // 슬라이드 단위(한번 이동에 넘길 단위)
                speed : 400
                // 애니메이션 속도(ms)
            });

        } catch(e) {

        }
    };

    /**
     * 관련공연 슬라이더 시작함수
     */
    exports.rankingInit = function( ) {
        try {
            onoffBthSet(".list_ranking li", ".list_ranking li .item");
        } catch(e) {

        }
    };


    /**
     * 공통 핸들바 템플릿 출력 함수
     * 예)
     * var printData = {
          emptyEl : "#noticeAlert",
          templateEl : "#noticeAlert_template",
          objectData : alertMessage,
          addEl : "#noticeAlert"
       };
     * @param objData
     */
    exports.defaultTemplatePrint = function( objData ) {
        handlebarsTemplateUtil.template.scheduleHandlebarsUtil();

        $(objData.emptyEl).empty();

        var source = $(objData.templateEl).html();

        var template = Handlebars.compile(source);

        var html = template(objData);

        $(objData.addEl).append(html);
    };

    exports.defaultTemplatePrint2 = function( objData ) {
        handlebarsTemplateUtil.template.scheduleHandlebarsUtil();

        $(objData.emptyEl).empty();

        var source = $(objData.templateEl).html();

        var template = Handlebars.compile(source);

        var html = template(objData);

        $(objData.addEl).html(html);
    };

    /**
     * 매진/매진임박 화면 출력 템플릿
     * @param objData
     */
    exports.soldOutTextTemplatePrint = function( objData ) {
        $(objData.emptyEl).empty();

        var source = $(objData.templateEl).html();

        var template = Handlebars.compile(source);

        var html = template(objData);

        $(objData.addEl).html(html);
    };



    return {
        init:init,
        view:exports
    };
});
define('js/app/common/model/commonModel',[
    "jquery",
    "underscore"

], function ( $,underscore ) {
    'use strict';

    var exports = {};

    // $.ajaxSettings.traditional = true;

    $.ajaxSetup({
        traditional:true
    });

    function _browserIeCheck() {
        var agent = navigator.userAgent.toLowerCase();

        if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
            $.ajaxSetup({
                cache:false
            });
        }
    }

    /**
     * ston cache type
     * @param data
     * @returns {*}
     */
    function _isObjectCheck(data){

        if( _.isObject(data) ) {
            data.requestservicetype = "P"
        }

        return data;
    }

    /**
     * 기본 GET 통신 함수
     * @param url
     * @param data
     * @returns {any}
     */
    exports.getDefaultAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType: "json",
            url  : url,
            data : _isObjectCheck(data),
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * 기본 GET 통신 함수
     * text 응답
     * @param url
     * @param data
     * @returns {any}
     */
    exports.getDefaultAjaxHTML = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType: "text",
            url  : url,
            data : _isObjectCheck(data),
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * 기본 POST 통신 함수
     * @param url
     * @param data
     * @returns {any}
     */
    exports.postDefaultAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "POST",
            dataType: "json",
            url  :  url,
            data : _isObjectCheck(data),
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };


    /**
     * GET 통신 함수(쿠키허용)
     * @param url
     * @param data
     * @returns {any}
     */
    exports.getCookiePermissionAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType: "json",
            url  :  url,
            data : _isObjectCheck(data),
            xhrFields: {withCredentials: true},
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * GET 통신 함수(쿠키허용)
     * dataType TEXT
     * @param url
     * @param data
     * @returns {any}
     */
    exports.getCookiePermissionAjaxHTML = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType: "text",
            url  :  url,
            data : _isObjectCheck(data),
            xhrFields: {withCredentials: true},
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };


    /**
     * POST 통신 함수(쿠키허용)
     * @param url
     * @param data
     * @returns {any}
     */
    exports.postCookiePermissionAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "POST",
            dataType: "json",
            url  :  url,
            data : _isObjectCheck(data),
            xhrFields: {withCredentials: true},
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };


    /**
     * GET 통신 함수(캐시 true)
     * @param url
     * @param data
     * @returns {any}
     */
    exports.getCachePermissionAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType: "json",
            url  :  url,
            data : _isObjectCheck(data),
            cache : true,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * GET 통신 함수(캐시 false)
     * @param url
     * @param data
     * @returns {any}
     */
    exports.getNoCachePermissionAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType: "json",
            url  :  url,
            data : _isObjectCheck(data),
            cache : false,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * POST 통신 함수(캐시 true)
     * @param url
     * @param data
     * @returns {any}
     */
    exports.postCachePermissionAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "POST",
            dataType: "json",
            url  :  url,
            data : _isObjectCheck(data),
            cache : true,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };


    /**
     * POST 통신 함수(캐시 false)
     * @param url
     * @param data
     * @returns {any}
     */
    exports.postNoCachePermissionAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "POST",
            dataType: "json",
            url  :  url,
            data : _isObjectCheck(data),
            cache : false,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };


    /**
     * GET 통신 함수(캐시 false)
     * @param url
     * @param data
     * @returns {any}
     */
    exports.getNoCachePermissionAjaxHtml = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            url  :  url,
            data : _isObjectCheck(data),
            cache : false,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };




    //--------------------------------------------------------------------------------------------------------------


    /**
     * JSONP GET 통신 함수
     * @param url
     * @param data
     * @param callbackFnName
     * @returns {any}
     */
    exports.getJSONPDefaultAjax = function( url, data  ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType : "jsonp",
            url  :  url,
            data : _isObjectCheck(data),
            crossDomain: true,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * JSONP POST 통신 함수
     * @param url
     * @param data
     * @param callbackFnName
     * @returns {any}
     */
    exports.postJSONPDefaultAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "POST",
            dataType : "jsonp",
            url  :  url,
            data : _isObjectCheck(data),
            crossDomain: true,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * JSONP GET 통신 함수(쿠키허용)
     * @param url
     * @param data
     * @param callbackFnName
     * @returns {any}
     */
    exports.getJSONPCookiePermissionAjax = function( url, data  ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType : "jsonp",
            url  :  url,
            data : _isObjectCheck(data),
            crossDomain: true,
            xhrFields: {withCredentials: true},
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * JSONP POST 통신 함수(쿠키허용)
     * @param url
     * @param data
     * @param callbackFnName
     * @returns {any}
     */
    exports.postJSONPCookiePermissionAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "POST",
            dataType : "jsonp",
            url  :  url,
            data : _isObjectCheck(data),
            crossDomain: true,
            xhrFields: {withCredentials: true},
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };


    /**
     * JSONP GET 통신 함수(캐시 허용)
     * @param url
     * @param data
     * @param callbackFnName
     * @returns {any}
     */
    exports.getJSONPCachePermissionAjax = function( url, data  ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "GET",
            dataType : "jsonp",
            url  :  url,
            data : _isObjectCheck(data),
            crossDomain: true,
            cache : true,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };

    /**
     * JSONP POST 통신 함수(캐시 허용)
     * @param url
     * @param data
     * @param callbackFnName
     * @returns {any}
     */
    exports.postJSONPCachePermissionAjax = function( url, data ) {
        var deferred = $.Deferred();

        $.ajax({
            type : "POST",
            dataType : "jsonp",
            url  :  url,
            data : _isObjectCheck(data),
            crossDomain: true,
            cache : true,
            success : function(result, status, xhr) {
                deferred.resolve(result, status, xhr);
            },
            error:function( result, status, xhr ) {
                deferred.reject(result, status, xhr);
            }
        });

        return deferred.promise();
    };


    return {
        model:exports
    };
});
/**
 * 예)
 * commonMessage.systemEmpty
 *
 */
var commonMessage = {


    //시스템 에러 메시지
    systemError:"시스템 에러가 발생 하였습니다.\n잠시후에 다시 시도해 주세요.",
    systemError1:"요청사항을 처리중 오류가 발생했습니다.",


    systemEmpty:"필수 입력값중 공백 값이 있습니다.\n관리자에게 문의해 주세요.",
    systemNotNumber:"숫자 값이 아닙니다.\n관리자에게 문의해 주세요.",


    melonMemberAuthIdentity : "본인 인증 여부 확인이 되지 않습니다.\n잠시 후 다시 시도해 주세요.",
    melonMemberAdultAuth : "성인 인증 여부 확인이 되지 않습니다.\n잠시 후 다시 시도해 주세요.",
    melonMemberAuthDefault : "본인/성인 인증 여부 확인이 되지 않습니다.\n잠시 후 다시 시도해 주세요.",

    preReservationAjaxDefaultMsg : "선예매 인증이 확인 되지 않았습니다.\n잠시 후 다시 시도해 주세요."





};
define("js/common/message/commonMessage", function(){});

define('js/app/common/service/loginService',[
    "jquery",
    "underscore",
    "ticketDomain",
    "ticketUtil",
    "js/app/common/model/commonModel",
    "js/common/util/commonMessageUtil"
], function ( $,underscore, tktDomain, tktUtil, commonModel, commonMessageUtil ) {
    'use strict';

    var exports = {};

    function init() {

    }

    /**
     * 멜론 팝업 로그인
     */
    exports.melonPopupLogin = function(  ) {
        var memberDomain = commonDomain.GLOBAL_MEMBER_MELON_HTTPS;
        var pocId = melon.getPocId();

        document.domain = 'melon.com';
        window.open(memberDomain + "/muid/family/ticket/login/web/loginpopup_inform.htm?callback=loginCallback&cpId="+pocId + '&returnPage=' + encodeURIComponent(location.href), "loginForm", "width=560px,height=380px");
    };

    /**
     * 멜론 팝업 로그인 (컨펌 메시지 출력)
     */
    exports.melonConfirmPopupLogin = function(  ) {

        var msg = "로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?";
        if ( confirm(msg) ) {
            this.melonPopupLogin();
        } else {
            return;
        }
    };





    return {
        init:init,
        service:exports
    };
});
define('js/common/util/commonMessageUtil',[
    "jquery",
    "underscore",
    "js/common/message/commonMessage",
    "ticketUtil",
    "ticketCode",
    "js/app/common/service/loginService"
], function ( $,underscore,message,tktUtil,ticketCode, loginService ) {
    'use strict';

    var exports = {};

    function init() {

    }

    /**
     * 메시지 출력 함수
     * 메시지 값이 있으면 메시지 값으로 오류 메시지 출력
     * 메시지 값이 없으면 코드 값으로 오류 메시지 출력
     * @param result
     */
    exports.systemMessage = function( result ) {

        var message = _messageValidation( result );
        var code = _codeValidation( result );

        if( message != null && message != "" ) {
            _messagePrint( message );
        } else {
            _codeMessagePrint( code );
        }
    };


    /**
     * object = json에서 메시지 리턴
     * other = null
     * @param resultCode
     */
    function _messageValidation( result ) {

        if ( _.isObject(result) ) {

            var resultMessage = commonUtil.inputObjectValueCheck(result,['responseJSON','resultMessage']);

            if ( resultMessage != "" ) {
                return resultMessage;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    /**
     * object = json에서 code 값 리턴
     * other = code 값 리턴
     * @param resultCode
     */
    function _codeValidation( result ) {

        if ( _.isObject(result) ) {

            var resultCode = commonUtil.inputObjectValueCheck(result,['responseJSON','resultCode']);

            if( resultCode != "" ) {
                return resultCode;
            } else {
                return commonCode.systemErrorCode9;
            }
        } else {
            return result;
        }
    }

    /**
     * 서버 리턴 메시지 출력
     * @private
     */
    var _messagePrint = function( message ) {
        alert(message);
    };

    /**
     * typeCode
     * -9 : 시스템 에러
     * 프론트 메시지 출력
     * @private
     */
    var _codeMessagePrint = function( resultCode ) {

        switch( resultCode ) {
            case -1:
                alert( commonMessage.systemEmpty );  //필수 입력 값 비어 있음
                break;
            case -2:
                alert( commonMessage.systemNotNumber );  //숫자 값이 아님
                break;
            case -8:
                alert( commonMessage.systemError1 );
                break;
            case -9:
                alert( commonMessage.systemError );
                break;



            case -10: //로그인 안됨
                loginService.service.melonPopupLogin();
                break;
            default :
                alert( commonMessage.systemError );
                break;
        }
    };

    return {
        init:init,
        util:exports
    };
});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define('moment/moment.min',t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function v(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function p(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function k(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&D(e[s])!==D(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function R(e){var t,n,s={};for(n in e)m(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var U={};function F(e,t){U[e]=t}function L(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=b(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=b(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var de={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=D(e)}),t=0;t<e.length;t++)de[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,ve=4,pe=5,we=6,Me=7,ke=8;function Se(e){return De(e)?366:365}function De(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),C("year","y"),F("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):D(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return D(e)+(68<D(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(xe(this,t,e),c.updateOffset(this,n),this):be(this,t)}}function be(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&De(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?De(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),C("month","M"),F("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=D(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var He="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=D(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Re(this,e),c.updateOffset(this,!0),this):be(this,"Month")}var Fe=ae;var Le=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=he(s[t]),i[t]=he(i[t]);for(t=0;t<24;t++)r[t]=he(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t;if(e<100&&0<=e){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?Se(r=e-1)+o:o>Se(e)?(r=e+1,o-Se(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(Se(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),F("week",5),F("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=D(e)});function je(e,t){return e.slice(t,7).concat(e.slice(0,t))}I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=D(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Je=ae;var Be=ae;function Qe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Xe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+L(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),C("hour","h"),F("hour",13),ue("a",et),ue("A",et),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=D(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=D(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i))});var tt,nt=Te("Hours",!0),st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:He,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){var t=null;if(!it[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=tt._abbr,require("./locale/"+e),ut(t)}catch(e){}return it[e]}function ut(e,t){var n;return e&&((n=l(t)?ht(e):lt(e,t))?tt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),tt._abbr}function lt(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ot(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new P(x(s,t)),rt[e]&&rt[e].forEach(function(e){lt(e.name,e.config)}),ut(e),it[e]}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return tt;if(!o(e)){if(t=ot(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ot(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return tt}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[ve]||0!==n[pe]||0!==n[we])?ge:n[ve]<0||59<n[ve]?ve:n[pe]<0||59<n[pe]?pe:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=ke),g(e).overflow=t),e}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ft(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ct(t.GG,e._a[me],Ie(bt(),1,4).year),s=ct(t.W,1),((i=ct(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(bt(),r,a);n=ct(t.gg,e._a[me],l.year),s=ct(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ct(e._a[me],s[me]),(e._dayOfYear>Se(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[ve]&&0===e._a[pe]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(g(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[3])){r=(u[2]||" ")+vt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Yt(e)}else e._isValid=!1}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),He.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=kt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Yt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,h=l.length,d=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),d+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(de,a)&&de[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=h-d,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ft(e),dt(e)}else Dt(e);else wt(e)}function Ot(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||ht(e._l),null===r||void 0===a&&""===r?p({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),k(r)?new M(dt(r)):(d(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yt(t),v(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?Yt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):d(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(wt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ft(t)):u(n)?function(e){if(!e._d){var t=R(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ft(e)}}(t):h(n)?t._d=new Date(n):c.createFromInputFallback(t),v(e)||(e._d=null),e))}function Tt(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Ot(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function bt(e,t,n,s){return Tt(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:p()});function Wt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Ct,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ct.length;++s)if(e[Ct[s]]){if(n)return!1;parseFloat(e[Ct[s]])!==D(e[Ct[s]])&&(n=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Rt(e){return e instanceof Ht}function Ut(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+L(~~(e/60),2)+n+L(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+D(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||d(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):bt(e).local()}function Vt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var It=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,At=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jt(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:D(a[ye])*n,h:D(a[ge])*n,m:D(a[ve])*n,s:D(a[pe])*n,ms:D(Ut(1e3*a[we]))*n}):(a=At.exec(e))?(n="-"===a[1]?-1:1,r={y:Zt(a[2],n),M:Zt(a[3],n),w:Zt(a[4],n),d:Zt(a[5],n),h:Zt(a[6],n),m:Zt(a[7],n),s:Zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(bt(r.from),bt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,jt(e="string"==typeof e?+e:e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ut(t._days),a=Ut(t._months);e.isValid()&&(s=null==s||s,a&&Re(e,be(e,"Month")+a*n),r&&xe(e,"Date",be(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}jt.fn=Ht.prototype,jt.invalid=function(){return jt(NaN)};var Jt=$t(1,"add"),Bt=$t(-1,"subtract");function Qt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Kt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function en(){return this._locale}var tn=126227808e5;function nn(e,t){return(e%t+t)%t}function sn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-tn:new Date(e,t,n).valueOf()}function rn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-tn:Date.UTC(e,t,n)}function an(e,t){I(0,[e,e.length],0,t)}function on(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),an("gggg","weekYear"),an("ggggg","weekYear"),an("GGGG","isoWeekYear"),an("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=D(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(D(e)-1)}),I("D",["DD",2],"Do","date"),C("date","D"),F("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=D(e.match(B)[0])});var un=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),F("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)}),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],ve);var ln=Te("Minutes",!1);I("s",["ss",2],0,"second"),C("second","s"),F("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],pe);var hn,dn=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),F("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),hn="SSSS";hn.length<=9;hn+="S")ue(hn,ne);function cn(e,t){t[we]=D(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ce(hn,cn);var fn=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var mn=M.prototype;function _n(e){return e}mn.add=Jt,mn.calendar=function(e,t){var n=e||bt(),s=Gt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(b(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,bt(n)))},mn.clone=function(){return new M(this)},mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:S(r)},mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},mn.from=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.fromNow=function(e){return this.from(bt(),e)},mn.to=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.toNow=function(e){return this.to(bt(),e)},mn.get=function(e){return b(this[e=H(e)])?this[e]():this},mn.invalidAt=function(){return g(this).overflow},mn.isAfter=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},mn.isBefore=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},mn.isBetween=function(e,t,n,s){var i=k(e)?e:bt(e),r=k(t)?t:bt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},mn.isSame=function(e,t){var n,s=k(e)?e:bt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},mn.isValid=function(){return v(this)},mn.lang=Kt,mn.locale=Xt,mn.localeData=en,mn.max=Pt,mn.min=xt,mn.parsingFlags=function(){return _({},g(this))},mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:U[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3);break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.subtract=Bt,mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},mn.toDate=function(){return new Date(this.valueOf())},mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},mn.toJSON=function(){return this.isValid()?this.toISOString():null},mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},mn.unix=function(){return Math.floor(this.valueOf()/1e3)},mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},mn.year=Oe,mn.isLeapYear=function(){return De(this.year())},mn.weekYear=function(e){return on.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},mn.isoWeekYear=function(e){return on.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},mn.quarter=mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},mn.month=Ue,mn.daysInMonth=function(){return Pe(this.year(),this.month())},mn.week=mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},mn.isoWeek=mn.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},mn.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},mn.isoWeeksInYear=function(){return Ae(this.year(),1,4)},mn.date=un,mn.day=mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},mn.hour=mn.hours=nt,mn.minute=mn.minutes=ln,mn.second=mn.seconds=dn,mn.millisecond=mn.milliseconds=fn,mn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Vt(this);if("string"==typeof e){if(null===(e=Nt(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Vt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,jt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},mn.utc=function(e){return this.utcOffset(0,e)},mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vt(this),"m")),this},mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},mn.isUtc=Et,mn.isUTC=Et,mn.zoneAbbr=function(){return this._isUTC?"UTC":""},mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},mn.dates=n("dates accessor is deprecated. Use date instead.",un),mn.months=n("months accessor is deprecated. Use month instead",Ue),mn.years=n("years accessor is deprecated. Use year instead",Oe),mn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),mn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Ot(e))._a){var t=e._isUTC?y(e._a):bt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var yn=P.prototype;function gn(e,t,n,s){var i=ht(),r=y().set(s,t);return i[n](r,e)}function vn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return gn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=gn(e,s,n,"month");return i}function pn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=ht(),a=e?r._week.dow:0;if(null!=n)return gn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=gn(t,(i+a)%7,s,"day");return o}yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},yn.invalidDate=function(){return this._invalidDate},yn.ordinal=function(e){return this._ordinal.replace("%d",e)},yn.preparse=_n,yn.postformat=_n,yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},yn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},yn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},yn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},yn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},yn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},yn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},yn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},yn.firstDayOfYear=function(){return this._week.doy},yn.firstDayOfWeek=function(){return this._week.dow},yn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?je(n,this._week.dow):e?n[e.day()]:n},yn.weekdaysMin=function(e){return!0===e?je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},yn.weekdaysShort=function(e){return!0===e?je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},yn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===D(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ut),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ht);var wn=Math.abs;function Mn(e,t,n,s){var i=jt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function kn(e){return e<0?Math.floor(e):Math.ceil(e)}function Sn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var On=Yn("ms"),Tn=Yn("s"),bn=Yn("m"),xn=Yn("h"),Pn=Yn("d"),Wn=Yn("w"),Cn=Yn("M"),Hn=Yn("Q"),Rn=Yn("y");function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fn=Un("milliseconds"),Ln=Un("seconds"),Nn=Un("minutes"),Gn=Un("hours"),Vn=Un("days"),En=Un("months"),In=Un("years");var An=Math.round,jn={ss:44,s:45,m:45,h:22,d:26,M:11};var Zn=Math.abs;function zn(e){return(0<e)-(e<0)||+e}function $n(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Zn(this._milliseconds)/1e3,s=Zn(this._days),i=Zn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var r=S(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var c=d<0?"-":"",f=zn(this._months)!==zn(d)?"-":"",m=zn(this._days)!==zn(d)?"-":"",_=zn(this._milliseconds)!==zn(d)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var qn=Ht.prototype;return qn.isValid=function(){return this._isValid},qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},qn.add=function(e,t){return Mn(this,e,t,1)},qn.subtract=function(e,t){return Mn(this,e,t,-1)},qn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Sn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},qn.asMilliseconds=On,qn.asSeconds=Tn,qn.asMinutes=bn,qn.asHours=xn,qn.asDays=Pn,qn.asWeeks=Wn,qn.asMonths=Cn,qn.asQuarters=Hn,qn.asYears=Rn,qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*D(this._months/12):NaN},qn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*kn(Dn(o)+a),o=a=0),u.milliseconds=r%1e3,e=S(r/1e3),u.seconds=e%60,t=S(e/60),u.minutes=t%60,n=S(t/60),u.hours=n%24,o+=i=S(Sn(a+=S(n/24))),a-=kn(Dn(i)),s=S(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},qn.clone=function(){return jt(this)},qn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},qn.milliseconds=Fn,qn.seconds=Ln,qn.minutes=Nn,qn.hours=Gn,qn.days=Vn,qn.weeks=function(){return S(this.days()/7)},qn.months=En,qn.years=In,qn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,h,d,c=this.localeData(),f=(n=!e,s=c,i=jt(t=this).abs(),r=An(i.as("s")),a=An(i.as("m")),o=An(i.as("h")),u=An(i.as("d")),l=An(i.as("M")),h=An(i.as("y")),(d=r<=jn.ss&&["s",r]||r<jn.s&&["ss",r]||a<=1&&["m"]||a<jn.m&&["mm",a]||o<=1&&["h"]||o<jn.h&&["hh",o]||u<=1&&["d"]||u<jn.d&&["dd",u]||l<=1&&["M"]||l<jn.M&&["MM",l]||h<=1&&["y"]||["yy",h])[2]=n,d[3]=0<+t,d[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,d));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},qn.toISOString=$n,qn.toString=$n,qn.toJSON=$n,qn.locale=Xt,qn.localeData=en,qn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",$n),qn.lang=Kt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(D(e))}),c.version="2.24.0",e=bt,c.fn=mn,c.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return bt(1e3*e)},c.months=function(e,t){return vn(e,t,"months")},c.isDate=d,c.locale=ut,c.invalid=p,c.duration=jt,c.isMoment=k,c.weekdays=function(e,t,n){return pn(e,t,n,"weekdays")},c.parseZone=function(){return bt.apply(null,arguments).parseZone()},c.localeData=ht,c.isDuration=Rt,c.monthsShort=function(e,t){return vn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return pn(e,t,n,"weekdaysMin")},c.defineLocale=lt,c.updateLocale=function(e,t){if(null!=t){var n,s,i=st;null!=(s=ot(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=it[e],it[e]=n,ut(e)}else null!=it[e]&&(null!=it[e].parentLocale?it[e]=it[e].parentLocale:null!=it[e]&&delete it[e]);return it[e]},c.locales=function(){return s(it)},c.weekdaysShort=function(e,t,n){return pn(e,t,n,"weekdaysShort")},c.normalizeUnits=H,c.relativeTimeRounding=function(e){return void 0===e?An:"function"==typeof e&&(An=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==jn[e]&&(void 0===t?jn[e]:(jn[e]=t,"s"===e&&(jn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=mn,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});
define('moment', ['moment/moment.min'], function (main) { return main; });

!function(c,M){"use strict";"object"==typeof module&&module.exports?module.exports=M(require("moment")):"function"==typeof define&&define.amd?define('momentTimeZone',["moment"],M):M(c.moment)}(this,function(z){"use strict";var M,p={},a={},i={},e={};z&&"string"==typeof z.version||E("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var c=z.version.split("."),A=+c[0],b=+c[1];function n(c){return 96<c?c-87:64<c?c-29:c-48}function o(c){var M=0,A=c.split("."),b=A[0],o=A[1]||"",z=1,p=0,a=1;for(45===c.charCodeAt(0)&&(a=-(M=1));M<b.length;M++)p=60*p+n(b.charCodeAt(M));for(M=0;M<o.length;M++)z/=60,p+=n(o.charCodeAt(M))*z;return p*a}function q(c){for(var M=0;M<c.length;M++)c[M]=o(c[M])}function O(c,M){var A,b=[];for(A=0;A<M.length;A++)b[A]=c[M[A]];return b}function r(c){var M=c.split("|"),A=M[2].split(" "),b=M[3].split(""),o=M[4].split(" ");return q(A),q(b),q(o),function(c,M){for(var A=0;A<M;A++)c[A]=Math.round((c[A-1]||0)+6e4*c[A]);c[M-1]=1/0}(o,b.length),{name:M[0],abbrs:O(M[1].split(" "),b),offsets:O(A,b),untils:o,population:0|M[5]}}function d(c){c&&this._set(r(c))}function N(c){var M=c.toTimeString(),A=M.match(/\([a-z ]+\)/i);"GMT"===(A=A&&A[0]?(A=A[0].match(/[A-Z]/g))?A.join(""):void 0:(A=M.match(/[A-Z]{3,5}/g))?A[0]:void 0)&&(A=void 0),this.at=+c,this.abbr=A,this.offset=c.getTimezoneOffset()}function L(c){this.zone=c,this.offsetScore=0,this.abbrScore=0}function f(c,M){for(var A,b;b=6e4*((M.at-c.at)/12e4|0);)(A=new N(new Date(c.at+b))).offset===c.offset?c=A:M=A;return c}function W(c,M){return c.offsetScore!==M.offsetScore?c.offsetScore-M.offsetScore:c.abbrScore!==M.abbrScore?c.abbrScore-M.abbrScore:M.zone.population-c.zone.population}function X(c,M){var A,b;for(q(M),A=0;A<M.length;A++)b=M[A],e[b]=e[b]||{},e[b][c]=!0}function B(){try{var c=Intl.DateTimeFormat().resolvedOptions().timeZone;if(c&&3<c.length){var M=i[l(c)];if(M)return M;E("Moment Timezone found "+c+" from the Intl api, but did not have that data loaded.")}}catch(c){}var A,b,o,z=function(){var c,M,A,b=(new Date).getFullYear()-2,o=new N(new Date(b,0,1)),z=[o];for(A=1;A<48;A++)(M=new N(new Date(b,A,1))).offset!==o.offset&&(c=f(o,M),z.push(c),z.push(new N(new Date(c.at+6e4)))),o=M;for(A=0;A<4;A++)z.push(new N(new Date(b+A,0,1))),z.push(new N(new Date(b+A,6,1)));return z}(),p=z.length,a=function(c){var M,A,b,o=c.length,z={},p=[];for(M=0;M<o;M++)for(A in b=e[c[M].offset]||{})b.hasOwnProperty(A)&&(z[A]=!0);for(M in z)z.hasOwnProperty(M)&&p.push(i[M]);return p}(z),n=[];for(b=0;b<a.length;b++){for(A=new L(u(a[b]),p),o=0;o<p;o++)A.scoreOffsetAt(z[o]);n.push(A)}return n.sort(W),0<n.length?n[0].zone.name:void 0}function l(c){return(c||"").toLowerCase().replace(/\//g,"_")}function t(c){var M,A,b,o;for("string"==typeof c&&(c=[c]),M=0;M<c.length;M++)o=l(A=(b=c[M].split("|"))[0]),p[o]=c[M],i[o]=A,X(o,b[2].split(" "))}function u(c,M){c=l(c);var A,b=p[c];return b instanceof d?b:"string"==typeof b?(b=new d(b),p[c]=b):a[c]&&M!==u&&(A=u(a[c],u))?((b=p[c]=new d)._set(A),b.name=i[c],b):null}function s(c){var M,A,b,o;for("string"==typeof c&&(c=[c]),M=0;M<c.length;M++)b=l((A=c[M].split("|"))[0]),o=l(A[1]),a[b]=o,i[b]=A[0],a[o]=b,i[o]=A[1]}function T(c){t(c.zones),s(c.links),R.dataVersion=c.version}function m(c){var M="X"===c._f||"x"===c._f;return!(!c._a||void 0!==c._tzm||M)}function E(c){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(c)}function R(c){var M=Array.prototype.slice.call(arguments,0,-1),A=arguments[arguments.length-1],b=u(A),o=z.utc.apply(null,M);return b&&!z.isMoment(c)&&m(o)&&o.add(b.parse(o),"minutes"),o.tz(A),o}(A<2||2==A&&b<6)&&E("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+z.version+". See momentjs.com"),d.prototype={_set:function(c){this.name=c.name,this.abbrs=c.abbrs,this.untils=c.untils,this.offsets=c.offsets,this.population=c.population},_index:function(c){var M,A=+c,b=this.untils;for(M=0;M<b.length;M++)if(A<b[M])return M},parse:function(c){var M,A,b,o,z=+c,p=this.offsets,a=this.untils,n=a.length-1;for(o=0;o<n;o++)if(M=p[o],A=p[o+1],b=p[o?o-1:o],M<A&&R.moveAmbiguousForward?M=A:b<M&&R.moveInvalidForward&&(M=b),z<a[o]-6e4*M)return p[o];return p[n]},abbr:function(c){return this.abbrs[this._index(c)]},offset:function(c){return E("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(c)]},utcOffset:function(c){return this.offsets[this._index(c)]}},L.prototype.scoreOffsetAt=function(c){this.offsetScore+=Math.abs(this.zone.utcOffset(c.at)-c.offset),this.zone.abbr(c.at).replace(/[^A-Z]/g,"")!==c.abbr&&this.abbrScore++},R.version="0.5.25",R.dataVersion="",R._zones=p,R._links=a,R._names=i,R.add=t,R.link=s,R.load=T,R.zone=u,R.zoneExists=function c(M){return c.didShowError||(c.didShowError=!0,E("moment.tz.zoneExists('"+M+"') has been deprecated in favor of !moment.tz.zone('"+M+"')")),!!u(M)},R.guess=function(c){return M&&!c||(M=B()),M},R.names=function(){var c,M=[];for(c in i)i.hasOwnProperty(c)&&(p[c]||p[a[c]])&&i[c]&&M.push(i[c]);return M.sort()},R.Zone=d,R.unpack=r,R.unpackBase60=o,R.needsOffset=m,R.moveInvalidForward=!0,R.moveAmbiguousForward=!1;var S,C=z.fn;function h(c){return function(){return this._z?this._z.abbr(this):c.call(this)}}function D(c){return function(){return this._z=null,c.apply(this,arguments)}}z.tz=R,z.defaultZone=null,z.updateOffset=function(c,M){var A,b=z.defaultZone;if(void 0===c._z&&(b&&m(c)&&!c._isUTC&&(c._d=z.utc(c._a)._d,c.utc().add(b.parse(c),"minutes")),c._z=b),c._z)if(A=c._z.utcOffset(c),Math.abs(A)<16&&(A/=60),void 0!==c.utcOffset){var o=c._z;c.utcOffset(-A,M),c._z=o}else c.zone(A,M)},C.tz=function(c,M){if(c){if("string"!=typeof c)throw new Error("Time zone name must be a string, got "+c+" ["+typeof c+"]");return this._z=u(c),this._z?z.updateOffset(this,M):E("Moment Timezone has no data for "+c+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},C.zoneName=h(C.zoneName),C.zoneAbbr=h(C.zoneAbbr),C.utc=D(C.utc),C.local=D(C.local),C.utcOffset=(S=C.utcOffset,function(){return 0<arguments.length&&(this._z=null),S.apply(this,arguments)}),z.tz.setDefault=function(c){return(A<2||2==A&&b<9)&&E("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+z.version+"."),z.defaultZone=c?u(c):null,z};var g=z.momentProperties;return"[object Array]"===Object.prototype.toString.call(g)?(g.push("_z"),g.push("_a")):g&&(g._z=null),T({version:"2019a",zones:["Africa/Abidjan|GMT|0|0||48e5","Africa/Nairobi|EAT|-30|0||47e5","Africa/Algiers|WET WEST CET CEST|0 -10 -10 -20|01012320102|3bX0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5","Africa/Lagos|WAT|-10|0||17e6","Africa/Bissau|-01 GMT|10 0|01|cap0|39e4","Africa/Maputo|CAT|-20|0||26e5","Africa/Cairo|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|LX0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6","Africa/Casablanca|+00 +01|0 -10|01010101010101010101010101010101010101010101010101010101010101010101010|aS00 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600|32e5","Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|0101010102323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|aS00 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|85e3","Africa/El_Aaiun|-01 +00 +01|10 0 -10|01212121212121212121212121212121212121212121212121212121212121212121|fi10 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600|20e4","Africa/Johannesburg|SAST|-20|0||84e5","Africa/Juba|CAT CAST EAT|-20 -30 -30|0101010101010101010101010101010102|LW0 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0","Africa/Khartoum|CAT CAST EAT|-20 -30 -30|01010101010101010101010101010101020|LW0 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5","Africa/Monrovia|MMT GMT|I.u 0|01|4SoI.u|11e5","Africa/Ndjamena|WAT WAST|-10 -20|010|nNb0 Wn0|13e5","Africa/Sao_Tome|GMT WAT|0 -10|010|1UQN0 2q00","Africa/Tripoli|EET CET CEST|-20 -10 -20|0121212121212121210120120|tda0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5","Africa/Tunis|CET CEST|-10 -20|0101010101010101010|hOn0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5","Africa/Windhoek|SAST CAT WAT|-20 -20 -10|01212121212121212121212121212121212121212121212121|Ndy0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|BST BDT AHST HST HDT|b0 a0 a0 a0 90|0101010101010101010101010101234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|Kd0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AHST AHDT YST AKST AKDT|a0 90 90 90 80|0101010101010101010101010101234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|Kc0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Puerto_Rico|AST|40|0||24e5","America/Araguaina|-03 -02|30 20|01010101010101010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4","America/Argentina/Buenos_Aires|-03 -02|30 20|01010101010101010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Catamarca|-03 -02 -04|30 20 40|01010101210102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Cordoba|-03 -02 -04|30 20 40|01010101210101010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Jujuy|-03 -02 -04|30 20 40|010101202101010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0","America/Argentina/La_Rioja|-03 -02 -04|30 20 40|010101012010102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Mendoza|-03 -02 -04|30 20 40|01010120202102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0","America/Argentina/Rio_Gallegos|-03 -02 -04|30 20 40|01010101010102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Salta|-03 -02 -04|30 20 40|010101012101010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0","America/Argentina/San_Juan|-03 -02 -04|30 20 40|010101012010102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0","America/Argentina/San_Luis|-03 -02 -04|30 20 40|010101202020102020|9Rf0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0","America/Argentina/Tucuman|-03 -02 -04|30 20 40|0101010121010201010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0","America/Argentina/Ushuaia|-03 -02 -04|30 20 40|01010101010102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0","America/Asuncion|-04 -03|40 30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|6FE0 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0|28e5","America/Panama|EST|50|0||15e5","America/Bahia_Banderas|PST MST MDT CDT CST|80 70 60 50 60|012121212121212121212121212121343434343434343434343434343434343434343434|80 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|84e3","America/Bahia|-03 -02|30 20|010101010101010101010101010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5","America/Barbados|AST ADT|40 30|010101010|i7G0 IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4","America/Belem|-03 -02|30 20|0101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0|20e5","America/Belize|CST CDT|60 50|01010|9xG0 qn0 lxB0 mn0|57e3","America/Boa_Vista|-04 -03|40 30|01010101010|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2","America/Bogota|-05 -04|50 40|010|Snh0 2en0|90e5","America/Boise|MST MDT|70 60|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4","America/Cambridge_Bay|MST MDT CST CDT EST|70 60 60 50 50|01010101010101010101010101010101010101012342101010101010101010101010101010101010101010101010101010101010|p7J0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2","America/Campo_Grande|-04 -03|40 30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0|77e4","America/Cancun|CST EST EDT CDT|60 50 40 50|012121230303030303030303030303030303030301|t9G0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|-04 -0430|40 4u|010|1wmv0 kqo0|29e5","America/Cayenne|-03|30|0||58e3","America/Chicago|CST CDT|60 50|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K80 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|CST CDT MDT MST|60 50 60 70|01010232323232323232323232323232323232323232323232323232323232323232323|13Vk0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|81e4","America/Costa_Rica|CST CDT|60 50|010101010|mgS0 Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5","America/Phoenix|MST|70|0||42e5","America/Cuiaba|-04 -03|40 30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0|54e4","America/Danmarkshavn|-03 -02 GMT|30 20 0|0101010101010101010101010101010102|oXh0 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8","America/Dawson_Creek|PST PDT MST|80 70 70|0101012|Ka0 1cL0 1cN0 1fz0 1cN0 ML0|12e3","America/Dawson|YST PST PDT|90 80 70|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|9ix0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2","America/Denver|MST MDT|70 60|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Detroit|EST EDT|50 40|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|85H0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5","America/Edmonton|MST MDT|70 60|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|5E90 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5","America/Eirunepe|-05 -04|50 40|01010101010|CxF0 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3","America/El_Salvador|CST CDT|60 50|01010|Gcu0 WL0 1qN0 WL0|11e5","America/Tijuana|PST PDT|80 70|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|fmy0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5","America/Fort_Nelson|PST PDT MST|80 70 70|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Fort_Wayne|EST EDT|50 40|01010101010101010101010101010101010101010101010101010|K70 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Fortaleza|-03 -02|30 20|01010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5","America/Glace_Bay|AST ADT|40 30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|5E60 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","America/Godthab|-03 -02|30 20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXh0 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e3","America/Goose_Bay|AST ADT ADDT|40 30 20|010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K60 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2","America/Grand_Turk|EST EDT AST|50 40 40|01010101010101010101010101010101010101010101010101010101010101010101010101210101010101010101010101010|mG70 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Guatemala|CST CDT|60 50|010101010|9tG0 An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5","America/Guayaquil|-05 -04|50 40|010|TKR0 rz0|27e5","America/Guyana|-0345 -03 -04|3J 30 40|012|dyPJ Bxbf|80e4","America/Halifax|AST ADT|40 30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K60 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Havana|CST CDT|50 40|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K50 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Hermosillo|PST MST MDT|80 70 60|01212121|80 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4","America/Indiana/Knox|CST CDT EST|60 50 50|01010101010101010101010101010101010101010101210101010101010101010101010101010101010101010101010|K80 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Marengo|EST EDT CDT|50 40 50|010101010201010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Petersburg|CST CDT EST EDT|60 50 50 40|0101010101010101210123232323232323232323232323232323232323232323232|K80 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Tell_City|EST EDT CDT CST|50 40 50 60|01023232323232323232323232323232323232323232323232323|K70 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vevay|EST EDT|50 40|010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vincennes|EST EDT CDT CST|50 40 50 60|01023201010101010101010101010101010101010101010101010|K70 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Winamac|EST EDT CDT CST|50 40 50 60|01023101010101010101010101010101010101010101010101010|K70 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Inuvik|PST MST MDT|80 70 60|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|mGa0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2","America/Iqaluit|EST EDT CST CDT|50 40 60 50|0101010101010101010101010101010101010101230101010101010101010101010101010101010101010101010101010101010|p7H0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2","America/Jamaica|EST EDT|50 40|010101010101010101010|9Kv0 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4","America/Juneau|PST PDT YDT YST AKST AKDT|80 70 80 90 90 80|0101010101010101010102010101345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3","America/Kentucky/Louisville|EST EDT CDT|50 40 50|010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Kentucky/Monticello|CST CDT EST EDT|60 50 50 40|010101010101010101010101010101010101010101010101010101010101012323232323232323232323232323232323232323232323232323232323232|K80 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/La_Paz|-04|40|0||19e5","America/Lima|-05 -04|50 40|010101010|CVF0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6","America/Los_Angeles|PST PDT|80 70|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/Maceio|-03 -02|30 20|0101010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4","America/Managua|CST EST CDT|60 50 50|010202010102020|86u0 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5","America/Manaus|-04 -03|40 30|010101010|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5","America/Martinique|AST ADT|40 30|010|oXg0 19X0|39e4","America/Matamoros|CST CDT|60 50|0101010101010101010101010101010101010101010101010101010101010101010101010|IqU0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4","America/Mazatlan|PST MST MDT|80 70 60|012121212121212121212121212121212121212121212121212121212121212121212121|80 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|44e4","America/Menominee|EST CDT CST|50 50 60|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|85H0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2","America/Merida|CST EST CDT|60 50 50|0102020202020202020202020202020202020202020202020202020202020202020202020|t9G0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|11e5","America/Metlakatla|PST PDT AKST AKDT|80 70 90 80|0101010101010101010101010101023232302323232323232323232323232|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Mexico_City|CST CDT|60 50|01010101010101010101010101010101010101010101010101010101010101010101010|13Vk0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|20e6","America/Miquelon|AST -03 -02|40 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|p9g0 gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Moncton|AST ADT|40 30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K60 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3","America/Monterrey|CST CDT|60 50|0101010101010101010101010101010101010101010101010101010101010101010101010|IqU0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|41e5","America/Montevideo|-03 -02 -0130 -0230|30 20 1u 2u|0101023010101010101010101010101010101010101010101010|JD0 jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Toronto|EST EDT|50 40|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5","America/New_York|EST EDT|50 40|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Nipigon|EST EDT|50 40|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|avj0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2","America/Nome|BST BDT YST AKST AKDT|b0 a0 90 90 80|0101010101010101010101010101234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|Kd0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2","America/Noronha|-02 -01|20 10|01010101010101010|CxC0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2","America/North_Dakota/Beulah|MST MDT CST CDT|70 60 60 50|010101010101010101010101010101010101010101010101010101010101010101010101010101010123232323232323232323232323232323232323232|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/Center|MST MDT CST CDT|70 60 60 50|010101010101010101010101010101010101010101010123232323232323232323232323232323232323232323232323232323232323232323232323232|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/New_Salem|MST MDT CST CDT|70 60 60 50|010101010101010101010101010101010101010101010101010101010101010101012323232323232323232323232323232323232323232323232323232|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Ojinaga|CST CDT MDT MST|60 50 60 70|01010232323232323232323232323232323232323232323232323232323232323232323|13Vk0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Pangnirtung|AST ADT EDT EST CST CDT|40 30 40 50 60 50|0101010101010101010101010101010232323232453232323232323232323232323232323232323232323232323232323232323|p7G0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Paramaribo|-0330 -03|3u 30|01|zSPu|24e4","America/Port-au-Prince|EST EDT|50 40|01010101010101010101010101010101010101010101010101010101010101010101010|wu50 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Rio_Branco|-05 -04|50 40|010101010|CxF0 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4","America/Porto_Velho|-04 -03|40 30|0101010|CxE0 Rb0 1tB0 IL0 1Fd0 FX0|37e4","America/Punta_Arenas|-03 -04|30 40|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|yP0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0","America/Rainy_River|CST CDT|60 50|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|avk0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842","America/Rankin_Inlet|CST CDT EST|60 50 50|0101010101010101010101010101010101010101012101010101010101010101010101010101010101010101010101010101010|p7I0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2","America/Recife|-03 -02|30 20|01010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5","America/Regina|CST|60|0||19e4","America/Resolute|CST CDT EST|60 50 50|0101010101010101010101010101010101010101012101010101012101010101010101010101010101010101010101010101010|p7I0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229","America/Santarem|-04 -03|40 30|01010101|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4","America/Santiago|-03 -04|30 40|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|yP0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|62e5","America/Santo_Domingo|-0430 EST AST|4u 50 40|0101010101212|ksu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5","America/Sao_Paulo|-03 -02|30 20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0|20e6","America/Scoresbysund|-02 -01 +00|20 10 0|0102121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|oXg0 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|452","America/Sitka|PST PDT YST AKST AKDT|80 70 90 90 80|0101010101010101010101010101234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2","America/St_Johns|NST NDT NDDT|3u 2u 1u|010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K5u 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Swift_Current|MST CST|70 60|01|5E90|16e3","America/Tegucigalpa|CST CDT|60 50|0101010|Gcu0 WL0 1qN0 WL0 GRd0 AL0|11e5","America/Thule|AST ADT|40 30|010101010101010101010101010101010101010101010101010101010101010101010101010101010|PHG0 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656","America/Thunder_Bay|EST EDT|50 40|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Vancouver|PST PDT|80 70|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Whitehorse|PST PDT|80 70|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|p7K0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Winnipeg|CST CDT|60 50|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K80 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4","America/Yakutat|YST YDT AKST AKDT|90 80 90 80|0101010101010101010101010101023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|Kb0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642","America/Yellowknife|MST MDT|70 60|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|p7J0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","Antarctica/Casey|+08 +11|-80 -b0|0101010|1ARS0 T90 40P0 KL0 blz0 3m10|10","Antarctica/Davis|+07 +05|-70 -50|01010|1ART0 VB0 3Wn0 KN0|70","Pacific/Port_Moresby|+10|-a0|0||25e4","Antarctica/Macquarie|AEDT AEST +11|-b0 -a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010102|qg0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1","Antarctica/Mawson|+06 +05|-60 -50|01|1ARU0|60","Pacific/Auckland|NZST NZDT|-c0 -d0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|bKC0 IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00|14e5","Antarctica/Palmer|-03 -02 -04|30 20 40|01020202020202020202020202020202020202020202020202020202020202020202020|9Rf0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","Antarctica/Rothera|-00 -03|0 30|01|gOo0|130","Asia/Riyadh|+03|-30|0||57e5","Antarctica/Troll|-00 +00 +02|0 0 -20|012121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|40","Asia/Urumqi|+06|-60|0||32e5","Europe/Berlin|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXd0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|41e5","Asia/Almaty|+06 +07 +05|-60 -70 -50|0101010101010101010102010101010101010101010101010|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5","Asia/Amman|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|8kK0 KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|25e5","Asia/Anadyr|+13 +14 +12 +11|-d0 -e0 -c0 -b0|010202020202020202023202020202020202020202020202020202020232|rmX0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3","Asia/Aqtau|+05 +06 +04|-50 -60 -40|0101010101010101010201010120202020202020202020|sAj0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4","Asia/Aqtobe|+05 +06 +04|-50 -60 -40|01010101010101010102010101010101010101010101010|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4","Asia/Ashgabat|+05 +06 +04|-50 -60 -40|01010101010101010101020|rn70 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4","Asia/Atyrau|+05 +06 +04|-50 -60 -40|010101010101010101020101010101010102020202020|sAj0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0","Asia/Baghdad|+03 +04|-30 -40|01010101010101010101010101010101010101010101010101010|u190 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5","Asia/Qatar|+04 +03|-40 -30|01|5QI0|96e4","Asia/Baku|+04 +05 +03|-40 -50 -30|010101010101010101010201010101010101010101010101010101010101010|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|+07|-70|0||15e6","Asia/Barnaul|+07 +08 +06|-70 -80 -60|01010101010101010101020101010102020202020202020202020202020202020|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Asia/Beirut|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|61a0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|22e5","Asia/Bishkek|+06 +07 +05|-60 -70 -50|0101010101010101010102020202020202020202020202020|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4","Asia/Brunei|+08|-80|0||42e4","Asia/Kolkata|IST|-5u|0||15e6","Asia/Chita|+09 +10 +08|-90 -a0 -80|0101010101010101010102010101010101010101010101010101010101010120|rn30 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4","Asia/Choibalsan|+07 +08 +10 +09|-70 -80 -a0 -90|012323232323232323232323232323232323232323232313131|jsF0 cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3","Asia/Shanghai|CST CDT|-80 -90|0101010101010|DKG0 Rb0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6","Asia/Colombo|+0530 +0630 +06|-5u -6u -60|0120|14giu 11zu n3cu|22e5","Asia/Dhaka|+06 +07|-60 -70|010|1A5R0 1i00|16e6","Asia/Damascus|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|M00 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0|26e5","Asia/Dili|+09 +08|-90 -80|010|fpr0 Xld0|19e4","Asia/Dubai|+04|-40|0||39e5","Asia/Dushanbe|+06 +07 +05|-60 -70 -50|0101010101010101010102|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4","Asia/Famagusta|EET EEST +03|-20 -30 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101012010101010101010101010101010|cPa0 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00","Asia/Gaza|IST IDT EET EEST|-20 -30 -20 -30|010101010101010101010101010101023232323232323232323232323232323232323232323232323232323232323232323232|aXa0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|18e5","Asia/Hebron|IST IDT EET EEST|-20 -30 -20 -30|01010101010101010101010101010102323232323232323232323232323232323232323232323232323232323232323232323232|aXa0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|25e4","Asia/Ho_Chi_Minh|+08 +07|-80 -70|01|dfs0|90e5","Asia/Hong_Kong|HKT HKST|-80 -90|01010101010101010|H7u 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5","Asia/Hovd|+06 +07 +08|-60 -70 -80|01212121212121212121212121212121212121212121212121|jsG0 cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|+08 +09 +07|-80 -90 -70|010101010101010101010201010101010101010101010101010101010101010|rn40 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Europe/Istanbul|EET EEST +04 +03|-20 -30 -40 -30|01010101010101010123232323231010101010101010101010101010101010101010101010101010101010101013|MK0 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|WIB|-70|0||31e6","Asia/Jayapura|WIT|-90|0||26e4","Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|aXa0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0|81e4","Asia/Kabul|+0430|-4u|0||46e5","Asia/Kamchatka|+12 +13 +11|-c0 -d0 -b0|0101010101010101010102010101010101010101010101010101010101020|rn00 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4","Asia/Karachi|+05 PKT PKST|-50 -50 -60|01212121|2Xv0 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6","Asia/Kathmandu|+0530 +0545|-5u -5J|01|CVuu|12e5","Asia/Khandyga|+09 +10 +08 +11|-90 -a0 -80 -b0|01010101010101010101020101010101010101010101010131313131313131310|rn30 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2","Asia/Krasnoyarsk|+07 +08 +06|-70 -80 -60|010101010101010101010201010101010101010101010101010101010101010|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Asia/Kuala_Lumpur|+0730 +08|-7u -80|01|td4u|71e5","Asia/Macau|CST CDT|-80 -90|01010101010101010|H7u 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|57e4","Asia/Magadan|+11 +12 +10|-b0 -c0 -a0|0101010101010101010102010101010101010101010101010101010101010120|rn10 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3","Asia/Makassar|WITA|-80|0||15e5","Asia/Manila|PST PDT|-80 -90|010|k0E0 1db0|24e6","Asia/Nicosia|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|cPa0 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|32e4","Asia/Novokuznetsk|+07 +08 +06|-70 -80 -60|0101010101010101010102010101010101010101010101010101010101020|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4","Asia/Novosibirsk|+07 +08 +06|-70 -80 -60|01010101010101010101020101020202020202020202020202020202020202020|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5","Asia/Omsk|+06 +07 +05|-60 -70 -50|010101010101010101010201010101010101010101010101010101010101010|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5","Asia/Oral|+05 +06 +04|-50 -60 -40|010101010101010202020202020202020202020202020|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4","Asia/Pontianak|WITA WIB|-80 -70|01|HNs0|23e4","Asia/Pyongyang|KST KST|-90 -8u|010|1P4D0 6BA0|29e5","Asia/Qostanay|+05 +06 +04|-50 -60 -40|0101010101010101010201010101010101010101010101|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0","Asia/Qyzylorda|+05 +06|-50 -60|010101010101010101010101010101010101010101010|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 zQl0|73e4","Asia/Rangoon|+0630|-6u|0||48e5","Asia/Sakhalin|+11 +12 +10|-b0 -c0 -a0|010101010101010101010201010101010202020202020202020202020202020|rn10 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4","Asia/Samarkand|+05 +06|-50 -60|010101010101010101010|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4","Asia/Seoul|KST KDT|-90 -a0|01010|Gf50 11A0 1o00 11A0|23e6","Asia/Srednekolymsk|+11 +12 +10|-b0 -c0 -a0|010101010101010101010201010101010101010101010101010101010101010|rn10 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2","Asia/Taipei|CST CDT|-80 -90|0101010|akg0 1db0 1cN0 1db0 97B0 AL0|74e5","Asia/Tashkent|+06 +07 +05|-60 -70 -50|0101010101010101010102|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5","Asia/Tbilisi|+04 +05 +03|-40 -50 -30|01010101010101010101020202010101010101010101020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5","Asia/Tehran|+0330 +04 +05 +0430|-3u -40 -50 -4u|0121030303030303030303030303030303030303030303030303030303030303030303030303030303030|j4ku TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0|14e6","Asia/Thimphu|+0530 +06|-5u -60|01|HcGu|79e3","Asia/Tokyo|JST|-90|0||38e6","Asia/Tomsk|+07 +08 +06|-70 -80 -60|01010101010101010101020101010101010101010101020202020202020202020|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5","Asia/Ulaanbaatar|+07 +08 +09|-70 -80 -90|01212121212121212121212121212121212121212121212121|jsF0 cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5","Asia/Ust-Nera|+09 +12 +11 +10|-90 -c0 -b0 -a0|0121212121212121212123212121212121212121212121212121212121212123|rn30 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2","Asia/Vladivostok|+10 +11 +09|-a0 -b0 -90|010101010101010101010201010101010101010101010101010101010101010|rn20 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Asia/Yakutsk|+09 +10 +08|-90 -a0 -80|010101010101010101010201010101010101010101010101010101010101010|rn30 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4","Asia/Yekaterinburg|+05 +06 +04|-50 -60 -40|010101010101010101010201010101010101010101010101010101010101010|rn70 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5","Asia/Yerevan|+04 +05 +03|-40 -50 -30|01010101010101010101020202020101010101010101010101010101010|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5","Atlantic/Azores|-01 +00 WET|10 0 0|0101010101010101010101010101010121010101010101010101010101010101010101010101010101010101010101010101010101010|hAN0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|25e4","Atlantic/Bermuda|AST ADT|40 30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|avi0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3","Atlantic/Canary|WET WEST|0 -10|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXc0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|54e4","Atlantic/Cape_Verde|-02 -01|20 10|01|elE0|50e4","Atlantic/Faroe|WET WEST|0 -10|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|rm10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|49e3","Atlantic/Madeira|WET WEST|0 -10|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hAM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|27e4","Atlantic/South_Georgia|-02|20|0||30","Atlantic/Stanley|-04 -03 -02|40 30 20|01212101010101010101010101010101010101010101010101010101|wrg0 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2","Australia/Sydney|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r40 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|40e5","Australia/Adelaide|ACST ACDT|-9u -au|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r4u LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|11e5","Australia/Brisbane|AEST AEDT|-a0 -b0|010101010|4r40 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5","Australia/Broken_Hill|ACST ACDT|-9u -au|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r4u LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|18e3","Australia/Currie|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r40 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|746","Australia/Darwin|ACST|-9u|0||12e4","Australia/Eucla|+0845 +0945|-8J -9J|0101010101010|bHRf Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368","Australia/Hobart|AEDT AEST|-b0 -a0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|qg0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|21e4","Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|01212121213131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu|347","Australia/Lindeman|AEST AEDT|-a0 -b0|0101010101010|4r40 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10","Australia/Melbourne|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r40 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|39e5","Australia/Perth|AWST AWDT|-80 -90|0101010101010|bHS0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5","Europe/Brussels|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|21e5","Pacific/Easter|-06 -07 -05|60 70 50|010101010101010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202|yP0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|30e2","EET|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00","Europe/Dublin|IST GMT|-10 0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4re0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5","Etc/GMT-1|+01|-10|0|","Pacific/Guadalcanal|+11|-b0|0||11e4","Pacific/Tarawa|+12|-c0|0||29e3","Etc/GMT-13|+13|-d0|0|","Etc/GMT-14|+14|-e0|0|","Etc/GMT-2|+02|-20|0|","Indian/Maldives|+05|-50|0||35e4","Pacific/Palau|+09|-90|0||21e3","Etc/GMT+1|-01|10|0|","Pacific/Tahiti|-10|a0|0||18e4","Etc/GMT+11|-11|b0|0|","Etc/GMT+12|-12|c0|0|","Etc/GMT+5|-05|50|0|","Etc/GMT+6|-06|60|0|","Etc/GMT+7|-07|70|0|","Etc/GMT+8|-08|80|0|","Pacific/Gambier|-09|90|0||125","Etc/UTC|UTC|0|0|","Europe/Andorra|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|B7d0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|79e3","Europe/Astrakhan|+04 +05 +03|-40 -50 -30|0101010101010101020202020202020202020202020202020202020202020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|10e5","Europe/Athens|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|cOK0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|35e5","Europe/London|BST GMT|-10 0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4re0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|10e6","Europe/Belgrade|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|wdd0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5","Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|muN0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|13e5","Europe/Bucharest|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|mRa0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|19e5","Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXc0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e5","Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|rm10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|38e4","Europe/Chisinau|MSK MSD EEST EET|-30 -40 -30 -20|010101010101010101012323232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|67e4","Europe/Gibraltar|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|tLB0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|30e3","Europe/Helsinki|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|rm00 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5","Europe/Kaliningrad|MSK MSD EEST EET +03|-30 -40 -30 -20 -30|010101010101010102323232323232323232323232323232323232323232343|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4","Europe/Kiev|MSK MSD EEST EET|-30 -40 -30 -20|0101010101010101010123232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|34e5","Europe/Kirov|+04 +05 +03|-40 -50 -30|010101010101010102020202020202020202020202020202020202020202|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4","Europe/Lisbon|CET WET WEST CEST|-10 0 -10 -20|01212121212121212121212121212121203030302121212121212121212121212121212121212121212121212121212121212121212121|go00 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|27e5","Europe/Madrid|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|apy0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|62e5","Europe/Malta|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|XX0 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|42e4","Europe/Minsk|MSK MSD EEST EET +03|-30 -40 -30 -20 -30|010101010101010101023232323232323232323232323232323232323234|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5","Europe/Paris|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|fbc0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|11e6","Europe/Moscow|MSK MSD EEST EET MSK|-30 -40 -30 -20 -40|0101010101010101010102301010101010101010101010101010101010101040|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6","Europe/Riga|MSK MSD EEST EET|-30 -40 -30 -20|010101010101010102323232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|64e4","Europe/Rome|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|XX0 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|39e5","Europe/Samara|+04 +05 +03|-40 -50 -30|01010101010101010202010101010101010101010101010101010101020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5","Europe/Saratov|+04 +05 +03|-40 -50 -30|0101010101010102020202020202020202020202020202020202020202020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810","Europe/Simferopol|MSK MSD EET EEST MSK|-30 -40 -20 -30 -40|0101010101010101010232323101010323232323232323232323232323232323240|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4","Europe/Sofia|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|muJ0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5","Europe/Tallinn|MSK MSD EEST EET|-30 -40 -30 -20|0101010101010101023232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|41e4","Europe/Tirane|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|axz0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|42e4","Europe/Ulyanovsk|+04 +05 +03 +02|-40 -50 -30 -20|010101010101010102023202020202020202020202020202020202020202020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|13e5","Europe/Uzhgorod|MSK MSD CET EET EEST|-30 -40 -10 -20 -30|010101010101010101023434343434343434343434343434343434343434343434343434343434343434343434343434343|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|11e4","Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXb0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|18e5","Europe/Vilnius|MSK MSD EEST EET CEST CET|-30 -40 -30 -20 -20 -10|01010101010101010232323232323232323454323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|54e4","Europe/Volgograd|+04 +05 +03|-40 -50 -30|0101010101010102020202020202020202020202020202020202020202020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 9Jd0|10e5","Europe/Warsaw|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e5","Europe/Zaporozhye|MSK MSD EEST EET|-30 -40 -30 -20|01010101010101010101023232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|77e4","Pacific/Honolulu|HST|a0|0||37e4","Indian/Chagos|+05 +06|-50 -60|01|13ij0|30e2","Indian/Mauritius|+04 +05|-40 -50|01010|v5U0 14L0 12kr0 11z0|15e4","Pacific/Kwajalein|-12 +12|c0 -c0|01|Vxo0|14e3","MET|MET MEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00","Pacific/Chatham|+1245 +1345|-cJ -dJ|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|bKC0 IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00|600","Pacific/Apia|-11 -10 +14 +13|b0 a0 -e0 -d0|0101232323232323232323232323232323232323232|1Dbn0 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00|37e3","Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4","Pacific/Efate|+11 +12|-b0 -c0|010101010101010101010|xpN0 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3","Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1","Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483","Pacific/Fiji|+12 +13|-c0 -d0|010101010101010101010101010101010101010101010101|1ace0 LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0|88e4","Pacific/Galapagos|-05 -06|50 60|0101|CVF0 gNd0 rz0|25e3","Pacific/Guam|GST GDT ChST|-a0 -b0 -a0|010101010102|JQ0 Rb0 1wp0 Rb0 5xd0 rX0 5sN0 zb1 1C0X On0 ULb0|17e4","Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2","Pacific/Kosrae|+12 +11|-c0 -b0|01|1aAA0|66e2","Pacific/Marquesas|-0930|9u|0||86e2","Pacific/Pago_Pago|SST|b0|0||37e2","Pacific/Nauru|+1130 +12|-bu -c0|01|maCu|10e3","Pacific/Niue|-1130 -11|bu b0|01|libu|12e2","Pacific/Norfolk|+1130 +1230 +11|-bu -cu -b0|0102|bHOu On0 1COp0|25e4","Pacific/Noumea|+11 +12|-b0 -c0|0101010|jhp0 xX0 1PB0 yn0 HeP0 Ao0|98e3","Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56","Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3","Pacific/Tongatapu|+13 +14|-d0 -e0|010101010|1csd0 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3","WET|WET WEST|0 -10|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00"],links:["Africa/Abidjan|Africa/Accra","Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|Atlantic/Reykjavik","Africa/Abidjan|Atlantic/St_Helena","Africa/Abidjan|Etc/GMT","Africa/Abidjan|Etc/GMT+0","Africa/Abidjan|Etc/GMT-0","Africa/Abidjan|Etc/GMT0","Africa/Abidjan|Etc/Greenwich","Africa/Abidjan|GMT","Africa/Abidjan|GMT+0","Africa/Abidjan|GMT-0","Africa/Abidjan|GMT0","Africa/Abidjan|Greenwich","Africa/Abidjan|Iceland","Africa/Cairo|Egypt","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|US/Alaska","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Catamarca|America/Argentina/ComodRivadavia","America/Argentina/Catamarca|America/Catamarca","America/Argentina/Cordoba|America/Cordoba","America/Argentina/Cordoba|America/Rosario","America/Argentina/Jujuy|America/Jujuy","America/Argentina/Mendoza|America/Mendoza","America/Cayenne|Etc/GMT+3","America/Chicago|CST6CDT","America/Chicago|US/Central","America/Denver|America/Shiprock","America/Denver|MST7MDT","America/Denver|Navajo","America/Denver|US/Mountain","America/Detroit|US/Michigan","America/Edmonton|Canada/Mountain","America/Fort_Wayne|America/Indiana/Indianapolis","America/Fort_Wayne|America/Indianapolis","America/Fort_Wayne|US/East-Indiana","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Indiana/Knox|America/Knox_IN","America/Indiana/Knox|US/Indiana-Starke","America/Jamaica|Jamaica","America/Kentucky/Louisville|America/Louisville","America/La_Paz|Etc/GMT+4","America/Los_Angeles|PST8PDT","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Manaus|Brazil/West","America/Mazatlan|Mexico/BajaSur","America/Mexico_City|Mexico/General","America/New_York|EST5EDT","America/New_York|US/Eastern","America/Noronha|Brazil/DeNoronha","America/Panama|America/Atikokan","America/Panama|America/Cayman","America/Panama|America/Coral_Harbour","America/Panama|EST","America/Phoenix|America/Creston","America/Phoenix|MST","America/Phoenix|US/Arizona","America/Puerto_Rico|America/Anguilla","America/Puerto_Rico|America/Antigua","America/Puerto_Rico|America/Aruba","America/Puerto_Rico|America/Blanc-Sablon","America/Puerto_Rico|America/Curacao","America/Puerto_Rico|America/Dominica","America/Puerto_Rico|America/Grenada","America/Puerto_Rico|America/Guadeloupe","America/Puerto_Rico|America/Kralendijk","America/Puerto_Rico|America/Lower_Princes","America/Puerto_Rico|America/Marigot","America/Puerto_Rico|America/Montserrat","America/Puerto_Rico|America/Port_of_Spain","America/Puerto_Rico|America/St_Barthelemy","America/Puerto_Rico|America/St_Kitts","America/Puerto_Rico|America/St_Lucia","America/Puerto_Rico|America/St_Thomas","America/Puerto_Rico|America/St_Vincent","America/Puerto_Rico|America/Tortola","America/Puerto_Rico|America/Virgin","America/Regina|Canada/Saskatchewan","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Tijuana|America/Ensenada","America/Tijuana|America/Santa_Isabel","America/Tijuana|Mexico/BajaNorte","America/Toronto|America/Montreal","America/Toronto|America/Nassau","America/Toronto|Canada/Eastern","America/Vancouver|Canada/Pacific","America/Whitehorse|Canada/Yukon","America/Winnipeg|Canada/Central","Asia/Ashgabat|Asia/Ashkhabad","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Vientiane","Asia/Bangkok|Etc/GMT-7","Asia/Bangkok|Indian/Christmas","Asia/Brunei|Asia/Kuching","Asia/Brunei|Etc/GMT-8","Asia/Dhaka|Asia/Dacca","Asia/Dubai|Asia/Muscat","Asia/Dubai|Etc/GMT-4","Asia/Dubai|Indian/Mahe","Asia/Dubai|Indian/Reunion","Asia/Ho_Chi_Minh|Asia/Saigon","Asia/Hong_Kong|Hongkong","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Singapore","Asia/Macau|Asia/Macao","Asia/Makassar|Asia/Ujung_Pandang","Asia/Nicosia|Europe/Nicosia","Asia/Qatar|Asia/Bahrain","Asia/Rangoon|Asia/Yangon","Asia/Rangoon|Indian/Cocos","Asia/Riyadh|Antarctica/Syowa","Asia/Riyadh|Asia/Aden","Asia/Riyadh|Asia/Kuwait","Asia/Riyadh|Etc/GMT-3","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|PRC","Asia/Taipei|ROC","Asia/Tehran|Iran","Asia/Thimphu|Asia/Thimbu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Urumqi|Antarctica/Vostok","Asia/Urumqi|Asia/Kashgar","Asia/Urumqi|Etc/GMT-6","Atlantic/Faroe|Atlantic/Faeroe","Atlantic/South_Georgia|Etc/GMT+2","Australia/Adelaide|Australia/South","Australia/Brisbane|Australia/Queensland","Australia/Broken_Hill|Australia/Yancowinna","Australia/Darwin|Australia/North","Australia/Hobart|Australia/Tasmania","Australia/Lord_Howe|Australia/LHI","Australia/Melbourne|Australia/Victoria","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/NSW","Etc/UTC|Etc/UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UCT","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Belgrade|Europe/Ljubljana","Europe/Belgrade|Europe/Podgorica","Europe/Belgrade|Europe/Sarajevo","Europe/Belgrade|Europe/Skopje","Europe/Belgrade|Europe/Zagreb","Europe/Berlin|Arctic/Longyearbyen","Europe/Berlin|Atlantic/Jan_Mayen","Europe/Berlin|Europe/Copenhagen","Europe/Berlin|Europe/Oslo","Europe/Berlin|Europe/Stockholm","Europe/Brussels|CET","Europe/Brussels|Europe/Amsterdam","Europe/Brussels|Europe/Luxembourg","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Helsinki|Europe/Mariehamn","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Portugal","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Paris|Europe/Monaco","Europe/Prague|Europe/Bratislava","Europe/Rome|Europe/San_Marino","Europe/Rome|Europe/Vatican","Europe/Warsaw|Poland","Europe/Zurich|Europe/Busingen","Europe/Zurich|Europe/Vaduz","Indian/Maldives|Etc/GMT-5","Indian/Maldives|Indian/Kerguelen","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Gambier|Etc/GMT+9","Pacific/Guadalcanal|Etc/GMT-11","Pacific/Guadalcanal|Pacific/Pohnpei","Pacific/Guadalcanal|Pacific/Ponape","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|HST","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kwajalein|Kwajalein","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Palau|Etc/GMT-9","Pacific/Port_Moresby|Antarctica/DumontDUrville","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tahiti|Etc/GMT+10","Pacific/Tarawa|Etc/GMT-12","Pacific/Tarawa|Pacific/Funafuti","Pacific/Tarawa|Pacific/Majuro","Pacific/Tarawa|Pacific/Wake","Pacific/Tarawa|Pacific/Wallis"]}),z});
define('js/app/performance/view/reservationView',[
    "jquery",
    "underscore",
    "ticketUtil",
    "Handlebars"

], function ( $ ,underscore,ticketUtil, Handlebars
              ) {
    'use strict';

    var exports = {};


    exports.authPopTicket = function (viewType, reqUrl) {
        var width = 600;
        var height = 464;

        if(viewType=="charge") {
            height = 450;
        } else if(viewType=="nineteen") {
            height = 570;
        }

        var urlOpt = "scrollbars=auto, resizable=yes,location=no, width="+width+",height="+height+", left=20, top=20";
        window.open(reqUrl, "_REALNAME_AUTHENTICATION_POP","app_,"+urlOpt);
    }

    return {
        views:exports
    };
});
define('js/app/performance/service/performanceCommonService',[
    "jquery",
    "underscore",
    "js/app/common/model/commonModel",
    "js/common/util/commonMessageUtil",
    "ticketDomain",
    "ticketUtil",
    "js/app/performance/util/performanceUtil",
    "ticketCode",
    "js/app/performance/view/reservationView",
    "js/app/common/service/loginService"

], function ( $,underscore
              , commonModel, commonMessageUtil
              , ticketDomain, ticketUtil, pUtil, ticketCode
              , reservationView, loginService  ) {

    'use strict';

    var exports = {};

    function init( ) {

    }


    /**
     * 선예매 사용자 인증 여부 확인 함수
     *
     * @param sellCondNo
     * @param btnType
     * @param callback
     */
    exports.userAuthYn = function(paramsDto) {
        var deferred = $.Deferred();

        var sellTypeCode = paramsDto.sellTypeCode;
        var autheTypeCode = paramsDto.autheTypeCode;
        var sellCondNo = paramsDto.sellCondNo;
        var pocCode = paramsDto.pocCode;
        var prodId = paramsDto.prodId;
        var btnType = paramsDto.btnType;

        var usercond = performanceUtil.getUsercond( prodId, pocCode, sellTypeCode, sellCondNo, autheTypeCode );

        if( usercond == 'Y' ) {
            deferred.resolve({
                data:{
                    authYn : 'Y'
                }
            });
        } else {

            var ajaxCall = this.userCondAjax(paramsDto);

            ajaxCall.then(function(result) {
                var responseAuthYn = commonUtil.inputObjectValueCheck(result,['data','authYn']);
                var responseAutheTypeCode = commonUtil.inputObjectValueCheck(result,['data','autheTypeCode']);

                $("#autheTypeCode").val(responseAutheTypeCode);

                if(responseAuthYn == 'Y') {
                    performanceUtil.setUsercond(prodId, pocCode, sellTypeCode, sellCondNo, autheTypeCode, 'Y');
                }

                deferred.resolve(result);

            }, function( ) {
                deferred.reject({
                    data : {
                        authYn : 'N'
                    }
                });
            });
        }

        return deferred.promise();
    };


    /**
     * usercond API 호출 함수
     * @param paramsDto
     * @returns {any}
     */
    exports.userCondAjax = function(paramsDto) {
        var deferred = $.Deferred();

        var sellTypeCode = paramsDto.sellTypeCode;
        var autheTypeCode = paramsDto.autheTypeCode;
        var sellCondNo = paramsDto.sellCondNo;
        var pocCode = paramsDto.pocCode;
        var prodId = paramsDto.prodId;
        var btnType = paramsDto.btnType;

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/prersrv/usercond.json";
        var paramsData = {
            prodId:prodId,
            pocCode:pocCode,
            sellTypeCode:sellTypeCode,
            sellCondNo:sellCondNo,
            autheTypeCode:autheTypeCode,
            btnType:btnType,
            v:1
        };

        var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result) {
            deferred.resolve(result);
        }, function( ) {
            deferred.reject();
        });

        return deferred.promise();
    };


    /**
     * 사용자 토큰 유효성 조회 함수
     * @param paramsDto
     * @returns {any}
     */
    exports.userTokenValidation = function(paramsDto) {
        var deferred = $.Deferred();

        var sellTypeCode = paramsDto.sellTypeCode;
        var autheTypeCode = paramsDto.autheTypeCode;
        var sellCondNo = paramsDto.sellCondNo;
        var pocCode = paramsDto.pocCode;
        var prodId = paramsDto.prodId;
        var btnType = paramsDto.btnType;

        var paramsUrl = commonDomain.GLOBAL_TICKET_HTTPS + "/common/tokenCheck.json";
        var paramsData = {
            prodId:prodId
        };

        var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result) {
            deferred.resolve(result);
        }, function( ) {
            deferred.reject();
        });

        return deferred.promise();
    };

    /**
     * 본인인증 확인 함수
     * @param paramsDto
     * @returns {any}
     */
    exports.checkRealName = function(params) {
        var deferred = $.Deferred();
        var gradeCode = params.gradeCode;

        _authIdentityVerificationAjaxCall(deferred, _getFormParameterType(gradeCode));

        return deferred.promise();
    };

    /**
     * 본인인증 확인 함수(쿠키 체크 없음)
     * @param paramsDto
     * @returns {any}
     */
    exports.checkRealNameNoCookie = function(params) {
        var deferred = $.Deferred();
        _authIdentityVerificationAjaxCall(deferred, _getFormParameterType(params.gradeCode));

        return deferred.promise();
    };

    function _authIdentityVerificationAjaxCall(deferred, gradeCode) {
        var paramsData = {
            memberKey:getMemberKey(),
            ticketViewType:gradeCode
        };

        var paramsUrl =  gradeCode === 'adult' ?  "/api/v1/authorization/melon-member/adult.json" : "/api/v1/authorization/melon-member/identity-verification.json";

        var ajaxCall = exports.melonMemberAuthAjax(paramsData,paramsUrl);

        ajaxCall.then(function(result) {
            var resultCode = commonUtil.inputObjectValueCheck(result,['result','code']);

            if( resultCode == "1" ) {
                var authUrl = commonUtil.inputObjectValueCheck(result,['responseData','authUrl']);
                var isAuth = commonUtil.inputObjectValueCheck(result,['responseData','auth']);
                var viewType = commonUtil.inputObjectValueCheck(result,['responseData','viewType']);

                deferred.resolve({
                    authUrl : authUrl,
                    viewType : viewType,
                    isAuth : isAuth,
                    isPopupOpen : true
                });
            } else {
                _authResponsePrint(result);
            }
        }, function( ) {
            deferred.reject();
        });
    }


    /**
     * 성인/본인 인증 팝업 출력
     * @param result
     */
    exports.identityVerificationProcess = function( result ) {
        var reqUrl = commonUtil.inputObjectValueCheck(result,['authUrl']);
        var viewType = commonUtil.inputObjectValueCheck(result,['viewType']);
        var message = commonUtil.inputObjectValueCheck(result,['message']);

        if( reqUrl != "") {  //본인 인증 팝업
            reservationView.views.authPopTicket(viewType, reqUrl);
        } else {
            alert(message);
        }
    };

    /**
     * 본인/성인 인증 API 호출
     */
    exports.melonMemberAuthAjax = function( paramsData, paramsUrl ) {
        var deferred = $.Deferred();

        var memberKey = paramsData.memberKey;
        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + paramsUrl;

        var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result) {
            deferred.resolve(result);
        }, function( ) {
            deferred.reject();
        });

        return deferred.promise();
    };


    /**
     * 성인인증 로직
     * @returns {*}
     */
    exports.adultAuthProcess = function() {
        var deferred = $.Deferred();
        var message = commonMessage.melonMemberAdultAuth;

        var paramsData = {
            memberKey:getMemberKey()
        };
        var paramsUrl = "/api/v1/authorization/melon-member/adult.json";

        var ajaxCall = this.melonMemberAuthAjax(paramsData,paramsUrl);

        ajaxCall.then(function(result) {
            var resultCode = commonUtil.inputObjectValueCheck(result,['result','code']);

            if( resultCode == "1" ) {
                var authUrl = commonUtil.inputObjectValueCheck(result,['responseData','authUrl']);
                var isAuth = commonUtil.inputObjectValueCheck(result,['responseData','auth']);
                var viewType = commonUtil.inputObjectValueCheck(result,['responseData','viewType']);
                var melonMessage = commonUtil.inputObjectValueCheck(result,['responseData','message']);
                var failCodes = commonUtil.inputObjectValueCheck(result,['responseData','failCodes']);
                var popupOpen = commonUtil.inputObjectValueCheck(result,['responseData','popupOpen']);

                deferred.resolve({
                    authUrl : authUrl,
                    viewType : viewType,
                    message : melonMessage,
                    isAuth : isAuth,
                    failCodes : failCodes,
                    isPopupOpen : popupOpen
                });
            } else {
                _authResponsePrint(result);
            }
        }, function() {
            deferred.reject();
        });

        return deferred.promise();
    };

    /**
     * CI 체크
     * @param paramsDto
     * @returns {any}
     */
    exports.checkIdentity = function(paramsDto) {
        var deferred = $.Deferred();

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/poc/member/identity.json";
        var paramsData = {
            prodId:paramsDto.prodId,
            sellTypeCode:paramsDto.sellTypeCode,
            sellCondNo:paramsDto.sellCondNo,
            memberKey:getMemberKey(),
            v:1
        };

        var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result) {
            deferred.resolve(result);
        }, function( ) {
            deferred.reject();
        });

        return deferred.promise();
    };


    /**
     * 관람등급 확인 함수
     * 관람등급 19세 이상 / 19세 미만
     * 관람등급 19세 미만 : 본인인증 확인
     * 관람등급 19세 이상 : 성인인증 확인
     * @param params
     * @private
     */
    exports.reservationUserDataIdentifyProcess = function( params ) {
        var deferred = $.Deferred();
        var gradeCode = params.gradeCode;

        if ( commonCode.GRADE_CODE23 != gradeCode ) {  //관람등급 19세 미만 상품
            _under19AuthAjaxCall(deferred, params);
        } else { //관람등급 19세 이상 상품
            _adultAuthAjaxCall(deferred, params);
        }

        return deferred.promise();
    };

    function _authResponsePrint(result) {
        var resultCode = commonUtil.inputObjectValueCheck(result,['result','code']);
        var resultMessage = commonUtil.inputObjectValueCheck(result,['result','message']);

        if(resultCode == "-10") {
            loginService.service.melonPopupLogin();
            return;
        } else {
            if(resultMessage != "") {
                alert(resultMessage);
            } else {
                alert(commonMessage.melonMemberAuthDefault);
            }
        }
    }

    function _getFormParameterType(gradeCode) {
        var result = "minors";

        if(commonCode.GRADE_CODE23 == gradeCode) {
            result = "adult"
        }

        return result;
    }

    function _under19AuthAjaxCall(deferred, params) {
        var callback = exports.checkRealName(params);

        callback.then(function(result) {
            deferred.resolve(result);
        }, function( ) {
            deferred.reject();
        });
    }

    function _adultAuthAjaxCall(deferred, params) {
        var realNameCallback = exports.checkRealNameNoCookie(params);

        realNameCallback.then(function(realNameCallbackResult) {
            var isAuth = commonUtil.inputObjectValueCheck(realNameCallbackResult,['isAuth']);

            if(isAuth) { //본인인증 완료한 사용자만 성인인증 API 호출
                var adultAuthCallback = exports.adultAuthProcess();

                adultAuthCallback.then(function(adultAuthCallbackResult) {
                    deferred.resolve(adultAuthCallbackResult);
                }, function() {
                    deferred.reject();
                });
            } else { //본인인증 미완료 사용자는 본인인증 창 호출
                deferred.resolve(realNameCallbackResult);
            }
        }, function( ) {
            deferred.reject();
        });
    }


    return {
        init:init,
        service:exports
    };
});
define('js/app/performance/service/preSaleService',[
    "jquery",
    "underscore",
    "js/app/common/model/commonModel",
    "js/app/performance/service/performanceCommonService",
    "js/app/common/service/loginService",
    "js/common/util/commonMessageUtil",
    "ticketDomain",
    "ticketUtil",
    "js/app/performance/util/performanceUtil",
    "ticketCode",
    "js/common/message/commonMessage"


], function ( $,underscore
              , commonModel, performanceCommonService, loginService
              , commonMessageUtil
              , ticketDomain
              , ticketUtil
              , pUtil
              , ticketCode
              , CommonMessage


) {

    'use strict';

    var exports = {};

    /**
     * 선예매 버튼 셋팅 함수
     * @private
     */
    function init( params ) {

        var preAuthFlg = (params.preAuthFlg != null) ? params.preAuthFlg : "N";
        var $rsrvBtn = $("#resvAuthName");

        if ( preAuthFlg == "Y" && $rsrvBtn.length == 1 ) {

            var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/prersrv/authitem.json";
            var paramsData = {
                prodId:params.prodId,
                pocCode:params.pocCode,
                sellTypeCode:params.sellTypeCode,
                sellCondNo:params.sellCondNo,
                autheTypeCode:params.autheTypeCode,
                v:1
            };

            var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

            ajaxCall.then(function(result, status, xhr) {  //등급 리스트 API 호출
                var nextParamsObj = {
                    resvAuthName : commonUtil.inputObjectValueCheck( result, ['data','displayTitle'] ),
                    prodId : commonUtil.inputObjectValueCheck(result,['data','prodId']),
                    pocCode : commonUtil.inputObjectValueCheck(result,['data','pocCode']),
                    sellTypeCode : commonUtil.inputObjectValueCheck(result,['data','sellTypeCode']),
                    sellCondNo : commonUtil.inputObjectValueCheck(result,['data','sellCondNo']),
                    autheTypeCode : commonUtil.inputObjectValueCheck(result,['data','autheTypeCode']),
                    authYn : commonUtil.inputObjectValueCheck(result,['data','authYn'])
                };

                //버튼 값 셋팅
                var $preReservationBtn = $("#resvAuth");
                if($preReservationBtn.length > 0) {
                    $preReservationBtn.attr("data-prebtn-prodid",nextParamsObj.prodId);
                    $preReservationBtn.attr("data-prebtn-poccode",nextParamsObj.pocCode);
                    $preReservationBtn.attr("data-prebtn-selltypecode",nextParamsObj.sellTypeCode);
                    $preReservationBtn.attr("data-prebtn-sellcondno",nextParamsObj.sellCondNo);
                    $preReservationBtn.attr("data-prebtn-authetypecode",nextParamsObj.autheTypeCode);
                    $preReservationBtn.attr("data-prebtn-authyn",nextParamsObj.authYn);
                }

                $("#resvAuthName").text(nextParamsObj.resvAuthName);

                //예매하기 버튼 값 셋팅
                var $ticketReservationBtn = $("#ticketReservation_Btn");
                if($ticketReservationBtn.length > 0){
                    $ticketReservationBtn.attr("data-autheTypeCode",nextParamsObj.autheTypeCode);
                    $ticketReservationBtn.attr("data-authyn",nextParamsObj.authYn);
                }

            }, function( result, status, xhr ) {
                commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
            });
        }
    }

    /**
     * 선예매 대상 확인 - 예매하기 버튼
     * @param params
     */
    exports.preSaleReservationUserFind = function( params ) {
        var deferred = $.Deferred();

        var paramsDto = {
            btnType : params.btnType,
            prodId : params.prodId,
            pocCode : params.pocCode,
            sellTypeCode : params.sellTypeCode,
            sellCondNo : params.sellCondNo,
            autheTypeCode : params.autheTypeCode,
            authYn : params.authYn
        };

        var callback = performanceCommonService.service.userAuthYn(paramsDto);

        callback.then(function(result) {
            var authYn = commonUtil.inputObjectValueCheck(result,['data','authYn']);

            if (authYn == "Y") {
                deferred.resolve(authYn);
            } else {
                _preSaleReservationUserFind_fail_message(result, paramsDto);
                deferred.reject("N");
            }
        },function() {
            deferred.reject("N");
        });

        return deferred.promise();
    };


    /**
     * 선예매 대상확인 버튼 함수
     * @param paramsObj
     */
    exports.preSaleUserFind = function( params ) {
        _checkAdultAndIdentityAuth(params);
    };

    /**
     * 본인/성인 인증 체크
     * @param params
     * @private
     */
    function _checkAdultAndIdentityAuth(params) {
        var callback = performanceCommonService.service.reservationUserDataIdentifyProcess(params);

        callback.then(function(result) {
            _adultAndIdentityAuthFormPrint(result, params);
        }, function( ) {
            alert(commonMessage.melonMemberAuthDefault);
        });
    }

    /**
     * 성인/본인 인증 폼 출력
     * @param result
     * @param params
     * @private
     */
    function _adultAndIdentityAuthFormPrint(result, params) {
        var isAuth = commonUtil.inputObjectValueCheck(result,['isAuth']);
        var isPopupOpen = commonUtil.inputObjectValueCheck(result,['isPopupOpen']);
        var message = commonUtil.inputObjectValueCheck(result,['message']);

        if( isAuth ) {
            _preSaleProductProcess( params );
        } else {
            if(message != "") {
                alert(message);
            }

            if(isPopupOpen) {
                performanceCommonService.service.identityVerificationProcess(result);
            }
        }
    }


    /**
     * 예매하기 버튼
     * 선예매 사용자가 아닐 경우 메시지 출력 함수
     * @param autheTypeCode
     * @private
     */
    function _preSaleReservationUserFind_fail_message(result, paramsDto) {
        var autheTypeCode = commonUtil.inputObjectValueCheck(paramsDto,['autheTypeCode']);
        var membership = commonUtil.inputObjectValueCheck(result,['data','membership']);

        if( autheTypeCode == commonCode.AUTHE_TYPE_CODE7 ) {
            alert("선예매 대상이 아닙니다. 선택하신 회차는 현재 선예매기간으로, 멜론 유료 상품을 이용 중인 고객만 예매가 가능합니다.");
        } else if( autheTypeCode == commonCode.AUTHE_TYPE_CODE5 ) {
            alert("선예매 대상이 아닙니다. 선택하신 회차는 현재 공연예매권 선예매기간으로 공연예매권을 보유한 고객만 예매가 가능합니다.");
        } else if( autheTypeCode == commonCode.AUTHE_TYPE_CODE9 ) {
            alert("선예매 대상이 아닙니다.\n멜론 "+membership+" 회원만 선예매가 가능합니다.");
        } else {
            alert("선예매 대상이 아닙니다. 선택하신 회차는 현재 선예매기간으로, 인증된 고객만 예매가 가능합니다.");
        }
    }


    /**
     * 선예매 타입별 로직 처리 함수
     * @param params
     * @param retAutheTypeCode
     * @private
     */
    function _preSaleProductProcess( params ) {
        var authCode = params.autheTypeCode;

        var paramsDto = {
            btnType : "A",
            prodId : params.prodId,
            pocCode : params.pocCode,
            sellTypeCode : params.sellTypeCode,
            sellCondNo : params.sellCondNo,
            autheTypeCode : params.autheTypeCode,
            authYn : params.authYn
        };

        switch (authCode) {
            case commonCode.AUTHE_TYPE_CODE7:  //멜론유료회원
                _melonPaidMemberProcess(paramsDto);
                break;
            case commonCode.AUTHE_TYPE_CODE9: //멜론회원등급
                _melonMemberGradeProcess(paramsDto);
                break;
            default:  //그외 선예매 유형
                _melonMemberProcess(paramsDto);
                break;
        }
    }

    /**
     * 선예매
     * 멜론회원등급 로직 함수
     * @param paramsDto
     * @private
     */
    function _melonMemberGradeProcess(paramsDto) {
        var callback = performanceCommonService.service.userAuthYn(paramsDto);

        callback.then(function(result) {
            var authYn = commonUtil.inputObjectValueCheck(result,['data','authYn']);
            var membership = commonUtil.inputObjectValueCheck(result,['data','membership']);

            if (authYn != 'Y') {
                alert("선예매 대상이 아닙니다.\n멜론 "+membership+" 회원만 선예매가 가능합니다.");
            } else {
                alert("선예매 대상입니다.");
            }

        },function() {
            alert(commonMessage.preReservationAjaxDefaultMsg);
        });
    }

    /**
     * 선예매
     * 멜론유료회원 로직 함수
     * @param paramsDto
     * @private
     */
    function _melonPaidMemberProcess(paramsDto) {
        var callback = performanceCommonService.service.userAuthYn(paramsDto);

        callback.then(function(result) {
            var authYn = commonUtil.inputObjectValueCheck(result,['data','authYn']);

            if (authYn != 'Y') {
                alert("선예매 대상이 아닙니다. 멜론 유료회원만 선예매가 가능합니다.");
            } else {
                alert("선예매 대상입니다.");
            }
        },function() {
            alert(commonMessage.preReservationAjaxDefaultMsg);
        });
    }

    /**
     * 그외 선예매 로직 실행
     */
    function _melonMemberProcess(paramsDto) {

        var callback = performanceCommonService.service.userAuthYn(paramsDto);

        callback.then(function(result) {
            var authYn = commonUtil.inputObjectValueCheck(result,['data','authYn']);

            if (authYn == 'Y') {
                alert("선예매 대상입니다.");
            } else {
                _userAuthentication( paramsDto );
            }
        },function() {
            alert(commonMessage.preReservationAjaxDefaultMsg);
        });
    }


    /**
     * 사용자 권한 체크 함수
     * @private
     */
    function _userAuthentication(paramsDto){
        var callback = performanceCommonService.service.checkIdentity(paramsDto);

        callback.then(function(result) {
            var resultCode = commonUtil.inputObjectValueCheck(result,['resultCode']);
            var memberId = commonUtil.inputObjectValueCheck(result,['memberId']);

            if( resultCode === commonCode.EXTERNAL_SUCCESS ) {
                _preSaleInputPopupPrint(memberId, paramsDto);
            } else {
                alert(commonMessage.preReservationAjaxDefaultMsg);
            }
        }, function( ) {
            alert(commonMessage.preReservationAjaxDefaultMsg);
        });
    }

    /**
     * 선예매
     * 인증 팝업 출력 함수
     * @param memberId
     * @param paramsDto
     * @private
     */
    function _preSaleInputPopupPrint(memberId, paramsDto) {

        if( "-1" == memberId ) {
            var openUrl = commonDomain.GLOBAL_TICKET_HTTPS + "/common/popup/popResvAuth.htm";
                openUrl += "?prodId="+paramsDto.prodId+"&autheTypeCode="+paramsDto.autheTypeCode+"&sellCondNo="+paramsDto.sellCondNo;
                openUrl += "&sellTypeCode="+paramsDto.sellTypeCode+"&pocCode="+paramsDto.pocCode+"&v=1";
            var popupSize = "width=580px,height=545px";

            window.open(openUrl,"resvForm",popupSize);
        } else {
            alert("고객님이 소유하신 다른 아이디 "+ memberId +"으로 이미 사전인증을 완료하셨습니다. 본인명의의 아이디 1개만 선예매 인증이 가능합니다.");
        }
    }


    return {
        init:init,
        service:exports
    };
});
define('js/app/performance/service/calendarService',[
    "jquery",
    "underscore",
    "moment",
    "momentTimeZone",
    "ticketDomain",
    "ticketUtil",
    "ticketStringUtil",
    "ticketCode"
], function ( $,underscore,moment, momenttimezone, tktDomain, tktUtil,
              ticketStringUtil, ticketCode ) {

    'use strict';

    var exports = {};
    var _year = null;
    var _month = null;
    var _days = null;
    var _scheduleListData = null;

    function init( pOption ) {
        _year = null;
        _month = null;
        _days = pOption.activeDays;
        _scheduleListData = pOption.scheduleListData;

        // 예매 가능일이 존재하지 않을경우 기본 달력 표시
        var _ym = [], _now;

        if ( undefined === _days || 1 > _days.length ) {
            _now = new Date();
            _year = _now.getFullYear();
            _month = _now.getMonth() + 1;
        } else {
            _ym = _days[0].match(/([0-9]{4})([0-9]{2})([0-9]{2})/);
            _year = Number(_ym[1]);
            _month = Number(_ym[2]);
        }

        _draw();
        buttonInit();
    }

    /**
     * 버튼 이벤트 초기화
     */
    function buttonInit() {
        /**
         * 달력 이전달 버튼
         */
        $(document).off("click",".btn_calendar_prev")
            .on("click",".btn_calendar_prev",function(e) {
                e.preventDefault();
                var perfday = $("#list_date li.on").attr("data-perfday");

                $('#cal_wrapper').empty();
                if(_month === 1){
                    _month = 12;
                    _year = _year -1;
                }else{
                    _month = _month -1;
                }

                _draw();
                exports.scheduleDateSelectedFn( perfday );
            });

        /**
         * 달력 다음달 버튼
         */
        $(document).off("click",".btn_calendar_next")
            .on("click",".btn_calendar_next",function(e) {
                e.preventDefault();
                //현재 회차 리스트에 선택된 값 가져오기
                var perfday = $("#list_date li.on").attr("data-perfday");

                $('#cal_wrapper').empty();
                if(_month === 12){
                    _month = 1;
                    _year = _year +1;
                } else {
                    _month = _month +1;
                }

                _draw();
                exports.scheduleDateSelectedFn( perfday );
            });

        /**
         * 회차 - 일자 영역
         * 캘린더 아이콘 버튼
         */
        $(document).off("click",".type_calendar")
            .on("click",".type_calendar",function(e) {

                $(".type_calendar").removeClass("show");
                $(".type_list").removeClass("show");
                $(".type_calendar").addClass("show");

                $("#box_list_date").hide();
                $("#box_calendar").show();

                var perfday = $("#list_date li.on").attr("data-perfday");

                if ( perfday != null && perfday != "" ) {
                    $('#cal_wrapper').empty();

                    var strPerfday = String(perfday);

                    var dateCutArray = strPerfday.match(/([0-9]{4})([0-9]{2})([0-9]{2})/);
                    _year = Number(dateCutArray[1]);
                    _month = Number(dateCutArray[2]);

                    _draw();
                    exports.scheduleDateSelectedFn( perfday );
                }
            });

        /**
         * 회차 - 일자 영역
         * 일자 아이콘 버튼
         */
        $(document).off("click",".type_list")
            .on("click",".type_list",function(e) {

                $(".type_calendar").removeClass("show");
                $(".type_list").removeClass("show");
                $(".type_list").addClass("show");

                $("#box_list_date").show();
                $("#box_calendar").hide();

                var perfday = $("#list_date li.on").attr("data-perfday");

                if ( perfday != null && perfday != "" ) {
                    var scrollVal = $("#dateSelect_" + perfday).position().top;

                    $('#box_list_date').animate({
                        scrollTop: scrollVal
                    }, 400);
                }
            });
    }

    /**
     * 달력 화면 출력
     * @private
     */
    function _draw() {
        var today = new Date();
        var year = _year;
        var month = _month;
        var day = today.getDate();
        var week_start = new Date(year,month-1,1).getDay();
        var day_max = _get_day_max(year,month-1);
        var i = 0, j = 0;
        var font_weight = "";
        var _ds = [];
        var _cs = [];
        var _bs = '';

        _ds.push('<tr>');

        while ( j < day_max ) {
            _cs = [];

            if (i < week_start) {
                _ds.push('<td>&nbsp;</td>');
            } else {
                if ( i%7==0 ) {
                    _cs.push("sun");
                    _ds.push('<tr>');
                } else if (i%7==6) {
                    _cs.push("sat");
                } else {
                    _cs.push('');
                }

                if( (new Date()).getFullYear() + "" + ((new Date()).getMonth() + 1) == year +"" + month ) {
                    if (day == (j+1)) {
                        font_weight = " Bold";
                    } else {
                        font_weight = "";
                    }
                } else {
                    font_weight = "";
                }

                var _d = ('' + year + ((2 > month.toString().length ? '0' : '') + month) + (2 > (j+1).toString().length ? '0' : '')) + (j+1);

                if (-1 < _days.indexOf(_d)) {
                    _bs = '<button class="ticketCalendarBtn" data-perfday="'+_d+'" id="calendar_SelectId_'+_d+'" >'+ (j+1) +'</button>';
                } else {
                    _bs = '<button class="ticketCalendarBtn" data-perfday="'+_d+'" disabled="disabled" id="calendar_SelectId_'+_d+'">'+ (j+1) +'</button>';
                }

                _ds.push('<td class="'+_cs.join(' ')+'">'+_bs+'</td>');

                if ( i%7 == 6 ) {
                    _ds.push('</tr>');
                }
                j++;
            }
            i++;
        }

        while ( i % 7 !== 0 ) {
            _ds.push('<td>&nbsp;</td>');
            i++;
        }

        $('#year_month').text(year + '.' + month);

        $('#cal_wrapper').append(_ds.join(''));

        var enableDayText = $('#cal_wrapper').find('td :enabled').text();
        var islistChk = $(".type_calendar").hasClass("show");

        $('#cal_wrapper button').each(function(i, o) {
            var _o = $(this);
            var perfday = _o.attr("data-perfday");

            _.find(_scheduleListData,function( objVal ) {
                if( objVal.perfDay == perfday ) {
                    var $calendarSelectDom = $("#calendar_SelectId_"+perfday);
                    $calendarSelectDom.attr("data-prodid",objVal.prodId);
                    $calendarSelectDom.attr("data-poccode",objVal.pocCode);
                    $calendarSelectDom.attr("data-perftypecode",$("#tciketProcessBox_perfTypeCode").val());
                    $calendarSelectDom.attr("data-selltypecode",commonCode.SELL_TYPE_CODE1);
                    $calendarSelectDom.attr("data-seatcntdisplayyn",objVal.seatCntDisplayYn);
                }
            });

            if(_days.length == 1 && enableDayText == _o.text() && islistChk){
                $('#cal_wrapper').find('td :enabled').trigger('click');
            }
        });

    }

    function _get_day_max(year, month) {
        var i = 29;
        var cday;


        while( i < 32 ) {
            cday = new Date( year, month, i );
            if ( cday.getFullYear() != year || cday.getMonth() != month) {
                break;
            }
            i++;
        }

        return i-1;
    }

    /**
     *  공통 캘린더/날짜 리스트 체크 함수
     */
    exports.scheduleDateSelectedFn = function( perfday ) {

        if( perfday != "" && perfday != null && perfday != undefined ) {
            // 날짜 리스트 체크 함수
            var $scheduleDateList = $("#list_date li");
            $scheduleDateList.removeClass("on");
            _.find($scheduleDateList,function(domVal){
                var tempPerfday = $(domVal).attr("data-perfday");
                if(perfday == tempPerfday) {
                    $(domVal).addClass("on");
                    return;
                }
            });

            // 캘린더 체크 함수
            var $calendarDateList = $("#cal_wrapper tr td");
            $calendarDateList.removeClass("default");
            _.find($calendarDateList,function(domVal){
                var tempPerfday = $(domVal).find("button").attr("data-perfday");
                if(perfday == tempPerfday) {
                    $(domVal).addClass("default");
                    return;
                }
            });
        }
    };


    return {
        init:init,
        service:exports
    };
});
define('js/app/common/service/timerService',[
    "jquery",
    "underscore",
    "ticketCode",
    "moment",
    "momentTimeZone"
], function ( $,underscore
            , ticketCode
            , moment,momentTimeZone
       ) {

    'use strict';

    var exports = {};

    var ticketTimer = null;
    var interval = 1000;    //1초
    var counterVal = 180;

    function init() {

    }


    /**
     * 일반 상품 오픈 카운트
     * @param counterParams
     */
    exports.basicCounterProcessStart = function( counterParams ) {

        var counterUse = counterParams.counterUse;
        var stateFlg = counterParams.stateFlg;
        var globalProdTypeCode = counterParams.globalProdTypeCode;

        var openDt = counterParams.openDt;
        var openText = counterParams.openText;
        var processBoxStartTime = counterParams.processBoxStartTime;
        var prodId = counterParams.prodId;
        var serverTime = counterParams.serverTime;
        var daylistCount = counterParams.daylistCount;

        if( counterUse && stateFlg === commonCode.STATE_FLG_SS0200 ) {

            if( globalProdTypeCode === commonCode.PROD_TYPE_CODE1 && daylistCount > 0 ) { //일반상품의 경우 회차 데이터가 없으면 카운트 다운 진행하지 않음
                return false;
            }

            var parseOpenDt = parseInt( openDt,10 );

            var params = {
                openText:(openText != null) ? openText : "",
                openDt:parseOpenDt,
                openDtUnix : moment(parseOpenDt,"YYYYMMDDHHmmss").tz("Asia/Seoul").valueOf(),
                //serverTime: serverTime_moduleLoad.getServerTimeCalculated(serverTime),
                serverTime: serverTime,
                prodId:prodId,
                processBoxStartTime:processBoxStartTime
            };

            var isDisplayYN = _displayDataCheckFn(params);
            var isDisplayYN2 = _displayDataCheckFn2(params);
            var isTicketOpenDay = _isTicketOpenDayCheck( params.serverTime, params.openDtUnix );

            if( isDisplayYN && isTicketOpenDay && isDisplayYN2 ) {
                _reservationCounterBasicService(params);
            }
        }
    };

    /**
     * n차 카운트 시작 함수
     */
    exports.specialCounterProcessStart = function( counterParams ) {
        // 회차 데이터가 있을 경우만
        var $boxTextEl = $("#box_tkt_txt");
        $boxTextEl.removeClass("txt_left");

        var reservation = counterParams.schedule;
        var prodTypeCode = ( reservation != null ) ? reservation.prodTypeCode : null;
        reservation = ( reservation.reservation != null && reservation.reservation != undefined ) ? reservation.reservation : null;
        var globalProdTypeCode = counterParams.globalProdTypeCode;
        var serverTime = counterParams.serverTime;
        var prodId = counterParams.prodId;
        var processBoxStartTime = counterParams.processBoxStartTime;
        var counterUse = counterParams.counterUse;
        var stateFlg = counterParams.stateFlg;
        var scheduleOpenYn = counterParams.scheduleOpenYn;

        if( reservation != null && stateFlg === "SS0200" && prodTypeCode === "PT0001" ) {

            var parseOpenDt = parseInt(reservation.reserveStartDt,10);

            var params = {
                openText1:(reservation.reservationInfo != null) ? reservation.reservationInfo : "",
                openText2:(reservation.reservationOpenInfo != null) ? reservation.reservationOpenInfo : "",
                openDt:parseOpenDt,
                openDtUnix : moment(parseOpenDt,"YYYYMMDDHHmmss").tz("Asia/Seoul").valueOf(),
                // serverTime: serverTime_moduleLoad.getServerTimeCalculated(serverTime),
                serverTime: serverTime,
                prodId:prodId,
                processBoxStartTime:processBoxStartTime,
                scheduleOpenYn:scheduleOpenYn
            };

            var isDisplayYN = _displayDataCheckFn(params);
            var isDisplayYN2 = _displayDataCheckFn2(params);
            var isTicketOpenDay = _isTicketOpenDayCheck( params.serverTime, params.openDtUnix );

            if( isDisplayYN && isTicketOpenDay && isDisplayYN2 ) {
                var asyncCall = _getThreeHoursTimeCheckFn( params );

                asyncCall.then(function(result) {

                    if(result === "Y") {
                        _reservationCounterSpecialService( params );
                    }
                }, function( result) {

                });
            }
        }

    };


    /**
     *  n차 일반예매/선예매 카운트 서비스 함수
     */
    function _reservationCounterSpecialService( params ) {
        var counterParams = {
            openDt:params.openDt,
            openText: params.openText2,
            serverTime: params.serverTime,
            prodId: params.prodId,
            processBoxStartTime: params.processBoxStartTime,
            leftAddClassYN : true
        };

        _reservationCounterStart( counterParams );
    }


    /**
     * 상품 오픈전 3시간 상품 노출 문구 출력 함수
     * 3시간 이후는 문구 바로 노출
     * 3시간 이전은 setInterval 함수 호출해서 문구 출력
     */
    function _getThreeHoursTimeCheckFn( params ) {

        var deferred = $.Deferred();

        try {

            var openDt = params.openDt;
            var openText = params.openText1;
            var serverTime = params.serverTime;
            var prodId = params.prodId;
            var processBoxStartTime = params.processBoxStartTime;
            var openDtUnix = moment(openDt,"YYYYMMDDHHmmss").tz("Asia/Seoul").valueOf();  //unix time
            var serverDtUnix = serverTime;  //server unix time

            _inputValidation2( openDt, serverTime, processBoxStartTime );

            var sTimeDiffVal = _serverTimeDiffMinutesFn( openDt, serverTime );

            if( sTimeDiffVal < counterVal ) { //3시간 이후에 들어온 경우 바로 문구 출력
                var $boxTextEl = $("#box_tkt_txt");
                $boxTextEl.text( openText );

                deferred.resolve("Y");
            } else { //3시간 이전에 들어온 경우 시간 체크

                var countParams = {
                    openDtUnix : openDtUnix,
                    serverTime : serverTime,
                    processBoxStartTime : processBoxStartTime,
                    secondControlYN : true
                };

                _counterFn( countParams,function( callbackVal ) {
                    var tempDuration = ( callbackVal.duration != null ) ? callbackVal.duration : null;
                    var tempTicketTimer = ( callbackVal.ticketTimer != null ) ? callbackVal.ticketTimer : null;

                    try {

                        if( _.isObject(tempDuration) ) {
                            var minutesVal = tempDuration.minutesdiff;

                            if( minutesVal < counterVal ) { //종료 조건 3시간(180분) 이하
                                var $boxTextEl = $("#box_tkt_txt");
                                $boxTextEl.text(openText);
                                _resetFunction( tempTicketTimer );

                                deferred.resolve("Y");
                            }
                        } else {
                            throw "Runtime Error";
                        }
                    } catch (e) {
                        _resetFunction( tempTicketTimer );
                        deferred.reject("N");
                    }
                });
            }

        } catch(e) {
            deferred.reject("N");
        }

        return deferred.promise();
    }


    /**
     * PC 카운트 다운 서비스 함수
     * @param params
     */
    function _reservationCounterBasicService( params ) {
        var counterParams = {
            openDt:params.openDt,
            openText: params.openText,
            serverTime: params.serverTime,
            prodId: params.prodId,
            processBoxStartTime: params.processBoxStartTime,
            leftAddClassYN : false
        };

        $(".box_ticketing_process").hide();

        _reservationCounterStart( counterParams );
    }

    /**
     * 공통 카운트 함수
     * 1시간 카운트
     * @param params
     * @private
     */
    function _reservationCounterStart( params ) {

        try {

            var openDt = params.openDt;
            var openText = params.openText;
            var serverTime = params.serverTime;
            var prodId = params.prodId;
            var processBoxStartTime = params.processBoxStartTime;
            var leftAddClassYN = params.leftAddClassYN;

            var openDtUnix = moment(openDt,"YYYYMMDDHHmmss").tz("Asia/Seoul").valueOf();  //unix time
            var serverDtUnix = serverTime;  //server unix time

            _inputValidation2( openDtUnix , serverDtUnix, processBoxStartTime );

            var countParams = {
                openDtUnix : openDtUnix,
                serverTime : serverTime,
                processBoxStartTime : processBoxStartTime,
                secondControlYN : false
            };

            _counterFn( countParams,function( callbackVal ) {
                var tempDuration = ( callbackVal.duration != null ) ? callbackVal.duration : null;
                var tempTicketTimer = ( callbackVal.ticketTimer != null ) ? callbackVal.ticketTimer : null;

                try {

                    if( _.isObject(tempDuration) ) {

                        var counterMilliseconds = tempDuration.distance;

                        if( counterMilliseconds > 0 ) {
                            _counterTextFunction( tempDuration, openText, leftAddClassYN );
                        } else  {
                            _successFunction( prodId, tempTicketTimer );
                        }

                    } else {
                        throw "Runtime Error";
                    }
                } catch (e) {
                    _resetFunction( tempTicketTimer );
                }
            });
        } catch(e) {
            _resetFunction( null );
        }
    }

    /**
     * 카운트 다운 성공시 실행 함수
     * @param prodId
     * @param ticketTimer
     */
    function _successFunction( prodId, ticketTimer ) {
        _resetFunction( ticketTimer );

        var paramsDTO = {
          prodId:prodId,
          reflashYn : "Y"
        };

        var performanceService = require("js/app/performance/service/performanceService");
        performanceService.service.reflashScheduleInit(paramsDTO);
    }

    /**
     * 카운트 초기화 및 css 초기화 함수
     * @param tempTimer
     * @private
     */
    function _resetFunction( tempTimer ) {
        _timerClearModule( tempTimer );
    }


    /**
     * 카운트 다운 텍스트 함수
     * @param duration
     * @param openText
     */
    function _counterTextFunction( duration, openText, leftAddClassYN ) {
        if( duration.hours <= 0 ) {  //1시간 체크 후 1시간 미만이면 카운트 실행
            var tempMinutes = _addZeroModule(duration.minutes);
            var tempSeconds = _addZeroModule(duration.seconds);
            var counterText = openText +  " (남은시간 " + tempMinutes + " 분 " + tempSeconds +  " 초)";

            if( leftAddClassYN ) {
                _displayCounterElementAdd();
            }

            var $boxTextEl = $("#box_tkt_txt");
            $boxTextEl.html( counterText );
        }
    }

    /**
     * n차 카운트 다운
     * 카운트 다운시 class 적용함수
     * 3시간전 오픈 문구 노출 사용안함
     */
    function _displayCounterElementAdd() {
        var $boxTextEl = $("#box_tkt_txt");
        $boxTextEl.addClass("txt_left");
    }


    /**
     * 공통 카운트 다운 함수
     * @param countParams
     * @param callback
     */
    function _counterFn( countParams, callback ) {
        var isCallback = false;

        try {

            if( ticketTimer != null ) {
                _timerClearModule( ticketTimer );
            }

            var openDtUnix = countParams.openDtUnix;
            var serverDtUnix = countParams.serverTime;

            if(typeof callback === "function") {
                isCallback = true;
            }

            var isFirst = true;
            var startInterval = moment().tz("Asia/Seoul").valueOf();  //interval 시작 시간
            var newServerDtUnix = serverDtUnix;

            ticketTimer = setInterval(function() {

                try {

                    if (isFirst) {
                        isFirst = false;
                        newServerDtUnix += moment().tz("Asia/Seoul").valueOf() - startInterval;  //interval 시작전후 경과 시간을 구하기 위함
                    } else {
                        newServerDtUnix = moment().tz("Asia/Seoul").valueOf();
                    }

                    var distance = ( openDtUnix - newServerDtUnix );   //오픈시간 - 현재시간 = 남은시간

                    var durationObj = {
                        days : Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                        minutesdiff : _serverTimeDiffMinutesUnixFn( openDtUnix, newServerDtUnix ),
                        seconds : Math.floor((distance % (1000 * 60)) / 1000),
                        distance : distance
                    };

                    if( isCallback ) {
                        callback(_objectCallback( durationObj , ticketTimer ));
                    }
                } catch(e) {
                    if( isCallback ) {
                        callback(_objectCallback( null , ticketTimer ));
                    }
                }
            }, interval);
        } catch(e) {
            if( isCallback ) {
                callback(_objectCallback( null , ticketTimer ));
            }
        }
    }

    /**
     * callback 값 리턴
     * @param duration
     * @param ticketTimer
     */
    function _objectCallback( duration , ticketTimer ) {
        var obj = {
            duration:duration,
            ticketTimer:ticketTimer
        };

        return obj;
    }

    // var _objectCallback = function( duration , ticketTimer ) {
    //     var obj = {
    //         duration:duration,
    //         ticketTimer:ticketTimer
    //     };
    //
    //     return obj;
    // };

    /**
     * 서버 시간과 상품 오픈시간을 비교 후
     * 비교한 차이 값 분단위 리턴
     */
    function _serverTimeDiffMinutesUnixFn( openDt, serverTime ) {
        var result = 0;

        try {
            var tempOpenDt = moment(openDt).tz("Asia/Seoul");    //상품 오픈 시간
            var tempServerTime = moment(serverTime).tz("Asia/Seoul");             //서버 시간

            _inputValidation( tempOpenDt , tempServerTime );

            result = tempOpenDt.diff(tempServerTime,'minutes');   //서버시간과 오픈시간 비교
        } catch(e) {
            result = -1;
        }

        return result;
    }

    /**
     * 서버 시간과 상품 오픈시간을 비교 후
     * 비교한 차이 값 분단위 리턴
     */
    function _serverTimeDiffMinutesFn( openDt, serverTime ) {
        var result = 0;

        try {
            var tempOpenDt = moment(openDt,"YYYYMMDDHHmmss").tz("Asia/Seoul");    //상품 오픈 시간
            var tempServerTime = moment(serverTime).tz("Asia/Seoul");             //서버 시간

            _inputValidation( tempOpenDt , tempServerTime );

            result = tempOpenDt.diff(tempServerTime,'minutes');   //서버시간과 오픈시간 비교
        } catch(e) {
            result = -1;
        }

        return result;
    }


    function _displayDataCheckFn( params ) {
        var result = true;

        try {
            var openDt = params.openDt;
            var serverTime = params.serverTime;

            _inputValidation( openDt, serverTime );

            /**
             * 상품 오픈 전 양수
             * 상품 오픈 음수
             * 상품 오픈 후 음수
             * 에러 -1
             */
            var sTimeDiffVal = _serverTimeDiffMilliSecondsFn( openDt, serverTime );

            if( sTimeDiffVal <= 0 ) {
                result = false;
            }

        } catch(e) {
            result = true;
        }

        return result;
    }

    function _displayDataCheckFn2( params ) {

        var result = true;

        try {
            var openDtUnix = params.openDtUnix;
            var serverTime = params.serverTime;

            _inputValidation( openDtUnix, serverTime );

            /**
             * openDtUnix == serverTime : false ( 2010-10-20 같다 2010-10-20 )
             * openDtUnix 이후 serverTime : true ( 2010-10-20 이후 2010-10-19 )
             * openDtUnix 이후 serverTime : false ( 2010-10-20 이후 2010-10-21 )
             */
            result = moment(openDtUnix).isAfter(serverTime)
        } catch(e) {
            result = true;
        }

        return result;
    }


    /**
     * 티켓서버 일자 와 오픈 일자가 동일한지 체크
     * @param serverDate
     * @param openDate
     * @returns {boolean}
     */
    function _isTicketOpenDayCheck( paramServerDate, paramOpenDate ) {
        var result = false;

        try {

            _inputValidation( paramServerDate, paramOpenDate );

            if ( paramServerDate != null && paramOpenDate != null ) {
                var serverDate =  timerUtil.getInputDate_YYYYMMDD( paramServerDate );
                var openDate = timerUtil.getInputDate_YYYYMMDD( paramOpenDate );

                result = moment( serverDate ).isSame( openDate );
            }

        } catch (e) {
            result = false;
        }

        return result;
    }


    /**
     * 서버 시간과 상품 오픈시간을 비교 후
     * 비교한 차이 값 밀리초단위 리턴
     */
    function _serverTimeDiffMilliSecondsFn( openDt, serverTime ){
        var result = 0;

        try {
            var tempOpenDt = moment(openDt,"YYYYMMDDHHmmss").tz("Asia/Seoul");    //상품 오픈 시간
            var tempServerTime = moment(serverTime).tz("Asia/Seoul");             //서버 시간

            _inputValidation( tempOpenDt , tempServerTime );

            result = tempOpenDt.diff(tempServerTime);   //서버시간과 오픈시간 비교
        } catch(e) {
            result = -1;
        }

        return result;
    }


    /**
     * 입력 값 벨리데이션
     * @private
     */
    function _inputValidation( val1 , val2 ) {

        if( !_isDateValidModule(val1) || !_isDateValidModule(val2) ) {
            throw "openDatetime validation error";
        }
    }

    /**
     * 입력 값 벨리데이션
     * @private
     */
    function _inputValidation2( openDtUnix , serverDtUnix, processBoxStartTime ) {

        if( !_isDateValidModule(openDtUnix) || !_isDateValidModule(serverDtUnix)
            || !_isDateValidModule(processBoxStartTime)) {
            throw "openDatetime validation error";
        }
    }


    /**
     * 날짜 벨리데이션
     * 형식이 맞으면 true
     * 틀리면 false
     */
    function _isDateValidModule( val ) {
        return moment(val).isValid();
    }

    /**
     * cleanInterval 공통 함수
     */
    function _timerClearModule( tempInterval ) {
        if( tempInterval != null ) {
            clearInterval( tempInterval );
        }
    }

    /**
     * 10자리 미만 시간에 문자열 0 붙이는 함수
     * @param value
     * @returns {string}
     */
    function _addZeroModule( value ) {
        return value < 10 ? ( "0" + value ) : value;
    }



    /**
     * 시간 반환 유틸
     */
    var timerUtil = {

        /**
         * unix local 시간 반환
         */
        getLocalUnix : function() {
            return moment().tz("Asia/Seoul").valueOf();
        },

        /**
         * date local 시간 반환
         */
        getLocalToDate : function(){
            return moment().tz("Asia/Seoul").toDate();
        },

        /**
         * 입력된 시간으로 반환
         */
        getInputDate : function( val ){
            return moment(val).tz("Asia/Seoul").toDate();
        },

        /**
         * YYYY-MM-DD 형식 일자 반환
         * @param val
         */
        getInputDate_YYYYMMDD : function( val ) {
            return moment(val).format("YYYY-MM-DD");
        }
    };




    return {
        init:init,
        service:exports
    };
});
define('js/app/performance/service/scheduleService',[
    "jquery",
    "underscore",
    "moment",
    "momentTimeZone",
    "js/app/performance/view/performanceView",
    "js/app/performance/service/preSaleService",
    "js/app/performance/service/calendarService",
    "js/app/common/service/timerService",
    "js/app/common/model/commonModel",
    "js/common/util/commonMessageUtil",
    "ticketDomain",
    "ticketUtil",
    "ticketCode",
    "js/app/performance/util/performanceUtil"


], function ( $,underscore,moment,momentTimeZone
              ,performanceView, preSaleService, calendarService, timerService
              ,commonModel,commonMessageUtil
              , ticketDomain, ticketUtil, pUtil) {

    'use strict';

    var exports = {};
    var _reflashYn_daylist = "N";
    var _reflashYn_timelist = "N";

    /**
     * 회차 시작 함수
     * 티켓팅 박스 시작 함수
     * @param prodId
     * @private
     */
    function init(initObj) {
        var ticketGateYn = initObj.ticketGateYn;
        var reflashYn = (initObj.reflashYn != null) ? initObj.reflashYn : "N";
        _reflashYn_daylist = reflashYn;
        _reflashYn_timelist = reflashYn;

        if(ticketGateYn === "Y") {  //미리보기 관련
            _preViewTicketingBoxPrint();
            return;
        }

        _displayTicketingProcessBox(initObj);
    }

    /**
     * 화차 영역 미리보기 템플릿 호출
     * @private
     */
    function _preViewTicketingBoxPrint() {
        var printData = {
            emptyEl : "#ticketing_process_box",
            templateEl : "#TicketingPreView_Template",
            objectData : {},
            addEl : "#ticketing_process_box"
        };
        performanceView.view.defaultTemplatePrint(printData);
    }


    /**
     * 회차 - 티켓팅 박스 화면 출력
     * @param initObj
     * @private
     */
    function _displayTicketingProcessBox( initObj ) {
        var timeCorrection = {};
        timeCorrection.startTime = new Date().getTime();

        var paramsUrl = commonDomain.GLOBAL_TICKET_HTTPS + "/performance/ajax/ticketing_process_box.htm";
        var paramsData = {
            prodId:initObj.prodId
        };

        var ajaxCall = commonModel.model.getNoCachePermissionAjaxHtml( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {  //티켓팅 박스 html callback
            var srvTime = moment(xhr.getResponseHeader('Date')).valueOf();  //server time unix ms convert
            var srvT = performanceUtil.getSimpleTS(srvTime); //srvTime timestamp

            $("#ticketing_process_box").html(result);

            var ticketingDataObj = {
                "timeCorrection" : timeCorrection,
                "srvTime" : srvTime,
                "srvT" : srvT,
                "stateFlg" : $("#tciketProcessBox_stateFlg").val(),
                "counterUse" : counterUse(),
                "counterDt" : $("#tciketProcessBox_counterDt").val(),
                "noticeTextCn" : $("#tciketProcessBox_noticeTextCn").val(),
                "preAuthFlg" : getPreAuthFlg(),
                "condNo" : getCondNo(),
                "prodTypeCode" : $("#tciketProcessBox_prodTypeCode").val(),
                "daylistCount" : parseInt($("#tciketProcessBox_daylistCount").val(),10)
            };

            defaultCounter(initObj, ticketingDataObj);  //기본 카운트 다운

            return ticketingDataObj;
        }).then(function(callback1) { //회차 일자 리스트 호출
            var isCounterUse = callback1.counterUse;
            var prodTypeCode = callback1.prodTypeCode;
            var daylistCount = callback1.daylistCount;

            //일반상품 이고 카운트 다운 완료 이고 회차 데이터가 있을 경우만 실행
            if( prodTypeCode === commonCode.PROD_TYPE_CODE1 && !isCounterUse && daylistCount > 0 ) {

                var stateFlg = callback1.stateFlg;

                if( stateFlg == commonCode.STATE_FLG_SS0200 ) { //판매 가능일 경우만 회차 데이터 호출함
                    var paramsObj = {
                        timeCorrection:callback1.timeCorrection,
                        srvTime:callback1.srvTime,
                        srvT:callback1.srvT,
                        stateFlg:stateFlg,
                        counterUse:isCounterUse,
                        prodId:initObj.prodId,
                        perfTypeCode : $("#tciketProcessBox_perfTypeCode").val(),
                        sellTypeCode:commonCode.SELL_TYPE_CODE1,
                        prodTypeCode:prodTypeCode
                    };

                    _displaySchedule(paramsObj);
                } else {
                    $(".btn_ticketing_type").css("display", "block");
                }
            } else { //상시상품
                $(".btn_ticketing_type").css("display", "block");
            }

            return callback1;
        }).then(function(callback2) { //선예매 버튼 셋팅

            var nextParamsObj = {
                "preAuthFlg" : callback2.preAuthFlg,
                "sellTypeCode" : commonCode.SELL_TYPE_CODE2,
                "sellCondNo" : callback2.condNo,
                "prodId" : initObj.prodId,
                "pocCode" : commonCode.POC_CODE_PC,
                "autheTypeCode" : commonCode.AUTHE_TYPE_CODE1,
            };

            preSaleService.init(nextParamsObj);
        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
        });
    }


    /**
     * 기본 카운트 다운 함수
     * @param initObj
     * @param serverTimeObj
     */
    function defaultCounter( initObj, ticketingDataObj ) {
        var tempStateFlg = ticketingDataObj.stateFlg;
        var tempCounterUse = ticketingDataObj.counterUse;
        var tempCounterDt = ticketingDataObj.counterDt;
        var tempNoticeTextCn = ticketingDataObj.noticeTextCn;
        var srvTime = ticketingDataObj.srvTime;
        var startTime = ticketingDataObj.timeCorrection.startTime;
        var daylistCount = ticketingDataObj.daylistCount;
        var prodTypeCode = initObj.prodTypeCode;
        var prodId = initObj.prodId;

        //기본 카운트 다운
        var counterParams = {
            "stateFlg":tempStateFlg,
            "counterUse":tempCounterUse,
            "openDt":tempCounterDt,
            "serverTime":srvTime,
            "processBoxStartTime":startTime,
            "openText":tempNoticeTextCn,
            "globalProdTypeCode":prodTypeCode,
            "prodId":prodId,
            "daylistCount":daylistCount
        };

        timerService.service.basicCounterProcessStart(counterParams);
    }

    /**
     * 회차 - 일자 로직 함수
     * @param paramsObj
     * @private
     */
    function _displaySchedule(paramsObj) {
        var srvTime = paramsObj.srvTime;
        var timeCorrection = paramsObj.timeCorrection;

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/product/schedule/daylist.json";

        var paramsData = {};
        paramsData.prodId = paramsObj.prodId;
        paramsData.pocCode = commonCode.POC_CODE_PC;
        paramsData.perfTypeCode = paramsObj.perfTypeCode;
        paramsData.sellTypeCode = paramsObj.sellTypeCode;
        paramsData.corpCodeNo = getCookie('corpCodeNo');
        paramsData.prodTypeCode = paramsObj.prodTypeCode;
        paramsData.reflashYn = _reflashYn_daylist;

        if(_reflashYn_daylist === "Y") {
            paramsData.cacheDate = moment().format('YYYYMMDDHHmm');
        }

        var ajaxCall = commonModel.model.getDefaultAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {
            var scheduleListData = commonUtil.inputObjectArrayCheck(result,['data','perfDaylist']);

            _dayListSuccess( scheduleListData, result, paramsData );
            _calendarListSuccess( scheduleListData, result, paramsData );

            //예매하기 버튼 노출
            $(".btn_ticketing_type").css("display", "block");
            _reflashYn_daylist = "N";
            return result;
        }).then(function(callback1) { //카운트 다운 함수 실행

            var tempStateFlg = paramsObj.stateFlg;
            var tempCounterUse = paramsObj.counterUse;
            var prodTypecode = paramsObj.prodTypeCode;
            var prodId = paramsObj.prodId;

            //n차 카운트 다운
            var counterParams = {
                "stateFlg":tempStateFlg,
                "counterUse":tempCounterUse,
                "schedule":callback1,
                "globalProdTypeCode":prodTypecode,
                "serverTime":srvTime,
                "prodId":prodId,
                "processBoxStartTime":timeCorrection.startTime,
                "scheduleOpenYn":""
            };

            timerService.service.specialCounterProcessStart(counterParams);

        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(result);
        });
    }

    /**
     * 회차 - 일자리스트 출력함수
     * @param result
     * @param paramsData
     * @private
     */
    function _dayListSuccess(scheduleListData, result, paramsData ) {
        $("#list_date").empty();

        var dayListLength = scheduleListData.length;
        var isChk = isScheduleDayValidation( dayListLength );

        if ( !isChk ) {
            return;
        }

        var schedulePrintData = {
            emptyEl : "#list_date",
            templateEl : "#Ticketing_DayList_Template",
            objectData : {
                paramsData:paramsData,
                scheduleData:scheduleListData
            },
            addEl : "#list_date"
        };
        performanceView.view.defaultTemplatePrint(schedulePrintData);

        $(".box_ticketing_process").show();

        var islistChk = $(".type_list").hasClass("show");  //리스트형 일 경우만 트리거 클릭/ 달력 형의 경우 트리거 하는 부분이 따로 있음

        if ( dayListLength == 1 && islistChk ) {
            $('#list_date').find('li:eq(0)').trigger('click');
        }
    }


    /**
     * 회차 - 달력 리스트 출력 함수
     * @param result
     * @private
     */
    function _calendarListSuccess( scheduleListData, result, paramsData ) {

        var dayListLength = scheduleListData.length;
        var isChk = isScheduleDayValidation( dayListLength );

        if ( !isChk ) {
            return;
        }

        var scheduleDayList = _.map(scheduleListData, function(val) {
            return val.perfDay;
        });

        calendarService.init({
            activeDays:scheduleDayList,
            scheduleListData:scheduleListData
        });
    }


    /**
     * 회차 일자 데이터가 없을 경우 화면 처리(리스트,캘린더)
     * @param dayListLength
     * @returns {boolean}
     */
    function isScheduleDayValidation( dayListLength ) {
        var result = true;

        if ( dayListLength == 0 ) {
            $("#section_time").empty();   //시간영역
            $("#section_seat").empty();   //권종영역
            result = false;
        }

        return result;
    }



    /**
     * 시간 로직 함수
     * @param paramsObj
     */
    exports.displayTimeListSchedule = function(paramsObj) {
        var perfDay = paramsObj.perfDay;

        calendarService.service.scheduleDateSelectedFn(perfDay);

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/product/schedule/timelist.json";
        var paramsData = {
            prodId:paramsObj.prodId,
            perfDay:paramsObj.perfDay,
            pocCode:paramsObj.pocCode,
            perfTypeCode:paramsObj.perfTypeCode,
            sellTypeCode:paramsObj.sellTypeCode,
            seatCntDisplayYn:paramsObj.seatCntDisplayYn,
            interlockTypeCode:paramsObj.interlockTypeCode,
            corpCodeNo:getCookie('corpCodeNo'),
            reflashYn:_reflashYn_timelist
        };

        var ajaxCall = commonModel.model.getDefaultAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {  //회차 시간 리스트 화면 출력
            _timeListSuccess(result, paramsData);

            var nextParamsObj = {
                result:result,
                paramsData:paramsData
            };

            return nextParamsObj;
        }).then(function(callback1) { //등급(매진/매진임박) API 호출(연동사/미연동사)
            _timeListGradeDataProcess(callback1);
        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(result);
        });
    };

    /**
     * 회차 - 시간 리스트 화면 출력
     * @private
     */
    function _timeListSuccess(result, paramsData) {
        $("#list_seat").empty();

        var timeListData = commonUtil.inputObjectArrayCheck(result,['data','perfTimelist']);
        var timeListLength = timeListData.length;

        var isChk = isScheduleTimeValidation( timeListLength );

        if ( !isChk ) {
            return;
        }

        var castingUseYn = _.some(timeListData,function(odata) { return odata.casting != null && odata.casting != ""; }) ? "Y" : "N";

        var scheduleTopTimePrintData = {
            emptyEl : "#section_time",
            templateEl : "#Ticketing_TopTimeList_Template",
            objectData : {
                castingUseYn:castingUseYn,
                paramsData:paramsData
            },
            addEl : "#section_time"
        };
        performanceView.view.defaultTemplatePrint(scheduleTopTimePrintData);

        var scheduleTimePrintData = {
            emptyEl : "#list_time",
            templateEl : "#Ticketing_TimeList_Template",
            objectData : {
                castingUseYn:castingUseYn,
                timeListData:timeListData,
                paramsData:paramsData
            },
            addEl : "#list_time"
        };

        performanceView.view.defaultTemplatePrint(scheduleTimePrintData);

        //권종 현황 빈 템플릿 노출
        if( timeListLength > 0 ) {
            var $template = $("#Ticketing_GradeListEmpty_Template");
            $("#section_seat").empty().prepend($template.html());
        }
        //회차 시간이 하나일 경우 자동 선택
        if( timeListLength == 1 ) {
            $('#list_time').find('li:eq(0)').trigger('click');
        }
    }

    /**
     * 회차 시간 데이터가 없을 경우 화면 처리(리스트,캘린더)
     * @returns {boolean}
     */
    function isScheduleTimeValidation( length ) {
        var result = true;

        if ( length == 0 ) {
            var $template1 = $("#Ticketing_TimeListEmpty_Template");
            $("#section_time").empty().append($template1.html());
            $("#section_seat").empty();   //권종영역
            result = false;
        }

        return result;
    }


    /**
     * 회차 - 시간영역 매진/매진임박 관련 로직 함수
     * @param params
     * @private
     */
    function _timeListGradeDataProcess(params) {

        var seatCntDisplayYn = commonUtil.inputObjectValueCheck(params,['paramsData','seatCntDisplayYn']);
        var pocCode = commonUtil.inputObjectValueCheck(params,['paramsData','pocCode']);
        var perfTypeCode = commonUtil.inputObjectValueCheck(params,['paramsData','perfTypeCode']);

        if (seatCntDisplayYn === "Y") { //매수표시 여부
            var interlock = commonUtil.inputObjectValueCheck(params, ['paramsData', 'interlockTypeCode']);

            if (interlock == commonCode.INTERLOCK_CODE1 || interlock == commonCode.INTERLOCK_CODE2  || interlock == commonCode.INTERLOCK_CODE3) { // 연동사 API
                _outsideGradeProcess(params, seatCntDisplayYn, pocCode, perfTypeCode, interlock);
            } else {  //일반 API
                _normalGradeProcess(params, seatCntDisplayYn, pocCode, perfTypeCode);
            }
        }
    }


    /**
     * 회차 - 시간영역(연동사)
     * 매진/매진임박 출력 관련 함수
     * @param params
     * @param seatCntDisplayYn
     * @param pocCode
     * @param perfTypeCode
     */
    function _outsideGradeProcess(params, seatCntDisplayYn, pocCode, perfTypeCode, interlock) {
        var perfTimelist = commonUtil.inputObjectArrayCheck(params,['result','data','perfTimelist']);
        var perfDay = commonUtil.inputObjectValueCheck(params,['paramsData','perfDay']);
        var sellTypeCode = commonUtil.inputObjectValueCheck(params,['paramsData','sellTypeCode']);

        _.each(perfTimelist,function(value,i) {
            if ( sellTypeCode == "ST0001" ) { //일반상품의 경우만
                var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/product/schedule/cntList.json";
                var paramsData = {
                    prodId:value.prodId,
                    scheduleNo:value.scheduleNo,
                    pocCode:pocCode,
                    sellTypeCode:value.sellTypeCode,
                    interlockTypeCode:interlock,
                    perfDay:perfDay,
                    reflashYn:"N"
                };

                var ajaxCall = commonModel.model.getDefaultAjax( paramsUrl, paramsData );

                ajaxCall.then(function(result, status, xhr) {  //등급 리스트 API 호출
                    var nextParamObj = {
                        result:result,
                        paramsData:paramsData
                    };

                    _soldOutProcess(nextParamObj);

                }, function( result, status, xhr ) {
                    commonMessageUtil.util.systemMessage(result);
                });
            }
        });
    }


    /**
     * 회차 - 시간영역
     * 매진/매진임박 출력 관렴 함수
     * @param params
     * @private
     */
    function _normalGradeProcess(params, seatCntDisplayYn, pocCode, perfTypeCode) {
        var perfTimelist = commonUtil.inputObjectArrayCheck(params,['result','data','perfTimelist']);

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/product/schedule/gradelist.json";

        var scheduleNoArray = _.map(perfTimelist,function(value){
            return value.scheduleNo;
        });

        var sellTypeCodeArray = _.map(perfTimelist,function(value){
            return value.sellTypeCode;
        });

        var tempData = _.first(perfTimelist);

        var paramsData = {
            prodId:tempData.prodId,
            pocCode:pocCode,
            perfDay:tempData.perfDay,
            scheduleNoArray:scheduleNoArray,
            sellTypeCodeArray:sellTypeCodeArray,
            seatCntDisplayYn:seatCntDisplayYn,
            perfTypeCode:perfTypeCode,
            seatPoc:tempData.seatPoc,
            cancelCloseDt:tempData.cancelCloseDt,
            corpCodeNo:getCookie('corpCodeNo'),
            reflashYn:"N"
        };

        var ajaxCall = commonModel.model.getDefaultAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {  //등급 리스트 API 호출

            var nextParamObj = {
                result:result,
                paramsData:paramsData
            };

            _soldOutProcess(nextParamObj);

        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(result);
        });

    }

    /**
     * 매진/매진임박 관련 로직 함수1
     * @param params
     * @private
     */
    function _soldOutProcess(params) {
        try {

            var seatGradelist = commonUtil.inputObjectArrayCheck(params,['result','data','seatGradelist']);
            var scheduleNoArray = commonUtil.inputObjectArrayCheck(params,['paramsData','scheduleNoArray']);

            if(scheduleNoArray.length > 1) { //복수개

                var generanSeatGradeList = _.filter(seatGradelist,function(val){  //일반예매
                    return val.sellTypeCode == "ST0001";
                });

                var preSaleSeatGradeList = _.filter(seatGradelist,function(val){  //선예매
                    return val.sellTypeCode == "ST0002";
                });

                var generanSeatGradeGroupby = _.map(_.groupBy(generanSeatGradeList,'scheduleNo'));
                var preSaleSeatGradeGroupby = _.map(_.groupBy(preSaleSeatGradeList,'scheduleNo'));

                //두개 array 합차기
                var combineGradeData = [];
                combineGradeData = combineGradeData.concat(generanSeatGradeGroupby,preSaleSeatGradeGroupby);

                _.each(combineGradeData, function(arrobj){
                    var scheduleNo = _.first(arrobj) != null ? _.first(arrobj).scheduleNo : "";
                    var sellTypeCode = _.first(arrobj) != null ? _.first(arrobj).sellTypeCode : "";

                    _soldOutProcessLogic(arrobj, params, scheduleNo, sellTypeCode);
                });
            } else { //한개
                var scheduleNo = commonUtil.inputObjectValueCheck( params, ['result','data','scheduleNo'] );
                var sellTypeCode = commonUtil.inputObjectValueCheck( params, ['result','data','sellTypeCode'] );

                _soldOutProcessLogic(seatGradelist,params, scheduleNo, sellTypeCode);
            }
        } catch(error) {

        }
    }


    /**
     * 매진/매진임박 관련 로직 함수2
     * @param seatGradelist
     * @param params
     * @private
     */
    function _soldOutProcessLogic(seatGradelist, params, scheduleNo, sellTypeCode) {
        var objResult = {};
        var soldOutSumObj = _soldOutSum(seatGradelist);

        var seatCountSum = soldOutSumObj.seatCountSum;             //남은 좌석수
        var totalSeatCountSum = soldOutSumObj.totalSeatCountSum;   //총 좌석수

        //총 좌석의 10퍼센트를 구함
        //좌석의 10퍼센트 값과 50을 비교함
        //10퍼센트 구한 값과 디폴트 값 50을 비교해서 더 작은 값을 반환함
        var seatThreshold = Math.min(Math.round(totalSeatCountSum / 10), 50);

        //총 좌석수가 0이면 10퍼센트 구한 값을 50으로 변경함
        if(totalSeatCountSum == 0) seatThreshold = 50;

        //남은 좌석수가 0보다 크고 남은 좌석수가 10퍼센트 구한 값 보다 작거나 같으면
        if(seatCountSum > 0 && seatCountSum <= seatThreshold) {  //매진임박
            objResult.printType = "A";
        } else if(seatCountSum == 0) {   //매진
            objResult.printType = "B";
        }

        _soldOutPrint(objResult,params,scheduleNo, sellTypeCode);
    }

    /**
     * 잔여좌석 카운트 함수
     * @param paramsObj
     * @returns {{seatCountSum: number, totalSeatCountSum: number}}
     * @private
     */
    function _soldOutSum(seatGradelist){
        var seatCountSum = 0;
        var totalSeatCountSum = 0;

        _.each(seatGradelist,function(obj,i) {
            var temp_realSeatCntlk = (obj.realSeatCntlk != null) ? parseInt(obj.realSeatCntlk) : 0;
            var temp_totalCount = (obj.totalCount != null) ? parseInt(obj.totalCount) : 0;

            seatCountSum += temp_realSeatCntlk;
            totalSeatCountSum += temp_totalCount;
        });

        return {
            seatCountSum:seatCountSum,
            totalSeatCountSum:totalSeatCountSum
        };
    }


    /**
     * 매진/매진임박 화면 출력
     * @param objResult
     * @param params
     * @private
     */
    function _soldOutPrint( objResult, params, scheduleNo, sellTypeCode ) {

        var perfDay =commonUtil.inputObjectValueCheck( params, ['paramsData','perfDay'] );

        var searchDom = ".soldouttext_"+perfDay+"_"+scheduleNo+"_"+sellTypeCode;

        var scheduleSoldOutPrintData = {
            emptyEl : searchDom,
            templateEl : "#Ticketing_TimeList_soldOutText_Template",
            objectData : {
                objResult:objResult
            },
            addEl : searchDom
        };

        performanceView.view.soldOutTextTemplatePrint(scheduleSoldOutPrintData);
    }



    /**
     * 등급 로직 함수
     * @param paramsObj
     */
    exports.displayGradeListSchedule = function(paramsObj) {

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/product/schedule/gradelist.json";
        var paramsData = {
            prodId:paramsObj.prodId,
            pocCode:paramsObj.pocCode,
            perfDay:paramsObj.perfDay,
            scheduleNoArray:[paramsObj.scheduleNo],
            sellTypeCodeArray:[paramsObj.sellTypeCode],
            seatCntDisplayYn:paramsObj.seatCntDisplayYn,
            perfTypeCode:paramsObj.perfTypeCode,
            seatPoc:paramsObj.seatPoc,
            cancelCloseDt:paramsObj.cancelCloseDt,
            corpCodeNo:getCookie('corpCodeNo'),
            interlockTypeCode:paramsObj.interlockTypeCode,
            reflashYn:"N"
        };

        var ajaxCall = commonModel.model.getDefaultAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {  //등급 리스트 API 호출
            _gradeListSuccess(result, paramsData);

            var nextParamsObj = {
                result:result,
                paramsData:paramsData
            };

            return nextParamsObj;
        }).then(function(callback1) { //등급 수량 API 호출 (연동상품)
            var interlock = paramsObj.interlockTypeCode;
            var seatCntDisplayYn = paramsData.seatCntDisplayYn;
            if(seatCntDisplayYn === "Y") { //잔여좌석 노출여부 확인
                if (interlock == commonCode.INTERLOCK_CODE1 || interlock == commonCode.INTERLOCK_CODE2 || interlock == commonCode.INTERLOCK_CODE3) { // 연동사 API
                    _outsideGradeQuantityAPICall(paramsObj, callback1);
                }
            }

        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(result);
        });
    };

    /**
     * 회차 - 등급 화면 출력
     * @param result
     * @param paramsData
     * @private
     */
    function _gradeListSuccess( result, paramsData ) {

        $("#section_seat").empty();

        var gradeListData = commonUtil.inputObjectArrayCheck(result,['data','seatGradelist']);
        var gradeListLength = gradeListData.length;

        var isChk = isScheduleGradeValidation( gradeListLength );

        if ( !isChk ) {
            return;
        }

        var scheduleTopGradePrintData = {
            emptyEl : "#section_seat",
            templateEl : "#Ticketing_TopGradeList_Template",
            objectData : {
            },
            addEl : "#section_seat"
        };
        performanceView.view.defaultTemplatePrint(scheduleTopGradePrintData);

        var scheduleGradePrintData = {
            emptyEl : "#list_seat",
            templateEl : "#Ticketing_GradeList_Template",
            objectData : {
                gradeListData:gradeListData,
                paramsData:paramsData
            },
            addEl : "#list_seat"
        };

        performanceView.view.defaultTemplatePrint(scheduleGradePrintData);
    }


    /**
     * 연동사 회차 데이터 출력
     * 회차 - 등급 카운터 데이터 화면 출력
     * @param result
     * @param paramsData
     * @private
     */
    function _interlockGradeListSuccess( result, paramsData, callback1 ) {
        var interlockTypeCode = commonUtil.inputObjectValueCheck( paramsData, ['interlockTypeCode'] );
        var seatGradeList = commonUtil.inputObjectArrayCheck( callback1, ['result', 'data','seatGradelist'] );
        var interlock_seatGradeList = commonUtil.inputObjectArrayCheck(result,['data','seatGradelist']);
        var gradeListLength = interlock_seatGradeList.length;

        var isChk = isScheduleGradeValidation( gradeListLength );

        if ( !isChk ) {
            return;
        }

        var gradeListData = _gradeRealSeatCnt(seatGradeList, interlock_seatGradeList, interlockTypeCode);

        _.each(gradeListData,function (obj,i) {
            var seatGradeNo = obj.seatGradeNo;
            var scheduleNo = obj.scheduleNo;
            var sellTypeCode = obj.sellTypeCode;
            var prodId = obj.prodId;

            var targetElement = ".prodId_"+prodId+"_gradeNo_"+seatGradeNo+"_schedule_"+scheduleNo+"_sellTypeCode_"+sellTypeCode;

            var scheduleGradePrintData = {
                emptyEl : targetElement,
                templateEl : "#Ticketing_GradeList_Count_Template",
                objectData : {
                    obj : obj
                },
                addEl : targetElement
            };

            performanceView.view.defaultTemplatePrint2(scheduleGradePrintData);
        });
    }

    /**
     * 수량 데이터 추출 함수
     * @param seatGradeList
     * @param interlock_seatGradeList
     * @param predicate
     * @returns {*}
     * @private
     */
    function _gradeRealSeatCnt( seatGradeList, interlock_seatGradeList, interlockTypeCode ) {

        return _.chain(seatGradeList)
            .map(function ( obj, num ) {
                var interlockGradeData = _.findWhere( interlock_seatGradeList, _predicateFunction1(interlockTypeCode,obj) );

                var tempObj = {};
                tempObj.seatGradeName = commonUtil.inputObjectValueCheck( interlockGradeData, ['seatGradeName'] );
                tempObj.realSeatCntlk = commonUtil.inputObjectArrayCheck( interlockGradeData, ['realSeatCntlk'] );
                tempObj.basePrice = commonUtil.inputObjectValueCheck( interlockGradeData, ['basePrice'] );
                tempObj.seatGradeNo = obj.seatGradeNo;
                tempObj.scheduleNo = obj.scheduleNo;
                tempObj.sellTypeCode = obj.sellTypeCode;
                tempObj.prodId = obj.prodId;

                return tempObj;
            }).value();
    }

    /**
     * 연동상품 수량데이터 추출 조건절 함수
     * @param interlockTypeCode
     * @returns {{seatGradeName: *}}
     * @private
     */
    function _predicateFunction1( interlockTypeCode, obj ) {
        if ( interlockTypeCode == commonCode.INTERLOCK_CODE1) {
            return {seatGradeName:obj.seatGradeName};
        } else if( interlockTypeCode == commonCode.INTERLOCK_CODE2 ) {
            return {sejongSeatGradeCode:obj.sejongSeatGradeCode};
        } else if( interlockTypeCode == commonCode.INTERLOCK_CODE3 ) {
            return {seatGradeName:obj.seatGradeName};
        }
    }

    /**
     * 회차 등급 데이터가 없을 경우 화면 처리
     * @returns {boolean}
     */
    function isScheduleGradeValidation( length ) {
        var result = true;

        if ( length == 0 ) {
            var $template1 = $("#Ticketing_GradeEmpty_Template");
            $("#section_seat").empty().append($template1.html());
            result = false;
        }

        return result;
    }

    /**
     * 연동사 등급 조회 함수
     * @param paramsObj
     * @private
     */
    function _outsideGradeQuantityAPICall(paramsObj, callback1) {
        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/product/schedule/cntList.json";
        var paramsData1 = {
            prodId:paramsObj.prodId,
            scheduleNo:paramsObj.scheduleNo,
            pocCode:paramsObj.pocCode,
            sellTypeCode:paramsObj.sellTypeCode,
            interlockTypeCode:paramsObj.interlockTypeCode,
            perfDay:paramsObj.perfDay,
            seatCntDisplayYn:paramsObj.seatCntDisplayYn,
            reflashYn:"N"
        };

        console.log(paramsUrl)

        var ajaxCall = commonModel.model.getDefaultAjax( paramsUrl, paramsData1 );

        ajaxCall.then(function(result, status, xhr) {  //등급 리스트 API 호출
            _interlockGradeListSuccess(result, paramsData1, callback1);

        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(result);
        });
    }



    return {
        init:init,
        service:exports
    };
});

function Captcha(useYn){
    this.init(useYn);
}

Captcha.prototype.use       = false;
Captcha.dataKey             = 'chkcapt';
Captcha.checkDomStorageMsg  = '인증예매를 사용하시려면 브라우저 설정을 변경해주세요.\tInternet Explorer의 설정 -> 인터넷옵션 -> \'고급\' 탭 -> \'보안＇ 항목 중 "DOM 저장소 사용" 항목을 선택하여 주세요.';

/**
 * 인증예매(캡챠) 초기화
 *
 * @param useYn
 */
Captcha.prototype.init = function(useYn) {
    if (useYn == 'Y') this.use = true;
    if (!this.use) return;

    // IE 대응 (브라우저 옵션중 'DOM 저장소' 옵션 미사용으로 되어 있을 경우 경고)
    Captcha.checkDomStorageIE(this.use);
    // 인증예매(캡챠) 인증완료여부 체크
    this.checkState(this.use);
    // 이벤트
    this.action(this.use);
}

/**
 * 인증예매(캡챠) 인증완료여부 체크
 *
 * @param captchaUse
 */
Captcha.prototype.checkState = function(captchaUse) {
    if (!captchaUse) return;

    if (Captcha.getData() != '' && Captcha.getData() != 'N' && Captcha.getData() != null) {
        var captchaObjTemp = this;
        var captStr = (Captcha.getData() == null || Captcha.getData() == '')?$('#captchaEncStr').val():Captcha.getData();
        $.ajax({
            type : 'POST',
            url  : '/reservation/ajax/checkCaptchaComplete.json',
            data : {
                    'chkcapt' 	: captStr,
                    'prodId' 	: $("#prodId").val()
            },
            success : function(res){
                if (res.CODE == '0000') captchaObjTemp.hide();
                else captchaObjTemp.show();
            },
            error:function(e){
                alert('요청사항을 처리중 오류가 발생했습니다.');
            }
        });
    }else{
        Captcha.setData('');
    }
}

/**
 * 인증예매(캡챠) 이벤트
 */
Captcha.prototype.action = function(captchaUse) {
    if (!captchaUse) return;

    this.actionReload();        // 새로고침
    this.actionAudio();         // 음성듣기
    this.actionComplete();      // 입력완료
    this.actionLater();         // '나중에하기'
    this.actionEnter();         // Enter Event
};

/**
 * 인증예매(캡챠) 새로고침 버튼 이벤트
 */
Captcha.prototype.actionReload = function() {
    if ($('#btnReload').length <= 0) return;

    $('#btnReload').click(function(){
        $.ajax({
            type : 'GET',
            url  : '/reservation/ajax/captChaImage.json?prodId=' + document.sForm.prodId.value + '&scheduleNo=' + document.sForm.scheduleNo.value + '&t=' + new Date().getTime(),
            success : function(result){
                $("#captchaImg").attr('src', 'data:image/png;base64,' + result.CAPTIMAGE);
                $('#captchaEncStr').val(result.CAPTDATA);
                Captcha.setData('');
            },
            error:function(e){
                alert('요청사항을 처리중 오류가 발생했습니다.');
            }
        });
    });
}

/**
 * 인증예매(캡챠) 음성듣기 버튼 이벤트
 */
Captcha.prototype.actionAudio = function() {
    if ($('#btnAudio').length <= 0) return;

    $('#btnAudio').click(function(){
        var captStr = (Captcha.getData() == null || Captcha.getData() == '')?$('#captchaEncStr').val():Captcha.getData();
        var soundUrl = '/reservation/ajax/captChaAudio.htm?chkcapt=' + encodeURIComponent(captStr) + '&nocache=' + new Date().getTime();
        if (Captcha.checkIE()) {
            $('#audioCaptcha').html(' <bgsound src="' + (soundUrl+'?agent=msie&rand='+ Math.random()) + '">');		// IE
        } else if (!!document.createElement('audio').canPlayType) {
            try {
//					new Audio(soundUrl).play();
                $('#audioCaptcha').html(' <audio autoplay><source src="' + soundUrl + '" type="audio/wav"></audio>');   // preload="auto" controls loop
            } catch(e) {
                $('#audioCaptcha').html(' <bgsound src="' + soundUrl + '">');
            }
        } else {
            window.open(soundUrl, '', 'width=1,height=1');
        }
    });
}

/**
 * 인증예매(캡챠) 입력완료 버튼 이벤트
 */
Captcha.prototype.actionComplete = function() {
    if ($('#btnComplete').length <= 0) return;

    $('#btnComplete').click({obj: this}, function(e) {
        e.preventDefault();
        e.data.obj.checkCaptcha();
    });
}

/**
 * 인증예매(캡챠) '좌석 먼저 보고 나중에 입력하기' 버튼 이벤트
 */
Captcha.prototype.actionLater = function() {
    if ($('#btn_later').length <= 0) return;

    $('#btn_later').click(function(event) {
        event.preventDefault();
        $("#certification").hide();
        $('#btn_later').text('좌석 선택 다시 하기');
    });
}

/**
 * 인증예매(캡챠) 입력박스 엔터키 이벤트
 */
Captcha.prototype.actionEnter = function() {
    if ($('#label-for-captcha').length <= 0) return;

    $('#label-for-captcha').keypress({obj: this}, function (e) {
        if (e.which == 13) e.data.obj.checkCaptcha();
    });
}


/**
 *  인증예매(캡챠) '입력완료' 문자 체크
 */
Captcha.prototype.checkCaptcha = function() {
    if (!this.use) return;

	if( $('#label-for-captcha').val() == '' ){
		$('#label-for-captcha').css('border-color', '#e17f31');
		$('#errorMessage').show();
    	$('#errorMessage').text('문자를 입력해 주세요');
    	return;
	}

    var captStr = (Captcha.getData() == null || Captcha.getData() == '')?$('#captchaEncStr').val():Captcha.getData();
	$.ajax({
		type : 'POST',
        url  : '/reservation/ajax/checkCaptcha.json',
        data : {
        			'userCaptStr'   : $('#label-for-captcha').val(),
        			'chkcapt' 	    : captStr,
					'prodId'	 	: $('#prodId').val(),
					'scheduleNo' 	: $('#scheduleNo').val(),
					'pocCode'	 	: $('#pocCode').val(),
					'sellTypeCode'	: $('#sellTypeCode').val()
		},
        success : function(res){
			if (res.CODE == '0000') {
                $('#certification').hide();
                $('#label-for-captcha').val('');

                if (res.DATA != undefined) Captcha.setData(res.DATA);
			}else{
				$('#label-for-captcha').css('border-color', '#e17f31');
				$('#errorMessage').show();
				$('#errorMessage').text('문자를 정확히 입력해 주세요');
			}
        },
        error:function(e){
            alert('요청사항을 처리중 오류가 발생했습니다.');
        }
	});
}

/**
 * 인증예매(캡챠) 팝업 활성화
 */
Captcha.prototype.show = function(){
    if (!this.use) return;
    if ($('#certification').length > 0) $('#certification').show();
}

/**
 * 인증예매(캡챠) 팝업 비활성화
 */
Captcha.prototype.hide = function(){
    if (!this.use) return;
    if ($('#certification').length > 0) $('#certification').hide();
}

/**
 * sessionStorage 지원여부 체크
 *
 * @returns {boolean}
 */
Captcha.supportsStorage = function() {
    try {
       return 'sessionStorage' in window && window.sessionStorage !== null;
//         return !!window.sessionStorage;
    } catch (a) {
        return false;
    }
};

/**
 * 'DOM 저장소' 설정 여부 체크 (IE)
 *      - IE는 쿠키 사용, DOM 저장소  별도로 설정 가능
 */
Captcha.checkDomStorageIE = function(captchaUse) {
    if (!captchaUse) return;

    if (Captcha.checkIE() && !Captcha.supportsStorage())
        alert(Captcha.checkDomStorageMsg);
}


/**
 * 인증예매(캡챠) 완료여부값 Set
 *
 * @param dataKey
 * @param dataValue
 */
Captcha.setData = function(dataValue) {
    if (Captcha.supportsStorage()) 
        sessionStorage.setItem(Captcha.dataKey, dataValue);
};


/**
 * 인증예매(캡챠) 완료여부값 Get
 *
 * @param dataKey
 * @param dataValue
 */
Captcha.getData = function() {
    if (Captcha.supportsStorage()) {
        return sessionStorage.getItem(Captcha.dataKey);
    }else{
        return '';
    }
};

/**
 * IE Check
 *
 * @param dataKey
 * @param dataValue
 */
Captcha.checkIE = function() {
    var userAgentVal = navigator.userAgent;
    if (userAgentVal.indexOf('Trident') > -1 || userAgentVal.indexOf('MSIE') > -1 || userAgentVal.indexOf('Edge') > -1)
        return true;
    else
        return false;
};

define("ticketCaptchaUtil", function(){});

define('js/app/performance/service/performanceService',[
    "jquery",
    "underscore",
    "ticketDomain",
    "ticketUtil",
    "ticketStringUtil",
    "ticketCode",
    "js/app/performance/view/performanceView",
    "js/app/performance/util/performanceUtil",
    "js/app/common/model/commonModel",
    "js/common/util/commonMessageUtil",
    "js/app/performance/service/scheduleService",
    "js/app/performance/service/performanceCommonService",
    "ticketCaptchaUtil"

], function ( $,underscore, tktDomain, tktUtil,
              ticketStringUtil, ticketCode, performanceView, pUtil, commonModel, commonMessageUtil,
              scheduleService, performanceCommonService, ticketCaptchaUtil  ) {

    'use strict';

    var exports = {};

    function init(prodId) {
        var initObj = {
            prodId:prodId,
            ticketGateYn:$("#global_ticket_gate_yn").val(),
            reflashYn:"N"
        };

        _initUI();
        _cookieSetting();
        commonUtil.ieBrowserCheck();  //IE 브라우저 체크
        _captchaSetting();
        castingCalendarInit();
        scheduleService.init(initObj);
    }


    /**
     * 회차 카운트 다운 후 리프레쉬 함수
     * @param params
     */
    exports.reflashScheduleInit = function(params) {

        var initObj = {
            prodId:params.prodId,
            ticketGateYn:$("#global_ticket_gate_yn").val(),
            reflashYn:params.reflashYn
        };

        scheduleService.init(initObj);
    };

    /**
     * 캐스팅 캘린더 노출관련 함수
     * 기업할인이 적용될 경우 노출 하지 않음
     */
    function castingCalendarInit(){
        var tempCorporateDcDataArray = [];
        var tempCorpCodeNo = getCookie('corpCodeNo');
        var castingYn = $("#global_ticket_castingYn").val();
        var corporateDcData = $("#global_ticket_corporateDcData").val();
        var $castingInfoBtn = $("#castingInfoBtn");

        if(corporateDcData != null && corporateDcData != "") {
            tempCorporateDcDataArray = corporateDcData.split(",");
        }

        var chk = _.contains(tempCorporateDcDataArray,tempCorpCodeNo);

        if ( chk || castingYn != "Y" ) {
            $castingInfoBtn.hide();
        } else {
            $castingInfoBtn.show();
        }
    }

    function _cookieSetting(){
        setCookie("NetFunnel_ID", "WP15", 0, "/", MELON.WEBSVC.POC.melonDomain);
    }

    /**
     * 캡챠 초기 셋팅 함수
     * @private
     */
    function _captchaSetting(){

        // IE 대응 (브라우저 옵션중 'DOM 저장소' 옵션 미사용으로 되어 있을 경우 경고)  [CAPTCHA]
        try {
            Captcha.checkDomStorageIE($("#global_ticket_captcha_yn").val() == 'Y' ? true : false );
        } catch(e) {}

        //captchaSetCookie
        // remove cookie
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + 0 );
        document.cookie = "ARY=; path=/; expires=" + todayDate.toGMTString() + ";"
        document.cookie = "ARY_CW=; path=/; expires=" + todayDate.toGMTString() + ";"
    }

    /**
     * UI 시작함수
     * @private
     */
    function _initUI(){
        performanceView.view.relationPerformanceInit();
        performanceView.view.rankingInit();
    }


    return {
        init:init,
        service:exports
    };
});
define('js/app/forU/view/foruView',[
    "jquery",
    "underscore",
    "ticketUtil"

], function ( $ ,underscore,ticketUtil) {
    'use strict';

    var exports = {};

    function init() {

    }

    /**
     * 페이지 로딩시 실행(로그인 o)
     * 상품상세 출연진 체크 버튼 셋팅 함수
     * @param result
     */
    exports.performanceArtistListBtnSetting = function( result ) {
        try {
            var artistCheckList = result.artistCheckList;

            _.each(artistCheckList,function (obj) {
                var checkYn = obj.checkYn;
                var artistId = obj.artistId;

                if (checkYn === "Y") {
                    $("#chk_foruArtist_"+artistId).attr('class', 'btn_check on');
                } else {
                    $("#chk_foruArtist_"+artistId).attr('class', 'btn_check');
                }
            });

        } catch(e) {

        }
    };

    /**
      페이지 로딩시 실행(로그인 x)
     * 상품상세 출연진 체크 버튼 셋팅 함수
     */
    exports.performanceArtistListBtnOff = function( ) {
        $('input[id^=chk_foruArtist]').attr('class', 'btn_check');  //출연진 forU 표시 off
    };


    /**
     * 페이지 로딩시 실행
     * 상품상세 공연플래너 버튼 셋팅 함수
     * @param result
     */
    exports.performancePlannerBtnSetting = function( result ) {
        var $productPlannerBtnEl = $('#btn_add_planner');
        var $productPlannerTextEl = $('#foruText');

        try {
            var stateFlg = result.stateFlg;
            var interestPrefYn = result.interestPrefYn;

            if ( stateFlg != "SS0600"  ) { //공연완료/패키지 상품
                if(interestPrefYn == "Y") {
                    $productPlannerBtnEl.attr('class', 'btn_like_radius');
                    $productPlannerTextEl.text("공연플래너");
                } else {
                    $productPlannerBtnEl.attr('class', 'btn_like_radius_off');
                    $productPlannerTextEl.text("공연플래너 담기");
                }
            }
        } catch(e) {

        }
    };

    /**
     * 공연 플래너 비활성화 함수
     * @private
     */
    exports.foruInfoOff = function( ) {
        var $productPlannerBtnEl = $('#btn_add_planner');
        var $productPlannerTextEl = $('#foruText');

        try {
            $productPlannerBtnEl.attr('class', 'btn_like_radius_off');
            $productPlannerTextEl.text("공연플래너 담기");
        } catch(e) {

        }
    };




    /**
     * 공연 플래너 담기 버튼 Y/N
     * @param result
     */
    exports.productAddPlannerView = function( result ) {
        var interestFlgYn = result.interestFlg;
        var $productPlannerBtn = $("#btn_add_planner");
        var $productPlannerText = $("#foruText");

        if( 'Y' === interestFlgYn ) {
            $productPlannerBtn.addClass('btn_like_radius').removeClass('btn_like_radius_off');
            $productPlannerText.text('공연플래너');

            commonUtil.toast('공연플래너에 추가되었습니다.',1);
        } else if('N' === interestFlgYn) {
            $productPlannerBtn.addClass('btn_like_radius_off').removeClass('btn_like_radius');
            $productPlannerText.text('공연플래너 담기');

            commonUtil.toast('공연플래너에서 삭제되었습니다.',1);
        }
    };

    /**
     * 상품상세 출연진 체크박스
     * 체크 여부
     * @param result
     * @param artistId
     */
    exports.productAddArtistView = function( result, artistId ) {
        var artistYn = result.addYn;

        if( 'Y' === artistYn ) {
            commonUtil.toast('나의 취향 아티스트에 추가되었습니다.</br>For U에서 확인하세요.',2);
            $("#chk_foruArtist_"+artistId).addClass('on')
        } else {
            commonUtil.toast('나의 취향 아티스트에서 삭제되었습니다',1);
            $("#chk_foruArtist_"+artistId).removeClass('on');
        }
    };



    return {
        init:init,
        view:exports
    };
});
define('js/app/forU/service/foruService',[
    "jquery",
    "underscore",
    "ticketDomain",
    "ticketUtil",
    "js/app/common/model/commonModel",
    "js/common/util/commonMessageUtil",
    "ticketCode",
    "js/app/forU/view/foruView"
], function ( $,underscore, tktDomain, tktUtil, commonModel, commonMessageUtil
            ,ticketCode, foruView ) {
    'use strict';

    var exports = {};

    function init() {

    }


    /**
     * 멜론 로그인시 실행 함수
     * 상품상세 공연플래너 담기 버튼 노출여부
     * @param prodId
     * @private
     */
    function _foruInfo( prodId ) {

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/poc/foruInfo.json";
        var paramsData = {
             prodId:prodId
        };

        var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {
            var resultCode = result.resultCode;

            if ( resultCode == 1 ) {
                foruView.view.performancePlannerBtnSetting(result);
                foruView.view.performanceArtistListBtnSetting(result);

            } else {
                commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
            }
        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(result);
        });
    }


    /**
     * 상품상세 : 공연플래너 담기 버튼 활성화 여부 값
     *
     */
    exports.foruInfoInit = function( prodId ) {
        if ( isMelonLogin() ) {
            _foruInfo(prodId);
        } else {
            foruView.view.foruInfoOff();
            foruView.view.performanceArtistListBtnOff();
        }
    };


    /**
     * 공연 플래너 담기
     *
     * @param pElem 		- 공연플래너 담기 Dom
     * @param pCallback 	- 공연플래너 담기 후 실행할 콜백
     */
    exports.addPlanner = function( prodId ) {

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/poc/ajax/togglePlanner.json";
        var paramsData = {
            prodId:prodId
        };

        var ajaxCall = commonModel.model.postCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {
            var resultCode = result.resultCode;

            if( resultCode === 1 ) {
                foruView.view.productAddPlannerView(result);
            } else {
                commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
            }
        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(result);
        });
    };

    /**
     * ForU 아티스트 등록 / 해제
     */
    exports.toggleForUArtist = function( artistid ) {

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/poc/ajax/toggleRecmdArtist.json";
        var paramsData = {
            artistId:artistid
        };

        var ajaxCall = commonModel.model.postCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {
            var resultCode = result.resultCode;

            if( resultCode === 1 ) {
                foruView.view.productAddArtistView(result, artistid);
            } else {
                commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
            }
        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(result);
        });
    };





    return {
        init:init,
        service:exports
    };
});
define('js/app/common/service/snsService',[
    "jquery",
    "underscore",
    "ticketDomain",
    "ticketUtil",
    "ticketCode",
    "js/app/common/model/commonModel",
    "js/common/util/commonMessageUtil"
], function ( $,underscore, tktDomain, tktUtil,ticketCode, commonModel, commonMessageUtil ) {
    'use strict';

    var exports = {};

    function init() {

    }


    /**
     * 트위터 공유
     *
     * title : 공유시 타이틀
     * params : 조회할 파라미터를 넘겨 받음.
     * Deprecated url : 공유 되어야 될 URL, 단축URL 사용하기를 권장
     * delim : title, url 사이에 들어갈 구분자
     */
    exports.shareTwitter = function( prodId, title, params ) {
        var url = _getLandingUrl(params);

        var encodeUrl = url;
        var shortURLApi =  commonDomain.GLOBAL_APP_MELON_HTTPS + '/cds/support/mobile2/sns_informNShortenUrl.json';
        var tmpURL = shortURLApi + '?' + $.param({ longUrl:encodeUrl });

        //단축 URL 생성
        var ajaxCall = commonModel.model.postJSONPCookiePermissionAjax( tmpURL, {} );

        ajaxCall.then(function(result, status, xhr) {
            _twitterFeed(result, title, encodeUrl, url );
        }).then(function(callback1) {
            ticketWriteLog( prodId, 'twitter' );
        }, function() {
            commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
        });
    };

    /**
     * 트위터 feed
     * @param result
     * @param encodeUrl
     * @param url
     * @private
     */
    function _twitterFeed(result,title, encodeUrl, url ) {
        var res = JSON.parse(result.resultStr);
        var shortUrl = res.results[encodeUrl].shortUrl;  //단축 URL

        var queryString = $.param({
            text:title
            ,url:shortUrl
            ,original_referer:url
        });

        var createUrl = "https://twitter.com/intent/tweet?" + queryString;

        if ( _isMobile() ) {
            window.open(createUrl);
        } else {
            window.open(createUrl, 'twitter', 'scrollbars=no,toolbar=no,resizable=no,width=700,height=300,left=0,top=0');
        }
    }

    /**
     * 페이스북 공유
     *
     * name : 제목
     * picture : 공유시 표기되는 이미지 경로
     * params : 조회할 파라미터를 넘겨 받음.
     * Deprecated link : 공유 URL(단축 URL로 호출)
     * redirect_uri : 공유 후 돌아오는 URL
     */
    exports.shareFacebook = function( prodId, name, picture, params, redirect_uri, description ) {

        var url = _getLandingUrl(params);

        var encodeUrl = url;
        var shortURLApi =  commonDomain.GLOBAL_APP_MELON_HTTPS + '/cds/support/mobile2/sns_informNShortenUrl.json';
        var tmpURL = shortURLApi + '?' + $.param({ longUrl:encodeUrl });

        //단축 URL 생성
        var ajaxCall = commonModel.model.postJSONPCookiePermissionAjax( tmpURL, {} );

        ajaxCall.then(function(result, status, xhr) {
            _facebookFeed( result, encodeUrl, "", name, picture, description );
        }).then(function(callback1) {
            ticketWriteLog( prodId, 'facebook' );
        }, function() {
            commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
        });
    };

    exports.shareFacebookWithUrl = function(params) {

        var url = _getLandingUrl(params);

        var encodeUrl = url;
        var shortURLApi =  commonDomain.GLOBAL_APP_MELON_HTTPS + '/cds/support/mobile2/sns_informNShortenUrl.json';
        var tmpURL = shortURLApi + '?' + $.param({ longUrl:encodeUrl });

        //단축 URL 생성
        var ajaxCall = commonModel.model.postJSONPCookiePermissionAjax( tmpURL, {} );

        ajaxCall.then(function(result, status, xhr) {
            _facebookFeedWithUrl(result, encodeUrl);
        }).then(function(callback1) {
            ticketWriteLog( prodId, 'facebook' );
        }, function() {
            commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
        });
    };

    /**
     * 페이스북 feed
     * @param result
     * @param encodeUrl
     * @param url
     * @param name
     * @param picture
     * @param description
     * @private
     */
    function _facebookFeed(result, encodeUrl, pUrl, name, picture, description ) {
        var res = JSON.parse(result.resultStr);
        var shortUrl = res.results[encodeUrl].shortUrl;  //단축 URL

        var queryObj = {
            app_id: commonCode.facebookAppId
            ,redirect_uri:pUrl
            ,name: name
            ,picture: picture
            ,link: shortUrl
            ,description: description
            ,caption: "ticket.melon.com"
            ,display: "popup"
        };

        var queryString = $.param(queryObj);

        var createUrl = "https://www.facebook.com/dialog/feed?" + queryString;

        if ( _isMobile() ) {
            window.open(createUrl);
        } else {
            window.open(createUrl, 'facebook', 'scrollbars=no,toolbar=no,resizable=no,width=700,height=350,left=0,top=0');
        }
    }

    function _facebookFeedWithUrl(result, encodeUrl) {
        var res = JSON.parse(result.resultStr);
        var shortUrl = res.results[encodeUrl].shortUrl;  //단축 URL

        var createUrl = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shortUrl);

        if ( _isMobile() ) {
            window.open(createUrl);
        } else {
            window.open(createUrl, 'facebook', 'scrollbars=no,toolbar=no,resizable=no,width=700,height=350,left=0,top=0');
        }
    }

    /**
     * 로그 생성
     * 예)
     * /logdata/melon/cds_stats/snsOutPosting.log.2019121313
     *
     * @param prodId
     * @param snsType
     */
    function ticketWriteLog( prodId, snsType ) {
        if( isMelonLogin() ) {

            var paramUrl = commonDomain.GLOBAL_TICKET_HTTPS + "/performance/ajax/writeLog.json";
            var paramData = {
                snsCompany:snsType,
                contsId:prodId
            };

            var ajaxCall = commonModel.model.getDefaultAjax(paramUrl, paramData );
        }
    }


    /**
     * 랜딩 URL을 거쳐서 url을 도출
     * paramObj : object 를 넘기는 경우 파라미터를 풀어서 쿼리화하고 그렇지 않으면 문자열로 간주하여 그대로 합침.
     * result: 랜딩 URL을 도출
     */
    function _getLandingUrl( paramObj ) {
        var landingUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/gate/landing.htm";

        return landingUrl + '?' + (typeof paramObj == 'object' ? $.param(paramObj) : paramObj);
    }

    /**
     * 모바일 체크
     *
     * @returns {Boolean} true : 모바일, false : 웹
     */
    function _isMobile() {
        if(! navigator.userAgent.match(/Android/i) &&
            ! navigator.userAgent.match(/webOS/i) &&
            ! navigator.userAgent.match(/iPhone/i) &&
            ! navigator.userAgent.match(/iPod/i) &&
            ! navigator.userAgent.match(/iPad/i) &&
            ! navigator.userAgent.match(/Blackberry/i) )
        {
            return false;
        }

        return true;
    }




    return {
        init:init,
        service:exports
    };
});
define('js/app/common/view/popupView',[
    "jquery",
    "ticketUtil",
    "Handlebars"

], function ( $ ,ticketUtil, Handlebars ) {
    'use strict';

    var exports = {};

    function init() {

    }


    /**
     * 공통 핸들바 템플릿 출력 함수
     * 예)
     * var printData = {
          removeEl : "#noticeAlert",
          templateEl : "#noticeAlert_template",
          objectData : alertMessage,
          showEl : "#noticeAlert"
       };
     * @param objData
     */
    exports.templatePrint = function( objData ) {
        $(objData.removeEl).remove();

        var source = $(objData.templateEl).html();

        var template = Handlebars.compile(source);

        var html = template(objData);

        $("#wrap").append(html);

        window.scrollTo(0,0);

        $(objData.showEl).show();
    };




    return {
        init:init,
        view:exports
    };
});
define('js/app/common/service/popupService',[
    "jquery",
    "underscore",
    "ticketUtil",
    "ticketStringUtil",
    "js/app/common/view/popupView"
], function ( $,underscore,ticketUtil, ticketStringUtil, popupView  ) {
    'use strict';

    var exports = {};

    function init(prodId) {

    }

    function alertView(alertMessage) {
        var printData = {
            removeEl : "#noticeAlert",
            templateEl : "#noticeAlert_template",
            objectData : alertMessage,
            showEl : "#noticeAlert"
        };

        popupView.view.templatePrint(printData);
    }

    function captchaView(){
        // var btnchk =  $(".btn_arr_down_red").length;
        //
        // //페이지 진입시  인증예매(캡챠) 팝업 활성화 처리 [CAPTCHA]
        // if(btnchk > 0){
        //     openLayerPop('certification',$(".btn_arr_down_red").get(0), 50, -150);
        // }
    }

    function findRedundancyArrayCheck(performance_layer_alert_array, prodId) {
        return _.some(performance_layer_alert_array, function(val){
            return val === prodId;
        });
    }


    /**
     * 상품 상세 긴급 alert 메시지 함수
     */
    exports.performanceAlertMessageInit = function( alertParams ) {

        var prodId = alertParams.prodId;
        var coop = commonUtil.getQueryVariable('coop');
        var coop_funnel = commonUtil.getQueryVariable('coop_funnel');
        var naver_coop = getCookie("hide_coop_banner");

        var performance_layer_alert_array = ( getCookie("performance_layer_alert") != null ) ? getCookie("performance_layer_alert").split(",") : [];
        var isNoticeAlertYn = alertParams.alertYn;
        var isAuthRsrvYn = alertParams.captchaYn;
        var alertMessage = alertParams.alertMessage;

        //중복 체크
        var pushChk = findRedundancyArrayCheck(performance_layer_alert_array,prodId);

        if ( isNoticeAlertYn === "Y" && !pushChk ) { //긴급 alert 사용일 경우만 실행
            if( commonStringUtil.isEmpty(coop) && commonStringUtil.isEmpty(coop_funnel) ){  //네이버 쿠폰 url 주소가 없을 경우 실행
                alertView(alertMessage);
            } else if(naver_coop != null && naver_coop != "") { //네이버 쿠폰 다시 보지 않기 클릭 되어 있을 경우 실행
                alertView(alertMessage);
            }

        } else if( isAuthRsrvYn == 'Y' ) {  //캡챠 사용일 경우만 실행
            if( commonStringUtil.isEmpty(coop) && commonStringUtil.isEmpty(coop_funnel) ){  //네이버 쿠폰 url 주소가 없을 경우 실행
                captchaView();
            } else if(naver_coop != null && naver_coop != "") { //네이버 쿠폰 다시 보지 않기 클릭 되어 있을 경우 실행
                captchaView();
            }
        }
    };

    /**
     * 상품상세 긴급 alert 버튼 클릭시 함수
     * @param alertParams
     */
    exports.performanceAlertMessageBtn = function( alertParams ) {
        var prodId = alertParams.prodId;
        var ischecked = alertParams.ischecked;

        var performance_layer_alert_array = ( getCookie("performance_layer_alert") != null ) ? getCookie("performance_layer_alert").split(",") : [];

        if ( ischecked ) {

            if( _.isArray(performance_layer_alert_array) ) {
                //중복 체크
                var pushChk = findRedundancyArrayCheck(performance_layer_alert_array,prodId);

                if( !pushChk ) { //중복 값이 없을 경우 push
                    performance_layer_alert_array.push(prodId);
                }
            }

            //쿠키 생성
            setCookie("performance_layer_alert",performance_layer_alert_array, 1, "/", DeployPhaseUtils.convertUrl("ticket.melon.com"));

            $("#noticeAlert").remove();
        } else { //체크 x
            //쿠키 값 삭제
            performance_layer_alert_array.splice(performance_layer_alert_array.indexOf(prodId),1);

            //쿠키 생성
            setCookie("performance_layer_alert",performance_layer_alert_array, 1, "/", DeployPhaseUtils.convertUrl("ticket.melon.com"));
        }
    };

    return {
        init:init,
        service:exports
    };
});

define('js/app/performance/service/reservationCommonService',[
    "jquery",
    "underscore",
    "js/app/common/model/commonModel",
    "js/app/performance/service/performanceCommonService",
    "js/app/performance/service/netfunnelService",
    "js/app/common/service/loginService",
    "js/common/util/commonMessageUtil",
    "ticketDomain",
    "ticketUtil",
    "js/app/performance/util/performanceUtil",
    "ticketStringUtil",
    "ticketCaptchaUtil"
], function ( $,underscore
    , commonModel, performanceCommonService, netfunnelService, loginService
    , commonMessageUtil
    ,ticketDomain, ticketUtil, pUtil
    , ticketStringUtil, ticketCaptchaUtil ) {

    'use strict';

    var exports = {};

    function init( ) {

    }

    /**
     * 세션키 조회
     * @param params
     * @private
     */
    exports.generateSessionKey = function(params) {
        var deferred = $.Deferred();

        Captcha.setData('');

        var prodId = params.prodId;

        var dto = {
            pocID:melon.getPocId(),
            prodId:prodId,
            memberKey:getMemberKey()
        };

        _sendBuyBtnClickLog(dto);

        var ajaxCall = _prodKeyAPI(params);

        ajaxCall.then(function(result) {
            var callbackData = _prodKeyAPI_Success(result);

            if(_.isObject(callbackData)) {
                deferred.resolve(callbackData);
            } else {
                deferred.reject();
            }
        }, function( ) {
            deferred.reject();
        });


        return deferred.promise();
    };

    /**
     * 원스탑 팝업 호출 함수
     * @param params
     * @private
     */
    exports.oneStopProcess = function(params) {
        var reservationType = params.reservationType;
        var netfunnelType = params.netfunnelType;

        window.open("", "onstopForm", "width=950px,height=646px");
        var frm = _IReservation( _FactoryFunction(reservationType), params, netfunnelType);

        frm.submit();
    };

    function _IReservation ( implementFunction, params, netfunnelType ) {
        if( netfunnelType === "Y" ) {
            return implementFunction.netfunnelOneStopPrint(params);
        } else {
            return implementFunction.oneStopPrint(params);
        }
    }


    /**
     * 객체 리턴 펙토리
     * @param type
     * @private
     */
    function _FactoryFunction( type ) {
        var result = {};

        switch (type) {
            case commonCode.SELL_TYPE_CODE1:  //일반예매
                result = _generalReservationImpl;
                break;
            case commonCode.SELL_TYPE_CODE2:  //선예매
                result = _preSaleReservationImpl;
                break;
            case commonCode.PROD_TYPE_CODE2:  //상시상품
                result = _ordinaryReservationImpl;
                break;
        }

        return result;
    }

    /**
     * 일반상품
     * 일반예매
     * @private
     */
    var _generalReservationImpl = {

        oneStopPrint : function(params) {
            var prodId = params.prodId;
            var scheduleNo = params.scheduleNo;
            var trafficCtrlYn = params.trafficCtrlYn;
            var sessionKey = params.sessionKey;
            var pocCode = params.pocCode;
            var sellTypeCode = params.sellTypeCode;

            var frm = document.oneForm;
            frm.action = commonDomain.GLOBAL_TICKET_HTTPS + '/reservation/popup/onestop.htm';
            frm.target = 'onstopForm';
            frm.prodId.value = prodId;
            frm.pocCode.value = pocCode;
            frm.scheduleNo.value = scheduleNo;
            frm.sellTypeCode.value = sellTypeCode;
            frm.tYn.value = trafficCtrlYn;
            frm.chk.value = encodeURIComponent(sessionKey);

            return frm;
        },
        netfunnelOneStopPrint : function(params) {
            var prodId = params.prodId;
            var pocCode = params.pocCode;
            var scheduleNo = params.scheduleNo;
            var sellTypeCode = params.sellTypeCode;
            var trafficCtrlYn = params.trafficCtrlYn;
            var sessionKey = params.sessionKey;
            var netfunnelkey = params.netfunnelkey;

            var frm = document.oneForm;
            frm.action = commonDomain.GLOBAL_TICKET_HTTPS + '/reservation/popup/onestop.htm';
            frm.target = 'onstopForm';
            frm.prodId.value = prodId;
            frm.pocCode.value = pocCode;
            frm.scheduleNo.value = scheduleNo;
            frm.sellTypeCode.value = sellTypeCode;
            frm.tYn.value = trafficCtrlYn;
            frm.chk.value = encodeURIComponent(sessionKey);
            frm.netfunnel_key.value = ":key=" + netfunnelkey + "&";

            return frm;
        }
    };

    /**
     * 일반상품
     * 선예매
     */
    var _preSaleReservationImpl = {

        oneStopPrint : function (params) {
            var prodId = params.prodId;
            var pocCode = params.pocCode;
            var scheduleNo = params.scheduleNo;
            var sellCondNo = params.sellCondNo;
            var sellTypeCode = params.sellTypeCode;
            var trafficCtrlYn = params.trafficCtrlYn;
            var sessionKey = params.sessionKey;

            var frm = document.oneForm;
            frm.action = commonDomain.GLOBAL_TICKET_HTTPS + '/reservation/popup/onestop.htm';
            frm.target = 'onstopForm';
            frm.prodId.value = prodId;
            frm.pocCode.value = pocCode;
            frm.scheduleNo.value = scheduleNo;
            frm.sellCondNo.value = sellCondNo;
            frm.sellTypeCode.value = sellTypeCode;
            frm.tYn.value = trafficCtrlYn;
            frm.chk.value = encodeURIComponent(sessionKey);

            return frm;
        },
        netfunnelOneStopPrint : function(params) {
            var prodId = params.prodId;
            var pocCode = params.pocCode;
            var sellTypeCode = params.sellTypeCode;
            var scheduleNo = params.scheduleNo;
            var sellCondNo = params.sellCondNo;
            var trafficCtrlYn = params.trafficCtrlYn;
            var sessionKey = params.sessionKey;
            var netfunnelkey = params.netfunnelkey;

            var frm = document.oneForm;
            frm.action = commonDomain.GLOBAL_TICKET_HTTPS + '/reservation/popup/onestop.htm';
            frm.target = 'onstopForm';
            frm.prodId.value = prodId;
            frm.pocCode.value = pocCode;
            frm.scheduleNo.value = scheduleNo;
            frm.sellCondNo.value = sellCondNo;
            frm.sellTypeCode.value = sellTypeCode;
            frm.tYn.value = trafficCtrlYn;
            frm.chk.value = encodeURIComponent(sessionKey);
            frm.netfunnel_key.value = ":key=" + netfunnelkey + "&";

            return frm;
        }
    };


    /**
     * 상시상품
     * @private
     */
    var _ordinaryReservationImpl = {

        oneStopPrint : function (params) {
            var prodId = params.prodId;
            var scheduleNo = params.scheduleNo;
            var pocCode = params.pocCode;
            var trafficCtrlYn = params.trafficCtrlYn;
            var sessionKey = params.sessionKey;

            var frm = document.oneForm;
            frm.action = commonDomain.GLOBAL_TICKET_HTTPS + '/reservation/popup/onestop.htm';
            frm.target = 'onstopForm';
            frm.prodId.value = prodId;
            frm.scheduleNo.value = scheduleNo;
            frm.pocCode.value = pocCode;
            frm.tYn.value = trafficCtrlYn;
            frm.chk.value = encodeURIComponent(sessionKey);

            return frm;
        },
        netfunnelOneStopPrint : function(params) {
            var prodId = params.prodId;
            var scheduleNo = params.scheduleNo;
            var pocCode = params.pocCode;
            var trafficCtrlYn = params.trafficCtrlYn;
            var sessionKey = params.sessionKey;
            var netfunnelkey = params.netfunnelkey;

            var frm = document.oneForm;
            frm.action = commonDomain.GLOBAL_TICKET_HTTPS + '/reservation/popup/onestop.htm';
            frm.target = 'onstopForm';
            frm.prodId.value = prodId;
            frm.scheduleNo.value = scheduleNo;
            frm.pocCode.value = pocCode;
            frm.tYn.value = trafficCtrlYn;
            frm.chk.value = encodeURIComponent(sessionKey);
            frm.netfunnel_key.value = ":key=" + netfunnelkey + "&";

            return frm;
        }
    };



    /**
     * 넷퍼넬 관련 값 완료시 실행 함수
     * @param result
     * @returns {{sessionKey: *, trafficCtrlYn: *, nf_action_id: string}|boolean}
     * @private
     */
    function _prodKeyAPI_Success( result ) {

        var resultCode = commonUtil.inputObjectValueCheck(result,['code']);

        if( resultCode == commonCode.EXTERNAL_SUCCESS1 ) {
            var nf_action_id = "";
            var sessionKey = commonUtil.inputObjectValueCheck(result,['key']);
            var trafficCtrlYn = commonUtil.inputObjectValueCheck(result,['trafficCtrlYn']);
            var scheduleNo = commonUtil.inputObjectValueCheck(result,['scheduleNo']);
            if ( trafficCtrlYn == "Y" ) {
                nf_action_id = commonUtil.inputObjectValueCheck(result,['nflActId']);
            }

            var callbackDTO = {
                sessionKey:sessionKey,
                trafficCtrlYn:trafficCtrlYn,
                nf_action_id:nf_action_id,
                scheduleNo:scheduleNo
            };

            return callbackDTO;
        } else if(resultCode == 'T8888' || resultCode == 'T8900' || resultCode == 'T9110') {
            var message = commonUtil.inputObjectValueCheck(result,['message']);
            alert(message);
        } else {
            alert("올바른 접근이 아닙니다.");
        }

        return false;
    }


    function _sendBuyBtnClickLog(params){
        var deferred = $.Deferred();

        var paramsUrl = commonDomain.GLOBAL_TICKET_HTTPS + "/public/buyBtnClick.html";
        var paramsData = {
            pocID:params.pocID,
            prodId:params.prodId,
            memberKey:params.memberKey
        };

        var ajaxCall = commonModel.model.getCookiePermissionAjaxHTML( paramsUrl, paramsData );

        ajaxCall.then(function(result) {
            deferred.resolve();
        }, function( ) {
            deferred.reject();
        });

        return deferred.promise();
    }

    /**
     * prodkey 조회
     * 넷퍼넬 아이디, 세션키, 사용여부 조회
     * @param params
     * @returns {any}
     * @private
     */
    function _prodKeyAPI(params) {
        var deferred = $.Deferred();

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/api/product/prodKey.json";
        var paramsData = {
            prodId:params.prodId,
            scheduleNo:params.scheduleNo,
            v:1
        };

        var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result) {
            deferred.resolve(result);
        }, function( ) {
            deferred.reject();
        });

        return deferred.promise();
    }

    return {
        init:init,
        service:exports
    };
});
/**
 * Copyright (c) 2008,2009,2010,2011,2012 AimToG. All rights reserved.
 * Code licensed under the AimToG License
 * Version 2.2.4
 *
 * @author jacojang<jacojang@aimtog.co.kr>
 * @author hkkang<hkkang@aimtog.co.kr>
 */
var NetFunnel = {}; NetFunnel.Skin = {};

//EditZoneStart ----------------------------------------------------------------
NetFunnel.TS_HOST        	= 'zam.melon.com';		// Default TS host
NetFunnel.TS_PORT			= 443;				// Default TS port
NetFunnel.TS_PROTO			= 'https';			// Default TS protocol [http|https]
NetFunnel.TS_QUERY			= 'ts.wseq';		// Default request query
NetFunnel.TS_SERVICE_ID		= 'service_1';		// Default TS Service id
NetFunnel.TS_ACTION_ID		= 'reservation';			// Default TS Action id
NetFunnel.TS_MAX_TTL		= 30;				// Default max ttl (second) 5~30
NetFunnel.TS_CONN_TIMEOUT	= 3;				// Default connect timeout (second)
NetFunnel.TS_CONN_RETRY		= 2;				// Default connect retry count
NetFunnel.TS_COOKIE_ID		= 'NetFunnel_ID';	// Default Cookie ID
NetFunnel.TS_COOKIE_TIME	= 10;				// Default Cookie Time (minute)
NetFunnel.TS_COOKIE_DOMAIN	= '.melon.com';				// Default Cookie Domain
NetFunnel.TS_BYPASS			= false;			// NetFunnel Routine Bypass [true|false]
NetFunnel.TS_POPUP_TOP		= false;			// Popup Top Position ( "false" is center )
NetFunnel.TS_POPUP_LEFT		= false;			// Popup Left Position ( "false" is center )
NetFunnel.TS_AUTO_COMPLETE	= false;				// Auto setComplete [true|false]
NetFunnel.TS_DEBUG_MODE		= false;			// Debug Mode
NetFunnel.TS_SHOWTIME_LIMIT	= 0;				// Show WaitTime Limit (second, 0 is Unlimited)
NetFunnel.TS_SHOWCNT_LIMIT	= 0;				// Show WaitUser Limit (0 is Unlimited)
NetFunnel.TS_SHOWNEXT_LIMIT	= 0;				// Show NextWaitUser Limit (0 is Unlimited)
NetFunnel.TS_LIMIT_TEXT		= '다수';				// SHOWCNT,SHOWNEXT Limit를 넘었을때 출력되는 문자열
NetFunnel.TS_IFRAME_RESIZE	= false;			// true | false
NetFunnel.TS_USE_UNFOCUS	= true;				// object unfocus after netfunnel call
NetFunnel.TS_VIRT_WAIT		= 10000;			// virtual wait time (millisecond)
NetFunnel.TS_USE_MOBILE_UI	= false;			// Mobile UI
NetFunnel.TS_POPUP_TARGET	= window;			// Popup target window
NetFunnel.TS_USE_FRAME_BLOCK= false;			// Block FrameSet Page
NetFunnel.TS_FRAME_BLOCK_LIST = [];				// Frame Block Window List
NetFunnel.TS_USE_PRE_WAIT	= false;			// Pre waiting popup use
NetFunnel.TS_USER_DATA_KEYS	= [{"key":"keyCookie", "type":"c"}];				// Input UserData Key & Type(c=cookie,v=variable)
												// ex) [ {"key":<user_data_key>, "type":<c|v>}, ... ]
NetFunnel.TS_CONFIG_USE		= false;			// 무조건 Config에 있는 IP 와 PORT로 사용
NetFunnel.TS_POPUP_ZINDEX	= 32000;			// 대기 Popup창의 z-index 값.
												// 대기창이 뒤로 숨지 않도록 적당한 값을 넣어줘야 한다.
NetFunnel.TS_IP_ERROR_RETRY	= true;				// Retry(Re-Issue) Where IP Validation Error

//일정 기간 동안 대기인원 변함 없을시 Bypass 처리
NetFunnel.TS_NWAIT_BYPASS		= true;				// 사용 유무
NetFunnel.TS_MAX_NWAIT_COUNT	= 100;				// 대기인원 반복 체크 기준값

//Server Block
NetFunnel.TS_BLOCK_MSG			= '판매가 마감 되었습니다.';// Server Block시 팝업에 표시할 문구
NetFunnel.TS_BLOCK_URL			= '';				// Server Block시 등록된 url로 이동(미등록시 경고창 후 서비스 진입 불가)
NetFunnel.TS_IPBLOCK_WAIT_COUNT	= 0;				// Server IP Block 가상대기창 반복 횟수
NetFunnel.TS_IPBLOCK_WAIT_TIME	= 5000;			// Server IP Block 가상대기시간

//대기창 미리보기
NetFunnel.TS_SHOW_WAIT_POPUP		= false;		//대기창 보기

//event skin 지정
NetFunnel.TS_SKIN_ID				= '';			// Skin ID (미지정시 default 대기창)

// Variable for MProtect
NetFunnel.MP_USE			= false;						// 매크로방지기능 사용유무 (true|false)
NetFunnel.MP_TIMELIMIT		= 20000;						// 사용자의 요청을 체크하기 위한 단위 시간 (ms)
NetFunnel.MP_MAXREQLIMIT	= NetFunnel.MP_TIMELIMIT/1100;	// TIMELIMIT 시간 내에 getTidChkEnter를 요청가능한 최대값
NetFunnel.MP_DEVLIMIT		= 20;							// 요청주기의 표준편차 제한값 (ms)
NetFunnel.MP_DEVCNTLIMIT	= 7;							// 표준편차 계산을 위한 item숫자
NetFunnel.MP_REQONLYLIMIT	= 10;							// setComplete 없이 getTidChkEnter만 요청한 횟수 제한값(횟수)
NetFunnel.MP_MINCOUNT		= 5;							// 계산을 하지 않는 자료개수

// Logo Image Data -------------------------------------------------------------
//   - height:16 pixel
//   - GIF Format Data (Base64 Encoding)
NetFunnel.gLogoData         = 'R0lGODlhJgAQAOe/AB5vlR5ykh9zkyNymCF0lC1xkiN1lSR2liZ3lyd4mDN1lyh5mSp6mjN4lCt7my18nDh5myt+mC59nTd7ly9+njF/nzp+mjKAoDt/mzOBoT+CnkCDn0KFoUOGokSHo0iLpk+SrlSWsl2ZsF6asWeYsWCbsmGcs2OetWSftla4Q1e5RFi6RVm7Rl+6TWK6RnaowXuou3WqvHipwmG8TmS9SGK9T2W+SWq8T2O+UH6rvmS/UX+sv2y+UWXAUoCtwIKuwYOvw4SwxIWxxW/DXYayxnfCXYezx3XDZXbEZom1yY21w4q2you4y3rIaXvJao67zoLKcpq6yonJcpe/zZu/1IrNfY3Nd6C/z5zA1ZrC0KHA0I7QgJ/D2KPD04/SgZbQgZDTgqPH0KbG1pbUiqvH0azM3LDM16PZkaLamLPP2q7Zn7bS3KncobfT3bHcorrW4LnfrbPirrrgrsTY5Lvhr7jkqsba5rzjsLrkt73kscjc6Mvc4rzluMzd49Dg59Hh6MfpvtLi6dPk6s3qxtfk5dTl687rx9Xm7Nbn7dPrz9Ts0Nfo79Xt0dnp8N3q69fv097r7OHq8uXq7d/s7eDt7uDw1ePs9Obs7uTt9eft79/y3uLw8Onu8ODz3+vw8+H14Ozx9O3y9er14u306e7z9uj26u/26+/19+n46/D37PD2+PL3+fL57vP4+/T67/T5/Pf59vX6/fj69/L89/X88Pn7+Pr8+ff9//v9+v78///9+//9//n///z/+/7//P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAAAmABAAAAj+AH2hSuXLl61SsHzp8pVLIcOHBSNKnDgxFY8VnXwlckHH1y2PBiuJakixZElUOlrocGWoBRxfuBS58vWpxRZbJnNKRKXSpqIWdB6x0JFCUZMWKhjpXMrTypkUTlzgWXHkjgsko3R4wbk0J08ovoq0aMEmxZAvW6rM0jGmq05TOqT4MpWiBR8oLfL0UOPqxphbC91SnFUHUMFHcTTJcgMGjShccgYtDUyxYSguWq5EWdXFjq9WWNp4mlJG4ZwrqvRcQVRQTBZfUbRkyULqDZWEug5RcLAAACUIQHxBIkAiUIIFYXz9cHApyQQJBT1Q8CVAwgIGiGAgIJXrlu4RBgXsUQjiKxKBEn8WOMCgCgiDS0okMBDhSzp1AxFjbGd4SH4BDpFQENwkBIzwBwIgSLCBD+8lIcEHC6TxwXQBSCCAAZ68gMApBenmQRBPIEIBDL40ct6BP5AhQQUMSLKEBH5wsGIFvgzQgBFCvCLDhgyJWEJBjkigQRonJADDHwns4EsIDDBASRIR9AGKBBNMJ4ACa5jRSgwM/EAEJIhcYEJEKEhgpgaq9OHADwVxQAEmTFDQhy9lLJCBLwdYQIEFjeRAwZ973LIJKBI5QkghqtwSSyYc+kIKJ7eowkktH2XCiS+WcKKpLadomkksAQEAOw==';
NetFunnel.gLogoText			= '';
NetFunnel.gLogoURL 			= 'https://www.netfunnel.co.kr';

NetFunnel.gPreWaitData		= 'R0lGODlhKAAoALMMAPj4+MTExPT09NTU1NPT08XFxcbGxsLCwtXV1cPDw/X19b+/v////wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAMACwAAAAAKAAoAAAEgJDJSau9OOvNu/9gKI5kaZ5oqq5sCwKIYSAABcv0qQRLvwQCyc73C5YGxB5BgkwuS4nk4iCJJqlQKdZKxJII0ifYaRLwfECJmZg2AQaFwqA2ecfnrry+dJvR80NoRi5NRE8uXD5eLYk9iyxjhnprgnt2cn97mpucnZ6foKGio3oRACH5BAkFAAwALAAAAAAoACgAAASAkMlJq7046827/2AojmRpnmiqrmwLAohhIAAFy/SpBEu/BALJzvcLlgbEHkGCTC5LieTiIIkmqVAp1krEkgjSJ9hpEvB8QImZmDYBBoXCoDZ5x+euvP4Vm9HzQ2hGLk1ETy5cPl4tiT2LLGOGemuCe3Zyf3uam5ydnp+goaKjnREAIfkECQUADAAsAAAAACgAKAAABICQyUmrvTjrzbv/YCiOZGmeaKqubAsCiGEgAAXL9KkES78EAsnO9wuWBsQeQYJMLkuJ5OIgiSapUCnWSsSSCNIn2GkS8HxAiZmYNgEGhcKgNnnH5668fnOb0fNDaEYuTURPLlw+Xi2JPYssY4Z6a4J7dnJ/e5qbnJ2en6ChoqOiEQAh+QQJBQAMACwAAAAAKAAoAAAEgJDJSau9OOvNu/9gKI5kaZ5oqq5sCwKIYSCAOynBoi+BYDOD3Y7wSwh1h+JxkbQRlkQJTEY7CXK7ngQn1JoAg0JhUJMEj1GX8dhUL9uk6azMeKJN3KyPce3uSWdCaWBiZCdrQnAsiDuKK3aCP316PwyEY3SVmpucnZ6foKGio6IRACH5BAkFAAwALAAAAAAoACgAAAR9kMlJq7046827/2AojmRpnmiqrmwLAohhIIA7KcGiL4FgM4PdjvBLCHWH4nGRtBGWRJsgt+v9GIBBoTCoXb/gDUxGo4xn3hJOaGWsq75S8BidC6Mk47GpFzbzS3yBJk90EoV3JlNscYtwJ1lbXWZaXGlhmJmam5ydnp+goBEAIfkECQUADAAsAAAAACgAKAAABH2QyUmrvTjrzbv/YCiOZGmeaKqubFsCiGEggDspwaIvgWAzg92O8EsIdYficZG0EZZEmyC36/0YgEGhMKhdv2ALTEajjGfeEk5oZayrvlLwGJ0LoyTjsakXNvNLfIEmT3QShXcmU2xxi3AnWVtdZlpcaWGYmZqbnJ2en6CgEQAh+QQJBQAMACwAAAAAKAAoAAAEfZDJSau9OOvNu/9gKI5kaZ5oqq5sqwKIYSCAOynBoi+BYDOD3Y7wSwh1h+JxkbQRlkSbILfr/RiAQaEwqF2/YGxs5pXAZLQTTmhlrKu+UvAYnQujJOOxqRc280t8gSZPdBKFdyZTbHGLcCdZW10UkVxlYZiZmpucnZ6foKARACH5BAUFAAwALAAAAAAoACgAAASBkMlJq7046827/2AojmRpnmiqrmyrAohhIIA7KcGiL4FgM4PdjvBLCHWH4nGRNMFktAlhSSzhhD2JILfLloLHKgMwKBQGNZPx2HSthe3WNDx5ztKlLdbHuHb5JWRmaBNgQmItbztxLIpIP3OHP3p/P2NlZ3iWm5ydnp+goaKjpD8RADs=';

NetFunnel.gFixelData		= 'R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==';
//EditZoneEnd ------------------------------------------------------------------
NetFunnel.RTYPE_NONE=0;NetFunnel.RTYPE_CHK_ENTER=5002;NetFunnel.RTYPE_ALIVE_NOTICE=5003;NetFunnel.RTYPE_SET_COMPLETE=5004;NetFunnel.RTYPE_GET_TID_CHK_ENTER=5101;NetFunnel.RTYPE_INIT=5105;NetFunnel.RTYPE_STOP=5106;NetFunnel.kSuccess=200;NetFunnel.kContinue=201;NetFunnel.kContinueDebug=202;NetFunnel.kTsBypass=300;NetFunnel.kTsBlock=301;NetFunnel.kTsIpBlock=302;NetFunnel.kTsExpressNumber=303;NetFunnel.kTsErrorNoUservice=500;NetFunnel.kTsErrorNoAction=501;NetFunnel.kTsErrorAComplete=502;NetFunnel.kTsErrorWrongServer=503;NetFunnel.kTsErrorTooRecreate=504;NetFunnel.kTsErrorNoKey=505;NetFunnel.kTsErrorInvalidID=506;NetFunnel.kTsErrorInvalidKey=507;NetFunnel.kTsErrorInvalidIdStr=508;NetFunnel.kTsErrorDuplicate=509;NetFunnel.kTsErrorDelAction=510;NetFunnel.kTsErrorUserviceExist=511;NetFunnel.kTsErrorActionExist=512;NetFunnel.kTsErrorLicenseOver=513;NetFunnel.kTsErrorSize=514;NetFunnel.kTsErrorNoUserAction=515;NetFunnel.kTsErrorTooBigKey=516;NetFunnel.kTsErrorInvalidIp=517;NetFunnel.kErrorAuth=900;NetFunnel.kErrorNotFound=901;NetFunnel.kErrorNoinit=902;NetFunnel.kErrorCode=903;NetFunnel.kErrorParam=904;NetFunnel.kErrorData=905;NetFunnel.kErrorUnknownType=906;NetFunnel.kErrorAlready=907;NetFunnel.kErrorService=908;NetFunnel.kErrorExecution=909;NetFunnel.kErrorSock=920;NetFunnel.kErrorSockSend=921;NetFunnel.kErrorSockRecv=922;NetFunnel.kErrorNotFoundLocalIP=925;NetFunnel.kErrorSockConnect=926;NetFunnel.kErrorNoConnect=927;NetFunnel.kErrorSockData=928;NetFunnel.kErrorIO=991;NetFunnel.kErrorArunning=992;NetFunnel.kErrorPermission=993;NetFunnel.kErrorExpiredTime=994;NetFunnel.kErrorOverCounter=995;NetFunnel.kErrorSecurity=996;NetFunnel.kErrorSystemStopping=997;NetFunnel.kErrorNotSupport=998;NetFunnel.kErrorSystem=999;NetFunnel.PS_N_RUNNING=0;NetFunnel.PS_RUNNING=1;NetFunnel.PS_CONTINUE=2;NetFunnel.PS_TIMEOUT=3;NetFunnel.PS_ERROR=99;NetFunnel.CONN_TIMEOUT_KEY="connection_timeout";NetFunnel.gControl=null;NetFunnel.gShowtimeLimit=false;NetFunnel.gShowcntLimit=false;NetFunnel.gShownextLimit=false;NetFunnel.gSkinId="";NetFunnel.gPopupTop=false;NetFunnel.gPopupLeft=false;NetFunnel.gTotWait=-1;NetFunnel.gPrevWaitTime=-1;NetFunnel.gLastSkinID="default";NetFunnel.gUseMobileUI=false;NetFunnel.gUseUnfocus=false;NetFunnel.gAlreadyProc=0;NetFunnel.gWaitPop=null;NetFunnel.gIPBlockWaitCount=0;NetFunnel.gNWaitCount=0;NetFunnel.gNWaitTemp=0;NetFunnel.gReTimer=null;NetFunnel.gDebugflag=false;NetFunnel.Util={makeDebugMsg:function(l,k,c,f,d){var b="\n";var a="       ";if(d==true){b="<br>";a="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}var j="Unknown";var h="Unkonwn Error";switch(k){case NetFunnel.RTYPE_GET_TID:j="getTicketID";break;case NetFunnel.RTYPE_CHK_ENTER:j="chkEnter";break;case NetFunnel.RTYPE_ALIVE_NOTICE:j="aliveNotice";break;case NetFunnel.RTYPE_SET_COMPLETE:j="setComplete";break;case NetFunnel.RTYPE_GET_TID_CHK_ENTER:j="getTID+ChkEnter";break;case NetFunnel.RTYPE_INIT:j="Init";break;case NetFunnel.RTYPE_STOP:j="stop";break;default:j="Unknown";break}switch(c){case NetFunnel.kSuccess:h="Normal";break;case NetFunnel.kContinue:h="Continue";break;case NetFunnel.kContinueDebug:h="Debug Continue mode";break;case NetFunnel.kTsBypass:h="ServerSide Bypass";break;case NetFunnel.kTsBlock:h="ServerSide Block";break;case NetFunnel.kTsIpBlock:h="ServerSide Ip Block";break;case NetFunnel.kErrorSystem:h="System Error";break;case NetFunnel.kErrorSecurity:h="Security Error";break;case NetFunnel.kErrorIO:h="I/O Error";break;case NetFunnel.kErrorSockConnect:h="Connection Timeout";break;case NetFunnel.kErrorAlready:h="Already Running";break;case NetFunnel.kErrorNoinit:h="Init Error";break;case NetFunnel.E_INSERT:h="Insert Error";break;case NetFunnel.kErrorPermission:h="No Permission";break;case NetFunnel.kErrorExpiredTime:h="Key Expire";break;case NetFunnel.kErrorParam:h="Parameter Error";break;case NetFunnel.E_NOT_STARTED:h="No service time";break;case NetFunnel.kTsErrorNoUserAction:h="No action Error";break;default:h="Unknown Error";break}var g=l+" "+b+b+"  - type : "+j+" ("+k+")"+b+" - Code : "+h+" ("+c+")"+b+" - Params"+b;for(var e in f){g+=a+e+" ---> "+f[e]+b}return g},goNextPage:function(b,d){var a=b;for(var c in d){a+="&"+c+"="+d[c]}document.location.href=a},alertDebugMsg:function(a){alert(a)},decodeBase64:function(d){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var a="";var l,j,g;var k,h,f,e;var c=0;d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{k=b.indexOf(d.charAt(c++));h=b.indexOf(d.charAt(c++));f=b.indexOf(d.charAt(c++));e=b.indexOf(d.charAt(c++));l=(k<<2)|(h>>4);j=((h&15)<<4)|(f>>2);g=((f&3)<<6)|e;a+=String.fromCharCode(l);if(f!=64){a+=String.fromCharCode(j)}if(e!=64){a+=String.fromCharCode(g)}}while(c<d.length);return a},getParam:function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)";var d=new RegExp(b);var c=d.exec(document.location.href);if(c===null){return""}return c[1]},isSmartPhone:function(){var b=["iPhone","iPod","iPad","BlakBerry","Android","WindowsCE","LG","MOT","SAMSUNG","SonyEricsson","Nokia","Webos","Opera mini","Opera mobi","Iemobile"];try{for(var a=0;a<b.length;a++){if(navigator.userAgent.match(b[a])!==null){return true}}}catch(c){}return false},calcStdDev:function(g,f){if(typeof g!="object"){return false}if(g.length<2){return false}if(f>1||f<0){f=0}var e=0,d=0;for(d=0;d<g.length;d++){e+=parseInt(g[d],10)}var a=e/g.length;var b=0;for(d=0;d<g.length;d++){b+=((parseInt(g[d],10)-a)*(parseInt(g[d],10)-a))}var c=Math.sqrt(b/(g.length-f));return c},delFocus:function(g){try{var f=document;if(typeof g=="object"&&typeof g.document=="object"){f=g.document}var b=f.getElementsByTagName("body")[0];var a=f.createElement("iframe");a.style.position="absolute";a.style.width="0px";a.style.height="0px";a.style.border="0px";a.style.top=NetFunnel.PopupUtil.getScrollTop(f);a.style.left=NetFunnel.PopupUtil.getScrollLeft(f);b.appendChild(a);a.focus();var c=a.parentNode;if(c&&typeof c=="object"){c.removeChild(a)}}catch(d){}},isVirtualWait:function(a){if(typeof a!="object"){return false}if(typeof a.mprotect=="number"&&a.mprotect>0){return true}return false},getTimeStr:function(g,E,L,b){var d=parseInt(g,10);if(typeof E=="undefined"){E="%H시간 %M분 %S초"}if(typeof L=="undefined"){L=" "}if(typeof b=="undefined"){b=false}var n=0;var c=0;var r=0;var C=0;var K=false;var I=false;var F=false;var x=false;var u=false;var G=E.match(/%[-]*[0-9]*[H|M|S]/g);for(C=0;C<G.length;C++){K=G[C];I=K.charAt(K.length-1);if(I=="H"){F=true}if(I=="M"){x=true}if(I=="S"){u=true}}if(F==true){c=Math.floor(d/3600)}if(x==true){if(F==true){n=Math.floor((d%3600)/60)}else{n=Math.floor(d/60)}}if(u==true){if(F==false&&x==false){r=d}else{if(x==true){r=d%60}else{if(F==true&&x==false){r=Math.floor(d%3600)}}}}var q="";var w=E.split(L);for(var D=0;D<w.length;D++){var o=w[D];G=o.match(/%[-]*[0-9]*[H|M|S]/g);var M=true;for(C=0;G&&C<G.length;C++){K=G[C];var p="";var H=false;var e="&nbsp;";var a=false;var v=0;I=K.charAt(K.length-1);if(K.length>2){var B="";var f=true;for(var A=1;A<K.length-1;A++){var z=K[A];if(z=="-"){a=true}else{if(z=="0"&&f==true){e="0";f=false;H=true}else{B+=z;H=true}}}v=parseInt(B,10)}var J="";if(I=="H"){if(c==0){M=false}J=""+c}else{if(I=="M"){if(n==0){M=false}J=""+n}else{if(I=="S"){J=""+r}}}if(H){if(a){p=J}var t=v-J.length;for(var y=0;y<t;y++){p+=e}if(!a){p+=J}}else{p=J}o=o.replace(K,p)}if(b==true||M==true){if(q.length>0){q=q+L+o}else{q=o}}}return q},getFrameWindowList:function(d){var c=[];for(var a=0;a<top.frames.length;a++){var b=top.frames[a];if(b===d){continue}c.push({win:b,popup:null})}return c}};NetFunnel.BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(d){for(var a=0;a<d.length;a++){var b=d[a].string;var c=d[a].prop;this.versionSearchString=d[a].versionSearch||d[a].identity;if(b){if(b.indexOf(d[a].subString)!=-1){return d[a].identity}}else{if(c){return d[a].identity}}}return""},searchVersion:function(b){var a=b.indexOf(this.versionSearchString);if(a==-1){return 0}return parseFloat(b.substring(a+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};NetFunnel.BrowserDetect.init();if(NetFunnel.BrowserDetect.browser=="Explorer"){if(typeof Array.push!="function"){Array.prototype.push=function(){var b=this.length>>>0;for(var a=0;a<arguments.length;a++){this[b]=arguments[a];b=b+1>>>0}this.length=b;return b}}if(typeof Array.pop!="function"){Array.prototype.pop=function(){var b=this.length>>>0,a;if(b){a=this[--b];delete this[b]}this.length=b;return a}}}NetFunnel.getCommandStr=function(f,e){var c="";var b=0;if(f=="recv"){b=parseInt(e.substring(0,4),10)}else{var d=/opcode=([0-9]+)&/;var a=d.exec(e);if(a.length>1){b=parseInt(a[1],10)}}switch(b){case 5101:c="getTidchkEnter";break;case 5002:c="chkEnter      ";break;case 5003:c="aliveNotice   ";break;case 5004:c="setComplete   ";break;default:c="Unknown       "}return c};NetFunnel.writeDebugMsg=function(j,i,c){var l=new Date();var e=parseInt(l.getHours(),10);var f=parseInt(l.getMinutes(),10);var k=parseInt(l.getSeconds(),10);var a=parseInt(l.getMilliseconds(),10);var g="";if(e<10){g+="0"}g+=e+":";if(f<10){f+="0"}g+=f+":";if(k<10){k+="0"}g+=k;g+="."+a;var h="";var b="";var m="";if(i=="recv"){h="padding-left:1px;";b="#9E9E9E;";m=g+" | Recv | <b>"+NetFunnel.getCommandStr(i,c)+"</b> | "}else{h="margin-top:5px;";b="#EEEEEE;";m=g+" | Send | <b>"+NetFunnel.getCommandStr(i,c)+"</b> | "}j.document.write("<div onload='this.focus()' style='width:650;overflow:hidden;padding:1px;border:1px solid #eeeeee;margin:0px;font-size:10px;font-family:monospace;background-color:"+b+h+"'>"+m+c.substring(0,50)+"</div>")};NetFunnel.printDebugMsg=function(c,a,b){NetFunnel.debugWindow=window.open("","NetFunnel_debugWindow","status=1,width=700,height=300,resizable=1,scrollbars=1");if(typeof NetFunnel.debugWindow=="object"){NetFunnel.writeDebugMsg(NetFunnel.debugWindow,c,a)}};NetFunnel.Storage=function(a){this.html5Support=this.supportsHtml5Storage();if(typeof a=="number"){this.type=a}};NetFunnel.Storage.prototype.supportsHtml5Storage=function(){try{return"localStorage" in window&&window.localStorage!==null}catch(a){return false}};NetFunnel.Storage.prototype.html5Support=false;NetFunnel.Storage.prototype.length=0;NetFunnel.Storage.prototype.type=1;NetFunnel.Storage.prototype.setStorageType=function(a){if(a<1||a>2){this.type=1}else{this.type=a}};NetFunnel.Storage.prototype.getStorage=function(){if(this.type==1){return localStorage}else{if(this.type==2){return sessionStorage}}return localStorage};NetFunnel.Storage.prototype.setItem=function(b,d,a,c){try{if(this.html5Support){NetFunnel.Cookie.set(b,d,a,c);this.getStorage().setItem(b,d)}else{NetFunnel.Cookie.set(b,d,a,c)}return true}catch(f){return false}};NetFunnel.Storage.prototype.setItemStorageOnly=function(b,d,a,c){try{if(this.html5Support){this.getStorage().setItem(b,d)}else{NetFunnel.Cookie.set(b,d,a,c)}return true}catch(f){return false}};NetFunnel.Storage.prototype.getItem=function(b,c){var a=false;try{if(this.html5Support){a=this.getStorage().getItem(b);if(!a&&(c==undefined||c==false)){a=NetFunnel.Cookie.get(b)}}else{a=NetFunnel.Cookie.get(b)}return a}catch(d){return false}};NetFunnel.Storage.prototype.removeItem=function(a,b){try{if(this.html5Support){this.getStorage().removeItem(a);if(b==undefined||b==false){NetFunnel.Cookie.del(a)}}else{NetFunnel.Cookie.del(a)}return true}catch(c){return false}};NetFunnel.Storage.prototype.clear=function(){try{if(this.html5Support){this.getStorage().clear()}return true}catch(a){return false}};NetFunnel.MProtect=function(){try{var s=new NetFunnel.Storage();var b=new Date();var n=b.getTime();var l=s.getItem("NFMPT.data",true);if(l===null){l=""}var c=s.getItem("NFMPT.stdData",true);if(c===null){c=""}var a=parseInt(s.getItem("NFMPT.lastTime",true),10);if(isNaN(a)||a===null||a==""){a=0}var r=parseInt(s.getItem("NFMPT.reqCnt",true),10);if(isNaN(r)||r===null||r==""){r=0}var m=[];var h=[];if(l!=""){m=l.split(",")}if(c!=""){h=c.split(",")}if(a!=0){m[m.length]=n-a;h[h.length]=n-a}a=n;var k=m.length-1;var f=0;for(;k>=0;k--){f+=parseInt(m[k],10);if(f>NetFunnel.MP_TIMELIMIT){break}}var g=h.length-NetFunnel.MP_DEVCNTLIMIT;if(g<0){g=0}var q=h.slice(g);var d=m.slice(k+1);s.setItemStorageOnly("NFMPT.data",d.join(","));s.setItemStorageOnly("NFMPT.stdData",q.join(","));s.setItemStorageOnly("NFMPT.lastTime",a+"");s.setItemStorageOnly("NFMPT.reqCnt",(++r)+"");var p=NetFunnel.Util.calcStdDev(q,0);if(p!=false&&p<NetFunnel.MP_DEVLIMIT){return 2}if(d.length<NetFunnel.MP_MINCOUNT){return 0}if(d.length+1>NetFunnel.MP_MAXREQLIMIT){return 1}if(r>NetFunnel.MP_REQONLYLIMIT){s.setItemStorageOnly("NFMPT.reqCnt","0");return 3}}catch(o){}return 0};NetFunnel.ProgressBar=function(f,e,g){this._bar=null;this._bar2=null;this._config={};this._totWaitCnt=0;this._wflag=0;if(typeof f=="string"){this._obj=g.getElementById(f)}else{this._obj=f}this._config.width=360;this._config.height=5;this._config.count=50;this._config.interval=50;this._config.color=this._color;this._config.bgcolor=this._bgcolor;this._config.waitchk=0;if(typeof e=="object"){for(var c in e){this._config[c]=e[c]}}if(this._config.count<=0){this._config.count=50}this._oTable=g.createElement("table");this._oTable.style.width=this._config.width+"px";this._oTable.style.height=this._config.height+"px";this._oTable.cellPadding=0;this._oTable.cellSpacing=0;var d=g.createElement("tbody");var h=g.createElement("tr");var a=g.createElement("td");a.style.height=this._config.height+"px";a.style.backgroundColor=this._config.bgcolor;var b=g.createElement("td");b.style.backgroundColor=this._config.bgcolor;h.appendChild(a);h.appendChild(b);d.appendChild(h);this._oTable.appendChild(d);this._obj.appendChild(this._oTable);this._bar=a;this._bar2=b;this.show=function(){this._obj.style.visibility="visible";var i=this;this._timer=setInterval(function(){i._action(0)},this._config.interval);return};this.hide=function(){this._obj.style.visibility="hidden";if(this._timer){clearTimeout(this._timer);this._timer=null}return};this._action=function(){try{if(this._config.waitchk!=0){if(parseInt(this._config.waitchk,10)<parseInt(NetFunnel.gLastData.nwait,10)){NetFunnel.gLastData.nwait=this._config.waitchk}}if(this._wflag==0&&NetFunnel.retryData===null){this._wflag=1}this._oTable.style.width=this._config.width+"px";if(NetFunnel.gTotWait<=0){NetFunnel.gTotWait=NetFunnel.gLastData.nwait}if(parseInt(NetFunnel.gLastData.nwait,10)>parseInt(NetFunnel.gTotWait,10)){NetFunnel.gTotWait=NetFunnel.gLastData.nwait}var i=this._config.width-Math.round((NetFunnel.gLastData.nwait/NetFunnel.gTotWait)*this._config.width);var k=this._config.width-i;this._bar.style.width=i+"px";this._bar.style.backgroundColor=this._config.color;this._bar2.style.width=k+"px";this._bar2.style.backgroundColor=this._config.bgcolor;this._config.waitchk=NetFunnel.gLastData.nwait}catch(j){}return true}};NetFunnel.ProgressBar.prototype._mmm=0;NetFunnel.ProgressBar.prototype._curr=0;NetFunnel.ProgressBar.prototype._direct=0;NetFunnel.ProgressBar.prototype._obj=null;NetFunnel.ProgressBar.prototype._cells=null;NetFunnel.ProgressBar.prototype._timer=null;NetFunnel.ProgressBar.prototype._oTable=null;NetFunnel.ProgressBar.prototype._config=null;NetFunnel.ProgressBar.prototype._color="#2a509b";NetFunnel.ProgressBar.prototype._bgcolor="#b6dffd";NetFunnel.Cookie={set:function(c,e,b,d){var f=c+"="+escape(e);if(typeof b!="undefined"&&(b.constructor==Number)&&b>0){var a=new Date();a.setMinutes(a.getMinutes()+b);f+=";expires="+a.toGMTString()}if(typeof d!="undefined"&&d.constructor==String&&d!=""){f+=";domain="+d}else{if(NetFunnel.TS_COOKIE_DOMAIN!=""){f+=";domain="+NetFunnel.TS_COOKIE_DOMAIN}}f+=";path=/;";document.cookie=f},del:function(a){NetFunnel.Cookie.set(a,"",-1)},get:function(b){if(document.cookie.length>0){var c=document.cookie.indexOf(b+"=");if(c!=-1){c=c+b.length+1;var a=document.cookie.indexOf(";",c);if(a==-1){a=document.cookie.length}return unescape(document.cookie.substring(c,a))}}return""}};NetFunnel.getUrlParameters=function(f){if(typeof f!="string"||f==""){return""}var e="";var d=document.location.href;if(d.indexOf("?")>-1){var c=d.substr(d.indexOf("?"));var g=c.split("&");for(var b=0;b<g.length;b++){if(g[b].indexOf(f+"=")>-1){var a=g[b].indexOf(f+"=")+f.length+1;e=g[b].substr(a);break}}}return unescape(e)};NetFunnel.gPop=null;NetFunnel.gTimer=null;NetFunnel.gLastData=null;NetFunnel.countdown_stop=function(){try{if(!NetFunnel.Util.isVirtualWait(NetFunnel.gLastData)){NetFunnel.gControl.fireEvent(null,NetFunnel.gControl,"onStop",{next:NetFunnel.gControl.next.stop});NetFunnel_sendStop();if(NetFunnel.gPop){NetFunnel.gPop.hide();NetFunnel.gPop.destroy();delete NetFunnel.gPop;NetFunnel.gPop=null}if(NetFunnel.gControl.getConfig("use_frame_block")==true){NetFunnel.PopupUtil.hideBlockList(NetFunnel.gControl.getConfig("frame_block_list"))}}}catch(a){}};NetFunnel.countdown=function(){if(NetFunnel.gLastData&&NetFunnel.gLastData.time_left>=0){if(NetFunnel.gPop){var tTime=NetFunnel.gPop.getObj("NetFunnel_Loading_Popup_TimeLeft");var tCount=NetFunnel.gPop.getObj("NetFunnel_Loading_Popup_Count");var tNext=NetFunnel.gPop.getObj("NetFunnel_Loading_Popup_NextCnt");if(this._gNWaitView!=0){if(parseInt(this._gNWaitView,10)<parseInt(NetFunnel.gLastData.nwait,10)){NetFunnel.gLastData.nwait=this._gNWaitView}}this._gNWaitView=NetFunnel.gLastData.nwait;var tformat="";var tformat_arr=null;var shownext_limit=0;var showcnt_limit=0;if(tCount){showcnt_limit=NetFunnel.gControl.getConfig("showcnt_limit");if(showcnt_limit>0&&NetFunnel.gLastData.nwait>showcnt_limit){tformat=tCount.className;if(tformat.length>0){tCount.innerHTML=tformat}else{tCount.innerHTML=NetFunnel.TS_LIMIT_TEXT}}else{tCount.innerHTML=String(NetFunnel.gLastData.nwait)}}if(tNext){shownext_limit=NetFunnel.gControl.getConfig("shownext_limit");if(NetFunnel.gLastData.nnext==undefined){tNext.innerHTML="0"}else{if(shownext_limit>0&&NetFunnel.gLastData.nnext>shownext_limit){tformat=tNext.className;if(tformat.length>0){tNext.innerHTML=tformat}else{tNext.innerHTML=NetFunnel.TS_LIMIT_TEXT}}else{tNext.innerHTML=String(NetFunnel.gLastData.nnext)}}}if(tTime){var showtime_limit=NetFunnel.gControl.getConfig("showtime_limit");if(showtime_limit>0&&NetFunnel.gLastData.real_time_left>showtime_limit){tformat=tTime.className;tformat_arr=tformat.split("^");if(tformat_arr.length==4&&tformat_arr[3].length>0){tTime.innerHTML=tformat_arr[3]}else{if(tTime.innerHTML.length>=5){tTime.innerHTML="."}else{tTime.innerHTML+="."}}}else{tformat=tTime.className;if(tformat.length>0){tformat_arr=tformat.split("^");tTime.innerHTML=NetFunnel.Util.getTimeStr(NetFunnel.gLastData.real_time_left,tformat_arr[0],tformat_arr[1],eval(tformat_arr[2]))}else{tTime.innerHTML=NetFunnel.Util.getTimeStr(NetFunnel.gLastData.real_time_left)}}}try{if(typeof tTime=="object"){if(tTime.style.textDecoration=="none"){tTime.style.textDecoration="underline"}else{tTime.style.textDecoration="none"}}if(typeof tTime=="object"){if(tNext.style.textDecoration=="none"){tNext.style.textDecoration="underline"}else{tNext.style.textDecoration="none"}}if(typeof tCount=="object"){if(tCount.style.textDecoration=="none"){tCount.style.textDecoration="underline"}else{tCount.style.textDecoration="none"}}}catch(e){}}}if(NetFunnel.gLastData.time_left<=0&&NetFunnel.gTimer){if(NetFunnel.gPop){}return}var left_perc=0;var skinObj=NetFunnel.SkinUtil.get(NetFunnel.gSkinId,NetFunnel.Util.isSmartPhone());if(typeof skinObj.updateCallback=="function"){if(parseInt(NetFunnel.gTotWait,10)<=0){left_perc=0}else{if(parseInt(NetFunnel.gTotWait,10)<parseInt(NetFunnel.gLastData.nwait,10)){NetFunnel.gTotWait=parseInt(NetFunnel.gLastData.nwait,10)}left_perc=parseInt(((NetFunnel.gTotWait-NetFunnel.gLastData.nwait)*100)/NetFunnel.gTotWait,10)}skinObj.updateCallback(left_perc,NetFunnel.gLastData.nwait,NetFunnel.gTotWait,NetFunnel.gLastData.real_time_left,true)}NetFunnel.gLastData.time_left--;var self=this;NetFunnel.gTimer=setTimeout(function(){self.countdown()},500)};NetFunnel.SkinUtil={prevID:"",add:function(d,c,a){try{if(typeof d!="string"||d==""){return false}if(typeof c!="object"){return false}if(typeof a!="string"||a==""){a="normal"}if(typeof NetFunnel.Skin[d]!="object"){NetFunnel.Skin[d]={}}NetFunnel.Skin[d][a]=c;NetFunnel.gLastSkinID=d;return true}catch(b){return false}},get:function(d,a){try{if(typeof d!="string"||d==""){d=NetFunnel.gLastSkinID}var b="normal";if(NetFunnel.gUseMobileUI==true&&a==true){b="mobile"}if(typeof NetFunnel.Skin[d]=="object"&&typeof NetFunnel.Skin[d][b]=="object"){return NetFunnel.Skin[d][b]}if(NetFunnel.TS_SKIN_ID!=""&&NetFunnel.TS_SKIN_ID!=d){if(typeof NetFunnel.Skin[NetFunnel.TS_SKIN_ID]=="object"&&typeof NetFunnel.Skin[NetFunnel.TS_SKIN_ID][b]=="object"){return NetFunnel.Skin[NetFunnel.TS_SKIN_ID][b]}}return NetFunnel.Skin["default"][b]}catch(c){}return NetFunnel.Skin["default"]["normal"]}};NetFunnel.SkinUtil.add("default",{htmlStr:' 			<div id="NetFunnel_Skin_Top" style="background-color:#ffffff;border:1px solid #9ab6c4;overflow:hidden;width:250px;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;" > 				<div style="background-color:#ffffff;border:6px solid #eaeff3;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> 					<div style="text-align:right;padding-top:5px;padding-right:5px;line-height:25px;"> 					</div>					<div style="padding-top:5px;padding-left:5px;padding-right:5px"> 						<div style="text-align:center;font-size:12pt;color:#001f6c;height:22px"><b><span style="color:#013dc1">접속대기 중</span>입니다.</b></div> 						<div style="text-align:right;font-size:9pt;color:#4d4b4c;padding-top:4px;height:17px;" ><b>예상시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" class="%M분 %02S초^ ^false"></span></b></div> 						<div style="padding-top:6px;padding-bottom:6px;vertical-align:center;width:228px" id="NetFunnel_Loading_Popup_Progressbar"></div> 						<div style="background-color:#ededed;padding-bottom:8px;overflow:hidden;width:228px"> 							<div style="padding-left:5px"> 								<div style="text-align:center;font-size:8pt;color:#4d4b4c;padding:3px;padding-top:10px;padding-bottom:10px;height:10px">앞에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_Count" class="'+NetFunnel.TS_LIMIT_TEXT+'"></span></span></b> 명, 뒤에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_NextCnt" class="'+NetFunnel.TS_LIMIT_TEXT+'"></span></span></b> 명의 대기자가 있습니다.</div> 								<div style="text-align:center;font-size:8pt;color:#4d4b4c;padding:3px;height:12px">현재 접속자가 많아 대기 중이며</div> 								<div style="text-align:center;font-size:8pt;color:#4d4b4c;padding:3px;height:10px;">잠시만 기다리시면</div> 								<div style="text-align:center;font-size:8pt;color:#4d4b4c;padding:3px;height:10px;">서비스로 자동 접속 됩니다.</div> 								<div style="text-align:center;font-size:9pt;color:#2a509b;padding-top:10px;"> 									<b>[<span id="NetFunnel_Countdown_Stop" style="cursor:pointer">중지</span>]</b> 								</div> 							</div> 						</div> 					<div style="height:5px;"></div> 				</div> 			</div>'},"mobile");NetFunnel.tstr='	<div id="NetFunnel_Skin_Top" style="background-color:#ffffff;border:1px solid #9ab6c4;width:458px;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> 		<div style="background-color:#ffffff;border:6px solid #eaeff3;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> 			<div style="text-align:right;padding-top:5px;padding-right:5px;line-height:25px;"> 			<b><span id="NetFunnel_Loding_Popup_Debug_Alerts" style="text-align:left;color:#ff0000"></span></b> 			<span style="text-align:right;"><a href="'+NetFunnel.gLogoURL+'" target="_blank" style="cursor:pointer;text-decoration:none;">';if((NetFunnel.BrowserDetect.browser=="Explorer"&&NetFunnel.BrowserDetect.version=="6")||NetFunnel.gLogoData==""){NetFunnel.tstr+='<b style="font-size:12px;">'+NetFunnel.gLogoText+"</b></a>"}else{NetFunnel.tstr+='<b style="font-size:12px;">'+NetFunnel.gLogoText+'</b><img style="height:16px;color:black;font-size:11px;" border=0 src="data:image/gif;base64,'+NetFunnel.gLogoData+'" ></a>'}NetFunnel.tstr+='</span></div> 			<div style="padding-top:0px;padding-left:25px;padding-right:25px"> 				<div style="text-align:left;font-size:12pt;color:#001f6c;height:22px"><b>서비스 <span style="color:#013dc1">접속대기 중</span>입니다.</b></div> 				<div style="text-align:right;font-size:9pt;color:#4d4b4c;padding-top:4px;height:17px" ><b>예상대기시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" class="%H시간 %M분 %02S초^ ^false"></span></b></div> 				<div style="padding-top:6px;padding-bottom:6px;vertical-align:center;width:400px;height:20px" id="NetFunnel_Loading_Popup_Progressbar"></div> 				<div style="background-color:#ededed;width:400px;padding-bottom:8px;overflow:hidden"> 					<div style="padding-left:5px"> 						<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;padding-top:10px;height:10px">고객님 앞에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_Count" class="'+NetFunnel.TS_LIMIT_TEXT+'"></span></span></b> 명, 뒤에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_NextCnt" class="'+NetFunnel.TS_LIMIT_TEXT+'"></span></span></b> 명의 대기자가 있습니다.  </div> 						<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;height:10px">현재 접속 사용자가 많아 대기 중이며, 잠시만 기다리시면 </div> 						<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;height:10px;">서비스로 자동 접속 됩니다.</div> 						<div style="text-align:center;font-size:9pt;color:#2a509b;padding-top:10px;"> 							<b>※ 재 접속하시면 대기시간이 더 길어집니다. <span id="NetFunnel_Countdown_Stop" style="cursor:pointer">[중지]</span> </b> 						</div> 					</div> 				</div> 				<div style="height:5px;"></div> 			</div> 		</div> 	</div>';NetFunnel.SkinUtil.add("default",{htmlStr:NetFunnel.tstr},"normal");NetFunnel.PopupSetup=function(d,b,c){if(c===null||c==""){c=NetFunnel.gSkinId}var e=NetFunnel.SkinUtil.get(c,NetFunnel.Util.isSmartPhone());switch(d){case"vcontinue":b.data.nwait=1000000;b.data.ttl="2";b.data.tps=1;break;case"continue":break;case"alert":break;default:break}if(d!="alert"&&typeof b=="object"){NetFunnel.gLastData=b.data;NetFunnel.gLastData.time_left=parseInt(b.data.ttl,10);NetFunnel.gLastData.tps=parseInt(b.data.tps,10);if(NetFunnel.gLastData.tps==0){NetFunnel.gLastData.tps=1}NetFunnel.gLastData.real_time_left=Math.round(parseInt(b.data.nwait,10)/NetFunnel.gLastData.tps);if(NetFunnel.gLastData.real_time_left<1){NetFunnel.gLastData.real_time_left=1}if(NetFunnel.gPrevWaitTime>-1&&NetFunnel.gLastData.real_time_left>NetFunnel.gPrevWaitTime){NetFunnel.gLastData.real_time_left=NetFunnel.gPrevWaitTime}NetFunnel.gPrevWaitTime=NetFunnel.gLastData.real_time_left;if(NetFunnel.gTotWait<0){NetFunnel.gTotWait=NetFunnel.gLastData.nwait}}if(!NetFunnel.gPop){NetFunnel.gPop=new NetFunnel.Popup(e.htmlStr,NetFunnel.gPopupTop,NetFunnel.gPopupLeft,NetFunnel.gControl.getConfig("popup_target"),false,false,NetFunnel.gControl.getConfig("popup_zindex"));if(typeof e.prepareCallback=="function"){e.prepareCallback()}this._gNWaitView=0}NetFunnel.gPop.show();var a=null;if(NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts")){if(NetFunnel.gDebugflag){a=NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts");a.innerHTML=" Debug Mode "}else{a=NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts");a.innerHTML=""}}if(NetFunnel.gControl.getConfig("use_frame_block")==true){NetFunnel.PopupUtil.showBlockList(NetFunnel.gControl.getConfig("frame_block_list"))}if(d!="alert"){NetFunnel.countdown()}};NetFunnel.DefaultCallback={onSuccess:function(b,a,c){if(NetFunnel.gTimer){clearTimeout(NetFunnel.gTimer)}if(NetFunnel.gPop){NetFunnel.gPop.hide();NetFunnel.gPop.destroy();delete NetFunnel.gPop;NetFunnel.gPop=true}if(c.getConfig("use_frame_block")==true){NetFunnel.PopupUtil.hideBlockList(c.getConfig("frame_block_list"))}if(typeof a.next=="string"&&a.next!=""){document.location.href=a.next}else{if(typeof a.next=="function"){DefaultCallback_onSuccess(b,a,c)}}NetFunnel.gPop=null},onContinued:function(b,a,c){if(typeof a.next=="string"){document.location.href=a.next;return}if(typeof a.next=="function"){if(a.next(b,a)==false){return}}if(a.rtype==NetFunnel.RTYPE_CHK_ENTER||a.rtype==NetFunnel.RTYPE_GET_TID_CHK_ENTER){if(NetFunnel.gTimer){clearTimeout(NetFunnel.gTimer)}NetFunnel.PopupSetup("continue",a,NetFunnel.gSkinId)}},onError:function(b,a,c){if(NetFunnel.gPop){NetFunnel.gPop.hide();NetFunnel.gPop.destroy();delete NetFunnel.gPop;NetFunnel.gPop=null}if(c.getConfig("use_frame_block")==true){NetFunnel.PopupUtil.hideBlockList(c.getConfig("frame_block_list"))}if(typeof a.next=="string"&&a.next!=""){document.location.href=a.next;return}if(typeof a.next=="function"){if(a.next(b,a)==false){return}}},onStop:function(b,a){if(typeof a.next=="string"&&a.next!=""){document.location.href=a.next;return}if(typeof a.next=="function"){if(a.next(b,a)==false){return}}},onBypass:function(b,a,c){if(NetFunnel.gTimer){clearTimeout(NetFunnel.gTimer)}if(NetFunnel.gPop){NetFunnel.gPop.hide();NetFunnel.gPop.destroy();delete NetFunnel.gPop;NetFunnel.gPop=null}if(c.getConfig("use_frame_block")==true){NetFunnel.PopupUtil.hideBlockList(c.getConfig("frame_block_list"))}if(typeof a.next=="string"&&a.next!=""){document.location.href=a.next;return}if(typeof a.next=="function"){if(a.next(b,a)==false){return}}},onExpressnumber:function(b,a,c){if(NetFunnel.gTimer){clearTimeout(NetFunnel.gTimer)}if(NetFunnel.gPop){NetFunnel.gPop.hide();NetFunnel.gPop.destroy();delete NetFunnel.gPop;NetFunnel.gPop=null}if(c.getConfig("use_frame_block")==true){NetFunnel.PopupUtil.hideBlockList(c.getConfig("frame_block_list"))}if(typeof a.next=="string"&&a.next!=""){document.location.href=a.next;return}if(typeof a.next=="function"){if(a.next(b,a)==false){return}}},onBlock:function(b,a,c){if(NetFunnel.gTimer){clearTimeout(NetFunnel.gTimer)}if(NetFunnel.gPop){NetFunnel.gPop.hide();NetFunnel.gPop.destroy();delete NetFunnel.gPop;NetFunnel.gPop=null}if(typeof a.next=="string"&&a.next!=""){document.location.href=a.next;return}if(typeof a.next=="function"){if(a.next(b,a)==false){return}}if(typeof c.getConfig("block_url")!="string"||c.getConfig("block_url")==""){if(c.getConfig("block_msg")==""||typeof c.getConfig("block_msg")!="string"){alert("[NetFUNNEL]Service Block!")}else{alert(c.getConfig("block_msg"))}return}document.location.href=c.getConfig("block_url")},onIpBlock:function(b,a){if(typeof a.next=="string"){document.location.href=a.next;return}if(typeof a.next=="function"){if(a.next(b,a)==false){return}}if(NetFunnel.gTimer){clearTimeout(NetFunnel.gTimer)}NetFunnel.PopupSetup("vcontinue",a,NetFunnel.gSkinId)}};NetFunnel.Event=function(){this.events=[];this.builtinEvts=[]};NetFunnel.Event.prototype.getActionIdx=function(f,c,e,g){if(f&&c){var b=this.events[f][c];if(b){var a=b.length;for(var d=a-1;d>=0;d--){if(b[d].action==e&&b[d].binding==g){return d}}}else{return -1}}return -1};NetFunnel.Event.prototype.addListener=function(d,b,c,e){if(this.events[d]){if(this.events[d][b]){if(this.getActionIdx(d,b,c,e)==-1){var a=this.events[d][b];a[a.length]={action:c,binding:e}}}else{this.events[d][b]=[];this.events[d][b][0]={action:c,binding:e}}}else{this.events[d]=[];this.events[d][b]=[];this.events[d][b][0]={action:c,binding:e}}};NetFunnel.Event.prototype.removeListener=function(d,b,c,e){if(this.events[d]){if(this.events[d][b]){var a=this.actionExists(d,b,c,e);if(a>=0){this.events[d][b].splice(a,1)}}}};NetFunnel.Event.prototype.fireEvent=function(i,h,c,f){if(!i){i=window.event}if(h&&this.events){var d=this.events[h];if(d){var b=d[c];if(b){for(var a=0;b.length>a;a++){var g=b[a].action;if(b[a].binding){g=g.bind(b[a].binding)}g(i,f,h)}}}}};NetFunnel.gPopup=[];NetFunnel.PopupUtil={getViewportHeight:function(b,a){if(b.innerHeight!=b.undefined){return b.innerHeight}if(a.compatMode=="CSS1Compat"){return a.documentElement.clientHeight}if(a.body){return a.body.clientHeight}return b.undefined},getViewportWidth:function(b,a){if(b.innerWidth!=b.undefined){return b.innerWidth}if(a.compatMode=="CSS1Compat"){return a.documentElement.clientWidth}if(a.body){return a.body.clientWidth}return 0},getScrollTop:function(a){if(a.pageYOffset){return a.pageYOffset}else{if(a.documentElement&&typeof a.documentElement.scrollTop=="number"){return a.documentElement.scrollTop}else{if(a.body){return a.body.scrollTop}}}return 0},getScrollLeft:function(a){if(a.pageXOffset){return a.pageXOffset}else{if(a.documentElement&&typeof a.documentElement.scrollLeft=="number"){return a.documentElement.scrollLeft}else{if(a.body){return a.body.scrollLeft}}}return 0},resizePopup:function(){for(var a=0;NetFunnel.gPopup.length>a;a++){NetFunnel.gPopup[a]._centerPopWin()}},getObjWidth:function(b){if(!b){return 0}var a=0;if(parseInt(b.style.width,10)>parseInt(b.offsetWidth,10)){a=parseInt(b.style.width,10)}else{a=b.offsetWidth}return a},getObjHeight:function(b){if(!b){return 0}var a=0;if(parseInt(b.style.height,10)>parseInt(b.offsetHeight,10)){a=parseInt(b.style.height,10)}else{a=b.offsetHeight}return a},showBlockList:function(a){for(var b=0;b<a.length;b++){try{var d=a[b];d.popup=new NetFunnel.Popup("",NetFunnel.gPopupTop,NetFunnel.gPopupLeft,d.win,false,false,NetFunnel.gControl.getConfig("popup_zindex"));d.popup.show()}catch(c){}}},hideBlockList:function(a){for(var b=0;b<a.length;b++){try{var d=a[b];if(d.popup){d.popup.hide();d.popup.destroy();delete d.popup;d.popup=null}}catch(c){}}},hideWaitPopup:function(){if(typeof NetFunnel=="object"){if(NetFunnel.gWaitPop){NetFunnel.gWaitPop.hide();NetFunnel.gWaitPop.destroy();NetFunnel.gWaitPop=null}}},showWaitPopup:function(){if(typeof NetFunnel=="object"){var a='<div style="padding:2px;border:1px solid darkgray;"> 				<table> 					<tr>';if(NetFunnel.BrowserDetect.browser=="Explorer"&&NetFunnel.BrowserDetect.version=="6"){a+="<td></td>"}else{a+='<td><img style="" border=0 src="data:image/gif;base64,'+NetFunnel.gPreWaitData+'" ></td>'}a+='	<td style="valign:middle;font-size:9pt">wait...</td> 					</tr> 				</table> 			</div>';NetFunnel.gWaitPop=new NetFunnel.Popup(a,false,false,NetFunnel.gControl,true,"NetFunnel_Waiting_Popup",NetFunnel.gControl.getConfig("popup_zindex"));NetFunnel.gWaitPop.show()}},getDocumentEntireHeight:function(d){var b=d.body,c=d.documentElement;var a=Math.max(b.scrollHeight,b.offsetHeight,c.clientHeight,c.scrollHeight,c.offsetHeight);return a}};NetFunnel.Popup=function(f,i,d,b,q,h,n){if(typeof b=="object"){this._mWin=b;if(typeof b.document=="object"){this._mDoc=b.document}else{this._mWin=window;this._mDoc=document}}else{this._mWin=window;this._mDoc=document}if(typeof q!="boolean"){q=false}if(typeof h!="string"){h="NetFunnel_Loading_Popup"}if(typeof n!="undefined"&&!isNaN(n)){this._mZindex=n}var o=this._mDoc.getElementsByTagName("BODY")[0];if(!o){return}var c=this._mDoc.getElementById(h);if(!c||NetFunnel.SkinUtil.prevID!=NetFunnel.gSkinId){c=this._mDoc.createElement("div");c.id=h;c.style.display="none";c.style.top=0;c.style.left=0;c.innerHTML=f;o.appendChild(c);var k=this._mDoc.getElementById("NetFunnel_Loading_Popup_Progressbar");if(k){var m={count:50,interval:50};var j=parseInt(k.style.width,10);var l=parseInt(k.style.height,10);if(!isNaN(j)){m.width=j}if(!isNaN(l)){m.height=l}var a=new NetFunnel.ProgressBar(k,m,this._mDoc);a.show();this._mProgress=a}var e=this._mDoc.getElementById("NetFunnel_Countdown_Stop");if(e){e.onclick=NetFunnel.countdown_stop}this.new_draw=true}NetFunnel.SkinUtil.prevID=NetFunnel.gSkinId;var p=this._mDoc.getElementById("mpopup_bg");var g=this._mDoc.getElementById("pop_iframe");if(!p){p=this._mDoc.createElement("div");p.id="mpopup_bg";p.innerHTML="<div style='width:100%; height=100%'>&nbsp;</div>";p.style.position="absolute";p.style.zIndex=(this._mZindex+1);p.style.top="0px";p.style.left="0px";p.style.width="100%";p.style.height=NetFunnel.PopupUtil.getDocumentEntireHeight(this._mDoc)+"px";p.style.margin="0";p.style.padding="0";p.style.border="0px solid black";p.fontSize="0";o.appendChild(p)}if(!g){g=this._mDoc.createElement("iframe");g.id="pop_iframe";g.frameborder="0";g.border="0";g.framespacing="0";g.marginheight="0";g.marginwidth="0";if(q){g.style.opacity="0";g.style.filter="alpha(opacity=0)"}else{g.style.opacity="0.5";g.style.filter="alpha(opacity=50)"}g.style.zIndex=this._mZindex;g.style.top="0px";g.style.left="0px";g.style.width="100%";g.style.height=NetFunnel.PopupUtil.getDocumentEntireHeight(this._mDoc)+"px";g.style.position="absolute";g.style.border="0px solid #FFFFFF";g.style.backgroundColor="#FFFFFF";o=this._mDoc.getElementsByTagName("BODY")[0];o.appendChild(g)}c.style.position="absolute";c.style.visibility="hidden";this._mCount++;this._mMask=p;this._mPopIFrame=g;this._mObj=c;this._mTop=i;this._mLeft=d;this.mid="mpopup_"+this._mCount;this.addListener(this._mWin,"resize",NetFunnel.PopupUtil.resizePopup);NetFunnel.gPopup.push(this)};NetFunnel.Popup.prototype=new NetFunnel.Event();NetFunnel.Popup.prototype._mCount=0;NetFunnel.Popup.prototype._mid="";NetFunnel.Popup.prototype._mWin=window;NetFunnel.Popup.prototype._mDoc=document;NetFunnel.Popup.prototype._mObj=null;NetFunnel.Popup.prototype._mMask=null;NetFunnel.Popup.prototype._mPopIFrame=null;NetFunnel.Popup.prototype._mIsShown=false;NetFunnel.Popup.prototype._mIframeResize=NetFunnel.TS_IFRAME_RESIZE;NetFunnel.Popup.prototype._mProgress=null;NetFunnel.Popup.prototype._mZindex=NetFunnel.TS_POPUP_ZINDEX;NetFunnel.Popup.prototype._setMaskSize=function(){var b=this._mDoc.getElementsByTagName("BODY")[0];if(!b){return}var a=0;if(NetFunnel.Util.isSmartPhone()==true){a=NetFunnel.PopupUtil.getViewportHeight(window,this._mDoc)}else{a=NetFunnel.PopupUtil.getViewportHeight(this._mWin,this._mDoc)}var d=NetFunnel.PopupUtil.getViewportWidth(this._mWin,this._mDoc);var e=0;var c=0;if(a>b.scrollHeight){e=a}else{e=b.scrollHeight}if(d>b.scrollWidth){c=d}else{c=b.scrollWidth}};NetFunnel.Popup.prototype._centerPopWin=function(){if(this._mIsShown){var d=this._mDoc.getElementsByTagName("BODY")[0];if(!d){return}var e;if(NetFunnel.Util.isSmartPhone()==true){e=window}else{if(NetFunnel.BrowserDetect.browser=="Explorer"){e=this._mDoc}else{e=this._mWin}}var a=parseInt(NetFunnel.PopupUtil.getScrollTop(e),10);var c=parseInt(d.scrollLeft,10);this._setMaskSize();var b=0;if(NetFunnel.Util.isSmartPhone()==true){b=NetFunnel.PopupUtil.getViewportHeight(window,this._mDoc)}else{b=NetFunnel.PopupUtil.getViewportHeight(this._mWin,this._mDoc)}var f=NetFunnel.PopupUtil.getViewportWidth(this._mWin,this._mDoc);if(typeof this._mTop=="number"){this._mObj.style.top=this._mTop+"px"}else{this._mObj.style.top=(a+((b-NetFunnel.PopupUtil.getObjHeight(this._mObj))/2))+"px"}if(typeof this._mLeft=="number"){this._mObj.style.left=this._mLeft+"px"}else{this._mObj.style.left=(c+((f-NetFunnel.PopupUtil.getObjWidth(this._mObj))/2))+"px"}if(this._mIframeResize&&typeof this._mPopIFrame=="object"){this._mPopIFrame.style.top=this._mObj.style.top;this._mPopIFrame.style.left=this._mObj.style.left;this._mPopIFrame.style.width=this._mObj.style.width;this._mPopIFrame.style.height=parseInt(this._mObj.style.height,10)+6}}};NetFunnel.Popup.prototype.getObj=function(a){return this._mDoc.getElementById(a)};NetFunnel.Popup.prototype.show=function(){var a=this._mDoc.getElementsByTagName("BODY")[0];if(!a){return}a.style.overflow="auto";this._mObj.style.zIndex=this._mZindex+2;this._mObj.style.visibility="visible";this._mObj.style.display="block";this._mMask.style.visiblity="visible";this._mMask.style.display="block";this._mPopIFrame.style.visiblity="visible";this._mPopIFrame.style.display="block";this._mIsShown=true;this._centerPopWin()};NetFunnel.Popup.prototype.hide=function(){var a=this._mDoc.getElementsByTagName("BODY")[0];if(!a){return}a.style.overflow="auto";this._mObj.style.visibility="hidden";this._mObj.style.display="none";this._mMask.style.visiblity="hidden";this._mMask.style.display="none";this._mPopIFrame.style.visiblity="hidden";this._mPopIFrame.style.display="none";this._mIsShown=false};NetFunnel.Popup.prototype.destroy=function(){var c=this._mDoc.getElementsByTagName("BODY")[0];if(!c){return}var f=NetFunnel.gPopup.length;try{var a=this._mDoc.getElementById("mpopup_bg");c.removeChild(a)}catch(h){}try{var d=this._mDoc.getElementById("pop_iframe");c.removeChild(d)}catch(h){}for(var b=0;b<f;b++){var g=NetFunnel.gPopup.pop();if(g.mid==this.mid){try{c.removeChild(g._mObj)}catch(h){}continue}NetFunnel.gPopup.push(g)}if(this._mProgress){this._mProgress.hide()}};NetFunnel.RetVal=function(a){this._mParam={};this._mRtype=parseInt(a.substr(0,4),10);this._mCode=parseInt(a.substr(5,3),10);this._mRetStr=a.substr(9,a.length-9);this._parse()};NetFunnel.RetVal.prototype._ltrim=function(b){var a=0;for(;a<b.length&&this._isWhitespace(b.charAt(a));a++){}return b.substring(a,b.length)};NetFunnel.RetVal.prototype._rtrim=function(b){var a=b.length-1;for(;a>=0&&this._isWhitespace(b.charAt(a));a--){}return b.substring(0,a+1)};NetFunnel.RetVal.prototype._trim=function(a){return this._ltrim(this._rtrim(a))};NetFunnel.RetVal.prototype._isWhitespace=function(a){var b=" \t\n\r\f";return(b.indexOf(a)!=-1)};NetFunnel.RetVal.prototype._parse=function(){var a="";var c="";var d="";var e=this._mRetStr.split("&");for(var b=0;e.length>b;b++){a=e[b].split("=");if(a.length>1){c=this._trim(a[0]);d=this._trim(a[1]);this._mParam[c]=d}}};NetFunnel.RetVal.prototype.getRetCode=function(){return this._mCode};NetFunnel.RetVal.prototype.setRetCode=function(a){this._mCode=a;return this._mCode};NetFunnel.RetVal.prototype.getReqType=function(){return this._mRtype};NetFunnel.RetVal.prototype.setReqType=function(a){this._mRtype=a;return this._mRtype};NetFunnel.RetVal.prototype.getRetStr=function(){return this._mRetStr};NetFunnel.RetVal.prototype.getValue=function(a){try{return this._mParam[a]}catch(b){return null}};NetFunnel.RetVal.prototype.setValue=function(b,c){var a=null;try{if(this.isKeyExist(b)){a=this.getValue(b)}this._mParam[b]=c;return a}catch(d){return null}};NetFunnel.RetVal.prototype.getNumber=function(a){try{return parseInt(this._mParam[a],10)}catch(b){return 0}};NetFunnel.RetVal.prototype.isKeyExist=function(a){try{if(this._mParam[a]!==null){return true}}catch(b){}return false};NetFunnel.RetVal.prototype.getParam=function(){return this._mParam};NetFunnel.TsClient=function(b,c){this.mConfig={};this.mConfig.host=NetFunnel.TS_HOST;this.mConfig.port=NetFunnel.TS_PORT;this.mConfig.proto=NetFunnel.TS_PROTO;this.mConfig.query=NetFunnel.TS_QUERY;this.mConfig.max_ttl=NetFunnel.TS_MAX_TTL;this.mConfig.conn_timeout=NetFunnel.TS_CONN_TIMEOUT;this.mConfig.conn_retry=NetFunnel.TS_CONN_RETRY;this.mConfig.cookie_id=NetFunnel.TS_COOKIE_ID;this.mConfig.cookie_time=NetFunnel.TS_COOKIE_TIME;this.mConfig.cookie_domain=NetFunnel.TS_COOKIE_DOMAIN;this.mConfig.showcnt_limit=NetFunnel.TS_SHOWCNT_LIMIT;this.mConfig.showtime_limit=NetFunnel.TS_SHOWTIME_LIMIT;this.mConfig.shownext_limit=NetFunnel.TS_SHOWNEXT_LIMIT;this.mConfig.popup_top=NetFunnel.TS_POPUP_TOP;this.mConfig.popup_left=NetFunnel.TS_POPUP_LEFT;this.mConfig.skin_id=NetFunnel.TS_SKIN_ID;this.mConfig.use_unfocus=NetFunnel.TS_USE_UNFOCUS;this.mConfig.virt_wait=NetFunnel.TS_VIRT_WAIT;this.mConfig.use_mobile_ui=NetFunnel.TS_USE_MOBILE_UI;this.mConfig.mp_use=NetFunnel.MP_USE;this.mConfig.use_frame_block=NetFunnel.TS_USE_FRAME_BLOCK;this.mConfig.frame_block_list=NetFunnel.TS_FRAME_BLOCK_LIST;this.mConfig.use_pre_wait=NetFunnel.TS_USE_PRE_WAIT;this.mConfig.popup_target=NetFunnel.TS_POPUP_TARGET;this.mConfig.user_data=false;this.mConfig.user_data_keys=NetFunnel.TS_USER_DATA_KEYS;this.mConfig.block_msg=NetFunnel.TS_BLOCK_MSG;this.mConfig.block_url=NetFunnel.TS_BLOCK_URL;this.mConfig.ipblock_wait_count=NetFunnel.TS_IPBLOCK_WAIT_COUNT;this.mConfig.ipblock_wait_time=NetFunnel.TS_IPBLOCK_WAIT_TIME;this.mConfig.service_id=NetFunnel.TS_SERVICE_ID;this.mConfig.action_id=NetFunnel.TS_ACTION_ID;this.mConfig.show_wait_popup=NetFunnel.TS_SHOW_WAIT_POPUP;this.mConfig.config_use=NetFunnel.TS_CONFIG_USE;this.mConfig.popup_zindex=NetFunnel.TS_POPUP_ZINDEX;this.mConfig.ip_error_retry=NetFunnel.TS_IP_ERROR_RETRY;this.mConfig._host_changed=false;this.mConfig._port_changed=false;if(typeof b=="object"){for(var a in b){this.mConfig[a]=b[a];if(a=="host"){this.mConfig._host_changed=true}if(a=="port"){this.mConfig._port_changed=true}}}NetFunnel.gPopupLeft=this.mConfig.popup_left;NetFunnel.gPopupTop=this.mConfig.popup_top;NetFunnel.gPopupLeft=this.mConfig.popup_left;NetFunnel.gBlockList=this.mConfig.block_list;if(this.mConfig.skin_id==""){NetFunnel.gSkinId=NetFunnel.TS_SKIN_ID}else{NetFunnel.gSkinId=this.mConfig.skin_id}if(typeof this.mConfig.use_unfocus!="boolean"){if(typeof this.mConfig.use_unfocus=="string"&&this.mConfig.use_unfocus=="true"){this.mConfig.use_unfocus=true}else{this.mConfig.use_unfocus=false}}NetFunnel.gUseUnfocus=this.mConfig.use_unfocus;if(typeof this.mConfig.use_mobile_ui!="boolean"){if(typeof this.mConfig.use_mobile_ui=="string"&&this.mConfig.use_mobile_ui=="true"){this.mConfig.use_mobile_ui=true}else{this.mConfig.use_mobile_ui=false}}NetFunnel.gUseMobileUI=this.mConfig.use_mobile_ui;if(typeof this.mConfig.use_frame_block!="boolean"){if(typeof this.mConfig.use_frame_block=="string"&&this.mConfig.use_frame_block=="true"){this.mConfig.use_frame_block=true}else{this.mConfig.use_frame_block=false}}if(this.mConfig.use_frame_block==true){if(this.mConfig.frame_block_list.length<1){this.mConfig.frame_block_list=NetFunnel.Util.getFrameWindowList(this.mConfig.popup_target)}}else{this.mConfig.frame_block_list=[]}this.id=0;NetFunnel.TsClient._Objects[this.id]=this;NetFunnel.TsClient._Count+=1;if(c.onSuccess){this.addListener(this,"onSuccess",c.onSuccess)}if(c.onContinued){this.addListener(this,"onContinued",c.onContinued)}if(c.onBypass){this.addListener(this,"onBypass",c.onBypass)}if(c.onBlock){this.addListener(this,"onBlock",c.onBlock)}if(c.onIpBlock){this.addListener(this,"onIpBlock",c.onIpBlock)}if(c.onError){this.addListener(this,"onError",c.onError)}if(c.onStop){this.addListener(this,"onStop",c.onStop)}if(c.onExpressnumber){this.addListener(this,"onExpressnumber",c.onExpressnumber)}this.counter[NetFunnel.RTYPE_NONE]=0;this.counter[NetFunnel.RTYPE_GET_TID_CHK_ENTER]=0;this.counter[NetFunnel.RTYPE_GET_TID]=0;this.counter[NetFunnel.RTYPE_CHK_ENTER]=0;this.counter[NetFunnel.RTYPE_ALIVE_NOTICE]=0;this.counter[NetFunnel.RTYPE_SET_COMPLETE]=0;this.counter[NetFunnel.RTYPE_INIT]=0;this.counter[NetFunnel.RTYPE_STOP]=0;this.connTimeout=function d(){if(this!=NetFunnel.gControl){return d.apply(NetFunnel.gControl,arguments)}if(NetFunnel.gAlreadyProc!=0){return false}this._resetScript();if(this.counter[this._mReqType]<this.mConfig.conn_retry){this._mStatus=NetFunnel.PS_TIMEOUT;this.counter[this._mReqType]+=1;switch(this._mReqType){case NetFunnel.RTYPE_GET_TID:this.getTicketID(this.user_id,this.user_tid,false);return true;case NetFunnel.RTYPE_CHK_ENTER:this.chkEnter(this.key,false);return true;case NetFunnel.RTYPE_GET_TID_CHK_ENTER:this.getTidChkEnter(this.user_id,this.user_tid,false);return true;case NetFunnel.RTYPE_ALIVE_NOTICE:this.aliveNotice(this.key,"","",false);return true;case NetFunnel.RTYPE_SET_COMPLETE:this.setComplete(this.key,"","",false);return true;default:}}NetFunnel.PopupUtil.hideWaitPopup();if(this._mReqType==NetFunnel.RTYPE_CHK_ENTER||this._mReqType==NetFunnel.RTYPE_GET_TID_CHK_ENTER){var e=new NetFunnel.Storage(2);e.setItem(this.mConfig.cookie_id,"5002:200:key="+NetFunnel.CONN_TIMEOUT_KEY,1,this.mConfig.cookie_domain)}if(NetFunnel.gAlreadyProc>=1){return false}this.fireEvent(null,this,"onError",{rtype:this._mReqType,code:NetFunnel.kErrorSockConnect,data:{msg:"Connection Timeout"},next:this.next.error});this._mStatus=NetFunnel.PS_ERROR;return true}};NetFunnel.TsClient._Count=0;NetFunnel.TsClient._Objects={};NetFunnel.TsClient.prototype=new NetFunnel.Event();NetFunnel.TsClient.prototype._initDone=false;NetFunnel.TsClient.prototype.id=null;NetFunnel.TsClient.prototype.mConfig=null;NetFunnel.TsClient.prototype.key=null;NetFunnel.TsClient.prototype.script=null;NetFunnel.TsClient.prototype.alarm=null;NetFunnel.TsClient.prototype._mReqType=NetFunnel.RTYPE_NONE;NetFunnel.TsClient.prototype._mMousePos=0;NetFunnel.TsClient.prototype._mNoActTime=0;NetFunnel.TsClient.prototype._mStatus=NetFunnel.PS_N_RUNNING;NetFunnel.TsClient.prototype.counter={};NetFunnel.TsClient.prototype.next={success:"",error:""};NetFunnel.TsClient.prototype.init=function(){this._nCount++;this._initDone=true};NetFunnel.TsClient.prototype.getConfig=function(a){return this.mConfig[a]};NetFunnel.TsClient.prototype._isNoAction=function(){if(this._mMousePos==NetFunnel.MouseX){return true}this._mMousePos=NetFunnel.MouseX;return false};NetFunnel.TsClient.prototype._resetAlarm=function(){if(this.alarm!==null){clearTimeout(this.alarm)}this.alarm=null};NetFunnel.TsClient.prototype._resetRetryTimer=function(){if(this.retryTimer!==null){clearTimeout(this.retryTimer)}this.retryTimer=null};NetFunnel.TsClient.prototype._resetScript=function(){try{if(this.script&&typeof this.script=="object"){var a=this.script.parentNode;if(a&&typeof a=="object"){a.removeChild(this.script)}}}catch(b){}this.script=null};NetFunnel.TsClient.prototype.getUserdata=function(){try{var userdata="";var uKey=this.mConfig.user_data_keys;if(typeof this.mConfig.user_data=="string"){return this.mConfig.user_data}if(Object.prototype.toString.call(uKey).slice(8,-1)!="Array"){return false}for(var i=0;i<uKey.length;i++){var keydata=uKey[i];if(typeof keydata!="object"){continue}if(keydata.type=="v"){try{userdata=eval(keydata.key);if(userdata!=""){break}}catch(e){}}if(keydata.type=="c"){userdata=NetFunnel.Cookie.get(keydata.key);if(userdata!=""){break}}}return userdata}catch(e){return false}};NetFunnel.TsClient.prototype._showResult=function(){this._resetAlarm();if(NetFunnel.gAlreadyProc==1&&NetFunnel.gRtype==NetFunnel.RTYPE_GET_TID_CHK_ENTER){return}NetFunnel.gAlreadyProc=1;NetFunnel.PopupUtil.hideWaitPopup();this.retval=new NetFunnel.RetVal(this.result);if(this.retval.getReqType()==NetFunnel.RTYPE_GET_TID_CHK_ENTER){this.retval.setReqType(NetFunnel.RTYPE_CHK_ENTER)}if(NetFunnel.TS_DEBUG_MODE){NetFunnel.printDebugMsg("recv",this.result)}NetFunnel.ttl=0;this.counter[this._mReqType]=0;if(this.retval.getRetCode()==NetFunnel.kContinueDebug){NetFunnel.gDebugflag=true}else{NetFunnel.gDebugflag=false}switch(this.retval.getReqType()){case NetFunnel.RTYPE_GET_TID:this._showResultGetTicketID(this.retval);break;case NetFunnel.RTYPE_CHK_ENTER:this._showResultChkEnter(this.retval);break;case NetFunnel.RTYPE_ALIVE_NOTICE:this._showResultAliveNotice(this.retval);break;case NetFunnel.RTYPE_SET_COMPLETE:this._showResultSetComplete(this.retval);break;default:var a=new NetFunnel.Storage(2);a.removeItem(this.mConfig.cookie_id);this.fireEvent(null,this,"onError",{rtype:NetFunnel.RTYPE_NONE,code:this.retval.getRetCode(),data:this.retval.getParam(),next:this.next.error});this._mStatus=NetFunnel.PS_ERROR}};NetFunnel.TsClient.prototype._showResultGetTicketID=function(a){var b=new NetFunnel.Storage(2);switch(a.getRetCode()){case NetFunnel.kSuccess:b.setItem(this.mConfig.cookie_id,this.result,this.mConfig.cookie_time,this.mConfig.cookie_domain);this._mStatus=NetFunnel.PS_N_RUNNING;this.fireEvent(null,this,"onSuccess",{rtype:a.getReqType(),code:a.getRetCode(),data:a.getParam(),next:this.next.success});break;default:b.removeItem(this.mConfig.cookie_id);this._mStatus=NetFunnel.PS_ERROR;this.fireEvent(null,this,"onError",{rtype:a.getReqType(),code:a.getRetCode(),data:a.getParam(),next:this.next.error})}return};NetFunnel.TsClient.prototype._showResultChkEnter=function(b){var c=this;var e=new NetFunnel.Storage(2);switch(b.getRetCode()){case NetFunnel.kSuccess:e.setItem(this.mConfig.cookie_id,this.result,this.mConfig.cookie_time,this.mConfig.cookie_domain);this._mStatus=NetFunnel.PS_N_RUNNING;NetFunnel.gNWaitTemp=0;NetFunnel.gNWaitCount=0;this.fireEvent(null,this,"onSuccess",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.success});break;case NetFunnel.kContinueDebug:case NetFunnel.kContinue:this._mStatus=NetFunnel.PS_CONTINUE;var a=b.getNumber("ttl");if(a>this.mConfig.max_ttl){a=this.mConfig.max_ttl;b.setValue("ttl",a)}var d=b.getNumber("nwait");if(NetFunnel.TS_NWAIT_BYPASS){if(NetFunnel.gNWaitTemp==d){NetFunnel.gNWaitCount+=1}else{NetFunnel.gNWaitTemp=d;NetFunnel.gNWaitCount=0}if(NetFunnel.TS_MAX_NWAIT_COUNT<=NetFunnel.gNWaitCount){this.fireEvent(null,this,"onSuccess",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.success});break}}this.fireEvent(null,this,"onContinued",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.continued});NetFunnel.gAlreadyProc=0;if(a>0&&this._mStatus!=NetFunnel.PS_N_RUNNING){if(this.retryTimer){clearTimeout(this.retryTimer)}NetFunnel.ttl=a;this.retryTimer=setTimeout(function(){c.chkEnterCont(c.retval.getValue("key"))},a*1000)}break;case NetFunnel.kTsBlock:this._mStatus=NetFunnel.PS_N_RUNNING;e.setItem(this.mConfig.cookie_id,this.result,this.mConfig.cookie_time,this.mConfig.cookie_domain);this.fireEvent(null,this,"onBlock",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.block});if(this.retryTimer){clearTimeout(this.retryTimer)}NetFunnel.ttl=a;break;case NetFunnel.kTsIpBlock:this._mStatus=NetFunnel.PS_N_RUNNING;if(this.retryTimer){clearTimeout(this.retryTimer)}this.fireEvent(null,this,"onIpBlock",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.ipblock});NetFunnel.gAlreadyProc=0;if(this.mConfig.ipblock_wait_count>=NetFunnel.gIPBlockWaitCount+1){NetFunnel.gReTimer=setTimeout(function(){c.getTidChkEnter(c.user_id,c.user_tid,true)},this.mConfig.ipblock_wait_time)}else{e.setItem(this.mConfig.cookie_id,this.result,this.mConfig.cookie_time,this.mConfig.cookie_domain);this._mStatus=NetFunnel.PS_N_RUNNING;this.fireEvent(null,this,"onSuccess",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.success});break}if(this.mConfig.ipblock_wait_count!=0){NetFunnel.gIPBlockWaitCount+=1}break;case NetFunnel.kTsBypass:this._mStatus=NetFunnel.PS_N_RUNNING;e.setItem(this.mConfig.cookie_id,this.result,this.mConfig.cookie_time,this.mConfig.cookie_domain);this.fireEvent(null,this,"onBypass",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.bypass});break;case NetFunnel.kTsExpressNumber:this._mStatus=NetFunnel.PS_N_RUNNING;e.setItem(this.mConfig.cookie_id,this.result,this.mConfig.cookie_time,this.mConfig.cookie_domain);this.fireEvent(null,this,"onExpressnumber",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.expressnumber});break;default:e.removeItem(this.mConfig.cookie_id);this._mStatus=NetFunnel.PS_ERROR;if(b.getRetCode()==NetFunnel.kTsErrorInvalidIp&&this.mConfig.ip_error_retry==true){NetFunnel.gAlreadyProc=0;this._mStatus=NetFunnel.PS_N_RUNNING;NetFunnel.gReTimer=setTimeout(function(){c.getTidChkEnter(c.user_id,c.user_tid,true,NetFunnel.gTotWait)},100)}else{this._mStatus=NetFunnel.PS_ERROR;this.fireEvent(null,this,"onError",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.error})}}return};NetFunnel.TsClient.prototype._showResultAliveNotice=function(b){var d=new NetFunnel.Storage(2);switch(b.getRetCode()){case NetFunnel.kSuccess:this._mStatus=NetFunnel.PS_N_RUNNING;this.fireEvent(null,this,"onSuccess",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.success});break;case NetFunnel.kContinueDebug:case NetFunnel.kContinue:this._mStatus=NetFunnel.PS_CONTINUE;if(this._mNoActTime>this.mConfig.no_action){this.fireEvent(null,this,"onError",{rtype:b.getReqType(),code:NetFunnel.kTsErrorNoUserAction,data:b.getParam(),next:this.next.error});this._mNoActTime=0;this._mStatus=NetFunnel.PS_ERROR;break}var a=b.getNumber("ttl");if(a>this.mConfig.max_ttl){a=this.mConfig.max_ttl;b.setValue("ttl",a)}this.fireEvent(null,this,"onContinued",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.continued});NetFunnel.gAlreadyProc=0;if(a>0&&this._mStatus!=NetFunnel.PS_N_RUNNING){if(this.retryTimer){clearTimeout(this.retryTimer)}if(this._isNoAction()){this._mNoActTime+=a}else{this._mNoActTime=0}d.setItem(this.mConfig.cookie_id,this.result,this.mConfig.cookie_time,this.mConfig.cookie_domain);var c=this;this.retryTimer=setTimeout(function(){c.aliveNoticeCont(c.retval.getValue("key"),c.retval.getValue("ip"),c.retval.getValue("port"),c.retval.getValue("first"))},a*1000)}break;case NetFunnel.kTsBlock:this._mStatus=NetFunnel.PS_N_RUNNING;this.fireEvent(null,this,"onBlock",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.block});break;case NetFunnel.kTsExpressNumber:this._mStatus=NetFunnel.PS_N_RUNNING;this.fireEvent(null,this,"onExpressnumber",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.expressnumber});break;case NetFunnel.kTsBypass:this._mStatus=NetFunnel.PS_N_RUNNING;this.fireEvent(null,this,"onBypass",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.bypass});break;case NetFunnel.kTsIpBlock:this._mStatus=NetFunnel.PS_N_RUNNING;this.fireEvent(null,this,"onIpBlock",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.ipblock});break;default:if(b.getRetCode()==NetFunnel.kErrorExpiredTime){d.removeItem(this.mConfig.cookie_id)}this._mStatus=NetFunnel.PS_ERROR;this.fireEvent(null,this,"onError",{rtype:b.getReqType(),code:b.getRetCode(),data:b.getParam(),next:this.next.error})}return};NetFunnel.TsClient.prototype._showResultSetComplete=function(a){var b=new NetFunnel.Storage(2);b.removeItem(this.mConfig.cookie_id);switch(a.getRetCode()){case NetFunnel.kSuccess:this._mStatus=NetFunnel.PS_N_RUNNING;this.fireEvent(null,this,"onSuccess",{rtype:a.getReqType(),code:a.getRetCode(),data:a.getParam(),next:this.next.success});break;default:this._mStatus=NetFunnel.PS_ERROR;this.fireEvent(null,this,"onError",{rtype:a.getReqType(),code:a.getRetCode(),data:a.getParam(),next:this.next.error})}return};NetFunnel.TsClient.prototype._connInit=function(b){this.result=null;this._mReqType=b;this._resetAlarm();this._resetScript();this._resetRetryTimer();var a=this;this.alarm=setTimeout(function(){a.connTimeout(0)},parseInt(this.mConfig.conn_timeout,10)*1000);if(!this.mConfig.host||this.mConfig.host==""){return false}if(!this.mConfig.port||this.mConfig.port==""){return false}if(!this.mConfig.query||this.mConfig.query==""){return false}if(!this.mConfig.service_id||this.mConfig.service_id==""){return false}if(!this.mConfig.action_id||this.mConfig.action_id==""){return false}this._mStatus=NetFunnel.PS_RUNNING;return true};NetFunnel.TsClient.prototype._sendRequest=function(a){this.script=document.createElement("script");this.script.src=a;var b=document.getElementsByTagName("head").item(0);if(NetFunnel.TS_DEBUG_MODE){NetFunnel.printDebugMsg("send",a)}b.appendChild(this.script);return true};NetFunnel.TsClient.prototype._sendError=function(c,a){var b="";switch(a){case NetFunnel.kErrorAlready:b="Already running";break;case NetFunnel.kErrorNoinit:b="Uninitialized object";break;case NetFunnel.kErrorSystem:default:b="System error"}this.fireEvent(null,this,"onError",{rtype:c,code:a,data:{msg:b},next:this.next.error})};NetFunnel.TsClient.prototype.setNext=function(a){if(typeof a=="object"){this.next=a}else{try{this.next.success=undefined;this.next.continued=undefined;this.next.bypass=undefined;this.next.expressnumber=undefined;this.next.block=undefined;this.next.ipblock=undefined;this.next.error=undefined;this.next.stop=undefined}catch(b){this.next.success=window.undefined;this.next.continued=window.undefined;this.next.bypass=window.undefined;this.next.expressnumber=window.undefined;this.next.block=window.undefined;this.next.ipblock=window.undefined;this.next.error=window.undefined;this.next.stop=window.undefined}}};NetFunnel.TsClient.prototype.sendStop=function(a){if(NetFunnel.TS_BYPASS==true){this.fireEvent(null,this,"onSuccess",{rtype:this._mReqType,code:NetFunnel.kSuccess,data:{},next:this.next.success});return true}if(a=="undefined"){a=true}if(a){this.counter[NetFunnel.RTYPE_STOP]=0}this._resetAlarm();this._resetRetryTimer();this._resetScript();this.fireEvent(null,this,"onSuccess",{rtype:this._mReqType,code:NetFunnel.kSuccess,data:{},next:this.next.success});this._mStatus=NetFunnel.PS_N_RUNNING;return true};NetFunnel.TsClient.prototype.getTicketID=function(a,f,h){NetFunnel.gPrevWaitTime=-1;if(NetFunnel.TS_BYPASS==true){this.fireEvent(null,this,"onSuccess",{rtype:this._mReqType,code:NetFunnel.kSuccess,data:{},next:this.next.success});return true}if(this.mConfig.use_unfocus==true){NetFunnel.Util.delFocus(this.getConfig("popup_target"))}NetFunnel.gTotWait=-1;NetFunnel.retryData=null;var e=(this.mConfig.mp_use==true)?NetFunnel.MProtect():0;if(e!=0){this.fireEvent(null,this,"onContinued",{rtype:NetFunnel.RTYPE_CHK_ENTER,code:NetFunnel.kContinue,data:{tps:1,eps:2,nwait:(NetFunnel.gControl.getConfig("showcnt_limit")*2),mprotect:e,ttl:10}});if(this.retryTimer){clearTimeout(this.retryTimer)}NetFunnel.retryData={user_id:a,user_tid:f,first:h};var b=this;this.retryTimer=setTimeout(function(){b.retryFunction(NetFunnel.RTYPE_GET_TID)},this.mConfig.virt_wait);return false}if(h=="undefined"){h=true}if(h){this.counter[NetFunnel.RTYPE_GET_TID]=0}if(this._mStatus==NetFunnel.PS_RUNNING){this._sendError(NetFunnel.RTYPE_GET_TID,NetFunnel.kErrorAlready);return false}this.user_id=a;this.user_tid=f;var d=this.mConfig.proto+"://"+this.mConfig.host+":"+this.mConfig.port+"/"+this.mConfig.query+"?opcode="+NetFunnel.RTYPE_GET_TID+"&nfid="+this.id+"&prefix=NetFunnel.gRtype="+NetFunnel.RTYPE_GET_TID+";";d+="&sid="+this.mConfig.service_id+"&aid="+this.mConfig.action_id;var c=this.getUserdata();if(c!=""){d+="&user_data="+c}d+="&js=yes";var g=new Date();d+="&"+g.getTime();if(!this._connInit(NetFunnel.RTYPE_GET_TID)){this._sendError(NetFunnel.RTYPE_GET_TID,NetFunnel.kErrorNoinit);return false}this._sendRequest(d);return true};NetFunnel.TsClient.prototype.chkEnter=function(a,b){if(NetFunnel.TS_BYPASS==true){this.fireEvent(null,this,"onSuccess",{rtype:this._mReqType,code:NetFunnel.kSuccess,data:{},next:this.next.success});return true}if(this._mStatus==NetFunnel.PS_RUNNING||this._mStatus==NetFunnel.PS_CONTINUE){this._sendError(NetFunnel.RTYPE_CHK_ENTER,NetFunnel.kErrorAlready);return false}return this.chkEnterProc(a,b)};NetFunnel.TsClient.prototype.chkEnterCont=function(a,b){if(this._mStatus==NetFunnel.PS_RUNNING){this._sendError(NetFunnel.RTYPE_CHK_ENTER,NetFunnel.kErrorAlready);return false}return this.chkEnterProc(a,b)};NetFunnel.TsClient.prototype.chkEnterProc=function(d,g){if(g=="undefined"){g=true}if(g){this.counter[NetFunnel.RTYPE_CHK_ENTER]=0}if(!d||d==""){if(this.key){d=this.key}else{this._sendError(NetFunnel.RTYPE_CHK_ENTER,NetFunnel.kErrorParam);return false}}this.key=d;var f=this.retval.getValue("ip");if(this.mConfig.conn_retry>1&&this.counter[this._mReqType]==(this.mConfig.conn_retry)){f=this.mConfig.config_use}var a=this.retval.getValue("port");var c="";if(f&&f!=""&&a&&a!=""&&!this.mConfig.config_use){c=this.mConfig.proto+"://"+f+":"+a+"/"}else{c=this.mConfig.proto+"://"+this.mConfig.host+":"+this.mConfig.port+"/"}c=c+this.mConfig.query+"?opcode="+NetFunnel.RTYPE_CHK_ENTER+"&key="+d+"&nfid="+this.id+"&prefix=NetFunnel.gRtype="+NetFunnel.RTYPE_CHK_ENTER+";";if(NetFunnel.ttl>0){c=c+"&ttl="+NetFunnel.ttl}c+="&sid="+this.mConfig.service_id+"&aid="+this.mConfig.action_id;var b=this.getUserdata();if(b!=""){c+="&user_data="+b}c+="&js=yes";var e=new Date();c+="&"+e.getTime();if(!this._connInit(NetFunnel.RTYPE_CHK_ENTER)){this._sendError(NetFunnel.RTYPE_CHK_ENTER,NetFunnel.kErrorNoinit);return false}this._sendRequest(c);return true};NetFunnel.retryData=null;NetFunnel.retryFunction=function(b){if(typeof NetFunnel.retryData=="object"){var a=NetFunnel.retryData;if(b==NetFunnel.RTYPE_GET_TID){NetFunnel.gControl.getTicketID(a.user_id,a.user_tid,a.first)}else{if(b==NetFunnel.RTYPE_GET_TID_CHK_ENTER){NetFunnel.gControl.getTidChkEnter(a.user_id,a.user_tid,a.first)}}}};NetFunnel.TsClient.prototype.getTidChkEnter=function(a,c,e,d){NetFunnel.gPrevWaitTime=-1;if(NetFunnel.TS_BYPASS==true){this.fireEvent(null,this,"onSuccess",{rtype:this._mReqType,code:NetFunnel.kSuccess,data:{},next:this.next.success});return true}if(this._mStatus==NetFunnel.PS_RUNNING||this._mStatus==NetFunnel.PS_CONTINUE){this._sendError(NetFunnel.RTYPE_CHK_ENTER,NetFunnel.kErrorAlready);return false}if(this.mConfig.use_unfocus==true){NetFunnel.Util.delFocus(this.getConfig("popup_target"))}NetFunnel.gTotWait=(d==undefined||isNaN(d))?-1:d;NetFunnel.retryData=null;var b=(this.mConfig.mp_use==true)?NetFunnel.MProtect():0;if(b==0&&this.mConfig.show_wait_popup==false){if(this.getConfig("use_pre_wait")){NetFunnel.PopupUtil.showWaitPopup()}return(this.getTidChkEnterProc(a,c,e))}this.fireEvent(null,this,"onContinued",{rtype:NetFunnel.RTYPE_CHK_ENTER,code:NetFunnel.kContinue,data:{tps:1,eps:2,nwait:(NetFunnel.gControl.getConfig("showcnt_limit")*2),mprotect:b,ttl:10}});if(this.retryTimer){clearTimeout(this.retryTimer)}NetFunnel.retryData={user_id:a,user_tid:c,first:e};this.retryTimer=setTimeout(function(){NetFunnel.retryFunction(NetFunnel.RTYPE_GET_TID_CHK_ENTER)},this.mConfig.virt_wait);return false};NetFunnel.TsClient.prototype.getTidChkEnterProc=function(a,d,f){if(f=="undefined"){f=true}if(f){this.counter[NetFunnel.RTYPE_GET_TID_CHK_ENTER]=0}this.user_id=a;this.user_tid=d;var c=this.mConfig.proto+"://"+this.mConfig.host+":"+this.mConfig.port+"/"+this.mConfig.query+"?opcode="+NetFunnel.RTYPE_GET_TID_CHK_ENTER+"&nfid="+this.id+"&prefix=NetFunnel.gRtype="+NetFunnel.RTYPE_GET_TID_CHK_ENTER+";";if(NetFunnel.ttl>0){c=c+"&ttl="+NetFunnel.ttl}c+="&sid="+this.mConfig.service_id+"&aid="+this.mConfig.action_id;c+="&js=yes";var b=this.getUserdata();if(b!=""){c+="&user_data="+b}var e=new Date();c+="&"+e.getTime();if(!this._connInit(NetFunnel.RTYPE_GET_TID_CHK_ENTER)){this._sendError(NetFunnel.RTYPE_GET_TID_CHK_ENTER,NetFunnel.kErrorNoinit);return false}this._sendRequest(c);return true};NetFunnel.TsClient.prototype.aliveNoticeProc=function(d,g,a,f){if(f=="undefined"){f=true}if(f){this.counter[NetFunnel.RTYPE_ALIVE_NOTICE]=0}if(!d||d==""){if(this.key){d=this.key}else{this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE,NetFunnel.kErrorParam);return false}}this.key=d;this.ip=g;this.port=a;if(this.mConfig.conn_retry>1&&(this.counter[this._mReqType]==this.mConfig.conn_retry)){g=this.mConfig.config_use}var c="";if(g&&g!=""&&a&&a!=""&&!this.mConfig.config_use){this.ip=(this.mConfig._host_changed==false)?g:this.mConfig.host;this.port=(this.mConfig._port_changed==false)?a:this.mConfig.port;c=this.mConfig.proto+"://"+this.ip+":"+this.port+"/"}else{c=this.mConfig.proto+"://"+this.mConfig.host+":"+this.mConfig.port+"/"}c=c+this.mConfig.query+"?opcode="+NetFunnel.RTYPE_ALIVE_NOTICE+"&key="+d+"&nfid="+this.id+"&prefix=NetFunnel.gRtype="+NetFunnel.RTYPE_ALIVE_NOTICE+";";c+="&sid="+this.mConfig.service_id+"&aid="+this.mConfig.action_id;var b=this.getUserdata();if(b!=""){c+="&user_data="+b}c+="&js=yes";var e=new Date();c+="&"+e.getTime();if(!this._connInit(NetFunnel.RTYPE_ALIVE_NOTICE)){this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE,NetFunnel.kErrorNoinit);return false}this._sendRequest(c);return true};NetFunnel.TsClient.prototype.aliveNotice=function(b,d,a,c){if(NetFunnel.TS_BYPASS==true){this.fireEvent(null,this,"onSuccess",{rtype:this._mReqType,code:NetFunnel.kSuccess,data:{},next:this.next.success});return true}if(this._mStatus==NetFunnel.PS_RUNNING||this._mStatus==NetFunnel.PS_CONTINUE){this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE,NetFunnel.kErrorAlready);return false}return this.aliveNoticeProc(b,d,a,c)};NetFunnel.TsClient.prototype.aliveNoticeCont=function(b,d,a,c){if(this._mStatus==NetFunnel.PS_RUNNING){this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE,NetFunnel.kErrorAlready);return false}return this.aliveNoticeProc(b,d,a,c)};NetFunnel.TsClient.prototype.setComplete=function(h,f,d,e){var i=new NetFunnel.Storage();i.setItemStorageOnly("NFMPT.reqCnt","0");if(NetFunnel.TS_BYPASS==true){this.fireEvent(null,this,"onSuccess",{rtype:this._mReqType,code:NetFunnel.kSuccess,data:{},next:this.next.success});return true}if(e=="undefined"){e=true}if(e){this.counter[NetFunnel.RTYPE_SET_COMPLETE]=0}if(this._mStatus==NetFunnel.PS_RUNNING){this._sendError(NetFunnel.RTYPE_SET_COMPLETE,NetFunnel.kErrorAlready);return false}if(!h||h==""){if(this.key){h=this.key}else{this._sendError(NetFunnel.RTYPE_SET_COMPLETE,NetFunnel.kErrorParam);return false}}this.key=h;this.ip=f;if(this.mConfig.conn_retry>1&&this.counter[this._mReqType]==(this.mConfig.conn_retry-1)){f=this.mConfig.config_use}this.port=d;if(h==NetFunnel.CONN_TIMEOUT_KEY){var b=new NetFunnel.RetVal(NetFunnel.RTYPE_SET_COMPLETE+":"+NetFunnel.kSuccess+":utime=1");this._showResultSetComplete(b);return true}var a="";if(f&&f!=""&&d&&d!=""&&!this.mConfig.config_use){this.ip=(this.mConfig._host_changed==false)?f:this.mConfig.host;this.port=(this.mConfig._port_changed==false)?d:this.mConfig.port;a=this.mConfig.proto+"://"+this.ip+":"+this.port+"/"}else{a=this.mConfig.proto+"://"+this.mConfig.host+":"+this.mConfig.port+"/"}a=a+this.mConfig.query+"?opcode="+NetFunnel.RTYPE_SET_COMPLETE+"&key="+h+"&nfid="+this.id+"&prefix=NetFunnel.gRtype="+NetFunnel.RTYPE_SET_COMPLETE+";";var g=this.getUserdata();if(g!=""){a+="&user_data="+g}a+="&js=yes";var c=new Date();a+="&"+c.getTime();if(!this._connInit(NetFunnel.RTYPE_SET_COMPLETE)){this._sendError(NetFunnel.RTYPE_SET_COMPLETE,NetFunnel.kErrorNoinit);return false}this._sendRequest(a);return true};NetFunnel.TsClient.prototype.cookieExist=function(){var d=new NetFunnel.Storage(2);var a=d.getItem(this.mConfig.cookie_id);if(a==false||a==""){return false}var b=new NetFunnel.RetVal(a);var c=b.getValue("key");if(!c){d.removeItem(this.mConfig.cookie_id);return false}return true};NetFunnel.TsClient.prototype.isRunning=function(){if(this._mStatus==NetFunnel.PS_RUNNING||this._mStatus==NetFunnel.PS_CONTINUE){return true}return false};function NetFunnel_init(c,a,b){if(NetFunnel.gControl){NetFunnel.gControl._resetScript();NetFunnel.gControl=null}if(typeof b=="undefined"){b=NetFunnel.DefaultCallback}else{if(!b.onSuccess){b.onSuccess=NetFunnel.DefaultCallback.onSuccess}if(!b.onContinued){b.onContinued=NetFunnel.DefaultCallback.onContinued}if(!b.onError){b.onError=NetFunnel.DefaultCallback.onError}if(!b.onStop){b.onStop=NetFunnel.DefaultCallback.onStop}if(!b.onBypass){b.onBypass=NetFunnel.DefaultCallback.onBypass}if(!b.onBlock){b.onBlock=NetFunnel.DefaultCallback.onBlock}if(!b.onExpressnumber){b.onExpressnumber=NetFunnel.DefaultCallback.onExpressnumber}if(!b.onIpBlock){b.onIpBlock=NetFunnel.DefaultCallback.onIpBlock}}NetFunnel.gControl=new NetFunnel.TsClient(a,b);return true}function NetFunnel_sendStop(a){try{if(!NetFunnel.gControl){NetFunnel_init()}NetFunnel.gAlreadyProc=0;NetFunnel.gControl.setNext(a);NetFunnel.gControl.sendStop();return true}catch(b){return false}}function NetFunnel_getTicketID(c,a,b){if(!NetFunnel.gControl){NetFunnel_init()}NetFunnel.gAlreadyProc=0;NetFunnel.gControl.setNext(c);NetFunnel.gControl.getTicketID(a,b);return true}function NetFunnel_chkEnter(d,e){if(!NetFunnel.gControl){NetFunnel_init()}NetFunnel.gAlreadyProc=0;var c;if(typeof e!="undefined"&&e.constructor==Object){c=e.key;if(!c){return false}}else{var f=new NetFunnel.Storage(2);var a=f.getItem(NetFunnel.gControl.mConfig.cookie_id);if(a===null||a==""){return false}var b=new NetFunnel.RetVal(a);c=b.getValue("key");if(!c){f=new NetFunnel.Storage(2);f.removeItem(this.mConfig.cookie_id);return false}}NetFunnel.gControl.setNext(d);NetFunnel.gControl.chkEnter(c);return true}function NetFunnel_getTidChkEnter(c,a,b){if(!NetFunnel.gControl){NetFunnel_init()}NetFunnel.gAlreadyProc=0;NetFunnel.gControl.setNext(c);NetFunnel.gControl.getTidChkEnter(a,b);return true}function NetFunnel_aliveNotice(f,e){try{if(!NetFunnel.gControl){NetFunnel_init()}NetFunnel.gAlreadyProc=0;var h="";var g="";var b="";if(typeof e!="undefined"&&e.constructor==Object){h=e.key;if(!h){return false}g=e.ip;b=e.port}else{var d=new NetFunnel.Storage(2);var i=d.getItem(NetFunnel.gControl.mConfig.cookie_id);if(i===null||i==""){return false}var a=new NetFunnel.RetVal(i);h=a.getValue("key");if(!h){d.removeItem(this.mConfig.cookie_id);return false}g=a.getValue("ip");b=a.getValue("port")}NetFunnel.gControl.setNext(f);NetFunnel.gControl.aliveNotice(h,g,b);return true}catch(c){return false}}function NetFunnel_setComplete(f,e){if(!NetFunnel.gControl){NetFunnel_init()}NetFunnel.gAlreadyProc=0;NetFunnel.gControl.setNext(f);var j="";var g="";var b="";if(typeof e!="undefined"&&e.constructor==Object){j=e.key;if(!j){NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE,NetFunnel.kErrorSystem);return false}g=e.ip;b=e.port}else{var d=new NetFunnel.Storage(2);var k=d.getItem(NetFunnel.gControl.mConfig.cookie_id);if(k===null||k==""){NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE,NetFunnel.kErrorSystem);return false}var a=new NetFunnel.RetVal(k);var h=a.getRetCode();var c=a.getReqType();if(h!=NetFunnel.kSuccess&&h!=NetFunnel.kTsBypass&&!(c==NetFunnel.RTYPE_ALIVE_NOTICE&&h==NetFunnel.kContinue)){var i=new NetFunnel.RetVal(NetFunnel.RTYPE_SET_COMPLETE+':200:msg="Success"');NetFunnel.gControl._showResultSetComplete(i);return true}j=a.getValue("key");if(!j){d=new NetFunnel.Storage(2);d.removeItem(NetFunnel.gControl.mConfig.cookie_id);NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE,NetFunnel.kErrorSystem);return false}g=a.getValue("ip");b=a.getValue("port")}NetFunnel.gControl.setComplete(j,g,b);return true}function NetFunnel_cookieExist(){if(!NetFunnel.gControl){return false}return NetFunnel.gControl.cookieExist()}function NetFunnel_isRunning(){if(!NetFunnel.gControl){return false}return NetFunnel.gControl.isRunning()}function NetFunnel_goForm(d,c,a){var e=null;if(typeof c=="string"){e=document.getElementById(c);if(typeof e!="object"||e===null){var b=document.getElementsByName(c);e=b[0];if(typeof e!="object"||e===null){alert("[NetFUNNEL] Invalid input form");return false}}}else{if(typeof c=="object"){e=c}else{alert("[NetFUNNEL] Invalid input form");return false}}if(typeof a!="function"){a=function(g,f){return false}}NetFunnel_init(null,d);NetFunnel_getTidChkEnter({success:function(g,f){if(e!==null){e.submit()}},error:function(g,f){if(e!==null){e.submit()}},bypass:function(g,f){if(e!==null){e.submit()}},stop:a});return false}function NetFunnel_goUrl(c,a,b){if(typeof a!="string"){alert("[NetFUNNEL] Invalid input url");return false}if(typeof b!="function"){b=function(e,d){return false}}NetFunnel_init(null,c);NetFunnel_getTidChkEnter({success:a,error:a,bypass:a,stop:b});return false}function NetFunnel_goFunc(c,b,a){if(typeof b!="function"){alert("[NetFUNNEL] Invalid input function");return false}if(typeof a!="function"){a=function(e,d){return false}}NetFunnel_init(null,c);NetFunnel_getTidChkEnter({success:b,error:b,bypass:b,stop:a});return false}function NetFunnel_goComplete(b,a){if(typeof a!="function"){a=function(d,c){return false}}NetFunnel_init(null,b);NetFunnel_setComplete({success:a,error:a,bypass:a});return false}function NetFunnel_goAliveNotice(b,a){if(typeof a!="function"){a=function(d,c){return false}}NetFunnel_init(null,b);NetFunnel_aliveNotice({success:a,error:a,bypass:a});return false}function NetFunnel_Action(f,d){var j=null;var k=d.success;var b=d.continued;var i=d.stop;var h=d.error;var e=d.bypass;var c=d.block;var g=d.ipblock;var a=d.expressnumber;if(typeof d.success=="undefined"){k=d}if(typeof k=="object"){j=k}if(typeof i=="undefined"){i=function(m,l){return false}}if(typeof h=="undefined"){h=k}if(typeof e=="undefined"){e=k}if(typeof a=="undefined"){a=k}NetFunnel_init(null,f);if(j===null){NetFunnel_getTidChkEnter({success:k,error:h,stop:i,bypass:e,block:c,ipblock:g,expressnumber:a,continued:b})}else{NetFunnel_getTidChkEnter({success:function(m,l){if(j!==null){j.submit()}},error:function(m,l){if(j!==null){j.submit()}},bypass:function(m,l){if(j!==null){j.submit()}},expressnumber:function(m,l){if(j!==null){j.submit()}},stop:i,block:c,ipblock:g,continued:b})}return false}function NetFunnel_Complete(b,a){if(typeof a!="function"){a=function(d,c){return false}}NetFunnel_init(null,b);NetFunnel_setComplete({success:a,error:a,bypass:a});return false}function NetFunnel_AliveNotice(f,c){NetFunnel_init(null,f);if(typeof c=="function"){NetFunnel_aliveNotice({success:c,error:c,bypass:c,continued:c})}else{if(typeof c=="object"){var j=c.success;var b=c.continued;var i=c.stop;var h=c.error;var e=c.bypass;var d=c.block;var g=c.ipblock;var a=c.expressnumber;NetFunnel_aliveNotice({success:j,error:h,stop:i,bypass:e,block:d,ipblock:g,expressnumber:a,continued:b})}else{c=function(l,k){return false};NetFunnel_aliveNotice({success:c,error:c,bypass:c,continued:c})}}return false}function DefaultCallback_onSuccess(e,b,f){if(navigator.userAgent.toLowerCase().indexOf("chrome")>0){if(NetFunnel.gPop){var d=f.getConfig("popup_target").document;var c=document.createElement("IMG");c.src="data:image/gif;base64,"+NetFunnel.gFixelData;c.style.position="absolute";c.style.top="-10px";c.style.left="-10px";c.style.display="none";c.onload=function(){b.next(e,b);var g=d.getElementsByTagName("body")[0];g.removeChild(c)};var a=d.getElementsByTagName("body")[0];a.appendChild(c)}else{b.next(e,b)}}else{b.next(e,b)}return false}if(NetFunnel.TS_AUTO_COMPLETE==true){NetFunnel_Complete()};

define("netfunnel", function(){});

define('js/app/performance/service/netfunnelService',[
    "jquery",
    "underscore",
    "js/app/common/model/commonModel",
    "js/app/performance/service/reservationCommonService",
    "netfunnel",
    "ticketDomain",
    "ticketUtil",
    "js/app/performance/util/performanceUtil",
    "ticketStringUtil"
], function ( $,underscore
              ,commonModel, reservationCommonService
    , netfunnel
    ,ticketDomain, ticketUtil, pUtil, ticketStringUtil ) {

    'use strict';

    var exports = {};

    var nf_block_msg = "판매가 마감 되었습니다.";
    var nf_action_id = ""; // netfunnel action id
    var nf_title = ""; // netfunnel perf title
    var nf_step  = 1;        // ticketing step: step01 - step02 - step03

    var waitingTimer = null;

    var modalPopup = {
        holder : null,
        init: function(obj) {
            this.holder=$(obj);
        },
        show : function() {
            this.holder.show();
            return false;
        },
        hide : function() {
            this.holder.hide();
            return false;
        }
    };

    function init( ) {
        modalPopup.init("#pop_waiting");

        $("body").on("click", "#close_zam", function() {
            if ( waitingTimer ) {
                clearTimeout(waitingTimer);
            }

            try {
                if ( modalPopup ) {
                    modalPopup.hide();
                }
            } catch(e){}
        });
    }

    /**
     * 넷퍼넬 init 함수
     * @param params
     */
    exports.netfunnelInit = function(params) {
        var prodId = params.prodId;
        var scheduleNo = params.scheduleNo;
        var pocCode = params.pocCode;
        var trafficCtrlYn = params.trafficCtrlYn;
        var sessionKey = params.sessionKey;
        var reservationType = params.reservationType;
        var sellCondNo = params.sellCondNo;
        var sellTypeCode = params.sellTypeCode;
        var nf_action_id = params.nf_action_id;
        var netfunnelType = params.netfunnelType;
        var netfunnelName = params.netfunnelName;
        nf_title = params.netfunnelSkinTitle;

        _netfunnelSkin(nf_title);

        NetFunnel_Action({ action_id:nf_action_id }, {

            success:function(ev,ret) {
                if (ret.code === 200) {
                    _sendNetFunnelLog(netfunnelName + "_SUCCESS", ret);

                    var dto = {
                        nf_action_id:nf_action_id,
                        netfunnelkey:ret.data.key,
                        prodId:prodId,
                        scheduleNo:scheduleNo,
                        trafficCtrlYn:trafficCtrlYn,
                        sessionKey:sessionKey,
                        reservationType:reservationType,
                        netfunnelType:netfunnelType,
                        sellCondNo:sellCondNo,
                        pocCode:pocCode,
                        sellTypeCode:sellTypeCode
                    };
                    reservationCommonService.service.oneStopProcess(dto);
                }
            },
            ipblock: function(ev, ret) {
                _sendNetFunnelLog(netfunnelName + "_IPBLOCK", ret);
                alert("비정상적인 활동이 감지되어 일시적으로 예매를 제한합니다.\n" +
                    "잠시 후 다시 시도해주세요.");
                return false;
            },
            block: function(ev,ret) {
                alert(nf_block_msg);
                return false;
            },
            error: function(ev,ret) {

                _sendNetFunnelLog(netfunnelName + "_ERROR", ret);

                alert("다시 시도 부탁 드립니다.");
                return false;
            }
        });
    }


    function _netfunnelDisplaySetting(){
        // zam popup display setting
        $("#flicker01").css("display", "block");
        $("#flicker01").addClass("chk");
        $("#step01").addClass("on");
        $("#flicker02").css("display", "block");
        $("#flicker03").css("display", "block");
        $("#flicker04").css("display", "block");

        if( nf_step == 1 ) {
            $("#progressImg01").css("display", "block");
            $("#state01").css("display", "block");
            return false;
        }

        $("#progress01").css("width", "100%");
        $("#flicker02").addClass("chk");
        $("#step02").addClass("on");
        $("#flicker03").css("display", "block");

        if(nf_step == 2) {
            $("#progressImg02").css("display", "block");
            $("#state02").css("display", "block");
            return false;
        }

        $("#progress02").css("width", "100%");
        $("#flicker03").addClass("chk");
        $("#step03").addClass("on");
        $("#flicker04").css("display", "block");

        if(nf_step == 3) {
            $("#progressImg03").css("display", "block");
            $("#state03").css("display", "block");
            return false;
        }

        $("#progress03").css("width", "100%");
        $("#flicker04").addClass("chk");
        $("#step04").addClass("on");

        if(nf_step == 4) {
            $("#state04").css("display", "block");
            return false;
        }

    }

    /**
     * 넷퍼넬 스킨 호출 함수
     */
    function _netfunnelSkin(nf_title) {

        if( _.isObject(NetFunnel) ) {
            var zamPopHtml = $("#Ticket_netfunnel_Template").html();

            NetFunnel.SkinUtil.add('melonTicketPC',{
                prepareCallback:function() {
                    var NF_TITLE = $("#NetFunnel_Title");
                    NF_TITLE.html(nf_title);

                    _netfunnelDisplaySetting();
                }, updateCallback:function(percent,nwait,totwait,timeleft){

                },
                htmlStr:zamPopHtml
            },'normal');
        }
    }

    /**
     * 넷퍼넬 로그
     * @param fnCode
     * @param ret
     * @private
     */
    function _sendNetFunnelLog( fnCode, ret ) {
        var msg = '';
        var flg = 0;

        try{
            if(ret.code != 200 || ret.rtype != 5002 || ret.data.key.length < 50) {
                msg = "["+ fnCode +"_N] ret:" + JSON.stringify(ret);
                flg = 1;
            }
        }
        catch(e) {
            msg = "["+ fnCode +"E] ret:" + JSON.stringify(ret);
            flg = 1;
        }

        try {
            if(flg == 1) {

                var paramsUrl = commonDomain.GLOBAL_TICKET_HTTPS + "/log/netfunnel/netfunnelLog.json";
                var paramsData = {
                    msg:msg,
                    v:1
                };

                var ajaxCall = commonModel.model.getDefaultAjaxHTML( paramsUrl, paramsData );
            }
        } catch(e) {

        }
    }

    return {
        init:init,
        service:exports
    };
});
define('js/app/performance/service/reservationService',[
    "jquery",
    "underscore",
    "js/app/common/model/commonModel",
    "js/app/performance/service/performanceCommonService",
    "js/app/performance/service/netfunnelService",
    "js/app/performance/service/reservationCommonService",
    "js/app/performance/service/preSaleService",
    "js/app/common/service/loginService",
    "js/common/util/commonMessageUtil",
    "ticketDomain",
    "ticketUtil",
    "js/app/performance/util/performanceUtil",
    "ticketStringUtil",

], function ( $,underscore
    , commonModel, performanceCommonService, netfunnelService, reservationCommonService, preSaleService, loginService
    , commonMessageUtil
    ,ticketDomain, ticketUtil, pUtil, ticketStringUtil

     ) {

    'use strict';

    var exports = {};

    function init( ) {

    }

    /**
     * 예매하기 시작 함수
     * @param params
     */
    exports.reservationInit = function( params ) {
        var prodTypeCode = params.prodTypeCode;

        if( prodTypeCode === commonCode.PROD_TYPE_CODE1 ) {  //일반상품
            _seatReservationProcess( params );
        } else {                                          //상시상품
            _simpleReservationProcess( params );
        }
    };

    /**
     * 상시상품
     * 예매하기 로직
     * @param params
     * @private
     */
    function _simpleReservationProcess( params ) {
        if( !isMelonLogin() ) {
            loginService.service.melonPopupLogin();
            return;
        }

        var dto1 = {};
        dto1.prodId = params.prodId;
        dto1.prodTypeCode = params.prodTypeCode;
        dto1.pocCode = params.pocCode;
        dto1.btnType = params.btnType;
        dto1.reservationType = params.prodTypeCode;
        dto1.gradeCode = $("#global_ticket_gradeCode").val();
        dto1.processType = params.processType;

        _reservationUserDataIdentifyProcess(dto1);
    }

    /**
     * 일반상품
     * 예매하기 로직
     * @param params
     * @private
     */
    function _seatReservationProcess(params) {

        var $selectedSchedule = $(".item_time.on");

        if($selectedSchedule.length == 0) {
            alert("공연 날짜와 시간을 선택해주세요.");
            return;
        }

        var seatPoc  = $($selectedSchedule).attr("data-seatpoc");
        var sellTypeCode = $($selectedSchedule).attr("data-selltypecode");
        var dto1 = {};
        dto1.prodId = params.prodId;
        dto1.prodTypeCode = params.prodTypeCode;
        dto1.sellTypeCode = sellTypeCode;
        dto1.gradeCode = $("#global_ticket_gradeCode").val();
        dto1.seatPoc = seatPoc;
        dto1.pocCode = params.pocCode;
        dto1.btnType = params.btnType;
        dto1.reservationType = sellTypeCode;
        dto1.processType = params.processType;

        if( !isMelonLogin() ) {
            loginService.service.melonPopupLogin();
            return;
        }

        if( seatPoc == 0 ) {
            alert("선택하신 회차는 판매가 마감되었습니다.");
            return;
        }

        if( sellTypeCode == commonCode.SELL_TYPE_CODE2 ) {  //선예매
            dto1.sellCondNo = getCondNo();
            dto1.autheTypeCode = params.autheTypeCode;
            dto1.authYn = params.authYn;

            var callback = preSaleService.service.preSaleReservationUserFind(dto1);

            callback.then(function(result) {
                 _reservationUserDataIdentifyProcess(dto1);
            },function() {

            });

        } else {  //일반예매
            _reservationUserDataIdentifyProcess(dto1);
        }
    }

    function _reservationUserDataIdentifyProcess(dto1) {
        var callback = performanceCommonService.service.reservationUserDataIdentifyProcess(dto1);

        callback.then(function(result) {
            _reservationChoice(result, dto1);
        }, function( ) {
            alert(commonMessage.melonMemberAuthDefault);
        });
    }

    /**
     * 성인/본인 인증 여부 체크
     * @param result
     * @param params
     * @private
     */
    function _reservationChoice(result, params) {
        var isAuth = commonUtil.inputObjectValueCheck(result,['isAuth']);
        var isPopupOpen = commonUtil.inputObjectValueCheck(result,['isPopupOpen']);
        var message = commonUtil.inputObjectValueCheck(result,['message']);
        var processType = params.processType;

        if( isAuth ) {
            IReservation( _FactoryFunction(processType), params );
        } else {
            if(message != "") {
                alert(message);
            }

            if(isPopupOpen) {
                performanceCommonService.service.identityVerificationProcess(result);
            }
        }
    }

    function IReservation( objectFunction, params ) {
        objectFunction.process(params);
    }

    function _FactoryFunction( type ) {
        var result = {};

        switch (type) {
            case commonCode.RESERVATION_CLASS_TYPE_CASTING_CALENDAR:  //캐스팅 캘린더 타입
                result = _castingCalendarReservationService;
                break;
            case commonCode.RESERVATION_CLASS_TYPE_DEFAULT:  //일반 예매 타입
                result = _reservationService;
                break;
        }

        return result;
    }


    /**
     * 캐스팅 캘린더 예매 로직 함수
     */
    var _castingCalendarReservationService = {

        process : function(objParams) {
            //예매 유의 사항이 있는 경우 표시
            var isProgress = _reservationNotice($("#castingRsrvInfo").val());

            if(isProgress) {
                return;
            }

            var scheduleNo = !commonStringUtil.isEmpty(objParams.scheduleNo) ? objParams.scheduleNo : "";
            var cancelCloseDt = !commonStringUtil.isEmpty(objParams.cancelClosedt) ? objParams.cancelClosedt : "";

            if( scheduleNo != "" && cancelCloseDt != "" ) {
                if(!_isCancelCloseDt(cancelCloseDt)){
                    return;
                }

                var dto = {};
                dto.scheduleNo = scheduleNo;
                dto.prodId = objParams.prodId;
                dto.prodTypeCode = objParams.prodTypeCode;
                dto.sellTypeCode = objParams.sellTypeCode;
                dto.gradeCode = objParams.gradeCode;
                dto.seatPoc = objParams.seatPoc;
                dto.pocCode = objParams.pocCode;
                dto.sellCondNo = objParams.sellCondNo;
                dto.reservationType = objParams.reservationType;

                _reservationZAM(dto);
            } else {
                alert("유효한 스케줄이 존재하지 않습니다.");
            }
        }
    }

    /**
     * 예매 로직 함수
     */
    var _reservationService = {

        process : function(params) {
            var prodTypeCode = params.prodTypeCode;

            var isProgress = _reservationNotice($("#global_ticket_rsrvInfo").val());

            if(isProgress) {
                return;
            }

            if(prodTypeCode === commonCode.PROD_TYPE_CODE1){  //일반상품


                var $selectedTime = $(".item_time.on");
                var timeDomLength = $selectedTime.length;

                if( timeDomLength != 0 ) {
                    var scheduleNo = $( $selectedTime ).attr("data-scheduleno");
                    var cancelCloseDt = $( $selectedTime ).attr("data-cancelclosedt");

                    if(!_isCancelCloseDt(cancelCloseDt)){
                        return;
                    }

                    var dto = {};
                    dto.scheduleNo = scheduleNo;
                    dto.prodId = params.prodId;
                    dto.prodTypeCode = params.prodTypeCode;
                    dto.sellTypeCode = params.sellTypeCode;
                    dto.gradeCode = params.gradeCode;
                    dto.seatPoc = params.seatPoc;
                    dto.pocCode = params.pocCode;
                    dto.sellCondNo = params.sellCondNo;
                    dto.reservationType = params.reservationType;

                    _reservationZAM(dto);
                } else {
                    alert("유효한 스케줄이 존재하지 않습니다.");
                }

            } else {                                          //상시상품
                var dto = {};
                dto.prodId = params.prodId;
                dto.prodTypeCode = params.prodTypeCode;
                dto.pocCode = params.pocCode;
                dto.reservationType = params.reservationType;

                _reservationZAM(dto);
            }
        }
    }

    /**
     * 예매 유의 사항이 있는 경우 표시
     * @private
     */
    function _reservationNotice(message){
        if( commonStringUtil.isNotEmpty(message) ) {
            if( !confirm(message) ) {
                return true;
            }
        }

        return false;
    }

    function _isCancelCloseDt(cancelCloseDt){

        if ( (new Date()).getTime() > performanceUtil.convertStringToDate(cancelCloseDt).getTime() ) {
            if(!confirm("선택하신 회차는 관람일이 임박하여 결제 후 취소, 변경, 환불이 불가합니다. 예매를 진행하시겠습니까?")) {
                return false;
            }
        }
        return true;
    }


    function _reservationZAM(params) {
        var scheduleNo = commonUtil.inputObjectValueCheck(params,['scheduleNo']);
        var prodId = commonUtil.inputObjectValueCheck(params,['prodId']);
        var sellCondNo = commonUtil.inputObjectValueCheck(params,['sellCondNo']);
        var pocCode = commonUtil.inputObjectValueCheck(params,['pocCode']);
        var sellTypeCode = commonUtil.inputObjectValueCheck(params,['sellTypeCode']);
        var reservationType = commonUtil.inputObjectValueCheck(params,['reservationType']);
        var netfunnelName = _netfunnelLogName(reservationType);

        var asyncCall = reservationCommonService.service.generateSessionKey(params);

        asyncCall.then(function(result) {
            var trafficCtrlYn = commonUtil.inputObjectValueCheck(result,['trafficCtrlYn']);
            var nf_action_id = commonUtil.inputObjectValueCheck(result,['nf_action_id']);
            var sessionKey = commonUtil.inputObjectValueCheck(result,['sessionKey']);

            var dto = {};
            dto.prodId = prodId;
            dto.scheduleNo = scheduleNo != "" ? scheduleNo : commonUtil.inputObjectValueCheck(result,['scheduleNo']);
            dto.pocCode = pocCode;
            dto.trafficCtrlYn = trafficCtrlYn;
            dto.sessionKey = sessionKey;
            dto.sellCondNo = sellCondNo;
            dto.sellTypeCode = sellTypeCode;
            dto.reservationType = reservationType;

            if( trafficCtrlYn == "Y" ) {
                dto.nf_action_id = nf_action_id;
                dto.netfunnelType = "Y";
                dto.netfunnelName = netfunnelName;
                dto.netfunnelSkinTitle = $("#global_ticket_title").val();

                netfunnelService.service.netfunnelInit(dto);
            } else {
                dto.netfunnelType = "N";

                reservationCommonService.service.oneStopProcess(dto);
            }
        }, function() {

        });
    }

    function _netfunnelLogName( type ){
        var result = "";

        switch (type) {
            case commonCode.SELL_TYPE_CODE1:  //일반예매
                result = "reservationZAM";
                break;
            case commonCode.SELL_TYPE_CODE2:  //선예매
                result = "preReservationOneStopZAM";
                break;
            case commonCode.PROD_TYPE_CODE2:  //상시상품
                result = "reservationNonScheduleZAM";
                break;
        }

        return result;
    }

    /**
     * 캐스팅 캘린더 예매하기 함수
     * @param objParams
     */
    exports.castingCalendarReservationProcess = function( objParams ) {
        var seatPoc  = objParams.seatPoc;

        if(seatPoc == 0) {
            alert("선택하신 회차는 판매가 마감되었습니다.");
            return;
        }

        _reservationUserDataIdentifyProcess(objParams);
    }


    return {
        init:init,
        service:exports
    };
});
define('js/app/common/view/couponView',[
    "jquery",
    "ticketUtil",
    "Handlebars",
    "js/app/performance/util/handlebarsTemplateUtil"

], function ( $ ,ticketUtil, Handlebars, handlebarsTemplateUtil ) {
    'use strict';

    var exports = {};

    function init() {

    }


    exports.templatePrint = function( objData ) {
        handlebarsTemplateUtil.template.scheduleHandlebarsUtil();

        $(objData.emptyEl).empty();

        var source = $(objData.templateEl).html();

        var template = Handlebars.compile(source);

        var html = template(objData);

        $(objData.addEl).append(html);
    };




    return {
        init:init,
        view:exports
    };
});
define('js/app/common/service/couponService',[
    "jquery",
    "underscore",
    "js/app/common/model/commonModel",
    "js/common/util/commonMessageUtil",
    "js/app/common/view/couponView",
    "ticketDomain",
    "ticketCode",
    "ticketUtil",

], function ( $,underscore
                ,commonModel, commonMessageUtil
              , couponView
              , ticketDomain, ticketCode, ticketUtil
    ) {

    'use strict';

    var exports = {};

    function init() {

    }

    /**
     * 할인쿠폰 다운로드 함수
     * @param params
     */
    exports.downloadCoupon = function( params ) {
        var paramsUrl = commonDomain.GLOBAL_TICKET_HTTPS + "/saleCupn/downLoad.json";
        var paramsData = {
            cupnId:params.couponId,
            prodId:params.prodId,
            v:1
        };

        var ajaxCall = commonModel.model.postDefaultAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {
            alert(result.message);

            if(result.result == 1) {
                opener.location.reload();
                return;
            }
        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
        });
    };

    /**
     * 제휴사 쿠폰 관련
     *
     * @param prodId
     */
    exports.setCookieCoopInit = function( prodId ) {
        var coop = commonUtil.getQueryVariable('coop');
        var coop_funnel = commonUtil.getQueryVariable('coop_funnel');

        if( coop != null && coop !="" && coop_funnel != null && coop_funnel !="" ) {
            setCookie("coop",coop, "", "/", MELON.WEBSVC.POC.melonDomain);
            setCookie("coop_funnel",coop_funnel, "", "/", MELON.WEBSVC.POC.melonDomain);
            setFkCookie("tkt_fk","0", 3, "/", MELON.WEBSVC.POC.melonDomain);
            setCookie("cbo","0", "", "/", MELON.WEBSVC.POC.melonDomain);
        }

        _callCupnBanner(prodId);
    };

    /**
     *   제휴사 쿠폰 노출 여부 체크
     */
    function _callCupnBanner(prodId) {

        var coop = getCookie('coop');
        var coop_funnel = getCookie('coop_funnel');
        var tkt_fk = getCookie('tkt_fk');
        var cbo = getCookie('cbo');
        var hide_coop_banner = getCookie("hide_coop_banner");

        if( !hide_coop_banner ) {
            if(coop != null && coop !=""
                && coop_funnel != null && coop_funnel !=""
                && tkt_fk != null && tkt_fk !=""
                && cbo != null && cbo !="" ) {

                var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + "/poc/saleCupn/cupnBanner.json";
                var paramsData = {
                    prodId:prodId,
                    coop:coop,
                    v:1
                };

                var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

                ajaxCall.then(function(result, status, xhr) {
                    var bannerOpenYn = commonUtil.inputObjectValueCheck(result,['data','BANNEROPENYN']);

                    if ( bannerOpenYn == "Y" ) {
                        _callCupnBannerPrint(result);
                    }


                }, function( result, status, xhr ) {
                    commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
                });

            }
        }

    }

    /**
     * 제휴사 쿠폰 화면 출력
     * @param result
     * @private
     */
    function _callCupnBannerPrint(result) {
        var bannerList = commonUtil.inputObjectArrayCheck(result,['data','BANNERLIST']);

        if(bannerList.length > 0) {
            //제휴사 할인 쿠폰 리스트
            var printData = {
                emptyEl : "#affiliateCompanyBannerCouponList",
                templateEl : "#Ticket_AffiliateCompany_Template",
                objectData : bannerList,
                addEl:"#affiliateCompanyBannerCouponList"
            };

            couponView.view.templatePrint(printData);

            //배너 노출 코멘트
            var bannerListFirstData = _.first(bannerList);
            var printData2 = {
                emptyEl : "#bannerComment",
                templateEl : "#Ticket_AffiliateCompany_bannerComment_Template",
                objectData : {
                    bannerListFirstData:bannerListFirstData,
                    bannerListLength:bannerList.length
                },
                addEl:"#bannerComment"
            };

            couponView.view.templatePrint(printData2);

            $("#coopBanner").show();
        }

        setCookie("cbo","", -9999, "/", "melon.com");
    }

    /**
     *  제휴쿠폰발급
     * @type {number}
     */
    exports.coopCoupon = function( params ) {
        var cupnId = params.cupnId;
        var prodId = params.prodId;

        var paramsData = {};

        var _reqUrl = "/poc/saleCupn/coopCupnIssued.json";
        if( _.isArray(cupnId) ) {
            _reqUrl = "/poc/saleCupn/receiveCoopCupnByAll.json";
            paramsData["cupnId[]"] = cupnId;
        }

        paramsData.cupnId = cupnId;
        paramsData.prodId = prodId;
        paramsData.v = 1;

        var paramsUrl = commonDomain.GLOBAL_TICKET_API_HTTPS + _reqUrl;

        var ajaxCall = commonModel.model.getCookiePermissionAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {
            var resultCode = commonUtil.inputObjectValueCheck(result,['result']);
            var message = commonUtil.inputObjectValueCheck(result,['message']);

            alert(message);

            if( resultCode == 0 ) {
                $("#coopBanner").hide();
                location.replace(commonDomain.GLOBAL_TICKET_HTTPS + "/performance/index.htm?prodId=" + prodId);
            }

        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
        });
    };






    return {
        init:init,
        service:exports
    };
});
define('js/app/performance/service/tabMenuService',[
    "jquery",
    "underscore",
    "ticketCode",
    "ticketDomain",
    "js/app/common/model/commonModel",
    "js/common/util/commonMessageUtil"

], function ( $,underscore
              ,ticketCode, ticketDomain
              , commonModel, commonMessageUtil) {

    'use strict';

    var exports = {};

    var review_init = true;
    var evalue_init = true;
    var qna_init = true;
    var sliderInit = true;

    function init(prodId) {
        _tabMenuCount(prodId);
        var landingTab = $("#global_ticket_landingTab").val();

        if( landingTab == "review" ) {
            $("#perf_tab_review").trigger("click");
            location.hash = "review_area";
        } else if( landingTab == "evalue" ) {
            $("#perf_tab_evalue").trigger("click");
            location.hash = "review_area";
        }
    }


    exports.setTabDisplayInit = function () {
        var $perf_tab_review = $('#perf_tab_review');
        var $perf_tab_evalue = $('#perf_tab_evalue');
        var $perf_tab_qna = $('#perf_tab_qna');

        $perf_tab_review.hide();

        var periodInfoTxt = $('#periodInfo').text();
        var startPerfDateTxt = (periodInfoTxt == '' || periodInfoTxt.indexOf('-') < 0) ? '2999.12.31' : periodInfoTxt.split('-')[0];
        var startPerfDate = Date.parse(startPerfDateTxt.replace(/\./g,'/'));

        if(new Date().getTime() >= startPerfDate){
            $perf_tab_review.show();
        }

        //2018.01.22 상품상세 기대평/Q&A/관람후기/예매자통계DP 노출제어 기능 추가 작업 by Erica.K
        var bbsDpPocTypeCode = $("#global_ticket_bbsDpPocTypeCode").val();

        if( bbsDpPocTypeCode == "TA0001" || bbsDpPocTypeCode == "TA0002" ){
            var previewDpYn = $("#global_ticket_previewDpYn").val();
            var reviewDpYn = $("#global_ticket_reviewDpYn").val();
            var qnaDpYn = $("#global_ticket_qnaDpYn").val();

            if(previewDpYn == "N"){
                $perf_tab_evalue.hide();
            }
            if(reviewDpYn == "N"){
                $perf_tab_review.hide();
            }
            if(qnaDpYn == "N"){
                $perf_tab_qna.hide();
            }

        } else if( bbsDpPocTypeCode == "TA0003" || bbsDpPocTypeCode == "TA0004" ) {
            $perf_tab_evalue.hide();
            $perf_tab_review.hide();
            $perf_tab_qna.hide();
        }
    };

    exports.tabMenuEvent = function (_this) {
        var myindex = _this.index();
        _this.parent('.list_detail_menu').children('li').removeClass('on');
        _this.addClass('on');

        var tabType = _this.attr("data-type");

        $('.wrap_detailview_cont').hide();
        $('.wrap_detailview_cont').eq(myindex).show();
        $('.wrap_banner_comment').hide();
        $('.notice_role').hide();

        _bannerInit(tabType);

        if( _this.hasClass('nth2')) {
            $("#review-img-box").show();
        } else {
            $("#review-img-box").hide();
        }

        if ( _this.hasClass('nth2') ) {  //관람후기
            _tabReview();
        } else if (_this.hasClass('nth3')) {  // 기대평
            _expectedComment();
        } else if (_this.hasClass('nth4')) { // QnA
            _tabQna();

        }

    };

    /**
     * 탭 메뉴 카운트 가져오는 함수
     * 기대평, 관람후기, Q&A
     * @param prodId
     * @private
     */
    function _tabMenuCount(prodId) {

        var paramsUrl = commonDomain.GLOBAL_CMT_MELON_HTTPS + "/cmt/api/api_listCmtChnlContsSumm.json";
        var paramsData = {
            pocId:"WP15",
            cmtPocType:"pc.web",
            chnlSeqList:"916,917,918",
            contsRefValueList:prodId+","+prodId+","+prodId
        };

        var ajaxCall = commonModel.model.getJSONPDefaultAjax( paramsUrl, paramsData );

        ajaxCall.then(function(result, status, xhr) {  //회차 시간 리스트 화면 출력
            if(result.result) {
                $.each(result.result.cmtContsSummList, function(i, o) {
                    if(o.chnlSeq == 916) {
                        $("#evalueCnt").html(o.totalCmtCnt);
                    }
                    else if(o.chnlSeq == 917) {
                        $("#reviewCnt").html(o.totalCmtCnt);
                    }
                    else if(o.chnlSeq == 918) {
                        $("#qnaCnt").html(o.totalCmtCnt);
                    }
                });
            }
        }, function( result, status, xhr ) {
            commonMessageUtil.util.systemMessage(commonCode.systemErrorCode9);
        });
    }



    function _tabQna() {
        CURRENT_CHNL_SEQ = CMT_CHNL_QNA;
        window.location.hash = "#none";

        $("div[name=cmtpgn]").attr("id", "cmtpgn");
        $("div[name=cmtpgn]").eq(2).attr("id", "d_cmtpgn");
        if(qna_init) {
            MELON.CMTPGN.Sqwidget.startWidgets();
            qna_init = false;
        }
    }

    function _expectedComment(){
        CURRENT_CHNL_SEQ = CMT_CHNL_EVALUE;
        window.location.hash = "#none";

        $("div[name=cmtpgn]").attr("id", "cmtpgn");
        $("div[name=cmtpgn]").eq(0).attr("id", "d_cmtpgn");
        if(evalue_init) {
            MELON.CMTPGN.Sqwidget.startWidgets();
            evalue_init = false;
        }
    }

    function _tabReview(){
        CURRENT_CHNL_SEQ = CMT_CHNL_REVIEW;
        window.location.hash = "#none";

        $("div[name=cmtpgn]").attr("id", "cmtpgn");
        $("div[name=cmtpgn]").eq(1).attr("id", "d_cmtpgn");
        if(review_init) {
            MELON.CMTPGN.Sqwidget.startWidgets();
            review_init = false;
        }

        if(sliderInit) {
            $("#slider01").fnSlider({
                prev:$("#slider01 .prev"),              // prev 버튼 지정
                next:$("#slider01 .next"),              // next 버튼 지정
                //indicator : "",                           // Indicator 지정
                paging:$("#slider01 .control.page"),    // paging 텍스트 지정 (현재/전체)
                slideNum:1,                             // 슬라이드 단위(한번 이동에 넘길 단위)
                speed: 400                              // 애니메이션 속도(ms)
            });
            sliderInit = false;
        }

        updateAvrRate();
    }

    /**
     * 기대평, 관람후기 배너 show/hide
     * @private
     */
    function _bannerInit(tabType) {

        var gateYn = $("#global_ticket_gate_yn").val();

        if( gateYn != "Y" ){
            $('.wrap_banner_comment').hide();

            if( tabType == "tab2" ) {  //기대평
                var expectationBanner =  $("#global_ticket_expectationBanner").val();

                if( expectationBanner == "Y" ) {
                    $('.wrap_banner_comment.evalue').show();
                }

                $('.notice_role').eq(0).show();
            } else if( tabType == "tab3" ) { //관람후기

                var tabBanner =  $("#global_ticket_tabReViewBeltBanner").val();

                if( tabBanner == "Y" ) {
                    $('.wrap_banner_comment.review').show();
                }

                $('.notice_role').eq(1).show();
            }
        }

    }

    return {
        init:init,
        service:exports
    };
});
require([
    "jquery",
    "underscore",
    "domReady",
    "ticketDomain",
    "ticketCode",
    "ticketUtil",
    "js/app/performance/service/performanceService",
    "js/app/common/service/loginService",
    "js/app/forU/service/foruService",
    "js/app/common/service/snsService",
    "js/app/common/service/popupService",
    "js/app/performance/service/preSaleService",
    "js/app/performance/service/scheduleService",
    "js/app/performance/service/reservationService",
    "js/app/common/service/couponService",
    "js/app/performance/service/tabMenuService"
], function( $,underscore,domReady
             ,tktDomain,ticketCode ,ticketUtil
             , performanceService ,loginService, foruService, snsService, popupService
             , preSaleService, scheduleService, reservationService, couponService, tabMenuService
) {

    'use strict';


    /**
     * 시작 함수
     */
    domReady(function () {
        var prodId = $("#prodIdNum").val();

        performanceService.init(prodId);

        var alertParams = {
            prodId : prodId,
            alertMessage : $("#global_ticket_alert_message_data").val(),
            alertYn : $("#global_ticket_alert_message_yn").val() != "" ? $("#global_ticket_alert_message_yn").val() : "N",
            captchaYn : $("#global_ticket_captcha_yn").val()
        };

        popupService.service.performanceAlertMessageInit( alertParams );   //초기 레이어 팝업 호출
        if ($('#simpliedProductYn').val() != 'Y') {
            foruService.service.foruInfoInit(prodId);   //상품상세 forU 버튼 초기 셋팅 함수
        }

       couponService.service.setCookieCoopInit(prodId);  //상품상세 연동사 쿠폰 셋팅

        tabMenuService.service.setTabDisplayInit();   //탭 메뉴 초기화 함수
        tabMenuService.init(prodId);
        buttonInit();
    });


    function buttonInit() {

        /**
         * 공연 플래너 담기 버튼
         */
        $('#btn_add_planner').on('click', function(e) {
            e.preventDefault();

            if( isMelonLogin() ) {
                var prodId = $("#prodIdNum").val();
                foruService.service.addPlanner( prodId );
            } else {
                loginService.service.melonPopupLogin();
            }
        });

        /**
         * 닫기 버튼
         */
        $(document).off("click","#noticeAlert_layerpopup_close")
            .on("click","#noticeAlert_layerpopup_close",function(){
            $("#noticeAlert").remove();
        });

        /**
         * 다시보지 않기 버튼
         */
        $(document).off("click","#noticeAlert_layerpopup_cookie")
            .on("click","#noticeAlert_layerpopup_cookie",function(){

            var prodId = $("#prodIdNum").val();
            var ischecked = $(this).is(":checked");

            var alertParams = {
                prodId : prodId,
                ischecked : ischecked
            };

            popupService.service.performanceAlertMessageBtn( alertParams );
        });


        /**
         * 상품 상세 페이스북 공유하기 버튼 클릭 이벤트
         */
        $('#musFacebook').on('click', function(e) {
            var prodId = $("#prodIdNum").val();
            var productTitle = $(this).attr("data-producttitle");
            var imgPath = $(this).attr("data-posterimg");
            var periodinfo = $(this).attr("data-periodinfo");
            var placename = $(this).attr("data-placename");

            var imgUrl = '';

            if ( imgPath ) {
                imgUrl = commonDomain.GLOBAL_CDN_TICKET_HTTPS + imgPath;
            }

            var params = $.param({
                type:commonCode.CURRENT_PAGE_TYPE,
                contId:prodId
            });

            var description = periodinfo + placename;
            description = description.replace(/_SLASH_/g, '/');

            snsService.service.shareFacebookWithUrl(params);
        });


        /**
         * 트위터 공유 버튼
         */
        $("#musTwitter").click(function(){
            var prodId = $("#prodIdNum").val();
            var productTitle = $(this).attr("data-producttitle");

            var params = $.param({
                type:commonCode.CURRENT_PAGE_TYPE,
                contId:prodId
            });

            snsService.service.shareTwitter( prodId, productTitle, params );
        });



        /**
         * 상품상세 - 상세정보 탭 - 출연진
         * 선호 아티스트 등록/해제 버튼(기존 버튼)
         */
        $('input[id^=chk_foruArtist_]').on('click', function(e){
            e.preventDefault();

            var artistid = $(this).attr("data-artistid");

            if( isMelonLogin() ) {
                foruService.service.toggleForUArtist( artistid );
            } else {
                loginService.service.melonPopupLogin();
            }
        });


        /**
         * 상품상세 - 상세정보 탭 - 출연진
         * 출연진 더보기 버튼
         */
        $(".box_artist_checking .more").on("click",function(){
            var $item = $(this).parents('.box_artist_checking').find('.scroll li');
            var $active = $(this).parents('.box_artist_checking').find('.scroll');
            if ($item.length <= 18) {
                $active.addClass('sm_more');
            }
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $active.removeClass('on').scrollTop(0);
                $active.removeClass('sm_more');
            } else {
                $(this).addClass('on');
                $active.addClass('on');
            }
        });


        /**
         * 상품상세 -> 캐스팅스케줄 보기 버튼
         */
        $("#castingInfoBtn").on("click",function(){
            var prodId = $(this).attr("data-prodid");

            if(prodId != null) {
                window.open('/performance/popup/casting_calendar.htm?prodId='+prodId,'castingCalendarPopup','scrollbars=yes,resizable=no,top=100,left=100,width=975,height=910');
            }
        });


        /**
         * 일자 리스트
         * 회차 - 일자선택
         */
        $(document).off("click",".item_date")
            .on("click",".item_date",function() {
            var $this = $(this);
            var paramsObj = {
                "perfDay":$this.attr("data-perfday"),
                "prodId":$this.attr("data-prodid"),
                "pocCode":$this.attr("data-poccode"),
                "perfTypeCode":$this.attr("data-perftypecode"),
                "sellTypeCode":$this.attr("data-selltypecode"),
                "seatCntDisplayYn":$this.attr("data-seatcntdisplayyn"),
                "interlockTypeCode":$("#global_ticket_interlockTypeCode").val()
            };

            scheduleService.service.displayTimeListSchedule(paramsObj);
        });


        /**
         * 달력 리스트
         * 회차 - 일자 선택
         */
        $(document).off("click",".ticketCalendarBtn")
            .on("click",".ticketCalendarBtn",function(e) {
                e.preventDefault();
                var $this = $(this);
                $this.blur();

                var paramsObj = {
                    "perfDay":$this.attr('data-perfday'),
                    "prodId":$this.attr('data-prodid'),
                    "pocCode":$this.attr('data-poccode'),
                    "perfTypeCode":$this.attr('data-perftypecode'),
                    "sellTypeCode":$this.attr('data-selltypecode'),
                    "seatCntDisplayYn":$this.attr('data-seatcntdisplayyn'),
                    "interlockTypeCode":$("#global_ticket_interlockTypeCode").val()
                };

                scheduleService.service.displayTimeListSchedule(paramsObj);
            });


        /**
         * 시간 리스트
         * 회차 - 시간 선택
         */
        $(document).off("click",".item_time")
            .on("click",".item_time",function(e) {
                e.preventDefault();
                var $this = $(this);

                $(".item_time").removeClass("on");
                $this.addClass("on");

                var paramsObj = {
                    "prodId":$this.attr('data-prodid'),
                    "pocCode":$this.attr('data-poccode'),
                    "perfDay":$this.attr('data-perfday'),
                    "scheduleNo":$this.attr('data-scheduleno'),
                    "sellTypeCode":$this.attr('data-selltypecode'),
                    "seatCntDisplayYn":$this.attr('data-seatcntdisplayyn'),
                    "perfTypeCode":$this.attr('data-perftypecode'),
                    "seatPoc":$this.attr('data-seatpoc'),
                    "cancelCloseDt":$this.attr('data-cancelclosedt'),
                    "interlockTypeCode":$("#global_ticket_interlockTypeCode").val()
                };

                scheduleService.service.displayGradeListSchedule(paramsObj);
            });


        /**
         * 선예매 대상확인 버튼
         */
        $(document).off("click","#resvAuth")
            .on("click","#resvAuth",function() {

            var autheTypeCode = $(this).attr("data-prebtn-authetypecode");
            var paramsObj = {
                "prodId" : $(this).attr("data-prebtn-prodid"),
                "pocCode": $(this).attr("data-prebtn-poccode"),
                "sellTypeCode" : $(this).attr("data-prebtn-selltypecode"),
                "sellCondNo" : $(this).attr("data-prebtn-sellcondno"),
                "autheTypeCode" : autheTypeCode,
                "authYn" : $(this).attr("data-prebtn-authyn"),
                "gradeCode" : $("#global_ticket_gradeCode").val()
            };

            if( isMelonLogin() ) {
                $("#autheTypeCode").val(autheTypeCode);
                preSaleService.service.preSaleUserFind(paramsObj);
            } else {
                loginService.service.melonPopupLogin();
            }
        });


        /**
         * 예매하기 버튼 함수
         */
        $(document).off("click","#ticketReservation_Btn")
            .on("click","#ticketReservation_Btn",function(ev) {
            if(!ev.originalEvent.isTrusted) return;
            var $this = $(this);
            var paramsObj = {};
                paramsObj.prodId = $this.attr("data-prodid");
                paramsObj.prodTypeCode = $this.attr("data-prodtypecode");
                paramsObj.pocCode = commonCode.POC_CODE_PC;
                paramsObj.btnType = "B";
                paramsObj.autheTypeCode = $this.attr("data-autheTypeCode") != "" ? $this.attr("data-autheTypeCode") : $("#tciketProcessBox_preSaleAutheTypeCode").val();
                paramsObj.authYn = $this.attr("data-authyn");
                paramsObj.processType = commonCode.RESERVATION_CLASS_TYPE_DEFAULT;

            reservationService.service.reservationInit(paramsObj);
        });


        /**
         * 할인쿠폰 다운로드 버튼
         */
        $(document).off("click","#ticketCoupon_Download_Btn")
            .on("click","#ticketCoupon_Download_Btn",function() {

                var $this = $(this);
                var paramsObj = {
                    prodId:$this.attr("data-prodid"),
                    couponId:$this.attr("data-couponid")
                };

                if( isMelonLogin() ) {
                    couponService.service.downloadCoupon(paramsObj);
                } else {
                    loginService.service.melonPopupLogin();
                }
        });

        /**
         * 제휴사
         * 쿠폰배너 하나씩 다운받기 버튼
         */
        $(document).off("click",".affiliateCompanyCouponDownBtn")
            .on("click",".affiliateCompanyCouponDownBtn",function() {

                if( isMelonLogin() ) {
                    var $this = $(this);
                    var paramsObj = {
                        cupnId:$this.attr("data-cupnid"),
                        prodId:$("#prodIdNum").val()
                    };

                    couponService.service.coopCoupon(paramsObj);

                } else {
                    loginService.service.melonPopupLogin();
                }
            });

        /**
         * 제휴사
         * 쿠폰배너 한번에 다운받기 버튼
         */
        $(document).off("click","#cupnAllDown")
            .on("click","#cupnAllDown",function() {

                if( isMelonLogin() ) {
                    var $couponListDom = $("#affiliateCompanyBannerCouponList").find("a");

                    var cupnIdArray = _.map($couponListDom,function(val){
                        return $(val).attr("data-cupnid");
                    });

                    var paramsObj = {
                        cupnId:cupnIdArray,
                        prodId:$("#prodIdNum").val()
                    };

                    couponService.service.coopCoupon(paramsObj);
                } else {
                    loginService.service.melonPopupLogin();
                }
            });


        /**
         * 제휴사
         * 쿠폰 팝업 닫기 버튼
         */
        $('#btn_layerpopup_close').on('click', function(){
            if($("#popup_chk").is(":checked")){
                setCookie("hide_coop_banner", true, 1, "/", "ticket.melon.com");
            }
            $("#coopBanner").remove();

            location.href = "/performance/index.htm?prodId=" + $("#prodIdNum").val();
        });

        /**
         * 공연장 클릭시
         * 공연장정보로 이동 버튼
         */
        $(document).off("click","#performanceHallBtn")
            .on("click","#performanceHallBtn",function() {
                location.hash = "review_area";
                try{
                    $('#sub_place').click();
                }catch(e){}
        });

        /**
         * 공연장 클릭시
         * 공연장정보로 이동 버튼
         */
        $(document).off("click","#sub_place")
            .on("click","#sub_place",function() {
            var performanceHall_locLati = $("#global_ticket_performanceHall_locLati").val();
            var performanceHall_locLogi = $("#global_ticket_performanceHall_locLogi").val();

            if($('#titleFrame').attr('src') == null) {
                var frameUrl = "/common/popup/mapViewer.htm?locLati="+performanceHall_locLati+"&locLogi="+performanceHall_locLogi;
                $('#titleFrame').attr('src', frameUrl);
            }
        });

        /**
         * 공연장 정보 이미지 더보기 버튼
         */
        $(".box_concert_img .box_thumb .btn_more").click(function(){
            var thmH = $(".list_thumb").css("height");
            if(thmH =="200px"){ // 접힌 상태
                $(".list_thumb").css("height","auto");
                $(this).removeClass("up").text("접기");
            }else{                  //  펼쳐진 상태
                $(".list_thumb").css("height","200px");
                $(this).addClass("up").text("더보기");
            }
        });


        /**
         * 텝메뉴 버튼
         */
        $(".wrap_detail_tab").children('.list_detail_menu')
            .children('li').click(function(e){
            e.preventDefault();
            var _this = $(this);
            tabMenuService.service.tabMenuEvent(_this);
        });


    }

});


define("js/app/performance/controller/performanceController", function(){});

