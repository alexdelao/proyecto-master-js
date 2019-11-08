$(document).ready(function() {

    // slider
    // if(window.location.href.indexOf('index.html')>-1){//solo funcionen si estas en index.html
    $(function() {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    });

    //   posts

    let posts = [{
                titulo: 'Primer post',
                fecha: 'Fecha de publicacion: ' + moment().format('l'),
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consequatur rem doloribus dolore, iusto odio dolor ducimus, ipsam dolores non architecto iste, ad quam facere obcaecati explicabo voluptatem? Quibusdam, autem. Asperiores in optio, odit suscipit perspiciatis fuga qui tenetur similique quod et nostrum neque quos a cumque ducimus aperiam sed quae ab! Mollitia eos fugit illo in accusamus ut dolorum. Esse alias porro quidem ducimus explicabo cum amet facere est harum neque libero, ullam eos nostrum itaque, corporis nihil eaque vel id sed veritatis, eveniet obcaecati inventore. Similique, deleniti in? \n Dolore repellat excepturi sit voluptates velit praesentium fuga assumenda eum nemo nam corporis quae quibusdam ab cum culpa enim, ipsa, ratione vel animi magnam? Cupiditate facilis molestiae voluptatem ut neque!'
            },
            {
                titulo: 'Segundo post',
                fecha: 'Fecha de publicacion: ' + moment().format('l'),
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consequatur rem doloribus dolore, iusto odio dolor ducimus, ipsam dolores non architecto iste, ad quam facere obcaecati explicabo voluptatem? Quibusdam, autem. Asperiores in optio, odit suscipit perspiciatis fuga qui tenetur similique quod et nostrum neque quos a cumque ducimus aperiam sed quae ab! Mollitia eos fugit illo in accusamus ut dolorum. Esse alias porro quidem ducimus explicabo cum amet facere est harum neque libero, ullam eos nostrum itaque, corporis nihil eaque vel id sed veritatis, eveniet obcaecati inventore. Similique, deleniti in? \n Dolore repellat excepturi sit voluptates velit praesentium fuga assumenda eum nemo nam corporis quae quibusdam ab cum culpa enim, ipsa, ratione vel animi magnam? Cupiditate facilis molestiae voluptatem ut neque!'
            },
            {
                titulo: 'Tercer post',
                fecha: 'Fecha de publicacion: ' + moment().format('Do MMM YY'),
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consequatur rem doloribus dolore, iusto odio dolor ducimus, ipsam dolores non architecto iste, ad quam facere obcaecati explicabo voluptatem? Quibusdam, autem. Asperiores in optio, odit suscipit perspiciatis fuga qui tenetur similique quod et nostrum neque quos a cumque ducimus aperiam sed quae ab! Mollitia eos fugit illo in accusamus ut dolorum. Esse alias porro quidem ducimus explicabo cum amet facere est harum neque libero, ullam eos nostrum itaque, corporis nihil eaque vel id sed veritatis, eveniet obcaecati inventore. Similique, deleniti in? \n Dolore repellat excepturi sit voluptates velit praesentium fuga assumenda eum nemo nam corporis quae quibusdam ab cum culpa enim, ipsa, ratione vel animi magnam? Cupiditate facilis molestiae voluptatem ut neque!'
            }
        ]
        // Agregando los post al html
    for (let post of posts) {
        let articulo = `
            <article class="post">
                        <h2>${post.titulo}</h2>
                        <span><p>${post.fecha}</p></span>
                        <p class='descripcion'>
                            ${post.contenido}
                        </p>
                        <a href="#" class='boton'>Leer mas...</a>
                    </article>
            `
        $('.posts').append(articulo);
    }
    // }
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


});