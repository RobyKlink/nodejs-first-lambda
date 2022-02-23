var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', last_name: ' Romadany', tes: process.env.first_name });
});

module.exports = router;
