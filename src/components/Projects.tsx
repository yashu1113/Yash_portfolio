import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Recipemaster from "./assets/Recipemaster.jpg";
import Chatamte from "./assets/Chatmate.jpg";
import Weather from "./assets/Weather.jpg";
import BingWatch from "./assets/BIngwatch.jpg";
import NewsApp from "./assets/News-app.jpg";

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
      title: "BingeWatch",
      description:
        "An interactive website that recommends movies and TV shows based on your preferences, allowing users to easily add content to their personalized watchlist.",
      image: {
        small: BingWatch,
        medium: BingWatch,
        large: BingWatch,
      },
      technologies: ["React", "Typescript", "TailwindCSS", "API", "shadcn-ui"],
      github: "https://github.com/yashu1113/Bingwatch",
      demo: "bingwatch.vercel.app",
    },
    {
      title: "News-App",
      description:
        "An interactive news website that fetches real-time headlines and articles using the News API, offering users the latest updates on global events.",
      image: {
        small: NewsApp,
        medium: NewsApp,
        large: NewsApp,
      },
      technologies: ["Typescript", "TailwindCSS", "API", "React", "shadcn-ui"],
      github: "https://github.com/yashu1113/newsly-hub-portal",
      demo: "https://newshub-theta.vercel.app/",
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
                <div className="relative overflow-hidden">
                  {/* Hover effect for image zoom */}
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={project.image.small}
                      srcSet={`${project.image.small} 400w, ${project.image.medium} 600w, ${project.image.large} 800w`}
                      sizes="(max-width: 640px) 400px, (max-width: 768px) 600px, 800px"
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
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
