
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Quote } from 'lucide-react';

// Using the local image file Victor.JPG
const VICTOR_PHOTO_URL = "./Victor.JPG";

const AboutPortfolio: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5551999516231&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Sixsen.";

  const projects: Project[] = [
    {
      title: "Mapping Attention (IA na Saúde)",
      category: "Pesquisa & Machine Learning",
      challenge: "Identificar padrões de declínio cognitivo em idosos de forma não invasiva.",
      solution: "Estudo e aplicação de Machine Learning (SVM) em dados de Eletroencefalograma (EEG).",
      result: "83% de precisão na identificação de padrões de atenção. Capacidade de lidar com dados complexos e sensíveis com rigor científico.",
      link: "https://drive.google.com/file/d/16SsnDsfiSpX_e8qk5vK3C1edj3s3Pjgr/view"
    },
    {
      title: "Agentes Conversacionais",
      category: "Varejo & Serviços",
      challenge: "Empresas perdendo vendas por demora no WhatsApp e triagem desorganizada.",
      solution: "Desenvolvimento de Agentes de IA treinados com a base de conhecimento específica da empresa.",
      result: "Atendimento 24/7, triagem automática de demandas e aumento na conversão de leads, liberando a equipe humana para casos complexos."
    },
    {
      title: "Awise & QuantoSobra",
      category: "Product Leadership",
      role: "Product Owner & Scrum Master",
      challenge: "Necessidade de intersecção entre estratégia e desenvolvimento ágil.",
      delivery: "Liderança técnica, gestão de backlog e facilitação ágil de squads.",
      result: "Aumento da previsibilidade de entregas e lançamento de features críticas que impulsionaram o crescimento do produto."
    },
    {
      title: "Infraestrutura & Marketing",
      category: "Full Stack Development",
      role: "Desenvolvedor Full Stack",
      challenge: "Processos manuais e lentos para otimização de campanhas.",
      delivery: "Criação de ferramentas internas (React/Node/AWS) e infraestrutura escalável.",
      result: "Automação completa dos processos do time de marketing, garantindo eficiência operacional e decisões baseadas em dados reais."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Specialist Hero */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-sixsen-orange to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src={VICTOR_PHOTO_URL} 
                alt="Victor Kist - Fundador da Sixsen" 
                className="relative rounded-3xl w-full h-[600px] object-cover border border-sixsen-orange/20 shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-sixsen-orange font-bold uppercase tracking-widest text-sm mb-4 block">Fundador & Especialista</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Victor <br /><span className="text-sixsen-orange">Kist</span></h1>
            <p className="text-2xl font-semibold mb-8 text-sixsen-offwhite/90">
              "A ponte entre a complexidade técnica e o resultado de negócio."
            </p>
            <p className="text-sixsen-gray leading-relaxed text-lg mb-8">
              Com uma trajetória que une a visão estratégica de Produto (Product Owner/Scrum Master) à profundidade técnica do Desenvolvimento de Software, fundei a Sixsen com um objetivo claro: desmistificar a IA.
            </p>
            <p className="text-sixsen-gray leading-relaxed text-lg">
              Minha experiência liderando times ágeis e desenvolvendo arquiteturas escaláveis permite que a Sixsen entregue não apenas software, mas soluções de negócio robustas que geram valor imediato.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 bg-sixsen-offwhite/5 py-24 border-y border-sixsen-orange/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfólio de Projetos</h2>
            <p className="text-sixsen-gray">O que já construímos e o impacto gerado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-sixsen-dark p-10 rounded-3xl card-border flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-sixsen-orange bg-sixsen-orange/10 px-3 py-1 rounded-full">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                  </div>
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sixsen-orange hover:text-orange-400 transition-colors"
                      title="Ver projeto"
                    >
                      <ExternalLink size={24} />
                    </a>
                  ) : (
                    <ExternalLink className="text-sixsen-gray/50" size={24} />
                  )}
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-xs uppercase text-sixsen-orange font-bold tracking-widest mb-1">O Desafio</h4>
                    <p className="text-sixsen-gray leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-sixsen-orange font-bold tracking-widest mb-1">{project.delivery ? 'A Entrega' : 'A Solução'}</h4>
                    <p className="text-sixsen-gray leading-relaxed">{project.delivery || project.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-sixsen-offwhite/5">
                    <h4 className="text-xs uppercase text-sixsen-orange font-bold tracking-widest mb-1">Resultado / Impacto</h4>
                    <p className="text-sixsen-offwhite leading-relaxed font-medium">{project.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Vision */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-12 -left-12 text-sixsen-orange opacity-20 w-32 h-32 -z-10" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl leading-relaxed font-medium italic mb-10 text-sixsen-offwhite">
              "Não me deslumbro com o código pelo código. Minha obsessão é ver a tecnologia funcionando na mão de quem precisa, gerando valor real, tempo livre e clareza mental. A Sixsen é a materialização dessa crença."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-sixsen-orange mb-4"></div>
              <p className="font-bold text-lg">Victor</p>
              <p className="text-sixsen-orange text-sm uppercase tracking-widest">Fundador da Sixsen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-sixsen-orange p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sua empresa é o nosso próximo case de sucesso.</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Quer levar a maturidade da Inteligência Artificial para o seu dia a dia operacional?</p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-sixsen-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-sixsen-offwhite transition-all shadow-xl"
          >
            Falar diretamente com o Victor
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPortfolio;
