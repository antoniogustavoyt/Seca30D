
import React, { useState } from 'react';
import { Video, Star, Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: '1',
      name: 'Mariana S.',
      title: 'Me senti linda novamente',
      text: '"Depois de duas gestações, não me reconhecia mais. O Desafio me ajudou a reencontrar minha confiança, sem pressão ou cobranças. Me sinto leve e feliz outra vez."',
      videoId: 'WHCwxnWj2nk',
      age: '32 anos',
      result: 'Perdeu 6kg em  30 Dias',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: '2',
      name: 'Fernanda M.',
      title: 'Voltei a amar o espelho',
      text: '"Eu evitava olhar para o espelho antes do Desafio. Hoje, me vejo com outros olhos. Perdi medidas, sim, mas ganhei algo muito mais importante: amor próprio!"',
      videoId: 'WHCwxnWj2nk',
      age: '28 anos',
      result: 'Eliminou 8cm de cintura',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: '3',
      name: 'Patricia L.',
      title: 'Mudou minha relação com a comida',
      text: '"Sempre tive uma relação complicada com a alimentação. O Desafio me ensinou a comer de forma consciente e prazerosa. Emagreci sem sofrimento e sem efeito sanfona."',
      videoId: 'WHCwxnWj2nk',
      age: '41 anos',
      result: 'Melhorou disposição e sono',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: '4',
      name: 'Luciana R.',
      title: 'Minha família notou a diferença',
      text: '"Não apenas emagreci, mas minha pele melhorou, durmo melhor e tenho muito mais disposição. Até meu marido começou a fazer o desafio depois que viu meus resultados!"',
      videoId: 'WHCwxnWj2nk',
      age: '36 anos',
      result: 'Perdeu 5kg em  30 Dias',
      image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=300&auto=format&fit=crop',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="container-section bg-brand-gray-light">
      <div className="relative">
        <div className="absolute -top-12 right-0 bg-brand-green text-white px-4 py-2 rounded-lg font-bold transform rotate-6 shadow-md">
          Resultados reais
        </div>
      </div>
      
      <h2 className="section-title">
        Histórias reais de <span className="text-brand-green">transformação</span>
      </h2>
      <p className="section-subtitle">
        Conheça mulheres como você que transformaram suas vidas com o Desafio em 30 Dias
      </p>
      
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Star key={index} className="h-5 w-5 fill-brand-green text-brand-green" />
          ))}
          <span className="ml-2 font-medium">4.9/5</span>
          <span className="text-sm text-muted-foreground ml-1">(baseado em 1.243 avaliações)</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Featured testimonial */}
        <div className="mb-10 bg-white rounded-xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-video md:aspect-auto relative overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${testimonials[activeIndex].videoId}`}
                className="absolute top-0 left-0 w-full h-full"
                title={`Depoimento de ${testimonials[activeIndex].name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <Badge className="mb-2 bg-brand-green text-white">{testimonials[activeIndex].result}</Badge>
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].age}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-green">{testimonials[activeIndex].title}</h3>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 h-8 w-8 text-brand-green/20" />
                  <p className="text-lg text-muted-foreground mb-4 pl-6">{testimonials[activeIndex].text}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-brand-gray-light hover:bg-brand-green/20 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div className="flex space-x-1">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`h-2 rounded-full transition-all ${activeIndex === idx ? 'w-6 bg-brand-green' : 'w-2 bg-brand-gray-dark'}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Ver depoimento ${idx + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-brand-gray-light hover:bg-brand-green/20 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, idx) => (
            <button 
              key={testimonial.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-2 rounded-lg transition-all ${activeIndex === idx ? 'bg-brand-green/10 border border-brand-green/30' : 'bg-white hover:bg-brand-gray-light'}`}
            >
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-2">
                  <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm line-clamp-1">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground line-clamp-1">{testimonial.result}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg font-medium">
          Se elas conseguiram, <span className="text-brand-green font-bold">você também pode!</span>
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
