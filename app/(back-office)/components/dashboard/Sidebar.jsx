"use client";
import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  Files,
  Home,
  PlusCircle,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

import CollapsibleLink from "./CollapsibleLink";
import SidebarDropdownLink from "./SidebarDropdownLink";

export default function Sidebar({ showSidebar,setShowSidebar }) {
  console.log(showSidebar);
  const InventoryLinks = [
    {
      title: "All",
      href: "/dashboard/inventory",
      href2: "/dashboard/inventory",
    },
    {
      title: "Items",
      href: "/dashboard/inventory/items",
      href2: "/dashboard/inventory/items/new",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory/categories",
      href2: "/dashboard/inventory/categories/new",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory/brands",
      href2: "/dashboard/inventory/brands/new",
    },
    {
      title: "Units",
      href: "/dashboard/inventory/units",
      href2: "/dashboard/inventory/units/new",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/warehouse",
      href2: "/dashboard/inventory/warehouse/new",
    },
    {
      title: "Inventory Adjustments",
      href: "/dashboard/inventory/adjustments",
      href2: "/dashboard/inventory/adjustments/new",
    },
    {
      title: "Supplier",
      href: "/dashboard/inventory/supplier",
      href2: "/dashboard/inventory/supplier/new",
    },
  ];
  const SalesLinks = [
    {
      title: "Customers",
      href: "#",
      href2: "/dashboard/inventory/items/new",
    },
    {
      title: "Sales Orders",
      href: "#",
      href2: "/dashboard/inventory/items/new",
    },
    {
      title: "Shipments",
      href: "#",
      href2: "/dashboard/inventory/items/new",
    },
    {
      title: "Invoices",
      href: "#",
      href2: "/dashboard/inventory/items/new",
    },
    {
      title: "Sales Receipts",
      href: "#",
      href2: "/dashboard/inventory/items/new",
    },
    {
      title: "Payment Received",
      href: "#",
      href2: "/dashboard/inventory/items/new",
    },
    {
      title: "Sales Returns",
      href: "#",
      href2: "/dashboard/inventory/items/new",
    },
    {
      title: "Credit Notes",
      href: "#",
      href2: "/dashboard/inventory/items/new",
    },
  ];
  return (
    <div
      className={`${
        showSidebar
          ? "w-60 min-h-screen  bg-slate-800 text-slate-50 fixed lg:block z-50"
          : "w-60 min-h-screen  bg-slate-800 text-slate-50 fixed hidden lg:block z-50"
      }`}
    >
      {/*Top */}
      <div className="flex flex-col ">
        {/* Logo*/}
        <div className="flex">
          <Link
            href="#"
            className=" bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full"
          >
            <ShoppingCart />
            <span className="font-semibold text-xl">Inventory</span>
          </Link>
          <button
            className="bg-slate-950 px-2 py-2 lg:hidden"
            onClick={() => setShowSidebar(false)}
          >
            <X className="w-6 h-6 justify-between text-white " />
          </button>
        </div>
        {/* LINKS*/}
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="/"
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2  rounded-md"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <SidebarDropdownLink
            title="Inventory"
            items={InventoryLinks}
            icon={BaggageClaim}
            setShowSidebar={setShowSidebar}
          />
          <SidebarDropdownLink
            title="Sales"
            items={SalesLinks}
            icon={ShoppingBasket}
          />

          <button className="flex items-center space-x-2 p-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Purchases</span>
          </button>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <BarChart4 className="w-4 h-4" />
            <span>Reports</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <Files className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
        <SubscriptionCard />
      </div>
      {/*Bottom */}
      <div className="flex flex-col ">
        <button className=" bg-slate-950 flex space-x-2 items-center py-3 px-2 justify-center ">
          <ChevronLeft />
        </button>
      </div>
      {/*Subscription Card */}
      {/*Footer Icon */}
    </div>
  );
}
