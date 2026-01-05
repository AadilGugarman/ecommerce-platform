// src/components/charts/ChartSection.jsx
const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="p-6 bg-white border shadow-sm rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">
          Sales Overview
        </h3>
        <div className="flex items-center justify-center h-64 font-medium text-indigo-500 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100">
          Sales Chart Placeholder
        </div>
      </div>

      <div className="p-6 bg-white border shadow-sm rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">
          Orders by Month
        </h3>
        <div className="flex items-center justify-center h-64 font-medium rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 text-emerald-600">
          Orders Chart Placeholder
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
