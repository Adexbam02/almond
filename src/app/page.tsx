import ContentSection from "@/components/ContentSection";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import TabContents from "@/components/TabContents";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Partners />
      <TabContents />
      <ContentSection />
    </div>
  );
}
