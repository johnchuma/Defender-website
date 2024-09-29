"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const BlogPost = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  console.log("slug is", slug);

  // Example: Fetch content based on the slug
  const content = fetchContentBySlug(slug || ""); // Replace with your actual data fetching

  if (!content) {
    return <p className="text-center">Content not found</p>;
  }

  return (
    <article>
      <h2 className="text-2xl font-bold">{content.title}</h2>
      <p>{content.date}</p>
      <div className="mt-4">
        <p>{content.body}</p>
      </div>
    </article>
  );
};

export default BlogPost;

// Dummy function to represent fetching data by slug
function fetchContentBySlug(slug: string | string[] | undefined) {
  // Replace with your actual data fetching logic
  const contentMap = {
    "some-article-title": {
      title: "Some Article Title",
      date: "August 12, 2024",
      body: "This is the content of the article...",
    },
    // Add more articles here
  };

  if (Array.isArray(slug)) {
    slug = slug.join("/");
  }

  return contentMap[slug as keyof typeof contentMap] || null;
}
