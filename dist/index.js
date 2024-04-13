"use strict";var f=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var t=f(function(A,n){
var q=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-infinite/dist'),N=require('@stdlib/math-base-special-abs/dist'),v=require('@stdlib/math-base-special-cos/dist'),c=require('@stdlib/math-base-special-sin/dist'),E=require('@stdlib/math-base-special-floor/dist'),s=require('@stdlib/constants-float64-pi/dist'),I=require('@stdlib/constants-float64-max-safe-integer/dist'),l=I+1;function p(i){var e,u,r,a;return q(i)?NaN:o(i)?NaN:(e=N(i),e>l?1:(u=E(e),r=e-u,r===.5?0:(r<.25?a=v(s*r):r<.75?(r=.5-r,a=c(s*r)):(r=1-r,a=-v(s*r)),u%2===1?-a:a)))}n.exports=p
});var x=t();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
