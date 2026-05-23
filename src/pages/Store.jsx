import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Store = ({
  setCartCount,
  setActivePage,
}) => {
  const [notification, setNotification] =
    useState("");

  const addToCart = (product) => {
    const existingCart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    existingCart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    setCartCount(existingCart.length);

    setNotification(
      `${product.name} masuk cart`
    );

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  const handleBuyNow = (product) => {
    localStorage.setItem(
      "cart",
      JSON.stringify([product])
    );

    setCartCount(1);

    setNotification(
      `${product.name} siap checkout`
    );

    setTimeout(() => {
      setNotification("");
      setActivePage("cart");
    }, 1000);
  };

  return (
    <section className="bg-slate-50 min-h-screen">

      {notification && (
        <div className="fixed right-5 top-5 z-50 rounded-xl bg-green-500 px-5 py-3 text-white shadow-xl">
          {notification}
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 py-12">

        <h1 className="mb-3 text-4xl font-bold text-slate-900">
          Official Merchandise
        </h1>

        <p className="mb-8 text-slate-600">
          Koleksi merchandise resmi Madridistas Indonesia.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              handleBuyNow={handleBuyNow}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Store;
