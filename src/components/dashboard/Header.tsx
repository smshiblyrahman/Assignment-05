import React, { useState, useEffect } from "react";
import { useTaskContext } from "@/context/TaskContext";

const DevBoardLogo = () => (
  <svg
    width="248"
    height="58"
    viewBox="0 0 248 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="logo"
    style={{ width: "247px", height: "57px" }}
  >
    <path
      d="M0 0H38.5627C45.5647 0 51.2409 5.6762 51.2409 12.6782V38.5627C51.2409 45.5647 45.5647 51.2409 38.5627 51.2409H0V0Z"
      fill="#3752FD"
    ></path>
    <path
      d="M10.0369 10.0369H36.4236C39.3411 10.0369 41.7061 12.402 41.7061 15.3194V36.4236C41.7061 39.3411 39.3411 41.7061 36.4236 41.7061H15.3194C12.402 41.7061 10.0369 39.3411 10.0369 36.4236V10.0369Z"
      fill="white"
    ></path>
    <path
      d="M15.8477 15.8477H31.1946C33.5285 15.8477 35.4206 17.7398 35.4206 20.0737V30.138C35.4206 33.0555 33.0555 35.4206 30.138 35.4206H20.0737C17.7398 35.4206 15.8477 33.5285 15.8477 31.1946V15.8477Z"
      fill="#3752FD"
    ></path>
    <text
      fill="#00303C"
      xmlSpace="preserve"
      style={{ whiteSpace: "pre" }}
      fontFamily="Poppins"
      fontSize="35.6698"
      fontWeight="bold"
      letterSpacing="0.03em"
    >
      <tspan x="132.434" y="42.9005">
        Board
      </tspan>
    </text>
    <text
      fill="#00303C"
      xmlSpace="preserve"
      style={{ whiteSpace: "pre" }}
      fontFamily="Poppins"
      fontSize="35.6698"
      fontWeight="300"
      letterSpacing="0.03em"
    >
      <tspan x="62.3431" y="42.9005">
        Dev
      </tspan>
    </text>
  </svg>
);

const NotificationBadge = () => {
  const { completedTaskCount } = useTaskContext();
  
  return (
    <div className="w-[123px] h-16 flex items-center justify-center text-xl font-medium text-[#3752FD] bg-[#F4F7FF] rounded-[32px]">
      {completedTaskCount}
    </div>
  );
};

const CheckmarkBadge = () => {
  const { completedTaskCount } = useTaskContext();
  
  return (
  <svg
    width="123"
    height="64"
    viewBox="0 0 123 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="checkmark-badge"
    style={{ width: "123px", height: "64px" }}
  >
    <rect width="123" height="64" rx="32" fill="#F4F7FF"></rect>
    <g clipPath="url(#clip0_7_140)">
      <path
        d="M42.3333 16H23.6667C19.9866 16.0044 17.0044 18.9866 17 22.6667V41.3334C17.0044 45.0134 19.9866 47.9956 23.6667 48H42.3334C46.0134 47.9956 48.9956 45.0134 49 41.3333V22.6667C48.9956 18.9866 46.0134 16.0044 42.3333 16ZM43.6667 26.772L31.328 39.1107C30.2868 40.1523 28.5984 40.1526 27.5568 39.1114C27.5565 39.1112 27.5562 39.1109 27.556 39.1107L22.3333 33.8894C21.8116 33.3676 21.8116 32.5218 22.3333 32.0001C22.8551 31.4784 23.7009 31.4783 24.2226 32.0001L29.4439 37.2214L41.7839 24.8827C42.3057 24.3628 43.1501 24.3643 43.6699 24.886C44.1899 25.4077 44.1884 26.2521 43.6667 26.772Z"
        fill="#3752FD"
      ></path>
    </g>
    <text
      fill="#1E1E1E"
      xmlSpace="preserve"
      style={{ whiteSpace: "pre" }}
      fontFamily="Poppins"
      fontSize="32"
      fontWeight="bold"
      letterSpacing="0.03em"
    >
      <tspan x="66.6919" y="45.2">
        {completedTaskCount}
      </tspan>
    </text>
    <defs>
      <clipPath id="clip0_7_140">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(17 16)"
        ></rect>
      </clipPath>
    </defs>
  </svg>
)};

