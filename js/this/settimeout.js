function foo(){
	setTimeout( ()=> {
		console.log("id: "+ this.id);
	}, 2000)
}



foo.call({id: "foo"}); 