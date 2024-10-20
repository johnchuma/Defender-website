"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { productDetails, faqsItems, rto, android } from "@/app/utils/constants";
import Faqs from "../(components)/faqs";
import ProductDetails from "@/app/(website)/(components)/productDetails";
import CustomButton from "@/app/_components/customButton";
import ContactUs from "../(components)/contactForm";
import Category from "../(components)/midNavBar";
import CustomOutlineButton from "../(components)/customOutlineButton";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useWishlist } from "../(components)/WishlistContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../(components)/spinner";
interface CartItem {
  id: number;
  name: string;
  color: string;
  count: number;
  price: number;
  image: string;
  description: string;
}

interface ProductVariation {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
  description: string;
}

export default function Ecommerce() {
  return (
    <Suspense fallback={<Spinner />}>
      <EcommerceContent />
    </Suspense>
  );
}
function EcommerceContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const [productVariations, setProductVariations] = useState<ProductVariation[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<CartItem | null>(null);
  const [productCount, setProductCount] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const featuresRef = useRef(null);
  const faqsRef = useRef(null);
  const { setWishlistCount } = useWishlist();

  useEffect(() => {
    setProductVariations(type === "android" ? android : rto);
  }, [type]);

  useEffect(() => {
    if (productVariations.length > 0 && !selectedProduct) {
      setSelectedProduct({ ...productVariations[0], count: 1 });
    }
  }, [productVariations, selectedProduct]);

  const handleProductSelection = (product: ProductVariation) => {
    setSelectedProduct({ ...product, count: 1 });
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("defenderCart") || "[]") as CartItem[];
    setCart(savedCart);
  }, []);

  const handleAddToCart = (product: CartItem) => {
    const cart = JSON.parse(localStorage.getItem("defenderCart") || "[]") as CartItem[];
    const productIndex = cart.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      cart[productIndex] = product;
    } else {
      cart.push(product);
    }

    localStorage.setItem("defenderCart", JSON.stringify(cart));
    setCart(cart);

    const uniqueWishlistItems = new Set(cart.map((item) => item.id));
    setWishlistCount(uniqueWishlistItems.size);
    document.dispatchEvent(new Event("cartUpdate"));
  };

  const handleBuyNow = () => {
    if (selectedProduct) {
      const productToAdd = { ...selectedProduct, count: productCount };
      handleAddToCart(productToAdd);
      router.push("/payment");
    }
  };

  const handleAddToWishlist = () => {
    if (selectedProduct) {
      const productToAdd = { ...selectedProduct, count: productCount };
      handleAddToCart(productToAdd);
  
      if (cart.length > 0) {
        router.push("/wishlist");
      } else {
        toast.error("Cart is empty, cannot add to wishlist.");
      }
    }
  };
  

  return (
    <div className="mx-auto my-20 w-11/12 space-y-20 md:w-9/12">
       <ToastContainer />
      <div className="grid grid-cols-12 items-start md:gap-10 lg:gap-20">
        <div className="col-span-12 space-y-5 pb-5 md:col-span-6">
          <Image
            src={selectedProduct?.image || ""}
            height={2000}
            width={2000}
            className="h-96 w-full rounded-lg bg-backgroundColor object-contain py-10"
            alt={selectedProduct?.name || "Product"}
          />
          <div className="grid grid-cols-12 gap-6">
            {productVariations.map((product) => (
              <div
                className="col-span-3 cursor-pointer"
                key={product.id}
                onClick={() => handleProductSelection(product)}
              >
                <Image
                  src={product.image}
                  height={2000}
                  width={2000}
                  className={`h-28 w-full rounded-lg object-contain py-5 ${
                    selectedProduct?.id === product.id
                      ? "border-2 border-primaryColor"
                      : ""
                  }`}
                  alt={product.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 space-y-5 md:col-span-6">
          <h4 className="text-lg font-semibold text-black">
            {selectedProduct?.name}
          </h4>
          <p className="text-mutedText">{selectedProduct?.description}</p>
          <p className="text-xl font-semibold text-black">
            Tzs {selectedProduct?.price}
          </p>
          <div className="w-3/4 space-y-4">
            <p className="my-2 text-black">Colors</p>
            <div className="flex items-center justify-between space-x-10">
              <div className="flex items-center space-x-3">
                {productVariations.map((product, index) => (
                  <div
                    key={index}
                    className={"pb-1"}
                    style={{
                      borderBottom:
                        selectedProduct?.id === product.id
                          ? `2px solid ${selectedProduct?.color}`
                          : "none",
                    }}
                  >
                    <div
                      className={`cursor-pointer rounded-full p-3`}
                      onClick={() => handleProductSelection(product)}
                      style={{ backgroundColor: product.color }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-5">
                <div
                  className={`cursor-pointer rounded-lg border-2 p-2 ${
                    productCount === 1 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={() =>
                    productCount > 1 && setProductCount(productCount - 1)
                  }
                >
                  <FaMinus />
                </div>
                <p>{productCount}</p>
                <div
                  className="cursor-pointer rounded-lg bg-gray-200 p-2"
                  onClick={() => setProductCount(productCount + 1)}
                >
                  <FaPlus />
                </div>
              </div>
            </div>
            <div className="flex justify-between space-x-5">
              <CustomButton
                btntext="Buy Now"
                className="px-14"
                onClick={handleBuyNow}
              />
              <CustomOutlineButton
                btntext="Add to Wishlist"
                className="px-10"
                onClick={handleAddToWishlist}
              />
            </div>
          </div>
          <div className="mt-4">
            {productDetails.map((item, index) => (
              <ProductDetails key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-10">
        <Category featuresRef={featuresRef} faqsRef={faqsRef} />
        <div ref={featuresRef} className="space-y-16">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-6">
              <h4 className="text-xl font-semibold text-black">
                Two-Way Communication
              </h4>
              <p className="text-mutedText">
                Stay connected with your child through secure two-way voice
                communication. Our smartwatches allow parents and kids to easily
                communicate without the need for a smartphone. With a simple
                touch, parents can call their children or receive calls,
                fostering a sense of security and connection throughout the day.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Image
                src="/watch5.svg"
                height={2000}
                width={2000}
                className="h-60 w-full object-contain"
                alt="Watch"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10">
            <div className="order-last col-span-12 items-center md:order-first md:col-span-6">
              <Image
                src="/pink-redblur.svg"
                height={2000}
                width={2000}
                className="h-60 w-full object-contain"
                alt="Watch"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
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
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-6">
              <h4 className="text-xl font-semibold text-black">
                Emergency SOS Alerts
              </h4>
              <p className="text-mutedText">
                Safety is our top priority. Our devices feature an emergency SOS
                button that children can use to alert their parents in case of
                an emergency. When activated, the watch sends immediate
                notifications to designated contacts, ensuring a quick response
                during critical situations.
              </p>
            </div>
            <div className="col-span-12 items-center md:col-span-6">
              <Image
                src="/grey-redblur.svg"
                height={2000}
                width={2000}
                className="h-60 w-full object-contain"
                alt="Watch"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10">
            <div className="order-last col-span-12 items-center md:order-first md:col-span-6">
              <Image
                src="/purple-redblur.svg"
                height={2000}
                width={2000}
                className="h-60 w-full object-contain"
                alt="Watch"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <h4 className="text-xl font-semibold text-black">
                Geofencing Alerts
              </h4>
              <p className="text-mutedText">
                Our smartwatches come with customizable geofencing capabilities
                that allow parents to set safe zones for their children. If a
                child exits these designated areas, the parent receives instant
                alerts, helping to keep them safe and secure while encouraging
                independence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={faqsRef} className="space-y-8">
        <h4 className="text-center text-xl font-semibold text-black">
          Frequently Asked Questions
        </h4>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            {faqsItems.map((item) => (
              <Faqs key={item.title} item={item} />
            ))}
          </div>
          <div className="col-span-12 md:col-span-6">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}
