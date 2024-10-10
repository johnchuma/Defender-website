"use client";

import OrderTable from "../(components)/orderTable";
import Tiles from "../(components)/tiles";
import { PREVIOUS_ORDER_API, ACTIVE_ORDER_API, UNIQUE_ORDER_API } from "../../(api)/order";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import Spinner from "@/app/(website)/(components)/spinner";
import { useSearchParams } from "next/navigation"; 
import { TbBuildingStore } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";

const myAccountTiles = [
  {
    title: "Total Orders",
    icon: (
      <div className="p-1 items-center bg-amber-500 rounded-sm">
        <TbBuildingStore className="text-white" />
      </div>
    ),
    price: "1,600",
  },
  {
    title: "Total Payments",
    icon: (
      <div className="p-1 items-center bg-green-500 rounded-sm">
        <FaInstagram className="text-white" />
      </div>
    ),
    price: "756,000",
  },
];

export default function MyAccount() {
  const searchParams = useSearchParams();
  const user_uuid = searchParams.get("user_uuid");
  console.log("🚀 ~ MyAccount ~ user_uuid:", user_uuid);

  const [isLoading, setIsLoading] = useState(false);
  const [allOrders, setAllOrders] = useState<any[]>([]);

  const fetchOrderDetails = async () => {
    try {
      setIsLoading(true);
      if (user_uuid) {
        const response = await UNIQUE_ORDER_API(user_uuid);
        if (response.status === 200) {
          const orderData = response.data.body;
          console.log("🚀 ~ fetchOrderDetails ~ orderData:", orderData);
          setAllOrders(orderData);
        } else {
          console.error("Failed to fetch order data", response.data);
        }
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const mapDeliveryStatus = (isDelivered: boolean) => {
    return isDelivered ? "Delivered" : "Pending";
  };

  return (
    <div className="space-y-5 p-5">
      <div>
        <h1 className="font-semibold text-xl">Welcome back, Jane!</h1>
        <p className="text-mutedText">Let`
          s get right into it</p>
      </div>
      <div className="flex justify-center w-28 space-x-3 rounded-lg bg-white items-center p-2">
        <p className="text-mutedText">Filter</p>
        <IoIosArrowDown className="text-mutedText" />
      </div>
      <Tiles tilesItems={myAccountTiles} />
      {isLoading ? (
        <Spinner />
      ) : (
        <OrderTable tableData={allOrders} mapDeliveryStatus={mapDeliveryStatus} />
      )}
    </div>
  );
}
