import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/Icon';
import FilterTags from '@/components/common/FilterTags';
import cases from '@/data/cases.json';

const Casos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({
    sector: [],
    objective: []
  });

  // Get unique values for filters
  const sectors = [...new Set(cases.map(c => c.sector))];
  const objectives = [...new Set(cases.flatMap(c => c.objective))];

  const toggleFilter = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value) 
        ? prev[key].filter(v => v !== value)
        : [...prev[key], value]
    }));
  };

  const removeFilter = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].filter(v => v !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({ sector: [], objective: [] });
    setSearchTerm('');
  };

  // Filter cases
  const filteredCases = useMemo(() => {
    return cases.filter(caseItem => {
      const matchesSearch = searchTerm === '' || 
        caseItem.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.solution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.client.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSector = filters.sector.length === 0 || filters.sector.includes(caseItem.sector);
      const matchesObjective = filters.objective.length === 0 || 
        caseItem.objective.some(obj => filters.objective.includes(obj));

      return matchesSearch && matchesSector && matchesObjective;
    });
  }, [searchTerm, filters]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Casos de Sucesso
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Histórias reais de transformação com IA
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="bridge" asChild>
                <a href="#casos">Ver Casos</a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contato">Criar Seu Caso</Link>
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div id="casos" className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Buscar por desafio, solução ou empresa..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-1">
                  <span className="text-sm text-muted-foreground py-2 px-1">Setor:</span>
                  {sectors.map(sector => (
                    <Button
                      key={sector}
                      variant={filters.sector.includes(sector) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleFilter('sector', sector)}
                    >
                      {sector}
                    </Button>
                  ))}
                </div>
                
                <div className="w-full lg:w-auto"></div>
                
                <div className="flex flex-wrap gap-1">
                  <span className="text-sm text-muted-foreground py-2 px-1">Objetivo:</span>
                  {objectives.map(objective => (
                    <Button
                      key={objective}
                      variant={filters.objective.includes(objective) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleFilter('objective', objective)}
                    >
                      {objective}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <FilterTags 
              filters={filters}
              onRemoveFilter={removeFilter}
              onClearAll={clearAllFilters}
            />
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredCases.length} caso{filteredCases.length !== 1 ? 's' : ''} encontrado{filteredCases.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {filteredCases.map((caseItem, index) => (
              <div 
                key={caseItem.slug}
                className="group relative p-8 rounded-2xl border border-border bg-card hover-lift hover:border-cyan-accent/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{caseItem.sector}</Badge>
                        {caseItem.featured && (
                          <Badge variant="default" className="bg-amber-accent/20 text-amber-accent border-amber-accent/30">
                            Destaque
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-space font-semibold text-xl mb-2 group-hover:text-bridge-blue transition-colors">
                        {caseItem.client}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {caseItem.objective.map(obj => (
                          <Badge key={obj} variant="secondary" className="text-xs">
                            {obj}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="font-semibold">{caseItem.timeline}</div>
                    </div>
                  </div>

                  {/* Challenge → Solution → Impact */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        <h4 className="font-semibold text-sm">Desafio</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-4">
                        {caseItem.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-bridge-blue rounded-full"></div>
                        <h4 className="font-semibold text-sm">Nossa Abordagem</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-4">
                        {caseItem.approach}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-cyan-accent rounded-full"></div>
                        <h4 className="font-semibold text-sm">Impacto</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-4 mb-3">
                        {caseItem.impact}
                      </p>
                      
                      {/* KPIs */}
                      <div className="flex flex-wrap gap-2 pl-4">
                        {caseItem.kpis.map((kpi, i) => (
                          <Badge key={i} variant="secondary" className="bg-amber-accent/20 text-amber-accent border-amber-accent/30">
                            {kpi.value} {kpi.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  {caseItem.testimonial && (
                    <div className="bg-card/50 rounded-xl p-4 border border-border/50">
                      <blockquote className="text-sm italic mb-2">
                        "{caseItem.testimonial.quote}"
                      </blockquote>
                      <cite className="text-xs text-muted-foreground">
                        — {caseItem.testimonial.author}
                      </cite>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex items-center gap-2">
                    <Icon name="layers" size={16} className="text-muted-foreground" />
                    <div className="flex flex-wrap gap-1">
                      {caseItem.stack.map(tech => (
                        <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:border-bridge-blue group-hover:text-bridge-blue"
                      asChild
                    >
                      <Link to={`/casos/${caseItem.slug}`}>
                        Ver detalhes completos
                        <Icon name="arrow-right" size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 border-2 border-cyan-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-cyan-accent rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <Icon name="search" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-space font-semibold text-xl mb-2">
                Nenhum caso encontrado
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar seus filtros ou termo de busca
              </p>
              <Button variant="outline" onClick={clearAllFilters}>
                Limpar filtros
              </Button>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-space font-bold text-3xl mb-4">
                Pronto para Criar Seu Caso de Sucesso?
              </h2>
              <p className="text-muted-foreground mb-8">
                Vamos conversar sobre como a IA pode transformar seu negócio
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="bridge" asChild>
                  <Link to="/contato">Agendar Diagnóstico</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/servicos">Ver Nossos Serviços</Link>
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

export default Casos;