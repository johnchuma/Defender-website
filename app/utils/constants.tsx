import { PiGpsFixLight } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { CiVolumeMute } from "react-icons/ci";
import { GrUserExpert } from "react-icons/gr";
import { PiVideoCameraSlashLight } from "react-icons/pi";

export const safetyFeatures = [
  { icon: <PiGpsFixLight className="text-cyan-600" />, title: "GPS Tracking" },
  {
    icon: <HiOutlineLocationMarker className="text-purple-600" />,
    title: "Customizable Safe Zones",
  },
  {
    icon: <PiVideoCameraSlashLight className="text-red-600" />,
    title: "No Unsafe Apps",
  },
  {
    icon: <FiPhone className="text-orange-600" />,
    title: "SOS/Emergency Contact",
  },
  {
    icon: <GrUserExpert className="text-cyan-600" />,
    title: "Parent-managed Contacts",
  },
  {
    icon: <CiVolumeMute className="text-blue-600" />,
    title: "Focus & Silent Mode Scheduling",
  },
];

export const technicalSpecifications = [
  { title: "Screen", decription: "1.4 inch IPS screen, Pixel 240x240" },
  { title: "Touch panel", decription: "Full lamination, 2.5D" },
  { title: "Operating system", decription: "RTOS" },
  {
    title: "Solution",
    decription: "ASR3603S, 832MHz, One-core ARM Cortex-R5 processor",
  },
  { title: "GPS Accuracy", decription: "5-15m" },
  { title: "WIFI Accuracy", decription: "30-50m" },
  { title: "LBS Accuracy", decription: "100m  above" },
  { title: "Operating system", decription: "Windows 11 Home" },
  { title: "Operating system", decription: "Windows 11 Home" },
  { title: "Operating system", decription: "Windows 11 Home" },
];

export const moreSpecification = [
  { text: "2MP Front Camera for Video Call" },
  { text: "4GB Internal Storage" },
  { text: "4G Nano Sim Card Enabled" },
  { text: "iOS and Android Compatible" },
  { text: "1.3` Full Touch Round Screen" },
  { text: "Wi-Fi and Bluetooth Connection" },
  { text: "IP54 Water and Dust Resistant" },
  { text: "580 mAh Long Lasting Battery" },
  { text: "Anti Removal Theft Sensor" },
  { text: "Location via GPS, WiFi and LBS " },
];

export const products = [
  {
    id: 1,
    title: "RTO`s Modern Version",
    price: "Tsh 99,000",
    imgSrc: "/watch.png",
  },
  {
    id: 2,
    title: "RTO`s Classic Version",
    price: "Tsh 89,000",
    imgSrc: "/watch.png",
  },
  {
    id: 3,
    title: "RTO`s Classic Version",
    price: "Tsh 89,000",
    imgSrc: "/watch.png",
  },
  {
    id: 4,
    title: "RTO`s Modern Version",
    price: "Tsh 99,000",
    imgSrc: "/watch.png",
  },
  {
    id: 5,
    title: "Android Elite Version",
    price: "Tsh 135,000",
    imgSrc: "/DefenderLogo.svg",
  },
  {
    id: 6,
    title: "RTO`s Classic Version",
    price: "Tsh 89,000",
    imgSrc: "/watch.png",
  },
  {
    id: 7,
    title: "RTO`s Modern Version",
    price: "Tsh 99,000",
    imgSrc: "/watch.png",
  },
];