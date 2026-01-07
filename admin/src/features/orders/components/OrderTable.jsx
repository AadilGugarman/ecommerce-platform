import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Checkbox,
  Button,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const OrderTable = ({
  orders,

  // filters
  search,
  setSearch,
  status,
  setStatus,

  // bulk selection
  selectedIds,
  setSelectedIds,

  // actions
  onView,
  onCancel,
}) => {
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === orders.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(orders.map((o) => o.id));
    }
  };

  return (
    <>
      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <TextField
          size="small"
          placeholder="Search order..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          size="small"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Shipped">Shipped</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
        </Select>
      </div>

      {/* Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={
                  selectedIds.length > 0 &&
                  selectedIds.length < orders.length
                }
                checked={
                  orders.length > 0 &&
                  selectedIds.length === orders.length
                }
                onChange={toggleSelectAll}
              />
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map((o) => (
            <TableRow key={o.id} hover>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedIds.includes(o.id)}
                  onChange={() => toggleSelect(o.id)}
                />
              </TableCell>
              <TableCell>{o.id}</TableCell>
              <TableCell>{o.customerName}</TableCell>
              <TableCell>{o.status}</TableCell>
              <TableCell align="right">
                <Button size="small" onClick={() => onView(o)}>
                  View
                </Button>

                {o.status !== "Cancelled" && (
                  <Button
                    size="small"
                    color="error"
                    onClick={() => onCancel(o)}
                  >
                    Cancel
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OrderTable;
