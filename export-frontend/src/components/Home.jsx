import React, { useEffect } from "react";
import Subproduct from "./Subproduct";
import bgimage from "../assets/bg-image/grainsandvegetable.jpeg";
import Subabout from "./Subabout";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden">
      {/* Header Section */}
      <header
        className="relative flex items-center justify-center h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-tight text-center text-white p-3 shadow-lg">
            Bringing India's Finest Agricultural Produce to the World
          </h1>
          <p className="pb-2 text-base sm:text-lg md:text-xl font-medium">
            Quality you can trust. Sourcing from India's best farms.
          </p>
          <Link to="/products">
            <button className="p-3 rounded text-lg sm:text-xl md:text-2xl bg-green-600 mt-5 hover:bg-green-700 font-medium">
              Explore Product
            </button>
          </Link>
        </div>
      </header>

      {/* Subproduct Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="py-12 bg-gray-100"
      >
        <Subproduct />
      </section>

      {/* Subabout Section */}
      <section
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="py-12"
      >
        <Subabout />
      </section>

      {/* Why Certifications Matter Section */}
      <section
        className="py-16 bg-white"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="800"
      >
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-green-700 mb-6">
            Why Certifications Matter
          </h2>
          <p className="text-lg text-gray-600 mb-6 font-semibold">
            Certifications are critical in the agricultural export industry as they demonstrate our commitment to quality, safety, and sustainability. These certifications give you the assurance that our products meet the required standards for global trade.
          </p>
          <Link
            to="/certificate" // Update to the correct path
            className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-300"
          >
            Learn More About Our Certifications
          </Link>
        </div>
      </section>

      {/* Work With Us Section */}
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="bg-green-700 text-white py-12"
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Want to Work With Us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 font-semibold" data-aos="fade-up" data-aos-delay="200">
            Let’s collaborate to bring the best of India’s agricultural produce to your doorstep. Contact us today to explore partnership opportunities.
          </p>
          <Link
            className="px-6 py-3 bg-white text-green-700 font-medium rounded hover:bg-gray-200"
            to={"/contact"}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
