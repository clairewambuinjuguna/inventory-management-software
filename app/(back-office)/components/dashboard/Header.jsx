import React from "react";
import {
  AlignJustify,
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import SearchInput from "./SearchInput";
import Image from "next/image";
export default function Header({ setShowSidebar }) {
  return (
    <div>
      <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200 ">
        <button className="lg:hidden" onClick={() => setShowSidebar(true)}>
          <AlignJustify className="w-6 h-6" />
        </button>
        <div className="flex gap-3">
          {/*Recent Activities*/}
          <button className="hidden lg:block">
            <History className="w-6 h-6" />
          </button>
          {/*Search*/}
          <SearchInput />
        </div>
        <div className="flex ">
          <div className=" items-center gap-3 hidden lg:flex">
            {/*plus icon  */}
            <div className="pr-2 border-r border-gray-300">
              <button className="bg-blue-600 rounded-lg p-1">
                <Plus className="text-slate-50 w-4 h-4" />
              </button>
            </div>
            <div className="flex border-r border-gray-300 space-x-2">
              <button className="hover:bg-slate-200 rounded-lg p-1">
                <Users className="text-slate-900 w-4 h-4" />
              </button>
              <button className="hover:bg-slate-200 rounded-lg p-1">
                <Bell className="text-slate-900 w-4 h-4" />
              </button>
              <button className="hover:bg-slate-200 rounded-lg p-1">
                <Settings className="text-slate-900 w-4 h-4" />
              </button>
            </div>
          </div>
          {/*  */}

          <div className=" gap-3 ml-3 hidden lg:flex">
            <button className="flex items-center">
              <span>Claire</span>
              <ChevronDown className="w-4 h-3" />
            </button>
            <button>
              <Image
                alt="userimage"
                src="/user.svg"
                width={96}
                height={96}
                className="w-8 h-8 rounded-full border border-slate-800"
              />
            </button>
            <button className="flex items-center">
              <LayoutGrid className="w-6 h-6 te-slate-900" />
            </button>
          </div>
          <button className="lg:hidden">
            <Image
              alt="userimage"
              src="/user.svg"
              width={96}
              height={96}
              className="w-8 h-8 ml-6 rounded-full border border-slate-800"
            />
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
