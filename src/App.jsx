import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Squad from "./pages/Squad"
import Nobar from "./pages/Nobar"
import Store from "./pages/Store"
import ShopDemo from "./pages/ShopDemo"

function App() {
  const [activePage, setActivePage] = useState("home")

  const renderPage = () => {
    if (activePage === "home") return <Home setActivePage={setActivePage} />
    if (activePage === "squad") return <Squad />
    if (activePage === "nobar") return <Nobar />
    if (activePage === "store") return <Store />
    if (activePage === "shop") return <ShopDemo />

    return <Home setActivePage={setActivePage} />
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  )
}

export default App