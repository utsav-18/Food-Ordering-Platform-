function Navbar({ cart }) {
    const cartCount = Object.values(cart).reduce(
        (total, quantity) => total + quantity,
        0
    );

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <span className="text-2xl">🍔</span>
                    <h1 className="text-xl font-bold text-gray-900">
                        Foodie
                    </h1>
                </div>

                <div className="flex items-center gap-2">
                    <span>🛒</span>

                    <span className="bg-orange-500 text-white text-sm font-bold min-w-7 h-7 px-2 rounded-full flex items-center justify-center">
                        {cartCount}
                    </span>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;