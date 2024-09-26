"use client";
import React from "react";
import { LuTwitter } from "react-icons/lu";

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
          <div className="w-[100px] h-[100px] flex justify-center items-end border-[3px] border-white rounded-full  overflow-hidden cursor-pointer">
            <img
              className="w-full h-full"
              src={"/profile.jpeg"}
              alt="profile image"
            />
          </div>
          <div className="text-white text-[30px] font-bold flex flex-col justify-center gap-[5px]">
            Faisal Khan{" "}
            <a href="https://x.com/faisaldotdev" target={"_blank"}>
              <span className="text-[12px] font-[300]">@faisaldotdev</span>
            </a>
          </div>
        </div>

        {/* insta link */}
        <a href="https://x.com/faisaldotdev" target={"_blank"}>
          <div
            onClick={() => {}}
            className="text-[#8B8A90] hover:text-white  flex justify-center items-center bg-[#1C1B23] p-[10px] gap-[10px] mr-[50px] rounded-md cursor-pointer "
          >
            <LuTwitter className="text-[20px]" />
            <span className="max-mobile:hidden">Follow me on Twitter</span>
          </div>
        </a>
      </div>
    </div>
  );
};
