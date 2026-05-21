"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

// Tillari ro'yxati - Alifbo tartibida (English names)
const languages = [
  "Arabic", "Bengali", "Bulgarian", "Chinese", "Croatian", "Czech",
  "Danish", "Dutch", "English", "Estonian", "Filipino", "Finnish",
  "French", "German", "Greek", "Hebrew", "Hindi", "Hungarian",
  "Indonesian", "Italian", "Japanese", "Korean", "Latvian", "Lithuanian",
  "Malay", "Norwegian", "Persian", "Polish", "Portuguese", "Romanian",
  "Russian", "Serbian", "Slovak", "Slovenian", "Spanish", "Swahili",
  "Swedish", "Thai", "Turkish", "Ukrainian", "Urdu", "Vietnamese"
];

export default function LanguagePage() {
  const [selectedLang, setSelectedLang] = useState("English");

  return (
   <div>
    <div>
        <Navbar />
    </div>
     <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12 text-black antialiased">
      <div className="w-full max-w-4xl space-y-10">
        
        {/* Sarlavha */}
        <div className="text-center space-y-2">
          <h1 className="text-[32px] font-medium tracking-tight">Select Language</h1>
          <p className="text-sm text-gray-500">Choose your preferred language for Tesla</p>
        </div>

        {/* Tillari ro'yxati (3 ta ustun/qator shaklida) */}
        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-4 border-t border-b border-gray-100 py-8">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`flex items-center justify-between rounded-full px-6 py-3 text-left text-sm font-medium transition-all duration-200
                ${
                  selectedLang === lang
                    ? "bg-[#3d69e1] text-white" // Tanlangan til siz xohlagan ko'k rangda bo'ladi
                    : "bg-[#f4f4f4] text-black hover:bg-gray-200"
                }`}
            >
              <span>{lang}</span>
              {selectedLang === lang && (
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Tasdiqlash tugmasi (Ko'k rangda) */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => console.log("Tanlangan til:", selectedLang)}
            className="w-full max-w-[300px] rounded-full bg-[#3d69e1] py-3 text-sm font-medium text-white transition-all hover:bg-[#2c52be] active:scale-[0.99]"
          >
            Confirm & Save
          </button>
        </div>

      </div>
    </div>
   </div>
  );
}