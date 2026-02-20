import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { CreatorCredit } from './components/layout/CreatorCredit';
import { HeroSection } from './components/sections/HeroSection';
import { VideosSection } from './components/sections/VideosSection';
import { WhatIsAQISection } from './components/sections/WhatIsAQISection';
import { AQICategoriesSection } from './components/sections/AQICategoriesSection';
import { DiseasesConditionsSection } from './components/sections/DiseasesConditionsSection';
import { SymptomsHelpSection } from './components/sections/SymptomsHelpSection';
import { PreventionTipsSection } from './components/sections/PreventionTipsSection';
import { VulnerableGroupsSection } from './components/sections/VulnerableGroupsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AQIForecastSection } from './components/sections/AQIForecastSection';
import { ReviewBoxSection } from './components/sections/ReviewBoxSection';
import { RequestChangeSection } from './components/sections/RequestChangeSection';
import { LongTermHealthSection } from './components/sections/LongTermHealthSection';
import { IndoorAirActionPlanSection } from './components/sections/IndoorAirActionPlanSection';
import { RobotVerificationGate } from './components/robot-verification/RobotVerificationGate';
import { useRobotVerification } from './hooks/useRobotVerification';

function App() {
  const { isVerified, isLoading, markVerified } = useRobotVerification();

  // Show nothing while checking verification state
  if (isLoading) {
    return null;
  }

  // Show verification gate if not verified
  if (!isVerified) {
    return (
      <>
        <RobotVerificationGate onVerified={markVerified} />
        <CreatorCredit />
      </>
    );
  }

  // Show full site once verified
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <HeroSection />
          <VideosSection />
          <WhatIsAQISection />
          <AQICategoriesSection />
          <AQIForecastSection />
          <DiseasesConditionsSection />
          <SymptomsHelpSection />
          <PreventionTipsSection />
          <VulnerableGroupsSection />
          <ProjectsSection />
          <ReviewBoxSection />
          <RequestChangeSection />
          <LongTermHealthSection />
          <IndoorAirActionPlanSection />
        </main>
        <SiteFooter />
      </div>
      <CreatorCredit />
    </>
  );
}

export default App;
