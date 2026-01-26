import React from 'react'
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShowreelSection from "./components/ShowreelSection";

export default function App() {
  return (
    <div id="top" className="relative">
      <Background />
      <Navbar />

      <main className="pt-20">
        <HeroSection />
        <ShowreelSection />
      </main>
    </div>
  );
}

