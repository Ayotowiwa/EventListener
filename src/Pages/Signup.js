import React from "react";

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
          <a href="/login" className="text-main hover:underline">
            Login
          </a>
        </p>
      </div>

      {/* Form */}
      <form className="w-[25%] max-w-sm bg-white p-6 rounded-lg shadow-md">
        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-primaryText font-medium mb-1 text-left"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-primaryText font-medium mb-1 text-left"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-primaryText font-medium mb-1 text-left"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter your phone number"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-primaryText font-medium mb-1 text-left"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-primaryText font-medium mb-1 text-left"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400"
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
