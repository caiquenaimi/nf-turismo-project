// Monta o site a partir de roteiros.js. Não precisa editar este arquivo.
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const zap = (msg) => `https://wa.me/${AGENCIA.whatsapp}${msg ? "?text=" + encodeURIComponent(msg) : ""}`;
const imagem = (r) => r.imagem || "img/logo.png";

const roteiros = ROTEIROS.filter((r) => r.ativo !== false);
const lista = document.getElementById("lista");
const busca = document.getElementById("busca");
const filtros = document.getElementById("filtros");
const dialog = document.getElementById("detalhe");
let categoria = "Todos";

document.querySelectorAll(".js-zap").forEach((a) => (a.href = zap("Olá! Vim pelo site e gostaria de saber mais sobre os roteiros.")));
document.querySelectorAll(".js-insta").forEach((a) => (a.href = AGENCIA.instagram));
document.querySelectorAll(".js-face").forEach((a) => (a.href = AGENCIA.facebook));
document.querySelectorAll(".js-slogan").forEach((e) => (e.textContent = AGENCIA.slogan));
document.querySelectorAll(".js-nome").forEach((e) => (e.textContent = AGENCIA.nome));
document.getElementById("ano").textContent = new Date().getFullYear();

// Os botões de filtro saem das categorias usadas nos roteiros
const categorias = ["Todos", ...new Set(roteiros.map((r) => r.categoria).filter(Boolean))];
filtros.innerHTML = categorias.map((c) => `<button type="button" aria-pressed="${c === categoria}">${esc(c)}</button>`).join("");
filtros.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  categoria = e.target.textContent;
  filtros.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === e.target));
  render();
});
busca.addEventListener("input", render);

const semAcento = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function render() {
  const termo = semAcento(busca.value.trim());
  const visiveis = roteiros.filter(
    (r) =>
      (categoria === "Todos" || r.categoria === categoria) &&
      semAcento([r.titulo, r.local, r.categoria, r.descricao].join(" ")).includes(termo)
  );
  lista.innerHTML = visiveis
    .map(
      (r) => `
    <article class="card">
      <a href="#roteiro-${esc(r.id)}" class="card-link">
        <div class="card-img">
          <img src="${esc(imagem(r))}" alt="" loading="lazy" class="${r.imagem ? "" : "sem-foto"}">
          <span class="etiqueta">${esc(r.categoria)}</span>
          <h3>${esc(r.titulo)}</h3>
        </div>
        <div class="card-info">
          <span class="local">${esc(r.local)}, ${esc(r.duracao)}</span>
          <span class="consultar">Ver detalhes</span>
        </div>
      </a>
    </article>`
    )
    .join("");
  document.getElementById("vazio").hidden = visiveis.length > 0;
}

// Cada roteiro tem link próprio (ex: site.com/#roteiro-balbina) para compartilhar no Instagram
function abrirDoHash() {
  const r = roteiros.find((x) => location.hash === `#roteiro-${x.id}`);
  if (!r) return dialog.open && fecharAnimado();
  document.getElementById("detalhe-conteudo").innerHTML = `
    <div class="detalhe-img"><img src="${esc(imagem(r))}" alt="${esc(r.titulo)}" class="${r.imagem ? "" : "sem-foto"}"></div>
    <div class="detalhe-corpo">
      <p class="categoria">${esc(r.categoria)}</p>
      <h2 id="detalhe-titulo">${esc(r.titulo)}</h2>
      <dl class="fatos">
        <div><dt>Local</dt><dd>${esc(r.local)}</dd></div>
        <div><dt>Duração</dt><dd>${esc(r.duracao)}</dd></div>
        ${r.datas ? `<div><dt>Datas</dt><dd>${esc(r.datas)}</dd></div>` : ""}
      </dl>
      ${String(r.descricao ?? "").split("\n").map((p) => `<p>${esc(p)}</p>`).join("")}
      ${r.programacao?.length ? `<h3>Dia a dia</h3><ol class="programacao">${r.programacao.map((d, i) => `<li><strong>${i + 1}º dia</strong>${esc(d)}</li>`).join("")}</ol>` : ""}
      ${r.inclui?.length ?`<h3>O que inclui</h3><ul class="inclui">${r.inclui.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
      <a class="botao botao-zap" target="_blank" rel="noopener" href="${zap(`Olá! Tenho interesse no roteiro ${r.titulo} (${r.local}). Pode me passar valores e próximas datas?`)}">Consultar valores no WhatsApp</a>
    </div>`;
  dialog.classList.remove("fechando");
  if (!dialog.open) {
    dialog.showModal();
    dialog.scrollTop = 0;
  }
}

// espera a animação de saída (style.css: .fechando) antes de fechar de fato
function fecharAnimado() {
  if (dialog.classList.contains("fechando")) return;
  dialog.classList.add("fechando");
  const tempo = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 250;
  setTimeout(() => {
    dialog.close();
    dialog.classList.remove("fechando");
  }, tempo);
}

function fechar() {
  // volta para a lista sem pular a página para o topo
  history.pushState("", "", location.pathname + location.search + "#roteiros");
  fecharAnimado();
}
dialog.querySelector(".fechar").addEventListener("click", fechar);
dialog.addEventListener("click", (e) => e.target === dialog && fechar());
dialog.addEventListener("cancel", (e) => (e.preventDefault(), fechar()));
window.addEventListener("hashchange", abrirDoHash);

render();
abrirDoHash();
