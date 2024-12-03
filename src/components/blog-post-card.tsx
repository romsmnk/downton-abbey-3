import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

interface BlogPostCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
}

export function BlogPostCard({ img, tag, title, desc }: BlogPostCardProps) {
  return (
    <Card shadow={true}>
      <CardHeader className="justify-center rounded-lg self-center flex align-middle">
        <Image
          width={100}
          height={100}
          src={img}
          alt={title}
          className="justify-center rounded-lg self-center flex align-middle"
        />
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="small" color="blue" className="mb-2 !font-medium">
          {tag}
        </Typography>
        <Typography
          as="a"
          href="#"
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case transition-colors hover:text-gray-900"
        >
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default BlogPostCard;
