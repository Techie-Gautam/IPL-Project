import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen mx-auto bg-gray-900 text-white overflow-x-hidden w-full">
      <main>
        <Navbar />
        <div className="bg-gray-800 w-[90vw] lg:w-[50vw] sm:w-[80vw] mx-auto shadow-md shadow-gray-800 rounded my-6 min-h-screen">
          <Outlet />
        </div>
      </main>
      <div className="p-10 text-center text-lg bg-gray-800">
        Made with 💗 by Gautam
      </div>
    </div>
  );
};

export default AppLayout;
