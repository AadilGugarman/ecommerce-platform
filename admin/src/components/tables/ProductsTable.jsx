import { useMemo, useState, useEffect } from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Pagination,
} from "@mui/material";
import { Edit, Delete, Star } from "@mui/icons-material";

import { fetchProducts } from "../../features/products/services/productService";


const PAGE_SIZE = 5;

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  // load products (mock / future API)
  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  // filter
  const filtered = useMemo(() => {
    return products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search, category]);

  // pagination
  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return (
    <section className="p-4 mt-6 bg-white shadow-sm rounded-xl">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <FormControl size="small" className="min-w-[150px]">
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Accessories">Accessories</MenuItem>
          </Select>
        </FormControl>

        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg flex-1 min-w-[200px]"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Table */}
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
            {paginated.map((p) => (
              <TableRow key={p.id} hover>
                <TableCell className="flex items-center gap-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 rounded-lg"
                  />
                  {p.name}
                </TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>₹{p.price}</TableCell>
                <TableCell>{p.sales}</TableCell>
                <TableCell>{p.stock}</TableCell>
                <TableCell>
                  <div className="flex text-yellow-400">
                    {[...Array(p.rating)].map((_, i) => (
                      <Star key={i} fontSize="small" />
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

            {paginated.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No products found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <Pagination
          count={Math.ceil(filtered.length / PAGE_SIZE)}
          page={page}
          onChange={(_, p) => setPage(p)}
        />
      </div>
    </section>
  );
};

export default ProductsTable;
