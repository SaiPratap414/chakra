import Accordion from "@components/Accordion";
import {
  StyledEcoSystemContentSection,
  StyledEcoSystemGrid,
  StyledEcoSystemSliderContent,
  StyledLoreContentDesc,
  StyledLoreContentHeading,
} from "../lore.style";
import { StyledGameItemCTA } from "modules/PlayModule/play.style";
import Link from "next/link";
import PlayIcon from "../PlayIcon";
import EcoContentTabs from "../EcoContentTabs";

type Props = {};

const WebModule = (props: Props) => {
  return (
    <StyledEcoSystemContentSection>
      <div className="grid grid-cols-1 mb-8 lg:mb-16">
        <div className="xl:max-w-7xl">
          <StyledLoreContentHeading
            className="font-marco text-red-e11 flex items-center"
            style={{
              margin: 0,
            }}
          >
            Webonacci
          </StyledLoreContentHeading>
          <StyledLoreContentDesc className="mt-4 mb-6 text-white text-sm">
            Web3 sets the stage for a self-sovereign financial system, an open
            contributor/creator economy, and a universal digital representation
            and ownership layer via NFTs. Ecosystem leverages web3 technologies
            such as NFTs & a Native unit of account ($SOMA) to provide greater
            control and value to users whose incentives are aligned with those
            of Chakra Ecosystem.
          </StyledLoreContentDesc>
        </div>
      </div>
      <EcoContentTabs
        tabs={[
          {
            id: "nfts",
            title: "NFTs",
            content: (
              <StyledEcoSystemGrid className="gap-4 overflow-hidden">
                <article className="">
                  <ul className="text-white pl-5 list-decimal">
                    <li>
                      <StyledLoreContentDesc className="mb-4 text-white text-sm">
                        <strong>Chakra Chieftains</strong> {`->`} A unique
                        collection of 500 OG PFP characters that play a crucial
                        role in the ownership of the ecosystem. These NFTs
                        facilitate value accrual to their holders by acting as a
                        significant reward multiplier among other benefits.
                      </StyledLoreContentDesc>
                    </li>
                    <li>
                      <StyledLoreContentDesc className="mb-6 text-white text-sm ">
                        <strong>Chakra 10k</strong> {`->`}{" "}
                        <span className="">
                          A larger set of 10k 3D characters that are functional
                          in gaming, aimed at engaging a wider audience within
                          the ecosystem. While these also enable value accrual
                          to holders through multipliers, their impact is
                          slightly lower compared to the Chakra Chieftains.
                        </span>
                      </StyledLoreContentDesc>
                    </li>
                  </ul>
                </article>
                <StyledEcoSystemSliderContent>
                  <figure>
                    <img src="/images/eco-system/NFTs.jpg" />
                  </figure>
                </StyledEcoSystemSliderContent>
              </StyledEcoSystemGrid>
            ),
          },
          {
            id: "public-goods",
            title: "Public Goods",
            content: (
              <StyledEcoSystemGrid className="gap-4 overflow-hidden">
                <article className="">
                  <StyledLoreContentDesc className="mb-6 text-white text-sm ">
                    Core non-rivalrous public infrastructure to help create a
                    virtuous cycle of activity, expansion & commerce within the
                    Chakra ecosystem.
                  </StyledLoreContentDesc>
                  <ol className="list-disc pl-4 mb-6 text-white">
                    <li>
                      <p className="mb-3">
                        <span className="font-bold">Playable Game Content</span>{" "}
                        <span className="text-red-e11">{`->`}</span> Chakra
                        games accessible for all users to play and engage with
                        the ecosystem
                      </p>
                    </li>
                    <li>
                      <p className="mb-3">
                        <span className="font-bold">Marketplace</span>{" "}
                        <span className="text-red-e11">{`->`}</span> NFT and
                        virtual asset market place for P2P trading
                      </p>
                    </li>
                    <li>
                      <p className="mb-3">
                        <span className="font-bold">Game Vendor</span>{" "}
                        <span className="text-red-e11">{`->`}</span> Vendor
                        acting as main sink for tokens through which players can
                        access NFT drops and DLC
                      </p>
                    </li>
                    <li>
                      <p className="mb-3">
                        <span className="font-bold">Wagering</span>{" "}
                        <span className="text-red-e11">{`->`}</span> Wagering
                        contracts that enable a robust wager 2 earn mechanisms
                        for certain PvP and PvE game modes
                      </p>
                    </li>
                    <li>
                      <p className="mb-3 bg-white">
                        <span className="font-bold">Wagering</span>{" "}
                        <span className="text-red-e11"></span> Wagering
                        contracts that enable a robust wager
                      </p>
                    </li>
                    <li>
                      <p className="mb-3 ">
                        <span className="font-bold bg-white leading-normal">
                          Wagering Wagering contracts that enable a robust wager
                          2 earn mechanisms for certain PvP
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="mb-3 bg-white">
                        <span className="font-bold">Wagering</span>{" "}
                        <span className="text-red-e11"></span> Wagering
                        contracts that enable a robust wager
                      </p>
                    </li>
                    <li>
                      <p className="mb-3 ">
                        <span className="font-bold bg-white leading-normal">
                          Wagering contracts that enable a robust wager 2 earn
                          mechanisms for certain PvP and PvE game modes
                        </span>
                      </p>
                    </li>
                  </ol>
                </article>
                <StyledEcoSystemSliderContent>
                  <figure>
                    <img src="/images/eco-system/NFTs.jpg" alt="" />
                  </figure>
                </StyledEcoSystemSliderContent>
              </StyledEcoSystemGrid>
            ),
          },
        ]}
      />
      <div className="text-center xl:my-6 xl:my-12">
        <svg
          className="mx-auto"
          width="177"
          height="37"
          viewBox="0 0 177 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.502214 18.4581C0.655122 18.3857 0.817339 18.3344 0.984316 18.3056C4.14769 18.2468 6.53398 16.665 8.64951 14.5255C10.1905 12.9742 11.2295 12.9568 12.8981 14.3359C14.7979 15.9046 17.1094 16.628 19.4825 16.8458C23.8192 17.2445 28.1779 17.5125 32.5322 17.6106C37.3356 17.7217 42.1434 17.5626 46.949 17.5583C52.7981 17.5583 58.1981 16.0506 63.0323 12.7803C66.0602 10.7506 68.3697 7.83322 69.6364 4.43787C70.0384 3.39065 70.57 2.39681 71.2192 1.47913C72.0799 0.274283 73.403 0.0999856 74.7832 0.389758C75.7034 0.581488 76.071 1.26126 76.1723 2.13275C76.3924 3.99776 75.9676 5.76691 74.7348 7.12645C73.0926 8.97604 71.2942 10.6838 69.359 12.2312C67.3888 13.776 65.1566 14.9939 62.8914 16.4515C63.1949 16.4002 63.4944 16.3274 63.7874 16.2336C66.7636 15.0157 69.7795 13.8849 72.6919 12.5297C74.8361 11.534 76.5377 9.91524 78.0325 8.07202C78.9498 6.94613 79.9892 5.92326 81.132 5.02178C82.3141 4.08491 83.3334 4.22218 84.4187 5.14379C85.4379 6.01529 85.8077 7.20052 85.0064 8.35961C84.2051 9.51871 83.1881 10.7105 81.9839 11.4099C79.5624 12.8239 76.9802 13.9721 74.4156 15.1246C72.7205 15.8872 70.9418 16.4646 69.1455 17.1443C70.528 17.5801 75.8619 16.8807 79.5756 15.7477C83.0318 14.6932 86.1599 13.1027 88.4472 10.1418C93.5962 16.1203 100.674 16.7674 107.751 17.4145L107.861 17.1443C106.932 16.7696 105.999 16.3992 105.072 16.0157C102.43 14.9264 99.76 13.9154 97.18 12.704C95.1856 11.765 93.3717 10.4904 92.1675 8.57531C91.2231 7.07416 91.5071 5.76037 92.8697 4.7625C93.7503 4.12631 94.6683 4.00866 95.5114 4.66882C96.5394 5.47278 97.6445 6.27891 98.4018 7.31164C100.896 10.7061 104.266 12.8413 108.121 14.3468C110.018 15.1197 111.963 15.7689 113.946 16.2903C113.629 16.0855 113.305 15.8915 112.997 15.6737C110.41 13.8326 107.74 12.094 105.274 10.1048C103.936 9.01542 102.833 7.59488 101.843 6.18305C101.246 5.32462 100.927 4.20257 100.742 3.15459C100.548 2.04125 100.881 0.919198 102.021 0.376687C103.161 -0.16582 104.442 -0.191966 105.296 0.762323C106.192 1.75354 106.889 2.90395 107.35 4.15246C108.468 7.48104 110.615 10.3774 113.488 12.4317C117.543 15.3702 122.388 17.0533 127.409 17.2685C136.494 17.7043 145.595 18.0354 154.678 17.2968C156.813 17.1247 158.94 16.5866 161.005 15.9896C162.129 15.6671 163.206 14.9852 164.141 14.2575C165.698 13.0483 166.81 13.0221 168.271 14.41C169.984 16.0266 171.745 17.5692 174.147 18.0877C174.917 18.2533 175.712 18.3056 176.5 18.5758C176.347 18.6491 176.185 18.7004 176.018 18.7283C172.855 18.7871 170.468 20.3689 168.353 22.5084C166.812 24.0597 165.773 24.0793 164.104 22.7001C162.191 21.1314 159.893 20.4016 157.52 20.1837C153.183 19.785 148.824 19.5192 144.468 19.4189C139.667 19.3078 134.857 19.4691 130.051 19.4734C124.204 19.4734 118.804 20.9811 113.97 24.2492C110.944 26.2828 108.638 29.2042 107.377 32.6025C106.975 33.6504 106.443 34.6444 105.792 35.5613C104.931 36.7683 103.608 36.9404 102.228 36.6506C101.308 36.4589 100.942 35.7791 100.839 34.9076C100.619 33.0862 101.013 31.341 102.217 30.0055C103.876 28.127 105.691 26.3895 107.643 24.8113C109.609 23.2622 111.846 22.0465 114.111 20.5911C113.807 20.6433 113.508 20.7161 113.215 20.809C110.239 22.0269 107.221 23.1577 104.308 24.5128C102.166 25.5085 100.464 27.1273 98.9697 28.9684C98.0524 30.0943 97.013 31.1171 95.8702 32.0186C94.6881 32.9555 93.6578 32.8204 92.5835 31.8966C91.5643 31.0251 91.1989 29.8464 91.9936 28.6808C92.7883 27.5152 93.7547 26.3691 94.9258 25.685C97.3782 24.2558 99.989 23.0814 102.587 21.9092C104.279 21.1467 106.06 20.5715 107.857 19.8917C106.47 19.456 101.138 20.1532 97.4244 21.2861C93.9704 22.3406 90.8401 23.9311 88.5066 26.9509C86.2216 23.9442 83.1176 22.3254 79.6571 21.2861C76.2504 20.2636 72.6998 19.7898 69.1411 19.883C70.0723 20.2577 71.0057 20.6281 71.9324 21.0116C74.5741 22.101 77.24 23.1228 79.8244 24.3233C81.6889 25.1948 83.3708 26.3909 84.597 28.0882C85.8231 29.7854 85.614 31.1842 84.1281 32.2648C83.2475 32.901 82.3296 33.0165 81.4864 32.3563C80.4584 31.5502 79.3533 30.7441 78.596 29.7113C76.1019 26.3168 72.7315 24.1839 68.8769 22.6783C66.9772 21.9376 65.0664 21.2338 63.1534 20.5127L63.0367 20.7501C63.6399 21.1227 64.2695 21.4561 64.8374 21.8744C67.3932 23.7546 70.0128 25.563 72.4432 27.5936C73.6209 28.5762 74.5191 29.9336 75.382 31.2256C75.8487 31.9228 76.0754 32.8248 76.2361 33.6658C76.4915 34.9861 75.9125 36.2149 74.977 36.6811C73.8631 37.2367 72.2561 37.0864 71.4327 36.0711C70.653 35.1189 70.044 34.0416 69.632 32.8858C68.5283 29.5518 66.381 26.6521 63.5012 24.6065C59.4451 21.663 54.5979 19.9767 49.5731 19.761C40.488 19.3252 31.3875 18.9766 22.3046 19.7392C19.9954 19.9309 17.7104 20.6107 15.465 21.2338C14.5162 21.4996 13.6202 22.1336 12.8387 22.7589C11.2977 23.9965 10.175 23.9987 8.71333 22.6108C7.00948 20.9942 5.24838 19.4473 2.84447 18.9331C2.07619 18.7697 1.2815 18.7152 0.500002 18.615C0.504411 18.5714 0.502214 18.5147 0.502214 18.4581Z"
            fill="#E11D48"
          />
        </svg>
      </div>
    </StyledEcoSystemContentSection>
  );
};

export default WebModule;
