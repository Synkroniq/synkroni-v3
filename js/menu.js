document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mainMenu");

  // 🔄 Alterna o menu lateral
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });

  // 🚪 Fecha o menu ao clicar em um link
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
    });
  });
});
