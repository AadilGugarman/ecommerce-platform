import { useState, Fragment } from "react";
import { Edit, Delete } from "@mui/icons-material";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Button,
} from "@mui/material";

import { useCategories } from "./hooks/useCategories";
import { buildCategoryTree } from "./services/categoryService";
import CategoryForm from "./components/CategoryForm";

const renderRows = (nodes, level, onEdit, onDelete) =>
  nodes.map((cat) => (
    <Fragment key={cat.id}>
      <TableRow hover>
        <TableCell>
          <span style={{ paddingLeft: level * 24 }}>
            {cat.name}
          </span>
        </TableCell>
        <TableCell>{cat.slug}</TableCell>
        <TableCell align="right">
          <Edit
            className="mr-3 text-indigo-600 cursor-pointer"
            onClick={() => onEdit(cat)}
          />
          <Delete
            className="text-red-500 cursor-pointer"
            onClick={() => onDelete(cat.id)}
          />
        </TableCell>
      </TableRow>

      {cat.children?.length > 0 &&
        renderRows(cat.children, level + 1, onEdit, onDelete)}
    </Fragment>
  ));

const CategoriesPage = () => {
  const { categories, addCategory, updateCategory, deleteCategory } =
    useCategories();

  const tree = buildCategoryTree(categories);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Button
          variant="contained"
          onClick={() => {
            setEditing(null);
            setOpen(true);
          }}
        >
          Add Category
        </Button>
      </div>

      <div className="bg-white shadow-sm rounded-xl">
        <TableContainer>
          <Table>
            <TableHead className="bg-slate-50">
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Slug</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {renderRows(tree, 0, (cat) => {
                setEditing(cat);
                setOpen(true);
              }, deleteCategory)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <CategoryForm
        open={open}
        onClose={() => setOpen(false)}
        initialData={editing}
        categories={categories}
        onSubmit={(data) =>
          editing
            ? updateCategory(editing.id, data)
            : addCategory(data)
        }
      />
    </div>
  );
};

export default CategoriesPage;
