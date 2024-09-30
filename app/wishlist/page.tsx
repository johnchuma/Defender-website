"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import CustomButton from "../(components)/customButton";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
interface CartItem {
  id: number;
  name: string;
  color: string;
  count: number;
  price: number;
  image: string;
  description: string;
}

export default function WishListPage() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<CartItem>(
    {} as CartItem
  );
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const handleCountChange = (productId: number, increment: boolean) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId
          ? {
              ...product,
              count: increment
                ? product.count + 1
                : Math.max(product.count - 1, 1),
            }
          : product
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setTotalPrice(calculateTotalPrice(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItem[];
    setCart(savedCart);
    setTotalPrice(calculateTotalPrice(savedCart));
  }, []);

  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);

    if (updatedCart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    setCart(updatedCart);
    setTotalPrice(calculateTotalPrice(updatedCart));
  };

  const handleEditCart = (productToEdit: CartItem) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (product) => product.id === productToEdit.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].count = productToEdit.count;

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setTotalPrice(calculateTotalPrice(updatedCart));
        return updatedCart;
      }

      return prevCart;
    });
  };

  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert(
        "Your cart is empty. Please add items to your cart before proceeding."
      );
      return;
    }

    if (selectedProduct) {
      handleEditCart(selectedProduct);
      router.push("/payment");
    }
  };

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
        <h2 className="font-semibold text-3xl">Your Wishlist</h2>
      </div>
      <div className="flex space-x-10">
        <div className="w-8/12 m-3">
          <div className="space-y-1">
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
                        src={product.image}
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
        </div>
        <div className="w-4/12 sticky top-32">
          <div className="space-y-10">
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
              <div className="flex justify-center shadow-lg shadow-[#E0E0E0] rounded-lg">
                <div className="w-full p-5">
                  <div className="flex flex-col space-y-3 my-1">
                    <label className="font-semibold">CHECKOUT</label>
                    <div className="text-mutedText text-sm">
                      You`re almost there! Complete your purchase now to enjoy
                      fast delivery and amazing deals. Don`t miss out - checkout
                      today!
                    </div>
                  </div>
                  <CustomButton
                    btntext="Proceed to Checkout"
                    className="px-12 w-full"
                    onClick={handleBuyNow}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
