import Image from "next/image";
import React from "react";

interface ProjectCardProp {
  imageSrc: string;
  title: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProp> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-[310px]  rounded-lg overflow-hidden cursor-pointer">
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
      <div className="flex flex-col w-[100%]  bg-white p-[10px] ">
        <h3 className="capitalize font-bold">{title}</h3>
        <p className="text-[12px]">{description}</p>
      </div>
    </div>
  );
};
