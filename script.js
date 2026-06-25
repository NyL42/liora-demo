// =========================================================
//  EDITE AQUI: cole o link da versão de apresentação da Liora
// =========================================================
const LINK_APRESENTACAO = "https://exemplo.com/liora-demo";

// Abrir em nova aba? true = sim, false = mesma aba
const ABRIR_NOVA_ABA = true;
// =========================================================

const btn = document.getElementById("redirectBtn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!LINK_APRESENTACAO || LINK_APRESENTACAO === "https://exemplo.com/liora-demo") {
    alert("O link ainda não foi definido. Edite a variável LINK_APRESENTACAO no arquivo script.js.");
    return;
  }

  if (ABRIR_NOVA_ABA) {
    window.open(LINK_APRESENTACAO, "_blank");
  } else {
    window.location.href = LINK_APRESENTACAO;
  }
});
