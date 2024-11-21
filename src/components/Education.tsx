import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      degree: "MSC | Computer Science",
      institution: "Savitribai Phule Pune University",
      description: 'A NAAC Reaccredited "A" Grade University.',
      period: "Completed 2022-2024",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "BSC | Computer Science",
      institution:
        "Sarhad College of Arts, Commerce and Science College in Pune, Maharashtra",
      description: "",
      period: "Completed 2019-2022",
      icon: <Award size={24} />,
    },
    {
      degree: "HSC | Science",
      institution: "New English College Dolkhamb",
      description: "",
      period: "Completed 2019",
      icon: <Award size={24} />,
    },
  ];

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-center mb-12">
            These are some of my academic achievements.
          </p>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="text-purple-400 font-medium">
                    {item.institution}
                  </p>
                  {item.description && (
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  )}
                  <span className="inline-block px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium">
                    {item.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
