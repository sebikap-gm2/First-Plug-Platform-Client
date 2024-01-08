"use client";
import React, { useState } from "react";
import { Button } from "@/common";
import { AddMemberForm } from "./";
import { TeamServices, Memberservices } from "../services";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { TeamMember, TeamModel } from "@/types";

interface CreateTeamAsideProps {
  className?: string;
}

export const CreateTeamAside = observer(function ({
  className = "",
}: CreateTeamAsideProps) {
  const {
    aside: { setAside },
    members: { memberCount, setMembers },
    teams: { setTeams },
  } = useStore();
  const [name, setName] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const handleCreateTeam = async () => {
    try {
      const team = TeamModel.create({ name, teamMembers });
      TeamServices.createTeam(team).then((res) => {
        TeamServices.getAllTeams().then((res) => {
          setTeams(res);
        });
        Memberservices.getAllMembers().then((res) => {
          setMembers(res);
        });
      });

      setAside(undefined);
    } catch (error) {
      console.error("Error creating team:", error);
    }
  };

  const handleSelectedMembers = (member: TeamMember) => {
    setTeamMembers((prevSelectedMembers) => {
      const isSelected = prevSelectedMembers.some(
        (selected) => selected._id === member._id
      );

      if (isSelected) {
        return prevSelectedMembers.filter(
          (selected) => selected._id !== member._id
        );
      } else {
        return [...prevSelectedMembers, member];
      }
    });
  };

  return (
    <div className={` ${className} flex flex-col justify-between h-full `}>
      <div className="flex flex-col gap-2 h-[60vh] overflow-y-auto">
        <div className="flex flex-col">
          <span className="text-dark-grey">Team Name</span>

          <input
            type="text"
            className="border-2 rounded-xl p-2 flex-grow w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Members</span>
            <span>({memberCount})</span>
          </div>

          <AddMemberForm handleSelectedMembers={handleSelectedMembers} />
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="big"
          className="flex-grow rounded-md"
          onClick={() => setAside(undefined)}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          size="big"
          className="flex-grow rounded-md"
          onClick={handleCreateTeam}
        >
          Save
        </Button>
      </div>
    </div>
  );
});
