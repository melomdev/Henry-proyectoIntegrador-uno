// Crear tarjeta de habilidad






// Verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
}

// Manejar el efecto de deslizamiento
function handleScrollAnimation() {
    const elements = document.querySelectorAll("header, section"); 
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add("visible");
        }
    });
}

// Ejecutar la animación al cargar y al hacer scroll
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);