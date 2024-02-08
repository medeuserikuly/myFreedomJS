const btns = document.querySelectorAll('.btn'),
    modal = document.querySelector('.modal'),
    overlay = document.querySelector('.overlay'),
    closeBtn = document.querySelector('.modal__close');

function showModal() {
    modal.style.display = 'block';
    overlay.style.visibility = 'visible';
}

function hideModal() {
    modal.style.display = 'none';
    overlay.style.visibility = 'hidden';
}

btns.forEach(btn => {
    btn.addEventListener('click', showModal);
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__close') || e.target.classList.contains('overlay')) {
        hideModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.style.display === 'block') { 
        hideModal();
    }
});