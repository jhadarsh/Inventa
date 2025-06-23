import React from "react";
import inventoryData from "../../data/inventoryData.json";

export default function Inventory() {
  const getStatusIcon = (stock) => {
    if (stock >= 10) return <span className="text-green-500 text-xl">✅</span>;
    if (stock > 1) return <span className="text-yellow-500 text-xl">⚠️</span>;
    return <span className="text-red-500 text-xl">●</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Inventory</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow border">
        <table className="min-w-full table-auto text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-6 py-3">Product ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4 text-blue-600">{item.location}</td>
                <td className="px-6 py-4">{item.stock} units</td>
                <td className="px-6 py-4">{getStatusIcon(item.stock)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
