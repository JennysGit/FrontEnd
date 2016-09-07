function f(x, y,z){

}
var args = [0,1,2];
f.apply(null, args);

function sortNumbers(){
	return Array.prototype.slice.call(arguments).sort();
}

const sortNumbersByRest = (...numbers) => numbers.sort();

const sortNumbersByRestNOArrows = function(...numbers){
	return numbers.sort();
}

console.log(sortNumbers(1,5,2,3,4));
console.log(sortNumbersByRest(1,5,2,3,4));
console.log(sortNumbersByRestNOArrows(1,5,2,3,4));

// rest 参数之后不能再有其他参数。

//... 将一个数组转为用逗号分隔的参数序列。

//将一个数组添加到另一个数组的尾部

var arr1 = [1,3,5];
var arr2 = [2,4,6];
console.log(Array.prototype.push.apply(arr1, arr2));

console.log(arr1.push(...arr2));

//扩展运算符的应用
//1.合并数组
var more = [2,3];
console.log([1,2].concat(more));
console.log([1,2,...more]);

var a1 = ['a','b'];
var a2 = ['c'];
var a3 = ['d','e'];
console.log(a1.concat(a2, a3));
//ES6
console.log([...a1, ...a2, ...a3]);

//2与解构赋值结合，生成数组
// ES5
//var a = list[0], rest = list.slice(1);
//ES6
//[a,...rest] = list;

// 3 函数的返回值


// 4字符串

//5 Map and Set
let map = new Map([[1,"one"],[2,"two"],[3,"three"]]);
console.log([...map.keys()]);

//
const full = ({first, last}) => first + " " + last;
var fullname = full({first: "Jenny", last: "Zhang"});
console.log(fullname);

var values = [1,10,9,30,5];

var result = values.sort((a,b) => a-b);
console.log(result);

function Timer(){
	this.s1 = 0;
	this.s2 = 0;
	setInterval(()=>this.s1++, 1000);

	setInterval(function(){
		this.s2++;
	}, 1000);
}

var timer = new Timer();
var sto1 = setTimeout(()=> console.log('s1: ', timer.s1), 3000);
var sto2 = setTimeout(()=> console.log('s2: ',timer.s2), 3000);

// clearTimeout(sto1);
// clearTimeout(sto2);


function foo(){
	return () => {
		return () =>{
			return () => {
				console.log('id: ', this.id);
			};
		};
	};
}

var f = foo.call({id: 1});
console.log(f);