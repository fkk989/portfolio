import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { CiCircleMore } from "react-icons/ci";

export const Navbar = () => {
  const navObj: Array<{ icon: React.ReactNode; title: string }> = [
    {
      icon: <FiHome className="text-[25px]" />,
      title: "home",
    },
    {
      icon: <FaProjectDiagram className="text-[25px]" />,
      title: "project",
    },
    {
      icon: <CiCircleMore className="text-[25px]" />,
      title: "more",
    },
  ];
  const socialObj: Array<{ icon: React.ReactNode; title: string }> = [];
  return (
    <nav className="w-[100%] h-[92vh] bg-[#1C1B23] rounded-md">
      <ul className="w-[100%] h-[100%] flex flex-col text-[#8B8A90]  p-[30px] gap-[35px]">
        {navObj.map(({ icon, title }) => {
          return (
            <li
              key={title}
              className="flex  items-center gap-[20px] cursor-pointer hover:bg-[#ffffff57] hover:text-white p-[10px] rounded-md transition-all duration-75"
            >
              <span className="">{icon}</span>
              <span className="capitalize">{title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
