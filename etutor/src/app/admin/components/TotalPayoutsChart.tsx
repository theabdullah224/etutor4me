"use client"
import React, { useState } from "react";
import downloadReport from '../../../../public/downloadReport.svg'
import Image from "next/image";
import SalaryBarChart from "./SalaryBarChart";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function TotalPayoutsChart() {
    const [hover, sethover] = useState(false)
    const [salaryData, setSalaryData] = useState({
      midMonthPay: 3700,
      monthEndPay: 2600,
      midMonthDate: "15/10/2024",
      monthEndDate: "30/10/2024"
    });
  
    const handleInputChange = (field: string, value: string) => {
      if (field.includes('Pay')) {
        // Convert to number for pay values
        setSalaryData(prev => ({
          ...prev,
          [field]: Number(value) || 0
        }));
      } else {
        // Keep as string for dates
        setSalaryData(prev => ({
          ...prev,
          [field]: value
        }));
      }
    };
  
  return (
    <div className="py-1.5">



      <div className="flex items-end justify-between gap-2  ">
        <div className="flex items-center gap-3 w-fit custom-lg:ml-16 pl-1 text-base text-[#685aad] font-bold">
          <div className="bg-[#fc7777] h-[25px] w-[25px] rounded-sm">
            &nbsp;
          </div>{" "}
          Total Payouts
        </div>

        <div></div>
        <div className="w-fit">
            <Image 
            onMouseEnter={()=>{
                sethover(true)
            }} 
            onMouseLeave={()=>{
                sethover(false)
            }}
            src={downloadReport} alt="" className="w-7  hover:cursor-pointer"/>
            <div  className={`absolute w-fit -top-5 right-4 bg-[#7669b5] px-3.5 py-1.5 text-xl  rounded-xl text-white transition-all duration-700 transform  origin-bottom-right  ${hover ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>Download Report</div>
        </div>
      </div>






      <div className="">
      <div className="max-w-4xl mx-auto  flex items-center justify-center py-3">
      {/* <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="midMonthPay">Mid-Month Pay</Label>
          <Input
            id="midMonthPay"
            type="number"
            value={salaryData.midMonthPay}
            onChange={(e) => handleInputChange('midMonthPay', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="monthEndPay">Month-End Pay</Label>
          <Input
            id="monthEndPay"
            type="number"
            value={salaryData.monthEndPay}
            onChange={(e) => handleInputChange('monthEndPay', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="midMonthDate">Mid-Month Date</Label>
          <Input
            id="midMonthDate"
            type="text"
            value={salaryData.midMonthDate}
            onChange={(e) => handleInputChange('midMonthDate', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="monthEndDate">Month-End Date</Label>
          <Input
            id="monthEndDate"
            type="text"
            value={salaryData.monthEndDate}
            onChange={(e) => handleInputChange('monthEndDate', e.target.value)}
          />
        </div>
      </div> */}
      
      <SalaryBarChart {...salaryData} />
    </div>



      </div>
    </div>
  );
}

export default TotalPayoutsChart;
