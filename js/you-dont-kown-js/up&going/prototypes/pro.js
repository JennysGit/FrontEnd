var foo = {
	a: 42
}

var bar = Object.create(foo);
bar.b = "Hello world";


console.log( bar.b ); // hello world.
console.log( bar.a ); // 42

// 转码器
// babel
// traceur