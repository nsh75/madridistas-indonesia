import { useState } from "react"
import prmiLogo from "../assets/madrid-logo.png"
import uclLogo from "../assets/ucl-15.png"

function Navbar({ activePage, setActivePage, cartCount }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [username, setUsername] = useState("")
  const [inputName, setInputName] = useState("")

  const menus = [
    { id: "home", label: "Home" },
    { id: "squad", label: "Squad" },
    { id: "nobar", label: "Nobar" },
    { id: "store", label: "Store" },
    { id: "shop", label: "Shop Demo" },
    { id: "cart", label: "Cart" },
  ]

  const handleLogin = (event) => {
    event.preventDefault()

    if (inputName.trim() === "") return

    setUsername(inputName)
    setIsLoggedIn(true)
    setShowLoginModal(false)
    setInputName("")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername("")
  }

  return (
    <>
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

          <ul className="hidden items-center justify-center gap-8 md:flex">
            {menus.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => setActivePage(menu.id)}
                  className={`group relative py-2 text-sm font-bold transition ${
                    activePage === menu.id
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-700"
                  }`}
                >
                  {menu.id === "cart" ? (
                    <span className="relative flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2 9m12-9 2 9M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                        />
                      </svg>

                      {cartCount > 0 && (
                        <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-xs font-black text-slate-950">
                          {cartCount}
                        </span>
                      )}
                    </span>
                  ) : (
                    menu.label
                  )}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                      activePage === menu.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center justify-end gap-3 md:flex">
            {isLoggedIn ? (
              <>
                <span className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                  Halo, {username}
                </span>

                <button
                  onClick={handleLogout}
                  className="rounded-xl border border-red-500 px-5 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="rounded-xl border border-blue-700 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Login
                </button>

                <button
                  onClick={() => setShowLoginModal(true)}
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
                  {menu.id === "cart" && cartCount > 0
                    ? `${menu.label} (${cartCount})`
                    : menu.label}
                </option>
              ))}
            </select>

            <button
              onClick={() =>
                isLoggedIn ? handleLogout() : setShowLoginModal(true)
              }
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

      {showLoginModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-6 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Madridistas Indonesia
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Login / Register
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Masukkan nama untuk masuk sebagai Madridista.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Nama
                </label>

                <input
                  type="text"
                  value={inputName}
                  onChange={(event) => setInputName(event.target.value)}
                  placeholder="Contoh: Nama"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
              >
                Masuk
              </button>

              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="w-full rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-600 transition hover:bg-slate-50"
              >
                Batal
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar