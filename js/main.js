const items = document.querySelectorAll(".child");

// mostrar los primeros visibles
items.forEach(element => {
    if (element.offsetTop < 300) {
        element.classList.add('_show');
    }
});

// animación al hacer scroll
window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;

    items.forEach(elem => {
        if (elem.offsetTop - window.innerHeight / 2 < scroll) {
            elem.classList.remove('_hide');
            elem.classList.add('_show');
        } else {
            elem.classList.remove('_show');
            elem.classList.add('_hide');
        }
    });
});