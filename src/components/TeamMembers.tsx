"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { GridTeam } from "./";
import { DisplayView } from "@/types";
import { MembersTable } from "./Tables";

interface TeamMembersProps {
  display?: DisplayView;
}

export const TeamMembers = observer(function ({ display }: TeamMembersProps) {
  const {
    members: { membersTable },
  } = useStore();

  return (
    <section className="flex flex-col gap-4 w-full absolute  bottom-0 left-0 overflow-auto  h-[80%] ">
      {display === "grid" ? (
        <GridTeam />
      ) : (
        <MembersTable members={membersTable} />
      )}
    </section>
  );
});
