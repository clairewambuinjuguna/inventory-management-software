import React from 'react'

export default function TextInput({
  label,
  name,
  isrequired = true,
  register,
  type = "text",
  className = "sm:col-span-2",
}) {
  return (
    <div>
      <div className={className}>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            {...register(
              <div className="sm:col-span-2">
                <label
                  htmlFor={name}
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                >
                  {label}
                </label>
                <div className="mt-2">
                  <input
                    {...register({ name }, { required: isrequired })}
                    type={type}
                    name={name}
                    id={name}
                    autoComplete={name}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Type the Category title"
                  />
                  {errors.title && (
                    <span className="text-sm text-red-600 ">
                      Category title is required
                    </span>
                  )}
                </div>
              </div>,
              { required: isrequired }
            )}
            type="text"
            name={name}
            id={name}
            autoComplete={name}
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            placeholder="Type the Category title"
          />
          {errors.title && (
            <span className="text-sm text-red-600 ">
              Category title is required
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
