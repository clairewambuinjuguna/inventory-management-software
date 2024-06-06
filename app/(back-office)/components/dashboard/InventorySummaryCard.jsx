import React from 'react'

export default function InventorySummaryCard({item}) {
  return (
     <div
        // key={i}
        className="mb-4 rounded-lg border shadow border-slate-200 hover:border-blue-400 bg-white py-2 px-4 cursor-pointer flex gap-3 items-center justify-between transition-all duration-300"
      >
        <h2 className="uppercase text-sm text-slate-500">{item.title}</h2>
        <h4 className=" text-2xl">{item.number}</h4>
      </div>
    
  );
}
