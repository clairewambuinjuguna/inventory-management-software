"use client";
import React from "react";
import FixedHeader from "../../components/dashboard/FixedHeader";
import {
  Component,
  Edit,
  LayoutGrid,
  LayoutPanelTop,
  Scale,
  Tag,
  Warehouse,
} from "lucide-react";

import OptionCard from "../../components/dashboard/OptionCard";
export default function Inventory() {
  const optionsCard = [
    {
      title: "Items",
      description:
        "Create standalone items and services that you buy and sell.",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: LayoutGrid,
    },
    {
      title: "Categories",
      description: "Bundle different items together and sell them as kits.",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Composite Item",
      enabled: true,
      icon: LayoutPanelTop,
    },

    {
      title: "Brands",
      description:
        "Tweak your item prices for specific contacts or transactions.",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Tag,
    },
    {
      title: "Warehouse",
      description:
        "Tweak your item prices for specific contacts or transactions.",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Warehouse,
    },
    {
      title: "Units",
      description:
        "Tweak your item prices for specific contacts or transactions.",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: Scale,
    },
    {
      title: "Inventory Adjustment",
      description: "Transfer stock from the Main Warehouse",
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustment",
      enabled: true,
      icon: Edit,
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 m-4 gap-6 ">
        {optionsCard.map((card, i) => (
          <OptionCard key={i} optionData={card} />
        ))}
      </div>
    </div>
  );
}
