import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../Services/api";
import Spinner from "./Spinners"; // Import the spinner
import Navbar from "./Navbar";
import Footer from "./Footer";

const SingleProductPage = ({ addToInquiry }) => {
  const { id } = useParams(); // Get product ID from the URL
  const navigate = useNavigate(); // For navigation
  const [product, setProduct] = useState(null); // Product state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch product details from the backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Product not found or an error occurred.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Show spinner while loading
  if (loading) {
    return <Spinner />;
  }

  // Show error message if there's an issue
  if (error) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold text-red-500">{error}</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          Back to Products
        </button>
        <div className="flex flex-col md:flex-row items-start bg-white rounded shadow p-6">
          <img
            src={`http://127.0.0.1:8000/${product.image}`}
            alt={product.name}
            className="w-full md:w-1/2 h-64 object-cover rounded mb-6 md:mb-0"
          />
          <div className="md:ml-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">Category: {product.category}</p>
            <p className="text-gray-600 mb-4">Price: ${product.price}</p>
            <p className="font-serif mb-4 text-lg text-gray-700">{product.tagline}</p>
            <p className="font-serif mb-4">{product.description}</p>

            {/* Features Section */}
            {product.features && (
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Features</h2>
                <ul className="list-disc ml-5 text-gray-600">
                  {product.features.split("\n").map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits Section */}
            {product.benefits && (
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Benefits</h2>
                <ul className="list-disc ml-5 text-gray-600">
                  {product.benefits.split("\n").map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Packaging Information */}
            {product.packaging_info && (
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Packaging Information</h2>
                <p className="text-gray-600">{product.packaging_info}</p>
              </div>
            )}

            {/* Specifications Section (Commented Out for Future Implementation) */}
            {/*
            {product.specifications && (
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Specifications</h2>
                <ul className="list-disc ml-5 text-gray-600">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            */}

            <button
              className="bg-orange-500 text-white px-6 py-2 rounded font-medium hover:bg-orange-600"
              onClick={() => addToInquiry(product)}
            >
              Add to Inquiry
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
