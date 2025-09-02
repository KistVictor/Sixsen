import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/Icon';
import services from '@/data/services.json';
import servicesFAQ from '@/data/servicesFAQ.json';
import CTASection from '@/components/sections/CTASection';
import homeData from '@/data/home.json';

const Servicos = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const engagementModels = [
    {
      type: "Diagnóstico Express",
      duration: "1-2 semanas",
      investment: "R$ 5k-15k",
      description: "Avaliação rápida de oportunidades de IA"
    },
    {
      type: "Consultoria Estratégica",
      duration: "2-4 semanas", 
      investment: "R$ 15k-35k",
      description: "Roadmap completo e plano de implementação"
    },
    {
      type: "Implementação PoC",
      duration: "4-8 semanas",
      investment: "R$ 25k-80k", 
      description: "Prova de valor com protótipo funcional"
    },
    {
      type: "Desenvolvimento Completo",
      duration: "8-16 semanas",
      investment: "R$ 60k-200k+",
      description: "Solução completa em produção"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Soluções completas de IA para transformar seu negócio
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="bridge" asChild>
                <a href="#servicos">Explorar Serviços</a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contato">Falar Conosco</Link>
              </Button>
            </div>
          </div>

          {/* Services Grid */}
          <div id="servicos" className="grid gap-8 md:grid-cols-2 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.slug}
                className="group relative p-8 rounded-2xl border border-border bg-card hover-lift hover:border-cyan-accent/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-space font-semibold text-xl mb-3 group-hover:text-bridge-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge variant="outline">{service.timelineWeeks}</Badge>
                      <span className="text-muted-foreground">{service.investmentRange}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-destructive rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Problema:</strong> {service.problem}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-cyan-accent rounded-full mt-2"></div>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Valor:</strong> {service.value}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:border-bridge-blue group-hover:text-bridge-blue"
                      onClick={() => setSelectedService(selectedService === service.slug ? null : service.slug)}
                    >
                      {selectedService === service.slug ? 'Menos detalhes' : 'Mais detalhes'}
                      <Icon name={selectedService === service.slug ? "chevron-up" : "chevron-down"} size={16} />
                    </Button>
                  </div>

                  {/* Expanded Details */}
                  {selectedService === service.slug && (
                    <div className="mt-6 pt-6 border-t border-border space-y-4 animate-fade-in">
                      <div>
                        <h4 className="font-semibold mb-2">Pain Points que Resolvemos:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {service.painPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Icon name="minus" size={12} className="text-destructive mt-1 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Valor Que Entregamos:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {service.valuePoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Icon name="plus" size={12} className="text-cyan-accent mt-1 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Entregáveis:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Icon name="check" size={12} className="text-cyan-accent mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="bridge" size="sm" asChild>
                        <Link to="/contato">Solicitar Proposta</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Engagement Models */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-space font-bold text-3xl mb-4">
                Modelos de Engajamento
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Escolha o formato que melhor se adapta ao seu momento e orçamento
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-card border-b border-border">
                    <th className="text-left p-4 font-space font-semibold">Modelo</th>
                    <th className="text-left p-4 font-space font-semibold">Duração</th>
                    <th className="text-left p-4 font-space font-semibold">Investimento</th>
                    <th className="text-left p-4 font-space font-semibold">Ideal Para</th>
                  </tr>
                </thead>
                <tbody>
                  {engagementModels.map((model, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-card/50">
                      <td className="p-4 font-medium">{model.type}</td>
                      <td className="p-4 text-muted-foreground">{model.duration}</td>
                      <td className="p-4 text-muted-foreground">{model.investment}</td>
                      <td className="p-4 text-muted-foreground">{model.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="font-space font-bold text-3xl mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-muted-foreground">
                Respostas para as dúvidas mais comuns sobre nossos serviços
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {services.flatMap(service => 
                  service.faqs.map((faq, index) => (
                    <AccordionItem 
                      key={`${service.slug}-${index}`} 
                      value={`${service.slug}-${index}`}
                      className="border border-border rounded-xl px-6"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                )}
                
                {/* General FAQs */}
                <AccordionItem value="general-1" className="border border-border rounded-xl px-6">
                  <AccordionTrigger>Como definimos o preço dos projetos?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Nossos preços são baseados na complexidade, escopo e valor esperado do projeto. Sempre começamos com um diagnóstico para entender suas necessidades e apresentar uma proposta personalizada.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-2" className="border border-border rounded-xl px-6">
                  <AccordionTrigger>Vocês trabalham com empresas de que tamanho?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Atendemos desde startups até grandes corporações. O importante é ter clareza sobre o desafio e disposição para co-criar a solução.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-3" className="border border-border rounded-xl px-6">
                  <AccordionTrigger>Como garantem os resultados prometidos?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Definimos métricas claras de sucesso no início do projeto e entregamos em etapas com validação contínua. Nossa metodologia prioriza prova de valor rápida.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Section>
        {/* CHAMADA FINAL */}
        <CTASection {...homeData.finalCTA} />
      </main>
      <Footer />
    </>
  );
};

export default Servicos;