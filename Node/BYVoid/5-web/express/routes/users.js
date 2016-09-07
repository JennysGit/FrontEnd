var express = require('express');
var router = express.Router();

/* GET users listing. */

var users = {
	'Jenny':{
		name:'Jenny',
		website: 'www.baidu.com'
	}
}
router.all('/:username', function(req,res,next){
	if(users[req.params.username]){
		next();
	}else{
		next(new Error(req.params.username + ' does not exist'));
	}
});

router.get('/:username', function(req, res, next) {
  res.send(JSON.stringify(users[req.params.username]));
});

router.put('/:username', function(req, res){
	res.send("done");
})
module.exports = router;
