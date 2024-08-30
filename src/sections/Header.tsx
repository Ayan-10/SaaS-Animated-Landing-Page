"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black dark:bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] text-white dark:text-black text-sm gap-3">
        <p className="text-white/60 dark:text-black/80 hidden md:block">
          Streamline your wortkflow and boost productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5 dark:bg-black">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>

              <Image
                src={Logo}
                alt="Logo"
                height={40}
                width={40}
                className="relative"
              />
            </div>
            <div className="flex items-center justify-end gap-8">
              <MenuIcon className="h-5 w-5 md:hidden text-black dark:text-transparent dark:text-white" />
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <a
                  href="#"
                  className="dark:text-opacity-60 dark:text-white dark:hover:text-opacity-100"
                >
                  {" "}
                  About{" "}
                </a>
                <a
                  href="#"
                  className="dark:text-opacity-60 dark:text-white dark:hover:text-opacity-100"
                >
                  {" "}
                  Features{" "}
                </a>
                <a
                  href="#"
                  className="dark:text-opacity-60 dark:text-white dark:hover:text-opacity-100"
                >
                  {" "}
                  Customers{" "}
                </a>
                <a
                  href="#"
                  className="dark:text-opacity-60 dark:text-white dark:hover:text-opacity-100"
                >
                  {" "}
                  Updates{" "}
                </a>
                <a
                  href="#"
                  className="dark:text-opacity-60 dark:text-white dark:hover:text-opacity-100"
                >
                  {" "}
                  Help{" "}
                </a>
                <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                  Get it for free
                </button>
              </nav>
              <div
                className="relative w-14 md:w-16 h-7 flex items-center dark:bg-gray-700 bg-[#D5DEFF] cursor-pointer rounded-full p-1"
                onClick={() => {
                  console.log(theme);
                  if (theme === "light") setTheme("dark");
                  else setTheme("light");
                }}
              >
                <FaMoon className="text-white" size={16} />
                <div
                  className="absolute bg-white w-6 h-5
                 rounded-full shadow-md transform transition-transform 
                 duration-300 dark:left-1 right-1"
                ></div>
                <BsSunFill className="ml-auto text-yellow-400 m-1" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
