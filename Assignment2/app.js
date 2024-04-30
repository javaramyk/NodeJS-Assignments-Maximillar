const express = require('express')
const app = express();
app.use('/users',(req,res,next)=>{
    console.log("Second middleware");
    res.send('<p>Assignment created handles /users/p>');
})
app.use('/',(req,res,next)=>{
    console.log("First MiddleWare handles ///");
    res.send('<p> The handles only ////</p>');
})
app.listen(3000);