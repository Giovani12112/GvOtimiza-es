/**
 * LÓGICA COMPLETA - gvOtimização
 * Gerenciamento de Partículas, Ativação e Funções do Painel
 */

// 1. CONFIGURAÇÃO DAS PARTÍCULAS (BRILHO MÁXIMO IGUAL À FOTO)
particlesJS('particles-js', {
    "particles": {
        "number": { 
            "value": 110, 
            "density": { "enable": true, "value_area": 800 } 
        },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { 
            "value": 0.95, 
            "random": true, 
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.4, "sync": false } 
        },
        "size": { "value": 3, "random": true },
        "line_linked": { 
            "enable": true, 
            "distance": 150, 
            "color": "#ffffff", 
            "opacity": 0.7, 
            "width": 1.5 
        },
        "move": { 
            "enable": true, 
            "speed": 2.2, 
            "direction": "none", 
            "out_mode": "out" 
        }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    },
    "retina_detect": true
});

// 2. GERENCIAMENTO DO SISTEMA
document.addEventListener('DOMContentLoaded', () => {
    // Referências dos Elementos
    const btnAtivar = document.getElementById('btn-ativar');
    const inputCodigo = document.getElementById('input-codigo');
    const msgStatus = document.getElementById('status-msg');
    const tabAtivacao = document.getElementById('tab-ativacao');
    const tabPainel = document.getElementById('tab-painel');
    const secAtivacao = document.getElementById('sec-ativacao');
    const secPainel = document.getElementById('sec-painel');
    const switches = document.querySelectorAll('.switch input');
    const btnSalvar = document.getElementById('btn-salvar'); // Ajustado para bater com seu HTML

    // Código Mestre
    const CODIGO_MESTRE = "68fbde36f576351f1378c5d5";

    // --- FUNÇÕES DE NAVEGAÇÃO COM TRAVA ---
    function mostrarPainel() {
        if (localStorage.getItem('auth_otm') === 'true') {
            tabPainel.classList.add('active');
            tabAtivacao.classList.remove('active');
            secPainel.classList.add('active');
            secAtivacao.classList.remove('active');
            msgStatus.innerText = ""; // Limpa erros ao entrar
        } else {
            msgStatus.style.color = "#ff4444";
            msgStatus.innerText = "❌ BLOQUEADO: ATIVE O CÓDIGO PRIMEIRO!";
        }
    }

    function mostrarAtivacao() {
        tabAtivacao.classList.add('active');
        tabPainel.classList.remove('active');
        secAtivacao.classList.add('active');
        secPainel.classList.remove('active');
    }

    // Clique nas Abas
    tabAtivacao.addEventListener('click', mostrarAtivacao);
    tabPainel.addEventListener('click', mostrarPainel);

    // --- LÓGICA DE ATIVAÇÃO ---
    btnAtivar.addEventListener('click', () => {
        const entrada = inputCodigo.value.trim();

        if (entrada === CODIGO_MESTRE) {
            msgStatus.style.color = "#00e5ff"; // Azul ciano do site
            msgStatus.innerText = "✅ SUCESSO! LIBERANDO FUNÇÕES...";
            localStorage.setItem('auth_otm', 'true');
            
            setTimeout(mostrarPainel, 1200);
        } else if (entrada === "") {
            msgStatus.style.color = "#ffcc00";
            msgStatus.innerText = "⚠️ DIGITE O CÓDIGO";
        } else {
            msgStatus.style.color = "#ff4444";
            msgStatus.innerText = "❌ CÓDIGO INVÁLIDO";
            inputCodigo.value = "";
        }
    });

    // --- LÓGICA DAS FUNÇÕES (SWITCHES) COM TRAVA REAL ---
    switches.forEach((checkbox, index) => {
        // Bloqueia interação visual se não estiver logado
        checkbox.addEventListener('click', (e) => {
            if (localStorage.getItem('auth_otm') !== 'true') {
                e.preventDefault(); // Impede o switch de mexer
                msgStatus.style.color = "#ff4444";
                msgStatus.innerText = "❌ ATIVE O CÓDIGO PARA USAR AS FUNÇÕES";
                return false;
            }
        });

        // Salvar estados apenas se autorizado
        checkbox.addEventListener('change', (e) => {
            if (localStorage.getItem('auth_otm') === 'true') {
                localStorage.setItem(`opt_state_${index}`, e.target.checked);
            }
        });
    });

    // Botão Salvar
    if (btnSalvar) {
        btnSalvar.addEventListener('click', () => {
            if (localStorage.getItem('auth_otm') === 'true') {
                btnSalvar.innerText = "APLICANDO...";
                btnSalvar.disabled = true;
                
                setTimeout(() => {
                    btnSalvar.innerText = "OTIMIZAÇÃO APLICADA!";
                    btnSalvar.style.background = "#00e5ff"; // Cor ciano
                    
                    setTimeout(() => {
                        btnSalvar.innerText = "Salvar Alterações";
                        btnSalvar.style.background = "#fff";
                        btnSalvar.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    }
});
