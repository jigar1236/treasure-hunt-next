import React from "react";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-10 mr-[5%]">
        <div>
          <p className="text-4xl  font-medium ml-12 ">Create your treasure hunt</p>
        </div>
        <div className="flex justify-end gap-10 ">
          <div className="relative inline-block">
            <span className="absolute top-[30%] left-2.5  ">
              <img className="cursor-pointer" src="/assets/image/searchicon.svg" alt="#" />
            </span>
            <input
              className="border-spacing-1 w-80 h-12 border-[#415C5C] rounded-[100px] p-2 pl-9 bg-[#283d3e]"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-6 align-middle ">
            <img
              className="cursor-pointer"
              src="/assets/image/settingsiconsvg.svg"
              alt="#"
            />
            <img
              className="cursor-pointer"
              src="/assets/image/belliconsvg.svg"
              alt="#"
            />
            <img
              className="cursor-pointer"
              src="/assets/image/profileicon.svg"
              alt="#"
            />
          </div>
        </div>
      </div>
      <img className="mt-8 ml-12" src="/assets/image/stateline.svg" alt="#" />
    </>
  );
};
