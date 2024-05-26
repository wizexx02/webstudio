(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
(() => {
  const refs = {
  openMenuBtn: document.querySelector('.header__button'),
  closeMenuBtn: document.querySelector('.burg__menu-button'),
  menu: document.querySelector('.burg__menu'),
  };
  
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
  refs.menu.classList.toggle('is-hidden');
  }
  })();