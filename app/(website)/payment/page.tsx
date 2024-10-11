"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { Formik } from "formik";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import CustomButton from "@/app/_components/customButton";
import CustomOutlineButton from "../(components)/customOutlineButton";
import { eastAfricanCountries } from "@/app/utils/constants";
import { USERDETAILS_API } from "../../(api)/user";
import { getDataFromLocalStorage } from "../../utils/auth";
import { ORDER_API } from "@/app/(api)/order";
import Spinner from "../(components)/spinner";
import { FaRegCheckCircle } from "react-icons/fa";
interface CartItem {
  id: string;
  name: string;
  color: string;
  count: number;
  price: number;
}

export default function PaymentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [delivery, setDelivery] = useState<string>("no");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedRegionData, setSelectedRegionData] = useState<{
    name: string;
    districts: string[];
  } | null>(null);
  const [userUuid, setUserUuid] = useState<string>("");
  const setFieldValueRef = useRef<(field: string, value: any) => void>();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .max(50, "Max 50 characters"),
    phone: Yup.string()
      .required("Phone is required")
      .max(15, "Max 15 characters"),
    country: Yup.string(),
    region: Yup.string(),
    district: Yup.string(),
    street: Yup.string(),
  });

  const calculateTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("defenderCart") || "[]",
    ) as CartItem[];
    setCart(savedCart);
    setTotalPrice(calculateTotalPrice(savedCart));
  }, []);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  const fetchUserDetails = async () => {
    try {
      const token = getDataFromLocalStorage("defender_userToken");
      if (!token) return;

      const response = await USERDETAILS_API(token);
      if (!response.status) {
        console.error("Failed to fetch user details");
        return;
      }

      const { body: userData } = response.data;
      setUserUuid(userData.uuid);

      if (setFieldValueRef.current) {
        setFieldValueRef.current("name", userData.name);
        setFieldValueRef.current("phone", userData.phone);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleSubmitOrder = async (values: any) => {
    const orderData = {
      user_uuid: userUuid,
      withDelivery: delivery === "yes",
      country: values.country,
      region: values.region,
      district: values.district,
      address: values.street,
      products: cart.map((item) => ({
        product: item.name,
        color: item.color,
        count: item.count,
        price: item.price,
      })),
    };

    try {
      setLoading(true);
      setIsSuccess(false);

      setTimeout(async () => {
        const response = await ORDER_API(orderData);

        if (response.status === 200) {
          console.log("Order placed successfully!");
          setIsSuccess(true);
          router.push(`/myAccount?user_uuid=${userUuid}`);
        } else {
          console.error("Failed to place order", response.data);
          setIsSuccess(false);
        }

        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error placing order:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const countryData = eastAfricanCountries.find((c) => c.country === country);
    if (countryData) {
      setSelectedRegionData(countryData.regions[0]);
    } else {
      setSelectedRegionData(null);
    }
    setSelectedRegion("");
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    setSelectedRegion(region);
    const regionData = eastAfricanCountries
      .find((c) => c.country === selectedCountry)
      ?.regions.find((r) => r.name === region);
    setSelectedRegionData(regionData || null);
  };

  return (
    <div className="mx-auto w-11/12 space-y-8 pb-20 md:w-9/12">
      {loading && (
        <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white px-14 py-8">
            {isSuccess ? (
              <FaRegCheckCircle className="h-14 w-14 text-green-500" />
            ) : (
              <Spinner borderColor="border-blue-400" size="w-14 h-14" />
            )}
            <div className="text-xl font-semibold text-black">
              {isSuccess ? "Payment received" : "Payment Processing..."}
            </div>

            <div className="text-mutedText">
              {isSuccess
                ? "Your order is now on the way, Please check your email for the receipt."
                : "Please wait, do not close this screen"}
            </div>
          </div>
        </div>
      )}
      <nav className="flex rounded-md py-2" onClick={() => router.back()}>
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
        <h2 className="text-3xl font-semibold">Payments</h2>
      </div>

      <div className="flex flex-col py-8 md:flex-row md:space-x-10">
        <div className="mt-7 w-full md:mt-0 md:w-8/12">
          <div className="border-b-2 border-secondaryColor">
            <p className="py-3 text-xl uppercase">Shipping Information</p>
          </div>
          <div>
            <Formik
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmitOrder(values);
                setSubmitting(false);
              }}
              initialValues={{
                name: "",
                phone: "",
                country: "",
                region: "",
                district: "",
                street: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                setFieldValue,
                errors,
                touched,
              }) => {
                setFieldValueRef.current = setFieldValue;
                return (
                  <div className="rounded-lg shadow-lg shadow-[#E0E0E0]">
                    <div className="w-full p-5">
                      <form onSubmit={handleSubmit}>
                        <div className="flex w-full flex-col md:flex-row md:space-x-4">
                          <div className="my-1 flex w-full flex-col space-y-3 md:w-6/12">
                            <label>Full Name</label>
                            <input
                              className="w-full rounded-lg border-2 p-3 py-2 outline-[#E0E0E0] placeholder:text-mutedText focus:border-[#E0E0E0] focus:ring-[#E0E0E0]"
                              name="name"
                              value={values.name}
                              onChange={handleChange}
                              placeholder="firstname"
                            />
                            {errors.name && touched.name && (
                              <p className="text-xs text-red-600">
                                {errors.name}
                              </p>
                            )}
                          </div>

                          <div className="my-1 flex w-full flex-col space-y-3 md:w-6/12">
                            <label>Phone Number</label>
                            <input
                              className="w-full rounded-lg border-2 p-3 py-2 outline-[#E0E0E0] placeholder:text-mutedText focus:border-[#E0E0E0] focus:ring-[#E0E0E0]"
                              name="phone"
                              value={values.phone}
                              onChange={handleChange}
                              placeholder="Phone"
                            />
                            {errors.phone && touched.phone && (
                              <p className="text-xs text-red-600">
                                {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="my-3 flex flex-col space-y-3">
                          <label className="font-medium">
                            Would you like Delivery service?
                          </label>
                          <div className="mt-2 flex space-x-14">
                            <label className="flex cursor-pointer items-center space-x-2">
                              <input
                                type="radio"
                                name="delivery"
                                value="yes"
                                checked={delivery === "yes"}
                                onChange={() => setDelivery("yes")}
                              />

                              <p> Yes</p>
                            </label>
                            <label className="flex cursor-pointer items-center space-x-2">
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
                        {delivery === "yes" && (
                          <>
                            <div className="flex w-full flex-col md:flex-row md:space-x-4">
                              <div className="my-1 flex w-full flex-col space-y-3 md:w-6/12">
                                <label>Country</label>
                                <select
                                  className="w-full rounded-lg border-2 p-3 py-2"
                                  name="country"
                                  value={selectedCountry}
                                  onChange={handleCountryChange}
                                >
                                  <option value="">Select Country</option>
                                  {eastAfricanCountries.map((country) => (
                                    <option
                                      key={country.country}
                                      value={country.country}
                                    >
                                      {country.country}
                                    </option>
                                  ))}
                                </select>
                                {errors.country && touched.country && (
                                  <p className="text-xs text-red-600">
                                    {errors.country}
                                  </p>
                                )}
                              </div>

                              <div className="my-1 flex w-full flex-col space-y-3 md:w-6/12">
                                <label>Region</label>
                                <select
                                  className="w-full rounded-lg border-2 p-3 py-2"
                                  name="region"
                                  value={selectedRegion}
                                  onChange={handleRegionChange}
                                >
                                  <option value="">Select Region</option>
                                  {eastAfricanCountries
                                    .find((c) => c.country === selectedCountry)
                                    ?.regions.map((region) => (
                                      <option
                                        key={region.name}
                                        value={region.name}
                                      >
                                        {region.name}
                                      </option>
                                    ))}
                                </select>
                                {errors.region && touched.region && (
                                  <p className="text-xs text-red-600">
                                    {errors.region}
                                  </p>
                                )}
                              </div>
                            </div>
                            {selectedRegion && selectedRegionData && (
                              <div className="flex w-full flex-col md:flex-row md:space-x-4">
                                <div className="my-1 flex w-full flex-col space-y-3 md:w-6/12">
                                  <label>District</label>
                                  <select
                                    className="w-full rounded-lg border-2 p-3 py-2"
                                    name="district"
                                    value={values.district}
                                    onChange={handleChange}
                                  >
                                    <option value="">Select District</option>
                                    {selectedRegionData.districts.map(
                                      (district) => (
                                        <option key={district} value={district}>
                                          {district}
                                        </option>
                                      ),
                                    )}
                                  </select>
                                  {errors.district && touched.district && (
                                    <p className="text-xs text-red-600">
                                      {errors.district}
                                    </p>
                                  )}
                                </div>

                                <div className="my-1 flex w-full flex-col space-y-3 md:w-6/12">
                                  <label>Street Address</label>
                                  <input
                                    className="w-full rounded-lg border-2 p-3 py-2"
                                    name="street"
                                    value={values.street}
                                    onChange={handleChange}
                                    placeholder="Street Address"
                                  />
                                  {errors.street && touched.street && (
                                    <p className="text-xs text-red-600">
                                      {errors.street}
                                    </p>
                                  )}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                        <div>
                          <p className="py-3 text-xl uppercase">PAYMENT</p>
                          <div className="rounded-lg border-2 border-[#E0E0E0]">
                            <div
                              className="flex cursor-pointer items-center justify-between space-x-12 rounded-lg px-5 py-1"
                              onClick={handleToggle}
                            >
                              <div className="flex items-center space-x-5">
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
                                <span className="text-lg font-medium text-black">
                                  FlutterWave
                                </span>
                              </div>
                              <div>
                                {" "}
                                <Image
                                  src={"/flutterwave_logo.svg"}
                                  height={2000}
                                  width={2000}
                                  className="h-12 w-full rounded-lg bg-transparent object-contain p-3"
                                  alt="paymentlogo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                          <Link href={"/wishlist"} className="hidden md:block">
                            <CustomOutlineButton
                              btntext="Back to Wishlist"
                              className="px-8"
                            />
                          </Link>
                          <CustomButton
                            btntext="Pay Now"
                            className="w-full md:px-12"
                            type="submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                );
              }}
            </Formik>
          </div>
        </div>

        <div className="order-first mt-0 w-full md:order-last md:mt-7 md:w-4/12">
          <div className="space-y-3 rounded-lg p-5 shadow-lg shadow-[#E0E0E0]">
            {cart.map((product) => (
              <div className="flex space-x-4" key={product.id}>
                <div className="relative inline-block">
                  <Image
                    src={"/blackwatch.svg"}
                    height={2000}
                    width={2000}
                    className="h-16 w-full rounded-lg bg-backgroundColor object-contain p-3"
                    alt="Watch"
                  />
                  {product.count > 0 && (
                    <div className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                      {product.count}
                    </div>
                  )}
                </div>
                <div className="items-center">
                  <h4 className="mt-2 text-sm font-semibold text-black">
                    Android Elite Watch
                  </h4>
                  <p className="py-2 text-sm text-mutedText">Tsh 135,000</p>
                </div>
              </div>
            ))}

            <div className="border-b-2 border-slate-200">
              <p className="py-2 text-lg font-semibold uppercase">
                ORDER SUMMARY
              </p>
            </div>

            <div className="flex items-center justify-between space-x-2">
              <p className="font-medium text-mutedText">Subtotal</p>
              <p className="text-sm text-mutedText">
                Tsh {totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <p className="font-medium text-mutedText">Estimated Tax</p>
              <p className="text-sm text-mutedText">Tsh 135,000 </p>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <p className="font-medium text-mutedText">
                Delivery (Within Dar)
              </p>
              <p className="text-sm text-mutedText">Free </p>
            </div>

            <div className="flex items-center justify-between space-x-2">
              <p className="font-medium">Total</p>
              <p>Tsh {totalPrice.toLocaleString()} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
