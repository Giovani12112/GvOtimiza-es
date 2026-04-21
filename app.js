document.addEventListener('DOMContentLoaded', () => {
    // --- REFERÊNCIAS ---
    const activateButton = document.getElementById('activateButton');
    const codeInput = document.getElementById('codeInput');
    const resultMessage = document.getElementById('resultMessage');
    const switches = document.querySelectorAll('.switch input');
    const resetButton = document.getElementById('resetButton');

    // --- 1. CÓDIGO DE ATIVAÇÃO (24 CARACTERES) ---
    const CODIGO_MESTRE = "68fbde36f576351f1378c5d5"; 

    // Função para trocar de aba visualmente
    function trocarParaPainel() {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        const btnPainel = document.querySelector('[data-tab="featuresTab"]');
        const conteudoPainel = document.getElementById('featuresTab');

        if (btnPainel && conteudoPainel) {
            btnPainel.classList.add('active');
            conteudoPainel.classList.add('active');
        }
    }

    // Verificar se já foi ativado antes
    if (localStorage.getItem('oliveira_auth') === 'true') {
        resultMessage.innerText = "✅ SISTEMA ATIVADO";
        resultMessage.style.color = "#888";
    }

    // --- 2. LÓGICA DO BOTÃO ATIVAR ---
    activateButton.addEventListener('click', () => {
        const entrada = codeInput.value.trim().toLowerCase();

        if (entrada === CODIGO_MESTRE) {
            resultMessage.innerText = "✅ ACESSO CONCEDIDO!";
            resultMessage.style.color = "#fff";
            localStorage.setItem('oliveira_auth', 'true');
            
            // Aguarda 1 segundo para o usuário ler e pula para as funções
            setTimeout(trocarParaPainel, 1000);
        } else {
            resultMessage.innerText = "❌ CÓDIGO INVÁLIDO";
            resultMessage.style.color = "#ff4444";
        }
    });

    // --- 3. LÓGICA DAS 12 FUNÇÕES ---
    switches.forEach(sw => {
        const chave = sw.dataset.key;
        
        // Carrega o que estava ligado
        if (localStorage.getItem(chave) === 'true') {
            sw.checked = true;
        }

        sw.addEventListener('change', (e) => {
            if (localStorage.getItem('oliveira_auth') === 'true') {
                localStorage.setItem(chave, e.target.checked);
            } else {
                e.target.checked = false;
                alert("Ative o sistema primeiro!");
                // Volta para a aba de ativação se tentar burlar
                location.reload(); 
            }
        });
    });

    // --- 4. RESET ---
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
