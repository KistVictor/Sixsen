import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Servicos = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Soluções completas de IA para transformar seu negócio
            </p>
            
            <div className="p-12 rounded-2xl border-2 border-dashed border-border bg-card/50">
              <Icon name="target" size={48} className="mx-auto mb-6 text-muted-foreground" />
              <h2 className="font-space font-semibold text-2xl mb-4">
                Em Construção
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Esta página está sendo desenvolvida com conteúdo detalhado sobre nossos serviços de IA e consultoria.
              </p>
              <Button variant="bridge" asChild>
                <a href="/#services">Ver Resumo dos Serviços</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Servicos;