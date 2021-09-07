// Defino la funcion que voy a usar para guardar el nombre
function capturarNombre(event) {
  // Prevengo que se refresque la pagina, ya que lo hace por default
  event.preventDefault();
  
  // Capturo el nombre del jugador
  const nombre = event.target.nombre.value;
  
  // Si no ingresó nombre, no hago nada
  if (!nombre.length > 0) return;

  // Guardo el nombre en el almacenamiento de la sesión
  sessionStorage.setItem("nombre", nombre);

  // Redirecciono a la pagina de preguntas
  location.replace('./question.html');
};

// Capturo el elemento HTML form, donde tengo el input con el nombre
const infoForm = document.getElementById('info');

//Agrego un 'escuchador' para cuando el usuario clickee en jugar
infoForm.addEventListener('submit', capturarNombre);




