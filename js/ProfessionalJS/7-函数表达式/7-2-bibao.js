function createFuncs(){
	var result  = new Array();
	for( var i = 0;  i< 10; i++){
		result[i] = function(){
			console.log(i);
			return i;
		}
	}
	return result;
}


//返回参数是function的数组。 且每一个数值都是10，
var arr = createFuncs();
console.log(arr);

function createFunctions(){
	var result = new Array();
	for(var i = 0; i< 10; i++){
		// result[i] = function(num){
		// 	console.log(i);
		// 	return function(){
		// 		return num;
		// 	}
		// }(i);
		result[i] = function(i){
			// return function(){
			// 	return i;
			// }
			var temp = function(){
				return i;
			}
			return temp;
		}(i);
		//立即调用函数，解决闭包的问题。
	}

	return result;
}
var arr1 = createFunctions();
console.log(arr1);