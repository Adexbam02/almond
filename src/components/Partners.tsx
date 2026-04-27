"use client";

import { motion } from "framer-motion";
import Ticker1 from "./logos/Ticker1";
import Ticker2 from "./logos/Ticker2";
import Ticker3 from "./logos/Ticker3";
import Ticker4 from "./logos/Ticker4";
import Ticker5 from "./logos/Ticker5";

function Partners() {
  return (
    <section className="p-[24px] md:p-[48px] lg:p-[64px] relative flex items-center justify-center md:gap-[10px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          ease: [0.44, 0, 0.41, 0.99],
        }}
        className="w-full h-fit flex flex-col items-center justify-center gap-[24px] md:gap-[48px]"
      >
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <div className="not-italic font-medium w-fit flex items-center px-4 py-2 bg-[linear-gradient(92deg,rgba(37,99,255,0.05)_0%,rgba(37,99,255,0)_100%)] gap-[10px] rounded-[48px] border border-[rgba(37,99,255,0.2)] h6">
            1M+ BUSINESSES USES OUR PRODUCT
          </div>
          <h2 className="h2">They trusted us</h2>
        </div>

        <div className="overflow-hidden w-full flex items-center justify-center">
          <motion.div
            className="flex items-center justify-center gap-[24px] md:gap-[48px] w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,rgba(0,0,0,0)_100%)]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20, // control speed
              ease: "linear",
            }}
          >
            {/* First set */}
            <Ticker1 />
            <Ticker2 />
            <Ticker3 />
            <Ticker4 />
            <Ticker5 />

            <Ticker1 />
            <Ticker2 />
            <Ticker3 />
            <Ticker4 />
            <Ticker5 />

            <Ticker1 />
            <Ticker2 />
            <Ticker3 />
            <Ticker4 />
            <Ticker5 />
          </motion.div>
        </div>

        <div className="min-h-screen"></div>
      </motion.div>
    </section>
  );
}

export default Partners;
