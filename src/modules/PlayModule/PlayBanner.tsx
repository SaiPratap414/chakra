import Slider from "react-slick";

import BannerItem from "@components/BannerItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledBannerWrapper } from "@components/BannerItem/banner.style";

type Props = {};

// ... (imports and styles)

const PlayBanner = (props: Props) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <StyledBannerWrapper>
      <div className="container mx-auto max-w-[1440px]">
        <Slider {...settings}>
          {/* Reversed order of BannerItem components */}
          <div>
            <BannerItem
              title="EMBRACE THE FUSION OF STRATEGY AND"
              titleSubText="INTUITION AS YOU DELVE INTO THE ANCIENT WORLD."
              imgUrl="/images/play/banner/3.png"
              path="https://store.epicgames.com/en-US/redeem"
              hasCTA={false}
            />
          </div>
          <div>
            <BannerItem
              title="MASTER THE ART OF COORDINATION"
              titleSubText="AND OUTSMART YOUR ENEMIES."
              imgUrl="/images/play/banner/2.png"
              path="https://maski-illiquid.github.io/ConundrumBeta/"
              hasCTA
            />
          </div>
          <div>
            <BannerItem
              title="EXPLORERS, ADVENTURERS AND"
              titleSubText="ANCIENT ORDERS ARISE!"
              imgUrl="/images/play/banner/1.png"
              path=""
              hasCTA
            />
          </div>
        </Slider>
      </div>
    </StyledBannerWrapper>
  );
};

export default PlayBanner;

