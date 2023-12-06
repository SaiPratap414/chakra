import { motion } from "framer-motion";
import GameItem from "./GameItem";

type Props = {};

const GAMES = [
  {
    id: 1,
    imgUrl: "/images/play/ascension.png",
    title: "Chakra Ascension",
    subHeading: "3D ARPG Hack & Slash",
    category: "pc // epic games",
    link: "",
  },
  {
    id: 2,
    imgUrl: "/images/play/conundrum.png",
    title: "Chakra Conundrum",
    subHeading: "Simultaneous Coordination Game",
    category: "PC // Browser",
    link: "https://maski-illiquid.github.io/ConundrumBeta/",
  },
  {
    id: 3,
    imgUrl: "/images/play/clash.png",
    title: "Chakra Clash",
    subHeading: "Simultaneous Coordination Game",
    category: "PC // Epic Games",
    link: "https://store.epicgames.com/en-US/redeem",
    
  },
];

const PlayListing = (props: Props) => {
  return (
    <section className="px-8 xl:px-12 py-16">
      <div className="container mx-auto max-w-[1440px]">
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
          {GAMES.map((game, index) => (
            <motion.li
              key={game.id}
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <GameItem {...game} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlayListing;
