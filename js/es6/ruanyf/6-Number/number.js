console.log(0b11 ===3);
//八进制
console.log(0o41 === 33);

//非严格模式
(function(){
	console.log(0o11 === 011);
})();

(function(){
	'use strict';
	//console.log(0o11 === 011) // error
})();