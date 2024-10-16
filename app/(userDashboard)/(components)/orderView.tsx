"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "@/app/_components/customButton";
import Image from "next/image";
import { UNIQUEORDER_API } from "@/app/(api)/order";
import formatDate from "./dateFormatter";
import OrderTracking from "./orderTracker";
import { rto, android } from "@/app/utils/constants";
import { getDataFromLocalStorage } from "@/app/utils/auth";

type Order = {
  uuid: string;
  orderId: string;
  createdAt: string;
  price: string;
  product: string;
  count: number;
  color: string;
};

type OrderViewProps = {
  orderId: string;
};

interface TrackingStep {
  status: string;
  createdAt: string;
  stage: string;
}

const OrderView: React.FC<OrderViewProps> = ({ orderId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [uniqueOrder, setUniqueOrder] = useState<Order[]>([]);
  const [showTracking, setShowTracking] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [trackingData, setTrackingData] = useState<TrackingStep[]>([]);

  const fetchOrderDetails = async () => {
    try {
      setIsLoading(true);
      const token = getDataFromLocalStorage("defender_userToken");

      const orderResponse = await UNIQUEORDER_API(orderId,token);

      if (orderResponse.status === 200) {
        const orderData = orderResponse.data.body;

        if (orderData.OrderProducts && Array.isArray(orderData.OrderProducts)) {
          setUniqueOrder(orderData.OrderProducts);
        } else {
          console.warn("OrderProducts not found or is not an array");
          setUniqueOrder([]);
        }
        if (
          orderData.OrderTrackings &&
          Array.isArray(orderData.OrderTrackings)
        ) {
          setTrackingData(orderData.OrderTrackings);
        }
      } else {
        console.error("Failed to fetch order details:", orderResponse.status);
        setUniqueOrder([]);
      }
    } catch (error) {
      console.error("Error fetching order details or stats:", error);
      setUniqueOrder([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const handleTrackOrderClick = (order: Order) => {
    setCurrentOrder(order);
    setShowTracking(true);
  };

  const closeOverlay = () => {
    setShowTracking(false);
  };

  const getProductImage = (productName: string, color: string) => {
    const productFromRto = rto.find(
      (item) => item.name === productName && item.color === color
    );
    if (productFromRto) return productFromRto.image;
  
    const productFromAndroid = android.find(
      (item) => item.name === productName && item.color === color
    );
    if (productFromAndroid) return productFromAndroid.image;
  
    return "/Defenderwatch.jpg";
  };
  
  return (
    <div className="space-y-4 bg-white p-10">
      {isLoading ? (
        <div className="flex items-center justify-center p-4">
          <p>Loading your order details...</p>
        </div>
      ) : (
        <>
          <div className="flex w-full space-x-5">
            <p className="w-7/12 text-lg font-semibold text-black">
              Awaiting Delivery
            </p>
            <CustomButton
              btntext="Track Order"
              onClick={() => handleTrackOrderClick(uniqueOrder[0])}
            />
          </div>
          {uniqueOrder.length === 0 ? (
            <div className="flex items-center justify-center p-4">
              Your Order is empty.
            </div>
          ) : (
            uniqueOrder.map((order, index) => (
              <div className="flex w-full items-center space-x-5" key={index}>
                <div className="flex w-8/12 items-center space-x-4 py-3">
                  <div className="w-3/12">
                    <Image
                      src={getProductImage(order.product, order.color)}
                      height={1500}
                      width={1500}
                      className="h-36 w-full rounded-lg bg-backgroundColor object-contain py-6"
                      alt={order.product}                    />
                  </div>
                  <div className="w-9/12">
                    <h4 className="md:text-md mt-2 text-base font-semibold text-black">
                      {order.product} ({order.count})
                    </h4>
                    <p className="py-2 text-xs text-mutedText md:text-sm">
                      Order date: {formatDate(order.createdAt)}
                    </p>
                    <p className="mt-1 text-xs text-mutedText md:text-sm">
                      Order ID: #{order.orderId}
                    </p>
                  </div>
                </div>
                <p className="w-4/12 text-lg font-semibold text-black">
                  Total{" "}
                  {(parseFloat(order.price) * order.count).toLocaleString(
                    "en-US",
                    { style: "currency", currency: "TZS" },
                  )}
                </p>
              </div>
            ))
          )}
          {showTracking && currentOrder && (
            <OrderTracking
              trackingNumber={currentOrder.orderId}
              estimatedDelivery={"20/12/2024"}
              trackingData={trackingData}
              closeOverlay={closeOverlay}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OrderView;
