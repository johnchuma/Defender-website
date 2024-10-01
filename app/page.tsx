"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// component
import FeatureCard from "./_components/feature-cards";
import ProductCard from "./_components/product-card";
import Title from "./_components/title";
import SocialLinks from "./_components/social-link";

// images and illustrations
import CompassImage from "@/public/images/compass.png";
import RocketImage from "@/public/images/rocket.png";
import SelcomLogo from "@/public/images/clients/selcom.png";
import VodacomLogo from "@/public/images/clients/vodacom.png";
import FlutterwaveLogo from "@/public/images/clients/flutterwave.png";
import ShuleYetuLogo from "@/public/images/clients/shule-yetu.png";
import SmartWatch from "@/public/images/watch.png";
import DotOrnament from "@/public/images/ornaments/dot-ornaments.png";
import CircleOrnament from "@/public/images/ornaments/circle-ornament.png";
import CircleOrnamentGreen from "@/public/images/ornaments/circle-ornament-green.png";
import ArrowRight from "@/public/images/ornaments/arrow-right.png";
import StarOrnament from "@/public/images/ornaments/star-ornament.png";
import StarOrnamentBlue from "@/public/images/ornaments/star-ornament-blue.png";
import WaveOrnament from "@/public/images/ornaments/wave-ornament.png";
import WaveOrnamentRed from "@/public/images/ornaments/wave-ornament-red.png";
import TriangleOrnament from "@/public/images/ornaments/triangle-ornament.png";
import TriangleOrnamentRed from "@/public/images/ornaments/triangle-ornament-red.png";
import ChildrenPlaying from "@/public/images/children.png";

// icons
import GpsIcon from "@/public/images/icons/gps-icon.png";
import SecurityIcon from "@/public/images/icons/shield-security.png";
import CallIcon from "@/public/images/icons/call-calling.png";
import AlarmIcon from "@/public/images/icons/alarm.png";
import CustomButton from "./(components)/customButton";
import Carousel from "./_components/carousel";

