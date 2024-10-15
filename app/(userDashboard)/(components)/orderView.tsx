"use client";
import React, { useEffect, useState, useContext } from "react";
import CustomButton from "@/app/_components/customButton";
import Image from "next/image";
import { getDataFromLocalStorage } from "@/app/utils/auth";
import { ORDERBYUSER_API } from "@/app/(api)/order";
import { UserContext } from "../layout";
import formatDate from "./dateFormatter";

type Order = {
  orderNo: string;
  orderedAt: string;
  totalPrice: string;
  paymentStatus: string;
  itemCount: number;
  deliverStatus: string;
};

const OrderView: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const user = useContext(UserContext);

  const fetchOrderDetails = async () => {
    try {
      setIsLoading(true);
      const token = getDataFromLocalStorage("defender_userToken");

      const orderResponse = await ORDERBYUSER_API(user!.uuid);

      if (orderResponse.status === 200) {
        const orderData = orderResponse.data.body;
        setAllOrders(orderData);
      }
    } catch (error) {
      console.error("Error fetching order details or stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div className="space-y-4 bg-white p-10">
      <div className="flex w-full space-x-5">
        <p className="w-7/12 text-lg font-semibold text-black">Awaiting Delivery</p>
        <CustomButton btntext="Track Order" />
      </div>
      {allOrders.length === 0 ? (
        <div className="flex items-center justify-center p-4">
          Your Order is empty.
        </div>
      ) : (
        allOrders.map((order, index) => (
          <div className="flex items-center w-full space-x-5">
            <div className="w-8/12 flex items-center space-x-4 py-3" key={index}>
              <div className="w-3/12">
                <Image
                  src={"/bluewatch.svg"}
                  height={1500}
                  width={1500}
                  className="h-36 w-full rounded-lg bg-backgroundColor object-contain py-6"
                  alt="Watch"
                />
              </div>
              <div className="w-9/12">
                <h4 className="md:text-md mt-2 text-base font-semibold text-black">
                  {order.deliverStatus}
                </h4>
                <p className="py-2 text-xs text-mutedText md:text-sm">
                  {" "}
                  Order date: {formatDate(order.orderedAt)}{" "}
                </p>

                <p className="mt-1 text-xs text-mutedText md:text-sm">
                  Order ID: #{order.orderNo}
                </p>
              </div>
            </div>
            <p className="w-4/12 text-lg font-semibold text-black">
              Total TZS {order.totalPrice}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderView;
