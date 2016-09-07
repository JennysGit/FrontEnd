var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/u/:user', function(req,res){

});
router.post('/post', function(req,res){
	
});
router.get('/reg', function(req,res,mext){
	res.render('reg', {
		title:'用户注册'
	})
})
router.post('/reg', function(req,res){
	if(req.body['password-repeat'] != req.body['password']){
		console.log(req.body.password,'pink');
		
		req.flash("error", "密码不一致");
		return res.redirect('/reg');
	}
	var crypto = require('crypto');

	var md5 = crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');
	require('../models/user');
	var newUser = new User({
		name: req.body.username,
		password: password
	});
	
	User.get(newUser.name, function(err, user){
		if(user){
			err = '用户已存在';
		}
		if(err){
			req.flash('error', err);
			return res.redirect('/reg');
		}

		newUser.save(function(err){
			if(err){
				console.log('\x1b[36m', 'sometext' ,'\x1b[0m');
				req.flash('error', err);
				return res.redirect('/reg',{ title: "page success"});
			}
			res.session.user = newUser;
			req.flash('success',"注册成功");
			res.redirect('/');
			req.flash("title", "首页");

		});
	});
});
router.get('/login', function(req,res){
	
})
router.post('/login', function(req,res){
	
})
router.post('/logout', function(req,res){
	
})

module.exports = router;
