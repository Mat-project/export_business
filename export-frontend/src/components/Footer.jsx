import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS for animation
import 'aos/dist/aos.css'; // Import AOS styles

const Footer = () => {
  // Initialize AOS animation only once when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
    AOS.refresh(); // Refresh AOS in case there are any changes after initialization
  }, []); // Empty dependency array ensures this runs only once

  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap justify-between items-start">

          <div className="mb-6 md:mb-0 w-full md:w-1/4" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-green-500">Alspade</h2>
            <p className="text-sm mt-2">
              Bringing India's finest agricultural produce to the world with unmatched quality and care.
            </p>
          </div>

          <div className="mb-6 md:mb-0 w-full md:w-1/4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Contact Us</h3>
            <p>Address: 123 Green Lane, New Delhi, India</p>
            <p>Phone: +91-9876543210</p>
            <p>Email: contact@yourexportbusiness.com</p>
          </div>

          <div className="mb-6 md:mb-0 w-full md:w-1/4" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Certificates</h3>
            <ul className="space-y-2">
              <li>ISO 9001 Certified</li>
              <li>HACCP Compliant</li>
              <li>Organic Certification</li>
              <li>Fair Trade Certified</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4" data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link to="/products" className="hover:text-green-400">Products</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 text-lg hover:bg-white rounded-full p-2">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 text-lg hover:bg-white rounded-full p-2">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 text-lg hover:bg-white rounded-full p-2">
              <FaLinkedinIn />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 text-lg hover:bg-white rounded-full p-2">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 text-lg hover:bg-white rounded-full p-2">
              <FaInstagram />
            </a>
          </div>

          <p className="text-md text-gray-400">
            &copy; {new Date().getFullYear()} Alspade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
