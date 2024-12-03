import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
  const excludePaths = ["/login", "/"];

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      {!excludePaths.includes(location.pathname) && (
        <div className="w-fit md:w-1/5">
          <Sidebar />
        </div>
      )}
      {/* Main Content */}
      <div
        className={`flex-1 p-4 ${
          excludePaths.includes(location.pathname) ? "w-full" : "md:w-4/5"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
