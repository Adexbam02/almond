"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Complexsystems,
  ConsistentDesignSystem,
  TaskAutomation,
} from "../../public/images/images";
import { TextAaIcon } from "@phosphor-icons/react";
import ContentSectionBtmCard from "./ContentSectionBtmCard";

function ContentSection() {
  return (
    <section className="p-[24px] md:p-[48px] lg:p-[64px] flex flex-col items-center justify-center gap-[24px] ">
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          ease: [0.44, 0, 0.41, 0.99],
        }}
        className="gap-[24px] flex items-center justify-center flex-col perspective-distant text-center md:max-w-[634px]"
      >
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <div className="not-italic font-medium w-fit flex items-center px-4 py-2 bg-[linear-gradient(92deg,rgba(37,99,255,0.05)_0%,rgba(37,99,255,0)_100%)] gap-[10px] rounded-[48px] border border-[rgba(37,99,255,0.2)] h6">
            CARDS CONTENT SECTION
          </div>
          <h2 className="h2">AI-Powered virtual assistant</h2>
        </div>
        <p className="text-[#888888] body">
          Effortlessly manage your budget, tasks, subscriptions, and schedules
          with an AI-powered virtual assistant. Stay organized and focused.{" "}
        </p>
      </motion.header>

      <div className="w-full flex flex-col items-center justify-center gap-[24px]">
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.44, 0, 0.41, 0.99],
          }}
          className="w-full perspective-distant flex flex-col items-center gap-[24px]"
        >
          <motion.div
            whileHover={{
              scale: 1,
              rotateX: 5,
              rotateY: -5,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 1,
            }}
            className="w-full rounded-[20px] border-[#E4E4E4] border perspective-distant flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-start justify-center gap-[16px] p-[24px]">
              <h3 className="h3 text-left w-full text-neutral-900">
                Consistent Design System
              </h3>
              <p className="body text-left text-[#888888] w-full">
                Our virtual assistant can handle all your budget management
              </p>
            </div>
            <Image
              src={ConsistentDesignSystem}
              alt=""
              className="w-full h-[300px] object-cover object-center"
            />
          </motion.div>
          <motion.div className="flex flex-col items-center justify-center gap-[24px]">
            <motion.div
              whileHover={{
                scale: 1,
                rotateX: 5,
                rotateY: -5,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 1,
              }}
              className="w-full rounded-[20px] border-[#E4E4E4] border perspective-distant flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-start justify-center gap-[16px] p-[24px]">
                <h3 className="h3 text-left w-full text-neutral-900">
                  Complex systems Simplified
                </h3>
                <p className="body text-left text-[#888888] w-full">
                  Track your monthly subscription
                </p>
              </div>
              <Image
                src={Complexsystems}
                alt=""
                className="w-full h-[300px] object-cover object-center"
              />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1,
                rotateX: 5,
                rotateY: -5,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 1,
              }}
              className="w-full rounded-[20px] border-[#E4E4E4] border perspective-distant flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-start justify-center gap-[16px] p-[24px]">
                <h3 className="h3 text-left w-full text-neutral-900">
                  Task Automation
                </h3>
                <p className="body text-left text-[#888888] w-full">
                  Automate repetitive tasks and streamline your workflow
                </p>
              </div>
              <Image
                src={TaskAutomation}
                alt=""
                className="w-full h-[300px] object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <ContentSectionBtmCard />
      </div>

      <div className="min-h-screen"></div>
    </section>
  );
}

export default ContentSection;
