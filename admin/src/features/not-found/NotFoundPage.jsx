import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-slate-100">
      <h1 className="font-bold text-gray-800 text-7xl">
        404
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        Page not found
      </p>

      <p className="max-w-md mt-2 text-gray-500">
        The page you are looking for does not exist or has been moved.
      </p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Go Back
        </button>

        <button
          onClick={() => navigate("/admin")}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
