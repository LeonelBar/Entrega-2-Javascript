// TIENDA DE VIDEOSJUEGOS SUPER-ARCADE

//JUEGOS 
const PRECIO_GTASA = 3500;
const PRECIO_RE4 = 3000;
const PRECIO_GOW = 3200;
const PRECIO_DBZBT3 = 3000;
const PRECIO_GT3 = 3400;
const PRECIO_NFS = 3000;

//VARIABLES
let totalCompra = 0;
let cantidadJuegos = 0;
let opcion = "";

alert("🎮 ¡Bienvenido a Super-Arcade!");

// MENU OPCIONES (con bucle while)
while (opcion !== "7" && opcion !== "ESC" && opcion !== "esc") {
    opcion = prompt(
        "GAME LIST:\n" +
        "1. GTA San Andreas ($" + PRECIO_GTASA + ")\n" +
        "2. Resident Evil 4 ($" + PRECIO_RE4 + ")\n" +
        "3. God of War II ($" + PRECIO_GOW + ")\n" +
        "4. Dragon Ball Z Budokai Tenkaichi 3 ($" + PRECIO_DBZBT3 + ")\n" +
        "5. Gran Turismo 3 ($" + PRECIO_GT3 + ")\n" +
        "6. Need for Speed Carbon ($" + PRECIO_NFS + ")\n" +
        "7. Finalizar compra\n" +
        "🛒 Llevas " + cantidadJuegos + " juego(s)" + " | Total actual: $" + totalCompra
    );


    // CONDICIONALES DENTRO DEL BUCLE 
    if (opcion === "1") {
        totalCompra += PRECIO_GTASA;
        cantidadJuegos++;
        console.log("Agregado: GTA San Andreas($" + PRECIO_GTASA + ")");
        alert("GTA San Andreas agregado al carrito.");

    } else if (opcion === "2") {
        totalCompra += PRECIO_RE4;
        cantidadJuegos++;
        console.log("Agregado: Resident Evil 4($" + PRECIO_RE4 + ")");
        alert("Resident Evil 4 agregado al carrito.");

    } else if (opcion === "3") {
        totalCompra += PRECIO_GOW;
        cantidadJuegos++;
        console.log("Agregado: God of War II($" + PRECIO_GOW + ")");
        alert("God of War II agregado al carrito.");

    } else if (opcion === "4") {
        totalCompra += PRECIO_DBZBT3;
        cantidadJuegos++;
        console.log("Agregado: Dragon Ball Z Budokai 3($" + PRECIO_DBZBT3 + ")");
        alert("Dragon Ball Z Budokai 3 agregado al carrito.");

    } else if (opcion === "5") {
        totalCompra += PRECIO_GT3;
        cantidadJuegos++;
        console.log("Agregado: Gran turismo 3($" + PRECIO_GT3 + ")");
        alert("Gran Turismo 3 agregado al carrito.");

    } else if (opcion === "6") {
        totalCompra += PRECIO_NFS;
        cantidadJuegos++;
        console.log("Agregado: Need For Speed: Carbon($" + PRECIO_NFS + ")");
        alert("Need For Speed: Carbon agreago al carrito")

    } else if (opcion === "7" || opcion === "ESC" || opcion === "esc") {
        console.log("🛒 Finalizando proceso de Compra...");

    } else {
        console.log("⚠️ Opcion no Valida ingresada: " + opcion);
        alert("⚠️ Opcion incorrecta. Por favor ingrese un numero del 1 al 6.");

    }

}

// RESULTADO FINAL (PROCESAMEINTO Y SALIDA AL TERMINAR EL BUCLE)

if (cantidadJuegos > 0) {

    let descuento = 0;

    // Condicional para el que aplicaremos Descuento como combo 
    if (cantidadJuegos >= 3) {
        descuento = totalCompra * 0.15; //Aplicaremos 15% de descuento.
        totalCompra -= descuento;
        console.log("¡Promocion aplicada! 15% de Descuento: -$" + descuento);
    }

    let remusenFinal = "📄 RESUMEN DE COMPRA Super-Arcade:\n" +
        "- Cantidad de juegos: " + cantidadJuegos + "\n" +
        "- Descuento aplicado: $" + descuento + "\n" +
        "- Total a Pagar: $" + totalCompra + "\n\n" +
        "¡Gracias x tu Compra!";

    console.log(remusenFinal);
    alert(remusenFinal);

} else {
    console.log("👋 Saliste del simulador sin comprar ningún juego.");
    alert("👋 No agregaste juegos al carrito.");
}

