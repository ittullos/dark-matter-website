import * as React from "react";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <div className="w-full">
      <Hero imageSrc="/dm-hero-image.jpg" imageAlt="Hero Image" />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p>Welcome to our website!</p>
      </div>
    </div>
  );
};

export default IndexPage;
