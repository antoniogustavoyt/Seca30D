
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Star, CheckCircle2, Heart, Timer, ShoppingBag, TrendingUp } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-brand-green-light/20 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center bg-brand-green/10 text-brand-green-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2 fill-brand-green" /> 
              <span className="font-bold">5.437</span> mulheres transformadas
            </div>
            
            <div className="absolute top-0 right-0 md:right-8 mt-20 md:mt-24 animate-pulse bg-red-500 text-white rounded-full px-4 py-1 text-sm font-bold">
              LANÇAMENTO
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme seu corpo e <span className="highlight-text">autoestima</span> com o Desafio em <span className="text-brand-green"> 30 Dias</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Participe do programa que já ajudou milhares de mulheres a se sentirem mais leves, confiantes e felizes – sem remédios ou dietas malucas.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
              <div className="flex items-center bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                <Calendar className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-sm font-medium">Resultados em apenas  30 Dias</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                <Heart className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-sm font-medium">98% de satisfação</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-sm font-medium">Suporte exclusivo</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="https://metodosecarem20dias.com/wp-content/uploads/2024/12/4-2.webp" 
                    alt="Alimentação saudável" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
                <div className="bg-white p-3">
                  <p className="font-medium text-brand-green-dark">Alimentação Saudável</p>
                  <p className="text-sm text-muted-foreground">Cardápios simples e deliciosos</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="https://metodosecarem20dias.com/wp-content/uploads/2024/12/4.webp" 
                    alt="Exercícios simples" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
                <div className="bg-white p-3">
                  <p className="font-medium text-brand-green-dark">Exercícios Simples</p>
                  <p className="text-sm text-muted-foreground">Apenas 15 minutos por dia</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="https://metodosecarem20dias.com/wp-content/uploads/2024/12/4-1.webp" 
                    alt="Marmitas Práticas" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
                <div className="bg-white p-3">
                  <p className="font-medium text-brand-green-dark">Marmitas Práticas</p>
                  <p className="text-sm text-muted-foreground">Transformação completa</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md mb-10">
              <p className="text-lg font-medium mb-3">O lançamento encerra em:</p>
              <div className="flex justify-center items-center gap-2">
                <div className="bg-brand-green-dark text-white rounded-md w-16 h-16 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">{formatTime(timeLeft.hours)}</span>
                  <span className="text-xs">horas</span>
                </div>
                <span className="text-xl font-bold">:</span>
                <div className="bg-brand-green-dark text-white rounded-md w-16 h-16 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">{formatTime(timeLeft.minutes)}</span>
                  <span className="text-xs">minutos</span>
                </div>
                <span className="text-xl font-bold">:</span>
                <div className="bg-brand-green-dark text-white rounded-md w-16 h-16 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">{formatTime(timeLeft.seconds)}</span>
                  <span className="text-xs">segundos</span>
                </div>
              </div>
            </div>
            
            <div className="relative mb-8">
              <div className="absolute -top-6 right-1/2 transform translate-x-1/2 bg-red-500 text-white text-sm px-3 py-1 rounded-full animate-bounce">
                Últimas 7 vagas!
              </div>
              <button 
                onClick={onCtaClick} 
                className="cta-button mx-auto animate-pulse-soft hover:scale-105 transition-transform duration-300 text-xl"
              >
                Quero garantir minha vaga
                <ArrowRight size={22} />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm mb-6">
              <span className="font-medium flex items-center">
                <CheckCircle2 size={16} className="text-brand-green mr-1" /> Sem compromisso
              </span>
              <span className="hidden md:inline">•</span>
              <span className="font-medium flex items-center">
                <CheckCircle2 size={16} className="text-brand-green mr-1" /> Garantia de 7 dias
              </span>
              <span className="hidden md:inline">•</span>
              <span className="font-medium flex items-center">
                <CheckCircle2 size={16} className="text-brand-green mr-1" /> Pagamento seguro
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="bg-white/60 text-brand-green-dark">
                <ShoppingBag className="h-3 w-3 mr-1" /> 84% das compras ocorrem agora
              </Badge>
              <Badge variant="outline" className="bg-white/60 text-brand-green-dark">
                <Timer className="h-3 w-3 mr-1" /> Oferta por tempo limitado
              </Badge>
              <Badge variant="outline" className="bg-white/60 text-brand-green-dark">
                <TrendingUp className="h-3 w-3 mr-1" /> 372 mulheres entraram hoje
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
