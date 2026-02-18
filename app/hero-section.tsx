// Hero section with animated greeting, name, title, location badge, and CTA buttons

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react'; // Удаляем Github отсюда
import { FaTelegramPlane, FaGithub } from 'react-icons/fa'; // Добавляем FaGithub

export function HeroSection() {
  const handleContactClick = () => {
    window.open('https://t.me/Rapt0r111', '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/Rapt0r111', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-purple-950 to-slate-900 pt-24 md:pt-28">
      {/* ... (остальной фоновый код без изменений) ... */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))] pointer-events-none" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-purple-500/20 text-purple-200 border-purple-500/30 backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2" />
              Санкт-Петербург
            </Badge>
          </div>

          <div className="space-y-4" style={{ animation: 'fade-in-up 0.8s ease-out 0.2s forwards', opacity: 0 }}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 leading-tight">
              DUDIN
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 max-w-4xl mx-auto">
              Fullstack Developer (Python + React/Vue) | Information Security Engineer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ animation: 'fade-in-up 0.8s ease-out 0.4s forwards', opacity: 0 }}>
            Разрабатываю современные веб-приложения и программные комплексы с акцентом на производительность,
            безопасность и пользовательский опыт. Специализируюсь на полном цикле разработки от frontend до backend.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8" style={{ animation: 'fade-in-up 0.8s ease-out 0.6s forwards', opacity: 0 }}>
            <Button
              size="lg"
              onClick={handleContactClick}
              className="bg-linear-to-r rounded-3xl from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg backdrop-blur-sm"
            >
              <FaTelegramPlane className="w-5 h-5 mr-2" />
              Telegram
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleGithubClick}
              className="border-purple-500/50 rounded-3xl text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              {/* Заменено с Github на FaGithub */}
              <FaGithub className="w-5 h-5 mr-2" /> 
              GitHub
            </Button>
          </div>
          
          {/* ... (остальной код с анимацией скролла без изменений) ... */}
          <div className="pt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-scroll" />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
          @keyframes scroll {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
          .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
        `
      }} />
    </section>
  );
}