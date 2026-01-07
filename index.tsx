import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Iniciando aplicação Sixsen...");
const statusEl = document.getElementById('loading-status');

const updateStatus = (msg: string) => {
  if (statusEl) statusEl.innerText = msg;
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Erro crítico: Elemento raiz #root não encontrado no DOM.");
} else {
  try {
    updateStatus("Sincronizando módulos...");
    
    // Pequeno delay para garantir que o DOM de loading seja visível
    setTimeout(() => {
      try {
        updateStatus("Renderizando interface...");
        const root = ReactDOM.createRoot(rootElement);
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
        console.log("Aplicação montada com sucesso.");
      } catch (renderError) {
        throw renderError;
      }
    }, 100);

  } catch (error) {
    console.error("Erro fatal detectado:", error);
    rootElement.innerHTML = `
      <div style="padding: 40px; color: white; background: #0F0F10; text-align: center; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h2 style="color: #E9522B; font-weight: 800;">Erro de Inicialização</h2>
        <p style="opacity: 0.7; max-width: 400px; margin: 20px 0; line-height: 1.6;">
          Houve um conflito técnico ao carregar os módulos do React. Isso geralmente ocorre devido ao cache do navegador ou instabilidade na conexão.
        </p>
        <button onclick="window.location.reload()" style="background: #E9522B; color: white; border: none; padding: 12px 24px; border-radius: 99px; cursor: pointer; font-weight: bold; transition: opacity 0.2s;">
          Atualizar Página
        </button>
        <div style="margin-top: 40px; padding: 15px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; text-align: left; width: 100%; max-width: 500px; overflow: auto;">
          <p style="font-size: 10px; color: #E9522B; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; font-weight: bold;">Log Técnico:</p>
          <code style="font-size: 11px; color: #ff8888; white-space: pre-wrap;">${error instanceof Error ? error.stack || error.message : String(error)}</code>
        </div>
      </div>
    `;
  }
}