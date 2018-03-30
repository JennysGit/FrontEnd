let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 37;
    }
};

let p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;
console.log(p.a, p.b);

console.log("c" in p, p.c);

// 验证
let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }

            if (value > 200) {
                throw new RangeError('The age seems invalid.');
            }

            obj[prop] = value;
        }
    }
}

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);

person.age = "hello";

person.age = 200;

// 扩展构造函数
function extend(sup, base) {
    var descriptor = Object.getOwnPropertyDescriptor(base.prototype, "constructor");

    base.prototype = Object.create(sup.prototype);

    var handler = {
        construct: function(target, args) {
            var obj = Object.create(base.prototype);
            this.apply(target, obj.args);
            return obj;
        },
        apply: function(target, that, args) {
            sup.apply(that, args);
            base.apply(that, args);
        }
    };

    var proxy = new Proxy(base, handler);
    descriptor.value = proxy;

    Object.defineProperty(base.prototype, "constructor", descriptor);
    return proxy;
}

var Person = function(name){
	this.name = name;
}

var Boy = extend(Person, function(name, age){
	this.age = age;
})

Boy.prototype.sex = "M";

var Peter = new Boy('Peter', 13);
console.log(Peter.sex);
console.log(Peter.name);
console.log(Peter.age);

// 支持的拦截操作有.

get(target, propKey, reciever){}

set(target, propKey, value, reciever){}
// 拦截对象属性的设置，返回一个布尔值。

has(target, propKey){}
// 拦截propKey in proxy的操作，返回一个boolean.

deleteProperty(target, propKey){};
// 拦截 delete proxy[propKey]的操作

ownKeys(target){}
// 拦截Object.getOwnPropertyNames(proxy)
// Object.getOwnProtertySymbols(proxy)
// Object.keys(proxy) 
// 以上返回一个数组， 返回目标对象所有自身属性的属性名。
// Object.keys() 返回结果仅包括目标对象自身的可遍历属性。

getOwnPropertyDescriptor(target, propKey){}
// 拦截Object.getOwnPropertyDescriptor(proxy, propKey)
// 返回属性的描述对象

defineProperty(target, propKey, propDesc){}
Object.defineProperty(proxy, propKey, propDesc){};
Object.defineProperty(proxy, propDesc){}
// 返回一个boolean

preventExtensions(target){};
// 拦截Object.preventExtensions(proxy);

getPrototypeOf(target){}
// 拦截Object.getPrototypeOf(proxy);

isExtentsible(target)
// 拦截Object.isExtensible(proxy)

setPrototypeOf(target, proto);

apply(target, object, args);
// 拦截apply， call

construct(target, args)
// 拦截构造函数，new Proxy()


