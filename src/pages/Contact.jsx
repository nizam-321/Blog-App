import React, { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        
        // Simulate form submission
        setTimeout(() => {
            setStatus('sent');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <div className="max-w-3xl mx-auto py-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white">
                    <h1 className="text-2xl font-bold mb-1">Contact Us</h1>
                    <p className="text-sm opacity-90">Send us your message</p>
                </div>

                <div className="p-4">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Contact Information</h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>info@example.com</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+91 1234567890</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>123, Main Street, New Delhi</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded h-24 focus:outline-none focus:ring-1 focus:ring-gray-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`w-full py-1.5 text-sm font-medium text-white rounded ${status === 'sending' ? 'bg-gray-400' : 'bg-gray-800 hover:bg-gray-900'}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending'
                                    ? 'Sending...'
                                    : status === 'sent'
                                    ? 'Sent!'
                                    : 'Send'}
                            </button>
                            {status === 'sent' && (
                                <div className="text-green-600 text-center font-medium">
                                    Your message has been sent successfully!
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};