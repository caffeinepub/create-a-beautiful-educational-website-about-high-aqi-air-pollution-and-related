import { Wind } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wind className="h-5 w-5 text-primary" />
              <span className="font-display font-bold text-lg">AirHealth</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Educational resource about air quality and health impacts. This site provides informational content only and is not a substitute for professional medical advice.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="#what-is-aqi" 
                  onClick={(e) => handleQuickLinkClick(e, '#what-is-aqi')}
                  className="hover:text-primary transition-colors"
                >
                  What is AQI
                </a>
              </li>
              <li>
                <a 
                  href="#aqi-categories" 
                  onClick={(e) => handleQuickLinkClick(e, '#aqi-categories')}
                  className="hover:text-primary transition-colors"
                >
                  AQI Categories
                </a>
              </li>
              <li>
                <a 
                  href="#aqi-forecast" 
                  onClick={(e) => handleQuickLinkClick(e, '#aqi-forecast')}
                  className="hover:text-primary transition-colors"
                >
                  AQI & Forecast
                </a>
              </li>
              <li>
                <a 
                  href="#diseases" 
                  onClick={(e) => handleQuickLinkClick(e, '#diseases')}
                  className="hover:text-primary transition-colors"
                >
                  Health Impacts
                </a>
              </li>
              <li>
                <a 
                  href="#prevention" 
                  onClick={(e) => handleQuickLinkClick(e, '#prevention')}
                  className="hover:text-primary transition-colors"
                >
                  Prevention Tips
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleQuickLinkClick(e, '#projects')}
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#reviews" 
                  onClick={(e) => handleQuickLinkClick(e, '#reviews')}
                  className="hover:text-primary transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a 
                  href="#long-term-health" 
                  onClick={(e) => handleQuickLinkClick(e, '#long-term-health')}
                  className="hover:text-primary transition-colors"
                >
                  Long-Term Health
                </a>
              </li>
              <li>
                <a 
                  href="#indoor-air-action-plan" 
                  onClick={(e) => handleQuickLinkClick(e, '#indoor-air-action-plan')}
                  className="hover:text-primary transition-colors"
                >
                  Indoor Air Plan
                </a>
              </li>
              <li>
                <a 
                  href="#request-change" 
                  onClick={(e) => handleQuickLinkClick(e, '#request-change')}
                  className="hover:text-primary transition-colors"
                >
                  Request a Change
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Important Notice</h3>
            <p className="text-sm text-muted-foreground">
              This website is for educational purposes only. Always consult with qualified healthcare professionals for medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground space-y-2">
          <p>© {currentYear} AirHealth.</p>
          <p>For more information contact 9315576318</p>
          <div className="mt-4 pt-4 border-t border-border">
            <p>Name: Saharsh UNIYAL</p>
            <p>Class: 8th B</p>
            <p>School: PG DAV SN SEC SCHOOL</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
