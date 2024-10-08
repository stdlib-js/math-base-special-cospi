/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
var abs = require( '@stdlib/math-base-special-abs' );
var cos = require( '@stdlib/math-base-special-cos' );
var sin = require( '@stdlib/math-base-special-sin' );
var floor = require( '@stdlib/math-base-special-floor' );
var PI = require( '@stdlib/constants-float64-pi' );
var MAX_INTEGER = require( '@stdlib/constants-float64-max-safe-integer' );


// VARIABLES //

var MAX_INTEGER_P1 = MAX_INTEGER + 1;


// MAIN //

/**
* Computes the value of `cos(πx)`.
*
* ## Notes
*
* -   `cos(-x) = cos(x)`
* -   `sin(-x) = -sin(x)`
* -   `cos(π/2) = 0`
* -   `cos(0) = 1`
* -   `cos(π) = -1`
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var y = cospi( 0.0 );
* // returns 1.0
*
* @example
* var y = cospi( 0.5 );
* // returns 0.0
*
* @example
* var y = cospi( 0.1 );
* // returns ~0.951
*
* @example
* var y = cospi( NaN );
* // returns NaN
*/
function cospi( x ) {
	var ax;
	var ix;
	var rx;
	var y;
	if ( isnan( x ) ) {
		return NaN;
	}
	if ( isInfinite( x ) ) {
		return NaN;
	}
	ax = abs( x );
	if ( ax > MAX_INTEGER_P1 ) {
		// Always even integer...
		return 1.0;
	}
	// Argument reduction (reduce to [0,1))...
	ix = floor( ax );
	rx = ax - ix;
	if ( rx === 0.5 ) {
		return 0.0;
	}
	if ( rx < 0.25 ) {
		y = cos( PI*rx );
	}
	else if ( rx < 0.75 ) {
		rx = 0.5 - rx;
		y = sin( PI*rx ); // recall sin(-x) = -sin(x), thus returned result will be properly signed
	}
	else {
		rx = 1.0 - rx;
		y = -cos( PI*rx );
	}
	// If the integer of `x` is odd, we need to flip the sign...
	return ( ix%2 === 1 ) ? -y : y;
}


// EXPORTS //

module.exports = cospi;
