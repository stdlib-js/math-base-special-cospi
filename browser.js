// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function n(r){return r===e||r===t}function i(r){return Math.abs(r)}var a,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,f=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol:void 0,s="function"==typeof u?u.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return c.call(r);t=r[s],a=s,e=null!=(i=r)&&f.call(i,a);try{r[s]=void 0}catch(e){return c.call(r)}return n=c.call(r),e?r[s]=t:delete r[s],n}:function(r){return c.call(r)},p="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,t;if("function"!=typeof y)return!1;try{e=new y(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(p&&t instanceof Uint32Array||"[object Uint32Array]"===l(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var g,h=a,v="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w([1,3.14,-3.14,NaN]),t=e,r=(v&&t instanceof Float64Array||"[object Float64Array]"===l(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=g,_="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,U="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,256,257]),t=e,r=(_&&t instanceof Uint8Array||"[object Uint8Array]"===l(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var I,N=m,S="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,e,t;if("function"!=typeof k)return!1;try{e=new k(e=[1,3.14,-3.14,65536,65537]),t=e,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===l(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var F,j={uint16:I,uint8:N};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new A(1),$=new h(V.buffer);function G(r){return V[0]=r,$[O]}function H(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var W=-.16666666666666632;function C(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*(W+i*t):r-(i*(.5*e-n*t)-e-n*W)}var L,P,R=2147483647,Z=2146435072,M=!0===T?0:1,X=new A(1),Y=new h(X.buffer);!0===T?(L=1,P=0):(L=0,P=1);var z={HIGH:L,LOW:P},q=new A(1),B=new h(q.buffer),D=z.HIGH,J=z.LOW;function K(r,e){return B[D]=r,B[J]=e,q[0]}var Q=Math.floor,rr="function"==typeof Object.defineProperty?Object.defineProperty:null,er=Object.defineProperty;function tr(r){return"number"==typeof r}function nr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ir(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+nr(i):nr(i)+r,n&&(r="-"+r)),r}var ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase;function cr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!tr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ir(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ir(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===or.call(r.specifier)?or.call(t):ar.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fr(r){return"string"==typeof r}var ur=Math.abs,sr=String.prototype.toLowerCase,lr=String.prototype.toUpperCase,pr=String.prototype.replace,yr=/e\+(\d)$/,dr=/e-(\d)$/,gr=/^(\d+)$/,hr=/^(\d+)e/,vr=/\.0$/,wr=/\.0*e/,br=/(\..*[^0])0*e/;function mr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!tr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ur(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=pr.call(t,br,"$1e"),t=pr.call(t,wr,"e"),t=pr.call(t,vr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=pr.call(t,yr,"e+0$1"),t=pr.call(t,dr,"e-0$1"),r.alternate&&(t=pr.call(t,gr,"$1."),t=pr.call(t,hr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===lr.call(r.specifier)?lr.call(t):sr.call(t)}function Ar(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _r(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ar(n):Ar(n)+r}var Er=String.fromCharCode,Ur=isNaN,Ir=Array.isArray;function Nr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Sr(r){var e,t,n,i,a,o,c,f,u;if(!Ir(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(fr(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=Nr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ur(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ur(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=cr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ur(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ur(a)?String(n.arg):Er(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=mr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ir(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_r(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function xr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Fr(r){var e,t,n,i;for(t=[],i=0,n=kr.exec(r);n;)(e=r.slice(i,kr.lastIndex-n[0].length)).length&&t.push(e),t.push(xr(n)),i=kr.lastIndex,n=kr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function jr(r){return"string"==typeof r}function Tr(r){var e,t,n;if(!jr(r))throw new TypeError(Tr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Fr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Sr.apply(null,t)}var Or,Vr,$r=Object.prototype,Gr=$r.toString,Hr=$r.__defineGetter__,Wr=$r.__defineSetter__,Cr=$r.__lookupGetter__,Lr=$r.__lookupSetter__,Pr=function(){try{return rr({},"x",{}),!0}catch(r){return!1}}()?er:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Gr.call(r))throw new TypeError(Tr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Gr.call(t))throw new TypeError(Tr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Cr.call(r,e)||Lr.call(r,e)?(n=r.__proto__,r.__proto__=$r,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Hr&&Hr.call(r,e,t.get),o&&Wr&&Wr.call(r,e,t.set),r};function Rr(r,e,t){Pr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===T?(Or=1,Vr=0):(Or=0,Vr=1);var Zr={HIGH:Or,LOW:Vr},Mr=new A(1),Xr=new h(Mr.buffer),Yr=Zr.HIGH,zr=Zr.LOW;function qr(r,e,t,n){return Mr[0]=r,e[n]=Xr[Yr],e[n+t]=Xr[zr],e}function Br(r){return qr(r,[0,0],1,0)}Rr(Br,"assign",qr);var Dr=[0,0];function Jr(e,t,a,o){return r(e)||n(e)?(t[o]=e,t[o+a]=0,t):0!==e&&i(e)<22250738585072014e-324?(t[o]=4503599627370496*e,t[o+a]=-52,t):(t[o]=e,t[o+a]=0,t)}Rr((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=[0,0],Qr=[0,0];function re(i,a){var o,c,f,u,s,l;return 0===a||0===i||r(i)||n(i)?i:(Jr(i,Kr,1,0),a+=Kr[1],a+=function(r){var e=G(r);return(e=(e&Z)>>>20)-1023|0}(i=Kr[0]),a<-1074?(f=0,u=i,Br.assign(f,Dr,1,0),s=Dr[0],s&=R,l=G(u),K(s|=l&=2147483648,Dr[1])):a>1023?i<0?t:e:(a<=-1023?(a+=52,c=2220446049250313e-31):c=1,Br.assign(i,Qr,1,0),o=Qr[0],o&=2148532223,c*K(o|=a+1023<<20,Qr[1])))}function ee(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var te=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ne=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ie=16777216,ae=5.960464477539063e-8,oe=ee(20),ce=ee(20),fe=ee(20),ue=ee(20);function se(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,d,g,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=ae*v|0,ue[y]=v-ie*s|0,v=n[h-1]+s,h-=1;if(v=re(v,i),v-=8*Q(.125*v),v-=g=0|v,l=0,i>0?(g+=y=ue[t-1]>>24-i,ue[t-1]-=y<<24-i,l=ue[t-1]>>23-i):0===i?l=ue[t-1]>>23:v>=.5&&(l=2),l>0){for(g+=1,u=0,y=0;y<t;y++)h=ue[y],0===u?0!==h&&(u=1,ue[y]=16777216-h):ue[y]=16777215-h;if(i>0)switch(i){case 1:ue[t-1]&=8388607;break;case 2:ue[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=re(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=ue[y];if(0===h){for(d=1;0===ue[a-d];d++);for(y=t+1;y<=t+d;y++){for(f[c+y]=te[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return se(r,e,t+=d,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===ue[t];)t-=1,i-=24;else(v=re(v,-i))>=ie?(s=ae*v|0,ue[t]=v-ie*s|0,i+=24,ue[t+=1]=s):ue[t]=0|v;for(s=re(1,i),y=t;y>=0;y--)n[y]=s*ue[y],s*=ae;for(y=t;y>=0;y--){for(s=0,d=0;d<=p&&d<=t-y;d++)s+=ne[d]*n[y+d];fe[t-y]=s}for(s=0,y=t;y>=0;y--)s+=fe[y];for(e[0]=0===l?s:-s,s=fe[0]-s,y=1;y<=t;y++)s+=fe[y];return e[1]=0===l?s:-s,7&g}function le(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)oe[f]=u<0?0:te[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*oe[o+(f-u)];ce[f]=i}return se(r,e,4,ce,c,4,a,o,oe)}var pe=Math.round;function ye(r,e,t){var n,i,a,o,c;return a=r-1.5707963267341256*(n=pe(.6366197723675814*r)),o=6077100506506192e-26*n,c=e>>20|0,t[0]=a-o,c-(G(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,c-(G(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var de=1.5707963267341256,ge=6077100506506192e-26,he=2*ge,ve=3*ge,we=4*ge,be=[0,0,0],me=[0,0];function Ae(r,e){var t,n,i,a,o,c,f;if((i=G(r)&R|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ye(r,i,e):i<=1073928572?r>0?(f=r-de,e[0]=f-ge,e[1]=f-e[0]-ge,1):(f=r+de,e[0]=f+ge,e[1]=f-e[0]+ge,-1):r>0?(f=r-2*de,e[0]=f-he,e[1]=f-e[0]-he,2):(f=r+2*de,e[0]=f+he,e[1]=f-e[0]+he,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ye(r,i,e):r>0?(f=r-3*de,e[0]=f-ve,e[1]=f-e[0]-ve,3):(f=r+3*de,e[0]=f+ve,e[1]=f-e[0]+ve,-3):1075388923===i?ye(r,i,e):r>0?(f=r-4*de,e[0]=f-we,e[1]=f-e[0]-we,4):(f=r+4*de,e[0]=f+we,e[1]=f-e[0]+we,-4);if(i<1094263291)return ye(r,i,e);if(i>=Z)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return X[0]=r,Y[M]}(r),f=K(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)be[o]=0|f,f=16777216*(f-be[o]);for(be[2]=f,a=3;0===be[a-1];)a-=1;return c=le(be,me,n,a),r<0?(e[0]=-me[0],e[1]=-me[1],-c):(e[0]=me[0],e[1]=me[1],c)}var _e=[0,0];function Ee(r){var e;if(e=G(r),(e&=2147483647)<=1072243195)return e<1044381696?1:H(r,0);if(e>=2146435072)return NaN;switch(3&Ae(r,_e)){case 0:return H(_e[0],_e[1]);case 1:return-C(_e[0],_e[1]);case 2:return-H(_e[0],_e[1]);default:return C(_e[0],_e[1])}}var Ue=[0,0],Ie=3.141592653589793;return function(e){var t,a,o,c;return r(e)||n(e)?NaN:(t=i(e))>9007199254740992?1:.5==(o=t-(a=Q(t)))?0:(c=o<.25?Ee(Ie*o):o<.75?function(r){var e;if(e=G(r),(e&=R)<=1072243195)return e<1045430272?r:C(r,0);if(e>=Z)return NaN;switch(3&Ae(r,Ue)){case 0:return C(Ue[0],Ue[1]);case 1:return H(Ue[0],Ue[1]);case 2:return-C(Ue[0],Ue[1]);default:return-H(Ue[0],Ue[1])}}(Ie*(o=.5-o)):-Ee(Ie*(o=1-o)),a%2==1?-c:c)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cospi=e();
//# sourceMappingURL=browser.js.map
