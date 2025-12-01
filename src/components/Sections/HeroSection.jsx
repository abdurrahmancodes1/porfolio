import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
// Use public asset path (files in `public/assets` are served from `/assets/...`)
const PROFILE_PIC = "/assets/profileImage.png";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const imageAnim = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* Background Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="text-center"
            >
              {/* Profile Image */}
              <motion.div
                variants={imageAnim}
                className="mb-8 flex justify-center"
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-full rounded-2xl overflow-hidden border-4 ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    } shadow-2xl`}
                  >
                    <img
                      src={
                        PROFILE_PIC ||
                        "https://ik.imagekit.io/arcodes/PORTFOLIO/profileImage.png"
                      }
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className={`text-sm uppercase tracking-wider ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl font-light mb-6 leading-snug px-4"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building scalable
                </span>{" "}
                <span className="text-blue-500 font-medium">
                  web applications
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that make an impact
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className={`text-base sm:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-8 mx-auto max-w-md leading-relaxed`}
              >
                I build modern, responsive web applications focused on
                performance and clean user experience.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Project
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                variants={item}
                className="flex justify-center space-x-6 mb-8"
              >
                {[
                  {
                    icon: FiGithub,
                    link: "https://github.com/abdurrahmancodes1",
                  },
                  {
                    icon: FiLinkedin,
                    link: "https://www.linkedin.com/in/abdur1rahman/",
                  },
                  { icon: Mail, link: "mailto:abdurrahman.codes1@gmail.com" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Side */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="text-left"
            >
              <motion.div
                variants={item}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-6`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={item}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building digital
                </span>
                <br />
                <span className="text-blue-500 font-medium">experiences</span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className={`text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-12 font-light leading-relaxed max-w-lg`}
              >
                I build scalable, elegant web applications with modern MERN
                technologies and clean UI.
              </motion.p>

              <motion.div variants={item} className="flex gap-6 mb-8">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium"
                >
                  View Project
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* <motion.div variants={item} className="flex space-x-6 mb-12">
                {[{ icon: FiGithub }, { icon: FiLinkedin }, { icon: Mail }].map(
                  (social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`p-3 rounded-full transition-colors ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  )
                )}
              </motion.div> */}
              <motion.div variants={item} className="flex space-x-6 mb-12">
                {[
                  {
                    icon: FiGithub,
                    link: "https://github.com/abdurrahmancodes1",
                  },
                  {
                    icon: FiLinkedin,
                    link: "https://www.linkedin.com/in/abdur1rahman/",
                  },
                  { icon: Mail, link: "mailto:abdurrahman.codes1@gmail.com" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageAnim}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-80 h-96 rounded-3xl overflow-hidden border-4 ${
                    isDarkMode ? "border-gray-800" : "border-gray-300"
                  } shadow-2xl`}
                >
                  <img
                    src={PROFILE_PIC}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-3xl border border-blue-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 rounded-3xl border border-purple-500/10"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator (FIXED) */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("work")}
        >
          <ArrowDown
            size={24}
            className={isDarkMode ? "text-gray-400" : "text-gray-600"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
