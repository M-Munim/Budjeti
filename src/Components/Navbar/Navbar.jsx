import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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
      className={`w-full fixed left-0 z-50 transition-transform duration-300 ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      } bg-transparent`}
    >
      <div className="w-9/12 mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
  <Link to="/">
    <img src="/logo.png" alt="Company Logo" className="h-[114px] w-[114px]" />
  </Link>
</div>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#1929D6] font-bold' : 'text-gray-800 hover:text-[#1929D6]'
              }
            >
              Home
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
            <button className="w-[152px] h-[50px] ms-4 bg-[#1929D6] text-white">Login</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-4 pb-6 space-y-4">
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
            to="/support"
            className="block text-gray-800 hover:text-[#1929D6]"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </NavLink>
          <button className="w-full bg-[#1929D6] text-white rounded-lg transition">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
