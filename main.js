alert("Turister.com - tu mejor opción para tus vacaciones");

let fechadehoy = new Date("2024-08-01");
fechadehoy.toLocaleString();

class Destino {
    constructor(destino, duracionyhotel, fechas, precio) {
        this.destino = destino;
        this.duracionyhotel = duracionyhotel;
        this.fechas = fechas;
        this.precio = precio;
    }
}

const destinos = [
    new Destino("Dubai", "14 días, desayuno incluido", "Octubre - Noviembre", 3500),
    new Destino("Paris", "15 días, desayuno incluido", "Marzo - Abril", 3300),
    new Destino("Londres", "12 días, desayuno incluido", "Febrero - Abril", 3700),
    new Destino("Rio de Janeiro", "14 días, desayuno incluido", "Diciembre - Abril", 2500)
];

function solicitarEdad() {
    return parseInt(prompt("Por favor, ingresa tu edad:"));
}

function verificarMayorDeEdad(edad) {
    return edad >= 18;
}

function solicitarNombre() {
    return prompt("Eres mayor de edad. Indícanos tu nombre:");
}

function mostrarMensajeBienvenida(nombre) {
    alert("¡Te damos la bienvenida a Turister " + nombre + "!");
}

function mostrarMenu(nombre) {
    alert("A continuación " + nombre + " te indicaremos los paquetes que tenemos disponibles y nuestros costos de financiación");
}

function seleccionarOpcion() {
    return parseInt(prompt("Menú de opciones\n\n1. Dubai\n2. Paris\n3. Londres\n4. Rio de Janeiro\n5. Calcular valor de financiación con nuestro recargo del 71%\n\nPara salir, ingrese 0"));
}

function mostrarInformacionDestino(destinoSeleccionado) {
    let mensaje = `${destinoSeleccionado.destino} 2024/2025 - Vuelo + Hotel:\n\n${destinoSeleccionado.duracionyhotel}\n${destinoSeleccionado.fechas}\nUSD ${destinoSeleccionado.precio} (Base Doble)`;

    const cuotas6 = (destinoSeleccionado.precio * 1.71 / 6).toFixed(2);
    const cuotas12 = (destinoSeleccionado.precio * 1.71 / 12).toFixed(2);
    mensaje += `\n\nCosto en 6 cuotas: USD ${cuotas6} por cuota.\nCosto en 12 cuotas: USD ${cuotas12} por cuota.`;
    alert(mensaje);
}

function calcularFinanciacion() {
    const ValorAFinanciar = parseFloat(prompt("Ingrese el monto a financiar en 12 cuotas"));
    const valorTotal = (ValorAFinanciar * 1.71).toFixed(2);
    alert("El valor total de financiación es de " + valorTotal);
}

function iniciarProceso() {
    const edad = solicitarEdad();

    if (verificarMayorDeEdad(edad)) {
        const nombre = solicitarNombre();
        mostrarMensajeBienvenida(nombre);
        mostrarMenu(nombre);

        let opcion;
        do {
            opcion = seleccionarOpcion();

            switch (opcion) {
                case 1:
                case 2:
                case 3:
                case 4:
                    const destinoSeleccionado = destinos[opcion - 1];
                    mostrarInformacionDestino(destinoSeleccionado);
                    break;
                case 5:
                    calcularFinanciacion();
                    break;
                default:
                    if (opcion !== 0) {
                        alert("Opción inválida. Ingresa una opción válida");
                    }
                    break;
            }
        } while (opcion !== 0);
    } else {
        alert("Eres menor de 18 años. No puedes avanzar.");
    }
}

iniciarProceso();





