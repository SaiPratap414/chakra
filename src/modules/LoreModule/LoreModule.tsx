/* eslint-disable @next/next/no-img-element */

import Slider from "react-slick";

import {
  StyledSliderNavBtn,
  StyledLoreBgImgWrapper,
  StyledLoreContent,
  StyledLoreFactionSection,
  StyledSliderNavWrapper,
  StyledLoreBreadCrumbWrapper,
  StyledStoryNav,
} from "./lore.style";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Premise from "./Premise";
import Story from "./Story";
import Philosophy from "./Philosophy";
import { useRef, useState } from "react";
import Link from "next/link";

type Props = {};

const FACTION_NAV_LIST = [
  {
    id: "rakshasa",
    title: "Rakshasha",
  },
  {
    id: "bheekara",
    title: "Bheekara/Daitya",
  },
  {
    id: "deva",
    title: "Deva",
  },
  {
    id: "daiva",
    title: "Ugradeva/Daiva",
  },
  {
    id: "asura",
    title: "Asura",
  },
  {
    id: "yaksha",
    title: "Yaksha",
  },
  {
    id: "apsara",
    title: "Apsara",
  },
  {
    id: "vanara",
    title: "Vanara",
  },
  {
    id: "naga",
    title: "Naga",
  },
  {
    id: "kimpurusha",
    title: "Kimpurusha (tiger/bear/parrot)",
  },
  {
    id: "garuda",
    title: "Garuda",
  },
  {
    id: "shakti",
    title: "Shakti",
  },
];

const NAV_ITEMS = [
  {
    id: "premise",
    title: "premise",
  },
  {
    id: "story",
    title: "story",
  },
  {
    id: "philosophy",
    title: "philosophy",
  },
  {
    id: "faction",
    title: "factions",
    hasDropdown: true,
    subList: FACTION_NAV_LIST,
  },
];

const LoreModule = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i) {
      return <button></button>;
    },
    beforeChange: (current, next) => {
      setActiveSlide(next + 1);
    },
  };

  const sliderRef = useRef<any>(null);

  const goToNext = () => {
    if (sliderRef) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <main className="non-landing lore">
      {/* <WorldNav title="lore" list={NAV_ITEMS} activeSection={activeSection} /> */}
      <StyledLoreBreadCrumbWrapper className="grid grid-cols-2 items-center container mx-auto">
        <div className="text-left flex items-center">
          <Link href="/world">
            <p className="text-xs font-semibold capitalize text-white">world</p>
          </Link>
          <span className="text-xs font-semibold capitalize text-white mx-1">{`>`}</span>
          <span className="text-xs font-semibold capitalize text-white">
            Lore
          </span>
        </div>
        <div className="text-left">
          <StyledStoryNav>
            <Link href="/world/lore">
              <button className="text-sm xl:text-base text-red-e11 capitalize">
                story
              </button>
            </Link>
            <button
              className="text-sm xl:text-base text-white capitalize pointer-events-none"
              title="coming soon!"
            >
              Factions
            </button>
          </StyledStoryNav>
        </div>
      </StyledLoreBreadCrumbWrapper>
      <StyledLoreBgImgWrapper>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <StyledLoreContent>
              <Story canPlay={activeSlide === 1} />
            </StyledLoreContent>
          </div>
          <div>
            <StyledLoreContent>
              <Premise canPlay={activeSlide === 2} />
            </StyledLoreContent>
          </div>
          <div>
            <StyledLoreContent>
              <Philosophy canPlay={activeSlide === 3} />
            </StyledLoreContent>
          </div>
        </Slider>
        <StyledSliderNavWrapper>
          <StyledSliderNavBtn onClick={goToPrev}>
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="23" rx="4" fill="#252525" />
              <path
                d="M13.3182 16.3153L9.18466 12.1818L13.3182 8.0483L14.196 8.91761L11.5668 11.5469H17.9545V12.8168H11.5668L14.196 15.4418L13.3182 16.3153Z"
                fill="white"
              />
            </svg>
          </StyledSliderNavBtn>
          <StyledSliderNavBtn onClick={goToNext}>
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="23" rx="4" fill="#252525" />
              <path
                d="M14.1364 16.3153L13.2585 15.446L15.8878 12.8168H9.5V11.5469H15.8878L13.2585 8.92188L14.1364 8.0483L18.2699 12.1818L14.1364 16.3153Z"
                fill="white"
              />
            </svg>
          </StyledSliderNavBtn>
        </StyledSliderNavWrapper>
      </StyledLoreBgImgWrapper>
    </main>
  );
};

export default LoreModule;
