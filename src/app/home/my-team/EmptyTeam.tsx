"use client";
import { Button, CustomLink, EmptyCard } from "@/common";
import { AddIcon, UpLoadIcon } from "@/common/Icons";
import { useStore } from "@/models/root.store";
export default function EmptyTeam() {
  const {
    aside: { setAside },
  } = useStore();
  return (
    <EmptyCard
      imageBottom="/girl.svg"
      paragraph="You havnet't loaded any  employees yet."
      altImage="Girl"
    >
      <div className="flex gap-2 ">
        <Button
          body="Load Team Members"
          icon={<AddIcon />}
          onClick={() => {
            setAside("LoadStock", "MyTeam");
          }}
          variant="secondary"
          size="big"
          className="rounded-md"
        />
        <CustomLink
          variant="primary"
          size="big"
          className="rounded-md flex gap-2"
          href="#"
        >
          <UpLoadIcon /> Add Team Memeber
        </CustomLink>
      </div>
    </EmptyCard>
  );
}
