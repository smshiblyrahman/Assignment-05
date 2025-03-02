
import React from "react";
import Header from "@/components/dashboard/Header";
import StatsRow from "@/components/dashboard/StatsRow";
import TaskGrid from "@/components/dashboard/TaskGrid";
import ActivitySidebar from "@/components/dashboard/ActivitySidebar";
import { Toaster } from "@/components/ui/toaster";
import { TaskProvider } from "@/context/TaskContext";

const Index: React.FC = () => {
  return (
    <TaskProvider>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen bg-[#F4F7FF] px-[140px] py-6 max-md:p-6">
        <Header />
        <div className="flex gap-6">
          <div className="flex-1">
            <StatsRow />
            <div className="h-px bg-[rgba(55,82,253,0.20)] mx-0 my-8" />
            <TaskGrid />
          </div>
          <ActivitySidebar />
        </div>
      </div>
      <Toaster />
    </TaskProvider>
  );
};

export default Index;
