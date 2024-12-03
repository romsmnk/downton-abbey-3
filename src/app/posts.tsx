"use client";

import BlogPostCard from "@/components/blog-post-card";
import { Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react";

const POSTS = [
  {
    img: `/image/abbey/student.png`,
    tag: "education",
    title: "",
    desc: "Perfect for students studying translation, linguistics, or cultural studies",
  },
  {
    img: `/image/abbey/ideal.png`,
    tag: "translation insight",
    title: "",
    desc: "An ideal resource for Downton Abbey enthusiasts eager to explore cultural and translation insight",
  },
  {
    img: `/image/abbey/language.png`,
    tag: "cultural adaptation",
    title: "",
    desc: "A valuable tool for translators working with audiovisual content and cultural adaptation",
  },
];

export function Posts() {
  return (
    <section className="grid min-h-screen place-items-center p-8">
      <Tabs value="trends" className="mx-auto max-w-7xl w-full mb-16 ">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
            <Tab value="trends">Trends</Tab>
            <Tab value="frontend">Frontend</Tab>
            <Tab value="backend">Backend</Tab>
            <Tab value="cloud">Cloud</Tab>
            <Tab value="ai">AI</Tab>
            <Tab value="tools">Tools</Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <Typography variant="h1" className="mb-2">
        Who will find this website useful?
      </Typography>
      {/* <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-36 text-center text-gray-500"
      >
        {" "}
      </Typography> */}
      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc }) => (
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Posts;
