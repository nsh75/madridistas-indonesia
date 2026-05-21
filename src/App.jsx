function App() {
  return (
    <>
      <header className="bg-slate-950 text-white py-5 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Madridista Indonesia</h1>
        </div>
      </header>

      <main className="min-h-screen bg-slate-100">
        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Website Komunitas Real Madrid Indonesia
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Project UTS Pemrograman Web berbasis React, Tailwind CSS, dan Axios.
          </p>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-800 transition">
            Mulai Explore
          </button>
        </section>
      </main>

      <footer className="bg-slate-950 text-white text-center py-5">
        <p>&copy; 2026 Madridista Indonesia</p>
      </footer>
    </>
  )
}

export default App