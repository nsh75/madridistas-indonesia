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

        const madridProducts = response.data
          .slice(0, 10)
          .map((item, index) => ({
            ...item,
            title: [
              "Real Madrid Home Jersey",
              "Madrid Training Kit",
              "Madridistas Scarf",
              "UCL Edition Jersey",
              "Real Madrid Hoodie",
              "Madrid Football",
              "Goalkeeper Gloves",
              "Real Madrid Jacket",
              "Vintage Madrid Jersey",
              "Champions League Ball",
            ][index],
          }));

        setProducts(madridProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-50">
            Madridistas Store API
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Demo halaman API menggunakan Axios dengan tema
            merchandise Real Madrid dan sepak bola.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent"></div>
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
                  className="mb-4 h-56 w-full object-contain"
                />

                <h2 className="line-clamp-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="font-bold text-blue-700">
                    ${item.price}
                  </p>

                  <button className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-slate-900 transition hover:opacity-90">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopDemo;
