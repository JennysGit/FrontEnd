// 不存在变量提升. 要先定义
console.log(foo); //undfined
console.log(bar); // Error
var foo = 2;
let bar = 2;

var tmp = 123;
if (true) {
    tmp = "abc"; // Error. tmp is not defined.
    let tmp;
    tmp = "leted";
}

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 500);
}

// let注意

// 暂时性死区
//不允许重复声明
//块级作用域

// 可以解决闭包问题