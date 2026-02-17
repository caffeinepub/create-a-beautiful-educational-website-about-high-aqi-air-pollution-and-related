import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

type ProjectCategory = 'all' | 'bike' | 'car';

interface Project {
  id: number;
  title: string;
  category: 'bike' | 'car';
  description: string;
  impact: string;
  image: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Advanced Bike Silencer System',
    category: 'bike',
    description: 'Innovative silencer technology designed specifically for motorcycles and bikes to reduce exhaust noise and harmful emissions. This system uses advanced acoustic dampening materials and catalytic conversion to minimize environmental impact.',
    impact: 'Reduces noise pollution by up to 40% and cuts harmful emissions by 35%',
    image: '/assets/generated/silencer-bike.dim_1600x900.png',
    imageAlt: 'Advanced motorcycle silencer system with acoustic dampening technology',
  },
  {
    id: 2,
    title: 'Eco-Friendly Car Exhaust Filter',
    category: 'car',
    description: 'State-of-the-art car silencer and filtration system that significantly reduces vehicle emissions while maintaining optimal engine performance. Features multi-stage filtration and noise reduction technology.',
    impact: 'Decreases particulate matter emissions by 45% and reduces noise levels by 50%',
    image: '/assets/generated/silencer-car.dim_1600x900.png',
    imageAlt: 'Modern car exhaust silencer with multi-stage filtration system',
  },
  {
    id: 3,
    title: 'High-Performance Bike Muffler',
    category: 'bike',
    description: 'Lightweight yet powerful muffler system for bikes that combines performance with environmental responsibility. Engineered to reduce both noise and toxic emissions without compromising power output.',
    impact: 'Achieves 38% reduction in carbon monoxide emissions and 42% noise reduction',
    image: '/assets/generated/silencer-bike.dim_1600x900.png',
    imageAlt: 'High-performance motorcycle muffler with emission reduction technology',
  },
  {
    id: 4,
    title: 'Smart Car Emission Control System',
    category: 'car',
    description: 'Intelligent emission control system for cars featuring real-time monitoring and adaptive filtration. This smart silencer adjusts its performance based on driving conditions to maximize pollution reduction.',
    impact: 'Smart technology reduces overall vehicle emissions by 48% and noise by 55%',
    image: '/assets/generated/silencer-car.dim_1600x900.png',
    imageAlt: 'Smart car emission control system with adaptive filtration technology',
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterButtons: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'bike', label: 'Bike Silencers' },
    { value: 'car', label: 'Car Silencers' },
  ];

  return (
    <section id="projects" className="scroll-mt-16 py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Pollution Reduction Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative silencer and filter technologies designed to reduce vehicle emissions and noise pollution. 
            These projects demonstrate practical solutions for cleaner air and healthier communities.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground mr-2">Filter by:</span>
          {filterButtons.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
              className="transition-all"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
              <div className="aspect-video w-full overflow-hidden bg-muted border-b border-border">
                <img 
                  src={project.image} 
                  alt={project.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/20 text-primary whitespace-nowrap border border-primary/30">
                    {project.category === 'bike' ? 'Bike' : 'Car'}
                  </span>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-accent/20 rounded-lg p-4 border border-accent/40">
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-primary font-semibold">Impact:</span> {project.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
