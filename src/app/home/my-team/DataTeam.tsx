"use client";
import React, { useState } from "react";
import { MyTeamActions, MyTeamViewHeader, TeamMembers } from "@/components";
import { DisplayView } from "@/types";
export default function DataTeam() {
  const [display, setDisplay] = useState<DisplayView>("grid");

  const toggleView = () =>
    setDisplay((prev) => (prev === "grid" ? "table" : "grid"));
  return (
    <div className="flex flex-col gap-4 w-full h-full  relative">
      <MyTeamViewHeader />
      <hr />
      <MyTeamActions toggleView={toggleView} display={display} />
      <TeamMembers display={display} />
    </div>
  );
}
