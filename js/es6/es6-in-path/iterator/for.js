/*
 * 最初的JS循环遍历
 */
var myArr = [1, 2, 3, 4, 5];
for (var index = 0; index < myArr.length; index++) {
    console.log(myArr[index]);
}

/*
 * ES5 forEach遍历
 * 缺点：break, return 语句无效。
 */
myArr.forEach(function(value) {
    console.log(value);
});


/*
 * for(var index in..)
 * 缺点： 1. index不是实际的数字，而是字符串 
 * 
 *
 */

for (var index in myArr) {
    console.log(index);
    console.log(typeof index == 'string');
}


/*
 * for(var... of..)
 * 适用字符串，Array， Map， Set, arguments, Dom collection.
 * 参考： https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

for (let value of myArr) {
    value += 1;
    console.log(value);
}

console.log(myArr);

// for..in 用来遍历enumerable properties of an object.
//  for...of  for any collections.


var arr=[];

var data = [
	{
		id: 1,
		parentId: 0,
		name: '根'
	},
	{
		id: 2,
		parentId: 1,
		name: '1级'
	},
	{
		id: 3,
		parentId: 1,
		name: '1级'
	},
	{
		id: 4,
		parentId:2,
		name: "2级"
	},
	{
		id: 5,
		parentId:2,
		name: "2级2"
	}
]
function find(id){
    data.forEach(function(item){
  
        if(item.parentId==id){
            arr.push(item);
            find(item.id);
        }
    })
}

// 根节点的id
find(1);

console.log(arr);
