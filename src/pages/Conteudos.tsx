import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Conteudos = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Insights e Guias em IA
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Conteúdo prático para sua jornada com IA
            </p>
            
            <div className="p-12 rounded-2xl border-2 border-dashed border-border bg-card/50">
              <Icon name="star" size={48} className="mx-auto mb-6 text-muted-foreground" />
              <h2 className="font-space font-semibold text-2xl mb-4">
                Blog em Desenvolvimento
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Estamos criando um blog completo com guias práticos, casos de uso e insights sobre IA.
              </p>
              <Button variant="bridge" asChild>
                <a href="/#content">Ver Prévia dos Artigos</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Conteudos;