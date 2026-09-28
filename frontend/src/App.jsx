import { useEffect, useState } from "react";

function App() {

    const [foods, setFoods] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/foods")
            .then((response) => response.json())
            .then((data) => {
                setFoods(data);
            });

    }, []);

    return (
        <div>
            <h1>Food Ordering Website</h1>

            {foods.map((food) => (
                <div key={food.id}>
                    <h2>{food.name}</h2>
                    <p>₹{food.price}</p>
                </div>
            ))}
        </div>
    );
}

export default App;