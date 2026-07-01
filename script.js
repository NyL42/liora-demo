// =========================================================
//  EDITE AQUI: cole o link da versão de apresentação da Liora
// =========================================================
const LINK_APRESENTACAO = "https://exemplo.com/liora-demo";

// Link do material de apoio visual da apresentação (pitch_liora.html).
const LINK_APOIO_VISUAL = "https://exemplo.com/liora-apoio";

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

// ---- Link secundário: material de apoio visual (discreto) ----
const apoioBtn = document.getElementById("apoioBtn");

if (apoioBtn) {
  const apoioDefinido = LINK_APOIO_VISUAL && LINK_APOIO_VISUAL !== "https://exemplo.com/liora-apoio";

  if (apoioDefinido) {
    apoioBtn.href = LINK_APOIO_VISUAL;
  } else {
    apoioBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("O link do apoio visual ainda não foi definido. Edite a variável LINK_APOIO_VISUAL no arquivo script.js.");
    });
  }
}
