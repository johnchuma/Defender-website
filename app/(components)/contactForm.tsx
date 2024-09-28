"use client";
import * as Yup from "yup";
import { Formik } from "formik";
import CustomButton from "./customButton";

export default function ContactUs() {
  const validationSchema = Yup.object({
    name: Yup.string().required().max(50),
    email: Yup.string().email().required("put valid email"),
    subject: Yup.string().required("empty subject"),
    message: Yup.string().required("empty message"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={(values) => {}}
      initialValues={{ name: "", email: "", subject: "", message: "" }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <div className="flex justify-start">
          <div className="w-full p-3">
            <h4 className="text-xl font-semibold text-black">
              Didn`t find your answer?
            </h4>
            <p className="text-black">Don't hestitate to contact us</p>
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
                  value={values.email}
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
                btntext={"Send Message"}
                paddingX="px-12"
                type="submit"
                onClick={() => console.log("Android version clicked!")}
              />
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}
