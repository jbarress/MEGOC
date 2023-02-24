
const cookieClose = document.querySelector('.cookie-boton');

cookieClose.addEventListener('click', (ev) => {
    document.querySelector('.cookie-banner').style.display = 'none';
});

const menuhamburguesa = document.querySelector(".menu-hamburguesa");
const menu = document.querySelector(".menu");

menuhamburguesa.addEventListener("click", function () {
    menu.classList.toggle("activo");
});
function ampliarImagen(elemento) {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    overlay.innerHTML = "<img src='" + elemento.src + "' onclick='cerrarImagen()'>";
}

function cerrarImagen() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    overlay.innerHTML = "";
}
