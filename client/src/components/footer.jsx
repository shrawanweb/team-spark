import React, { useState } from "react";

const Footer = () => {
  const [comment, setComment] = useState("");
  const [reported, setReported] = useState(false);

  const handleReport = () => {
    setReported(true);
    setTimeout(() => setReported(false), 2000);
  };

  return (
    <footer className="z-10 flex items-center justify-between px-6 py-4 border-t border-gray-700 bg-black/70 text-sm">
      <input
        type="text"
        placeholder="Add a comment..."
        className="bg-transparent border-b border-gray-500 focus:outline-none text-white w-1/2"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="relative group cursor-pointer">
        <div className="flex space-x-1">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>

        <div className="absolute right-0 mt-2 hidden group-hover:block bg-gray-800 p-2 rounded shadow-lg">
          <button
            onClick={handleReport}
            className="text-red-400 hover:text-red-500 text-sm"
          >
            Report
          </button>
        </div>
      </div>

      {reported && (
        <span className="absolute bottom-2 right-10 text-green-400 text-xs">
          Report sent!
        </span>
      )}
    </footer>
  );
};

export default Footer;