
"use client";
import React, { useEffect, useState, useContext } from "react";
import { ORDERBYUSER_API, ORDERSTATS_PERUSER_API, PENDING_ORDERBYUSER_API, DELIVERED_ORDERBYUSER_API } from "@/app/(api)/order";
import { UserContext } from "../layout";
import { getDataFromLocalStorage } from "@/app/utils/auth";
import { TbBuildingStore } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import OrderTable from "../(components)/orderTable";
import Tiles from "../(components)/tiles";
import Spinner from "@/app/(website)/(components)/spinner";
import OrderCategory from "../(components)/orderNav";

type Order = {
    orderNo: string;
    orderedAt: string;
    totalPrice: string;
    paymentStatus: string;
    itemCount: number;
    deliverStatus: string;
  };
  
  type Summary = {
    totalOrders: string;
    orderedItems: string;
    deliveredItems: string;
    totalPayments: string;
  };

const OrderDetails: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allOrders, setAllOrders] = useState<Order[]>([]);
    const [pendingOrders, setPendingOrders] = useState<Order[]>([]);
    const [deliveredOrders, setDeliveredOrders] = useState<Order[]>([]);
    const [summaryTiles, setSummaryTiles] = useState<Summary | null>(null);
    const [activeTab, setActiveTab] = useState(0);
    const user = useContext(UserContext);
  
    const fetchOrderDetails = async () => {
      try {
        setIsLoading(true);
        const token = getDataFromLocalStorage("defender_userToken");
  
        const orderResponse = await ORDERBYUSER_API(user!.uuid);
        const pendingorderResponse = await PENDING_ORDERBYUSER_API(user!.uuid);
        const deliveredorderResponse = await DELIVERED_ORDERBYUSER_API(user!.uuid);
        const statsResponse = await ORDERSTATS_PERUSER_API(user!.uuid, token);
  
        if (orderResponse.status === 200) {
          const orderData = orderResponse.data.body;
          setAllOrders(orderData);
        }
        if (pendingorderResponse.status === 200) {
            const pendingOrderData = pendingorderResponse.data.body;
            setPendingOrders(pendingOrderData);
          }
          if (deliveredorderResponse.status === 200) {
            const deliveredOrderData = deliveredorderResponse.data.body;
            setDeliveredOrders(deliveredOrderData);
          }
        if (statsResponse.status === 200) {
          const statsData = statsResponse.data.body;
          setSummaryTiles(statsData);
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
  
    const myOrdersTiles = [
      {
        title: "Total Orders",
        icon: (
          <div className="items-center rounded-sm bg-amber-500 p-1">
            <TbBuildingStore className="text-white" />
          </div>
        ),
        price: summaryTiles?.totalOrders || "0",
      },
      {
        title: "Ordered Items",
        icon: (
          <div className="items-center rounded-sm bg-green-500 p-1">
            <FaInstagram className="text-white" />
          </div>
        ),
        price: summaryTiles?.orderedItems || "0",
      },
      {
        title: "Delivered Items",
        icon: (
          <div className="items-center rounded-sm bg-amber-500 p-1">
            <TbBuildingStore className="text-white" />
          </div>
        ),
        price: summaryTiles?.deliveredItems || "0",
      },
    ];

    const getDisplayedOrders = () => {
        switch (activeTab) {
          case 0:
            return allOrders;
          case 1:
            return pendingOrders;
          case 2:
            return deliveredOrders;
          default:
            return allOrders;
        }
      };

  return (
  <div className="space-y-5">
     <Tiles tilesItems={myOrdersTiles} />
      <OrderCategory activeTab={activeTab} setActiveTab={setActiveTab} />
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <OrderTable tableData={getDisplayedOrders()} />
        </div>
      )}
  </div>
  );
};

export default OrderDetails;
