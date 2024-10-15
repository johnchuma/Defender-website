"use client";
import OrderDetails from "../(components)/orderDetails";
import OrderView from "../(components)/orderView";

export default function OrdersPage() {
  return (
    <div className="space-y-5 p-5">
      <div>
        <h1 className="text-xl font-semibold">Your Orders</h1>
        <p className="text-mutedText">Let`s get your orders right</p>
      </div>
     {/* <OrderDetails /> */}
     <OrderView />
    </div>
  );
}
