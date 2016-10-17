var s = new Set();
[1,1,2,3].map(x => s.add(x));

for(let i of s){
	console.log(i); // 1,2,3 不添加重复的值
}


// var set = new Set(divs().forEach(div => ))
var properties = {
	'width': 1,
	'height': 1
};

if(properties["x"]){
	console.log("x Exists");	
}

var properties = new Set();
properties.add('width');
properties.add("x");
if(properties.has("x")){
	console.log("x does exist.");
}


console.log("***************************");
console.log("Map Section");
console.log("***************************");
// Map
let map = new Map([
	['name', 'Jenny'],
	['age',23]
]);

// map.keys
for(let key of map.keys()){
	console.log(key);
} // name age

// map.values
for(let val of map.values()){
	console.log(val);
}// Jenny 23

// map.entries
for(let item of map.entries()){
	console.log(item[0], item[1])
}// name Jenny age 23

// 
for(let [key, value] of map.entries()){
	console.log(key, value);
}

// map == map.entries
for(let [key, value] of map){
	console.log(key, value)
}


// map结构转化为数组结构, 字符串
console.log([...map.keys()]);
console.log([...map.values()]);
console.log([...map.entries()]);
console.log([...map]);

