function foo(x, y=5){
	console.log(x, y);
}

foo({});
foo({x:1});
foo({x:1, y:2});
foo();


console.log(".....length........");

var a = (function(a){}).length; // 1
// 指定默认值后，函数length失真
var b = (function(a = 5){}).length; //0 
console.log(a, b);


// 作用域

console.log(".....scope......")
var x = 1;
function f(x, y=x){
	console.log(y); //2
}
f(2);

let m= 1;
function f(n=m){
	let m= 2;
	console.log(n)
}
f(); //1


let foos = "outer";
function bar(func = x=>foos){ // what there mean?
	let foos= "inner";
	console.log(func(x)); // outer
}
bar()

//等价于下面的代码.不对啊
function barNoArrows(func =function(x){return foo;}){
	let foo = "inner";
	console.log(func());
}
barNoArrows();

// Arrow 函数
var sum = (a, b)=>a+b;
console.log(sum(1,3));

var numbers = [1,3,4,5,6,7,8, 10,35];
var fiveTimesArr = [];
numbers.forEach(num=>{
	if(num %5 ===0){
		fiveTimesArr.push(num);
	}
});

console.log(fiveTimesArr);

// this 指向调用函数的对象
var obj = {
	name:"jenny",
	age:[22,23,24,25],
	sayName(){
		this.age.forEach(item => console.log(this.name));
	}
}
obj.sayName();


var square = function (arr){
	return arr.map(function(num){
		return num*num;
	});
}

var squareArrows = arr => arr.map(num => num * num);

var sArr = [1,2,3,4,5];
console.log(square(sArr));
console.log(squareArrows(sArr));	

// rest参数 ...variable
function add(...values){
	let sum = 0;
	for( var val of values){
		sum += val;
	} 
	return sum;
}

console.log(add(2,5,5));

