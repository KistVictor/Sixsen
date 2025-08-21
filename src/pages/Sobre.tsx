import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Sobre = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Sobre a Sixsen
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Mente que Conecta — a ponte entre tecnologia e pessoas
            </p>
            
            <div className="p-12 rounded-2xl border-2 border-dashed border-border bg-card/50">
              <Icon name="users" size={48} className="mx-auto mb-6 text-muted-foreground" />
              <h2 className="font-space font-semibold text-2xl mb-4">
                Nossa História
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Conteúdo sobre nossa missão, visão, valores e equipe será adicionado em breve.
              </p>
              <Button variant="bridge" asChild>
                <a href="/#pillars">Conhecer Nossa Abordagem</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;