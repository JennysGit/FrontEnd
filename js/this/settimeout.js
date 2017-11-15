function foo() {
    setTimeout(() => {
        console.log("id: " + this.id);
    }, 2000)
}



foo.call({ id: "foo" });

for (var i = 0; i < 5; i++) {
    (function(i) {
       setTimeout(function() {
            console.log(i);
        }, 1000);

    })(i);
}