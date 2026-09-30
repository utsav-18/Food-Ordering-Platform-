const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

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
        name: "Apple",
        price: 99,
        symbol: "🍎",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
    },
    {
        id: 3,
        name: "Chocolate Cake",
        price: 159,
        symbol: "🍰",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    {
        id: 4,
        name: "Margherita Pizza",
        price: 249,
        symbol: "🍕",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    },
    {
        id: 5,
        name: "Chicken Pizza",
        price: 329,
        symbol: "🍕",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },
    {
        id: 6,
        name: "French Fries",
        price: 129,
        symbol: "🍟",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
    },
    {
        id: 7,
        name: "Chicken Biryani",
        price: 249,
        symbol: "🍗",
        image: "https://tse2.mm.bing.net/th/id/OIP.0csI89pXHQSxumqiZz_tIwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 8,
        name: "Paneer Tikka",
        price: 219,
        symbol: "🥘",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8"
    },
    {
        id: 9,
        name: "Masala Dosa",
        price: 119,
        symbol: "🥞",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
    },
    {
        id: 10,
        name: "Chicken Momos",
        price: 179,
        symbol: "🥟",
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9"
    },
    {
        id: 11,
        name: "Grilled Sandwich",
        price: 149,
        symbol: "🥪",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
    },
    {
        id: 12,
        name: "Chocolate Milkshake",
        price: 169,
        symbol: "🥤",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699"
    },
    {
        id: 13,
        name: "Cold Coffee",
        price: 139,
        symbol: "☕",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
    },
    {
        id: 14,
        name: "Ice Cream",
        price: 119,
        symbol: "🍨",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a"
    },
    {
        id: 15,
        name: "Donut",
        price: 99,
        symbol: "🍩",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
    }
];


app.get("/", (req, res) => {
    res.send("Food Ordering Backend");
});

app.get("/foods", (req, res) => {
    res.json(foods);
});

app.post("/orders", (req, res) => {

    console.log("Order received from frontend:");
    console.log(req.body);

    res.status(201).json({
        message: "Order received successfully"
    });

});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});