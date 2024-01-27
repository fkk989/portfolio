"use client";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="relative  w-[100%] mt-[55px] ">
      <div
        className=" w-[100%] h-[160px] p-[10px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/color.png')",
        }}
      ></div>

      <div
        className="absolute top-0 w-[100%] h-[160px] flex justify-between items-center "
        style={{
          backdropFilter: "blur(5px)",
        }}
      >
        {/* profile img and name  */}
        <div className="flex justify-center items-center gap-[30px] ml-[50px]">
          <div className="w-[100px] h-[100px] flex justify-center items-end border-[5px] border-white rounded-full bg-[#E5A50F] overflow-hidden cursor-pointer">
            <Image
              className=".box-shadow"
              src={"/profile.png"}
              alt="profile image"
              width={70}
              height={70}
            />
          </div>
          <div className="text-white text-[30px] font-bold flex flex-col justify-center gap-[5px]">
            Faisal Khan{" "}
            <span className="text-[12px] font-[300]">@_faizal_989</span>
          </div>
        </div>

        {/* insta link */}
        <div
          onClick={() => {}}
          className="flex justify-center items-center bg-[#1C1B23] p-[10px] gap-[10px] mr-[50px] text-white rounded-md "
        >
          <FaInstagram className="text-[#8B8A90] text-[16px]" />
          <span className="max-mobile:hidden text-[#8B8A90]">
            Follow me on Instagram
          </span>
        </div>
      </div>
    </div>
  );
};
