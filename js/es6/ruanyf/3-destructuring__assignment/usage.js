//提取JSON数据
var jsonData = {
	id: 42,
	status: "OK",
	data: [123, 456]
};

let { id, status, data: number} = jsonData;

//
console.log(id, status, number);
//console.log(data); data is not defined.



//函数参数的默认值
// jQuery.ajax = function (url, {
// 	async =true,
// 	beforeSend = function(){},
// 	cache = true,
// 	complete = function(){},
// 	crossDomain = false,
// 	global = true
// }){

// }


// 6.便利map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

// 解构遍历
for(let [key, value] of map){ 
	console.log(key + "is" + value);
}