import React, { useEffect } from 'react';
import Navbar from './Navbar';
import bgimage from '../assets/image/heart.jpeg';
import Footer from './Footer';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <header
        className="relative flex items-center justify-center h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <section className="relative z-10 text-white py-20">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg sm:text-xl font-medium">
              Connecting India's finest agricultural products with the global market,
              we are dedicated to quality, sustainability, and fostering strong relationships.
            </p>
          </div>
        </section>
      </header>

      {/* Company Overview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-bold text-green-700"
              data-aos="fade-up"
            >
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg mt-4 font-semibold" data-aos="fade-up">
              At <span className="font-black">Alspade</span>, we pride ourselves on bridging the gap between Indian farmers and the global marketplace.
              With a focus on delivering exceptional quality and promoting sustainability,
              we are a trusted partner in agricultural exports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4 font-semibold">
                Founded with a mission to bring the best of India to the world, we started our journey
                by partnering with local farmers. Over the years, we’ve grown to become a reliable name
                in agricultural exports, thanks to our commitment to quality and customer satisfaction.
              </p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">Why Choose Us?</h3>
              <p className="text-gray-600 font-semibold">
                We source our products directly from farmers, ensuring fresh, premium-grade produce.
                Our transparent processes, efficient logistics, and dedication to customer needs
                make us the ideal partner for your agricultural needs.
              </p>
            </div>
            <div className="flex items-center" data-aos="fade-left" data-aos-duration="1000">
              <img
                src="https://via.placeholder.com/400"
                alt="Agriculture"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700" data-aos="fade-up">
            Our Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">Vision</h3>
              <p className="text-gray-600 font-semibold">
                To bring India's rich agricultural heritage to global markets by delivering premium-quality
                products sourced directly from farmers.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">Mission</h3>
              <p className="text-gray-600 font-semibold">
                To empower local farmers by creating sustainable opportunities and ensuring the world experiences
                the best of India's agricultural produce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4" data-aos="fade-up">
            Want to Work With Us?
          </h2>
          <p className="text-lg sm:text-xl mb-6 font-semibold" data-aos="fade-up">
            Let’s collaborate to bring the best of India’s agricultural produce to your doorstep.
            Contact us today to explore partnership opportunities.
          </p>
          <button className="px-6 py-3 bg-white text-green-700 font-medium rounded hover:bg-gray-200 transition-colors" data-aos="fade-up">
            Contact Us
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

