document.addEventListener('DOMContentLoaded', () => {
    // --- REFERÊNCIAS DOS ELEMENTOS ---
    const activateButton = document.getElementById('activateButton');
    const codeInput = document.getElementById('codeInput');
    const resultMessage = document.getElementById('resultMessage');
    const tabButtons = document.querySelectorAll('.tab-button');
    const switches = document.querySelectorAll('.switch input');
    const resetButton = document.getElementById('resetButton');

    // --- 1. LÓGICA DE ATIVAÇÃO DO CÓDIGO ---
    // Defina aqui o seu código de ativação
    const CODIGO_CORRETO = "OLIVEIRA-2026"; 

    // Verifica se já estava ativado anteriormente
    if (localStorage.getItem('isActivated') === 'true') {
        resultMessage.innerText = "✅ Sistema Ativado";
        resultMessage.style.color = "#888";
        // Opcional: Se quiser que ele vá direto para a aba de funções ao abrir
        // showTab('featuresTab');
    }

    activateButton.addEventListener('click', () => {
        const code = codeInput.value.trim().toUpperCase();

        if (code === CODIGO_CORRETO) {
            resultMessage.innerText = "✅ Código Ativado com Sucesso!";
            resultMessage.style.color = "#fff";
            localStorage.setItem('isActivated', 'true');
            
            // Pequeno delay para o usuário ver a mensagem antes de trocar de aba
            setTimeout(() => {
                showTab('featuresTab');
            }, 1000);
        } else {
            resultMessage.innerText = "❌ Código Inválido!";
            resultMessage.style.color = "#ff4444";
        }
    });

    // --- 2. LÓGICA DAS 12 FUNÇÕES (SWITCHES) ---
    // Carregar estados salvos ao abrir o site
    switches.forEach(sw => {
        const key = sw.dataset.key;
        const savedValue = localStorage.getItem(key);
        
        if (savedValue === 'true') {
            sw.checked = true;
        }

        // Salvar mudança toda vez que clicar no switch
        sw.addEventListener('change', (e) => {
            // Só permite salvar se o código estiver ativado
            if (localStorage.getItem('isActivated') === 'true') {
                localStorage.setItem(key, e.target.checked);
                console.log(`Função ${key}: ${e.target.checked ? 'LIGADA' : 'DESLIGADA'}`);
            } else {
                e.target.checked = false;
                alert("Ative o sistema com o código primeiro!");
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
                alert("Configurações resetadas!");
            }
        });
    }

    // --- 4. FUNÇÃO AUXILIAR PARA TROCAR ABAS ---
    function showTab(tabId) {
        // Remove active de todos
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Adiciona no alvo
        const targetButton = document.querySelector(`[data-tab="${tabId}"]`);
        const targetContent = document.getElementById(tabId);

        if (targetButton && targetContent) {
            targetButton.classList.add('active');
            targetContent.classList.add('active');
        }
    }
});
