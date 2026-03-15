import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0A%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    
    // Open default email client
    window.location.href = `mailto:deshmukhmanoj000@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    toast.info("Opening your email client...", {
      position: "top-right",
      autoClose: 3000,
    });
    
    // Optional: Also log to console for testing
    console.log("Email would be sent to: deshmukhmanoj000@gmail.com", {
      name: formData.name,
      email: formData.email,
      message: formData.message
    });
  };

  const handleWhatsAppMessage = () => {
    const phoneNumber = "917620313921"; // Without + and spaces
    const message = encodeURIComponent(
      `Hello Manoj,%0A%0AMy Name: ${formData.name || '[Your Name]'}%0AMy Email: ${formData.email || '[Your Email]'}%0A%0AMessage: ${formData.message || '[Your Message]'}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    toast.success("Opening WhatsApp...", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Show options dialog
    toast.info(
      <div className="flex flex-col gap-2">
        <p className="font-semibold mb-2">Choose how to send:</p>
        <button
          onClick={() => {
            toast.dismiss();
            handleEmailSend(e);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center"
        >
          <FaEnvelope /> Send via Email
        </button>
        <button
          onClick={() => {
            toast.dismiss();
            handleWhatsAppMessage();
          }}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center"
        >
          <FaWhatsapp /> Send via WhatsApp
        </button>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        className: "bg-gray-800 text-white",
      }
    );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-blue-400" />,
      label: "Email",
      value: "deshmukhmanoj000@gmail.com",
      link: "mailto:deshmukhmanoj000@gmail.com",
      action: "Send email directly"
    },
    {
      icon: <FaWhatsapp className="text-2xl text-green-400" />,
      label: "WhatsApp",
      value: "+91 7620313921",
      link: "https://wa.me/917620313921",
      action: "Chat on WhatsApp"
    },
    {
      icon: <FaPhone className="text-2xl text-green-400" />,
      label: "Phone",
      value: "+91 7620313921",
      link: "tel:7620313921",
      action: "Call now"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-400" />,
      label: "Location",
      value: "Pune, India",
      link: null,
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400"
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/manoj-deshmukh-44309a237/",
      color: "hover:text-blue-500"
    }
  ];

  const portfolioLinks = [
    {
      title: "Bhashini Integration Project",
      description: "Language translation and localization platform using Bhashini API",
      url: "https://bhashini-integration.vercel.app/",
      tech: "React • Node.js • Bhashini API"
    },
    {
      title: "K-Prakash Portfolio",
      description: "Personal portfolio and creative workspace showcasing web development projects",
      url: "https://deshmukhmanoj.github.io/k-prakash/",
      tech: "React • Framer Motion • Tailwind CSS"
    }
  ];

  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Get In <span className="text-blue-400">Touch</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Contact Information</h2>
            <p className="text-gray-400 mb-6">
              I'm open to remote opportunities and collaborations. 
              Feel free to reach out via any of these channels!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="relative">
                    {info.icon}
                    {info.action && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {info.action}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white hover:text-blue-400 transition-colors flex items-center gap-1 group"
                      >
                        {info.value}
                        {info.link.startsWith('http') && <FaExternalLinkAlt size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold mb-3">Social Links</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
              <span>Featured Projects</span>
              <span className="text-sm bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Live Demo</span>
            </h3>
            
            <div className="space-y-4">
              {portfolioLinks.map((project, index) => (
                <div key={index} className="group relative">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-600 hover:border-blue-400/50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-400 text-sm transition-colors" />
                    </div>
                    <p className="text-gray-400 text-sm mb-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-blue-400/80 bg-blue-400/10 px-2 py-1 rounded-full">
                        {project.tech}
                      </span>
                    </div>
                    
                    {/* Hover effect indicator */}
                    <div className="absolute inset-0 rounded-lg ring-1 ring-transparent group-hover:ring-blue-400/30 transition-all duration-300 pointer-events-none"></div>
                  </a>
                </div>
              ))}
            </div>
            
            {/* View all projects link */}
            <div className="mt-4 text-center">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
              >
                View more projects on GitHub <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Send a Message</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white transition-colors"
                  placeholder=""
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white transition-colors"
                  placeholder=""
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white transition-colors resize-none"
                  placeholder="Hi Manoj, I'd like to discuss a project with you..."
                ></textarea>
              </div>

              {/* Quick action buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppMessage}
                  className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> WhatsApp
                </button>
                <button
                  type="button"
                  onClick={(e) => handleEmailSend(e)}
                  className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FaEnvelope /> Email
                </button>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Choose Send Method
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your message will be sent directly to my email or WhatsApp
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;