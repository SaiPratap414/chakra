import React from "react";
import { StyledFactionContent, StyledFactionItem } from "./factions.style";
import Image from "next/image";

type Props = {
  activeSection: string;
  faction: any;
};

const FactionView = ({ activeSection, faction }: Props) => {
  return (
    <StyledFactionItem
      className={`grid grid-cols-[20%_55%_25%] relative z-10 h-full ${
        activeSection === faction.id ? "active" : "in-active"
      }`}
    >
      <div></div>
      <div className="flex">
        <div className="py-12 m-auto">
          {activeSection === faction.id && (
            <Image
              className=""
              loading="lazy"
              width={460}
              height={580}
              src={`/images/factions/${faction.id}.png`}
              alt={faction.title}
            />
          )}
        </div>
      </div>
      <div className="flex">
        <StyledFactionContent className="m-auto relative z-10">
          <header>
            <h4>{faction.title}</h4>
          </header>
          <div className="faction-detail">{faction.desc}</div>
        </StyledFactionContent>
      </div>
    </StyledFactionItem>
  );
};

export default FactionView;
