import { useState } from "react"
import prmiLogo from "../assets/madrid-logo.png"
import uclLogo from "../assets/ucl-15.png"

function Navbar({ activePage, setActivePage }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const menus = [
    { id: "home", label: "Home" },
    { id: "squad", label: "Squad" },
    { id: "nobar", label: "Nobar" },
    { id: "store", label: "Store" },
    { id: "shop", label: "Shop Demo" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActivePage("home")}
            className="flex items-center gap-3"
          >
            <img
              src={prmiLogo}
              alt="Madridistas Indonesia Logo"
              className="h-14 w-14 object-contain"
            />

            <span className="h-10 w-px bg-slate-300"></span>

            <img
              src={uclLogo}
              alt="15 UCL Logo"
              className="h-12 w-12 object-contain"
            />
          </button>
        </div>

        <ul className="hidden items-center justify-center gap-2 md:flex">
          {menus.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => setActivePage(menu.id)}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  activePage === menu.id
                    ? "bg-blue-700 text-white shadow-md"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {menu.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center justify-end gap-3 md:flex">
          {isLoggedIn ? (
            <>
              <span className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                Halo, Madridista
              </span>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="rounded-xl border border-red-500 px-5 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="rounded-xl border border-blue-700 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Login
              </button>

              <button
                onClick={() => setIsLoggedIn(true)}
                className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800"
              >
                Register
              </button>
            </>
          )}
        </div>

        <div className="col-span-2 flex items-center justify-end gap-2 md:hidden">
          <select
            value={activePage}
            onChange={(event) => setActivePage(event.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none"
          >
            {menus.map((menu) => (
              <option key={menu.id} value={menu.id}>
                {menu.label}
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
              isLoggedIn
                ? "border border-red-500 text-red-500 hover:bg-red-50"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar