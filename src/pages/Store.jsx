import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Store = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold text-slate-900">
          Official Merchandise
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
