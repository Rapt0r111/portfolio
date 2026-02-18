// Skills section with categorized tech stack using animated progress bars

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      color: 'purple',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Vue 3 (Composition API)', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS / SCSS', level: 95 },
        { name: 'Three.js (3D Graphics)', level: 80 },
        { name: 'Vite', level: 85 },
      ],
    },
    {
      title: 'Backend',
      color: 'blue',
      skills: [
        { name: 'Python (FastAPI / Django)', level: 90 },
        { name: 'aiogram (Telegram Bots)', level: 95 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: 'Tools & Security',
      color: 'green',
      skills: [
        { name: 'Docker / Docker Compose', level: 85 },
        { name: 'Nginx', level: 80 },
        { name: 'Linux (Server Administration)', level: 85 },
        { name: 'Git / CI/CD', level: 90 },
        { name: 'OWASP / Secure Coding', level: 80 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        progress: 'bg-gradient-to-r from-purple-500 to-fuchsia-500',
      },
      blue: {
        badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        progress: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      },
      green: {
        badge: 'bg-green-500/20 text-green-300 border-green-500/30',
        progress: 'bg-gradient-to-r from-emerald-500 to-green-500',
      },
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
            Навыки
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Технический стек
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Современные технологии и инструменты для создания качественных решений
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);

            return (
              <Card
                key={categoryIndex}
                className="bg-slate-800/30 border-white/10 backdrop-blur-xl hover:border-purple-500/50 hover:bg-slate-800/40 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <Badge variant="secondary" className={colors.badge}>
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress
                        value={isVisible ? skill.level : 0}
                        className="h-2 bg-slate-700/80"
                        indicatorClassName={colors.progress}
                        indicatorStyle={{
                          transitionDuration: `${700 + skillIndex * 120}ms`,
                          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                          transitionDelay: `${categoryIndex * 120 + skillIndex * 80}ms`,
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Дополнительные технологии и инструменты
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Asyncio',
              'SSR/SEO',
              'WebSocket',
              'REST API',
              'GraphQL',
              'OAuth',
              'JWT',
              'Microservices',
              'Testing (Jest, Pytest)',
            ].map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-gray-300 border-gray-600 hover:border-purple-500/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
