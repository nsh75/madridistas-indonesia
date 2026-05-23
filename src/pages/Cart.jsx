import { useEffect, useState } from "react";

const Cart = ({ setCartCount }) => {
  const [cart, setCart] = useState([]);
  const [successMessage, setSuccessMessage] =
    useState("");

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCartCount(updatedCart.length);
  };

  const handleCheckout = () => {
    localStorage.removeItem("cart");

    setCart([]);

    setCartCount(0);

    setSuccessMessage(
      "Terima kasih Madridistas 🔥"
    );

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + (parseFloat(item.price) || 0),
    0
  );

  return (
    <section className="min-h-screen bg-slate-50">

      {successMessage && (
        <div className="fixed right-5 top-5 z-50 rounded-xl bg-green-500 px-5 py-3 text-white shadow-lg">
          {successMessage}
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 py-12">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Shopping Cart
          </h1>

          <p className="mt-3 text-slate-600">
            Produk pilihan Madridistas Indonesia.
          </p>
        </div>

        {cart.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
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

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <p className="font-bold text-blue-700">
                      ${item.price}
                    </p>

                    <button
                      onClick={() =>
                        removeItem(index)
                      }
                      className="rounded-xl bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-md">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Total Belanja
                  </h2>

                  <p className="mt-2 text-slate-600">
                    Total produk dalam cart.
                  </p>
                </div>

                <div className="text-left sm:text-right">

                  <p className="text-3xl font-extrabold text-blue-700">
                    ${totalPrice.toFixed(2)}
                  </p>

                  <button
                    onClick={handleCheckout}
                    className="mt-4 w-full rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-900 transition hover:opacity-90 sm:w-auto"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center shadow-md">

            <h2 className="text-2xl font-bold text-slate-900">
              Cart Kosong
            </h2>

            <p className="mt-3 text-slate-600">
              Belum ada produk yang ditambahkan.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
