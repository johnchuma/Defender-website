import React from "react";

interface SpinnerProps {
  borderColor?: string;
  size?: string;  
}

const Spinner: React.FC<SpinnerProps> = ({ borderColor = "border-primaryColor", size = "size-8" }) => {
  return (
    <div className="flex justify-center items-center p-10">
        <div
        className={`${size} border-8 ${borderColor} border-b-transparent rounded-full animate-spin`}
        />
    </div>
  );
};

export default Spinner;
