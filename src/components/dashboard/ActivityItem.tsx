
import React from "react";

interface ActivityItemProps {
  text: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ text }) => {
  return (
    <div className="text-base opacity-70 bg-[#F4F7FF] p-2.5 rounded-lg transition-all duration-300 hover:opacity-100 hover:bg-white hover:shadow-sm">
      {text}
    </div>
  );
};

export default ActivityItem;
