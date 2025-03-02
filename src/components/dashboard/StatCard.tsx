
import React from "react";
import { useTaskContext } from "@/context/TaskContext";

interface StatCardProps {
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ icon }) => {
  const { assignedTaskCount } = useTaskContext();
  
  return (
    <div className="flex-1 bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      {React.cloneElement(icon as React.ReactElement, {
        assignedTaskCount: String(assignedTaskCount).padStart(2, '0')
      })}
    </div>
  );
};

export default StatCard;
