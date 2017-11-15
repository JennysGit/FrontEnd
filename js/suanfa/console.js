function printN(n) {
    for (i = 1; i <= n; i++) {
        console.log(i);
    }
}

function printN1(n){
	if(n > 0){
		printN1(n-1);
		
		console.log(n);
	}
	
}

//printN(5);
printN1(5);