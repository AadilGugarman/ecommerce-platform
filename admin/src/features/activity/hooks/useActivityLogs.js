import { useEffect, useState } from "react";
import { fetchActivityLogsApi } from "../services/activityService";

export const useActivityLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchActivityLogsApi().then(setLogs);
  }, []);

  return { logs };
};
