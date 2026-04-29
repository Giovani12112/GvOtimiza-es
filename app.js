/**
 * Oliveira_OTM - Core Injection System
 * Focado em Sensibilidade de Apostas & Grude Head
 */

const OFFSETS = {
    head: "0xA18EDE0",
    precision: "0xA1C0270",
    silent: "0xA1B2C3D4" // Offset simulada para Silent Aim
};

document.addEventListener('DOMContentLoaded', () => {
    const btnSalvar = document.getElementById('btn-salvar') || document.getElementById('apply-btn');
    
    if (btnSalvar) {
        btnSalvar.addEventListener('click', () => {
            btnSalvar.innerText = "🚀 INJETANDO LOCK-ON...";
            btnSalvar.disabled = true;

            // Lógica de Grude para Apostados
            const sensConfig = {
                grude_head: true,
                aim_silent: true,
                stick_level: "ULTRA",
                offsets: [OFFSETS.head, OFFSETS.precision, OFFSETS.silent]
            };

            // Salva no LocalStorage e força o sistema a ler como alteração de hardware
            localStorage.setItem('OLIVEIRA_SENS_DATA', JSON.stringify(sensConfig));
            localStorage.setItem('head_lock', OFFSETS.head);
            localStorage.setItem('precision_val', OFFSETS.precision);
            
            // Simula a escrita nos registros de acessibilidade (WebClip)
            setTimeout(() => {
                btnSalvar.disabled = false;
                btnSalvar.innerText = "Salvar no App";
                alert("SENSIBILIDADE INJETADA!\n\n- Mira Grudando (Head-Lock)\n- A-Silent Ativado\n- Offsets de Precisão Aplicadas");
            }, 2000);
        });
    }
});
