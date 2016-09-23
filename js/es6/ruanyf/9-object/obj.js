// 1.直接写入变量。

//属性简写
var foo ='bar';
var baz = {foo}; // === var baz = {"foo: "bar"}

console.log(baz);

function f(x,y){
	return {x, y}; //{x: x, y: y};
}
console.log(f(1,2));


// 方法简写
var o = {
	method(){ // method: function(){}
		return "Hello";
	}
};

var birth = "2000-10-01";
var person ={
	name: "jane",
	birth,
	Hello(){
		console.log("name is ", this.name , ", birth is ", this.birth);
	}
}

person.Hello();

// CommonJS模块输出变量。
var ms = {};
function getItem(key){
	return key in ms ? ms[key]: null;
}

function setItem(key, value){
	ms[key] = value;
}

function clear(){
	ms = {};
}
module.exports = {
	getItem,
	setItem,
	clear
}

//属性的赋值器和取值器
var cart = {
 	_wheels: 4,
 	get wheels(){
 		return this._wheels;
 	},
 	set wheels(value){
 		if(value < this._wheels){
 			throw new Error("number is small.")
 		}
 		this._wheels = value;
 	}
}


//2. 属性名表达式
var obj =[];
obj["a"+ "bc"] = 123; //==obj[abc]

// 方法的name属性
console.log((new Function()).name) // anonymous
var doSomething = function(){

};
console.log(doSomething.bind().name) // bound doSomething.


// Symbol
const key1 = Symbol('description');
const key2 = Symbol();

let sObj = {
	[key1](){},
	[key2](){}
};

console.log(sObj[key1].name);
console.log(sObj[key2].name);

// Object.is 解决 NaN === NaN +0 不等于-0
// 比较两个值是否相等。 == 自动转化数据类型
// === NaN != NaN
console.log(0 === -0); // true
console.log(NaN === NaN); //false

Object.is(0, -0);
Object.is(NaN, NaN); 

// Object.assign
                                       

// 浅拷贝和深拷贝
var a =[1,2,3];
var b = a;
var test = {name: "Jenny"};
var c = test;
var b[0] = 5; // a和b都变成 [5,2,3]

// 深拷贝 不改变原有对象，使得原有对象和复制对象独立。

// 数组的深复制
function deepCopy(arr1){
	var arr2 = [];
	for(var i = 0; i< arr1.length; i++){
		arr2[i] = arr1[i];
	}
}

//多维数组
