var express = require('express');
var router = express.Router();
const locationSearch = require('../services/mapsearch')

router.get('/:latitude/:longitude', async function (req, res) {
  const latitude = req.params.latitude
  const longitude = req.params.longitude
  // const shopList = 
  res.send(await locationSearch(latitude, longitude))
});

module.exports = router;
