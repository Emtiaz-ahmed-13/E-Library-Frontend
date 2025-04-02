import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar.tsx/Navbar";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
