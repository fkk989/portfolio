import React from "react";
import { Sidebar } from "./Sidebar";

export const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" grid grid-cols-12 items-center   pl-[10px] pr-[10px]">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10 h-screen overflow-scroll scrollbar-hide ml-[20px]">
        {children}
      </div>
    </div>
  );
};
