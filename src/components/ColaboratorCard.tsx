"use client";
import { useState } from "react";
import Photo from "../../public/employees/member.jpg";
import Image from "next/image";
import Button from "@/common/Button";
import TeamCard from "@/common/TeamCard";
import { PenIcon, StatusCircleIcon, TrashIcon } from "@/common/Icons";
import useModal from "@/hooks/useModal";
import Aside from "./Aside";
import MemberAsideDetails from "./MemberAsideDetails";
import EditMemberAside from "./EditMemberAside";
import { TeamMemberServices } from "@/services/teamMember.services";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { TeamMember } from "@/models/member.store";

interface ColaboratorCardProps {
  member: TeamMember;
  firstName: string;
  lastName: string;
  _id: string;
  img: string;
  jobPosition: string;
  shimentsDetails: typeof status[number];
  teams: string[];
  className?: string;
}

const status = ["incomplete", "complete"] as const;

export default observer(function ColaboratorCard({
  member,
  firstName,
  lastName,
  _id,
  img,
  jobPosition,
  shimentsDetails = "incomplete",
  teams,
  className,
}: ColaboratorCardProps) {
  const { aside: { openAside, setAside }, members: { setMembers, setSelectedMember } } = useStore();

  const handleModal = (asideType) => {
    setSelectedMember(member._id);
    openAside();
    setAside(asideType);
  };

  const handleDeleteMember = () => {
    TeamMemberServices.deleteMember(_id).then((res) => {
      TeamMemberServices.getAllMembers().then((res) => {
        setMembers(res);
      });
    });
  };

  return (
    <>
      <div
        className={`flex flex-col gap-2  mx-auto rounded-lg border border-border p-4 font-inter ${className}`}
      >
        <header className="flex justify-between items-start">
          <div className="flex gap-2">
            <Image
              src={img || Photo}
              alt="colabPhoto"
              className="w-1/3 object-cover rounded-md"
            />

            <div className="ml-1 flex flex-col  items-start">
              <div className="flex items-center gap-1">
                {!teams.length ? (
                  <TeamCard team={"Assing to team"} key={"no team"} />
                ) : (
                  teams.map((team) => <TeamCard team={team} key={team} />)
                )}
              </div>
              <h2
                className="text-black font-bold cursor-pointer"
                onClick={() => handleModal("memberDetails")}
              >
                {firstName} {lastName}
              </h2>
              <b className="text-dark-grey">#00{_id.slice(0, 6)}</b>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              icon={
                <PenIcon
                  strokeWidth={2}
                  className="text-dark-grey w-[1.2rem] h-[1.2rem]"
                />
              }
              onClick={() => handleModal("editMember")}
            />
            <Button
              onClick={handleDeleteMember}
              body={
                <TrashIcon
                  strokeWidth={2}
                  className=" text-dark-grey w-[1.2rem] h-[1.2rem] hover:text-error"
                />
              }
            />
          </div>
        </header>
        <section className="flex flex-col gap-2 justify-start">
          <div className="flex   items-center gap-3">
            <h2 className="font-semibold text-lg">Job Position: </h2>
            <p>{jobPosition}</p>
          </div>
          <div className="flex items-center  gap-3">
            <h2 className="font-semibold text-lg">Products</h2>
            <p className="bg-border  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
              {/* {products.length} */}
            </p>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="font-semibold">Shipment Details:</h2>
            <p className="flex items-center gap-2">
              <StatusCircleIcon status={shimentsDetails} />

              {shimentsDetails
                .slice(0, 1)
                .toUpperCase()
                .concat(shimentsDetails.slice(1))}
            </p>
          </div>
        </section>
      </div>
    </>
  );
});