import { useEffect, useState } from "react";

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

        {/* Navbar */}
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <span className="text-2xl">🍔</span>
                    <h1 className="text-xl font-bold text-gray-900">
                        Foodie
                    </h1>
                </div>

                {/* Cart */}
                <div className="flex items-center gap-2">
                    <span className="text-gray-600">
                        🛒
                    </span>

                    <span className="bg-orange-500 text-white text-sm font-bold min-w-7 h-7 px-2 rounded-full flex items-center justify-center">
                        {Object.values(cart).reduce(
                            (total, quantity) => total + quantity,
                            0
                        )}
                    </span>
                </div>

            </div>
        </nav>


        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-12">

            <div className="text-center">

                <p className="text-orange-500 font-semibold mb-2">
                    Fresh • Fast • Delicious
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    What are you craving?
                </h2>

                <p className="text-gray-500 mt-3">
                    Choose your favourite food and add it to your cart.
                </p>

            </div>

        </section>


        {/* Food Section */}
        <main className="max-w-6xl mx-auto px-6 pb-16">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold text-gray-900">
                    Popular Foods
                </h2>

                <span className="text-sm text-gray-500">
                    {foods.length} items
                </span>

            </div>


            {/* Food Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {foods.map((food) => (

                    <div
                        key={food.id}
                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
                    >

                        {/* Food Image */}
                        <div className="h-44 bg-orange-50 flex items-center justify-center relative">

                            <span className="text-7xl">
                                {food.symbol}
                            </span>

                            {/* Quantity Badge */}
                            {cart[food.id] > 0 && (
                                <span className="absolute top-3 right-3 bg-orange-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                                    {cart[food.id]}
                                </span>
                            )}

                        </div>


                        {/* Details */}
                        <div className="p-5">

                            <div className="flex items-start justify-between">

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {food.name}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Freshly prepared
                                    </p>
                                </div>

                                <p className="text-lg font-bold text-orange-500">
                                    ₹{food.price}
                                </p>

                            </div>


                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between mt-5">

                                <span className="text-sm text-gray-500">
                                    Quantity
                                </span>

                                <div className="flex items-center gap-2">

                                    {/* Remove */}
                                    <button
                                        disabled={!cart[food.id]}
                                        className="w-9 h-9 rounded-lg border border-gray-300 text-gray-700 font-bold text-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                                        onClick={() => {
                                            setCart({
                                                ...cart,
                                                [food.id]: Math.max(
                                                    (cart[food.id] || 0) - 1,
                                                    0
                                                )
                                            });
                                        }}
                                    >
                                        −
                                    </button>


                                    {/* Quantity */}
                                    <span className="w-8 text-center font-semibold text-gray-900">
                                        {cart[food.id] || 0}
                                    </span>


                                    {/* Add */}
                                    <button
                                        className="w-9 h-9 rounded-lg bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 active:scale-95 transition cursor-pointer"
                                        onClick={() => {
                                            setCart({
                                                ...cart,
                                                [food.id]:
                                                    (cart[food.id] || 0) + 1
                                            });
                                        }}
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </main>


        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">

            <div className="max-w-6xl mx-auto px-6 py-6 text-center">

                <p className="text-sm text-gray-500">
                    🍔 Foodie • Built with React & Node.js
                </p>

            </div>

        </footer>

    </div>
);


}

export default App;