import React from 'react'
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShowreelSection from "./components/ShowreelSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";

export default function App() {
  return (
    <div id="top" className="relative">
      <Background />
      <Navbar />

      <main className="pt-20">
        <HeroSection />
        <ShowreelSection />
        <ProjectsSection />
        <ServicesSection />
        <ReviewsSection />
      </main>
    </div>
  );
}

