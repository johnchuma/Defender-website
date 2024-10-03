import React from "react";
import Image from "next/image";
import { siteConfig } from "@/app/config/site";
import Title from "@/app/_components/title";
import SocialLinks from "@/app/_components/social-link";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="hidden md:block">Contact Us</div>
      {/* Title */}
      <div className="space-y-2">
        <Title className="text-start capitalize">Get in touch Now!</Title>
        <div>
          Reach out to us now for prompt support and personalized assistance
          with any questions or issues you may have. Our team is here to help
          ensure a seamless experience.
        </div>
      </div>

      {/* Title */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2">
        <ContactInfoItem
          icon="/images/icons/phone.svg"
          title="Call us"
          value={siteConfig.communication.phone}
          altText="Call Us"
        />
        <ContactInfoItem
          icon="/images/icons/inbox.svg"
          title="Email us"
          value={siteConfig.communication.email}
          altText="Email Us"
        />
        <ContactInfoItem
          icon="/images/icons/internet.svg"
          title="Website"
          value={siteConfig.communication.website}
          altText="Visit our Website"
        />
        <ContactInfoItem
          icon="/images/icons/location.svg"
          title="Address"
          value={siteConfig.communication.address}
          altText="Our Address"
        />
      </div>

      <div className="w-fit">
        <div className="pb-4 font-semibold">Follow us on</div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactInfo;

interface ContactInfoItemProps {
  icon: string;
  title: string;
  value: string;
  altText: string;
}

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  value,
  altText,
}) => {
  return (
    <div className="inline-flex items-center gap-x-4">
      <Image src={icon} width={25} height={25} alt={altText} />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};
