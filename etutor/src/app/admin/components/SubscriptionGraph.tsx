import Image from "next/image";
import React, { useState } from "react";
import downloadReport from "../../../../public/downloadReport.svg";

function SubscriptionGraph() {
  const [hover, sethover] = useState(false);
  return (
    <div className=" min-h-[32.5rem] bg-[#ede8fa] px-3 custom-xl:px-6 py-3 custom-xl:py-6 col-span-1 row-span-2 rounded-md sm:rounded-xl  custom-lg:rounded-3xl relative ">
      <div className="flex items-end justify-between gap-2  pt-1.5 ">
        <div className="flex items-center gap-3 w-fit custom-lg:ml-16 pl-1 text-base text-[#685AAD] font-bold">
          <div className="flex items-center gap-3">
            <div className="bg-[#8653ff] h-[25px] w-[25px] rounded-sm">
              &nbsp;
            </div>{" "}
            Premium
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#00dae5] h-[25px] w-[25px] rounded-sm">
              &nbsp;
            </div>{" "}
            Standard
          </div>
        </div>

        <div></div>
        <div className="w-fit">
          <Image
            onMouseEnter={() => {
              sethover(true);
            }}
            onMouseLeave={() => {
              sethover(false);
            }}
            src={downloadReport}
            alt=""
            className="w-7  hover:cursor-pointer"
          />
          <div
            className={`absolute w-fit -top-5 right-4 bg-[#7669b5] px-3.5 py-1.5 text-xl  rounded-xl text-white transition-all duration-700 transform  origin-bottom-right  ${
              hover ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            Download Report
          </div>
        </div>
      </div>

      <div className="chart"></div>
    </div>
  );
}

export default SubscriptionGraph;
