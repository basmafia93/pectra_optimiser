"use client";
import React, { useState } from "react";

export default function Home() {
  const [stake, setStake] = useState(10000);
  const [apr, setApr] = useState(3.38);
  const [years, setYears] = useState(3);

  const aprDecimal = apr / 100;
  const periods = years * 365;
  const periodRate = aprDecimal / 365;

  // Legacy Strategy (manual compounding)
  const legacyValidators = Math.floor(stake / 32);
  const legacyRemainder = stake % 32;
  const legacyCompoundRate = Math.pow(1 + periodRate, periods);
  const legacyFinal = legacyValidators * 32 * legacyCompoundRate + legacyRemainder;
  const legacyRewards = legacyFinal - stake;

  // Set-and-Forget (Pectra autocompounding)
  const targetFinal = stake * Math.pow(1 + periodRate, periods);
  const targetRewards = targetFinal - stake;

  const uplift = targetRewards - legacyRewards;
  const upliftPct = (uplift / legacyRewards) * 100;

  return (
    <main className="min-h-screen py-12 px-4 bg-white bg-opacity-80">
      <div className="max-w-5xl mx-auto space-y-10">
        <section className="bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-brand mb-6">Pectra Staking Optimizer</h1>

          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Total ETH to Stake</label>
              <input
                type="range"
                min={32}
                max={32000}
                step={1}
                value={stake}
                onChange={(e) => setStake(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm mt-1">{stake} ETH</p>
            </div>

            <div>
              <label className="block font-medium mb-1">Network APR (%)</label>
              <input
                type="range"
                min={1}
                max={10}
                step={0.01}
                value={apr}
                onChange={(e) => setApr(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm mt-1">{apr.toFixed(2)}%</p>
            </div>

            <div>
              <label className="block font-medium mb-1">Time Horizon (Years)</label>
              <input
                type="range"
                min={1}
                max={10}
                step={0.25}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm mt-1">{years} years</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold text-brand-dark">Results</h2>

          <div className="text-sm">
            <p><strong>Legacy Final Balance:</strong> {legacyFinal.toFixed(2)} ETH</p>
            <p><strong>Set-and-Forget Final Balance:</strong> {targetFinal.toFixed(2)} ETH</p>
            <p><strong>Uplift:</strong> +{uplift.toFixed(2)} ETH ({upliftPct.toFixed(2)}%)</p>
          </div>
        </section>
      </div>
    </main>
  );
}
