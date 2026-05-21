"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bu yerga login logikasini yozishingiz mumkin
    console.log("Email:", email, "Password:", password);
  };

  return (
<div>
    <div>
        <Navbar />
    </div>
     <div className="flex min-h-screen items-center justify-center bg-white px-4 text-black antialiased">
        
      <div className="w-full max-w-[400px] space-y-8">
        
        {/* Sarlavha */}
        <div className="space-y-2">
          <h1 className="text-[32px] font-medium tracking-tight">Kirish</h1>
        </div>

        {/* Forma */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            
            {/* Email qatori */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-500 pl-1">
                Email manzili
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-full bg-[#f4f4f4] px-6 py-3 text-sm font-medium text-black placeholder-gray-400 outline-none transition-all focus:ring-1 focus:ring-gray-400"
                placeholder="misol@tesla.com"
              />
            </div>

            {/* Parol qatori */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-500 pl-1">
                Parol
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-full bg-[#f4f4f4] px-6 py-3 text-sm font-medium text-black placeholder-gray-400 outline-none transition-all focus:ring-1 focus:ring-gray-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Tasdiqlash tugmasi (Ko'k rangda) */}
          <button
            type="submit"
            className="w-full rounded-full bg-[#3d69e1] py-3 text-sm font-medium text-white transition-all hover:bg-[#2c52be] active:scale-[0.99]"
          >
            Kirish
          </button>
        </form>

        {/* Qo'shimcha havolalar */}
        <div className="flex flex-col items-center space-y-3 pt-4 text-xs font-medium text-gray-600">
          <a href="#" className="underline underline-offset-4 hover:text-black">
            Parolni unutdingizmi?
            </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="underline underline-offset-4 hover:text-black">
            Hisob yaratish
          </a>
        </div>

      </div>
    </div>
</div>
  );
}