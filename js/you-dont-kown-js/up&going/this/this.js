function foo(){
	console.log(this)
	console.log( this.bar );
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

foo(); //global

obj1.foo(); //obj1

foo.call(obj2) //obj2

new foo() //undefined, new 把this对象指向一个新的空对象

foo({bar:"Hello"}) // undefined