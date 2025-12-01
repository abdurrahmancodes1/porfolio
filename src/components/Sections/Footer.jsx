import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Mail, Heart, ArrowUp, Code2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
// import { SOCIAL_LINKS } from "../../../public/utils/data";
import { SOCIAL_LINKS } from "../../../utils/data";
const Footer = () => {
  const { isDarkMode } = useTheme();
  const footRef = useRef(null);
  const isInView = useInView(footRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const AnimatedGradientLine = () => (
    <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
      <motion.div
        className={`h-px bg-gradient-to-r ${
          isDarkMode
            ? "from-transparent via-blue-500 to-transparent"
            : "from-transparent via-blue-600 to-transparent"
        }`}
        initial={{ width: "0%", opacity: 0 }}
        animate={isInView ? { width: "100%", opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-0 h-px w-32 bg-gradient-to-r ${
          isDarkMode
            ? "from-blue-400 via-purple-500 to-blue-400"
            : "from-blue-500 via-purple-600 to-blue-500"
        }`}
        animate={{ x: ["-50%", "calc(100vw + 50%)"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
            delay: 1,
          },
        }}
      />
    </div>
  );

  return (
    <footer
      ref={footRef}
      className={`relative ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } overflow-hidden z-20`}
    >
      <AnimatedGradientLine />

      {/* Background glow */}
      <motion.div
        style={{ y: scrollY }}
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        <div
          className={`absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-blue-500/50" : "bg-blue-400/50"
          }`}
        />
        <div
          className={`absolute top-10 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-blue-500/50" : "bg-blue-100/50"
          }`}
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center space-y-10"
          >
            {/* --- Name and tagline --- */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div variants={itemVariants} className="text-center py-8">
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  Crafted with passion by
                </div>
                <div className="flex justify-center">
                  <h3
                    className={`text-4xl font-medium  text-blue-600 font-handwriting`}
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                  >
                    Abdur Rahman
                  </h3>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-md mx-auto`}
              >
                Crafting digital experiences with passion and a touch of magic.
              </motion.p>
            </motion.div>

            {/* --- Social Links --- */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6 flex-wrap"
            >
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all hover:text-blue-700 duration-300 ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-700/70"
                      : "bg-gray-100/50 hover:bg-gray-200/50 "
                  } backdrop-blur-sm`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* --- Heart Divider --- */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center space-y-2"
            >
              <div
                className={`h-px w-16 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-400"
                }`}
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blue-500"
              >
                <Heart size={18} fill="currentColor" />
              </motion.div>
              <div
                className={`h-px w-16 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
            </motion.div>

            {/* --- Scroll to top button --- */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className={`mt-8 inline-flex items-center justify-center p-3 rounded-full shadow-lg ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "bg-blue-500 hover:bg-blue-400 text-white"
              }`}
            >
              <ArrowUp size={20} />
            </motion.button>

            {/* --- Copyright --- */}
            <motion.p
              variants={itemVariants}
              className={`text-xs mt-6 ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              © {new Date().getFullYear()} Abdur Rahman. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
