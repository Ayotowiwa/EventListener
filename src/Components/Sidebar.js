import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Sidebar options
  const options = [
    { name: "EventHub", path: "/eventhub" },
    { name: "Create an Event", path: "/create-event" },
    { name: "Saved Events", path: "/saved-events" },
    { name: "Inbox", path: "/inbox" },
  ];

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 text-main focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:w-64 w-3/4 z-40`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold text-main">Sidebar</h1>
        </div>
        <nav className="flex flex-col space-y-2 mt-4">
          {options.map((option) => (
            <NavLink
              key={option.name}
              to={option.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-left ${
                  isActive
                    ? "text-main font-semibold text-lg"
                    : "text-primaryText text-base"
                }`
              }
              onClick={() => setIsOpen(false)} // Close sidebar on click for mobile
            >
              {option.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
