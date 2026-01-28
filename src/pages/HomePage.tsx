import React from 'react';
import { Hero } from '../components/nearo/Hero';
import { ProblemSection } from '../components/nearo/ProblemSection';
import { MeetEMPSection } from '../components/nearo/MeetEMPSection';
import { FeatureGrid } from '../components/nearo/FeatureGrid';
import { StepsSection } from '../components/nearo/StepsSection';
import { WhoSection } from '../components/nearo/WhoSection';
import { ManifestoSection } from '../components/nearo/ManifestoSection';
import { ContactUs } from '../components/nearo/ContactUs';
import { Footer } from '../components/nearo/Common';

export const HomePage = () => {
    return (
        <div className="font-sans antialiased bg-white text-slate-900 selection:bg-blue-100 pb-0">
            <Hero />
            <ProblemSection />
            <MeetEMPSection />
            <FeatureGrid />
            <StepsSection />
            <WhoSection />
            <ManifestoSection />
            <ContactUs />
            <Footer />
        </div>
    );
};
