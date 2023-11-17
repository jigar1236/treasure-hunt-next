import React from "react";
import { Header } from "../header/Header";

export const UserDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-24 ml-12 mt-10 justify-between">
        <div className=" border border-[#415C5C] w-[834px] flex  h-11 items-center rounded-lg">
          <button className="w-[132px] h-11 rounded-lg  ">
            <a href="/"> Setup</a>
          </button>
          <button className="w-[132px] h-11 rounded-lg bg-[#27393C]">
            <a href="userDetails"> User details</a>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <a href="tasks"> Tasks</a>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <a href="prizes"> Prizes</a>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <a href="assets"> Assets</a>
          </button>
          <button className="w-[132px] h-11 rounded-lg">
            <a href=""> Post entry</a>
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

      {/* cards section */}
      <div className="flex mt-10">
        <div className="w-[552px] h-[170px] border border-[#415C5C] rounded-2xl  ml-12 ">
          <div className="mt-4 ml-8">
            <p className="text-[24px] leading-[29.52px]">
              Minimum age (Optional)
            </p>
            <input
              className="w-[202px] h-10 border border-[#139BAD33] rounded-2xl mt-4 bg-[#139BAD33] p-2"
              type="text"
              placeholder="16"
            />
          </div>
          <div className="mt-4 ml-8 flex gap-1 ">
            <input type="checkbox" />
            <p className="text-[16px] leading-[19.68px] ">
              Require login before actions
            </p>
          </div>
        </div>

        <div className="w-[636px] h-[170px] border border-[#415C5C] rounded-2xl ml-12">
          <div className="ml-8 mt-4">
            <p className="text-[24px] leading-[29.52px]">
              Select required fields
            </p>
          </div>
          <div className="flex gap-4 mt-6 ml-8">
            <input
              className="w-[180px] h-8 border border-[#139BAD] bg-[#139BAD] rounded-2xl p-2 "
              type="text"
              placeholder="Full name"
            />
            <input
              className="w-[180px] h-8 border border-[#139BAD] rounded-2xl bg-[#139BAD33] p-2"
              type="text"
              placeholder="Crypto Wallet address"
            />
            <input
              className="w-[180px] h-8 border border-[#139BAD] bg-[#139BAD] rounded-2xl p-2"
              type="text"
              placeholder="Age"
            />
          </div>
          <div className="flex gap-4 mt-4 ml-8">
            <input
              className="w-[180px] h-8 border border-[#139BAD] bg-[#139BAD] rounded-2xl p-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-[180px] h-8 border border-[#139BAD] rounded-2xl bg-[#139BAD33] p-2"
              type="text"
              placeholder="Country"
            />
            <input
              className="w-[180px] h-8 border border-[#139BAD] rounded-2xl bg-[#139BAD33] p-2"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
      </div>

      {/* secondline card */}
      <div className="flex mt-10">
        <div className="w-[552px] h-[170px] border border-[#415C5C] rounded-2xl ml-12">
          <p className="text-[24px] leading-[29.52px] mt-4 ml-8 ">
            {" "}
            Users login options
          </p>
          <div className="flex justify-between mt-6 ml-8 mr-10">
            <div className="flex gap-2">
              <input type="checkbox" />
              <p className="text-[16px] leading-[19.68px]">
                Through the platform
              </p>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p className="text-[16px] leading-[19.68px]">With Twitter</p>
            </div>
          </div>
        </div>
        <div className="w-[636px] h-[170px] border border-[#415C5C] rounded-2xl ml-12">
          <div className="ml-8 mt-4">
            <p className="text-[24px] leading-[29.52px]">
              Select optional fields
            </p>
          </div>
          <div className="flex gap-4 mt-6 ml-8">
            <input
              className="w-[180px] h-8 border border-[#139BAD] bg-[#139BAD33] rounded-2xl p-2 "
              type="text"
              placeholder="Full name"
            />
            <input
              className="w-[180px] h-8 border border-[#139BAD] rounded-2xl bg-[#139BAD] p-2"
              type="text"
              placeholder="Crypto Wallet address"
            />
            <input
              className="w-[180px] h-8 border border-[#139BAD] bg-[#139BAD33] rounded-2xl p-2"
              type="text"
              placeholder="Age"
            />
          </div>
          <div className="flex gap-4 mt-4 ml-8">
            <input
              className="w-[180px] h-8 border border-[#139BAD] bg-[#139BAD33] rounded-2xl p-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-[180px] h-8 border border-[#139BAD] rounded-2xl bg-[#139BAD] p-2"
              type="text"
              placeholder="Country"
            />
            <input
              className="w-[180px] h-8 border border-[#139BAD] rounded-2xl bg-[#139BAD33] p-2"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
