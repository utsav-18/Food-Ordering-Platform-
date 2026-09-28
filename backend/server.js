const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

const foods = [
    {
        id: 1,
        name: "Chicken Burger",
        price: 199
    },
    {
        id: 2,
        name: "Margherita Pizza",
        price: 299
    },
    {
        id: 3,
        name: "French Fries",
        price: 99
    },
    {
        id: 4,
        name: "Chicken Biryani",
        price: 249
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
