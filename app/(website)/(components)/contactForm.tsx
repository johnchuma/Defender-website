"use client";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomButton from "@/app/_components/customButton";
import { CONTACT_API } from "@/app/(api)/contact";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required().max(50),
    email: Yup.string().email().required("put valid email"),
    subject: Yup.string().required("empty subject"),
    message: Yup.string().required("empty message"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        setIsSubmitting(true);
        setFormSent(false);
        try {
          const response = await CONTACT_API({
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          });
          if (response.data.status === true) {
            resetForm();
            setFormSent(true);
          } else {
            throw new Error("Failed to submit form");
          }
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
          <div className="w-full">
            {formSent && (
              <div className="mb-2 mt-10 rounded-lg border-2 border-green-600 bg-green-200 p-3">
                <p className="text-green-600">Form sent successfully!</p>
              </div>
            )}
            <h4 className="text-xl font-semibold text-black">
              Didn`t find your answer?
            </h4>
            <p className="text-black">Don&apos;t hestitate to contact us</p>
            <form onSubmit={handleSubmit}>
              <div className="my-3 flex flex-col space-y-3">
                <label>Your name</label>
                <input
                  className="form-inputstyle"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="firstname"
                />
                {errors.name && touched.name && (
                  <p className="text-xs text-red-600">{errors.name}</p>
                )}
              </div>
              <div className="my-3 flex flex-col space-y-2">
                <label>Your email address</label>
                <input
                  className="form-inputstyle"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="email"
                />
                {errors.email && touched.email && (
                  <p className="text-xs text-red-600">{errors.email}</p>
                )}
              </div>
              <div className="my-3 flex flex-col space-y-2">
                <label>Subject</label>
                <input
                  className="form-inputstyle"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="How do I get your product?"
                />
                {errors.subject && touched.subject && (
                  <p className="text-xs text-red-600">{errors.subject}</p>
                )}
              </div>
              <div className="my-3 flex flex-col space-y-3">
                <label>Your message</label>
                <textarea
                  className="form-inputstyle h-40"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="message"
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-red-600">{errors.message}</p>
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
