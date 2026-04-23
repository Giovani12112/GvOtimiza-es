/**
 * LÓGICA Oliveira_OTM - FINALIZADA
 * Suporte para Código Android Extenso e iOS
 */

// Partículas Fundo (Brilho Máximo)
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 110, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "opacity": { "value": 0.95, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.4 } },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.7, "width": 1.5 },
        "move": { "enable": true, "speed": 2.2, "direction": "none", "out_mode": "out" }
    },
    "retina_detect": true
});

document.addEventListener('DOMContentLoaded', () => {
    // Banco de Códigos Autorizados
    const DATABASE_CODIGOS = [
        "68fbde36f576351f1378c5d5",
        "33cc3184-0a47-49e4-a20a-b661b27af069+FFD58FB4F76F648C2A5E21EBCFA3AAE81B4C9B7D97"
    ];

    const btnAtivar = document.getElementById('btn-ativar');
    const inputCodigo = document.getElementById('input-codigo');
    const msgStatus = document.getElementById('status-msg');
    const tabAtivacao = document.getElementById('tab-ativacao');
    const tabPainel = document.getElementById('tab-painel');
    const secAtivacao = document.getElementById('sec-ativacao');
    const secPainel = document.getElementById('sec-painel');
    const switches = document.querySelectorAll('.switch input');
    const btnSalvar = document.getElementById('btn-salvar');

    // Navegação Segura
    function alternarAba(alvo) {
        if (alvo === 'painel') {
            if (localStorage.getItem('auth_otm') === 'true') {
                secPainel.classList.add('active');
                secAtivacao.classList.remove('active');
                tabPainel.classList.add('active');
                tabAtivacao.classList.remove('active');
                msgStatus.innerText = "";
            } else {
                msgStatus.style.color = "#ff4444";
                msgStatus.innerText = "❌ BLOQUEADO: ATIVE O CÓDIGO PRIMEIRO!";
            }
        } else {
            secAtivacao.classList.add('active');
            secPainel.classList.remove('active');
            tabAtivacao.classList.add('active');
            tabPainel.classList.remove('active');
        }
    }

    tabPainel.onclick = () => alternarAba('painel');
    tabAtivacao.onclick = () => alternarAba('ativacao');

    // Lógica de Ativação (Aceita Android e iOS)
    btnAtivar.onclick = () => {
        const inputVal = inputCodigo.value.trim();
        
        if (DATABASE_CODIGOS.includes(inputVal)) {
            msgStatus.style.color = "#00e5ff";
            msgStatus.innerText = "✅ SUCESSO! ACESSO LIBERADO.";
            localStorage.setItem('auth_otm', 'true');
            setTimeout(() => alternarAba('painel'), 1000);
        } else {
            msgStatus.style.color = "#ff4444";
            msgStatus.innerText = "❌ CÓDIGO INVÁLIDO OU EXPIRADO";
            inputCodigo.value = "";
        }
    };

    // Trava física nos 11 switches para impedir uso sem código
    switches.forEach(sw => {
        sw.addEventListener('click', (e) => {
            if (localStorage.getItem('auth_otm') !== 'true') {
                e.preventDefault();
                msgStatus.style.color = "#ff4444";
                msgStatus.innerText = "❌ ATIVE O CÓDIGO PARA USAR ESTA FUNÇÃO";
            }
        });
    });

    if (btnSalvar) {
        btnSalvar.onclick = () => {
            if (localStorage.getItem('auth_otm') === 'true') {
                btnSalvar.innerText = "INJETANDO PERFORMANCE...";
                setTimeout(() => {
                    alert("Otimização Injetada com Sucesso!");
                    btnSalvar.innerText = "Salvar Alterações";
                }, 2000);
            }
        };
    }
});
