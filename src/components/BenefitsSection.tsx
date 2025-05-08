
import React from 'react';
import { Users, Heart, Activity } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-brand-green mb-6" />,
      title: 'Transformação física e mental em  30 Dias',
      description:
        'Um programa completo focado não apenas no corpo, mas também na sua relação com a alimentação e autoestima.',
      highlight: 'Método exclusivo e comprovado'
    },
    {
      icon: <Heart className="h-12 w-12 text-brand-green mb-6" />,
      title: 'Plano 100% natural, criado para mulheres reais',
      description:
        'Desenvolvido para se adaptar ao seu dia a dia, sem substâncias duvidosas ou restrições extremas.',
      highlight: 'Seguro e eficaz'
    },
    {
      icon: <Activity className="h-12 w-12 text-brand-green mb-6" />,
      title: 'Resultados visíveis com hábitos simples e saudáveis',
      description:
        'Pequenas mudanças diárias que proporcionam resultados significativos e que você consegue manter para sempre.',
      highlight: 'Sem efeito sanfona'
    },
  ];

  return (
    <section className="container-section bg-white">
      <h2 className="section-title">
        Por que o <span className="text-brand-green">Desafio em 30 Dias</span> funciona?
      </h2>
      <p className="section-subtitle">
        Um método eficaz e amoroso para transformar seu corpo e sua vida
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="feature-card group hover:border hover:border-brand-green/20 transition-all">
            <div className="relative">
              {benefit.icon}
              <div className="absolute -top-2 -right-2 bg-brand-green text-white text-xs px-2 py-1 rounded-full shadow-sm">
                {benefit.highlight}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-brand-green transition-colors">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="w-[370px] h-[550px] mx-auto">
          <AspectRatio ratio={370 / 550} className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://programasecandoemcasa.online/wp-content/webp-express/webp-images/uploads/2022/06/Design-sem-nome-48-1.png.webp"
              alt="Mulheres se exercitando"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="inline-block bg-brand-gray-light px-6 py-3 rounded-full text-lg font-medium">
          <span className="text-brand-green">93%</span> das participantes relatam mudanças visíveis já na primeira semana
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
