(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      openBuyMenu: document.querySelector("[buy-menu-open]"),
      menu: document.querySelector("[data-menu]"),
      body: document.querySelector('body'),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.openBuyMenu.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-closed");
      refs.body.classList.toggle("no-scroll");
    }
  })();