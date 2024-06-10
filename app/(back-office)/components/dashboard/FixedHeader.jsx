import React from 'react'
import { LayoutGrid, List, Plus } from 'lucide-react';
export default function FixedHeader() {
  return (
    <div className="flex justify-between items-center bg-white py-5 px-4">
      {/*New */}
      <button className="text-2xl">All Items</button>
      <div className="flex">
        <button className="bg-blue-600 rounded-sm p-1 flex items-center space-x-2 px-3 text-white">
          <Plus className=" w-4 h-4" />
          <span>New</span>
        </button>
      </div>
      {/*New */}
      <div className="flex">
        <button>
          <List />
        </button>
        <button>
          <LayoutGrid />
        </button>
      </div>
      {/* Lay out*/}
      {/*More  */}
      {/*Help */}
    </div>
  );
}
