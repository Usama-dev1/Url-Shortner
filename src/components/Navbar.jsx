import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav>
        <div className="container-fluid mx-auto bg-primary py-5 md:py-0 px-8 w-full">
          {/* Toggle Button for Mobile Menu */}
          <div
            className="md:hidden flex items-center justify-between"
            onClick={handleClick}>
            {isOpen ? (
              <IoMdCloseCircle className="text-secondary text-3xl" />
            ) : (
              <GiHamburgerMenu className="text-secondary text-2xl" />
            )}
          </div>

          {/* Menu Items */}
          <ul
            className={`flex-col md:flex-row md:flex justify-center md:items-center text-secondary ${
              isOpen
                ? "md:hidden block text-center h-screen px-5 bg-primary"
                : "hidden"
            } md:flex md:static md:p-0 md:m-0`}>
            <li className="px-10 py-5 hover:bg-sorange">
              <a href="/home">HOME</a>
            </li>
            <li className="px-10 py-5 text-nowrap hover:bg-sorange">
              <a href="/aboutus">ABOUT US</a>
            </li>
            <li className="px-10 py-5 hover:bg-sorange">
              <a href="/contact">CONTACT</a>
            </li>
            <li className="px-10 py-5 hover:bg-sorange">
              <a href="/signup">LOGIN</a>
            </li>
            <li className="px-10 py-5 hover:bg-sorange">
              <a href="/signup">
                <FaRegSquarePlus className="inline-block me-1" />
                JOIN
              </a>
            </li>
            {/* Social Media Icons */}
            <div className="flex justify-center item-center md:ms-3 py-5 overflow-hidden">
              <FaFacebook className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
              <FaInstagram className="text-secondary mx-1 w-6 h-6  hover:text-sorange" />
              <FaTwitter className="text-secondary mx-1 w-6 h-6  hover:text-sorange" />
              <FaYoutube className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
