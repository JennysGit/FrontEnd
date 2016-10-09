//2 作为属性名的Symbolxx

// (1)
var mySymbol = Symbol();

var a = {};
a[mySymbol] = 'A';
console.log(a[mySymbol]);

// (2)

var b = {[mySymbol] : "B"};
console.log(b[mySymbol]);


// (3)
var c = {};
Object.defineProperty(c, mySymbol, {value:"C"});
console.log(c[mySymbol]); 