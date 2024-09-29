"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderTabs() {
  const pathname = usePathname();

  const tabs = [
    { label: "Blog Home", href: "/blog" },
    { label: "Child Safety", href: "/blog/child-safety" },
    { label: "The Future of Parenting", href: "/blog/parenting" },
    { label: "Product Features", href: "/blog/product-features" },
    { label: "Stories & Testimonials", href: "/blog/stories-testimonials" },
    { label: "News & Updates", href: "/blog/news-updates" },
  ];

  return (
    <div className="container relative mx-auto">
      <div className="scrollbar-hide flex space-x-8 overflow-x-auto bg-white py-2 text-sm xl:justify-center">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`relative mx-2 whitespace-nowrap text-gray-600 hover:text-red-500 ${
              tab.href === "/blog" && pathname === "/blog"
                ? "font-semibold text-red-500"
                : tab.href !== "/blog" && pathname.includes(tab.href)
                  ? "font-semibold text-red-500"
                  : ""
            }`}
          >
            {tab.label.toUpperCase()}
            {(tab.href === "/blog" && pathname === "/blog") ||
            (tab.href !== "/blog" && pathname.includes(tab.href)) ? (
              <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
