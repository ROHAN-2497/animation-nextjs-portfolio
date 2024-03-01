"use client";
import Brain from "@/components/Brain";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({});
  return (
    <motion
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className=" h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-54 lg:w-2/3 lg:pr-0 xl:w-1/2">
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
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 387 183"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.9626 79.8953C45.9626 72.5196 52.7445 66.7344 60.1884 69.9488C67.2755 73.0091 75.226 78.2459 81.8163 82.4398C84.8582 84.3755 88.0363 84.9587 90.7219 87.6443C100.106 97.028 113.937 113.415 105.526 127.546C102.685 132.319 96.8586 138.101 91.1846 135.006C83.3474 130.731 77.1811 125.168 70.4241 119.913C67.6658 117.767 63.7543 110.164 66.7809 106.959C69.9332 103.621 77.3355 106.966 80.0815 109.041C86.7295 114.064 99.0493 116.249 99.0493 125.696C99.0493 128.05 95.4541 133.756 93.8447 135.526C91.7578 137.822 91.0567 143.435 90.2015 146.514C88.3578 153.151 85.9963 163.977 92.399 168.431C98.5254 172.693 133.776 190.895 134.44 172.305C134.835 161.252 136.48 144.944 125.072 139.459C122.481 138.213 112.404 134.71 110.095 138.302C107.907 141.704 109.932 148.474 112.87 150.678C118.262 154.721 130.339 157.168 136.291 152.759C139.007 150.748 138.301 142.57 138.604 139.806C139.66 130.181 141.892 119.664 139.934 110.024C138.359 102.271 134.904 93.3487 130.855 86.5456C128.994 83.4183 126.323 81.3807 124.841 78.0448C122.179 72.055 118.47 76.6723 118.017 81.0519C117.323 87.7594 116.4 97.4774 119.058 103.836C121.764 110.311 126.859 117.451 130.971 123.093C137.603 132.193 149.436 142.35 161.273 142.35C169.559 142.35 170.26 139.642 170.815 131.594C171.201 125.997 169.541 118.409 163.123 118.409C150.436 118.409 138.302 134.008 148.03 144.952C159.759 158.148 217.692 172.441 210.312 139.227C208.577 131.424 197.604 133.667 193.773 137.724C191.659 139.962 189.652 146.401 194.871 145.357C199.918 144.348 202.531 137.243 204.124 133.155C209.25 119.998 209.031 105.619 205.57 92.0393C201.077 74.4144 189.161 59.4648 178.564 45.0825C176.1 41.7389 173.285 35.8304 169.831 33.2854C164.02 29.0031 159.44 22.1197 153.697 17.4404C150.103 14.5121 146.404 12.0091 142.536 9.46003C138.955 7.09986 133.77 2.05336 129.236 1.82665C121.71 1.45035 115.463 11.6906 111.54 16.8621C105.157 25.2762 95.7059 31.1152 89.1606 39.3574C81.3837 49.1506 71.4651 56.9345 61.5763 64.5129C52.3668 71.5706 44.8737 80.4675 36.4787 88.3961C24.4676 99.7399 18.6771 111.797 11.8437 126.852C8.66669 133.851 2.24414 139.555 2.24414 147.555C2.24414 155.565 2.68942 170.746 12.5376 172.537C18.2682 173.579 24.3474 173.461 30.1175 173.52C48.8535 173.712 67.5908 173.56 86.327 173.809C135.952 174.468 185.865 179.631 235.467 176.585C249.166 175.744 265.347 175.628 278.318 170.224C287.364 166.454 295.847 162.306 305.324 159.525C310.606 157.975 315.956 156.658 321.227 155.072C322.912 154.566 327.68 153.476 326.027 152.875C318.326 150.075 306.228 151.821 298.211 151.487C278.02 150.646 257.613 148.487 237.375 149.752C224.673 150.546 211.984 153.287 199.555 155.882C188.497 158.191 177.685 161.452 166.477 163.053C147.277 165.796 127.716 166.189 108.417 168.142C85.3928 170.471 62.5827 174.929 39.6593 178.204C28.753 179.762 39.3734 180.291 43.8807 179.592C66.9698 176.009 89.6587 170.225 112.87 167.39C138.437 164.267 164.001 163.169 189.725 163.169C216.495 163.169 242.602 157.247 269.297 156.113C279.846 155.666 290.431 155.882 300.987 155.882C311.898 155.882 323.731 157.223 334.527 155.362C341.43 154.172 348.011 153.762 355.114 153.8C365.868 153.858 375.091 156.353 385.301 153.8"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
          {/* {SKILLS CONTAINER}  */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion Bacics
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </div>
            {/* SKILL SCROLL SVG */}
            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
          {/* {EXPERIENCE CONTAINER}  */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/*  EXPERIENCE LIST  */}
            <div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg ">
                    Junior JavaScript Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I am Learner I always try to Better
                  </div>
                  {/* LEARNING DATE */}
                  <div className="text-red-400 text-sm font-semibold">
                    {" "}
                    2023-2024 Present
                  </div>
                </div>
                {/* CENTER */}
                <div className=" ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 0"></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SVG CONTAINER */}
      <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </motion>
  );
};

export default About;
