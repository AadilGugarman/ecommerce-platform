import { Link, useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Breadcrumbs = () => {
  const location = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const category = location.pathname.split("/")[2];
  const sub = params.get("sub");
  const type = params.get("type");

  /* ================= MOBILE CONDENSED ================= */
  if (window.innerWidth < 768) {
    const current = type || sub || category;

    return (
      <div className="flex items-center gap-2 mb-3 md:hidden">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-black"
        >
          <IoChevronBack className="text-lg" />
          Back
        </button>

        {current && (
          <span className="text-sm font-semibold text-gray-900 capitalize">
            / {current}
          </span>
        )}
      </div>
    );
  }

  /* ================= DESKTOP FULL ================= */
  return (
    <nav aria-label="Breadcrumb" className="hidden mb-4 md:block">
      <ol className="flex flex-wrap items-center gap-2 text-sm">

        {/* HOME */}
        <li>
          <Link
            to="/"
            className="px-3 py-1 text-gray-600 transition-all bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-900"
          >
            Home
          </Link>
        </li>

        {category && (
          <>
            <span className="text-gray-400">›</span>
            <li>
              <Link
                to={`/category/${category}`}
                className={`px-3 py-1 rounded-full transition-all capitalize ${
                  !sub && !type
                    ? "bg-gray-900 text-white font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {category}
              </Link>
            </li>
          </>
        )}

        {sub && (
          <>
            <span className="text-gray-400">›</span>
            <li>
              <Link
                to={`/category/${category}?sub=${sub}`}
                className={`px-3 py-1 rounded-full transition-all capitalize ${
                  !type
                    ? "bg-gray-900 text-white font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {sub}
              </Link>
            </li>
          </>
        )}

        {type && (
          <>
            <span className="text-gray-400">›</span>
            <li>
              <span
                className="px-3 py-1 font-semibold text-white capitalize bg-gray-900 rounded-full"
              >
                {type}
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
