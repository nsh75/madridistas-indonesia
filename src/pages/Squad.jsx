import { useState } from "react";
import players from "../data/players";
import PlayerCard from "../components/PlayerCard";

function Squad() {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState("All");

const filteredPlayers = players.filter((player) => {
  const matchSearch =
    player.name.toLowerCase().includes(search.toLowerCase()) ||
    player.number.toString().includes(search);

  const matchPosition =
    position === "All" || player.position === position;

  return matchSearch && matchPosition;
});

    <section className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Real Madrid Squad
          </h1>

          <p className="mt-3 text-slate-600">
            Cari pemain berdasarkan nama dan filter posisi pemain.
          </p>
        </div>

        {/* Form Search & Filter */}
        <form className="mt-10 grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Cari nama pemain..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          />

          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
          >
            <option value="All">Semua Posisi</option>
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Forward">Forward</option>
            <option value="Coach">Coach</option>
          </select>
        </form>

        {/* Card Players */}
        {filteredPlayers.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-white p-5 shadow-md text-center">
            <h2 className="text-xl font-bold text-slate-900">
              Pemain Tidak Ditemukan
            </h2>

            <p className="mt-2 text-slate-600">
              Coba gunakan kata kunci atau filter lain.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Squad;
