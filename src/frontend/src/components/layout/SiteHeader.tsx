import { useState } from 'react';
import { Menu, X, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'What is AQI', href: '#what-is-aqi' },
  { label: 'AQI Categories', href: '#aqi-categories' },
  { label: 'AQI & Forecast', href: '#aqi-forecast' },
  { label: 'Health Impacts', href: '#diseases' },
  { label: 'Symptoms', href: '#symptoms' },
  { label: 'Prevention', href: '#prevention' },
  { label: 'At-Risk Groups', href: '#vulnerable' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Request a Change', href: '#request-change' },
  { label: 'Long-Term Health', href: '#long-term-health' },
  { label: 'Indoor Air Plan', href: '#indoor-air-action-plan' },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Wind className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold">AirHealth</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium"
            >
              {item.label}
            </Button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    onClick={() => handleNavClick(item.href)}
                    className="justify-start text-base"
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
