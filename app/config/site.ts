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
    address: "Makumbusho, Dar es Salaam, Tanzania",
    email: "info@defendertechltd.co.tz",
    phone: "+255 759 053 444 | +255 752 434 444",
    pobox: "P.O.Box 222, Dar Es Salaam",
    website: "defendertechltd.co.tz",
  },
};
