// Selecciona todos los elementos con la clase "formcontato__label" y "formcontato__input"
const labels = document.querySelectorAll(".formcontato__label");
const inputs = document.querySelectorAll(".formcontato__input");

// Itera sobre cada input
inputs.forEach((input, index) => {
    // Añade un event listener para el evento 'click' a cada input
    input.addEventListener('click', () => {
        // Quita la clase "active" de todos los labels
        labels.forEach(label => {
            label.classList.remove("formcontato__label_active");
        });
        // Añade la clase "active" al label correspondiente al input actual
        labels[index].classList.add("formcontato__label_active");
    });
});


document.getElementById("currentYear").textContent = new Date().getFullYear();




//Haz tú validación en javascript acá

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    
    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
      alert("Por favor, completa todos los campos.");
      return false;
    }
}
