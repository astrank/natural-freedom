import { useState } from "react";
import { sanityClient, PortableText } from "../lib/sanity";
import * as Dialog from "@radix-ui/react-dialog";
import Switcher from "../components/Switcher";
import MenuIcon from "../assets/MenuIcon";
import Posts from "../public/data/posts.json";

const postsQuery = `*[_type == "post"]{
  _id,
  title,
  author,
  content,
}`;

export default function Home({ posts }) {
    const [current, setCurrent] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row text-gray-700 bg-white dark:bg-dark dark:text-gray-200 transition duration-700 divide-x-none lg:h-screen lg:overflow-hidden">
            <nav className="w-full lg:w-96 flex flex-row my-8 lg:border-r lg:border-gray-300 dark:lg:border-gray-500 lg:flex-col gap-4 px-3 sm:px-6 md:px-14 lg:px-6 justify-between lg:justify-start">
                <Switcher />
                <div className="lg:hidden">
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <MenuIcon className="focus:outline-none" />
                        </Dialog.Trigger>
                        <Dialog.Overlay className="inset-0 fixed bg-black opacity-30" />
                        <Dialog.Content className="w-full md:w-1/2 fixed right-0 text-gray-300 bg-dark dark:text-gray-700 dark:bg-white px-10 py-4">
                            <Dialog.Close className="flex ml-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </Dialog.Close>
                            <div className="flex flex-col items-center py-4 gap-4">
                                {posts &&
                                    posts.map((post, index) => (
                                        <Dialog.Close key={post.slug}>
                                            <div
                                                className="cursor-pointer text-md font-classic font-semibold hover:text-blue-400 hover:underline"
                                                onClick={() =>
                                                    setCurrent(index)
                                                }
                                            >
                                                {post.title}
                                            </div>
                                        </Dialog.Close>
                                    ))}
                            </div>
                        </Dialog.Content>
                    </Dialog.Root>
                </div>
                <div className="hidden lg:flex lg:flex-col lg:gap-4">
                    {posts &&
                        posts.map((post, index) => (
                            <div
                                key={post.slug}
                                className="cursor-pointer text-md font-classic font-semibold hover:text-blue-400 hover:underline"
                                onClick={() => {
                                    setCurrent(index);
                                }}
                            >
                                {post.title}
                            </div>
                        ))}
                </div>
            </nav>
            <div className="w-full px-3 sm:px-6 md:px-14 lg:py-8 lg:overflow-y-auto">
                <div className="mb-6 flex flex-col gap-3">
                    <h1 className="text-5xl font-bold">
                        {posts[current]?.title}
                    </h1>
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
                <p>{posts[current]?.text}</p>
                {/* <PortableText
                    blocks={posts[current]?.text}
                    className="flex flex-col gap-5 text-lg leading-7 font-classic"
                /> */}
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const posts = await import("../public/data/posts.json").then(
        (res) => res.default
    );

    return {
        props: { posts },
    };
};

// export async function getStaticProps() {
//   const posts = await sanityClient.fetch(postsQuery);

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 60,
//   };
// }
