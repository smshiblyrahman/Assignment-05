
import React, { createContext, useContext, useState } from "react";

interface TaskContextType {
  assignedTaskCount: number;
  completedTaskCount: number;
  activities: string[];
  decrementAssignedTask: () => void;
  incrementCompletedTask: () => void;
  addActivity: (taskTitle: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [assignedTaskCount, setAssignedTaskCount] = useState(5);
  const [completedTaskCount, setCompletedTaskCount] = useState(23);
  const [activities, setActivities] = useState<string[]>([
    "You have Complete The Task Add Dark Mode at 12:48:15 PM",
    "You have Complete The Task Add Dark Mode at 12:48:15 PM",
  ]);

  const decrementAssignedTask = () => {
    setAssignedTaskCount((prev) => Math.max(0, prev - 1));
  };

  const incrementCompletedTask = () => {
    setCompletedTaskCount((prev) => prev + 1);
  };

  const addActivity = (taskTitle: string) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const time = `${formattedHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    
    const newActivity = `You have Completed The Task ${taskTitle} at ${time}`;
    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <TaskContext.Provider
      value={{
        assignedTaskCount,
        completedTaskCount,
        activities,
        decrementAssignedTask,
        incrementCompletedTask,
        addActivity,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
