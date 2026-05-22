import { useState } from "react";

function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false)
  const menus = [
    { id: "home", label: "Home" },
    { id: "squad", label: "Squad" },
    { id: "nobar", label: "Nobar" },
    { id: "store", label: "Store" },
    { id: "shop", label: "Shop Demo" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <button
          onClick={() => setActivePage("home")}
          className="text-left"
        >
          <h1 className="text-xl font-extrabold tracking-wide">
            Madridistas<span className="text-yellow-400"> Indonesia</span>
          </h1>
          <p className="text-xs text-slate-300">
            Hala Madrid from Indonesia
          </p>
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {menus.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => setActivePage(menu.id)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  activePage === menu.id
                    ? "bg-yellow-400 text-slate-950"
                    : "text-slate-200 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {menu.label}
              </button>
            </li>
          ))}
        </ul>

        <button
  onClick={() => setIsOpen(!isOpen)}
  className="rounded-xl bg-slate-800 px-3 py-2 text-white md:hidden"
  >
    ☰
  </button>


        {isOpen && (
  <div className="absolute left-0 top-full w-full bg-slate-950 p-4 shadow-lg md:hidden">
    
    <div className="flex flex-col gap-3">
      {menus.map((menu) => (
        <button
          key={menu.id}
          onClick={() => {
            setActivePage(menu.id)
            setIsOpen(false)
          }}
          className={`rounded-xl px-4 py-3 text-left font-semibold transition ${
            activePage === menu.id
              ? "bg-yellow-400 text-slate-950"
              : "bg-slate-900 text-slate-200 hover:bg-slate-800"
          }`}
        >
          {menu.label}
        </button>
      ))}
    </div>
  </div>
)}
      </nav>
    </header>
  )
}

export default Navbar
