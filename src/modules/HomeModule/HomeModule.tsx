import { StyledHomeBanner, StyledHomeBannerContent } from "./home.style";
import { motion } from "framer-motion";
import SVG from "react-inlinesvg";
import HomeBanner from "./HomeBanner";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

type Props = {};

const HomeModule = (props: Props) => {
  return (
    <main
      style={{
        background: "#000000",
      }}
    >
      <StyledHomeBanner>
        <HomeBanner />
        <div className="grid lg:grid-cols-2 z-10 relative mt-10 md:mt-0">
          <StyledHomeBannerContent>
            <div className="top-content">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <SVG
                  src="/icons/home-logo.svg"
                  className="mb-3 w-10 mr-0 text-left"
                />
              </motion.div>
            </div>
            <div className="bottom-content">
              <SVG src="/icons/chakra.svg" className="mb-3" />
              <p className="text-md text-white font-inter font-semibold p-2">
                Collaborative. Decentralized. Mythmaking.
              </p>
            </div>
          </StyledHomeBannerContent>
        </div>
      </StyledHomeBanner>

    
    </main>
  );
};

export default HomeModule;
