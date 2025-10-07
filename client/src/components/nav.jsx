import React from "react";

const Nav = () => {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex flex-wrap justify-between items-center shadow-md">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold tracking-wide mb-2 sm:mb-0">
        ContentGuard AI
      </h1>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 text-lg mb-2 sm:mb-0">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Upload</li>
      </ul>

      {/* Login Button */}
      <button
        className="bg-white text-blue-800 font-semibold px-4 py-1 rounded-md hover:bg-gray-100 transition-all"
      >
        Login
      </button>
    </nav>
  );
};

export default Nav;
