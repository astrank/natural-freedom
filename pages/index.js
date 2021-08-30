import { useState, useEffect } from "react";
import { sanityClient, PortableText } from "../lib/sanity";
import { useTheme } from "../context/ThemeContext";
import * as Switch from "@radix-ui/react-switch";

import MenuIcon from "../assets/MenuIcon";
import SunIcon from "../assets/SunIcon";
import MoonIcon from "../assets/MoonIcon";

const postsQuery = `*[_type == "post"]{
  _id,
  title,
  author,
  content,
}`;

export default function Home({ posts }) {
  const [current, setCurrent] = useState(0);
  const { setDarkTheme, setLightTheme, theme } = useTheme();

  const handleSwitch = () => {
    theme == "dark" ? setLightTheme() : setDarkTheme();
  }

  return (
    <div className="flex flex-col lg:flex-row lg:py-8 text-gray-700 bg-white dark:bg-dark dark:text-gray-300 transition duration-700 divide-x-none lg:divide-x lg:divide-gray-300">
      <div className="w-full lg:w-96 flex flex-row lg:flex-col gap-3 py-8 lg:py-0 px-3 sm:px-6 md:px-14 lg:px-6 justify-between lg:justify-start">
        <div>
          <Switch.Root
            name="switch"
            checked={theme == "dark" ? true : false}
            onCheckedChange={() => handleSwitch()}
            className="switch bg-gray-700 shadow-md relative gap-3 flex flex-row rounded-full w-16 h-8 lg:mb-4 items-center justify-center"
          >
            <SunIcon />
            <Switch.Thumb className="thumb h-6 w-6 rounded-full bg-gray-200 z-20 absolute left-1" />
            <MoonIcon />
          </Switch.Root>
        </div>
        <div className="block lg:hidden cursor-pointer">
          <MenuIcon />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:gap-3">
          {posts &&
            posts.map((post, index) => (
              <div
                key={post._id}
                className="cursor-pointer text-md font-classic font-semibold hover:text-blue-400 hover:underline"
                onClick={() => setCurrent(index)}
              >
                {post.title}
              </div>
            ))}
        </div>
      </div>
      <div className="w-full px-3 sm:px-6 md:px-14">
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{posts[current]?.title}</h1>
          <span className="text-lg font-semibold">
            Autor:
            <a
              href="https://www.youtube.com/c/ChironLast"
              className="ml-2 text-blue-400 hover:underline"
              target="_blank"
            >
              {posts[current]?.author}
            </a>
          </span>
        </div>
        <PortableText
          blocks={posts[current]?.content}
          className="flex flex-col gap-5 text-lg leading-7 font-classic"
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);

  return {
    props: {
      posts
    }
  };
}