"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 
import { UNIQUE_ORDER_API } from "@/app/(api)/order";
import OrderTable from "../(components)/orderTable";
import Tiles from "../(components)/tiles";
import Spinner from "@/app/(website)/(components)/spinner";
import OrderCategory from "../(components)/orderNav";

import { TbBuildingStore } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
const generateDummyData = (num: number) => {
  const statuses = ["Paid", "Pending", "Failed"];
  const itemsCount = [1, 2, 3, 4, 5];
  
  return Array.from({ length: num }, (_, index) => ({
    order: `ORD-${index + 1}`,
    date: `2024-10-${(index % 30) + 1}`,
    total: `$${(Math.random() * 100 + 20).toFixed(2)}`,
    paymentStatus: statuses[Math.floor(Math.random() * statuses.length)],
    items: itemsCount[Math.floor(Math.random() * itemsCount.length)],
    isDelivered: Math.random() > 0.5, 
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
  const searchParams = useSearchParams();
  const user_uuid = searchParams.get("user_uuid");
  const [isLoading, setIsLoading] = useState(false);
  const [allOrders, setAllOrders] = useState<any[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(0); 

  const fetchOrderDetails = async () => {
    try {
      setIsLoading(true);
      if (user_uuid) {
        const response = await UNIQUE_ORDER_API(user_uuid);
        if (response.status === 200) {
          const orderData = response.data.body;
          console.log("🚀 ~ fetchOrderDetails ~ orderData:", orderData);
          setAllOrders(orderData);
          filterOrders(orderData, activeTab); 
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

  const filterOrders = (orders: any[], tab: number) => {
    const statusMap = ["All", "Pending", "Delivered"];
    const filtered = orders.filter((order) => {
      if (statusMap[tab] === "All") return true;
      if (statusMap[tab] === "Pending") return order.isDelivered === false;
      if (statusMap[tab] === "Delivered") return order.isDelivered === true;
    });
    setFilteredOrders(filtered);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [user_uuid]);

  useEffect(() => {
    filterOrders(allOrders, activeTab); 
  }, [activeTab, allOrders]);

  const mapDeliveryStatus = (isDelivered: boolean) => {
    return isDelivered ? "Delivered" : "Pending";
  };

  return (
    <div className="space-y-5 p-5">
      <div>
        <h1 className="text-xl font-semibold">Your Orders</h1>
        <p className="text-mutedText">Let’s get your orders right</p>
      </div>
      <Tiles tilesItems={myOrdersTiles} />
      <OrderCategory 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <OrderTable 
            tableData={filteredOrders.length ? filteredOrders : generateDummyData(10)} 
            mapDeliveryStatus={mapDeliveryStatus} 
          />
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
