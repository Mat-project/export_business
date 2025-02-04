import React from 'react'
import riceImage from '../assets/image/raw rice.jpg';
import { Link } from 'react-router-dom'; // Replace with actual images

const Cards = () => {
  return (
    <div className="w-72 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img
          src={riceImage}
          alt="Product Image"
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 left-4 bg-green-600 text-white py-1 px-4 rounded-lg">
          <h2 className="font-bold text-lg">Rice</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-base mb-4">
          Aged to perfection, our premium basmati rice brings an aromatic and flavorful experience to every meal.
        </p>
        <Link
          to="/product-details" // Replace with actual product details link
          className="inline-block px-6 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Cards
