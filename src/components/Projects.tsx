import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Recipemaster from "./assets/Recipemaster.jpg";
import Chatamte from "./assets/Chatmate.jpg";
import BingWatch from "./assets/BIngwatch.jpg";
import NewsApp from "./assets/News-app.jpg";
import SlackSnowflakeBot from "./assets/Gemini_Generated_Image_52ycjj52ycjj52yc.png";

const Projects = () => {
  const projects = [
    {
      title: "Slack-Snowflake User Management Bot",
      description:
        "A Slack-integrated user management bot that onboards users, resets Snowflake passwords, and dynamically creates and assigns roles in Snowflake. It also uses asynchronous workflows to keep Slack commands responsive and avoid API timeout issues during longer admin operations.",
      emphasis: true,
      image: {
        small: SlackSnowflakeBot,
        medium: SlackSnowflakeBot,
        large: SlackSnowflakeBot,
      },
      technologies: ["Node.js", "Express.js", "Snowflake", "Slack API"],
      github: "https://github.com/yashu1113/slack-user-management-bot",
      demo: "https://github.com/yashu1113/slack-user-management-bot",
    },
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
      github: "https://github.com/yashu1113/Real-time-chat-app",
      demo: "https://cheatchatbyyash.vercel.app/signup",
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
      demo: "https://bingwatch.vercel.app/",
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
                <div className={project.emphasis ? "p-8" : "p-6"}>
                  <h3
                    className={`font-bold text-white hover:text-purple-500 transition-colors ${
                      project.emphasis ? "text-4xl mb-5" : "text-2xl mb-3"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-gray-300 ${
                      project.emphasis
                        ? "text-xl leading-9 mb-7"
                        : "text-base leading-7 mb-5"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      project.emphasis ? "mb-7" : "mb-4"
                    }`}
                  >
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`rounded-full text-white transition-colors ${
                          project.emphasis ? "px-4 py-2 text-base" : "px-3 py-1 text-sm"
                        } ${
                          tech === "React"
                            ? "bg-blue-500"
                            : tech === "Node.js"
                            ? "bg-green-500"
                            : tech === "Express.js"
                            ? "bg-gray-700"
                            : tech === "MongoDB"
                            ? "bg-green-800"
                            : tech === "Express"
                            ? "bg-gray-700"
                            : tech === "Snowflake"
                            ? "bg-sky-500"
                            : tech === "Slack API"
                            ? "bg-violet-600"
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
                  <div
                    className={`flex gap-4 ${
                      project.emphasis ? "text-lg" : ""
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 flex items-center hover:text-white transition-all"
                    >
                      <Github size={project.emphasis ? 22 : 20} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 flex items-center hover:text-white transition-all"
                    >
                      <ExternalLink size={project.emphasis ? 22 : 20} className="mr-1" />
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
