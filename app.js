/**
 * LÓGICA TOTALMENTE COMPLETA - gvOtimização
 * Partículas Intensas + Sistema de Ativação + Trava de Segurança
 */

// 1. CONFIGURAÇÃO DAS PARTÍCULAS (Brilho e Movimento)
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 110, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "opacity": { 
            "value": 0.95, 
            "random": true, 
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.4 } 
        },
        "size": { "value": 3, "random": true },
        "line_linked": { 
            "enable": true, 
            "distance": 150, 
            "color": "#ffffff", 
            "opacity": 0.7, 
            "width": 1.5 
        },
        "move": { "enable": true, "speed": 2.2, "direction": "none", "out_mode": "out" }
    },
    "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } },
    "retina_detect": true
});

// 2. GERENCIAMENTO DO APLICATIVO
document.addEventListener('DOMContentLoaded', () => {
    // Código Mestre
    const CODIGO_MESTRE = "68fbde36f576351f1378c5d5";

    // Elementos da Interface
    const btnAtivar = document.getElementById('btn-ativar');
    const inputCodigo = document.getElementById('input-codigo');
    const msgStatus = document.getElementById('status-msg');
    const tabAtivacao = document.getElementById('tab-ativacao');
    const tabPainel = document.getElementById('tab-painel');
    const secAtivacao = document.getElementById('sec-ativacao');
    const secPainel = document.getElementById('sec-painel');
    const switches = document.querySelectorAll('.switch input');
    const btnSalvar = document.getElementById('btn-salvar');

    // FUNÇÃO: Trocar de Aba com Verificação
    function alternarParaAba(aba) {
        if (aba === 'painel') {
            if (localStorage.getItem('auth_otm') === 'true') {
                secPainel.classList.add('active');
                secAtivacao.classList.remove('active');
                tabPainel.classList.add('active');
                tabAtivacao.classList.remove('active');
                secPainel.style.display = "flex";
                secAtivacao.style.display = "none";
            } else {
                msgStatus.style.color = "#ff4444";
                msgStatus.innerText = "❌ BLOQUEADO: ATIVE O CÓDIGO PRIMEIRO!";
            }
        } else {
            secAtivacao.classList.add('active');
            secPainel.classList.remove('active');
            tabAtivacao.classList.add('active');
            tabPainel.classList.remove('active');
            secAtivacao.style.display = "flex";
            secPainel.style.display = "none";
        }
    }

    // Eventos das Abas
    tabAtivacao.addEventListener('click', () => alternarParaAba('ativacao'));
    tabPainel.addEventListener('click', () => alternarParaAba('painel'));

    // LÓGICA DE ATIVAÇÃO
    btnAtivar.addEventListener('click', () => {
        const codigoDigitado = inputCodigo.value.trim();

        if (codigoDigitado === CODIGO_MESTRE) {
            msgStatus.style.color = "#00e5ff";
            msgStatus.innerText = "✅ SUCESSO! LIBERANDO PAINEL...";
            localStorage.setItem('auth_otm', 'true');
            
            // Vai para o painel automaticamente após 1 segundo
            setTimeout(() => alternarParaAba('painel'), 1000);
        } else {
            msgStatus.style.color = "#ff4444";
            msgStatus.innerText = "❌ CÓDIGO INVÁLIDO";
            inputCodigo.value = "";
        }
    });

    // TRAVA FÍSICA DOS SWITCHES (11 FUNÇÕES)
    switches.forEach((sw) => {
        sw.addEventListener('click', (e) => {
            if (localStorage.getItem('auth_otm') !== 'true') {
                e.preventDefault(); // Impede o switch de ligar
                msgStatus.style.color = "#ff4444";
                msgStatus.innerText = "❌ ATIVE O CÓDIGO PARA USAR AS FUNÇÕES!";
            }
        });
    });

    // BOTÃO SALVAR (SIMULAÇÃO)
    if (btnSalvar) {
        btnSalvar.addEventListener('click', () => {
            if (localStorage.getItem('auth_otm') === 'true') {
                btnSalvar.innerText = "INJETANDO SCRIPTS...";
                btnSalvar.style.background = "#00e5ff";
                btnSalvar.disabled = true;

                setTimeout(() => {
                    alert("Otimização Aplicada! 120 FPS e Mira Precision Ativos.");
                    btnSalvar.innerText = "Salvar Alterações";
                    btnSalvar.style.background = "#fff";
                    btnSalvar.disabled = false;
                }, 2000);
            }
        });
    }
});
