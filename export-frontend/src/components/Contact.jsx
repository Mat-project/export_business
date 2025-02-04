import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS when component is mounted
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <section id="contact" className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          {/* Add AOS animation to the heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              ></textarea>
            </div>

            {/* Submit Button with AOS animation */}
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Submit
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-center text-green-500">
              Thank you for your message! We will get back to you soon.
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
