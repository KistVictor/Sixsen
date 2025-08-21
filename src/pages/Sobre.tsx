import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/Icon';
import aboutData from '@/data/about.json';
import team from '@/data/team.json';

const Sobre = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Sobre a Sixsen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {aboutData.mission}
            </p>
          </div>

          {/* Narrative */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {aboutData.narrative}
            </p>
          </div>

          {/* Pillars */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-space font-bold text-3xl mb-4">
                Como Conectamos
              </h2>
              <p className="text-muted-foreground">
                Nossos pilares para traduzir complexidade em resultados
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {aboutData.pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="group text-center p-8 rounded-2xl border border-border bg-card hover-lift hover:border-cyan-accent/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="space-y-4">
                    <h3 className="font-space font-semibold text-xl group-hover:text-bridge-blue transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-4">
                      {pillar.desc}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-16">
            <div className="grid gap-8 md:grid-cols-4">
              {aboutData.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl border border-border bg-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-space font-bold text-3xl text-bridge-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-space font-bold text-3xl mb-4">
                Nossa Equipe
              </h2>
              <p className="text-muted-foreground">
                Pessoas que fazem a ponte entre tecnologia e negócios
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member, index) => (
                <div 
                  key={member.name}
                  className="group text-center p-8 rounded-2xl border border-border bg-card hover-lift hover:border-cyan-accent/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-bridge-blue to-cyan-accent"></div>
                    
                    <div>
                      <h3 className="font-space font-semibold text-xl mb-1 group-hover:text-bridge-blue transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-bridge-blue font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {member.expertise.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center gap-3">
                      {member.links.linkedin && (
                        <a 
                          href={member.links.linkedin}
                          className="p-2 rounded-full border border-border hover:border-bridge-blue hover:text-bridge-blue transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Icon name="users" size={16} />
                        </a>
                      )}
                      {member.links.email && (
                        <a 
                          href={`mailto:${member.links.email}`}
                          className="p-2 rounded-full border border-border hover:border-bridge-blue hover:text-bridge-blue transition-colors"
                          aria-label="E-mail"
                        >
                          <Icon name="mail" size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-space font-bold text-3xl mb-4">
                Nossos Princípios
              </h2>
              <p className="text-muted-foreground">
                O que nos guia em cada projeto
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                {aboutData.principles.map((principle, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-cyan-accent rounded-full mt-2"></div>
                    <p className="text-muted-foreground">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partnerships */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-space font-bold text-3xl mb-4">
                Parceiros e Certificações
              </h2>
              <p className="text-muted-foreground">
                Reconhecimento e parcerias que validam nossa expertise
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {aboutData.partnerships.map((partner, index) => (
                <div 
                  key={partner.name}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover-lift transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-muted rounded"></div>
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {aboutData.certifications.map((cert, index) => (
                <Badge key={cert} variant="outline">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-space font-bold text-3xl mb-4">
                Pronto para Conectar?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos traduzir sua visão em resultados concretos
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="bridge" asChild>
                  <Link to="/contato">Conversar Conosco</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/servicos">Ver Como Trabalhamos</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;