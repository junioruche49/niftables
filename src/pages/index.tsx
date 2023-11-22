import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import CreonPassNFT from "@/components/creonpassnft/CreonPassNFT";
import Profiting from "@/components/profiting/Profiting";
import OurVision from "@/components/ourvision/OurVision";
import ComingSoon from "@/components/comingSoon/ComingSoon";
import News from "@/components/news/News";
import Footer from "@/components/footer/Footer";
import MobileVision, {
  SmMobileVision,
} from "@/components/mobilevision/MobileVision";
import SmCreonPassNFT from "@/components/smcreonpassnft/SmCreonPassNFT";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className={`w-full flex justify-center mx-auto relative z-0`}>
        <div className="w-[80%]  mb-20 mt-16 lg:block hidden">
          <CreonPassNFT />
        </div>
        <div className="lg:hidden   justify-center w-[95%] md:flex hidden  mb-20 mt-16">
          <OurVision />
        </div>
        <div className="md:hidden  justify-center w-[99%] sm:flex hidden mb-20 mt-16">
          <MobileVision />
        </div>
        <div className="sm:hidden w-[95%] justify-center flex mb-20 mt-16">
          <SmMobileVision />
        </div>
      </div>
      <div className={`w-full flex justify-center mx-auto relative z-0`}>
        <div className="lg:w-[80%] w-[95%]  mb-20 mt-20">
          <Profiting />
        </div>
      </div>
      <div className={`w-full flex justify-center mx-auto relative z-0`}>
        <div className="lg:w-[80%] w-[95%]  mb-20 mt-20 hidden lg:block">
          <OurVision />
          <ComingSoon />
        </div>
      </div>
      <News />
      <div className=" flex justify-center lg:hidden">
        <div className="w-[95%]">
          <div className="md:block hidden">
            <CreonPassNFT />
          </div>
          <div className="md:hidden block">
            <SmCreonPassNFT />
          </div>
          <ComingSoon />
        </div>
      </div>
      <Footer />
    </div>
  );
}
