const placeOrder = async () => {
    console.log("PLACE ORDER FUNCTION CALLED");

    try {
        const response = await fetch("http://localhost:8080/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: "Hello from React"
            })
        });

        const data = await response.json();

        console.log("Backend response:", data);

    } catch (error) {
        console.error("Error:", error);
    }
};


function Cart({ cart, foods }) {

    const cartItems = foods.filter((food) => cart[food.id]);

    const total = cartItems.reduce((sum, food) => {
        return sum + food.price * cart[food.id];
    }, 0);

    return (
        <section className="max-w-6xl mx-auto px-6 py-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                🛒 Your Cart
            </h2>

            {cartItems.length === 0 ? (

                <p className="text-gray-500">
                    Your cart is empty.
                </p>

            ) : (

                <div className="bg-white rounded-xl border border-gray-200 p-6">

                    {cartItems.map((food) => (

                        <div
                            key={food.id}
                            className="flex items-center justify-between py-4 border-b border-gray-100"
                        >

                            <div className="flex items-center gap-4">

                                <span className="text-3xl">
                                    {food.symbol}
                                </span>

                                <div>
                                    <h3 className="font-semibold">
                                        {food.name}
                                    </h3>

                                    <p className="text-gray-500">
                                        ₹{food.price} × {cart[food.id]}
                                    </p>
                                </div>

                            </div>

                            <p className="font-semibold">
                                ₹{food.price * cart[food.id]}
                            </p>

                        </div>

                    ))}

                    <div className="flex justify-between mt-6 text-lg font-bold">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>

                <button
                    onClick={placeOrder}
                    className="mt-4 w-full bg-orange-400 text-white py-2 rounded-lg cursor-pointer hover:bg-orange-500"
                >
                    Place Order
                </button>

                </div>

            )}

        </section>

    );
}

export default Cart;