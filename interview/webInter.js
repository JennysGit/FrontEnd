//1.使用typeof是否能准确判断一个对象变量？

//2
(function(){
	var a = b = 3; //a是局部变量，函数外部不能访问局部变量。b是全局变量。s
})();
// console.log(a); // Error!! a is not defined.
console.log(b);



//3.

myObject = {
	foo: "bar",
	func: function(){
		var self = this;
		console.log("outer function: this.foo=" + this.foo);
		console.log("outer function: self.foo=" + self.foo);

		(function(){
			console.log("inner function: this.foo=" + this.foo);
			console.log("inner function: self.foo=" + self.foo);
		})();
	}
}
myObject.func();

