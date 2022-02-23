var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', first_name: 'Roby', tes: process.env.first_name });
});

module.exports = router;
