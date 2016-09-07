function add(student){
	console.log("Add Student：" + student);

}

//导出这个模块，把add方法暴露给外部。
exports.add = add;