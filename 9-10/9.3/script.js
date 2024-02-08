const close = document.querySelector('.menu__close'),
      burger = document.querySelector('.main__burger');

function showMenu() {
    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.main').style.marginLeft = 250 + 'px';
    burger.style.display = 'none';
}

function hideMenu() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.main').style.marginLeft = 0 + 'px';
    burger.style.display = 'flex';
}

burger.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
