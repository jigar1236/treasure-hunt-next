"use client";
import React, { useState } from "react";
import { Header } from "../header/Header";
import { AddPrizes } from "./AddPrizes";

export const Prizes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Header />

      <div className="flex gap-24 ml-12 mt-10 justify-between">
        <div className=" border border-[#415C5C] w-[834px] flex  h-11 items-center rounded-lg">
          <button className="w-[132px] h-11 rounded-lg  ">
            <a href="/"> Setup</a>
          </button>
          <button className="w-[132px] h-11 rounded-lg ">
            <a href="userDetails"> User details</a>
          </button>
          <button className="w-[132px] h-11 rounded-lg ">
            <a href="tasks"> Tasks</a>
          </button>
          <button className="w-[132px] h-11 rounded-lg bg-[#27393C]">
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

      {/* Add prizes section */}

      <div className="mt-10 ml-12">
        <p className="text-[24px] leading-[29.52px]">Prizes</p>
      </div>

      <div className="ml-12 mt-6">
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="w-[200px] h-[41px] border border-[#139BAD] rounded-lg bg-[#139BAD]"
        >
          Add prize
        </button>
        <AddPrizes show={modalOpen}/>
      </div>
    </div>
  );
};
