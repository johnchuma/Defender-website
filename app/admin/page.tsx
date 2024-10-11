"use client";
import StatsCard from "../_components/stats-card";
import CustomLineChart from "./_components/line-chart";
import Table from "./_components/table";
import CardWrapper from "./_components/card-wrapper";
import SectionHeader from "./_components/section-header";
import {
  orderHeaders,
  ordersData,
  regionData,
  regionHeaders,
  overviewStatsData,
} from "../utils/constants";

export default function AdminHome() {
  return (
    <section className="space-y-6">
      {/* title */}
      <SectionHeader
        title="Welcome back, Jane"
        description="Let's get right into it."
      />

      {/* Stats cards */}
      <div className="grid grid-cols-5 gap-4">
        {overviewStatsData.map((stat, index) => (
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

      <section className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="col-span-2 row-span-3 space-y-4">
          {/* Line charts */}
          <CustomLineChart />

          {/* Tables */}
          <CardWrapper title="Recent Orders">
            <Table headers={orderHeaders} data={ordersData} className="" />
          </CardWrapper>
        </div>

        <div className="col-span-1 row-span-3">
          {/* Top regions */}
          <CardWrapper title="Top Regions">
            <Table headers={regionHeaders} data={regionData} className="" />
          </CardWrapper>
        </div>
      </section>
    </section>
  );
}
