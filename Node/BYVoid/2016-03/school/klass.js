//引入模块，并复制给局部变量
var student = require('./student');
var teacher = require('./teacher');



function add(teacher, students){
	//给班级添加老师和学生
	teacher.add(teacher);
	students.forEach(function(item,index){
		student.add(item);
	})
}

//Module.exports的附录方法
exports.add = add;

//特别的模块类型，真是存在的
//module.exports = add
