import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 mt-10">
            <div className="container mx-auto text-center text-white">
                <p>&copy; 2024 My Application. All rights reserved.</p>
                <p>
                    Follow us on 
                    <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 ml-2">Twitter</a>, 
                    <a href="https://facebook.com" className="text-blue-400 hover:text-blue-600 ml-2">Facebook</a>, 
                    <a href="https://instagram.com" className="text-blue-400 hover:text-blue-600 ml-2">Instagram</a>
                </p>
            </div>
        </footer>
    );
};
