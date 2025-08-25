import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Container from './Container';
import Icon from '@/components/ui/Icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Serviços', href: '/servicos' },
    { name: 'Casos', href: '/casos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Conteúdos', href: '/conteudos' },
    { name: 'Contato', href: '/contato' }
  ];

  return (
    <header id="top" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-card-hover' 
        : 'bg-background/95 backdrop-blur-md border-b border-border shadow-card-hover'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 focus-ring rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-bridge rounded-xl">
              <span className="text-white font-space font-bold text-lg">S</span>
            </div>
            <div>
              <span className="font-space font-bold text-xl text-foreground">Sixsen</span>
              <p className="text-xs text-muted-foreground leading-none">Mente que Conecta</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-bridge-blue transition-colors focus-ring rounded-lg px-3 py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="bridge" 
              size="sm"
              className="hidden sm:flex"
              asChild
            >
              <a href="#contact" className="focus-ring">
                <Icon name="calendar" size={16} />
                Agendar Diagnóstico
              </a>
            </Button>
            
            {/* Mobile menu button - simplified for now */}
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden"
            >
              <Icon name="target" size={20} />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;