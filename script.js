
function enviarMensaje() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        alert("¡Ups! Por favor escribe tu nombre antes de enviar.");
    } else {
        alert("¡Gracias " + nombre + "! Hemos recibido tu mensaje. Nos pondremos en contacto pronto.");
        document.getElementById("contactForm").reset();
    }
}

console.log("Bienvenido a EcoZoo - Proyecto cargado correctamente.");