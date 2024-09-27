"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
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

interface CartItem {
  id: number;
  name: string;
  color: string;
  count: number;
  price: number;
  image: string;
  description: string;
}

export default function Ecommerce() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<CartItem>({
    ...productVariations[0],
    count: 1,
  });
  const [productCount, setProductCount] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const featuresRef = useRef(null);
  const faqsRef = useRef(null);
  const [isModified, setIsModified] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const handleProductSelection = (product: (typeof productVariations)[0]) => {
    setSelectedProduct({ ...product, count: 1 });
  };

  const handleCountChange = (productId: string, increment: boolean) => {
    const numericProductId = Number(productId);

    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === numericProductId
          ? {
              ...product,
              count: increment
                ? product.count + 1
                : Math.max(product.count - 1, 1),
            }
          : product,
      ),
    );
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("cart") || "[]",
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

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("cart") || "[]",
    ) as CartItem[];
    setCart(savedCart);
  }, []);

  const handleAddToCart = (product: CartItem) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    const productIndex = cart.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      cart[productIndex] = product;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  };

  const handleBuyNow = () => {
    const productToAdd = { ...selectedProduct, count: productCount };
    handleAddToCart(productToAdd);
    router.push("/payment");
  };

  const handleAddToWishlist = () => {
    const productToAdd = { ...selectedProduct, count: productCount };
    handleAddToCart(productToAdd);
    router.push("/wishlist");
  };

  return (
    <div className="mx-auto my-20 w-9/12 space-y-20">
      <div>
        <div className="grid grid-cols-12 items-start gap-20 pr-5">
          <div className="col-span-6 space-y-5">
            <div>
              <Image
                src={selectedProduct.image}
                height={2000}
                width={2000}
                className="h-96 w-full rounded-lg bg-backgroundColor object-contain py-10"
                alt="Watch"
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-6">
              {productVariations.map((product, index) => (
                <div
                  className="col-span-3"
                  key={index}
                  onClick={() => setSelectedProduct({ ...product, count: 1 })}
                >
                  <Image
                    src={product.image}
                    height={2000}
                    width={2000}
                    className={`h-28 w-full rounded-lg bg-backgroundColor object-contain py-5 ${
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
              <h4 className="mt-4 text-lg font-semibold text-black">
                {selectedProduct.name}
              </h4>
              <p className="text-mutedText">{selectedProduct.description}</p>
            </div>

            <p className="mt-2 text-xl font-semibold text-black">
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
                        className={`cursor-pointer rounded-full p-3`}
                        onClick={() =>
                          setSelectedProduct({ ...product, count: 1 })
                        }
                        style={{ backgroundColor: product.color }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-5">
                  <div
                    className={`inline-flex items-center justify-center rounded-lg border-2 border-[#E0E0E0] p-2 ${
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
                    className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#E0E0E0] p-2"
                    onClick={() => setProductCount(productCount + 1)}
                  >
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <CustomButton
                  btntext="Buy Now"
                  paddingX="px-14"
                  onClick={handleBuyNow}
                />
                <CustomOutlineButton
                  btntext="Add to Wishlist"
                  paddingX="px-10"
                  onClick={handleAddToWishlist}
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
              <div className="space-y-3 text-start">
                <h4 className="text-xl font-semibold text-black">
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
                className="h-60 w-full rounded-lg bg-transparent object-contain"
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
                className="h-60 w-full rounded-lg bg-transparent object-contain"
                alt="Watch"
              />
            </div>
            <div className="col-span-6">
              <div className="space-y-3 text-start">
                <h4 className="text-xl font-semibold text-black">
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
              <div className="space-y-3 text-start">
                <h4 className="text-xl font-semibold text-black">
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
                className="h-60 w-full rounded-lg bg-transparent object-contain"
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
                className="h-60 w-full rounded-lg bg-transparent object-contain"
                alt="Watch"
              />
            </div>
            <div className="col-span-6">
              <div className="space-y-3 text-start">
                <h4 className="text-xl font-semibold text-black">
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
        <div className="space-y-3 text-center">
          <h4 className="text-xl font-semibold text-black">
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
