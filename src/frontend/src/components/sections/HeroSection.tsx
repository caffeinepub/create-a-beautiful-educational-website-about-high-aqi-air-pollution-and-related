import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.querySelector('#what-is-aqi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-balance">
              Understanding Air Quality & Your Health
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Learn how air pollution affects your health, understand AQI levels, and discover practical steps to protect yourself and your loved ones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContent} className="gap-2">
                Learn More
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.querySelector('#aqi-categories');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Check AQI Guide
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-video lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-soft">
            <img 
              src="/assets/generated/hero-air-quality.dim_1600x900.png" 
              alt="City skyline with visible air pollution and haze"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
