"use client";

import ArticleCard from "@/components/article-card";
import { Typography } from "@material-tailwind/react";

const ARTICLES = [
  {
    img: `/image/abbey/onomastic.png`,
    title: "Onomastic",
    desc: "78 words",
  },
  {
    img: `/image/abbey/ethnographic.png`,
    title: "Ethnographic",
    desc: "48 words",
  },
  {
    img: `/image/abbey/historical.png`,
    title: "Historical",
    desc: "38 words",
  },
];

export function Articles() {
  return (
    <section className="container mx-auto px-8 py-20">
      <Typography variant="h2" color="blue-gray">
        Categories
      </Typography>
      <Typography
        variant="lead"
        className="my-2 w-full font-normal !text-gray-500 lg:w-5/12"
      >
        Explore various cultural realities effortlessly through unique
        categories.
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {ARTICLES.map((props, idx) => (
          <ArticleCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Articles;
