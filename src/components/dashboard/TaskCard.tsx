
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useTaskContext } from "@/context/TaskContext";

interface TaskCardProps {
  company: string;
  title: string;
  description: string;
  deadline: string;
  isCompleted?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  company,
  title,
  description,
  deadline,
  isCompleted = true,
}) => {
  const { decrementAssignedTask, incrementCompletedTask, addActivity } = useTaskContext();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleCompletedClick = () => {
    if (buttonClicked) return;
    
    toast({
      title: "Task Completed Successfully",
      description: `${title} has been marked as completed`,
    });
    
    if (isCompleted) {
      decrementAssignedTask();
      incrementCompletedTask();
      addActivity(title);
      setButtonClicked(true);
    }
  };

  return (
    <div className="bg-[#F4F7FF] p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-white">
      <div className="mb-4">
        <div className="text-base bg-white px-4 py-2 rounded-lg inline-block transition-colors hover:bg-[#F4F7FF] hover:text-[#3752FD]">
          {company}
        </div>
      </div>
      <h3 className="text-2xl font-medium tracking-[0.72px] text-[#00303C] mb-4 transition-colors hover:text-[#3752FD]">
        {title}
      </h3>
      <div className="text-base opacity-50 min-h-[92px] bg-white mb-4 p-4 rounded-lg transition-all hover:opacity-80 hover:shadow-md">
        {description}
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-t-[rgba(55,82,253,0.20)] border-solid">
        <div className="transition-transform hover:translate-y-[-2px]">
          <div className="text-sm opacity-70 mb-1">Deadline</div>
          <div className="text-base font-medium">{deadline}</div>
        </div>
        <button
          className={`text-white text-base font-medium cursor-pointer bg-[#3752FD] px-5 py-2.5 rounded-lg border-[none] transition-all hover:bg-[#2541EA] hover:shadow-md ${
            !isCompleted || buttonClicked ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleCompletedClick}
          disabled={buttonClicked}
        >
          {buttonClicked ? "Completed ✓" : "Completed"}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
