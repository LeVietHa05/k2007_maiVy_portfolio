var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('views/index.html', { root: 'public' });
});

router.get('/about', function (req, res, next) {
  res.sendFile('views/about.html', { root: 'public' });
});

router.get('/performing', function (req, res, next) {
  res.sendFile('views/perform.html', { root: 'public' });
})

router.get('/writing', function (req, res, next) {
  res.sendFile('views/writing.html', { root: 'public' });
})

router.get('/visuals', function (req, res, next) {
  res.sendFile('views/visuals.html', { root: 'public' });
})
module.exports = router;
