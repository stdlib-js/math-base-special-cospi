// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}function o(r){return Math.abs(r)}var f,u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"",y=u&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,f;if(null==r)return i.call(r);t=r[c],f=c,n=null!=(o=r)&&a.call(o,f);try{r[c]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[c]=t:delete r[c],e}:function(r){return i.call(r)},l="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(l&&t instanceof Uint32Array||"[object Uint32Array]"===y(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var s,A=f,w="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(w&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,U=s,m="function"==typeof Uint8Array,N="function"==typeof Uint8Array?Uint8Array:null,I="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===y(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var g,F=h,S="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,O="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),t=n,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===y(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var T,j={uint16:g,uint8:F};(T=new j.uint16(1))[0]=4660;var E=52===new j.uint8(T.buffer)[0],G=!0===E?1:0,L=new U(1),W=new A(L.buffer);function M(r){return L[0]=r,W[G]}function x(r,n){var t,e,o,f;return o=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(o=1-(t=.5*f))+(1-o-t+(f*e-r*n))}var P=-.16666666666666632;function V(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(P+o*t):r-(o*(.5*n-e*t)-n-e*P)}var Y,_,k=!0===E?0:1,q=new U(1),z=new A(q.buffer);!0===E?(Y=1,_=0):(Y=0,_=1);var B={HIGH:Y,LOW:_},C=new U(1),D=new A(C.buffer),J=B.HIGH,K=B.LOW;function Q(r,n){return D[J]=r,D[K]=n,C[0]}var R,X,Z=Math.floor;!0===E?(R=1,X=0):(R=0,X=1);var $={HIGH:R,LOW:X},rr=new U(1),nr=new A(rr.buffer),tr=$.HIGH,er=$.LOW;function or(r,n){return rr[0]=n,r[0]=nr[tr],r[1]=nr[er],r}function fr(r,n){return 1===arguments.length?or([0,0],r):or(r,n)}var ur=[0,0];function ir(n,t){return r(t)||e(t)?(n[0]=t,n[1]=0,n):0!==t&&o(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var ar=[0,0],cr=[0,0];function yr(o,f){var u,i,a,c,y;return 0===f||0===o||r(o)||e(o)?o:(function(r,n){1===arguments.length?ir([0,0],r):ir(r,n)}(ar,o),f+=ar[1],f+=function(r){var n=M(r);return(n=(2146435072&n)>>>20)-1023|0}(o=ar[0]),f<-1074?(a=o,fr(ur,0),c=ur[0],c&=2147483647,y=M(a),Q(c|=y&=2147483648,ur[1])):f>1023?o<0?t:n:(f<=-1023?(f+=52,i=2220446049250313e-31):i=1,fr(cr,o),u=cr[0],u&=2148532223,i*Q(u|=f+1023<<20,cr[1])))}function lr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var vr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],pr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],sr=16777216,Ar=5.960464477539063e-8,wr=lr(20),br=lr(20),dr=lr(20),hr=lr(20);function Ur(r,n,t,e,o,f,u,i,a){var c,y,l,v,p,s,A,w,b;for(v=f,b=e[t],w=t,p=0;w>0;p++)y=Ar*b|0,hr[p]=b-sr*y|0,b=e[w-1]+y,w-=1;if(b=yr(b,o),b-=8*Z(.125*b),b-=A=0|b,l=0,o>0?(A+=p=hr[t-1]>>24-o,hr[t-1]-=p<<24-o,l=hr[t-1]>>23-o):0===o?l=hr[t-1]>>23:b>=.5&&(l=2),l>0){for(A+=1,c=0,p=0;p<t;p++)w=hr[p],0===c?0!==w&&(c=1,hr[p]=16777216-w):hr[p]=16777215-w;if(o>0)switch(o){case 1:hr[t-1]&=8388607;break;case 2:hr[t-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=yr(1,o)))}if(0===b){for(w=0,p=t-1;p>=f;p--)w|=hr[p];if(0===w){for(s=1;0===hr[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[i+p]=vr[u+p],y=0,w=0;w<=i;w++)y+=r[w]*a[i+(p-w)];e[p]=y}return Ur(r,n,t+=s,e,o,f,u,i,a)}}if(0===b)for(t-=1,o-=24;0===hr[t];)t-=1,o-=24;else(b=yr(b,-o))>=sr?(y=Ar*b|0,hr[t]=b-sr*y|0,o+=24,hr[t+=1]=y):hr[t]=0|b;for(y=yr(1,o),p=t;p>=0;p--)e[p]=y*hr[p],y*=Ar;for(p=t;p>=0;p--){for(y=0,s=0;s<=v&&s<=t-p;s++)y+=pr[s]*e[p+s];dr[t-p]=y}for(y=0,p=t;p>=0;p--)y+=dr[p];for(n[0]=0===l?y:-y,y=dr[0]-y,p=1;p<=t;p++)y+=dr[p];return n[1]=0===l?y:-y,7&A}function mr(r,n,t,e){var o,f,u,i,a,c,y;for((f=(t-3)/24|0)<0&&(f=0),i=t-24*(f+1),c=f-(u=e-1),y=u+4,a=0;a<=y;a++)wr[a]=c<0?0:vr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*wr[u+(a-c)];br[a]=o}return Ur(r,n,4,br,i,4,f,u,wr)}var Nr=Math.round;function Ir(r,n,t){var e,o,f,u,i;return f=r-1.5707963267341256*(e=Nr(.6366197723675814*r)),u=6077100506506192e-26*e,i=n>>20|0,t[0]=f-u,i-(M(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,i-(M(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e}var gr=1.5707963267341256,Fr=6077100506506192e-26,Sr=2*Fr,Hr=3*Fr,Or=4*Fr,Tr=[0,0,0],jr=[0,0];function Er(r,n){var t,e,o,f,u,i,a;if((o=2147483647&M(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ir(r,o,n):o<=1073928572?r>0?(a=r-gr,n[0]=a-Fr,n[1]=a-n[0]-Fr,1):(a=r+gr,n[0]=a+Fr,n[1]=a-n[0]+Fr,-1):r>0?(a=r-2*gr,n[0]=a-Sr,n[1]=a-n[0]-Sr,2):(a=r+2*gr,n[0]=a+Sr,n[1]=a-n[0]+Sr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ir(r,o,n):r>0?(a=r-3*gr,n[0]=a-Hr,n[1]=a-n[0]-Hr,3):(a=r+3*gr,n[0]=a+Hr,n[1]=a-n[0]+Hr,-3):1075388923===o?Ir(r,o,n):r>0?(a=r-4*gr,n[0]=a-Or,n[1]=a-n[0]-Or,4):(a=r+4*gr,n[0]=a+Or,n[1]=a-n[0]+Or,-4);if(o<1094263291)return Ir(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,z[k]}(r),a=Q(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Tr[u]=0|a,a=16777216*(a-Tr[u]);for(Tr[2]=a,f=3;0===Tr[f-1];)f-=1;return i=mr(Tr,jr,e,f),r<0?(n[0]=-jr[0],n[1]=-jr[1],-i):(n[0]=jr[0],n[1]=jr[1],i)}var Gr=[0,0];function Lr(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1044381696?1:x(r,0);if(n>=2146435072)return NaN;switch(3&Er(r,Gr)){case 0:return x(Gr[0],Gr[1]);case 1:return-V(Gr[0],Gr[1]);case 2:return-x(Gr[0],Gr[1]);default:return V(Gr[0],Gr[1])}}var Wr=[0,0],Mr=3.141592653589793;return function(n){var t,f,u,i;return r(n)||e(n)?NaN:(t=o(n))>9007199254740992?1:.5==(u=t-(f=Z(t)))?0:(i=u<.25?Lr(Mr*u):u<.75?function(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1045430272?r:V(r,0);if(n>=2146435072)return NaN;switch(3&Er(r,Wr)){case 0:return V(Wr[0],Wr[1]);case 1:return x(Wr[0],Wr[1]);case 2:return-V(Wr[0],Wr[1]);default:return-x(Wr[0],Wr[1])}}(Mr*(u=.5-u)):-Lr(Mr*(u=1-u)),f%2==1?-i:i)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cospi=n();
//# sourceMappingURL=index.js.map
