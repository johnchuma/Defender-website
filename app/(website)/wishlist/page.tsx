"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import CustomButton from "@/app/_components/customButton";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useWishlist } from "../(components)/WishlistContext";
import { USERDETAILS_API } from "../../(api)/user";
import { getDataFromLocalStorage } from "../../utils/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    {} as CartItem,
  );
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { setWishlistCount } = useWishlist();

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
          : product,
      );

      localStorage.setItem("defenderCart", JSON.stringify(updatedCart));
      setTotalPrice(calculateTotalPrice(updatedCart));

      const uniqueWishlistItems = new Set(updatedCart.map((item) => item.id));
      setWishlistCount(uniqueWishlistItems.size);
      document.dispatchEvent(new Event("cartUpdate"));

      return updatedCart;
    });
  };

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("defenderCart") || "[]",
    ) as CartItem[];
    setCart(savedCart);
    setTotalPrice(calculateTotalPrice(savedCart));
  }, []);

  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);

    if (updatedCart.length === 0) {
      localStorage.removeItem("defenderCart");
    } else {
      localStorage.setItem("defenderCart", JSON.stringify(updatedCart));
    }
    setCart(updatedCart);
    setTotalPrice(calculateTotalPrice(updatedCart));
    const uniqueWishlistItems = new Set(updatedCart.map((item) => item.id));
    setWishlistCount(uniqueWishlistItems.size);
    document.dispatchEvent(new Event("cartUpdate"));
  };

  const handleEditCart = (productToEdit: CartItem) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (product) => product.id === productToEdit.id,
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].count = productToEdit.count;

        localStorage.setItem("defenderCart", JSON.stringify(updatedCart));
        setTotalPrice(calculateTotalPrice(updatedCart));

        const uniqueWishlistItems = new Set(updatedCart.map((item) => item.id));
        setWishlistCount(uniqueWishlistItems.size);
        document.dispatchEvent(new Event("cartUpdate"));

        return updatedCart;
      }

      return prevCart;
    });
  };

  const handleBuyNow = async () => {
    if (cart.length === 0) {
      toast.warning(
        "Your cart is empty. Please add items to your cart before proceeding.",
      );
      return;
    }

    const accessToken = getDataFromLocalStorage("defender_userToken");

    if (!accessToken) {
      router.push("/register");
      return;
    }

    try {
      const response = await USERDETAILS_API(accessToken);
      const userData = response.data;

      if (selectedProduct) {
        handleEditCart(selectedProduct);
      }

      router.push(
        `/payment`,
        // `/payment?token=${encodeURIComponent(accessToken)}&user=${encodeURIComponent(JSON.stringify(userData))}`,
      );
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Error fetching user details. Please try again.");
    }
  };

  return (
    <div className="mx-auto w-11/12 space-y-10 pb-20 md:w-9/12">
      <ToastContainer />
      <nav className="flex rounded-md px-4 py-2" onClick={() => router.back()}>
        <div className="flex items-center">
          <span className="mx-2 block text-mutedText md:hidden">
            <FaArrowLeftLong />
          </span>

          <span className="mx-2 hidden text-mutedText md:block">
            <IoIosArrowBack />
          </span>
          <span className="hidden text-mutedText md:block">
            Continue Shopping
          </span>
        </div>
      </nav>
      <div className="text-center leading-[4rem]">
        <h2 className="text-3xl font-semibold">Your Wishlist</h2>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="m-2 w-full md:w-8/12">
          <div className="space-y-2">
            <div className="hidden border-b border-secondaryColor md:block">
              <p className="py-2 text-lg uppercase">Your Selection</p>
            </div>
            <div>
              {cart.length === 0 ? (
                <div className="flex items-center justify-center p-4">
                  Your cart is empty.
                </div>
              ) : (
                cart.map((product) => (
                  <div
                    className="flex items-center space-x-4 py-3"
                    key={product.id}
                  >
                    <div className="w-1/3">
                      <Image
                        src={product.image}
                        height={1500}
                        width={1500}
                        className="h-36 w-full rounded-lg bg-backgroundColor object-contain py-6"
                        alt="Watch"
                      />
                    </div>
                    <div className="w-1/4">
                      <h4 className="md:text-md mt-2 text-xs font-semibold text-black">
                        {product.name}
                      </h4>
                      <p className="text-xs text-mutedText md:text-sm">
                        {product.color}
                      </p>
                      <p className="py-2 text-xs text-mutedText md:text-sm">{`AT&T's Network`}</p>
                      <p className="mt-1 text-xs text-black md:text-lg">
                        Tsh {product.price}
                      </p>
                    </div>
                    <div className="flex w-1/4 items-center space-x-3">
                      <div
                        className={`inline-flex items-center justify-center rounded-lg border-2 border-[#E0E0E0] p-1 ${
                          product.count === 1
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        }`}
                        onClick={() => handleCountChange(product.id, false)}
                      >
                        <FaMinus className="text-xs" />
                      </div>
                      <p className="mt-1 text-xs text-black">{product.count}</p>
                      <div
                        className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#E0E0E0] p-1"
                        onClick={() => handleCountChange(product.id, true)}
                      >
                        <FaPlus className="text-xs" />
                      </div>
                    </div>
                    <div className="w-1/4">
                      <p className="mt-1 text-xs font-semibold text-black md:text-lg">
                        Tsh {product.price}
                      </p>
                      <div onClick={() => handleRemoveFromCart(product.id)}>
                        <p className="md:text-md my-1 cursor-pointer text-xs uppercase text-mutedText">
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

        <div className="sticky top-32 w-full md:w-4/12">
          <div className="space-y-10">
            <div className="space-y-3 rounded-lg p-5 shadow-lg shadow-[#E0E0E0]">
              <div className="border-b-2 border-slate-200">
                <p className="py-2 text-lg font-semibold uppercase">
                  ORDER SUMMARY
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium text-mutedText">Subtotal</p>
                <p className="text-sm text-mutedText">
                  Tsh {totalPrice.toLocaleString()}
                </p>
              </div>
              <p className="text-sm text-mutedText">
                Taxes and shipping calculated at checkout
              </p>
              <CustomButton
                btntext="Proceed to Checkout"
                className="block w-full px-12 md:hidden"
                onClick={handleBuyNow}
              />
            </div>

            <div className="hidden md:block">
              <div className="flex justify-center rounded-lg shadow-lg shadow-[#E0E0E0]">
                <div className="w-full p-5">
                  <div className="my-1 flex flex-col space-y-3">
                    <label className="font-semibold">CHECKOUT</label>
                    <div className="text-sm text-mutedText">
                      You`re almost there! Complete your purchase now to enjoy
                      fast delivery and amazing deals. Don`t miss out - checkout
                      today!
                    </div>
                  </div>
                  <CustomButton
                    btntext="Proceed to Checkout"
                    className="w-full px-12"
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
