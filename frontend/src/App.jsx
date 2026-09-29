import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodSection from "./components/FoodSection";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {

    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {

        fetch("http://localhost:8080/foods")
            .then((response) => response.json())
            .then((data) => {
                setFoods(data);
            });

    }, []);

    return (
        <div className="min-h-screen bg-gray-50">

            <Navbar cart={cart} />

            <Hero />

            <FoodSection
                foods={foods}
                cart={cart}
                setCart={setCart}
            />

            <Cart
                cart={cart}
                foods={foods}
            />

            <Footer />

        </div>
    );
}

export default App;