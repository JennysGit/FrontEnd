let arrayLike = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	length: 3
};

console.log([].slice.call(arrayLike));
console.log(Array.from(arrayLike));
console.log(Array.from("Hello"))


console.log(Array.from(arrayLike, x=>x+x));


// 2. Array.of()
console.log(Array.of(3,11,8));
console.log(Array.of(1)); //


// copyWithin

console.log([0,1,2,3,4,5,6,7].copyWithin(0,6));

console.log([0,1,2,3,4,5,6,7].copyWithin(0,5,6));


// find() findIndex()
var arr= [0,1,2,3,4,5,6,7];
console.log(arr.find((n)=>n<5))
console.log(arr.findIndex(function(value, index, array){
	return value >3;
}));


// fill