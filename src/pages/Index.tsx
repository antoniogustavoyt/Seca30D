
import React, { useRef, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InclusionsSection from '@/components/InclusionsSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import UrgencySection from '@/components/UrgencySection';
import Footer from '@/components/Footer';
import { toast } from "sonner";

const Index = () => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  // Show sequence of toasts for better engagement
  useEffect(() => {
    // Initial welcome toast
    const welcomeTimer = setTimeout(() => {
      toast("👋 Bem-vinda ao Desafio em 30 Dias", {
        description: "Descubra como transformar seu corpo e sua autoestima.",
        duration: 5000,
      });
    }, 2000);
    
    // Social proof toast
    const socialProofTimer = setTimeout(() => {
      toast("🎉 5 novas alunas hoje", {
        description: "Mulheres como você estão começando a transformação agora.",
        duration: 4000,
      });
    }, 15000);
    
    // Urgency toast
    const urgencyTimer = setTimeout(() => {
      toast.warning("⏰ Últimas vagas disponíveis", {
        description: "Esta turma está quase fechando. Garanta sua vaga!",
        duration: 6000,
      });
    }, 30000);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(socialProofTimer);
      clearTimeout(urgencyTimer);
    };
  }, []);

  const scrollToCtaSection = () => {
    if (ctaSectionRef.current) {
      ctaSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      
      // Show encouragement toast when scrolling to CTA
      toast.success("Você está a um clique da transformação!", {
        description: "Vagas limitadas por turma para garantir atendimento personalizado.",
        duration: 4000,
      });
    }
  };

  const handleExternalCtaClick = () => {
    // Show confirmation toast before redirecting
    toast("Redirecionando para página de inscrição...", {
      description: "Você será direcionada para nossa página segura de pagamento.",
      duration: 2000,
    });
    
    // Tracking conversion event (if you have analytics)
    try {
      if (window.gtag) {
        window.gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'});
      }
    } catch (e) {
      console.error("Analytics error", e);
    }
    
    // Small delay to allow toast to be seen
    setTimeout(() => {
      window.location.href = "https://pay.kiwify.com.br/umvXfs8?afid=cz7mM6v8";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onCtaClick={scrollToCtaSection} />
      <HeroSection onCtaClick={scrollToCtaSection} />
      <BenefitsSection />
      
      <InclusionsSection />
      <GuaranteeSection />
      
      <div ref={ctaSectionRef}>
        <UrgencySection onCtaClick={handleExternalCtaClick} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
