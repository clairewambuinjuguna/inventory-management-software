import React from "react";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
export default function CollapsibleLink({ href, title }) {
  return (
    <div>
      <Link
        className="flex items-center justify-between pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 py-2 rounded-xl space-x-3"
        href={href}
      >
        <span className="text-sm">{title}</span>
        <PlusCircle className="w-4 h-4" />
      </Link>
    </div>
  );
}
