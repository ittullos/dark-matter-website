import React from "react";
import Hero from "../components/Hero";

const ProducerShop = () => {
  const products = [
    {
      id: "mentoring-1-hour",
      name: "1 Hour Mentoring",
      price: 60,
      description: "One hour of personalized mentoring.",
    },
    {
      id: "mentoring-3-hour",
      name: "3 Hour Mentoring",
      price: 150,
      description: "Three hours of personalized mentoring.",
    },
    {
      id: "mastering-service",
      name: "Mastering Service",
      price: 30,
      description: "Professional mastering service for your track.",
    },
    {
      id: "mix-and-master",
      name: "Mix and Master",
      price: 80,
      description: "Professional mixing and mastering service for your track.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        imageSrc="/producer.jpg"
        imageAlt="Producer Shop Hero Image"
        title="PRODUCER SHOP"
        style={{ height: "60vh" }} // Limit Hero height to 60% of the viewport
      />

      {/* Producer Shop Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-lg text-gray-400 mb-6">
          Learn more about our mentoring programs and services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-700 rounded-lg p-4 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-400 text-sm mb-4">
                {product.description}
              </p>
              <p className="text-lg font-bold mb-4">${product.price}</p>
              <button
                className="snipcart-add-item bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                data-item-id={product.id}
                data-item-name={product.name}
                data-item-price={product.price}
                data-item-description={product.description}
                data-item-url="/producer_shop" // URL of the page where the product is listed
                data-item-custom="digital" // Custom identifier for digital products
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProducerShop;
