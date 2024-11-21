import React, { useState, useEffect, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Lazy loading of components
const Home = React.lazy(() => import("./components/Home"));
const Education = React.lazy(() => import("./components/Education"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Contact = React.lazy(() => import("./components/Contact"));

const App: React.FC = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  // Show the loader immediately when the app loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true); // Hide the loading screen after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AnimatePresence mode="wait">
        {/* Show the loading screen immediately */}
        {!isContentLoaded && <LoadingScreen isContentLoaded={false} />}
        
        {/* Once content is loaded, show the rest of the app */}
        {isContentLoaded && (
          <>
            <Suspense fallback={<LoadingScreen isContentLoaded={false} />}>
              <Navbar />
              <main>
                <Home />
                <Education />
                <Projects />
                <Skills />
                <Contact />
              </main>
              <Footer />
              <ScrollToTop />
            </Suspense>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
