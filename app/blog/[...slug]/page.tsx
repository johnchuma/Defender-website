"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { fetchBlogById } from "@/app/(api)/blog";
import Title from "@/app/_components/title";
import ArticleAuthor from "@/app/blog/_components/article-author";
import BlogPostCard from "@/app/blog/_components/blog-post-card";
import PostCarousel from "@/app/_components/scroll-carousel";
import { formatDateTime } from "@/app/lib/utils";

interface BlogData {
  id: string;
  title: string;
  createdAt: string;
  description: string;
  image: string;
  author: string;
}

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string; // Assuming slug is a single string
  console.log("slug is ", slug);

  const [blogContent, setBlogContent] = useState<BlogData | null>(null); // Holds blog content
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const getBlogContent = async () => {
      if (slug) {
        try {
          const response = await fetchBlogById(slug);
          setBlogContent(response.data.body); // Assuming blog content is in `response.data.body`
          console.log("returned blog", response.data.body);
        } catch (err) {
          console.error("Error fetching blog content:", err);
          setError("Error fetching blog content");
        } finally {
          setLoading(false);
        }
      }
    };

    getBlogContent();
  }, [slug]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!blogContent) {
    return <p className="text-center">Content not found</p>;
  }

  return (
    <main className="container mx-auto space-y-12">
      <article className="mx-auto max-w-6xl space-y-6 pt-4">
        {/* Blog article title */}
        <Title className="text-start">{blogContent.title}</Title>

        {/* sm to md devices: Article Author */}
        <div className="block md:hidden">
          <ArticleAuthor
            authorName={blogContent.author || "Defender Technologies"}
            date={formatDateTime(blogContent.createdAt ?? "")}
            readTime="7 minutes" // This can be dynamic or static based on the content
            authorImageUrl="/images/author.jpg" // Placeholder image, you can replace it
          />
        </div>

        {/* Blog article teaser */}
        <div className="grid grid-cols-5 gap-8">
          <div className="relative col-span-5 min-h-[30vh] rounded-lg md:col-span-3 xl:min-h-[60vh] 2xl:min-h-[40vh]">
            <Image
              src={blogContent.image || "/images/children.png"} // Fallback image
              alt="Article picture"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-5 place-self-center md:col-span-2">
            <div className="w-full space-y-6">
              <Title className="text-start text-2xl font-semibold leading-8">
                In today&apos;s fast-paced world, child safety is every
                parent&apos;s top concern.
              </Title>

              {/* md and up devices: Article Author */}
              <div className="hidden md:block">
                <ArticleAuthor
                  authorName={blogContent.author || "Defender Technologies"}
                  date={formatDateTime(blogContent.createdAt ?? "")}
                  readTime="7 minutes"
                  authorImageUrl="/images/author.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog article content */}
        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: blogContent.description }} // Safely inject HTML from the content
        />
      </article>

      <section className="space-y-6">
        <Title className="text-start text-2xl">
          Other articles that might interest you
        </Title>
        {/* sm to md devices: Other Articles */}
        <div className="md:hidden">
          <PostCarousel
            items={[
              <BlogPostCard
                uuid="5f73c0e1-8920-4f78-b6ea-712abbc011a2"
                key="blogpost-1"
                imageUrl="/images/children-walking.png"
                date="August 12, 2024"
                title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
                description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
                titleLength={7}
                descriptionLength={12}
              />,
              <BlogPostCard
                uuid="5f73c0e1-8920-4f78-b6ea-712abbc011a2"
                key="blogpost-2"
                imageUrl="/images/children-walking.png"
                date="August 10, 2024"
                title="The Importance of Smartwatches in Keeping Children Safe"
                description="Discover how smartwatches can play a crucial role in ensuring the safety of your children while giving them the freedom to explore."
                titleLength={7}
                descriptionLength={12}
              />,
            ]}
          />
        </div>

        {/* md and up devices: Other Articles */}
        <div className="hidden gap-8 md:grid md:grid-cols-3 2xl:grid-cols-4">
          <BlogPostCard
            uuid="5f73c0e1-8920-4f78-b6ea-712abbc011a2"
            imageUrl="/images/children-walking.png"
            date="August 12, 2024"
            title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
            description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            uuid="5f73c0e1-8920-4f78-b6ea-712abbc011a2"
            imageUrl="/images/children-walking.png"
            date="August 10, 2024"
            title="The Importance of Smartwatches in Keeping Children Safe"
            description="Discover how smartwatches can play a crucial role in ensuring the safety of your children while giving them the freedom to explore."
            titleLength={7}
            descriptionLength={12}
          />
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
