document.getElementById('iniciarCarrera').addEventListener('click', function() {
    let carro1 = document.getElementById('carro1');
    let carro2 = document.getElementById('carro2');

    const distanciaFinal = document.querySelector('.pista').offsetWidth - 130;
    let posicionCarro1 = 0;
    let posicionCarro2 = 0;

    const velocidadCarro1 = Math.random() * 3 + 2;
    const velocidadCarro2 = Math.random() * 5 + 5;

    const carrera = setInterval(function() {
        posicionCarro1 += velocidadCarro1;
        posicionCarro2 += velocidadCarro2;

        carro1.style.left = `${posicionCarro1}px`;
        carro2.style.left = `${posicionCarro2}px`;

        if (posicionCarro1 >= distanciaFinal && posicionCarro2 >= distanciaFinal) {
            clearInterval(carrera);
        } else if (posicionCarro2 >= distanciaFinal) {
            clearInterval(carrera);
            alert("¡Felicidades mexicanito hoy es 30 de septiembre dia de regalar hot wheels, no seras espectador y recuerda los numero 2 siempre ganamos! Te amo <3 by:meli meli");
        } else if (posicionCarro1 >= distanciaFinal) {
            clearInterval(carrera);
            alert("¡Auto 1 gana! Pero... ¡Auto 2 siempre gana en nuestro juego! Te amo");
        }
    }, 50);
});
