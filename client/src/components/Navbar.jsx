/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged Out Successfully");
    navigate("/");
  };

  return (
    <nav className="bg-white text-indigo-600 px-6 py-4 fixed w-full top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <h2 className="font-bold tracking-widest text-indigo-600 ml-5 text-3xl">GYM</h2>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex mr-4 w-[40%] space-x-6 lg:flex lg:justify-between">
          <NavLink className="p-4 hover:bg-indigo-600 hover:text-white rounded-full font-bold" to="/">
            Home
          </NavLink>
          <NavLink className="p-4 hover:bg-indigo-600 hover:text-white rounded-full font-bold" to="/services">
            Services
          </NavLink>
          <NavLink className="p-4 hover:bg-indigo-600 hover:text-white rounded-full font-bold" to="/membership">
            MemberShip
          </NavLink>

          {user ? (
            <button
              onClick={handleLogout}
              className="p-4 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 border font-bold rounded-full"
            >
              Logout
            </button>
          ) : (
            <NavLink
              className="p-4 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 border font-bold rounded-full"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </ul>

        {/* Hamburger Icon (small screens) */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-indigo-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-indigo-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-indigo-600"></div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center space-y-8 text-2xl z-50">
          <NavLink className="text-white" to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink className="text-white" to="/services" onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink className="text-white" to="/membership" onClick={() => setIsOpen(false)}>
            MemberShip
          </NavLink>

          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="text-white"
            >
              Logout
            </button>
          ) : (
            <NavLink className="text-white" to="/login" onClick={() => setIsOpen(false)}>
              Login
            </NavLink>
          )}

          <button onClick={() => setIsOpen(false)} className="mt-4 text-white text-sm">
            Close
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

