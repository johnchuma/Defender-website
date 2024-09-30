"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { productDetails, faqsItems, rto, android } from "../utils/constants";
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

interface ProductVariation {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
  description: string;
}

export default function Ecommerce() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const [productVariations, setProductVariations] = useState<ProductVariation[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<CartItem | null>(null);
  const [productCount, setProductCount] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModified, setIsModified] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const featuresRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    if (type === "android") {
      setProductVariations(android);
    } else {
      setProductVariations(rto);
    }
  }, [type]);

  useEffect(() => {
    if (productVariations.length > 0 && !selectedProduct) {
      setSelectedProduct({ ...productVariations[0], count: 1 });
    }
  }, [productVariations, selectedProduct]);

  const handleProductSelection = (product: ProductVariation) => {
    setSelectedProduct({ ...product, count: 1 });
  };

  const calculateTotalPrice = (cartItems: CartItem[]): number =>
    cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  const handleCountChange = (productId: number, increment: boolean) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? {
              ...product,
              count: increment ? product.count + 1 : Math.max(product.count - 1, 1),
            }
          : product
      )
    );
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    setCart(savedCart);
    setTotalPrice(calculateTotalPrice(savedCart));
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
      const existingProduct = cart.find((p) => p.id === selectedProduct.id);

      if (existingProduct) {
        setIsModified(
          existingProduct.count !== selectedProduct.count || existingProduct.color !== selectedProduct.color
        );
      }
    }
  }, [selectedProduct]);

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
      router.push("/wishlist");
    }
  };

  return (
    <div className="mx-auto w-9/12 space-y-20">
      <div className="grid grid-cols-12 items-start gap-20 pr-5">
        <div className="col-span-6 space-y-5">
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
                    selectedProduct?.id === product.id ? "border-2 border-primaryColor" : ""
                  }`}
                  alt={product.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6 space-y-5">
          <h4 className="text-lg font-semibold text-black">{selectedProduct?.name}</h4>
          <p className="text-mutedText">{selectedProduct?.description}</p>
          <p className="text-xl font-semibold text-black">Tzs {selectedProduct?.price}</p>
          <div className="w-3/4 space-y-4">
            <div className="flex items-center space-x-5">
              <div
                className={`cursor-pointer rounded-lg border-2 p-2 ${
                  productCount === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => productCount > 1 && setProductCount(productCount - 1)}
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
            <div className="flex justify-between">
              <CustomButton btntext="Buy Now" className="px-14" onClick={handleBuyNow} />
              <CustomOutlineButton btntext="Add to Wishlist" paddingX="px-10" onClick={handleAddToWishlist} />
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
            <div className="col-span-6">
              <h4 className="text-xl font-semibold text-black">Two-Way Communication</h4>
              <p className="text-mutedText">
                Stay connected with your child through secure two-way voice communication.
              </p>
            </div>
            <div className="col-span-6">
              <Image src="/watch5.svg" height={2000} width={2000} className="h-60 w-full object-contain" alt="Watch" />
            </div>
          </div>
          {/* Additional Features */}
        </div>
      </div>
      <div ref={faqsRef} className="space-y-8">
        <h4 className="text-xl font-semibold text-black text-center">Frequently Asked Questions</h4>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6">
            {faqsItems.map((item) => (
              <Faqs key={item.title} item={item} />
            ))}
          </div>
          <div className="col-span-6">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}
