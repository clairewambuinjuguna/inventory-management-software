"use client";
import React from "react";
import FixedHeader from "../../components/dashboard/FixedHeader";
import { Boxes, Component, ScrollText, Shirt } from "lucide-react";
import Link from "next/link";
import OptionCard from "../../components/dashboard/OptionCard";
export default function Inventory() {
  const optionsCard = [
    {
      title: "Item Groups",
      description:
        "Create multiple variants of the same item using Item Groups.",
      link: "/new",
      linkTitle: "New Item Group",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Items",
      description:
        "Create standalone items and services that you buy and sell.",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,
    },
    {
      title: "Composite Items",
      description: "Bundle different items together and sell them as kits.",
      link: "/new",
      linkTitle: "New Composite Item",
      enabled: false,
      icon: Component,
    },

    {
      title: "Price Lists",
      description:
        "Tweak your item prices for specific contacts or transactions.",
      link: "/new",
      linkTitle: "New Item",
      enabled: false,
      icon: ScrollText,
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-2 m-4 gap-6 ">
        {optionsCard.map((card, i) => (
          <OptionCard key={i} optionData={card} />
        ))}
      </div>
    </div>
  );
}
