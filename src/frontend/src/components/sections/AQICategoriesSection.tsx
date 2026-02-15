import { AQIGuide } from '@/components/aqi/AQIGuide';

export function AQICategoriesSection() {
  return (
    <section id="aqi-categories" className="py-16 md:py-24 bg-muted/30 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">AQI Categories & What They Mean</h2>
          <p className="text-lg text-muted-foreground">
            The AQI is divided into six categories, each corresponding to a different level of health concern. Select a category below to learn more about what it means and what actions to take.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <AQIGuide />
        </div>
      </div>
    </section>
  );
}
