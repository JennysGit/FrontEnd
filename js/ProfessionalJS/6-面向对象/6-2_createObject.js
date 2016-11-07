//1. 工厂模式
console.info("1: factory mode.");
function createPerson(name , age){
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.sayHi = function(){
		return "Hi, I am " + name + ", I'm " + age +" years old, using factory";
	}

	return obj;
}

var p1 = createPerson("Jenny", 22);
console.log(p1.sayHi());



// 2. 构造函数模式
console.info("2: construstor mode.");
function Person(name , age){
	this.name = name;
	this.age = age;
	this.sayHi = function(){  // == new Function(){}
		return "Hi, I am " + name + ", I'm " + age +" years old, using construstor create ";
	}
}

var pG = new Person("Jenny", 22);
// new Person的过程
// 1.创建一个Person对象。
// 2.将Person函数的作用域赋给Person对象。
// 3.执行Person构造函数中的代码。
// 4.返回新对象。
console.log(pG.sayHi());

//普通调用Person对象。
//错误调用，因为Person函数没有返回值，所以下面的调用无效额。
var pW = Person("window",1);
Person("window",1);
console.log(window.sayHi());

//可以使用call，apply方法来
var pCall = new Object();
Person.call(pCall,"call",0);

console.log(pCall.sayHi());

//console.log(pW.sayHi());

// 2.2 构造函数模式，把方法移到函数外，解决创建多个函数实例的问题。
function PersonH(name, age){
	this.name = name;
	this.age = age;
	this.sayName = sayName;
}

function sayName(){
	console.log("hello, I am " + this.name);
}

var p3 = new PersonH("con", 0);
console.log(p3.sayName());



// 3.原型模式

function People(){

}
People.prototype.name ="Jenny";
People.prototype.age = 22;
People.prototype.sayHi = function(){
	return "Hi, I am "+ this.name;
}

var person1 = new People();
var person2 = new People();
person1.name = "Jing";
console.log(person1.name);
console.log(person2.name);

//hasOwnProperty()
console.log(person1.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));

//getOwnPropertyDescriptor()
//返回Object,描述属性的特性。如writable, configurable等
console.log(Object.getOwnPropertyDescriptor(person1,"name"));
console.log(Object.getOwnPropertyDescriptor(person2,"name"));//返回undefined

for(var prop in People){
	console.log(prop);
}
