// Obtener elementos del DOM
const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const section = document.querySelector('section');
const noData = document.querySelector('#no-data');
const dataContainer = document.querySelector('#data-container');

// Manejar el evento de enviar el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = inputName.value;
  const email = inputEmail.value;

  // Guardar los datos en localStorage
  const data = { name, email };
  localStorage.setItem('userData', JSON.stringify(data));

  // Mostrar los datos en la sección
  showData();
});

// Función para mostrar los datos guardados en localStorage
function showData() {
  const data = JSON.parse(localStorage.getItem('userData'));
  if (data) {
    noData.style.display = 'none';
    dataContainer.innerHTML = `
      <p>Nombre: ${data.name}</p>
      <p>Correo electrónico: ${data.email}</p>
      <button id="delete-btn">Borrar datos</button>
    `;
    const deleteBtn = document.querySelector('#delete-btn');
    deleteBtn.addEventListener('click', () => {
      localStorage.removeItem('userData');
      noData.style.display = 'block';
      dataContainer.innerHTML = '';
    });
  } else {
    noData.style.display = 'block';
    dataContainer.innerHTML = '';
  }
}

// Mostrar los datos guardados al cargar la página
showData();
