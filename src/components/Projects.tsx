import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Recipemaster from "./assets/Recipemaster.jpg";
import Chatamte from "./assets/Chatmate.jpg";
import Weather from "./assets/Weather.jpg";

const Projects = () => {
  const projects = [
    {
      title: "RecipeMaster",
      description:
        "A web app to find delicious recipes based on the ingredients you have, with real-time data from a recipe API.",
      image: {
        small: Recipemaster,
        medium: Recipemaster,
        large: Recipemaster,
      },
      technologies: ["React", "TailwindCSS", "API"],
      github: "https://github.com/yashu1113/Recipe-project",
      demo: "https://recipemaster123.netlify.app/",
    },
    {
      title: "Chatmate",
      description:
        "A real-time messaging platform with WebSocket support using Socket.io and Node.js.",
      image: {
        small: Chatamte,
        medium: Chatamte,
        large: Chatamte,
      },
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Weatherforcast",
      description:
        "A simple weather app that shows the current weather and forecast using a weather API.",
      image: {
        small: Weather,
        medium: Weather,
        large: Weather,
      },
      technologies: ["React", "API"],
      github: "https://github.com/yashu1113/Weather-app",
      demo: "https://weatherinfo2002.netlify.app/",
    },
    {
      title: "TaskMet",
      description:
        "A task management web app to create, update, and manage tasks effectively with a simple UI.",
      image: {
        small:
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop",
        medium:
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
        large:
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
      },
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/yashu1113/Personal-Diary",
      demo: "https://demo.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-4xl font-bold text-white mb-8">
            Featured Projects
          </h2>
          <p className="text-center text-lg text-gray-300 mb-16">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image.small}
                    srcSet={`${project.image.small} 400w, ${project.image.medium} 600w, ${project.image.large} 800w`}
                    sizes="(max-width: 640px) 400px, (max-width: 768px) 600px, 800px"
                    alt={project.title}
                    className="w-full h-auto object-contain transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-sm rounded-full text-white transition-colors ${
                          tech === "React"
                            ? "bg-blue-500"
                            : tech === "Node.js"
                            ? "bg-green-500"
                            : tech === "MongoDB"
                            ? "bg-green-800"
                            : tech === "Express"
                            ? "bg-gray-700"
                            : tech === "Socket.io"
                            ? "bg-gray-900"
                            : tech === "API"
                            ? "bg-orange-600"
                            : tech === "TailwindCSS"
                            ? "bg-teal-500"
                            : tech === "JavaScript"
                            ? "bg-yellow-500"
                            : "bg-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 flex items-center hover:text-white transition-all"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 flex items-center hover:text-white transition-all"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
