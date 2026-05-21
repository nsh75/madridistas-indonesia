import axios from "axios";
import { useEffect, useState } from "react";

const ShopDemo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setProducts(response.data.slice(0, 10));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-slate-950 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold text-slate-50">
          API Shop Demo
        </h1>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 h-52 w-full object-contain"
                />

                <h2 className="line-clamp-2 text-lg font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-slate-600">
                  {item.category}
                </p>

                <p className="mt-2 font-semibold text-blue-700">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopDemo;
