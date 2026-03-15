import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Retailware Softech Pvt. Ltd.",
      location: "Pune",
      period: "Jun 2023 - Present",
      description: "Developed and maintained enterprise-level billing and retail management systems.",
      achievements: [
        "Built dynamic React.js dashboards for multi-branch reporting",
        "Designed scalable REST APIs using Node.js and Express.js integrated with SQL Server",
        "Implemented JWT-based authentication and role-based authorization",
        "Integrated Kenya KRA eTIMS API for tax compliance automation",
        "Implemented PhonePe and ICICI POS integrations for digital payments",
        "Enabled multilingual capabilities using Bhashini API integration"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. G.Y. Pathrikar College of Computer Science and Information Technology",
      period: "Graduated"
    }
  ];

  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Experience & <span className="text-blue-400">Education</span>
      </motion.h1>

      <div className="space-y-8">
        {/* Work Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaBriefcase className="text-blue-400" /> Work Experience
          </h2>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="flex items-center gap-1"><FaCalendar /> {exp.period}</p>
                  <p className="flex items-center gap-1"><FaMapMarkerAlt /> {exp.location}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-blue-400" /> Education
          </h2>
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400 mt-2">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;