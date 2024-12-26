import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, isDarkModeClicked }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { threshold: 0.2, once: true } , );

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative overflow-hidden w-full h-full">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        className="w-full h-full"// Ensure it takes up the parent's dimensions
        
      >
        {children}
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: `${isDarkModeClicked ? "white" : "black"}`,
            zIndex: 50,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Reveal;
