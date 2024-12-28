"use client";
import Image from 'next/image';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-row h-[130px] w-full justify-evenly items-center px-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/images/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full p-2"
        />
      </div>

      {/* Full Navbar for larger screens */}
      <nav className="hidden md:flex justify-center items-center md:p-10 p-4 mt-2">
        <ul className="md:gap-10 gap-4 flex flex-row md:text-[20px] text-[16px]">
          <li>
            <a href="#" className="text-md text-gray-600 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-md text-gray-600 hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-md text-gray-600 hover:text-gray-900">
              Packages
            </a>
          </li>
          <li>
            <a href="#" className="text-md text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-md text-gray-600 hover:text-gray-900">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      {/* Get Started Button */}
      <div className="flex md:ml-0 ml-16">
        <button className="border-2 bg-[#B88E2F] text-white md:text-[16px] text-[10px] md:px-4 px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex">
        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
          <Menu />
        </button>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="absolute top-[130px] left-0 w-full bg-gray-100 p-4 md:hidden z-10">
          <ul className="gap-4 flex flex-col text-[16px]">
            <li>
              <a href="#" className="text-md text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-md text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-md text-gray-600 hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-md text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-md text-gray-600 hover:text-gray-900">
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
