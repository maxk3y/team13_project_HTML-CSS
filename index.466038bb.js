{let e=0;!function o(){let t,n=document.getElementsByClassName("slideshow__item");for(t=0;t<n.length;t++)n[t].style.display="none";e++,e>n.length&&(e=1);n[e-1].style.display="block",setTimeout(o,7e3)}()}new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const e={openModalaboutBtn:document.querySelector("[data-modal-about-open]"),closeModalaboutBtn:document.querySelector("[data-modal-about-close]"),modalabout:document.querySelector("[data-modal-about]")};function o(){e.modalabout.classList.toggle("is-hidden")}e.openModalaboutBtn.addEventListener("click",o),e.closeModalaboutBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openBuyBtn:document.querySelector("[buy-open]"),openBuyMobBtn:document.querySelector("[buy-open-mobile]"),closeBuyBtn:document.querySelector("[buy-close]"),buyModal:document.querySelector("[buy-modal]")};function o(){e.buyModal.classList.toggle("is-hidden")}e.openBuyBtn.addEventListener("click",o),e.openBuyMobBtn.addEventListener("click",o),e.closeBuyBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-contacts-open]"),closeModalBtn:document.querySelector("[data-modal-contacts-close]"),modal:document.querySelector("[data-modal-contacts]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-location-open]"),closeModalBtn:document.querySelector("[data-modal-location-close]"),modal:document.querySelector("[data-modal-location]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),openBuyMenu:document.querySelector("[buy-menu-open]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};function o(){e.menu.classList.toggle("is-closed"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.openBuyMenu.addEventListener("click",o)})();
//# sourceMappingURL=index.466038bb.js.map
