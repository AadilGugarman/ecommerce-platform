import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Edit, Delete, History } from "@mui/icons-material";

import UserRoleBadge from "./UserRoleBadge";
import UserStatusToggle from "./UserStatusToggle";
import { ROLE_PERMISSIONS } from "../services/userService";

/* permission helper */
const can = (role, permission) =>
  ROLE_PERMISSIONS[role]?.includes(permission);

const UsersTable = ({
  users,
  currentUser,

  /* bulk */
  selectedIds = [],
  setSelectedIds,

  /* actions */
  onEdit,
  onDelete,
  onToggleStatus,
  onViewActivity,
}) => {
  const toggle = (id) => {
    if (!setSelectedIds) return;

    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (!setSelectedIds) return;

    setSelectedIds(
      selectedIds.length === users.length
        ? []
        : users.map((u) => u.id)
    );
  };

  return (
    <div className="bg-white shadow-sm rounded-xl">
      <Table>
        <TableHead className="bg-slate-50">
          <TableRow>
            {setSelectedIds && (
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedIds.length > 0 &&
                    selectedIds.length < users.length
                  }
                  checked={
                    users.length > 0 &&
                    selectedIds.length === users.length
                  }
                  onChange={toggleAll}
                />
              </TableCell>
            )}

            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((u) => (
            <TableRow key={u.id} hover>
              {setSelectedIds && (
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds.includes(u.id)}
                    onChange={() => toggle(u.id)}
                  />
                </TableCell>
              )}

              <TableCell>{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>

              <TableCell>
                <UserRoleBadge role={u.role} />
              </TableCell>

              <TableCell>
                {can(currentUser.role, "toggle_status") ? (
                  <UserStatusToggle
                    status={u.status}
                    onToggle={() => onToggleStatus(u.id)}
                  />
                ) : (
                  u.status
                )}
              </TableCell>

              <TableCell align="right">
                {can(currentUser.role, "edit") && (
                  <IconButton onClick={() => onEdit(u)}>
                    <Edit />
                  </IconButton>
                )}

                {can(currentUser.role, "delete") && (
                  <IconButton
                    color="error"
                    onClick={() => onDelete(u.id)}
                  >
                    <Delete />
                  </IconButton>
                )}

                {can(currentUser.role, "view_logs") && (
                  <IconButton onClick={() => onViewActivity(u)}>
                    <History />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}

          {users.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={setSelectedIds ? 6 : 5}
                align="center"
              >
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
