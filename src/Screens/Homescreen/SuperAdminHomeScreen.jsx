import { Button } from "primereact/button";
import { Chart } from "primereact/chart";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Menu } from "primereact/menu";
import React, { useContext, useEffect, useRef, useState } from "react";
// import { ProductService } from "../../demo/service/ProductService";
// import { LayoutContext } from "../../layout/context/layoutcontext";
// import Link from "next/link";
// import { Demo } from "@/types";
// import { ChartData, ChartOptions } from "chart.js";

import "./HomeScreen.css";
import { Card, Col, Row, Statistic } from "antd";
import DashboardCard from "../../Components/DashboardCard";
import useAPI from "../../Hooks/useApi";

const SuperAdminHomeScreen = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [called, setCalled] = useState(false);
  const [users, setUsers] = useState();
  const { response, callApi } = useAPI();
  var comp;

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Profit", "Loss", "Average"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--red-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--red-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const [chartDataLine, setChartDataLine] = useState({});
  const [chartOptionsLine, setChartOptionsLine] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue("--teal-500"),
        },
        {
          label: "Third Dataset",
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyle.getPropertyValue("--orange-500"),
          tension: 0.4,
          backgroundColor: "rgba(255,167,38,0.2)",
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartDataLine(data);
    setChartOptionsLine(options);
  }, []);

  let DASHBOARD_DATA = [];

  useEffect(() => {
    comp = localStorage.getItem("comp_id");
    callApi("/admin/user_list", 1, { comp_id: +comp, br_id: 0 });
    setCalled(!called);
  }, []);

  useEffect(() => {
    setUsers(response?.data?.msg);
    setCalled(!called);
  }, [called]);

  // useEffect(() => {
  DASHBOARD_DATA = [
    {
      header: "Users",
      body: users?.length?.toString(),
      footerNumber: "24",
      footerText: "new since last visit",
      borderColor: "border-pink-200",
      primaryTextColor: "text-pink-900",
      secondaryColor: "bg-pink-200",
      svg: "bg-ani",
    },
    {
      header: "Cash",
      body: "152",
      footerNumber: "24",
      footerText: "new since last visit",
      borderColor: "border-green-200",
      primaryTextColor: "text-green-900",
      secondaryColor: "bg-green-200",
      svg: "bg-anitwo",
    },
    {
      header: "Stocks",
      body: "152",
      footerNumber: "24",
      footerText: "new since last visit",
      borderColor: "border-purple-300",
      primaryTextColor: "text-blue-900",
      secondaryColor: "bg-blue-100",
      svg: "bg-ani3",
    },
    {
      header: "Bills",
      body: "152",
      footerNumber: "24",
      footerText: "new since last visit",
      borderColor: "border-amber-200",
      primaryTextColor: "text-amber-900",
      secondaryColor: "bg-amber-200",
      svg: "bg-ani4",
    },
  ];
  // }, []);

  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-4 gap-4">
        {DASHBOARD_DATA?.map((item, i) => (
          <div key={i} className="col-span-1 sm:w-full">
            <DashboardCard
              header={item?.header}
              body={item?.body}
              footerNumber={item?.footerNumber}
              footerText={item?.footerText}
              borderColor={item?.borderColor}
              primaryTextColor={item?.primaryTextColor}
              secondaryColor={item?.secondaryColor}
              svg={item?.svg}
            />
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-5 gap-5 my-10 align-middle -z-50">
        <div className="col-span-2 bg-white z-10 rounded-2xl flex justify-center items-center shadow-xl h-fit p-10">
          <Chart
            type="doughnut"
            data={chartData}
            options={chartOptions}
            style={{
              width: "70%",
              height: 350,
            }}
          />
        </div>
        <div className="col-span-3 bg-white z-10 rounded-2xl flex justify-center items-center shadow-xl h-fit p-10">
          <Chart
            type="line"
            data={chartDataLine}
            options={chartOptionsLine}
            // height="380px"
            className="my-16"
            style={{
              width: "90%",
              height: 350,
            }}
          />
        </div>
      </div> */}
    </>
  );
};

export default SuperAdminHomeScreen;
