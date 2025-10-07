import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import getGoogleAuthUrl from "../utils/getGoogleAuthUrl";
const Signup = ({ onSignup, isLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    // Simulate signup
    onSignup(formData.name);
  };

  return (
    <section className="py-10 px-6 bg-white text-gray-800 dark:text-white">
      <div className="max-w-md mx-auto bg-white backdrop-blur-lg border border-gray-300 rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 dark:text-blue-400">
          {isLoggedIn ? "You're already signed in" : "Create an Account"}
        </h2>

        {!isLoggedIn ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Sign Up
            </button>
            
              <button
              type="button"
              className="w-full py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2"
onClick={() => {window.location.href = getGoogleAuthUrl();}}
            >
              <FcGoogle className="text-xl "  />  
              <span >Continue with Google</span>
            </button>


          </form>
        ) : (
          <p className="text-center text-green-500">
            You're signed in! 🎉 You can now use the features.
          </p>
        )}
      </div>
    </section>
  );
};

export default Signup;
