"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { Formik } from "formik";
import { IoIosArrowBack } from "react-icons/io";
import CustomButton from "../(components)/customButton";
import CustomOutlineButton from "../(components)/customOutlineButton";

interface CartItem {
  id: string;
  name: string;
  color: string;
  count: number;
  price: number;
}

export default function PaymentPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [delivery, setDelivery] = useState<string>("yes");
  const [isChecked, setIsChecked] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .max(50, "Max 50 characters"),
    phone: Yup.string()
      .required("Phone is required")
      .max(15, "Max 15 characters"),
  });

  const calculateTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItem[];
    setCart(savedCart);
    setTotalPrice(calculateTotalPrice(savedCart));
  }, []);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="w-9/12 mx-auto space-y-8 my-20">
      <nav className="flex py-2 rounded-md">
        <Link href={"/wishlist"}>
          <div className="flex items-center">
            <span className="mx-2 text-mutedText">
              <IoIosArrowBack />
            </span>
            <span className="text-mutedText">Continue Shopping</span>
          </div>
        </Link>
      </nav>

      <div className="text-center leading-[4rem]">
        <h2 className="font-semibold text-3xl">Payments</h2>
      </div>

      <div className="flex py-8 space-x-10">
        <div className="w-8/12">
          <div className="border-b-2 border-secondaryColor">
            <p className="uppercase text-xl py-3">Shipping Information</p>
          </div>
          <div>
            <Formik
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form submitted with values:", values);
                setSubmitting(false);
              }}
              initialValues={{ name: "", phone: "" }}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <div className="shadow-lg shadow-[#E0E0E0] rounded-lg">
                  <div className="w-full p-5">
                    <form onSubmit={handleSubmit}>
                      <div className="flex w-full space-x-4">
                        <div className="flex flex-col w-6/12 space-y-3 my-1">
                          <label>Full Name</label>
                          <input
                            className="w-full p-3 py-2 rounded-lg placeholder:text-mutedText focus:border-[#E0E0E0] focus:ring-[#E0E0E0] outline-[#E0E0E0] border-2"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="firstname"
                          />
                          {errors.name && touched.name && (
                            <p className="text-red-600 text-xs">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col w-6/12 space-y-3 my-1">
                          <label>Phone Number</label>
                          <input
                            className="w-full p-3 py-2 rounded-lg placeholder:text-mutedText focus:border-[#E0E0E0] focus:ring-[#E0E0E0] outline-[#E0E0E0] border-2"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                          />
                          {errors.phone && touched.phone && (
                            <p className="text-red-600 text-xs">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3 my-3">
                        <label className="font-medium">
                          Would you like Delivery service?
                        </label>
                        <div className="flex mt-2 space-x-14">
                          <label className="flex cursor-pointer  items-center space-x-2">
                            <input
                              type="radio"
                              name="delivery"
                              value="yes"
                              checked={delivery === "yes"}
                              onChange={() => setDelivery("yes")}
                            />

                            <p> Yes</p>
                          </label>
                          <label className="flex cursor-pointer space-x-2 items-center">
                            <input
                              type="radio"
                              name="delivery"
                              value="no"
                              checked={delivery === "no"}
                              onChange={() => setDelivery("no")}
                            />
                            <p>No</p>
                          </label>
                        </div>
                      </div>

                      <div>
                        <p className="uppercase text-xl py-3">PAYMENT</p>
                        <div className="border-[#E0E0E0] border-2 rounded-lg">
                          <div
                            className="flex items-center justify-between rounded-lg cursor-pointer space-x-12 py-1 px-5"
                            onClick={handleToggle}
                          >
                            <div className="flex space-x-5 items-center">
                              <span>
                                <label className="cursor-pointer">
                                  <input
                                    type="radio"
                                    name="paymentMethod"
                                    checked={isChecked}
                                    onChange={handleToggle}
                                  />
                                </label>
                              </span>
                              <span className="text-black text-lg font-medium">
                                FlutterWave
                              </span>
                            </div>
                            <div>
                              {" "}
                              <Image
                                src={"/flutterwave_logo.svg"}
                                height={2000}
                                width={2000}
                                className="rounded-lg bg-transparent w-full h-12 object-contain p-3"
                                alt="paymentlogo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between space-x-4 mt-10">
                        <Link href={"/wishlist"}>
                          <CustomOutlineButton
                            btntext="Back to Wishlist"
                            paddingX="px-8"
                          />
                        </Link>
                        <CustomButton btntext="Pay Now" className="px-12" />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>

        <div className="w-4/12 mt-7">
          <div className="shadow-lg  shadow-[#E0E0E0] rounded-lg p-5 space-y-3">
            {cart.map((product) => (
              <div className="flex space-x-4" key={product.id}>
                <div className="relative inline-block">
                  <Image
                    src={"/blackwatch.svg"}
                    height={2000}
                    width={2000}
                    className="rounded-lg bg-backgroundColor w-full h-16 object-contain p-3"
                    alt="Watch"
                  />
                  {product.count > 0 && (
                    <div className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full text-white text-xs flex items-center justify-center">
                      {product.count}
                    </div>
                  )}
                </div>
                <div className="items-center">
                  <h4 className="mt-2 font-semibold text-black text-sm">
                    Android Elite Watch
                  </h4>
                  <p className="text-mutedText text-sm py-2">Tsh 135,000</p>
                </div>
              </div>
            ))}

            <div className="border-b-2 border-slate-200">
              <p className="uppercase text-lg font-semibold py-2">
                ORDER SUMMARY
              </p>
            </div>

            <div className="flex justify-between items-center space-x-2">
              <p className="text-mutedText font-medium">Subtotal</p>
              <p className="text-mutedText text-sm">
                Tsh {totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-between items-center space-x-2">
              <p className="text-mutedText font-medium">Estimated Tax</p>
              <p className="text-mutedText text-sm">Tsh 135,000 </p>
            </div>
            <div className="flex justify-between items-center space-x-2">
              <p className="text-mutedText font-medium">
                Delivery (Within Dar)
              </p>
              <p className="text-mutedText text-sm">Free </p>
            </div>

            <div className="flex justify-between items-center space-x-2">
              <p className="font-medium">Total</p>
              <p>Tsh {totalPrice.toLocaleString()} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
