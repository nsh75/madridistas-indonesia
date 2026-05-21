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
      "Madrid Training Shirt",
      "Real Madrid Jacket",
      "Madridistas Hoodie",
      "Champions League Ball",
      "Goalkeeper Gloves",
      "Real Madrid Backpack",
      "Vintage Madrid Jersey",
      "Training Pants",
      "Real Madrid Scarf",
    ][index],

    image: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3d7f7e4f6e064fa8bc5f9aeb1e8b14d8_9366/Jersey_Kandang_Real_Madrid_24-25_Putih_IU5011_01_laydown.jpg",

      "https://assets.adidas.com/images/w_600,f_auto,q_auto/2d67ef0acecd4352b2571c45c04a3295_faec/Jaket_Anthem_Real_Madrid_adidas_Z.N.E._Biru_KC3739_db01_laydown.jpg",

      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",

      "https://i.ebayimg.com/images/g/EdYAAOSwINhj0ALu/s-l1200.jpg",
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
