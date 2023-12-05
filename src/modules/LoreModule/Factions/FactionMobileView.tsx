import React from "react";
import { StyledFactionMobileCard } from "./factions.style";
import Image from "next/image";

type Props = {
  faction: any;
};

const FactionMobileView = ({ faction }: Props) => {
  return (
    <StyledFactionMobileCard>
      <figure>
        <Image
          className=""
          loading="lazy"
          width={460}
          height={580}
          src={`/images/factions/${faction.id}.png`}
          alt={faction.title}
        />
      </figure>

      <div className="p-3">
        <h4>{faction.title}</h4>
        <div>{faction.desc}</div>
      </div>
    </StyledFactionMobileCard>
  );
};

export default FactionMobileView;
