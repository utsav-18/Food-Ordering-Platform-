const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

app.get('/',(req,res)=> {
    res.send("Hello World");
});

app.get('/orders',(req,res)=> {
    res.json({
        food:"Chicken Burger",
        price:189,

    });
});

app.listen(port,()=>{
    console.log('http://localhost:${port}');
});
