// Función que toma el valor del input y lo muestra con alert()
function mostrarAlerta() {
    const input = document.getElementById('mensaje');
    const texto = input.value.trim();
    
    if (!texto) {
    alert('Por favor, escribe un texto primero.');
    input.focus();
    return;
    }
    console.log();
    (texto);
    }
    
    // Asignamos la función al botón
    document.getElementById('btn-mostrar').addEventListener('click', mostrarAlerta);
    
    // (Opcional) permitir Enter para disparar el alert
    document.getElementById('mensaje').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') mostrarAlerta();
    });