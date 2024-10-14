import ContactUs from "../(components)/contactForm";
import ContactInfo from "../_components/contact-info";

export default function Contact() {
  return (
    <div className="mx-auto w-11/12 space-y-20 pb-20 md:w-9/12">
      <div className="">
        <h4 className="text-center text-3xl font-semibold text-black">
          Contact Us
        </h4>
      </div>
      <div className="flex flex-col items-start space-x-10 md:flex-row">
        <div className="w-full md:w-6/12">
          <ContactUs />
        </div>
        <div className="w-full md:w-6/12">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
