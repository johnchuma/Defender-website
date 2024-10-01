import ContactUs from "../(components)/contactForm";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin, FaTiktok, FaEnvelopeOpenText } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import ContactInfo from "../_components/contact-info";

export default function Contact() {
    return (
        <div className="w-9/12 mx-auto space-y-20 pb-20">
            <div className="">
            <h4 className="text-center font-semibold text-black text-3xl">
            Contact Us
          </h4>
            </div>
            <div className="flex items-center space-x-10">
              <div className="w-6/12">
                <ContactUs />
              </div>
              <div className="w-6/12">
                <ContactInfo />
              </div>
            </div>
        </div>
    );
}
