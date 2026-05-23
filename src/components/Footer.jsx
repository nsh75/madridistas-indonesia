function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">
            Madridistas<span className="text-yellow-400"> Indonesia</span>
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Website komunitas penggemar Real Madrid di Indonesia.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-yellow-400">Menu</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li>Home</li>
            <li>Squad</li>
            <li>Nobar</li>
            <li>Store</li>
            <li>Shop Demo</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-yellow-400">Project UTS</h3>
          <p className="mt-2 text-sm text-slate-300">
            Dibuat menggunakan React, Tailwind CSS, dan Axios untuk mata kuliah
            Pemrograman Web.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        &copy; 2026 Madridistas Indonesia. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer