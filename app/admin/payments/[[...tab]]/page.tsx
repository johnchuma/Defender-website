"use client";
import React from "react";
import { useParams } from "next/navigation";
import StatsCard from "@/app/_components/stats-card";
import {
  orderHeaders,
  ordersData,
  paymentAdminTabs,
  paymentsStatsData,
} from "@/app/utils/constants";
import SectionHeader from "../../_components/section-header";
import HeaderTabs from "@/app/_components/header-tabs";
import CardWrapper from "../../_components/card-wrapper";
import Table from "../../_components/table";

const PaymentsPage = () => {
  const { tab } = useParams();

  // Access the first element of the tab array, defaulting to an empty string if undefined
  const currentTab = Array.isArray(tab) ? tab[0] : "";

  return (
    <section className="space-y-6">
      {/* Title */}
      <SectionHeader
        title="Payments"
        description="Let's get your payments right."
      />
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {paymentsStatsData.map((stat, index) => (
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
        tabs={paymentAdminTabs}
        className="bg-transparent xl:justify-start"
      />
      {currentTab === "" && (
        <CardWrapper>
          <Table headers={orderHeaders} data={ordersData} className="" />
        </CardWrapper>
      )}
      {currentTab === "successful" && (
        <CardWrapper>
          <Table headers={orderHeaders} data={ordersData} className="" />
        </CardWrapper>
      )}
      {currentTab === "pending" && (
        <CardWrapper>
          <Table headers={orderHeaders} data={ordersData} className="" />
        </CardWrapper>
      )}
      {currentTab === "failed" && (
        <CardWrapper>
          <Table headers={orderHeaders} data={ordersData} className="" />
        </CardWrapper>
      )}
    </section>
  );
};

export default PaymentsPage;
