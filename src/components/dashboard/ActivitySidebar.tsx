
import React from "react";
import ActivityItem from "./ActivityItem";
import { useTaskContext } from "@/context/TaskContext";

const ActivitySidebar: React.FC = () => {
  const { activities, addActivity } = useTaskContext();

  const handleClearHistory = () => {
    // We'll just update the display for now since we don't have a method to clear activities in context
    const activityListElement = document.querySelector('.activity-list');
    if (activityListElement) {
      activityListElement.innerHTML = '<p class="text-center text-gray-500">No activities to show</p>';
    }
  };

  return (
    <aside className="w-[366px] bg-white p-6 rounded-2xl max-sm:w-full">
      <div className="mb-6">
        <div className="flex items-center gap-4 text-xl font-medium mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="activity-icon"
            style={{ width: "24px", height: "24px" }}
          >
            <g clipPath="url(#clip0_10_141)">
              <path
                d="M12 0C9.0455 0.00210637 6.19613 1.09662 4 3.073V1C4 0.734784 3.89464 0.48043 3.70711 0.292893C3.51957 0.105357 3.26522 0 3 0C2.73478 0 2.48043 0.105357 2.29289 0.292893C2.10536 0.48043 2 0.734784 2 1V4C2 4.79565 2.31607 5.55871 2.87868 6.12132C3.44129 6.68393 4.20435 7 5 7H8C8.26522 7 8.51957 6.89464 8.70711 6.70711C8.89464 6.51957 9 6.26522 9 6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H5C4.96628 4.995 4.93289 4.98799 4.9 4.979C6.52952 3.33783 8.67813 2.31308 10.9791 2.07967C13.28 1.84626 15.5906 2.41866 17.5165 3.69916C19.4424 4.97967 20.8642 6.88889 21.5392 9.10095C22.2142 11.313 22.1005 13.6908 21.2176 15.8283C20.3347 17.9659 18.7372 19.7308 16.698 20.8218C14.6587 21.9127 12.304 22.2621 10.0358 21.8102C7.76764 21.3584 5.72659 20.1333 4.26106 18.3442C2.79553 16.5551 1.99637 14.3127 2 12C2 11.7348 1.89464 11.4804 1.70711 11.2929C1.51957 11.1054 1.26522 11 1 11C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 14.3734 0.703788 16.6935 2.02236 18.6668C3.34094 20.6402 5.21509 22.1783 7.4078 23.0866C9.60051 23.9948 12.0133 24.2324 14.3411 23.7694C16.6689 23.3064 18.8071 22.1635 20.4853 20.4853C22.1635 18.8071 23.3064 16.6689 23.7694 14.3411C24.2324 12.0133 23.9948 9.60051 23.0866 7.4078C22.1783 5.21509 20.6402 3.34094 18.6668 2.02236C16.6935 0.703788 14.3734 0 12 0V0Z"
                fill="#00303C"
              ></path>
              <path
                d="M12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11.0001 12.2652 11.1055 12.5195 11.293 12.707L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13 11.586V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z"
                fill="#00303C"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_10_141">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <span>Activity Log</span>
        </div>
        <button
          onClick={handleClearHistory}
          className="text-white text-base font-medium w-[150px] cursor-pointer bg-[#3752FD] px-5 py-2.5 rounded-lg border-[none] hover:bg-[#2541EA] transition-colors"
        >
          Clear History
        </button>
      </div>
      <div className="h-px bg-[rgba(55,82,253,0.20)] mb-6" />
      <div className="flex flex-col gap-6 activity-list">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <ActivityItem key={index} text={activity} />
          ))
        ) : (
          <p className="text-center text-gray-500">No activities to show</p>
        )}
      </div>
    </aside>
  );
};

export default ActivitySidebar;
