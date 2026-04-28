"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PremiumMembership } from "../../public/images/images";

function TabContents() {
  return (
    <section className="p-[24px] gap-[24px] flex flex-col items-center justify-center bg-white w-full max-w-[1400px]">
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          ease: [0.44, 0, 0.41, 0.99],
        }}
        className="gap-[24px] flex items-center justify-center flex-col perspective-distant text-center"
      >
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <div className="not-italic font-medium w-fit flex items-center px-4 py-2 bg-[linear-gradient(92deg,rgba(37,99,255,0.05)_0%,rgba(37,99,255,0)_100%)] gap-[10px] rounded-[48px] border border-[rgba(37,99,255,0.2)] h6">
            TAB CONTENT SECTION
          </div>
          <h2 className="h2">Here’s the special features of the product</h2>
        </div>
        <p className="body">
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
        className="w-full h-fit flex flex-col items-center justify-center pt-[36px]"
      >
        <div className="w-full h-[316px] flex items-center justify-center gap-[10px] bg-[#F0F4FF] rounded-[20px]">
          <Image
            src={PremiumMembership}
            height={316}
            width={440}
            className=""
            alt="Premium Membership"
          />
        </div>
      </motion.div>

      <div className="min-h-screen"></div>
    </section>
  );
}

export default TabContents;
