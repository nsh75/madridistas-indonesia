function Navbar({ activePage, setActivePage }) {
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

        <select
          value={activePage}
          onChange={(event) => setActivePage(event.target.value)}
          className="rounded-xl bg-slate-800 px-3 py-2 text-sm text-white outline-none md:hidden"
        >
          {menus.map((menu) => (
            <option key={menu.id} value={menu.id}>
              {menu.label}
            </option>
          ))}
        </select>
      </nav>
    </header>
  )
}

export default Navbar