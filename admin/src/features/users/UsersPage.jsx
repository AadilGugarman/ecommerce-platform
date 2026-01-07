import { useState } from "react";
import { Button } from "@mui/material";

import { useUsers } from "./hooks/useUsers";

import UsersTable from "./components/UsersTable";
import UserFormModal from "./components/UserFormModal";
import UserFilters from "./components/UserFilters";
import BulkUserActions from "./components/BulkUserActions";
import UserActivityTimeline from "./components/UserActivityTimeline";
import AuditLogTable from "./components/AuditLogTable";

const UsersPage = () => {
  const {
    // data
    users,
    auditLogs,
    activityUser,
    setActivityUser,
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

    // actions
    addUser,
    updateUser,
    deleteUser,
    toggleStatus,
    bulkUpdateStatus,
    bulkDelete,
  } = useUsers();

  // modal state
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Users</h2>

        {currentUser.role === "Admin" && (
          <Button
            variant="contained"
            onClick={() => {
              setEditing(null);
              setOpen(true);
            }}
          >
            Add User
          </Button>
        )}
      </div>

      {/* Filters */}
      <UserFilters
        search={search}
        setSearch={setSearch}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Bulk Actions */}
      <BulkUserActions
        selectedCount={selectedIds.length}
        onActivate={() => bulkUpdateStatus("Active")}
        onBlock={() => bulkUpdateStatus("Blocked")}
        onDelete={bulkDelete}
      />

      {/* Users Table */}
      <UsersTable
        users={users}
        currentUser={currentUser}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        onEdit={(u) => {
          setEditing(u);
          setOpen(true);
        }}
        onDelete={deleteUser}
        onToggleStatus={toggleStatus}
        onViewActivity={setActivityUser}
      />

      {/* User Form */}
      <UserFormModal
        open={open}
        initialData={editing}
        onClose={() => setOpen(false)}
        onSubmit={(data) => {
          editing
            ? updateUser(editing.id, data)
            : addUser(data);
          setOpen(false);
        }}
      />

      {/* Activity Timeline */}
      <UserActivityTimeline
        user={activityUser}
        logs={auditLogs}
        onClose={() => setActivityUser(null)}
      />

      {/* Audit Logs (Admin only) */}
      {currentUser.role === "Admin" && (
        <AuditLogTable logs={auditLogs} />
      )}
    </div>
  );
};

export default UsersPage;
