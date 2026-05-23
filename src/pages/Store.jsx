import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Store = ({
  setCartCount,
  setActivePage,
}) => {

  const addToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    setCartCount(existingCart.length);

    alert(`${product.name} masuk cart`);
  };

  const handleBuyNow = (product) => {
    localStorage.setItem(
      "cart",
      JSON.stringify([product])
    );

    setCartCount(1);

    setActivePage("cart");
  };

  return (
    <section className="bg-slate-50 min-h-screen">

      <div className="mx-auto max-w-6xl px-4 py-12">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Official Merchandise
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Koleksi merchandise resmi Madridistas Indonesia.
          </p>
        </div>

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
