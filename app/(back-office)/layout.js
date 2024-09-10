import React from "react";
import Header from "./components/dashboard/Header";
import Sidebar from "./components/dashboard/Sidebar";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className=" sm:ml-60  ml-0  sm:block w-full bg-slate-100  min-h-screen ">
        <Header />
        {children}
      </main>
    </div>
  );
}
