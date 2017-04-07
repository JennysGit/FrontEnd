function myFunction(){
	var descriptionTag = document.getElementById('description');
	if(descriptionTag.innerText){
		description.innerText = "";
	}else{
		description.innerText = "description";
	}
}