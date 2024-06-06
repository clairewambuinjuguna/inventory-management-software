"use client"
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HomeNav() {
    const pathname=usePathname()
    console.log(pathname)
  const NavLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/overview",
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcements",
    },
  ];
  return (
    <div className="h-32 p-5 header-bg  border-b-2 border-slate-300">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 bg-white rounded-lg items-center justify-center ">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-slate-700">
            Hello Claire Wambui Njuguna
          </p>
          <span className="text-sm">DIL</span>
        </div>
      </div>
      <nav className="sticky mt-6  space-x-3">
        {NavLinks.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={`${pathname===item.href?"py-3 border-b-2 border-blue-600":"py-1"}`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
