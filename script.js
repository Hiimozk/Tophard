// Obtener el botón de categorías y el menú desplegable
var categoriasBtn = document.getElementById("categoriasBtn");
var categoriasDropdown = document.getElementById("categoriasDropdown");

// Mostrar el menú desplegable al pasar el mouse sobre el botón de categorías
categoriasBtn.addEventListener("mouseover", function() {
    categoriasDropdown.classList.add("show");
});

// Ocultar el menú desplegable cuando el mouse sale del botón de categorías o del menú desplegable
document.addEventListener("mouseout", function(event) {
    if (!categoriasBtn.contains(event.relatedTarget) && !categoriasDropdown.contains(event.relatedTarget)) {
        categoriasDropdown.classList.remove("show");
    }
});

// Ocultar el menú desplegable al sacar el mouse del botón de categorías
categoriasBtn.addEventListener("mouseout", function(event) {
    if (!categoriasDropdown.contains(event.relatedTarget)) {
        categoriasDropdown.classList.remove("show");
    }
});
