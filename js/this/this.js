// Created by Jenny on 2017-04-19

var obj = {
    foo: function() {
        console.log(this);
    }
}

var bar = obj.foo;

obj.foo();

bar();

// 函数调用
/*
	1. 函数调用的3种形式
	func();
	obj.child.method(p1, p2);
	fun.call(context, p1, p2);

	func(p1,p2) 等价于 func.call(undefined,p1, p2);
	obj.child.method(p1,p2) 等价于 obj.child.method.call(obj.child, p1,p2); 
*/

function aa() {
    console.log(this);
}

var obj = {
    name: 'Jenny',
    age: 22
}

aa.call(obj.contructor.prototype);
