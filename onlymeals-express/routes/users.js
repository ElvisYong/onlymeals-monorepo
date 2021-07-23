var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/location/:routeId(\\d+\\.\\d+)', function (req, res) {
  res.send('respond with a resource + ' + req.params.routeId);
  // console.log('hello')
});

module.exports = router;
