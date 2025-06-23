import React, { useState } from "react";
import Select from "react-select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import forecastData from "../../data/forecastData.json";

const Forecast = () => {
  const locations = forecastData.map((loc) => ({
    value: loc.location,
    label: loc.location,
  }));

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const data = forecastData.find((d) => d.location === selectedLocation.value);

  const chartData = data.days.map((val, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    demand: val,
  }));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Demand Forecast</h2>
        <div className="w-64">
          <Select
            options={locations}
            value={selectedLocation}
            onChange={setSelectedLocation}
            placeholder="Select location"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Predicted Stockout Cities</p>
          <h3 className="text-xl font-semibold text-blue-700">6</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Trending Product</p>
          <h3 className="text-xl font-semibold text-blue-700">{data.trendingProduct}</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Social Trend Spike</p>
          <h3 className="text-xl font-semibold text-blue-700">{data.socialSpike} in {data.location}</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <p className="text-sm text-gray-500">Forecasted Demand</p>
        <h3 className="text-2xl font-semibold text-green-600">
          +{data.forecastPercent}% <span className="text-sm text-gray-500">Next 7 days</span>
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="demand" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h4 className="text-lg font-bold mb-2 text-blue-700">AI Suggestions</h4>
        <ul className="list-disc pl-5 text-gray-600">
          {data.aiSuggestions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forecast;
