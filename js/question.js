
function CargarNombreDeUsuario() {
  // Capturo el elemento con id username, donde voy a mostar el nombre
  const usernameElement = document.getElementById('username');
  
  // Asigno el nombre de usuario al elemento seleccionado
  usernameElement.innerHTML = sessionStorage['nombre'];
}


function CargarPreguntaYOpciones() {
  let pregunta = "";
  let opcion1 = "";
  let opcion2 = "";
  let opcion3 = "";
  let opcion4 = "";
  
  pregunta = "Cual es la capital de Argentina?";
  opcion1 = "Buenos Aires";
  opcion2 = "Rosario";
  opcion3 = "Mar del Plata";
  opcion4 = "Ushuaia";


  document.getElementById('pregunta').innerHTML = pregunta;
  document.getElementById('opcion-1').innerHTML = opcion1;
  document.getElementById('opcion-2').innerHTML = opcion2;
  document.getElementById('opcion-3').innerHTML = opcion3;
  document.getElementById('opcion-4').innerHTML = opcion4;
  
}

function CargarDatos() {
  CargarNombreDeUsuario();
  CargarPreguntaYOpciones();
}

// Agrego un escuchador para que cuando se cargue la pagina, cargue todo lo necesario
window.addEventListener('load', () => CargarDatos());

