import React from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';

// Section Components
import Hero from '@/components/sections/Hero';
import LogoCarousel from '@/components/sections/LogoCarousel';
import PillarCard from '@/components/sections/PillarCard';
import ServiceCard from '@/components/sections/ServiceCard';
import CaseCard from '@/components/sections/CaseCard';
import MethodStep from '@/components/sections/MethodStep';
import BlogCard from '@/components/sections/BlogCard';
import Testimonial from '@/components/sections/Testimonial';
import CTASection from '@/components/sections/CTASection';

// Data
import homeData from '@/data/home.json';
import servicesData from '@/data/services.json';
import casesData from '@/data/cases.json';
import postsData from '@/data/posts.json';
import testimonialsData from '@/data/testimonials.json';

const Index = () => {
  // Filter featured content
  const featuredCases = casesData.filter(c => c.featured);
  const featuredTestimonial = testimonialsData.find(t => t.featured);

  return (
    <>
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <Hero {...homeData.hero} />

        {/* SOCIAL PROOF - LOGOS */}
        <Section spacing="md" className="border-b border-border">
          <LogoCarousel title={homeData.socialProof.title} />
          
          {/* Mini testimonial */}
          <div className="text-center mt-8">
            <blockquote className="text-lg font-medium text-foreground mb-2">
              "{homeData.socialProof.testimonialSnippet.text}"
            </blockquote>
            <cite className="text-sm text-muted-foreground">
              — {homeData.socialProof.testimonialSnippet.author}, {homeData.socialProof.testimonialSnippet.position}
            </cite>
          </div>
        </Section>

        {/* COMO CONECTAMOS - PILLARS */}
        <Section id="pillars" spacing="xl">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              {homeData.pillars.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {homeData.pillars.subtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {homeData.pillars.items.map((pillar, index) => (
              <PillarCard
                key={pillar.title}
                icon={pillar.icon as any}
                title={pillar.title}
                description={pillar.description}
                index={index}
              />
            ))}
          </div>
        </Section>

        {/* SERVIÇOS */}
        <Section id="services" spacing="xl" className="bg-card/30">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              {homeData.services.title}
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                problem={service.problem}
                value={service.value}
                slug={service.slug}
                index={index}
              />
            ))}
          </div>
        </Section>

        {/* CASOS DE SUCESSO */}
        <Section id="cases" spacing="xl">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              {homeData.cases.title}
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {featuredCases.map((case_, index) => (
              <CaseCard
                key={case_.id}
                client={case_.client}
                industry={case_.industry}
                challenge={case_.challenge}
                approach={case_.approach}
                impact={case_.impact}
                keyMetric={case_.keyMetric}
                timeline={case_.timeline}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/casos" 
              className="inline-flex items-center space-x-2 text-bridge-blue hover:text-cyan-accent font-medium transition-colors focus-ring rounded-lg px-4 py-2"
            >
              <span>{homeData.cases.cta}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Section>

        {/* METODOLOGIA */}
        <Section id="methodology" spacing="xl" className="bg-card/30">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              {homeData.methodology.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {homeData.methodology.subtitle}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {homeData.methodology.steps.map((step, index) => (
              <MethodStep
                key={step.title}
                icon={step.icon as any}
                title={step.title}
                description={step.description}
                index={index}
                isLast={index === homeData.methodology.steps.length - 1}
              />
            ))}
          </div>
        </Section>

        {/* CONTEÚDOS */}
        <Section id="content" spacing="xl">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              {homeData.content.title}
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {postsData.map((post, index) => (
              <BlogCard
                key={post.id}
                title={post.title}
                summary={post.summary}
                readingTime={post.readingTime}
                href={post.href}
                category={post.category}
                publishDate={post.publishDate}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/conteudos" 
              className="inline-flex items-center space-x-2 text-bridge-blue hover:text-cyan-accent font-medium transition-colors focus-ring rounded-lg px-4 py-2"
            >
              <span>{homeData.content.cta}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Section>

        {/* CONFIANÇA - TESTIMONIALS */}
        <Section id="trust" spacing="xl" className="bg-card/30">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Confiança
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {homeData.trust.title}
            </p>
          </div>
          
          {featuredTestimonial && (
            <div className="max-w-4xl mx-auto mb-12">
              <Testimonial {...featuredTestimonial} />
            </div>
          )}
          
          {/* Placeholder badges/certificates */}
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 bg-gradient-bridge rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-sm font-medium">Parceiro Cloud</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 bg-gradient-bridge rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏆</span>
              </div>
              <span className="text-sm font-medium">Prêmio Inovação</span>
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

export default Index;