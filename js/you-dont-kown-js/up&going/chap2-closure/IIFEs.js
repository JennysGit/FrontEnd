function foo(){
	console.log("foo");
}

foo();

// 立即执行函数
// Immeditaly invoked function expressions.
(function IIFE(){
	console.log("Hello");
})();


//函数内部值得变量，不应现外部的值。
var a = 42;
(function aa(){
 	var a = 10;
	console.log(a);
})();

console.log(a);

var x = (function IIFE(){
	return 42;
})();

console.log(x);


function makeAdder(x){
	function add(y){
		return x + y;
	}

	return add;
}


var plusOne = makeAdder(1);

var plusTen = makeAdder(10);

console.log(plusOne(2));

console.log(plusTen(41));

console.log(plusTen(13));
