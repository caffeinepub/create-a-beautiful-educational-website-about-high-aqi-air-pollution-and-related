import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { TopRightCreditLabel } from './components/layout/TopRightCreditLabel';
import { HeroSection } from './components/sections/HeroSection';
import { WhatIsAQISection } from './components/sections/WhatIsAQISection';
import { AQICategoriesSection } from './components/sections/AQICategoriesSection';
import { DiseasesConditionsSection } from './components/sections/DiseasesConditionsSection';
import { SymptomsHelpSection } from './components/sections/SymptomsHelpSection';
import { PreventionTipsSection } from './components/sections/PreventionTipsSection';
import { VulnerableGroupsSection } from './components/sections/VulnerableGroupsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { RequestChangeSection } from './components/sections/RequestChangeSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopRightCreditLabel />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WhatIsAQISection />
        <AQICategoriesSection />
        <DiseasesConditionsSection />
        <SymptomsHelpSection />
        <PreventionTipsSection />
        <VulnerableGroupsSection />
        <ProjectsSection />
        <RequestChangeSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
