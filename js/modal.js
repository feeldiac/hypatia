//      Modal window
const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.querySelector('.modal-title');
const modalMsg = document.querySelector('.modal-msg');

modalBtns.forEach(function (modalBtn) {
  modalBtn.addEventListener('click', function () {
    modal.classList.add('open-modal');
  });
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});
