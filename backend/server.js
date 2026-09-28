const express = require("express");
const app = express();
const port = 8080;

app.get('/',(req,res)=> {
    res.send("Hello World");
});

app.get('/orders',(req,res)=> {
    res.send("Chicken Burger");
});

app.listen(port,()=>{
    console.log('http://localhost:${port}');
});
