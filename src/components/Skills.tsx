import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Tailwind from "./assets/tailwindcss.svg";
import AWS from "./assets/aws-2.svg";
import Netlify from "./assets/netlify.svg";

const Skills = () => {
  const titleRef = useScrollAnimation({ animation: "fade-up" });
  const primarySkillsRef = useScrollAnimation({ animation: "fade-up" });
  const secondarySkillsRef = useScrollAnimation({ animation: "fade-up" });

  const primarySkills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },

    {
      name: "Tailwind",
      icon: Tailwind, // Path to the Tailwind SVG file
    },

    {
      name: "Netlify",
      icon: Netlify,
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  const secondarySkills = [
    {
      name: "AWS",
      icon: AWS,
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
  ];

  const SkillCard = ({
    skill,
    isPrimary,
  }: {
    skill: (typeof primarySkills)[0];
    isPrimary: boolean;
  }) => {
    const cardRef = useScrollAnimation({ animation: "fade-up" });

    return (
      <motion.div
        ref={cardRef}
        whileHover={{ scale: 1.05 }}
        className={`group p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl ${
          isPrimary
            ? "bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
            : "bg-white dark:bg-gray-800/70"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 dark:bg-gray-700/80 dark:ring-gray-600">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {skill.name}
          </h3>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div ref={titleRef} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              A comprehensive overview of my technical expertise
            </p>
          </div>

          <div className="space-y-12">
            <div ref={primarySkillsRef}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Primary Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {primarySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} isPrimary={true} />
                ))}
              </div>
            </div>

            <div ref={secondarySkillsRef}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Secondary Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {secondarySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} isPrimary={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
