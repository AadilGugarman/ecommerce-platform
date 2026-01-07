const OrderTimeline = ({ timeline }) => {
  return (
    <ul className="space-y-2">
      {timeline.map((t, i) => (
        <li key={i} className="text-sm">
          <strong>{t.status}</strong> — {t.date}
        </li>
      ))}
    </ul>
  );
};

export default OrderTimeline;
