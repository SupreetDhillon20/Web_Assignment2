import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    My Application
                </div>
                <div className="space-x-4">
                    <Link href="/">
                        <a className="text-white hover:text-gray-200">Home</a>
                    </Link>
                    <Link href="/form">
                        <a className="text-white hover:text-gray-200">Form</a>
                    </Link>
                    <Link href="/students">
                        <a className="text-white hover:text-gray-200">Students</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
