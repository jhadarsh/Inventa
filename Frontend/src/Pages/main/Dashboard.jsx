import React, { useEffect, useState } from "react";
import metricsData from "../../data/metrics.json";

export default function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    setMetrics(metricsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="px-10 py-12 text-center bg-gradient-to-br from-blue-100 to-white">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Transforming Retail Supply Chains
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Explore how Inventa optimizes supply chains using AI, ML, and automation.
        </p>
      </section>

      <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-sm text-gray-500">{m.label}</div>
            <div className="text-2xl font-semibold text-blue-800 mt-1">{m.value}</div>
          </div>
        ))}
      </section>

      <section className="px-10 pb-20">
        <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Alert</h2>
          <div className="text-blue-600">⚠️ Low stock for Product #893 at Chennai DC</div>
        </div>
      </section>
    </div>
  );
}
