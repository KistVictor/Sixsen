import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/Icon';
import FilterTags from '@/components/common/FilterTags';
import posts from '@/data/posts.json';

const Conteudos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({
    categories: []
  });

  const categories = [...new Set(posts.flatMap(p => p.categories))];
  
  const toggleFilter = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value) 
        ? prev[key].filter(v => v !== value)
        : [...prev[key], value]
    }));
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = filters.categories.length === 0 || 
      post.categories.some(cat => filters.categories.includes(cat));

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Section spacing="xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-space font-bold text-4xl lg:text-5xl mb-6">
              Insights e Guias em IA
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conteúdo prático para sua jornada com IA
            </p>
          </div>

          <div className="mb-8">
            <Input
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={filters.categories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter('categories', category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="group p-6 rounded-2xl border border-border bg-card hover-lift hover:border-cyan-accent/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{post.categories[0]}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readMin} min</span>
                  </div>
                  
                  <h3 className="font-space font-semibold text-xl group-hover:text-bridge-blue transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      por {post.author}
                    </span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full group-hover:border-bridge-blue">
                    Ler artigo
                    <Icon name="arrow-right" size={16} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Conteudos;