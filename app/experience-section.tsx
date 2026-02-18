// Experience timeline with collapsible job entries

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface JobEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  projects: {
    name: string;
    details: string[];
  }[];
  tags: string[];
}

export function ExperienceSection() {
  const [expandedJobs, setExpandedJobs] = useState<number[]>([0]);

  const jobs: JobEntry[] = [
    {
      company: 'Министерство Обороны РФ (Научная рота)',
      role: 'Software Engineer',
      period: 'Декабрь 2025 — Декабрь 2026',
      description: 'Разработка программного комплекса «исГУС» (Информационная система Главного Управления Связи).',
      projects: [
        {
          name: 'Интерактивный мультимедийный терминал (Frontend, Kiosk Mode)',
          details: [
            'Разработал SPA-приложение для сенсорных информационных стоек на Vue 3 (Composition API) + Vite',
            '3D & Visualization: Реализовал интерактивный просмотр 3D-моделей техники через Three.js (GLTFLoader/DRACO), оптимизировав рендеринг для работы на встроенном оборудовании',
            'Hardware Adaptation: Адаптировал UI/UX под вертикальные FHD-дисплеи (1080x1920) и тач-управление, используя гибридную стилизацию (Tailwind CSS + SCSS)',
            'Architecture: Спроектировал автономную архитектуру (Offline-first): контент и данные хранятся локально, приложение деплоится через Docker + Nginx',
          ],
        },
      ],
      tags: ['Vue 3', 'Three.js', 'Vite', 'Docker', 'Nginx', 'SCSS', 'Tailwind CSS'],
    },
    {
      company: 'Самозанятый (Fullstack Freelance)',
      role: 'Web Developer & Bot Creator',
      period: 'Сентябрь 2020 — Декабрь 2025',
      description: 'Разработка коммерческих веб-приложений и Telegram-ботов для различных клиентов.',
      projects: [
        {
          name: 'Ключевые достижения',
          details: [
            'Telegram Bots (aiogram): Разработал коммерческих ботов с асинхронной логикой (Asyncio), FSM и интеграцией с PostgreSQL/MongoDB',
            'Web Development: Создавал современные веб-приложения на React / Next.js + TypeScript (SSR, SEO-optimization)',
            'DevOps: Настраивал CI/CD и деплой на VPS (Linux, Docker)',
          ],
        },
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'Python', 'aiogram', 'PostgreSQL', 'MongoDB', 'Docker', 'CI/CD'],
    },
  ];

  const toggleJob = (index: number) => {
    setExpandedJobs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-20 px-6 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
            Опыт работы
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Профессиональный путь
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            От freelance-разработки до проектов государственного масштаба
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-slate-950" />

                <Card className="md:ml-20 bg-slate-800/30 border-white/10 backdrop-blur-xl hover:border-purple-500/50 hover:bg-slate-800/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="w-5 h-5 text-purple-400" />
                          <CardTitle className="text-2xl text-white">{job.company}</CardTitle>
                        </div>
                        <p className="text-xl text-purple-300 mb-2">{job.role}</p>
                        <p className="text-sm text-gray-400">{job.period}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleJob(index)}
                        className="text-gray-400 hover:text-white"
                      >
                        {expandedJobs.includes(index) ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>

                  {expandedJobs.includes(index) && (
                    <CardContent className="space-y-6">
                      <p className="text-gray-300 leading-relaxed">{job.description}</p>

                      {job.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                          <ul className="space-y-2">
                            {project.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex gap-3 text-gray-300">
                                <span className="text-purple-400 mt-1.5">•</span>
                                <span className="flex-1">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div className="flex flex-wrap gap-2 pt-4">
                        {job.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
