"use client";

import productImage from "@/assets/product-image.png";
import productDarkImage from "@/assets/app-screen.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollImage } = useScroll({
    target: sectRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateX = useTransform(scrollImage, [0, 1], [15, 0]);
  const opacity = useTransform(scrollImage, [0, 1], [0.5, 1]);
  return (
    <section
      ref={sectRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip dark:from-black dark:to-[#5D2CAB]"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={productDarkImage}
            alt="Product Image"
            className="hidden dark:block mt-14"
          />
        </motion.div>

        <div className="relative dark:hidden">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image src={productImage} alt="Product Image" className="mt-10" />
          </motion.div>
          <motion.img
            src={pyramidImage.src}
            alt="pyramoid Image"
            className="hidden md:block absolute -right-36 -top-32 "
            height={262}
            width={262}
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
