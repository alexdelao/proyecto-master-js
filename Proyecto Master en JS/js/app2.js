$(document).ready(function() {

    let temacss = $('#theme');

    //colores del tema
    //con jquery
    $('.rojo').click(() => {
        temacss.attr('href', 'css/rojo.css');
        localStorage.clear();
        localStorage.setItem('tema', 'rojo.css');
    });
    $('.verde').click(() => {
        temacss.attr('href', 'css/verde.css');
        localStorage.clear();
        localStorage.setItem('tema', 'verde.css');
    });
    $('.azul').click(() => {
        temacss.attr('href', 'css/azul.css');
        localStorage.clear();
        localStorage.setItem('tema', 'azul.css');
    });

    let = colorTema = localStorage.getItem('tema');
    if (colorTema == 'rojo.css')
        temacss.attr('href', 'css/rojo.css');
    if (colorTema == 'verde.css')
        temacss.attr('href', 'css/verde.css');
    if (colorTema == 'azul.css')
        temacss.attr('href', 'css/azul.css');


    //con javascript
    let eltema = document.querySelector('#theme');
    document.querySelector('.azul').addEventListener('click', () => {
        eltema.setAttribute('href', 'css/azul.css');
    })


    //ir hasta arriba de la pagina
    $('.tope').click((e) => {
        e.preventDefault(); //precine que el evento no haga nada mas

        $('html, body').animate({ //selecciona el body y con animate
            scrollTop: 0 //se le pasan dos parametros la funcion y el tiepo
        }, 500);
    });

    //login falso

    $('.login form').submit(() => { //seleccionamos el formulario
        let form_name = $('#form_name').val(); //guardamos el nombre
        localStorage.setItem('form_name', form_name); //se lo pasamos al local storage
    });

    let nombre = localStorage.getItem('form_name'); //recuperamos el nombre del localstorage

    if (nombre != null && nombre != 'undefined') {
        $('.acerca-de p').html('<strong>Bievenido, ' + nombre + '</strong>');
        $('.acerca-de p').append('<br><a href="#" class="logout">Cerrar sesion </a>')
        $('.login').hide(); // escondemos el formularop

        $('.logout').click(() => {
            localStorage.clear(); //booramos todo del localstorage
            location.reload(); //y recargamos
        });
    }

    //el acordeon si estamos en about
    if (window.location.href.indexOf('about') > -1) {
        $('.acordeon').accordion();

    }

    //el reloj si estamos en reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(() => {
            let reloj = moment().format('hh:mm:ss');
            $('.reloj').html(reloj);
        }, 1000);

    }


    //jquery plugin validator para formulario

    if (window.location.href.indexOf('contacto') > -1) {

        $('form input[name="fecha"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopError: true
        });
    }

});