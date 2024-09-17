import React from "react";
import { Link, Outlet } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-900 h-28 flex justify-center items-end">
        <InPageNavigation
          teams={[
            { title: "MATCHES", path: "/" },
            { title: "NEWS", path: "/news" },
            { title: "TABLE", path: "/pointsTable" },
            {title: "STATS", path: "/stats"},
            {title: "PLAYERS", path: "/players"},
          ]}
        />
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Navbar;
