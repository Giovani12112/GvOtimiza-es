/**
 * LÓGICA COMPLETA - Oliveira_OTM
 * Gerenciamento de Partículas, Ativação e Funções do Painel
 */

// 1. CONFIGURAÇÃO DAS PARTÍCULAS (BRILHO MÁXIMO IGUAL À FOTO)
particlesJS('particles-js', {
    "particles": {
        "number": { 
            "value": 100, 
            "density": { "enable": true, "value_area": 800 } 
        },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { 
            "value": 0.95, // Alta visibilidade conforme a imagem
            "random": true, 
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.4, "sync": false } 
        },
        "size": { "value": 3, "random": true },
        "line_linked": { 
            "enable": true, 
            "distance": 140, 
            "color": "#ffffff", 
            "opacity": 0.7, // Linhas bem nítidas
            "width": 1.5 
        },
        "move": { 
            "enable": true, 
            "speed": 2, 
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
    const btnSalvar = document.getElementById('apply-btn');

    // Código Mestre
    const CODIGO_MESTRE = "68fbde36f576351f1378c5d5";

    // --- FUNÇÕES DE NAVEGAÇÃO ---
    function mostrarPainel() {
        tabPainel.classList.add('active');
        tabAtivacao.classList.remove('active');
        secPainel.classList.add('active');
        secAtivacao.classList.remove('active');
    }

    function mostrarAtivacao() {
        tabAtivacao.classList.add('active');
        tabPainel.classList.remove('active');
        secAtivacao.classList.add('active');
        secPainel.classList.remove('active');
    }

    // Clique nas Abas
    tabAtivacao.addEventListener('click', mostrarAtivacao);

    tabPainel.addEventListener('click', () => {
        if (localStorage.getItem('auth_otm') === 'true') {
            mostrarPainel();
        } else {
            msgStatus.style.color = "#ff4444";
            msgStatus.innerText = "❌ SISTEMA NÃO ATIVADO";
        }
    });

    // --- LÓGICA DE ATIVAÇÃO ---
    btnAtivar.addEventListener('click', () => {
        const entrada = inputCodigo.value.trim();

        if (entrada === CODIGO_MESTRE) {
            msgStatus.style.color = "#44ff44";
            msgStatus.innerText = "✅ SUCESSO! REDIRECIONANDO...";
            localStorage.setItem('auth_otm', 'true');
            
            // Simula carregamento e troca para o painel
            setTimeout(mostrarPainel, 1200);
        } else if (entrada === "") {
            msgStatus.style.color = "#ffcc00";
            msgStatus.innerText = "⚠️ DIGITE O CÓDIGO";
        } else {
            msgStatus.style.color = "#ff4444";
            msgStatus.innerText = "❌ CÓDIGO INVÁLIDO";
        }
    });

    // --- LÓGICA DAS FUNÇÕES (SWITCHES) ---
    // Carregar estados salvos
    switches.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`opt_state_${index}`);
        if (savedState === 'true') {
            checkbox.checked = true;
        }

        // Salvar automaticamente ao mudar
        checkbox.addEventListener('change', (e) => {
            if (localStorage.getItem('auth_otm') === 'true') {
                localStorage.setItem(`opt_state_${index}`, e.target.checked);
            } else {
                e.target.checked = false;
                alert("Ative o sistema primeiro!");
            }
        });
    });

    // Botão Salvar/Aplicar
    if (btnSalvar) {
        btnSalvar.addEventListener('click', () => {
            btnSalvar.innerText = "APLICANDO...";
            btnSalvar.disabled = true;
            
            setTimeout(() => {
                btnSalvar.innerText = "ALTERAÇÕES SALVAS!";
                btnSalvar.style.background = "#44ff44";
                
                setTimeout(() => {
                    btnSalvar.innerText = "Salvar Alterações";
                    btnSalvar.style.background = "#fff";
                    btnSalvar.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
});
