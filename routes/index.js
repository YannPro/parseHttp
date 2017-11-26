var express = require('express');
var router = express.Router();
var fs = require('fs');
require('../util/CommonUtil');
/* GET home page. */
router.get('/', function(req, res, next) {
    var time = new Date().Format('yyyy-MM-dd hh:mm:ss');
    console.log(time)
    var ip = req.connection.remoteAddress;
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7);
    }
    console.log('ip:'+ ip);

    fs.exists("../ip.txt", function(exists) {
        if(!exists){
            fs.open('../ip.txt','',function () {
                
            });
        }
        fs.appendFile('../ip.txt','ip地址:'+ip+','+'时间:'+time+'\n',(err,data) => {
            console.log("写入成功");
        });
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
