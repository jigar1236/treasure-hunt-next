import React from "react";
import { Header } from "../header/Header";
import Link from "next/link";

export const AssetsData = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-24 ml-12 mt-10 justify-between">
        <div className=" border border-[#415C5C] w-[834px] flex  h-11 items-center rounded-lg">
          <button className="w-[132px] h-11 rounded-lg ">
            <Link href="/"> Setup</Link>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <Link href="/userDetails"> User details</Link>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <Link href="/tasks"> Tasks</Link>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <Link href="prizes"> Prizes</Link>
          </button>
          <button className="w-[132px] h-10 rounded-lr  bg-[#27393C]">
            <Link href=""> Assets</Link>
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

      <div className="flex">
        <div className="mt-10 ml-12">
          <div className="grid ">
            <label htmlFor=""> Company name</label>
            <input
              className="w-[400px] h-10 border border-[#139BAD33]  bg-[#139BAD33] rounded-2xl p-2 "
              type="text"
              placeholder="Company"
            />
          </div>
          <div className="grid mt-8">
            <label htmlFor=""> Asset format</label>
            <input
              className="w-[400px] h-10 border border-[#139BAD33]  bg-[#139BAD33] rounded-2xl p-2"
              type="text"
              placeholder="imge"
            />
          </div>{" "}
          <div className="grid mt-8">
            <label htmlFor=""> Price point</label>
            <input
              className="w-[400px] h-10 border border-[#139BAD33]  bg-[#139BAD33] rounded-2xl p-2"
              type="text"
              placeholder="$1000"
            />
          </div>
        </div>

        <div className="mt-10 ml-10">
          <p>Add advertising image/ link</p>

          <div className=" relative border border-[#139BAD33] w-[348px] h-[348px] rounded-2xl p-16 mt-2">
                  <div className=" absolute top-4 right-4 cursor-pointer">
                    <img src="/assets/image/plusicon3.svg" alt="#" />
                  </div>
                  <img src="/assets/image/giftbox0.svg" alt="#" />
                </div>
        </div>
      </div>
    </div>
  );
};
