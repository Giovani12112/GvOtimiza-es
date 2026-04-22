<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0d0d0d">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Oliveira_OTM">
  <title>Oliveira_OTM</title>
  
  <style>
    /* --- ESTILOS VISUAIS --- */
    
    /* Fundo de partículas fixo atrás de tudo */
    #particles-js {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #0d0d0d; /* Fundo preto profundo */
      z-index: -1; /* Garante que fique atrás do conteúdo */
      top: 0;
      left: 0;
    }

    /* Estilo global do corpo */
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: white;
      background-color: #0d0d0d;
      overflow-x: hidden; /* Evita barra de rolagem horizontal */
      display: flex;
      justify-content: center; /* Centraliza o app na tela */
    }

    /* Container principal que simula a largura de um celular */
    .app-container {
      width: 100%;
      max-width: 500px;
      min-height: 100vh;
      position: relative;
    }

    /* Cabeçalho */
    header {
      text-align: center;
      padding: 40px 20px 20px 20px;
    }

    header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    /* Navegação das abas */
    .tabs {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;
      padding: 0 15px;
    }

    .tab-button {
      flex: 1;
      padding: 12px;
      cursor: pointer;
      background: #1a1a1a; /* Cinza escuro para abas inativas */
      color: #a0a0a0;
      border: 1px solid #333;
      border-radius: 10px;
      font-weight: 600;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    /* Estado da aba ativa */
    .tab-button.active {
      background: white;
      color: black;
      border-color: white;
    }

    /* Conteúdo das abas */
    .tab-content {
      display: none; /* Escondido por padrão */
      padding: 0 20px 40px 20px;
    }

    .tab-content.active {
      display: block; /* Mostra quando ativo */
    }

    /* Estilo dos cards (Ativação e Painel) */
    .card {
      background: rgba(255, 255, 255, 0.04); /* Fundo semi-transparente */
      padding: 25px;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(5px); /* Efeito de desfoque no fundo */
    }

    /* Campo de entrada de texto */
    input[type="text"] {
      width: 100%;
      padding: 15px;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid #333;
      border-radius: 10px;
      color: white;
      margin-bottom: 15px;
      box-sizing: border-box;
      font-size: 16px;
      text-align: center;
      letter-spacing: 1px;
    }
    
    input[type="text"]:focus {
      outline: none;
      border-color: #555;
    }

    /* Botão Principal */
    .btn-main {
      width: 100%;
      padding: 16px;
      background: white;
      color: black;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.2s ease;
    }
    
    .btn-main:active {
      background: #e0e0e0;
    }

    /* Texto de resultado da ativação */
    #resultMessage {
      text-align: center;
      margin-top: 15px;
      font-size: 14px;
      font-weight: 500;
      min-height: 1em; /* Evita que o layout pule */
    }

    /* Estilo dos itens de configuração (Switches) */
    .setting-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .setting-item:last-child {
      border-bottom: none;
    }

    .setting-item span {
      font-size: 15px;
      color: #e0e0e0;
    }

    /* --- Switch Customizado (Estilo iOS) --- */
    .switch input {
      display: none;
    }
    
    .switch span {
      width: 44px;
      height: 24px;
      background: #333;
      display: block;
      border-radius: 20px;
      position: relative;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .switch span::after {
      content: '';
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: left 0.3s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    /* Estado do switch ligado */
    .switch input:checked + span {
      background: #4caf50; /* Cor verde para ativado */
    }
    
    .switch input:checked + span::after {
      left: 22px;
    }

    /* Botão Resetar */
    #resetButton {
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      background: transparent;
      color: #666;
      border: none;
      cursor: pointer;
      font-size: 13px;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div id="particles-js"></div>

  <div class="app-container">
    <header>
      <h1>Oliveira_OTM</h1>
    </header>

    <nav class="tabs">
      <button class="tab-button active" data-tab="activationTab">Ativação</button>
      <button class="tab-button" data-tab="featuresTab">Painel OTM</button>
    </nav>

    <section class="tab-content active" id="activationTab">
      <div class="card">
        <p style="text-align: center; color: #a0a0a0; margin-bottom: 25px; font-size: 14px;">Insira o seu código de acesso privado</p>
        <input id="codeInput" type="text" maxlength="24" placeholder="CÓDIGO DE 24 CARACTERES" />
        <button id="activateButton" class="btn-main">Ativar Agora</button>
        <p id="resultMessage"></p>
      </div>
    </section>

    <section class="tab-content" id="featuresTab">
      <div class="card">
        <h2 style="font-size: 18px; margin-bottom: 20px; margin-top: 0;">Otimização do Sistema</h2>

        <article class="setting-item">
          <span>Otimização de Memória</span>
          <label class="switch"><input type="checkbox" data-key="memoria"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Boost de Desempenho</span>
          <label class="switch"><input type="checkbox" data-key="boost"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Limpeza de Storage</span>
          <label class="switch"><input type="checkbox" data-key="storage"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Modo Low Power Gaming</span>
          <label class="switch"><input type="checkbox" data-key="lowpower"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Redução de Ping</span>
          <label class="switch"><input type="checkbox" data-key="ping"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Proteção de Privacidade</span>
          <label class="switch"><input type="checkbox" data-key="privacidade"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>VPN Integrada</span>
          <label class="switch"><input type="checkbox" data-key="vpn"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Firewall Avançado</span>
          <label class="switch"><input type="checkbox" data-key="firewall"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Modo Estabilização</span>
          <label class="switch"><input type="checkbox" data-key="estabilizacao"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Perfil 120 FPS</span>
          <label class="switch"><input type="checkbox" data-key="fps120"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Full Cap (Treino)</span>
          <label class="switch"><input type="checkbox" data-key="fullcap"><span></span></label>
        </article>
        
        <article class="setting-item">
          <span>Precision (Treino)</span>
          <label class="switch"><input type="checkbox" data-key="precision"><span></span></label>
        </article>

        <button id="resetButton">Resetar todas as otimizações</button>
      </div>
    </section>
  </div>

  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  
  <script>
    // --- 1. CONFIGURAÇÃO DO FUNDO DE PARTÍCULAS ---
    // Cria os pontos e linhas brancas que se movem no fundo preto
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2, "random": false },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.15, "width": 1 },
        "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "out" }
      },
      "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } }
    });


    // --- 2. LÓGICA DO SEU APLICATIVO (app.js Original Integrado) ---
    document.addEventListener('DOMContentLoaded', () => {
        // --- REFERÊNCIAS ---
        const activateButton = document.getElementById('activateButton');
        const codeInput = document.getElementById('codeInput');
        const resultMessage = document.getElementById('resultMessage');
        const switches = document.querySelectorAll('.switch input');
        const resetButton = document.getElementById('resetButton');
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        // --- 1. CÓDIGO DE ATIVAÇÃO MESTRE ---
        const CODIGO_MESTRE = "68fbde36f576351f1378c5d5"; 

        // Função para trocar de aba visualmente
        function trocarAba(tabId) {
            // Remove 'active' de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Adiciona 'active' na aba solicitada
            const btnAlvo = document.querySelector(`[data-tab="${tabId}"]`);
            const conteudoAlvo = document.getElementById(tabId);

            if (btnAlvo && conteudoAlvo) {
                btnAlvo.classList.add('active');
                conteudoAlvo.classList.add('active');
            }
        }

        // Lógica de clique nos botões das abas
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const alvo = btn.dataset.tab;
                
                // Bloqueia acesso ao painel se não estiver ativado
                if (alvo === 'featuresTab' && localStorage.getItem('oliveira_auth') !== 'true') {
                    resultMessage.innerText = "❌ Ative o sistema para acessar o painel.";
                    resultMessage.style.color = "#ff4444";
                    // Treme a mensagem para dar feedback
                    resultMessage.style.animation = "shake 0.3s";
                    setTimeout(()=> resultMessage.style.animation = "", 300);
                    return; 
                }
                
                trocarAba(alvo);
            });
        });

        // Verificar status inicial (se já foi ativado antes)
        if (localStorage.getItem('oliveira_auth') === 'true') {
            resultMessage.innerText = "✅ SISTEMA ATIVADO";
            resultMessage.style.color = "#888";
        }

        // --- 2. LÓGICA DO BOTÃO ATIVAR ---
        activateButton.addEventListener('click', () => {
            // Pega o código digitado, remove espaços vazios e ignora maiúsculas/minúsculas
            const entrada = codeInput.value.trim().toLowerCase();

            if (entrada === CODIGO_MESTRE) {
                resultMessage.innerText = "✅ ACESSO CONCEDIDO!";
                resultMessage.style.color = "#fff";
                localStorage.setItem('oliveira_auth', 'true');
                
                // Aguarda 1 segundo para o usuário ler e pula automaticamente para o painel
                setTimeout(() => trocarAba('featuresTab'), 1000);
            } else {
                resultMessage.innerText = "❌ CÓDIGO INVÁLIDO";
                resultMessage.style.color = "#ff4444";
            }
        });

        // --- 3. LÓGICA DAS FUNÇÕES DO PAINEL (Switches) ---
        switches.forEach(sw => {
            const chave = sw.dataset.key; // Pega o identificador único (ex: 'memoria')
            
            // Carrega o estado salvo no navegador (se estava ligado ou desligado)
            if (localStorage.getItem(chave) === 'true') {
                sw.checked = true;
            }

            // Ouvinte para quando o usuário muda o switch (liga/desliga)
            sw.addEventListener('change', (e) => {
                // Segurança extra: verifica se está ativado antes de salvar
                if (localStorage.getItem('oliveira_auth') === 'true') {
                    localStorage.setItem(chave, e.target.checked);
                } else {
                    // Se tentar burlar, desliga o switch e força a voltar para ativação
                    e.target.checked = false;
                    alert("Ação não permitida. Ative o sistema primeiro.");
                    location.reload(); 
                }
            });
        });

        // --- 4. LÓGICA DO RESET ---
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                // Pergunta antes de apagar tudo
                if (confirm("Resetar todas as otimizações e o código de ativação?")) {
                    // Desliga visualmente os switches e apaga do armazenamento
                    switches.forEach(sw => {
                        sw.checked = false;
                        localStorage.removeItem(sw.dataset.key);
                    });
                    
                    // Opcional: Remover também a autenticação para testar
                    localStorage.removeItem('oliveira_auth');
                    location.reload(); // Recarrega para voltar ao estado inicial
                }
            });
        }
    });
    
    // Adiciona uma animação simples de tremor para erro
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = "@keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }";
    document.head.appendChild(styleSheet);
  </script>
</body>
</html>
