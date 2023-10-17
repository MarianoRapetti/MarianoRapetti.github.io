/*console.log("Hola mundo desde javascript");

// DOM
// querySelector busca un elemento ejemplo tabla
// querySelectorAll busca +de un elemento
let links = document.querySelectorAll("a");

links.forEach(function(links){
    console.log(links);
});
-----------------------------------------------------
*/

//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function (links) {
  //Agregar un evento click a c/uno de ellos
  links.addEventListener("click", function (evento) {
    evento.preventDefault();
    
    let content = document.querySelector(".content");

   //quitarle la animacion que tiene
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    //agregar clases para animar su salida
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function () {
      location.href = "../index.html";
    }, 600);

    return false;
  });
});
