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
    <div className="min-h-screen bg-gray-100 px-6 py-10">

        {/* Header */}
        <div className="max-w-6xl mx-auto mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                🍔 Food Ordering Website
            </h1>

            <p className="mt-3 text-gray-500 text-lg">
                Delicious food, delivered to your doorstep.
            </p>
        </div>

        {/* Food Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {foods.map((food) => (

                <div
                    key={food.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >

                    {/* Food Image Placeholder */}
                    <div className="h-40 bg-orange-100 flex items-center justify-center text-6xl">
                        {food.symbol}
                    </div>

                    {/* Food Details */}
                    <div className="p-5">

                        <h2 className="text-xl font-bold text-gray-900">
                            {food.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Fresh and delicious
                        </p>

                        <div className="flex items-center justify-between mt-5">

                            <span className="text-xl font-bold text-orange-600">
                                ₹{food.price}
                            </span>

                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg transition cursor-pointer"
                            >
                                Add
                            </button>

                        </div>

                    </div>

                </div>

            ))}

        </div>

    </div>
);
}

export default App;