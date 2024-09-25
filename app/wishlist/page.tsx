"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik } from "formik";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import CustomButton from "../(components)/customButton";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
interface CartItem {
  id: string;
  name: string;
  color: string;
  count: number;
  price: number;
}

export default function WishListPage() {
  const [selectedProduct, setSelectedProduct] = useState<CartItem>({});
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModified, setIsModified] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const handleCountChange = (productId: string, increment: boolean) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? {
              ...product,
              count: increment
                ? product.count + 1
                : Math.max(product.count - 1, 1),
            }
          : product
      )
    );
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

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    const existingProduct = cart.find((p) => p.id === selectedProduct.id);

    if (existingProduct) {
      const isChanged =
        existingProduct.count !== selectedProduct.count ||
        existingProduct.color !== selectedProduct.color;
      setIsModified(isChanged);
    }
  }, [selectedProduct]);

  const handleRemoveFromCart = (productId: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    const updatedCart = cart.filter((product) => product.id !== productId);

    if (updatedCart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    setCart(updatedCart);
  };

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
          <div>
            {cart.length === 0 ? (
              <div className="flex justify-center items-center p-5">
                Your cart is empty.
              </div>
            ) : (
              cart.map((product) => (
                <div
                  className="flex space-x-8 items-center py-5"
                  key={product.id}
                >
                  <div className="w-2/5">
                    <Image
                      src={"/blackwatch.svg"}
                      height={2000}
                      width={2000}
                      className="rounded-lg bg-backgroundColor w-full h-48 object-contain py-10"
                      alt="Watch"
                    />
                  </div>
                  <div className="w-1/5">
                    <h4 className="mt-4 font-semibold text-black text-lg">
                      {product.name}
                    </h4>
                    <p className="text-mutedText ">{product.color}</p>
                    <p className="text-mutedText py-4">{`AT&T's Network`}</p>

                    <p className="mt-2 text-black text-xl">
                      Tsh {product.price}
                    </p>
                  </div>
                  <div className="w-1/5 flex items-center space-x-5">
                    <div
                      className={`inline-flex items-center justify-center p-2 border-2 border-[#E0E0E0] rounded-lg ${
                        product.count === 1
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer"
                      }`}
                      onClick={() => handleCountChange(product.id, false)}
                    >
                      <FaMinus />
                    </div>
                    <p className="mt-2 text-black">{product.count}</p>
                    <div
                      className="inline-flex items-center justify-center p-2 bg-[#E0E0E0] rounded-lg cursor-pointer"
                      onClick={() => handleCountChange(product.id, true)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                  <div className="w-1/5">
                    <p className="mt-2 text-black text-lg font-semibold">
                      Tsh {product.price}
                    </p>
                    <div onClick={() => handleRemoveFromCart(product.id)}>
                      <p className="uppercase my-2 text-mutedText text-sm cursor-pointer">
                        REMOVE
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="sticky top-32 col-span-4 space-y-10">
          <div className="shadow-lg shadow-[#E0E0E0] rounded-lg p-5 space-y-3">
            <div className="border-b-2 border-slate-200">
              <p className="uppercase text-lg font-semibold py-2">
                ORDER SUMMARY
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-mutedText font-medium">Subtotal</p>
              <p className="text-mutedText text-sm">
                Tsh {totalPrice.toLocaleString()}
              </p>
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
                            className="w-full pl-10 pr-3 py-2 rounded-lg placeholder:text-mutedText focus:border-[#E0E0E0] focus:ring-[#E0E0E0] outline-[#E0E0E0] border-2"
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
                        onClick={handleSubmit}
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
