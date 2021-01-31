const express = require('express');
var http=require('http');
var path=require('path');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT || 3000;
var static=require('serve-static');

var router=express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/Registration',static(path.join(__dirname,'Registration')));

app.use(function(req,res,next){
        console.log('dfsdf');
        var userName= req.body.userName || req.query.userName;
        var userId= req.body.userId || req.query.userId;
        var userPassword= req.body.userPassword || req.query.userPassword;
        var gender= req.body.gender || req.query.gender;
        var birthday= req.body.birthday || req.query.birthday;
        var eMail= req.body.eMail || req.query.eMail;
        console.log(eMail);
        res.write('<div>dsffdsfsfdsdfsd</div>');

})


app.all('*',(req,res)=>{
        var userName= req.body.userName || req.query.userName;
        var userId= req.body.userId || req.query.userId;
        var userPassword= req.body.userPassword || req.query.userPassword;
        var gender= req.body.gender || req.query.gender;
        var birthday= req.body.birthday || req.query.birthday;
        var eMail= req.body.eMail || req.query.eMail;
        console.log('eMail');

})

router.route('/Registration').post(function(req,res){
    
        var userName= req.body.userName || req.query.userName;
        var userId= req.body.userId || req.query.userId;
        var userPassword= req.body.userPassword || req.query.userPassword;
        var gender= req.body.gender || req.query.gender;
        var birthday= req.body.birthday || req.query.birthday;
        var eMail= req.body.eMail || req.query.eMail;
        console.log('eMail');


});
console.log('eMail');
