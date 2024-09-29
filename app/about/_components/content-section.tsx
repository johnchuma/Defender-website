import Title from "@/app/_components/title";
import React from "react";

interface ContentSectionProps {
  title: string;
  paragraphs: string[];
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  paragraphs,
}) => {
  return (
    <div className="grid grid-cols-5 place-items-start self-center">
      <div className="col-span-1">
        <Title className="text-start text-lg">{title}</Title>
      </div>
      <div className="col-span-4 space-y-3">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
