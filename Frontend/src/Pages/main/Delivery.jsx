import React, { useState } from "react";
import deliveryData from "../../data/deliveryData.json";

const Delivery = () => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCity, setFilterCity] = useState("All");

  // Status filter handler
  const handleStatusFilter = (status) => setFilterStatus(status);
  // City filter handler
  const handleCityFilter = (city) => setFilterCity(city);

  // Get all unique cities from the dataset
  const cities = ["All", ...new Set(deliveryData.map((item) => item.city))];

  // Filtered dataset based on status and city
  const filteredData = deliveryData.filter((item) => {
    const matchStatus = filterStatus === "All" || item.status === filterStatus;
    const matchCity = filterCity === "All" || item.city === filterCity;
    return matchStatus && matchCity;
  });

  // Convert ETA string (e.g., "1h 45m") to hours
  const convertETAtoHours = (eta) => {
    const hoursMatch = eta.match(/(\d+)h/);
    const minsMatch = eta.match(/(\d+)m/);
    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const mins = minsMatch ? parseInt(minsMatch[1]) : 0;
    return hours + mins / 60;
  };

  // Calculate average ETA
  const avgETA =
    filteredData.length > 0
      ? (
          filteredData.reduce((sum, item) => sum + convertETAtoHours(item.eta), 0) /
          filteredData.length
        ).toFixed(1)
      : "0";

  // Estimate total emissions reduced
  const emissionsReduced = filteredData
    .reduce((sum, item) => {
      if (item.type === "Green Delivery") return sum + 0.3;
      if (item.type === "Express") return sum + 0.1;
      if (item.type === "Standard") return sum + 0.05;
      return sum;
    }, 0)
    .toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-blue-800">Last-Mile Orchestration</h1>
        <div className="flex flex-wrap gap-2">
          {["All", "En Route", "Delayed"].map((status) => (
            <button
              key={status}
              onClick={() => handleStatusFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                filterStatus === status
                  ? "bg-blue-600 text-white"
                  : "border-blue-300 text-blue-600 hover:bg-blue-100"
              }`}
            >
              {status}
            </button>
          ))}
          {/* City Dropdown */}
          <select
            value={filterCity}
            onChange={(e) => handleCityFilter(e.target.value)}
            className="px-4 py-2 rounded-full text-sm border border-blue-300 text-blue-600 bg-white hover:bg-blue-50 transition"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-sm text-gray-500">Average Delivery Time</h3>
          <h2 className="text-2xl font-bold text-blue-700 mt-2">{avgETA} hrs</h2>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-sm text-gray-500">Emissions Reduced</h3>
          <h2 className="text-2xl font-bold text-green-600 mt-2">{emissionsReduced} tons CO₂</h2>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-50 text-blue-800 text-sm uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">City</th>
              <th className="px-6 py-3 text-left">Fulfilled From</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">ETA</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{item.orderId}</td>
                <td className="px-6 py-4">{item.city}</td>
                <td className="px-6 py-4">{item.fulfilledFrom}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">{item.eta}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      item.status === "En Route"
                        ? "bg-green-500"
                        : item.status === "Delayed"
                        ? "bg-yellow-400"
                        : "bg-gray-400"
                    }`}
                  ></span>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Delivery;
