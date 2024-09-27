import { TbScissors } from "react-icons/tb";
import { LuBadgeCheck } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";

export const productDetails = [
  {
    title: "Tech Specifications",
    icon: <TbScissors />,
    description: (
      <div className="w-3/4 space-y-2">
        <p>Screen 1.4 inch IPS screen</p>
        <p>4G Network LTE</p>
        <p>Remote monitoring Mobile App control</p>
        <p>Waterproof level</p>
        <p>Built-in game 7 quizzes & games</p>
        <p>Lithium battery 750mAH</p>
      </div>
    ),
  },
  {
    title: "Logistic Policy",
    icon: <CiDeliveryTruck />,
    description: (
      <div className="space-y-2">
        <p>
          We process all orders within 1-2 business days. Shipping times may
          vary depending on your location and selected shipping method, with
          delivery estimates provided at checkout.
        </p>
        <p>
          Once shipped, you`ll receive a tracking number to monitor your
          package. We currently ship to [regions/countries]. Any delays due to
          unforeseen circumstances will be promptly communicated. For a detailed
          review of our shipping, delivery, and return processes, please
          download the attached document.
        </p>
        <p>For further inquiries, feel free to contact us at</p>
        <p className="text-black">+255677869628.</p>
      </div>
    ),
  },
  {
    title: "Warranty Policy",
    icon: <LuBadgeCheck />,
    description: (
      <div className="space-y-2">
        <p>
          All our products come with a [duration] warranty, covering
          manufacturing defects and issues under normal use. If you encounter
          any issues within the warranty period, please contact our customer
          support for assistance with repairs or replacements.
        </p>
        <p>
          The warranty does not cover damages caused by misuse or unauthorized
          modifications. For a complete and detailed review of our warranty
          terms, including claim procedures and exclusions, please download the
          attached document.
        </p>
        <p>For any questions or warranty claims, reach out to us at</p>
        <p className="text-black font-se">+255677869628.</p>{" "}
      </div>
    ),
  },
];

export const faqsItems = [
  {
    title:
      "What is the recommended age range for children to use the Defender Watch?",
    description:
      "The Defender Watch is designed for children aged 4 to 15 years. This age range ensures that young kids can benefit from safety features like GPS tracking and two-way communication, while older children can enjoy independence and stay connected with parents.",
  },
  {
    title: "Is the Defender Watch waterproof?",
    description:
      "Yes, the Defender Watch is designed to be water-resistant, making it suitable for everyday activities, including splashes and light rain. However, it should not be submerged in water.",
  },
  {
    title: "What is the battery life of the Defender Watch?",
    description:
      "The Defender Watch has a battery life of up to 2 days, depending on usage. Regular charging is recommended to ensure optimal performance.",
  },
  {
    title: "How do I charge the Defender Watch?",
    description:
      "The watch comes with a charging dock and cable. Simply place the watch on the dock and connect it to a power source to begin charging.",
  },
  {
    title: "What features make the Defender Watch unique?",
    description:
      "The Defender Watch combines real-time GPS tracking, two-way communication, and emergency SOS alerts, all designed specifically for children. Its user-friendly interface and durable design make it an ideal choice for safety and connectivity.",
  },
];

import { ImCancelCircle } from "react-icons/im";
import { FaRegCircleCheck } from "react-icons/fa6";

export const comparisonTitles = [
  {
    title: "Kids Friendly",
  },
  {
    title: "4G Physical Sim Enabled",
  },
  {
    title: "Front Camera",
  },
  {
    title: "Video Call",
  },
  {
    title: "Monitoring by Caretaker",
  },
  {
    title: "Anti-Theft Sensor",
  },
  {
    title: "One Touch SOS Emergency Button",
  },
  {
    title: "Remote GPS Tracking",
  },
  {
    title: "WiFi Enabled",
  },
  {
    title: "Extra Internal Storage",
  },
  {
    title: "Android/iOS OS",
  },
  {
    title: "Real Time Messaging",
  },
  {
    title: "Independent Audio Call",
  },
];

export const defenderPoints = [
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
];

export const ApplePoints = [
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
];

export const samsungPoints = [
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <ImCancelCircle className="text-primaryColor" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
  { icon: <FaRegCircleCheck className="text-green-600" /> },
];


export const rto = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
