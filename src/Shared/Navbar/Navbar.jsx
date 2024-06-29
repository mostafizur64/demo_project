import React, { useState } from "react";

// react icons
import { FaXmark, FaBars, FaAccusoft, FaFacebookF, FaLinkedinIn, FaTwitter, } from "react-icons/fa6";
import { FaHome } from 'react-icons/fa';

import Container from "../../components/Container";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/logo.png';
import callImg from '../../assets/images/logo/CallHover.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // navLinks item
  const navItems = [
    { link: "Home", path: "" },
    { link: "Project", path: "proejct" },
    { link: "Media", path: "media" },
    { link: "About", path: "about" },
    { link: "Contact Us", path: "contactUs" },
    { link: "Community", path: "Community" },
  ];

  return (
    <Container>
      <header className="fixed z-10 top-10 text-white md:max-w-screen-xl mx-auto w-full">
        <nav className="flex items-center justify-between bg-titleColor p-2 md:rounded-[60px] rounded-[35px]">
          {/* menu btn for only mobile device  */}
          <div className="flex items-center gap-5">
            <div className="md:hidden ">
              <button
                onClick={toggleMenu}
                className="focus:outline-none focus:text-gray-500 mt-2"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-6 w-6 text-white" />
                ) : (
                  <FaBars className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
            <a
              href="/"
              className="uppercase font-bold text-[24px] flex items-center gap-6 "
            >
              <img
                src={logo}
                alt="logo"
                className="h-[90px] w-[90px]"
              />
            </a>
          </div>
          {/* nav item for large devices  */}
          <ul className="md:flex hidden space-x-10">
            {navItems.map((item) => (
              <Link
                to={item.path}
                spy={true}
                smooth={true}
                key={item.path}
                className="text-white text-[24px] font-semibold leading-9 uppercase flex items-center gap-2"
              >
                {item.link === "Home" && <FaHome className="h-6 w-6" />}
                {item.link}
              </Link>
            ))}
          </ul>
          {/* button for large devices  */}
          <div className="flex items-center">
            <div className="border-l-2 border-white pr-4">
              <img src={callImg} alt="callImg" className="ml-4 flex items-center justify-center" />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <p>Call us :</p>
                <p>+880123456789</p>
                <p>+880123456789</p>
              </div>
              <div className='flex items-center justify-center gap-2 my-[40px]'>
                <div className='bg-white rounded-full p-2 w-8 h-8 text-center flex items-center justify-center'>
                  <FaFacebookF size={30} className='text-titleColor' />
                </div>
                <div className='bg-white rounded-full p-2 w-8 h-8 text-center flex items-center justify-center'>
                  <FaLinkedinIn size={30} className='text-titleColor' />
                </div>
                <div className='bg-white rounded-full p-2 w-8 h-8 text-center flex items-center justify-center'>
                  <FaTwitter size={30} className='text-titleColor' />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`space-y-4 px-16 py-7 mt-32 bg-green-400 ${isMenuOpen
            ? "block fixed top-0 right-0 left-0 bottom-0 h-1/3 z-50"
            : "hidden"
            }`}
        >
          {navItems.map((item) => (
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              key={item.path}
              className="text-textColor font-normal text-[16px] flex items-center"
            >
              {item.link === "Home" && <FaHome className="h-6 w-6 mr-2" />}
              {item.link}
            </Link>
          ))}
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
