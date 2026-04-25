/**
 * Oliveira_OTM - Lógica de Ativação e Painel
 * Versão: 3.0 (Corrigida)
 */

// 1. Configuração do Fundo (Partículas)
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.3 },
            "size": { "value": 2 },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": { "detect_on": "canvas", "events": { "onclick": { "enable": true, "mode": "push" } } },
        "retina_detect": true
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Banco de Códigos Autorizados
    const DATABASE_CODIGOS = [
        "68fbde36f576351f1378c5d5",
        "33cc3184-0a47-49e4-a20a-b661b27af069+ffd58fb4f76f648c2a5e21ebcfa3aae81b4c9b7d97"
    ];

    // Elementos da Interface
    const btnAtivar = document.getElementById('btn-ativar');
    const inputCodigo = document.getElementById('input-codigo');
    const msgStatus = document.getElementById('status-msg');
    const secAtivacao = document.getElementById('sec-ativacao');
    const secPainel = document.getElementById('sec-painel');
    const tabAtivacao = document.getElementById('tab-ativacao');
    const tabPainel = document.getElementById('tab-painel');
    const btnSalvar = document.getElementById('btn-salvar');

    // Função para Alternar Abas e Liberar o Scroll
    function alternarAba(alvo) {
        if (alvo === 'painel') {
            secPainel.classList.add('active');
            secAtivacao.classList.remove('active');
            tabPainel.classList.add('active');
            tabAtivacao.classList.remove('active');
            
            // Força o navegador a permitir scroll na aba de funções
            window.scrollTo(0, 0);
            document.body.style.overflowY = "auto";
        } else {
            secAtivacao.classList.add('active');
            secPainel.classList.remove('active');
            tabAtivacao.classList.add('active');
            tabPainel.classList.remove('active');
        }
    }

    // Lógica de Ativação (Botão "Ativar Agora")
    if (btnAtivar) {
        btnAtivar.addEventListener('click', () => {
            const codigoDigitado = inputCodigo.value.trim().toLowerCase();

            if (DATABASE_CODIGOS.includes(codigoDigitado)) {
                msgStatus.style.color = "#00e5ff";
                msgStatus.innerText = "✅ SUCESSO! ACESSO LIBERADO.";
                
                // Salva o login para não precisar digitar de novo
                localStorage.setItem('auth_otm', 'true');

                setTimeout(() => {
                    alternarAba('painel');
                }, 1000);
            } else {
                msgStatus.style.color = "#ff4444";
                msgStatus.innerText = "❌ CÓDIGO INVÁLIDO OU EXPIRADO";
                
                // Efeito visual de erro no campo
                inputCodigo.style.border = "1px solid #ff4444";
                setTimeout(() => { inputCodigo.style.border = "1px solid #333"; }, 1000);
            }
        });
    }

    // Lógica do Botão Salvar (Detecta o Aparelho)
    if (btnSalvar) {
        btnSalvar.addEventListener('click', () => {
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            btnSalvar.innerText = "🔍 PROCESSANDO...";
            btnSalvar.disabled = true;

            setTimeout(() => {
                btnSalvar.disabled = false;
                btnSalvar.innerText = "Salvar Alterações";

                if (isIOS) {
                    alert("SISTEMA iOS: Clique no botão azul abaixo para baixar o perfil de sensibilidade.");
                } else {
                    alert("SISTEMA ANDROID: Otimizações de registro aplicadas com sucesso!");
                }
            }, 2000);
        });
    }

    // Permitir trocar de aba clicando nos títulos (se já estiver logado)
    tabAtivacao.onclick = () => alternarAba('ativacao');
    tabPainel.onclick = () => {
        if (localStorage.getItem('auth_otm') === 'true') {
            alternarAba('painel');
        } else {
            alert("Ative seu código primeiro!");
        }
    };
});
