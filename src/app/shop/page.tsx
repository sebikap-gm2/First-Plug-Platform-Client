import React from "react";
import Image from "next/image";
import logo from "../../../public/logo1.png";
import { SearchInput, CustomLink } from "@/common";
import { Navbar } from "@/components";
import { ChevronRight } from "@/common/Icons";
import waveBottom from "../../../public/waves/Header shape 1.svg";
import waveTop from "../../../public/waves/Header shape 2.svg";
import girlPc from "../../../public/svg/Frame 427321382.svg";
import bagImage from "../../../public/svg/Frame 2608568.svg";
import arrowIcon from "../../../public/svg/Frame 427321381.svg";
import rectangle from "../../../public/svg/Rectangle 518.svg";

export default function Shop() {
  return (
    <>
      <div>
        <nav className="w-full h-[5.5rem] flex justify-between items-center py-[1.25rem] px-[2.5rem] bg-white fixed top-0 left-0 right-0">
          <div className="flex items-center gap-[1.5rem]">
            <CustomLink href="/home/dashboard">
              <Image src={logo} alt="logoFirstPlug" width={193} height={210} priority />
            </CustomLink>
            <SearchInput
              placeholder="Search by Team, Name or ID Number"
              width={332}
              height={48}
            />
          </div>
          <Navbar />
        </nav>
        <div className=" flex">
          <div className="w-1/2  h-screen">
            <section className="w-[38rem] h-[14rem] ml-[9rem] mt-[14rem]">
              <h1 className="font-montserrat text-[3rem] font-bold text-black gap-[1rem]">
                Coming Soon!
              </h1>
              <p className="font-inter text-[1.25rem] text-dark-grey mb-[1.5rem] mt-[1rem]">
                We`re excited to reveal that the Firstplug shop is coming soon!
                Our dedicated team is hard at work, handpicking the very best
                products for you.
              </p>
              <CustomLink
                variant="primary"
                size="big"
                className="rounded-lg w-[10rem] h-[3rem] flex"
                href="/home/dashboard"
              >
                <ChevronRight /> Dashboard
              </CustomLink>
            </section>
          </div>

          <div className="w-1/2  h-screen flex ">
            <div className="w-[50rem] h-[31.25rem]  relative mx-auto my-auto ml-0">
              <Image
                src={rectangle}
                alt="rectangle"
                height={50}
                className="absolute left-[12rem] top-[14rem] z-0 "
              />
              <Image
                src={girlPc}
                alt="girlPc"
                height={500}
                className="absolute right-3 top-7"
              />
              <Image
                src={bagImage}
                alt="bagImage"
                className="absolute right-[25rem] top-4"
              />
              <Image
                src={arrowIcon}
                alt="arrowIcon"
                className="absolute left-[23rem]"
              />
            </div>
            <div className="absolute right-0 top-0 -z-10">
              <Image src={waveTop} alt="waveTop" width={500} />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 bottom-0 z-0">
            <Image src={waveBottom} alt="waveBottom" width={600} />
          </div>
        </div>
      </div>
    </>
  );
}
