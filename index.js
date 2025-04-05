// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function n(r){return r===e||r===t}function i(r){return Math.abs(r)}var a,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,f=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol:void 0,s="function"==typeof u?u.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return c.call(r);t=r[s],a=s,e=null!=(i=r)&&f.call(i,a);try{r[s]=void 0}catch(e){return c.call(r)}return n=c.call(r),e?r[s]=t:delete r[s],n}:function(r){return c.call(r)},p="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,t;if("function"!=typeof y)return!1;try{e=new y(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(p&&t instanceof Uint32Array||"[object Uint32Array]"===l(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?g:function(){throw new Error("not implemented")};var d,h=a,v="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;d=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w([1,3.14,-3.14,NaN]),t=e,r=(v&&t instanceof Float64Array||"[object Float64Array]"===l(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=d,_="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,U="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,256,257]),t=e,r=(_&&t instanceof Uint8Array||"[object Uint8Array]"===l(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var S,I=m,k="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,N="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,e,t;if("function"!=typeof x)return!1;try{e=new x(e=[1,3.14,-3.14,65536,65537]),t=e,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===l(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var F,j={uint16:S,uint8:I};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new A(1),$=new h(V.buffer);function G(r){return V[0]=r,$[O]}function H(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var W=-.16666666666666632,C=.00833333333332249,L=-.0001984126982985795,P=27557313707070068e-22,R=-2.5050760253406863e-8,Z=1.58969099521155e-10;function M(r,e){var t,n,i;return t=C+(i=r*r)*(L+i*P)+i*(i*i)*(R+i*Z),n=i*r,0===e?r+n*(W+i*t):r-(i*(.5*e-n*t)-e-n*W)}var X,Y,z=2147483647,q=2146435072,B=1048575,D=!0===T?0:1,J=new A(1),K=new h(J.buffer);!0===T?(X=1,Y=0):(X=0,Y=1);var Q={HIGH:X,LOW:Y},rr=new A(1),er=new h(rr.buffer),tr=Q.HIGH,nr=Q.LOW;function ir(r,e){return er[tr]=r,er[nr]=e,rr[0]}var ar=Math.floor,or=1023,cr=1023,fr=-1023,ur=-1074,sr=2147483648,lr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty;function yr(r){return"number"==typeof r}function gr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function dr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+gr(i):gr(i)+r,n&&(r="-"+r)),r}var hr=String.prototype.toLowerCase,vr=String.prototype.toUpperCase;function wr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!yr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=dr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=dr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===vr.call(r.specifier)?vr.call(t):hr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var br=Math.abs,mr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase,_r=String.prototype.replace,Er=/e\+(\d)$/,Ur=/e-(\d)$/,Sr=/^(\d+)$/,Ir=/^(\d+)e/,kr=/\.0$/,xr=/\.0*e/,Nr=/(\..*[^0])0*e/;function Fr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!yr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":br(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_r.call(t,Nr,"$1e"),t=_r.call(t,xr,"e"),t=_r.call(t,kr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_r.call(t,Er,"e+0$1"),t=_r.call(t,Ur,"e-0$1"),r.alternate&&(t=_r.call(t,Sr,"$1."),t=_r.call(t,Ir,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ar.call(r.specifier)?Ar.call(t):mr.call(t)}function jr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var Tr=String.fromCharCode,Or=Array.isArray;function Vr(r){return r!=r}function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gr(r){var e,t,n,i,a,o,c,f,u,s,l,p,y;if(!Or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if("string"==typeof(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=$r(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Vr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Vr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=wr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Vr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Vr(a)?String(n.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Fr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=dr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+jr(y):jr(y)+s)),o+=n.arg||"",c+=1}return o}var Hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,t,n,i;for(t=[],i=0,n=Hr.exec(r);n;)(e=r.slice(i,Hr.lastIndex-n[0].length)).length&&t.push(e),t.push(Wr(n)),i=Hr.lastIndex,n=Hr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Lr(r){var e,t;if("string"!=typeof r)throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Cr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Gr.apply(null,e)}var Pr,Rr,Zr=Object.prototype,Mr=Zr.toString,Xr=Zr.__defineGetter__,Yr=Zr.__defineSetter__,zr=Zr.__lookupGetter__,qr=Zr.__lookupSetter__,Br=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Mr.call(r))throw new TypeError(Lr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Mr.call(t))throw new TypeError(Lr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(zr.call(r,e)||qr.call(r,e)?(n=r.__proto__,r.__proto__=Zr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Xr&&Xr.call(r,e,t.get),o&&Yr&&Yr.call(r,e,t.set),r};function Dr(r,e,t){Br(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===T?(Pr=1,Rr=0):(Pr=0,Rr=1);var Jr={HIGH:Pr,LOW:Rr},Kr=new A(1),Qr=new h(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function te(r,e,t,n){return Kr[0]=r,e[n]=Qr[re],e[n+t]=Qr[ee],e}function ne(r){return te(r,[0,0],1,0)}Dr(ne,"assign",te);var ie=[0,0],ae=22250738585072014e-324,oe=4503599627370496;function ce(e,t,a,o){return r(e)||n(e)?(t[o]=e,t[o+a]=0,t):0!==e&&i(e)<ae?(t[o]=e*oe,t[o+a]=-52,t):(t[o]=e,t[o+a]=0,t)}Dr((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var fe=2220446049250313e-31,ue=2148532223,se=[0,0],le=[0,0];function pe(i,a){var o,c,f,u,s,l;return 0===a||0===i||r(i)||n(i)?i:(ce(i,se,1,0),i=se[0],a+=se[1],a+=function(r){var e=G(r);return(e=(e&q)>>>20)-or|0}(i),a<ur?(f=0,u=i,ne.assign(f,ie,1,0),s=ie[0],s&=z,l=G(u),ir(s|=l&=sr,ie[1])):a>cr?i<0?t:e:(a<=fr?(a+=52,c=fe):c=1,ne.assign(i,le,1,0),o=le[0],o&=ue,c*ir(o|=a+or<<20,le[1])))}function ye(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ge=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],de=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,ve=5.960464477539063e-8,we=ye(20),be=ye(20),me=ye(20),Ae=ye(20);function _e(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,g,d,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=ve*v|0,Ae[y]=v-he*s|0,v=n[h-1]+s,h-=1;if(v=pe(v,i),v-=8*ar(.125*v),v-=d=0|v,l=0,i>0?(d+=y=Ae[t-1]>>24-i,Ae[t-1]-=y<<24-i,l=Ae[t-1]>>23-i):0===i?l=Ae[t-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<t;y++)h=Ae[y],0===u?0!==h&&(u=1,Ae[y]=16777216-h):Ae[y]=16777215-h;if(i>0)switch(i){case 1:Ae[t-1]&=8388607;break;case 2:Ae[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=pe(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=Ae[y];if(0===h){for(g=1;0===Ae[a-g];g++);for(y=t+1;y<=t+g;y++){for(f[c+y]=ge[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return _e(r,e,t+=g,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===Ae[t];)t-=1,i-=24;else(v=pe(v,-i))>=he?(s=ve*v|0,Ae[t]=v-he*s|0,i+=24,Ae[t+=1]=s):Ae[t]=0|v;for(s=pe(1,i),y=t;y>=0;y--)n[y]=s*Ae[y],s*=ve;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=de[g]*n[y+g];me[t-y]=s}for(s=0,y=t;y>=0;y--)s+=me[y];for(e[0]=0===l?s:-s,s=me[0]-s,y=1;y<=t;y++)s+=me[y];return e[1]=0===l?s:-s,7&d}function Ee(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)we[f]=u<0?0:ge[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*we[o+(f-u)];be[f]=i}return _e(r,e,4,be,c,4,a,o,we)}var Ue=Math.round,Se=.6366197723675814,Ie=1.5707963267341256,ke=6077100506506192e-26,xe=6077100506303966e-26,Ne=20222662487959506e-37,Fe=20222662487111665e-37,je=84784276603689e-45,Te=2047;function Oe(r,e,t){var n,i,a,o,c;return a=r-(n=Ue(r*Se))*Ie,o=n*ke,c=e>>20|0,t[0]=a-o,c-(G(t[0])>>20&Te)>16&&(o=n*Ne-((i=a)-(a=i-(o=n*xe))-o),t[0]=a-o,c-(G(t[0])>>20&Te)>49&&(o=n*je-((i=a)-(a=i-(o=n*Fe))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ve=0,$e=16777216,Ge=1.5707963267341256,He=6077100506506192e-26,We=2*He,Ce=3*He,Le=4*He,Pe=598523,Re=1072243195,Ze=1073928572,Me=1074752122,Xe=1074977148,Ye=1075183036,ze=1075388923,qe=1075594811,Be=1094263291,De=[0,0,0],Je=[0,0];function Ke(r,e){var t,n,i,a,o,c,f;if((i=G(r)&z|0)<=Re)return e[0]=r,e[1]=0,0;if(i<=Me)return(i&B)===Pe?Oe(r,i,e):i<=Ze?r>0?(f=r-Ge,e[0]=f-He,e[1]=f-e[0]-He,1):(f=r+Ge,e[0]=f+He,e[1]=f-e[0]+He,-1):r>0?(f=r-2*Ge,e[0]=f-We,e[1]=f-e[0]-We,2):(f=r+2*Ge,e[0]=f+We,e[1]=f-e[0]+We,-2);if(i<=qe)return i<=Ye?i===Xe?Oe(r,i,e):r>0?(f=r-3*Ge,e[0]=f-Ce,e[1]=f-e[0]-Ce,3):(f=r+3*Ge,e[0]=f+Ce,e[1]=f-e[0]+Ce,-3):i===ze?Oe(r,i,e):r>0?(f=r-4*Ge,e[0]=f-Le,e[1]=f-e[0]-Le,4):(f=r+4*Ge,e[0]=f+Le,e[1]=f-e[0]+Le,-4);if(i<Be)return Oe(r,i,e);if(i>=q)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return J[0]=r,K[D]}(r),f=ir(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)De[o]=0|f,f=(f-De[o])*$e;for(De[2]=f,a=3;De[a-1]===Ve;)a-=1;return c=Ee(De,Je,n,a),r<0?(e[0]=-Je[0],e[1]=-Je[1],-c):(e[0]=Je[0],e[1]=Je[1],c)}var Qe=[0,0],rt=1072243195,et=1044381696;function tt(r){var e;if(e=G(r),(e&=z)<=rt)return e<et?1:H(r,0);if(e>=q)return NaN;switch(3&Ke(r,Qe)){case 0:return H(Qe[0],Qe[1]);case 1:return-M(Qe[0],Qe[1]);case 2:return-H(Qe[0],Qe[1]);default:return M(Qe[0],Qe[1])}}var nt=1072243195,it=1045430272,at=[0,0],ot=3.141592653589793;return function(e){var t,a,o,c;return r(e)||n(e)?NaN:(t=i(e))>9007199254740992?1:.5==(o=t-(a=ar(t)))?0:(c=o<.25?tt(ot*o):o<.75?function(r){var e;if(e=G(r),(e&=z)<=nt)return e<it?r:M(r,0);if(e>=q)return NaN;switch(3&Ke(r,at)){case 0:return M(at[0],at[1]);case 1:return H(at[0],at[1]);case 2:return-M(at[0],at[1]);default:return-H(at[0],at[1])}}(ot*(o=.5-o)):-tt(ot*(o=1-o)),a%2==1?-c:c)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cospi=e();
//# sourceMappingURL=index.js.map
