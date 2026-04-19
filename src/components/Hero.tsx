"use client";
import Image from "next/image";
import {
  LightningIcon,
  ArrowRightIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";
import { BeretLady } from "../../public/images/images";

function Hero() {
  return (
    <header className="relative w-full min-h-[794px] flex flex-col items-center justify-start bg-white overflow-visible">
      <div className="absolute top-0 left-[7px] right-[7px] bottom-[194px] h-[600px] bg-white overflow-hidden rounded-b-[50px]">
        <div className="framer-bg w-full h-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-[24px] p-[24px] overflow-hidden">
        <div className="not-italic font-medium w-fit h-fit flex flex-row justify-center items-center px-4 py-2 bg-[linear-gradient(92deg,rgba(37,99,255,0.05)_0%,rgba(37,99,255,0)_100%)] overflow-visible content-center flex-nowrap gap-[10px] rounded-[48px] border border-[rgba(37,99,255,0.2)] h6">
          ALL IN ONE - SAAS FRAMER TEMPLATE
        </div>

        <div className="w-full  flex items-center justify-center flex-wrap overflow-visible gap-x-3 gap-y-2 md:gap-x-4">
          <h1 className="h1">Supercharge</h1>
          <div className="flex items-center justify-center text-primary-400">
            <LightningIcon size={48} weight="duotone" />
          </div>
          <h1 className="h1">your</h1>
          <h1 className="h1">work and</h1>
          <h1 className="h1">life productivity</h1>
        </div>

        <p className="text-body relative text-center">
          Get things done faster and more efficiently with our intelligent
          virtual assistant
        </p>

        <div className="w-full flex items-center flex-col justify-center gap-[10px]">
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

        <div className="flex flex-col items-center justify-center gap-[10px]">
          <div className="flex items-center justify-center -space-x-[18px]">
            <div className="w-[42px] h-[42px] rounded-full border-white border-[3px] overflow-hidden">
              <Image src={BeretLady} alt="Beret Lady" width={42} height={42} />
            </div>
            <div className="w-[42px] h-[42px] rounded-full border-white border-[3px] overflow-hidden">
              <Image src={BeretLady} alt="Beret Lady" width={42} height={42} />
            </div>
            <div className="w-[42px] h-[42px] rounded-full border-white border-[3px] overflow-hidden">
              <Image src={BeretLady} alt="Beret Lady" width={42} height={42} />
            </div>
            <div className="w-[42px] h-[42px] rounded-full border-white border-[3px] overflow-hidden">
              <Image src={BeretLady} alt="Beret Lady" width={42} height={42} />
            </div>
            <div className="w-[42px] h-[42px] rounded-full border-white border-[3px] overflow-hidden">
              <Image src={BeretLady} alt="Beret Lady" width={42} height={42} />
            </div>
            <div className="w-[42px] h-[42px] rounded-full border-white border-[3px] overflow-hidden">
              <Image src={BeretLady} alt="Beret Lady" width={42} height={42} />
            </div>
          </div>
          <p className="body-text text-neutral-50 text-center">
            +14M Happy Users
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
