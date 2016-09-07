//1.数组排序sort
// 先调用每项的toString方法，然后比较Ascii码值
var arr = [1,4,10,7,5,15];
arr.sort();
console.log("数组1,4,10,7,5,15排序后：" + arr); 

//自定义数组排序
function compare(a,b){
	return a - b; //升序排列。a<b,a在前，b在后。 返回负数
}

arr.sort(compare);
console.log("自定义升序排列：" + arr);


//concat 方法。
var colors = ["red","green","blue"];
var afterColors = colors.concat("yellow", ["black", "gray"]);
console.log( "concat前数组为："+ colors + "\n concat后的数组为：" + afterColors);

//slice()
var sliceArr = ["s", "l", "i", "c","e"];
console.log("Slice array " + sliceArr.slice(1));
console.log("slice array of two parameter: " + sliceArr.slice(0,2));
console.log("原数组不变："+ sliceArr);


//splice()
console.log("");
console.log("----------splice()---------------");
var spliceArr = ["s","p","l","i","c","e"];
//1.删除第2,3项
var removed = spliceArr.splice(1,2); //返回删除的项
console.log("删除第二项后，原数组为：" + spliceArr);
console.log("删除的值为： "+ removed);
//2.插入p,l值
var removed = spliceArr.splice(1,0,"p","l"); //返回删除的项。
console.log(removed);  //0, y因为第二个参数是0，所以不删除。
console.log(spliceArr);

//替换
var removed = spliceArr.splice(1,2,"hello","world","^_^");
console.log(removed); //返回删除的项
console.log("替换后的数组为：" + spliceArr);

//indexOf 和 lastIndexOf()
console.log("--------------------indexOf and lastIndexOf----------------------");
var indexArr = [1,2,3,4,5];
console.log("4的位置是"+ indexArr.indexOf(4)); //返回4的位置3
console.log("4的位置是"+ indexArr.indexOf(4,2));
console.log("4的位置是"+ indexArr.lastIndexOf(4)); //返回4的位置3
console.log("4的位置是"+ indexArr.lastIndexOf(4,2));



// 迭代方法
//1 every
var dieDaiArr = ["Hello","Welcome","to","JavaScript","World"];
var hasO = dieDaiArr.every(function(item,index,arr){
	return item.indexOf("o") > -1;
});
console.log("Every words has word O" + hasO);

//2.some
var someHasO = dieDaiArr.some(function(item,index,arr){
	return item.indexOf("o")>-1; 
});
console.log("some has o: "+ someHasO);

//map
var mapArr = dieDaiArr.map(function(item, index,arr){
	return item + "^_^";
});
console.log("map" + mapArr);

//filter
var filterArr = dieDaiArr.filter(function(item, index, arr){
	return item.indexOf("o")>-1;
});
console.log("filter has o: "+ filterArr);

// var forEachArr = dieDaiArr.forEach(function(item,i))


console.log("---------------------reduce() and reduceRight()------------------")
//reduce and reduceRight()
var reduceArr = [1,2,3,4,5];
var rdArr = reduceArr.reduce(function(prev, next, index, array){
	return prev + next;
},0);
console.log("归并求数组每项之和为：" + rdArr);
