const UserActivityTimeline = ({ user, logs, onClose }) => {
  if (!user) return null;

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h3 className="mb-2 font-semibold">
        Activity – {user.name}
      </h3>

      <ul className="space-y-2 text-sm">
        {logs
          .filter((l) => l.userId === user.id)
          .map((l) => (
            <li key={l.id}>
              <strong>{l.action}</strong>
              <div className="text-gray-500">
                {l.date} by {l.performedBy}
              </div>
            </li>
          ))}
      </ul>

      <button onClick={onClose} className="mt-3 text-blue-600">
        Close
      </button>
    </div>
  );
};

export default UserActivityTimeline;
