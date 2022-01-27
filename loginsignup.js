const express = require("express")
const app = express();
var PORT = 3000;
app.use(express.json());
// app.unsubscribe(express.urlencoded({extended:true}));

app.post("/signup",function(req,res){
    var data = req.body;
    res.send('data')
})

app.post("/login",function(req,res){
    var data = req.body;
    res.send('data');
})

app.listen(PORT,function(err){
    if (err) console.log(err);
    console.log('Started on port:3000')
});



