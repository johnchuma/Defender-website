export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Defender Smart Watches Website",
  shortName: "DTL",
  description: "Official Site: Defender Technologies Limited",
  navItems: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "",
      dropdown: [
        { label: "Android SmartWatch", link: "/products/android" },
        { label: "RTO SmartWatch", link: "/products/rto" },
      ],
    },
    {
      name: "Support",
      link: "/support",
    },
    {
      name: "Shop",
      link: "/shop",
    },
  ],
  extraNavItems: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Career", href: "/career" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  links: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://www.twitter.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
  logo: {
    url: "/images/logo/logo-red.png",
    alt: "Defender Red Logo",
  },
  communication: {
    address: "Bagamoyo road, COSTECH Building, 3rd floor- Kijitonyama-Dar es salaam",
    email: "defendertechnologiestz@gmail.com",
    phone: "(255) 677 869628",
    pobox: "P.O.Box 222, Dar Es Salaam",
    website: "https://www.defendertz.com",
  },
};
