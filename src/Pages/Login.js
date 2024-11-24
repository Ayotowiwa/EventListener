import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [useEmail, setUseEmail] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-main">Login</h1>
        <p className="mt-2 text-sm">
          <span className="text-primaryText">Don't have an account? </span>
          <Link to="/signup" className="text-main hover:underline">
            Create account
          </Link>
        </p>
      </div>

      {/* Toggle Options */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setUseEmail(false)}
          className={`px-4 py-2 rounded ${
            !useEmail
              ? "bg-transparentCard text-main"
              : "bg-transparent text-gray-400"
          }`}
        >
          Use Phone Number
        </button>
        <span className="text-gray-400">OR</span>
        <button
          onClick={() => setUseEmail(true)}
          className={`px-4 py-2 rounded ${
            useEmail
              ? "bg-transparentCard text-main"
              : "bg-transparent text-gray-400"
          }`}
        >
          Use Email
        </button>
      </div>

      {/* Form */}
      <form className="w-[30%] max-w-sm bg-white p-6 rounded-lg shadow-md">
        {/* Dynamic Field */}
        <div className="mb-4">
          <label
            htmlFor={useEmail ? "email" : "phoneNumber"}
            className="block text-primaryText font-medium mb-1 text-left text-sm"
          >
            {useEmail ? "Email" : "Mobile Number"}
          </label>
          <input
            type="text"
            id={useEmail ? "email" : "phoneNumber"}
            placeholder={useEmail ? "Sample email" : "Sample mobile number"}
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
            placeholder="Sample password"
            className="w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-400 text-sm"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-main text-white py-2 rounded hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
