"use client";
import PlusIcon from "@/assets/plus.svg";
import MinusIcon from "@/assets/minus.svg";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "How does the pricing work for teams?",
    answer:
      "For Teams, pricing is typically based on a per-user, per-month subscription fee.",
  },
  {
    question: "What kinds of payment do you accept?",
    answer:
      "We accept all major credit cards, debit cards, cash, and most mobile wallets.",
  },
  {
    question: "How do you protect client data? ",
    answer:
      "We use encryption methods like password protectors, virtual private networks (VPNs), malware protectors, and antispyware products.",
  },
  {
    question: "Why do I need your software solutions?",
    answer:
      "Our software can help you manage your inventory, streamline customer interactions, and track finances more efficiently, even with a small team.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-black/30 dark:border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // className={twMerge("hidden", isOpen === true && "mt-4 block")}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white dark:bg-gradient-to-b dark:from-[#5D2CAB] dark:to-black py-[72px] md:py-24">
      <div className="container">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
