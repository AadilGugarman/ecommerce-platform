// src/components/tables/AdminTable.jsx
import { Table, TableHead, TableRow, TableCell, TableBody, Chip } from "@mui/material";
import Loader from "../common/Loader";

const AdminTable = ({ title, columns, data, loading }) => {
  return (
    <div className="bg-white border shadow-sm rounded-xl">
      <div className="px-6 py-4 font-semibold">{title}</div>

      {loading ? (
        <Loader />
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(col => (
                <TableCell key={col.key}>{col.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                {columns.map(col => (
                  <TableCell key={col.key}>
                    {col.type === "badge" ? (
                      <Chip
                        label={row[col.key]}
                        color={row[col.key] === "active" ? "success" : "default"}
                        size="small"
                      />
                    ) : col.format ? (
                      col.format(row[col.key])
                    ) : (
                      row[col.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AdminTable;
