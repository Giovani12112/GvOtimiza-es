/**
 * ARQUIVO DE LÓGICA - Oliveira_OTM
 */

// 1. CONFIGURAÇÃO DAS PARTÍCULAS (REDE BRANCA)
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2, "random": false },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
        "move": { "enable": true, "speed": 1.5, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    },
    "retina_detect": true
});

// 2. LÓGICA DO SISTEMA
document.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.getElementById('btn-submit');
    const inputCodigo = document.getElementById('input-codigo');
    const statusMsg = document.getElementById('status-msg');
    const btnPainel = document.getElementById('btn-painel');

    // CÓDIGO DE ACESSO DEFINIDO
    const CODIGO_MESTRE = "68fbde36f576351f1378c5d5";

    // Função para Processar Ativação
    btnSubmit.addEventListener('click', () => {
        const valorDigitado = inputCodigo.value.trim().toLowerCase();

        if (valorDigitado === CODIGO_MESTRE) {
            statusMsg.style.color = "#ffffff";
            statusMsg.innerText = "✅ ACESSO CONCEDIDO! REDIRECIONANDO...";
            
            // Salva no navegador que o usuário está autorizado
            localStorage.setItem('auth_otm', 'true');

            // Feedback visual e mudança de aba fictícia
            setTimeout(() => {
                alert("Sistema Ativado com Sucesso!");
                // Aqui você pode adicionar a lógica para mostrar as funções ocultas
            }, 800);

        } else if (valorDigitado === "") {
            statusMsg.style.color = "#ffcc00";
            statusMsg.innerText = "⚠️ Por favor, digite um código.";
        } else {
            statusMsg.style.color = "#ff4444";
            statusMsg.innerText = "❌ CÓDIGO INVÁLIDO";
        }
    });

    // Bloqueio de Aba (Se não estiver ativado, não deixa clicar em Painel)
    btnPainel.addEventListener('click', () => {
        const isAuth = localStorage.getItem('auth_otm');
        if (isAuth !== 'true') {
            statusMsg.style.color = "#ff4444";
            statusMsg.innerText = "❌ Ative o sistema para acessar o painel.";
        } else {
            // Lógica para abrir o painel de funções aqui
            alert("Abrindo Painel de Otimização...");
        }
    });
});
