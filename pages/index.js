import { useState } from "react";
import { sanityClient, PortableText } from "../lib/sanity";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const postsQuery = `*[_type == "post"]{
  _id,
  title,
  author,
  content,
}`;

export default function Home({ posts }) {
  const [current, setCurrent] = useState(0);
  const { setDarkTheme, setLightTheme, theme } = useTheme();

  return (
    <div className="flex flex-row py-8 text-gray-700 bg-white transition duration-700 dark:bg-dark dark:text-gray-300 divide-x divide-gray-300">
      <div className="w-96 flex-col gap-3 px-6 hidden lg:flex">
        <div>
          {theme == "dark" && (
            <button
              onClick={() => setLightTheme()}
              className="bg-gray-700 dark:bg-gray-200 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white dark:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          )}
          {theme == "light" && (
            <button
              onClick={() => setDarkTheme()}
              className="bg-gray-700 dark:bg-gray-200 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white dark:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          )}
        </div>
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
      <div className="w-full px-6 md:px-14">
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{posts[current]?.title}</h1>
          <span className="text-lg text-blue-400 font-semibold">
            Autor:
            <a
              href="https://www.youtube.com/c/ChironLast"
              className="ml-2 hover:underline"
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