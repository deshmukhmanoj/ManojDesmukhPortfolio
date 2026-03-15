import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/experience", name: "Experience" },
    { path: "/contact", name: "Contact" },
  ];

  // Always have solid background on mobile, conditional on desktop
  const navbarBg = scrolled 
    ? "bg-gray-900 shadow-lg" 
    : "bg-gray-900 md:bg-transparent";

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <NavLink 
              to="/" 
              className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Manoj Deshmukh
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 hover:text-blue-400 ${
                      isActive ? "text-blue-400 font-semibold" : "text-gray-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none p-2 hover:bg-gray-800 rounded-lg transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed to top with solid background */}
        <div 
          className={`
            fixed inset-x-0 top-16 bg-gray-900 z-40 transform transition-all duration-300 ease-in-out
            md:hidden
            ${isOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-2 invisible pointer-events-none'
            }
          `}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-1 bg-gray-900 rounded-xl border border-gray-700 shadow-xl">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-4 px-6 transition-all duration-300 text-lg ${
                      isActive 
                        ? "text-blue-400 font-semibold bg-gray-800 border-l-4 border-blue-400" 
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;