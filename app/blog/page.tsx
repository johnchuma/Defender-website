import React from "react";
import BlogCard from "./_components/blog-card";
import Title from "../_components/title";
import BlogPostCard from "./_components/blog-post-card";

const Blog = () => {
  return (
    <main className="flex flex-col bg-white">
      <div className="container mx-auto">
        <Title className="text-start">Featured news</Title>
        <section className="grid grid-cols-3 items-center justify-center gap-x-6 pt-6">
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
              truncateTitleLength={7}
              truncateDescriptionLength={10}
            />
            <BlogCard
              title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
              description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
              link="/blog"
              backgroundImage="/images/children-walking.png"
              truncateTitleLength={7}
              truncateDescriptionLength={10}
            />
          </div>
        </section>
      </div>
      <section className="container mx-auto flex flex-col gap-y-6">
        <Title className="text-start">Latest news</Title>
        <div className="grid grid-cols-3 gap-8">
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="August 12, 2024"
            title="Enhancing Child Safety with Smartwatches: A Modern Solution for Parents"
            description="These smart devices are no longer just trendy accessories but essential tools that help parents monitor and ensure their children's safety."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="August 10, 2024"
            title="The Importance of Smartwatches in Keeping Children Safe"
            description="Discover how smartwatches can play a crucial role in ensuring the safety of your children while giving them the freedom to explore."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="August 8, 2024"
            title="How Technology is Changing Parenting in the Modern World"
            description="Explore the impact of modern technology, including smartwatches, on parenting and child safety."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="August 6, 2024"
            title="Top 5 Smartwatches for Children in 2024"
            description="A comprehensive review of the top 5 smartwatches designed specifically for children's safety and connectivity."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="August 4, 2024"
            title="Why Every Parent Needs a Smartwatch for Their Child"
            description="Understand the critical reasons why smartwatches are becoming a necessity for modern-day parenting."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="August 2, 2024"
            title="Child Safety: How Smartwatches are Helping Parents Keep Track"
            description="Smartwatches are more than just gadgets; they are becoming essential tools for keeping children safe."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="July 30, 2024"
            title="The Evolution of Child Safety with Wearable Technology"
            description="Discover how wearable technology has evolved to enhance child safety over the years."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="July 28, 2024"
            title="Choosing the Right Smartwatch for Your Child: A Parent's Guide"
            description="Learn what features to look for when selecting the best smartwatch for your child."
            titleLength={7}
            descriptionLength={12}
          />
          <BlogPostCard
            imageUrl="/images/children-walking.png"
            date="July 26, 2024"
            title="Smartwatches: The Future of Child Safety"
            description="A deep dive into how smartwatches are paving the way for the future of child safety and parental peace of mind."
            titleLength={7}
            descriptionLength={12}
          />
        </div>
      </section>
    </main>
  );
};

export default Blog;
