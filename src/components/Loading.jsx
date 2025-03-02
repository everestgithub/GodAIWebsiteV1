import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "/GodAi.png";
const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading");

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Animate the loading text with dots
    const textInterval = setInterval(() => {
      setLoadingText((prev) => (prev === "Loading..." ? "Loading" : prev + "."));
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: progress === 100 ? "-100%" : 0 }}
      transition={{
        duration: 1.2,
        delay: progress === 100 ? 0.5 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => progress === 100 && onComplete?.()}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
    >
      <div className="w-full max-w-md px-4 flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.div
            className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center"
            animate={{
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.05, 1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <span className="text-white text-3xl font-bold">
                <img src={logo} alt="" srcset="" />
            </span>
          </motion.div>
        </motion.div>

        {/* Progress Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/80 text-sm mb-3 font-medium"
        >
          {loadingText}
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-2">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
            className="h-full bg-white"
          />
        </div>

        {/* Progress Percentage */}
        <motion.div
          className="text-white/60 text-xs font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {progress}%
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-indigo-500"
            animate={{ y: [0, 10, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-[30%] right-[20%] w-3 h-3 rounded-full bg-purple-500"
            animate={{ y: [0, -15, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[25%] w-4 h-4 rounded-full bg-pink-500"
            animate={{ y: [0, 12, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
