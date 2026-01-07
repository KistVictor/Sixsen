
import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Settings, 
  ShieldCheck, 
  Lightbulb, 
  Zap, 
  Bot, 
  Cpu, 
  LineChart, 
  Users 
} from 'lucide-react';
import { ValueProp, ServiceItem, ProcessStep } from '../types';

const Home: React.FC = () => {
  const schedulingLink = "https://calendar.app.google/vrzVZ7DRChNfGHHM8";
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551999516231&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Sixsen.";

  const valueProps: ValueProp[] = [
    {
      title: "Consultoria, não apenas Código",
      description: "Entendemos que uma IA sem propósito é apenas um custo. Atuamos como estrategistas que traduzem a tecnologia para a realidade da sua empresa.",
      icon: <Lightbulb className="w-6 h-6 text-sixsen-orange" />
    },
    {
      title: "Personalização Real",
      description: "Seu negócio é único. Nossos agentes e automações são desenvolvidos sob medida para o seu fluxo, respeitando sua cultura.",
      icon: <Settings className="w-6 h-6 text-sixsen-orange" />
    },
    {
      title: "Segurança e Ética (LGPD)",
      description: "Implementamos soluções robustas que respeitam a privacidade dos dados, trazendo segurança de grandes corporações para PMEs.",
      icon: <ShieldCheck className="w-6 h-6 text-sixsen-orange" />
    },
    {
      title: "Clareza que Conecta",
      description: "Sem 'caixas pretas'. Entregamos soluções que você entende, controla e vê valor imediato.",
      icon: <Users className="w-6 h-6 text-sixsen-orange" />
    }
  ];

  const services: ServiceItem[] = [
    {
      title: "Agentes de IA para WhatsApp",
      description: "Atendimento imediato, triagem inteligente e agendamento automático 24/7 com tom de voz humano.",
      icon: <MessageSquare className="w-8 h-8 text-sixsen-orange" />
    },
    {
      title: "Automação de Processos (RPA & IA)",
      description: "Elimine o 'copia e cola'. Integramos seu CRM, Financeiro e Operacional para rodar no piloto automático.",
      icon: <Zap className="w-8 h-8 text-sixsen-orange" />
    },
    {
      title: "Inteligência Financeira",
      description: "Agentes que analisam dados, categorizam despesas e geram insights para tomada de decisão estratégica.",
      icon: <LineChart className="w-8 h-8 text-sixsen-orange" />
    },
    {
      title: "Consultoria de Implementação",
      description: "Roadmap, governança e treinamento para empresas que querem adotar IA de forma profissional.",
      icon: <Cpu className="w-8 h-8 text-sixsen-orange" />
    }
  ];

  const processSteps: ProcessStep[] = [
    { title: "Diagnóstico Lúcido", description: "Mapeamos suas dores e identificamos onde a IA gera impacto imediato e real no ROI." },
    { title: "Estratégia Personalizada", description: "Desenhamos a solução ideal — seja agente ou automação — alinhada ao seu orçamento." },
    { title: "Implementação Ágil", description: "Desenvolvimento e integração focados em segurança, estabilidade e experiência do usuário." },
    { title: "Acompanhamento", description: "Monitoramos resultados continuamente para garantir que a tecnologia sirva ao propósito." }
  ];

  const companies = [
    "Facta Financeira",
    "The Wolves Company",
    "Zenblue",
    "Awise",
    "Performance Comercial"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-sixsen-orange/10 to-transparent blur-3xl -z-10 opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            A Inteligência Artificial que <br className="hidden md:block" />
            <span className="text-sixsen-orange">entende seu negócio</span> antes de automatizá-lo.
          </h1>
          <p className="text-sixsen-gray text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Saia do experimental e entre na era da maturidade digital. Criamos agentes de IA e automações personalizadas que transformam complexidade em clareza.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={schedulingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-sixsen-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-sixsen-orange/20 flex items-center justify-center gap-2"
            >
              Agendar Diagnóstico Gratuito <ArrowRight size={20} />
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sixsen-offwhite font-medium hover:text-sixsen-orange transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-sixsen-offwhite/5 bg-sixsen-dark/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-sixsen-gray mb-8">Empresas que evoluem seus processos com a Sixsen:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {companies.map((company, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sixsen */}
      <section className="py-24 px-6 bg-sixsen-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher a Sixsen?</h2>
            <div className="w-20 h-1 bg-sixsen-orange"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="p-8 rounded-2xl bg-sixsen-offwhite/5 card-border flex flex-col items-start gap-6">
                <div className="p-3 rounded-lg bg-sixsen-orange/10">
                  {prop.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                  <p className="text-sixsen-gray leading-relaxed text-sm">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-sixsen-dark bg-cover bg-center opacity-5 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Inteligência com Sentido Humano.</h2>
          <div className="space-y-6 text-lg md:text-xl text-sixsen-offwhite/80 leading-relaxed font-light">
            <p>
              Vivemos um ponto de virada. A tecnologia está disponível, mas a sabedoria para aplicá-la é rara. Na Sixsen, não acreditamos em automatizar pessoas, mas em evoluir processos.
            </p>
            <p>
              Nossa missão é remover o trabalho repetitivo e a ineficiência, permitindo que sua equipe foque no que realmente importa: <span className="text-sixsen-orange font-medium">estratégia, criatividade e relacionamento.</span>
            </p>
            <p className="text-2xl font-semibold text-sixsen-offwhite mt-12">
              Transformamos a "ferramenta distante" em uma "parceira de evolução".
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-6 bg-sixsen-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Nosso Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {/* Timeline Line Desktop */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-sixsen-orange/20 -z-0"></div>
            
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 relative z-10 group">
                <div className="w-20 h-20 rounded-full bg-sixsen-dark border-4 border-sixsen-orange flex items-center justify-center text-2xl font-black mb-6 group-hover:scale-110 transition-transform duration-300">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-sixsen-gray text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24 px-6 bg-sixsen-offwhite/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-sixsen-gray max-w-2xl mx-auto">Soluções modulares desenhadas para a sua realidade operacional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-10 rounded-3xl bg-sixsen-dark card-border flex gap-8 items-start hover:translate-y-[-4px] transition-all">
                <div className="shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sixsen-gray leading-relaxed mb-6">{service.description}</p>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sixsen-orange font-bold flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Saber Mais <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-sixsen-orange text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">A inteligência é artificial. <br /> O progresso é humano.</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-medium">Vamos descobrir como a IA pode liberar o potencial da sua empresa hoje?</p>
          <a 
            href={schedulingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-sixsen-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-sixsen-offwhite transition-all shadow-2xl"
          >
            Agendar Reunião de Diagnóstico
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
