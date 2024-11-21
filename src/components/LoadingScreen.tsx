import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen = ({ isContentLoaded }) => {
  const [loading, setLoading] = useState(true);

  // Immediately show the loader when the component mounts
  useEffect(() => {
    setLoading(true); // Show loader immediately when the component mounts

    // When content is loaded, hide the loader
    if (isContentLoaded) {
      setLoading(false);
    }
  }, [isContentLoaded]);

  return (
    loading ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="text-purple-500"
        >
          <Code2 size={40} />
        </motion.div>
      </motion.div>
    ) : null
  );
};

export default LoadingScreen;
