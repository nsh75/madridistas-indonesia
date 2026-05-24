import anthemVideo from "../assets/anthem.mp4"
import nobarData from "../data/nobar"

function Home({ setActivePage }) {
  const nextNobar = nobarData[0]

  const hotNews = [
    {
      id: 1,
      category: "Hot Discussion",
      title: "Nostalgia Era José Mourinho di Real Madrid",
      description:
        "Madridistas Indonesia membahas kembali era intens Real Madrid bersama José Mourinho, mulai dari transisi cepat, mental juara, hingga rivalitas panas El Clásico.",
      date: "Community Talk • 2026",
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Match Preview",
      title: "Persiapan Nobar El Clásico Komunitas",
      description:
        "Komunitas mulai menyiapkan agenda nobar untuk laga besar Real Madrid dengan suasana putih-biru khas Madridistas Indonesia.",
      date: "Nobar Update • 2026",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Community",
      title: "Madridistas Indonesia Mulai Buka Registrasi Member",
      description:
        "Fitur login dan register disiapkan sebagai simulasi awal untuk kebutuhan interaksi pengguna pada website komunitas.",
      date: "Member Info • 2026",
      image:
        "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  {/* Card Bawah */}
  const features = [
    {
      title: "Squad",
      description: "Lihat daftar pemain Real Madrid berdasarkan posisi.",
      page: "squad",
      image:
        "https://images.unsplash.com/photo-1556056504-dc77ff4d11b0?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Nobar",
      description: "Temukan jadwal nobar komunitas di berbagai kota.",
      page: "nobar",
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Store",
      description: "Lihat merchandise komunitas Madridistas Indonesia.",
      page: "store",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Shop Demo",
      description: "Demo katalog produk dari Public API menggunakan Axios.",
      page: "shop",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
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

      {/* Hot News */}
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
              Update ringan seputar Real Madrid dan topik yang sedang ramai dibahas
              oleh Madridistas Indonesia.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            {/* Berita utama */}
            <article className="overflow-hidden rounded-[2rem] bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative">
                <img
                  src={hotNews[0].image}
                  alt={hotNews[0].title}
                  className="h-72 w-full object-cover"
                />

                <span className="absolute left-5 top-5 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950">
                  {hotNews[0].category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-blue-700">
                  {hotNews[0].date}
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950">
                  {hotNews[0].title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {hotNews[0].description}
                </p>

                <button className="mt-6 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800">
                  Read More
                </button>
              </div>
            </article>

            {/* Berita kecil */}
            <div className="grid gap-6">
              {hotNews.slice(1).map((news) => (
                <article
                  key={news.id}
                  className="grid overflow-hidden rounded-[2rem] bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.9fr_1.1fr]"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-full min-h-52 w-full object-cover"
                  />

                  <div className="p-5">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                      {news.category}
                    </span>

                    <h3 className="mt-4 text-xl font-black leading-tight text-slate-950">
                      {news.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                      {news.description}
                    </p>

                    <p className="mt-4 text-sm font-semibold text-slate-500">
                      {news.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Nobar */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="overflow-hidden rounded-[2rem] bg-blue-700 text-white shadow-xl">
            <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
                  Next Watch Party
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                  {nextNobar.title}
                </h2>

                <p className="mt-4 max-w-2xl text-blue-100">
                  Madridistas Indonesia mengadakan nobar untuk laga besar Real Madrid.
                  Cek lokasi, waktu, dan detail agenda nobar terdekat.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                  <span className="rounded-full bg-white/15 px-4 py-2">
                    {nextNobar.city || nextNobar.place}
                  </span>

                  <span className="rounded-full bg-white/15 px-4 py-2">
                    {nextNobar.date}
                  </span>

                  <span className="rounded-full bg-white/15 px-4 py-2">
                    {nextNobar.time}
                  </span>
                </div>

                <button
                  onClick={() => setActivePage("nobar")}
                  className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
                >
                  Lihat Detail Nobar
                </button>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] bg-white text-slate-950 shadow-lg">
                <img
                  src={nextNobar.image}
                  alt={nextNobar.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                    Featured Match
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {nextNobar.title}
                  </h3>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Venue</p>
                    <p className="mt-1 font-bold text-slate-900">
                      {nextNobar.place}
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-blue-50 p-4">
                      <p className="text-sm text-slate-500">Tanggal</p>
                      <p className="mt-1 font-bold text-blue-700">
                        {nextNobar.date}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 p-4">
                      <p className="text-sm text-slate-500">Waktu</p>
                      <p className="mt-1 font-bold text-blue-700">
                        {nextNobar.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Explore Card */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
              Jelajahi Madridistas Indonesia
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Pilih halaman yang ingin dikunjungi untuk melihat informasi squad,
              nobar, merchandise, dan demo integrasi API.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <button
                key={feature.title}
                onClick={() => setActivePage(feature.page)}
                className="group overflow-hidden rounded-[2rem] bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">
                      {feature.title}
                    </h3>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home