"use client";
import TextInput from "@/app/(back-office)/components/Forminputs/TextInput";
import FormHeader from "@/app/(back-office)/components/dashboard/FormHeader";
import { PackageMinus, PackagePlus, X } from "lucide-react";
import Link from "next/link";
import React from "react";

import { useState } from "react";

import TransferInventoryForm from "@/app/(back-office)/components/dashboard/TransferInventoryForm";
import AddInventoryForm from "@/app/(back-office)/components/dashboard/AddInventoryForm";
export default function AdjustmentForm({items,branches}) {
  const tabs = [
    {
      title: "Add Stock",
      Icon: PackagePlus,
      form: "add",
    },
    {
      title: "Transfer Stock",
      Icon: PackageMinus,
      form: "transfer",
    },
  ];
  const [activeForm, setActiveForm] = useState("add");
  return (
    <div>
      {/*header*/}
      <FormHeader title="New Adjustment" href="/dashboard/inventory/adjustments" />
      {/*Form*/}

      <div className="border-b border-gray-200 dark:border-gray-700 w-full max-w-4xl px-4 py-2 my-4 bg-white border    mx-auto ">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((tab, i) => {
            const Icon = tab.Icon;
            return (
              <li className="me-2" key={i}>
                <button
                  onClick={() => setActiveForm(tab.form)}
                  className={`inline-flex items-center justify-center p-4 ${
                    activeForm === tab.form
                      ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                      : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500" />
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {activeForm === "add" ? <AddInventoryForm items={items} branches={branches}/> : <TransferInventoryForm items={items} branches={branches}/>}
    </div>
  );
}
