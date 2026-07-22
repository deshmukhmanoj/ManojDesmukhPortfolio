import { motion } from "framer-motion";

const About = () => {
  const skills = {
    frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "React Hook Form",
      "React Router DOM",
      "Redux",
      "Redux Toolkit"
    ],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Bcrypt.js"],
    desktop: ["VB.NET Windows Forms"],
    database: ["SQL Server", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Postman"]
  };

  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Summary */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Who Am I?</h2>
            <p className="text-gray-300 leading-relaxed">
              Full Stack JavaScript Developer with 2.5 years of experience building 
              scalable and secure web applications. Passionate about shipping end-to-end 
              features, solving real-world business problems, and working in fast-paced 
              startup and remote environments.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">What I Can Deliver</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                End-to-end full stack web applications
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Secure authentication systems using JWT and Bcrypt.js
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Role-based access control for business applications
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                REST API development with Express.js
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Payment gateway and third-party API integrations
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Column - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Frontend</h2>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Backend</h2>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Desktop</h2>
            <div className="flex flex-wrap gap-2">
              {skills.desktop.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Database & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {[...skills.database, ...skills.tools].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;