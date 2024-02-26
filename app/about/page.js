"use Client";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-54">
          {/* {BIOGRAPHY CONTAINER}  */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              neque suscipit delectus rerum cum saepe? Sint iste, repudiandae
              saepe doloribus accusamus repellat reiciendis voluptate error
              iusto consequuntur praesentium minus magnam vel molestias adipisci
              blanditiis voluptates aperiam perspiciatis aliquid vero, expedita
              consequatur! Excepturi natus eius deleniti magnam, dolore incidunt
              fugit nobis!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              omnis.
            </span>
            {/* BIOGRAPHY SIGN */}
            <div></div>
          </div>
          {/* {SKILLS CONTAINER}  */}
          <div>SKILLS</div>
          {/* {EXPERIENCE CONTAINER}  */}
          <div>EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion>
  );
};

export default About;
