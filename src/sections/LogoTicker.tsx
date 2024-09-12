"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestrialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import acmeDarkLogo from "@/assets/acme.png";
import quantumDarkLogo from "@/assets/quantum.png";
import echoDarkLogo from "@/assets/echo.png";
import celestrialDarkLogo from "@/assets/celestial.png";
import pulseDarkLogo from "@/assets/pulse.png";
import apexDarkLogo from "@/assets/apex.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useTheme } from "next-themes";

export const LogoTicker = () => {

    const { theme, setTheme } = useTheme();

  return (
    <div className="py-8 md:py-12 bg-white dark:bg-black">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {theme === "light" ? (
              <>
                <Image
                  src={acmeLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={quantumLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={echoLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={celestrialLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={pulseLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={apexLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                {/* {For second time loop} */}
                <Image
                  src={acmeLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={quantumLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={echoLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={celestrialLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={pulseLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={apexLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
              </>
            ) : (
              <>
                <Image
                  src={acmeDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={quantumDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={echoDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={celestrialDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={pulseDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={apexDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                {/* {For second time loop} */}
                <Image
                  src={acmeDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={quantumDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={echoDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={celestrialDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={pulseDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
                <Image
                  src={apexDarkLogo}
                  alt="Acme Logo"
                  className="logo-ticker-image"
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
