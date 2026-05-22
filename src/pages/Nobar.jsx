import { useState } from "react";
import NobarCard from "../components/NobarCard";
import nobarData from "../data/nobar";

const Nobar = () => {
  const [selectedCity, setSelectedCity] =
    useState("Semua Kota");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredNobar = nobarData.filter((item) => {
  const search = searchTerm
    .toLowerCase()
    .trim();

  const place = item.place
    ?.toLowerCase()
    .trim();

  const title = item.title
    ?.toLowerCase()
    .trim();

  const selected = selectedCity
    .toLowerCase()
    .trim();

  const matchCity =
    selectedCity === "Semua Kota" ||
    place === selected;

  const matchSearch =
    title.includes(search) ||
    place.includes(search);

  return matchCity && matchSearch;
});

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Jadwal Nobar Madridistas Indonesia
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Temukan jadwal nobar Real Madrid bersama
            komunitas Madridistas Indonesia di berbagai kota.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mb-10 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md md:flex-row md:items-center"
        >
          <div className="w-full">
            <input
              type="text"
              placeholder="Cari kota atau pertandingan..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-700 focus:bg-white"
            />
          </div>

          <div className="w-full md:w-72">
            <select
              value={selectedCity}
              onChange={(e) =>
                setSelectedCity(e.target.value)
              }
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-700 focus:bg-white"
            >
              <option>Semua Kota</option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Surabaya</option>
              <option>Jayapura</option>
              <option>Ternate</option>
              <option>Yogyakarta</option>
              <option>Ambon</option>
            </select>
          </div>
        </form>

        {filteredNobar.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNobar.map((item) => (
              <NobarCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold text-slate-900">
              Nobar Tidak Ditemukan
            </h2>

            <p className="mt-3 text-slate-600">
              Tidak ada jadwal nobar untuk pencarian ini.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Nobar;
