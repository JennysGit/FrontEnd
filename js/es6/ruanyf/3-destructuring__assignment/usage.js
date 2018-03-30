// 数组解构赋值
let [a, b, c] = [1, 2, 3];
let [foo, [
    [bar], baz
]] = [1, [
    [2], 3
]];

// 具有Iterator接口的数据结构都可以采用数组形式的解构赋值。
function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [first, second, third] = fibs();


//提取JSON数据
var jsonData = {
    id: 42,
    status: "OK",
    data: [123, 456]
};

let { id, status, data: number } = jsonData;

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


// 6.遍历map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

// 解构遍历
for (let [key, value] of map) {
    console.log(key + "is" + value);
}