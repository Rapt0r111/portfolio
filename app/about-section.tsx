// About section with professional summary and key highlights

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Shield, Rocket, Users } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: '5+ лет опыта',
      description: 'Fullstack разработка',
    },
    {
      icon: Shield,
      title: 'Information Security',
      description: 'OWASP, Secure Coding',
    },
    {
      icon: Rocket,
      title: 'Современный стек',
      description: 'React, Vue, Python, FastAPI',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Министерство Обороны РФ',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
            Обо мне
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Кто я?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fullstack-разработчик с опытом работы над высоконагруженными системами и 
            программными комплексами для государственных организаций
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/30 border-white/10 backdrop-blur-xl hover:border-purple-500/50 hover:bg-slate-800/40 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Профессиональный путь</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                С 2020 года занимаюсь разработкой веб-приложений, Telegram-ботов и программных комплексов. 
                В декабре 2025 года начал службу в научной роте Министерства Обороны РФ, где разрабатываю 
                информационную систему «исГУС».
              </p>
              <p className="text-gray-300 leading-relaxed">
                Мой основной фокус — создание масштабируемых приложений с акцентом на безопасность, 
                производительность и отличный пользовательский опыт.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-white/10 backdrop-blur-xl hover:border-blue-500/50 hover:bg-slate-800/40 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Технологическая экспертиза</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Специализируюсь на современных технологиях: React, Next.js, Vue 3 для frontend; 
                Python (FastAPI, Django), Node.js для backend; PostgreSQL, MongoDB, Redis для хранения данных.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Имею глубокие знания в области информационной безопасности (OWASP, Secure Coding) 
                и опыт работы с 3D-визуализацией (Three.js), DevOps (Docker, CI/CD).
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="bg-slate-800/30 border-white/10 backdrop-blur-xl hover:scale-105 hover:bg-slate-800/40 hover:border-purple-400/30 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
                  <item.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
