
    


    

 


    

    
    import Image from "next/image";
import React, { useState } from "react";
import downloadReport from "../../../../public/downloadReport.svg";

function DemoGraphicReport() {
  const [hover, sethover] = useState(false);
  return (
    <div className=" min-h-[1184px] relative  hover:cursor-pointer px-3 custom-xl:px-6 py-3 custom-xl:py-8  bg-[#ede8fa]  rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
      <div className="flex items-start justify-between gap-2  pt-1.5 ">
        <div className="  text-[#7669b5] font-medium pl-7">
         
         <h1 className="text-5xl">Demographic Report </h1>
        </div>

    
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

      <div className="chart">
        
      </div>
    </div>
  );
}

export default DemoGraphicReport;




