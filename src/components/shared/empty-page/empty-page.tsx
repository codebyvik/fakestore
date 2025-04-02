import React from "react";

type Props = {
  Icon: React.ReactNode;
  text?: string;
};

const EmptyPage = ({ Icon, text }: Props) => {
  return (
    <div className="w-full min-h-[400px] text-gray-400 flex justify-center items-center flex-col">
      {Icon}
      {text && <p className="my-2">{text}</p>}
    </div>
  );
};

export default EmptyPage;
