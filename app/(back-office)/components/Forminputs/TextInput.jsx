"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function TextInput({
  label,
  name,
  register,
  errors,
  isrequired = true,
  type = "text",
  className = "sm:col-span-2",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(name, { required: isrequired })}
          type={type}
          name={name}
          id={name}
          autoComplete={name}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-600 focus:border-purple-600 sm:text-sm sm:leading-6"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[name] && (
          <span className="text-sm text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}
