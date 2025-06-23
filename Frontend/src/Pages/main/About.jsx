// src/Pages/main/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-indigo-50 py-20 px-6 text-center shadow-sm">
        <h1 className="text-5xl font-bold text-indigo-700 mb-4">Who We Are</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Inventa is more than a tech platform — we’re a movement driving smart, responsive, and sustainable supply chains for tomorrow’s world.
        </p>
      </section>

      {/* Timeline / Journey Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-10">Our Journey</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Founded in Innovation</h3>
            <p className="text-gray-600 text-sm">
              Born out of a passion for solving real-world logistics challenges with advanced technology and AI.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Growing with Purpose</h3>
            <p className="text-gray-600 text-sm">
              From smart warehousing to last-mile delivery, our tools empower businesses to do more with less.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Shaping the Future</h3>
            <p className="text-gray-600 text-sm">
              Committed to continuous innovation, sustainability, and global retail transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "We solve complex retail challenges through cutting-edge tech and data." },
              { title: "People-Driven", desc: "Behind every smart system is a passionate team shaping a better world." },
              { title: "Sustainable Systems", desc: "We build for long-term impact, reducing waste and improving efficiency." },
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Meet the Ecosystem</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Our solutions span AI-powered analytics, IoT, logistics automation, and real-time blockchain monitoring.
        </p>
        
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">We're Just Getting Started</h2>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Inventa is building the supply chain of the future. Ready to be part of it?
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:bg-indigo-100 transition">
          Join the Movement
        </button>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; 2025 Inventa. Built with vision and innovation.
      </footer>
    </div>
  );
}
