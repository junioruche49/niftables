import React, { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

function SectionWrapper({ children }: { children: any }) {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`w-full flex justify-center mx-auto relative z-0`}
    >
      <div className="w-10/12">{children}</div>
    </motion.section>
  );
}

export default SectionWrapper;
