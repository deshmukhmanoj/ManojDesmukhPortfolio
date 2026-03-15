import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaServer, FaShieldAlt } from "react-icons/fa";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FaCode className="text-3xl text-blue-400" />,
      title: "Frontend Development",
      description: "React.js, Tailwind CSS, Responsive UI"
    },
    {
      icon: <FaServer className="text-3xl text-green-400" />,
      title: "Backend Development",
      description: "Node.js, Express.js, REST APIs"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-400" />,
      title: "Secure Systems",
      description: "JWT Auth, Role-based Access Control"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 md:py-20"
      >
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Manoj Deshmukh
          </span>
        </motion.h1>
        
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          Full Stack JavaScript Developer
        </motion.p>
        
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8"
        >
          2.4+ years of experience building scalable web applications with 
          React.js, Node.js, and modern technologies.
        </motion.p>
        
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors duration-300"
          >
            View My Work <FaArrowRight className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-blue-400 rounded-lg font-semibold transition-colors duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Services/Skills Section */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;