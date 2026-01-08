import { useEffect, useState } from "react";
import { fetchReportsApi } from "../services/reportsService";

export const useReports = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReportsApi().then((res) => {
      setStats(res);
      setLoading(false);
    });
  }, []);

  return { stats, loading };
};
