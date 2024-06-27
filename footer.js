import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 p-4 mt-10">
            <div className="container mx-auto text-center text-white">
                <div className="mb-4">
                    <p>&copy; 2024 Williamson High School. All rights reserved.</p>
                </div>
                <div className="mb-4 text-left">
                    <p>
                        Address:<br />
                        123 Main Street,<br />
                        Calgary, AB, T1K 1L3
                    </p>
                </div>
                <div className="mb-4 text-left">
                    <p>
                        Contact Information:<br />
                        Phone: (338) 456-7890<br />
                        Email: <a href="mailto:info@abchighschool.edu" className='text-white hover:text-blue-500'>info@williamsonhighschool.edu</a>
                    </p>
                </div>
                <div className="mb-4 text-left">
                    <p>
                        Office Hours:<br />
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        Saturday - Sunday: Closed
                    </p>
                </div>
                <div>
                    <p>
                        Follow Us:<br />
                        <a href="https://facebook.com/abchighschool" className="text-white hover:text-blue-500 ml-2">Facebook</a>, 
                        <a href="https://twitter.com/abchighschool" className="text-white hover:text-blue-500 ml-2">Twitter</a>, 
                        <a href="https://instagram.com/abchighschool" className="text-white hover:text-blue-500 ml-2">Instagram</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
