import React from "react";

interface HighlightCardProps {
  icon: React.ReactNode;
  text: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ icon, text }) => {
  return (
    <div className="w-[524px] h-32 flex items-center gap-6 p-8 rounded-xl max-md:w-full bg-[#3752FD] text-white">
      {icon}
      <div className="text-white text-2xl font-medium tracking-[0.72px]">
        {text}
      </div>
    </div>
  );
};

export default HighlightCard;
