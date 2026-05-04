import Image from "next/image";
import { motion } from "framer-motion";
import { BottomSection } from "../../public/data";
import {
  AIPlannerandReminder,
  TaskAutomation,
} from "../../public/images/images";

function ContentSectionBtmCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.44, 0, 0.41, 0.99],
      }}
      className="w-full gap-[24px]  perspective-distant flex flex-col items-center justify-center"
    >
      <div className="w-full grid grid-rows-4 gap-y-[24px]">
        {BottomSection.map((item) => (
          <motion.div
            whileHover={{
              scale: 1,
              rotateX: 10,
              rotateY: -10,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 1,
            }}
            className="w-full flex flex-col  rounded-[20px] border border-[#E4E4E4] items-start"
          >
            <div className="w-full p-[24px] gap-[36px] flex flex-col items-start justify-between text-neutral-900">
              <item.icon size={48} weight="duotone" />
              <h3 className="h3">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

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
            AI Plannerand Reminder
          </h3>
          <p className="body text-left text-[#888888] w-full">
            Efficiently manage your schedules and never miss a beat with AI
            technology.
          </p>
        </div>
        <Image
          src={AIPlannerandReminder}
          alt=""
          className="w-full h-[300px] object-cover object-center"
        />
      </motion.div>
    </motion.div>
  );
}

export default ContentSectionBtmCard;
