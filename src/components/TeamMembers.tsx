"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { GridTeam, TableTeam } from "./";

interface TeamMembersProps {
  display?: string;
}

export const TeamMembers = observer(function ({ display }: TeamMembersProps) {

  return (
    <section className="flex flex-col gap-4">
      {display === "grid" ? <GridTeam  /> : <TableTeam />}
    </section>
  );
});
