"use client";
import { useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik } from "formik";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import CustomButton from "../(components)/customButton";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function WishListPage() {
  const [productCount, setProductCount] = useState(1);

  const validationSchema = Yup.object({
    email: Yup.string().email().required("put valid email"),
  });
  return (
    <div className="md:w-9/12 mx-auto space-y-10 my-20">
      <nav className="flex py-2 px-4 rounded-md">
        <Link href={"/product"}>
          <div className="flex items-center">
            <span className="mx-2 text-mutedText">
              <IoIosArrowBack />
            </span>
            <span className="text-mutedText">Continue Shopping</span>
          </div>
        </Link>
      </nav>
      <div className="text-center leading-[4rem]">
        <h2 className="font-bold text-3xl">Your Wishlist</h2>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 m-3">
          <div className="border-b-2 border-secondaryColor">
            <p className="uppercase text-xl py-3">Your Selection</p>
          </div>
          <div className="flex space-x-8 items-center py-5">
            <div className="w-1/3">
              <Image
                src={"/blackwatch.svg"}
                height={2000}
                width={2000}
                className="rounded-lg bg-backgroundColor w-full h-48 object-contain py-10"
                alt="Watch"
              />
            </div>
            <div>
              <h4 className="mt-4 font-semibold text-black text-lg">
                Android Elite Watch
              </h4>
              <p className="text-mutedText ">Black</p>
              <p className="text-mutedText py-4">{`AT&T's Network`}</p>

              <p className="mt-2 text-black text-xl">Tsh 135,000</p>
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
            <div className="">
              <p className="mt-2 text-black text-lg font-semibold">
                Tzs 135,000
              </p>
              <p className="uppercase my-2 text-mutedText text-sm">REMOVE</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 space-y-10">
          <div className="shadow-lg shadow-[#E0E0E0] rounded-lg p-5 space-y-3">
            <div className="border-b-2 border-slate-200">
              <p className="uppercase text-lg font-semibold py-2">
                ORDER SUMMARY
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-mutedText font-medium">Subtotal</p>
              <p className="text-mutedText text-sm">Tsh 135,000</p>
            </div>
            <p className="text-mutedText text-sm">
              Taxes and shipping calculated at checkout
            </p>
          </div>

          <div>
            <Formik
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Form submitted with values:", values);
              }}
              initialValues={{ email: "" }}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <div className="flex justify-center shadow-lg shadow-[#E0E0E0] rounded-lg">
                  <div className="w-full p-5">
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col space-y-3 my-1">
                        <label className="font-semibold">CHECKOUT</label>

                        <div className="relative">
                          <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            className="w-full pl-10 pr-3 py-2 rounded-lg placeholder:text-mutedText focus:border-[#E0E0E0] focus:ring-[#E0E0E0] outline-[#E0E0E0] border-2 "
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email"
                          />
                        </div>

                        {errors.email && touched.email && (
                          <p className="text-red-600 text-xs">{errors.email}</p>
                        )}
                      </div>

                      <CustomButton
                        btntext="Sign In to Checkout"
                        paddingX="px-12 w-full"
                        onClick={() => console.log("Sign In clicked!")}
                      />
                    </form>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
