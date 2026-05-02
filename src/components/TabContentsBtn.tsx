interface TabButtonProps {
  title: string;
  icon: React.ReactNode;
  classname?: string;
  onClick?: () => void;
}

function TabContentsBtn({ title, icon, classname, onClick }: TabButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-full text-neutral-400 p-[20px] rounded-[8px] ease-in-out duration-300 text- flex items-start justify-start cursor-pointer gap-[10px] font-normal ${classname}`}
      >
        <div>{icon}</div>
        <p>{title}</p>
      </button>
    </>
  );
}

export default TabContentsBtn;
