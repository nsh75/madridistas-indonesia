import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">

        <h1 className="mb-10 text-4xl font-bold text-slate-900">
          Shopping Cart
        </h1>

        {cart.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cart.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-5 shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 h-52 w-full rounded-xl object-cover"
                />

                <h2 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-slate-600">
                  {item.description}
                </p>

                <p className="mt-4 font-bold text-blue-700">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold text-slate-900">
              Cart Kosong
            </h2>

            <p className="mt-3 text-slate-600">
              Belum ada produk yang dibeli.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
