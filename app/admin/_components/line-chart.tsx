"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label, // Import Label
} from "recharts";
import CardWrapper from "./card-wrapper";

function CustomAreaChart() {
  const data = [
    { day: "Mon", sales: 400000 },
    { day: "Tue", sales: 600000 },
    { day: "Wed", sales: 800000 },
    { day: "Thu", sales: 700000 },
    { day: "Fri", sales: 500000 },
    { day: "Sat", sales: 900000 },
    { day: "Sun", sales: 600000 },
  ];

  const totalSales = 865000; // Total sales amount
  const percentageChange = "+12.00%"; // Percentage change

  // Helper function to format Y-axis values
  const formatYAxis = (value: number): string => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`; // Format for millions
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`; // Format for thousands
    }
    return value.toString(); // Return the original value as a string if less than 1000
  };

  return (
    <CardWrapper>
      <h2 className="text-sm text-mutedText">Sales statistics</h2>
      <div className="space-x-2">
        <span className="text-xl font-semibold">TZS {totalSales}</span>
        <span className="text-green-600">{percentageChange}</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#4CAF50"
            fill="#D0E9D0"
          />
          <CartesianGrid strokeDasharray="5 0" vertical={false} />
          <XAxis dataKey="day" className="text-xs">
            <Label
              value="Days of the Week"
              offset={-5}
              position="insideBottom"
            />
          </XAxis>
          <YAxis
            className="text-xs"
            tickFormatter={formatYAxis}
            axisLine={false}
          >
            <Label
              //   value="Sales (TZS)"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip formatter={(value) => [`TZS ${value}`, "Sales"]} />
        </AreaChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default CustomAreaChart;
