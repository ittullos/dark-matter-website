import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock authentication check
    const isAuthenticated = true; // Replace with real auth logic
    if (!isAuthenticated) {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      // Fetch user data and orders
      setUser({ name: "John Doe", email: "john.doe@example.com" }); // Replace with real user data
      fetchOrders(); // Fetch orders from Snipcart API or backend
    }
  }, []);

  const fetchOrders = async () => {
    // Replace with real API call to fetch orders
    const mockOrders = [
      {
        id: "12345",
        date: "2025-04-20",
        status: "Shipped",
        tracking: "TRACK123",
        total: "$50.00",
      },
      {
        id: "67890",
        date: "2025-04-15",
        status: "Delivered",
        tracking: "TRACK456",
        total: "$30.00",
      },
    ];
    setOrders(mockOrders);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-white">Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-white">User Information</h2>
        <p className="text-white mt-2">Name: {user.name}</p>
        <p className="text-white">Email: {user.email}</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white">Recent Orders</h2>
        {orders.length > 0 ? (
          <ul className="mt-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="border-b border-gray-700 py-4 text-white"
              >
                <p>Order ID: {order.id}</p>
                <p>Date: {order.date}</p>
                <p>Status: {order.status}</p>
                <p>Tracking: {order.tracking}</p>
                <p>Total: {order.total}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white mt-4">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;