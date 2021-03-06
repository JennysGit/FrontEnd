var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var settings = require('./settings');

var session = require("express-session");
//console.log(session);
var MongoStore = require("connect-mongo")(session);
var flash = require('connect-flash');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view options',{layout: true});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(flash());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.use(session({
    secret: 'settings.cookieSecret',
    store: new MongoStore({db: settings.db, url: settings.url})
}));



app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



app.use(function(req, res, next){
  var error = req.flash('error');
  var succes = req.flash('success');
  app.locals({
    user : req.session.user ? req.session.user : null,
    error : err.length ? err : null,
    success : success.length ? success: null
  });
  // res.locals.user = req.session.user ? req.session.user : null;
  // res.locals.error = err.length ? err : null;
  // res.locals.success = success.length ? success: null;
  next();
});

module.exports = app;
