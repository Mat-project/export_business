import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api"; // API service
import Spinner from "./Spinners"; // Import the Spinner component
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const Products = ({ addToInquiry }) => {
  const [products, setProducts] = useState([]); // Product list from API
  const [loading, setLoading] = useState(true); // Loading state
  const [filter, setFilter] = useState("All"); // Filter state
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Fetch data using API
        setProducts(data);
        setLoading(false); // Turn off loading when data is ready
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Turn off loading even if there's an error
      }
    };

    fetchProducts();

    // Initialize AOS
    AOS.init();
  }, []);

  // Filtered products based on category and search query
  const filteredProducts = products
    .filter((product) => filter === "All" || product.category === filter)
    .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Products</h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-700 mb-4 md:mb-0"
          />

          {/* Filter Buttons */}
          <div className="flex space-x-4">
            {["All", "Grains", "Fruits", "Others"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded ${
                  filter === category ? "bg-green-700 text-white" : "bg-gray-200"
                } hover:bg-green-500`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Spinner for Loading */}
        {loading ? (
          <Spinner /> // Show spinner while products are being loaded
        ) : filteredProducts.length === 0 ? (
          <div className="text-center text-gray-600 mt-8">
            <p className="text-xl font-semibold">No products match your search criteria.</p>
            <p>Try adjusting the filters or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div
                  className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow"
                  data-aos="fade-up" // AOS fade-up animation
                  data-aos-duration="1000"
                >
                  <img
                    src={`http://127.0.0.1:8000/${product.image}`}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">Category: {product.category}</p>
                  <p className="text-gray-600 mb-4">Price: {product.price}</p>
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded font-medium hover:bg-orange-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent link navigation on button click
                      addToInquiry(product);
                    }}
                  >
                    Add to Inquiry
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
