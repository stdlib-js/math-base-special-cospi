"use strict";var f=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var t=f(function(A,n){
var q=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-infinite/dist'),N=require('@stdlib/math-base-special-abs/dist'),v=require('@stdlib/math-base-special-cos/dist'),c=require('@stdlib/math-base-special-sin/dist'),E=require('@stdlib/math-base-special-floor/dist'),s=require('@stdlib/constants-float64-pi/dist'),I=require('@stdlib/constants-float64-max-safe-integer/dist'),l=I+1;function p(i){var e,a,r,u;return q(i)?NaN:o(i)?NaN:(e=N(i),e>l?1:(a=E(e),r=e-a,r===.5?0:(r<.25?u=v(s*r):r<.75?(r=.5-r,u=c(s*r)):(r=1-r,u=-v(s*r)),a%2===1?-u:u)))}n.exports=p
});var x=t();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
