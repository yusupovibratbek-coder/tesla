"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

// Ko'p beriladigan savollar (FAQ) ro'yxati
const faqs = [
  { question: "How do I order a Tesla?", answer: "You can order directly online through our configurator page by selecting your model, options, and placing a deposit." },
  { question: "What is the delivery timeline?", answer: "Delivery times vary depending on the model, configuration, and your location. You can track your timeline in your Tesla Account." },
  { question: "How does home charging work?", answer: "We recommend installing a Tesla Wall Connector at home. You can also charge using any standard 240V outlet with a Mobile Connector." },
  { question: "Where can I find a Supercharger?", answer: "Superchargers are located on major routes. You can find them directly via the in-car navigation system or the Tesla App." }
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className="flex min-h-screen flex-col items-center bg-white px-6 py-16 text-black antialiased">
      <div className="w-full max-w-3xl space-y-12">
        
        {/* Sarlavha va Qidiruv */}
        <div className="text-center space-y-6">
          <h1 className="text-[32px] font-medium tracking-tight">Tesla Support</h1>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-[#f4f4f4] px-6 py-3.5 pr-12 text-sm font-medium text-black placeholder-gray-400 outline-none transition-all focus:ring-1 focus:ring-gray-400"
            />
            <svg className="absolute right-5 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Tezkor yordam bo'limlari (Grid shaklida) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#f4f4f4] p-6 text-left transition-all hover:bg-gray-100 cursor-pointer">
            <h3 className="text-base font-medium mb-1">Vehicle Support</h3>
            <p className="text-xs text-gray-500">Guides, manuals, and software updates.</p>
          </div>
          <div className="rounded-2xl bg-[#f4f4f4] p-6 text-left transition-all hover:bg-gray-100 cursor-pointer">
            <h3 className="text-base font-medium mb-1">Energy Support</h3>
            <p className="text-xs text-gray-500">Solar Panels, Solar Roof and Powerwall.</p>
          </div>
          <div className="rounded-2xl bg-[#f4f4f4] p-6 text-left transition-all hover:bg-gray-100 cursor-pointer">
            <h3 className="text-base font-medium mb-1">Charging</h3>
            <p className="text-xs text-gray-500">Home charging and Supercharging network.</p>
          </div>
        </div>

        {/* FAQ (Ko'p beriladigan savollar) bo'limi */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-medium tracking-tight border-b border-gray-100 pb-2">Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between text-left font-medium text-sm hover:text-gray-600"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg text-gray-400">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed pl-1">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Aloqa / Tasdiqlash tugmasi (Ko'k rangda) */}
        <div className="border-t border-gray-100 pt-8 text-center space-y-4">
          <p className="text-sm text-gray-500">Can't find what you're looking for?</p>
          <button
            onClick={() => console.log("Contact Support open")}
            className="w-full max-w-[260px] rounded-full bg-[#3d69e1] py-3 text-sm font-medium text-white transition-all hover:bg-[#2c52be] active:scale-[0.99]"
          >
            Contact Support
          </button>
        </div>

      </div>
    </div>
    </div>
  );
}