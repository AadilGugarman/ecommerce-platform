import { useEffect, useMemo, useState } from "react";
import {
  fetchOrders,
  updateOrderStatusApi,
} from "../services/orderService";

const PAGE_SIZE = 5;

export const useOrders = () => {
  // core data
  const [orders, setOrders] = useState([]);

  // UI states
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);

  // selection for bulk actions
  const [selectedIds, setSelectedIds] = useState([]);

  // fetch orders
  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  // single order status update
  const updateOrderStatus = async (orderId, newStatus) => {
    await updateOrderStatusApi(orderId, newStatus);
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: newStatus } : o
      )
    );
  };

  // bulk status update
  const bulkUpdateStatus = async (newStatus) => {
    await Promise.all(
      selectedIds.map((id) =>
        updateOrderStatusApi(id, newStatus)
      )
    );

    setOrders((prev) =>
      prev.map((o) =>
        selectedIds.includes(o.id)
          ? { ...o, status: newStatus }
          : o
      )
    );

    setSelectedIds([]);
  };

  // filtering
  const filteredOrders = useMemo(() => {
    return orders
      .filter(
        (o) =>
          o.customerName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          o.id.toLowerCase().includes(search.toLowerCase())
      )
      .filter((o) =>
        status === "All" ? true : o.status === status
      );
  }, [orders, search, status]);

  // pagination
  const paginatedOrders = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredOrders.slice(start, start + PAGE_SIZE);
  }, [filteredOrders, page]);

  // stats
  const stats = useMemo(
    () => ({
      total: orders.length,
      pending: orders.filter((o) => o.status === "Pending").length,
      shipped: orders.filter((o) => o.status === "Shipped").length,
      delivered: orders.filter((o) => o.status === "Delivered").length,
    }),
    [orders]
  );

  return {
    // data
    orders: paginatedOrders,
    total: filteredOrders.length,

    // pagination
    page,
    setPage,

    // filters
    search,
    setSearch,
    status,
    setStatus,

    // selection
    selectedIds,
    setSelectedIds,

    // actions
    updateOrderStatus,
    bulkUpdateStatus,

    // stats
    stats,
  };
};
