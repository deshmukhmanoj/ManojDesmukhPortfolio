import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/experience", name: "Experience" },
    { path: "/contact", name: "Contact" },
  ];

  // Determine navbar background class
  const getNavbarBgClass = () => {
    // On mobile, always have solid background when menu is open OR when scrolled
    if (isOpen) {
      return "bg-gray-900"; // Solid background when menu is open
    }
    // If scrolled, show solid background with blur
    if (scrolled) {
      return "bg-gray-900/95 backdrop-blur-sm shadow-lg";
    }
    // On desktop without scroll, keep transparent
    // On mobile without scroll and menu closed, use solid background with slight transparency
    return "bg-gray-900/90 md:bg-transparent";
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBgClass()}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <NavLink to="/" className="text-xl font-bold text-blue-400">
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
            className="md:hidden text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-800 ${
                        isActive 
                          ? "text-blue-400 font-semibold bg-gray-800/50" 
                          : "text-gray-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;