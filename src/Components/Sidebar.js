import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd";

import {
  AppstoreOutlined,
  CalendarOutlined,
  SettingOutlined,
  TableOutlined,
  DashboardOutlined,
  BookOutlined,
  BarChartOutlined,
  CloseCircleOutlined,
  OrderedListOutlined,
  UserSwitchOutlined,
  CreditCardOutlined,
  FileSearchOutlined,
  PhoneOutlined,
  ProductOutlined,
  MoneyCollectOutlined,
  ProfileOutlined,
  AlignCenterOutlined,
  DatabaseOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  GlobalOutlined,
  AccountBookOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import IMG from "../Assets/Images/mainlogo.png";

function SidebarComp() {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  const items = [
    //   {
    //     key: '1',
    //     icon: <DashboardOutlined />,
    //     label:
    //     (
    //       <div className={location.pathname.includes('bydate')?'bg-blue-900 text-white flex items-center p-2 my-2 rounded-lg dark:text-white hover:bg-blue-900 hover:duration-100   dark:hover:bg-gray-700 group':'flex items-center p-2 text-gray-600 rounded-lg dark:text-white hover:bg-blue-900 hover:duration-100   dark:hover:bg-gray-700 group'}>
    // <Link to={'/home'} >
    //     Dashboard
    //     </Link>
    //     </div>
    //     )
    //   },

    {
      key: "sub1",
      label: "Reports",
      icon: (
        <TableOutlined
          className={
            location.pathname.includes("report")
              ? "  font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white hover:duration-100  dark:hover:bg-gray-700 group"
              : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
          }
        />
      ),
      children: [
        {
          key: "3",
          icon: (
            <BookOutlined
              className={
                location.pathname.includes("report/daybook")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/daybook")
                  ? "  font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/daybook"}>Day book </Link>
            </div>
          ),
        },
        {
          key: "4",
          icon: (
            <BarChartOutlined
              className={
                location.pathname.includes("report/salereport")
                  ? "  font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-300 hover:duration-100  dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/salereport")
                  ? "  font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white hover:duration-100  dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/salereport"}>Sale Report</Link>{" "}
            </div>
          ),
        },
        {
          key: "5",
          icon: (
            <CloseCircleOutlined
              className={
                location.pathname.includes("report/cancelbill")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/cancelbill")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/cancelbill"}>Cancelled Bill Report</Link>
            </div>
          ),
        },
        {
          key: "6",
          icon: (
            <OrderedListOutlined
              className={
                location.pathname.includes("report/itemwise")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/itemwise")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/itemwisereport"}>Itemwise Report</Link>
            </div>
          ),
        },
        {
          key: "7",
          icon: (
            <UserSwitchOutlined
              className={
                location.pathname.includes("report/userwise")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/userwise")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/userwise"}>Userwise Summary</Link>
            </div>
          ),
        },
        {
          key: "71",
          icon: (
            <UserSwitchOutlined
              className={
                location.pathname.includes("report/creditreport")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/creditreport")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/creditreport"}>Credit Report</Link>
            </div>
          ),
        },
        {
          key: "8",
          icon: (
            <CreditCardOutlined
              className={
                location.pathname.includes("report/paymode")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/paymode")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/paymode"}>Pay mode Report </Link>
            </div>
          ),
        },
        {
          key: "81",
          icon: (
            <ProfileOutlined
              className={
                location.pathname.includes("report/recoveryreport")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/recoveryreport")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/recoveryreport"}>Recovery Report</Link>
            </div>
          ),
        },
        {
          key: "82",
          icon: (
            <MoneyCollectOutlined
              className={
                location.pathname.includes("report/duereport")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/duereport")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/duereport"}>Due Report</Link>
            </div>
          ),
        },
        {
          key: "83",
          icon: (
            <UserSwitchOutlined
              className={
                location.pathname.includes("report/customerledger")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("report/customerledger")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"report/customerledger"}>Customer Ledger</Link>
            </div>
          ),
        },
      ],
    },
    {
      key: "sub2",
      label: "Search Bill",
      icon: (
        <FileSearchOutlined
          className={
            location.pathname.includes("search")
              ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
              : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
          }
        />
      ),
      children: [
        {
          key: "9",
          icon: (
            <CalendarOutlined
              className={
                location.pathname.includes("search/bydate")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("search/bydate")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
              }>
              <Link to={"search/bydate"}> By Date</Link>
            </div>
          ),
        },
        {
          key: "10",
          icon: (
            <PhoneOutlined
              className={
                location.pathname.includes("search/byphone")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("search/byphone")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"search/byphone"}>By Phone</Link>
            </div>
          ),
        },
        {
          key: "11",
          icon: (
            <ProductOutlined
              className={
                location.pathname.includes("search/byproduct")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("search/byproduct")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"search/byproduct"}>By Product</Link>
            </div>
          ),
        },
      ],
    },
    // settings
    {
      key: "sub3",
      label: "Settings",
      icon: (
        <SettingOutlined
          className={
            location.pathname.includes("settings")
              ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
              : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
          }
        />
      ),
      children: [
        {
          key: "settingsmain",
          icon: (
            <SettingOutlined
              className={
                location.pathname.includes("settings/settingsmain")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("settings/settingsmain")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"settings/settingsmain"}>Settings Master</Link>
            </div>
          ),
        },
        {
          key: "headerfooter",
          icon: (
            <AlignCenterOutlined
              className={
                location.pathname.includes("settings/headerfooter")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("settings/headerfooter/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"settings/headerfooter/view"}>Header/Footer</Link>
            </div>
          ),
        },
      ],
    },
    {
      key: "sub4",
      label: "Master",
      icon: (
        <ProfileOutlined
          className={
            location.pathname.includes("master")
              ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
              : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
          }
        />
      ),
      children: [
        {
          key: "unit",
          icon: (
            <MoneyCollectOutlined
              className={
                location.pathname.includes("master/unit")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("master/unit")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"master/unit"}>Unit</Link>
            </div>
          ),
        },
        {
          key: "category",
          icon: (
            <AppstoreOutlined
              className={
                location.pathname.includes("master/category")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("master/category")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"master/category/view"}>Category</Link>
            </div>
          ),
        },
        {
          key: "itemdetails",
          icon: (
            <ProfileOutlined
              className={
                location.pathname.includes("master/itemdetails/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("master/itemdetails/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"master/itemdetails/view"}>Item Details</Link>
            </div>
          ),
        },
      ],
    },
    {
      key: "sub33",
      label: "Super Admin",
      icon: (
        <FileSearchOutlined
          className={
            location.pathname.includes("superadmin")
              ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
              : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
          }
        />
      ),
      children: [
        {
          key: "15",
          icon: (
            <ProductOutlined
              className={
                location.pathname.includes("superadmin/managelocations")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("superadmin/managelocations")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"superadmin/managelocations"}>Manage Locations</Link>
            </div>
          ),
        },
        {
          key: "12",
          icon: (
            <CalendarOutlined
              className={
                location.pathname.includes("superadmin/manageshops/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("superadmin/manageshops/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
              }>
              <Link to={"superadmin/manageshops/view"}> Manage Shops</Link>
            </div>
          ),
        },
        {
          key: "13",
          icon: (
            <PhoneOutlined
              className={
                location.pathname.includes("superadmin/manageoutlets/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("superadmin/manageoutlets/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"superadmin/manageoutlets/view"}>Manage Outlets</Link>
            </div>
          ),
        },
        {
          key: "14",
          icon: (
            <ProductOutlined
              className={
                location.pathname.includes("superadmin/manageusers/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("superadmin/manageusers/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"superadmin/manageusers/view"}>Manage Users</Link>
            </div>
          ),
        },
        {
          key: "16",
          icon: (
            <ProductOutlined
              className={
                location.pathname.includes(
                  "superadmin/manageheaderfooters/view"
                )
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes(
                  "superadmin/manageheaderfooters/view"
                )
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"superadmin/manageheaderfooters/view"}>
                Manage Header/Footer
              </Link>
            </div>
          ),
        },
        {
          key: "17",
          icon: (
            <ProductOutlined
              className={
                location.pathname.includes("superadmin/managesettings/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("superadmin/managesettings/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"superadmin/managesettings/view"}>Manage Settings</Link>
            </div>
          ),
        },
      ],
    },

    {
      key: "sub5",
      label: "Manage",
      icon: (
        <TableOutlined
          className={
            location.pathname.includes("manage")
              ? "  font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white hover:duration-100  dark:hover:bg-gray-700 group"
              : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
          }
        />
      ),
      children: [
        {
          key: "stock",
          icon: (
            <DatabaseOutlined
              className={
                location.pathname.includes("manage/stock/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("manage/stock/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"manage/stock/view"}>Stock</Link>
            </div>
          ),
        },

        {
          key: "outlet",
          icon: (
            <GlobalOutlined
              className={
                location.pathname.includes("manage/outlet/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("manage/outlet/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"manage/outlet/view"}>Outlet Managment</Link>
            </div>
          ),
        },
        {
          key: "user",
          icon: (
            <UsergroupAddOutlined
              className={
                location.pathname.includes("manage/usermng/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("manage/usermng/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }>
              <Link to={"manage/usermng/view"}>User Management</Link>
            </div>
          ),
        },
        {
          key: "customer",
          icon: (
            <UserOutlined
              className={
                location.pathname.includes("manage/customer/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
              }
            />
          ),
          label: (
            <div
              className={
                location.pathname.includes("manage/customer/view")
                  ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 text-xs text-wrap group"
                  : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 text-xs text-wrap group"
              }>
              <Link to={"manage/customer/view"}>Customer Management</Link>
            </div>
          ),
        },
      ],
    },
    // {
    //   key: "category",
    //   icon: (
    //     <AppstoreOutlined
    //       className={
    //         location.pathname.includes("category")
    //           ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
    //           : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
    //       }
    //     />
    //   ),
    //   label: (
    //     <div
    //       className={
    //         location.pathname.includes("category")
    //           ? " font-semibold flex items-center p-2 my-2 rounded-lg dark:text-white  hover:duration-100  dark:hover:bg-gray-700 group"
    //           : "flex items-center p-2  rounded-lg dark:text-white  hover:duration-100   dark:hover:bg-gray-700 group"
    //       }>
    //       <Link to={"category/view"}>Category</Link>
    //     </div>
    //   ),
    // },
  ];
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="bg-blue-300">
        <Drawer
          className="md:hidden w-72 p-0"
          placement={placement}
          closable={true}
          onClose={onClose}
          open={open}
          key={placement}>
          <div className="bg-white w-64 flex justify-center py-4">
            <Link
              to={"/home/report/daybook"}
              className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={IMG} className="h-16 mx-5" alt="Flowbite Logo" />
            </Link>
          </div>
          <div className="h-full overflow-y-auto bg-white dark:bg-gray-800 min-h-screen overflow-auto">
            <Menu
              className="mt-4"
              style={{ width: 256 }}
              defaultOpenKeys={[""]}
              mode="inline"
              items={items}
            />
          </div>
        </Drawer>
        <button
          data-drawer-target="separator-sidebar"
          data-drawer-toggle="separator-sidebar"
          onClick={showDrawer}
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm bg-blue-300 text-blue-900 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>

      <aside
        id="separator-sidebar"
        className=" overflow-y-auto fixed top-0 bg-blue-300 left-0 z-40 w-64 max-h-screen transition-transform -translate-x-full overflow-x-hidden sm:translate-x-0"
        aria-label="Sidebar">
        <div className="h-full  bg-blue-300 sticky top-0 dark:bg-gray-800">
          <div className="bg-white w-64 flex justify-center py-4 sticky top-0 z-10">
            <Link
              to={"/home/report/daybook"}
              className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={IMG} className="h-16 mx-5" alt="Flowbite Logo" />
            </Link>
          </div>
          <Menu
            style={{ width: 256 }}
            defaultOpenKeys={[""]}
            mode="inline"
            items={items}
          />
          {/* <div className="bg-white w-64 flex justify-center py-4 fixed bottom-0 z-10">
            <Link
              to={"/home/report/daybook"}
              className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={IMG} className="h-16 mx-5" alt="Flowbite Logo" />
            </Link>
          </div> */}
        </div>
      </aside>
    </>
  );
}

export default SidebarComp;
