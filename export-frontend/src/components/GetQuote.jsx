import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GetQuote = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Request a Quote
        </h1>
        <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded px-3 py-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border-gray-300 rounded px-3 py-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded px-3 py-2"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Quantity
            </label>
            <input
              type="number"
              className="w-full border-gray-300 rounded px-3 py-2"
              placeholder="Quantity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Additional Notes
            </label>
            <textarea
              className="w-full border-gray-300 rounded px-3 py-2"
              placeholder="Any specific requirements..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default GetQuote;
