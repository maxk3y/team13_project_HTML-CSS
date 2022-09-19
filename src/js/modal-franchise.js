(() => {
  const refs = {
    openModalaboutBtn: document.querySelector('.contacts-btn__franch'),
    closeModalaboutBtn: document.querySelector('.modal-frn__btn-close'),
    modalabout: document.querySelector('.modal-frn'),
  };

  refs.openModalaboutBtn.addEventListener('click', toggleModalAbout);
  refs.closeModalaboutBtn.addEventListener('click', toggleModalAbout);

  function toggleModalAbout() {
    refs.modalabout.classList.toggle('is-hidden');
  }
})();
