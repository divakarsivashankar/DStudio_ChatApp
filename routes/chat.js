var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Chat',{title: 'Chat Page'});
});

module.exports = router;
