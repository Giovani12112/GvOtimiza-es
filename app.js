document.addEventListener('DOMContentLoaded', () => {
    // --- REFERÊNCIAS DOS ELEMENTOS ---
    const activateButton = document.getElementById('activateButton');
    const codeInput = document.getElementById('codeInput');
    const resultMessage = document.getElementById('resultMessage');
    const tabButtons = document.querySelectorAll('.tab-button');
    const switches = document.querySelectorAll('.switch input');
    const resetButton = document.getElementById('resetButton');

    // --- 1. LÓGICA DE ATIVAÇÃO DO CÓDIGO ---
    // O código exato de 24 caracteres que você pediu:
    const CODIGO_CORRETO = "68fbde36f576351f1378c5d5"; 

    // Verifica se já estava ativado anteriormente
    if (localStorage.getItem('isActivated') === 'true') {
        resultMessage.innerText = "✅ Sistema Ativado";
        resultMessage.style.color = "#888";
    }

    activateButton.addEventListener('click', () => {
        const code = codeInput.value.trim().toLowerCase(); // Mantém em minúsculo para bater com o código acima

        if (code === CODIGO_CORRETO) {
            resultMessage.innerText = "✅ Código Ativado com Sucesso!";
            resultMessage.style.color = "#fff";
            localStorage.setItem('isActivated', 'true');
            
            // Troca para a aba de funções automaticamente após 1 segundo
            setTimeout(() => {
                showTab('featuresTab');
            }, 1000);
        } else {
            resultMessage.innerText = "❌ Código Inválido!";
            resultMessage.style.color = "#ff4444";
        }
    });

    // --- 2. LÓGICA DAS FUNÇÕES (SWITCHES) ---
    switches.forEach(sw => {
        const key = sw.dataset.key;
        const savedValue = localStorage.getItem(key);
        
        if (savedValue === 'true') {
            sw.checked = true;
        }

        sw.addEventListener('change', (e) => {
            // Verifica se o código foi ativado antes de permitir ligar a função
            if (localStorage.getItem('isActivated') === 'true') {
                localStorage.setItem(key, e.target.checked);
            } else {
                e.target.checked = false;
                alert("Por favor, insira o código de ativação primeiro.");
                showTab('activationTab');
            }
        });
    });

    // --- 3. BOTÃO DE RESET ---
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            if (confirm("Deseja resetar todas as funções?")) {
                switches.forEach(sw => {
                    sw.checked = false;
                    localStorage.removeItem(sw.dataset.key);
                });
            }
        });
    }

    // --- 4. FUNÇÃO PARA TROCAR ABAS ---
    function showTab(tabId) {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        const targetButton = document.querySelector(`[data-tab="${tabId}"]`);
        const targetContent = document.getElementById(tabId);

        if (targetButton && targetContent) {
            targetButton.classList.add('active');
            targetContent.classList.add('active');
        }
    }
});
