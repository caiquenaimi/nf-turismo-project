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
        <div class="card-img"><img src="${esc(imagem(r))}" alt="" loading="lazy" class="${r.imagem ? "" : "sem-foto"}"><span class="etiqueta">${esc(r.categoria)}</span></div>
        <div class="card-corpo">
          <h3>${esc(r.titulo)}</h3>
          <p class="local">${esc(r.local)} · ${esc(r.duracao)}</p>
          <div class="card-rodape"><span class="preco">${esc(r.preco)}</span><span class="mais">Ver detalhes →</span></div>
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
  if (!r) return dialog.open && dialog.close();
  document.getElementById("detalhe-conteudo").innerHTML = `
    <img src="${esc(imagem(r))}" alt="${esc(r.titulo)}" class="${r.imagem ? "" : "sem-foto"}">
    <div class="detalhe-corpo">
      <p class="sobretitulo">${esc(r.categoria)}</p>
      <h2 id="detalhe-titulo">${esc(r.titulo)}</h2>
      <ul class="fatos">
        <li><span>Local</span>${esc(r.local)}</li>
        <li><span>Duração</span>${esc(r.duracao)}</li>
        <li><span>Valor</span>${esc(r.preco)}</li>
        ${r.datas ? `<li><span>Datas</span>${esc(r.datas)}</li>` : ""}
      </ul>
      ${String(r.descricao ?? "").split("\n").map((p) => `<p>${esc(p)}</p>`).join("")}
      ${r.inclui?.length ? `<h3>O que inclui</h3><ul class="inclui">${r.inclui.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
      <a class="botao botao-zap" target="_blank" rel="noopener" href="${zap(`Olá! Tenho interesse no roteiro ${r.titulo} (${r.local}). Pode me passar mais informações?`)}">Quero esse roteiro</a>
    </div>`;
  if (!dialog.open) dialog.showModal();
}

function fechar() {
  // volta para a lista sem pular a página para o topo
  history.pushState("", "", location.pathname + location.search + "#roteiros");
  dialog.close();
}
dialog.querySelector(".fechar").addEventListener("click", fechar);
dialog.addEventListener("click", (e) => e.target === dialog && fechar());
dialog.addEventListener("cancel", (e) => (e.preventDefault(), fechar()));
window.addEventListener("hashchange", abrirDoHash);

render();
abrirDoHash();
