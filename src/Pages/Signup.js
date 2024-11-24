import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          <span className="text-main">Create</span>{" "}
          <span className="text-primaryText">Account</span>
        </h1>
        <p className="mt-2 text-sm">
          <span className="text-primaryText">Already have an account? </span>
          <Link to="/login" className="text-main hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Form */}
      <form className="w-[30%] max-w-sm bg-white p-6 rounded-lg shadow-md">
        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-primaryText font-medium mb-1 text-left text-sm"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400 text-sm"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-primaryText font-medium mb-1 text-left text-sm"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400 text-sm"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-primaryText font-medium mb-1 text-left text-sm"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter your phone number"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400 text-sm"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-primaryText font-medium mb-1 text-left text-sm"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400 text-sm"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-primaryText font-medium mb-1 text-left text-sm"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400 text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-main text-white py-2 rounded hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
