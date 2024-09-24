import React from "react";
import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div>
      <h2 className="pb-4 text-start text-lg font-semibold capitalize">
        {title}
      </h2>
      <div className="flex flex-col gap-y-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm underline-offset-4 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
