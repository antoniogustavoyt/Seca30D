
import React from 'react';
import { Check, Book, Gift, Heart, Users } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const InclusionsSection: React.FC = () => {
  const inclusions = [
    {
      icon: <Book className="h-5 w-5 text-white" />,
      title: 'Guia de alimentação simples e acessível',
      description: 'Cardápios semanais completos com opções para todos os gostos e bolsos.'
    },
    {
      icon: <Heart className="h-5 w-5 text-white" />,
      title: 'Treinos curtos e eficazes para fazer em casa',
      description: 'Exercícios de apenas 15 minutos diários, sem necessidade de equipamentos.'
    },
    {
      icon: <Check className="h-5 w-5 text-white" />,
      title: 'Rotina de motivação diária',
      description: 'Acompanhamento motivacional diário para manter sua energia e foco.'
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      title: 'Acesso a grupo exclusivo no WhatsApp',
      description: 'Suporte e comunidade para tirar dúvidas e compartilhar conquistas.'
    },
    {
      icon: <Gift className="h-5 w-5 text-white" />,
      title: 'Bônus: receitas práticas e saudáveis',
      description: 'Coletânea de mais de 50 receitas deliciosas e saudáveis.'
    },
  ];

  return (
    <section className="container-section bg-white">
      <h2 className="section-title">
        O que <span className="text-brand-green">está incluso</span> no desafio
      </h2>
      <p className="section-subtitle">
        Tudo que você precisa para transformar seu corpo e sua mente em apenas 20 dias
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="max-w-3xl mx-auto bg-brand-gray-light p-8 rounded-2xl shadow-sm">
          <ul className="space-y-6">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="bg-brand-green rounded-full p-2 flex-shrink-0 mt-0.5 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <AspectRatio ratio={3/4} className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://programasecandoemcasa.online/wp-content/webp-express/webp-images/uploads/2022/06/Design-sem-nome-47-1-1.png.webp" 
              alt="Resultados do programa" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-brand-green/10 p-4 rounded-lg border border-brand-green/20">
          <div className="flex items-center">
            <Gift className="h-6 w-6 text-brand-green-dark mr-3" />
            <h4 className="font-bold text-lg text-brand-green-dark">Super Bônus Exclusivo</h4>
          </div>
          <p className="mt-2">
            Ebook "Como manter os resultados para sempre" - valor de R$97, <span className="font-semibold">grátis</span> para participantes do desafio.
          </p>
        </div>
      </div>
      
      <div className="text-center mt-10">
        <p className="text-2xl font-bold mb-2">Investimento único: <span className="text-brand-green">R$97</span></p>
        <p className="text-muted-foreground mb-6">Sem mensalidades ou cobranças recorrentes</p>
      </div>
    </section>
  );
};

export default InclusionsSection;
