import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos'; // Import AOS for animation
import 'aos/dist/aos.css'; // Import AOS styles
import bgimage from "../assets/bg-image/certifiBG.jpg"
import { Link } from 'react-router-dom';

const Certification = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[500px] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bgimage})` }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Certifications</h1>
          <p className="text-xl sm:text-2xl font-medium mb-8">
            We are committed to providing high-quality, sustainable agricultural products with the necessary certifications to ensure the highest standards in the global market.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700">Key Certifications</h2>
            <p className="text-gray-600 text-lg mt-4 font-semibold">
              Our agricultural products are backed by internationally recognized certifications that guarantee quality, safety, and sustainability.
            </p>
          </div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification 1 */}
            <div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Organic Certification"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Organic Certification</h3>
              <p className="text-gray-600 mb-4">
                Our products are certified organic, ensuring they are free from synthetic pesticides and fertilizers.
              </p>
            </div>

            {/* Certification 2 */}
            <div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Global GAP Certification"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Global GAP Certification</h3>
              <p className="text-gray-600 mb-4">
                Our products adhere to the highest global agricultural practices as per the Global GAP standard.
              </p>
            </div>

            {/* Certification 3 */}
            <div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Food Safety Certification"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Food Safety Certification</h3>
              <p className="text-gray-600 mb-4">
                We follow stringent food safety practices to ensure our products are safe for consumption worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certification;
