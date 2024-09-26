import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { CiCircleMore } from "react-icons/ci";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const navObj: { icon: React.ReactNode; title: string; link: string }[] = [
  {
    icon: <FiHome className="text-[25px]" />,
    title: "home",
    link: "/",
  },
  {
    icon: <FaProjectDiagram className="text-[25px]" />,
    title: "projects",
    link: "/projects",
  },
  // {
  //   icon: <CiCircleMore className="text-[25px]" />,
  //   title: "more",
  // },
];

const socialLinkArray: {
  icon: React.ReactNode;
  title: string;
  link: string;
}[] = [
  {
    icon: <FaXTwitter className="text-[25px]" />,
    title: "Twitter",
    link: "https://x.com/faisaldotdev",
  },
  {
    icon: <FaInstagram className="text-[25px]" />,
    title: "Instagram",
    link: "https://www.instagram.com/_faizal_989/",
  },
  {
    icon: <FaLinkedinIn className="text-[25px]" />,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/faisal-khan-2ab228304/",
  },
];

export const Sidebar = () => {
  return (
    <nav className=" flex flex-col gap-[] w-[100%] h-[92vh] bg-[#1C1B23] rounded-md">
      <ul className="flex flex-col text-[#8B8A90] pb-0 p-[30px] gap-[35px]">
        {navObj.map(({ icon, title }) => {
          return (
            <li
              key={title}
              className="flex  items-center gap-[20px] cursor-pointer hover:bg-[#ffffff57] hover:text-white p-[10px] rounded-md transition-all duration-75"
            >
              {<span className="">{icon}</span>}
              <span className="capitalize">{title}</span>
            </li>
          );
        })}
      </ul>
      {/* social links */}
      <h1 className="flex  items-center pt-[50px] px-[30px] text-[#8B8A90] text-[22px]">
        Social Links
      </h1>
      <ul className="flex flex-col text-[#8B8A90] mt-[30px]   px-[30px] gap-[35px]">
        {socialLinkArray.map(({ icon, title, link }) => {
          return (
            <a key={title} href={link} target="_blank">
              <li className="flex  items-center gap-[20px] cursor-pointer hover:bg-[#ffffff57] hover:text-white p-[10px] rounded-md transition-all duration-75">
                {<span className="">{icon}</span>}
                <span className="capitalize">{title}</span>
              </li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};
