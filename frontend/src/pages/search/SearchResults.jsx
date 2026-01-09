import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    // 🔥 Backend-ready mock
    setResults([
      { id: 1, name: `Result for "${query}" 1`, price: 999 },
      { id: 2, name: `Result for "${query}" 2`, price: 1499 },
    ]);
  }, [query]);

  return (
    <div className="container py-6">
      <h1 className="mb-4 text-xl font-semibold">
        Search results for "{query}"
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
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
