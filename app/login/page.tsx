"use client";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomButton from "../(components)/customButton";
import { LOGIN_API } from "../(api)/auth";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDataToLocalStorage } from "../utils/auth";
import GoogleLogin from "../(components)/googleLogin";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email().required("put valid email"),
    password: Yup.string().required("empty password"),
  });

  return (
    <div className="mx-auto w-11/12 items-center pb-20 md:w-6/12 lg:w-3/12">
      <ToastContainer />
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setIsSubmitting(true);
          setFormSent(false);

          LOGIN_API({
            email: values.email,
            password: values.password,
          })
            .then((response) => {
              if (response.data.status === true) {
                resetForm();
                setFormSent(true);
                setDataToLocalStorage(
                  "defender_userToken",
                  response.data.body.tokens.ACCESS_TOKEN,
                );
              } else {
                toast.error(response.data.message || "Login failed");
                throw new Error("Failed to Login");
              }
            })
            .catch((error) => {
              toast.error(error.response.data.message);
              console.error("Error Logging In:", error);
            })
            .finally(() => {
              setIsSubmitting(false);
            });
        }}
        initialValues={{ email: "", password: "" }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <div className="flex justify-start">
            <div className="w-full space-y-3 p-3">
              {formSent && (
                <div className="mb-2 mt-10 rounded-lg border-2 border-green-600 bg-green-200 p-3">
                  <p className="text-green-600">Login Successfully!</p>
                </div>
              )}
              <h4 className="text-center text-2xl font-semibold text-black">
                Log In
              </h4>
              <p className="text-center text-black">
                Enjoy your seamless watches here
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
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
                  <label>Password</label>
                  <div className="relative">
                    <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    <input
                      className="form-inputstyle py-2 pl-10 pr-3"
                      name="password"
                      value={values.password}
                      type={showPassword ? "text" : "password"}
                      onChange={handleChange}
                      placeholder="************"
                    />
                    {showPassword ? (
                      <AiOutlineEyeInvisible
                        className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-400"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <AiOutlineEye
                        className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-400"
                        onClick={() => setShowPassword(true)}
                      />
                    )}{" "}
                  </div>
                  {errors.password && touched.password && (
                    <p className="text-xs text-red-600">{errors.password}</p>
                  )}
                </div>
                <CustomButton
                  btntext={isSubmitting ? "Loging In..." : "Login"}
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
                  <Link href={"/register"}>
                    <span className="items-center text-blue-600">
                      Sign Up here
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
};

export default Login;
