"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import helixImage from "@/assets/helix2.png";
import emojiStarImage from "@/assets/emojistar.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import React from "react";
import { useTheme } from "next-themes";

export const CallToAction = () => {
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
    <section
      ref={heroRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip dark:from-black dark:to-[#5D2CAB]"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title dark:hidden">Sign up for free today</h2>
          <h2 className="section-title dark:block">Get instant access</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          {theme === "light" ? (
            <>
              <motion.img
                src={starImage.src}
                alt="star"
                width={360}
                className="absolute -left-[350px] -top-[137px] "
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img
                src={springImage.src}
                alt="star"
                width={360}
                className="absolute -right-[331px] -top-[19px] "
                style={{
                  translateY: translateY,
                }}
              />
            </>
          ) : (
            <>
              <motion.img
                src={emojiStarImage.src}
                alt="star"
                width={240}
                className="absolute -left-[250px] -top-[137px] "
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img
                src={helixImage.src}
                alt="star"
                width={240}
                className="absolute -right-[250px] -top-[19px] "
                style={{
                  translateY: translateY,
                }}
              />
            </>
          )}
        </div>
        <div className="flex gap-2 mt-10 justify-center dark:sm:flex-col dark:md:flex-row dark:max-w-sm dark:mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="hidden dark:block h-12 bg-white/20 px-5 rounded-lg placeholder:text-[#9CA3AF]"
          />
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1 dark:hidden">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
