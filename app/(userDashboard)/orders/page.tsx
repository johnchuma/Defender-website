"use client";

import React, { useState } from "react";
import OrderDetails from "../(components)/orderDetails";
import OrderView from "../(components)/orderView";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(orderId);
  };
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
        <h1 className="text-xl font-semibold">Your Orders</h1>
        <p className="text-mutedText">Let`s get your orders right</p>
      </div>

      {selectedOrder ? (
        <OrderView orderId={selectedOrder} />
      ) : (
        <OrderDetails onOrderClick={handleOrderClick} />
      )}
    </div>
  );
}
