import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number; // size is a number, representing width and height in pixels
  className?: string;
  objectPosition?: string; // allows CSS object-position values like "center", "top", etc.
  borderRadius?: string; // allows CSS border-radius values
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = 50, // default size is 50x50
  className = "",
  objectPosition = "center",
  borderRadius = "50%", // fully rounded by default
}) => {
  return (
    <div
      className={`overflow-hidden bg-center ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: borderRadius, // allows customization of border-radius
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
        style={{ objectPosition }} // Next.js Image uses style for object-position
      />
    </div>
  );
};

export default Avatar;
