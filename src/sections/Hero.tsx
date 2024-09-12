"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cursorImage from "@/assets/cursor.png";
import messageImage from "@/assets/message.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";


export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const { theme, setTheme } = useTheme();

  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest)
  // );
  return (
    <div>
      {theme === "light" ? (
        <section
          ref={heroRef}
          className="pt-8 pb-20 md:pt-8 md:pb-10 dark:bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip dark:py-[72px] dark:relative"
        >
          <div className="hidden dark:block absolute bg-black h-[375px] w-[750px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)]"></div>
          <div className="container dark:relative">
            <div className="md:flex items-center">
              <div className="md:w-[478px]">
                <div className="dark:flex dark:items-center dark:justify-center">
                  <div className="tag dark:inline-flex dark:gap-3">
                    <span className=" dark:bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD90,#C3F0B2,#2FD8FE)] dark:text-transparent dark:bg-clip-text ">
                      Version 2.0 is here
                    </span>
                    <span className="hidden dark:inline-flex dark:items-center dark:gap-1">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 dark:hidden">
                  Pathway to productivity
                </h1>
                <h1 className="text-7xl md:text-7xl font-bold tracking-tight mt-8 text-center hidden dark:block">
                  One Task <br /> at a Time
                </h1>
                <p className="text-xl text-[#010D3e] tracking-tight mt-6 dark:text-white dark:mt-8 dark:text-center">
                  Celebrate the joy of accomplishment with an app designed to
                  track your progress, motivate your efforts, and celebrate your
                  successes.
                </p>
                <div className="flex gap-1 items-center mt-[30px] dark:justify-center">
                  <button className="btn btn-primary">Get for free</button>
                  <button className="btn btn-text gap-1 dark:hidden">
                    <span className="dark:text-white">Learn more</span>
                    <ArrowRight className="h-5 w-5 dark:text-white" />
                  </button>
                </div>
              </div>
              <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative dark:hidden">
                <motion.img
                  src={cogImage.src}
                  alt="Cog Image"
                  className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                  animate={{
                    translateY: [-30, 30],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="hidden md:block -top-8 -left-32 md:absolute"
                  drag
                  dragSnapToOrigin
                >
                  <motion.img
                    src={cylinderImage.src}
                    width={220}
                    height={220}
                    alt="Cyliner Image"
                    className="max-w-none"
                    draggable="false"
                    style={{ translateY: translateY }}
                  />
                </motion.div>
                <motion.div
                  className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
                  drag
                  dragSnapToOrigin
                  style={{
                    rotate: 30,
                    translateY: translateY,
                  }}
                >
                  <motion.img
                    src={noodleImage.src}
                    width={220}
                    alt="Cyliner Image"
                    className="max-w-none"
                    draggable="false"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          ref={heroRef}
          className="bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] overflow-x-clip dark:overflow-clip py-[72px] md:py-24 relative"
        >
          <div className="absolute bg-black h-[375px] w-[750px] md:w-[1536px] md:h-[768px] lg:w-[2400px] lg:[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] md:top-[calc(100%-120px)]"></div>
          <div className="container relative">
            {/* <div className="flex items-center justify-center"> */}
            {/* <div className="md:w-[478px]"> */}
            <div className="flex items-center justify-center">
              <div className="tag dark:inline-flex dark:gap-3">
                <span className=" dark:bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD90,#C3F0B2,#2FD8FE)] dark:text-transparent dark:bg-clip-text ">
                  Version 2.0 is here
                </span>
                <span className="hidden dark:inline-flex dark:items-center dark:gap-1">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 dark:hidden">
              Pathway to productivity
            </h1>
            <div className="flex justify-center  mt-8">
              <div className="inline-flex relative">
                <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-center inline-flex">
                  One Task
                  <br /> at a Time
                </h1>
                <motion.div
                  className="absolute right-[500px] top-[160px] hidden md:inline"
                  drag
                  dragSnapToOrigin
                >
                  <motion.img
                    src={cursorImage.src}
                    alt=""
                    height={200}
                    width={200}
                    className="max-w-none"
                    draggable="false"
                    style={{ translateY: translateY }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-[86px] left-[520px] hidden md:inline"
                  drag
                  dragSnapToOrigin
                >
                  <motion.img
                    src={messageImage.src}
                    alt=""
                    height={200}
                    width={200}
                    className="max-w-none"
                    draggable="false"
                    style={{ translateY: translateY }}
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-xl text-[#010D3e] tracking-tight mt-8 dark:text-white dark:mt-8 dark:text-center max-w-md">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </p>
            </div>

            <div className="flex gap-1 items-center mt-[30px] dark:justify-center">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1 dark:hidden">
                <span className="dark:text-white">Learn more</span>
                <ArrowRight className="h-5 w-5 dark:text-white" />
              </button>
            </div>
            {/* </div> */}
            {/* <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative dark:hidden">
              <motion.img
                src={cogImage.src}
                alt="Cog Image"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                animate={{
                  translateY: [-30, 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={cylinderImage.src}
                width={220}
                height={220}
                alt="Cyliner Image"
                className="hidden md:block -top-8 -left-32 md:absolute"
                style={{ translateY: translateY }}
              />
              <motion.img
                src={noodleImage.src}
                width={220}
                alt="Cyliner Image"
                className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
                style={{
                  rotate: 30,
                  translateY: translateY,
                }}
              />
            </div> */}
          </div>
          {/* </div> */}
        </section>
      )}
    </div>
  );
};
