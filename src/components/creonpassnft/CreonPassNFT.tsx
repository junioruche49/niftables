import React from "react";
import Image from "next/image";
import Video from "../../assets/img/Video.png";

function CreonPassNFT() {
  return (
    <div className="flex flex-row mt-20 mb-36">
      <div className="flex flex-col lg:w-[50%] w-[60%]">
        <h2 className="uppercase lg:text-6xl text-4xl text-white monumentExtended pt-6">
          creon pass nft
        </h2>
        <p className="text-bg satoshi-bold mb-10 mt-5 border-t hidden lg:block border-gray-900 pt-4">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>
        <p className="text-bg satoshi-bold mb-5 mt-5 lg:hidden block border-t border-gray-900 pt-4">
          Access to confidential AI tools enabling business optimization and
          development. Only NFT holders will have the ability to use a given
          tool.
        </p>
        <ul className="list-none text-white satoshi-regular mb-10  text-[0.88rem] hidden lg:block">
          <li className="mb-2 text-sm text-[0.88rem] border border-gray-900 rounded p-2">
            Pre-launch investment opportunities for upcoming AI projects
          </li>
          <li className="mb-2 text-sm text-[0.88rem] border border-gray-900 rounded p-2">
            Free and early access to Creon built AI projects
          </li>
          <li className="mb-2 text-sm text-[0.88rem] border border-gray-900 rounded p-2">
            Higher allocation limits on the Creon AI Launchpad
          </li>
          <li className="text-sm text-[0.88rem] border border-gray-900 rounded p-2">
            Revenue share distribution from Creon built AI projects
          </li>
        </ul>
        <div className="lg:hidden flex flex-col mb-5">
          <div>
            <p className="flex flex-cust-2 satoshi-regular mb-2 text-sm text-[0.88rem] border border-gray-900 rounded p-2">
              Prospect to derive financial benefits through the redistributed
              profit generated from AI tools, but only when the majority of NFT
              holders decide to release the tool publicly.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="flex mb-2 text-sm satoshi-regular text-[0.88rem] border border-gray-900 rounded p-2">
              The possibility of allocating investments into new, exceptional
              tokenized AI tools through Creon Launchpad.
            </p>
            <p className="flex mb-2 text-sm satoshi-regular text-[0.88rem] border border-gray-900 rounded p-2">
              Early access to allocations in inspiring tokenized projects, real
              businesses based on AI.
            </p>
          </div>
        </div>
        <button className="bg-custom text-white py-3 w-[72%]  rounded text-sm btn">
          <span className="btn__visible satoshi-regular text-lg">
            Buy Creon Pass
          </span>
          <span className="btn__invisible satoshi-medium  text-xl">
            Buy Creon Pass
          </span>
        </button>
      </div>
      <div className="flex">
        <Image src={Video} alt="video" className="lg:h-[34rem] h-[30rem]" />
      </div>
    </div>
  );
}

export default CreonPassNFT;
