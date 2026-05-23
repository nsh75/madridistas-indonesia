import anthemVideo from "../assets/anthem.mp4"

function Home({ setActivePage }) {
  const hotNews = [
    {
      id: 1,
      category: "Hot Discussion",
      title: "Nostalgia Era José Mourinho di Real Madrid",
      description:
        "Madridistas Indonesia membahas kembali era intens Real Madrid bersama José Mourinho, mulai dari transisi cepat, mental juara, hingga rivalitas panas El Clásico.",
      date: "Community Talk • 2026",
    },
    {
      id: 2,
      category: "Match Preview",
      title: "Persiapan Nobar El Clásico Komunitas",
      description:
        "Komunitas mulai menyiapkan agenda nobar untuk laga besar Real Madrid dengan suasana putih-biru khas Madridistas Indonesia.",
      date: "Nobar Update • 2026",
    },
  ]

  const features = [
    {
      title: "Squad",
      description: "Lihat daftar pemain Real Madrid berdasarkan posisi.",
      page: "squad",
    },
    {
      title: "Nobar",
      description: "Temukan jadwal nobar komunitas di berbagai kota.",
      page: "nobar",
    },
    {
      title: "Store",
      description: "Lihat merchandise komunitas Madridistas Indonesia.",
      page: "store",
    },
    {
      title: "Shop Demo",
      description: "Demo katalog produk dari Public API menggunakan Axios.",
      page: "shop",
    },
  ]

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-blue-50 shadow-xl">
            <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                  Madridistas Indonesia
                </p>

                <h1 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                  From Indonesia to Santiago Bernabéu
                </h1>

                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                  Ruang digital komunitas pendukung Real Madrid di Indonesia
                  untuk mengikuti squad, nobar, merchandise, dan aktivitas
                  Madridistas.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => setActivePage("nobar")}
                    className="rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-800"
                  >
                    Lihat Jadwal Nobar
                  </button>

                  <button
                    onClick={() => setActivePage("squad")}
                    className="rounded-xl border border-blue-700 bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
                  >
                    Lihat Squad
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-lg">
                <video
                  src={anthemVideo}
                  controls
                  className="aspect-video w-full rounded-2xl object-cover"
                >
                  Browser kamu tidak mendukung video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">
                Hot News
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
                Berita & Diskusi Komunitas
              </h2>
            </div>

            <p className="max-w-xl text-slate-600">
              Update ringan seputar Real Madrid dan topik yang sedang ramai
              dibahas oleh Madridistas Indonesia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {hotNews.map((news) => (
              <article
                key={news.id}
                className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                    {news.category}
                  </span>

                  <span className="text-sm text-slate-500">{news.date}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-950">
                  {news.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {news.description}
                </p>

                <button className="mt-6 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800">
                  Read More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-[2rem] bg-blue-700 p-8 text-white shadow-xl md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
                  Next Watch Party
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-5xl">
                  Real Madrid vs Barcelona
                </h2>

                <p className="mt-4 max-w-2xl text-blue-100">
                  Jadwal nobar komunitas Madridistas Indonesia untuk laga besar
                  berikutnya. Cek lokasi dan waktu nobar terdekat.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-slate-950 shadow-lg">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                  Community Event
                </p>

                <h3 className="mt-2 text-2xl font-black">Yogyakarta</h3>

                <p className="mt-2 text-slate-600">
                  25 Mei 2026 • 20:00 WIB
                </p>

                <button
                  onClick={() => setActivePage("nobar")}
                  className="mt-6 w-full rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Lihat Detail Nobar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
              Jelajahi Madridistas Indonesia
            </h2>

            <p className="mt-3 text-slate-600">
              Pilih halaman yang ingin kamu kunjungi.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <button
                key={feature.title}
                onClick={() => setActivePage(feature.page)}
                className="rounded-3xl bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-black text-blue-700">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home