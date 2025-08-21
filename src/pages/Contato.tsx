import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Contato = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Vamos conversar sobre seu próximo projeto de IA
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <div className="p-8 rounded-2xl border border-border bg-card text-center">
                <Icon name="calendar" size={32} className="mx-auto mb-4 text-bridge-blue" />
                <h3 className="font-space font-semibold text-lg mb-2">
                  Agendar Diagnóstico
                </h3>
                <p className="text-muted-foreground mb-4">
                  Reunião de 30 min para entender seu contexto
                </p>
                <Button variant="bridge" size="sm" asChild>
                  <a href="https://calendly.com/sixsen" target="_blank" rel="noopener noreferrer">
                    Agendar
                  </a>
                </Button>
              </div>
              
              <div className="p-8 rounded-2xl border border-border bg-card text-center">
                <Icon name="message-circle" size={32} className="mx-auto mb-4 text-cyan-accent" />
                <h3 className="font-space font-semibold text-lg mb-2">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Conversa rápida pelo WhatsApp
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Conversar
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="p-12 rounded-2xl border-2 border-dashed border-border bg-card/50">
              <Icon name="mail" size={48} className="mx-auto mb-6 text-muted-foreground" />
              <h2 className="font-space font-semibold text-2xl mb-4">
                Formulário de Contato
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Formulário detalhado de contato será implementado em breve.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Email:</strong> contato@sixsen.com.br
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Contato;