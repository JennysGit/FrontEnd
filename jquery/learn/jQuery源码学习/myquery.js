
var myQuery = function(selector, context){
	return myQuery.prototype.init();
}

myQuery.prototype = {
	init: function(){
		this.age = 18;
		return this; //this指myQuery对象，因为实在myQuery对象中调用init方法。
	},
	name: function(){
		return "my jQuery test";
	},
	age:function(){
		return 22;
	}
}

myQuery();
// 这样调用后，myQuery().age = 18;而不是22，因为在init的时候，this只myQuery对象，就把age属性变成了18。


var myQuery = function(selector, context){
	return new myQuery.prototype.init();
}

myQuery.prototype = {
	init: function(){
		debugger;
		this.age = 18;
		return this; //this指myQuery对象，因为实在myQuery对象中调用init方法。
	},
	name: function(){
		return "my jQuery test";
	},
	age:function(){
		return 22;
	}
}

myQuery(); //这样就只能访问一个age属性.



