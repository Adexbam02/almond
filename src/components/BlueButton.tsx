import Link from "next/link";

interface BlueButtonProps {
  text: string;
  href: string;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
}

function BlueButton({ text, href, icon1, icon2 }: BlueButtonProps) {
  return (
    <Link
      href={href}
      className="group w-full md:w-[162px]  h-fit md:h-[50px] px-8 py-3.5 flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 ease-out rounded-xl bg-primary-400 overflow-hidden shadow-[0_0_0_1px_#215BEE] hover:bg-[#1C4EE0] hover:shadow-[0_0_0_4px_rgba(102,145,255,0.4),0_8px_24px_rgba(33,91,238,0.4)] hover:-translat-y-0.5 active:translat-y-0 active:scal-95"
    >
      {icon1 && (
        <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1 flex items-center">
          {icon1}
        </span>
      )}
      <span className="shrink-0">{text}</span>
      {icon2 && (
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 flex items-center">
          {icon2}
        </span>
      )}
    </Link>
  );
}

export default BlueButton;
