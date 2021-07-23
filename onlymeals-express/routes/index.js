var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.send('hello worldw!')
  console.log("something")
});

// (\d+\.\d+)
/* GET home page. */
router.get('/:routeId', function (req, res, next) {
  res.send("test")
  //res.json({ test: req.params.routeId })
});

module.exports = router;
