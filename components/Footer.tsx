
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sixsen-dark pt-20 pb-10 border-t border-sixsen-orange/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-extrabold tracking-tighter text-sixsen-offwhite mb-6 block">
              Sixsen<span className="text-sixsen-orange">.</span>
            </Link>
            <p className="text-sixsen-gray max-w-md leading-relaxed">
              Transformamos complexidade em clareza através de Inteligência Artificial estratégica. Focamos no progresso humano, automatizando o que é repetitivo.
            </p>
          </div>
          
          <div>
            <h4 className="text-sixsen-offwhite font-bold mb-6">Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sixsen-gray hover:text-sixsen-orange transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="text-sixsen-gray hover:text-sixsen-orange transition-colors">Sobre & Portfólio</Link></li>
              <li><a href="#servicos" className="text-sixsen-gray hover:text-sixsen-orange transition-colors">Serviços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sixsen-offwhite font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sixsen-gray">
                <Mail size={18} className="text-sixsen-orange" />
                contato@sixsen.com.br
              </li>
              <li className="flex gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/kistvictor/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-sixsen-offwhite/5 rounded-full hover:bg-sixsen-orange/20 transition-all"
                >
                  <Linkedin size={20} className="text-sixsen-offwhite" />
                </a>
                <a 
                  href="https://www.instagram.com/sixsen__/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-sixsen-offwhite/5 rounded-full hover:bg-sixsen-orange/20 transition-all"
                >
                  <Instagram size={20} className="text-sixsen-offwhite" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-sixsen-offwhite/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sixsen-gray uppercase tracking-widest">
          <p>© 2026 Sixsen. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sixsen-orange transition-colors">Privacidade</a>
            <a href="#" className="hover:text-sixsen-orange transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
