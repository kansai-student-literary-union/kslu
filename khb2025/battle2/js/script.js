const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === '⚙') {
    btn.innerHTML = '×';
  } else {
    btn.innerHTML = '⚙';
  }
});
nav.addEventListener('click', () => {
  nav.classList.remove('open-menu');
  if (btn.innerHTML === '⚙') {
    btn.innerHTML = '×';
  } else {
    btn.innerHTML = '⚙';
  }
});



