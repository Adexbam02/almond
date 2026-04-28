import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import TabContents from "@/components/TabContents";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Partners />
      <TabContents />
    </div>
  );
}
