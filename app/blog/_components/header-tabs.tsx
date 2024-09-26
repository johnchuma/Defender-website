"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderTabs() {
  const pathname = usePathname();

  // TODO: Create layout that will carry both the nav and the tab nav for the blog section.
  // TODO: Add the wishlist icon to the navbar and the number at the top
  // TODO: Make two varieties of nav bar for flat and shadow surfaces

  const tabs = [
    { label: "Home", href: "/blog" },
    { label: "Child Safety", href: "/blog/child-safety" },
    { label: "The Future of Parenting", href: "/blog/parenting" },
    { label: "Product Features", href: "/blog/product-features" },
    { label: "Stories & Testimonials", href: "/blog/stories-testimonials" },
    { label: "News & Updates", href: "/blog/news-updates" },
  ];

  return (
    <div className="flex justify-center space-x-8 bg-white py-2 text-sm">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`relative text-gray-600 hover:text-red-500 ${
            pathname === tab.href ? "font-semibold text-red-500" : ""
          }`}
        >
          {tab.label.toUpperCase()}
          {pathname === tab.href && (
            <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
          )}
        </Link>
      ))}
    </div>
  );
}
