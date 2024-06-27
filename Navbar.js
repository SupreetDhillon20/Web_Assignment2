import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 h-20 py-5 mb-4 items-center">
          <div className="container mx-auto flex justify-between items-center"> 
            {/* School Name */}
            <div className="text-white text-2xl font-semibold">
              Williamson High School
            </div>

            <div className="space-x-9">
              {/* Home Link */}
              <Link href="/" passHref>
                <span className="text-white font-medium hover:underline cursor-pointer">Home</span>
              </Link>
              {/* Form Link */}
              <Link href="/form" passHref>
                <span className="text-white font-medium hover:underline cursor-pointer">Form</span>
              </Link>
              {/* Students Link */}
              <Link href="/students" passHref>
                <span className="text-white font-medium hover:underline cursor-pointer">Students</span>
              </Link>
            </div>
          </div>
    </nav>
    );
};

export default Navbar;
