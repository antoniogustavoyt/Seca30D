
import React from 'react';
import { Shield, CheckCircle, Clock } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="container-section bg-brand-gray-light">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <div className="w-full h-full bg-brand-green rounded-full flex items-center justify-center p-2 shadow-lg">
              <div className="w-full h-full border-4 border-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <span className="text-white font-bold text-3xl md:text-4xl">7</span>
                  <div className="text-white font-bold text-sm md:text-base leading-tight mt-1">
                    DIAS DE<br />GARANTIA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Garantia incondicional de satisfação ou seu dinheiro de volta</h3>
            <p className="text-muted-foreground text-lg mb-4">
              Se por qualquer motivo você não ficar satisfeita com o Desafio em 30 Dias nos primeiros 7 dias, basta enviar um e-mail solicitando o reembolso e devolveremos 100% do seu investimento, <span className="font-bold">sem perguntas e sem burocracia</span>.
            </p>
            <div className="space-y-3">
              <div className="flex items-center bg-brand-green/10 p-2 rounded-md text-brand-green-dark">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-medium">Solicite seu reembolso em até 7 dias após a compra</span>
              </div>
              <div className="flex items-center text-sm">
                <Shield className="h-5 w-5 text-brand-green mr-2" />
                Sua compra está 100% protegida por nossa política de garantia
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                Sem risco: você só paga se estiver satisfeita com o programa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
