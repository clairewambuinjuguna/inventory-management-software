"use client";
import React from "react";
import Link from "next/link";

export default function OptionCard({ optionData }) {
  const {
    title,
    description,
    link,
    linkTitle,
    enabled,
    icon: Icon,
  } = optionData;
  return (
    <div>
      <div className="shadow-md bg-white flex flex-col items-center justify-center gap-6 py-8 px-16 rounded-sm">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div>
          <Icon strokeWidth="0.5px" className="w-36 h-36" />
        </div>
        <p className="line-clamp-1">{description}</p>
        {enabled ? (
          <Link
            href={link}
            className="bg-blue-600 rounded-sm py-2 inline-flex items-center space-x-2 px-3 text-white"
          >
            {linkTitle}
          </Link>
        ) : (
          <button className="bg-blue-600 rounded-sm py-2 inline-flex items-center space-x-2 px-3 text-white">
            Enable
          </button>
        )}
      </div>
    </div>
  );
}
