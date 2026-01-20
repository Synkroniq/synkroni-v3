document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaProdutos");
  const filtro = document.getElementById("categoria");

  // 🔎 Carregar produtos do JSON
  fetch("data/produtos.json")
    .then(res => res.json())
    .then(produtos => {
      renderProdutos(produtos);

      // 🎯 Filtro por categoria
      filtro.addEventListener("change", () => {
        const categoria = filtro.value;
        if (categoria === "todos") {
          renderProdutos(produtos);
        } else {
          const filtrados = produtos.filter(p => p.categoria === categoria);
          renderProdutos(filtrados);
        }
      });
    });

  // 🖼️ Renderizar produtos
  function renderProdutos(produtos) {
    lista.innerHTML = "";
    produtos.forEach(p => {
      const card = document.createElement("div");
      card.className = "card-produto";
      card.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <a href="${p.link}" target="_blank" class="btn-comprar">Comprar</a>
      `;
      lista.appendChild(card);
    });
  }
});
