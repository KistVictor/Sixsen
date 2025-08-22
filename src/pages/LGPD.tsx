import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import legalData from '@/data/legal.json';

const LGPD = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'compromisso', title: 'Nosso compromisso' },
    { id: 'papeis', title: 'Papéis no tratamento' },
    { id: 'bases-legais', title: 'Bases legais utilizadas' },
    { id: 'direitos-prazos', title: 'Direitos do titular e prazos' },
    { id: 'seguranca-governanca', title: 'Segurança e governança' },
    { id: 'transferencias-internacionais', title: 'Transferências internacionais' },
    { id: 'retencao-ciclo', title: 'Retenção e ciclo de vida' },
    { id: 'cookies-consentimento', title: 'Cookies e consentimento' },
    { id: 'dpia-registros', title: 'DPIA e registros' },
    { id: 'encarregado-contato', title: 'Encarregado (DPO) e contato' },
    { id: 'foro', title: 'Foro' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
                LGPD — Compromisso com Privacidade e Proteção de Dados
              </h1>
              <div className="text-sm text-muted-foreground">
                Última atualização: {legalData.dataAtualizacao} • Vigência: {legalData.dataVigencia}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              {/* TOC - Table of Contents */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="p-6 rounded-xl border border-border bg-card/50">
                  <h3 className="font-semibold mb-4">Índice</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block text-sm px-3 py-2 rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-bridge-blue/10 text-bridge-blue font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Content */}
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <section id="compromisso" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Nosso compromisso</h2>
                  <p>
                    Tratamento de dados em conformidade com a LGPD (Lei 13.709/2018), observando princípios de finalidade, 
                    adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação 
                    e responsabilização.
                  </p>
                </section>

                <section id="papeis" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Papéis no tratamento</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Controladora</h3>
                      <p>
                        Sixsen quando define finalidades e meios (leads, contratos, faturamento, comunicações).
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Operadora</h3>
                      <p>
                        Sixsen quando trata dados em nome de clientes (desenvolvimento/implantação/suporte), 
                        seguindo contrato e instruções do cliente.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="bases-legais" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Bases legais utilizadas</h2>
                  <ul className="space-y-3">
                    <li><strong>Execução de contrato</strong></li>
                    <li><strong>Cumprimento de obrigação legal/regulatória</strong></li>
                    <li><strong>Legítimo interesse</strong> (com avaliação e opção de oposição)</li>
                    <li><strong>Consentimento</strong> (ex.: newsletter, cookies não essenciais), com revogação simples</li>
                  </ul>
                </section>

                <section id="direitos-prazos" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Direitos do titular e prazos</h2>
                  <p>
                    Confirmação, acesso, correção, anonimização/eliminação, portabilidade, informação sobre compartilhamento, 
                    oposição (legítimo interesse), revisão de decisões automatizadas (quando aplicável) e revogação de consentimento.
                  </p>
                  <p className="mt-4">
                    <strong>Atendimento:</strong> {legalData.canalPrivacidade} — resposta em até 15 dias.
                  </p>
                </section>

                <section id="seguranca-governanca" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Segurança e governança</h2>
                  <p>
                    Controles técnicos e organizacionais proporcionais ao risco (TLS, RBAC, MFA, segregação de ambientes, 
                    backups, logs, gestão de vulnerabilidades), avaliação de fornecedores, plano de resposta a incidentes 
                    com notificação a titulares e ANPD quando exigido.
                  </p>
                </section>

                <section id="transferencias-internacionais" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Transferências internacionais</h2>
                  <p>
                    Salvaguardas contratuais/técnicas adequadas, conforme a LGPD.
                  </p>
                </section>

                <section id="retencao-ciclo" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Retenção e ciclo de vida</h2>
                  <p>
                    Coleta mínima; uso limitado às finalidades; compartilhamento apenas com terceiros necessários; 
                    retenção pelo tempo devido; descarte/anonimização segura.
                  </p>
                </section>

                <section id="cookies-consentimento" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Cookies e consentimento</h2>
                  <p>
                    Banner e centro de preferências; scripts não essenciais só executam após consentimento. 
                    Gerencie em <a href="/cookies" className="text-bridge-blue hover:underline">/cookies</a>.
                  </p>
                </section>

                <section id="dpia-registros" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">DPIA e registros</h2>
                  <p>
                    Relatórios de Impacto (quando aplicável), inventário de tratamentos, contratos com operadores/suboperadores, 
                    políticas internas e treinamentos.
                  </p>
                </section>

                <section id="encarregado-contato" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Encarregado (DPO) e contato</h2>
                  {legalData.dpoNome && legalData.dpoEmail ? (
                    <p>Encarregado (DPO): {legalData.dpoNome} — {legalData.dpoEmail}</p>
                  ) : (
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <p>
                        <strong>Não há Encarregado (DPO) designado no momento.</strong>
                      </p>
                      <p className="mt-2 text-sm">
                        {legalData.canalPrivacidade}
                      </p>
                    </div>
                  )}
                </section>

                <section id="foro" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Foro</h2>
                  <p>
                    Leis do Brasil. Foro eleito: {legalData.foro}.
                  </p>
                </section>

                {/* CTA Final */}
                <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-border">
                  <Button variant="outline" asChild>
                    <a href="/contato">
                      Exercer meus direitos
                    </a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="/cookies">
                      Gerenciar cookies
                    </a>
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </Section>

        {/* Scroll to top button */}
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg"
          size="sm"
          aria-label="Voltar ao topo"
        >
          <Icon name="chevron-up" size={20} />
        </Button>
      </main>
      <Footer />
    </>
  );
};

export default LGPD;