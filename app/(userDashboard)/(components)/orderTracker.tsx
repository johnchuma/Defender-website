import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { formatDateAndTime } from "./dateFormatter";
import { FaRegCheckCircle } from "react-icons/fa";

interface TrackingStep {
  status: string;
  createdAt: string;
  stage: string;
}
interface OrderTrackingProps {
  trackingNumber: string;
  estimatedDelivery: string;
  trackingData: TrackingStep[];
  closeOverlay: () => void;
}

const OrderTracking: React.FC<OrderTrackingProps> = ({
  trackingNumber,
  estimatedDelivery,
  trackingData,
  closeOverlay,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md space-y-3 rounded-lg bg-white p-6 shadow-lg">
        <MdCancel
          className="absolute right-0 top-0 cursor-pointer text-3xl text-primaryColor"
          onClick={closeOverlay}
        />
        <p className="text-start text-sm">
          Tracking number:{" "}
          <span className="font-semibold">{trackingNumber}</span>
        </p>
        <p className="text-start text-sm">
          Estimated delivery date:{" "}
          <span className="font-semibold">{estimatedDelivery}</span>
        </p>

        <div className="mt-4">
          {trackingData.length > 0 ? (
            <div className="bg-backgroundColor p-4">
              {trackingData.map((step, index) => {
                const { formattedDate, formattedTime } = formatDateAndTime(
                  step.createdAt,
                );

                return (
                  <div key={index} className="mb-4 ">
                    <div className="flex items-center space-x-2">
                      <FaRegCheckCircle className={`text-lg ${index === 0 ? "text-blue-500" : "text-gray-300"}`}/>
                      <div>
                        <p
                          className={`text-sm ${index === 0 ? "text-blue-500" : "text-black"}`}
                        >
                          {step.stage}
                        </p>
                        <p className="text-xs text-mutedText">
                          {formattedDate}, {formattedTime}                      
                        </p>
                      </div>
                    </div>
                    {index !== trackingData.length - 1 && (
                      <div className="ml-2 h-6 border-l-2 border-gray-300"></div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Loading tracking details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
