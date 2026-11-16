// Referencias a los inputs
let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let direccion = document.getElementById("direccion");

// Referencias a los elementos del HTML
let confirmaciones = document.querySelector(".confirmaciones");
let botonCargar = document.getElementById("cargar");
let botonRefrescar = document.getElementById("refrescar");
let lista = document.querySelector("ul");

// Números de gestión utilizados
let numerosGestion = new Set();

// Clase Pedido
class Pedido {

    constructor(titulo, autor, direccion, numero) {
        this.cargarItems(titulo, autor, direccion, numero);
    }

    cargarItems(titulo, autor, direccion, numero) {
        this.crearDiv(titulo, autor, direccion, numero);
    }

    crearDiv(titulo, autor, direccion, numero) {

        let item = document.createElement("li");

        item.textContent = "✓ El libro titulado " + titulo +
            ", del autor " + autor +
            " será llevado a la dirección " + direccion +
            ". Número de gestión: " + numero;

        lista.appendChild(item);
    }
}

// Botón CARGAR
botonCargar.addEventListener("click", function() {

    // Comprobar que todos los campos estén completos
    if (titulo.value.trim() === "" ||
        autor.value.trim() === "" ||
        direccion.value.trim() === "") {

        alert("Por favor, completá todos los campos.");
        return;
    }

    // Máximo de 5 pedidos
    if (lista.children.length >= 5) {
        alert("Alcanzaste el máximo de 5 pedidos. Presioná REFRESCAR para borrar la lista.");
        return;
    }

    // Generar número de gestión único
    let numero;

    do {
        numero = Math.floor(10000 + Math.random() * 90000);
    } while (numerosGestion.has(numero));

    numerosGestion.add(numero);

    // Crear un nuevo pedido
    let nuevoPedido = new Pedido(
        titulo.value,
        autor.value,
        direccion.value,
        numero
    );

    // Limpiar los inputs
    titulo.value = "";
    autor.value = "";
    direccion.value = "";

});

// Botón REFRESCAR
botonRefrescar.addEventListener("click", function() {

    lista.innerHTML = "";
    numerosGestion.clear();

});