"use client";

import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";
import { FaDiscord, FaSpotify } from "react-icons/fa6";
import { Button } from "./ui/button";
import Call from "./call"; // Import the Call component

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SocialButtons = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
        {[0, 1].map((index) => (
          <motion.div key={index} className="item" variants={item}>
            {/* Render the appropriate button content based on the index */}
            {index === 0 ? (
              <Button
                variant="ghost"
                className="relative h-14 w-full border p-4"
              >
                <a
                  href="https://twitter.com/detactl"
                  target="_blank"
                  className="w-full h-full flex my-auto"
                  aria-label="Twitter"
                >
                  <Twitter className="mr-2 my-auto" />
                  @detactl
                </a>
              </Button>
            ) : index === 1 ? (
              <Button
                variant="ghost"
                className="relative h-14 w-full border p-4"
              >
                <a
                  href="https://github.com/putnug1122"
                  target="_blank"
                  className="w-full h-full flex my-auto"
                  aria-label="GitHub"
                >
                  <Github className="mr-2 w-7 h-7 my-auto" />
                  @putnug1122
                </a>
              </Button>
            ) : null}
          </motion.div>
        ))}
      </div>
      {/* <Call /> component is still part of the staggered animation */}
      <motion.div className="item" variants={item}>
        <Call />
      </motion.div>
    </motion.div>
  );
};

export default SocialButtons;
