"use client";

import Image from "next/image";
import {
  LightningIcon,
  ArrowRightIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";
import { BeretLady, Screenshot } from "../../public/images/images";

function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Scroll-based animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <header className="relative w-full min-h-[794px] flex flex-col items-center justify-start bg-white overflow-visible">
      <div className="absolute top-0 left-[7px] right-[7px] bottom-[194px] h-[600px] bg-white overflow-hidden rounded-b-[50px]">
        <div className="framer-bg w-full h-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-[24px] p-[24px] overflow-hidden">
        {/* Badge */}
        <div className="not-italic font-medium w-fit flex items-center px-4 py-2 bg-[linear-gradient(92deg,rgba(37,99,255,0.05)_0%,rgba(37,99,255,0)_100%)] gap-[10px] rounded-[48px] border border-[rgba(37,99,255,0.2)] h6">
          ALL IN ONE - SAAS FRAMER TEMPLATE
        </div>

        {/* Heading */}
        <div className="w-full flex items-center justify-center flex-wrap gap-x-3 gap-y-2 md:gap-x-4">
          <h1 className="h1">Supercharge</h1>
          <div className="flex items-center justify-center text-primary-400">
            <LightningIcon size={48} weight="duotone" />
          </div>
          <h1 className="h1">your</h1>
          <h1 className="h1">work and</h1>
          <h1 className="h1">life productivity</h1>
        </div>

        {/* Description */}
        <p className="text-body text-center">
          Get things done faster and more efficiently with our intelligent
          virtual assistant
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-col items-center justify-center gap-[10px]">
          <BlueButton
            text="Get Started"
            href="/"
            icon2={<ArrowRightIcon size={24} weight="duotone" />}
          />
          <WhiteButton
            text="Let's Contact"
            href="/"
            icon2={<PaperPlaneTiltIcon size={24} weight="duotone" />}
          />
        </div>

        {/* Avatars */}
        <div className="flex flex-col items-center gap-[10px]">
          <div className="flex items-center justify-center -space-x-[18px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-[42px] h-[42px] rounded-full border-white border-[3px] overflow-hidden"
              >
                <Image src={BeretLady} alt="User" width={42} height={42} />
              </div>
            ))}
          </div>
          <p className="body-text text-neutral-50 text-center">
            +14M Happy Users
          </p>
        </div>

        {/* Animated Screenshot */}
        <div className="w-full perspective-[1200px]">
          <motion.div
            ref={ref}
            style={{
              scale,
              rotateX,
            }}
            initial={{
              opacity: 0,
              scale: 1.2,
              rotate: -2,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.44, 0, 0.41, 0.99],
            }}
            className="w-full rounded-[6px] shadow-[0px_120px_164px_-25px_rgba(107,110,148,0.12)]"
          >
            <Image
              src={Screenshot}
              alt="Screenshot"
              className="w-full rounded-[6px] shadow-[0px_0px_0px_6px_#F4F4F4]"
            />
          </motion.div>
        </div>
        <div className="min-h-screen"></div>
      </div>
    </header>
  );
}

export default Hero;
