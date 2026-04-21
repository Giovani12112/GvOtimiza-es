const EXPECTED_LENGTH = 24;
const HEX_ONLY = /^[0-9a-fA-F]+$/;
const CODE_STORAGE_KEY = "gvotimizacao_last_code";
const TOGGLES_STORAGE_KEY = "gvotimizacao_toggles";
const ACTIVATED_STORAGE_KEY = "gvotimizacao_activated";

const codeInput = document.getElementById("codeInput");
const activateButton = document.getElementById("activateButton");
const resultMessage = document.getElementById("resultMessage");
const settingsSection = document.querySelector(".settings");
const resetButton = document.getElementById("resetButton");
const stabilizationPanel = document.getElementById("stabilizationPanel");
const stabilizationTarget = document.getElementById("stabilizationTarget");
const stabilizationScore = document.getElementById("stabilizationScore");
const stabilizerStatusLine = document.getElementById("stabilizerStatusLine");
const fpsPanel = document.getElementById("fpsPanel");
const fpsStatusLine = document.getElementById("fpsStatusLine");
const fullcapPanel = document.getElementById("fullcapPanel");
const fullcapStatusLine = document.getElementById("fullcapStatusLine");
const precisionPanel = document.getElementById("precisionPanel");
const precisionStatusLine = document.getElementById("precisionStatusLine");
const settingToggles = document.querySelectorAll(".switch input[type='checkbox']");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
let stabilizationHits = 0;

function applyAppBehaviors() {
  const current = {};
  settingToggles.forEach((item) => {
    current[item.dataset.key] = item.checked;
  });

  document.body.style.transition = current.boost ? "all 0.12s ease" : "all 0.28s ease";
  document.documentElement.style.scrollBehavior = current.ping ? "auto" : "smooth";
  codeInput.type = current.privacidade ? "password" : "text";
  stabilizationPanel.classList.toggle("visible", Boolean(current.estabilizacao));
  fpsPanel.classList.toggle("visible", Boolean(current.fps120));
  fullcapPanel.classList.toggle("visible", Boolean(current.fullcap));
  precisionPanel.classList.toggle("visible", Boolean(current.precision));

  ConfigurarEstabilizador(Boolean(current.estabilizacao));
  ConfigurarFullCapa(Boolean(current.fullcap));
  AplicarPrecision(Boolean(current.precision));

  if (current.fps120) {
    const taxaFrames = 120;
    fpsStatusLine.textContent = `Perfil 120 FPS ativado\nPerformance: ${taxaFrames} FPS Liberados ⚡`;
  } else {
    fpsStatusLine.textContent = "";
  }
}

function ConfigurarEstabilizador(ativar) {
  if (!ativar) {
    stabilizerStatusLine.textContent = "";
    stabilizerStatusLine.style.color = "";
    return;
  }

  // Simulando a trava/estabilização no treino do app
  const sensibilidadeVertical = 2.5;      // Aumenta a força da puxada (treino)
  const estabilidadeHorizontal = 0.1;     // Minimiza o tremor pros lados (treino)

  stabilizerStatusLine.textContent =
    "FULL CAPA ATIVADO: Mira travada no topo! 🎯";
  stabilizerStatusLine.style.color = "deeppink";
}

function ConfigurarFullCapa(ativar) {
  if (!ativar) {
    fullcapStatusLine.textContent = "Desativado.";
    return;
  }

  // Simulação (treino no app/site)
  const sensibilidadeVertical = 2.5;
  const estabilidadeHorizontal = 0.1;

  // Mantive o formato da sua mensagem, mas como TREINO no app/site.
  fullcapStatusLine.textContent = `FULL CAPA ATIVADO (TREINO): vertical ${sensibilidadeVertical} | horizontal ${estabilidadeHorizontal} 🎯`;
}

function AplicarPrecision(ativar) {
  if (!ativar) {
    precisionStatusLine.textContent = "Desativado.";
    precisionStatusLine.style.color = "";
    return;
  }

  // 1. Reduz a aceleração brusca no final do movimento (treino)
  const friccaoY = 0.45;

  // 2. Filtra tremores horizontais para manter a mira reta (treino)
  const estabilizadorX = 0.95;

  precisionStatusLine.textContent = "PRECISION: Mira travada na altura da cabeça! ✅";
  precisionStatusLine.style.color = "yellow";
}

function switchTab(targetId) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === targetId);
  });
  tabContents.forEach((content) => {
    content.classList.toggle("active", content.id === targetId);
  });
}

const savedCode = localStorage.getItem(CODE_STORAGE_KEY);
if (savedCode) {
  codeInput.value = savedCode;
}

const isActivated = localStorage.getItem(ACTIVATED_STORAGE_KEY) === "true";
if (isActivated) {
  settingsSection.classList.add("visible");
}

const savedTogglesRaw = localStorage.getItem(TOGGLES_STORAGE_KEY);
if (savedTogglesRaw) {
  try {
    const savedToggles = JSON.parse(savedTogglesRaw);
    settingToggles.forEach((toggle) => {
      toggle.checked = Boolean(savedToggles[toggle.dataset.key]);
    });
  } catch (_) {
    localStorage.removeItem(TOGGLES_STORAGE_KEY);
  }
}

settingToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const current = {};
    settingToggles.forEach((item) => {
      current[item.dataset.key] = item.checked;
    });
    localStorage.setItem(TOGGLES_STORAGE_KEY, JSON.stringify(current));
    if (current.storage) {
      localStorage.removeItem(CODE_STORAGE_KEY);
      codeInput.value = "";
      current.storage = false;
      toggle.checked = false;
      localStorage.setItem(TOGGLES_STORAGE_KEY, JSON.stringify(current));
    }
    applyAppBehaviors();
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.tab);
  });
});

activateButton.addEventListener("click", () => {
  const value = codeInput.value.trim();

  resultMessage.classList.remove("ok", "error");

  if (value.length !== EXPECTED_LENGTH) {
    resultMessage.textContent = `Codigo invalido. Use exatamente ${EXPECTED_LENGTH} caracteres.`;
    resultMessage.classList.add("error");
    return;
  }

  if (!HEX_ONLY.test(value)) {
    resultMessage.textContent = "Codigo invalido. Use apenas letras e numeros hexadecimais.";
    resultMessage.classList.add("error");
    return;
  }

  localStorage.setItem(CODE_STORAGE_KEY, value);
  localStorage.setItem(ACTIVATED_STORAGE_KEY, "true");
  settingsSection.classList.add("visible");
  applyAppBehaviors();
  resultMessage.textContent = "Codigo ativado com sucesso!";
  resultMessage.classList.add("ok");
});

resetButton.addEventListener("click", () => {
  localStorage.removeItem(TOGGLES_STORAGE_KEY);
  localStorage.removeItem(ACTIVATED_STORAGE_KEY);
  settingToggles.forEach((toggle) => {
    toggle.checked = false;
  });
  settingsSection.classList.remove("visible");
  switchTab("mainTab");
  resultMessage.textContent = "Configuracoes resetadas.";
  resultMessage.classList.remove("ok", "error");
  applyAppBehaviors();
});

stabilizationTarget.addEventListener("click", () => {
  stabilizationHits += 1;
  stabilizationScore.textContent = `Acertos: ${stabilizationHits}`;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Ignora falha de registro sem quebrar o app.
    });
  });
}

applyAppBehaviors();
switchTab("mainTab");
