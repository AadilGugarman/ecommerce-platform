import { useActivityLogs } from "./hooks/useActivityLogs";

const ActivityLogsPage = () => {
  const { logs } = useActivityLogs();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Activity Logs
      </h1>

      <ul className="space-y-2">
        {logs.map((log) => (
          <li key={log.id} className="card">
            {log.action} — {log.by}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLogsPage;
