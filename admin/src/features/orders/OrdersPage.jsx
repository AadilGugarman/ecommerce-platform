import { useState } from "react";
import { Pagination } from "@mui/material";
import { Button } from "@mui/material";

import { useOrders } from "./hooks/useOrders";

import OrderTable from "./components/OrderTable";
import OrderStats from "./components/OrderStats";
import OrderDetailsModal from "./components/OrderDetailsModal";
import CancelOrderModal from "./components/CancelOrderModal";
import ExportOrders from "./components/ExportOrders";

const OrdersPage = () => {
  const {
    orders,
    total,
    page,
    setPage,
    search,
    setSearch,
    status,
    setStatus,
    stats,

    selectedIds,
    setSelectedIds,

    updateOrderStatus,
    bulkUpdateStatus,
  } = useOrders();

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cancelOrder, setCancelOrder] = useState(null);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Orders</h2>

      {/* Stats */}
      <OrderStats stats={stats} />

      {/* Actions */}
      <div className="flex items-center gap-3">
        <ExportOrders orders={orders} />

        {selectedIds.length > 0 && (
          <Button
            variant="contained"
            color="success"
            onClick={() => bulkUpdateStatus("Delivered")}
          >
            Mark Delivered ({selectedIds.length})
          </Button>
        )}
      </div>

      {/* Table */}
      <OrderTable
        orders={orders}
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        onView={setSelectedOrder}
        onStatusChange={updateOrderStatus}
        onCancel={setCancelOrder}
      />

      {/* Pagination */}
      <Pagination
        count={Math.ceil(total / 5)}
        page={page}
        onChange={(_, p) => setPage(p)}
      />

      {/* View Modal */}
      <OrderDetailsModal
        open={!!selectedOrder}
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />

      {/* Cancel Modal */}
      <CancelOrderModal
        open={!!cancelOrder}
        onClose={() => setCancelOrder(null)}
        onConfirm={() => {
          updateOrderStatus(cancelOrder.id, "Cancelled");
          setCancelOrder(null);
        }}
      />
    </div>
  );
};

export default OrdersPage;
