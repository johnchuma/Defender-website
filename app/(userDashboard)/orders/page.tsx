"use client";

import React, { useState } from "react";
import OrderDetails from "../(components)/orderDetails";
import OrderView from "../(components)/orderView";

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(orderId);
  };

  return (
    <div className="space-y-5 p-5">
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
