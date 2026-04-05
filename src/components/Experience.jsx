import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "Mitroz Technologies",
    duration: "Oct 2025 - Present",
    points: [
      "Built REST APIs using Node.js and NestJS",
      "Implemented JWT authentication and RBAC",
      "Optimized MongoDB queries for performance",
    ],
    tech: ["Node.js", "NestJS", "TypeScript", "MongoDB"],
  },
  {
    role: "Software Developer Intern",
    company: "Kodefactor Consulting Pvt Ltd",
    duration: "Mar 2025 - Jun 2025",
    points: [
      "Developed reusable UI components with React and Tailwind",
      "Integrated frontend with REST APIs",
      "Implemented authentication using JWT",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Experience
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((item, index) => (
            <div key={`${item.role}-${index}`} className="relative pl-8 sm:pl-10">
              <div className="absolute left-2.5 top-0 h-full w-px bg-gradient-to-b from-purple-400/80 via-cyan-400/70 to-transparent sm:left-3" />
              <div className="absolute left-0 top-5 h-5 w-5 rounded-full border-2 border-cyan-300 bg-gray-900 shadow-[0_0_0_4px_rgba(17,24,39,0.9)] sm:left-0.5" />

              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -3, scale: 1.005 }}
                transition={{ duration: 0.25, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-xl border border-gray-700/70 bg-gray-800/75 p-4 sm:p-5 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl" />

                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {item.role}{" "}
                    <span className="text-purple-400">@ {item.company}</span>
                  </h3>
                  <span className="text-xs text-gray-300 whitespace-nowrap rounded-md border border-gray-600/80 bg-gray-900/70 px-2 py-1">
                    {item.duration}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-3.5">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-sm text-gray-200/95 flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="px-2.5 py-1 rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-200 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

