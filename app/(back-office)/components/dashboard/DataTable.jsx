import React from "react";

export default function DataTable({data,columns}) {
   
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr>
          {
            columns.map((item,i)=>{
                return (
                  <th key={i} scope="col " className="px-6 py-3">
                    {item}
                  </th>
                );
            })
          }
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,i)=>{
                return (
                  <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">{item.description}</td>

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
