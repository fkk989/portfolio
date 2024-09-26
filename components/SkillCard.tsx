import { SkillCardProp } from "@/lib/types";
import React from "react";

export const SkillCard: React.FC<SkillCardProp> = ({ domain, skills }) => {
  return (
    <div className="w-[300px] min-h-[280px] flex flex-col  bg-[#1C1B23] text-[#8B8A90] p-[10px] gap-[15px]">
      <div className="capitalize text-[18px] font-[400]  text-[#d2d1d1] tracking-[1px] ">
        {domain}
      </div>
      <div className="flex flex-wrap gap-[10px]">
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
