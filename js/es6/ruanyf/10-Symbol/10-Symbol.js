let s = Symbol();

console.log(s);

const shapeType ={
	triangle: Symbol("triangle")
};

console.log(shapeType.triangle);//??
//console.log(triangle);

var log ={};
log.levels = {
	DEBUG: Symbol('debug'),
	INFO: Symbol('info'),
	WARN:Symbol('warn')
};

function printMessage(level){
	switch(level){
		case log.levels.DEBUG:
			return "debug message";
		case log.levels.INFO:
			return "info messgae.";
		case log.levels.WARN:
			return "warn message";
		default:
			return "error message";
	}
}

console.log(printMessage(log.levels.INFO));

var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = "world";

console.log(obj.a);