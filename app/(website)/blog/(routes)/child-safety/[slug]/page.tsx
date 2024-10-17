"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Title from "@/app/_components/title";
import BlogPostCard from "@/app/(website)/blog/_components/blog-post-card";
import ArticleAuthor from "@/app/(website)/blog/_components/article-author";
import PostCarousel from "@/app/(website)/_components/scroll-carousel";

const ChildSafetyArticle = () => {
  const params = useParams();
  console.log("params", params);

  // Example: Fetch content based on the slug
  const slug = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug || "";
  const content = fetchContentBySlug(slug);

  if (!content) {
    return <p>Content not found</p>;
  }

  return (
    <main className="container mx-auto space-y-12">
      <article className="mx-auto max-w-6xl space-y-6 pt-4">
        {/* Blog article title */}
        <Title className="text-start">
          Enhancing Child Safety with Smartwatches: A Modern Solution for
          Parents
        </Title>

        {/* sm to md devices: Article Author */}
        <div className="block md:hidden">
          <ArticleAuthor
            authorName="Defender Technologies"
            date="August 12, 2024"
            readTime="7 minutes"
            authorImageUrl="/images/author.jpg"
          />
        </div>

        {/* Blog article teaser */}
        <div className="grid grid-cols-5 gap-8">
          <div className="relative col-span-5 min-h-[30vh] rounded-lg md:col-span-3 xl:min-h-[60vh] 2xl:min-h-[40vh]">
            <Image
              src="/images/children.png"
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
                parent&apos;s top concern. Whether your kids are playing
                outside, attending school, or visiting friends, knowing they are
                safe provides invaluable peace of mind.
              </Title>

              {/* md and up devices: Article Author */}
              <div className="hidden md:block">
                <ArticleAuthor
                  authorName="Defender Technologies"
                  date="August 12, 2024"
                  readTime="7 minutes"
                  authorImageUrl="/images/author.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog article content */}
        <div className="space-y-4">
          <p>
            Labore nisi mollit do in culpa velit duis eiusmod incididunt sit
            laboris. Magna commodo incididunt commodo do nulla labore ullamco in
            tempor exercitation occaecat esse et. Labore laboris laborum quis
            dolor commodo laborum ex proident officia ullamco. Fugiat commodo
            sunt officia laborum laborum dolor tempor eu. Irure laborum
            incididunt incididunt officia proident non qui aute consectetur
            anim. Commodo Lorem pariatur nostrud do incididunt esse proident
            proident consectetur eiusmod consectetur eu labore. Adipisicing ad
            excepteur excepteur duis ea veniam esse. Laborum anim veniam aute
            deserunt quis sunt minim reprehenderit do non exercitation mollit
            irure aliqua. Dolor culpa laboris est ea ullamco ullamco sint cillum
            sint aliquip laborum proident elit. Cupidatat amet velit ipsum non
            tempor fugiat anim magna pariatur nostrud commodo aliqua fugiat et.
            Sint deserunt culpa commodo aliqua proident exercitation irure anim.
            Incididunt laboris qui fugiat et quis id ullamco laborum sint est.
            Eiusmod esse esse proident anim sunt dolore ut eu sunt anim velit.
            Minim sint nisi ut consectetur voluptate aute fugiat et aliqua
            laboris. Consectetur laboris consequat laboris in enim fugiat eu
            labore culpa. Tempor ullamco deserunt voluptate ex aliqua
            exercitation elit fugiat nulla dolore. Ullamco occaecat amet cillum
            sunt nostrud ipsum officia ut ut est qui. Amet officia labore
            officia est sint veniam quis do. Id aute ea ad incididunt sunt irure
            excepteur esse incididunt laborum velit nostrud. Id excepteur aliqua
            quis elit incididunt nisi id quis id amet amet velit. Non eu
            excepteur officia nisi consectetur consequat. Pariatur irure sit
            tempor minim sit ut occaecat ea culpa nulla anim labore. Aute culpa
            quis aute cupidatat. Deserunt non pariatur minim laborum elit.
          </p>

          <p>
            Laboris tempor amet amet dolor officia tempor aliquip aliqua irure
            Lorem proident aute duis. Commodo magna nulla tempor labore.
            Excepteur ut eu id amet occaecat aliquip duis eiusmod voluptate
            minim. Culpa voluptate minim laboris quis incididunt ea. Deserunt
            sint veniam officia incididunt eu velit. Ut sit ea irure Lorem
            incididunt reprehenderit voluptate nulla ex id enim cupidatat ad
            eiusmod. Magna dolore ut ex minim dolor sunt ex quis cillum nostrud
            ullamco magna Lorem. Ea ad id qui sunt non elit aute duis sunt esse
            enim incididunt. In sit ullamco deserunt id tempor ipsum
            reprehenderit nisi ex sint anim in. Id pariatur ea eiusmod enim.
            Consectetur id exercitation deserunt aute qui. Dolore sunt eu anim
            sit aliqua ex. Aliquip voluptate labore tempor ad nisi officia elit.
            Ullamco ut Lorem qui eu nulla. Anim do enim sunt in mollit laboris
            ipsum. Occaecat mollit cillum deserunt mollit consequat dolor
            exercitation. Incididunt laboris culpa do cillum deserunt nisi anim
            irure aute. Enim reprehenderit dolor ipsum duis aliquip aliquip
            occaecat ut adipisicing id. Incididunt proident eu ullamco consequat
            nulla fugiat qui. In sunt nostrud aliquip qui aliqua in minim labore
            labore. Commodo commodo sint nisi elit esse Lorem ad id pariatur
            incididunt veniam quis ut. Aliqua ut aliquip velit fugiat cupidatat
            exercitation aliqua irure ex sit nostrud ad occaecat sint. Officia
            irure duis eu pariatur anim eiusmod fugiat sunt quis Lorem anim
            cupidatat. Dolor nisi dolore consequat enim veniam nostrud esse non
            anim reprehenderit eiusmod. Magna elit fugiat cillum adipisicing
            adipisicing veniam tempor aute. Adipisicing ullamco sunt ut
            adipisicing velit officia nostrud in elit excepteur amet anim non
            dolore. Veniam consequat amet deserunt esse non. Dolor minim sint ea
            cillum dolore minim et in ea qui. Adipisicing Lorem nisi veniam
            mollit quis deserunt tempor. Nulla commodo pariatur voluptate duis
            enim. Labore sunt non est irure. Cillum culpa ipsum sit irure sint
            commodo adipisicing dolore eu. Cupidatat eiusmod sint aute sunt
            veniam irure nostrud cillum fugiat deserunt. Esse nisi culpa
            voluptate et culpa laboris dolor non do dolor voluptate pariatur.
            Exercitation magna nisi voluptate irure eiusmod enim pariatur. In do
            nulla fugiat irure elit mollit. Ut eu esse laboris quis veniam ex
            culpa cillum nisi reprehenderit ullamco.s
          </p>
        </div>
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
              />,
              <BlogPostCard
                uuid="5f73c0e1-8920-4f78-b6ea-712abbc011a2"
                key="blogpost-2"
                imageUrl="/images/children-walking.png"
                date="August 10, 2024"
                title="The Importance of Smartwatches in Keeping Children Safe"
                description="Discover how smartwatches can play a crucial role in ensuring the safety of your children while giving them the freedom to explore."
              />,
              <BlogPostCard
                uuid="5f73c0e1-8920-4f78-b6ea-712abbc011a2"
                key="blogpost-3"
                imageUrl="/images/children-walking.png"
                date="August 8, 2024"
                title="How Technology is Changing Parenting in the Modern World"
                description="Explore the impact of modern technology, including smartwatches, on parenting and child safety."
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
          />
          <BlogPostCard
            uuid="5f73c0e1-8920-4f78-b6ea-712abbc011a2"
            imageUrl="/images/children-walking.png"
            date="August 10, 2024"
            title="The Importance of Smartwatches in Keeping Children Safe"
            description="Discover how smartwatches can play a crucial role in ensuring the safety of your children while giving them the freedom to explore."
          />
          <BlogPostCard
            uuid="5f73c0e1-8920-4f78-b6ea-712abbc011a2"
            imageUrl="/images/children-walking.png"
            date="August 8, 2024"
            title="How Technology is Changing Parenting in the Modern World"
            description="Explore the impact of modern technology, including smartwatches, on parenting and child safety."
          />
        </div>
      </section>
    </main>
  );
};

export default ChildSafetyArticle;

// Dummy function to represent fetching data by slug
function fetchContentBySlug(slug: string) {
  console.log("params received ", slug);
  const contentMap = {
    "protecting-kids-online": {
      title: "Protecting Kids Online",
      date: "September 1, 2024",
      body: "This is the content of the article...",
    },
  };

  if (Array.isArray(slug)) {
    slug = slug.join("/");
  }

  return contentMap[slug as keyof typeof contentMap] || null;
}
