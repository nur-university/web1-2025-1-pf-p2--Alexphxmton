function toggleRespuesta(id) {
    let respuesta = document.getElementById("respuesta" + id);
    respuesta.style.display = respuesta.style.display === "block" ? "none" : "block";
}

function cambiarImagen(ruta) {
    document.querySelector(".imagen-principal").src = ruta;
}

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
