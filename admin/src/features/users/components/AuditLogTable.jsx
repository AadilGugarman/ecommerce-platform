const AuditLogTable = ({ logs }) => {
  return (
    <div className="p-4 bg-white shadow-sm rounded-xl">
      <h3 className="mb-3 font-semibold">Audit Logs</h3>

      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Action</th>
            <th>User ID</th>
            <th>Performed By</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((l) => (
            <tr key={l.id}>
              <td>{l.action}</td>
              <td>{l.userId}</td>
              <td>{l.performedBy}</td>
              <td>{l.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogTable;
