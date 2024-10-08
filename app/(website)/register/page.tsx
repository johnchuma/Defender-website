"use client";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomButton from "../(components)/customButton";
import { REGISTER_API } from "../../(api)/auth";
import { HiOutlineUser, HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDataToLocalStorage, getDataFromLocalStorage } from '../../utils/auth';
import GoogleLogin from "../(components)/googleLogin";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);


  const handlePostRegistration = (accessToken: string) => {
    setDataToLocalStorage("defender_userToken", accessToken);
    
    const cartItems = getDataFromLocalStorage("defenderCart");
    const wishlistItems = getDataFromLocalStorage("wishlist");

    if (cartItems || wishlistItems) {
      router.push("/payment");
    } else {
      router.push("/dashboard");
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required().max(50),
    email: Yup.string().email().required("put valid email"),
    phone: Yup.string().required("empty phone"),
    password: Yup.string().required("empty password"),
    confirmpassword: Yup.string()
      .required("empty confirm password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  return (
    <div className="mx-auto w-11/12 items-center pb-20 md:w-6/12 lg:w-3/12">
      <ToastContainer />
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setIsSubmitting(true);
          setFormSent(false);

          REGISTER_API({
            name: values.name,
            email: values.email,
            phone: values.phone,
            password: values.password,
          })
            .then((response) => {
              if (response.data.status === true) {
                resetForm();
                setFormSent(true);
                setDataToLocalStorage('defender_userToken', response.data.body.tokens.ACCESS_TOKEN);
                handlePostRegistration(response.data.body.tokens.ACCESS_TOKEN);
              } else {
                toast.error(response.data.message || "Registration failed");
                throw new Error("Failed to Register");
              }
            })
            .catch((error) => {
              toast.error(error.response.data.message);
              console.error("Error In Registration :", error);
            })
            .finally(() => {
              setIsSubmitting(false);
            });
        }}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmpassword: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <div className="flex justify-start">
            <div className="w-full space-y-3 p-3">
              {formSent && (
                <div className="mb-2 mt-10 rounded-lg border-2 border-green-600 bg-green-200 p-3">
                  <p className="text-green-600">Registration Successfully!</p>
                </div>
              )}
              <h4 className="text-center text-2xl font-semibold text-black">
                Create your Account
              </h4>
              <p className="text-center text-black">
                Enjoy your seamless watches here
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="my-1 flex flex-col space-y-3">
                  <label>Your Full Name</label>
                  <div className="relative">
                    <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    <input
                      className="form-inputstyle py-2 pl-10 pr-3"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="fullname"
                    />
                  </div>
                  {errors.name && touched.name && (
                    <p className="text-xs text-red-600">{errors.name}</p>
                  )}
                </div>
                <div className="my-1 flex flex-col space-y-3">
                  <label>Your Email</label>
                  <div className="relative">
                    <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    <input
                      className="form-inputstyle py-2 pl-10 pr-3"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="email"
                    />
                  </div>
                  {errors.email && touched.email && (
                    <p className="text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
                <div className="my-1 flex flex-col space-y-3">
                  <label>Your Phone Number</label>
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    <input
                      className="form-inputstyle py-2 pl-10 pr-3"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="0714 674 867"
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div className="my-1 flex flex-col space-y-3">
                  <label>Password</label>
                  <div className="relative">
                    <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    <input
                      className="form-inputstyle py-2 pl-10 pr-3"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="************"
                    />
                  </div>
                  {errors.password && touched.password && (
                    <p className="text-xs text-red-600">{errors.password}</p>
                  )}
                </div>
                <div className="my-1 flex flex-col space-y-3">
                  <label>Confirm Password</label>
                  <div className="relative">
                    <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    <input
                      className="form-inputstyle py-2 pl-10 pr-3"
                      name="confirmpassword"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      placeholder="************"
                    />
                  </div>
                  {errors.confirmpassword && touched.confirmpassword && (
                    <p className="text-xs text-red-600">
                      {errors.confirmpassword}
                    </p>
                  )}
                </div>
                <CustomButton
                  btntext={isSubmitting ? "Signing Up..." : "Sign Up"}
                  className="w-full"
                  onClick={() => handleSubmit()}
                  disabled={isSubmitting}
                />
              </form>
              <div className="w-full items-center space-y-5">
                <div className="flex w-full items-center justify-center space-x-3">
                  <div className="h-1 w-full bg-[#8F8F8F]"></div>
                  <p>Or</p>
                  <div className="h-1 w-full bg-[#8F8F8F]"></div>
                </div>
                <GoogleLogin />
                <div className="flex items-center justify-center space-x-2">
                  <p className="text-center">Don`t have an account?</p>
                  <Link href={"/login"}>
                    <span className="items-center text-blue-600">
                      Login here
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
