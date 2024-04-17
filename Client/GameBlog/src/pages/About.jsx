import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook,FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex justify-center items-center bg-gray-800 via-purple-500 to-pink-500"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <img
            className="w-40 h-40 rounded-full mx-auto mb-6"
            src="https://i1.sndcdn.com/avatars-SGotZSikougQ6uSz-AjnKxw-t500x500.jpg"
            alt="Profile"
          />
          <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>
          <p className="text-gray-200 mb-6">
            Welcome to my personal blog! My name is Tempestz, and I'm a passionate junior full stack developer focusing on game development. 
            I created this space to share my thoughts, experiences, and insights on game blogging and web development projects related to gaming.
          </p>
          <p className="text-gray-200 mb-6">
            I believe in the power of storytelling and how it connects us. Through this blog, I aim to 
            inspire, educate, and entertain my readers with compelling content related to video games, gaming news, and game development.
          </p>
          <p className="text-gray-200 mb-6">
            Whether you're here to learn something new, find inspiration, or simply enjoy some good 
            reads about gaming, I hope you'll find what you're looking for. Feel free to explore the various topics
            I cover and don't hesitate to reach out if you have any questions or feedback!
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="https://www.facebook.com/SheinnMinnO" className="text-white hover:text-gray-300">
              <FaFacebook size={24} />
            </Link>
            <Link to="https://www.linkedin.com/in/shein2k4/" className="text-white hover:text-gray-300">
              <FaLinkedin size={24} />
            </Link>
            <Link to="https://github.com/sheinminnoo" className="text-white hover:text-gray-300">
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
