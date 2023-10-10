"use client";
import React, { useState } from "react";
import Layout from "@/common/Layout";
import ColaboratorCard from "@/components/ColaboratorCard";
import Button from "@/common/Button";
import {
  AddIcon,
  UpLoadIcon,
  PenIcon,
  TableDisplayIcon,
  GridLayoutIcon,
} from "@/common/Icons";
import Dropdown from "@/common/Dropdown";
import TableTeam from "@/components/TableTeam";
import FitlerModal from "@/components/FitlerModal";
import DropFilter from "@/common/DropFilter";
import useModal from "@/hooks/useModal";
import Aside from "@/components/Aside";
import EditTeamsAsideDetails from "@/components/EditTeamsAsideDetails";
import CreateTeamAside from "@/components/CreateTeamAside";

const teams = [
  { name: "HR", id: "#00343" },
  { name: "Dev", id: "#00324" },
  { name: "Finance", id: "#00320" },
  { name: "Design", id: "#00240" },
  { name: "Sales", id: "#00346" },
];
const array = [
  {
    id: "#002",
    name: "Francisco",
    lastName: "Villanueva",
    jobPosition: "Junior Dev",
    dateBirth: "05/09/1998",
    joiningDate: "19/09/2023",
    products: ["mac", "phone"],
    shimentsDetails: "incomplete",
    team: "developer",
  },
  {
    id: "#004",
    name: "Esteban",
    lastName: "Rodriguez",
    dateBirth: "05/09/1998",
    joiningDate: "19/09/2023",
    jobPosition: "Sernio Dev",
    products: ["mac", "phone", "monitor"],
    shimentsDetails: "complete",
    team: "developer",
  },

  {
    id: "#003",
    name: "Agustin",
    lastName: "Sandoval",
    jobPosition: "Sernio Dev",
    dateBirth: "05/09/1998",
    joiningDate: "19/09/2023",
    products: ["mac", "phone"],
    shimentsDetails: "complete",
    team: "finance",
  },

  {
    id: "#001",
    name: "Braian",
    lastName: "Barrientos",
    jobPosition: "Design",
    dateBirth: "05/09/1998",
    joiningDate: "19/09/2023",
    products: ["mac", "phone", "monitor"],
    shimentsDetails: "incomplete",
    team: "designer",
  },
];
export default function MyTeamData() {
  const [display, setDisplay] = useState("grid");
  const [optionAside, setOptionAside] = useState("edit");
  const { closeModal, isModalOpen, openModal } = useModal();

  const handleAside = (type) => {
    setOptionAside(type);
    openModal();
  };
  return (
    <Layout className="flex flex-col gap-4">
      <div className="w-full flex  justify-end gap-2 ">
        <Button
          body={"Add Team Member "}
          className={"rounded-md text-sm p-2"}
          icon={<AddIcon className={"h-4 w-4"} />}
          variant={"secondary"}
        />
        <Button
          body={"Load Team Member"}
          icon={<UpLoadIcon className={"h-4 w-4"} />}
          className={"rounded-md text-sm p-2"}
          variant={"primary"}
        />
      </div>
      <hr />

      <div className="w-full flex justify-between   gap-2  ">
        <DropFilter
          body={"Filter by team:"}
          className="rounded-md border font-medium"
        >
          <FitlerModal array={teams} />
        </DropFilter>
        <div className="flex gap-2 items-center">
          <Button
            body="Create Team"
            variant={"text"}
            icon={<AddIcon className={"w-[1rem]"} />}
            className={"p-2 text-sm rounded-md"}
            onClick={() => handleAside("create")}
          />
          <Button
            body="Edit Team"
            variant={"text"}
            icon={<PenIcon className={"w-[1rem]"} />}
            className={"p-2 text-sm rounded-md"}
            onClick={() => handleAside("edit")}
          />
          <span className="text-gray-400"> |</span>

          <div className="flex gap-2">
            {display === "table" ? (
              <Button onClick={() => setDisplay("grid")}>
                <GridLayoutIcon className={"text-black hover:shadow-md"} />
              </Button>
            ) : (
              <Button onClick={() => setDisplay("table")}>
                <TableDisplayIcon className={"text-black hover:shadow-md"} />
              </Button>
            )}
          </div>
        </div>
      </div>
      {display === "grid" ? (
        <div className="grid w-full grid-cols-3 gap-2  ">
          {array.map((member) => (
            <ColaboratorCard
              key={member.id}
              {...member}
              className={"w-full shadow-md"}
              member={member}
            />
          ))}
        </div>
      ) : (
        <TableTeam team={array} />
      )}

      {isModalOpen ? (
        optionAside === "edit" ? (
          <Aside title="Edit Teams" closeModal={closeModal}>
            <EditTeamsAsideDetails teams={teams} members={array} />
          </Aside>
        ) : (
          <Aside title="New Team" closeModal={closeModal}>
            <CreateTeamAside
              closeModal={closeModal}
              teams={teams}
              members={array}
            />
          </Aside>
        )
      ) : null}
    </Layout>
  );
}
