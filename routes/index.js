var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("headers-ip = " + JSON.stringify(req.headers.host));// 包含了各种header，包括x-forwarded-for(如果被代理过的话)
    res.render('index', { title: 'Express' });
});

module.exports = router;
