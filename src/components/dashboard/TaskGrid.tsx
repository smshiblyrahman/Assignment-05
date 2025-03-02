import React from "react";
import TaskCard from "./TaskCard";

const tasks = [
  {
    company: "ShopEase",
    title: "Fix Mobile Button Issue",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    deadline: "21 March 2025",
    isCompleted: true,
  },
  {
    company: "CloudSync",
    title: "Add Dark Mode",
    description:
      "Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
    deadline: "21 March 2025",
    isCompleted: false,
  },
  {
    company: "SwiftPay",
    title: "Optimize Home page",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    deadline: "21 March 2025",
    isCompleted: true,
  },
  {
    company: "Meta",
    title: "Add new emoji 🤲",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    deadline: "21 March 2025",
    isCompleted: true,
  },
  {
    company: "Google LLC",
    title: "Integrate OpenAI API",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    deadline: "21 March 2025",
    isCompleted: true,
  },
  {
    company: "Glassdoar",
    title: "Improve Job searching",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    deadline: "21 March 2025",
    isCompleted: true,
  },
];

const TaskGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(3,1fr)] gap-6 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          company={task.company}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          isCompleted={task.isCompleted}
        />
      ))}
    </div>
  );
};

export default TaskGrid;
