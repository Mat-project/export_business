import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Subproduct = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700">Our Products</h1>
        <p className="text-lg text-gray-600 mt-4">Explore our range of premium agricultural products sourced from India's finest farms.</p>
      </div>
      <div className="flex justify-center items-center flex-wrap mt-10 gap-10">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="text-center mt-10">
        <Link 
          to="/products"
          className="inline-block px-6 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-all"
        >
          See More
        </Link>
      </div>
    </section>
  )
}

export default Subproduct
