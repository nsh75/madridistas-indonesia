import axios from "axios";
import { useEffect, useState } from "react";

const ShopDemo = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState("");

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
      "Real Madrid Away Jersey",
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
      "https://www.planetsports.asia/media/catalog/product/cache/5916ecf3714e9284afcad6b81e33eb02/0/1/01-ADIDAS-AOAJYADI5-ADIJJ4182-Blue.jpg",

      "https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=pad,q=70,f=webp//pub/media/catalog/product//c/c/cc4062d0445152a0267247dfd33be7ea472f250749470f5977d977ffb208e782.jpeg",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gCWAhrZb0zmynVd3K7ortqKZ8y2v9rJUyw&s",

      "https://store-champions.com/storage/1563/conversions/01K99V7JVH8ACX8BTYKYMJ3JM7-high_res.jpg",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-fDHJcB_Jea9VPiSsaR0B4Gz6V1Lb7Bdgg&s",

      "https://www.just-keepers.com/siteimg/extrapicsimages/37305.jpg?v=1764948536",

      "https://us.shop.realmadrid.com/cdn/shop/files/image_3822697b-32b1-45f4-9684-18270c810c2d.jpg?v=1767815473",

      "https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m7cct2l9svit22",

      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/33ad09c739a64ca3a1b6ed64ead6db74_9366/IT5113_21_model.jpg",

      "https://i.ebayimg.com/images/g/EdYAAOSwINhj0ALu/s-l1200.jpg",
    ][index],

    description: [
      "Official Real Madrid away jersey with modern adidas design for the 2025 season.",

      "Comfortable training shirt used for daily football practice and workouts.",

      "Premium Real Madrid jacket with sporty style and warm materials.",

      "Exclusive Madridistas hoodie perfect for casual wear and matchday vibes.",

      "Champions League football designed for professional training and matches.",

      "Professional goalkeeper gloves with strong grip and wrist protection.",

      "Stylish Real Madrid backpack with spacious compartments for daily use.",

      "Classic vintage Real Madrid jersey inspired by legendary football moments.",

      "Flexible training pants designed for athletes and football training sessions.",

      "Official Madridistas scarf to support Real Madrid during every match.",
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

  const addToCart = (product) => {
  const existingCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  existingCart.push(product);

  localStorage.setItem(
    "cart",
    JSON.stringify(existingCart)
  );

  setNotification(
    `${product.title} berhasil ditambahkan`
  );

  setTimeout(() => {
    setNotification("");
  }, 2000);
};

  return (
    <section className="min-h-screen bg-slate-950">
      {notification && (
        <div className="fixed right-5 top-5 z-50 rounded-xl bg-green-500 px-5 py-3 text-white shadow-xl transition-all duration-300">
          {notification}
        </div>
      )}
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

                  <button
                    onClick={() => addToCart(item)}
                    className="w-full rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-slate-900 transition hover:opacity-90"
                  >
                  Buy Now
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
