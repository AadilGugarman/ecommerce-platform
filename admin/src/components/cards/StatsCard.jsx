const StatsCard = ({ title, value, icon, color }) => (
  <div className={`rounded-xl p-5 shadow-sm bg-gradient-to-br ${color} text-white`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {icon}
    </div>
  </div>
);

export default StatsCard;
