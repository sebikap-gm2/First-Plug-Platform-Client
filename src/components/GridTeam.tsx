import { TeamMemberCard } from "./";

interface GridTeamProps {
  members: any[];
}

export const GridTeam = function ({ members }: GridTeamProps) {
  return (
    <div className="grid w-full grid-cols-3 gap-2  ">
      {members?.map((member) => (
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
