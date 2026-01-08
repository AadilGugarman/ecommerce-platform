import { useReports } from "./hooks/useReports";

const ReportsPage = () => {
  const { stats, loading } = useReports();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Reports</h1>

      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          <div className="card">Revenue: ₹{stats.revenue}</div>
          <div className="card">Orders: {stats.orders}</div>
          <div className="card">Users: {stats.users}</div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
