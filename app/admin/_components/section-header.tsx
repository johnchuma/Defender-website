import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      {description && <h1 className="">{description}</h1>}
    </div>
  );
};

export default SectionHeader;
