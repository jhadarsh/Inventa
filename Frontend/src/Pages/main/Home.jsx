// src/Pages/main/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Inventory",
    desc: "Optimize stock placement and levels in real time across Walmart's fulfillment centers.",
    icon: "📦"
  },
  {
    title: "Predictive Forecasting",
    desc: "Anticipate demand patterns using weather, economic trends, and regional insights.",
    icon: "📈"
  },
  {
    title: "Smart Warehousing",
    desc: "IoT-driven logistics for zero-waste, high-precision storage and dispatching.",
    icon: "🏬"
  },
  {
    title: "Last-Mile Optimization",
    desc: "AI-enhanced route planning with drone delivery and EV fleets.",
    icon: "🚚"
  },
  {
    title: "Omnichannel Fulfillment",
    desc: "Seamless integration of online + offline retail with real-time inventory sync.",
    icon: "🛒"
  },
  {
    title: "Blockchain Traceability",
    desc: "Transparent farm-to-store tracking for critical supply chains like seafood.",
    icon: "🔗"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Hero Section */}
      <header className="text-center px-6 pt-20 pb-12 bg-gradient-to-r from-blue-100 to-white">
        <motion.h1
          className="text-5xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transforming Retail Supply Chains
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          From inventory management to last-mile delivery, tech-driven logistics ensure customers receive what they need, when they need it—at scale.
        </p>
        <div className="mt-8">
          <Link to="/dashboard">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Explore Dashboard
            </button>
          </Link>
        </div>
      </header>

      {/* Quote Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic text-gray-700 border-l-4 border-blue-500 pl-4">
            “Efficiency is the foundation of modern retail. Technology is its engine.”
          </blockquote>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-blue-900">Core Innovations at Inventa</h2>
          <p className="text-gray-600 mt-2">Smart solutions for intelligent retail.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-14 text-white text-center px-6">
        <h3 className="text-2xl font-bold">Shape the Future of Retail with Inventa</h3>
        <p className="text-sm mt-2 mb-6">
          Innovate smarter supply chains using AI, automation and data-driven intelligence. Build. Scale. Optimize.
        </p>
        <Link to="/about">
          <button className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Learn More
          </button>
        </Link>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; 2025 Inventa. Built with 💡 for smarter supply chain innovation.
      </footer>
    </div>
  );
}
