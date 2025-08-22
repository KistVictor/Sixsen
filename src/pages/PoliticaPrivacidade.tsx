import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import legalData from '@/data/legal.json';

const PoliticaPrivacidade = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'quem-somos', title: 'Quem somos' },
    { id: 'aplicacao', title: 'A quem se aplica' },
    { id: 'dados-coletados', title: 'Quais dados coletamos' },
    { id: 'como-coletamos', title: 'Como coletamos' },
    { id: 'finalidades', title: 'Finalidades e bases legais' },
    { id: 'compartilhamento', title: 'Compartilhamento com terceiros' },
    { id: 'transferencias', title: 'Transferências internacionais' },
    { id: 'cookies', title: 'Cookies e preferências' },
    { id: 'direitos', title: 'Direitos do titular' },
    { id: 'seguranca', title: 'Segurança da informação' },
    { id: 'retencao', title: 'Retenção e descarte' },
    { id: 'menores', title: 'Menores de idade' },
    { id: 'atualizacoes', title: 'Atualizações, lei e foro' }
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
                Política de Privacidade
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Como tratamos seus dados pessoais de forma clara e responsável.
              </p>
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
                <section id="quem-somos" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Quem somos</h2>
                  <p>
                    Sixsen Tecnologia Ltda. — CNPJ {legalData.cnpj} — Endereço: {legalData.endereco}.
                  </p>
                </section>

                <section id="aplicacao" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">A quem se aplica</h2>
                  <p>
                    Visitantes do site, leads, clientes, representantes de clientes, fornecedores e candidatos 
                    que interajam com nossos canais.
                  </p>
                </section>

                <section id="dados-coletados" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Quais dados coletamos</h2>
                  <ul className="space-y-3">
                    <li><strong>Contato/identificação:</strong> nome, e-mail, telefone, empresa, cargo.</li>
                    <li><strong>Navegação/dispositivo:</strong> IP, user agent, páginas visitadas, eventos de navegação, origem de tráfego, preferências de cookies.</li>
                    <li><strong>Comerciais/contratuais:</strong> histórico de interações, reuniões, propostas, contratos, faturamento (quando aplicável).</li>
                    <li><strong>Comunicações:</strong> mensagens via formulários, e-mail ou WhatsApp.</li>
                    <li><strong>Recrutamento (se aplicável):</strong> currículo, portfólio, informações profissionais.</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Nota:</strong> não buscamos coletar dados sensíveis; se recebidos por engano, poderemos removê-los, salvo obrigação legal.
                  </p>
                </section>

                <section id="como-coletamos" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Como coletamos</h2>
                  <p>
                    Diretamente (formulários, e-mail, WhatsApp), automaticamente (cookies/telemetria — após consentimento 
                    quando exigido) e, quando aplicável, por terceiros/parceiros com base legal adequada.
                  </p>
                </section>

                <section id="finalidades" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Finalidades e bases legais (LGPD)</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border rounded-lg">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left">Dado</th>
                          <th className="border border-border p-3 text-left">Finalidade</th>
                          <th className="border border-border p-3 text-left">Base legal</th>
                          <th className="border border-border p-3 text-left">Retenção</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="border border-border p-3">Contato (nome/e-mail/telefone/empresa)</td>
                          <td className="border border-border p-3">Atender solicitações e prospecção B2B</td>
                          <td className="border border-border p-3">Legítimo interesse ou pré-contratual</td>
                          <td className="border border-border p-3">Tratativa + 12 meses</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Newsletter/e-books</td>
                          <td className="border border-border p-3">Enviar comunicações</td>
                          <td className="border border-border p-3">Consentimento (revogável)</td>
                          <td className="border border-border p-3">Até revogação/inatividade</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Cookies/analytics</td>
                          <td className="border border-border p-3">Medir audiência e melhorar o site</td>
                          <td className="border border-border p-3">Consentimento (não essenciais)</td>
                          <td className="border border-border p-3">Conforme /cookies</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Dados contratuais</td>
                          <td className="border border-border p-3">Execução/gestão de contratos</td>
                          <td className="border border-border p-3">Execução de contrato</td>
                          <td className="border border-border p-3">Prazo contratual + legais</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Faturamento</td>
                          <td className="border border-border p-3">Obrigações fiscais</td>
                          <td className="border border-border p-3">Obrigação legal</td>
                          <td className="border border-border p-3">Prazos fiscais</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Segurança/logs</td>
                          <td className="border border-border p-3">Prevenir fraudes/incidentes</td>
                          <td className="border border-border p-3">Legítimo interesse</td>
                          <td className="border border-border p-3">6–12 meses (salvo investigação)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="compartilhamento" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Compartilhamento com terceiros</h2>
                  <p>
                    Operadores/fornecedores (hospedagem, e-mail, CRM, analytics, atendimento, agendamento), sob obrigações 
                    contratuais de segurança/privacidade; e quando necessário por obrigação legal/ordem de autoridade. 
                    Não vendemos dados pessoais.
                  </p>
                </section>

                <section id="transferencias" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Transferências internacionais</h2>
                  <p>
                    Quando ocorrerem, adotamos salvaguardas contratuais e técnicas compatíveis com a LGPD.
                  </p>
                </section>

                <section id="cookies" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Cookies e preferências</h2>
                  <p>
                    Usamos cookies e tecnologias similares. Você pode gerenciar preferências em /cookies. 
                    Cookies estritamente necessários funcionam sem consentimento.
                  </p>
                </section>

                <section id="direitos" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Direitos do titular (art. 18, LGPD)</h2>
                  <p>
                    Confirmação; acesso; correção; anonimização/eliminação; portabilidade; informação sobre compartilhamentos; 
                    oposição (legítimo interesse); revogação de consentimento; revisão de decisões automatizadas (quando aplicável).
                  </p>
                  <p className="mt-4">
                    <strong>Canal:</strong> {legalData.canalPrivacidade}
                  </p>
                  {legalData.dpoNome && legalData.dpoEmail ? (
                    <p>Encarregado (DPO): {legalData.dpoNome} — {legalData.dpoEmail}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Não há Encarregado (DPO) designado no momento. {legalData.canalPrivacidade}
                    </p>
                  )}
                </section>

                <section id="seguranca" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Segurança da informação</h2>
                  <p>
                    TLS; controle de acessos (RBAC); MFA para contas críticas; menor privilégio; segregação de ambientes; 
                    backups; logs/monitoramento; gestão de vulnerabilidades; plano de resposta a incidentes.
                  </p>
                </section>

                <section id="retencao" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Retenção e descarte</h2>
                  <p>
                    Mantemos dados pelo tempo necessário às finalidades e obrigações legais/contratuais; 
                    depois, eliminação ou anonimização segura.
                  </p>
                </section>

                <section id="menores" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Menores de idade</h2>
                  <p>
                    O site e serviços não são direcionados a menores; ao identificar coleta indevida, excluiremos os dados.
                  </p>
                </section>

                <section id="atualizacoes" className="mb-12">
                  <h2 className="font-space font-bold text-2xl mb-4">Atualizações, lei e foro</h2>
                  <p>
                    Podemos atualizar esta política; a versão vigente exibe a data no topo.
                  </p>
                  <p>
                    Leis do Brasil. Foro eleito: {legalData.foro}.
                  </p>
                </section>

                {/* CTA Final */}
                <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-border">
                  <Button variant="outline" onClick={() => window.open('#', '_blank')}>
                    Gerenciar cookies
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="/cookies">
                      Ver política de cookies
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

export default PoliticaPrivacidade;