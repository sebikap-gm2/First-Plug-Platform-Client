import { useStore } from "@/models";
import { TeamMemberCard } from "./";
import { TeamMember } from "@/types/member";

export const GridTeam = function () {
  
  const {
    members: { members },
  } = useStore();

  return (
    <div className="grid w-full grid-cols-3 gap-2  ">
      {members.map((member: TeamMember) => (
        <TeamMemberCard
          key={member._id}
          {...member}
          className={"w-full shadow-md"}
          member={member}
        />
      ))}
    </div>
  );
};
