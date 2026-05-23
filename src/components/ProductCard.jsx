const ProductCard = ({
  product,
  addToCart,
  handleBuyNow,
}) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      <img
        src={product.image}
        alt={product.name}
        className="mb-4 h-52 w-full rounded-xl object-cover"
      />

      <h3 className="text-xl font-bold text-slate-900">
        {product.name}
      </h3>

      <p className="mt-2 text-slate-600">
        {product.category}
      </p>

      <p className="mt-1 font-semibold text-blue-700">
        {product.price}
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">

        <button
          onClick={() => addToCart(product)}
          className="flex-1 rounded-xl bg-slate-900 px-4 py-3 font-bold text-white transition hover:scale-105"
        >
          🛒 Cart
        </button>

        <button
          onClick={() =>
            handleBuyNow(product)
          }
          className="flex-1 rounded-xl bg-yellow-400 px-4 py-3 font-bold text-slate-900 transition hover:scale-105"
        >
          ⚡ Buy
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
