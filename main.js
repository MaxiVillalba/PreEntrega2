function ComprobarEdad() {
    const edad = parseInt(prompt("Por favor, ingresa tu edad:"));
    let EsMayor = false;

    for (let i = 0; i < 1; i++) {
        if (edad >= 18) {
            EsMayor = true;
        }
    }

    if (EsMayor) {
        const nombre = prompt("Eres mayor de edad. Indícanos tu nombre:");
        alert("¡Te damos la bienvenida a Turister " + nombre + "!");

        let opcion;

        alert("A continuación " + nombre + " te indicaremos los paquetes que tenemos disponibles y nuestros costos de financiación");

        do {
            opcion = parseInt(prompt("Menú de opciones\n\n1. Dubai\n2. Paris\n3. Londres\n4. Rio de Janeiro\n5. Calcular valor de financiación con nuestro recargo del 71%\n\nPara salir, ingrese 0"));

            let precio;
            let mensaje;

            switch (opcion) {
                case 1:
                    precio = 3500;
                    mensaje = "Dubai 2024 - Vuelo + Hotel:\n\n14 días, desayuno incluido\nOctubre - Noviembre\nUSD " + precio + " (Base Doble)";
                    break;
                case 2:
                    precio = 3300;
                    mensaje = "Paris 2025 - Vuelo + Hotel:\n\n15 días, desayuno incluido\nMarzo - Abril\nUSD " + precio + " (Base Doble)";
                    break;
                case 3:
                    precio = 3700;
                    mensaje = "Londres 2025 - Vuelo + Hotel:\n\n12 días, desayuno incluido\nFebrero - Abril\nUSD " + precio + " (Base Doble)";
                    break;
                case 4:
                    precio = 2500;
                    mensaje = "Rio 2024/2025 - Vuelo + Hotel:\n\n14 días, desayuno incluido\nDiciembre - Abril\nUSD " + precio + " (Base Doble)";
                    break;
                case 5:
                    const ValorAFinanciar = parseFloat(prompt("Ingrese el monto a financiar en 12 cuotas"));
                    const valorTotal = (ValorAFinanciar * 1.71).toFixed(2);
                    alert("El valor total de financiación es de " + valorTotal);
                    continue;
                default:
                    if (opcion !== 0) {
                        alert("Opción inválida. Ingresa una opción válida");
                    }
                    continue;
            }

            if (opcion >= 1 && opcion <= 5) {
                const cuotas6 = (precio * 1.71 / 6).toFixed(2);
                const cuotas12 = (precio * 1.71 / 12).toFixed(2);
                mensaje += `\n\nCosto en 6 cuotas: USD ${cuotas6} por cuota.\nCosto en 12 cuotas: USD ${cuotas12} por cuota.`;
                alert(mensaje);
            }

        } while (opcion !== 0);

    } else {
        alert("Eres menor de 18 años. No puedes avanzar.");
    }
}

ComprobarEdad();


