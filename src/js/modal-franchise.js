(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalaboutBtn.addEventListener("click", toggleModalAbout);
  refs.closeModalaboutBtn.addEventListener("click", toggleModalAbout);

  function toggleModalAbout() {
    refs.modalabout.classList.toggle("is-hidden");
  }
})();
