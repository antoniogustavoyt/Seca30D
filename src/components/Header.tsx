
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Clock } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-brand-green font-heading text-xl md:text-2xl font-bold">
            Desafio em <span className="text-black"> 30 Dias</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center text-sm font-medium mr-4">
            <Clock className="h-4 w-4 text-brand-green-dark mr-1" />
            <span>Vagas limitadas</span>
          </div>
          <button onClick={onCtaClick} className="cta-button !py-2 !px-5 md:!py-3 md:!px-6 text-base hover:scale-105 transition-transform animate-pulse-soft">
            Quero Participar
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
