import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-gray-800 bg-opacity-90'}`}>
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link to="/" className='flex items-center space-x-3'>
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <h1 className='text-2xl font-bold text-white'>My Blog</h1>
          </Link>

          <div className='hidden md:flex items-center space-x-6'>
            <Link 
              to="/" 
              className={`text-lg ${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
            >
              Home
            </Link>
            {/* <Link 
              to="/blog" 
              className={`text-lg ${isActive('/blog') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
            >
              Blog
            </Link> */}
            <Link 
              to="/about" 
              className={`text-lg ${isActive('/about') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg ${isActive('/contact') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}
            >
              Contact
            </Link>
            <Link 
              to="/create" 
              className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors'
            >
              Create Post
            </Link>
          </div>

          <button
            className='md:hidden text-white focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        
        {menuOpen && (
          <div className='md:hidden mt-4 py-4 border-t border-gray-700'>
            <div className='flex flex-col space-y-4'>
              <Link 
                to="/" 
                className={`text-lg ${isActive('/') ? 'text-blue-400' : 'text-gray-300'}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              {/* <Link 
                to="/blog" 
                className={`text-lg ${isActive('/blog') ? 'text-blue-400' : 'text-gray-300'}`}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link> */}
              <Link 
                to="/about" 
                className={`text-lg ${isActive('/about') ? 'text-blue-400' : 'text-gray-300'}`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-lg ${isActive('/contact') ? 'text-blue-400' : 'text-gray-300'}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/create" 
                className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center'
                onClick={() => setMenuOpen(false)}
              >
                Create Post
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};