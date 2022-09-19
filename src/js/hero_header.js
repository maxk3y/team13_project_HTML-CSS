(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-open]'),
    closeModalBtn: document.querySelector('[buy-close]'),
    modal: document.querySelector('[buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
