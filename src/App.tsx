import React from 'react';
import { Navbar } from './components/nearo/Navbar';
import { Hero } from './components/nearo/Hero';
import { ProblemSection } from './components/nearo/ProblemSection';
import { FeatureGrid } from './components/nearo/FeatureGrid';
import { StepsSection } from './components/nearo/StepsSection';
import { Testimonials, Footer } from './components/nearo/Common';

function App() {
    return (
        <div className="font-sans antialiased bg-white text-slate-900 selection:bg-blue-100 pb-0">
            <Hero />
            <ProblemSection />
            <FeatureGrid />
            <StepsSection />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
