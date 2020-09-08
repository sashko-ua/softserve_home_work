const modal = document.querySelector('.modal__window');

document.querySelector('.modal__btn').addEventListener('click', () => modal.style.display = 'flex');

document.querySelector('.modal__close').addEventListener('click', () => modal.style.display = 'none');