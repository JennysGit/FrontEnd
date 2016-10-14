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