export default function Home() {
  const router = useRouter();
  const images = [
    "/images/watch.png",
    "/images/watch.png",
    "/images/watch.png",
  ];
  return (
    <main className="-mt-32">
      {/* ======================== HERO SECTION ======================== */}
      <section className="bg-blushPinkColor pb-10 pt-28 2xl:pb-0 2xl:pt-0">
        <div className="container mx-auto flex min-h-[100dvh] flex-col items-center justify-center gap-y-6 px-4 text-center md:px-0">
          {/* Background Images */}
          <Image
            src={CompassImage}
            className="absolute right-8 top-[20%] w-12 translate-x-1/4 md:bottom-3/4 md:right-32 md:w-20 xl:top-1/2"
            alt="Compass Image"
          />
          <Image
            src={RocketImage}
            className="absolute left-0 top-1/2 w-16 translate-x-1/4 md:left-16 md:w-24 xl:left-32 xl:top-3/4"
            alt="Rocket Image"
          />

          {/* Hero Content */}
          <div className="z-20 flex flex-col gap-y-6">
            <div className="text-2xl font-semibold leading-tight text-[#292929] sm:text-3xl md:text-6xl">
              Trusted Smartwatches for <br />
              Your{" "}
              <span className="highlight highlight-blue-300 highlight-variant-4">
                Child&apos;s
              </span>{" "}
              Safety
            </div>
            <div className="text-lg text-[#525252]">
              Keep your child safe and connected. Discover our range of
              smartwatches today <br />
              and experience peace of mind like never before.
            </div>

            <CustomButton
              btntext="Explore Now!"
              onClick={() => router.push("/shop")}
              className="px-12 text-base font-medium md:px-20"
            />

            <div className="mt-6 flex items-center justify-center 2xl:mt-8">
              <Carousel images={images} />
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CLIENT SECTION ======================== */}
      <div className="bg-slate-100 py-6">
        <section className="container mx-auto grid grid-cols-2 place-content-center place-items-center gap-8 md:grid-cols-4">
          <Image
            src={FlutterwaveLogo}
            alt="Flutterwave Image"
            className="w-32"
          />
          <Image src={SelcomLogo} alt="Selcom Image" className="w-16" />
          <Image src={VodacomLogo} alt="Vodacom Image" className="w-24" />
          <Image src={ShuleYetuLogo} alt="Shule Yetu Image" className="w-24" />
        </section>
      </div>

      {/* ======================== POPULAR PRODUCTS SECTION ======================== */}
      <section className="bg-white pb-10 pt-20">
        <div className="container mx-auto flex flex-col gap-y-12 px-12 md:px-0">
          <Title>Our Popular Products</Title>
          <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
            <ProductCard
              image={SmartWatch}
              altText="Smart Watch"
              productName="Android Elite Version"
              price="Tsh 135,000"
            />
            <ProductCard
              image={SmartWatch}
              altText="Smart Watch"
              productName="RTO's Modern Version"
              price="Tsh 99,000"
            />
          </div>
        </div>
      </section>

      {/* ======================== TOP VALUES FOR YOU SECTION ======================== */}
      <section className="bg-white pb-10 pt-20">
        <div className="container mx-auto flex flex-col items-center justify-center gap-y-12 px-4 md:px-0">
          <Title>Top values for you</Title>
          {/* xs to md: Top values for you */}
          <div className="grid justify-around gap-x-8 gap-y-10 lg:hidden">
            {/* Item one */}
            <FeatureCard
              type="type1"
              bgColor="bg-[#31DBAE]"
              icon={GpsIcon}
              title="Real-Time GPS Tracking"
              description="Instantly know your child's location with accurate GPS tracking, ensuring their safety at all times."
              bgOrnament={DotOrnament}
              primaryOrnament={CircleOrnament}
              secondaryOrnament={CircleOrnamentGreen}
              iconInverted // Invert the icon color
              arrowIcon={ArrowRight}
            />

            {/* Item two */}
            <FeatureCard
              type="type2"
              bgColor="bg-[#004CF5]"
              icon={SecurityIcon}
              title="Security zone"
              description="Parents can set safe areas for their children and receive instant alerts if they exit these designated boundaries for enhanced security."
              bgOrnament={DotOrnament}
              primaryOrnament={StarOrnament}
              secondaryOrnament={StarOrnamentBlue}
              primaryOrnamentPaddingLeft="pl-12" // Custom padding-left for this card
              arrowIcon={ArrowRight}
            />

            {/* Item three */}
            <FeatureCard
              type="type1"
              bgColor="bg-[#E620BA]"
              icon={CallIcon}
              title="Two-way communication"
              description="Stay connected with your child through secure two-way voice communication."
              bgOrnament={DotOrnament}
              primaryOrnament={WaveOrnament}
              secondaryOrnament={WaveOrnamentRed}
              arrowIcon={ArrowRight}
            />

            {/* Item four */}
            <FeatureCard
              type="type2"
              bgColor="bg-primaryColor"
              icon={AlarmIcon}
              title="SOS Emergency Button"
              description="In case of an emergency, your child can press the SOS button to alert you instantly, sending their location and calling for help."
              bgOrnament={DotOrnament}
              primaryOrnament={TriangleOrnament}
              secondaryOrnament={TriangleOrnamentRed}
              arrowIcon={ArrowRight}
            />
          </div>

          {/* lg and up: Top values for you */}
          <div className="hidden justify-around gap-x-8 gap-y-10 lg:grid lg:grid-cols-2">
            {/* Item one */}
            <FeatureCard
              type="type1"
              bgColor="bg-[#31DBAE]"
              icon={GpsIcon}
              title="Real-Time GPS Tracking"
              description="Instantly know your child's location with accurate GPS tracking, ensuring their safety at all times."
              bgOrnament={DotOrnament}
              primaryOrnament={CircleOrnament}
              secondaryOrnament={CircleOrnamentGreen}
              iconInverted // Invert the icon color
              arrowIcon={ArrowRight}
            />

            {/* Item two */}
            <FeatureCard
              type="type1"
              bgColor="bg-[#004CF5]"
              icon={SecurityIcon}
              title="Security zone"
              description="Parents can set safe areas for their children and receive instant alerts if they exit these designated boundaries for enhanced security."
              bgOrnament={DotOrnament}
              primaryOrnament={StarOrnament}
              secondaryOrnament={StarOrnamentBlue}
              primaryOrnamentPaddingLeft="pl-12" // Custom padding-left for this card
              arrowIcon={ArrowRight}
            />

            {/* Item three */}
            <FeatureCard
              type="type2"
              bgColor="bg-[#E620BA]"
              icon={CallIcon}
              title="Two-way communication"
              description="Stay connected with your child through secure two-way voice communication."
              bgOrnament={DotOrnament}
              primaryOrnament={WaveOrnament}
              secondaryOrnament={WaveOrnamentRed}
              arrowIcon={ArrowRight}
            />

            {/* Item four */}
            <FeatureCard
              type="type2"
              bgColor="bg-primaryColor"
              icon={AlarmIcon}
              title="SOS Emergency Button"
              description="In case of an emergency, your child can press the SOS button to alert you instantly, sending their location and calling for help."
              bgOrnament={DotOrnament}
              primaryOrnament={TriangleOrnament}
              secondaryOrnament={TriangleOrnamentRed}
              arrowIcon={ArrowRight}
            />
          </div>
        </div>
      </section>

      {/* ======================== VIDEO SECTION ======================== */}
      <section className="min-h-fit bg-white pb-10 pt-20">
        <div className="container mx-auto flex flex-col items-center justify-center gap-y-12 bg-white px-4 md:px-0 lg:flex-row lg:gap-x-20 lg:gap-y-0">
          <div className="text-center text-3xl font-semibold md:text-start">
            The future of your kid lies
            <br /> within{" "}
            <span className="highlight highlight-rose-400 highlight-variant-5">
              Defender
            </span>{" "}
            Watches
          </div>
          <div className="">
            <iframe
              className="aspect-video min-h-[35dvh] w-full rounded-2xl lg:min-h-[60dvh]"
              src="https://www.youtube.com/embed/cNS-mJcR6yc?si=0lCTDSm3xjqEP3LZ&controls=0&modestbranding=1&rel=0&showinfo=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ======================== WHY SECTION ======================== */}
      <section className="bg-white pb-10 pt-20">
        <div className="container mx-auto grid grid-cols-1 items-center justify-center gap-x-16 gap-y-12 px-4 md:grid-cols-2 md:px-0">
          <div className="order-last md:order-first">
            <Image src={ChildrenPlaying} alt="Children Playing Image" />
          </div>
          <div className="flex flex-col gap-y-2 md:col-span-1">
            <Title className="text-start">Why we do, what we do</Title>
            <div>
              We are building for the people who knew missing family would be
              hard but missing opportunity would be harder. The next one billion
              in Africa deserve a 21st century platform.
            </div>
            <div className="group inline-flex items-center gap-x-2 pt-6 font-semibold text-primaryCrimsonColor">
              <div className="group-hover:cursor-pointer group-hover:underline group-hover:underline-offset-8">
                Read more about our story
              </div>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 group-hover:cursor-pointer"
              >
                <path
                  d="M12.5859 4.94165L17.6443 9.99998L12.5859 15.0583"
                  stroke="#CC0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.47754 10H17.5025"
                  stroke="#CC0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CONTACT US SECTION ======================== */}
      <section className="bg-white px-4 pb-20 pt-10 md:px-0">
        <div className="container relative mx-auto flex flex-col items-center justify-center gap-y-8 rounded-xl bg-primaryScarletColor px-0 py-20 text-white md:px-12">
          <Title>Looking forward</Title>

          {/* Description */}
          <div className="w-3/4 text-center md:w-1/2">
            We are committed to innovating and enhancing our products, focusing
            on safety and connectivity. Our goal is to empower children to
            explore freely while providing parents with peace of mind.
          </div>

          {/* Overlay decor */}
          <div className="absolute inset-0">
            {/* quote */}
            <div className="absolute left-6 top-6 opacity-50 md:left-12 md:top-12 md:opacity-100">
              <svg
                width="70"
                height="70"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_284_4304)">
                  <path
                    d="M73.1218 81.1944C57.6316 85.8237 40.7758 78.2519 34.1687 63.0551C27.0341 46.6454 34.5495 27.5577 50.9611 20.4234C67.3745 13.2897 86.4594 20.8084 93.5959 37.2185C100.84 53.8814 91.4957 76.661 88.2667 93.4862L80.0241 97.0693L73.1236 81.1949L73.1218 81.1944Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M56.5151 81.754C41.0268 86.3838 24.1705 78.8138 17.5616 63.6165C10.4288 47.2072 17.9461 28.12 34.3558 20.9853C37.7302 19.5134 41.3311 18.6284 45.0033 18.3683L61.3122 17.8332C57.7453 18.1196 54.2505 18.9956 50.9703 20.4256C34.5587 27.5598 27.0414 46.6471 34.1761 63.0568C38.4233 72.8263 46.9069 79.4457 56.5391 81.6962L56.5151 81.754Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M73.1237 81.1948L80.026 97.0697L63.4138 97.628L56.53 81.694C62.0105 82.98 67.7322 82.808 73.1255 81.1953L73.1237 81.1948Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_284_4304">
                    <rect
                      width="90"
                      height="90"
                      fill="white"
                      transform="translate(22.4653 0.597412) rotate(13.9441)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* phone */}
            <div className="absolute bottom-6 right-6 opacity-50 md:bottom-12 md:right-12 md:opacity-100">
              <svg
                width="90"
                height="90"
                viewBox="0 0 122 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_284_4288)">
                  <path
                    d="M61.4906 24.3969L55.7658 35.2474L86.7684 51.6046L58.1426 105.86L17.8384 84.5956L52.189 19.4893L61.4906 24.3969Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M73.4257 20.6451L67.7009 31.4957L55.7661 35.2474L61.4918 24.3952L73.4257 20.6451Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M61.4908 24.3968L52.1892 19.4892L64.1223 15.7366L73.4256 20.645L61.4908 24.3968Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M49.3193 42.2104L74.1944 55.3347L64.7196 73.2929L39.8445 60.1686L49.3193 42.2104Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.3179 67.5303L40.2929 70.1551"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31.8184 74.1636L36.7934 76.7884"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.3184 80.7969L33.2934 83.4217"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.7671 73.0432L50.7421 75.6681"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.2671 79.6768L47.2421 82.3016"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38.7676 86.3101L43.7426 88.9349"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M55.7173 78.293L60.6923 80.9178"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52.2173 84.9265L57.1923 87.5514"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M48.7178 91.5598L53.6928 94.1847"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M67.6992 31.4989L98.7018 47.8561L86.7686 51.6088L55.7644 35.2507L67.6992 31.4989Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M98.6981 47.8544L70.0723 102.11L58.1409 105.86L86.7658 51.6054L98.699 47.8528L98.6981 47.8544Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_284_4288">
                    <rect
                      width="90"
                      height="90"
                      fill="white"
                      transform="translate(42.332) rotate(27.8165)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Social Icons */}
          <div className="z-40">
            <SocialLinks />
          </div>
        </div>
      </section>
    </main>
  );
}
