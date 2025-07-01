import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add bg and shadow if scrolled more than 50px
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full fixed left-0 z-50 transition-transform duration-300 ${hideNavbar ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="w-9/12 mx-auto px-4 sm:px-6 md:px-0 xl:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              {/* <img src="/logo.png" alt="Company Logo" className="h-[100px] w-[100px]" /> */}
              <img src="/logo.png" alt="Company Logo" className="h-[100px] w-[100px] md:h-[80px] md:w-[80px] xl:h-[150px] xl:w-[150px]" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center md:space-x-2.5 lg:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#1929D6] font-bold' : 'text-gray-800 hover:text-[#1929D6]'
              }
            >
              Home
            </NavLink>
              <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? 'text-[#1929D6] font-bold' : 'text-gray-800 hover:text-[#1929D6]'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/business-wallet"
              className={({ isActive }) =>
                isActive ? 'text-[#1929D6] font-bold' : 'text-gray-800 hover:text-[#1929D6]'
              }
            >
              Business Wallet
            </NavLink>

            
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? 'text-[#1929D6] font-bold' : 'text-gray-800 hover:text-[#1929D6]'
              }
            >
              Support
            </NavLink>

            <NavLink
              to="/legal-information"
              className={({ isActive }) =>
                isActive ? 'text-[#1929D6] font-bold' : 'text-gray-800 hover:text-[#1929D6]'
              }
            >
              Legal Information
            </NavLink>
            <Link to="/login">
              <button className="w-[152px] h-[50px] md:w-[90px] md:h-[30px] xl:w-[152px] xl:h-[50px] ms-4 bg-[#1929D6] text-white rounded-md cursor-pointer">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden xl:hidden bg-white shadow-lg px-4 pt-4 pb-6 space-y-4">
          <NavLink
            to="/"
            className="block text-gray-800 hover:text-[#1929D6]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/business-wallet"
            className="block text-gray-800 hover:text-[#1929D6]"
            onClick={() => setMenuOpen(false)}
          >
            Business Wallet
          </NavLink>
            <NavLink
            to="/about-us"
            className="block text-gray-800 hover:text-[#1929D6]"
            onClick={() => setMenuOpen(false)}
          >
          About Us
          </NavLink>
          <NavLink
            to="/support"
            className="block text-gray-800 hover:text-[#1929D6]"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </NavLink>

          <NavLink
            to="/legal-information"
            className="block text-gray-800 hover:text-[#1929D6]"
            onClick={() => setMenuOpen(false)}
          >
            Legal Information
          </NavLink>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-[#1929D6] text-white rounded-lg py-2 transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
