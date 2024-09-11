"use client";
import React, { useState } from "react";
import Header from "./components/dashboard/Header";
import Sidebar from "./components/dashboard/Sidebar";

export default function layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className=" lg:ml-60  ml-0  sm:block w-full bg-slate-100  min-h-screen ">
        <Header setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </div>
  );
}
