function Home({ setActivePage }) {
  const features = [
    {
      title: "Squad Real Madrid",
      description: "Lihat daftar pemain Real Madrid berdasarkan posisi dan informasi singkat.",
      button: "Lihat Squad",
      page: "squad",
    },
    {
      title: "Jadwal Nobar",
      description: "Temukan agenda nobar Madridistas Indonesia di beberapa kota.",
      button: "Lihat Nobar",
      page: "nobar",
    },
    {
      title: "Community Store",
      description: "Lihat merchandise komunitas seperti jersey, scarf, hoodie, dan aksesoris.",
      button: "Lihat Store",
      page: "store",
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-400">
              Komunitas Real Madrid Indonesia
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Madridistas Indonesia
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Website frontend komunitas pendukung Real Madrid di Indonesia
              yang menyediakan informasi squad, jadwal nobar, merchandise, dan
              demo integrasi API.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setActivePage("squad")}
                className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-950 shadow-lg transition hover:bg-yellow-300"
              >
                Lihat Squad
              </button>

              <button
                onClick={() => setActivePage("nobar")}
                className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                Jadwal Nobar
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white p-6 text-slate-900">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                Hala Madrid
              </p>
              <h3 className="mt-3 text-3xl font-extrabold">
                From Indonesia to Santiago Bernabéu
              </h3>
              <p className="mt-4 text-slate-600">
                Bersama mendukung Real Madrid melalui informasi, kegiatan
                komunitas, dan pengalaman digital yang interaktif.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">15+</p>
                  <p className="text-sm text-slate-600">Players</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">5</p>
                  <p className="text-sm text-slate-600">Pages</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">10</p>
                  <p className="text-sm text-slate-600">API Items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Fitur Website
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Dibuat untuk Madridistas Indonesia
          </h2>
          <p className="mt-3 text-slate-600">
            Website ini memiliki beberapa halaman utama yang saling terhubung.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-slate-600">
                {feature.description}
              </p>
              <button
                onClick={() => setActivePage(feature.page)}
                className="mt-5 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800"
              >
                {feature.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home