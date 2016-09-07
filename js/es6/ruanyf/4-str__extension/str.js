//1. Unicode
//以下结果全为true
console.log('\z' ==='z');
console.log('\172' ==='z');
console.log('\x7A' ==='z');
console.log('\u007A' ==='z');
console.log('\u{7A}' ==='z'); // ES6新增


//2. codePointAt()


//3. fromCodePoint

//4字符串的遍历器接口
for(let code of "foo"){
	console.log(code);
}

// 5. at

//6.normalize()
console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize());

//7. includes(), startsWith(), endsWith()

console.log("*********7: includes(), startsWith(), endsWith()");
var s = "Hello World";
console.log(s.startsWith("hel"));
console.log(s.endsWith("ld"));
console.log(s.endsWith("d!"));
console.log(s.includes('o'));


console.log('**************repeat');
var str = 'hello ';
//console.log(str.repeat(-1)); //error. Invalid count value.
console.log(str.repeat(0)); //""
console.log(str.repeat(1));
console.log(str.repeat(3));
