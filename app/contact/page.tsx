import ContactUs from "../(components)/contactForm";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin, FaTiktok, FaEnvelopeOpenText } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

export default function Contact() {
    return (
        <div className="w-9/12 mx-auto space-y-20 my-20">
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
          <div className="mt-10 space-y-5">
          <p className="text-black text-lg">Contact Us</p>
          <div className="space-y-3"> 
            <h4 className="font-semibold text-black text-3xl">
          Get In Touch Now!
          </h4>
          <p className="text-mutedText">
          Reach out to us now for prompt support and personalized assistance with any questions or issues you may have. Our team is here to help ensure a seamless experience.</p>
          </div>
          <div>
            <div className="flex space-x-2">
            <IoCallOutline />
            <div>
            <p className="font-semibold">Call Us</p>
            <p className="text-mutedText">(255) 677 869628</p>
            </div>
            </div>
            <div className="flex space-x-2">
            <FaEnvelopeOpenText />
            <div>
            <p className="font-semibold">Email Us</p>
            <p className="text-mutedText">defendertechnologiestz@gmail.com</p>
            </div>
            </div>
            <div className="flex space-x-2">
            <CiGlobe />
            <div>
            <p className="font-semibold">Website</p>
            <p className="text-mutedText">http://www.defendertz.com</p>
            </div>
            </div>
            <div className="flex space-x-2">
            <IoLocationOutline />
            <div>
            <p className="font-semibold">Address</p>
            <p className="text-mutedText">Bagamoyo road, COSTECH Building, <br/> 3rd floor- Kijitonyama-Dar es salaam</p>
            </div>   
            </div>
          </div>
            <div className="space-y-2">
            <p className="text-black text-xl font-semibold">Follow us on</p>
            <div className="flex space-x-2">
            <div className="bg-backgroundColor p-3 rounded-lg"><FaFacebook className="text-2xl" /></div>
            <div className="bg-backgroundColor p-3 rounded-lg"><FaXTwitter className="text-2xl" /> </div>
            <div className="bg-backgroundColor p-3 rounded-lg"><FaInstagram className="text-2xl" /> </div>
            <div className="bg-backgroundColor p-3 rounded-lg"><FaLinkedin className="text-2xl" /> </div>
            <div className="bg-backgroundColor p-3 rounded-lg"><FaTiktok className="text-2xl" /> </div>
             </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}
