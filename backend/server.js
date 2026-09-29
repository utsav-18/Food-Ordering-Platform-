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
        symbol: "🍔",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
        id: 2,
        name: "Watermelon",
        price: 89,
        symbol: "🍉",
        image: "https://images.unsplash.com/photo-1563114773-84221bd62daa"
    },
    {
        id: 3,
        name: "Apple",
        price: 99,
        symbol: "🍎",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
    },
    {
        id: 4,
        name: "Cake",
        price: 159,
        symbol: "🍰",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    }
];
app.get("/", (req, res) => {
    res.send("Food Ordering Backend");
});

app.get("/foods", (req, res) => {
    res.json(foods);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});