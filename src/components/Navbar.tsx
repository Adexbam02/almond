"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Menu, Close } from "../../public/icons/icons";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative top-0 w-full flex flex-col z-50">
      <div className="bg-white p-[24px] flex items-center justify-between w-full border-b border-neutral-100">
        <div className="flex items-center justify-start gap-4">
          <Link href="/">
            <Logo />
          </Link>

          <Link
            href="/hirings"
            className="shrink-0 not-italic font-medium w-fit h-fit flex flex-row justify-center items-center px-4 py-2 bg-[linear-gradient(92deg,rgba(37,99,255,0.05)_0%,rgba(37,99,255,0)_100%)] overflow-visible content-center flex-nowrap gap-[10px] rounded-[48px] border border-[rgba(37,99,255,0.2)] h6"
          >
            We're Hiring
          </Link>
        </div>

        <div className="flex items-center justify-center cursor-pointer md:hidden">
          <Image
            onClick={handleMenuClick}
            src={isMenuOpen ? Close : Menu}
            alt="Menu"
            width={32}
            height={32}
          />
        </div>

        <div
          className={`md:flex items-center justify-center gap-[24px] hidden`}
        >
          <Link
            className="text-neutral-400 text-[16px] w-full min-h-[20px] flex items-center justify-center"
            href="/hirings"
          >
            Features
          </Link>
          <Link
            className="text-neutral-400 text-[16px] w-full min-h-[20px] flex items-center justify-center"
            href="/hirings"
          >
            Pricing
          </Link>
          <Link
            className="text-neutral-400 text-[16px] w-full min-h-[20px] flex items-center justify-center"
            href="/hirings"
          >
            Blog
          </Link>
          <Link
            className="text-neutral-400 text-[16px] w-full min-h-[20px] flex items-center justify-center"
            href="/hirings"
          >
            Contact
          </Link>
        </div>
      </div>
      <div
        className={`bg-white flex gap-[24px] mt-[24px] flex-col items-center justify-center relative z-50 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          className="text-neutral-400 text-[16px] w-full min-h-[20px] flex items-center justify-center"
          href="/hirings"
        >
          Features
        </Link>
        <Link
          className="text-neutral-400 text-[16px] w-full min-h-[20px] flex items-center justify-center"
          href="/hirings"
        >
          Pricing
        </Link>
        <Link
          className="text-neutral-400 text-[16px] w-full min-h-[20px] flex items-center justify-center"
          href="/hirings"
        >
          Blog
        </Link>
        <Link
          className="text-neutral-400 text-[16px] w-full min-h-[20px] flex items-center justify-center"
          href="/hirings"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
