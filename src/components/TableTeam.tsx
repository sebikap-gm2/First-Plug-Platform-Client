import Button from "@/common/Button";
import { PenIcon, StatusCircleIcon, TrashIcon } from "@/common/Icons";
import TeamCard from "@/common/TeamCard";
import useModal from "@/hooks/useModal";
import { useState } from "react";
import Aside from "./Aside";
import MemberAsideDetails from "./MemberAsideDetails";
import Image from "next/image";
import Input from "@/common/Input";
import DropdownInput from "@/common/DropdownInput";
import Photo from "../../public/employees/member.jpg";
import { useStore } from "@/models/root.store";

interface TableTeamProps {
  img?: string;
  className?: string;
  members: MemberProps[];
}

interface MemberProps {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  joiningDate: string;
  teams: string[]; 
  jobPosition: string; 
  shimentsDetails?: string;
}

export default (function TableTeam({ img, className, members }: TableTeamProps) {
  const { openModal, closeModal, isModalOpen } = useModal();
  const [optionAside, setOptionAside] = useState("details");

  const handleModal = (option : string) => {
    setOptionAside(option);
    openModal();
  };

  const store = useStore();

  const oneMember: MemberProps[] = store.members.map((member) => ({
    _id: member._id,
    firstName: member.firstName,
    lastName: member.lastName,
    dateOfBirth: member.dateOfBirth,
    phone: member.phone,
    email: member.email,
    jobPosition: member.jobPosition,
    city: member.city,
    zipCode: member.zipCode,
    address: member.address,
    appartment: member.appartment,
    joiningDate: member.joiningDate,
    timeSlotForDelivery: member.timeSlotForDelivery,
    additionalInfo: member.additionalInfo,
    teams: member.teams,
  }));

  return (
    <>
      <table
        className={` flex-col w-full rounded-lg overflow-hidden ${
          className || ""
        }`}
      >
        <thead>
          <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
            <th className="py-3 px-3">ID</th>
            <th className="py-3 px-3">Full Name</th>
            <th className="py-3 px-3">Date of Birth</th>
            <th className="py-3 px-3">Joining Date</th>
            <th className="py-3 px-3">Team</th>
            <th className="py-3 px-3">Job Position</th>
            <th className="py-3 px-3">Shipment Details</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {members?.map((team) => (
            <tr
              key={team._id}
              className="bg-white text-black border-b-2 border-gray-200 text-left"
            >
              <td className="  py-4 px-3 ">{`${team._id.slice(0, 5)}...`} </td>
              <td className="  py-4 px-3">
                <b>
                  {" "}
                  {team.firstName} {team.lastName}{" "}
                </b>
              </td>
              <td className="  py-4 px-3">{team.dateOfBirth}</td>
              <td className=" py-4 px-3">{team.joiningDate}</td>
              <td className=" py-4 px-3">
                {team.teams.length ? (
                  team.teams.map((t) => (
                    <TeamCard team={t || ""} className={"text-lg"} />
                  ))
                ) : (
                  <TeamCard team={"Assing to team"} className={"text-lg"} />
                )}
              </td>
              <td className=" py-4 px-3">{team.jobPosition}</td>
              <td className=" py-4 px-3 ">
                <div className="flex items-center gap-1">
                  <StatusCircleIcon status={"incomplete"} />

                  {team.shimentsDetails}
                </div>
              </td>
              <td className=" py-4 px-3 ">
                <div className="flex gap-5">
                  <Button onClick={() => handleModal("edit")}>
                    <PenIcon strokeWidth={2} className="w-[1rem] h-[1rem]" />
                  </Button>
                  <Button>
                    <TrashIcon className={"w-[1rem] h-[1rem]"} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen &&
        (optionAside === "details" ? (
          <Aside closeModal={closeModal}>
            <MemberAsideDetails member={oneMember} />
          </Aside>
        ) : (
          <Aside
            title="Team Member"
            closeModal={closeModal}
            className="overflow-y-auto outline-red-400 text-md"
          >
            <div className="flex flex-col gap-6 pr-4 pb-10">
              <div className="flex gap-4">
                <div className="relative w-36 h-36">
                  <Image
                    src={img || Photo}
                    alt="Colaborator"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-[75%] flex flex-col gap-4">
                  <Input title="Name" />
                  <Input title="Lastname" />
                </div>
              </div>
              <Input title="Date of Birth" type="Date" />
              <div className="flex gap-4">
                <Input title="Phone Number" type="tel" className="w-1/2" />
                <Input title="Email Address" type="email" className="w-1/2" />
              </div>

              <h3 className="text-lg text-black font-inter  font-semibold border-t pt-4">
                Employee Information
              </h3>

              <DropdownInput title="Select Team" />
              <p>Does the theam not exist yet?</p>

              <Input title="Job position" className="pr-4" />

              <div className=" border-t flex justify-between items-center">
                <h3 className="text-lg text-black font-inter font-semibold pt-4">
                  Shipment Details
                </h3>
                <span className="pt-4">Complete</span>
              </div>

              <div className="flex gap-4">
                <DropdownInput title="City" />
                <DropdownInput title="State" />
              </div>

              <div className="flex gap-1">
                <Input title="Zip code" className="w-1/6" />
                <Input title="Address" className="w-3/6" />
                <Input title="Appartament, Suite, etc." className="w-2/6" />
              </div>

              <div className="flex gap-4">
                <Input title="Joining Date" type="Date" className="w-1/2" />
                <DropdownInput title="Time slot for delivery" />
              </div>

              <div className="flex flex-col gap-1 m-auto w-[98%]">
                <label className="block text-dark-grey font-sans">
                  Additional Information
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Comments..."
                  className="border-2 p-2"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <Button
                  icon={
                    <TrashIcon
                    strokeWidth={2}
                      className="text-error y w-[1.2rem] h-[1.2rem]"
                    />
                  }
                  body="Delete Member"
                  className="text-error text-md font-bold"
                />
              </div>

              <div className="fixed bottom-5 w-[85%]">
                <Button
                  body="Save "
                  variant="primary"
                  size="big"
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </Aside>
        ))}
    </>
  );
});
