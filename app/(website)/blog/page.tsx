"use client";
import React, { useState, useEffect } from "react";
import { fetchAllBlogs, fetchFeaturedBlogs } from "@/app/(api)/blog";
import BlogCard from "./_components/blog-card";
import Title from "../../_components/title";
import BlogPostCard from "./_components/blog-post-card";
import ScrollCarousel from "../_components/scroll-carousel";
import { formatDateTime } from "../lib/utils";

interface Blog {
  uuid: string;
  image: string;
  createdAt: string;
  title: string;
  description: string;
  isFeatured: boolean;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetchAllBlogs();
        setBlogs(response.data?.body?.blogs ?? []);
        console.log(response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  useEffect(() => {
    const getFeaturedBlogs = async () => {
      try {
        const response = await fetchFeaturedBlogs();
        setFeaturedBlogs(response.data?.body?.blogs ?? []);
      } catch (error) {
        console.error("Error fetching featured blogs: ", error);
      } finally {
        setLoading(false);
      }
    };

    getFeaturedBlogs();
  }, []);

  if (loading)
    return (
      <p className="flex min-h-[70vh] items-center justify-center">
        Loading...
      </p>
    );

  return (
    <main className="flex flex-col space-y-8 bg-white">
      {/* Featured news */}
      {featuredBlogs.length > 0 && (
        <section className="container mx-auto space-y-6">
          <Title className="text-start">Featured news</Title>
          {/* sm to md: Featured news */}
          <section className="md:hidden">
            <ScrollCarousel
              items={[
                <BlogCard
                  key="1"
                  title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
                  description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
                  link="/blog"
                  backgroundImage="/images/children-walking.png"
                  truncateTitleLength={7}
                  truncateDescriptionLength={5}
                />,
                <BlogCard
                  key="2"
                  title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
                  description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
                  link="/blog"
                  backgroundImage="/images/children-walking.png"
                  truncateTitleLength={7}
                  truncateDescriptionLength={5}
                />,
              ]}
            />
          </section>
          {/* md and up: Featured news */}
          <section className="hidden grid-cols-3 items-center justify-center gap-x-6 md:grid">
            <BlogCard
              title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
              description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
              link="/blog"
              backgroundImage="/images/children-walking.png"
              large
            />
            <div className="col-span-1 flex min-h-full flex-col gap-y-6">
              <BlogCard
                title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
                description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
                link="/blog"
                backgroundImage="/images/children-walking.png"
              />
              <BlogCard
                title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
                description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
                link="/blog"
                backgroundImage="/images/children-walking.png"
              />
            </div>
          </section>
        </section>
      )}
      <section className="container mx-auto flex flex-col gap-y-6">
        <Title className="text-start">Latest news</Title>
        <div className="grid gap-8 md:grid-cols-3 2xl:grid-cols-4">
          {blogs
            .filter((blog) => !blog.isFeatured) // Filter blogs where isFeatured is false
            .map((blog, idx) => (
              <BlogPostCard
                key={idx}
                uuid={blog.uuid}
                imageUrl={blog.image}
                date={formatDateTime(blog.createdAt)}
                title={blog.title}
                description={blog.description}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
