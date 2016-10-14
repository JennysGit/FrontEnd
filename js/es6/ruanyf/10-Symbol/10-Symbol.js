let s = Symbol();

console.log(s);

const shapeType ={
	triangle: Symbol("triangle")
};

console.log(shapeType.triangle);//??
//console.log(triangle);

var log ={};
log.levels = {
	DEBUG: Symbol('debug'),
	INFO: Symbol('info'),
	WARN:Symbol('warn')
};

function printMessage(level){
	switch(level){
		case log.levels.DEBUG:
			return "debug message";
		case log.levels.INFO:
			return "info messgae.";
		case log.levels.WARN:
			return "warn message";
		default:
			return "error message";
	}
}

console.log(printMessage(log.levels.INFO));

var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = "world";

console.log(obj.a);

// Object.getOwnPropertySymbols
console.log("Object.getOwnPropertySymbols");
console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.getOwnPropertyNames(obj)); // []


// Reflect.ownKeys 返回所类型的键名，包括常规属性和Symbol键名
// let obj = {
// 	[Symbol('my_key')]: 1,
// 	enum: 2,
// 	noneEnum: 3
// };
console.log("Reflect.ownKeys");
console.log(Reflect.ownKeys(obj));


// 5.Symbol.for() 
// Symbol.keyFor() 返回一个已经登记的Symbol类型值得key


// 
// Symbol.hasInstance()
class MyClass{
	[Symbol.hasInstance](foo){
		return foo instanceof Array;
	}
}

console.log([1,3,4] instanceof MyClass);


// Symbol.isConcatSpreadable bool值， 表示该对象使用 Array.prototype.concat()是，是否可以展开。
let arr1 = ['c','d'];
['a','b'].concat(arr1, 'e'); // [a, b, c, d, e]
console.log(arr1[Symbol.isConcatSpreadable]); // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
console.log(['a', 'b'].concat(arr2,'e')); // [a, b, [c, d], e]


// Symbol.species 指向一个方法。？？？

// Symbol.match 指向一个函数，当执行str.match(obj)时，如果属性存在，会调用他，返回该方法的返回值。

//String.prototype.match(regexp);
// 等价于 ->
//regexp[Symbol.match](this);

class MyMatcher{
	[Symbol.match](string){
		return 'hello world'.indexOf(string);
	}
}

console.log('e'.match(new MyMatcher()));

// Symbol.replace
var searchValue = "Hello",replaceValue = "hey";
String.prototype.replace(searchValue, replaceValue);
searchValue[Symbol.replace](this, replaceValue);

// Symbol.search

// Symbol.split

// Symbol.iterator


// Symbol.toPrimitive 

// Symbol.toStringTag()


