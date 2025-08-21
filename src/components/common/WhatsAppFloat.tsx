import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da Sixsen em IA e tecnologia."
  );

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Button
        size="icon"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full shadow-elegant hover:shadow-2xl focus-ring"
        asChild
      >
        <a
          href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
        >
          <Icon name="message-circle" size={24} />
        </a>
      </Button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 w-14 h-14 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
    </div>
  );
};

export default WhatsAppFloat;