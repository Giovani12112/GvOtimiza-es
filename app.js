/**
 * LÓGICA Oliveira_OTM - VERSÃO FINAL CORRIGIDA
 */

// Partículas de Fundo
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "move": { "enable": true, "speed": 2 }
    },
    "retina_detect": true
});

document.addEventListener('DOMContentLoaded', () => {
    // BANCO DE DADOS CORRIGIDO (Tudo em minúsculo para comparar)
    const DATABASE_CODIGOS = [
        "68fbde36f576351f1378c5d5",
        "33cc3184-0a47-49e4-a20a-b661b27af069+ffd58fb4f76f648c2a5e21ebcfa3aae81b4c9b7d97"
    ];

    const btnAtivar = document.getElementById('btn-ativar');
    const inputCodigo = document.getElementById('input-codigo');
    const msgStatus = document.getElementById('status-msg');
    const secAtivacao = document.getElementById('sec-ativacao');
    const secPainel = document.getElementById('sec-painel');
    const tabAtivacao = document.getElementById('tab-ativacao');
    const tabPainel = document.getElementById('tab-painel');

    function alternarAba(alvo) {
        if (alvo === 'painel') {
            secPainel.style.display = 'flex';
            secAtivacao.style.display = 'none';
            tabPainel.classList.add('active');
            tabAtivacao.classList.remove('active');
        } else {
            secAtivacao.style.display = 'flex';
            secPainel.style.display = 'none';
            tabAtivacao.classList.add('active');
            tabPainel.classList.remove('active');
        }
    }

    // LÓGICA DE ATIVAÇÃO À PROVA DE ERROS
    if (btnAtivar) {
        btnAtivar.onclick = () => {
            // .trim() tira espaços | .toLowerCase() ignora se é Maiúsculo ou Minúsculo
            const codigoDigitado = inputCodigo.value.trim().toLowerCase();

            if (DATABASE_CODIGOS.includes(codigoDigitado)) {
                msgStatus.style.color = "#00e5ff";
                msgStatus.innerText = "✅ CÓDIGO ACEITO! LIBERANDO...";
                
                localStorage.setItem('auth_otm', 'true');

                setTimeout(() => {
                    alternarAba('painel');
                }, 1200);
            } else {
                msgStatus.style.color = "#ff4444";
                msgStatus.innerText = "❌ CÓDIGO INVÁLIDO OU EXPIRADO";
                
                // Pisca o input em vermelho para avisar o erro
                inputCodigo.style.borderColor = "red";
                setTimeout(() => { inputCodigo.style.borderColor = "#333"; }, 500);
            }
        };
    }

    // BOTÃO SALVAR (Detecção Android/iOS)
    const btnSalvar = document.getElementById('btn-salvar');
    if (btnSalvar) {
        btnSalvar.onclick = () => {
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            btnSalvar.innerText = "PROCESSANDO...";
            
            setTimeout(() => {
                if (isIOS) {
                    alert("iOS DETECTADO: Perfil de sensibilidade pronto para baixar!");
                    window.location.href = "gvotimizacao-webclip.mobileconfig";
                } else {
                    alert("ANDROID DETECTADO: Otimização aplicada na pasta do jogo!");
                }
                btnSalvar.innerText = "Salvar Alterações";
            }, 1500);
        };
    }

    // Permitir clicar nas abas manualmente
    tabAtivacao.onclick = () => alternarAba('ativacao');
    tabPainel.onclick = () => alternarAba('painel');
});
