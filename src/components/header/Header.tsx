import React, { FC } from "react";
import Nav from "../nav/Nav";

function Header() {
  return (
    <header className="bg-header-pattern lg:h-[90vh] bg-cover bg-center bg-no-repeat flex justify-center">
      <div className="w-[95%] mt-5">
        <Nav />
        <div
          className={`w-full h-full flex justify-center lg:pb-20 items-end mx-auto relative z-0`}
        >
          <div className="xl:w-10/12 w-[99%]  mb-[5rem]">
            <HeaderText />
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderText() {
  return (
    <div className="mt-[18rem] sm:mb-0 ">
      <h1 className="uppercase text-6xl text-white w-7/12 satoshi-medium mb-14 lg:flex hidden">
        The world&apos;s first platform for Tokenizing AI blockchain projects
      </h1>
      <h1 className="uppercase sm:text-4xl sm:pt-0 sm:pb-0 pt-20 pb-10 text-3xl text-white satoshi-medium mb-10 lg:hidden">
        Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.
      </h1>
      <h2 className="lg:inline  hidden text-bg-inline border-custom py-2 satoshi-bold ">
        Hold the Creon Pass NFT and earn passive income from AI Tools
      </h2>
      <h2 className="lg:hidden inline  text-bg border-custom py-2 satoshi-bold ">
        Creon «Create On» confidential AI Tools for granting access through
        NFTs.
      </h2>
    </div>
  );
}

export default Header;
