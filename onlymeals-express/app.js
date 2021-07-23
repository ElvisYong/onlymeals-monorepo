let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let port = process.env.PORT || 3000;
let indexRouter = require('./routes/index');
let locationRouter = require('./routes/location');
let cors = require('cors');
// const mapSearch = require('./services/mapsearch');


var app = express();

// view engine setup
app.use(logger('dev'));
app.use(cors());

app.use('/', indexRouter);
app.use('/location', locationRouter);

// mapSearch(1.4404291, 103.7960009)

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
