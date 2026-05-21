import { useState } from "react";
import players from "../data/players";
import PlayerCard from "../components/PlayerCard";

function Squad() {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState("All");

  const filteredPlayers = players.filter((player) => {
    const matchName = player.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchPosition =
      position === "All" || player.position === position;

    return matchName && matchPosition;
  });

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Squad Real Madrid
        </h1>

        <p className="mt-3 text-slate-600">
          Cari pemain berdasarkan nama dan filter berdasarkan posisi.
        </p>

        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Cari nama pemain..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          />

          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          >
            <option value="All">Semua Posisi</option>
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Forward">Forward</option>
          </select>
        </form>

        {filteredPlayers.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl bg-white p-5 text-center shadow-md">
            <p className="font-semibold text-slate-900">
              Pemain tidak ditemukan
            </p>
            <p className="mt-2 text-slate-600">
              Coba gunakan kata kunci atau posisi lain.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Squad;
