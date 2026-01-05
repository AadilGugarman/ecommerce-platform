import {
  Select,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Pagination,
} from "@mui/material";
import { Edit, Delete, Star } from "@mui/icons-material";

const ProductsTable = () => (
  <section className="p-4 mt-6 bg-white shadow-sm rounded-xl">
    <div className="flex flex-wrap gap-4 mb-4">
      <FormControl size="small" className="min-w-[150px]">
        <InputLabel>Category</InputLabel>
        <Select label="Category" />
      </FormControl>

      <FormControl size="small" className="min-w-[150px]">
        <InputLabel>Sub Category</InputLabel>
        <Select label="Sub Category" />
      </FormControl>

      <FormControl size="small" className="min-w-[150px]">
        <InputLabel>Level 3</InputLabel>
        <Select label="Level 3" />
      </FormControl>

      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-2 border rounded-lg flex-1 min-w-[200px]"
      />
    </div>

    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {[1, 2, 3, 4].map((i) => (
            <TableRow key={i} hover>
              <TableCell className="flex items-center gap-3">
                <img src="https://via.placeholder.com/40" alt="" className="rounded-lg" />
                Product {i}
              </TableCell>
              <TableCell>Electronics</TableCell>
              <TableCell>$299</TableCell>
              <TableCell>120</TableCell>
              <TableCell>35</TableCell>
              <TableCell>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} fontSize="small" />
                  ))}
                </div>
              </TableCell>
              <TableCell align="right" className="space-x-2">
                <button className="text-indigo-600 hover:text-indigo-800">
                  <Edit fontSize="small" />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Delete fontSize="small" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <div className="flex justify-end mt-4">
      <Pagination count={5} color="primary" />
    </div>
  </section>
);

export default ProductsTable;
