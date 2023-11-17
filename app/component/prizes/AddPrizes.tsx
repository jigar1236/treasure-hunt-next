import React from "react";
interface Props {
  show: Boolean;
}

export const AddPrizes = ({ show }: Props) => {
  return (
    <>
      {show && (
        <div className="flex justify-center items-stretch h-screen">
          <div className="w-[884px] h-[555px] border border-[#415C5C] rounded-2xl items-center ">
            <div className="flex ">
              <div className="mt-12 ml-12">
                <div className="grid">
                  <label
                    className="text-[18px] leading-[22.14px]"
                    htmlFor="Prize name"
                  >
                    Prize name
                  </label>
                  <input
                    className="w-[400px] h-10 border  border-[#139BAD33] rounded-2xl bg-[#139BAD33] mt-2 p-2"
                    type="text"
                    placeholder="iPhone 12 Pro"
                  />
                </div>
                <div className="grid mt-8">
                  <label
                    className="text-[18px] leading-[22.14px]"
                    htmlFor="Prize name"
                  >
                    How manywinners will win the prize
                  </label>
                  <input
                    className="w-[400px] h-10 border  border-[#139BAD33] rounded-2xl bg-[#139BAD33] mt-2  p-2"
                    type="text"
                    placeholder="10"
                  />
                </div>
                <div className="grid mt-8">
                  <label
                    className="text-[18px] leading-[22.14px]"
                    htmlFor="Prize name"
                  >
                    Prize value in USD per winner
                  </label>
                  <input
                    className="w-[400px] h-10 border  border-[#139BAD33] rounded-2xl bg-[#139BAD33] mt-2  p-2"
                    type="text"
                    placeholder="$999"
                  />
                </div>
                <div className="grid mt-8">
                  <label
                    className="text-[18px] leading-[22.14px]"
                    htmlFor="Prize name"
                  >
                    Treasury hunt difficulty level
                  </label>
                  <input
                    className="w-[400px] h-10 border  border-[#139BAD33] rounded-2xl bg-[#139BAD33] mt-2 p-2"
                    type="text"
                    placeholder="Treasury"
                  />
                </div>
              </div>
              <div className="mt-12 ml-10">
                <div>
                  <p className="text-[18px] leading-[22.14px]">
                 
                    Add prize image
                  </p>
                </div>
                <div className=" relative border border-[#139BAD33] w-[348px] h-[348px] rounded-2xl p-16 mt-2">
                  <div className=" absolute top-4 right-4 cursor-pointer">
                    <img src="/assets/image/plusicon3.svg" alt="#" />
                  </div>
                  <img src="/assets/image/giftbox0.svg" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
