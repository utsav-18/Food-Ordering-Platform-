function FoodCard({ food, cart, setCart }) {

    const addToCart = () => {

        setCart({
            ...cart,
            [food.id]: (cart[food.id] || 0) + 1
        });

    };
        const removeFromCart = () => {

        setCart({
            ...cart,
            [food.id]: (cart[food.id] || 0) - 1
        });

    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5">

            <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-lg font-bold mt-4">
                {food.name}
            </h3>

            <div className="flex justify-between">
                <p className="text-gray-500 mt-1">
                    ₹{food.price} 
                </p>

                <p className="text-gray-500 mt-1">
                    {cart[food.id] || 0}
                </p>
            </div>

            <div className="flex flex-row gap-4">
                <button
                    onClick={addToCart}
                    className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg cursor-pointer"
                >
                    Add to Cart
                </button>

                <button
                    onClick={removeFromCart}
                    className="mt-4 w-full bg-red-700 text-white py-2 rounded-lg cursor-pointer"
                >
                    Remove
                </button>
            </div>

        </div>
    );
}

export default FoodCard;