const ProfileCircle = () => (
  <div className="w-16 h-16 relative bg-[#F4F7FF] rounded-[50%]">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="profile-icon"
      style={{
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <g clipPath="url(#clip0_7_142)">
        <path
          d="M20 40C23.6435 40 27.0592 39.0252 30.0014 37.3229V36.4509L20 40Z"
          fill="#962B7C"
        ></path>
        <path
          d="M20 20L15.3125 31.7969L20 40C23.7159 40 27.1618 38.688 30.0013 36.4509V20H20Z"
          fill="#962B7C"
        ></path>
        <path
          d="M29.6526 36.7188L30.0014 37.3229C33.0363 35.5668 35.5669 33.0364 37.3229 30.0014V23.4577L29.6526 36.7188Z"
          fill="#622876"
        ></path>
        <path
          d="M37.3229 23.4577V20H20L29.6526 36.7188C33.6247 33.7465 36.4745 28.9935 37.3229 23.4577Z"
          fill="#622876"
        ></path>
        <path
          d="M37.5417 18.5952L35.6836 29.0549L37.323 30.0014C39.0252 27.0592 40 23.6435 40 20L37.5417 18.5952Z"
          fill="#077CCC"
        ></path>
        <path
          d="M37.5417 18.5953L31.7969 15.3125L20 20L35.6835 29.0549C36.8996 26.3362 37.5855 23.2592 37.5855 20C37.5855 19.5277 37.5701 19.0594 37.5417 18.5953Z"
          fill="#077CCC"
        ></path>
        <path
          d="M37.323 9.99863H35.2317L37.5856 20H40.0001C40.0001 16.3565 39.0253 12.9408 37.323 9.99863Z"
          fill="#09A1E5"
        ></path>
        <path
          d="M22.3437 9.99863L20 20H37.5855C37.5855 16.3565 36.7284 12.9408 35.2316 9.99863H22.3437Z"
          fill="#09A1E5"
        ></path>
        <path
          d="M30.0013 2.6771H28.7939L35.6835 10.945L37.3229 9.99855C35.5668 6.96362 33.0364 4.43316 30.0013 2.6771Z"
          fill="#49B296"
        ></path>
        <path
          d="M28.794 2.6771H22.3437L20 20L35.6835 10.9451C34.138 7.48925 31.7354 4.61271 28.794 2.6771Z"
          fill="#49B296"
        ></path>
        <path
          d="M20 0L29.6526 3.28121L30.0014 2.6771C27.0592 0.974809 23.6435 0 20 0Z"
          fill="#89C247"
        ></path>
        <path
          d="M15.3125 8.20314L20 20L29.6525 3.28121C26.8815 1.20765 23.5651 0 20 0L15.3125 8.20314Z"
          fill="#89C247"
        ></path>
        <path
          d="M9.99854 37.3229C12.9407 39.0252 16.3564 40 19.9999 40V20H9.99854V37.3229Z"
          fill="#CB2E81"
        ></path>
        <path
          d="M2.677 30.0014C4.43306 33.0364 6.96352 35.5668 9.99853 37.3229L19.9999 20H2.677V30.0014Z"
          fill="#FF3187"
        ></path>
        <path
          d="M0 20C0 23.6435 0.974809 27.0592 2.6771 30.0014L20 20L8.20314 15.3125L0 20Z"
          fill="#FF5178"
        ></path>
        <path
          d="M2.6771 9.99863C0.974809 12.9408 0 16.3565 0 20H20L17.6563 9.99863H2.6771Z"
          fill="#FF9259"
        ></path>
        <path
          d="M9.99853 2.6771C6.96352 4.43316 4.43306 6.96362 2.677 9.99863L19.9999 20L17.6562 2.6771H9.99853Z"
          fill="#FFB24A"
        ></path>
        <path
          d="M19.9999 0C16.3564 0 12.9407 0.974809 9.99854 2.6771L19.9999 20V0Z"
          fill="#FFD23B"
        ></path>
        <circle cx="20" cy="20" r="10.4688" fill="white"></circle>
      </g>
      <defs>
        <clipPath id="clip0_7_142">
          <rect width="40" height="40" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="status-icon"
      style={{
        width: "11px",
        height: "11px",
        position: "absolute",
        bottom: "14px",
        right: "14px",
      }}
    >
      <path
        d="M10.2189 2.25C9.95979 2.25 9.75012 2.45991 9.75012 2.71875V3.18914C8.87974 2.03114 7.49941 1.3125 6.00012 1.3125C3.79601 1.3125 1.91594 2.81189 1.42844 4.95858C1.37121 5.21105 1.5296 5.46234 1.78183 5.51958C1.81708 5.52759 1.85187 5.53125 1.88618 5.53125C2.09998 5.53125 2.29357 5.38383 2.34302 5.16642C2.7326 3.44934 4.23682 2.25 6.00012 2.25C7.35227 2.25 8.57899 2.98383 9.2412 4.125H8.34387C8.08479 4.125 7.87512 4.33491 7.87512 4.59375C7.87512 4.85259 8.08479 5.0625 8.34387 5.0625H10.2189C10.4779 5.0625 10.6876 4.85259 10.6876 4.59375V2.71875C10.6876 2.45991 10.4779 2.25 10.2189 2.25Z"
        fill="#3752FD"
      ></path>
      <path
        d="M1.78125 9.75C2.04033 9.75 2.25 9.54009 2.25 9.28125V8.80069C3.12506 9.97734 4.49447 10.6875 6 10.6875C8.20411 10.6875 10.0842 9.18811 10.5717 7.04142C10.6289 6.78895 10.4705 6.53766 10.2183 6.48042C9.96333 6.42159 9.71428 6.58111 9.65705 6.83358C9.26752 8.55066 7.7633 9.75 6 9.75C4.64738 9.75 3.43219 9.03399 2.76183 7.875H3.65625C3.91533 7.875 4.125 7.66509 4.125 7.40625C4.125 7.14741 3.91533 6.9375 3.65625 6.9375H1.78125C1.52217 6.9375 1.3125 7.14741 1.3125 7.40625V9.28125C1.3125 9.54009 1.52217 9.75 1.78125 9.75Z"
        fill="#3752FD"
      ></path>
    </svg>
  </div>
);

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  return (
    <div className="text-[#00303C] bg-[#F4F7FF] py-2 px-4 rounded-lg hover:shadow-md transition-all">
      <div className="font-medium">{formattedDate}</div>
      <div className="text-[#3752FD]">{formattedTime}</div>
    </div>
  );
};

const ColorChangeButton = () => {
  const colors = [
    '#3752FD', // Default blue
    '#8B5CF6', // Vivid Purple
    '#D946EF', // Magenta Pink
    '#F97316', // Bright Orange
    '#0EA5E9', // Ocean Blue
    '#1EAEDB', // Bright Blue
    '#33C3F0', // Sky Blue
  ];
  
  const [colorIndex, setColorIndex] = useState(0);
  const [rainbowActive, setRainbowActive] = useState(false);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (rainbowActive) {
      interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 300);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [rainbowActive, colors.length]);
  
  const handleClick = () => {
    if (rainbowActive) {
      document.documentElement.style.setProperty('--primary', colors[colorIndex]);
      document.documentElement.style.setProperty('--background', `hsl(${colorIndex * 30}, 70%, 97%)`);
      setRainbowActive(false);
    } else {
      setRainbowActive(true);
    }
  };
  
  const borderStyle = rainbowActive 
    ? {
        backgroundImage: `linear-gradient(90deg, 
          ${colors[0]}, 
          ${colors[1]}, 
          ${colors[2]}, 
          ${colors[3]}, 
          ${colors[4]}, 
          ${colors[5]}, 
          ${colors[0]})`,
        padding: '2px',
        borderRadius: '50%',
      } 
    : {};
  
  return (
    <div style={borderStyle} className="transition-all duration-300 hover:scale-110 flex items-center justify-center">
      <button 
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        style={{ 
          backgroundColor: colors[colorIndex],
          transform: rainbowActive ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}
        onClick={handleClick}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
        </svg>
      </button>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-white mb-6 p-6 rounded-2xl max-sm:flex-col max-sm:gap-4 max-sm:text-center">
      <div className="flex items-center gap-4">
        <DevBoardLogo />
        <DateTimeDisplay />
      </div>
      <div className="flex items-center gap-6 max-sm:w-full max-sm:justify-center">
        <ColorChangeButton />
        <NotificationBadge />
        <div className="flex items-center">
          <CheckmarkBadge />
          <ProfileCircle />
        </div>
      </div>
    </header>
  );
};

export default Header;
