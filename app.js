const express = require("express")
const app = express();

app.get("/",function(req,res){
    res.send('Hello World')
})

app.get("/tree",function(req,res){
    res.send('Welcome to tree house')
})

app.listen(9000,function(req,res){
    console.log('Running..')
});











