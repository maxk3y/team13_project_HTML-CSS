{let e=0;!function o(){let t,l=document.getElementsByClassName("slideshow__item");for(t=0;t<l.length;t++)l[t].style.display="none";e++,e>l.length&&(e=1);l[e-1].style.display="block",setTimeout(o,7e3)}()}new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const e={openModalaboutBtn:document.querySelector("[data-modal-about-open]"),closeModalaboutBtn:document.querySelector("[data-modal-about-close]"),modalabout:document.querySelector("[data-modal-about]")};function o(){e.modalabout.classList.toggle("is-hidden")}e.openModalaboutBtn.addEventListener("click",o),e.closeModalaboutBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.c4638f02.js.map
