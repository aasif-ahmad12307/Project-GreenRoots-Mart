import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LoggedInNavbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setIsDropdownOpen(false);

    const handleLogout = () => {
      localStorage.removeItem("authToken"); // Clear auth token
      setIsLoggedIn(false); // Update login state
      window.location.reload(); // Refresh the page
    };
    
    
    
  return (
    <nav className="bg-white p-3 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <img src="src/assets/WhatsApp Image 2024-11-29 at 12.15.17_e531aec1.jpg" alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
        <Link to="/">
            <button className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition">
              Home
            </button>
          </Link>
          <Link to="/browseProducts">
            <button className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition">
              Browse Products
            </button>
          </Link>
          <Link to="/aboutUs">
            <button className="bg-green-50 hover:bg-green-200 px-3 py-2 rounded-full transition">
              AboutUs
            </button>
          </Link>
        

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-green-50 hover:bg-green-200 hover:bg-green-200 px-4 py-2 rounded-full transition flex items-center space-x-2"
          >
            <span className="material-icons">Profile</span>
          </button>
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
              onMouseLeave={closeDropdown}
            >
              <Link
                to="/viewProfile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                View Profile
              </Link>
              <Link
                to="/viewCart"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                View Cart
              </Link>
             {/*} <button
                onClick={() => alert('Logout Successful')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>*/}
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={handleLogout} 
            
                
              >
                Log Out
              </Link>
              
            </div>
          )}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
