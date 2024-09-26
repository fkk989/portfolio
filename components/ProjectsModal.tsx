"use client";
import React, { useState } from "react";
import { Modal } from "./custom/Modal";
import { ProjectModalProp } from "@/lib/types";
import { FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

export const ProjectModal: React.FC<ProjectModalProp> = ({
  trigger,
  hosted_link,
  github_repo_link,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal.Root isOpen={open} setIsOpen={setOpen}>
      <Modal.Trigger>{trigger}</Modal.Trigger>
      <Modal.Content>
        <div className="relative w-[400px]  flex flex-col justify-end items-center gap-[20px] bg-[#1C1B23] rounded-lg pt-[40px] pb-[20px]">
          {/* close button  */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            className="absolute top-[10px] right-[10px] text-[#7e7e83] hover:text-[#a6a6aa] text-[20px]"
          >
            X
          </button>
          {/* github button */}
          <a
            href={github_repo_link}
            target={"_blank"}
            className="w-[85%] h-[40px] flex justify-center items-center font-bold bg-[#2C2C30]  hover:bg-[#71717A] rounded-md gap-[10px] cursor-pointer text-white "
          >
            <FaGithub className="text-[25px]" />
            <span>Github Link</span>
          </a>
          {/* hosted Link */}
          {hosted_link && (
            <a
              href={hosted_link}
              target={"_blank"}
              className="w-[85%] h-[40px] flex justify-center items-center font-bold bg-[#2C2C30]  hover:bg-[#71717A] rounded-md gap-[10px] cursor-pointer text-white "
            >
              <SlGlobe className="text-[25px]" />
              <span>Hosted Link</span>
            </a>
          )}
        </div>
      </Modal.Content>
    </Modal.Root>
  );
};
