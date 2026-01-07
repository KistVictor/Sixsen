import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Iniciando aplicação Sixsen...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Erro crítico: Elemento raiz #root não encontrado no DOM.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Aplicação renderizada com sucesso.");
  } catch (error) {
    console.error("Erro fatal durante a renderização do React:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; color: white; background: #0F0F10; text-align: center; font-family: sans-serif;">
        <h2 style="color: #E9522B;">Erro de Carregamento</h2>
        <p>Houve um problema ao iniciar o site. Por favor, tente atualizar a página.</p>
        <pre style="font-size: 10px; opacity: 0.5; text-align: left; display: inline-block;">${error}</pre>
      </div>
    `;
  }
}