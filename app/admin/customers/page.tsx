import React from "react";
import StatsCard from "@/app/_components/stats-card";
import {
  customersStatsData,
  orderHeaders,
  ordersData,
} from "@/app/utils/constants";
import CardWrapper from "../_components/card-wrapper";
import Table from "../_components/table";
import SectionHeader from "../_components/section-header";
const CustomersPage = () => {
  // Access the first element of the tab array, defaulting to an empty string if undefined

  return (
    <section className="space-y-6">
      {/* Title */}
      <SectionHeader
        title="Customers"
        description="Let's get your customers."
      />
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {customersStatsData.map((stat, index) => (
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
      {/* Table */}
      <CardWrapper>
        <Table headers={orderHeaders} data={ordersData} className="" />
      </CardWrapper>
    </section>
  );
};

export default CustomersPage;
