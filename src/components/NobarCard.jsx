const NobarCard = ({ item }) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={item.image}
        alt={item.title}
        className="mb-4 h-52 w-full rounded-xl object-cover"
      />

      <h3 className="text-xl font-bold text-slate-900">
        {item.title}
      </h3>

      <p className="mt-2 text-slate-600">
        📍 {item.place}
      </p>

      <p className="text-slate-600">
        📅 {item.date}
      </p>

      <p className="text-slate-600">
        ⏰ {item.time}
      </p>
    </div>
  );
};

export default NobarCard;
