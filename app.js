<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#121631">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Oliveira_OTM">
  <title>Oliveira_OTM</title>
  
  <style>
    /* Estilos Visuais do Site */
    #particles-js {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #0d0d0d;
      z-index: -1;
      top: 0;
      left: 0;
    }

    html { filter: grayscale(100%); }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: white;
      background-color: #0d0d0d;
      overflow-x: hidden;
    }

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
      background: #1a1a1a;
      color: white;
      border: 1px solid #333;
      border-radius: 10px;
      font-weight: 500;
      transition: 0.3s;
    }

    .tab-button.active {
      background: white;
      color: black;
      border-color: white;
    }

    .tab-content {
      display: none;
      padding: 0 20px 40px 20px;
    }

    .tab-content.active { display: block; }

    .activation-card, .settings, .ios-panel {
      background: rgba(255, 255, 255, 0.03);
      padding: 20px;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .setting-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .switch input { display: none; }
    .switch span {
      width: 44px;
      height: 22px;
      background: #333;
      display: block;
      border-radius: 20px;
      position: relative;
      cursor: pointer;
    }
    .switch span::after {
      content: '';
      width: 18px;
      height: 18px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: 0.3s;
    }
    .switch input:checked + span { background: #555; }
    .switch input:checked + span::after { left: 24px; }

    input[type="text"] {
      width: 100%;
      padding: 15px;
      background: #111;
      border: 1px solid #333;
      border-radius: 10px;
      color: white;
      margin-bottom: 15px;
      box-sizing: border-box;
      text-align: center;
    }

    .btn-main {
      width: 100%;
      padding: 15px;
      background: white;
      color: black;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="particles-js"></div>

  <main class="phone" style="max-width: 500px; margin: auto;">
    <header style="text-align: center; padding: 40px 20px 20px 20px;">
      <h1 style="margin: 0; font-size: 28px;">Oliveira_OTM</h1>
    </header>

    <nav class="tabs">
      <button class="tab-button active" data-tab="activationTab">Ativação</button>
      <button class="tab-button" data-tab="featuresTab">Painel OTM</button>
    </nav>

    <section class="tab-content active" id="activationTab">
      <div class="activation-card">
        <p style="text-align: center; color: #888; margin-bottom: 20px;">Insira o seu código de acesso privado</p>
        <input id="codeInput" type="text" maxlength="24" placeholder="CÓDIGO DE 24 CARACTERES" />
        <button id="activateButton" class="btn-main">Ativar Agora</button>
        <p id="resultMessage" style="text-align: center; margin-top: 15px; font-size: 14px;"></p>
      </div>
    </section>

    <section class="tab-content" id="featuresTab">
      <div class="settings">
        <h2 style="font-size: 18px; margin-bottom: 15px;">Otimização do Sistema</h2>
        <article class="setting-item"><span>Otimização de Memória</span><label class="switch"><input type="checkbox" data-key="memoria"><span></span></label></article>
        <article class="setting-item"><span>Boost de Desempenho</span><label class="switch"><input type="checkbox" data-key="boost"><span></span></label></article>
        <article class="setting-item"><span>Limpeza de Storage</span><label class="switch"><input type="checkbox" data-key="storage"><span></span></label></article>
        <article class="setting-item"><span>Modo Low Power Gaming</span><label class="switch"><input type="checkbox" data-key="lowpower"><span></span></label></article>
        <article class="setting-item"><span>Redução de Ping</span><label class="switch"><input type="checkbox" data-key="ping"><span></span></label></article>
        <article class="setting-item"><span>Proteção de Privacidade</span><label class="switch"><input type="checkbox" data-key="privacidade"><span></span></label></article>
        <article class="setting-item"><span>VPN Integrada</span><label class="switch"><input type="checkbox" data-key="vpn"><span></span></label></article>
        <article class="setting-item"><span>Firewall Avançado</span><label class="switch"><input type="checkbox" data-key="firewall"><span></span></label></article>
        <article class="setting-item"><span>Modo Estabilização</span><label class="switch"><input type="checkbox" data-key="estabilizacao"><span></span></label></article>
        <article class="setting-item"><span>Perfil 120 FPS</span><label class="switch"><input type="checkbox" data-key="fps120"><span></span></label></article>
        <article class="setting-item"><span>Full Cap (Treino)</span><label class="switch"><input type="checkbox" data-key="fullcap"><span></span></label></article>
        <article class="setting-item"><span>Precision (Treino)</span><label class="switch"><input type="checkbox" data-key="precision"><span></span></label></article>

        <button id="resetButton" style="width: 100%; padding: 10px; margin-top: 15px; background: transparent; color: #555; border: none; cursor: pointer;">Resetar Tudo</button>
      </div>
    </section>
  </main>

  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

  <script>
    // --- 1. CONFIGURAÇÃO DE PARTÍCULAS ---
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3 },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "out" }
      },
      "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } }
    });

    // --- 2. LÓGICA DE ATIVAÇÃO E SISTEMA (Seu app.js original melhorado) ---
    const CODIGO_MESTRE = "68fbde36f576351f1378c5d5";

    document.addEventListener('DOMContentLoaded', () => {
        const activateButton = document.getElementById('activateButton');
        const codeInput = document.getElementById('codeInput');
        const resultMessage = document.getElementById('resultMessage');
        const switches = document.querySelectorAll('.switch input');
        const resetButton = document.getElementById('resetButton');
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        // Função para trocar abas
        function trocarAba(tabId) {
            tabButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.tab === tabId);
            });
            tabContents.forEach(content => {
                content.classList.toggle('active', content.id === tabId);
            });
        }

        // Evento de clique nas abas
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const alvo = btn.dataset.tab;
                // Bloqueia acesso ao painel se não estiver ativado
                if (alvo === 'featuresTab' && localStorage.getItem('oliveira_auth') !== 'true') {
                    alert("Por favor, insira o código de ativação primeiro.");
                    return;
                }
                trocarAba(alvo);
            });
        });

        // Verificar status inicial
        if (localStorage.getItem('oliveira_auth') === 'true') {
            resultMessage.innerText = "✅ SISTEMA ATIVADO";
            resultMessage.style.color = "#888";
        }

        // Lógica do botão Ativar
        activateButton.addEventListener('click', () => {
            const entrada = codeInput.value.trim().toLowerCase();
            if (entrada === CODIGO_MESTRE) {
                resultMessage.innerText = "✅ ACESSO CONCEDIDO!";
                resultMessage.style.color = "#fff";
                localStorage.setItem('oliveira_auth', 'true');
                setTimeout(() => trocarAba('featuresTab'), 1000);
            } else {
                resultMessage.innerText = "❌ CÓDIGO INVÁLIDO";
                resultMessage.style.color = "#ff4444";
            }
        });

        // Carregar e salvar estados dos switches
        switches.forEach(sw => {
            const chave = sw.dataset.key;
            if (localStorage.getItem(chave) === 'true') sw.checked = true;

            sw.addEventListener('change', (e) => {
                if (localStorage.getItem('oliveira_auth') === 'true') {
                    localStorage.setItem(chave, e.target.checked);
                } else {
                    e.target.checked = false;
                    alert("Ative o sistema primeiro!");
                    trocarAba('activationTab');
                }
            });
        });

        // Reset
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                if (confirm("Resetar todas as otimizações?")) {
                    switches.forEach(sw => {
                        sw.checked = false;
                        localStorage.removeItem(sw.dataset.key);
                    });
                }
            });
        }
    });
  </script>
</body>
</html>
