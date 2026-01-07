import { useEffect, useMemo, useState } from "react";
import { fetchUsers, getCurrentUser } from "../services/userService";

export const useUsers = () => {
  // current logged-in user
  const currentUser = getCurrentUser();

  // core state
  const [users, setUsers] = useState([]);

  // ui / filters
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // selection & activity
  const [selectedIds, setSelectedIds] = useState([]);
  const [activityUser, setActivityUser] = useState(null);

  // audit logs
  const [auditLogs, setAuditLogs] = useState([]);

  // fetch users
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  /* -------------------- AUDIT LOG -------------------- */
  const log = (action, userId) => {
    setAuditLogs((prev) => [
      {
        id: Date.now(),
        action,
        userId,
        performedBy: currentUser?.name,
        date: new Date().toLocaleString(),
      },
      ...prev,
    ]);
  };

  /* -------------------- CRUD -------------------- */
  const addUser = (data) => {
    const user = { id: Date.now(), ...data };
    setUsers((p) => [...p, user]);
    log("User Created", user.id);
  };

  const updateUser = (id, data) => {
    setUsers((p) =>
      p.map((u) => (u.id === id ? { ...u, ...data } : u))
    );
    log("User Updated", id);
  };

  const deleteUser = (id) => {
    setUsers((p) => p.filter((u) => u.id !== id));
    log("User Deleted", id);
  };

  /* -------------------- STATUS -------------------- */
  const toggleStatus = (id) => {
    setUsers((p) =>
      p.map((u) =>
        u.id === id
          ? {
              ...u,
              status: u.status === "Active" ? "Blocked" : "Active",
            }
          : u
      )
    );
    log("User Status Changed", id);
  };

  /* -------------------- BULK ACTIONS -------------------- */
  const bulkUpdateStatus = (status) => {
    setUsers((p) =>
      p.map((u) =>
        selectedIds.includes(u.id)
          ? { ...u, status }
          : u
      )
    );
    selectedIds.forEach((id) =>
      log(`User Status Changed (${status})`, id)
    );
    setSelectedIds([]);
  };

  const bulkDelete = () => {
    setUsers((p) =>
      p.filter((u) => !selectedIds.includes(u.id))
    );
    selectedIds.forEach((id) => log("User Deleted", id));
    setSelectedIds([]);
  };

  /* -------------------- FILTERED USERS -------------------- */
  const filteredUsers = useMemo(() => {
    return users
      .filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      )
      .filter((u) =>
        roleFilter === "All" ? true : u.role === roleFilter
      )
      .filter((u) =>
        statusFilter === "All" ? true : u.status === statusFilter
      );
  }, [users, search, roleFilter, statusFilter]);

  return {
    // data
    users: filteredUsers,
    auditLogs,
    activityUser,
    currentUser,

    // filters
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,

    // selection
    selectedIds,
    setSelectedIds,
    setActivityUser,

    // actions
    addUser,
    updateUser,
    deleteUser,
    toggleStatus,
    bulkUpdateStatus,
    bulkDelete,
  };
};
