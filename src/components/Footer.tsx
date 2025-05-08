
import React from 'react';
import { Shield, CheckCircle, Star, ArrowRight, Instagram, Facebook, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-brand-green/20">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-2">Junte-se a milhares de mulheres transformadas</h3>
              <div className="flex justify-center items-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-brand-green text-brand-green" />
                ))}
                <span className="ml-2 font-medium">4.9/5</span>
                <span className="text-sm text-muted-foreground ml-1">(1.243 avaliações)</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
              <div className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full">
                <Shield className="h-4 w-4 text-brand-green mr-2" />
                Compra 100% segura
              </div>
              <div className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full">
                <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                Satisfação garantida
              </div>
              <div className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full">
                <Clock className="h-4 w-4 text-brand-green mr-2" />
                Oferta por tempo limitado
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-bold mb-4">Preço normal: <span className="line-through text-gray-500">R$197</span> | Oferta de lançamento: <span className="text-brand-green">R$97</span></p>
              <button 
                onClick={() => window.location.href = "https://pay.kiwify.com.br/umvXfs8?afid=cz7mM6v8/"}
                className="cta-button !py-3 inline-flex mx-auto hover:scale-105 transition-transform"
              >
                Garantir minha vaga com desconto
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-green transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-green transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              Esta página é informativa e não substitui orientação médica. Consulte sempre um profissional de saúde antes de iniciar qualquer programa de emagrecimento.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <a href="#" className="underline hover:text-brand-green">Termos de Uso</a> | <a href="#" className="underline hover:text-brand-green">Política de Privacidade</a>
            </p>
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Desafio em 30 Dias. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
