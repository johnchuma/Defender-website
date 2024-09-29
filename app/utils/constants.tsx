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
        <p className="font-se text-black">+255677869628.</p>{" "}
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
    id: 1,
    name: "RTO`s Modern Version",
    price: 99000,
    image: "/v2blackwatch.png",
    color: "black",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
  {
    id: 2,
    name: "RTO`s Modern Version",
    price: 99000,
    image: "/pinkwatch.png",
    color: "pink",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
  {
    id: 3,
    name: "RTO`s Modern Version",
    price: 99000,
    image: "/bluewatch.png",
    color: "blue",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
];

export const android = [
  {
    id: 1,
    name: "Android Elite Watch",
    price: 135000,
    image: "/blackwatch.svg",
    color: "black",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
  {
    id: 2,
    name: "Android Elite Watch",
    price: 135000,
    image: "/greywatch.png",
    color: "grey",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
];

export const historyContent = [
  "Defender Technologies was born out of necessity in 2024, following the growing concerns we witnessed while operating our ShuleYetu.com platform. As we worked closely with schools and parents, we were confronted with alarming reports of child kidnappings, cases of child sodomy, and a rising number of missing children across Tanzania. These heartbreaking incidents highlighted an urgent need for a solution that would empower parents to better protect their children.",
  "Driven by this feedback, we set out to create a tool that would simplify the way parents monitor and stay connected to their kids. As the first teachers and guardians of their children, parents needed a way to ensure their safety, even from a distance. Thus, Defender Technologies was founded with a mission to provide an innovative and reliable solution for child safety. Our kids' smartwatch was designed with this purpose in mind—to offer real-time tracking, communication, and emergency alerts that give parents peace of mind and control, no matter where their child is. Our journey started with the goal of making every child safer and ensuring that parents can always be there when their child needs them most.",
];

export const missionContent = [
  "Our mission is simple: Empower parents with innovative technology that keeps their kids safe while fostering their independence. We believe that children should explore the world confidently, and parents should feel secure knowing they can stay connected to their children anytime, anywhere.",
];

export const visionContent = [
  "Our vision is to empower families by developing innovative solutions that enhance child safety and independence. We aspire to bridge the gap between security and freedom, enabling parents to confidently connect with their children while fostering an environment where kids can explore and grow. By continuously advancing our technology and prioritizing user feedback, we aim to lead the industry in child safety solutions, ensuring that every family has the tools they need to protect and support their children in a rapidly changing world.",
];
