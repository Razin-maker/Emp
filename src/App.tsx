import React from 'react';
import { Navbar } from './components/nearo/Navbar';
import { Hero } from './components/nearo/Hero';
import { MeetEMPSection } from './components/nearo/MeetEMPSection';
import { ProblemSection } from './components/nearo/ProblemSection';
import { FeatureGrid } from './components/nearo/FeatureGrid';
import { StepsSection } from './components/nearo/StepsSection';
import { ManifestoSection } from './components/nearo/ManifestoSection';
import { Testimonials, Footer } from './components/nearo/Common';
import { ContactUs } from './components/nearo/ContactUs';

function App() {
    return (
        <div className="font-sans antialiased bg-white text-slate-900 selection:bg-blue-100 pb-0">
            <Hero />
            <ProblemSection />
            <MeetEMPSection />
            <FeatureGrid />
            <StepsSection />
            <ManifestoSection />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
