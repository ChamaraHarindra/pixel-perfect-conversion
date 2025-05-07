"use client";
import React from "react";
import * as motion from "motion/react-client";
function AnimatedDiv({
  children,
  duration = 1,
  className,
  whileInView = true,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  whileInView?: boolean;
}) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={
          whileInView
            ? {
                opacity: 1,
                y: [20, -5, 0],
              }
            : {}
        }
        animate={whileInView ? {} : { opacity: 1, y: [20, -5, 0] }}
        transition={{
          duration: duration,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
}

export default AnimatedDiv;
