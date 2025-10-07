import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} ContentGuard AI</p>
      <p className="text-gray-400 text-sm">
        Ensuring safer digital spaces for everyone
      </p>
    </footer>
  );
};

export default Footer;
