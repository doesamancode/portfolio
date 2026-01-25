import React from 'react'
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div id="top">
      <Background />
      <Navbar />

      <main className="pt-20">
        <HeroSection />
      </main>
    </div>
  );
}
