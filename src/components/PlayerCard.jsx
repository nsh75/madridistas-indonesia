function PlayerCard({ player }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
     <img
  src={player.image}
  alt={player.name}
  className="h-72 w-full rounded-xl bg-slate-50 object-contain"
/>

      <div className="mt-4">
        <p className="text-sm font-semibold text-blue-700">
          #{player.number} • {player.position}
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          {player.name}
        </h3>

        <p className="mt-1 text-slate-600">
          Negara: {player.country}
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
