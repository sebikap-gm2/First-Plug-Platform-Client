"use client";
import {Button} from "@/common";
export type tabs =  "Equipment" | "Logistics";

interface selectedTabProps {
  selectedTab: tabs;
  handleTab: (e:  "Equipment" | "Logistics")=>void
}
export function HeaderOrders({ selectedTab , handleTab} : selectedTabProps) {
  return (
    <header className="flex gap-5 border-b-4 border-gray-300 ">
        <Button
        variant="text"
        onClick={()=> handleTab("Equipment")}
          body="Equipment"
          className={` font-inter text-xl font-bold p-4 rounded-none  ${
            selectedTab === "Equipment" ? "text-blue  border-b-2 border-blue " : "bg-none"
          }`}
        />
     
        <Button
          variant="text"
          onClick={()=> handleTab("Logistics")}
          body="Logistics"
          className={` font-inter text-xl font-bold p-4 rounded-none   ${
            selectedTab === "Logistics" ? "text-blue  border-b-2  border-blue" : "bg-none"
          }`}
        />
    </header>
  );
}