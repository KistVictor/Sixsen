import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Container from './Container';
import Icon from '@/components/ui/Icon';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Serviços', href: '/servicos' },
      { name: 'Casos', href: '/casos' },
      { name: 'Sobre', href: '/sobre' },
      { name: 'Conteúdos', href: '/conteudos' },
      { name: 'Contato', href: '/contato' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Termos de Uso', href: '/termos' },
      { name: 'LGPD', href: '/lgpd' }
    ],
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/sixsen', icon: 'external-link' },
      { name: 'Twitter', href: 'https://twitter.com/sixsen', icon: 'external-link' }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <Container>
        <div className="py-12 lg:py-16">
          {/* Newsletter Section */}
          <div className="mb-12 p-8 rounded-2xl border border-border bg-gradient-subtle">
            <div className="max-w-2xl">
              <h3 className="font-space font-semibold text-xl mb-2">
                Insights de IA direto na sua caixa de entrada
              </h3>
              <p className="text-muted-foreground mb-6">
                Receba guias práticos, casos de sucesso e tendências de IA para empresas. Sem spam, só conteúdo valioso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-bridge-blue"
                />
                <Button variant="bridge" size="lg">
                  Inscrever-se
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Ao se inscrever, você concorda com nossa Política de Privacidade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-bridge rounded-xl">
                  <span className="text-white font-space font-bold text-lg">S</span>
                </div>
                <div>
                  <span className="font-space font-bold text-xl">Sixsen</span>
                  <p className="text-sm text-muted-foreground">Mente que Conecta</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Traduzimos complexidade em resultado com IA. Consultoria estratégica, 
                arquitetura e desenvolvimento sob medida para o seu contexto.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Email:</strong> contato@sixsen.com.br
                </p>
                <p className="text-sm">
                  <strong>WhatsApp:</strong> +55 (11) 99999-9999
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-medium mb-4">Navegação</h4>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-bridge-blue transition-colors focus-ring rounded"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="font-medium mb-4">Legal & Social</h4>
              <ul className="space-y-3 mb-6">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-bridge-blue transition-colors focus-ring rounded"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-3">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary hover:bg-bridge-blue hover:text-white transition-all focus-ring"
                    aria-label={item.name}
                  >
                    <Icon name={item.icon as any} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Sixsen. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com 💙 para conectar tecnologia e pessoas
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;