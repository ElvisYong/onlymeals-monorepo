var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let port = 3000;
var indexRouter = require('./routes/index');
const mapSearch = require('./services/mapsearch');


var admin = require("firebase-admin");

var serviceAccount = require("/Users/xiang/Desktop/onlymeals-69b1b-firebase-adminsdk-yzesm-653a80835e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



var app = express();

// view engine setup
app.use(logger('dev'));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

mapSearch(1.4404291, 103.7960009)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
// module.exports = app;
