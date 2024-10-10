"use client";
import { UNIQUE_ORDER_API } from "@/app/(api)/order";
import OrderTable from "../(components)/orderTable";
import Tiles from "../(components)/tiles";
import { useEffect, useState } from "react";
import Spinner from "@/app/(website)/(components)/spinner";
import { useSearchParams } from "next/navigation"; 

import { TbBuildingStore } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import OrderCategory from "../(components)/orderNav";

const generateDummyData = (num: number) => {
    const statuses = ["Paid", "Pending", "Failed"];
    const deliveryStatuses = ["Shipped", "Delivered", "Pending"];
    const itemsCount = [1, 2, 3, 4, 5];
  
    return Array.from({ length: num }, (_, index) => ({
      order: `ORD-${index + 1}`,
      date: `2024-10-${(index % 30) + 1}`,
      total: `$${(Math.random() * 100 + 20).toFixed(2)}`,
      paymentStatus: statuses[Math.floor(Math.random() * statuses.length)],
      items: itemsCount[Math.floor(Math.random() * itemsCount.length)],
      deliveryStatus: deliveryStatuses[Math.floor(Math.random() * deliveryStatuses.length)],
    }));
  };
const myOrdersTiles = [
  {
    title: "Total Orders",
    icon: (
      <div className="items-center rounded-sm bg-amber-500 p-1">
        <TbBuildingStore className="text-white"/>
      </div>
    ),
    price: "1,600",
  },
  {
    title: "Total Payments",
    icon: (
      <div className="items-center rounded-sm bg-green-500 p-1">
        <FaInstagram className="text-white"/>
      </div>
    ),
    price: "756,000",
  },
  {
    title: "Total Orders",
    icon: (
      <div className="items-center rounded-sm bg-amber-500 p-1">
        <TbBuildingStore className="text-white" />
      </div>
    ),
    price: "1,600",
  },
];

const OrdersPage = () => {
    const dummyData = generateDummyData(10);
    const searchParams = useSearchParams(); 
    const user_uuid = searchParams.get("user_uuid"); 
        console.log("🚀 ~ MyAccount ~ user_uuid:", user_uuid)
    const [isLoading, setIsLoading] = useState(false);
  const [allOrders, setAllOrders] = useState<any[]>([]);

  const fetchOrderDetails = async () => {
    try {
      setIsLoading(true);
      if(user_uuid){
        const response = await UNIQUE_ORDER_API(user_uuid);
        if (response.status === 200) {
          const orderData = response.data.body;
          console.log("🚀 ~ fetchOrderDetails ~ orderData:", orderData)
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

  return (
    <div className="space-y-5 p-5">
      <div className="">
        <h1 className="text-xl font-semibold">Your Orders</h1>
        <p className="text-mutedText">Let`s get your orders right</p>
      </div>
      <Tiles tilesItems={myOrdersTiles} />
      {isLoading ? <Spinner /> : <div>
        <OrderTable tableData={dummyData} />
        </div>}
    </div>
  );
};

export default OrdersPage;
