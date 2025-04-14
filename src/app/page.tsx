"use client";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 bg-white bg-opacity-80">
      <div className="max-w-5xl mx-auto space-y-10">
        <section className="bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-brand mb-4">Pectra Staking Optimizer</h1>
          <p className="text-gray-700 text-lg">This is a placeholder app layout styled with Pier Two's branding. Your staking strategy components will go here.</p>
        </section>
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-brand-dark mb-2">Next Steps</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Add ETH input, APR input, and time horizon</li>
            <li>Implement Set-and-Forget + Active Treasury logic</li>
            <li>Display rewards, strategy comparison, and chart</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
