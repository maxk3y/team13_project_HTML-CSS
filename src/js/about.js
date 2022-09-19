(() => {
  const refs = {
    openModalaboutBtn: document.querySelector("[data-modal-about-open]"),
    closeModalaboutBtn: document.querySelector("[data-modal-about-close]"),
    modalabout: document.querySelector("[data-modal-about]"),
  };

  refs.openModalaboutBtn.addEventListener("click", toggleModalAbout);
  refs.closeModalaboutBtn.addEventListener("click", toggleModalAbout);

  function toggleModalAbout() {
    refs.modalabout.classList.toggle("is-hidden");
  }
})();