import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Manoj Deshmukh. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:deshmukhmanoj000@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="tel:7620313921"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaPhone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;