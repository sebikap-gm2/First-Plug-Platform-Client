"use client";
import { PageLayout } from "@/common";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";
export default function MyTeam() {
  const {
    members: { members },
  } = useStore();

  return (
    <PageLayout>{members.length ? <DataTeam /> : <EmptyTeam />}</PageLayout>
  );
}
