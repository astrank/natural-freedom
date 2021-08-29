import { useState } from "react";
import { sanityClient, PortableText } from "../lib/sanity";

const postsQuery = `*[_type == "post"]{
  _id,
  title,
  content
}`;

export default function Home({ posts }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-row py-8 divide-x divide-gray-300 text-gray-700">
      <div className="w-96 flex flex-col gap-3 px-6">
        {posts &&
          posts.map((post, index) => (
            <div
              key={post._id}
              className="cursor-pointer text-md font-semibold hover:text-gray-500"
              onClick={() => setCurrent(index)}
            >
              {post.title}
            </div>
          ))}
      </div>
      <div className="w-full px-10">
        <h1 className="text-5xl bold mb-8 font-bold">{posts[current]?.title}</h1>
        <PortableText blocks={posts[current]?.content} className="flex flex-col gap-5 text-lg leading-7" />
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