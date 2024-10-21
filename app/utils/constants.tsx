import { TbScissors } from "react-icons/tb";
import { LuBadgeCheck, LuBookOpen } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import SelcomLogo from "@/public/images/clients/selcom.png";
import VodacomLogo from "@/public/images/clients/vodacom.png";
import FlutterwaveLogo from "@/public/images/clients/flutterwave.png";
import ShuleYetuLogo from "@/public/images/clients/shule-yetu.png";

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
          All our products come with a 1 year warranty, covering
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
        <p className="text-black">+255677869628.</p>{" "}
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
    id: 101,
    name: "RTO`s Modern Version",
    price: 99000,
    image: "/v2blackwatch.png",
    color: "black",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
  {
    id: 102,
    name: "RTO`s Modern Version",
    price: 99000,
    image: "/pinkwatch.png",
    color: "pink",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
  {
    id: 103,
    name: "RTO`s Modern Version",
    price: 99000,
    image: "/bluewatch.png",
    color: "indigo",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
];

export const android = [
  {
    id: 201,
    name: "Android Elite Watch",
    price: 135000,
    image: "/blackwatch.png",
    color: "black",
    description:
      "This version is the perfect smartwatch for kids—allowing them to safely connect with family and friends every step of their day.",
  },
  {
    id: 202,
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

import { PiGpsFixLight } from "react-icons/pi";
import { HiOutlineLocationMarker, HiOutlineUserGroup } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { CiVolumeMute } from "react-icons/ci";
import { GrUserExpert } from "react-icons/gr";
import { PiVideoCameraSlashLight } from "react-icons/pi";

export const safetyFeatures = [
  { icon: <PiGpsFixLight className="text-cyan-600 text-xl" />, title: "GPS Tracking" },
  {
    icon: <HiOutlineLocationMarker className="text-purple-600 text-xl" />,
    title: "Customizable Safe Zones",
  },
  {
    icon: <PiVideoCameraSlashLight className="text-red-600 text-xl" />,
    title: "No Unsafe Apps",
  },
  {
    icon: <FiPhone className="text-orange-600 text-xl" />,
    title: "SOS/Emergency Contact",
  },
  {
    icon: <GrUserExpert className="text-cyan-600 text-xl" />,
    title: "Parent-managed Contacts",
  },
  {
    icon: <CiVolumeMute className="text-blue-600 text-xl" />,
    title: "Focus & Silent Mode Scheduling",
  },
];

export const technicalSpecifications = [
  { title: "Screen", description: "1.4 inch IPS screen, Pixel 240x240" },
  { title: "Touch panel", description: "Full lamination, 2.5D" },
  { title: "Operating system", description: "RTOS" },
  {
    title: "Solution",
    description: "ASR3603S, 832MHz, One-core ARM Cortex-R5 processor",
  },
  { title: "GPS Accuracy", description: "5-15m" },
  { title: "WIFI Accuracy", description: "30-50m" },
  { title: "LBS Accuracy", description: "100m  above" },
  { title: "Operating system", description: "Windows 11 Home" },
  { title: "Operating system", description: "Windows 11 Home" },
  { title: "Operating system", description: "Windows 11 Home" },
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
  { text: "Location via GPS, WiFi and LBS" },
];

export const eastAfricanCountries = [
  {
    country: "Tanzania",
    regions: [
      {
        name: "Arusha",
        districts: [
          "Meru",
          "Arusha City",
          "Arusha District",
          "Karatu",
          "Longido",
          "Monduli",
          "Ngorongoro",
        ],
      },
      {
        name: "Dar es Salaam",
        districts: [
          "Ilala",
          "Kinondoni",
          "Temeke",
          "Kigamboni",
          "Ubungo",
        ],
      },
      {
        name: "Dodoma",
        districts: [
          "Bahi",
          "Chamwino",
          "Chemba",
          "Dodoma City",
          "Kondoa",
          "Kongwa",
          "Mpwapwa",
        ],
      },
      {
        name: "Geita",
        districts: [
          "Bukombe",
          "Chato",
          "Geita",
          "Mbogwe",
          "Nyang’hwale",
        ],
      },
      {
        name: "Iringa",
        districts: [
          "Iringa",
          "Iringa City",
          "Kilolo",
          "Mafinga",
          "Mufindi",
        ],
      },
      {
        name: "Kagera",
        districts: [
          "Biharamulo",
          "Bukoba",
          "Bukoba City",
          "Karagwe",
          "Kyerwa",
          "Missenyi",
          "Muleba",
          "Ngara",
        ],
      },
      {
        name: "Katavi",
        districts: [
          "Mlele",
          "Mpanda",
          "Mpanda Town",
        ],
      },
      {
        name: "Kigoma",
        districts: [
          "Buhigwe",
          "Kakonko",
          "Kasulu",
          "Kasulu Town",
          "Kibondo",
          "Kigoma",
          "Kigoma-Ujiji",
          "Uvinza",
        ],
      },
      {
        name: "Kilimanjaro",
        districts: [
          "Hai",
          "Moshi",
          "Moshi City",
          "Mwanga",
          "Rombo",
          "Same",
          "Siha",
        ],
      },
      {
        name: "Lindi",
        districts: [
          "Kilwa",
          "Lindi",
          "Lindi City",
          "Liwale",
          "Nachingwea",
          "Ruangwa",
        ],
      },
      {
        name: "Manyara",
        districts: [
          "Babati",
          "Babati Town",
          "Hanang",
          "Kiteto",
          "Mbulu",
          "Simanjiro",
        ],
      },
      {
        name: "Mara",
        districts: [
          "Bunda",
          "Butiama",
          "Musoma",
          "Musoma City",
          "Rorya",
          "Serengeti",
          "Tarime",
        ],
      },
      {
        name: "Mbeya",
        districts: [
          "Busokelo",
          "Chunya",
          "Kyela",
          "Mbarali",
          "Mbeya City",
          "Mbeya District",
          "Rungwe",
        ],
      },
      {
        name: "Morogoro",
        districts: [
          "Gairo",
          "Kilombero",
          "Kilosa",
          "Morogoro",
          "Morogoro City",
          "Mvomero",
          "Ulanga",
          "Malinyi",
          "Ifakara",
        ],
      },
      {
        name: "Mtwara",
        districts: [
          "Masasi",
          "Masasi Town",
          "Mtwara",
          "Mtwara City",
          "Nanyumbu",
          "Newala",
          "Tandahimba",
        ],
      },
      {
        name: "Mwanza",
        districts: [
          "Ilemela",
          "Kwimba",
          "Magu",
          "Misungwi",
          "Nyamagana",
          "Sengerema",
          "Ukerewe",
        ],
      },
      {
        name: "Njombe",
        districts: [
          "Ludewa",
          "Makambako",
          "Makete",
          "Njombe",
          "Njombe Town",
          "Wanging'ombe",
        ],
      },
      {
        name: "Pwani",
        districts: [
          "Bagamoyo",
          "Kibaha",
          "Kibaha Town",
          "Kisarawe",
          "Mafia",
          "Mkuranga",
          "Rufiji",
        ],
      },
      {
        name: "Rukwa",
        districts: [
          "Kalambo",
          "Nkasi",
          "Sumbawanga",
          "Sumbawanga City",
        ],
      },
      {
        name: "Ruvuma",
        districts: [
          "Mbinga",
          "Songea",
          "Songea City",
          "Tunduru",
          "Namtumbo",
          "Nyasa",
        ],
      },
      {
        name: "Shinyanga",
        districts: [
          "Kahama",
          "Kahama Town",
          "Kishapu",
          "Shinyanga",
          "Shinyanga City",
        ],
      },
      {
        name: "Simiyu",
        districts: [
          "Bariadi",
          "Busega",
          "Itilima",
          "Maswa",
          "Meatu",
        ],
      },
      {
        name: "Singida",
        districts: [
          "Ikungi",
          "Iramba",
          "Manyoni",
          "Mkalama",
          "Singida",
          "Singida City",
        ],
      },
      {
        name: "Songwe",
        districts: [
          "Ileje",
          "Mbozi",
          "Momba",
          "Songwe",
        ],
      },
      {
        name: "Tabora",
        districts: [
          "Igunga",
          "Kaliua",
          "Nzega",
          "Sikonge",
          "Tabora",
          "Urambo",
          "Uyui",
        ],
      },
      {
        name: "Tanga",
        districts: [
          "Handeni",
          "Handeni Town",
          "Kilindi",
          "Korogwe",
          "Korogwe Town",
          "Lushoto",
          "Muheza",
          "Mkinga",
          "Pangani",
          "Tanga City",
        ],
      },
      {
        name: "Zanzibar Central/South",
        districts: ["Kati", "Kusini"],
      },
      {
        name: "Zanzibar North",
        districts: ["Chake Chake", "Mkoani"],
      },
      {
        name: "Zanzibar Urban/West",
        districts: ["Magharibi", "Mjini"],
      },
    ],
  }, 
  {
    country: "Kenya",
    regions: [
      {
        name: "Central",
        districts: [
          "Nyandarua",
          "Nyeri",
          "Kirinyaga",
          "Murang'a",
          "Kiambu"
        ]
      },
      {
        name: "Coast",
        districts: [
          "Mombasa",
          "Kwale",
          "Kilifi",
          "Tana River",
          "Lamu",
          "Taita-Taveta"
        ]
      },
      {
        name: "Eastern",
        districts: [
          "Marsabit",
          "Isiolo",
          "Meru",
          "Tharaka-Nithi",
          "Embu",
          "Kitui",
          "Machakos",
          "Makueni"
        ]
      },
      {
        name: "Nairobi",
        districts: [
          "Nairobi"
        ]
      },
      {
        name: "North Eastern",
        districts: [
          "Garissa",
          "Wajir",
          "Mandera"
        ]
      },
      {
        name: "Nyanza",
        districts: [
          "Siaya",
          "Kisumu",
          "Homa Bay",
          "Migori",
          "Kisii",
          "Nyamira"
        ]
      },
      {
        name: "Rift Valley",
        districts: [
          "Turkana",
          "West Pokot",
          "Samburu",
          "Trans Nzoia",
          "Uasin Gishu",
          "Elgeyo-Marakwet",
          "Nandi",
          "Baringo",
          "Laikipia",
          "Nakuru",
          "Narok",
          "Kajiado",
          "Kericho",
          "Bomet"
        ]
      },
      {
        name: "Western",
        districts: [
          "Kakamega",
          "Vihiga",
          "Bungoma",
          "Busia"
        ]
      }
    ]
  },  
  {
    country: "Uganda",
    regions: [
      { name: "Central Region", districts: ["Buikwe", "Bukomansimbi", "Butambala", "Buvuma", "Gomba", "Kalangala", "Kalungu", "Kampala", "Kasanda", "Kayunga", "Kiboga", "Kyankwanzi", "Kyotera", "Luweero", "Lwengo", "Lyantonde", "Masaka", "Mityana", "Mpigi", "Mubende", "Mukono", "Nakaseke", "Nakasongola", "Rakai", "Sembabule", "Wakiso"] },
      {
        name: "Eastern Region",
        districts: ["Amuria", "Budaka", "Bududa", "Bugiri", "Bugweri", "Bukedea", "Bukwo", "Bulambuli", "Busia", "Butaleja", "Butebo", "Buyende", "Iganga", "Jinja", "Kaberamaido", "Kalaki", "Kaliro", "Kamuli", "Kapchorwa", "Kapelebyong", "Katakwi", "Kibuku", "Kumi", "Kween", "Luuka", "Manafwa", "Mayugev", "Mbale", "Namayingo", "Namisindwa", "Namutumba", "Ngora", "Pallisa", "Serere", "Sironko", "Soroti", "Tororo"],
      },
      {
        name: "Northern Region",
        districts: ["Abim", "Adjumani", "Agago", "Alebtong", "Amolatar", "Amudat", "Amuru", "Apac", "Arua", "Dokolo", "Gulu", "Kaabong", "Karenga", "Kitgum", "Koboko", "Kole", "Kotido", "Kwania", "Lamwo", "Lira", "Madi-Okollo", "Maracha", "Moroto", "Moyo", "Nabilatuk", "Nakapiripirit", "Napak", "Nebbi", "Nwoya", "Obongi", "Omoro", "Otuke", "Oyam", "Pader", "Pakwach", "Terego", "Yumbe", "Zombo"],
      },
      {
        name: "Western Region",
        districts: ["Buhweju", "Buliisa", "Bundibugyo", "Bunyangabu", "Bushenyi", "Hoima", "Ibanda", "Isingiro", "Kabale", "Kabarole", "Kagadi", "Kakumiro", "Kamwenge", "Kanungu", "Kasese", "Kazo", "Kibaale", "Kikuube", "Kiruhura", "Kiryandongo", "Kisoro", "Kitagwenda", "Kyegegwa", "Kyenjojo", "Masindi", "Mbarara", "Mitooma", "Ntoroko", "Ntungamo", "Rubanda", "Rubirizi", "Rukiga", "Rukungiri", "Rwampara", "Sheema"],
      },
    ],
  },
  {
    country: "Rwanda",
    regions: [
      { name: "Kigali", districts: ["Gasabo", "Kicukiro", "Nyarugenge"] },
      {
        name: "Southern",
        districts: ["Huye", "Nyanza", "Muhanga", "Ruhango", "Gisagara"],
      },
      {
        name: "Western",
        districts: ["Rubavu", "Rusizi", "Karongi", "Nyamasheke", "Ngororero"],
      },
      {
        name: "Northern",
        districts: ["Musanze", "Gicumbi", "Rulindo", "Burera", "Gakenke"],
      },
      {
        name: "Eastern",
        districts: ["Rwamagana", "Nyagatare", "Kayonza", "Kirehe", "Ngoma"],
      },
    ],
  },
  {
    country: "Burundi",
    regions: [
      { name: "Bujumbura", districts: ["Mukaza", "Muha", "Ntahangwa"] },
      {
        name: "Ngozi",
        districts: ["Ngozi", "Mwumba", "Busiga", "Kiremba", "Tangara"],
      },
      { name: "Gitega", districts: ["Gitega", "Itaba", "Ryansoro", "Mutaho"] },
      {
        name: "Makamba",
        districts: ["Makamba", "Mabanda", "Vugizo", "Nyanza-Lac"],
      },
      { name: "Rumonge", districts: ["Burambi", "Buyengero", "Bugarama"] },
    ],
  },
];

import {
  HiOutlineComputerDesktop,
  HiOutlineUsers,
  HiOutlineUser,
} from "react-icons/hi2";
import { PiWindowsLogoLight } from "react-icons/pi";
import { AiOutlineCoffee } from "react-icons/ai";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { IoCashOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";

export const whyJoinUs = [
  {
    icon: <LiaHeartbeatSolid className="text-cyan-600 text-xl" />,
    title: "Health insurance",
    description:
      "Our comprehensive medical insurance covers a wide variety of needs",
  },
  {
    icon: <HiOutlineComputerDesktop className="text-purple-600 text-xl" />,
    title: "New Macbook Pro",
    description:
      "All team members receive a brand new MacBook Pro work laptop on their first day",
  },
  {
    icon: <HiOutlineUsers className="text-red-600 text-xl" />,
    title: "Smart, kind colleagues",
    description:
      "Learn and grow with highly accomplished colleagues who`re invested in your personal and professional development",
  },
  {
    icon: <PiWindowsLogoLight className="text-yellow-600 text-xl" />,
    title: "Internet Reimbursement",
    description:
      "All team members receive a monthly budget to support their internet expenses",
  },
  {
    icon: <AiOutlineCoffee className="text-cyan-600 text-xl" />,
    title: "Remote Work Budget",
    description:
      "We offer a one-time budget to assist team members in making their home office as productive as possible",
  },
  {
    icon: <HiOutlineUser className="text-blue-600 text-xl" />,
    title: "Professional Development",
    description:
      "We invest in our people to ensure they can achieve their short, medium, and long term professional goals",
  },
];

export const jobOffers = [
  {
    title: "Finance and Strategy Specialist",
    description:
      "We are looking for a dynamic Finance and Strategy Officer to join our team. The ideal candidate will have a strong background in finance, exceptional analytical skills, and the ability to translate financial data into actionable insights.",
    prospects: "Growth",
    duration: "Full-time",
    location: "Tanzania",
  },
  {
    title: "Logistic and Inventory Officer",
    description:
      "We are seeking a skilled Logistics and Inventory Manager to oversee our supply chain operations and ensure efficient inventory management. The ideal candidate will have strong analytical skills, experience in logistics management, and a commitment to enhancing operational efficiency.",
    prospects: "Business",
    duration: "Full-time",
    location: "Tanzania",
  },
  {
    title: "Customer Success Specialist",
    description:
      "We are looking for a dedicated Customer Success Specialist Officer to join our team. The ideal candidate will possess excellent communication skills, a passion for customer service, and a proactive approach to problem-solving.",
    prospects: "Business",
    duration: "Full-time",
    location: "Tanzania",
  },
];

export const Testimonials = [
  {
    image: "/testimonial.svg",
    videosrc: "https://www.youtube.com/embed/d_pV8TGKfMc?autoplay=1",
    name: "Guy Hawkins",
    position: "Founder",
  },
  {
    image: "/testimonial.svg",
    videosrc: "https://www.youtube.com/embed/d_pV8TGKfMc?autoplay=1",
    name: "Guy Hawkins",
    position: "Founder",
  },
  {
    image: "/testimonial.svg",
    videosrc: "https://www.youtube.com/embed/d_pV8TGKfMc?autoplay=1",
    name: "Guy Hawkins",
    position: "Founder",
  },
];

export const overviewStatsData = [
  {
    title: "Total Payments",
    icon: IoCashOutline,
    stats: "TZS 756,000",
    positive: true,
    description: "+12.00% this week",
  },
  {
    title: "New Users",
    icon: HiOutlineUserGroup,
    stats: "150",
    positive: true,
    description: "+5.00% this week",
  },
  {
    title: "Total Orders",
    icon: BsShop,
    stats: "1,200",
    positive: false,
    description: "-3.00% this week",
  },
  {
    title: "Blog Views",
    icon: LuBookOpen,
    stats: "TZS 1,200,000",
    positive: true,
    description: "+20.00% this week",
  },
  {
    title: "Inquiries",
    icon: MdOutlinePhone,
    stats: "30",
    positive: false,
    description: "+10.00% this week",
  },
];

export const ordersStatsData = [
  {
    title: "Total Orders",
    icon: BsShop,
    stats: "TZS 756,000",
    positive: true,
    description: "+12.00% this week",
  },
  {
    title: "Ordered Items",
    stats: "150",
    positive: true,
    description: "+5.00% this week",
  },
  {
    title: "Fulfilled Items",
    stats: "1,200",
    positive: false,
    description: "-3.00% this week",
  },
  {
    title: "Delivered Items",
    stats: "TZS 1,200,000",
    positive: true,
    description: "+20.00% this week",
  },
  {
    title: "Returned Items",
    stats: "30",
    positive: false,
    description: "+10.00% this week",
  },
];

export const paymentsStatsData = [
  {
    title: "Total Payments",
    icon: IoCashOutline,
    stats: "TZS 756,000",
    positive: true,
    description: "+12.00% this week",
  },
  {
    title: "Successful Payments",
    icon: IoCashOutline,
    stats: "150",
    positive: true,
    description: "+5.00% this week",
  },
  {
    title: "Pending Payments",
    icon: IoCashOutline,
    stats: "1,200",
    positive: false,
    description: "-3.00% this week",
  },
  {
    title: "Failed Payments",
    icon: IoCashOutline,
    stats: "TZS 1,200,000",
    positive: true,
    description: "+20.00% this week",
  },
];

export const customersStatsData = [
  {
    title: "New Customers",
    icon: HiOutlineUserGroup,
    stats: "250",
    positive: true,
    description: "+12.00% this week",
  },
  {
    title: "Total Customers",
    icon: HiOutlineUserGroup,
    stats: "150",
    positive: true,
    description: "+5.00% this week",
  },
  {
    title: "Active Customers",
    icon: HiOutlineUserGroup,
    stats: "1,200",
    positive: false,
    description: "-3.00% this week",
  },
];

export const orderHeaders = [
  { name: "orderId", label: "Order ID" },
  { name: "age", label: "Age" },
  { name: "location", label: "Location" },
  { name: "occupation", label: "Occupation" },
];

export const ordersData = [
  { orderId: "Alice", age: 30, location: "New York", occupation: "Engineer" },
  {
    orderId: "Bob",
    age: 25,
    location: "Los Angeles",
    occupation: "Designer",
  },
  { orderId: "Charlie", age: 35, location: "Chicago", occupation: "Teacher" },
];

export const regionHeaders = [
  { name: "region", label: "Region" },
  { name: "revenue", label: "Revenue" },
];

export const regionData = [
  {
    region: "Dar es Salaam",
    revenue: "TZS 227,000",
  },
  {
    region: "Mwanza",
    revenue: "TZS 227,000",
  },
  {
    region: "Singida",
    revenue: "TZS 227,000",
  },
  {
    region: "Njombe",
    revenue: "TZS 227,000",
  },
  {
    region: "Pwani",
    revenue: "TZS 227,000",
  },
  {
    region: "Kilimanjaro",
    revenue: "TZS 227,000",
  },
  {
    region: "Simiyu",
    revenue: "TZS 227,000",
  },
  {
    region: "Zanzibar",
    revenue: "TZS 227,000",
  },
  {
    region: "Mbeya",
    revenue: "TZS 227,000",
  },
  {
    region: "Ruvuma",
    revenue: "TZS 227,000",
  },
  {
    region: "Arusha",
    revenue: "TZS 227,000",
  },
];

export const blogTabs = [
  { label: "Blog Home", href: "/blog" },
  { label: "Child Safety", href: "/blog/child-safety" },
  { label: "The Future of Parenting", href: "/blog/parenting" },
  { label: "Product Features", href: "/blog/product-features" },
  { label: "Stories & Testimonials", href: "/blog/stories-testimonials" },
  { label: "News & Updates", href: "/blog/news-updates" },
];

export const orderAdminTabs = [
  { label: "All", href: "/admin/orders" },
  { label: "Pending", href: "/admin/orders/pending" },
  { label: "Delivered", href: "/admin/orders/delivered" },
];

export const paymentAdminTabs = [
  { label: "All", href: "/admin/payments" },
  { label: "Successful", href: "/admin/payments/successful" },
  { label: "Pending", href: "/admin/payments/pending" },
  { label: "Failed", href: "/admin/payments/failed" },
];

export const footerTitleLinks = {
  Home: [
    { label: "Overview", href: "/overview" },
    { label: "Products", href: "/products" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Features", href: "/features" },
  ],
  Products: [
    { label: "Android SmartWatch", href: "/product/android" },
    { label: "RTO SmartWatch", href: "/product/rto" },
    { label: "Comparison Tool", href: "/shop" },
    { label: "Android Specification", href: "/ecommerce?type=android" },
    { label: "RTO Specification", href: "/ecommerce?type=rto" },
  ],
  "E-commerce": [
    { label: "Wishlist", href: "/wishlist" },
    { label: "User Account", href: "/myAccount" },
    { label: "Order Tracking", href: "/myAccount" },
    { label: "Payment Options", href: "/payment" },
  ],
  Support: [
    { label: "FAQs", href: "/shop" },
    { label: "Contact Form", href: "/contact" },
    { label: "Live Chat", href: "/" },
    { label: "User Guides", href: "/" },

  ],
  Career: [
    { label: "Current Job", href: "/career" },
    { label: "Why Join Us", href: "/career" },
    { label: "Internships Programs", href: "/career" },
  ],
};

export const logos = [
  { src: FlutterwaveLogo, alt: "Flutterwave Image", className: "h-6 w-40" },
  { src: SelcomLogo, alt: "Selcom Image", className: "h-20 w-20" },
  { src: VodacomLogo, alt: "Vodacom Image", className: "h-9 w-40" },
  { src: ShuleYetuLogo, alt: "Shule Yetu Image", className: "h-16 w-36" },
];