 //1. 作为值的函数
 function callSomeFunction(someFunction, someArgument){
 	return someFunction(someArgument);
 }

 function add10(num){
 	return num + 10;
 }

 function getGreeting(name){
 	return "Hello, " + name;
 }

 var result = callSomeFunction(add10, 10);
 console.log(result);

 var result1 = callSomeFunction(getGreeting, "Jenny");
 console.log(result1);


 //2.一个函数返回另一个函数
 function createComparison(prop){
 	return function(obj1, obj2){
 	 	var val1 = obj1[prop];
 	 	var val2 = obj2[prop];

 	 	return val1 - val2;	
 	}
 }

 var data = [{name: "Jenny", age: 22},{name:"Lee",age: 23},{name:"YangYang",age: 8}];
 data.sort(createComparison("name"));
 console.log(data);

 data.sort(createComparison("age"));
 console.log(data);

//理解第二点

function hanshu(){
	console.log("我被执行了");
}

function diaoyong(){
	return hanshu
}

var obj = diaoyong();


//3.函数内部属性 . arguments.callee

function argCallee(name){
	console.log(arguments.callee);
}

argCallee("Jenny");

//递归计算阶乘
function factorial(num){
	if(num > 1){
		return num * arguments.callee(num-1); //可解除函数内部耦合
	}else {
		return num;
	}
}

console.log(factorial(5));

//this 对象
var color = "red";
var o = {
	color: "blue"
};
function sayColor(){
	console.log(this.color);
}
sayColor();
o.sayColor = sayColor;
o.sayColor(); // 当前的执行对象是o，所以this指的是o.color.


// caller
function outer(){
	inner();
}
function inner(){
	console.log(inner.caller); //可以使用arguments.callee.caller
}
outer();
inner();

//length、prototype、call、apply

var obj = {
	name:"Jenny",
	sayHi:function(){
		return "Hi, I  am obj ";
	}
}

function sayHi(){
	return "Hi, I am in Window,";
}
function sayName(name){
	console.log(this.sayHi() + name);
}

sayName.call(obj, obj.name) //obj为this对象。
//直接调用sayName;
sayName(obj.name); //this值window对象

//bind() 方法实现
sayName.bind(obj)("Jane"); 
