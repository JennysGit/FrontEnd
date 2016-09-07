//1.
// var ecTxt = "mom and da"


var str = "cat, bat, sat, fat";
var reg = /.at/;

//1.在不设全局标志的情况下，每次执行exec方法的返回值相同。
var arr1 = reg.exec(str);
console.log(arr1);

arr2 = reg.exec(str);
console.log(arr2);

//2.在设置全局标志后，会在字符串中继续查找。
var regG = /.at/g;
var arrG1 = regG.exec(str);
console.log(arrG1)

var arrG2 = regG.exec(str);
console.log(arrG2);
