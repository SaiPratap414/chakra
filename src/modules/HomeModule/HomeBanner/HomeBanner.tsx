/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  StyledHomeBannerWrapper,
  StyledMobileHomeBannerWrapper,
} from "./homebanner.style";
import { StyledHomeBannerBgImgWrapper } from "../home.style";

import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

type Props = {};

import { useWindowSize } from "react-use";

const HomeBanner = (props: Props) => {
  const homeBannerRef = useRef(null);

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (homeBannerRef) {
      var scene = document.getElementById("home-scene");
      if (scene) {
        var parallaxInstance = new Parallax(scene);
      }
    }
  }, [homeBannerRef]);

  if (width >= 1280) {
    return (
      <>
        <StyledHomeBannerWrapper
          id="home-scene"
          data-friction-x="0.1"
          data-friction-y="0.1"
          data-scalar-x="15"
          data-scalar-y="15"
          // data-relative-input="true"
          style={{
            height: "100vh",
            width: "100vw",
          }}
          ref={homeBannerRef}
        >
          <div data-depth="0" className="layer"></div>
          <div data-depth="0.10" className="layer">
            <img
              className="background"
              src="/images/home/parallax/background.png"
            />
          </div>
          <div data-depth="0.15" className="layer">
            <img
              className="background-devis"
              src="/images/home/parallax/02.png"
            />
          </div>
          <div data-depth="0.15" className="layer">
            <img
              className="background-devis"
              src="/images/home/parallax/03.png"
            />
          </div>
          <div data-depth="0.15" className="layer">
            <img className="devi" src="/images/home/parallax/04.png" />
          </div>
          {/* <div data-depth="0.1" className="layer">
            <img className="devi" src="/images/home/parallax/05.png" />
          </div> */}
          <div data-depth="0.15" className="layer">
            <img className="birds" src="/images/home/parallax/06.png" />
          </div>
          <div data-depth="0.15" className="layer">
            <img className="clouds" src="/images/home/parallax/08.png" />
          </div>
          <div data-depth="0" className="layer">
            <img className="overlay" src="/images/home/parallax/10.png" />
          </div>
          <div data-depth="0.3" className="layer">
            <img className="character" src="/images/home/parallax/07.png" />
          </div>
          <div data-depth="0.3" className="layer">
            <img
              className="character-left"
              src="/images/home/parallax/09.png"
            />
          </div>
          
        </StyledHomeBannerWrapper>
      </>
    );
  }

  return (
    <StyledMobileHomeBannerWrapper>
      <img src="/images/ogg/banner.png" alt="home banner" />
    </StyledMobileHomeBannerWrapper>
  );
};

export default HomeBanner;
