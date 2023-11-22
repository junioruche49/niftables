import React from "react";
import Vision from "../../assets/img/vision.png";
import Image from "next/image";
import Icon1 from "../../assets/img/icon1.png";
import Icon2 from "../../assets/img/icon2.png";
import Icon3 from "../../assets/img/icon3.png";
import Icon4 from "../../assets/img/icon4.png";
import Down from "../../assets/img/down.png";

const mission = [
  {
    icon: Icon1,
    header: "Profitability and Growth",
    text: "At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.",
    status: false,
  },
  {
    icon: Icon2,
    header: "Transparent & Fair Decentralized Earnings",
    text: "At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.",
    status: false,
  },
  {
    icon: Icon3,
    header: "Luanching the future",
    text: "At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.",
    status: false,
  },
  {
    icon: Icon4,
    header: "Limitless possibilities of AI and Crypto",
    text: "At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.",
    status: false,
  },
];

function OurVision() {
  return (
    <div className="flex lg:my-52 my-10">
      <div className="flex flex-col flex-cust-2 pr-44">
        <h3 className="monumentExtended text-3xl uppercase hidden lg:block">
          Our vision is to support the innovation of AI blockchain projects
          <span className="text-bg">
            while prioritizing communities and democratizing profits
          </span>
        </h3>
        <h3 className="text-bg monumentExtended text-2xl uppercase lg:hidden">
          our mission is to provide unique, confidential AI-based tools, to
          which you will gain lifetime access through NFT tokens and our CREON
          token.
        </h3>
        <div className="-mr-56 mt-10">
          <Image src={Vision} alt="vision" className="lg:w-[85%] w-[75%]" />
        </div>
      </div>
      <div className="flex flex-cust-12">
        <ul className="list-none flex flex-col">
          {mission.map((data, id) => {
            return (
              <li
                key={id}
                className="flex flex-row items-center justify-start mb-10"
              >
                <div className="w-20 flex mr-5">
                  <Image src={data.icon} alt="icon" className="w-20" />
                </div>
                <div className="satoshi-bold text-white flex flex-cust-1 justify-start">
                  {data.header}
                </div>
                <div className="ml-5">
                  <Image src={Down} alt="down" className="w-3" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default OurVision;
