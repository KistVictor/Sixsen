import React from 'react';
import { Project } from '../types';
import { ExternalLink, Quote } from 'lucide-react';

const VICTOR_PHOTO_URL = "./Victor.jpg";

const AboutPortfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Mapping Attention (IA na Saúde)",
      category: "Pesquisa & Machine Learning",
      challenge: "Identificar padrões de declínio cognitivo em idosos de forma não invasiva.",
      solution: "Estudo e aplicação de Machine Learning (SVM) em dados de Eletroencefalograma (EEG).",
      result: "83% de precisão na identificação de padrões de atenção.",
      link: "https://drive.google.com/file/d/16SsnDsfiSpX_e8qk5vK3C1edj3s3Pjgr/view"
    },
    {
      title: "Agentes Conversacionais",
      category: "Varejo & Serviços",
      challenge: "Empresas perdendo vendas por demora no WhatsApp.",
      solution: "Desenvolvimento de Agentes de IA treinados com a base de conhecimento específica da empresa.",
      result: "Atendimento 24/7 e triagem automática de demandas."
    },
    {
      title: "Awise & QuantoSobra",
      category: "Product Leadership",
      role: "Product Owner & Scrum Master",
      challenge: "Necessidade de intersecção entre estratégia e desenvolvimento ágil.",
      delivery: "Liderança técnica, gestão de backlog e facilitação ágil de squads.",
      result: "Aumento da previsibilidade de entregas."
    },
    {
      title: "Infraestrutura & Marketing",
      category: "Full Stack Development",
      role: "Desenvolvedor Full Stack",
      challenge: "Processos manuais e lentos para otimização de campanhas.",
      delivery: "Criação de ferramentas internas (React/Node/AWS) e infraestrutura escalável.",
      result: "Automação completa dos processos do time de marketing."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-sixsen-orange to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src={VICTOR_PHOTO_URL} 
                alt="Victor Kist - Fundador da Sixsen" 
                className="relative rounded-3xl w-full h-[600px] object-cover border border-sixsen-orange/20 shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-sixsen-orange font-bold uppercase tracking-widest text-sm mb-4 block">Fundador & Especialista</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Victor <br /><span className="text-sixsen-orange">Kist</span></h1>
            <p className="text-2xl font-semibold mb-8 text-sixsen-offwhite/90">
              "A ponte entre a complexidade técnica e o resultado de negócio."
            </p>
            <p className="text-sixsen-gray leading-relaxed text-lg">
              Com uma trajetória que une a visão estratégica de Produto à profundidade técnica do desenvolvimento de software, fundei a Sixsen para desmistificar a IA e gerar valor real para o mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 bg-sixsen-offwhite/5 py-24 border-y border-sixsen-orange/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Portfólio de Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-sixsen-dark p-10 rounded-3xl card-border flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-sixsen-orange bg-sixsen-orange/10 px-3 py-1 rounded-full">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sixsen-orange hover:text-orange-400">
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
                <div className="space-y-6 flex-grow text-sixsen-gray">
                   <p><strong className="text-sixsen-orange uppercase text-[10px] tracking-wider block mb-1">Desafio:</strong> {project.challenge}</p>
                   <p><strong className="text-sixsen-orange uppercase text-[10px] tracking-wider block mb-1">Solução:</strong> {project.solution || project.delivery}</p>
                   <p className="text-sixsen-offwhite pt-4 border-t border-sixsen-offwhite/5"><strong className="text-sixsen-orange uppercase text-[10px] tracking-wider block mb-1">Resultado:</strong> {project.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="mx-auto text-sixsen-orange opacity-20 w-16 h-16 mb-8" />
          <p className="text-2xl italic text-sixsen-offwhite mb-8">
            "Não me deslumbro com o código pelo código. Minha obsessão é ver a tecnologia funcionando na mão de quem precisa, gerando valor real."
          </p>
          <p className="font-bold">Victor Kist</p>
          <p className="text-sixsen-orange text-sm uppercase tracking-widest">Fundador da Sixsen</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPortfolio;