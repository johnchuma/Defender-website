"use client";
import React from "react";
import Title from "../../_components/title";
import SupportCard from "./_components/support-card";
import Faqs from "../(components)/faqs";
import { faqsItems } from "../../utils/constants";
import ContactInfo from "../_components/contact-info";
import BackgroundBanner from "../_components/background-banner";

function SupportPage() {
  return (
    <main className="pt-6 2xl:pt-12">
      {/* <Title>Support Page</Title> */}
      <div className="container mx-auto px-4 md:px-0 xl:px-[104px]">
        <Title className="pb-6">Support Page</Title>
        {/* ======================== image hero SECTION ======================== */}
        <BackgroundBanner
          backgroundImage="/images/care.jpg"
          className="min-h-[70dvh]"
          title={
            <Title className="capitalize">
              Customer care, Anytime, Anywhere
            </Title>
          }
        />

        {/* ======================== Customer Service SECTION ======================== */}
        <section className="mb-20 space-y-6">
          <Title>Customer Service</Title>
          <div className="text-center">
            At Defender Technologies, we understand how important it is for
            parents to stay connected with their children. That&apos;s why
            we&apos;re committed to providing fast and reliable support to help
            you get the most out of your Defender Kids Smartwatch.
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SupportCard
              title="How to Use Defender Watch"
              description="Get to know how to best make use of products and services through digital booklet."
              buttonText="Download User Manual"
              imageUrl="/images/customer-support.png"
            />
            <SupportCard
              title="Warranty"
              description="Warranty coverage for Defender Technologies' Kids Smartwatch Products."
              buttonText="Download Warranty Guide"
              imageUrl="/images/customer-support.png"
            />
            <SupportCard
              title="Track Your Order"
              description="Track your Defender Kids Smartwatch Order in Real-Time, Anytime, Here, with us."
              buttonText="Status of your Purchase"
              imageUrl="/images/customer-support.png"
            />
          </div>
        </section>

        {/* ======================== FAQs SECTION ======================== */}
        <section className="mb-20 space-y-6">
          <Title>Frequently Asked Questions</Title>
          <div className="text-center">
            Have any question? We are here to help
          </div>
          <div className="mx-auto px-4 md:max-w-4xl md:px-0">
            {faqsItems.map((item) => (
              <Faqs key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* ========================  Still have Questions SECTION ======================== */}
        <section className="mb-20 space-y-6">
          <Title>Still Have Questions?</Title>
          <div className="text-center">
            Can&apos;t find answers you&apos;re looking for? Please chat to our
            friendly team.
          </div>
          <div className="grid gap-x-12 bg-cover bg-center bg-no-repeat md:grid-cols-5">
            <div
              className="col-span-2 hidden rounded-xl bg-cover bg-center bg-no-repeat md:block"
              style={{
                backgroundImage: `url("/images/customer-support-2.png")`,
              }}
            />

            <div className="md:col-span-3">
              <ContactInfo />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SupportPage;
