document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mainMenu");
  const overlay = document.querySelector(".menu-overlay");

  // 🔄 Alterna o menu lateral
  toggleBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // evita que o clique no botão seja capturado pelo listener global
    menu.classList.toggle("ativo");
    overlay.classList.toggle("ativo");
  });

  // 🚪 Fecha o menu ao clicar em um link
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
      overlay.classList.remove("ativo");
    });
  });

  // 🖱️ Fecha o menu ao clicar fora dele (overlay)
  overlay.addEventListener("click", () => {
    menu.classList.remove("ativo");
    overlay.classList.remove("ativo");
  });

  // 🖱️ Fecha o menu ao clicar fora (qualquer área da página)
  document.addEventListener("click", (event) => {
    const clicouFora = !menu.contains(event.target) && !toggleBtn.contains(event.target);
    if (menu.classList.contains("ativo") && clicouFora) {
      menu.classList.remove("ativo");
      overlay.classList.remove("ativo");
    }
  });
});
