const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

const foods = [
    {
        id: 1,
        name: "Chicken Burger",
        price: 199,
        symbol :'🍔'
    },
    {
        id: 2,
        name: "Water Melon",
        price: 89,
        symbol :'🍉'
    },
    {
        id: 3,
        name: "Apple",
        price: 99,
        symbol :'🍎'
    },
    {
        id: 4,
        name: "Cake",
        price: 159,
        symbol :'🍰'
    }
];


app.get("/", (req, res) => {
    res.send("Food Ordering Backend");
});

app.get("/foods",(req,res)=>{
    res.json(foods);
});

app.listen(port,()=>{
    console.log('http://localhost:${port}');
});
