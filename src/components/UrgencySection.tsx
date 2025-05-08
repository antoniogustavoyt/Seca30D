
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Bell, Users, Shield, Check, Award, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface UrgencySectionProps {
  onCtaClick: () => void;
}

const UrgencySection: React.FC<UrgencySectionProps> = ({ onCtaClick }) => {
  // Calculate final day of the month for limited spots messaging
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const daysLeft = Math.min(7, lastDayOfMonth - today.getDate());
  
  const [progress, setProgress] = useState(0);
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    // Simulated decreasing spots over time
    const spotInterval = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 1) return prev - 1;
        clearInterval(spotInterval);
        return 1;
      });
    }, 60000); // Every minute

    // Animated progress bar
    const timer = setTimeout(() => setProgress(85), 500);
    
    return () => {
      clearInterval(spotInterval);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-brand-green to-brand-green-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Bell className="h-4 w-4 mr-2 animate-pulse" /> 
          Atenção: Lançamento encerra em breve
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Últimas vagas disponíveis para o Desafio em 30 Dias
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Para proporcionar um acompanhamento de qualidade, limitamos o número de participantes. Garanta sua vaga agora e comece sua transformação!
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center space-x-4 text-xl font-medium mb-4">
            <Users className="h-6 w-6" />
            <span>Apenas <span className="font-bold text-2xl">{spotsLeft}</span> vagas restantes</span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Turma preenchida</span>
              <span>85%</span>
            </div>
            <Progress value={progress} className="h-2.5 bg-white/20" indicatorClassName="bg-white" />
          </div>
          <div className="mt-2 text-sm bg-white/10 p-2 rounded">
            <TrendingUp className="h-4 w-4 inline mr-1" /> Próxima turma somente daqui a 30 dias, com valor promocional encerrado
          </div>
        </div>
        
        <div className="mb-10">
          <div className="text-sm font-medium mb-2">Oferta de lançamento encerra em:</div>
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-lg flex flex-col items-center justify-center">
              <span className="font-bold text-2xl">{daysLeft}</span>
              <span className="text-xs">dias</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-lg flex flex-col items-center justify-center">
              <span className="font-bold text-2xl">12</span>
              <span className="text-xs">horas</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-lg flex flex-col items-center justify-center">
              <span className="font-bold text-2xl">36</span>
              <span className="text-xs">minutos</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-md mx-auto mb-8 bg-white/10 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-3 flex items-center justify-center">
            <Award className="h-5 w-5 mr-2" /> Bônus exclusivos de lançamento
          </h4>
          <ul className="space-y-2 text-left">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
              <span>E-book "Como manter os resultados para sempre" (valor R$97)</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
              <span>Acesso à aula especial "Desbloqueando a mente para emagrecer" (valor R$147)</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
              <span>Desconto de lançamento: 50% OFF no valor final do programa</span>
            </li>
          </ul>
        </div>
        
        <button 
          onClick={onCtaClick} 
          className="bg-white text-brand-green-dark hover:bg-brand-gray-light font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-2 justify-center mx-auto shadow-md hover:shadow-lg text-xl hover:scale-105 mb-6"
        >
          Quero começar minha transformação agora
          <ArrowRight size={22} />
        </button>
        
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-5 w-5 mr-2" />
          <span className="font-medium">Compra 100% segura e com garantia de 7 dias</span>
        </div>
        
        <p className="text-sm mt-4 text-white/80">
          Tempo limitado • Vagas preenchidas por ordem de inscrição • Preço promocional somente durante o lançamento
        </p>
      </div>
    </section>
  );
};

export default UrgencySection;
