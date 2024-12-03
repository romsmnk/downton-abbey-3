"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <header className="mt-5 bg-white p-8">
      <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
        <Typography
          color="blue-gray"
          className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Step into the world of Downton Abbey and captivate your audience.
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Dive into the world of film reality—authentic props, stunning details,
          timeless stories.
        </Typography>
      </div>
      <div className="w-full lg:container lg:mx-auto">
        <Image
          width={1024}
          height={400}
          src="/image/abbey/background.png"
          alt="credit cards"
          className="h-96 w-full rounded-lg lg:h-[21rem]"
        />
      </div>
    </header>
  );
}
export default Hero;
