"use client";
import { Layout, Button, CustomLink, EmptyCard } from "@/common";
import { AddIcon, UpLoadIcon } from "@/common/Icons";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";

export default function MyTeam() {
  const {
    members: { members },
  } = useStore();
  return (
    <div>
      {members.length ? <DataTeam /> : <EmptyTeam />}
    </div>
  );
}
