// 数组元素去重

//  Way 1;
Array.prototype.distinct = function(){
	for(var i = 0; i< this.length; i++){
		var n = this[i];
		this.splice(i, 1);
		if(this.indexOf(n) < 0){
			this.splice(i,1,n);
		}
	}
	return this;
}

Array.prototype.distinct2 =  function(){
	var _self = this;
	var _a = this.concat().sort(); // 先排序
	console.log(_a);

	//再删除重复的元素
	_a.sort(function(a,b){
		console.log("a: "+ a, "b: "+ b);
		if(a == b){
			var n = _self.indexOf(a);
			_self.splice(n, 1);
		}
	});
	return _self;
}

