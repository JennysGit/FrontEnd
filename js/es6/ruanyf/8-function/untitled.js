function sort(a,b,c){
	//var arr = [];
	if(a >= b){
		if(b >= c){
     		// arr.push(c);
     		console.log(a + " " + b + " " + c);
    	 }
	     if(b < c){
	     	console.log(a + " " + c + " " + b);
	     }
	}
	if(b >= a){
		if(a >= c){
			console.log(b + " " + a + " " + c);
		}
		if(a < c){
			console.log(b + " " + c + " " + a);
		}
	}
	if(c >= a){
		if( a >= b){
			console.log(c + " " + a + " " + b);
		}
		if(a < b){
			console.log(c + " " + b + " " + a);
		}
	}	
}


function sortDesc(c,b,a){
	var t = null;
	if(a < b){
		t = a;
		a = b;
		b = t;
	}
	if(a < c){
		t = a;
		a = c;
		c = t;
	}
	if(b < c){
		t = b;
		b = c;
		c = t;
	}

	console.log( a + " " + b + " " + c);
}


