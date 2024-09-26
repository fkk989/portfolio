import { SkillCardProp } from "@/lib/types";
import React from "react";

export const SkillCard: React.FC<SkillCardProp> = ({ domain, skills }) => {
  return (
    <div className="group w-[300px] min-h-[280px] flex flex-col  bg-[#1C1B23]  p-[10px] gap-[15px] hover:scale-[1.1] transition-all duration-300 ease-out cursor-pointer">
      <div className="capitalize text-[18px] font-[400]  text-[#d2d1d1] group-hover:text-[#f1f0f0] tracking-[1px] ">
        {domain}
      </div>
      <div className="flex flex-wrap gap-[10px] text-[#a6a6aa] group-hover:text-[#f1f0f0]">
        {skills.map((skill) => {
          return (
            <div key={skill} className="bg-[#14131A] p-[8px] rounded-lg">
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};
