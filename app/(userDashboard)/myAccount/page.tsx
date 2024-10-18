"use client";
import React, { useContext } from "react";
import OrderTable from "../(components)/orderTable";
import Tiles from "../(components)/tiles";
import { ORDERBYUSER_API, ORDERSTATS_PERUSER_API } from "../../(api)/order";
import { useEffect, useState } from "react";
import Spinner from "@/app/(website)/(components)/spinner";
import { TbBuildingStore } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { UserContext } from "../(components)/useContext";
import { getDataFromLocalStorage } from "@/app/utils/auth";
import { FaArrowLeftLong } from "react-icons/fa6";

type Order = {
  uuid: string;
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

const MyAccount: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [summaryTiles, setSummaryTiles] = useState<Summary | null>(null);
  const user = useContext(UserContext);

  const fetchOrderDetails = async () => {
    try {
      setIsLoading(true);
      const token = getDataFromLocalStorage("defender_userToken");

      const orderResponse = await ORDERBYUSER_API(user!.uuid,token);
      const statsResponse = await ORDERSTATS_PERUSER_API(user!.uuid, token);

      if (orderResponse.status === 200) {
        setAllOrders(orderResponse.data.body);
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

  const handleOrderClick = () => {
    console.log("handleOrderClick:");
  };
  
  const myAccountTiles = [
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
      title: "Total Payments",
      icon: (
        <div className="items-center rounded-sm bg-green-500 p-1">
          <FaInstagram className="text-white" />
        </div>
      ),
      price: summaryTiles?.totalPayments || "0",
    },
  ];
  const toggleSidebar = () => {
    const sidebar = document.getElementById("mobile-sidebar");
    if (sidebar) {
      sidebar.classList.toggle("hidden");
    }
  };

  return (
    <div className="space-y-5 p-5">
      <div className="block md:hidden" onClick={toggleSidebar}>
        <span className="mx-2 text-mutedText">
            <FaArrowLeftLong />
        </span>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Welcome back, {user?.name}!</h1>
        <p className="text-mutedText">Let`s get right into it</p>
      </div>

      <Tiles tilesItems={myAccountTiles} />
      {isLoading ? (
        <Spinner />
      ) : (
        <OrderTable tableData={allOrders} onOrderClick={handleOrderClick} />
      )}
    </div>
  );
};

export default MyAccount;
