// Generator函数 是一个状态机，封装了多个内部状态。
// 执行Generator 函数会返回一个遍历器对象，可以一次遍历Generator函数的每一个状态。

function* helloWorldGenerator(){
	yield 'hello';
	yield 'world';
	return 'ending';
}
var hw = helloWorldGenerator();
console.log(hw.next()); //{value: 'hello', done: fase}


// 不写* 报错
// function helloWorldGenerator1(){
// 	yield 'hello';
// 	yield 'world';
// 	return 'ending';
// }
// var hw1 = helloWorldGenerator1();
// console.log(hw1.next()); 