import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaMobileAlt, FaGamepad } from 'react-icons/fa';
import ContactUs from '../components/ContactUs';

const Services = () => {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center">
            <FaDesktop className="text-5xl text-gray-800 dark:text-gray-200 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Web Development</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              We offer custom web development services tailored to your needs, from simple websites to complex web applications.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center">
            <FaMobileAlt className="text-5xl text-gray-800 dark:text-gray-200 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Mobile App Development</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Our team specializes in building cross-platform mobile apps using the latest technologies for iOS and Android platforms.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center">
            <FaGamepad className="text-5xl text-gray-800 dark:text-gray-200 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Game Development</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              We create engaging and immersive gaming experiences across various platforms, including PC, console, and mobile.
            </p>
          </div>
        </div>
      </div>
      <ContactUs />
    </motion.div>
  );
};

export default Services;
