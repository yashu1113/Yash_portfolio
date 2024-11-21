import { motion } from 'framer-motion';
import { Code2, Database, Globe, Laptop } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using modern frameworks and tools."
    },
    {
      icon: <Database size={24} />,
      title: "Backend Development",
      description: "Designing scalable server-side applications and RESTful APIs."
    },
    {
      icon: <Globe size={24} />,
      title: "Web Performance",
      description: "Optimizing applications for speed, accessibility, and search engine visibility."
    },
    {
      icon: <Laptop size={24} />,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices and screen sizes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            With over 5 years of experience in full-stack development, I specialize in
            building scalable web applications and delivering exceptional digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="hover-card bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 transform transition-transform duration-200 group-hover:scale-110">
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-6"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                  alt="Profile"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover-card"
                  srcSet="
                    https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=225&fit=crop 300w,
                    https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop 400w,
                    https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop 600w
                  "
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 600px"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I started my journey as a web developer in 2018, working with startups
                and helping them build their digital presence. Over the years, I've
                had the opportunity to work with various technologies and frameworks,
                constantly learning and adapting to the ever-evolving tech landscape.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Bachelor of Computer Science",
                    institution: "University of Technology",
                    year: "2015-2019"
                  },
                  {
                    title: "AWS Certified Developer",
                    institution: "Amazon Web Services",
                    year: "2021"
                  },
                  {
                    title: "Professional Scrum Master",
                    institution: "Scrum.org",
                    year: "2022"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-indigo-600 pl-4 hover-card bg-white dark:bg-gray-900 p-4 rounded-r-lg"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.institution} ({item.year})
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;