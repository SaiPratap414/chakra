import React from "react";
import {
  StyledGameItemCTA,
  StyledGameItemCategory,
  StyledGameItemDemoCTA,
  StyledGameItemSubHeading,
  StyledGameItemTitle,
  StyledGameItemWrapper,
} from "./play.style";
import Link from "next/link";

type Props = {
  imgUrl: string;
  title: string;
  subHeading: string;
  category: string;
  link: string;
  id: number;
};

// GameItem component
const GameItem = ({ imgUrl, title, subHeading, category, link, id }: Props) => {
  return (
    <StyledGameItemWrapper>
      <figure>
        <img src={imgUrl} alt={title} />
      </figure>
      <div className="flex justify-between items-start">
        <div>
          <StyledGameItemTitle className="font-marco">
            {title}
          </StyledGameItemTitle>
        </div>
        <div className="text-right">
          <StyledGameItemDemoCTA className="flex ml-auto">
            demo{" "}
          </StyledGameItemDemoCTA>
        </div>
      </div>
      <StyledGameItemSubHeading>{subHeading}</StyledGameItemSubHeading>
      <div className="mt-6">
        <StyledGameItemCategory className="mb-2">
          {category}
        </StyledGameItemCategory>
        {link.length > 1 ? (
          <Link href={link} target="_blank">
            <StyledGameItemCTA className="font-marco">
              {id === 1 ? "Play Now" : "Play Now"}
            </StyledGameItemCTA>
          </Link>
        ) : (
          <StyledGameItemCTA className="font-marco">
           Request Access
          </StyledGameItemCTA>
        )}
      </div>
    </StyledGameItemWrapper>
  );
};


export default GameItem;
