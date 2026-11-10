// Simulamos la base de datos directamente en un arreglo (ya no necesitas el JSON)
const peliculas = [
    { titulo: "Intensa-Mente", genero: "Comedia", edad_min: 2, edad_max: 12, desc: "Las emociones de una niña trabajan horas extras." },
    { titulo: "Coco", genero: "Musical", edad_min: 2, edad_max: 12, desc: "Un niño viaja a la Tierra de los Muertos para descubrir su historia." },
    { titulo: "Toy Story", genero: "Acción", edad_min: 2, edad_max: 12, desc: "Los juguetes cobran vida cuando los humanos no están." },
    
    { titulo: "Spider-Man: A través del Spider-Verso", genero: "Acción", edad_min: 13, edad_max: 17, desc: "Miles Morales se lanza al multiverso." },
    { titulo: "Chicas Pesadas", genero: "Comedia", edad_min: 13, edad_max: 17, desc: "Las reglas sociales de la preparatoria llevadas al extremo." },
    { titulo: "La Sociedad de los Poetas Muertos", genero: "Drama", edad_min: 13, edad_max: 17, desc: "Un profesor inspira a sus alumnos con poesía." },
    
    { titulo: "El Padrino", genero: "Crimen", edad_min: 18, edad_max: 100, desc: "El patriarca de una dinastía transfiere el control a su hijo." },
    { titulo: "Pulp Fiction", genero: "Crimen", edad_min: 18, edad_max: 100, desc: "Historias entrelazadas de mafiosos y boxeadores." },
    { titulo: "El Club de la Pelea", genero: "Drama", edad_min: 18, edad_max: 100, desc: "Un oficinista y un vendedor forman un club clandestino." },
    { titulo: "El Lobo de Wall Street", genero: "Comedia", edad_min: 18, edad_max: 100, desc: "El alocado ascenso y caída del corredor de bolsa Jordan Belfort." }
];

function recomendar(generoSeleccionado) {
    const edadInput = document.getElementById('edad').value;
    const resultadoDiv = document.getElementById('resultado');
    const tituloUI = document.getElementById('titulo-pelicula');
    const descUI = document.getElementById('desc-pelicula');

    // Validar que haya puesto una edad
    if (!edadInput || edadInput < 2) {
        alert("Por favor, primero ingresa tu edad en la casilla de arriba.");
        return;
    }

    const edad = parseInt(edadInput);

    // Buscar en la lista de películas la que coincida con la edad y el género
    const opciones = peliculas.filter(p => 
        edad >= p.edad_min && 
        edad <= p.edad_max && 
        p.genero === generoSeleccionado
    );

    // Mostrar el cuadro de resultados
    resultadoDiv.className = "resultado-visible";

    // Si encontró una película, la muestra. Si no, avisa que no hay.
    if (opciones.length > 0) {
        // Seleccionamos la primera coincidencia que encuentre
        tituloUI.textContent = opciones[0].titulo;
        descUI.textContent = opciones[0].desc;
    } else {
        tituloUI.textContent = "¡Ups!";
        descUI.textContent = "No tenemos películas de este género para tu edad. Intenta con otro botón.";
    }
}