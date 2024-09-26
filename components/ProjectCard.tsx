import { ProjectCardProp } from "@/lib/types";
import Image from "next/image";
import React from "react";

export const ProjectCard: React.FC<ProjectCardProp> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-[310px]  rounded-lg overflow-hidden cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-out">
      {/* img */}
      <div>
        <Image
          src={imageSrc}
          alt=""
          width={350}
          height={200}
          className="h-[200px]"
        />
      </div>
      {/* info */}
      <div className="flex flex-col w-[100%] min-h-[120px]  bg-white p-[10px] border-gray-300 border-t-[1px] ">
        <h3 className="capitalize font-bold text-[20px]">{title}</h3>
        <p className="text-[15px]">{description}</p>
      </div>
    </div>
  );
};
