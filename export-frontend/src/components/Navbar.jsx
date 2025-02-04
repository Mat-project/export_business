import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="flex items-center justify-between bg-green-600 text-white p-4">
        {/* Logo Section */}
        <div className="flex items-center font-semibold text-xl">
          <img src="" alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="font-bold">Blue Magicc</h1>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex space-x-7 font-semibold">
          <Link
            className="hover:text-white hover:font-bold transition duration-500 ease-in-out transform hover:scale-110"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-white hover:font-bold transition duration-500 ease-in-out transform hover:scale-110"
            to="/products"
          >
            Products
          </Link>
          <Link
            className="hover:text-white hover:font-bold transition duration-500 ease-in-out transform hover:scale-110"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="hover:text-white hover:font-bold transition duration-500 ease-in-out transform hover:scale-110"
            to="/certificate"
          >
            Certificate
          </Link>
          <Link
            className="hover:text-white hover:font-bold transition duration-500 ease-in-out transform hover:scale-110"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>

        {/* "Get a Quote" Button for Larger Screens */}
        <div className="hidden md:flex">
          <button className="bg-blue-600 p-2 rounded-md font-semibold hover:bg-blue-700">
            <Link to="/get-a-quote">Get a quote</Link>
          </button>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-600 text-white transform transition-transform duration-500 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white hover:text-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col space-y-6 mt-16 p-4 font-medium">
          <Link
            onClick={toggleSidebar}
            className="hover:text-gray-300 transition duration-300 ease-in-out"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={toggleSidebar}
            className="hover:text-gray-300 transition duration-300 ease-in-out"
            to="/products"
          >
            Products
          </Link>
          <Link
            onClick={toggleSidebar}
            className="hover:text-gray-300 transition duration-300 ease-in-out"
            to="/about"
          >
            About Us
          </Link>
          <Link
            onClick={toggleSidebar}
            className="hover:text-gray-300 transition duration-300 ease-in-out"
            to="/certificate"
          >
            Certificate
          </Link>
          <Link
            onClick={toggleSidebar}
            className="hover:text-gray-300 transition duration-300 ease-in-out"
            to="/contact"
          >
            Contact Us
          </Link>
          <Link
            onClick={toggleSidebar}
            className="bg-blue-600 px-4 py-2 rounded-md text-center hover:bg-blue-700 transition duration-300 ease-in-out"
            to="/get-a-quote"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
