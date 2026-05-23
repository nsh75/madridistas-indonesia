import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Squad from "./pages/Squad";
import Nobar from "./pages/Nobar";
import Store from "./pages/Store";
import ShopDemo from "./pages/ShopDemo";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [activePage, setActivePage] =
    useState("home");

  const [cartCount, setCartCount] =
    useState(0);
  const [checkoutProduct, setCheckoutProduct] =
  useState(null);

  const renderPage = () => {
    if (activePage === "home")
      return (
        <Home
          setActivePage={setActivePage}
        />
      );

    if (activePage === "squad")
      return <Squad />;

    if (activePage === "nobar")
      return <Nobar />;

    if (activePage === "store")
      return (
        <Store
          setCartCount={setCartCount}
          setActivePage={setActivePage}
        />
      );

    if (activePage === "shop")
      return (
          <ShopDemo
            setCartCount={setCartCount}
            setActivePage={setActivePage}
            setCheckoutProduct={setCheckoutProduct}
          />
      );

    if (activePage === "cart")
      return (
        <Cart
          setCartCount={setCartCount}
        />
      );
    if (activePage === "checkout")
      return (
        <Checkout
          checkoutProduct={checkoutProduct}
          setActivePage={setActivePage}
        />
      );

    return (
      <Home
        setActivePage={setActivePage}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartCount}
      />

      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
