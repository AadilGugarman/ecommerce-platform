import AdminTable from "../components/tables/AdminTable";

const Orders = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <section>
        <h1 className="text-2xl font-semibold text-gray-800">
          Orders
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Track and manage customer orders
        </p>
      </section>

      {/* Orders Table */}
      <AdminTable
        title="Recent Orders"
        columns={[
          "Order ID",
          "Customer",
          "Payment",
          "Status",
          "Total",
          "Date",
          "Actions",
        ]}
      />
    </div>
  );
};

export default Orders;
