import NobarCard from "../components/NobarCard";
import nobarData from "../data/nobar";

const Nobar = () => {
  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12">
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Jadwal Nobar Madridistas Indonesia
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Temukan jadwal nobar Real Madrid bersama komunitas
            Madridistas Indonesia di berbagai kota.
          </p>
        </div>

        <form className="mb-10 flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Cari kota atau pertandingan..."
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-700"
          />

          <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-700">
            <option>Semua Kota</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Surabaya</option>
            <option>Jayapura</option>
            <option>Ternate</option>
            <option>Jogjakarta</option>
            <option>Ambon</option>
          </select>
        </form>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nobarData.map((item) => (
            <NobarCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nobar;
