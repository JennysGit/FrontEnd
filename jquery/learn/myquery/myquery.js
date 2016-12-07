//立即执行函数，通过闭包创建私有私有变量
(function( global, factory ){

}(typeof window !== "undefined" ? window : this, function(window ngGlobal){
	jQuery = function( selector, context ) {
		return new jQuery.fn.init( selector, context );
	};

}));

(function(global, factory){
	// "use strict";
	// if( typeof module === "object" && typeof module.exports === ""){

	// }

	factory( global );

})
// 立即执行函数的参数, global,回调函数
(
window, function(window, ngGlobal){
	// main 主体
	"use strict";

	var arr = [];
	var document = window.document;

	// 返回指定对象的原型。
	var getProto = Object.getPrototypeOf;

	// slice 
	var slice = arr.slice;

	// concat
	var concat = arr.concat;

	//  push
	var push = arr.pushl

	// indexOf
	var indexOf = arr.indexOf;

	class2type = {};

	var toString = class2type.toString;

	hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	function DOMEval(code, doc){
		
	}

});