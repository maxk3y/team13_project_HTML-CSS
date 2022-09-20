(() => {
  const refs = {
    openBuyBtn: document.querySelector("[buy-open]"),
    closeBuyBtn: document.querySelector("[buy-close]"),
    buyModal: document.querySelector("[buy-modal]"),
  };

  refs.openBuyBtn.addEventListener("click", toggleBuy);
  refs.closeBuyBtn.addEventListener("click", toggleBuy);

  function toggleBuy() {
    refs.buyModal.classList.toggle("is-hidden");
  }
})();
