"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import {
  productDetails,
  faqsItems,
  productVariations,
} from "../utils/constants";
import Faqs from "../(components)/faqs";
import ProductDetails from "../(components)/productDetails";
import CustomButton from "../(components)/customButton";
import ContactUs from "../(components)/contactForm";
import Category from "../(components)/midNavBar";
import CustomOutlineButton from "../(components)/customOutlineButton";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Ecommerce() {
  const [selectedProduct, setSelectedProduct] = useState(productVariations[0]);
  const [productCount, setProductCount] = useState(1);
  const featuresRef = useRef(null);
  const faqsRef = useRef(null);

  return (
    <div className="w-9/12 mx-auto space-y-20 my-20">
      <div>
        <div className="grid grid-cols-12 items-start gap-20 pr-5">
          <div className="col-span-6 space-y-5">
            <div>
              <Image
                src={selectedProduct.image}
                height={2000}
                width={2000}
                className="rounded-lg bg-backgroundColor w-full h-96 object-contain py-10"
                alt="Watch"
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-6">
              {productVariations.map((product, index) => (
                <div
                  className="col-span-3"
                  key={index}
                  onClick={() => setSelectedProduct(product)}
                >
                  {" "}
                  <Image
                    src={product.image}
                    height={2000}
                    width={2000}
                    className={`rounded-lg bg-backgroundColor w-full h-28 object-contain py-5 ${
                      selectedProduct.id === product.id
                        ? "border-2 border-primaryColor"
                        : "border-none"
                    }`}
                    alt="Watch"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-6 space-y-5">
            <div>
              <h4 className="mt-4 font-semibold text-black text-lg">
                {selectedProduct.name}
              </h4>
              <p className="text-mutedText">{selectedProduct.description}</p>
            </div>

            <p className="mt-2 text-black text-xl font-bold">
              Tzs {selectedProduct.price}
            </p>
            <div className="w-3/4">
              <p className="my-2 text-black">Colors</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {productVariations.map((product, index) => (
                    <div
                      key={index}
                      className={"pb-1"}
                      style={{
                        borderBottom:
                          selectedProduct.id === product.id
                            ? `2px solid ${selectedProduct.color}`
                            : "none",
                      }}
                    >
                      <div
                        className={`p-3 rounded-full cursor-pointer`}
                        onClick={() => setSelectedProduct(product)}
                        style={{ backgroundColor: product.color }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-5">
                  <div
                    className={`inline-flex items-center justify-center p-2 border-2 border-[#E0E0E0] rounded-lg ${
                      productCount === 1
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (productCount > 1) {
                        setProductCount(productCount - 1);
                      }
                    }}
                  >
                    <FaMinus />
                  </div>
                  <p className="mt-2 text-black">{productCount}</p>
                  <div
                    className="inline-flex items-center justify-center p-2 bg-[#E0E0E0] rounded-lg cursor-pointer"
                    onClick={() => setProductCount(productCount + 1)}
                  >
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <CustomButton btntext="Buy Now" paddingX="px-14" />
                <CustomOutlineButton
                  btntext="Add to Wishlist"
                  paddingX="px-10"
                />
              </div>
            </div>
            <div className="mt-4">
              {productDetails.map((item, index) => {
                return (
                  <div key={index}>
                    <ProductDetails item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-10">
        <Category featuresRef={featuresRef} faqsRef={faqsRef} />
        <div ref={featuresRef} className="space-y-16">
          <div className="grid grid-cols-12 items-center gap-10">
            <div className="col-span-6">
              <div className="text-start space-y-3">
                <h4 className="font-semibold text-black text-xl">
                  Two-Way Communication
                </h4>
                <p className="text-mutedText">
                  Stay connected with your child through secure two-way voice
                  communication. Our smartwatches allow parents and kids to
                  easily communicate without the need for a smartphone. With a
                  simple touch, parents can call their children or receive
                  calls, fostering a sense of security and connection throughout
                  the day.
                </p>
              </div>
            </div>
            <div className="col-span-6">
              <Image
                src="/watch5.svg"
                height={2000}
                width={2000}
                className="rounded-lg bg-transparent w-full h-60 object-contain"
                alt="Watch"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 items-center gap-10">
            <div className="col-span-6">
              <Image
                src="/watch5.svg"
                height={2000}
                width={2000}
                className="rounded-lg bg-transparent w-full h-60 object-contain"
                alt="Watch"
              />
            </div>
            <div className="col-span-6">
              <div className="text-start space-y-3">
                <h4 className="font-semibold text-black text-xl">
                  Real-Time GPS Tracking
                </h4>
                <p className="text-mutedText">
                  Our devices come equipped with advanced GPS technology that
                  allows parents to monitor their child`s location in real-time.
                  This feature provides peace of mind, enabling parents to track
                  their children`s movements and ensure their safety, whether
                  they`re at school, playing outside, or on an adventure
                </p>
              </div>{" "}
            </div>
          </div>
          <div className="grid grid-cols-12 items-center gap-10">
            <div className="col-span-6">
              <div className="text-start space-y-3">
                <h4 className="font-semibold text-black text-xl">
                  Emergency SOS Alerts
                </h4>
                <p className="text-mutedText">
                  Safety is our top priority. Our devices feature an emergency
                  SOS button that children can use to alert their parents in
                  case of an emergency. When activated, the watch sends
                  immediate notifications to designated contacts, ensuring a
                  quick response during critical situations.
                </p>
              </div>
            </div>
            <div className="col-span-6">
              <Image
                src="/watch5.svg"
                height={2000}
                width={2000}
                className="rounded-lg bg-transparent w-full h-60 object-contain"
                alt="Watch"
              />{" "}
            </div>
          </div>
          <div className="grid grid-cols-12 items-center gap-10">
            <div className="col-span-6">
              <Image
                src="/watch5.svg"
                height={2000}
                width={2000}
                className="rounded-lg bg-transparent w-full h-60 object-contain"
                alt="Watch"
              />
            </div>
            <div className="col-span-6">
              <div className="text-start space-y-3">
                <h4 className="font-semibold text-black text-xl">
                  Geofencing Alerts
                </h4>
                <p className="text-mutedText">
                  Our smartwatches come with customizable geofencing
                  capabilities that allow parents to set safe zones for their
                  children. If a child exits these designated areas, the parent
                  receives instant alerts, helping to keep them safe and secure
                  while encouraging independence.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div ref={faqsRef} className="space-y-8">
        {" "}
        <div className="text-center space-y-3">
          <h4 className="font-bold text-black text-xl">
            Frequently Asked Questions
          </h4>
          <p className="text-black">
            Please read our FAQs page to find out more.
          </p>
        </div>
        <div className="grid grid-cols-12 items-start gap-10">
          <div className="col-span-6">
            {faqsItems.map((item) => {
              return (
                <div key={item.title}>
                  <Faqs item={item} />
                </div>
              );
            })}
          </div>
          <div className="col-span-6">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}
