import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import {
  fashionProducts,
  electronicsProducts,
  beautyProducts,
} from "../../data/dummyData";
import { getFilteredProducts } from "../../services/productService";

const SearchResults = () => {
  const [params] = useSearchParams();

  const allProducts = [
    ...fashionProducts,
    ...electronicsProducts,
    ...beautyProducts,
  ];

  const filters = {
    q: params.get("q"),
    brands: params.get("brand")?.split(",") || [],
    rating: params.get("rating"),
    stock: params.get("stock"),
    price: params.get("price")
      ? params.get("price").split("-").map(Number)
      : null,
    sort: params.get("sort"),
  };

  const results = useMemo(
    () => getFilteredProducts(allProducts, filters),
    [params.toString()]
  );

  return (
    <div className="container py-6">
      <h1 className="mb-4 text-xl font-semibold">
        Search results for "{filters.q}"
      </h1>

      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {results.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg hover:shadow"
            >
              <img src={item.image} alt={item.title} />
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
