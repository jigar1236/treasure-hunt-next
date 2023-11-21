import React from "react";
import { Header } from "../header/Header";
import Link from "next/link";

export const Setup = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-24 ml-12 mt-10 justify-between">
        <div className=" border border-[#415C5C] w-[834px] flex  h-11 items-center rounded-lg">
          <button className="w-[132px] h-10 rounded-lg bg-[#27393C] ">
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

      <div className="flex  gap-9 items-center mt-10">
        <div className="grid ml-12 ">
          <label className="text-[18px] font-medium leading-[22.14px]	" htmlFor="tittle">
            Treasure hunt title
          </label>
          <input
            className="w-[336px] h-10 border border-[#139BAD33] rounded-2xl bg-[#283d3e] mt-2  "
            type="text"
          />
        </div>
        <div className="grid">
          <label className="text-[18px] font-medium leading-[22.14px]" htmlFor="start">
            {" "}
            Start
          </label>
          <input
            className="w-40 h-10 border border-[#415C5C33]  rounded-[100px] bg-[#415c5c33] p-3 mt-2"
            type="date"
          />
        </div>

        <div className="grid">
          <label className="text-[18px] font-medium leading-[22.14px]" htmlFor="end">
            {" "}
            End
          </label>
          <input
            className="w-40 h-10 border border-[#415C5C33] mt-2  rounded-[100px] bg-[#415c5c33] p-3"
            type="date"
          />
        </div>
        <div className="grid">
          <label className="text-[18px] font-medium leading-[22.14px]" htmlFor="timezone">
            {" "}
            Timezone
          </label>
          <input
            className="w-40 h-10 border border-[#415C5C33] mt-2  rounded-[100px] bg-[#415c5c33] p-3"
            type="time"
          />
        </div>
      </div>

      {/* Term and conditon section */}

      <div className="border border-[#415C5C] rounded-2xl w-[911px] h-[217px] p-3 ml-12 mt-10">
        <div className="flex gap-2 mt-4 ml-8">
          <img src="assets/image/termicon.svg" alt="#" />
          <p className="text-2xl font-medium leading-[29.52px]">Terms and conditions</p>
        </div>

        <div className="mt-6 ml-8">
          <p className="text-sm font-normal">
            CryptoGrowth automatically generates Terms & Conditions for you.
          </p>
          <p className="text-sm font-normal">
            Click Edit Fields to customise your details or add your own fully
            custom Terms & Conditions below.
          </p>
        </div>
      </div>
    </div>
  );
};
