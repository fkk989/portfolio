import React from "react";

interface SkillCardProp {
  title: string;
  skills: Array<string>;
}

export const SikllCard: React.FC<SkillCardProp> = ({ title, skills }) => {
  return (
    <div className="w-[220px] min-h-[200px] flex flex-col  bg-[#1C1B23] text-[#8B8A90] p-[10px] gap-[15px]">
      <div className="capitalize text-[18px] font-[400]  text-[#d2d1d1] tracking-[1px] ">
        {title}
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
