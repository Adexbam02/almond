"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumMembership } from "../../public/images/images";
import TabContentsBtn from "./TabContentsBtn";
import { TabContentsData } from "../../public/data";
import { useEffect, useState } from "react";

function TabContents() {
  const [activeTab, setActiveTab] = useState(1);

  const activeTabData = TabContentsData.find((tab) => tab.id === activeTab);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === TabContentsData.length) {
          // loop back to first
          return 1;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="p-[24px] md:p-[64px] gap-[24px] flex flex-col items-center justify-center bg-white w-full max-w-[1400px]">
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
            TAB CONTENT SECTION
          </div>
          <h2 className="h2">Here’s the special features of the product</h2>
        </div>
        <p className="text-[#888888] body">
          The AI-powered virtual assistant can be controlled hands-free! Simply
          give voice commands to Alexa or Siri and the assistant will respond
          accordingly.{" "}
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 60,
          mass: 1,
        }}
        className="w-full h-fit flex flex-col items-center justify-center md:flex-row pt-[36px] gap-[10px] lg:px-[36px] lg:pt-[36px] md:gap-[36px]"
      >
        <div className="w-full md:w-[618px] md:h-[444px] h-[316px] flex items-center justify-center gap-[10px] bg-[#F0F4FF] rounded-[20px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={activeTabData?.image || PremiumMembership}
                height={316}
                width={440}
                alt={activeTabData?.title || "Tab Image"}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full md:max-w-[302px] flex flex-col items-center justify-center p-[16px] gap-[10px]">
          {TabContentsData.map((tabContent) => {
            const Icon = tabContent.icon;

            return (
              <TabContentsBtn
                key={tabContent.id}
                classname={
                  tabContent.id === activeTab ? "bg-primary-400 text-white" : ""
                }
                title={tabContent.title}
                icon={<Icon size={24} weight="duotone" />}
                onClick={() => setActiveTab(tabContent.id)}
              />
            );
          })}
        </div>
      </motion.div>

      <div className="min-h-screen"></div>
    </section>
  );
}

export default TabContents;
