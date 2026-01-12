import { Link, useLocation, useSearchParams } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const [params] = useSearchParams();

  const category = location.pathname.split("/")[2];
  const sub = params.get("sub");
  const type = params.get("type");

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 text-sm"
    >
      <ol className="flex flex-wrap items-center gap-2">

        {/* Home */}
        <li>
          <Link
            to="/"
            className="text-gray-500 transition-colors hover:text-blue-600"
          >
            Home
          </Link>
        </li>

        {/* Category */}
        {category && (
          <>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to={`/category/${category}`}
                className={`capitalize transition-colors ${
                  !sub && !type
                    ? "font-semibold text-gray-900"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {category}
              </Link>
            </li>
          </>
        )}

        {/* Sub Category */}
        {sub && (
          <>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to={`/category/${category}?sub=${sub}`}
                className={`capitalize transition-colors ${
                  !type
                    ? "font-semibold text-gray-900"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {sub}
              </Link>
            </li>
          </>
        )}

        {/* Type / Final */}
        {type && (
          <>
            <li className="text-gray-400">/</li>
            <li className="font-semibold text-gray-900 capitalize">
              {type}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
