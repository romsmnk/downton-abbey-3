import { IconButton, Typography } from "@material-tailwind/react";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Home", "Categories", "Categories", "About us"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Image
            width={70}
            height={46}
            src={"/image/logo.png"}
            alt={"logo"}
            className="scale-110 object-cover"
          />
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton
              size="sm"
              color="gray"
              variant="text"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton
              size="sm"
              color="gray"
              variant="text"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          &copy; {CURRENT_YEAR} Created by Kateryna Nekhaienko. All Rights
          Reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
