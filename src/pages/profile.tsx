import React, { useEffect } from "react";
import { getSession, signOut } from "next-auth/react";

const Profile = ({ user, orders }) => {
  useEffect(() => {
    const logIntoSnipcart = async () => {
      if (user?.email) {
        console.log("Logging into Snipcart with:", user.email);

        // Wait for Snipcart to be ready
        if (typeof window.Snipcart === "undefined") {
          document.addEventListener("snipcart.ready", () => {
            window.Snipcart.api.customer.signin({
              email: user.email,
              firstName: user.name.split(" ")[0],
              lastName: user.name.split(" ")[1] || "",
            });
          });
        } else {
          window.Snipcart.api.customer.signin({
            email: user.email,
            firstName: user.name.split(" ")[0],
            lastName: user.name.split(" ")[1] || "",
          });
        }
      }
    };

    logIntoSnipcart();
  }, [user]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Profile</h1>
        <p className="text-white text-center">User data is not available.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-white">User Information</h2>
        <p className="text-white mt-2">Name: {user.name}</p>
        <p className="text-white">Email: {user.email}</p>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Orders</h2>
        {orders.length > 0 ? (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li key={order.token} className="bg-gray-700 p-4 rounded-lg">
                <p className="text-white">
                  <strong>Order ID:</strong> {order.token}
                </p>
                <p className="text-white">
                  <strong>Tracking Number:</strong>{" "}
                  {order.trackingNumber || "N/A"}
                </p>
                <p className="text-white">
                  <strong>Status:</strong> {order.status}
                </p>
                <p className="text-white">
                  <strong>Total:</strong> ${order.finalGrandTotal.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">You have no recent orders.</p>
        )}
      </div>

      {/* Sign Out Button */}
      <div className="mt-8">
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log("Snipcart Secret API Key:", process.env.SNIPCART_SECRET_API_KEY);
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  try {
    // Fetch user's orders from Snipcart API
    const res = await fetch("https://app.snipcart.com/api/orders", {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.SNIPCART_SECRET_API_KEY + ":"
        ).toString("base64")}`,
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch orders:", res.status, res.statusText);
      return {
        props: {
          user: session.user,
          orders: [], // Return an empty array if the API call fails
        },
      };
    }

    const allOrders = await res.json().catch(() => ({ items: [] }));

    // Filter orders by the user's email
    const userOrders = allOrders.items.filter(
      (order) => order.email === session.user.email
    );

    return {
      props: {
        user: session.user,
        orders: userOrders || [], // Pass orders to the page
      },
    };
  } catch (error) {
    console.error("Error fetching orders:", error);
    return {
      props: {
        user: session.user,
        orders: [], // Return an empty array if an error occurs
      },
    };
  }
}

export default Profile;
