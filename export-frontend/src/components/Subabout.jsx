import React from 'react'
import bgimage from "../assets/image/veg.jpg"

const Subabout = () => {
  return (
    <section className="bg-gray-100 py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-700">Who We Are</h2>
        <p className="text-gray-600 text-lg mt-4 font-semibold">
          At <span className='font-black'>Alspade</span>, we are passionate about connecting India's finest agricultural products with the world. 
          Committed to quality, sustainability, and excellence, we are a trusted name in agricultural exports.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img
            src={bgimage}
            alt="About Us"
            className="w-full h-60 object-cover rounded-lg shadow-lg"
     
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h3>
          <p className="text-gray-600 font-semibold mb-4">
            To bring India's rich agricultural heritage to global markets by delivering premium quality products sourced 
            directly from farmers who are the backbone of our success.
          </p>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h3>
          <p className="text-gray-600 font-semibold">
            To empower local farmers by creating sustainable opportunities and ensuring the world experiences 
            the best of India's agricultural produce.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Subabout
