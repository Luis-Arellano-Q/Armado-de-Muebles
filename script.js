// codigo de la barra de navegacion para que aparezca y desaparezca
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
     $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", (e) => {
        if (!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
        });
})(document); 

//codigo de efecto de maquina de escribir con la libreria typed.js

const typed = new Typed('.typed', {
    // strings:[
    //     '<i class="services">armado</i>', 
    //     '<i class="services">desarmado</i>',
    //     '<i class="services">reparación</i>', 
    //     '<i class="services">fabricación</i>'
    // ],
    stringsElement: '#typed-strings', //ID del elemento que contiene las cadenas de texto a mostrar
    typeSpeed: 75, //velocidad en milisegundos para poner una letra
    startDelay: 300, //tiempo de inicio de la animacion
    backSpeed: 75, //velocidad en milisegundos para borrar una letra
    smartBackspace: true, //rescribe solamente las palabras que sean nuevas en una cadena de texto
    shuffle: false, //valores booleanos, false respeta el orden de los indices y true para que sea ramdon.
    backDelay: 1500, //tiempo despues de cada palabra
    loop: true, //repetir el array (en este caso 'strings')
    loopCount: false, //iteraciones (en numeros para una cantidad espoecifica)(false=infinito)
    showCursor: true, // mostrar cursor palpitando
    cursorChar: '|', //caracter para el cursor
    cotentType: 'html', //'html' o 'null' para texto sin formato 
})