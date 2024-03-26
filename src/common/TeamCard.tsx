import React from "react";

interface TeamCardProps {
  team?: string;
  className?: string;
}

export function TeamCard({ team, className }: TeamCardProps) {
  // TODO: Settear los colores en otro lugar y tiparlo. Los teams son particulares
  // a cada user (empresa). En el modelo de Teams, agrear el campo "color".
  const colors_role = {
    Designer: "bg-design",
    HR: "bg-hr",
    QA: "bg-purple",
    Sales: "bg-sales",
    Devs: "bg-dev",
    Finance: "bg-finance",
    unset: "bg-grey",
  };
  return (
    <span
      className={`  ${
        className || ""
      } py-0.5 px-1 rounded text-md text-black font-medium border ${
        team && colors_role[team] ? colors_role[team] : "bg-grey"
      } `}
    >
      {team || "Assing to a Team"}
    </span>
  );
}
