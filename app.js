document.addEventListener('DOMContentLoaded', () => {
    const btnSalvar = document.getElementById('btn-salvar');
    const DATABASE_CODIGOS = ["68fbde36f576351f1378c5d5"];

    // GATILHO DE INJEÇÃO REAL
    if (btnSalvar) {
        btnSalvar.addEventListener('click', () => {
            // Salva as chaves de memória que o núcleo do seu App vai ler
            localStorage.setItem('OFFSETS_ACTIVE', 'true');
            localStorage.setItem('HEAD_SCAN', '0xA18EDE0');
            localStorage.setItem('PRECISION_SCAN', '0xA1C0270');
            
            btnSalvar.innerText = "🚀 INJETANDO OFFSETS...";
            btnSalvar.disabled = true;

            setTimeout(() => {
                btnSalvar.disabled = false;
                btnSalvar.innerText = "Salvar Alterações";
                alert("NÚCLEO ATIVADO: Grude aplicado via 0xA18EDE0");
            }, 1500);
        });
    }

    // Lógica de Ativação por Código
    const btnAtivar = document.getElementById('btn-ativar');
    if (btnAtivar) {
        btnAtivar.onclick = () => {
            const code = document.getElementById('input-codigo').value.trim();
            if (DATABASE_CODIGOS.includes(code)) {
                localStorage.setItem('auth_otm', 'true');
                location.reload(); 
            } else {
                alert("Código Inválido");
            }
        };
    }
});
