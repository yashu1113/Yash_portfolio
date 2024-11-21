import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import Profilepic from "./assets/Profile.png";

const TechIcon = ({ icon, label }: { icon: string; label: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex flex-col items-center space-y-2 group"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
      <img src={icon} alt={label} className="w-6 h-6" />
    </div>
    <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
      {label}
    </span>
  </motion.div>
);

const Home = () => {
  const techStack = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      label: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      label: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      label: "Node.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      label: "TypeScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      label: "MongoDB",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-gray-800 pt-20"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-500/50 shadow-lg"
            >
              <img
                src={Profilepic}
                alt="Profile"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-gray-400 text-xl mb-2">Hello, I'm</h2>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
                Yash Choudhari
              </h1>
              <h3 className="text-2xl sm:text-3xl text-purple-400 mb-8">
                Full Stack Developer
              </h3>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-8 mb-12 flex-wrap gap-6 sm:gap-8"
          >
            {techStack.map((tech, index) => (
              <TechIcon key={index} {...tech} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors flex items-center space-x-2 transform hover:scale-105 duration-200"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1oJy9qtfWa7AYINjKFa41-3f4s1qV7WyK"
              download
              className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-colors flex items-center space-x-2 transform hover:scale-105 duration-200"
            >
              <FileText className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: <Github className="w-6 h-6" />,
                href: "https://github.com/yashu1113",
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                href: "https://www.linkedin.com/in/yash-choudhari-a2784522b",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                href: "yashchoudhari4301@gmail.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transform transition-all duration-200 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
