import React from "react";
import { motion } from "framer-motion";

interface TextSectionProps {
  heading: string;
  text1: string;
  pic: string;
  text2: string;
}

const TextSection: React.FC<TextSectionProps> = ({
  heading,
  text1,
  pic,
  text2,
}) => {
  return (
    <>
      <h1>
        <span className="e10_760">{heading}</span>
      </h1>
      <span className="e10_741">
        {text1} <b>Profile Perfection!</b>
      </span>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
        <div className={`fade-in ${pic}`}></div>
      </motion.div>

      <span className="e10_740">{text2}</span>
    </>
  );
};

export default TextSection;
