import React from "react";
import { Header } from "../header/Header";
import Link from "next/link";

export const Tasks = () => {
  return (
    <div>
      <Header />

      <div className="flex gap-24 ml-12 mt-10 justify-between">
        <div className=" border border-[#415C5C] w-[834px] flex  h-11 items-center rounded-lg">
          <button className="w-[132px] h-11 rounded-lg  ">
            <Link href="/"> Setup</Link>
          </button>
          <button className="w-[132px] h-11 rounded-lg ">
            <Link href="/userDetails"> User details</Link>
          </button>
          <button className="w-[132px] h-11 rounded-lg bg-[#27393C]">
            <Link href="tasks"> Tasks</Link>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <Link href="prizes"> Prizes</Link>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <Link href="assets"> Assets</Link>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <Link href=""> Post entry</Link>
          </button>
        </div>

        <div className=" flex gap-6 mr-[20%]">
          <button className=" border border-slate-800 w-36 h-10 rounded-lg bg-[#139BAD33] ">
            Cancel
          </button>
          <button className="border border-slate-800 w-36 h-10 rounded-lg bg-[#139BAD]">
            Save
          </button>
        </div>
      </div>

      <div className="mt-9 ml-12">
        <p className="text-[24px] leading-[29.52px]">Tasks</p>
      </div>

      {/* First card */}
      <div className="flex ">
        <div className="border border-[#415C5C] w-[594px] h-40 rounded-2xl ml-12 mt-8">
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-[16px] leading-[19.68px] ml-8">
                {" "}
                Follow on Twitter
              </p>
            </div>
            <div className="flex mr-8 items-center">
              <div className="flex gap-1">
                <p className="text-[14px] leading-[17.22px]">Daily task</p>
                <input type="checkbox" />
              </div>
              <button className="w-[77px] h-8 border border-[#139BAD33] rounded-lg ml-4">
                Remove
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-5 ml-8">
            <input
              className="w-[257px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Add redirect link"
            />
            <input
              className="w-[257px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Number of entries"
            />
          </div>
          <div className="ml-8  mt-3">
            <input
              className="w-[530px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Add task description (Optional)"
            />
          </div>
        </div>
        {/* second card */}
        <div className="border border-[#415C5C] w-[594px] h-40 rounded-2xl ml-12 mt-8">
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-[16px] leading-[19.68px] ml-8">
                Follow on TikTok
              </p>
            </div>
            <div className="flex mr-8 items-center">
              <div className="flex gap-1">
                <p className="text-[14px] leading-[17.22px]">Daily task</p>
                <input type="checkbox" />
              </div>
              <button className="w-[77px] h-8 border border-[#139BAD33] bg-[#27393C] rounded-lg ml-4">
                Add
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-5 ml-8">
            <input
              className="w-[257px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Add redirect link"
            />
            <input
              className="w-[257px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Number of entries"
            />
          </div>
          <div className="ml-8  mt-3">
            <input
              className="w-[530px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Add task description (Optional)"
            />
          </div>
        </div>
      </div>

      {/* third card */}
      <div className="flex ">
        <div className="border border-[#415C5C] w-[594px] h-40 rounded-2xl ml-12 mt-8">
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-[16px] leading-[19.68px] ml-8">
                {" "}
                Retweet this Twitter post
              </p>
            </div>
            <div className="flex mr-8 items-center">
              <div className="flex gap-1">
                <p className="text-[14px] leading-[17.22px]">Daily task</p>
                <input type="checkbox" />
              </div>
              <button className="w-[77px] h-8 border border-[#139BAD33] bg-[#27393C] rounded-lg ml-4">
                Add
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-5 ml-8">
            <input
              className="w-[257px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Add redirect link"
            />
            <input
              className="w-[257px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Number of entries"
            />
          </div>
          <div className="ml-8  mt-3">
            <input
              className="w-[530px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Add task description (Optional)"
            />
          </div>
        </div>
        {/* Forth card */}
        <div className="border border-[#415C5C] w-[594px] h-40 rounded-2xl ml-12 mt-8">
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-[16px] leading-[19.68px] ml-8">
                Share this page on Facebook
              </p>
            </div>
            <div className="flex mr-8 items-center">
              <div className="flex gap-1">
                <p className="text-[14px] leading-[17.22px]">Daily task</p>
                <input type="checkbox" />
              </div>
              <button className="w-[77px] h-8 border border-[#139BAD33]  rounded-lg ml-4">
                Remove
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-5 ml-8">
            <input
              className="w-[257px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Add redirect link"
            />
            <input
              className="w-[257px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Number of entries"
            />
          </div>
          <div className="ml-8  mt-3">
            <input
              className="w-[530px] h-8 border border-[#139BAD33] rounded-2xl bg-[#139bad33] p-2"
              type="text"
              placeholder="Add task description (Optional)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
