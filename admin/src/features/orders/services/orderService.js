// services/orderService.js

export const fetchOrders = async () => {
  // TODO: Replace with API call
  return [
    {
      id: "ORD-1001",
      customerName: "Aman Sharma",
      email: "aman@gmail.com",
      total: 2499,
      status: "Pending",
      createdAt: "2025-01-10",
      items: [
        { name: "Wireless Mouse", qty: 1, price: 999 },
        { name: "Keyboard", qty: 1, price: 1500 },
      ],
    },
    {
      id: "ORD-1002",
      customerName: "Sara Khan",
      email: "sara@gmail.com",
      total: 3999,
      status: "Shipped",
      createdAt: "2025-01-11",
      items: [{ name: "Headphones", qty: 1, price: 3999 }],
    },
  ];
};

export const updateOrderStatusApi = async (orderId, status) => {
  // TODO: API call later
  return { success: true };
};

export const exportOrdersToCSV = (orders) => {
  const headers = ["Order ID", "Customer", "Total", "Status", "Payment"];
  const rows = orders.map(o =>
    [o.id, o.customerName, o.total, o.status, o.paymentStatus].join(",")
  );

  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "orders.csv";
  a.click();
};
