function makeIterator(array){
	var nextIndex = 0;
	return {
		next: function(){
			return nextIndex < array.length ? {
				value: array[nextIndex++],
			} : {
				done: true
			}
		}
	}
}

var myIt = makeIterator([1,2,3]);
console.log(myIt.next());
console.log(myIt.next());
console.log(myIt.next());
console.log(myIt.next());
console.log(myIt.next());


// for... of 遍历
// for ... in 只能获取键名，不能获取值，而 for ..of 可以直接获取键值。

const arr = ['red', 'green', 'blue'];
let iterator = arr[Symbol.iterator]();

for(let v of arr){
	console.log(v);
}
for(let v of iterator){
	console.log(v);
}

arr.forEach(function(ele, index){
	console.log(ele);
	console.log(index);
});


// Set 和 Map
var engines = new Set(['Gecko', 'Trident','Webkit']);
for( var e of engines){
	console.log(e);
}

var es6 = new Map();
es6.set('edition', 6);
es6.set('committee','TC39');
es6.set('standard', 'ECMA-262');

for( var [name, value] of es6){
	console.log(name + ": " + value);
}

// for..in.. forEach.. for .. of

// for in 遍历键名
// forEach 无法使用return, break, continue语句
// for .. of 键值