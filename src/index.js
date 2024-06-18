import React, { lazy, Suspense } from "react";
import { Skeleton } from "primereact/skeleton";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  HashRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Notfound from "./Screens/Notfound/Notfound";
import { Democontext, loadingContext } from "./Context/Democontext";
import Loader from "./Components/Loader";
import Noresult from "./Screens/Noresult/Noresult";
import Bill from "./Screens/Bill/Bill";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Auth = lazy(() => import("./Screens/Auth/Auth"));
const Signin = lazy(() => import("./Screens/Auth/Signin"));
const Home = lazy(() => import("./Screens/Homescreen/Home"));
const HomeScreen = lazy(() => import("./Screens/Homescreen/HomeScreen"));
const Reports = lazy(() => import("./Screens/Reports/Reports"));
const SaleReport = lazy(() => import("./Screens/Reports/SaleReport"));
const BillingReport = lazy(() => import("./Screens/Reports/BillingReport"));
const PaymodeReport = lazy(() => import("./Screens/Reports/PaymodeReport"));
const Userwise = lazy(() => import("./Screens/Reports/Userwise"));
const Gststatement = lazy(() => import("./Screens/Reports/Gststatement"));
const Gstsummary = lazy(() => import("./Screens/Reports/Gstsummary"));
const RefundReport = lazy(() => import("./Screens/Reports/RefundReport"));
const CreditReport = lazy(() => import("./Screens/Reports/CreditReport"));
const SearchComp = lazy(() => import("./Screens/Search/SearchComp"));
const Bydata = lazy(() => import("./Screens/Search/Bydata"));
const Byphone = lazy(() => import("./Screens/Search/Byphone"));
const Byprod = lazy(() => import("./Screens/Search/Byprod"));
const SuperAdminComp = lazy(() =>
  import("./Screens/SuperAdmin/SuperAdminComp")
);
const ManageUsers = lazy(() => import("./Screens/SuperAdmin/ManageUsers"));
const ManageOutlets = lazy(() => import("./Screens/SuperAdmin/ManageOutlets"));
const ManageShopsComp = lazy(() =>
  import("./Screens/SuperAdmin/ManageShops/ManageShopsComp")
);
const ManageShopsView = lazy(() =>
  import("./Screens/SuperAdmin/ManageShops/ManageShopsView")
);
const ManageShopsAddEdit = lazy(() =>
  import("./Screens/SuperAdmin/ManageShops/ManageShopsAddEdit")
);
const ManageLocations = lazy(() =>
  import("./Screens/SuperAdmin/ManageLocations")
);
const Settings = lazy(() => import("./Screens/Settings/Settings"));
const Unit = lazy(() => import("./Screens/Unit/Unit"));
const ItemDetails = lazy(() => import("./Screens/Item Details/ItemDetails"));
const ItemDetailsView = lazy(() =>
  import("./Screens/Item Details/ItemDetailsView")
);
const AddDetails = lazy(() => import("./Screens/Item Details/AddDetails"));
const PrintBill = lazy(() => import("./Screens/Search/PrintBill"));
const HeaderFooterComp = lazy(() =>
  import("./Screens/HeaderFooter/HeaderFooterComp")
);
const HeaderFooterView = lazy(() =>
  import("./Screens/HeaderFooter/HeaderFooterView")
);
const HeaderFooterEdit = lazy(() =>
  import("./Screens/HeaderFooter/HeaderFooterEdit")
);
const CustomerComp = lazy(() => import("./Screens/Customer/CustomerComp"));
const CustomerView = lazy(() => import("./Screens/Customer/CustomerView"));
const CustomerAddEdit = lazy(() =>
  import("./Screens/Customer/CustomerAddEdit")
);
const UserComp = lazy(() => import("./Screens/User/UserComp"));
const UserView = lazy(() => import("./Screens/User/UserView"));
const AddUser = lazy(() => import("./Screens/User/AddUser"));
const StockComp = lazy(() => import("./Screens/Stock/StockComp"));
const StockView = lazy(() => import("./Screens/Stock/StockView"));
const StockEdit = lazy(() => import("./Screens/Stock/StockEdit"));
const CategoryComp = lazy(() => import("./Screens/Categories/CategoryComp"));
const CategoryView = lazy(() => import("./Screens/Categories/CategoryView"));
const CategoryAdd = lazy(() => import("./Screens/Categories/CategoryAdd"));
const Itemwise = lazy(() => import("./Screens/Reports/Itemwise"));
const DaybookReport = lazy(() => import("./Screens/Reports/DaybookReport"));
const CancelBillReport = lazy(() =>
  import("./Screens/Reports/CancelBillReport")
);
const OutletComp = lazy(() => import("./Screens/Outlet/OutletComp"));
const OutletView = lazy(() => import("./Screens/Outlet/OutletView"));
const OutletAddEdit = lazy(() => import("./Screens/Outlet/OutletAddEdit"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Auth />,
        children: [
          {
            path: "",
            element: <Signin />,
          },
        ],
      },
      {
        path: "home",
        element: <Home />,

        children: [
          {
            path: "",
            // element: <HomeScreen />,
            // redirect:'report'
            redirect: "report/daybook",
          },
          {
            path: "report",

            element: <Reports />,
            children: [
              {
                path: "salereport",
                element: <SaleReport />,
              },
              {
                path: "billreport",
                element: <BillingReport />,
              },
              {
                path: "paymode",
                element: <PaymodeReport />,
              },
              {
                path: "userwise",
                element: <Userwise />,
              },
              {
                path: "gststatement",
                element: <Gststatement />,
              },
              {
                path: "gstsummary",
                element: <Gstsummary />,
              },
              {
                path: "refundreport",
                element: <RefundReport />,
              },
              {
                path: "creditreport",
                element: <CreditReport />,
              },
              {
                path: "itemwisereport",
                element: <Itemwise />,
              },
              {
                path: "daybook",
                element: <DaybookReport />,
              },
              ,
              {
                path: "cancelbill",
                element: <CancelBillReport />,
              },
            ],
          },
          {
            path: "search",

            element: <SearchComp />,
            children: [
              {
                path: "bydate",
                element: <Bydata />,
              },
              {
                path: "byphone",
                element: <Byphone />,
              },
              {
                path: "byproduct",
                element: <Byprod />,
              },
              {
                path: "printbill/:id/:user",
                element: <PrintBill />,
              },
            ],
          },
          {
            path: "superadmin",

            element: <SuperAdminComp />,
            children: [
              {
                path: "manageshops",
                element: <ManageShopsComp />,
                children: [
                  {
                    path: "view",
                    element: <ManageShopsView />,
                  },
                  {
                    path: "manageshop/:id",
                    element: <ManageShopsAddEdit />,
                  },
                ],
              },
              {
                path: "manageoutlets",
                element: <ManageOutlets />,
              },
              {
                path: "manageusers",
                element: <ManageUsers />,
              },
              {
                path: "managelocations",
                element: <ManageLocations />,
              },
            ],
          },
          {
            path: "itemdetails",

            element: <ItemDetails />,
            children: [
              {
                path: "view",
                element: <ItemDetailsView />,
              },
              {
                path: "adddetails/:id",
                element: <AddDetails />,
              },
            ],
          },
          {
            path: "headerfooter",

            element: <HeaderFooterComp />,
            children: [
              {
                path: "view",
                element: <HeaderFooterView />,
              },
              {
                path: "hfdetails",
                element: <HeaderFooterEdit />,
              },
            ],
          },
          {
            path: "customer",

            element: <CustomerComp />,
            children: [
              {
                path: "view",
                element: <CustomerView />,
              },
              {
                path: "custEdit/:id",
                element: <CustomerAddEdit />,
              },
            ],
          },
          {
            path: "usermng",

            element: <UserComp />,
            children: [
              {
                path: "view",
                element: <UserView />,
              },
              {
                path: "usermngadd",
                element: <AddUser />,
              },
            ],
          },
          {
            path: "stock",

            element: <StockComp />,
            children: [
              {
                path: "view",
                element: <StockView />,
              },
              {
                path: "stockedit/:id/:br_id",
                element: <StockEdit />,
              },
            ],
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "unit",
            element: <Unit />,
          },
          {
            path: "category",
            element: <CategoryComp />,
            children: [
              {
                path: "view",
                element: <CategoryView />,
              },
              {
                path: "categoryedit/:id",
                element: <CategoryAdd />,
              },
            ],
          },
          {
            path: "outlet",
            element: <OutletComp />,
            children: [
              {
                path: "view",
                element: <OutletView />,
              },
              {
                path: "outletaddedit/:id",
                element: <OutletAddEdit />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "bill/:id",
    element: <Bill />,
  },
  {
    path: "noresult/:code/:msg",
    element: <Noresult />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
root.render(
  <Democontext>
    <Suspense
      fallback={
        <>
          {/* <Skeleton className='mt-12 mx-16' title={true} paragraph={true} rows={10} active size={'large'} />
    <Skeleton className='mt-12 mx-16' title={true} paragraph={true} rows={10} active size={'large'} />
    <Skeleton className='mt-12 mx-16' title={true} paragraph={true} rows={10} active size={'large'} />
     */}
          <Skeleton className="mb-2 w-full" height="6rem"></Skeleton>
          <div className="flex">
            <Skeleton
              className="sm:block hidden"
              height="100rem"
              width="22rem"></Skeleton>
            <Skeleton className="sm:ml-8 m-1 w-96" height="40rem"></Skeleton>
          </div>
        </>
      }>
      <Loader />
      <RouterProvider router={router} />
    </Suspense>
  </Democontext>
);

{
  /* <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode> */
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
