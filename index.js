const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu-item');
const footerText = document.querySelector('.copy');
const navBar = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu_visible');

  if (navMenu.classList.contains('nav-menu_visible')) {
    navToggle.setAttribute('aria-label', 'Cerrar Menu');
  } else {
    navToggle.setAttribute('aria-label', 'Abrir Menu');
  }
});

for (let i = 0; i < navMenuItems.length; i++) {
  const navMenuItem = navMenuItems[i];
  navMenuItem.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
  });
}

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navBar.classList.add('nav-scroll-down');
  } else {
    navBar.classList.remove('nav-scroll-down');
  }
};

let time = new Date();
let year = time.getFullYear();
footerText.innerText = `Copyright © ${year}, Zero % Azúcar`;
