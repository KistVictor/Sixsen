import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import ContactForm from '@/components/forms/ContactForm';

const Contato = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Vamos conversar sobre seu próximo projeto de IA
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            {/* Contact Options */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl border border-border bg-card text-center hover-lift transition-all duration-300">
                <Icon name="calendar" size={32} className="mx-auto mb-4 text-bridge-blue" />
                <h3 className="font-space font-semibold text-lg mb-2">
                  Agendar Diagnóstico
                </h3>
                <p className="text-muted-foreground mb-4">
                  Reunião de 30 min para entender seu contexto
                </p>
                <Button variant="bridge" size="sm" asChild>
                  <a href="https://calendly.com/sixsen" target="_blank" rel="noopener noreferrer">
                    Agendar Agora
                  </a>
                </Button>
              </div>
              
              <div className="p-8 rounded-2xl border border-border bg-card text-center hover-lift transition-all duration-300">
                <Icon name="message-circle" size={32} className="mx-auto mb-4 text-cyan-accent" />
                <h3 className="font-space font-semibold text-lg mb-2">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Conversa rápida e direta
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Conversar
                  </a>
                </Button>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h4 className="font-semibold mb-3">Outras Formas de Contato</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="mail" size={16} />
                    <span>contato@sixsen.com.br</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <h2 className="font-space font-semibold text-2xl mb-6">
                Envie sua Mensagem
              </h2>
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Contato;