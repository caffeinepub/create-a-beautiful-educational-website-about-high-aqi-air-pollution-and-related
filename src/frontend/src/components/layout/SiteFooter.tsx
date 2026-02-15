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
    <footer className="border-t bg-muted/30">
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
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} AirHealth.</p>
        </div>
      </div>
    </footer>
  );
}
