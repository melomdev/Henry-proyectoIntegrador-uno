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

// Crear tarjeta de actividades
function createActivityCard(name, description, imageUrl) {
    const container = document.getElementById('activities-container');
    
    const card = document.createElement('div');
    card.classList.add('card');

    // Crear imagen
    const img = document.createElement('img');
    img.src = imageUrl; // Asignar la URL de la imagen
    img.alt = name || "Imagen de la actividad"; // Texto alternativo
    img.onerror = function () {
        this.src = "https://via.placeholder.com/150"; // Imagen predeterminada
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

// Funcion para crear tarjetas predeterminadas
function createDefaultActivityCards() {
    // Tarjetas predeterminadas
    createActivityCard(
        "Baloncesto",
        "Disfruto de jugar baloncesto solo como entrenamiento personal y/o en equipo.",
        "https://sialdeporte.com/wp-content/uploads/2018/02/como-se-juega-el-basquetbol-1-1024x640.jpg"
    );
    createActivityCard(
        "VideoGames",
        "Me apasiona jugar video juegos superando niveles y desafios, ganar premios y desbloquer misiones.",
        "https://media.gq.com.mx/photos/5f06154185180fb067835271/16:9/w_2560%2Cc_limit/GettyImages-1125585679.jpg"
    );
}

// Manejar formulario de actividades
document.getElementById('activity-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Capturar los valores de los campos
    const name = document.getElementById('activity-name').value;
    const description = document.getElementById('activity-description').value;
    const imageUrl = document.getElementById('activity-image').value;

    // Verificar que todos los campos esten llenos
    if (name && description && imageUrl) {
        createActivityCard(name, description, imageUrl); // Crear las tarjetas de actividades
        e.target.reset(); // Reiniciar formulario
    } else {
        alert ("Por favor, completa todos los campos")
    }
});

// Llamar a la funcion para crear las tarjetas oredeterminadas al cargar la website
createDefaultActivityCards();







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