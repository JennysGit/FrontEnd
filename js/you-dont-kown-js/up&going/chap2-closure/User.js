function User(){
	var username, password;

	function doLogin(user, pw){
		username = user;
		password = pw;
		console.info(username, password)
	}
	var publicApi = {
		login: doLogin
	}
	return publicApi;
}

var fred = User();

fred.login("fred", "H@ppy778");