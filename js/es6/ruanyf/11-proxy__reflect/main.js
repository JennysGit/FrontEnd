// 1. Proxy

// proxy 用于修改某些操作的默认行为。等同于在语言层面做出修改。

// Proxy 在对象之前架设一层拦截。

var obj = new Proxy({},{
	get: function (target, key, reciever){
		console.log('getting ${key}!');
		return Reflect.get(target, key, reciever);
	},
	set: function(target, key, value, reciever){
		console.log('setting ${key}!');
		return Reflect.set(target, key, value, reciever);
	}
});

obj.name = "Jenny";
console.log(obj);

// 通过proxy拦截属性。
var proxy = new Proxy({}, {
	get: function(target, property){
		return 35;
	}
});

console.log(proxy.name); // 35 

var handler = {
	get: function(target, name){
		if(name == 'prototype'){
			return Object.prototype;
		}
		return "prototype";
	},
	apply: function(target, thisBinding, args){
		return "apply";
	},
	construct: function(target, args){
		return "constructor";
	}
};

var fproxy = new Proxy(function(x,y){
	return x + y;
}, handler);

console.log(fproxy("Jenny","!")); // apply
//console.log(new fproxy("prototype","prototype"));
//console.log(new fproxy(1,2));
console.log(fproxy.prototype); // get
console.log(fproxy.aa);


//
//(1) get(target,propKey, recir) 拦截读操作


//(2) set() 拦截属性的赋值操作

// apply 拦截函数的条用，call和apply操作
var obj ={
	//apply()
}


// Proxy.revocable 返回一个可取消的Proxy实例
// Reflect对象 将Object对象的一些明显属于语言内部的方法如Object.defineProperty 放到Reflect对象上。现阶段，某些方法同时在Object和Relfect对象上部署


// Reflect.apply(target,thisArg,args)
// Reflect.construct(target,args)
// Reflect.get(target,name,receiver)
// Reflect.set(target,name,value,receiver)
// Reflect.defineProperty(target,name,desc)
// Reflect.deleteProperty(target,name)
// Reflect.has(target,name)
// Reflect.ownKeys(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)

