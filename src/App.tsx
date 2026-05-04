import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  Scissors, 
  CheckCircle2, 
  ChevronRight, 
  Star,
  Users,
  ShieldCheck,
  Calendar,
  X,
  Plus
} from 'lucide-react';

// Data Constants
const EXPERT_NAME = "Barbeiro Gabriel";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B5597984242329&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20um%20corte!&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/barbeiro_gabriel_reis_/";
const LOCATION_URL = "https://maps.app.goo.gl/i7Y8KZRLbxFLj3SV6";

const HERO_IMAGE = "https://i.imgur.com/bdSAro3.png";

const AUTHORITY_PHOTOS = [
  "https://i.imgur.com/5axl54G.png",
  "https://i.imgur.com/qSnOGA3.png",
  "https://i.imgur.com/Wv22WC7.png"
];

const GALLERY_PHOTOS = [
  "https://i.imgur.com/jtRRk2u.png",
  "https://i.imgur.com/BgYGxfO.png",
  "https://i.imgur.com/hSOghkq.png",
  "https://i.imgur.com/ChhTzy9.png",
  "https://i.imgur.com/wQn2Ghl.png",
  "https://i.imgur.com/Q9AEnA8.png",
  "https://i.imgur.com/aLicPwp.png",
  "https://i.imgur.com/buRZJb5.png",
  "https://i.imgur.com/jkyGNTm.png",
  "https://i.imgur.com/6lqIsgc.png"
];

const REASONS_TO_TRUST = [
  {
    icon: <Users className="w-6 h-6 text-gold" />,
    title: "Atendimento Individual",
    description: "Foco total em você, sem correria de salões comerciais."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    title: "Avaliação Honesta",
    description: "Indico sempre o que melhor combina com seu rosto e estilo."
  },
  {
    icon: <Scissors className="w-6 h-6 text-gold" />,
    title: "Precisão Técnica",
    description: "Cortes executados com ferramentas de alta performance e acabamento fino."
  },
  {
    icon: <Star className="w-6 h-6 text-gold" />,
    title: "Experiência Premium",
    description: "Ambiente pensado para o seu relaxamento e conforto total."
  }
];

const STEPS = [
  {
    number: "01",
    title: "WhatsApp",
    description: "Clique no botão e envie uma mensagem rápida."
  },
  {
    number: "02",
    title: "Agendamento",
    description: "Escolhemos o melhor horário para sua rotina."
  },
  {
    number: "03",
    title: "Transformação",
    description: "Seu estilo renovado com a qualidade que você merece."
  }
];

// Components
const Button = ({ href, children, variant = 'primary', className = '' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary'; className?: string }) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-display font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variants = {
    primary: "bg-gold text-black hover:bg-gold-dark shadow-lg shadow-gold/20",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">{subtitle}</span>}
    <h2 className="text-4xl md:text-5xl font-serif">{children}</h2>
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-gold selection:text-black">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              alt="Resultado ampliado" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO */}
      <section id="home" className="relative min-h-[90vh] flex flex-col justify-end md:justify-center pt-20 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Barbeiro Gabriel" 
            className="w-full h-full object-cover object-top opacity-70 md:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40 md:bg-gradient-to-r md:from-[#0A0A0A] md:to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-4 block">
              Especialista em Visual Masculino
            </span>
            <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-[1.1]">
              Eu sou Gabriel,<br />
              <span className="text-gold italic">Barbeiro</span> em Ipixuna.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
              Resgatando a essência da barbearia clássica com técnicas modernas. Seu melhor visual começa com um atendimento exclusivo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button href={WHATSAPP_URL} className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 fill-current" />
                Agendar via WhatsApp
              </Button>
              <div className="text-white/40 text-xs italic">
                Resposta rápida • Sem compromisso
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-2xl"
            >
              <img src={AUTHORITY_PHOTOS[0]} alt="Gabriel em ação" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-[12px] border-black/10 m-4 rounded-xl pointer-events-none" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="Autoridade & Estilo">Quem Sou Eu</SectionTitle>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Minha missão vai além de simplesmente cortar cabelo. Acredito que cada homem possui um estilo único que merece ser lapidado com precisão e respeito.
                </p>
                <p>
                  Em Ipixuna, construo mais do que cortes; estabeleço conexões. No meu espaço, você não é apenas um cliente, mas alguém que busca elevar sua autoestima e imagem.
                </p>
                <ul className="grid gap-4 pt-4">
                  {[
                    "Especialista em Degradê Moderno",
                    "Acabamentos milimétricos com navalha",
                    "Visagismo aplicado para cada perfil",
                    "Ambiente focado no conforto masculino"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section id="trabalhos" className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Portfólio">Resultados Reais</SectionTitle>
          
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {GALLERY_PHOTOS.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative cursor-zoom-in rounded-xl overflow-hidden bg-white/5"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Corte Real ${i + 1}`} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Plus className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs mt-12 italic">
            * Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Diferenciais">Por que confiar em mim?</SectionTitle>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {REASONS_TO_TRUST.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.06] transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-[3rem] bg-gold flex flex-col items-center text-center text-black"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Pronto para sua melhor versão?</h2>
            <p className="text-black/70 text-lg mb-10 max-w-xl">
              Não deixe para depois. O agendamento é rápido e garante que você não perca tempo em filas.
            </p>
            <Button href={WHATSAPP_URL} variant="primary" className="bg-black text-gold hover:bg-neutral-800">
              <MessageCircle className="w-6 h-6 fill-current" />
              Agendar Agora
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Processo">Como funciona o primeiro corte</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-[1px] bg-white/10 -z-10" />
            
            {STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-6xl md:text-8xl font-serif text-white/5 mb-[-2rem] select-none">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3 z-10">{step.title}</h3>
                <p className="text-white/50">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gold/80 italic font-medium">A primeira avaliação é sempre gratuita e sem compromisso.</p>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS - BASTIDORES */}
      <section className="py-24 bg-[#0F0F0F] overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Bastidores">Onde a mágica acontece</SectionTitle>
          
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
            {AUTHORITY_PHOTOS.map((src, i) => (
              <motion.div 
                key={i}
                className="min-w-[280px] md:min-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden snap-center group relative"
              >
                <img src={src} alt="Experiência Gabriel" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                  <span className="text-gold font-semibold uppercase tracking-widest text-xs mb-2">Service Excellence</span>
                  <p className="text-white font-serif text-xl italic">Atendimento personalizado</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full transform -translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Sua imagem é o seu <br />
              <span className="text-gold italic">maior patrimônio.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Garanta seu horário e experimente o nível de cuidado que só um profissional apaixonado pelo que faz pode oferecer.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <Button href={WHATSAPP_URL} className="px-12 py-6 text-xl">
                <MessageCircle className="w-7 h-7 fill-current" />
                Agendar meu corte
              </Button>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Horários disponíveis para esta semana</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif mb-1">{EXPERT_NAME}</h3>
              <p className="text-white/40 text-sm mb-4">Barbeiro Profissional • Ipixuna</p>
              <a 
                href={LOCATION_URL} 
                className="inline-flex items-center gap-2 text-gold hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4" />
                Localização no Maps
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <a href={INSTAGRAM_URL} className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={WHATSAPP_URL} className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-white/20 text-xs font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} {EXPERT_NAME}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile Only) */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <a 
          href={WHATSAPP_URL} 
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white active:scale-90 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </motion.div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
