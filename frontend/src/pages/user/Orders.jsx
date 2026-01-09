import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // 🔥 BACKEND READY (mock data)
    setOrders([
      {
        id: "ORD123",
        date: "2024-06-01",
        total: 2499,
        status: "Delivered",
      },
      {
        id: "ORD124",
        date: "2024-06-10",
        total: 1299,
        status: "Shipped",
      },
    ]);
  }, []);

  return (
    <div className="container max-w-5xl py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm"
            >
              <div>
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>

              <div className="text-right">
                <p className="font-semibold">₹{order.total}</p>
                <p className="text-sm text-gray-600">{order.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
