import React from "react";
import {
  HelpCircle,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import Link from "next/link";
export default function FixedHeader({ newLink }) {
  return (
    <div className="flex justify-between items-center bg-white py-5 px-4 ">
      {/*New */}
      <button className="text-2xl">All Items</button>
      <div className="flex gap-4">
        <Link
          href={newLink}
          className="bg-blue-600 rounded-sm p-1 flex items-center space-x-2 px-3 text-white"
        >
          <Plus className=" w-4 h-4" />
          <span>New</span>
        </Link>

        {/*New */}
        <div className="flex rounded-md overflow-hidden">
          <button className=" bg-gray-300 p-2 border-r border-gray-400">
            <List className="w-4 h-4" />
          </button>
          <button className=" bg-gray-100 p-2">
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
        {/* Lay out*/}
        {/*More  */}
        <button className="bg-gray-100 p-2">
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {/*Help */}
        <button className="bg-orange-400 p-2 text-white rounded-md">
          <HelpCircle className="w-5 h-5 " />
        </button>
      </div>
    </div>
  );
}
