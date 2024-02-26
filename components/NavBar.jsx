"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
const links = [
  { url: "/", title: "home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    Closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(0, 0, 0)",
    },
  };
  const centerVariants = {
    Closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    Closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(0, 0, 0",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemsVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS  */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}

      <div className="md:hidden lg:flex  xl:w-1/3 xl:justify-center ">
        {" "}
        <Link
          href="/"
          className="bg-black rounded-md p-1 font-semibold text-sm flex items-center justify-center"
        >
          <span className="text-white mr-1">Rohan </span>
          <span className="bg-white rounded-sm flex items-center justify-center  w-12 h-8">
            .Dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3 ">
        {/* SOCIAL  */}
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24}></Image>
        </Link>
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24}></Image>
        </Link>
        <Link href="/">
          <Image src="/linkedin-logo.png" alt="" width={24} height={24}></Image>
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((perv) => !perv)}
        >
          <motion.div
            animate={open ? "opened" : "close"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "close"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "close"}
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
      </div>
      {/* MENU LIST */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-red-50  text-black flex flex-col justify-center gap-8 text-4xl font-medium items-center z-40"
        >
          {links.map((link) => (
            <motion.div variants={listItemsVariants} key={link.title}>
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;

// import React from 'react';
// import motion from 'framer-motion';

// const About = () => {
//   return (
//     <motion.div
//       className="h-full"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       {/* CONTAINER */}
//       <div >
//         {/* TEXT CONTAINER */}
//         <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
//         </div>
//         {/* BIOGRAPHY CONTAINER */}
//         <div>
//           BIOGRAPHY
//         </div>
//         {/* SKILLS CONTAINER */}
//         <div>
//           SKILLS </div>
//         {/* EXPERIENCE CONTAINER */}
//         <div>
//         EXPERIENCE </div>

//         {/* SVG CONTAINER */}
//         <div className="hidden"></div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;
