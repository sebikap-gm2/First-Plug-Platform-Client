"use client";
import React, { useState } from "react";
import { Button, TeamCard } from "@/common";
import { DropDownArrow } from "@/common/Icons";
import { TeamInfo } from ".";
import { Team } from "@/types";

interface TeamDetailsProps {
  team: Team;
  className?: string;
  handleSelectedTeams: (selectedTeam: Team) => void;
  members: string[];
  onDelete: (teamId: string) => Promise<void>;
}

export const TeamDetails = function ({
  team,
  className,
  handleSelectedTeams,
}: TeamDetailsProps) {
  const [showDetails, setShowDetails] = useState<Boolean>(false);

  return (
    <section className={` ${className} border rounded-md p-3 `}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" onChange={() => handleSelectedTeams(team)} />
          <TeamCard team={team.name} />
        </div>

        <Button
          className="cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        >
          <DropDownArrow
            className={`${
              showDetails ? "rotate-180 " : " rotate-360"
            } transition-all duration-300`}
          />
        </Button>
      </div>

      {showDetails && <TeamInfo team={team} />}
    </section>
  );
};
