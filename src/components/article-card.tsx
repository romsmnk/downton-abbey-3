import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

interface ArticleCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ArticleCard({ img, title, desc }: ArticleCardProps) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <Image
        width={768}
        height={768}
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-black/60" />
      <CardBody
        className="relative flex flex-col justify-end text-right"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography
          variant="h4"
          color="white"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="paragraph"
          color="white"
          className="my-2 font-normal text-right"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ArticleCard;
