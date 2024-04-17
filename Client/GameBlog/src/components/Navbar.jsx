import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (link) => {
    closeMobileMenu();
  };
  
  const clickLogin = () =>{
    navigate('/login');
  }

  const clickRegister = () =>{
    navigate('/register');
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://art.ngfiles.com/images/830000/830102_skitchyio_rimuru-tempest-slime-form.jpg?f1550969940" className="h-8" alt="Tempest" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tempest</span>
        </a>

        {/* Desktop Menu */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
          <button  onClick={clickLogin} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          <button  onClick={clickRegister} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ marginLeft: '10px' }}>Register</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMobileMenuOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-30 bg-gray-800 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} id="mobile-menu">
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col p-4 md:p-0 font-medium md:flex-row text-white">
            <li>
              <Link to="/" className="block py-2 px-3 rounded dark:text-blue-500 dark:hover:text-white" onClick={() => handleNavLinkClick('/')}>Home</Link>
            </li>
            <li>
              <Link to="/about" className='block py-2 px-3 rounded dark:text-blue-500 dark:hover:text-white' onClick={() => handleNavLinkClick('/about')}>About</Link>
            </li>
            <li>
              <Link to="/services" className='block py-2 px-3 rounded dark:text-blue-500 dark:hover:text-white' onClick={() => handleNavLinkClick('/services')}>Services</Link>
            </li>
            <li>
              <Link to="/gameblogs/createblog" className='block py-2 px-3 rounded dark:text-blue-500 dark:hover:text-white' onClick={() => handleNavLinkClick('/gameblogs/createblog')}>Create</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
