"use client";
import { Button } from "@/common";
import { TrashIcon } from "@/common/Icons";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { Memberservices } from "@/services/teamMember.services";
import { useStore } from "@/models/root.store";
import { FormInput } from "./";
import { useCallback, useState } from "react";
import { TeamMember } from "@/types";
import { isDate } from "@/utils/isDate";

export const EditMemberAside = observer(function () {
  const [finish, setFinished] = useState(false);
  const [memberData, setMemberData] = useState<TeamMember | undefined>();
  const {
    members: { setMembers, selectedMember },
    teams: { teams },
  } = useStore();

  const handleEditMember = () => {
    Memberservices.updateMember(selectedMember._id, memberData)
      .then((res) => {
        setMemberData(undefined);
        setFinished(true);
        Memberservices.getAllMembers().then((res) => {
          setMembers(res);
        });
      })
      .catch((err) => alert("error"));
  };

  const handleInput = useCallback((key: string, value: unknown) => {
    setMemberData((prev) => ({
      ...prev,
      [key]: isDate(value) ? (value as Date).toISOString() : value,
    }));
  }, []);

  return (
    <div className="flex flex-col gap-6 pr-4 pb-10">
      <div className="flex gap-4">
        <div className="relative w-36 h-36">
          <Image
            src={
              selectedMember.img ? selectedMember.img : "/employees/member.jpg"
            }
            alt="Colaborator"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[75%] flex flex-col gap-4">
          <FormInput
            type={"text"}
            title={"First Name"}
            placeholder={"Complete"}
            prop="firstName"
            handleInput={handleInput}
            required={"required"}
            clear={finish}
          />
          <FormInput
            title="Last Name"
            placeholder="Complete"
            type="text"
            prop={"lastName"}
            handleInput={handleInput}
            required={"required"}
            clear={finish}
          />
        </div>
      </div>
      <FormInput
        title="Date of Birth"
        type="date"
        placeholder="Date of birth"
        prop={"dateOfBirth"}
        handleInput={handleInput}
        required={"required"}
        clear={finish}
      />
      <div className="flex gap-4">
        <FormInput
          title="Phone Number"
          placeholder="+54 11 11111111"
          type="text"
          prop={"phone"}
          handleInput={handleInput}
          required={"required"}
          clear={finish}
        />
        <FormInput
          title="Email Address"
          placeholder="user@workemail.com"
          type="email"
          prop={"email"}
          handleInput={handleInput}
          required={"required"}
          clear={finish}
        />
      </div>

      <h3 className="text-lg text-black font-inter  font-semibold border-t pt-4">
        Employee Information
      </h3>

      <FormInput
        options={teams.map((team) => team.name)}
        placeholder="Team Name"
        title="Team Name"
        type="options"
        prop={"team"}
        handleInput={handleInput}
        required={"required"}
        clear={finish}
      />

      <div className=" border-t flex justify-between items-center">
        <h3 className="text-lg text-black font-inter font-semibold pt-4">
          Shipment Details
        </h3>
        <span className="pt-4">Complete</span>
      </div>

      <div className="flex gap-4">
        <FormInput
          title="City"
          placeholder="City"
          type="text"
          prop={"city"}
          handleInput={handleInput}
          required={"required"}
          clear={finish}
        />
      </div>

      <div className="flex gap-1">
        <FormInput
          title="Zip Code"
          placeholder="0000"
          type="number"
          prop={"zipCode"}
          handleInput={handleInput}
          required={"required"}
          clear={finish}
        />
        <FormInput
          title="Address"
          placeholder="Steet, number"
          type="text"
          prop={"address"}
          handleInput={handleInput}
          required={"required"}
          clear={finish}
        />
        <FormInput
          title="Appartment, Suite, etc."
          placeholder="PB B"
          type="text"
          prop={"appartment"}
          handleInput={handleInput}
          required={"required"}
          clear={finish}
        />
      </div>

      <div className="flex gap-4">
        <FormInput
          title="Joining Date"
          type="date"
          placeholder="Join date"
          prop={"joiningDate"}
          handleInput={handleInput}
          required={"required"}
          clear={finish}
        />
        <FormInput
          title="Time slot for delivery"
          placeholder="HH/MM - HH/MM"
          type="text"
          prop={"timeSlotForDelivery"}
          handleInput={handleInput}
          required={"required"}
          clear={finish}
        />
      </div>

      <div className="flex flex-col gap-1 m-auto w-[98%]">
        <FormInput
          title="Additional Info"
          placeholder="Additional Info"
          type="text"
          prop={"additionalInfo"}
          handleInput={handleInput}
          clear={finish}
          required={"required"}
        />
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
          onClick={handleEditMember}
        />
      </div>
    </div>
  );
});
