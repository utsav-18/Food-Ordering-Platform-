import FoodCard from "./FoodCard";

function FoodSection({ foods, cart, setCart }) {

    return (
        <section className="max-w-6xl mx-auto px-6 pb-12">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {foods.map((food) => (
                    <FoodCard
                        key={food.id}
                        food={food}
                        cart={cart}
                        setCart={setCart}
                    />
                ))}

            </div>

        </section>
    );
}

export default FoodSection;