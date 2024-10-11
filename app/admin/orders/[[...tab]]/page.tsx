"use client";
import React from "react";
import { useParams } from "next/navigation";
import StatsCard from "@/app/_components/stats-card";
import {
  orderAdminTabs,
  orderHeaders,
  ordersData,
  ordersStatsData,
} from "@/app/utils/constants";
import SectionHeader from "../../_components/section-header";
import HeaderTabs from "@/app/_components/header-tabs";
import CardWrapper from "../../_components/card-wrapper";
import Table from "../../_components/table";

const OrdersPage = () => {
  const { tab } = useParams();

  // Access the first element of the tab array, defaulting to an empty string if undefined
  const currentTab = Array.isArray(tab) ? tab[0] : "";

  return (
    <section className="space-y-6">
      {/* Title */}
      <SectionHeader
        title="Orders"
        description="Let's get your orders right."
      />
      {/* Stats Cards */}
      <div className="grid grid-cols-5 gap-4">
        {ordersStatsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            icon={stat.icon}
            stats={stat.stats}
            positive={stat.positive}
            description={stat.description}
            className="col-span-1"
          />
        ))}
      </div>
      <HeaderTabs
        tabs={orderAdminTabs}
        className="bg-transparent xl:justify-start"
      />
      {currentTab === "" && (
        <CardWrapper>
          <Table headers={orderHeaders} data={ordersData} className="" />
        </CardWrapper>
      )}
      {currentTab === "pending" && (
        <CardWrapper>
          <Table headers={orderHeaders} data={ordersData} className="" />
        </CardWrapper>
      )}
      {currentTab === "delivered" && (
        <CardWrapper>
          <Table headers={orderHeaders} data={ordersData} className="" />
        </CardWrapper>
      )}
    </section>
  );
};

export default OrdersPage;
