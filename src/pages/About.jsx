import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="max-w-3xl mx-auto py-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white">
                    <h1 className="text-2xl font-bold mb-1">About Us</h1>
                    <p className="text-sm opacity-90">Welcome to our blog!</p>
                </div>
                
                <div className="p-4">
                    <div className="prose prose-sm max-w-none">
                        <p className="text-gray-600 mb-3 text-sm">
                            We share our thoughts, experiences, and information on various topics. Our goal is to provide content that is valuable to our readers.
                        </p>
                        <p className="text-gray-600 mb-4 text-sm">
                            We believe in the power of storytelling and the importance of community. Thank you for visiting our blog, and we hope you enjoy reading our posts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-gray-50 p-4 rounded text-center">
                            <div className="text-2xl font-bold text-gray-800 mb-1">100+</div>
                            <div className="text-gray-600 text-sm">Published Posts</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded text-center">
                            <div className="text-2xl font-bold text-gray-800 mb-1">50K+</div>
                            <div className="text-gray-600 text-sm">Monthly Readers</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded text-center">
                            <div className="text-2xl font-bold text-gray-800 mb-1">10+</div>
                            <div className="text-gray-600 text-sm">Categories</div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <Link 
                            to="/contact" 
                            className="inline-block bg-gray-800 text-white px-6 py-1.5 rounded text-sm font-medium hover:bg-gray-900 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;