/*

Promise: pending, resolved, rejected //保存未来才会结束的事件。
pending: 进行中
resolved: 成功
rejected: 失败的操作
// 异步操作

*/

// var promise  = new Promise(function(resolve, reject){
// 	console.log("promise");

// 	if()
// })

function timeout(ms){
	return new Promise((resolve, reject) =>{
		setTimeout(resolve, ms, 'done');
	})
}

// 2s后打印value的值
timeout(2000).then((value) => {
	console.log(value)
});


let promise = new Promise(function(resolve, reject){
	console.log("Promise"); //立即执行
	resolve();
});

promise.then(function(){
	console.log("resolved");
})

console.log("hi!");
