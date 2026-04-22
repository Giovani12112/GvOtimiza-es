<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>gvOtimização</title>
  
  <style>
    /* Reset de App Mobile */
    * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
    
    body {
      margin: 0;
      padding: 0;
      background-color: #0d0d0d; /* Fundo Black OLED */
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Efeito de Partículas ao fundo */
    #particles-js {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .app-content {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 400px;
      padding: 40px 25px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    /* Título idêntico ao print, mas estilizado */
    .brand-title {
      font-size: 42px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 5px;
      background: linear-gradient(180deg, #ffffff 0%, #a0a0a0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -1.5px;
    }

    .subtitle {
      text-align: center;
      color: #888;
      font-size: 16px;
      margin-bottom: 40px;
    }

    /* Input Branco idêntico ao seu print, mas moderno */
    .input-container {
      margin-bottom: 20px;
    }

    input[type="text"] {
      width: 100%;
      padding: 20px;
      border-radius: 18px;
      border: none;
      background-color: #ffffff;
      color: #000;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }

    /* Botão Principal */
    .btn-activate {
      width: 100%;
      padding: 18px;
      border-radius: 18px;
      border: none;
      background: #ffffff; /* Branco puro */
      color: #000;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.1s;
      box-shadow: 0 5px 20px rgba(255,255,255,0.1);
    }

    .btn-activate:active {
      transform: scale(0.98);
    }

    /* Botões de Navegação (Baixo) */
    .nav-buttons {
      display: flex;
      gap: 12px;
      margin-top: auto; /* Joga os botões para o final da tela */
      padding-bottom: 20px;
    }

    .nav-btn {
      flex: 1;
      padding: 15px;
      border-radius: 12px;
      border: 1px solid #333;
      background: rgba(255,255,255,0.05);
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      backdrop-filter: blur(5px);
    }

    .nav-btn.active {
      background: #ffffff;
      color: #000;
      border-color: #ffffff;
    }

    /* Estilo das Funções (Aparece ao ativar) */
    #functions-panel {
      display: none;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 20px;
      padding: 15px;
      border: 1px solid #222;
    }
  </style>
</head>
<body>

  <div id="particles-js"></div>

  <div class="app-content">
    <h1 class="brand-title">gvOtimização</h1>
    <p class="subtitle">Insira seu código privado</p>

    <div id="activation-screen">
      <div class="input-container">
        <input type="text" id="appCode" placeholder="Coloque seu codigo aqui">
      </div>
      <button class="btn-activate" onclick="validarCodigo()">Ativar Código</button>
      <p id="msg" style="text-align: center; margin-top: 15px; font-size: 13px;"></p>
    </div>

    <div class="nav-buttons">
      <button class="nav-btn active">Funções</button>
      <button class="nav-btn">iOS</button>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script>
    // Configuração das Partículas (Estilo Matrix/Premium)
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "opacity": { "value": 0.3 },
        "size": { "value": 2 },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 1.5 }
      }
    });

    function validarCodigo() {
        const code = document.getElementById('appCode').value;
        const msg = document.getElementById('msg');
        
        if(code === "68fbde36f576351f1378c5d5") {
            msg.style.color = "#44ff44";
            msg.innerText = "ACESSO LIBERADO!";
            // Aqui você redireciona para a tela de funções do seu app
        } else {
            msg.style.color = "#ff4444";
            msg.innerText = "CÓDIGO INVÁLIDO!";
        }
    }
  </script>
</body>
</html>
