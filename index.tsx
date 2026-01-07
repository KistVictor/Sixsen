import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Sixsen: Inicializando módulos...");

const rootElement = document.getElementById('root');

const renderError = (err: any) => {
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 40px; color: white; background: #0F0F10; text-align: center; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h2 style="color: #E9522B; font-weight: 800;">Falha no Carregamento</h2>
        <p style="opacity: 0.7; max-width: 400px; margin: 20px 0; line-height: 1.6;">
          Houve um erro técnico ao carregar o site. Isso geralmente acontece por cache antigo ou erro de rede.
        </p>
        <button onclick="window.location.reload()" style="background: #E9522B; color: white; border: none; padding: 12px 24px; border-radius: 99px; cursor: pointer; font-weight: bold;">
          Recarregar Site
        </button>
        <div style="margin-top: 30px; text-align: left; background: #1a1a1b; padding: 15px; border-radius: 8px; width: 90%; max-width: 600px; overflow: auto;">
          <code style="font-size: 11px; color: #ff8888;">${err}</code>
        </div>
      </div>
    `;
  }
};

if (!rootElement) {
  console.error("Erro: #root não encontrado.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Sixsen: Renderização concluída.");
  } catch (error) {
    console.error("Sixsen: Erro na renderização:", error);
    renderError(error);
  }
}

// Captura erros globais de carregamento de módulos (como o erro de MIME type)
window.addEventListener('error', (event) => {
  if (event.message.includes('module script')) {
    renderError("Erro de Módulo: O navegador bloqueou o carregamento dos scripts por erro de tipo (MIME). Tente limpar o cache.");
  }
});