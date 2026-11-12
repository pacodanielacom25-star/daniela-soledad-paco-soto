import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StepByStepGuide } from './components/StepByStepGuide';
import { CorridorMap } from './components/CorridorMap';
import { LogisticsCalculator } from './components/LogisticsCalculator';
import { DocumentHub } from './components/DocumentHub';
import { ExportDiagnostic } from './components/ExportDiagnostic';
import { CeabCaseStudy } from './components/CeabCaseStudy';
import { ConsultingServices } from './components/ConsultingServices';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Top Bar adhering strictly to 3-zone contract */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with exact user introduction and proof metrics */}
        <Hero onNavigate={scrollToSection} />

        {/* Strategic Spotlight: CEAB S.R.L. and Cochabamba Healthy Snacks */}
        <CeabCaseStudy onNavigateToConsulting={() => scrollToSection('consultoria')} />

        {/* Step-by-Step Interactive Export Manual */}
        <StepByStepGuide />

        {/* Physical Corridor & Border Crossing in Desaguadero (CEBAF) */}
        <CorridorMap />

        {/* Interactive Logistics Cost & Transit Calculator */}
        <LogisticsCalculator />

        {/* Document Hub & CAN Tariff Database */}
        <DocumentHub />

        {/* SME Export Readiness Diagnostic Test */}
        <ExportDiagnostic onNavigateToConsulting={() => scrollToSection('consultoria')} />

        {/* Consulting Services & Appointment Form */}
        <ConsultingServices />
      </main>

      {/* Quiet, Informative Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
