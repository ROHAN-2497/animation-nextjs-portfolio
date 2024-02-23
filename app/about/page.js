"use Client"
import React from 'react';
import motion from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div >
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
        </div>
        {/* BIOGRAPHY CONTAINER */}
        <div>
          BIOGRAPHY
        </div>
        {/* SKILLS CONTAINER */}
        <div>
          SKILLS </div>
        {/* EXPERIENCE CONTAINER */}
        <div>
        EXPERIENCE </div>

        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default About;
