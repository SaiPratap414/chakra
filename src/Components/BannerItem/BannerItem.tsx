import React from "react";

import Link from "next/link";
import { StyledBannerItemWrapper } from "./banner.style";
import { motion } from "framer-motion";

type Props = {
  imgUrl: string;
  title: string;
  titleSubText: string;
  path: string;
  hasCTA: boolean;
};

const BannerItem = ({ imgUrl, title, titleSubText, path, hasCTA }: Props) => {
  return (
    <StyledBannerItemWrapper
      whileInView="visible"
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={imgUrl} alt={title} />
      <div className="gradient"></div>
      <motion.aside>
        <h3 className="font-marco text-right">
          {title} <br></br>
          <span className="text-white">{titleSubText}</span>
        </h3>
        {hasCTA ? (
          <Link href={path} target="_blank">
            <button className="font-marco uppercase">play now</button>
          </Link>
        ) : (
          <button className="font-marco uppercase pointer-events-none">
            play now
          </button>
        )}
      </motion.aside>
    </StyledBannerItemWrapper>
  );
};

export default BannerItem;
