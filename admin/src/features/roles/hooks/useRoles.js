import { useEffect, useState } from "react";
import { fetchRolesApi } from "../services/rolesService";

export const useRoles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRolesApi().then(setRoles);
  }, []);

  return { roles };
};
