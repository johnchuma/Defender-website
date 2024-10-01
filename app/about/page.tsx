import React from "react";
import Image from "next/image";
import Title from "../_components/title";
import BackgroundBanner from "../_components/background-banner";
import ContentSection from "./_components/content-section";
import {
  historyContent,
  missionContent,
  visionContent,
} from "../utils/constants";
import WhySection from "./_components/why-content-card";

// images
import ConnectedImage from "@/public/images/connect.png";
import PeaceImage from "@/public/images/peace.png";
import SafetyImage from "@/public/images/safety.png";

function AboutPage() {
  return (
    <main className="space-y-6">
      <div className="container mx-auto px-4 md:px-0">
        {/* ======================== GET TO KNOW US SECTION ======================== */}
        <div className="mb-20 space-y-6">
          <header className="space-y-2">
            <Title className="capitalize">Get to know us</Title>
            <div className="text-center">
              At Defender, we are dedicated to helping parents create a safer,
              smarter world for their children. Our flagship product, the
              Defender Kids Smartwatch, is designed to offer peace of mind
              through cutting-edge security features that ensure real-time
              communication, tracking, and emergency assistance for children
            </div>
          </header>

          <BackgroundBanner
            backgroundImage="/images/care.jpg"
            title={
              <div className="max-w-3xl">
                Meet Defender Technologies: The 1st Company to manufacture
                Kid&apos;s watches in <br />
                <span className="text-[#42E2B8]">Africa</span> market
              </div>
            }
            className="mb-10 min-h-[65dvh]"
          />

          <section className="mx-auto max-w-6xl space-y-6 pb-20 pt-10">
            <ContentSection title="history" paragraphs={historyContent} />
            <ContentSection title="mission" paragraphs={missionContent} />
            <ContentSection title="vision" paragraphs={visionContent} />
          </section>

          {/* ======================== MESSAGE FROM CEO SECTION ======================== */}
          <section className="space-y-6 pb-20">
            <Title className="capitalize">Message from CEO</Title>

            {/* CEO card */}
            <div className="grid gap-x-12 rounded-xl p-8 shadow-xl md:grid-cols-5">
              <div
                className="col-span-2 hidden rounded-2xl bg-cover bg-bottom bg-no-repeat md:block"
                style={{
                  backgroundImage: `url("/images/ceo.png")`,
                }}
              />

              <div className="space-y-6 md:col-span-3">
                <p>Welcome to Defender Technologies!</p>
                <p>
                  As the CEO, I am proud to lead a team that is deeply committed
                  to making a difference in the lives of families. Our journey
                  began with a powerful realization: the increasing challenges
                  parents face in ensuring their children&apos;s safety.
                  Inspired by the alarming incidents we witnessed, we set out to
                  create a solution that would empower parents and provide peace
                  of mind. Our flagship product, the Defender Kids Smartwatch,
                  embodies this mission.
                </p>
                <p>
                  It is more than just a device; it is a tool designed to foster
                  communication, connection, and security. We believe that every
                  child deserves the freedom to explore the world while knowing
                  that their parents can reach them anytime.At Defender
                  Technologies, we value feedback from our users, as it drives
                  our innovation and helps us improve. Our commitment to quality
                  and safety is unwavering. Thank you for trusting us to be a
                  part of your family&apos;s journey. Together, we can create a
                  safer world for our children.
                </p>
              </div>
            </div>
          </section>

          {/* ======================== MESSAGE FROM CEO SECTION ======================== */}
          <section className="space-y-12 pb-20">
            <Title className="capitalize">Why we do what we do</Title>
            <WhySection
              index={0}
              title="Stay Connected Anytime"
              description="Parents can easily keep in touch with their children through call and message features, ensuring peace of mind, especially when kids are outside or at school."
              imageSrc={ConnectedImage}
            />
            <WhySection
              index={1}
              title="Enhanced Safety with GPS Tracking"
              description="Built-in GPS allows parents to track their child's location in real-time, providing an added layer of security and reducing worry about their whereabouts."
              imageSrc={SafetyImage}
            />
            <WhySection
              index={2}
              title="Peace of Mind: Advanced Anti-Theft Features for Your Child's Safety"
              description="The Defender Kids Smartwatch features a cutting-edge anti-theft sensor embedded in the back panel, providing an unparalleled layer of security. When the smartwatch is removed from your child's wrist, an instant alarm and notification are sent directly to you, ensuring you’re always aware of your child's safety. With these innovative features, you can enjoy peace of mind knowing that your little one is well protected wherever they go."
              imageSrc={PeaceImage}
            />
          </section>

          <section className="space-y-12 pb-10">
            <div className="space-y-4">
              <Title className="capitalize">Priority SDGs</Title>
              <div className="text-center">
                Defender Technology operates in the CONSUMER ELECTRONICS SECTOR,
                specifically within wearable technology for children, our
                commitment to innovation and child safety goes hand in hand with
                our dedication to contributing to a safer and more sustainable
                world. Our mission aligns with several of the United Nations'
                Sustainable Development Goals (SDGs), particularly in fostering
                industry innovation and protecting children.
              </div>
            </div>

            {/* SDG 09 */}
            <div className="grid gap-x-12 rounded-xl p-8 shadow-lg md:grid-cols-5">
              <div className="col-span-2">
                <div className="flex flex-col place-content-center place-items-center gap-y-4">
                  <Image
                    src={"/images/sdg-09.png"}
                    alt="SDG 09"
                    width={150}
                    height={150}
                  />

                  <div className="text-center text-2xl font-semibold">
                    <p>SDG 09</p>
                    <p>
                      Industry, Innovation, and
                      <br /> Infrastructure
                    </p>
                  </div>
                </div>
              </div>

              <div className="place-content-center space-y-6 md:col-span-3">
                <p>
                  Defender Technologies is proud to be a pioneer in Tanzania and
                  several other East African countries by introducing the first
                  kids' smartwatches in the region. This achievement aligns with
                  Target 9.5: Enhance scientific research, upgrade the
                  technological capabilities of industrial sectors in all
                  countries, particularly developing countries.
                </p>
                <p>
                  Our smartwatches, equipped with advanced safety features such
                  as GPS tracking and SOS emergency buttons, are a testament to
                  our commitment to pushing the boundaries of technological
                  innovation. By leading the way in developing products that
                  meet the unique needs of families in our region, we contribute
                  to building resilient infrastructure and promoting sustainable
                  industrialization in East Africa.
                </p>
              </div>
            </div>

            {/* SDG 16 */}
            <div className="grid gap-x-12 rounded-xl p-8 shadow-lg md:grid-cols-5">
              <div className="col-span-2">
                <div className="flex flex-col place-content-center place-items-center gap-y-4">
                  <Image
                    src={"/images/sdg-16.png"}
                    alt="SDG 16"
                    width={150}
                    height={150}
                  />

                  <div className="text-center text-2xl font-semibold">
                    <p>SDG 16</p>
                    <p>
                      Peace, Justice and Strong
                      <br /> Infrastructure
                    </p>
                  </div>
                </div>
              </div>

              <div className="place-content-center space-y-6 md:col-span-3">
                <p>
                  Our smartwatches are designed with the primary goal of keeping
                  children safe, directly supporting Target 16.2: End abuse,
                  exploitation, trafficking, and all forms of violence against
                  and torture of children.
                </p>
                <p>
                  By providing a reliable tool for children to alert their
                  parents or guardians in case of danger, Defender Technologies
                  plays a crucial role in preventing potential abuse or
                  exploitation. This innovation not only empowers children but
                  also strengthens the protective measures available to
                  families, helping to create a safer and more secure
                  environment for the next generation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
