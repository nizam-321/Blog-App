import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white mt-auto'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>My Blog</h3>
            <p className='text-gray-400'>Share your thoughts with the world!</p>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><Link to="/" className='text-gray-400 hover:text-white'>Home</Link></li>
              <li><Link to="/about" className='text-gray-400 hover:text-white'>About</Link></li>
              <li><Link to="/contact" className='text-gray-400 hover:text-white'>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Categories</h4>
            <ul className='space-y-2'>
              <li><Link to="/category/technology" className='text-gray-400 hover:text-white'>Technology</Link></li>
              <li><Link to="/category/lifestyle" className='text-gray-400 hover:text-white'>Lifestyle</Link></li>
              <li><Link to="/category/travel" className='text-gray-400 hover:text-white'>Travel</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Newsletter</h4>
            <form className='flex flex-col gap-2'>
              <input 
                type="email" 
                placeholder="Enter your email"
                className='bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button 
                type="submit"
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-700 text-center text-gray-400'>
          <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};