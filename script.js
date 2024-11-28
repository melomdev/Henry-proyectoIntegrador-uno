// Crear tarjeta de habilidades
function createSkillCard(name, description, imageUrl) {
    const container = document.getElementById('cards-container');

    const card = document.createElement('div');
    card.classList.add('card');

    // Crear imagen
    const img = document.createElement('img');
    img.src = imageUrl; // Asignar la URL de la imagen
    img.alt = name || "Imagen"; // Texto alternativo
    img.onerror = function () {
        this.src = "https://via.placeholder.com/150"; // Imagen predeterminada en caso de error
    };

    // Crear nombre
    const title = document.createElement('h3');
    title.textContent = name;

    // Crear descripcion
    const desc = document.createElement('p');
    desc.textContent = description;

    // Agregar elementos a la tarjeta
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);

    // Agregar tarjeta al contenedor
    container.appendChild(card);
}

// Manejar formulario de habilidades
document.getElementById('skill-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('skill-name').value;
    const description = document.getElementById('skill-description').value;
    const imageUrl = document.getElementById('skill-image').value // Tomar la URL de la imagen

    if (name && description && imageUrl) {
        createSkillCard(name, description, imageUrl); // Llamar a la funcion con la URL de la imagen
        e.target.reset(); // Reiniciar el formulario
    } else {
        alert ("Por favor, completa todos los campos");
    }
});







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