"use client";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomButton from "./customButton";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required().max(50),
    email: Yup.string().email().required("put valid email"),
    subject: Yup.string().required("empty subject"),
    message: Yup.string().required("empty message"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async(values, {resetForm}) => {
        console.log("🚀 ~ ContactUs ~ values:", values);
        setIsSubmitting(true);

        try {
          const response = await fetch("https://app.swaggerhub.com/apis/JOHNVCHUMA/Defender/1.0.0/inquiries", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              subject: values.subject,
              message: values.message,
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to submit form");
          }

          const data = await response.json();
          console.log("Form submitted successfully", data);

          resetForm();
        } catch (error) {
          console.error("Error submitting form:", error);
        } finally {
          setIsSubmitting(false);
        }
        
      }}
      initialValues={{ name: "", email: "", subject: "", message: "" }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <div className="flex justify-start">
          <div className="w-full p-3">
            <h4 className="font-semibold text-black text-xl">
              Didn`t find your answer?
            </h4>
            <p className="text-black">Don't hestitate to contact us</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-3 my-3">
                <label>Your name</label>
                <input
                  className="form-inputstyle"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="firstname"
                />
                {errors.name && touched.name && (
                  <p className="text-red-600 text-xs">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col space-y-2 my-3">
                <label>Your email address</label>
                <input
                  className="form-inputstyle"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="email"
                />
                {errors.email && touched.email && (
                  <p className="text-red-600 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col space-y-2 my-3">
                <label>Subject</label>
                <input
                  className="form-inputstyle"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="How do I get your product?"
                />
                {errors.subject && touched.subject && (
                  <p className="text-red-600 text-xs">{errors.subject}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3 my-3">
                <label>Your message</label>
                <textarea
                  className="form-inputstyle h-40"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="message"
                />
                {errors.message && touched.message && (
                  <p className="text-red-600 text-xs">{errors.message}</p>
                )}
              </div>
              <CustomButton
                btntext={isSubmitting ? "Sending..." : "Send Message"}
                className="px-12"
                onClick={() => handleSubmit()}
                disabled={isSubmitting}
              />
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}
