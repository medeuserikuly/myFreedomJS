const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    document.querySelector('.dropMenu').classList.toggle("active-menu");
});