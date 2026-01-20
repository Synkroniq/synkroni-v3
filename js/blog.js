document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".grid-curiosidades");

  // 🔎 Carregar curiosidades do JSON
  fetch("data/curiosidades.json")
    .then(res => res.json())
    .then(curiosidades => {
      renderCuriosidades(curiosidades);
    });

  // 🖼️ Renderizar curiosidades
  function renderCuriosidades(curiosidades) {
    container.innerHTML = "";
    curiosidades.forEach(c => {
      const card = document.createElement("article");
      card.className = "card-curiosidade anim-esquerda"; // pode variar anim-direita etc

      card.innerHTML = `
        <h3>${c.titulo}</h3>
        <p class="resumo">${c.resumo}</p>
        <button class="expandir">Leia mais</button>
        <div class="conteudo-expandido">
          <p>${c.conteudo}</p>
        </div>
      `;

      container.appendChild(card);
    });

    // 🎯 Ativar expansão dos artigos
    const botoesExpandir = container.querySelectorAll(".expandir");
    botoesExpandir.forEach(botao => {
      botao.addEventListener("click", () => {
        const card = botao.closest(".card-curiosidade");
        card.classList.toggle("expandido");

        botao.textContent = card.classList.contains("expandido")
          ? "Fechar"
          : "Leia mais";
      });
    });

    // ✨ Animação dos cards ao entrar na tela
    const cards = container.querySelectorAll(
      ".anim-esquerda, .anim-direita, .anim-cima, .anim-baixo"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
  }
});
