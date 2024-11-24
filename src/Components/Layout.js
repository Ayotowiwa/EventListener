import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
  const excludePaths = ["/login", "/signup"]; // Paths without the sidebar

  return (
    <div className="flex">
      {/* Sidebar */}
      {!excludePaths.includes(location.pathname) && (
        <div className="w-1/5 min-w-[200px] bg-white">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`${
          !excludePaths.includes(location.pathname) ? "flex-1 ml-[200px]" : "w-full"
        } p-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
