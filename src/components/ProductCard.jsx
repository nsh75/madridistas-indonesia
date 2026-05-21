const ProductCard = ({ product }) => {
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

      <button className="mt-4 w-full rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-slate-900 transition hover:opacity-90">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
